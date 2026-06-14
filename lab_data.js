// =============================================
//  MedCore — lab_data.js
//  Laboratoriya ko'rsatkichlari: normalar, talqin (uz/ru/en)
//  Manba: klinik laboratoriya referens qiymatlari asosida qayta tuzilgan
//  va akademik shaklda 3 tilda yozilgan ma'lumotnoma.
//  Eslatma: ko'rsatkichlar faqat ma'lumot uchun; tashxis shifokor tomonidan.
// =============================================

const LAB_CATEGORIES = [
  { id: "cbc",         icon: "🩸", color: "#e11d48", bg: "#fef2f2", name: { uz: "Qonning umumiy tahlili", ru: "Общий анализ крови", en: "Complete blood count" } },
  { id: "biochem",     icon: "🧪", color: "#0891b2", bg: "#ecfeff", name: { uz: "Biokimyoviy tahlil (temir, yallig'lanish)", ru: "Биохимия (железо, воспаление)", en: "Biochemistry (iron, inflammation)" } },
  { id: "protein",     icon: "🥚", color: "#ca8a04", bg: "#fefce8", name: { uz: "Oqsil almashinuvi", ru: "Белковый обмен", en: "Protein metabolism" } },
  { id: "carb",        icon: "🍬", color: "#9333ea", bg: "#faf5ff", name: { uz: "Uglevod almashinuvi", ru: "Углеводный обмен", en: "Carbohydrate metabolism" } },
  { id: "lipid",       icon: "🫀", color: "#dc2626", bg: "#fef2f2", name: { uz: "Lipidogramma", ru: "Липидограмма", en: "Lipid panel" } },
  { id: "liver",       icon: "🩺", color: "#16a34a", bg: "#f0fdf4", name: { uz: "Jigar va oshqozonosti bezi", ru: "Печень и поджелудочная", en: "Liver & pancreas" } },
  { id: "bilirubin",   icon: "🟡", color: "#d97706", bg: "#fffbeb", name: { uz: "Bilirubin va fraksiyalari", ru: "Билирубин и фракции", en: "Bilirubin & fractions" } },
  { id: "thyroid",     icon: "🦋", color: "#0d9488", bg: "#f0fdfa", name: { uz: "Qalqonsimon bez gormonlari", ru: "Гормоны щитовидной железы", en: "Thyroid hormones" } },
  { id: "vitamins",    icon: "💊", color: "#16a34a", bg: "#f0fdf4", name: { uz: "Vitaminlar", ru: "Витамины", en: "Vitamins" } },
  { id: "minerals",    icon: "⚙️", color: "#6366f1", bg: "#eef2ff", name: { uz: "Minerallar (mikroelementlar)", ru: "Минералы", en: "Minerals (trace elements)" } },
  { id: "electrolytes",icon: "🧂", color: "#0284c7", bg: "#f0f9ff", name: { uz: "Elektrolitlar", ru: "Электролиты", en: "Electrolytes" } },
  { id: "other",       icon: "🔬", color: "#64748b", bg: "#f8fafc", name: { uz: "Siydik, najas va sxemalar", ru: "Моча, кал и схемы", en: "Urine, stool & panels" } }
];

