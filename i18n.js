// ═══════════════════════════════════════════════════════
//  MedCore — i18n.js
//  3 til: O'zbek (uz) | Русский (ru) | English (en)
// ═══════════════════════════════════════════════════════

// ── Joriy til ──
let LANG = localStorage.getItem("mc_lang") || "uz";

// ── Asosiy tarjimalar ──
const TRANSLATIONS = {

  // ══════════════════════════════
  //  O'ZBEK TILI
  // ══════════════════════════════
  uz: {
    // Brend
    brand_name: "MedCore",
    brand_sub:  "Pro Platforma",

    // Navigatsiya
    nav_section_main:  "Asosiy",
    nav_section_bases: "Klinik Bazalar",
    nav_section_tools: "Asboblar",
    nav_dashboard:    "Dashboard",
    nav_drugs:        "Dorilar",
    nav_diseases:     "Kasalliklar",
    nav_lab:          "Laboratoriya",
    nav_calculators:  "Kalkulyatorlar",
    nav_interactions: "O'zaro Ta'sir",
    nav_favorites:    "Sevimlilar",
    nav_soon:         "Tez",

    // Topbar
    search_placeholder: "Dori, kasallik, belgi qidiring...",
    search_kbd:         "Ctrl K",

    // Dashboard
    dash_greeting:  "Xayrli kun,",
    dash_title:     "Tibbiyot Ma'lumotlar Platformasi",
    dash_desc:      "Dorilar, kasalliklar va klinik asboblar — barchasi bir joyda.",
    stat_drugs:     "Dorilar",
    stat_groups:    "Farmakol. guruhlar",
    stat_interact:  "O'zaro ta'sirlar",
    stat_favs:      "Sevimlilar",
    stat_uzb:       "O'zbekiston",
    stat_atx:       "ATX bo'yicha",
    stat_warning:   "Diqqat!",
    stat_no_favs:   "Hali yo'q",
    modules_title:  "Bo'limlar",
    groups_title:   "Farmakologik Guruhlar",
    groups_all:     "Barchasi →",
    alert_title:    "Muhim eslatma",
    alert_text:     "Metformin + Kontrast modda: tekshiruvdan 48 soat oldin to'xtatish shart.",
    recent_title:   "So'nggi ko'rilgan dorilar",
    recent_empty:   "Dori ochganingizda bu yerda ko'rinadi",
    soon_label:     "Tez kunda",

    // Dorilar sahifasi
    drugs_page_title: "Dorilar Ma'lumotlar Bazasi",
    drugs_page_sub:   "Farmakologik ta'sir, dozalash va xavfsizlik ma'lumotlari",
    filter_group:     "Guruh",
    filter_all_groups:"Barcha guruhlar",
    filter_form:      "Shakli",
    filter_all_forms: "Barchasi",
    tab_all:          "Hammasi",
    search_drugs_ph:  "Dori nomi, INN, firma yoki ATX kodi...",
    page_of:          "jami",
    page_drugs:       "ta dori",
    prev_page:        "← Oldingi",
    next_page:        "Keyingi →",
    no_drugs:         "Hech qanday dori topilmadi",
    card_details:     "Batafsil →",

    // Dori kartasi
    card_atx:      "ATX",
    card_form:     "Shakl",
    card_firm:     "Ishlab ch.",
    rx_yes:        "Retsept",
    rx_no:         "Erkin",

    // Modal
    modal_general:  "Umumiy",
    modal_pharma:   "Farmakologiya",
    modal_safety:   "Xavfsizlik",
    modal_save:     "Saqlash",
    modal_saved:    "Saqlangan",
    modal_form:     "Chiqarilish shakli",
    modal_atx:      "ATX kodi",
    modal_rx:       "Retsept holati",
    modal_rx_yes:   "🔴 Retsept bilan",
    modal_rx_no:    "🟢 Retseptsiz",
    modal_country:  "Mamlakat",
    modal_uzb:      "🇺🇿 O'zbekiston",
    modal_firm:     "Ishlab chiqaruvchi firma",
    modal_form_full:"To'liq shakl tavsifi",
    modal_reg:      "Ro'yxatga olish raqami",
    modal_phgroup:  "Farmakoterapevtik guruh",
    modal_no_pharma:"Bu dori uchun farmakologik ma'lumotlar tez kunda qo'shiladi.",
    modal_no_safety:"Xavfsizlik ma'lumotlari tez kunda qo'shiladi.",

    // O'zaro ta'sir
    inter_title:   "Dorilar O'zaro Ta'siri",
    inter_sub:     "Klinik ahamiyatga ega xavfli kombinatsiyalar",
    inter_empty:   "O'zaro ta'sir ma'lumotlari tez kunda qo'shiladi.",
    inter_high:    "🔴 Yuqori xavf",
    inter_medium:  "🟡 O'rta xavf",
    inter_low:     "🟢 Past xavf",

    // Sevimlilar
    favs_title:    "Sevimli Dorilar",
    favs_sub:      "Tez kirish uchun saqlangan dorilar",
    favs_empty:    "Hali sevimli dori qo'shilmagan.\nDori kartasidagi ★ ni bosing.",

    // Kasalliklar
    diseases_title: "Kasalliklar Bo'limi",
    diseases_desc:  "ICD-10 kodlari, diagnostik mezonlar va davolash protokollari bilan kasalliklar ma'lumotlar bazasi tez orada qo'shiladi.",
    diseases_f1: "✓ ICD-10 kodlari",
    diseases_f2: "✓ Diagnostik mezonlar",
    diseases_f3: "✓ Davolash protokollari",
    diseases_f4: "✓ Differensial diagnostika",

    // Laboratoriya
    lab_title: "Laboratoriya Normalari",
    lab_desc:  "Qon va siydik tahlili normalari, interpretatsiya qo'llanmasi tez orada.",
    lab_f1: "✓ Klinik qon tahlili",
    lab_f2: "✓ Biokimyoviy ko'rsatkichlar",
    lab_f3: "✓ Siydik tahlili",
    lab_f4: "✓ Normalar jadvali",

    // Kalkulyatorlar
    calc_title: "Klinik Kalkulyatorlar",
    calc_desc:  "BMI, GFR, CHADS₂-VASc, Wells, Glasgow va boshqa klinik kalkulyatorlar tez orada.",
    calc_f1: "✓ BMI kalkulyatori",
    calc_f2: "✓ GFR (CKD-EPI)",
    calc_f3: "✓ CHADS₂-VASc",
    calc_f4: "✓ Wells scoring",

    // Foydalanuvchi
    user_role_demo:   "Demo foydalanuvchi",
    user_role_doctor: "Shifokor",
    user_settings:    "Sozlamalar",
    user_logout:      "Chiqish",
    user_logout_confirm: "Chiqishni tasdiqlaysizmi?",
    user_favorites:   "Sevimlilar",

    // Qidiruv
    search_no_result: "Natija topilmadi",

    // Login
    login_title:    "Hisobingizga kiring",
    login_desc:     "Tibbiyot platformasidan foydalanish uchun Google akkauntingiz bilan kiring.",
    login_google:   "Google bilan kirish",
    login_or:       "yoki",
    login_demo:     "Demo rejimida kirish",
    login_demo_note:"Demo rejimi — real akkaunt talab qilinmaydi.",
    login_terms:    "Kirish orqali siz",
    login_terms2:   "Foydalanish shartlari",
    login_and:      "va",
    login_policy:   "Maxfiylik siyosati",
    login_with:     "bilan rozisiz.",
    login_welcome:  "Tibbiyot Ma'lumotlar Platformasiga Xush Kelibsiz",
    login_sub:      "Dorilar, kasalliklar va klinik asboblar — tibbiyot talabalari va shifokorlar uchun.",

    // Farmakologiya bo'limi
    pharma_nodata:       "Ushbu preparat uchun farmakologiya ma'lumotlari hozircha mavjud emas.",
    pharma_noload:       "Ma'lumot yuklanmadi.",
    pharma_dinamika:     "Farmakodinamika",
    pharma_kinetika:     "Farmakokinetika",
    pharma_sorish:       "📥 So'rilish",
    pharma_tarqalish:    "🌐 Tarqalish",
    pharma_metabolizm:   "🔄 Metabolizm",
    pharma_chiqarilish:  "💧 Chiqarilish",
    pharma_korsatma:     "Ko'rsatmalar (Indikatsiyalar)",
    pharma_qarrshi:      "Qarshi ko'rsatmalar",
    pharma_nojoya:       "Nojo'ya ta'sirlar",
    pharma_qollash:      "Qo'llash usuli va dozalash",
    pharma_kattalar:     "👤 Kattalar",
    pharma_bolalar:      "👶 Bolalar",
    pharma_ozaro:        "Dori-dori o'zaro ta'siri",
    pharma_dozadan:      "Dozadan oshib ketish",
    pharma_chiqarish:    "Chiqarish shakli",
  },

  // ══════════════════════════════
  //  РУССКИЙ ЯЗЫК
  // ══════════════════════════════
  ru: {
    brand_name: "МедКор",
    brand_sub:  "Про Платформа",

    nav_section_main:  "Главное",
    nav_section_bases: "Клинические базы",
    nav_section_tools: "Инструменты",
    nav_dashboard:    "Главная",
    nav_drugs:        "Препараты",
    nav_diseases:     "Заболевания",
    nav_lab:          "Лаборатория",
    nav_calculators:  "Калькуляторы",
    nav_interactions: "Взаимодействия",
    nav_favorites:    "Избранное",
    nav_soon:         "Скор.",

    search_placeholder: "Препарат, заболевание, симптом...",
    search_kbd:         "Ctrl K",

    dash_greeting:  "Добрый день,",
    dash_title:     "Медицинская Информационная Платформа",
    dash_desc:      "Препараты, заболевания и клинические инструменты — всё в одном месте.",
    stat_drugs:     "Препараты",
    stat_groups:    "Фармакол. группы",
    stat_interact:  "Взаимодействия",
    stat_favs:      "Избранное",
    stat_uzb:       "Узбекистан",
    stat_atx:       "По АТХ",
    stat_warning:   "Внимание!",
    stat_no_favs:   "Пока нет",
    modules_title:  "Разделы",
    groups_title:   "Фармакологические Группы",
    groups_all:     "Все →",
    alert_title:    "Важное напоминание",
    alert_text:     "Метформин + Контрастное вещество: необходимо прекратить приём за 48 часов до исследования.",
    recent_title:   "Недавно просмотренные",
    recent_empty:   "Здесь будут отображаться препараты, которые вы просматривали",
    soon_label:     "Скоро",

    drugs_page_title: "База данных препаратов",
    drugs_page_sub:   "Фармакологическое действие, дозировка и данные безопасности",
    filter_group:     "Группа",
    filter_all_groups:"Все группы",
    filter_form:      "Форма",
    filter_all_forms: "Все",
    tab_all:          "Все",
    search_drugs_ph:  "Название, МНН, фирма или код АТХ...",
    page_of:          "всего",
    page_drugs:       "препаратов",
    prev_page:        "← Назад",
    next_page:        "Вперёд →",
    no_drugs:         "Препараты не найдены",
    card_details:     "Подробнее →",

    card_atx:      "АТХ",
    card_form:     "Форма",
    card_firm:     "Произв.",
    rx_yes:        "Рецепт",
    rx_no:         "Без рецепта",

    modal_general:  "Общее",
    modal_pharma:   "Фармакология",
    modal_safety:   "Безопасность",
    modal_save:     "Сохранить",
    modal_saved:    "Сохранено",
    modal_form:     "Лекарственная форма",
    modal_atx:      "Код АТХ",
    modal_rx:       "Условия отпуска",
    modal_rx_yes:   "🔴 По рецепту",
    modal_rx_no:    "🟢 Без рецепта",
    modal_country:  "Страна",
    modal_uzb:      "🇺🇿 Узбекистан",
    modal_firm:     "Фирма-производитель",
    modal_form_full:"Полное описание формы",
    modal_reg:      "Регистрационный номер",
    modal_phgroup:  "Фармакотерапевтическая группа",
    modal_no_pharma:"Фармакологические данные по этому препарату скоро будут добавлены.",
    modal_no_safety:"Данные по безопасности скоро будут добавлены.",

    inter_title:   "Взаимодействие препаратов",
    inter_sub:     "Клинически значимые опасные комбинации",
    inter_empty:   "Данные о взаимодействиях скоро будут добавлены.",
    inter_high:    "🔴 Высокий риск",
    inter_medium:  "🟡 Средний риск",
    inter_low:     "🟢 Низкий риск",

    favs_title:    "Избранные препараты",
    favs_sub:      "Сохранённые препараты для быстрого доступа",
    favs_empty:    "Избранное пусто.\nНажмите ★ на карточке препарата.",

    diseases_title: "Раздел заболеваний",
    diseases_desc:  "База данных заболеваний с кодами МКБ-10, диагностическими критериями и протоколами лечения скоро будет добавлена.",
    diseases_f1: "✓ Коды МКБ-10",
    diseases_f2: "✓ Диагностические критерии",
    diseases_f3: "✓ Протоколы лечения",
    diseases_f4: "✓ Дифференциальная диагностика",

    lab_title: "Нормы лабораторных показателей",
    lab_desc:  "Нормы анализов крови и мочи, руководство по интерпретации — скоро.",
    lab_f1: "✓ Общий анализ крови",
    lab_f2: "✓ Биохимические показатели",
    lab_f3: "✓ Общий анализ мочи",
    lab_f4: "✓ Таблица норм",

    calc_title: "Клинические калькуляторы",
    calc_desc:  "ИМТ, СКФ, CHA₂DS₂-VASc, Wells, Glasgow и другие клинические калькуляторы скоро.",
    calc_f1: "✓ Калькулятор ИМТ",
    calc_f2: "✓ СКФ (CKD-EPI)",
    calc_f3: "✓ CHA₂DS₂-VASc",
    calc_f4: "✓ Wells scoring",

    user_role_demo:   "Демо пользователь",
    user_role_doctor: "Врач",
    user_settings:    "Настройки",
    user_logout:      "Выйти",
    user_logout_confirm: "Подтвердите выход?",
    user_favorites:   "Избранное",

    search_no_result: "Ничего не найдено",

    login_title:    "Войдите в аккаунт",
    login_desc:     "Войдите через Google для доступа к медицинской платформе.",
    login_google:   "Войти через Google",
    login_or:       "или",
    login_demo:     "Войти в демо режиме",
    login_demo_note:"Демо режим — аккаунт не требуется.",
    login_terms:    "Входя, вы принимаете",
    login_terms2:   "Условия использования",
    login_and:      "и",
    login_policy:   "Политику конфиденциальности",
    login_with:     ".",
    login_welcome:  "Добро пожаловать на Медицинскую Платформу",
    login_sub:      "Препараты, заболевания и клинические инструменты — для студентов и врачей.",

    // Фармакология
    pharma_nodata:       "Фармакологические данные по этому препарату пока недоступны.",
    pharma_noload:       "Данные не загружены.",
    pharma_dinamika:     "Фармакодинамика",
    pharma_kinetika:     "Фармакокинетика",
    pharma_sorish:       "📥 Всасывание",
    pharma_tarqalish:    "🌐 Распределение",
    pharma_metabolizm:   "🔄 Метаболизм",
    pharma_chiqarilish:  "💧 Выведение",
    pharma_korsatma:     "Показания к применению",
    pharma_qarrshi:      "Противопоказания",
    pharma_nojoya:       "Побочные эффекты",
    pharma_qollash:      "Способ применения и дозировка",
    pharma_kattalar:     "👤 Взрослые",
    pharma_bolalar:      "👶 Дети",
    pharma_ozaro:        "Взаимодействие препаратов",
    pharma_dozadan:      "Передозировка",
    pharma_chiqarish:    "Форма выпуска",
  },

  // ══════════════════════════════
  //  ENGLISH
  // ══════════════════════════════
  en: {
    brand_name: "MedCore",
    brand_sub:  "Pro Platform",

    nav_section_main:  "Main",
    nav_section_bases: "Clinical Databases",
    nav_section_tools: "Tools",
    nav_dashboard:    "Dashboard",
    nav_drugs:        "Medications",
    nav_diseases:     "Diseases",
    nav_lab:          "Laboratory",
    nav_calculators:  "Calculators",
    nav_interactions: "Drug Interactions",
    nav_favorites:    "Favorites",
    nav_soon:         "Soon",

    search_placeholder: "Search drug, disease, symptom...",
    search_kbd:         "Ctrl K",

    dash_greeting:  "Good day,",
    dash_title:     "Medical Information Platform",
    dash_desc:      "Medications, diseases, and clinical tools — all in one place.",
    stat_drugs:     "Medications",
    stat_groups:    "Pharmacol. groups",
    stat_interact:  "Interactions",
    stat_favs:      "Favorites",
    stat_uzb:       "Uzbekistan",
    stat_atx:       "By ATC",
    stat_warning:   "Warning!",
    stat_no_favs:   "None yet",
    modules_title:  "Modules",
    groups_title:   "Pharmacological Groups",
    groups_all:     "All →",
    alert_title:    "Important reminder",
    alert_text:     "Metformin + Contrast agent: must be stopped 48 hours before imaging procedure.",
    recent_title:   "Recently viewed",
    recent_empty:   "Medications you view will appear here",
    soon_label:     "Coming soon",

    drugs_page_title: "Medication Database",
    drugs_page_sub:   "Pharmacological action, dosing, and safety information",
    filter_group:     "Group",
    filter_all_groups:"All groups",
    filter_form:      "Form",
    filter_all_forms: "All",
    tab_all:          "All",
    search_drugs_ph:  "Drug name, INN, manufacturer or ATC code...",
    page_of:          "of",
    page_drugs:       "medications",
    prev_page:        "← Previous",
    next_page:        "Next →",
    no_drugs:         "No medications found",
    card_details:     "Details →",

    card_atx:      "ATC",
    card_form:     "Form",
    card_firm:     "Manuf.",
    rx_yes:        "Rx",
    rx_no:         "OTC",

    modal_general:  "General",
    modal_pharma:   "Pharmacology",
    modal_safety:   "Safety",
    modal_save:     "Save",
    modal_saved:    "Saved",
    modal_form:     "Dosage form",
    modal_atx:      "ATC code",
    modal_rx:       "Prescription status",
    modal_rx_yes:   "🔴 Prescription required",
    modal_rx_no:    "🟢 Over-the-counter",
    modal_country:  "Country",
    modal_uzb:      "🇺🇿 Uzbekistan",
    modal_firm:     "Manufacturer",
    modal_form_full:"Full form description",
    modal_reg:      "Registration number",
    modal_phgroup:  "Pharmacotherapeutic group",
    modal_no_pharma:"Pharmacological data for this drug will be added soon.",
    modal_no_safety:"Safety data will be added soon.",

    inter_title:   "Drug Interactions",
    inter_sub:     "Clinically significant dangerous combinations",
    inter_empty:   "Drug interaction data will be added soon.",
    inter_high:    "🔴 High risk",
    inter_medium:  "🟡 Moderate risk",
    inter_low:     "🟢 Low risk",

    favs_title:    "Favorite Medications",
    favs_sub:      "Saved medications for quick access",
    favs_empty:    "No favorites yet.\nClick ★ on a medication card.",

    diseases_title: "Diseases Module",
    diseases_desc:  "Disease database with ICD-10 codes, diagnostic criteria, and treatment protocols coming soon.",
    diseases_f1: "✓ ICD-10 codes",
    diseases_f2: "✓ Diagnostic criteria",
    diseases_f3: "✓ Treatment protocols",
    diseases_f4: "✓ Differential diagnosis",

    lab_title: "Laboratory Reference Values",
    lab_desc:  "Blood and urine test reference ranges and interpretation guide coming soon.",
    lab_f1: "✓ Complete blood count",
    lab_f2: "✓ Biochemical markers",
    lab_f3: "✓ Urinalysis",
    lab_f4: "✓ Reference table",

    calc_title: "Clinical Calculators",
    calc_desc:  "BMI, GFR, CHA₂DS₂-VASc, Wells, Glasgow and other clinical calculators coming soon.",
    calc_f1: "✓ BMI calculator",
    calc_f2: "✓ GFR (CKD-EPI)",
    calc_f3: "✓ CHA₂DS₂-VASc",
    calc_f4: "✓ Wells scoring",

    user_role_demo:   "Demo user",
    user_role_doctor: "Physician",
    user_settings:    "Settings",
    user_logout:      "Sign out",
    user_logout_confirm: "Confirm sign out?",
    user_favorites:   "Favorites",

    search_no_result: "No results found",

    login_title:    "Sign in to your account",
    login_desc:     "Sign in with Google to access the medical platform.",
    login_google:   "Sign in with Google",
    login_or:       "or",
    login_demo:     "Continue in demo mode",
    login_demo_note:"Demo mode — no account required.",
    login_terms:    "By signing in, you agree to our",
    login_terms2:   "Terms of Service",
    login_and:      "and",
    login_policy:   "Privacy Policy",
    login_with:     ".",
    login_welcome:  "Welcome to Medical Information Platform",
    login_sub:      "Medications, diseases, and clinical tools — for medical students and physicians.",

    // Pharmacology
    pharma_nodata:       "Pharmacological data for this drug is not yet available.",
    pharma_noload:       "Data not loaded.",
    pharma_dinamika:     "Pharmacodynamics",
    pharma_kinetika:     "Pharmacokinetics",
    pharma_sorish:       "📥 Absorption",
    pharma_tarqalish:    "🌐 Distribution",
    pharma_metabolizm:   "🔄 Metabolism",
    pharma_chiqarilish:  "💧 Elimination",
    pharma_korsatma:     "Indications",
    pharma_qarrshi:      "Contraindications",
    pharma_nojoya:       "Adverse Effects",
    pharma_qollash:      "Dosage & Administration",
    pharma_kattalar:     "👤 Adults",
    pharma_bolalar:      "👶 Children",
    pharma_ozaro:        "Drug Interactions",
    pharma_dozadan:      "Overdose",
    pharma_chiqarish:    "Dosage Forms",
  }
};

