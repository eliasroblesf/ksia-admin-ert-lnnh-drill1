/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LanguageMode = 'en' | 'ar' | 'bilingual';

export interface TranslationStrings {
  appTitle: string;
  appSubtitle: string;
  badgeAdmin: string;
  plainLangBadge: string;
  langEn: string;
  langAr: string;
  langBilingual: string;
  
  // Splash Screen Strings
  splashTitle: string;
  splashSubtitle: string;
  studentNameLabel: string;
  studentNamePlaceholder: string;
  badgeNumberLabel: string;
  badgeNumberPlaceholder: string;
  startDrillBtn: string;
  studentRequiredAlert: string;
  changeStudent: string;
  traineeLabel: string;
  badgeLabel: string;
  officialRecordNote: string;
  
  drillRulesTitle: string;
  drillRulesDesc: string;
  rule1: string;
  rule2: string;
  rule3: string;
  rule4: string;
  selectIncidentTitle: string;
  selectIncidentSubtitle: string;
  filterAll: string;
  filterHr: string;
  filterFinance: string;
  filterIt: string;
  filterExecutive: string;
  filterGround: string;
  searchPlaceholder: string;
  readingPhaseTitle: string;
  listenScenario: string;
  stopListening: string;
  proceedToReport: string;
  reportingPhaseTitle: string;
  reportingPhaseSubtitle: string;
  timeRemaining: string;
  scenarioLabel: string;
  lnnhGuideBtn: string;
  quickPhrasesBtn: string;
  submitReport: string;
  submittingReport: string;
  missingFieldsAlert: string;
  drillCompletedTitle: string;
  drillCompletedSubtitle: string;
  readingTime: string;
  reportingTime: string;
  yourReport: string;
  standardKey: string;
  downloadPdf: string;
  shareWhatsApp: string;
  newDrill: string;
  copyFeedback: string;
  copied: string;
  guideTitle: string;
  guideSubtitle: string;
  close: string;
  
  // LNNH Questions & Plain English Explanations
  l_title: string;
  l_question: string;
  l_subtext: string;
  l_placeholder: string;
  
  n1_title: string;
  n1_question: string;
  n1_subtext: string;
  n1_placeholder: string;
  
  n2_title: string;
  n2_question: string;
  n2_subtext: string;
  n2_placeholder: string;
  
  h_title: string;
  h_question: string;
  h_subtext: string;
  h_placeholder: string;

  // Helpful quick-phrase chips for non-native English speakers
  suggestedPhrasesTitle: string;
  clickToInsert: string;
}

