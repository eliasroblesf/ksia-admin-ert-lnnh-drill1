/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Scenario23 {
  id: number;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  floor: string;
  floorAr: string;
  scenarioText: string;
  scenarioTextAr: string;
  extractionKey: {
    l: string;
    l_ar: string;
    n_nature: string;
    n_nature_ar: string;
    n_numbers: string;
    n_numbers_ar: string;
    h: string;
    h_ar: string;
  };
  plainLanguageTips?: {
    locationHint: string;
    locationHintAr: string;
    natureHint: string;
    natureHintAr: string;
    numbersHint: string;
    numbersHintAr: string;
    hazardsHint: string;
    hazardsHintAr: string;
  };
}

export const scenarios23: Scenario23[] = [
  {
    id: 1,
    title: "Kitchenette Coffee Machine Fire",
    titleAr: "حريق ماكينة القهوة في مطبخ الموظفين",
    department: "Human Resources (HR)",
    departmentAr: "الموارد البشرية",
    floor: "3rd Floor • Room 305",
    floorAr: "الطابق الثالث • غرفة 305",
    scenarioText: "In the Airport Administration Building, 3rd Floor, Human Resources (HR) Kitchenette Room 305, an electric coffee machine overheated and burst into flames on the kitchen counter. Cardboard coffee cups and paper napkins next to the machine caught fire, producing black smoke that is drifting into the office hallway. One HR assistant burned his right hand trying to unplug the machine from the wall. Ten office employees have safely left the room. The burning counter is next to wooden wall cabinets and the electric wall socket is still powered.",
    scenarioTextAr: "في مبنى إدارة المطار، الطابق الثالث، مطبخ قسم الموارد البشرية (غرفة 305)، ارتفعت حرارة ماكينة تحضير القهوة الكهربائية واشتعلت فيها النيران فوق منضدة المطبخ. احترقت الأكواب الكرتونية والمناديل الورقية بجوارها، مما أدى إلى تصاعد دخان أسود كثيف بدأ ينتشر في ممر المكاتب. أُصيب أحد موظفي القسم بحروق في يده اليمنى أثناء محاولته فصل سلك الكهرباء. تم إخلاء عشرة موظفين بأمان. المنضدة المشتعلة تقع أسفل خزائن خشبية وقابس الكهرباء في الجدار لا يزال متصلاً بالتيار.",
    extractionKey: {
      l: "Airport Administration Building, 3rd Floor, HR Kitchenette Room 305.",
      l_ar: "مبنى إدارة المطار، الطابق الثالث، مطبخ الموارد البشرية غرفة 305.",
      n_nature: "Small electrical kitchen appliance fire with burning paper and black smoke.",
      n_nature_ar: "حريق كهربائي في جهاز منزلي (ماكينة قهوة) مع اشتعال ورق وتصاعد دخان أسود.",
      n_numbers: "One person conscious with burned hand; ten others evacuated safely.",
      n_numbers_ar: "شخص واحد واعٍ مصاب بحروق في اليد، وإخلاء عشرة أشخاص آخرين بأمان.",
      h: "Live electrical wall plug, wooden wall cabinets above fire, smoke spreading in hallway.",
      h_ar: "مقبس كهربائي متصل بالتيار، خزائن خشبية ملاصقة للنار، ودخان ينتشر بالممر."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 3rd Floor, Room 305 (HR Kitchen)",
      locationHintAr: "مبنى الإدارة، الطابق 3، غرفة 305 (مطبخ الموارد البشرية)",
      natureHint: "Electric coffee maker on fire with smoke",
      natureHintAr: "حريق ماكينة قهوة كهربائية مع دخان",
      numbersHint: "1 person with hand burn, awake",
      numbersHintAr: "شخص واحد مصاب بحروق في اليد، واعٍ",
      hazardsHint: "Live electric socket, wooden cabinets, smoke in corridor",
      hazardsHintAr: "قابس كهرباء نشط، خزائن خشب، دخان في الممر"
    }
  },
  {
    id: 2,
    title: "Heavy Filing Cabinet Tip-Over",
    titleAr: "سقوط خزانة ملفات ثقيلة على موظف",
    department: "Records & Document Archive",
    departmentAr: "الأرشيف وحفظ الوثائق",
    floor: "Basement Level B1 • Room B-12",
    floorAr: "قبو المبنى B1 • غرفة B-12",
    scenarioText: "In the Administration Building, Basement Level B1, Records Archive Room B-12, a tall four-drawer metal filing cabinet tipped forward while an archive clerk was pulling out files. The heavy steel cabinet fell directly across the clerk's lower legs, trapping him face down on the concrete floor. The clerk is conscious, screaming in severe pain, and unable to move the heavy cabinet off himself. Hundreds of loose paper files fell around him, blocking the only doorway into the archive room.",
    scenarioTextAr: "في مبنى الإدارة، قبو المبنى (الطابق B1)، غرفة حفظ الأرشيف B-12، مالت خزانة ملفات معدنية ثقيلة وسقطت للأمام أثناء سحب موظف الأرشيف للملفات. سقطت الخزانة الثقيلة مباشرة فوق ساقي الموظف واحتجزته على الأرضية. الموظف في كامل وعيه ويصرخ من ألم شديد في ساقيه ولا يستطيع رفع الخزانة بمفرده. كما سقطت مئات الأوراق والملفات حوله وسدت باب الغرفة الوحيد.",
    extractionKey: {
      l: "Administration Building, Basement B1, Records Archive Room B-12.",
      l_ar: "مبنى الإدارة، القبو B1، غرفة أرشيف الوثائق B-12.",
      n_nature: "Fallen heavy furniture with physical entrapment and suspected leg fracture.",
      n_nature_ar: "سقوط أثاث ثقيل (خزانة معدنية) مع احتجاز جسدي واشتباه كسر في الساقين.",
      n_numbers: "One clerk conscious and trapped under heavy metal cabinet.",
      n_numbers_ar: "موظف واحد واعٍ ومحتجز تحت الخزانة المعدنية الثقيلة.",
      h: "Heavy weight pinning victim, single exit door obstructed by fallen file boxes.",
      h_ar: "ثقل كبير ضاغط على المصاب، وانسداد مخرج الغرفة بالملفات والصناديق الساقطة."
    },
    plainLanguageTips: {
      locationHint: "Admin Basement B1, Archive Room B-12",
      locationHintAr: "قبو الإدارة B1، غرفة الأرشيف B-12",
      natureHint: "Heavy steel cabinet fell on employee's legs",
      natureHintAr: "سقوط خزانة حديد ثقيلة على أرجل الموظف",
      numbersHint: "1 employee trapped, conscious, in severe pain",
      numbersHintAr: "موظف واحد محتجز، واعٍ، يتألم بشدة",
      hazardsHint: "Exit door blocked by loose boxes, heavy weight on legs",
      hazardsHintAr: "الباب مسدود بالصناديق، وزن ثقيل فوق الساقين"
    }
  },
  {
    id: 3,
    title: "Admin IT Server Room Battery Smoke",
    titleAr: "تصاعد دخان بطاريات خوادم تقنية المعلومات",
    department: "Administrative IT Services",
    departmentAr: "تقنية المعلومات الإدارية",
    floor: "2nd Floor • Room 210",
    floorAr: "الطابق الثاني • غرفة 210",
    scenarioText: "In the Administration Building, 2nd Floor, Office IT Server Room 210, a backup battery pack (UPS unit) inside an equipment rack overheated and began swelling, emitting thick white smoke with a strong acid smell. The automatic smoke alarm is beeping loudly. One IT technician managed to crawl out the door; he is sitting on the floor dizzy and coughing from the fumes. No other people are inside. The server room contains rows of live electrical server racks and the automatic fire gas suppression system warning light is blinking.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الثاني، غرفة خوادم المكاتب (غرفة 210)، ارتفعت حرارة جهاز بطاريات الطوارئ (UPS) داخل خزانة المعدات وبدأ ينتفخ ويطلق دخاناً أبيض كثيفاً برائحة حمضية خانقة. جهاز إنذار الدخان يصدر صوتاً مرتفعاً. تمكن فني حاسب آلي من الزحف خارج الغرفة، وهو جالس في الممر يشعر بالدوار ويسعل بسبب الدخان. لا يوجد أحد بالداخل. الغرفة مليئة بأجهزة خوادم كهربائية موصولة بالتيار، ومصباح نظام إطفاء الغاز التلقائي يومض باللون الأصفر.",
    extractionKey: {
      l: "Administration Building, 2nd Floor, IT Server Room 210.",
      l_ar: "مبنى الإدارة، الطابق الثاني، غرفة خوادم تقنية المعلومات 210.",
      n_nature: "Overheating backup battery pack producing acidic white smoke.",
      n_nature_ar: "سخونة زائدة في بطاريات طوارئ كهربائية مع انبعاث دخان أبيض حمضي.",
      n_numbers: "One IT technician conscious with dizziness and smoke inhalation.",
      n_numbers_ar: "فني حاسب آلي واحد واعٍ يعاني من دوار واستنشاق دخان.",
      h: "Toxic battery acid fumes, live computer server equipment, impending gas fire discharge.",
      h_ar: "أبخرة بطاريات سامة، أجهزة خوادم كهربائية متصلة، واحتمال إطلاق غاز الإطفاء بالغرفة."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 2nd Floor, IT Server Room 210",
      locationHintAr: "مبنى الإدارة، الطابق 2، غرفة السيرفر 210",
      natureHint: "Overheating battery backup smoking with acid smell",
      natureHintAr: "بطارية خادم تسخن وتطلق دخاناً ورائحة حمض",
      numbersHint: "1 technician conscious, coughing and dizzy",
      numbersHintAr: "فني واحد واعٍ، يسعل ويشعر بالدوار",
      hazardsHint: "Acid fumes, electrical servers, automatic fire gas system",
      hazardsHintAr: "أبخرة حمضية، كهرباء خوادم، نظام إطفاء الغاز"
    }
  },
  {
    id: 4,
    title: "Executive Boardroom Medical Collapse",
    titleAr: "حالة إغماء مفاجئة في قاعة اجتماعات الإدارة العليا",
    department: "Executive Management",
    departmentAr: "الإدارة العليا والتنفيذية",
    floor: "5th Floor • Room 501",
    floorAr: "الطابق الخامس • غرفة 501",
    scenarioText: "In the Administration Headquarters, 5th Floor, Executive Boardroom Room 501, during an annual budget meeting, a 55-year-old department director clutched his chest and collapsed onto the carpet. He is completely unresponsive, not answering questions, and breathing very slowly and irregularly. Eight other managers in the room are in shock and shouting for help. The victim is lying between heavy conference chairs in a narrow space, and nobody in the room is trained in CPR.",
    scenarioTextAr: "في المقر الإداري الرئيسي، الطابق الخامس، قاعة الاجتماعات التنفيذية (غرفة 501)، وخلال اجتماع الميزانية السنوية، أمسك مدير إدارة (55 عاماً) بصدره وسقط فجأة مغشياً عليه على سجادة الأرضية. المصاب فاقد للوعي تماماً ولا يستجيب لأي نداء، وتنفسه بطيء جداً وغير منتظم. يوجد ثمانية مدراء آخرين في القاعة في حالة ذعر ويطلبون المساعدة. المصاب مستلقٍ في مساحة ضيقة بين كراسي الاجتماعات الثقيلة، ولا يوجد أحد بالقاعة مدرب على الإنعاش القلبي.",
    extractionKey: {
      l: "Administration Headquarters, 5th Floor, Executive Boardroom Room 501.",
      l_ar: "المقر الإداري الرئيسي، الطابق الخامس، قاعة الاجتماعات التنفيذية 501.",
      n_nature: "Sudden medical collapse, suspected cardiac arrest / heart event.",
      n_nature_ar: "حالة إغماء وسقوط مفاجئ، اشتباه أزمة قلبية حادة.",
      n_numbers: "One person unconscious / unresponsive with irregular breathing.",
      n_numbers_ar: "شخص واحد فاقد للوعي تماماً مع تنفس غير منتظم.",
      h: "Narrow physical access between heavy boardroom chairs, delayed CPR intervention.",
      h_ar: "ضيق المساحة بين كراسي الاجتماعات الثقيلة، وتأخر إجراء الإنعاش القلبي."
    },
    plainLanguageTips: {
      locationHint: "Admin HQ, 5th Floor, Boardroom 501",
      locationHintAr: "مبنى الإدارة، الطابق 5، قاعة 501",
      natureHint: "Medical emergency, person collapsed with chest pain",
      natureHintAr: "حالة طبية طارئة، سقوط مغشياً عليه بألم في الصدر",
      numbersHint: "1 manager unconscious, breathing slowly",
      numbersHintAr: "مدير واحد فاقد الوعي، تنفسه بطيء",
      hazardsHint: "Narrow space between chairs, urgent CPR needed",
      hazardsHintAr: "مكان ضيق بين الكراسي، حاجة عاجلة للإنعاش"
    }
  },
  {
    id: 5,
    title: "Finance Office Ceiling Water Pipe Burst",
    titleAr: "انفجار أنبوب مياه في سقف مكتب المالية",
    department: "Finance & Accounting",
    departmentAr: "المالية والمحاسبة",
    floor: "2nd Floor • Room 220",
    floorAr: "الطابق الثاني • غرفة 220",
    scenarioText: "In the Airport Administration Building, 2nd Floor, Finance and Payroll Office Room 220, a chilled air-conditioning water pipe broke above the suspended ceiling. Ceiling tiles collapsed, pouring dirty water over six desks, computers, and floor cables. Water is 4 centimeters deep across the carpet. One accountant slipped and fell heavily on the wet floor, crying out with a sprained wrist and back bruise. Seven other office workers moved out to the hallway. Three electrical power strips on the floor are submerged under water and buzzing.",
    scenarioTextAr: "في مبنى إدارة المطار، الطابق الثاني، قسم المالية والرواتب (غرفة 220)، انكسر أنبوب مياه تبريد التكييف في السقف المستعار. سقطت ألواح الجبس، وتدفقت مياه متسخة بغزارة فوق ستة مكاتب وأجهزة الحاسب الآلي وأسلاك الكهرباء. بلغ ارتفاع الماء 4 سنتيمترات فوق السجاد. انزلقت إحدى المحاسبات وسقطت بقوة على الأرضية المبللة، وهي تبكي من ألم شديد في معصمها وظهرها. خرج سبعة موظفين آخرين إلى الممر. توجد ثلاث توصيلات كهربائية أرضية مغمورة كلياً بالماء وتصدر صوتاً يشبه الطنين.",
    extractionKey: {
      l: "Airport Administration Building, 2nd Floor, Finance Office Room 220.",
      l_ar: "مبنى إدارة المطار، الطابق الثاني، قسم المالية غرفة 220.",
      n_nature: "Major ceiling pipe burst with flooding and fall injury.",
      n_nature_ar: "انفجار أنبوب مياه بالسقف مع غرق المكتب وإصابة سقوط.",
      n_numbers: "One accountant conscious with wrist and back injuries; seven colleagues safe.",
      n_numbers_ar: "موظفة واحدة واعية مصابة بالتواء بالمعصم ورضوض بالظهر، وسبعة آخرون سالمون.",
      h: "Live electrical power strips submerged in water, wet slippery flooring, hanging ceiling tiles.",
      h_ar: "توصيلات كهربائية نشطة مغمورة بالماء، أرضية مبللة وزلقة، وألواح سقف متدلية."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 2nd Floor, Room 220 (Finance)",
      locationHintAr: "مبنى الإدارة، الطابق 2، غرفة 220 (المالية)",
      natureHint: "Burst water pipe flooding desks and floor",
      natureHintAr: "انفجار ماسورة ماء وغرق المكاتب والأرضية",
      numbersHint: "1 accountant injured from slipping, conscious",
      numbersHintAr: "محاسبة واحدة مصابة بسبب الانزلاق، واعية",
      hazardsHint: "Electric power strips in deep water, slippery floors",
      hazardsHintAr: "أسلاك كهرباء غارقة بالماء، أرضية زلقة"
    }
  },
  {
    id: 6,
    title: "Procurement Office Paper Shredder Fire",
    titleAr: "حريق جهاز تمزيق الورق في مكتب المشتريات",
    department: "Procurement & Contracts",
    departmentAr: "المشتريات والعقود",
    floor: "1st Floor • Room 115",
    floorAr: "الطابق الأول • غرفة 115",
    scenarioText: "In the Administration Building, 1st Floor, Procurement and Supply Office Room 115, a heavy-duty document shredder jammed while an employee was destroying thick contract binders. The electric motor overheated and ignited paper dust in the bin. Flames leaped out of the machine opening, creating acrid gray smoke that is making everyone cough. One purchasing officer has burning red eyes and breathing difficulty. The burning shredder is plugged into a wall outlet directly below a cork notice board covered in papers.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأول، مكتب المشتريات والعقود (غرفة 115)، علق جهاز تمزيق المستندات الكبير أثناء إتلاف مجلدات عقود ورقية. ارتفعت حرارة المحرك الكهربائي واشتعل غبار الورق في سلة الجهاز. خرجت ألسنة لهب صغيرة من فتحة الجهاز وتصاعد دخان رمادي لاذع تسبب بسعال المتواجدين. يعاني أحد موظفي المشتريات من احمرار شديد بالعينين وصعوبة في التنفس. الجهاز المشتعل موصول بمقبس كهربائي يقع أسفل لوحة إعلانات خشبية مليئة بالأوراق مباشرة.",
    extractionKey: {
      l: "Administration Building, 1st Floor, Procurement Office Room 115.",
      l_ar: "مبنى الإدارة، الطابق الأول، مكتب المشتريات غرفة 115.",
      n_nature: "Electric paper shredder motor fire with smoldering paper and smoke.",
      n_nature_ar: "حريق كهربائي في جهاز تمزيق الأوراق مع تصاعد دخان ورائحة لاذعة.",
      n_numbers: "One officer conscious with eye irritation and coughing.",
      n_numbers_ar: "موظف واحد واعٍ يعاني من تهيج العينين وصعوبة تنفس.",
      h: "Flames underneath paper notice board, live wall socket, irritating smoke in closed room.",
      h_ar: "ألسنة لهب أسفل لوحة ورقية، مقبس كهرباء نشط، ودخان لاذع في غرفة مغلقة."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 1st Floor, Room 115 (Procurement)",
      locationHintAr: "مبنى الإدارة، الطابق 1، غرفة 115 (المشتريات)",
      natureHint: "Paper shredder caught fire with smoke",
      natureHintAr: "اشتعال جهاز فرم الورق مع انبعاث دخان",
      numbersHint: "1 employee conscious with smoke coughing",
      numbersHintAr: "موظف واحد واعٍ يعاني من السعال",
      hazardsHint: "Wall socket connected, paper board above flames",
      hazardsHintAr: "الكهرباء موصولة، لوحة أوراق فوق اللهب"
    }
  },
  {
    id: 7,
    title: "Lobby Marble Floor Slip & Head Injury",
    titleAr: "انزلاق وإصابة في الرأس بردهة الاستقبال الرئيسية",
    department: "Admin Main Lobby & Badging",
    departmentAr: "استقبال الإدارة وإصدار البطاقات",
    floor: "Ground Floor • Main Entrance",
    floorAr: "الطابق الأرضي • المدخل الرئيسي",
    scenarioText: "In the Administration Building, Ground Floor Main Lobby near the Staff ID Badging Entrance, rainwater brought in by people's shoes created a hidden slick puddle on the polished marble tile. A female administrative assistant slipped, fell backwards, and hit the back of her head against the stainless-steel turnstile frame. She is lying on her back, dizzy and disoriented, with blood soaking her hair from a deep head cut. Other employees and visitors are gathering around, and the slippery wet floor has no warning sign.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأرضي، ردهة الاستقبال الرئيسية بالقرب من مدخل إصدار بطاقات الموظفين، تسببت مياه الأمطار المتسربة مع أحذية القادمين في تشكل بركة ماء زلقة على بلاط الرخام اللامع. انزلقت موظفة إدارية وسقطت إلى الخلف واصطدمت مؤخرة رأسها بقوة في إطار البوابة الإلكترونية المعدنية. الموظفة مستلقية على ظهرها، تشعر بالدوار وعدم الاتزان، وتنزف دماً من جرح عميق في مؤخرة الرأس. يتجمع الموظفون والزوار حولها، بينما الأرضية المبللة الزلقة تفتقر لأي لوحة تحذيرية.",
    extractionKey: {
      l: "Administration Building, Ground Floor Main Lobby, near Staff Badging Turnstile.",
      l_ar: "مبنى الإدارة، الطابق الأرضي، ردهة الاستقبال الرئيسية عند بوابة البطاقات.",
      n_nature: "Slip and fall on wet floor resulting in head trauma and active bleeding.",
      n_nature_ar: "انزلاق وسقوط على أرضية مبللة أدى إلى إصابة بالرأس ونزيف دموي.",
      n_numbers: "One female employee conscious but confused with bleeding scalp laceration.",
      n_numbers_ar: "موظفة واحدة واعية ولكن مشوشة الذهن، مصابة بنزيف في الرأس.",
      h: "Unmarked wet marble slip area, crowd crowding around patient, metal obstacle.",
      h_ar: "أرضية رخام مبللة بدون لوحة تحذير، تجمع المارة، ووجود حواف معدنية حادة."
    },
    plainLanguageTips: {
      locationHint: "Admin Ground Floor, Main Lobby Turnstiles",
      locationHintAr: "أرضي الإدارة، بوابات الردهة الرئيسية",
      natureHint: "Slip on wet floor, hit head on metal gate, bleeding",
      natureHintAr: "انزلاق على ماء، اصطدام الرأس ببوابة حديد، نزيف",
      numbersHint: "1 employee conscious, bleeding from head, dizzy",
      numbersHintAr: "موظفة واحدة واعية، تنزف من الرأس، تشعر بدوار",
      hazardsHint: "Slippery wet marble floor, no warning sign, crowd",
      hazardsHintAr: "رخام مبلل وزلق، لا توجد لوحة تحذير، تزاحم الناس"
    }
  },
  {
    id: 8,
    title: "Janitorial Closet Toxic Fume Release",
    titleAr: "تصاعد غازات سامة في غرفة أدوات النظافة",
    department: "Facilities & Office Housekeeping",
    departmentAr: "المرافق والخدمات المساندة",
    floor: "1st Floor • East Wing Closet G-04",
    floorAr: "الطابق الأول • مستودع الجناح الشرقي G-04",
    scenarioText: "In the Administration Building, 1st Floor East Wing, inside Janitorial Supply Room G-04 next to the administrative offices, a cleaning staff member poured bleach and an acidic bathroom descaler into the same bucket. A chemical reaction instantly released a yellow-tinted, sharp chlorine gas cloud. The cleaner staggered into the office hallway choking, coughing violently, and vomiting. Nobody else is in the closet, but the toxic fumes are being sucked into the general air-conditioning return vent, spreading toward offices.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأول الجناح الشرقي، داخل غرفة أدوات النظافة (G-04) المجاورة للمكاتب الإدارية، قام عامل نظافة بخلط مادة المبيض (الكلور) مع سائل حمضي لتنظيف الحمامات في نفس الدلو. أدى التفاعل الكيميائي الفوري إلى انبعاث سحابة غاز الكلور الخانقة بلون مائل للصفرة. خرج العامل إلى ممر المكاتب وهو يترنح ويسعل بشدة ويتقيأ. لا يوجد أحد داخل الغرفة، لكن الأبخرة الكيميائية السامة بدأت بالدخول إلى فتحة سحب التكييف المركزي متجهة نحو المكاتب.",
    extractionKey: {
      l: "Administration Building, 1st Floor East Wing, Janitorial Closet G-04.",
      l_ar: "مبنى الإدارة، الطابق الأول الجناح الشرقي، مستودع النظافة G-04.",
      n_nature: "Accidental chemical mix creating toxic chlorine gas.",
      n_nature_ar: "خلط مواد تنظيف كيميائية أنتج غاز كلور سام وخانق.",
      n_numbers: "One cleaner conscious with acute chemical respiratory distress and vomiting.",
      n_numbers_ar: "عامل نظافة واحد واعٍ يعاني من ضيق تنفس حاد وسعال وقيء.",
      h: "Toxic chlorine fumes entering office air-conditioning system, open chemical bucket.",
      h_ar: "تسرب غازات سامة إلى تكييف المكاتب، ودلو كيميائي مفتوح يتفاعل بالداخل."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 1st Floor East, Cleaning Room G-04",
      locationHintAr: "مبنى الإدارة، الطابق 1 شرق، غرفة النظافة G-04",
      natureHint: "Bleach and acid mixed, making toxic gas",
      natureHintAr: "خلط كلور مع حمض أطلق غازاً ساماً",
      numbersHint: "1 cleaner conscious, coughing violently and vomiting",
      numbersHintAr: "عامل واحد واعٍ، يسعل بشدة ويتقيأ",
      hazardsHint: "Toxic gas spreading through air vents into offices",
      hazardsHintAr: "غاز سام ينتشر عبر التكييف إلى مكاتب الموظفين"
    }
  },
  {
    id: 9,
    title: "Call Center Under-Desk Power Strip Fire",
    titleAr: "اشتعال توصيلة كهربائية أسفل مكاتب خدمة العملاء",
    department: "Customer Relations Call Center",
    departmentAr: "مركز علاقات وخدمة العملاء الإداري",
    floor: "3rd Floor • Cluster C",
    floorAr: "الطابق الثالث • قطاع المكاتب C",
    scenarioText: "In the Administration Building, 3rd Floor, Customer Care Office, Workstation Cluster C, an overloaded 6-socket power extension bar under an employee desk sparked loudly and caught fire. The plastic casing and computer power cords melted, igniting a plastic wastepaper basket. Flames reached 40 centimeters high, scorching the cloth desk partition. Two agents in the cubicle jumped back with minor smoke inhalation; one is having an anxiety panic attack. Flaming plastic drops are dripping onto the synthetic office carpet.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الثالث، مكتب رعاية العملاء (مجموعة المكاتب C)، حدث ماس كهربائي مصحوب بصوت قوي في توصيلة كهرباء أسفل أحد المكاتب بسبب زيادة الأحمال. ذاب الغلاف البلاستيكي وأسلاك الكمبيوتر، واشتعلت سلة مهملات بلاستيكية مجاورة. ارتفع اللهب بارتفاع 40 سم وبدأ يحرق الحاجز القماشي للمكتب. ابتعد موظفان عن المكان ويعانيان من استنشاق خفيف للدخان، أحدهما يمر بنوبة ذعر وهلع. تتساقط قطرات بلاستيك مشتعلة على سجادة المكتب.",
    extractionKey: {
      l: "Administration Building, 3rd Floor, Customer Care Office, Workstation Cluster C.",
      l_ar: "مبنى الإدارة، الطابق الثالث، مكتب رعاية العملاء، قطاع المكاتب C.",
      n_nature: "Under-desk electrical power strip fire igniting plastic and desk partition.",
      n_nature_ar: "حريق كهربائي بتوصيلة أسفل المكتب امتد لسلة مهملات وحاجز المكاتب.",
      n_numbers: "Two employees conscious; one with mild smoke inhalation, one with panic attack.",
      n_numbers_ar: "موظفان اثنان واعيان، أحدهما استنشق دخاناً والآخر يعاني من نوبة هلع.",
      h: "Live electrical spark, burning carpet and cloth dividers, smoke in open office.",
      h_ar: "شرر كهربائي نشط، احتراق السجاد والحواجز القماشية، ودخان في المكتب المفتوح."
    },
    plainLanguageTips: {
      locationHint: "Admin 3rd Floor, Customer Care, Desk Cluster C",
      locationHintAr: "إدارة الطابق 3، خدمة العملاء، مكاتب C",
      natureHint: "Power strip fire under desk burning trash can and partition",
      natureHintAr: "حريق توصيلة أسفل المكتب أحرق سلة المهملات والحاجز",
      numbersHint: "2 staff conscious, 1 panicked, 1 coughing",
      numbersHintAr: "موظفان واعيان، أحدهما مصاب بذعر والآخر يسعل",
      hazardsHint: "Live electricity, burning plastic dripping on carpet",
      hazardsHintAr: "كهرباء متصلة، بلاستيك يقطر مشتعلاً على السجاد"
    }
  },
  {
    id: 10,
    title: "High Wind Window Shatter & Glass Cuts",
    titleAr: "تحطم نافذة مكتب بسبب الرياح وإصابة بجروح زجاجية",
    department: "Legal Affairs & Contracts",
    departmentAr: "الشؤون القانونية والعقود",
    floor: "4th Floor • Room 408",
    floorAr: "الطابق الرابع • غرفة 408",
    scenarioText: "In the Administration Building, 4th Floor, Legal Affairs Corner Office Room 408, sudden strong storm winds slammed an unlatched exterior window, shattering the large glass pane inwards across two workstations. A legal assistant sitting at the desk was showered with broken glass, suffering deep bleeding cuts on his right forearm and shoulder. Two colleagues helped him back into the corridor. Jagged, heavy shards of broken glass remain loose in the window frame 15 meters above the ground, vibrating in the wind.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الرابع، مكتب الشؤون القانونية بالزاوية (غرفة 408)، تسببت رياح عاصفة مفاجئة في صدم نافذة زجاجية خارجية غير مغلقة بإحكام، مما أدى لتحطم لوح الزجاج الكبير إلى الداخل وتناثره فوق مكتبي عمل. أصيب باحث قانوني جالس إلى مكتبه بجروح غائرة ونزيف دموي في ساعده الأيمن وكتفه نتيجة تطاير شظايا الزجاج. ساعده زميلان بالخروج إلى الممر. لا تزال هناك قطع زجاجية حادة وكبيرة معلقة في إطار النافذة على ارتفاع 15 متراً عن الأرض وتهتز مع الرياح.",
    extractionKey: {
      l: "Administration Building, 4th Floor, Legal Affairs Corner Office Room 408.",
      l_ar: "مبنى الإدارة، الطابق الرابع، مكتب الشؤون القانونية غرفة 408.",
      n_nature: "Exterior window glass breakage with sharp flying shrapnel lacerations.",
      n_nature_ar: "تحطم زجاج نافذة خارجية وتطاير شظايا حادة مسببة جروحاً ونزيفاً.",
      n_numbers: "One legal assistant conscious with deep bleeding arm and shoulder cuts.",
      n_numbers_ar: "موظف واحد واعٍ مصاب بجروح غائرة ونزيف في الذراع والكتف.",
      h: "Loose sharp glass shards hanging in frame, gusting wind threatening more falling glass.",
      h_ar: "شظايا زجاج حادة متدلية من النافذة ورياح قوية تهدد بسقوط المزيد."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 4th Floor, Room 408 (Legal)",
      locationHintAr: "مبنى الإدارة، الطابق 4، غرفة 408 (القانونية)",
      natureHint: "Window smashed by wind, flying glass cut employee",
      natureHintAr: "انكسار زجاج النافذة بفعل الرياح وجروح للموظف",
      numbersHint: "1 employee conscious, bleeding from arm",
      numbersHintAr: "موظف واحد واعٍ، ينزف من ذراعه",
      hazardsHint: "Loose broken glass in frame, strong winds blowing",
      hazardsHintAr: "زجاج حاد مكسور بالنافذة، رياح شديدة"
    }
  },
  {
    id: 11,
    title: "Facilities Breakroom Microwave Fire",
    titleAr: "حريق ميكروويف في استراحة قسم المرافق",
    department: "Facilities & Office Services",
    departmentAr: "إدارة المرافق والخدمات",
    floor: "2nd Floor • Room 204",
    floorAr: "الطابق الثاني • غرفة 204",
    scenarioText: "In the Administration Building, 2nd Floor, Facilities Management Staff Pantry Room 204, someone put a metal container inside the office microwave oven. Violent electric arcs set the plastic housing and food containers on fire. Dense black plastic smoke is billowing into the breakroom and seeping into the central office corridor. One technician tried to douse it with a towel and suffered smoke coughing and stinging eyes; all six other people evacuated into the hallway. The microwave is still sparking and plugged into the wall.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الثاني، بوفيه قسم إدارة المرافق (غرفة 204)، وضع أحد الموظفين وعاءً معدنياً داخل جهاز الميكروويف. حدثت شرارات كهربائية متكررة أشعلت الغلاف البلاستيكي وعلب الطعام. يتصاعد دخان أسود كثيف يملأ غرفة الاستراحة ويتسرب إلى ممر المكاتب الرئيسي. حاول أحد الفنيين إطفاء النار بقطعة قماش فأصيب بسعال حاد وحرقة بالعينين، بينما أخلى ستة أشخاص آخرين المكان نحو الممر. الميكروويف لا يزال يطلق شرراً وموصولاً بالكهرباء.",
    extractionKey: {
      l: "Administration Building, 2nd Floor, Facilities Staff Pantry Room 204.",
      l_ar: "مبنى الإدارة، الطابق الثاني، بوفيه موظفي المرافق غرفة 204.",
      n_nature: "Microwave appliance fire caused by metal arcing, producing thick smoke.",
      n_nature_ar: "حريق في جهاز ميكروويف بسبب وعاء معدني مع تصاعد دخان بلاستيكي كثيف.",
      n_numbers: "One technician conscious with mild smoke inhalation; six others evacuated.",
      n_numbers_ar: "فني واحد واعٍ يعاني من استنشاق الدخان، وإخلاء ستة آخرين بسلام.",
      h: "Active electrical sparks from plugged-in appliance, smoke spreading to hallway.",
      h_ar: "شرر كهربائي من جهاز موصول بالطاقة، وانتشار الدخان لممر المكاتب."
    },
    plainLanguageTips: {
      locationHint: "Admin 2nd Floor, Facilities Pantry 204",
      locationHintAr: "إدارة الطابق 2، استراحة المرافق 204",
      natureHint: "Microwave caught fire from metal, smoking heavily",
      natureHintAr: "اشتعال ميكروويف بسبب معدن، دخان كثيف",
      numbersHint: "1 staff conscious with coughing, 6 safely evacuated",
      numbersHintAr: "موظف واحد واعٍ يسعل، و6 تم إخلاؤهم بأمان",
      hazardsHint: "Appliance sparking, plugged into wall, hallway smoke",
      hazardsHintAr: "الجهاز يطلق شرراً وموصول بالكهرباء، دخان بالممر"
    }
  },
  {
    id: 12,
    title: "Training Room Severe Allergic Reaction",
    titleAr: "حساسية طعام حادة وصعوبة تنفس بقاعة التدريب",
    department: "Corporate Training & Development",
    departmentAr: "التدريب والتطوير الإداري",
    floor: "Ground Floor • Auditorium G-05",
    floorAr: "الطابق الأرضي • قاعة المحاضرات G-05",
    scenarioText: "In the Administration Building, Ground Floor, Training Auditorium G-05, during an onboarding workshop coffee break, a 28-year-old administrative trainee with a known peanut allergy accidentally ate a cookie containing nuts. She is suffering acute anaphylaxis: her lips and tongue are swollen, her throat is closing, and she is gasping for air. She is sitting on a chair, sweating, conscious but unable to speak. Twenty-five trainees are crowding around her in distress. No emergency epinephrine auto-injector (EpiPen) is available in the room.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأرضي، قاعة التدريب (G-05)، وخلال استراحة ورشة تدريب الموظفين الجدد، تناولت متدربة إدارية (28 عاماً) بالخطأ قطعة بسكويت تحتوي على فول سوداني وهي تعاني من حساسية شديدة منه. أصيبت الموظفة بصدمة تحسسية حادة: انتفخت شفتاها ولسانها، وضاقت قصباتها الهوائية، وتكافح للتنفس بصوت صفير. هي جالسة على كرسي وتتصبب عرقاً، واعية لكنها عاجزة عن الكلام. يتزاحم حولها 25 متدرباً في حالة قلق شديد، ولا يتوفر قلم حَقن حساسية (إبينفرين) بالقاعة.",
    extractionKey: {
      l: "Administration Building, Ground Floor, Training Auditorium G-05.",
      l_ar: "مبنى الإدارة، الطابق الأرضي، قاعة التدريب G-05.",
      n_nature: "Severe life-threatening allergic reaction (anaphylaxis) with airway swelling.",
      n_nature_ar: "صدمة حساسية حادة مهددة للحياة (تأق) مع تورم مجرى التنفس وصعوبة تنفس.",
      n_numbers: "One trainee conscious but unable to breathe properly; 25 uninjured attendees.",
      n_numbers_ar: "متدربة واحدة واعية تعاني من اختناق وتنفس حرج، و25 شخصاً دون إصابات.",
      h: "Imminent total airway closure, no emergency allergy medicine on site, crowd blocking airflow.",
      h_ar: "خطر انسداد مجرى الهواء كلياً، عدم توفر دواء حساسية، وتزاحم الناس حول المصابة."
    },
    plainLanguageTips: {
      locationHint: "Admin Ground Floor, Training Room G-05",
      locationHintAr: "أرضي الإدارة، قاعة التدريب G-05",
      natureHint: "Severe food allergy, swollen throat, gasping for breath",
      natureHintAr: "حساسية طعام شديدة، تورم الحلق، صعوبة تنفس بالغة",
      numbersHint: "1 trainee conscious, struggling to breathe",
      numbersHintAr: "متدربة واحدة واعية، تختنق وتكافح للتنفس",
      hazardsHint: "Throat closing rapidly, no EpiPen present, crowd",
      hazardsHintAr: "انسداد الحلق سريعاً، لا يوجد دواء، تجمع الحضور"
    }
  },
  {
    id: 13,
    title: "Admin Tower Elevator Car Stoppage",
    titleAr: "تعطل مصعد برج الإدارة واحتجاز موظفين بداخله",
    department: "Administration Tower Vertical Transit",
    departmentAr: "مصاعد برج الإدارة الرئيسي",
    floor: "Between 2nd and 3rd Floors • Car 2",
    floorAr: "بين الطابقين الثاني والثالث • مصعد 2",
    scenarioText: "In the Administration Building, Central Elevator Core, Passenger Elevator Car 2 experienced a sudden mechanical brake lock and stopped abruptly between the 2nd and 3rd floors. The ceiling ventilation fan stopped and cabin lights are dimming. Three administrative staff members are trapped inside the elevator car. One employee has severe claustrophobia and asthma; she is hyperventilating and crying on the floor. The cabin floor is hanging 1.5 meters above the 2nd floor threshold, and staff outside are attempting to pry open the outer doors with an office ruler.",
    scenarioTextAr: "في مبنى الإدارة، برج المصاعد الرئيسي، توقف مصعد الموظفين رقم 2 فجأة وبشكل عنيف بين الطابقين الثاني والثالث نتيجة انغلاق مكابح الطوارئ. توقفت مروحة تهوية السقف وخفتت أضواء الكابينة. ثلاثة موظفين إداريين محتجزون داخل المصعد. إحدى الموظفات تعاني من الربو والخوف الشديد من الأماكن المغلقة، وهي تتنفس بسرعة وتبكي ممددة على أرضية المصعد. أرضية المصعد معلقة على ارتفاع متر ونصف فوق مستوى الطابق الثاني، ويحاول بعض الموظفين بالخارج فتح الأبواب باستخدام مسطرة مكتبية.",
    extractionKey: {
      l: "Administration Building, Central Elevator Shaft, Car 2 between Floors 2 and 3.",
      l_ar: "مبنى الإدارة، بئر المصاعد المركزي، مصعد 2 بين الطابقين الثاني والثالث.",
      n_nature: "Elevator mechanical failure with trapped passengers and acute medical panic.",
      n_nature_ar: "عطل ميكانيكي بالمصعد مع احتجاز ركاب ونوبة هلع وضيق تنفس للمحتجزين.",
      n_numbers: "Three trapped staff: one conscious with asthma/panic attack, two uninjured.",
      n_numbers_ar: "ثلاثة موظفين محتجزين: موظفة واعية تعاني من ربو وهلع، واثنان سالمون.",
      h: "Car stopped between floors, poor ventilation, untrained staff prying doors risking fall.",
      h_ar: "توقف المصعد بين الأدوار، نقص التهوية، ومحاولات غير مدربة لفتح الباب قد تسبب سقوطاً."
    },
    plainLanguageTips: {
      locationHint: "Admin Elevator Car 2, between Floor 2 and 3",
      locationHintAr: "مصعد الإدارة رقم 2، بين الطابق 2 و3",
      natureHint: "Elevator stuck between floors with 3 people inside",
      natureHintAr: "مصعد معطل بين الأدوار بداخله 3 موظفين",
      numbersHint: "3 people trapped, 1 with severe panic/asthma, awake",
      numbersHintAr: "3 محتجزين، أحدهم يعاني من ربو وهلع، واعون",
      hazardsHint: "Elevator hanging between floors, people prying doors",
      hazardsHintAr: "الكابينة معلقة، محاولات عشوائية لفتح الباب"
    }
  },
  {
    id: 14,
    title: "Central Office Staircase Fall & Head Injury",
    titleAr: "سقوط على درج الإدارة المركزي وإصابة بالرأس",
    department: "Administrative Facilities & Safety",
    departmentAr: "السلامة ومرافق الإدارة",
    floor: "Stairwell A • Landing Between 3rd & 2nd Floors",
    floorAr: "الدرج A • استراحة الدرج بين الطابقين 3 و2",
    scenarioText: "In the Administration Building, Main Stairwell A between the 3rd and 2nd floors, a facilities clerk carrying two heavy boxes of photocopy paper tripped over a torn rubber stair nose. He tumbled down ten concrete steps, hitting his head on the steel pipe railing. He is lying motionless on the landing platform, conscious but groaning weakly, unable to move his left leg which is bent at an awkward angle. Broken cardboard boxes, scattered reams of paper, and blood stains cover the emergency exit stairs.",
    scenarioTextAr: "في مبنى الإدارة، الدرج الرئيسي (A) بين الطابقين الثالث والثاني، تعثر موظف خدمات كان يحمل صندوقين ثقيلين من ورق الطباعة بسبب تمزق الحافة المطاطية للدرجة. تدحرج الموظف وسقط من فوق عشر درجات إسمنتية واصطدم رأسه بدرابزين الحديد. هو ممدد بلا حراك على استراحة الدرج، في وعيه ولكنه يئن بضعف ولا يستطيع تحريك ساقه اليسرى المثنية بزاوية غير طبيعية. تغطي الصناديق الممزقة وحزم الورق المتناثرة وبقع الدم ممر درج الطوارئ.",
    extractionKey: {
      l: "Administration Building, Stairwell A, landing between 2nd and 3rd Floors.",
      l_ar: "مبنى الإدارة، درج الطوارئ A، الاستراحة بين الطابقين 2 و3.",
      n_nature: "Fall down concrete stairs resulting in head trauma and suspected broken leg.",
      n_nature_ar: "سقوط من على درج إسمنتي نتج عنه ضربة بالرأس واشتباه كسر في الساق.",
      n_numbers: "One male clerk conscious but disoriented with severe leg fracture and head trauma.",
      n_numbers_ar: "موظف واحد واعٍ ولكن بحالة ضعف، مصاب بكسر في الساق وكدمة بالرأس.",
      h: "Emergency exit staircase obstructed by boxes, slippery scattered paper, spinal injury risk.",
      h_ar: "انسداد درج الطوارئ بالصناديق والأوراق الزلقة، وخطر تحريك المصاب مع إصابة العمود الفقري."
    },
    plainLanguageTips: {
      locationHint: "Admin Stairwell A, between Floors 2 and 3",
      locationHintAr: "درج الإدارة A، بين الطابقين 2 و3",
      natureHint: "Fell down 10 stairs carrying paper boxes, leg broken",
      natureHintAr: "سقوط من الدرج أثناء حمل ورق، اشتباه كسر بالساق",
      numbersHint: "1 employee conscious, moaning, leg bent awkwardly",
      numbersHintAr: "موظف واحد واعٍ يئن، ساقه ملتوية بشكل غير طبيعي",
      hazardsHint: "Stairs blocked by paper, potential neck/back injury",
      hazardsHintAr: "الدرج مسدود بالورق، احتمال إصابة بالرقبة والظهر"
    }
  },
  {
    id: 15,
    title: "Mailroom Laminating Machine Fire",
    titleAr: "حريق جهاز التغليف الحراري في قسم البريد",
    department: "Admin Mailroom & Print Center",
    departmentAr: "إدارة البريد والطباعة المركزية",
    floor: "Ground Floor • Room G-18",
    floorAr: "الطابق الأرضي • غرفة G-18",
    scenarioText: "In the Administration Building, Ground Floor, Central Mailroom and Copy Center Room G-18, a commercial heat laminator was left turned on while feeding thick plastic badge pouches. The plastic jammed on the heated rollers, caught fire, and melted down into cardboard packaging boxes stacked under the wooden worktable. Gray, stinging plastic smoke is pouring into the room. The mailroom operator ran out coughing; no other person is inside. Five large cardboard boxes of printer paper and toner cartridges are stacked against the burning table.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأرضي، مكتب البريد المركزي ومركز الطباعة (غرفة G-18)، تُرك جهاز التغليف الحراري يعمل أثناء تغليف بطاقات بلاستيكية سميكة. علق البلاستيك بالأسطوانات الساخنة واشتعلت فيه النيران وذاب متساقطاً على صناديق كرتون أسفل طاولة العمل الخشبية. يتصاعد دخان رمادي لاذع يملأ الغرفة بالكامل. ركض موظف البريد خارجاً وهو يسعل، ولا يوجد أي شخص بالداخل. توجد خمسة صناديق كرتونية كبيرة مليئة بورق الطباعة وعبوات الحبر ملاصقة للطاولة المشتعلة.",
    extractionKey: {
      l: "Administration Building, Ground Floor, Mailroom and Print Center Room G-18.",
      l_ar: "مبنى الإدارة، الطابق الأرضي، مركز البريد والطباعة غرفة G-18.",
      n_nature: "Overheated laminating machine plastic fire spreading to cardboard boxes.",
      n_nature_ar: "حريق بلاستيك بجهاز تغليف حراري امتد لصناديق كرتون وأوراق.",
      n_numbers: "One mail clerk conscious with minor smoke inhalation; zero trapped.",
      n_numbers_ar: "موظف بريد واحد واعٍ استنشق دخاناً خفيفاً، ولا يوجد محتجزون.",
      h: "Toner cartridges and bulk paper next to flames, toxic plastic smoke, wooden table.",
      h_ar: "عبوات حبر وورق بجوار اللهب، دخان بلاستيكي سام، وطاولة خشبية مشتعلة."
    },
    plainLanguageTips: {
      locationHint: "Admin Ground Floor, Print Center Room G-18",
      locationHintAr: "أرضي الإدارة، مركز الطباعة غرفة G-18",
      natureHint: "Laminator caught fire, burning plastic and paper boxes",
      natureHintAr: "اشتعال جهاز تغليف وبلاستيك وصناديق ورق",
      numbersHint: "1 clerk conscious with minor cough, outside room",
      numbersHintAr: "موظف واحد واعٍ يسعل بخفة، خارج الغرفة",
      hazardsHint: "Toner cartridges near fire, heavy smoke, wooden table",
      hazardsHintAr: "أحبار وورق قرب النار، دخان كثيف، طاولة خشب"
    }
  },
  {
    id: 16,
    title: "Executive Corridor Water Cooler Electrical Short",
    titleAr: "ماس كهربائي في مبرد مياه ممر الإدارة العليا",
    department: "Executive Suite Corridor",
    departmentAr: "ممر مكاتب الإدارة التنفيذية",
    floor: "5th Floor • Outside Room 510",
    floorAr: "الطابق الخامس • أمام مكتب 510",
    scenarioText: "In the Administration Building, 5th Floor Executive Wing corridor outside Office Room 510, a freestanding electric water cooler developed an internal short circuit. Loud buzzing and popping noises were heard, and sparks began jumping from the back cover into an expanding puddle of water leaking from the internal bottle valve. The water puddle is 2 meters wide on the carpeted floor. No staff are injured, but two executive secretaries are warning passing visitors away. The water puddle touches an energized 220V floor power box that is crackling.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الخامس، ممر جناح الإدارة التنفيذية أمام مكتب 510، حدث ماس كهربائي داخلي في مبرد مياه كهربائي قائم. سُمع صوت أزيز وفرقعة قوية وبدأت شرارات تتطاير من الغطاء الخلفي إلى بركة مياه تتسع باستمرار بسبب تسرب الماء من صمام القارورة. بركة الماء تمتد لمسافة مترين فوق السجاد. لم يُصب أحد بأذى، لكن اثنتين من السكرتيرات تقفان لتحذير المارة من الاقتراب. بركة الماء تلامس صندوق مقابس كهربائية أرضية نشطة (220 فولت) تصدر صوتاً كهربائياً مقلقاً.",
    extractionKey: {
      l: "Administration Building, 5th Floor Executive Wing, corridor outside Room 510.",
      l_ar: "مبنى الإدارة، الطابق الخامس، ممر الإدارة التنفيذية أمام غرفة 510.",
      n_nature: "Electrical short circuit and water dispenser leak pooling across live floor outlet.",
      n_nature_ar: "ماس كهربائي وتطاير شرر مع تسرب مياه فوق مقبس كهربائي أرضي نشط.",
      n_numbers: "Zero physical casualties; two uninjured staff members directing people away.",
      n_numbers_ar: "لا توجد إصابات بشرية، وموظفتان تقومان بتوجيه الناس بعيداً.",
      h: "Electrified standing water puddle, active sparks, risk of electrocution to pedestrians.",
      h_ar: "مياه مكهربة على الأرضية، شرر نشط، وخطر صعق كهربائي للمارة في الممر."
    },
    plainLanguageTips: {
      locationHint: "Admin 5th Floor, Executive Hall outside 510",
      locationHintAr: "إدارة الطابق 5، ممر التنفيذيين أمام 510",
      natureHint: "Water cooler sparking with water leaking on power outlet",
      natureHintAr: "مبرد ماء يطلق شرراً مع تسرب ماء فوق الكهرباء",
      numbersHint: "Zero casualties, 2 safe staff standing by",
      numbersHintAr: "صفر إصابات، موظفتان سالمتان في المكان",
      hazardsHint: "Water puddle is electrified, electrocution danger",
      hazardsHintAr: "بركة الماء مكهربة، خطر الصعق بالكهرباء"
    }
  },
  {
    id: 17,
    title: "Internal Audit Paint Solvent Fume Inhalation",
    titleAr: "استنشاق أبخرة دهانات ومذيبات بمكتب المراجعة الداخلية",
    department: "Internal Audit & Compliance",
    departmentAr: "المراجعة الداخلية والامتثال",
    floor: "4th Floor • Room 412",
    floorAr: "الطابق الرابع • غرفة 412",
    scenarioText: "In the Administration Building, 4th Floor, Internal Audit Suite Room 412, solvent fumes from heavy carpet glue and quick-dry paint in a neighboring storage room migrated through shared ceiling vents into the audit office. The enclosed room has no opening windows. Three female auditors suffered severe nausea, throbbing headaches, and dizziness; one auditor collapsed unconscious off her chair onto the floor. Two colleagues dragged her out into the hallway and are trying to revive her. Strong chemical fumes remain trapped inside Room 412.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الرابع، مكاتب المراجعة الداخلية والامتثال (غرفة 412)، تسربت أبخرة كيميائية قوية ناتجة عن غراء سجاد ودهان سريع الجفاف في مستودع مجاور عبر فتحات التكييف المشتركة إلى داخل مكتب المراجعة. الغرفة مغلقة ولا تحتوي على نوافذ تفتح. أصيبت ثلاث موظفات بغثيان شديد وصداع حاد ودوار، وسقطت إحداهن فاقدة للوعي من على كرسيها على الأرض. سحبها زميلان إلى ممر الطابق ويحاولان إفاقتها. لا تزال الأبخرة الكيميائية القوية محصورة داخل الغرفة 412.",
    extractionKey: {
      l: "Administration Building, 4th Floor, Internal Audit Suite Room 412.",
      l_ar: "مبنى الإدارة، الطابق الرابع، مكاتب المراجعة الداخلية غرفة 412.",
      n_nature: "Toxic solvent vapor accumulation causing respiratory distress and loss of consciousness.",
      n_nature_ar: "تجمع أبخرة مذيبات ودهان كيميائية سامة تسببت بضيق تنفس وفقدان وعي.",
      n_numbers: "One auditor unconscious on floor; two colleagues conscious with dizziness and nausea.",
      n_numbers_ar: "موظفة واحدة فاقدة للوعي، واثنتان واعيتان تشعران بدوار وغثيان.",
      h: "Confined toxic atmosphere in unventilated room, vapor migrating into corridor.",
      h_ar: "تركيز كيميائي سام في غرفة مغلقة بلا تهوية، وتسرب الأبخرة للممر."
    },
    plainLanguageTips: {
      locationHint: "Admin Building, 4th Floor, Room 412 (Audit)",
      locationHintAr: "مبنى الإدارة، الطابق 4، غرفة 412 (المراجعة)",
      natureHint: "Glue and paint fumes made office workers dizzy and faint",
      natureHintAr: "أبخرة غراء ودهان أدت لدوخة وإغماء موظفة",
      numbersHint: "1 employee unconscious, 2 employees dizzy and nauseous",
      numbersHintAr: "موظفة واحدة فاقدة الوعي، واثنتان تشعران بدوار",
      hazardsHint: "Toxic air in closed office, fumes spreading through vents",
      hazardsHintAr: "هواء مسمم بغرفة مغلقة، أبخرة تنتشر عبر التكييف"
    }
  },
  {
    id: 18,
    title: "IT Helpdesk Swollen Laptop Battery Fire",
    titleAr: "انفجار بطارية لابتوب منتفخة بمكتب الدعم الفني",
    department: "IT User Support & Helpdesk",
    departmentAr: "الدعم الفني وتقنية المكاتب",
    floor: "1st Floor • Cubicle 14",
    floorAr: "الطابق الأول • حاجز مكتبي 14",
    scenarioText: "In the Administration Building, 1st Floor, IT Helpdesk Open Office, Cubicle 14, an old laptop being serviced suffered a sudden lithium battery failure. The battery swelled, hissed loudly, shot bright white sparks across the desk, and produced a jet of foul-smelling white chemical smoke. The IT technician dropped the burning laptop on the desk, burning his right thumb and fingers. Eight open-office workers evacuated into the main corridor. The laptop battery is still sizzling, burning through a mousepad and papers on the wooden desk.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأول، مكتب الدعم الفني المفتوح، كابينة رقم 14، تعرض جهاز لابتوب قديم أثناء صيانته لعطل مفاجئ في بطارية الليثيوم. انتفخت البطارية وأصدرت صفيراً حاداً وأطلقت شرراً أبيض متطايراً ونفثات دخان كيميائي أبيض كريه الرائحة. أسقط الفني اللابتوب المشتعل على المكتب مما أصابه بحروق في إبهام وأصابع يده اليمنى. أخلى ثمانية موظفين مكاتبهم إلى الممر الرئيسي. بطارية اللابتوب لا تزال تصدر صوتاً حارقاً وبدأت تحرق لوحة الماوس والأوراق على المكتب الخشبي.",
    extractionKey: {
      l: "Administration Building, 1st Floor, IT Helpdesk Open Office, Cubicle 14.",
      l_ar: "مبنى الإدارة، الطابق الأول، مكتب الدعم الفني المفتوح، كابينة 14.",
      n_nature: "Lithium-ion laptop battery thermal rupture with sparks and toxic smoke.",
      n_nature_ar: "انفجار حراري لبطارية لابتوب ليثيوم مع تطاير شرر ودخان كيميائي.",
      n_numbers: "One technician conscious with burned fingers; eight colleagues safe.",
      n_numbers_ar: "فني واحد واعٍ مصاب بحروق في أصابع اليد، وثمانية زملاء بأمان.",
      h: "Active lithium thermal reaction, toxic smoke, burning wooden desk and papers.",
      h_ar: "تفاعل حراري مستمر ببطارية الليثيوم، دخان كيميائي، واشتعال مكتب خشبي وأوراق."
    },
    plainLanguageTips: {
      locationHint: "Admin 1st Floor, IT Helpdesk Cubicle 14",
      locationHintAr: "إدارة الطابق 1، الدعم الفني كابينة 14",
      natureHint: "Laptop battery sparked, hissed, and caught fire",
      natureHintAr: "بطارية لابتوب أطلقت شرراً واشتعلت",
      numbersHint: "1 technician conscious with burned fingers",
      numbersHintAr: "فني واحد واعٍ مصاب بحروق بأصابعه",
      hazardsHint: "Hot lithium fire, toxic smoke, papers on desk catching fire",
      hazardsHintAr: "حريق ليثيوم ساخن، دخان سام، أوراق تشتعل على المكتب"
    }
  },
  {
    id: 19,
    title: "Archive File Storage Space Heater Fire",
    titleAr: "حريق مدفأة كهربائية في مستودع ملفات الأرشيف",
    department: "Administrative Archive & Records",
    departmentAr: "الأرشيف وحفظ السجلات الإدارية",
    floor: "Basement Level B1 • Room B-08",
    floorAr: "قبو المبنى B1 • غرفة B-08",
    scenarioText: "In the Administration Building, Basement Level B1, Archive File Annex Room B-08, an unauthorized electric space heater was left running on the floor next to cardboard boxes of historical payroll records. The radiant heat ignited the dry cardboard, and flames are now 1.5 meters high, spreading quickly across a wall of paper archive boxes. A security guard opened the door, saw thick rolling smoke and flames, and quickly pulled the fire pull station. Zero people are inside the room, but heavy smoke is spreading along the basement ceiling.",
    scenarioTextAr: "في مبنى الإدارة، القبو (الطابق B1)، ملحق حفظ الملفات القديمة (غرفة B-08)، تُركت مدفأة كهربائية غير مصرح بها تعمل على الأرضية بجوار صناديق كرتونية تحتوي على سجلات رواتب قديمة. أشعلت حرارة المدفأة الكرتون الجاف، وارتفعت ألسنة اللهب إلى متر ونصف وبدأت تمتد بسرعة عبر جدار من صناديق الأوراق المؤرشفة. فتح حارس أمن الباب وشاهد الدخان الكثيف والنيران فسحب جرس إنذار الحريق فوراً. لا يوجد أحد داخل الغرفة، لكن الدخان الكثيف بدأ يتدفق في ممر القبو.",
    extractionKey: {
      l: "Administration Building, Basement B1, Archive Annex Room B-08.",
      l_ar: "مبنى الإدارة، القبو B1، ملحق حفظ الأرشيف غرفة B-08.",
      n_nature: "Rapidly spreading paper and cardboard storage fire ignited by space heater.",
      n_nature_ar: "حريق سريع الاشتعال في صناديق كرتون وورق بسبب مدفأة كهربائية.",
      n_numbers: "Zero human casualties inside the room; security guard uninjured.",
      n_numbers_ar: "صفر إصابات بشرية داخل الغرفة، وحارس الأمن سليم دون إصابة.",
      h: "Heavy fuel load of dry paper boxes, thick smoke filling enclosed basement, heat near ceiling cables.",
      h_ar: "كميات كبيرة من الأوراق الجافة سريعة الاشتعال، دخان كثيف بالقبو، وحرارة قرب كابلات السقف."
    },
    plainLanguageTips: {
      locationHint: "Admin Basement B1, Archive Annex Room B-08",
      locationHintAr: "قبو الإدارة B1، ملحق الأرشيف غرفة B-08",
      natureHint: "Space heater caught paper file boxes on fire",
      natureHintAr: "مدفأة كهربائية أشعلت صناديق ملفات ورقية",
      numbersHint: "Zero casualties, nobody inside",
      numbersHintAr: "لا توجد إصابات، لا أحد بالداخل",
      hazardsHint: "Lots of dry paper burning, heavy smoke in basement",
      hazardsHintAr: "كميات ورق تحترق، دخان كثيف يملأ القبو"
    }
  },
  {
    id: 20,
    title: "Reception Lobby Ceiling Tile Collapse",
    titleAr: "سقوط ألواح جبس من سقف ردهة الاستقبال",
    department: "Main Reception & Visitor Lounge",
    departmentAr: "الاستقبال الرئيسي واستراحة الزوار",
    floor: "Ground Floor • Main Reception Desk",
    floorAr: "الطابق الأرضي • كاونتر الاستقبال الرئيسي",
    scenarioText: "In the Administration Building, Ground Floor Main Visitor Lobby, two large, waterlogged ceiling plaster tiles suddenly collapsed from a 5-meter height directly onto a leather waiting bench. A guest waiting for a vendor meeting was struck across the upper back and shoulder by the heavy plaster chunks. He was knocked to the floor, conscious and calling for help with severe shoulder pain. Plaster dust is clouding the air. Looking up, three adjacent ceiling tiles are sagging heavily with brown water pooling above them.",
    scenarioTextAr: "في مبنى الإدارة، الطابق الأرضي، ردهة استقبال الزوار الرئيسية، سقط لوحان جبسيان كبيران وثقيلان مشبعان بالمياه فجأة من ارتفاع 5 أمتار مباشرة فوق مقعد انتظار جلدي. أُصيب أحد الزوار القادمين لاجتماع إداري بضربة قوية في أعلى ظهره وكتفه إثر سقوط قطع الجبس الثقيلة عليه. سقط الرجل على الأرض، في كامل وعيه ويستغيث من ألم شديد في كتفه. يملأ غبار الجبس المكان، وتظهر في السقف ثلاثة ألواح مجاورة أخرى متدلية ومحملة ببرك مياه بنية على وشك السقوط.",
    extractionKey: {
      l: "Administration Building, Ground Floor, Main Visitor Lobby near Reception Desk.",
      l_ar: "مبنى الإدارة، الطابق الأرضي، ردهة استقبال الزوار قرب كاونتر الاستقبال.",
      n_nature: "Structural ceiling plaster collapse caused by water leak, striking seated person.",
      n_nature_ar: "سقوط ألواح جبس ثقيلة من السقف بسبب تسرب مياه واصطدامها بشخص جالس.",
      n_numbers: "One visitor conscious with blunt trauma and severe shoulder pain.",
      n_numbers_ar: "زائر واحد واعٍ مصاب برضوض قوية وألم حاد في الكتف والظهر.",
      h: "Three additional waterlogged ceiling tiles sagging directly overhead, falling debris risk.",
      h_ar: "ثلاثة ألواح جبس إضافية مشبعة بالماء متدلية فوق الرؤوس مهددة بالسقوط فوراً."
    },
    plainLanguageTips: {
      locationHint: "Admin Ground Floor, Visitor Lobby by Reception",
      locationHintAr: "أرضي الإدارة، ردهة الزوار عند الاستقبال",
      natureHint: "Heavy ceiling tiles fell 5 meters, hitting visitor",
      natureHintAr: "سقوط ألواح سقف ثقيلة من ارتفاع 5 أمتار على زائر",
      numbersHint: "1 visitor conscious with shoulder pain on floor",
      numbersHintAr: "زائر واحد واعٍ ممدد على الأرض بألم في الكتف",
      hazardsHint: "More wet ceiling tiles sagging and ready to fall",
      hazardsHintAr: "ألواح سقف أخرى مبللة على وشك السقوط"
    }
  }
];
