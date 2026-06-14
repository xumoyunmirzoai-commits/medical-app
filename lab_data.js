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
  }

];

// Global ko'rinish (window) — app.js dan foydalanish uchun
if (typeof window !== "undefined") {
  window.LAB_CATEGORIES = LAB_CATEGORIES;
  window.LAB_TESTS = LAB_TESTS;
}