// ── Dori shakllari tarjimasi ──
const FORMS_I18N = {
  uz: {
    "Tabletkalar":        "Tabletkalar",
    "Kapsulalar":         "Kapsulalar",
    "Inyeksiya eritmasi": "Inyeksiya eritmasi",
    "Infuzion eritma":    "Infuzion eritma",
    "Konsentrat":         "Konsentrat",
    "Suspenziya":         "Suspenziya",
    "Sirop":              "Sirop",
    "Malham":             "Malham",
    "Gel":                "Gel",
    "Krem":               "Krem",
    "Tomchilar":          "Tomchilar",
    "Kukun":              "Kukun",
    "Liofilisat":         "Liofilisat",
    "Sham (suppozitoriy)":"Sham (suppozitoriy)",
    "Sprey":              "Sprey",
    "Aerozol":            "Aerozol",
    "Plaster":            "Plaster",
    "Eritma":             "Eritma",
    "Inyeksiya":          "Inyeksiya",
    "Granulalar":         "Granulalar",
    "Suppozitoriy":       "Suppozitoriy",
    "Boshqa":             "Boshqa",
  },
  ru: {
    "Tabletkalar":        "Таблетки",
    "Kapsulalar":         "Капсулы",
    "Inyeksiya eritmasi": "Раствор для инъекций",
    "Infuzion eritma":    "Раствор для инфузий",
    "Konsentrat":         "Концентрат",
    "Suspenziya":         "Суспензия",
    "Sirop":              "Сироп",
    "Malham":             "Мазь",
    "Gel":                "Гель",
    "Krem":               "Крем",
    "Tomchilar":          "Капли",
    "Kukun":              "Порошок",
    "Liofilisat":         "Лиофилизат",
    "Sham (suppozitoriy)":"Суппозитории",
    "Sprey":              "Спрей",
    "Aerozol":            "Аэрозоль",
    "Plaster":            "Пластырь",
    "Eritma":             "Раствор",
    "Inyeksiya":          "Инъекция",
    "Granulalar":         "Гранулы",
    "Suppozitoriy":       "Суппозиторий",
    "Boshqa":             "Другое",
  },
  en: {
    "Tabletkalar":        "Tablets",
    "Kapsulalar":         "Capsules",
    "Inyeksiya eritmasi": "Injection solution",
    "Infuzion eritma":    "Infusion solution",
    "Konsentrat":         "Concentrate",
    "Suspenziya":         "Suspension",
    "Sirop":              "Syrup",
    "Malham":             "Ointment",
    "Gel":                "Gel",
    "Krem":               "Cream",
    "Tomchilar":          "Drops",
    "Kukun":              "Powder",
    "Liofilisat":         "Lyophilisate",
    "Sham (suppozitoriy)":"Suppositories",
    "Sprey":              "Spray",
    "Aerozol":            "Aerosol",
    "Plaster":            "Patch",
    "Eritma":             "Solution",
    "Inyeksiya":          "Injection",
    "Granulalar":         "Granules",
    "Suppozitoriy":       "Suppository",
    "Boshqa":             "Other",
  }
};

