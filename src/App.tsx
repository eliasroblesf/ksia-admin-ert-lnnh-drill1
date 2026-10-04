/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { scenarios23, Scenario23 } from './data/scenarios';
import { translations, LanguageMode } from './data/translations';
import { 
  Building2, 
  Clock, 
  Send, 
  ChevronRight, 
  RefreshCcw,
  CheckCircle2,
  Download,
  Info,
  Share2,
  Volume2,
  VolumeX,
  HelpCircle,
  Search,
  Sparkles,
  Copy,
  Check,
  User,
  CreditCard,
  UserCheck,
  ArrowLeft,
  Edit3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import confetti from 'canvas-confetti';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';

type AppStage = 'SPLASH' | 'CHOICE' | 'READING' | 'REPORTING' | 'RESULT';
type OfficeFilter = 'ALL' | 'HR' | 'FINANCE' | 'IT' | 'EXECUTIVE' | 'GROUND';

export default function App() {
  const [lang, setLang] = useState<LanguageMode>('en');
  
  // Student identification state with local storage persistence
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('ksia_student_name') || '';
  });
  const [badgeNumber, setBadgeNumber] = useState<string>(() => {
    return localStorage.getItem('ksia_badge_number') || '';
  });
  const [splashError, setSplashError] = useState<string>('');

  // Initial stage: show splash screen if student info is missing, or start at splash by default
  const [stage, setAppStage] = useState<AppStage>(() => {
    const savedName = localStorage.getItem('ksia_student_name');
    const savedBadge = localStorage.getItem('ksia_badge_number');
    return (savedName && savedBadge) ? 'CHOICE' : 'SPLASH';
  });

  const [selectedScenario, setSelectedScenario] = useState<Scenario23 | null>(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [filter, setFilter] = useState<OfficeFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  
  // User answers
  const [userL, setUserL] = useState('');
  const [userN_Nature, setUserN_Nature] = useState('');
  const [userN_Numbers, setUserN_Numbers] = useState('');
  const [userH, setUserH] = useState('');
  
  // Time tracking
  const readingStartTimeRef = React.useRef(0);
  const reportingStartTimeRef = React.useRef(0);
  const [readingDuration, setReadingDuration] = useState(0);
  const [reportingDuration, setReportingDuration] = useState(0);

  // Active translation set
  const t = translations[lang === 'ar' ? 'ar' : 'en'];
  const isRTL = lang === 'ar';

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (lang === 'ar') {
      return mins > 0 ? `${mins} دقيقة و ${secs} ثانية` : `${secs} ثانية`;
    }
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  // Handle student splash screen submission
  const handleStartFromSplash = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = studentName.trim();
    const cleanBadge = badgeNumber.trim();
    
    if (!cleanName || !cleanBadge) {
      setSplashError(t.studentRequiredAlert);
      return;
    }
    
    setSplashError('');
    localStorage.setItem('ksia_student_name', cleanName);
    localStorage.setItem('ksia_badge_number', cleanBadge);
    setAppStage('CHOICE');
  };

  // Switch/change trainee
  const handleChangeTrainee = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setAppStage('SPLASH');
  };

  // Speech synthesis for non-native speakers practicing listening
  const handleSpeak = (text: string, voiceLang: 'en' | 'ar') => {
    if (!('speechSynthesis' in window)) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLang === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Cancel speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const startScenario = (scenario: Scenario23) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setSelectedScenario(scenario);
    setAppStage('READING');
    setTimeLeft(120);
    setIsTimerRunning(true);
    // Reset answers
    setUserL('');
    setUserN_Nature('');
    setUserN_Numbers('');
    setUserH('');
    
    readingStartTimeRef.current = Date.now();
    reportingStartTimeRef.current = 0;
  };

  const handleNextFromReading = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    const now = Date.now();
    const duration = readingStartTimeRef.current > 0 ? Math.round((now - readingStartTimeRef.current) / 1000) : 0;
    setReadingDuration(duration);
    setAppStage('REPORTING');
    reportingStartTimeRef.current = now;
    setTimeLeft(300); // 5 minutes for reporting
    setIsTimerRunning(true);
  }, []);

  const handleSubmit = useCallback(() => {
    const now = Date.now();
    const duration = reportingStartTimeRef.current > 0 ? Math.round((now - reportingStartTimeRef.current) / 1000) : 0;
    setReportingDuration(duration);
    setAppStage('RESULT');
    setIsTimerRunning(false);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0f766e', '#14b8a6', '#0284c7']
    });
  }, []);

  const shareWhatsApp = () => {
    if (!selectedScenario) return;
    const title = lang === 'ar' ? selectedScenario.titleAr : selectedScenario.title;
    const text = `*KSIA ERT Topic 2.3 Report (Airport Admin Offices)*
*Trainee:* ${studentName.trim() || 'N/A'}
*Badge ID:* ${badgeNumber.trim() || 'N/A'}
*Incident #${selectedScenario.id}:* ${title}
*Date:* ${new Date().toLocaleString()}

*Drill Performance:*
- Reading Phase: ${formatDuration(readingDuration)}
- Reporting Phase: ${formatDuration(reportingDuration)}

*L-N-N-H Report:*
*L - Location:* ${userL}
*N - Nature:* ${userN_Nature}
*N - Numbers:* ${userN_Numbers}
*H - Hazards:* ${userH}`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    if (!selectedScenario) return;
    const reportText = `[KSIA ERT Administrative Drill - Topic 2.3]
Trainee: ${studentName.trim()} | Badge #: ${badgeNumber.trim()}
Incident #${selectedScenario.id}: ${selectedScenario.title}
L (Location): ${userL}
N (Nature): ${userN_Nature}
N (Numbers): ${userN_Numbers}
H (Hazards): ${userH}
Time: Reading ${formatDuration(readingDuration)} | Reporting ${formatDuration(reportingDuration)}`;

    navigator.clipboard.writeText(reportText).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    });
  };

  useEffect(() => {
    let timer: number;
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      if (stage === 'READING') {
        handleNextFromReading();
      } else if (stage === 'REPORTING') {
        handleSubmit();
      }
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft, stage, handleNextFromReading, handleSubmit]);

  const resetApp = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    // Return to choice screen if name/badge is already set, or splash if not
    if (studentName.trim() && badgeNumber.trim()) {
      setAppStage('CHOICE');
    } else {
      setAppStage('SPLASH');
    }
    setSelectedScenario(null);
    setIsTimerRunning(false);
  };

  // Filtered scenarios
  const filteredScenarios = useMemo(() => {
    return scenarios23.filter(sc => {
      const matchesSearch = 
        sc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.titleAr.includes(searchQuery) ||
        sc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.floor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.scenarioText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.scenarioTextAr.includes(searchQuery) ||
        sc.id.toString() === searchQuery.trim();

      if (!matchesSearch) return false;

      if (filter === 'ALL') return true;
      if (filter === 'HR') return sc.department.includes('Human Resources') || sc.department.includes('Training');
      if (filter === 'FINANCE') return sc.department.includes('Finance') || sc.department.includes('Procurement');
      if (filter === 'IT') return sc.department.includes('IT');
      if (filter === 'EXECUTIVE') return sc.department.includes('Executive') || sc.department.includes('Legal') || sc.department.includes('Audit');
      if (filter === 'GROUND') return sc.department.includes('Archive') || sc.department.includes('Lobby') || sc.department.includes('Mailroom') || sc.department.includes('Facilities') || sc.department.includes('Transit');
      return true;
    });
  }, [filter, searchQuery]);

  const exportPDF = useCallback(() => {
    if (!selectedScenario) return;
    
    const doc = new jsPDF();
    const margin = 20;
    let y = 20;

    // Header bar
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, 210, 44, 'F');
    doc.setTextColor(255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('KSIA ERT Readiness Drill Report', margin, 20);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Topic 2.3: 4-Part Radio Report (L-N-N-H) • Airport Administrative Offices', margin, 28);
    doc.setFontSize(9);
    doc.text('King Salman International Airport • Emergency Response Team Training', margin, 36);

    y = 56;
    
    // Official Trainee Identification Box
    doc.setFillColor(241, 245, 249); // slate-100
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, 170, 24, 2, 2, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`TRAINEE / OFFICER: ${studentName.trim().toUpperCase() || 'NOT SPECIFIED'}`, margin + 5, y + 8);
    doc.text(`AIRPORT BADGE ID: ${badgeNumber.trim().toUpperCase() || 'N/A'}`, margin + 5, y + 16);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);
    doc.text(`DATE: ${new Date().toLocaleString()}`, margin + 110, y + 8);
    doc.text(`FACILITY: Admin Building`, margin + 110, y + 16);

    y += 32;

    // Scenario Details
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text(`Incident #${selectedScenario.id}: ${selectedScenario.title}`, margin, y);
    y += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Department: ${selectedScenario.department} | Floor: ${selectedScenario.floor}`, margin, y);
    y += 5;
    doc.text(`Reading Duration: ${formatDuration(readingDuration)} | Reporting Duration: ${formatDuration(reportingDuration)}`, margin, y);
    y += 10;

    // User Report Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, 170, 68, 3, 3, 'FD');
    
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('OFFICIAL RADIO BROADCAST TRANSMISSION (L-N-N-H)', margin + 5, y + 9);

    const userSections = [
      { tag: 'L (Location):', val: userL || 'No location provided.' },
      { tag: 'N (Nature):', val: userN_Nature || 'No nature provided.' },
      { tag: 'N (Numbers):', val: userN_Numbers || 'No numbers provided.' },
      { tag: 'H (Hazards):', val: userH || 'No hazards provided.' }
    ];

    let subY = y + 17;
    doc.setFontSize(9);
    userSections.forEach(item => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(item.tag, margin + 5, subY);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const lines = doc.splitTextToSize(item.val, 130);
      doc.text(lines, margin + 35, subY);
      subY += Math.max(lines.length * 4.2, 6) + 3;
    });

    y = subY + 12;

    // Standard Facilitator Key
    doc.setFillColor(240, 253, 250); // teal-50
    doc.setDrawColor(153, 246, 228); // teal-200
    doc.roundedRect(margin, y, 170, 72, 3, 3, 'FD');

    doc.setTextColor(15, 118, 110); // teal-800
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('FACILITATOR EXTRACTION KEY (PLAIN LANGUAGE BENCHMARK)', margin + 5, y + 9);

    const keySections = [
      { tag: 'L (Location):', val: selectedScenario.extractionKey.l },
      { tag: 'N (Nature):', val: selectedScenario.extractionKey.n_nature },
      { tag: 'N (Numbers):', val: selectedScenario.extractionKey.n_numbers },
      { tag: 'H (Hazards):', val: selectedScenario.extractionKey.h }
    ];

    subY = y + 17;
    doc.setFontSize(9);
    keySections.forEach(item => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 118, 110);
      doc.text(item.tag, margin + 5, subY);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(19, 78, 74);
      const lines = doc.splitTextToSize(item.val, 130);
      doc.text(lines, margin + 35, subY);
      subY += Math.max(lines.length * 4.2, 6) + 4;
    });

    // Signature Block / Footer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`Candidate: ${studentName.trim()} (${badgeNumber.trim()}) • King Salman International Airport ERT Topic 2.3`, margin, 285);

    const safeBadge = badgeNumber.trim().replace(/[^a-zA-Z0-9_-]/g, '') || 'REPORT';
    doc.save(`KSIA_Report_${safeBadge}_Scenario_${selectedScenario.id}.pdf`);
  }, [selectedScenario, studentName, badgeNumber, userL, userN_Nature, userN_Numbers, userH, readingDuration, reportingDuration, formatDuration]);

  // Insert helper phrase into answer box
  const insertPhrase = (field: 'L' | 'N1' | 'N2' | 'H', phrase: string) => {
    if (field === 'L') {
      setUserL(prev => prev ? `${prev}, ${phrase}` : phrase);
    } else if (field === 'N1') {
      setUserN_Nature(prev => prev ? `${prev}, ${phrase}` : phrase);
    } else if (field === 'N2') {
      setUserN_Numbers(prev => prev ? `${prev}, ${phrase}` : phrase);
    } else if (field === 'H') {
      setUserH(prev => prev ? `${prev}, ${phrase}` : phrase);
    }
  };

  return (
    <div 
      className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100 flex flex-col ${isRTL ? 'font-arabic' : 'font-sans'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <OfflineIndicator />
      
      {/* Top Navigation & Language Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo & Branding */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={resetApp}
            title={lang === 'ar' ? 'العودة للصفحة الرئيسية' : 'Return to Home'}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md group-hover:bg-teal-700 transition-colors">
              <Building2 className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-950 tracking-tight">KSIA ERT</span>
                <span className="hidden sm:inline-flex rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-800 border border-teal-200">
                  {t.badgeAdmin}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 tracking-wide mt-0.5">
                {lang === 'ar' ? 'مكاتب المطار الإدارية • الموضوع 2.3' : 'Airport Administrative Offices • Topic 2.3'}
              </p>
            </div>
          </div>

          {/* Right Controls: Student Badge Chip, Language Selector, Guide, PWA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Student ID badge chip if registered */}
            {stage !== 'SPLASH' && studentName && (
              <button
                onClick={handleChangeTrainee}
                className="flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50/90 px-2.5 py-1.5 text-xs font-bold text-teal-900 hover:bg-teal-100 transition-colors shadow-2xs group"
                title={lang === 'ar' ? 'انقر لتعديل بيانات المتدرب' : 'Click to change trainee name/badge'}
              >
                <UserCheck className="w-3.5 h-3.5 text-teal-700" />
                <span className="truncate max-w-[120px] sm:max-w-[150px]">{studentName}</span>
                <span className="text-[10px] text-teal-600 bg-teal-200/60 px-1.5 py-0.2 rounded font-mono font-bold">
                  {badgeNumber}
                </span>
                <Edit3 className="w-3 h-3 text-teal-600 opacity-60 group-hover:opacity-100 ml-0.5" />
              </button>
            )}

            {/* Guide Button */}
            <button
              onClick={() => setShowGuideModal(true)}
              className="hidden lg:flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>{t.lnnhGuideBtn}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setLang('en')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="English (Primary)"
              >
                EN
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  lang === 'ar' ? 'bg-white text-slate-900 shadow-xs font-arabic' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="العربية"
              >
                عربي
              </button>
              <button
                onClick={() => setLang('bilingual')}
                className={`hidden sm:inline-flex rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  lang === 'bilingual' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Bilingual / ثنائي اللغة"
              >
                EN / عربي
              </button>
            </div>

            <PWAInstallButton />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 flex-1 w-full">
        <AnimatePresence mode="wait">
          {/* STAGE 0: SPLASH SCREEN / STUDENT REGISTRATION */}
          {stage === 'SPLASH' && (
            <motion.div
              key="splash"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="mx-auto max-w-2xl py-4 sm:py-8 space-y-6"
            >
              {/* Badging Splash Card */}
              <div className="rounded-3xl border-2 border-slate-900 bg-white p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
                {/* Visual Accent Banner */}
                <div className="absolute top-0 inset-x-0 h-3 bg-linear-to-r from-teal-500 via-slate-900 to-teal-600" />

                {/* Header with Airport Security Emblem */}
                <div className="text-center space-y-3 pt-2">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-slate-900 to-teal-950 text-white shadow-xl border-4 border-white">
                    <CreditCard className="w-10 h-10 text-teal-400" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 border border-teal-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.badgeAdmin}</span>
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                      {t.splashTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
                      {t.splashSubtitle}
                    </p>
                  </div>
                </div>

                {/* Dynamic Preview of the Trainee Airport Badge Card */}
                <div className="rounded-2xl border-2 border-slate-200 bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 p-5 text-white shadow-inner relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-teal-300 uppercase tracking-widest leading-none">
                          King Salman International Airport
                        </p>
                        <p className="text-xs font-black tracking-tight mt-0.5">
                          Emergency Response Team • Topic 2.3
                        </p>
                      </div>
                    </div>
                    <span className="rounded bg-teal-500/20 px-2 py-0.5 text-[10px] font-mono text-teal-300 border border-teal-400/30">
                      ADMIN ID
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        {t.traineeLabel}
                      </span>
                      <p className="text-sm font-bold text-white truncate mt-0.5">
                        {studentName.trim() || (lang === 'ar' ? 'اسم المتدرب...' : 'Trainee Name...')}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        {t.badgeLabel}
                      </span>
                      <p className="text-sm font-mono font-bold text-teal-300 truncate mt-0.5">
                        {badgeNumber.trim() || 'KSIA-XXXXX'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleStartFromSplash} className="space-y-5">
                  {splashError && (
                    <div className="rounded-xl bg-red-50 p-3.5 border border-red-200 text-xs font-bold text-red-700 flex items-center gap-2">
                      <Info className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{splashError}</span>
                    </div>
                  )}

                  {/* Student Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-teal-600" />
                      <span>{t.studentNameLabel}</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => {
                        setStudentName(e.target.value);
                        if (splashError) setSplashError('');
                      }}
                      placeholder={t.studentNamePlaceholder}
                      className="w-full rounded-2xl border-2 border-slate-200 p-4 text-sm font-bold outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 bg-slate-50/50"
                    />
                  </div>

                  {/* Badge Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-teal-600" />
                      <span>{t.badgeNumberLabel}</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={badgeNumber}
                      onChange={(e) => {
                        setBadgeNumber(e.target.value);
                        if (splashError) setSplashError('');
                      }}
                      placeholder={t.badgeNumberPlaceholder}
                      className="w-full rounded-2xl border-2 border-slate-200 p-4 text-sm font-mono font-bold outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 bg-slate-50/50"
                    />
                  </div>

                  {/* Note about report binding */}
                  <p className="text-[11px] text-slate-500 italic text-center">
                    {t.officialRecordNote}
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-base font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-98 cursor-pointer"
                    >
                      <span>{t.startDrillBtn}</span>
                      <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* STAGE 1: SCENARIO SELECTION */}
          {stage === 'CHOICE' && (
            <motion.div
              key="choice"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Trainee Welcome Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      {lang === 'ar' ? 'جلسة التدريب الحالية للمتدرب' : 'Active Trainee Session'}
                    </span>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {studentName} <span className="font-mono text-teal-700 font-bold ml-1">({badgeNumber})</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleChangeTrainee}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.changeStudent}</span>
                </button>
              </div>

              {/* Hero Banner with Plain Language Notice */}
              <div className="rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-400/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.plainLangBadge}</span>
                    <span className="text-teal-400/50">•</span>
                    <span>{lang === 'ar' ? 'مباني المكاتب الإدارية' : 'Headquarters & Admin Wing'}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                    {lang === 'bilingual' ? (
                      <div>
                        <span>Airport Administrative Offices Report Drill</span>
                        <span className="block text-xl sm:text-2xl text-teal-300 font-arabic font-bold mt-1">تدريب البلاغ اللاسلكي لمكاتب المطار الإدارية</span>
                      </div>
                    ) : (
                      t.selectIncidentTitle
                    )}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {lang === 'bilingual' ? (
                      <span>
                        Simulate emergency reporting inside HR, Finance, Executive Boardrooms, IT Server Closets, and Records Rooms. Tailored for non-technical employees and non-native English speakers.
                      </span>
                    ) : (
                      t.drillRulesDesc
                    )}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setShowGuideModal(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-teal-400 transition-colors shadow-sm"
                    >
                      <HelpCircle className="w-4 h-4" />
                      {t.lnnhGuideBtn}
                    </button>
                    <span className="text-xs text-slate-400">
                      {lang === 'ar' ? '20 سيناريو إداري معتمد • نموذج L-N-N-H' : '20 Office Scenarios • L-N-N-H Standard'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Drill Steps Quick Card */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-100 text-teal-800 text-xs font-black">1</span>
                    {lang === 'ar' ? 'وقت القراءة' : 'Read Incident'}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.rule1}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-100 text-teal-800 text-xs font-black">2</span>
                    {lang === 'ar' ? 'كتابة التقرير' : 'Type Broadcast'}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.rule2}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-100 text-teal-800 text-xs font-black">3</span>
                    {lang === 'ar' ? 'لغة يومية بسيطة' : 'Plain Language'}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.rule3}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-100 text-teal-800 text-xs font-black">4</span>
                    {lang === 'ar' ? 'المقارنة والتقييم' : 'Review & Evaluate'}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.rule4}</p>
                </div>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
                {/* Department Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {(['ALL', 'HR', 'FINANCE', 'IT', 'EXECUTIVE', 'GROUND'] as OfficeFilter[]).map((cat) => {
                    const label = 
                      cat === 'ALL' ? t.filterAll :
                      cat === 'HR' ? t.filterHr :
                      cat === 'FINANCE' ? t.filterFinance :
                      cat === 'IT' ? t.filterIt :
                      cat === 'EXECUTIVE' ? t.filterExecutive : t.filterGround;
                    return (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`rounded-xl px-3 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                          filter === cat 
                            ? 'bg-slate-900 text-white shadow-xs' 
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[240px]">
                  <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className={`w-full rounded-xl border border-slate-200 bg-white py-2 text-xs font-medium outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 ${
                      isRTL ? 'pr-9 pl-3' : 'pl-9 pr-3'
                    }`}
                  />
                </div>
              </div>

              {/* Scenario Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {filteredScenarios.map((scenario) => {
                  const displayTitle = lang === 'ar' ? scenario.titleAr : scenario.title;
                  const displayDept = lang === 'ar' ? scenario.departmentAr : scenario.department;
                  const displayFloor = lang === 'ar' ? scenario.floorAr : scenario.floor;
                  const displayText = lang === 'ar' ? scenario.scenarioTextAr : scenario.scenarioText;

                  return (
                    <motion.div
                      key={scenario.id}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => startScenario(scenario)}
                      className="group cursor-pointer rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs hover:border-slate-900 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="space-y-3">
                        {/* Top Meta Line */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white text-xs font-black group-hover:bg-teal-600 transition-colors">
                            #{scenario.id}
                          </span>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 border border-slate-200/60 truncate max-w-[180px]">
                            {displayFloor}
                          </span>
                        </div>

                        {/* Title & Department */}
                        <div>
                          <p className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                            {displayDept}
                          </p>
                          <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-teal-900 transition-colors mt-0.5">
                            {displayTitle}
                          </h3>
                          {lang === 'bilingual' && (
                            <p className="text-xs text-slate-500 font-arabic font-semibold mt-1">
                              {scenario.titleAr}
                            </p>
                          )}
                        </div>

                        {/* Snippet */}
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {displayText}
                        </p>
                      </div>

                      {/* Footer Call to Action */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-teal-700">
                        <span>{lang === 'ar' ? 'بدء تدريب الحادث' : 'Start Scenario Drill'}</span>
                        <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredScenarios.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center bg-white space-y-2">
                  <p className="text-base font-bold text-slate-700">
                    {lang === 'ar' ? 'لا توجد سيناريوهات مطابقة للبحث' : 'No office scenarios match your search'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {lang === 'ar' ? 'جرب البحث بكلمات أخرى مثل "مكتب"، "حريق"، أو "الطابق الثاني"' : 'Try searching for terms like "HR", "coffee", "elevator", or "water"'}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* STAGE 2: READING & UNDERSTANDING THE SCENARIO */}
          {stage === 'READING' && selectedScenario && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="mx-auto max-w-3xl space-y-4"
            >
              {/* Back to List */}
              <button
                onClick={resetApp}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{lang === 'ar' ? 'الرجوع لاختيار سيناريو آخر' : 'Back to Incident List'}</span>
              </button>

              <div className="rounded-3xl border-2 border-slate-900 bg-white p-6 sm:p-9 shadow-xl space-y-6 relative overflow-hidden">
                {/* Header Row: Badge & Timer */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                      <span>{t.scenarioLabel} #{selectedScenario.id}</span>
                    </span>
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                      {lang === 'ar' ? selectedScenario.floorAr : selectedScenario.floor}
                    </span>
                    {studentName && (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200">
                        {studentName}
                      </span>
                    )}
                  </div>

                  {/* Timer */}
                  <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-xl font-bold shadow-inner ${
                    timeLeft <= 15 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-900'
                  }`}>
                    <Clock className="w-5 h-5 text-slate-500" />
                    <span>{timeLeft}s</span>
                  </div>
                </div>

                {/* Scenario Title */}
                <div>
                  <p className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                    {lang === 'ar' ? selectedScenario.departmentAr : selectedScenario.department}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1 leading-tight">
                    {lang === 'ar' ? selectedScenario.titleAr : selectedScenario.title}
                  </h2>
                  {lang === 'bilingual' && (
                    <h3 className="text-xl font-bold text-teal-800 font-arabic mt-1">
                      {selectedScenario.titleAr}
                    </h3>
                  )}
                </div>

                {/* Scenario Body Text */}
                <div className="rounded-2xl bg-slate-50 p-5 sm:p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t.readingPhaseTitle}
                    </span>

                    {/* Audio Read-Aloud for Non-Native Speakers */}
                    <button
                      onClick={() => handleSpeak(
                        lang === 'ar' ? selectedScenario.scenarioTextAr : selectedScenario.scenarioText,
                        lang === 'ar' ? 'ar' : 'en'
                      )}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-4 h-4 text-red-500" />
                          <span className="text-red-600">{t.stopListening}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-teal-600" />
                          <span>{t.listenScenario}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Primary Language Text */}
                  <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                    {lang === 'ar' ? selectedScenario.scenarioTextAr : selectedScenario.scenarioText}
                  </p>

                  {/* Bilingual Secondary Text */}
                  {lang === 'bilingual' && (
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs font-bold text-slate-400 mb-1 font-arabic">الترجمة العربية:</p>
                      <p className="text-base leading-relaxed text-slate-700 font-arabic font-medium" dir="rtl">
                        {selectedScenario.scenarioTextAr}
                      </p>
                    </div>
                  )}
                </div>

                {/* Plain-Language Clues for Non-Technical Staff */}
                {selectedScenario.plainLanguageTips && (
                  <div className="rounded-2xl bg-teal-50/80 p-4 border border-teal-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                      <Info className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{lang === 'ar' ? 'تلميحات مساعدة لقراءة الحادث' : 'Everyday Clues to Notice (What to Look For)'}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-teal-950 font-medium">
                      <div>
                        <strong className="text-teal-800">L:</strong> {lang === 'ar' ? selectedScenario.plainLanguageTips.locationHintAr : selectedScenario.plainLanguageTips.locationHint}
                      </div>
                      <div>
                        <strong className="text-teal-800">N (Nature):</strong> {lang === 'ar' ? selectedScenario.plainLanguageTips.natureHintAr : selectedScenario.plainLanguageTips.natureHint}
                      </div>
                      <div>
                        <strong className="text-teal-800">N (Numbers):</strong> {lang === 'ar' ? selectedScenario.plainLanguageTips.numbersHintAr : selectedScenario.plainLanguageTips.numbersHint}
                      </div>
                      <div>
                        <strong className="text-teal-800">H (Hazards):</strong> {lang === 'ar' ? selectedScenario.plainLanguageTips.hazardsHintAr : selectedScenario.plainLanguageTips.hazardsHint}
                      </div>
                    </div>
                  </div>
                )}

                {/* Reading Timer Progress Bar */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 120, ease: "linear" }}
                    className={`h-full ${timeLeft <= 15 ? 'bg-red-500' : 'bg-slate-900'}`}
                  />
                </div>

                {/* Proceed Button */}
                <div className="pt-2">
                  <button
                    onClick={handleNextFromReading}
                    className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-98 cursor-pointer"
                  >
                    <span>{t.proceedToReport}</span>
                    <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STAGE 3: REPORTING IN 4-PART FORMAT (L-N-N-H) */}
          {stage === 'REPORTING' && selectedScenario && (
            <motion.div
              key="reporting"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mx-auto max-w-3xl space-y-6"
            >
              {/* Header with Student Identification & Countdown Timer */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                      {t.reportingPhaseTitle}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                      {t.reportingPhaseSubtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-xl font-bold shadow-inner ${
                      timeLeft <= 30 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-900'
                    }`}>
                      <Clock className="w-5 h-5 text-slate-500" />
                      <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                        {t.scenarioLabel}
                      </span>
                      <p className="text-base font-black text-slate-900">#{selectedScenario.id}</p>
                    </div>
                  </div>
                </div>

                {/* Trainee Identity Banner */}
                {studentName && (
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-teal-700" />
                      <span className="font-bold text-slate-700">{t.traineeLabel}:</span>
                      <span className="font-extrabold text-slate-900">{studentName}</span>
                      <span className="text-slate-400">•</span>
                      <span className="font-bold text-slate-700">{t.badgeLabel}:</span>
                      <span className="font-mono font-bold text-teal-800">{badgeNumber}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      {lang === 'ar' ? 'تقرير رسمي مسجل باسمك' : 'Official record linked to your badge'}
                    </span>
                  </div>
                )}
              </div>

              {/* Scenario Quick Reference Reminder */}
              <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-4 text-xs space-y-1">
                <span className="font-bold text-slate-700 uppercase tracking-wider block">
                  {lang === 'ar' ? 'تذكير بالحادث الإداري المختار:' : 'Incident Briefing Reference:'}
                </span>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {lang === 'ar' ? selectedScenario.scenarioTextAr : selectedScenario.scenarioText}
                </p>
              </div>

              {/* 4 Form Inputs for L - N - N - H */}
              <div className="space-y-5">
                {/* L - LOCATION */}
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 space-y-2.5 transition-all focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">L</span>
                      <span>{t.l_title}</span>
                    </label>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {t.l_question}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{t.l_subtext}</p>
                  <textarea
                    value={userL}
                    onChange={(e) => setUserL(e.target.value)}
                    placeholder={t.l_placeholder}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm font-medium outline-none transition-all focus:border-slate-900 min-h-[75px]"
                  />
                  {/* Quick-add chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 font-bold">{lang === 'ar' ? 'اقتراحات سريعة:' : 'Quick phrases:'}</span>
                    {[
                      lang === 'ar' ? 'مبنى إدارة المطار' : 'Airport Admin Building',
                      lang === 'ar' ? 'الطابق الثالث' : '3rd Floor',
                      lang === 'ar' ? 'غرفة المكاتب' : 'Office Room',
                      lang === 'ar' ? 'قبو الأرشيف' : 'Basement Archive',
                      lang === 'ar' ? 'الردهة الرئيسية' : 'Main Lobby'
                    ].map((phrase, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => insertPhrase('L', phrase)}
                        className="rounded-md bg-slate-100 hover:bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        + {phrase}
                      </button>
                    ))}
                  </div>
                </div>

                {/* N1 - NATURE */}
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 space-y-2.5 transition-all focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">N</span>
                      <span>{t.n1_title}</span>
                    </label>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {t.n1_question}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{t.n1_subtext}</p>
                  <textarea
                    value={userN_Nature}
                    onChange={(e) => setUserN_Nature(e.target.value)}
                    placeholder={t.n1_placeholder}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm font-medium outline-none transition-all focus:border-slate-900 min-h-[75px]"
                  />
                  {/* Quick-add chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 font-bold">{lang === 'ar' ? 'اقتراحات سريعة:' : 'Quick phrases:'}</span>
                    {[
                      lang === 'ar' ? 'حريق جهاز كهربائي' : 'Small electrical appliance fire',
                      lang === 'ar' ? 'دخان أسود كثيف' : 'Thick black smoke',
                      lang === 'ar' ? 'انفجار أنبوب ماء وتسرب' : 'Burst water pipe flooding',
                      lang === 'ar' ? 'إغماء وحالة طبية' : 'Medical emergency collapse',
                      lang === 'ar' ? 'سقوط وإصابة' : 'Slip and fall injury'
                    ].map((phrase, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => insertPhrase('N1', phrase)}
                        className="rounded-md bg-slate-100 hover:bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        + {phrase}
                      </button>
                    ))}
                  </div>
                </div>

                {/* N2 - NUMBERS */}
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 space-y-2.5 transition-all focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">N</span>
                      <span>{t.n2_title}</span>
                    </label>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {t.n2_question}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{t.n2_subtext}</p>
                  <textarea
                    value={userN_Numbers}
                    onChange={(e) => setUserN_Numbers(e.target.value)}
                    placeholder={t.n2_placeholder}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm font-medium outline-none transition-all focus:border-slate-900 min-h-[75px]"
                  />
                  {/* Quick-add chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 font-bold">{lang === 'ar' ? 'اقتراحات سريعة:' : 'Quick phrases:'}</span>
                    {[
                      lang === 'ar' ? 'موظف واحد واعٍ ومصاب' : '1 person conscious and injured',
                      lang === 'ar' ? 'شخص واحد فاقد للوعي' : '1 person unconscious',
                      lang === 'ar' ? 'إخلاء جميع الموظفين بسلام' : 'All colleagues safely evacuated',
                      lang === 'ar' ? 'شخص محتجز بالداخل' : '1 person trapped inside',
                      lang === 'ar' ? 'لا توجد إصابات بشرية' : 'Zero casualties'
                    ].map((phrase, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => insertPhrase('N2', phrase)}
                        className="rounded-md bg-slate-100 hover:bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        + {phrase}
                      </button>
                    ))}
                  </div>
                </div>

                {/* H - HAZARDS */}
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 space-y-2.5 transition-all focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">H</span>
                      <span>{t.h_title}</span>
                    </label>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {t.h_question}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{t.h_subtext}</p>
                  <textarea
                    value={userH}
                    onChange={(e) => setUserH(e.target.value)}
                    placeholder={t.h_placeholder}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm font-medium outline-none transition-all focus:border-slate-900 min-h-[75px]"
                  />
                  {/* Quick-add chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 font-bold">{lang === 'ar' ? 'اقتراحات سريعة:' : 'Quick phrases:'}</span>
                    {[
                      lang === 'ar' ? 'تيار كهربائي متصل' : 'Live electrical wall socket',
                      lang === 'ar' ? 'دخان ينتشر بالممر' : 'Smoke spreading into hallway',
                      lang === 'ar' ? 'أرضية مبللة زلقة' : 'Slippery wet floor',
                      lang === 'ar' ? 'أوراق وصناديق قرب النار' : 'Paper files close to flames',
                      lang === 'ar' ? 'الباب مسدود' : 'Exit door obstructed'
                    ].map((phrase, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => insertPhrase('H', phrase)}
                        className="rounded-md bg-slate-100 hover:bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        + {phrase}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Broadcast Button */}
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  disabled={!userL || !userN_Nature || !userN_Numbers || !userH}
                  className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl active:scale-98 cursor-pointer"
                >
                  <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  <span>{t.submitReport}</span>
                </button>

                {(!userL || !userN_Nature || !userN_Numbers || !userH) && (
                  <p className="text-center text-xs text-slate-400 mt-2">
                    {t.missingFieldsAlert}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* STAGE 4: EVALUATION & RESULTS */}
          {stage === 'RESULT' && selectedScenario && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-4xl space-y-6"
            >
              {/* Header Box with Trainee Identification & Completed Status */}
              <div className="text-center space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {t.drillCompletedTitle}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mt-1">
                    {t.drillCompletedSubtitle}
                  </p>
                </div>

                {/* Trainee Credential Record Card */}
                <div className="mx-auto max-w-lg rounded-2xl border border-teal-200 bg-teal-50/80 p-4 text-xs">
                  <div className="grid grid-cols-2 gap-3 text-left rtl:text-right">
                    <div>
                      <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest block">
                        {t.traineeLabel}
                      </span>
                      <p className="text-sm font-black text-teal-950 mt-0.5">
                        {studentName || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest block">
                        {t.badgeLabel}
                      </span>
                      <p className="text-sm font-mono font-bold text-teal-900 mt-0.5">
                        {badgeNumber || 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-teal-200/60 flex items-center justify-between text-[11px] text-teal-800">
                    <span>{lang === 'ar' ? 'سجل رسمي موثق' : 'Official Certified Training Record'}</span>
                    <span className="font-mono">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Timing Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  <div className="rounded-xl bg-slate-100 px-4 py-2 border border-slate-200 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      {t.readingTime}
                    </span>
                    <span className="text-base font-black text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {formatDuration(readingDuration)}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-100 px-4 py-2 border border-slate-200 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      {t.reportingTime}
                    </span>
                    <span className="text-base font-black text-slate-900 flex items-center justify-center gap-1.5 mt-0.5">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {formatDuration(reportingDuration)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Comparison: Your Broadcast vs Standard Key */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* User Answer Column */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-600 px-1">
                    <span className="flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-slate-900" />
                      {t.yourReport}
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-1 text-[11px] text-teal-700 hover:text-teal-900 cursor-pointer"
                    >
                      {copiedText ? (
                        <>
                          <Check className="w-3 h-3 text-teal-600" />
                          <span>{t.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{t.copyFeedback}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 space-y-4 shadow-xs">
                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        L - Location
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {userL || '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        N - Nature
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {userN_Nature || '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        N - Numbers
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {userN_Numbers || '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        H - Hazards
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {userH || '—'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Facilitator Extraction Key Column */}
                <div className="space-y-3">
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-teal-800 px-1">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
                    {t.standardKey}
                  </div>

                  <div className="rounded-3xl border-2 border-teal-200 bg-teal-50/70 p-5 space-y-4 shadow-xs">
                    <div>
                      <span className="text-[10px] font-black bg-teal-700 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        L - Location / الموقع
                      </span>
                      <div className="bg-white/80 p-2.5 rounded-xl border border-teal-200/80">
                        <p className="text-xs sm:text-sm text-teal-950 font-bold leading-relaxed">
                          {selectedScenario.extractionKey.l}
                        </p>
                        <p className="text-xs text-teal-800 font-arabic font-semibold mt-1" dir="rtl">
                          {selectedScenario.extractionKey.l_ar}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-teal-700 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        N - Nature / طبيعة الحادث
                      </span>
                      <div className="bg-white/80 p-2.5 rounded-xl border border-teal-200/80">
                        <p className="text-xs sm:text-sm text-teal-950 font-bold leading-relaxed">
                          {selectedScenario.extractionKey.n_nature}
                        </p>
                        <p className="text-xs text-teal-800 font-arabic font-semibold mt-1" dir="rtl">
                          {selectedScenario.extractionKey.n_nature_ar}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-teal-700 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        N - Numbers / الأعداد والإصابات
                      </span>
                      <div className="bg-white/80 p-2.5 rounded-xl border border-teal-200/80">
                        <p className="text-xs sm:text-sm text-teal-950 font-bold leading-relaxed">
                          {selectedScenario.extractionKey.n_numbers}
                        </p>
                        <p className="text-xs text-teal-800 font-arabic font-semibold mt-1" dir="rtl">
                          {selectedScenario.extractionKey.n_numbers_ar}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-black bg-teal-700 text-white px-2 py-0.5 rounded-md inline-block mb-1">
                        H - Hazards / المخاطر المحيطة
                      </span>
                      <div className="bg-white/80 p-2.5 rounded-xl border border-teal-200/80">
                        <p className="text-xs sm:text-sm text-teal-950 font-bold leading-relaxed">
                          {selectedScenario.extractionKey.h}
                        </p>
                        <p className="text-xs text-teal-800 font-arabic font-semibold mt-1" dir="rtl">
                          {selectedScenario.extractionKey.h_ar}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: PDF, WhatsApp, New Drill */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={exportPDF}
                  className="flex-1 flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-slate-800 hover:shadow-md active:scale-98 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadPdf}</span>
                </button>

                <button
                  onClick={shareWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2.5 rounded-2xl bg-[#128C7E] py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-[#0c6b60] hover:shadow-md active:scale-98 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{t.shareWhatsApp}</span>
                </button>

                <button
                  onClick={resetApp}
                  className="flex-1 flex items-center justify-center gap-2.5 rounded-2xl border-2 border-slate-200 bg-white py-4 text-sm sm:text-base font-bold text-slate-800 transition-all hover:border-slate-900 hover:shadow-md active:scale-98 cursor-pointer"
                >
                  <RefreshCcw className="w-4 h-4" />
                  <span>{t.newDrill}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Everyday L-N-N-H Educational Guide Modal */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-widest block">
                  Topic 2.3 • Plain Language Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {t.guideTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {t.guideSubtitle}
                </p>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* 4 Cards Explaining Each Letter in Everyday Words */}
            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">L</span>
                  <h4 className="text-sm font-bold text-slate-900">Location • أين يقع الحادث؟</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Everyday rule:</strong> Tell responders where to run. Give the building name, floor number, and office or room number. 
                </p>
                <p className="text-xs text-slate-500 font-arabic" dir="rtl">
                  <strong>القاعدة اليومية:</strong> حدد لفرق الطوارئ أين يتجهون بالضبط: اسم المبنى، رقم الطابق، ورقم الغرفة أو اسم القسم الإداري.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">N</span>
                  <h4 className="text-sm font-bold text-slate-900">Nature of Incident • ما نوع الحادث؟</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Everyday rule:</strong> State in simple words what you see: "Coffee machine caught fire", "Ceiling pipe burst and flooded desks", "Colleague collapsed from chest pain".
                </p>
                <p className="text-xs text-slate-500 font-arabic" dir="rtl">
                  <strong>القاعدة اليومية:</strong> صف ما حدث بكلمات بسيطة دون تعقيد: اشتعال جهاز، تسرب مياه وغرق مكاتب، أو حالة إغماء لموظف.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">N</span>
                  <h4 className="text-sm font-bold text-slate-900">Numbers & Casualties • كم عدد المصابين؟</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Everyday rule:</strong> How many need an ambulance or first aid? State if they are conscious (awake) or unconscious (passed out), and if everyone else evacuated safely.
                </p>
                <p className="text-xs text-slate-500 font-arabic" dir="rtl">
                  <strong>القاعدة اليومية:</strong> كم شخصاً يحتاج إسعافاً؟ اذكر هل هم في وعيهم أم فاقدو الوعي، وهل خرج باقي الموظفين بأمان.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-xs font-black">H</span>
                  <h4 className="text-sm font-bold text-slate-900">Hazards • ما هي المخاطر في المكان؟</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Everyday rule:</strong> Warn responders what could hurt them or spread the damage: live electrical cables, flames touching paper boxes, slippery floors, or smoke.
                </p>
                <p className="text-xs text-slate-500 font-arabic" dir="rtl">
                  <strong>القاعدة اليومية:</strong> حذر المسعفين مما قد يؤذيهم: أسلاك كهرباء مكشوفة، نيران قريبة من أوراق، أرضيات زلقة، أو دخان يملأ الممر.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowGuideModal(false)}
              className="w-full rounded-2xl bg-slate-900 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 text-center space-y-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            {lang === 'ar' 
              ? 'تدريب جاهزية فريق الاستجابة للطوارئ • الموضوع 2.3 • مكاتب المطار الإدارية'
              : 'Emergency Response Team Readiness Training • Topic 2.3 • Airport Administrative Offices'
            }
          </p>
          <p className="text-[11px] text-slate-400">
            {lang === 'ar'
              ? 'مخصص لموظفي المكاتب الإدارية ومساعدي الإدارات • مطار الملك سلمان الدولي'
              : 'Designed for Administrative Staff, Non-Technical Personnel & Non-Native English Speakers • King Salman International Airport'
            }
          </p>
        </div>
      </footer>
    </div>
  );
}