const LAB_TESTS = [

  // ─────────── CBC / Qonning umumiy tahlili ───────────
  {
    id: "hgb", cat: "cbc", abbr: "HGB",
    name: { uz: "Gemoglobin", ru: "Гемоглобин", en: "Hemoglobin" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["1-hafta", "180–220"], ["2–4 hafta", "150–180"], ["1–6 oy", "90–120"], ["6 oy – 5 yosh", "120–140 (optimum 125–130)"], ["5–12 yosh", "125–150 (optimum 127–135)"], ["Ayollar (12 yoshdan)", "125–160"], ["Erkaklar (12 yoshdan)", "130–170"]],
      ru: [["1-я нед.", "180–220"], ["2–4 нед.", "150–180"], ["1–6 мес.", "90–120"], ["6 мес – 5 л.", "120–140 (оптимум 125–130)"], ["5–12 л.", "125–150 (оптимум 127–135)"], ["Женщины (от 12 л.)", "125–160"], ["Мужчины (от 12 л.)", "130–170"]],
      en: [["1 week", "180–220"], ["2–4 weeks", "150–180"], ["1–6 months", "90–120"], ["6 mo – 5 yrs", "120–140 (optimal 125–130)"], ["5–12 yrs", "125–150 (optimal 127–135)"], ["Women (from 12 yrs)", "125–160"], ["Men (from 12 yrs)", "130–170"]]
    },
    optimum: { uz: "Ayollar 127–140 g/l, erkaklar 130–160 g/l", ru: "Женщины 127–140 г/л, мужчины 130–160 г/л", en: "Women 127–140 g/L, men 130–160 g/L" },
    high: {
      uz: ["Gipoksiya ko'rsatkichi", "Dori dozasi oshishi, chekish, alkogol, kimyoviy moddalar (nitritlar) ta'siri", "Jigar kasalliklari", "Suvsizlanish (degidratatsiya)", "Surункали charchoq", "Qandli diabet", "B9 va B12 ortiqchaligi", "Baland tog'da yashash", "Ichak qitiqlanish sindromi", "Irsiy: Jak2 V617F genining o'zgarishi; to'qimalarga kislorod yetishmasligi natijasida eritropoetin ortishi", "⚠️ 200 g/l dan yuqori — shoshilinch gematolog ko'rigi zarur"],
      ru: ["Показатель гипоксии", "Передозировка лекарств, курение, алкоголь, химические вещества (нитриты)", "Заболевания печени", "Обезвоживание", "Переутомление", "Сахарный диабет", "Переизбыток В9 и В12", "Проживание на больших высотах", "Синдром раздражённого кишечника", "Наследственные: изменение гена Jak2 V617F; усиленная выработка эритропоэтина при гипоксии тканей почек", "⚠️ Показатель выше 200 г/л — повод срочно обратиться к гематологу"],
      en: ["Marker of hypoxia", "Drug overdose, smoking, alcohol, chemical agents (nitrites)", "Liver disease", "Dehydration", "Overexertion", "Diabetes mellitus", "Excess of B9 and B12", "Living at high altitude", "Irritable bowel syndrome", "Hereditary: Jak2 V617F gene change; increased erythropoietin from renal tissue hypoxia", "⚠️ A value above 200 g/L warrants urgent referral to a haematologist"]
    },
    low: {
      uz: ["Temirning yetarli kelmasligi", "Temirning yomon so'rilishi", "Qon yo'qotish (yashirin va oshkora)", "Helicobacter pylori infeksiyasi, parazitoz", "Oshqozon eroziyasi va yarasi", "Tanqislik: marganets, mis, vitamin C, B1, B12, B9, oqsil", "Homiladorlik"],
      ru: ["Недостаточное поступление железа", "Плохое усвоение железа", "Кровопотери (скрытые и явные)", "Инфекция Helicobacter pylori, паразитоз", "Эрозии и язва желудка", "Дефициты: марганец, медь, витамин С, В1, В12, В9, белок", "Беременность"],
      en: ["Insufficient iron intake", "Poor iron absorption", "Blood loss (occult and overt)", "Helicobacter pylori infection, parasitosis", "Gastric erosions and ulcer", "Deficiencies: manganese, copper, vitamin C, B1, B12, B9, protein", "Pregnancy"]
    },
    note: { uz: "MUHIM: gemoglobin organizmning temir bilan ta'minlanganligining yagona ko'rsatkichi emas.", ru: "ВАЖНО: не является единственным маркером обеспеченности организма железом.", en: "IMPORTANT: not the sole marker of the body's iron status." }
  },

  {
    id: "hct", cat: "cbc", abbr: "HCT",
    name: { uz: "Gematokrit", ru: "Гематокрит", en: "Hematocrit" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["2 haftagacha", "42–66"], ["2 hafta – 1 oy", "33–55"], ["1–3 oy", "28–42"], ["3–6 oy", "29–41"], ["6 oy – 2 yosh", "33–39"], ["2–6 yosh", "34–40"], ["6–12 yosh", "35–45"], ["Qizlar 12–18 yosh", "36–46"], ["O'g'illar 12–18 yosh", "37–49"], ["Ayollar", "36–47"], ["Erkaklar", "40–54"]],
      ru: [["менее 2 нед.", "42–66"], ["2 нед. – 1 мес.", "33–55"], ["1–3 мес.", "28–42"], ["3–6 мес.", "29–41"], ["6 мес – 2 года", "33–39"], ["2–6 лет", "34–40"], ["6–12 лет", "35–45"], ["Ж 12–18 лет", "36–46"], ["М 12–18 лет", "37–49"], ["Женщины", "36–47"], ["Мужчины", "40–54"]],
      en: [["under 2 weeks", "42–66"], ["2 weeks – 1 mo", "33–55"], ["1–3 months", "28–42"], ["3–6 months", "29–41"], ["6 mo – 2 yrs", "33–39"], ["2–6 yrs", "34–40"], ["6–12 yrs", "35–45"], ["Girls 12–18 yrs", "36–46"], ["Boys 12–18 yrs", "37–49"], ["Women", "36–47"], ["Men", "40–54"]]
    },
    optimum: { uz: "Ayollar 40%, erkaklar 45%", ru: "Женщины 40%, мужчины 45%", en: "Women 40%, men 45%" },
    high: {
      uz: ["Siydik haydovchi dorilar qabuli", "Buyrak funksiyasi buzilishi", "Giperproteinemiya", "Kapillyar devorlari o'tkazuvchanligi oshishi", "Gipertoniya", "Kuyishlar", "Ratsionda tuz ortiqchaligi", "Stress", "Gidronefroz", "Oshqozon-ichak kasalliklari", "Suvsizlanish", "Gipoksiya (38% va undan yuqori)"],
      ru: ["Приём мочегонных препаратов", "Нарушение функций почек", "Гиперпротеинемия", "Увеличение проницаемости стенок капилляров", "Гипертония", "Ожоги", "Избыток соли в рационе", "Стресс", "Гидронефроз", "Заболевания ЖКТ", "Обезвоживание", "Гипоксия (38% и более)"],
      en: ["Diuretic use", "Impaired renal function", "Hyperproteinemia", "Increased capillary wall permeability", "Hypertension", "Burns", "Excess dietary salt", "Stress", "Hydronephrosis", "GI disease", "Dehydration", "Hypoxia (38% and above)"]
    },
    low: {
      uz: ["Qon yo'qotish (ko'p hayz ketishi)", "Turli anemiyalar", "Ateroskleroz", "Tromboz", "Autoimmun kasalliklar", "Ajratuv tizimi disfunksiyasi", "Chekish", "Homiladorlik, toksikoz, nomutanosib ovqatlanish", "Tanqislik: temir, B9, B6, B12", "Temir tanqisligi anemiyasi (35% va undan past)"],
      ru: ["Кровопотеря (обильная менструация)", "Анемии разных видов", "Атеросклероз", "Тромбоз", "Аутоиммунные заболевания", "Дисфункция выделительной системы", "Курение", "Беременность, токсикоз, несбалансированное питание", "Дефициты: железо, В9, В6, В12", "Железодефицитная анемия (35% и менее)"],
      en: ["Blood loss (heavy menstruation)", "Anemias of various types", "Atherosclerosis", "Thrombosis", "Autoimmune diseases", "Excretory system dysfunction", "Smoking", "Pregnancy, toxicosis, unbalanced diet", "Deficiencies: iron, B9, B6, B12", "Iron-deficiency anemia (35% and below)"]
    },
    note: { uz: "Kichik yoshli bolalarda past gematokrit tez o'sish, ochlik/nomutanosib ovqatlanish yoki temir so'rilishi buzilishi bilan bog'liq oshqozon-ichak kasalliklari sababli bo'lishi mumkin.", ru: "У детей младшего возраста пониженный гематокрит может быть вызван ускоренным ростом, голоданием/несбалансированным питанием или болезнями ЖКТ с нарушением всасывания железа.", en: "In young children low hematocrit may be due to rapid growth, fasting/unbalanced diet, or GI disease impairing iron absorption." }
  },

  {
    id: "rbc", cat: "cbc", abbr: "RBC",
    name: { uz: "Eritrotsitlar", ru: "Эритроциты", en: "Red blood cells" },
    unit: { uz: "tera/l", ru: "тера/л", en: "tera/L" },
    norms: {
      uz: [["1–2 hafta", "3,9–6"], ["2–4 hafta", "3,5–5,5"], ["1–6 oy", "3,5–4"], ["6–12 oy", "4–5"], ["1–12 yosh", "4,5–5"], ["Ayollar (12 yoshdan)", "4,3–4,9"], ["Erkaklar (12 yoshdan)", "4,5–5,5"]],
      ru: [["1–2 недели", "3,9–6"], ["2–4 недели", "3,5–5,5"], ["1–6 мес", "3,5–4"], ["6–12 мес", "4–5"], ["1 г – 12 лет", "4,5–5"], ["Женщины (от 12 л.)", "4,3–4,9"], ["Мужчины (от 12 л.)", "4,5–5,5"]],
      en: [["1–2 weeks", "3.9–6"], ["2–4 weeks", "3.5–5.5"], ["1–6 months", "3.5–4"], ["6–12 months", "4–5"], ["1–12 yrs", "4.5–5"], ["Women (from 12 yrs)", "4.3–4.9"], ["Men (from 12 yrs)", "4.5–5.5"]]
    },
    optimum: { uz: "4,3–4,9 tera/l", ru: "4,3–4,9 тера/л", en: "4.3–4.9 tera/L" },
    high: {
      uz: ["Temir tanqisligi anemiyasi", "Buyrak kasalliklari", "Haqiqiy politsitemiya", "Surункali obstruktiv o'pka kasalligi", "Surункali yurak yetishmovchiligi", "Suvsizlanish", "Chekish"],
      ru: ["Железодефицитная анемия", "Заболевания почек", "Истинная полицитемия", "Хроническая обструктивная болезнь лёгких", "Хроническая сердечная недостаточность", "Обезвоживание", "Курение"],
      en: ["Iron-deficiency anemia", "Kidney disease", "Polycythemia vera", "Chronic obstructive pulmonary disease", "Chronic heart failure", "Dehydration", "Smoking"]
    },
    low: {
      uz: ["Temir tanqisligi anemiyasi", "Miksedema (qalqonsimon bez funksiyasi pasayishi)", "Biriktiruvchi to'qima tizimli kasalliklari", "Buyrak kasalliklari (kreatininда og'ishlar bilan)", "Yashirin yallig'lanish", "Toksik metallar bilan zaharlanish", "Homiladorlik", "Tanqislik: B12 va B9"],
      ru: ["Железодефицитная анемия", "Микседема (снижение функции щитовидной железы)", "Системные заболевания соединительной ткани", "Заболевания почек (при этом отклонения в креатинине)", "Скрытое воспаление", "Отравление токсичными металлами", "Беременность", "Дефициты: В12 и В9"],
      en: ["Iron-deficiency anemia", "Myxedema (low thyroid function)", "Systemic connective tissue diseases", "Kidney disease (with creatinine deviations)", "Latent inflammation", "Toxic metal poisoning", "Pregnancy", "Deficiencies: B12 and B9"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "mcv", cat: "cbc", abbr: "MCV",
    name: { uz: "Eritrotsitning o'rtacha hajmi", ru: "Средний объём эритроцита", en: "Mean corpuscular volume" },
    unit: { uz: "fl", ru: "фл", en: "fL" },
    norms: {
      uz: [["Yangi tug'ilgan", "98–118"], ["1–3 oy", "88–100"], ["3–6 oy", "85–95"], ["6 oy – 2 yosh", "80–88"], ["2–12 yosh", "85–90"], ["Ayollar", "90 gacha"], ["Erkaklar", "93 gacha"]],
      ru: [["новорожд.", "98–118"], ["1–3 мес.", "88–100"], ["3–6 мес.", "85–95"], ["6 мес – 2 г.", "80–88"], ["2–12 лет", "85–90"], ["Женщины", "до 90"], ["Мужчины", "до 93"]],
      en: [["newborn", "98–118"], ["1–3 months", "88–100"], ["3–6 months", "85–95"], ["6 mo – 2 yrs", "80–88"], ["2–12 yrs", "85–90"], ["Women", "up to 90"], ["Men", "up to 93"]]
    },
    optimum: { uz: "88–90 fl", ru: "88–90 фл", en: "88–90 fL" },
    high: {
      uz: ["Suv-elektrolit muvozanati buzilishi (suvsizlanish, qusish, diareya, chanqoq, ko'p terlash)", "Eozinofiliya (parazitoz)", "Qo'rg'oshin bilan toksik zaharlanish", "Gemolitik anemiya", "Tanqislik: B6, mis, sink, marganets, temir, vitamin C"],
      ru: ["Нарушение водно-электролитного баланса (обезвоживание, рвота, диарея, жажда, усиленная потливость)", "Эозинофилия (паразитоз)", "Токсическое отравление свинцом", "Гемолитическая анемия", "Дефициты: В6, медь, цинк, марганец, железо, витамин С"],
      en: ["Water–electrolyte imbalance (dehydration, vomiting, diarrhea, thirst, heavy sweating)", "Eosinophilia (parasitosis)", "Lead poisoning", "Hemolytic anemia", "Deficiencies: B6, copper, zinc, manganese, iron, vitamin C"]
    },
    low: {
      uz: ["Gipotireoz", "Jigar funksiyasi buzilishi", "Alkogolizm", "KOK, antibiotiklar, immunodepresantlar, o'smaga qarshi dorilar qabuli", "Tanqislik: B12, B9, B2"],
      ru: ["Гипотиреоз", "Нарушение печёночной функции", "Алкоголизм", "Приём КОК, антибиотиков, иммунодепрессантов, противоопухолевых препаратов", "Дефициты: В12, В9, В2"],
      en: ["Hypothyroidism", "Impaired liver function", "Alcoholism", "Use of COCs, antibiotics, immunosuppressants, antineoplastics", "Deficiencies: B12, B9, B2"]
    },
    note: { uz: "MCV eritrotsit hajmini ko'rsatadi; RDW bilan birga talqin qilinadi.", ru: "MCV отражает объём эритроцита; интерпретируется вместе с RDW.", en: "MCV reflects red-cell size; interpreted together with RDW." }
  },

  {
    id: "mch", cat: "cbc", abbr: "MCH",
    name: { uz: "Eritrotsitda gemoglobinning o'rtacha miqdori", ru: "Среднее содержание гемоглобина в эритроците", en: "Mean corpuscular hemoglobin" },
    unit: { uz: "pg", ru: "пг", en: "pg" },
    norms: {
      uz: [["Yangi tug'ilgan", "32–37"], ["1–6 oy", "28–36"], ["6 oy – 2 yosh", "25–28"], ["2–5 yosh", "26–33"], ["5 yoshdan katta va kattalar", "28–32"]],
      ru: [["новорожденные", "32–37"], ["1–6 мес", "28–36"], ["6 мес – 2 г.", "25–28"], ["2–5 лет", "26–33"], ["дети старше 5 лет и взрослые", "28–32"]],
      en: [["newborns", "32–37"], ["1–6 months", "28–36"], ["6 mo – 2 yrs", "25–28"], ["2–5 yrs", "26–33"], ["children >5 yrs and adults", "28–32"]]
    },
    optimum: { uz: "30 pg (2 yoshdan katta va kattalar)", ru: "30 пг (дети старше 2 лет и взрослые)", en: "30 pg (children >2 yrs and adults)" },
    high: {
      uz: ["B12 tanqisligi", "B9 tanqisligi", "B2 tanqisligi", "Suvsizlanish"],
      ru: ["Дефицит B12", "Дефицит B9", "Дефицит В2", "Обезвоживание"],
      en: ["B12 deficiency", "B9 deficiency", "B2 deficiency", "Dehydration"]
    },
    low: {
      uz: ["Temir / mis / B6 tanqisligi", "Vitamin C yetishmasligi", "Gemolitik anemiya", "Homiladorlik", "Gipoxlorgidriya (oshqozonda xlorid kislota pasayishi)"],
      ru: ["Дефицит железа / меди / В6", "Недостаток витамина С", "Гемолитическая анемия", "Беременность", "Гипохлоргидрия (пониженное содержание соляной кислоты в желудке)"],
      en: ["Iron / copper / B6 deficiency", "Vitamin C deficiency", "Hemolytic anemia", "Pregnancy", "Hypochlorhydria (low gastric hydrochloric acid)"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "mchc", cat: "cbc", abbr: "MCHC",
    name: { uz: "Eritrotsitda gemoglobinning o'rtacha konsentratsiyasi", ru: "Средняя концентрация Hb в эритроцитах", en: "Mean corpuscular hemoglobin concentration" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["Barcha yoshlar", "320–360"]],
      ru: [["Все возрасты", "320–360"]],
      en: [["All ages", "320–360"]]
    },
    optimum: { uz: "320 g/l", ru: "320 г/л", en: "320 g/L" },
    high: {
      uz: ["Irsiy sferotsitoz", "Mikrosferotsitoz", "O'roqsimon hujayrali anemiya", "Qandli diabet", "Gipotireoz", "Giperglikemiya", "Tanqislik: B2, B9, B12", "Suvsizlanish", "Gipoksiya"],
      ru: ["Наследственный сфероцитоз", "Микросфероцитоз", "Серповидноклеточная анемия", "Сахарный диабет", "Гипотиреоз", "Гипергликемия", "Дефициты: В2, В9, В12", "Обезвоживание", "Гипоксия"],
      en: ["Hereditary spherocytosis", "Microspherocytosis", "Sickle cell anemia", "Diabetes mellitus", "Hypothyroidism", "Hyperglycemia", "Deficiencies: B2, B9, B12", "Dehydration", "Hypoxia"]
    },
    low: {
      uz: ["Temir tanqisligi anemiyasi", "Gemolitik anemiya", "Revmatoid artrit", "Qo'rg'oshin bilan zaharlanish", "Tanqislik: vitamin C, B6, mis"],
      ru: ["Железодефицитная анемия", "Гемолитическая анемия", "Ревматоидный артрит", "Отравление свинцом", "Дефициты: витамин С, В6, медь"],
      en: ["Iron-deficiency anemia", "Hemolytic anemia", "Rheumatoid arthritis", "Lead poisoning", "Deficiencies: vitamin C, B6, copper"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "rdw", cat: "cbc", abbr: "RDW",
    name: { uz: "Eritrotsitlar hajm bo'yicha taqsimlanishi kengligi", ru: "Ширина распределения эритроцитов по объёму", en: "Red cell distribution width" },
    unit: { uz: "% / fl", ru: "% / фл", en: "% / fL" },
    norms: {
      uz: [["RDW-CV: 1 yoshgacha", "11,6–14,8 %"], ["RDW-CV: 1 yoshdan katta va kattalar", "11–13 %"], ["RDW-SD", "37–47 fl (optimum 42)"]],
      ru: [["RDW-CV: до 1 года", "11,6–14,8 %"], ["RDW-CV: после года и взрослые", "11–13 %"], ["RDW-SD", "37–47 фл (оптимум 42)"]],
      en: [["RDW-CV: under 1 yr", "11.6–14.8 %"], ["RDW-CV: over 1 yr and adults", "11–13 %"], ["RDW-SD", "37–47 fL (optimal 42)"]]
    },
    optimum: { uz: "RDW-CV ≈ 13 %, RDW-SD ≈ 42 fl", ru: "RDW-CV ≈ 13 %, RDW-SD ≈ 42 фл", en: "RDW-CV ≈ 13 %, RDW-SD ≈ 42 fL" },
    high: {
      uz: ["Gemolitik anemiya", "Temir tanqisligi anemiyasi", "Jigar kasalliklari", "Qon quyish", "Tanqislik: B9 va B12"],
      ru: ["Гемолитическая анемия", "Железодефицитная анемия", "Заболевания печени", "Переливание крови", "Дефициты: В9 и В12"],
      en: ["Hemolytic anemia", "Iron-deficiency anemia", "Liver disease", "Blood transfusion", "Deficiencies: B9 and B12"]
    },
    low: {
      uz: ["Temir tanqisligi anemiyasi", "Gemolitik anemiya", "Talassemiya", "Revmatoid artrit", "B6 tanqisligi", "Surункали toksik-yallig'lanish jarayoni"],
      ru: ["Железодефицитная анемия", "Гемолитическая анемия", "Талассемия", "Ревматоидный артрит", "Дефицит В6", "Хронический токсико-воспалительный процесс"],
      en: ["Iron-deficiency anemia", "Hemolytic anemia", "Thalassemia", "Rheumatoid arthritis", "B6 deficiency", "Chronic toxic-inflammatory process"]
    },
    note: { uz: "RDW MCV bilan birga talqin qilinadi: yuqori RDW + past MCV — temir tanqisligi/beta-talassemiya ehtimoli; norma RDW + yuqori MCV — jigar kasalligi ehtimoli; ikkalasi ham yuqori — gemolitik anemiya yoki B12 tanqisligi.", ru: "RDW интерпретируется в соотношении с MCV: высокий RDW при низком MCV — вероятен дефицит железа/бета-талассемия; нормальный RDW при высоком MCV — вероятны болезни печени; оба показателя высокие — возможна гемолитическая анемия или дефицит В12.", en: "RDW is interpreted together with MCV: high RDW with low MCV suggests iron deficiency/beta-thalassemia; normal RDW with high MCV suggests liver disease; both high suggests hemolytic anemia or B12 deficiency." }
  },

  {
    id: "plt", cat: "cbc", abbr: "PLT",
    name: { uz: "Trombotsitlar", ru: "Тромбоциты", en: "Platelets" },
    unit: { uz: "×10⁹/l", ru: "×10⁹/л", en: "×10⁹/L" },
    norms: {
      uz: [["Barcha yoshlar", "180–399"]],
      ru: [["Все возрасты", "180–399"]],
      en: [["All ages", "180–399"]]
    },
    optimum: { uz: "200–300 ×10⁹/l (hayz davrida 150–250, homiladorlikda 100–310)", ru: "200–300 ×10⁹/л (при менструации 150–250, при беременности 100–310)", en: "200–300 ×10⁹/L (during menstruation 150–250, during pregnancy 100–310)" },
    high: {
      uz: ["Temir tanqisligi", "Gemoliz", "Yallig'lanish jarayoni", "Yarali kolit", "Revmatoid artrit", "Suvsizlanish", "Androgenlar, adrenalin, eritropoetin qabuli", "Homiladorlik", "Tanqislik: A, B12, B9, C", "Intoksikatsiya"],
      ru: ["Дефицит железа", "Гемолиз", "Воспалительный процесс", "Язвенный колит", "Ревматоидный артрит", "Обезвоживание", "Приём андрогенов, адреналина, эритропоэтина", "Беременность", "Дефициты: А, В12, В9, С", "Интоксикация"],
      en: ["Iron deficiency", "Hemolysis", "Inflammatory process", "Ulcerative colitis", "Rheumatoid arthritis", "Dehydration", "Androgens, adrenaline, erythropoietin use", "Pregnancy", "Deficiencies: A, B12, B9, C", "Intoxication"]
    },
    low: {
      uz: ["Gipertireoz", "Gipotireoz", "Virusli infeksiya, Epshteyn-Barr virusi", "Bakterial infeksiya", "Suyak ko'migi faoliyatining bostirilishi", "Burundan qon ketishi", "Cho'zilgan hayz", "Antibiotik va antidepressantlar qabuli"],
      ru: ["Гипертиреоз", "Гипотиреоз", "Вирусная инфекция, вирус Эпштейна-Барр", "Бактериальная инфекция", "Угнетение деятельности костного мозга", "Носовые кровотечения", "Затяжная менструация", "Приём антибиотиков и антидепрессантов"],
      en: ["Hyperthyroidism", "Hypothyroidism", "Viral infection, Epstein-Barr virus", "Bacterial infection", "Bone marrow suppression", "Nosebleeds", "Prolonged menstruation", "Antibiotic and antidepressant use"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "mpv", cat: "cbc", abbr: "MPV",
    name: { uz: "Trombotsitning o'rtacha hajmi", ru: "Средний объём тромбоцитов", en: "Mean platelet volume" },
    unit: { uz: "fl", ru: "фл", en: "fL" },
    norms: {
      uz: [["1 yoshgacha", "7–7,9"], ["1–5 yosh", "8–8,8"], ["5 yoshdan katta va kattalar", "7–10"]],
      ru: [["до 1 года", "7–7,9"], ["1–5 лет", "8–8,8"], ["старше 5 лет и взрослые", "7–10"]],
      en: [["under 1 yr", "7–7.9"], ["1–5 yrs", "8–8.8"], ["over 5 yrs and adults", "7–10"]]
    },
    optimum: { uz: "7–10 fl", ru: "7–10 фл", en: "7–10 fL" },
    high: {
      uz: ["Taloqning kattalashishi", "Jigar kasalliklari", "Yallig'lanish jarayoni", "Qon quyishdan keyingi davr", "Trombotsitodistrofiya", "Chaqaloqlarda chala tug'ilganlik", "Talassemiya", "Infeksion jarayon", "Hayz sikli davri", "Gipertireoz", "Qandli diabet", "Revmatizm", "Holsizlik va surункali charchoq", "Tanqislik: B9, B12"],
      ru: ["Увеличение селезёнки", "Болезни печени", "Воспалительный процесс", "Период после переливания крови", "Тромбоцитодистрофия", "Недоношенность у младенцев", "Талассемия", "Инфекционный процесс", "Период менструального цикла", "Гипертиреоз", "Сахарный диабет", "Ревматизм", "Истощение и переутомление", "Дефициты: В9, В12"],
      en: ["Enlarged spleen", "Liver disease", "Inflammatory process", "Post-transfusion period", "Thrombocytodystrophy", "Prematurity in infants", "Thalassemia", "Infectious process", "Menstrual cycle period", "Hyperthyroidism", "Diabetes mellitus", "Rheumatism", "Exhaustion and overwork", "Deficiencies: B9, B12"]
    },
    low: {
      uz: ["Gemofiliya", "Aplastik anemiya", "Autoimmun kasalliklar", "Bakterial va/yoki parazitar infeksiyalar", "Yurak yetishmovchiligi", "Buyrak venalari trombozi", "Qonni suyultiruvchi dorilar qabuli"],
      ru: ["Гемофилия", "Апластическая анемия", "Аутоиммунные заболевания", "Бактериальные и/или паразитарные инфекции", "Сердечная недостаточность", "Тромбоз почечных вен", "Приём препаратов, разжижающих кровь"],
      en: ["Hemophilia", "Aplastic anemia", "Autoimmune diseases", "Bacterial and/or parasitic infections", "Heart failure", "Renal vein thrombosis", "Use of blood-thinning drugs"]
    },
    note: { uz: "MUHIM: homiladorlik davrida sezilarli pasayishi homila tushish xavfidan dalolat berishi mumkin.", ru: "ВАЖНО: значительное снижение во время беременности указывает на угрозу выкидыша.", en: "IMPORTANT: a marked decrease during pregnancy may indicate threatened miscarriage." }
  },

  {
    id: "wbc", cat: "cbc", abbr: "WBC",
    name: { uz: "Leykotsitlar", ru: "Лейкоциты", en: "White blood cells" },
    unit: { uz: "×10⁹/l", ru: "×10⁹/л", en: "×10⁹/L" },
    norms: {
      uz: [["1 yoshgacha", "8–12"], ["1–3 yosh", "7–11"], ["4–10 yosh", "6–10"], ["10–15 yosh", "5–9"], ["Ayollar (15 yoshdan)", "4–10"], ["Erkaklar (15 yoshdan)", "4–9"]],
      ru: [["до 1 года", "8–12"], ["1–3 года", "7–11"], ["4–10 лет", "6–10"], ["10–15 лет", "5–9"], ["Женщины (от 15 л.)", "4–10"], ["Мужчины (от 15 л.)", "4–9"]],
      en: [["under 1 yr", "8–12"], ["1–3 yrs", "7–11"], ["4–10 yrs", "6–10"], ["10–15 yrs", "5–9"], ["Women (from 15 yrs)", "4–10"], ["Men (from 15 yrs)", "4–9"]]
    },
    optimum: { uz: "4–9 ×10⁹/l", ru: "4–9 ×10⁹/л", en: "4–9 ×10⁹/L" },
    high: {
      uz: ["Yallig'lanish jarayoni", "Bakterial infeksiya", "Stress", "Buyrakusti bezi charchoqi", "Gipotireoz"],
      ru: ["Воспалительный процесс", "Бактериальная инфекция", "Стресс", "Надпочечниковая усталость", "Гипотиреоз"],
      en: ["Inflammatory process", "Bacterial infection", "Stress", "Adrenal fatigue", "Hypothyroidism"]
    },
    low: {
      uz: ["Anemiya", "B12 tanqisligi", "Virusli infeksiyalar", "Homiladorlik"],
      ru: ["Анемия", "Дефицит B12", "Вирусные инфекции", "Беременность"],
      en: ["Anemia", "B12 deficiency", "Viral infections", "Pregnancy"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "neut", cat: "cbc", abbr: "NEUT",
    name: { uz: "Neytrofillar", ru: "Нейтрофилы", en: "Neutrophils" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["1 yoshgacha", "16–45"], ["1–2 yosh", "28–48"], ["2–5 yosh", "32–55"], ["6–8 yosh", "40–60"], ["9–15 yosh", "45–60"], ["Kattalar (15 yoshdan)", "45–74"], ["Absolyut (kattalar)", "2–6 ×10⁹/l"]],
      ru: [["до 1 года", "16–45"], ["1–2 года", "28–48"], ["2–5 лет", "32–55"], ["6–8 лет", "40–60"], ["9–15 лет", "45–60"], ["Взрослые (от 15 л.)", "45–74"], ["Абсолют (взрослые)", "2–6 ×10⁹/л"]],
      en: [["under 1 yr", "16–45"], ["1–2 yrs", "28–48"], ["2–5 yrs", "32–55"], ["6–8 yrs", "40–60"], ["9–15 yrs", "45–60"], ["Adults (from 15 yrs)", "45–74"], ["Absolute (adults)", "2–6 ×10⁹/L"]]
    },
    optimum: { uz: "45–74 % (absolyut 2–6 ×10⁹/l)", ru: "45–74 % (абс. 2–6 ×10⁹/л)", en: "45–74 % (absolute 2–6 ×10⁹/L)" },
    high: {
      uz: ["Yallig'lanish", "Bakterial infeksiya", "Homiladorlikning ikkinchi yarmi"],
      ru: ["Воспаление", "Бактериальная инфекция", "Вторая половина беременности"],
      en: ["Inflammation", "Bacterial infection", "Second half of pregnancy"]
    },
    low: {
      uz: ["Virusli infeksiya", "Bolalik xavfsiz neytropeniyasi (davo talab qilmaydi, 2 yoshga qadar o'tib ketadi)"],
      ru: ["Вирусная инфекция", "Доброкачественная нейтропения детского возраста (не требует лечения, проходит к 2 годам)"],
      en: ["Viral infection", "Benign neutropenia of childhood (needs no treatment, resolves by age 2)"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "eo", cat: "cbc", abbr: "EO%",
    name: { uz: "Eozinofillar", ru: "Эозинофилы", en: "Eosinophils" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["Barcha yoshlar", "0–2 (qancha past — shuncha yaxshi)"], ["Absolyut", "0,5 ×10⁹/l gacha"]],
      ru: [["Все возрасты", "0–2 (чем ниже — тем лучше)"], ["Абсолют", "до 0,5 ×10⁹/л"]],
      en: [["All ages", "0–2 (the lower, the better)"], ["Absolute", "up to 0.5 ×10⁹/L"]]
    },
    optimum: { uz: "2 % gacha (qancha past — shuncha yaxshi)", ru: "до 2 % (чем ниже — тем лучше)", en: "up to 2 % (the lower, the better)" },
    high: {
      uz: ["Immunitet pasayishi", "Allergik rinit", "Atopik dermatit", "Bronxial astma", "10 % dan yuqori — tizimli kasallik, revmatolog konsultatsiyasi zarur"],
      ru: ["Снижение иммунитета", "Аллергический ринит", "Атопический дерматит", "Бронхиальная астма", "Повышение выше 10 % — системное заболевание, нужна консультация ревматолога"],
      en: ["Reduced immunity", "Allergic rhinitis", "Atopic dermatitis", "Bronchial asthma", "Above 10 % — systemic disease, rheumatologist consultation needed"]
    },
    low: {
      uz: ["Past qiymat — normal holat (qancha past — shuncha yaxshi)"],
      ru: ["Низкое значение — норма (чем ниже — тем лучше)"],
      en: ["Low value is normal (the lower, the better)"]
    },
    note: { uz: "2–3 % dan yuqori — allergik reaksiya yoki gijja invaziyasi belgisi bo'lishi mumkin. EKB (eozinofil kation oqsili) va IgE tekshiriladi: ikkalasi yuqori — allergiya; faqat EKB yuqori, IgE norma — parazitoz.", ru: "Показатель больше 2–3 % может означать аллергическую реакцию или глистную инвазию. Проверить ЭКБ (эозинофильный катионный белок) и IgE: оба повышены — аллергия; ЭКБ повышен, IgE в норме — паразитоз.", en: "A value above 2–3 % may indicate an allergic reaction or helminth infestation. Check ECP (eosinophil cationic protein) and IgE: both elevated — allergy; ECP elevated with normal IgE — parasitosis." }
  },

  {
    id: "bas", cat: "cbc", abbr: "BAS%",
    name: { uz: "Bazofillar", ru: "Базофилы", en: "Basophils" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["Barcha yoshlar", "0–1"], ["Absolyut", "0,1 ×10⁹/l gacha"]],
      ru: [["Все возрасты", "0–1"], ["Абсолют", "до 0,1 ×10⁹/л"]],
      en: [["All ages", "0–1"], ["Absolute", "up to 0.1 ×10⁹/L"]]
    },
    optimum: { uz: "0–1 %", ru: "0–1 %", en: "0–1 %" },
    high: {
      uz: ["Virusli yoki bakterial infeksiya", "Organizmda yallig'lanish reaksiyalari", "Allergik reaksiya", "Parazitozlar", "Donor qoni quyilishi", "Gipotireoz", "Qandli diabet", "Tireoidit davosi va estrogenlar qabuli", "Tanqislik: B9, B12"],
      ru: ["Вирусная или бактериальная инфекция", "Воспалительные реакции в организме", "Аллергическая реакция", "Паразитозы", "Переливание донорской крови", "Гипотиреоз", "Сахарный диабет", "Приём препаратов для лечения тиреоидита и эстрогенов", "Дефициты: В9, В12"],
      en: ["Viral or bacterial infection", "Inflammatory reactions in the body", "Allergic reaction", "Parasitoses", "Donor blood transfusion", "Hypothyroidism", "Diabetes mellitus", "Thyroiditis medication and estrogen use", "Deficiencies: B9, B12"]
    },
    low: {
      uz: ["0 % norma bo'lishi mumkin, lekin bilvosita quyidagilarni ko'rsatishi mumkin:", "Gipotireoz, tireotoksikoz", "Infeksion kasalliklar", "Surункali charchoq", "Past gemoglobinli anemiya", "Autoimmun kasalliklar (revmatoid artrit, dermatitlar)", "Vaktsina kiritilishi"],
      ru: ["0 % может быть нормой, но косвенно может свидетельствовать о:", "Гипотиреоз, тиреотоксикоз", "Инфекционные заболевания", "Переутомление", "Анемия с низким уровнем гемоглобина", "Аутоиммунные заболевания (ревматоидный артрит, дерматиты)", "Введение вакцины"],
      en: ["0 % can be normal, but may indirectly indicate:", "Hypothyroidism, thyrotoxicosis", "Infectious diseases", "Overwork", "Anemia with low hemoglobin", "Autoimmune diseases (rheumatoid arthritis, dermatitis)", "Vaccine administration"]
    },
    note: { uz: "Bazofillar IgE retseptorlarini tashiydi, gistamin va qon ivishida ishtirok etuvchi moddalar ishlab chiqaradi; ular yordamida antikoagulyant geparin hosil bo'ladi.", ru: "Базофилы несут рецепторы к иммуноглобулину Е, вырабатывают гистамин и вещества, участвующие в свёртывании крови; благодаря им производится антикоагулянт гепарин.", en: "Basophils carry IgE receptors and produce histamine and substances involved in blood clotting; through them the anticoagulant heparin is produced." }
  },

  {
    id: "lym", cat: "cbc", abbr: "LYM",
    name: { uz: "Limfotsitlar", ru: "Лимфоциты", en: "Lymphocytes" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["1 yoshgacha", "46–65"], ["1–2 yosh", "37–60"], ["2–5 yosh", "33–55"], ["6–8 yosh", "30–50"], ["9–15 yosh", "30–45"], ["Kattalar", "18–40"], ["Absolyut (kattalar)", "1,2–4,5 ×10⁹/l"]],
      ru: [["до 1 года", "46–65"], ["1–2 года", "37–60"], ["2–5 лет", "33–55"], ["6–8 лет", "30–50"], ["9–15 лет", "30–45"], ["Взрослые", "18–40"], ["Абсолют (взрослые)", "1,2–4,5 ×10⁹/л"]],
      en: [["under 1 yr", "46–65"], ["1–2 yrs", "37–60"], ["2–5 yrs", "33–55"], ["6–8 yrs", "30–50"], ["9–15 yrs", "30–45"], ["Adults", "18–40"], ["Absolute (adults)", "1.2–4.5 ×10⁹/L"]]
    },
    optimum: { uz: "18–40 % (absolyut 1,2–4,5 ×10⁹/l)", ru: "18–40 % (абс. 1,2–4,5 ×10⁹/л)", en: "18–40 % (absolute 1.2–4.5 ×10⁹/L)" },
    high: {
      uz: ["Virusli infeksiya", "Qizamiq, qizilcha, suvchechak, skarlatina, C gepatiti oqibatlari", "Endokrin va autoimmun kasalliklar", "B12 tanqisligi", "Allergik reaksiya"],
      ru: ["Вирусная инфекция", "Последствия кори, краснухи, ветряной оспы, скарлатины, гепатита С", "Эндокринные и аутоиммунные заболевания", "Дефицит В12", "Аллергическая реакция"],
      en: ["Viral infection", "Sequelae of measles, rubella, chickenpox, scarlet fever, hepatitis C", "Endocrine and autoimmune diseases", "B12 deficiency", "Allergic reaction"]
    },
    low: {
      uz: ["Immunitet pasayishi", "Yurak yetishmovchiligi", "Buyrak yetishmovchiligi", "Glyukokortikosteroidlar qabuli", "Nomutanosib ovqatlanish, oqsil tanqisligi", "Bakterial infeksiya", "Homiladorlik"],
      ru: ["Снижение иммунитета", "Сердечная недостаточность", "Почечная недостаточность", "Приём глюкокортикостероидов", "Несбалансированное питание, дефицит белка", "Бактериальная инфекция", "Беременность"],
      en: ["Reduced immunity", "Heart failure", "Renal failure", "Glucocorticosteroid use", "Unbalanced diet, protein deficiency", "Bacterial infection", "Pregnancy"]
    },
    note: { uz: "Klinik ahamiyatga ega bo'lgan og'ish — normadan 15 % va undan ko'p. Homilador ayollarda va emizikli chaqaloqlarda mo''tadil limfopeniya normal hisoblanadi.", ru: "Клинически значимым является отклонение на 15 % и выше. У беременных и грудных детей умеренная лимфопения считается нормой.", en: "A deviation of 15 % or more is clinically significant. In pregnant women and infants, moderate lymphopenia is considered normal." }
  },

  {
    id: "mon", cat: "cbc", abbr: "MON",
    name: { uz: "Monotsitlar", ru: "Моноциты", en: "Monocytes" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["1 yoshgacha", "5–12"], ["1–4 yosh", "4–10"], ["5–16 yosh", "3–9"], ["Kattalar", "2–8 (optimum 3–4)"], ["Absolyut (kattalar)", "0,08–0,6 ×10⁹/l"]],
      ru: [["до 1 года", "5–12"], ["1–4 года", "4–10"], ["5–16 лет", "3–9"], ["Взрослые", "2–8 (оптимум 3–4)"], ["Абсолют (взрослые)", "0,08–0,6 ×10⁹/л"]],
      en: [["under 1 yr", "5–12"], ["1–4 yrs", "4–10"], ["5–16 yrs", "3–9"], ["Adults", "2–8 (optimal 3–4)"], ["Absolute (adults)", "0.08–0.6 ×10⁹/L"]]
    },
    optimum: { uz: "3–4 % (absolyut 0,08–0,6 ×10⁹/l)", ru: "3–4 % (абс. 0,08–0,6 ×10⁹/л)", en: "3–4 % (absolute 0.08–0.6 ×10⁹/L)" },
    high: {
      uz: ["Virusli infeksiya", "Yallig'lanish jarayoni", "Zamburug'li infeksiya", "Parazitar infeksiya", "Autoimmun kasalliklar", "Oshqozon-ichak muammolari (yarali kolit, Kron kasalligi)", "Har qanday yallig'lanishdan keyingi tiklanish davri", "Granulematozlar", "Psixo-emotsional stress"],
      ru: ["Вирусная инфекция", "Воспалительный процесс", "Грибковая инфекция", "Паразитарная инфекция", "Аутоиммунные заболевания", "Проблемы ЖКТ (язвенный колит, болезнь Крона)", "Восстановительный период после любого воспалительного процесса", "Гранулематозы", "Психо-эмоциональный стресс"],
      en: ["Viral infection", "Inflammatory process", "Fungal infection", "Parasitic infection", "Autoimmune diseases", "GI problems (ulcerative colitis, Crohn's disease)", "Recovery period after any inflammatory process", "Granulomatoses", "Psycho-emotional stress"]
    },
    low: {
      uz: ["Immunoyetishmovchilik", "Operatsiyadan keyingi davr", "Uzoq davom etgan ochlik", "Nomutanosib ovqatlanish", "Gormonal dorilar qabuli", "Homiladorlik", "Zaharlanish", "Tanqislik: temir, B6, B9, B12"],
      ru: ["Иммунодефицит", "Послеоперационный период", "Длительный голод", "Несбалансированное питание", "Приём гормональных препаратов", "Беременность", "Отравление", "Дефициты: железо, В6, В9, В12"],
      en: ["Immunodeficiency", "Postoperative period", "Prolonged fasting", "Unbalanced diet", "Hormonal medication use", "Pregnancy", "Poisoning", "Deficiencies: iron, B6, B9, B12"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "esr", cat: "cbc", abbr: "ESR",
    name: { uz: "Eritrotsitlar cho'kish tezligi (ECHT)", ru: "СОЭ", en: "Erythrocyte sedimentation rate" },
    unit: { uz: "mm/soat", ru: "мм/час", en: "mm/h" },
    norms: {
      uz: [["Yangi tug'ilgan", "1–2"], ["1–5 oy", "2–4"], ["6–12 oy", "4–8"], ["1–12 yosh", "4–12"], ["Ayollar 12–50 yosh", "3–15"], ["Ayollar 50 yoshdan keyin", "2–30"], ["Erkaklar 12–50 yosh", "2–10"], ["Erkaklar 50 yoshdan keyin", "2–20"]],
      ru: [["новорожденные", "1–2"], ["1–5 месяцев", "2–4"], ["6–12 месяцев", "4–8"], ["1–12 лет", "4–12"], ["Ж 12–50 лет", "3–15"], ["Ж после 50 лет", "2–30"], ["М 12–50 лет", "2–10"], ["М после 50 лет", "2–20"]],
      en: [["newborns", "1–2"], ["1–5 months", "2–4"], ["6–12 months", "4–8"], ["1–12 yrs", "4–12"], ["Women 12–50 yrs", "3–15"], ["Women after 50 yrs", "2–30"], ["Men 12–50 yrs", "2–10"], ["Men after 50 yrs", "2–20"]]
    },
    optimum: { uz: "5–10 mm/soat gacha (10 dan yuqori — «keskin» qiymatlar)", ru: "до 5–10 мм/час (выше 10 — «напряжённые» цифры)", en: "up to 5–10 mm/h (above 10 — 'tense' values)" },
    high: {
      uz: ["Yallig'lanish jarayoni", "Virusli yuk", "Bakterial infeksiya", "Zaharlanish", "Miokard infarkti", "Gipergomotsisteinemiya (gomotsisteinni tekshiring, 6 dan oshmasligi kerak)", "Buyrak kasalliklari", "Anemiya", "Hayz", "Homiladorlik"],
      ru: ["Воспалительный процесс", "Вирусная нагрузка", "Бактериальная инфекция", "Отравление", "Инфаркт миокарда", "Гипергомоцистеинемия (проверить гомоцистеин, не выше 6)", "Заболевания почек", "Анемия", "Менструация", "Беременность"],
      en: ["Inflammatory process", "Viral load", "Bacterial infection", "Poisoning", "Myocardial infarction", "Hyperhomocysteinemia (check homocysteine, should be ≤6)", "Kidney disease", "Anemia", "Menstruation", "Pregnancy"]
    },
    low: {
      uz: ["Tahlilni noto'g'ri topshirish (topshirish oldidan ovqatlanish)", "Suvsizlanish", "Albumin oshishi", "Atsidoz"],
      ru: ["Неверный забор анализа (приём пищи перед сдачей)", "Обезвоживание", "Повышение альбумина", "Ацидоз"],
      en: ["Improper sampling (eating before the test)", "Dehydration", "Elevated albumin", "Acidosis"]
    },
    note: { uz: "Infeksiya belgilari — Bakterial/zamburug'li: neytrofillar, monotsitlar, leykotsitlar ↑, limfotsitlar ↓, ECHT ↑. Virusli: limfotsitlar, monotsitlar ↑, neytrofillar, leykotsitlar ↓, ECHT ↑. Virusli infeksiyada antibiotiklar qo'llanilmaydi.", ru: "Признаки инфекции — Бактериальная/грибковая: нейтрофилы, моноциты, лейкоциты ↑, лимфоциты ↓, СОЭ ↑. Вирусная: лимфоциты, моноциты ↑, нейтрофилы, лейкоциты ↓, СОЭ ↑. При вирусной инфекции антибиотики не применяются.", en: "Signs of infection — Bacterial/fungal: neutrophils, monocytes, leukocytes ↑, lymphocytes ↓, ESR ↑. Viral: lymphocytes, monocytes ↑, neutrophils, leukocytes ↓, ESR ↑. Antibiotics are not used for viral infection." }
  },

  // ─────────── Biokimyo: temir va yallig'lanish ───────────
  {
    id: "ferritin", cat: "biochem", abbr: "Ferritin",
    name: { uz: "Ferritin", ru: "Ферритин", en: "Ferritin" },
    unit: { uz: "mkg/l", ru: "мкг/л", en: "µg/L" },
    norms: {
      uz: [["Yangi tug'ilgan – 6 oy", "70–300"], ["6 oy – 15 yosh", "50–100"], ["Ayollar", "50–100"], ["Erkaklar", "70–150"]],
      ru: [["новорожд. – 6 мес.", "70–300"], ["6 мес. – 15 лет", "50–100"], ["Женщины", "50–100"], ["Мужчины", "70–150"]],
      en: [["newborn – 6 mo", "70–300"], ["6 mo – 15 yrs", "50–100"], ["Women", "50–100"], ["Men", "70–150"]]
    },
    optimum: { uz: "100 dan oshmasligi (sog'lom hayz ko'radigan ayollarда ~50–70)", ru: "не выше 100 (у здоровых менструирующих женщин ~50–70)", en: "not above 100 (in healthy menstruating women ~50–70)" },
    high: {
      uz: ["Aniqlanmagan joylashuvli yashirin yallig'lanish (infeksiyalar, autoimmun kasalliklar)", "Gemoxromatoz", "Jigarning o'tkir yoki surункali kasalliklari", "Semizlikda metabolik sindrom", "Qandli diabet", "Homiladorlik", "Gemolitik anemiyalar (B12-tanqislik anemiyasi, talassemiya)", "Ko'p marta qon quyish, mushak ichiga temir yuborish, tabletka temir preparatlari"],
      ru: ["Скрытое воспаление неясной локализации (инфекции, аутоиммунные заболевания)", "Гемохроматоз", "Острые или хронические заболевания печени", "Метаболический синдром при ожирении", "Сахарный диабет", "Беременность", "Гемолитические анемии (B12-дефицитная, талассемия)", "Множественные переливания крови, в/м железо, таблетированные препараты железа"],
      en: ["Latent inflammation of unclear origin (infections, autoimmune diseases)", "Hemochromatosis", "Acute or chronic liver disease", "Metabolic syndrome in obesity", "Diabetes mellitus", "Pregnancy", "Hemolytic anemias (B12-deficiency, thalassemia)", "Multiple transfusions, IM iron, oral iron preparations"]
    },
    low: {
      uz: ["Temir tanqisligi", "Endokrin disfunksiya (50 mkg/l dan past qiymat T4→T3 konversiyasini qiyinlashtiradi)", "Qalqonsimon bez gormonlari tanqisligi temir tanqisligiga olib keladi"],
      ru: ["Дефицит железа", "Эндокринная дисфункция (значение ниже 50 мкг/л создаёт проблемы с конверсией Т4 в Т3)", "Дефицит гормонов щитовидной железы ведёт к железодефициту"],
      en: ["Iron deficiency", "Endocrine dysfunction (value below 50 µg/L impairs T4→T3 conversion)", "Thyroid hormone deficiency leads to iron deficiency"]
    },
    note: { uz: "MCV, MCH, RDW ko'rsatkichlari ko'proq ma'lumot beradi. Yallig'lanishning o'tkir fazasida ferritin oshishi mavjud temir tanqisligini niqoblashi mumkin.", ru: "Более показательны MCV, MCH, RDW. Повышение ферритина в острой фазе воспаления может маскировать имеющийся дефицит железа.", en: "MCV, MCH, RDW are more informative. A rise in ferritin during acute inflammation can mask an existing iron deficiency." }
  },

  {
    id: "transferrin", cat: "biochem", abbr: "Transferrin",
    name: { uz: "Transferrin", ru: "Трансферрин", en: "Transferrin" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["0–2 yosh", "2–3,5"], ["2 yoshdan katta va kattalar", "2–3"]],
      ru: [["0–2 года", "2–3,5"], ["дети от 2 лет и взрослые", "2–3"]],
      en: [["0–2 yrs", "2–3.5"], ["over 2 yrs and adults", "2–3"]]
    },
    optimum: { uz: "2–3 g/l", ru: "2–3 г/л", en: "2–3 g/L" },
    high: {
      uz: ["Temir tanqisligi anemiyasi"],
      ru: ["Железодефицитная анемия"],
      en: ["Iron-deficiency anemia"]
    },
    low: {
      uz: ["Sink tanqisligi", "Oqsil tanqisligi", "Jigarning sintetik funksiyasi buzilishi"],
      ru: ["Дефицит цинка", "Дефицит белка", "Нарушение синтетической функции печени"],
      en: ["Zinc deficiency", "Protein deficiency", "Impaired hepatic synthetic function"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "tsat", cat: "biochem", abbr: "TSAT",
    name: { uz: "Transferrinning temir bilan to'yinishi", ru: "Насыщение трансферрина железом", en: "Transferrin saturation with iron" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["Barcha yoshlar", "30–40"]],
      ru: [["Все возрасты", "30–40"]],
      en: [["All ages", "30–40"]]
    },
    optimum: { uz: "35 %", ru: "35 %", en: "35 %" },
    high: {
      uz: ["45 % dan yuqori — temir bilan ortiqcha yuklanish"],
      ru: ["Выше 45 % — перегрузка железом"],
      en: ["Above 45 % — iron overload"]
    },
    low: {
      uz: ["25 % dan past — temir tanqisligi", "16 % dan past — aniq temir tanqisligi anemiyasi"],
      ru: ["Ниже 25 % — дефицит железа", "Ниже 16 % — явная железодефицитная анемия"],
      en: ["Below 25 % — iron deficiency", "Below 16 % — overt iron-deficiency anemia"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "feserum", cat: "biochem", abbr: "Fe",
    name: { uz: "Zardobdagi temir konsentratsiyasi", ru: "Железо сыворотки", en: "Serum iron" },
    unit: { uz: "mkmol/l", ru: "мкмоль/л", en: "µmol/L" },
    norms: {
      uz: [["Barcha yoshlar", "15–30"]],
      ru: [["Все возрасты", "15–30"]],
      en: [["All ages", "15–30"]]
    },
    optimum: { uz: "15–30 mkmol/l", ru: "15–30 мкмоль/л", en: "15–30 µmol/L" },
    high: {
      uz: ["Temir preparatlari fonida (kuzatuv qiymati)", "Temir bilan ortiqcha yuklanish"],
      ru: ["На фоне приёма препаратов железа (контрольное значение)", "Перегрузка железом"],
      en: ["On iron supplementation (control value)", "Iron overload"]
    },
    low: {
      uz: ["Ratsionda temir kamligi", "Ichakда temirning so'rilishi buzilishi", "B guruh vitaminlari tanqisligi", "Mis tanqisligi", "Vitamin C tanqisligi"],
      ru: ["Мало железа в рационе", "Проблемы с усвоением железа в кишечнике", "Дефицит витаминов группы В", "Дефицит меди", "Дефицит витамина С"],
      en: ["Low dietary iron", "Impaired intestinal iron absorption", "B-group vitamin deficiency", "Copper deficiency", "Vitamin C deficiency"]
    },
    note: { uz: "Temir preparatlari fonida ko'rsatkich oshishi kerak. Agar oshmasa — ichakda temir so'rilishida muammo bor.", ru: "На фоне приёма препаратов железа показатель должен расти. Если этого не происходит — есть проблемы с усвоением железа в кишечнике.", en: "On iron supplementation the value should rise. If it does not, there is an intestinal iron-absorption problem." }
  },

  {
    id: "tibc", cat: "biochem", abbr: "TIBC",
    name: { uz: "Temir bog'lashning umumiy qobiliyati (TBUQ)", ru: "ОЖСС (общая железосвязывающая способность)", en: "Total iron-binding capacity" },
    unit: { uz: "mkmol/l", ru: "мкмоль/л", en: "µmol/L" },
    norms: {
      uz: [["0–2 yosh", "50–65"], ["2 yoshdan katta va kattalar", "45–55"]],
      ru: [["0–2 года", "50–65"], ["от 2 лет и взрослые", "45–55"]],
      en: [["0–2 yrs", "50–65"], ["over 2 yrs and adults", "45–55"]]
    },
    optimum: { uz: "Normaning yuqori chegarasiga yaqin", ru: "Ближе к верхней границе нормы", en: "Closer to the upper limit of normal" },
    high: {
      uz: ["Temir tanqisligi", "Gipoxrom anemiya", "Homiladorlikning kech muddatlari"],
      ru: ["Дефицит железа", "Гипохромная анемия", "Беременность на поздних сроках"],
      en: ["Iron deficiency", "Hypochromic anemia", "Late pregnancy"]
    },
    low: {
      uz: ["Gemolitik va ba'zi boshqa anemiyalar", "Pernitsioz anemiya (B12 tanqisligi)", "Gemoxromatoz / temir ortiqchaligi", "Talassemiya", "Oqsil tanqisligi", "O'tkir infeksion yoki bakterial kasalliklar"],
      ru: ["Гемолитическая и некоторые другие виды анемий", "Пернициозная анемия (дефицит В12)", "Гемохроматоз / избыток железа", "Талассемия", "Дефицит белка", "Острые инфекционные или бактериальные заболевания"],
      en: ["Hemolytic and some other anemias", "Pernicious anemia (B12 deficiency)", "Hemochromatosis / iron excess", "Thalassemia", "Protein deficiency", "Acute infectious or bacterial diseases"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "homocysteine", cat: "biochem", abbr: "HCY",
    name: { uz: "Gomotsistein", ru: "Гомоцистеин", en: "Homocysteine" },
    unit: { uz: "mkmol/l", ru: "мкмоль/л", en: "µmol/L" },
    norms: {
      uz: [["Barcha yoshlar (optimal)", "5–7"], ["Qizlar 12–19 yosh", "3,3–7,2"], ["Ayollar 60 yoshdan katta", "4,9–11,6"], ["O'g'illar 12–19 yosh", "4,3–9,9"], ["Erkaklar 60 yoshdan katta", "5,9–15,3"]],
      ru: [["Все возрасты (оптимально)", "5–7"], ["Ж 12–19 лет", "3,3–7,2"], ["Ж старше 60 лет", "4,9–11,6"], ["М 12–19 лет", "4,3–9,9"], ["М старше 60 лет", "5,9–15,3"]],
      en: [["All ages (optimal)", "5–7"], ["Girls 12–19 yrs", "3.3–7.2"], ["Women over 60 yrs", "4.9–11.6"], ["Boys 12–19 yrs", "4.3–9.9"], ["Men over 60 yrs", "5.9–15.3"]]
    },
    optimum: { uz: "≈6, 7 dan oshmasligi", ru: "≈6, не выше 7", en: "≈6, not above 7" },
    high: {
      uz: ["Tanqislik: B12/B9", "Betain (trimetilglitsin) tanqisligi", "Tanqislik: inozitol (B8)/xolin (B4)/B6", "MTHFR genining mutatsiyasi", "Ratsionda kofe ortiqchaligi", "Ovqatda metionin ortiqchaligi", "Chekish", "Buyrak yetishmovchiligi", "Dorilar (metotreksat, fenitoin, azot oksidi, metformin, eufillin, gormonal kontratseptivlar)"],
      ru: ["Дефицит В12/В9", "Дефицит бетаина (триметилглицина)", "Дефицит инозитола (В8)/холина (В4)/В6", "Мутация гена MTHFR", "Избыток кофе в рационе", "Избыток метионина в еде", "Курение", "Почечная недостаточность", "Приём лекарств (метотрексат, фенитоин, закись азота, метформин, эуфиллин, гормональные контрацептивы)"],
      en: ["B12/B9 deficiency", "Betaine (trimethylglycine) deficiency", "Inositol (B8)/choline (B4)/B6 deficiency", "MTHFR gene mutation", "Excess dietary coffee", "Excess dietary methionine", "Smoking", "Renal failure", "Drugs (methotrexate, phenytoin, nitrous oxide, metformin, aminophylline, hormonal contraceptives)"]
    },
    low: {
      uz: ["Glutation tanqisligi", "Ovqatda metionin tanqisligi", "Homiladorlik"],
      ru: ["Дефицит глутатиона", "Дефицит метионина в еде", "Беременность"],
      en: ["Glutathione deficiency", "Dietary methionine deficiency", "Pregnancy"]
    },
    note: { uz: "Gomotsisteinning oshishi patologik tromb hosil bo'lishiga olib keladi. 10–20 — yengil, 20–29 — o'rta, 30 dan yuqori — og'ir daraja. 13 dan yuqori — yurak-qon tomir kasalliklari xavfi yuqori.", ru: "Повышение гомоцистеина ведёт к патологическому тромбообразованию. 10–20 — лёгкое, 20–29 — умеренное, 30 и выше — тяжёлое. Выше 13 — высокий риск сердечно-сосудистых заболеваний.", en: "Elevated homocysteine promotes pathological thrombosis. 10–20 mild, 20–29 moderate, 30+ severe. Above 13 indicates high cardiovascular risk." }
  },

  {
    id: "cpeptide", cat: "biochem", abbr: "C-Pept",
    name: { uz: "C-peptid", ru: "С-пептид", en: "C-peptide" },
    unit: { uz: "ng/ml", ru: "нг/мл", en: "ng/mL" },
    norms: {
      uz: [["Barcha yoshlar", "2,5–3 (yoki referens o'rtasi)"]],
      ru: [["Все возрасты", "2,5–3 (или середина референса)"]],
      en: [["All ages", "2.5–3 (or mid-reference)"]]
    },
    optimum: { uz: "2,5–3 ng/ml", ru: "2,5–3 нг/мл", en: "2.5–3 ng/mL" },
    high: {
      uz: ["Buyrak yetishmovchiligi", "Tuxumdon polikistozi", "Homiladorlik", "Semizlik", "2-tip qandli diabet"],
      ru: ["Почечная недостаточность", "Поликистоз яичников", "Беременность", "Ожирение", "Сахарный диабет 2 типа"],
      en: ["Renal failure", "Polycystic ovary syndrome", "Pregnancy", "Obesity", "Type 2 diabetes mellitus"]
    },
    low: {
      uz: ["1-tip qandli diabet", "Sun'iy gipoglikemiya"],
      ru: ["Сахарный диабет 1 типа", "Искусственная гипогликемия"],
      en: ["Type 1 diabetes mellitus", "Factitious hypoglycemia"]
    },
    note: { uz: "Normadan qancha past bo'lsa, insulinrezistentlik shunchalik kuchli ifodalangan.", ru: "Чем ниже нормы, тем выраженнее инсулинорезистентность.", en: "The lower below normal, the more pronounced the insulin resistance." }
  },

  {
    id: "crp", cat: "biochem", abbr: "CRP",
    name: { uz: "C-reaktiv oqsil", ru: "С-реактивный белок", en: "C-reactive protein" },
    unit: { uz: "mg/l", ru: "мг/л", en: "mg/L" },
    norms: {
      uz: [["Bolalar", "1,6 dan kam"], ["Ayollar", "1,0 dan kam"], ["Erkaklar", "0,55 dan kam"]],
      ru: [["Дети", "менее 1,6"], ["Женщины", "менее 1,0"], ["Мужчины", "менее 0,55"]],
      en: [["Children", "less than 1.6"], ["Women", "less than 1.0"], ["Men", "less than 0.55"]]
    },
    optimum: { uz: "0 ga yaqin (1 mg/l gacha)", ru: "ближе к 0 (до 1 мг/л)", en: "close to 0 (up to 1 mg/L)" },
    high: {
      uz: ["Organizmdagi tizimli yallig'lanish (qo'shimcha umumiy oqsil, albumin, KFK, fibrinogen topshiring)", "Leptinrezistentlik", "Homiladorlik"],
      ru: ["Системное воспаление в организме (дополнительно сдать общий белок, альбумин, КФК, фибриноген)", "Лептинорезистентность", "Беременность"],
      en: ["Systemic inflammation (additionally test total protein, albumin, CK, fibrinogen)", "Leptin resistance", "Pregnancy"]
    },
    low: {
      uz: ["Past qiymat — norma"],
      ru: ["Низкое значение — норма"],
      en: ["Low value is normal"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "fibrinogen", cat: "biochem", abbr: "FIB",
    name: { uz: "Fibrinogen", ru: "Фибриноген", en: "Fibrinogen" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["Yangi tug'ilgan", "1,25–3"], ["Bolalar va kattalar", "2–4"]],
      ru: [["новорожденные", "1,25–3"], ["дети и взрослые", "2–4"]],
      en: [["newborns", "1.25–3"], ["children and adults", "2–4"]]
    },
    optimum: { uz: "2–3 g/l (2 gacha — yallig'lanish markeri sifatida)", ru: "2–3 г/л (до 2 — как маркер воспаления)", en: "2–3 g/L (up to 2 — as inflammation marker)" },
    high: {
      uz: ["Homiladorlik", "Infeksion, yallig'lanish jarayoni", "Gipotireoz", "Chekish", "KOK, estrogenlar qabuli", "Qandli diabet, ateroskleroz"],
      ru: ["Беременность", "Инфекционный, воспалительный процесс", "Гипотиреоз", "Курение", "Приём КОК, эстрогенов", "Сахарный диабет, атеросклероз"],
      en: ["Pregnancy", "Infectious, inflammatory process", "Hypothyroidism", "Smoking", "COC, estrogen use", "Diabetes mellitus, atherosclerosis"]
    },
    low: {
      uz: ["B12/vitamin C tanqisligi", "Nomutanosib vegetarianlik", "Eritrotsitlarning patologik oshishi", "Homiladorlikda toksikoz", "Baliq yog'i dozasi oshishi"],
      ru: ["Дефицит В12/витамина С", "Несбалансированное вегетарианство", "Патологическое повышение эритроцитов", "Токсикоз при беременности", "Передозировка рыбьего жира"],
      en: ["B12/vitamin C deficiency", "Unbalanced vegetarianism", "Pathological erythrocytosis", "Toxicosis in pregnancy", "Fish oil overdose"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "ecp", cat: "biochem", abbr: "ECP",
    name: { uz: "Eozinofil kation oqsili (EKB)", ru: "Эозинофильный катионный белок (ЭКБ)", en: "Eosinophil cationic protein" },
    unit: { uz: "mkg/l", ru: "мкг/л", en: "µg/L" },
    norms: {
      uz: [["Barcha yoshlar", "0–24"]],
      ru: [["Все возрасты", "0–24"]],
      en: [["All ages", "0–24"]]
    },
    optimum: { uz: "0–7 (qancha past — shuncha yaxshi)", ru: "0–7 (чем ниже — тем лучше)", en: "0–7 (the lower, the better)" },
    high: {
      uz: ["Eozinofillar oshganda: EKB normadan yuqori, IgE norma — parazitoz ehtimoli yuqori", "EKB va IgE birga oshgan — turli joylashuvdagi allergik reaksiya (mavsumiy allergiyadan yashirin oziq-ovqat toqatsizligigacha)"],
      ru: ["При повышении эозинофилов: ЭКБ выше нормы, IgE в норме — вероятнее паразитоз", "ЭКБ и IgE повышены — аллергическая реакция разных локаций (от сезонных аллергий до скрытой пищевой непереносимости)"],
      en: ["With elevated eosinophils: ECP above normal, IgE normal — parasitosis more likely", "ECP and IgE both elevated — allergic reaction of various sites (from seasonal allergy to hidden food intolerance)"]
    },
    low: {
      uz: ["Past qiymat — norma (qancha past — shuncha yaxshi)"],
      ru: ["Низкое значение — норма (чем ниже — тем лучше)"],
      en: ["Low value is normal (the lower, the better)"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  // ─────────── Oqsil almashinuvi ───────────
  {
    id: "protein_total", cat: "protein", abbr: "TP",
    name: { uz: "Umumiy oqsil", ru: "Общий белок", en: "Total protein" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["1 yoshgacha", "51–73"], ["1–20 yosh", "62–76"], ["20–34 yosh", "75–82"], ["34–60 yosh", "76–80"], ["61–75 yosh", "74–78"]],
      ru: [["до года", "51–73"], ["1–20 л.", "62–76"], ["20–34 л.", "75–82"], ["34–60 л.", "76–80"], ["61–75 л.", "74–78"]],
      en: [["under 1 yr", "51–73"], ["1–20 yrs", "62–76"], ["20–34 yrs", "75–82"], ["34–60 yrs", "76–80"], ["61–75 yrs", "74–78"]]
    },
    optimum: { uz: "77–80 g/l (bolalar 5 yoshgacha >65, 5 yoshdan keyin 70–75)", ru: "77–80 г/л (дети до 5 лет >65, после 5 лет 70–75)", en: "77–80 g/L (children <5 yrs >65, over 5 yrs 70–75)" },
    high: {
      uz: ["Bitta tahlil asosida sababini aniqlash mumkin emas — shifokor bilan maslahat zarur", "Aniqlash uchun oqsil fraksiyalari va yallig'lanish ko'rsatkichlarini tekshiring"],
      ru: ["Установить на основе одного анализа невозможно — нужна консультация врача", "Для уточнения проверить белковые фракции и показатели воспаления"],
      en: ["Cannot be established from a single test — physician consultation needed", "Check protein fractions and inflammation markers to clarify"]
    },
    low: {
      uz: ["Temir tanqisligi", "Albumin oshishi", "Oshqozon kislotaliligi pasayishi", "Nomutanosib veganlik/vegetarianlik", "Homiladorlik", "Jigar va buyrak funksiyasi buzilishi"],
      ru: ["Железодефицит", "Повышенный альбумин", "Пониженная кислотность желудка", "Несбалансированное веганство/вегетарианство", "Беременность", "Нарушение функции печени и почек"],
      en: ["Iron deficiency", "Elevated albumin", "Low gastric acidity", "Unbalanced veganism/vegetarianism", "Pregnancy", "Impaired liver and kidney function"]
    },
    note: { uz: "Past qiymatlar ratsionda oqsil tanqisligi, uning so'rilmasligi, kislotalilik pasayishi, o't oqimi buzilishi, oshqozonosti bezi fermentlari yetishmasligi yoki jigar sintetik funksiyasi buzilishi bilan bog'liq.", ru: "Низкие значения связаны с дефицитом белка в рационе, его неусвоением, пониженной кислотностью, нарушением оттока жёлчи, недостатком ферментов поджелудочной железы или нарушением синтетической функции печени.", en: "Low values relate to dietary protein deficiency, malabsorption, low acidity, impaired bile flow, pancreatic enzyme deficiency, or impaired hepatic synthetic function." }
  },

  {
    id: "albumin", cat: "protein", abbr: "ALB",
    name: { uz: "Albumin", ru: "Альбумин", en: "Albumin" },
    unit: { uz: "g/l", ru: "г/л", en: "g/L" },
    norms: {
      uz: [["14 yoshgacha bolalar", "54 gacha"], ["Kattalar", "40–52"], ["Keksalar", "35–46"]],
      ru: [["дети до 14 лет", "до 54"], ["взрослые", "40–52"], ["пожилые", "35–46"]],
      en: [["children under 14 yrs", "up to 54"], ["adults", "40–52"], ["elderly", "35–46"]]
    },
    optimum: { uz: "45 dan yuqori (umumiy oqsilning ~60% ini tashkil etishi kerak)", ru: "выше 45 (должен составлять ~60% от общего белка)", en: "above 45 (should be ~60% of total protein)" },
    high: {
      uz: ["Umumiy oqsil tanqisligi (aminokislota zaxiralari kamayganda organizm oqsilni albumin hisobiga ushlab turadi)", "Suvsizlanish", "Buyrak kasalliklari", "Intoksikatsiya"],
      ru: ["Дефицит общего белка (при истощении аминокислотных пулов организм поддерживает белок за счёт альбумина)", "Обезвоживание", "Заболевания почек", "Интоксикация"],
      en: ["Total protein deficiency (with depleted amino-acid pools the body maintains protein via albumin)", "Dehydration", "Kidney disease", "Intoxication"]
    },
    low: {
      uz: ["Suyuqlik ortiqchaligi", "Infeksiyalar", "Yurak yetishmovchiligi", "Jigar zaxiralari tugashi", "Homiladorlik"],
      ru: ["Избыток жидкости", "Инфекции", "Сердечная недостаточность", "Истощение ресурсов печени", "Беременность"],
      en: ["Fluid excess", "Infections", "Heart failure", "Depletion of liver reserves", "Pregnancy"]
    },
    note: { uz: "Albumin jigar oqsil-sintetik funksiyasi va nutritiv holatni baholash uchun ishlatiladi.", ru: "Альбумин используется для оценки белково-синтетической функции печени и нутритивного статуса.", en: "Albumin is used to assess hepatic protein-synthetic function and nutritional status." }
  },

  {
    id: "crea", cat: "protein", abbr: "CREA",
    name: { uz: "Kreatinin (qonda)", ru: "Креатинин (в крови)", en: "Creatinine (serum)" },
    unit: { uz: "mkmol/l", ru: "мкмоль/л", en: "µmol/L" },
    norms: {
      uz: [["1–12 yosh", "24–62"], ["13–18 yosh", "44–88"], ["Ayollar", "53–97"], ["Erkaklar", "80–115"]],
      ru: [["дети 1–12 лет", "24–62"], ["13–18 лет", "44–88"], ["Женщины", "53–97"], ["Мужчины", "80–115"]],
      en: [["1–12 yrs", "24–62"], ["13–18 yrs", "44–88"], ["Women", "53–97"], ["Men", "80–115"]]
    },
    optimum: { uz: "Laboratoriya referensining o'rtasi", ru: "Середина референса лаборатории", en: "Mid-range of the laboratory reference" },
    high: {
      uz: ["Buyrak kasalliklari", "Suvsizlanish", "Ratsionda go'sht ortiqchaligi", "O'sish gormoni ortiqchaligi", "Diabet", "Gipertireoz"],
      ru: ["Заболевания почек", "Обезвоживание", "Избыток мясной пищи в рационе", "Избыток гормона роста", "Диабет", "Гипертиреоз"],
      en: ["Kidney disease", "Dehydration", "Excess dietary meat", "Excess growth hormone", "Diabetes", "Hyperthyroidism"]
    },
    low: {
      uz: ["Ratsionda oqsil tanqisligi", "Ochlik yoki kasallik tufayli mushak massasi kamayishi", "Homiladorlik", "Gipergidratatsiya"],
      ru: ["Дефицит белка в рационе", "Уменьшение мышечной массы из-за голодания или болезни", "Беременность", "Гипергидратация"],
      en: ["Dietary protein deficiency", "Reduced muscle mass from fasting or illness", "Pregnancy", "Overhydration"]
    },
    note: { uz: "Kreatinin buyraklar faoliyatining muhim ko'rsatkichi.", ru: "Креатинин — важный показатель деятельности почек.", en: "Creatinine is an important marker of kidney function." }
  },

  {
    id: "urea", cat: "protein", abbr: "UREA",
    name: { uz: "Mochevina", ru: "Мочевина", en: "Urea" },
    unit: { uz: "mmol/l", ru: "ммоль/л", en: "mmol/L" },
    norms: {
      uz: [["14 yoshgacha bolalar", "1,8–4,9"], ["Ayollar", "2,3–6,6"], ["Erkaklar", "2,4–6,5"]],
      ru: [["дети 14 лет", "1,8–4,9"], ["Женщины", "2,3–6,6"], ["Мужчины", "2,4–6,5"]],
      en: [["children under 14 yrs", "1.8–4.9"], ["Women", "2.3–6.6"], ["Men", "2.4–6.5"]]
    },
    optimum: { uz: "Bolalar 4 gacha, ayollar 3 gacha, erkaklar 4 gacha", ru: "Дети до 4, женщины до 3, мужчины до 4", en: "Children up to 4, women up to 3, men up to 4" },
    high: {
      uz: ["Jigar patologiyalari", "Yallig'lanish jarayoni", "Ratsionda oqsil ortiqchaligi", "Qalqonsimon bez ishi buzilishi", "Buyrak yetishmovchiligi", "Ochlik"],
      ru: ["Патологии печени", "Воспалительный процесс", "Избыток белка в рационе", "Нарушение работы щитовидной железы", "Почечная недостаточность", "Голодание"],
      en: ["Liver pathology", "Inflammatory process", "Excess dietary protein", "Thyroid dysfunction", "Renal failure", "Fasting"]
    },
    low: {
      uz: ["Ratsionda oqsil yetishmasligi", "Gipergidratatsiya", "Homiladorlik", "Tuzsiz parhez"],
      ru: ["Нехватка белка в рационе", "Гипергидратация", "Беременность", "Бессолевая диета"],
      en: ["Insufficient dietary protein", "Overhydration", "Pregnancy", "Salt-free diet"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "uric_acid", cat: "protein", abbr: "UA",
    name: { uz: "Siydik kislotasi", ru: "Мочевая кислота", en: "Uric acid" },
    unit: { uz: "mkmol/l", ru: "мкмоль/л", en: "µmol/L" },
    norms: {
      uz: [["Bolalar", "120–290"], ["Ayollar", "160–320"], ["Erkaklar", "200–400"]],
      ru: [["дети", "120–290"], ["Женщины", "160–320"], ["Мужчины", "200–400"]],
      en: [["children", "120–290"], ["Women", "160–320"], ["Men", "200–400"]]
    },
    optimum: { uz: "Ayollar ≤357, erkaklar ≤428 (insulinrezistentlik baholashda)", ru: "Женщины ≤357, мужчины ≤428 (при оценке инсулинорезистентности)", en: "Women ≤357, men ≤428 (when assessing insulin resistance)" },
    high: {
      uz: ["Yuqori dozali B12 qabuli", "Ratsionda oqsil ortiqchaligi", "Jigar ishidagi buzilishlar", "Buyrak chiqaruv funksiyasi pasayishi", "Og'ir jismoniy yuklamalar", "Uzoq davom etgan ochlik", "Atsidoz", "Qandli diabet"],
      ru: ["Приём высоких доз витамина В12", "Избыток белка в рационе", "Нарушения в работе печени", "Снижение выводящей функции почек", "Тяжёлые физические нагрузки", "Длительное голодание", "Ацидоз", "Сахарный диабет"],
      en: ["High-dose B12 intake", "Excess dietary protein", "Liver dysfunction", "Reduced renal excretory function", "Heavy physical exertion", "Prolonged fasting", "Acidosis", "Diabetes mellitus"]
    },
    low: {
      uz: ["Ratsionda oqsil tanqisligi", "Buyrak va ichakning giperfunksiyasi", "Jigarda hosil bo'lish jarayoni buzilishi", "Homiladorlik"],
      ru: ["Дефицит белка в рационе", "Гиперфункциональность почек и кишечника", "Нарушение процесса образования в печени", "Беременность"],
      en: ["Dietary protein deficiency", "Hyperfunction of kidneys and intestine", "Impaired hepatic synthesis", "Pregnancy"]
    },
    note: { uz: "Doimiy yuqori siydik kislotasi podagra (bo'g'imlar yallig'lanishi) va siydik yo'llarida urat toshlari hosil bo'lishiga sabab bo'lishi mumkin.", ru: "Постоянно повышенный уровень мочевой кислоты может вызывать подагру (воспаление суставов) и образование уратных камней в мочевыделительной системе.", en: "Persistently high uric acid can cause gout (joint inflammation) and urate stone formation in the urinary tract." }
  },

  // ─────────── Uglevod almashinuvi ───────────
  {
    id: "glu", cat: "carb", abbr: "GLU",
    name: { uz: "Glyukoza (och qoringa)", ru: "Глюкоза (натощак)", en: "Glucose (fasting)" },
    unit: { uz: "mmol/l", ru: "ммоль/л", en: "mmol/L" },
    norms: {
      uz: [["1–5 yosh", "3,3–5"], ["5 yoshdan katta va kattalar", "3,9–5,5"]],
      ru: [["дети 1–5 лет", "3,3–5"], ["от 5 лет и взрослые", "3,9–5,5"]],
      en: [["1–5 yrs", "3.3–5"], ["over 5 yrs and adults", "3.9–5.5"]]
    },
    optimum: { uz: "4,6–4,8 mmol/l", ru: "4,6–4,8 ммоль/л", en: "4.6–4.8 mmol/L" },
    high: {
      uz: ["5,6 dan yuqori — giperglikemiya", "Homiladorlik"],
      ru: ["Выше 5,6 — гипергликемия", "Беременность"],
      en: ["Above 5.6 — hyperglycemia", "Pregnancy"]
    },
    low: {
      uz: ["3,9 dan past — gipoglikemiya"],
      ru: ["Ниже 3,9 — гипогликемия"],
      en: ["Below 3.9 — hypoglycemia"]
    },
    note: { uz: "", ru: "", en: "" }
  },

  {
    id: "hba1c", cat: "carb", abbr: "HbA1c",
    name: { uz: "Glikatsiyalangan gemoglobin", ru: "Гликированный гемоглобин", en: "Glycated hemoglobin" },
    unit: { uz: "%", ru: "%", en: "%" },
    norms: {
      uz: [["Barcha yoshlar", "4,6–5,5"]],
      ru: [["Все возрасты", "4,6–5,5"]],
      en: [["All ages", "4.6–5.5"]]
    },
    optimum: { uz: "5 % dan oshmasligi", ru: "не выше 5 %", en: "not above 5 %" },
    high: {
      uz: ["5,5 % dan yuqori — insulinrezistentlik belgisi", "Temir tanqisligi anemiyasida soxta yuqori bo'lishi mumkin (fruktozamin tahlili tavsiya etiladi)"],
      ru: ["Выше 5,5 % — признак инсулинорезистентности", "Может быть ложно повышен при железодефицитной анемии (рекомендован анализ на фруктозамин)"],
      en: ["Above 5.5 % — sign of insulin resistance", "May be falsely elevated in iron-deficiency anemia (fructosamine test recommended)"]
    },
    low: {
      uz: ["4,6 % dan past — gipoglikemiya belgisi"],
      ru: ["Ниже 4,6 % — признак гипогликемии"],
      en: ["Below 4.6 % — sign of hypoglycemia"]
    },
    note: { uz: "Oxirgi 2–3 oydagi o'rtacha qon glyukozasini aks ettiradi.", ru: "Отражает среднее содержание глюкозы в крови за последние 2–3 месяца.", en: "Reflects average blood glucose over the past 2–3 months." }
  },

  {
    id: "insulin", cat: "carb", abbr: "INS",
    name: { uz: "Insulin (och qoringa)", ru: "Инсулин (натощак)", en: "Insulin (fasting)" },
    unit: { uz: "mkBd/ml", ru: "МкЕд/мл", en: "µIU/mL" },
    norms: {
      uz: [["Barcha yoshlar", "2–6"]],
      ru: [["Все возрасты", "2–6"]],
      en: [["All ages", "2–6"]]
    },
    optimum: { uz: "3–5 mkBd/ml", ru: "3–5 МкЕд/мл", en: "3–5 µIU/mL" },
    high: {
      uz: ["6 dan yuqori — insulinrezistentlik ehtimoli, stress ortishi", "Ratsionda uglevod va hayvon oqsillari ortiqchaligi", "Bo'lib-bo'lib ovqatlanish", "Tanqislik: vitamin D/magniy/xrom/vanadiy", "Laktatsiya davri (6,5–7 dan oshmasligi)"],
      ru: ["Выше 6 — вероятна инсулинорезистентность, повышенный стресс", "Избыток углеводов и животных белков в рационе", "Дробное питание", "Дефицит витамина D/магния/хрома/ванадия", "Период лактации (не выше 6,5–7)"],
      en: ["Above 6 — likely insulin resistance, increased stress", "Excess dietary carbohydrates and animal protein", "Frequent small meals", "Deficiency of vitamin D/magnesium/chromium/vanadium", "Lactation period (not above 6.5–7)"]
    },
    low: {
      uz: ["2 dan past — insulin ishlab chiqarilishi buzilishi ehtimoli (C-peptid topshiring; past bo'lsa 1-tip diabet tekshiruvi)", "Ketoz holatida bo'lishi mumkin"],
      ru: ["Ниже 2 — вероятно нарушение производства инсулина (сдать с-пептид; если понижен — обследование на диабет 1 типа)", "Возможно в состоянии кетоза"],
      en: ["Below 2 — likely impaired insulin production (test C-peptide; if low — evaluate for type 1 diabetes)", "Possible in ketosis"]
    },
    note: { uz: "", ru: "", en: "" }
  }

];

// Global ko'rinish (window) — app.js dan foydalanish uchun
if (typeof window !== "undefined") {
  window.LAB_CATEGORIES = LAB_CATEGORIES;
  window.LAB_TESTS = LAB_TESTS;
}