// ── Guruh nomlari tarjimasi ──
const GROUPS_I18N = {
  uz: {
    antibiotics:    "Antibiotiklar va antimikroblar",
    nervesystem:    "Asab tizimi preparatlari",
    cardiovascular: "Yurak-qon tomir preparatlari",
    metabolism:     "Hazm va moddalar almashinuvi",
    blood:          "Qon va qon tizimi preparatlari",
    musculoskeletal:"Tayanch-harakat tizimi",
    respiratory:    "Nafas tizimi preparatlari",
    dermatology:    "Teri kasalliklari (Dermatologiya)",
    genitourinary:  "Siydik-jinsiy tizim preparatlari",
    hormones:       "Gormonlar va endokrinologiya",
    oncology:       "Onkologiya va immunologiya",
    antiparasitic:  "Antiparazitar va zararkunandalar",
    sensory:        "Ko'z, quloq, burun (Sezgi organlari)",
    substance:      "Farmatsevtik substansiyalar",
    diagnostic:     "In vivo diagnostika vositalari",
    various:        "Boshqa tibbiy vositalar",
  },
  ru: {
    antibiotics:    "Антибиотики и антимикробные средства",
    nervesystem:    "Препараты нервной системы",
    cardiovascular: "Препараты сердечно-сосудистой системы",
    metabolism:     "Препараты ЖКТ и обмена веществ",
    blood:          "Препараты крови и кроветворения",
    musculoskeletal:"Препараты опорно-двигательного аппарата",
    respiratory:    "Препараты дыхательной системы",
    dermatology:    "Дерматологические препараты",
    genitourinary:  "Препараты мочеполовой системы",
    hormones:       "Гормоны и эндокринология",
    oncology:       "Онкология и иммунология",
    antiparasitic:  "Антипаразитарные препараты",
    sensory:        "Препараты для органов чувств",
    substance:      "Фармацевтические субстанции",
    diagnostic:     "Средства для in vivo диагностики",
    various:        "Прочие медицинские средства",
  },
  en: {
    antibiotics:    "Antibiotics & Antimicrobials",
    nervesystem:    "Nervous System Agents",
    cardiovascular: "Cardiovascular Agents",
    metabolism:     "Alimentary Tract & Metabolism",
    blood:          "Blood & Blood-Forming Organs",
    musculoskeletal:"Musculoskeletal Agents",
    respiratory:    "Respiratory System Agents",
    dermatology:    "Dermatological Agents",
    genitourinary:  "Genitourinary Agents",
    hormones:       "Hormones & Endocrinology",
    oncology:       "Oncology & Immunology",
    antiparasitic:  "Antiparasitic Agents",
    sensory:        "Sensory Organ Agents",
    substance:      "Pharmaceutical Substances",
    diagnostic:     "In Vivo Diagnostic Agents",
    various:        "Various Medical Agents",
  }
};