export const translations: Record<'en' | 'ar', TranslationStrings> = {
  en: {
    appTitle: "KSIA ERT Administrative Offices Drill",
    appSubtitle: "Topic 2.3 • Plain-Language L-N-N-H Radio Report Training",
    badgeAdmin: "Administrative Offices Only",
    plainLangBadge: "Everyday Plain Language",
    langEn: "English",
    langAr: "العربية",
    langBilingual: "Bilingual (EN / AR)",

    // Splash Screen
    splashTitle: "Student & Trainee Badging",
    splashSubtitle: "Enter your full name and airport employee badge number before starting the drill activity. This official identification will be stamped on your radio report evaluation.",
    studentNameLabel: "Student / Employee Full Name",
    studentNamePlaceholder: "e.g. Mohammed Al-Otaibi",
    badgeNumberLabel: "Airport Badge / Employee ID #",
    badgeNumberPlaceholder: "e.g. KSIA-78421",
    startDrillBtn: "Enter Activity & Select Scenario",
    studentRequiredAlert: "Please provide both your Full Name and Badge Number to begin the drill.",
    changeStudent: "Change Trainee",
    traineeLabel: "Trainee",
    badgeLabel: "Badge #",
    officialRecordNote: "This identification will be permanently embedded in your final L-N-N-H Report, PDF certificate, and WhatsApp broadcast.",

    drillRulesTitle: "How This Office Drill Works",
    drillRulesDesc: "Designed for all airport administrative employees, non-technical staff, and non-native English speakers. No technical jargon required.",
    rule1: "2 minutes to read and understand the office incident details.",
    rule2: "5 minutes to type your standard 4-part radio report.",
    rule3: "Use everyday words: Where is it? What happened? Who is hurt? What is dangerous?",
    rule4: "Practice speaking and typing simple, clear facts without panic.",
    selectIncidentTitle: "Select an Administrative Office Scenario",
    selectIncidentSubtitle: "Choose an office situation to practice your initial emergency report.",
    filterAll: "All Offices (20)",
    filterHr: "HR & Training",
    filterFinance: "Finance & Contracts",
    filterIt: "IT & Server Rooms",
    filterExecutive: "Executive & Legal",
    filterGround: "Lobby & Archives",
    searchPlaceholder: "Search scenarios by room, floor, or incident type...",
    readingPhaseTitle: "Incident Briefing • Reading Time",
    listenScenario: "Listen Aloud",
    stopListening: "Stop Audio",
    proceedToReport: "Start Radio Report",
    reportingPhaseTitle: "4-Part Initial Radio Report",
    reportingPhaseSubtitle: "Topic 2.3 L-N-N-H Format • Everyday Clear Language",
    timeRemaining: "Time Left",
    scenarioLabel: "Incident",
    lnnhGuideBtn: "What is L-N-N-H?",
    quickPhrasesBtn: "Everyday Phrases Helper",
    submitReport: "Submit Radio Broadcast",
    submittingReport: "Processing...",
    missingFieldsAlert: "Please fill in all 4 sections before submitting.",
    drillCompletedTitle: "Drill Completed Successfully!",
    drillCompletedSubtitle: "Compare your office incident report with the recommended extraction key.",
    readingTime: "Reading Phase",
    reportingTime: "Reporting Phase",
    yourReport: "Your Radio Report",
    standardKey: "Standard Facilitator Extraction Key",
    downloadPdf: "Download PDF Summary",
    shareWhatsApp: "Share to WhatsApp",
    newDrill: "Start Another Drill",
    copyFeedback: "Copy Text",
    copied: "Copied!",
    guideTitle: "Topic 2.3: Everyday L-N-N-H Radio Reporting Guide",
    guideSubtitle: "When calling emergency dispatch or ERT, keep messages short, clear, and calm.",
    close: "Close Guide",

    l_title: "L - Location",
    l_question: "Where is the problem?",
    l_subtext: "State the Building, Floor number, and specific Office or Room name.",
    l_placeholder: "Example: Airport Admin Building, 3rd Floor, HR Kitchenette Room 305...",

    n1_title: "N - Nature",
    n1_question: "What is happening?",
    n1_subtext: "What do you see or smell? (Small fire, smoke, water leak, chemical smell, fall).",
    n1_placeholder: "Example: Coffee machine caught fire with thick smoke from burning napkins...",

    n2_title: "N - Numbers",
    n2_question: "Who and how many need help?",
    n2_subtext: "How many people are hurt? Are they awake (conscious) or passed out (unconscious)?",
    n2_placeholder: "Example: 1 employee conscious with burned hand, 10 colleagues evacuated safely...",

    h_title: "H - Hazards",
    h_question: "What danger is nearby right now?",
    h_subtext: "What could make it worse? (Live electricity, spreading flames, slippery floor, locked door).",
    h_placeholder: "Example: Wall plug is still powered, wooden cabinets above flames, smoke in hallway...",

    suggestedPhrasesTitle: "Common Everyday Phrases (Tap to add)",
    clickToInsert: "Tap any phrase to insert into the box"
  },
  ar: {
    appTitle: "تدريب الاستجابة للطوارئ بمكاتب المطار الإدارية",
    appSubtitle: "الموضوع 2.3 • التدريب على تقرير (L-N-N-H) بلغة يومية مبسطة",
    badgeAdmin: "خاص بالمكاتب الإدارية فقط",
    plainLangBadge: "لغة يومية واضحة ومبسطة",
    langEn: "English",
    langAr: "العربية",
    langBilingual: "ثنائي اللغة (إنجليزي / عربي)",

    // Splash Screen
    splashTitle: "تسجيل بيانات المتدرب والبطاقة الوظيفية",
    splashSubtitle: "يرجى إدخال اسمك ورقم بطاقة الموظف قبل بدء النشاط التدريبي. سيتم تثبيت هذه البيانات الرسمية في تقرير الطوارئ الصادر وشهادة التقييم.",
    studentNameLabel: "اسم المتدرب / الموظف كاملاً",
    studentNamePlaceholder: "مثال: محمد العتيبي",
    badgeNumberLabel: "رقم بطاقة المطار / الرقم الوظيفي",
    badgeNumberPlaceholder: "مثال: KSIA-78421",
    startDrillBtn: "بدء النشاط واختيار السيناريو",
    studentRequiredAlert: "يرجى كتابة الاسم ورقم البطاقة للمتابعة وبدء النشاط.",
    changeStudent: "تغيير المتدرب",
    traineeLabel: "المتدرب",
    badgeLabel: "رقم البطاقة",
    officialRecordNote: "سيتم إدراج هذه البيانات في تقرير L-N-N-H النهائي وملخص PDF ورسالة الواتساب الرسمية.",

    drillRulesTitle: "كيف يعمل هذا التدريب الإداري؟",
    drillRulesDesc: "مخصص لجميع موظفي مكاتب المطار الإدارية وغير التقنيين ولغير الناطقين بالإنجليزية كلغة أم. لا يتطلب أي مصطلحات معقدة.",
    rule1: "دقيقتان لقراءة تفاصيل الحادث الإداري واستيعاب ما حدث.",
    rule2: "5 دقائق لكتابة التقرير اللاسلكي المكون من أربعة أجزاء.",
    rule3: "استخدم كلمات بسيطة: أين المكان؟ ماذا حدث؟ كم عدد المصابين؟ ما هو الخطر المحيط؟",
    rule4: "التدرب على الإبلاغ السريع والهادئ للحقائق الأساسية دون ارتباك.",
    selectIncidentTitle: "اختر سيناريو من المكاتب الإدارية",
    selectIncidentSubtitle: "اختر موقفاً طارئاً في بيئة المكاتب لبدء كتابة تقرير الطوارئ الأولي.",
    filterAll: "جميع المكاتب (20)",
    filterHr: "الموارد البشرية والتدريب",
    filterFinance: "المالية والعقود",
    filterIt: "تقنية المعلومات والخوادم",
    filterExecutive: "الإدارة العليا والقانونية",
    filterGround: "الاستقبال والأرشيف",
    searchPlaceholder: "ابحث برقم الغرفة أو الطابق أو نوع الحادث...",
    readingPhaseTitle: "إيجاز الحادث • وقت القراءة والاستيعاب",
    listenScenario: "الاستماع الصوتي",
    stopListening: "إيقاف الصوت",
    proceedToReport: "الانتقال إلى كتابة التقرير اللاسلكي",
    reportingPhaseTitle: "التقرير اللاسلكي الأولي (4 أجزاء)",
    reportingPhaseSubtitle: "نموذج L-N-N-H • بلغة واضحة ومباشرة",
    timeRemaining: "الوقت المتبقي",
    scenarioLabel: "رقم الحادث",
    lnnhGuideBtn: "دليل شرح نموذج L-N-N-H",
    quickPhrasesBtn: "عبارات يومية مساعدة",
    submitReport: "إرسال التقرير اللاسلكي",
    submittingReport: "جاري الإرسال...",
    missingFieldsAlert: "يرجى تعبئة الأقسام الأربعة قبل إرسال التقرير.",
    drillCompletedTitle: "اكتمل التدريب بنجاح!",
    drillCompletedSubtitle: "قارن تقريرك الإداري مع مفتاح الإجابة المعياري المعتمد.",
    readingTime: "وقت القراءة",
    reportingTime: "وقت كتابة التقرير",
    yourReport: "تقريرك المرسل",
    standardKey: "مفتاح الإجابة المعياري للمدرب",
    downloadPdf: "تحميل ملخص PDF",
    shareWhatsApp: "مشاركة عبر واتساب",
    newDrill: "بدء تمرين جديد",
    copyFeedback: "نسخ النص",
    copied: "تم النسخ!",
    guideTitle: "الموضوع 2.3: دليل الإبلاغ اللاسلكي المبسط (L-N-N-H)",
    guideSubtitle: "عند الاتصال بمركز العمليات أو فريق الطوارئ، اجعل رسالتك مختصرة وواضحة وهادئة.",
    close: "إغلاق الدليل",

    l_title: "L - الموقع (Location)",
    l_question: "أين يقع الحادث بالضبط؟",
    l_subtext: "اذكر اسم المبنى، رقم الطابق، ورقم الغرفة أو اسم الإدارة/القسم.",
    l_placeholder: "مثال: مبنى إدارة المطار، الطابق الثالث، مطبخ قسم الموارد البشرية غرفة 305...",

    n1_title: "N - طبيعة الحادث (Nature)",
    n1_question: "ماذا حدث؟ ما نوع المشكلة؟",
    n1_subtext: "صف ما تراه أو تشمه ببساطة: حريق، دخان، تسرب ماء، شخص سقط، رائحة غاز.",
    n1_placeholder: "مثال: اشتعلت ماكينة القهوة وتصاعد دخان أسود كثيف من احتراق المناديل...",

    n2_title: "N - الأعداد والإصابات (Numbers)",
    n2_question: "كم عدد المحتاجين للمساعدة وحالتهم؟",
    n2_subtext: "كم عدد المصابين؟ هل هم في وعيهم (يقظون) أم فاقدون للوعي؟ وهل تم إخلاء البقية؟",
    n2_placeholder: "مثال: موظف واحد واعٍ مصاب بحروق في اليد، وإخلاء عشرة موظفين بسلام...",

    h_title: "H - المخاطر الحالية (Hazards)",
    h_question: "ما هي المخاطر القريبة في المكان الآن؟",
    h_subtext: "ما الذي قد يزيد الوضع خطورة؟ (كهرباء نشطة، لهب يمتد، أرضية زلقة، دخان ينتشر).",
    h_placeholder: "مثال: مقبس الكهرباء بالجدار لا يزال موصولاً، خزائن خشبية ملاصقة، دخان بالممر...",

    suggestedPhrasesTitle: "عبارات يومية مساعدة (انقر لإضافتها)",
    clickToInsert: "انقر على أي عبارة لإدراجها في صندوق النص"
  }
};