// ── Retsept tarjimasi ──
const RX_I18N = {
  uz: { "Retsept bilan": "Retsept bilan", "Retseptsiz": "Retseptsiz", "Nomalum": "Nomalum" },
  ru: { "Retsept bilan": "По рецепту",    "Retseptsiz": "Без рецепта","Nomalum": "Не указано" },
  en: { "Retsept bilan": "Prescription",  "Retseptsiz": "OTC",        "Nomalum": "Unknown" }
};

// ════════════════════════════════════════════
// ASOSIY FUNKSIYALAR
// ════════════════════════════════════════════

// Tarjima olish
function t(key) {
  return (TRANSLATIONS[LANG] && TRANSLATIONS[LANG][key])
    || TRANSLATIONS["uz"][key]
    || key;
}

// Dori shakli tarjimasi
function tForm(formKey) {
  return (FORMS_I18N[LANG] && FORMS_I18N[LANG][formKey])
    || formKey;
}

// Guruh nomi tarjimasi
function tGroup(groupId) {
  return (GROUPS_I18N[LANG] && GROUPS_I18N[LANG][groupId])
    || (GROUPS_I18N["uz"][groupId])
    || groupId;
}

// Retsept tarjimasi
function tRx(rxKey) {
  return (RX_I18N[LANG] && RX_I18N[LANG][rxKey]) || rxKey;
}

// GROUPS massivini joriy tilga yangilash
function updateGroupsLang() {
  if (typeof GROUPS === "undefined") return;
  GROUPS.forEach(g => {
    g.name = tGroup(g.id);
  });
}

// ════════════════════════════════════════════
// TIL ALMASHTIRISH
// ════════════════════════════════════════════
function setLanguage(lang) {
  if (!["uz", "ru", "en"].includes(lang)) return;
  LANG = lang;
  localStorage.setItem("mc_lang", lang);
  updateGroupsLang();
  applyTranslations();

  // Til tugmalarini yangilash
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

// data-i18n atributlari orqali tarjima qo'llash
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // Tooltip larni yangilash
  if (typeof updateTooltips === "function") updateTooltips();

  // Dinamik kontentni qayta render qilish
  if (typeof renderDashGroupList === "function") renderDashGroupList();
  if (typeof renderGroupTabs === "function") renderGroupTabs();
  if (typeof renderDrugsPage === "function") renderDrugsPage();
  if (typeof renderFavs === "function") renderFavs();
  if (typeof renderInteractions === "function") renderInteractions();
  if (typeof renderRecentRow === "function") renderRecentRow();

  // Ochiq modal ni yangilash
  if (typeof currentDrug !== "undefined" && currentDrug) {
    openDrug(currentDrug.id);
  }

  // Page title lar
  updatePageTitles();
}

function updatePageTitles() {
  const titles = {
    dashboard:    [t("nav_dashboard")],
    drugs:        [t("drugs_page_title"), t("drugs_page_sub")],
    interactions: [t("inter_title"), t("inter_sub")],
    favorites:    [t("favs_title"), t("favs_sub")],
  };
  const breadcrumb = document.getElementById("breadcrumb");
  const activePage = document.querySelector(".page.active");
  if (breadcrumb && activePage) {
    const pageId = activePage.id.replace("page-", "");
    const title = titles[pageId];
    if (title) breadcrumb.textContent = title[0];
  }
}
