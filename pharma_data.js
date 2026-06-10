// ═══════════════════════════════════════════════════════════
// PHARMA_DATA — Farmakologik ma'lumotlar (ATX kodi bo'yicha)
// Oxirgi yangilanish: 2026-06-10 | Fluconazole (D01AC15) qo'shildi
// Manba 1: "dorilar farmakalogiyasi.docx" — 9 ta preparat
// Manba 2: "dorlar 2.docx" — 12 ta preparat
// Jami: 21 ta preparat
// ═══════════════════════════════════════════════════════════

const PHARMA_DATA = {

  // ─────────────────────────────────────────────────────────
  // 1. AZITHROMYCIN — MR Azimaks | ATX: J01FA10
  // ─────────────────────────────────────────────────────────
  "J01FA10": {
    gruppa: "Makrolidlar — azalidlar",
    farmTasir: "Keng spektrli antibakterial",
    farmakodinamika: `Makrolidlar-azalidlar guruhiga mansub keng spektrli antibakterial preparat. Bakteriostatik ta'sir ko'rsatadi — 50S ribosom subbirligiga bog'lanib, peptidtranslokaza fermentini ingiberlaydi, oqsil sintezini to'xtatib, bakteriyalar o'sishi va ko'payishini sekinlashtiradi. Yuqori konsentratsiyada bakteritsid ta'sir ko'rsatadi. Hujayra ichida va tashqarisida joylashgan qo'zg'atuvchilarga ta'sir qiladi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda yaxshi so'riladi. 500 mg bir martalik dozadan so'ng biologik qodalanish — 37% (jigarning «birinchi o'tish» effekti tufayli). Cmax — 0,4 mg/L, erishish vaqti 2–3 soat.",
      tarqalish: "To'qimalar va hujayralardagi konsentratsiya qon zardobidagidan 10–50 marta yuqori. Taqsimlanish hajmi — 31,1 L/kg. Plazma oqsillariga bog'lanish — 7–50%. Nafas yo'llari, siydik-jinsiy organlari, teri va yumshoq to'qimalarga yaxshi kiradi. Prostat beziga ham penetratsiya qiladi.",
      metabolizm: "Jigar orqali metabolizatsiya qilinadi. Kislotaga chidamli, lipofildir.",
      chiqarilish: "Yarmi chiqarilish davri — 68 soat (uzoq muddatli ta'sir imkonini beradi). Asosan o't bilan, qisman siydik orqali chiqariladi."
    },
    korsatmalar: [
      "Yuqori nafas yo'llari va LOR organ infeksiyalari: angin, sinusit, tonzillit, o'rta otit",
      "Quyi nafas yo'llari infeksiyalari: bakterial va atipik pnevmoniya, bronxit, skarlatina",
      "Teri va yumshoq to'qima infeksiyalari: yomonlashgan dermatoz, impetigo, roʻja",
      "Siydik-jinsiy yo'l infeksiyalari: gonoreyali va nogonoreyali uretrit, servitsit",
      "Lyme kasalligi (borrelioz)"
    ],
    qarrshi: [
      "Makrolid antibiotiklarga oshirilgan sezgirlik",
      "Jigar va buyrak funksiyasining og'ir buzilishi",
      "Homiladorlik va emizish davri (faqat foyda xavfdan ustun bo'lsa qo'llaniladi)",
      "Anamnezda allergik reaksiyalar"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi, qusish, ich ketishi, qorin og'rig'i, meteorizm, ishtahaning yo'qolishi, til rangining o'zgarishi, psevdomembranoz kolit, xolestatik sariqlik",
      "Allergik reaksiyalar": "Teri qichishi, toshmalar, angionevrotik shish, krotikariya, fotosensibilizatsiya, anafilaktik reaksiya (kam hollarda)",
      "Jigar": "Jigar funksiya ko'rsatkichlarining o'zgarishi, gepatit, jigar yetishmovchiligi",
      "Yurak-qon tomir": "Yurak urishi tezlashishi, QT intervali uzayishi (nazorat talab qilinadi)"
    },
    dozadan: "Belgilari: vaqtinchalik eshitish yo'qolishi, ko'ngil aynishi, qusish, ich ketishi. Davolash: simptomatik terapiya.",
    ozarotasir: [
      "Antatsidlar: azitromitsinning maksimal konsentratsiyasini 30% kamaytiradi — antatsiddan 1 soat oldin yoki 2 soat keyin qabul qiling",
      "Ergotamin va dihidroergotamin: og'ir ergotizmga olib kelishi mumkin",
      "Varfarin: antikoagulyant ta'sirini kuchaytirishi mumkin — INR nazorati",
      "Tsiklosporin: uning konsentratsiyasini oshirishi mumkin — buyrak funksiyasini kuzatish"
    ],
    qollash: {
      kattalar: "1-kuni 500 mg, keyin 2–5-kuni 250 mg (kurs dozasi 1,5 g); yoki 500 mg/kun 3 kun. Siydik-jinsiy infeksiyalarda bir martalik 1 g. Taomdan 1 soat oldin yoki 2 soat keyin qabul qiling.",
      bolalar: "10 mg/kg 1-kuni, keyin 5 mg/kg 2–5-kuni. Yoki 3 kun 10 mg/kg/kun. Suspenziya shaklida qabul qilinadi."
    },
    chiqarish: "Kapsulalar 250 mg va 500 mg; suspenziya tayyorlash uchun kukun 200 mg/5 ml"
  },

  // ─────────────────────────────────────────────────────────
  // 2. AMPICILLIN — MR Ampicillinum Natrium | ATX: J01CA01
  // ─────────────────────────────────────────────────────────
  "J01CA01": {
    gruppa: "Penitsilling guruhidagi antibiotiklar",
    farmTasir: "Keng spektrli antibakterial (beta-laktam)",
    farmakodinamika: `Penitsilling guruhiga mansub yarim sintetik beta-laktam antibiotik. Keng spektrli bakteritsid ta'sir ko'rsatadi — bakteriya hujayra devorini sintezini bloklaydi. Grammusbat (stafilokokklar, streptokokklar) va grammanfiy (E.coli, Salmonella, Shigella, H.influenzae, P.mirabilis) bakteriyalarga ta'sir qiladi. Beta-laktamaza ishlab chiqaradigan bakteriyalarga chidamli emas.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda qisman so'riladi (biologik qodalanish ~40%). I/m yuborilganda tez so'riladi.",
      tarqalish: "Ko'pchilik to'qimalarga tarqaladi. Jigar, o'pka, siydik yo'llariga yaxshi penetratsiya qiladi.",
      metabolizm: "Jigar orqali qisman metabolizatsiya qilinadi.",
      chiqarilish: "Asosan siydik orqali o'zgarmagan holda chiqariladi. Yarmi chiqarilish davri — 1–1,5 soat."
    },
    korsatmalar: [
      "Quloq, tomoq, burun infeksiyalari; tish infeksiyalari",
      "Bronxo-o'pka infeksiyalari: pnevmoniya, bronxit",
      "Siydik yo'li infeksiyalari (o'tkir va surunkali)",
      "Oshqozon-ichak infeksiyalari: salmonellyoz, xoletsistit",
      "Ginekologik infeksiyalar",
      "Meningit, endokardit, septitsemiya, sepsiz",
      "Revmatizm, roʻja, skarlatina, teri infeksiyalari"
    ],
    qarrshi: [
      "Yuqum mononukleozi",
      "Limfoleykoz",
      "Ampitsilling va boshqa penitsillinga oshirilgan sezgirlik",
      "Jigar funksiyasining buzilishi"
    ],
    nojoya: {
      "Allergik reaksiyalar": "Eshakemi, eritema, Kvinke shishi, rinit, kon'yunktivit; kamdan-kam — isitma, bo'g'im og'rig'i, eozinofiliya, anafilaktik shok",
      "Hazm tizimi": "Ko'ngil aynishi, diareya, oshqozon og'rig'i, psevdomembranoz kolit",
      "Boshqa": "Disbakterioz, kandidoz, giperurikemiya"
    },
    dozadan: "Ma'lumot cheklangan. Belgila kuzatilsa: dori qabuli to'xtatiladi, simptomatik terapiya o'tkaziladi.",
    ozarotasir: [
      "Bakteriostatik antibiotiklar (makrolidlar, tetratsiklinlar): bakteritsid ta'sirini zaiflashi mumkin",
      "Indometasin, fenilbutazon, aspirin: ampitsilling chiqarilishini sekinlashtiradi",
      "Og'iz orqali kontraseptivlar: samaradorligini kamaytiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 250–500 mg x 4 marta/kun, taomdan 30 daqiqa oldin. I/m, I/v: har 4–6 soatda 250–500 mg. Og'ir infeksiyalarda: 8–14 g/kun.",
      bolalar: "25–50 mg/kg/kun 4 qabulgacha bo'lib. Og'ir holatlarda — 200–400 mg/kg/kun."
    },
    chiqarish: "Inyeksiya uchun eritma tayyorlash kukuni 0,5 g va 1,0 g (flakonda)"
  },

  // ─────────────────────────────────────────────────────────
  // 3. APTIPRIM (Sulfamethoxazol+Trimethoprim) | ATX: J01EE01
  // ─────────────────────────────────────────────────────────
  "J01EE01": {
    gruppa: "Sulfonamidlar + Trimetoprim kombinatsiyasi",
    farmTasir: "Keng spektrli antibakterial (sintetik)",
    farmakodinamika: `Sulfametoksazol va trimetoprimning kombinatsiyasi. Ikkala komponent bakteriyalarda folat kislota sintezini ikki xil bosqichda bloklaydi — sinergistik bakteritsid ta'sir hosil qiladi. Sulfametoksazol — dihidropteroat sintetazani, trimetoprim — dihidrofolat reduktazani ingiberlaydi. Grammusbat va grammanfiy bakteriyalarga, shuningdek Pneumocystis jirovecii ga ta'sir qiladi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda tez va deyarli to'liq (90%) so'riladi. 60 daqiqada terapevtik konsentratsiyaga erishadi, 12 soat saqlanadi.",
      tarqalish: "Ko'pchilik to'qimalar va suyuqliklarga keng tarqaladi: o'pka, buyrak, prostata bezi, safro, o'rta quloq suyuqligi. Gematoentsefalik to'siqdan o'tadi.",
      metabolizm: "Jigar orqali metabolizatsiya qilinadi.",
      chiqarilish: "Asosan siydik orqali chiqariladi. Yarmi chiqarilish davri — sulfametoksazol 10 soat, trimetoprim 8–10 soat."
    },
    korsatmalar: [
      "Nafas yo'llari: surunkali bronxit qo'zg'alishi, pnevmotsist pnevmoniyasining davolash va profilaktikasi",
      "LOR organlari: sinusit, o'tkir o'rta otit",
      "Oshqozon-ichak infeksiyalari: ich terlama, paratif, bakterial dizenteriya (shigellёz), diareya, xolera",
      "Siydik yo'li infeksiyalari (o'tkir va surunkali)",
      "Brucellёz (boshqa preparatlar bilan kombinatsiyada)"
    ],
    qarrshi: [
      "Sulfonamidlar va trimetoprimga oshirilgan sezgirlik",
      "Glyukoza-6-fosfatdegidrogena tanqisligi",
      "Jigar yoki buyrak funksiyasining og'ir buzilishi (kreatinin klirensi <15 ml/min)",
      "Qon morfologik ko'rsatkichlari o'zgarishi",
      "3 oydan kichik chaqaloqlar va yangi tug'ilgan bolalar",
      "Homiladorlik va emizish davri",
      "Streptokokk anginasini davolash (samarasiz)"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi (qusish bilan yoki siz), ishtahaning yo'qolishi, diareya, og'iz bo'shlig'i yalliq'lanishi, qorin og'rig'i, pankreatit",
      "Teri": "Toshma, krotikariya, qichima, fotosensibilizatsiya; juda kamdan-kam — Stivens-Jonson sindromi, toksik epidermal nekroliz",
      "Qon tizimi": "Trombotsitopeni, leykopeni, megetoblastik anemiya, agranulotsitoz",
      "Buyrak": "Kristalluriya, gematuria, buyrak funksiyasining buzilishi"
    },
    dozadan: "Belgilari: ko'ngil aynishi, qusish, ichak spazmi, bosh aylanishi, bosh og'rig'i, uyquchanlik, depressiya, isitma, gematuria. Uzoq muddatli dozadan oshishda — trombotsitopeni, leykopeni, megeloblastik anemiya. Davolash: oshqozon yuvish, majburiy diurez, siydikni kislotalash trimetoprimni chiqarishni tezlashtiradi. Zarur holatlarda gemializ.",
    ozarotasir: [
      "Diuretiklar (ayniqsa tiazidlar bilan): qon hosil qilish buzilishi ehtimolini oshiradi",
      "To'g'ridan-to'g'ri bo'lmagan antikoagulyantlar (varfarin): ta'sirini kuchaytiradi",
      "Fenobarbital, difenin: sulfametoksazolning ta'sir muddatini qisqartiradi",
      "Metotreksat: toksik ta'sirini oshiradi"
    ],
    qollash: {
      kattalar: "480–960 mg (sulfametoksazol+trimetoprim) x 2 marta/kun 5–14 kun davomida. Og'ir holatlarda I/v infuziya. Taomdan keyin qabul qiling.",
      bolalar: "6 yoshdan: 240 mg x 2 marta/kun; 6–12 yosh: 480 mg x 2 marta/kun. 3 oydan kichik bolalarga taqiqlanadi."
    },
    chiqarish: "Suspenziya 240 mg/5 ml (50 ml va 100 ml flakonda)"
  },

  // ─────────────────────────────────────────────────────────
  // 4. ACICLOVIR — MR Aciclovirum | ATX: D06BB03 / J05AB01
  // ─────────────────────────────────────────────────────────
  "D06BB03": {
    gruppa: "Antiviral preparatlar",
    farmTasir: "Gerpes viruslariga qarshi antiviral",
    farmakodinamika: `Atsiklik purin nukleozidining sintetik analogi — gerpes viruslariga yuqori selektiv ta'sir ko'rsatadi. Virus tomonidan infeksiyalangan hujayralarda virus timitinkinazasi ta'sirida fosforillanadi va ketma-ket mono-, di- va trifosfatga aylanadi. Asiklovirtriofosfat virus DNK zanjiriga kirib, uning sintezini bloklaydi va DNK-polimerazani ingiberlaydi. Zararlangan bo'lmagan hujayralarda deyarli faollashmaganligidan toksikligi juda past.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda biologik qodalanish 15–30%, dozaga bog'liq konsentratsiya hosil bo'ladi. I/v yuborilganda to'liq biologik qodalanish.",
      tarqalish: "Ko'pchilik to'qima va organlarga keng tarqaladi: beyin-orqa miya suyuqligi, ko'z suyuqligi, amniyon suyuqligi, yo'ldosh. Plazma oqsillariga bog'lanish — 9–33%.",
      metabolizm: "Jigar orqali karboksilmetoksi metilguaningacha parchalanadi.",
      chiqarilish: "Asosan siydik orqali (60–90%) o'zgarmagan holda glomerular filtrasiya va kanalcha sekretsiyasi orqali. Yarimi chiqarilish davri kattalar uchun — 2–3 soat, buyrak yetishmovchiligida uzayadi."
    },
    korsatmalar: [
      "Herpes simplex 1 va 2 tip infeksiyasi (lablardagi, tana va jinsiy organlar gerpes)",
      "Varicella zoster infeksiyasi (suvchechak, tarvuz)",
      "Immunodefitsitli bemorlarda gerpes infeksiyalarining profilaktikasi",
      "OIV infeksiyasi va suyak ko'migi transplantatsiyasidan keyin gerpes profilaktikasi",
      "Ko'z gerpes infeksiyalari (lokаl qo'llashda)",
      "Gerpes simplex va Varicella zoster bilan bog'liq ensefalit"
    ],
    qarrshi: [
      "Asiklovir va valasiklovirga oshirilgan sezgirlik",
      "I/v yuborishda — emizish davri (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Qon tizimi": "Anemiya, leykopeni, trombotsitopeni (kam hollarda)",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, hayajon, xomush onglilik, tremor, ataksiya, gallyutsinasiyalar, ensefalopati, koma (juda kamdan-kam)",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, qorin og'rig'i, jigar fermentlari oshishi",
      "Buyrak": "Seyacha darajasi oshishi, buyrak funksiyasining buzilishi (ayniqsa I/v tez yuborilganda)",
      "Teri": "Toshma, qichima, fotosensibilizatsiya (kam hollarda)"
    },
    dozadan: "Asiklovir oshqozon-ichak traktidan qisman so'riladi. Ba'zi bemorlar 20 g gacha qabul qilib, minimal klinip ahamiyatli ta'sirsiz o'tkazishgan. I/v ortiqcha dozada: agitatiya, uyquchanlik, koma, buyrak yetishmovchiligi mumkin. Davolash: simptomatik; gemodializ samarali.",
    ozarotasir: [
      "Probenesid: asiklovirning yarimi chiqarilish davrini oshiradi, klirensi pasayadi",
      "Tsimetidip: asiklovirning biologik qodalanishini oshiradi",
      "Nefrotoksik preparatlar: buyrakka umumiy zarar oshadi"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 200 mg x 5 marta/kun 5–10 kun (Herpes simplex). Og'ir holatlarda yoki immunodefitsitda: 400–800 mg x 5 marta/kun. I/v infuziya: 5–10 mg/kg har 8 soatda.",
      bolalar: "2 yoshdan: 200 mg x 5 marta/kun. 2 yoshgacha: doza yarmi. Varicella uchun 20 mg/kg (max 800 mg) x 4 marta/kun 5 kun."
    },
    chiqarish: "Maz (tashqi qo'llash uchun) 5%, 10 g tuba; Tabletka 200 mg, 400 mg; Infuzion eritma"
  },

  // ─────────────────────────────────────────────────────────
  // 5. BENZYLPENICILLIN — MR Benzylpenicillinum Natrium | ATX: J01CE01
  // ─────────────────────────────────────────────────────────
  "J01CE01": {
    gruppa: "Beta-laktamaza sezgir penitsilling",
    farmTasir: "Tor spektrli antibakterial (beta-laktam)",
    farmakodinamika: `Grammusbat mikroorganizmlarga (stafilokokklar, streptokokklar, pnevmokokklar, difteriya qo'zg'atuvchisi, anaeroblar, sibirka qo'zg'atuvchisi) va grammanfiy kokklar (gonokokklar, meningokokklar), shuningdek spiroxetalarga, ba'zi aktinomitsetlarga faol. Ko'pchilik grammanfiy bakteriyalar, rikkettsiyalar, viruslar, protozoylar va zamburug'larga ta'sir qilmaydi. Bakteritsid ta'sir ko'rsatadi: bakteriya hujayra devorining murein sintezini bloklaydi. Beta-laktamaza ishlab chiqaruvchi mikroorganizmlarga chidamli emas.`,
    farmakokinetika: {
      sorish: "I/m yuborilganda tezda so'riladi. Og'iz orqali qabul qilganda gastrik kislota ta'sirida parchalanadi (parenteral yo'l tavsiya etiladi).",
      tarqalish: "To'qimalar va suyuqliklarga keng tarqaladi: o'pka, jigar, buyrak, siydik, safro, sinoviyal suyuqliq. Yallig'lanish bo'lmasa likvorda kontsentratsiya past; meningit bo'lsa oshadi.",
      metabolizm: "Jigar orqali qisman metabolizatsiya.",
      chiqarilish: "Asosan siydik orqali (60–90%). Yarimi chiqarilish davri — 30–60 daqiqa."
    },
    korsatmalar: [
      "Pnevmoniya, empiema plevra, bronxit",
      "Peritonit, osteomielit",
      "Siydik-jinsiy tizim infeksiyalari: pielonefrit, pielit, tsistit, uretrit, servitsit",
      "Safro yo'llari infeksiyalari: xolangit, xoletsistit",
      "Yarangi infeksiyalar, teri va yumshoq to'qima infeksiyalari: roʻja, impetigo",
      "Difteriya, skarlatina, sibirka, aktinomikoz",
      "LOR organlari infeksiyalari",
      "Gonoreya, sifilis"
    ],
    qarrshi: [
      "Penitsilling preparatlariga oshirilgan sezgirlik",
      "Epilepsiya (endolyumbal yuborishda)",
      "Giperkaliemiya, aritmiya (kaliy tuzi uchun)"
    ],
    nojoya: {
      "Hazm tizimi": "Og'iz va til shilliq qavatining yalliq'lanishi, ko'ngil aynishi, qusish",
      "Allergik reaksiyalar": "Eshakemi, qichima, Kvinke shishi, bronxospazm, anafilaktik shok (juda kamdan-kam)",
      "Asab tizimi": "Yuqori dozalarda — neyrotoksik ta'sir, tutqanoqlar, miyalogiya",
      "Boshqa": "Disbakterioz, superinfeksiya (kandida)"
    },
    dozadan: "Belgilari: tutqanoqlar, ong buzilishi. Davolash: dori qabuli to'xtatiladi, simptomatik terapiya.",
    ozarotasir: [
      "Probenesid: kanalcha sekretsiyasini kamaytiradi → benzilpenitsilling konsentratsiyasi oshadi (bu maqsadda qo'llaniladi)",
      "Bakteriostatik antibiotiklar (tetratsiklinlar, xloramfenikol): bakteritsid ta'sirini zaiflashi mumkin"
    ],
    qollash: {
      kattalar: "I/m, I/v: sutkali doza 250 000 – 60 million ED, 4–6 marta bo'lib. Og'ir holatlarda — sutkali 200 000–500 000 ED/kg. Endolyumbal: kattalar 5 000–10 000 ED.",
      bolalar: "Yangi tug'ilganlar: 50 000 ED/kg/kun 2 marta bo'lib. Kattaroq bolalar: 50 000–100 000 ED/kg/kun 4–6 marta."
    },
    chiqarish: "Inyeksion eritma tayyorlash uchun kukun flakonda: 125 000 ED, 250 000 ED, 500 000 ED, 1 000 000 ED"
  },

  // ─────────────────────────────────────────────────────────
  // 6. LEVOMITSETIN (Chloramphenicol) | ATX: S01AA01 / J01BA01
  // ─────────────────────────────────────────────────────────
  "S01AA01": {
    gruppa: "Xloramfenikol guruhidagi antibiotiklar",
    farmTasir: "Keng spektrli bakteriostatik antibiotik",
    farmakodinamika: `Keng spektrli bakteriostatik antibiotik. Mikrob hujayralarida oqsil sintezini aminokislotalarni transport RNKlar tomonidan ribosomaga o'tkazish bosqichida buzadi. Penitsillinga, tetratsiklinlarga, sulfonamidlarga chidamli shammmlarga ham samarali. Ko'pchilik grammusbat va grammanfiy bakteriyalarga faol: E.coli, Shigella, Salmonella (jumladan S.typhi, S.paratyphi), Staphylococcus, Streptococcus, Neisseria, Haemophilus, Bordetella, Francisella va boshqalar.`,
    farmakokinetika: {
      sorish: "So'rilish — 90% (tez va deyarli to'liq). Biologik qodalanish — 80%.",
      tarqalish: "Plazma oqsillariga bog'lanish — 50–60%. Ko'pchilik to'qimalarga keng tarqaladi. Gematoentsefalik to'siqdan o'tadi, likvorda qon konsentratsiyasining 30–50% ini yaratadi. Yo'ldoshdan o'tadi.",
      metabolizm: "Jigar orqali glyukuronidlanadi (asosiy metabolizm yo'li). Yangi tug'ilganlarda jarayon sekin → «kulrang sindrom» xavfi.",
      chiqarilish: "90% siydik orqali (asosan inaktiv metabolit ko'rinishida), 1–3% o't bilan. Yarimi chiqarilish davri kattalar uchun — 1,5–3,5 soat."
    },
    korsatmalar: [
      "Levomitsetinga sezgir mikroorganizmlar qo'zg'atgan infeksiyalar (boshqa preparatlar samarasiz bo'lganda)",
      "Nafas yo'llari: pnevmoniya, o'pka abstsessi",
      "Qorin bo'shlig'i: ich terlama, paratif, shigellёz, salmonellyoz, peritonit",
      "Meningit",
      "Xlamidiyoz",
      "Ko'z infeksiyalari (ko'z tomchilari shaklida): kon'yunktivit, blepharit, keratit"
    ],
    qarrshi: [
      "Preparatning komponentlariga, tiamfenikolga va azidamfenikolga oshirilgan individual sezgirlik",
      "Qon hosil qilish funksiyasining buzilishi",
      "Jigar va/yoki buyrak og'ir kasalliklari",
      "Glyukoza-6-fosfatdegidrogena tanqisligi",
      "Zamburug' teri kasalliklari, psoriaz, ekzema, porfiriya",
      "O'tkir respirator kasalliklar va angin (profilaktika uchun qo'llanmaydi)",
      "Homiladorlik va emizish davri"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi, qusish, hazm buzilishi, oshqozon shilliq qavatining yallig'lanishi",
      "Qon tizimi": "Aplastik anemiya (juda kam lekin jiddiy), trombotsitopeni, leykopeni, retikulotsitopeni",
      "Asab tizimi": "Polinevrit, optik nevrit, bosh og'rig'i, ong buzilishi",
      "Boshqa": "Superinfeksiya (kandida va boshqa), «Kulrang sindrom» (yangi tug'ilganlarda)"
    },
    dozadan: "Belgilari: suyak ko'migi qon hosil qilishining susayishi, hazm tizimi buzilishi, jigar va buyrak shikastlanishi, neyropati, retinopati. Davolash: Gemosorbsiya, simptomatik terapiya.",
    ozarotasir: [
      "Og'iz orqali gipoglikemik preparatlar: gipoglikemik ta'sir kuchayadi (jigar fermentlari ingibiri natijasida)",
      "Penitsilling va tsefalosporinlar: bakteritsid ta'ir zaiflashi mumkin",
      "Fenobarbital: xloramfenikolni inaktivatsiyasini tezlashtiradi → samarasida pasayish",
      "Metotreksat: toksikligi oshadi",
      "Siklofosofamid: faollanishi sekinlashadi"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 250–500 mg x 4 marta/kun, taomdan 30 daqiqa oldin (ko'ngil aynasa 1 soat keyin). Ko'z tomchilari: har 1–2 soatda 1–2 tomchi (yallig'lanish pasaygach kamaytiriladi).",
      bolalar: "3 yoshdan: 12,5 mg/kg x 4 marta/kun. Yangi tug'ilganlarda ishlatish tavsiya etilmaydi («kulrang sindrom» xavfi)."
    },
    chiqarish: "Tabletka 500 mg; Ko'z tomchilari 0,25% (5 ml, 10 ml)"
  },

  // Alias for J01BA01 (same drug, tablet form in antibiotics group)
  "J01BA01": {
    gruppa: "Xloramfenikol guruhidagi antibiotiklar",
    farmTasir: "Keng spektrli bakteriostatik antibiotik",
    farmakodinamika: `Keng spektrli bakteriostatik antibiotik. Mikrob hujayralarida oqsil sintezini aminokislotalarni transport RNKlar tomonidan ribosomaga o'tkazish bosqichida buzadi. Penitsillinga, tetratsiklinlarga, sulfonamidlarga chidamli shammmlarga ham samarali.`,
    farmakokinetika: {
      sorish: "So'rilish — 90% (tez va deyarli to'liq). Biologik qodalanish — 80%.",
      tarqalish: "Plazma oqsillariga bog'lanish — 50–60%. Gematoentsefalik to'siqdan o'tadi, likvorda yuqori konsentratsiya yaratadi.",
      metabolizm: "Jigar orqali glyukuronidlanadi.",
      chiqarilish: "90% siydik orqali. Yarimi chiqarilish davri — 1,5–3,5 soat."
    },
    korsatmalar: [
      "Nafas yo'llari infeksiyalari: pnevmoniya, o'pka abstsessi",
      "Qorin bo'shlig'i: ich terlama, paratif, shigellёz, salmonellyoz, peritonit",
      "Meningit, xlamidiyoz"
    ],
    qarrshi: [
      "Qon hosil qilish funksiyasining buzilishi",
      "Jigar va buyrak og'ir kasalliklari",
      "Glyukoza-6-fosfatdegidrogena tanqisligi",
      "Homiladorlik va emizish davri"
    ],
    nojoya: {
      "Qon tizimi": "Aplastik anemiya, trombotsitopeni, leykopeni",
      "Hazm tizimi": "Ko'ngil aynishi, qusish",
      "Asab tizimi": "Polinevrit, optik nevrit"
    },
    dozadan: "Belgilari: suyak ko'migi depressiyasi, hazm tizimi buzilishi. Davolash: gemosorbsiya, simptomatik terapiya.",
    ozarotasir: [
      "Og'iz orqali gipoglikemik preparatlar: ta'sirini kuchaytiradi",
      "Penitsilling: bakteritsid ta'sirini zaiflashi mumkin",
      "Fenobarbital: metabolizmni tezlashtiradi"
    ],
    qollash: {
      kattalar: "250–500 mg x 4 marta/kun, taomdan 30 daqiqa oldin.",
      bolalar: "3 yoshdan: 12,5 mg/kg x 4 marta/kun."
    },
    chiqarish: "Tabletka 500 mg"
  },

  // ─────────────────────────────────────────────────────────
  // 7. METRONIDAZOL | ATX: J01XD01
  // ─────────────────────────────────────────────────────────
  "J01XD01": {
    gruppa: "Imidazol hosilalari (boshqa antibakteriallar)",
    farmTasir: "Antibakterial va antiprotozoal",
    farmakodinamika: `Imidazol hosilasi. Grammanfiy anaerob bakteriyalar (Bacteroides spp., Fusobacterium, Veilonella, Prevotella, Porphyromonas, Clostridium), grammusbat anaerob kokklar (Peptococcus, Peptostreptococcus) va protozoy patogenlarga (Trichomonas vaginalis, Entamoeba histolytica, Giardia intestinalis, Balantidium coli) nisbatan faol. Zararlangan hujayraga kirib, nitrogruha reduktorlari ta'sirida faollanadi va DNK zanjiriga kirib uni buzadi. Aerob bakteriyalarga ta'sir qilmaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda yuqori so'rilish (biologik qodalanish ≥80%). I/v yuborilganda to'liq qodalanish.",
      tarqalish: "Yuqori penetratsion qobiliyat: aksariyat to'qimalar, suyuqliqlar va bo'shliqlarida terapevtik konsentratsiya yaratadi (beyin-orqa miya suyuqligi, sariq suyuqliq, amnion suyuqliq, abstsess suyuqliq). Plazma oqsillariga bog'lanish — 20%.",
      metabolizm: "Jigar orqali oksidlanish va glyukuronidlanish.",
      chiqarilish: "Siydik orqali (60–80%), qisman — najas bilan (6–15%). Yarimi chiqarilish davri — 6–8 soat."
    },
    korsatmalar: [
      "Protozoy infeksiyalar: ichakdan tashqari amёbiaz (jigar abstsessi bilan), ichak amёbiazi, trixomoniaz, giardiyaz, balantiidiaz, teri leyshmaniyozi",
      "Anaerob bakteriyalar qo'zg'atgan infeksiyalar: suyak va bo'g'm infeksiyalari, MNS infeksiyalari (meningit, miya abstsessi), endokardit, pnevmoniya, empiyema, o'pka abstsessi",
      "Helicobacter pylori eradikatsiyasi (kombinatsiyada)",
      "Xirurgik operatsiyalar oldidan profilaktika"
    ],
    qarrshi: [
      "Imidazollarga oshirilgan sezgirlik",
      "Qon hosil qilishning buzilishi",
      "MNS organik shikastlanishlari (epilepsiyani ham)",
      "Homiladorlikning I trimestri"
    ],
    nojoya: {
      "Hazm tizimi": "Ich ketishi, ishtaha susayishi, ko'ngil aynishi, qusish, ichak spazmi, to'q-og'izlilik, «metallik» ta'm, til va og'iz shilliq yallig'lanishi, pankreatit",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, harakatlar muvofiqlashuvining buzilishi, ataksiya, chalkashgan ong, tirnash, depressiya, gallyutsinasiyalar; uzoq muddatli yuqori dozada — periferik neyropati",
      "Qon tizimi": "Leykopeniya, trombotsitopeni (kam hollarda)",
      "Siydik": "Siydik qo'ng'ir yoki qizg'ish rangga kirishi (normal hodisa)"
    },
    dozadan: "Belgilari: ko'ngil aynishi, qusish, ataksiya, og'ir holatlarda — periferik neyropati va epileptik tutqanoqlar. Davolash: simptomatik terapiya.",
    ozarotasir: [
      "To'g'ridan-to'g'ri bo'lmagan antikoagulyantlar (varfarin): antikoagulyant ta'irini kuchaytiradi → protrombin vaqtini nazorat qiling",
      "Alkogol: disulfiramga o'xshash reaksiya (yuz qizarishi, tez yurak urishi, qusish) — davolash davri va 48 soat keyin alkogol taqiqlangan",
      "Disulfiram: psixotik reaksiyalar mumkin — birga ishlatmang",
      "Litiy: litiy toksikligini oshirishi mumkin",
      "Fenobarbital: metronidazolning metabolizmasini tezlashtiradi → samarasida pasayadi"
    ],
    qollash: {
      kattalar: "Trixomoniaz: bir martalik 2 g yoki 10 kun davomida 250 mg x 3 marta. Amёbiaz: 750 mg x 3 marta/kun 5–10 kun. I/v infuziya: 500 mg har 8 soatda. Taom paytida yoki keyin qabul qiling.",
      bolalar: "25–35 mg/kg/kun 3 qabulgacha bo'lib. Profilaktika uchun: 7,5 mg/kg x 3 marta."
    },
    chiqarish: "Infuzion eritma 500 mg/100 ml; Tabletka 250 mg, 400 mg"
  },

  // ─────────────────────────────────────────────────────────
  // 8. OFLOXACIN — MR Oflodik | ATX: J01MA01
  // ─────────────────────────────────────────────────────────
  "J01MA01": {
    gruppa: "Ftorixinolonlar (xonolonlar)",
    farmTasir: "Keng spektrli antibakterial (ftorxinolonlar)",
    farmakodinamika: `Ftorxinolonlar guruhiga mansub antibakterial preparat. Bakterial DNK-giraza (topoizomeraza II) va topoizomeraza IV ni ingiberlaydi — DNK replikatsiyasini, transkriptsiyasini va rekombinatsiyasini bloklaydi. Bakteritsid ta'sir ko'rsatadi. Grammanfiy aerob bakteriyalar (E.coli, Salmonella, Shigella, Klebsiella, H.influenzae, N.gonorrhoeae, N.meningitidis), grammusbat (Staphylococcus aureus, Streptococcus pneumoniae), shuningdek atipik patogenlarga (Chlamydia, Mycoplasma, Legionella) nisbatan faol.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez va deyarli to'liq so'riladi (biologik qodalanish ≥95%). Cmax 1–2 soatda erishiladi.",
      tarqalish: "To'qimalarga keng tarqaladi. O'pka, buyrak, prostata bezi, siydik, o't, teri va yumshoq to'qimalarda yuqori konsentratsiya. Plazma oqsillariga bog'lanish — 32%.",
      metabolizm: "Jigar orqali minimal metabolizatsiya (<5%). Asosan o'zgarmagan holda chiqariladi.",
      chiqarilish: "Asosan siydik orqali (70–80%), qisman najas bilan. Yarimi chiqarilish davri — 4–7 soat."
    },
    korsatmalar: [
      "Quyi nafas yo'llari infeksiyalari (pnevmoniya, bronxit)",
      "LOR organlari infeksiyalari (angindan tashqari): sinusit, otit",
      "Suyak, bo'g'm va yumshoq to'qima infeksiyalari",
      "Qorin bo'shlig'i, kichik tos va buyrak infeksiyalari",
      "Prostatit, gonoreya, xlamidiyoz",
      "Yarangi infeksiyalar",
      "Tuberkulyoz fonida respirator infeksiyalar, o'pka fibrozi",
      "Sepsis (qo'shimcha terapiya sifatida)"
    ],
    qarrshi: [
      "Glyukoza-6-fosfatdegidrogena tanqisligi",
      "Epilepsiya",
      "Xonolonlar va boshqa ofoksatsinlarga oshirilgan individual sezgirlik",
      "Homiladorlik va emizish davri",
      "15 yoshgacha bolalar",
      "Miyani qon tomir kasalliklari, MNS organik shikastlanishi",
      "Surunkali buyrak yetishmovchiligi (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Hazm tizimi": "Dispepsiya, ishtaha yo'qolishi, epigastral og'riq, qusish, ko'ngil aynishi, ich ketishi, jigar fermentlari oshishi, psevdomembranoz kolit xavfi",
      "Qon tizimi": "Anemiya, neytropeni, leykopeniya, trombotsitopeni, agranulotsitoz",
      "Asab tizimi": "Murakkab mexanizmlar bilan ishlashda va haydashda reaksiya sekinlashishi, bosh og'rig'i, uyqu buzilishi, bosh aylanishi, parestheziya, psixoz (juda kamdan-kam)",
      "Tayanch-harakat tizimi": "Tendenit, tendon yirtilishi (ayniqsa 60+ yoshda va kortikosteroidlar bilan birga)",
      "Teri": "Fotosensibilizatsiya, toshmalar"
    },
    dozadan: "Ma'lumot cheklangan. Yuqori dozada: ong buzilishi, tutqanoqlar, trombotsitopeni mumkin. Davolash: simptomatik, gemofiltrasiya samarali emas.",
    ozarotasir: [
      "Antatsidlar (Al, Mg, Ca tutuvchi): ofoksatsinning so'rilishini kamaytiradi — 2 soat oralatib qabul qiling",
      "NSAIDlar: tutqanoq xavfini oshiradi",
      "Varfarin: antikoagulyant ta'sirini oshirishi mumkin",
      "Teofilling: uning konsentratsiyasini oshiradi → nazorat talab",
      "Siyabirish vositalar: ofoksatsinning buyrak chiqarilishini kamaytiradi"
    ],
    qollash: {
      kattalar: "I/v infuziya: 200–400 mg (1–2 flakoni) x 2 marta/kun, har 12 soatda. Buyrak funksiyasi normal bo'lsa doza o'zgarmaydi. Og'iz orqali: 200–400 mg x 2 marta/kun.",
      bolalar: "15 yoshgacha — TAQIQLANADI."
    },
    chiqarish: "Infuzion eritma 2 mg/ml (100 ml flakonda); Tabletka 200 mg, 400 mg"
  },

  // ─────────────────────────────────────────────────────────
  // 9. STREPTOMYCIN — MR Sreptomitsin Sulfat | ATX: J01GA01
  // ─────────────────────────────────────────────────────────
  "J01GA01": {
    gruppa: "Aminoglikozidlar — streptomitsinlar",
    farmTasir: "Keng spektrli antibakterial (aminoglikozid)",
    farmakodinamika: `Aminoglikozidlar guruhidan keng spektrli antibiotik. Streptomyces globisporus yoki boshqa Streptomyces turlarining hayot faoliyatida hosil bo'ladi. Mikrob hujayrasiga kirib, bakterial ribosomaning 30S subbirligidagi spetsifik retseptor oqsillariga bog'lanadi — «matritsa RNK + 30S subbirlik» inisiator kompleksining hosil bo'lishini buzadi va polisomalar parchalanishiga olib keladi. Natijada DNKdan ma'lumot o'qilishida xatoliklar paydo bo'lib, qat'iy oqsillar sintezlanadi → mikrob hujayrasining o'sishi va rivojlanishi to'xtaydi. Yuqori konsentratsiyada sitoplazmatik membranalarni shikastlab bakteritsid ta'sir ko'rsatadi. Mycobacterium tuberculosis, ko'pchilik grammanfiy bakteriyalar (E.coli, Klebsiella, Proteus, Salmonella, Shigella, Yersinia, Brucella, Francisella tularensis, H.influenzae, N.gonorrhoeae, N.meningitidis) va ba'zi grammusbat mikroorganizmlarga (Staphylococcus, Corynebacterium) nisbatan faol.`,
    farmakokinetika: {
      sorish: "I/m yuborilganda tez va to'liq so'riladi. Cmax 0,5–1,5 soatda erishiladi; 1 g I/m dan keyin Cmax — 25–50 mkg/ml.",
      tarqalish: "Barcha to'qima va organlarga tarqaladi (miya to'qimasidan tashqari): ekstrasellyular suyuqliq, abstsess suyuqliq, plevral suyuqliq, astsitik, perikardial, sinoviyal, limfatik va peritoneal suyuqliqlar. Buyrak, jigar, o'pkada yuqori konsentratsiya yaratadi. Plazma oqsillariga bog'lanish — 10% dan kam. Shikastlanmagan gematoentsefalik to'siqdan o'tmaydi. Yo'ldoshdan o'tadi va ona suti bilan ajraladi.",
      metabolizm: "Metabolizmga uchramaydi (jigar tomonidan qayta ishlanmaydi).",
      chiqarilish: "95% siydik orqali glomerulyar filtratsiya yo'li bilan o'zgarmagan holda chiqariladi. Yarimi chiqarilish davri kattalar uchun — 2–4 soat; yangi tug'ilganlarda — 5–8 soat."
    },
    korsatmalar: [
      "Sil kasalligi (barcha shakllari, jumladan sil meningiti) — kombinatsion terapiyada",
      "Venerik granuloma",
      "Tulyaremiya, brutsellёz, o'lat (chuma)",
      "Bakterial endokardit — benzilpenitsilling yoki vankomisin bilan kombinatsiyada",
      "O'tkir bakterial ichak infeksiyalari",
      "Siydik yo'li infeksiyalari (qo'zg'atuvchi sezgirligini aniqlagandan keyin)"
    ],
    qarrshi: [
      "Streptomitsinga og'ir allergik reaksiyalar tarixi",
      "Eshitish asabi shikastlanganda (ototoksiklik xavfi)",
      "Buyrak funksiyasining og'ir buzilishi",
      "Miasteniya gravis",
      "Homiladorlik (embriotoksik ta'sir)",
      "Yangi tug'ilganlar va chaqaloqlarda ehtiyotkorlik bilan"
    ],
    nojoya: {
      "Ototoksiklik": "Eshitish yo'qolishi (VIII nervning koklear qismini shikastlashi), quloqda shovqin — JIDDIY! Doimiy nazorat talab",
      "Vestibulotoksiklik": "Bosh aylanishi, muvozanat buzilishi, ko'ngil aynishi — VIII nervning vestibular qismi shikastlanishi",
      "Nefrotoksiklik": "Buyrak kanalchalarining shikastlanishi, siydikda oqsil, qon — buyrak funksiyasini kuzating",
      "Allergik": "Eshakemi, toshmalar, qichima, anafilaktik reaksiya",
      "Neyromuskulyar": "Neyromushak blokada (ayniqsa boshqa relaksantlar bilan), nafas to'xtashi (juda kamdan-kam)"
    },
    dozadan: "I/m ortiqcha dozada: og'ir nefrotoksiklik, ototoksiklik kuzatiladi. Davolash: gemosorbsiya yoki gemo(peritonal)dializ.",
    ozarotasir: [
      "Boshqa aminoglikozidlar, vankomitsin, furosemid, etakrinat kislotasi: ototoksiklik va nefrotoksiklikni kuchaytiradi",
      "Metoksifluran, amfoterisin B: nefrotoksiklikni oshiradi",
      "Suyuqliq ichish vositalar (diuretiklar): konsentratsiyani oshirib, toksilikni kuchaytiradi",
      "Benzipenitsilling yoki vankomitsin bilan: enterokokk endokarditi davolashda sinergizm"
    ],
    qollash: {
      kattalar: "I/m: bir martalik doza 0,5–1 g, sutkali 1–2 g. Maksimal sutkali doza — 2 g. Sil uchun: 1 g/kun (dastlabki 2–3 oy).",
      bolalar: "15–20 mg/kg/kun 1–2 marta I/m. Sil uchun: 20–40 mg/kg/kun (max 1 g)."
    },
    chiqarish: "Inyeksion eritma tayyorlash kukuni 1 g flakonda"
  },

  // Alias for J05AB01 (Aciclovir tablet form)
  "J05AB01": {
    gruppa: "Antiviral preparatlar",
    farmTasir: "Gerpes viruslariga qarshi antiviral",
    farmakodinamika: `Atsiklik purin nukleozidining sintetik analogi — gerpes viruslariga yuqori selektiv ta'sir ko'rsatadi. Virus tomonidan infeksiyalangan hujayralarda fosforillanadi va virus DNK zanjiriga kirib, uning sintezini bloklaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali biologik qodalanish 15–30%.",
      tarqalish: "Ko'pchilik to'qima va organlarga keng tarqaladi, likvorga kiradi.",
      metabolizm: "Jigar orqali parchalanadi.",
      chiqarilish: "Asosan siydik orqali. Yarimi chiqarilish davri — 2–3 soat."
    },
    korsatmalar: [
      "Herpes simplex 1 va 2 tip infeksiyasi",
      "Varicella zoster (suvchechak, tarqov)",
      "Immunodefitsitli bemorlarda gerpes infeksiyalarining profilaktikasi"
    ],
    qarrshi: [
      "Asiklovir va valasiklovirga oshirilgan sezgirlik"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi (kamdan-kam)",
      "Buyrak": "Buyrak funksiyasining buzilishi (kamdan-kam)"
    },
    dozadan: "Simptomatik terapiya. Gemializ samarali.",
    ozarotasir: ["Probenesid: asiklovirning chiqarilishini sekinlashtiradi"],
    qollash: {
      kattalar: "200 mg x 5 marta/kun, 5–10 kun. Og'ir holatlarda: 400–800 mg x 5 marta/kun.",
      bolalar: "2 yoshdan: 200 mg x 5 marta/kun."
    },
    chiqarish: "Tabletka 200 mg, 400 mg"
  },


  // ══════════════════════════════════════════════════════════
  // "dorlar 2.docx" dan olingan yangi preparatlar
  // ══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  // 10. CEFAZOLIN — MR Cefazolinum Natrium | ATX: J01DD63
  // ─────────────────────────────────────────────────────────
  "J01DD63": {
    gruppa: "Tsefalosporinlar — I avlod",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `I avlod tsefalosporin antibiotigi. Bakteritsid ta'sir ko'rsatadi — bakteriya hujayra devorini murein qatlamini sintezini bloklaydi. Grammusbat bakteriyalarga nisbatan faol: Staphylococcus spp. (penitsillaza hosil qiluvchi va qilmaydiganlari), Streptococcus spp. (S.pneumoniae ham), Corynebacterium diphtheriae, Bacillus anthracis; grammanfiy bakteriyalarga nisbatan: Neisseria meningitidis, N.gonorrhoeae, Shigella spp., Salmonella spp., E.coli, Klebsiella spp. Spirochaetaceae va Leptospira spp. ga ham faol. Pseudomonas aeruginosa, indol-musbat Proteus spp., M.tuberculosis va anaerob bakteriyalarga ta'sir qilmaydi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichak yo'lidan yomon so'riladi — shu sababli I/m yoki I/v yo'l bilan yuboriladi. I/m da 500 mg kiritilgandan keyin plazma Cmax 1–2 soat ichida erishiladi va 30 mkg/ml ni tashkil etadi.",
      tarqalish: "Plazma oqsillariga bog'lanish — taxminan 85%. Suyak to'qimasiga, astsitik suyuqliqqa, plevral va sinoviyal suyuqliqqa kiradi. MNS ga penetratsiya qilmaydi. Safrada yuqori konsentratsiya yaratadi.",
      metabolizm: "Deyarli metabolizmga uchramaydi — asosan o'zgarmagan holda chiqariladi.",
      chiqarilish: "Siydik orqali asosan glomerulyar filtrasiya (va kichik qismda — kanalcha sekretsiyasi) orqali chiqariladi. I/m dan keyin 24 soat ichida dozaning kamida 80% chiqariladi. Yarimi chiqarilish davri — taxminan 1,8 soat. Buyrak yetishmovchiligida T½ uzayadi."
    },
    korsatmalar: [
      "Nafas yo'llari bakterial infeksiyalari (yuqori va quyi)",
      "Siydik yo'li infeksiyalari, jumladan o'tkir pielonefrit",
      "Teri va yumshoq to'qima infeksiyalari (yarangi va kuydiruvchi infeksiyalar ham)",
      "Endokardit, septitsemiya",
      "Qorin bo'shlig'i va safro yo'llari infeksiyalari",
      "Suyak va biriktiruvchi to'qima infeksiyalari, osteomielit",
      "Sifilis, gonoreya, mastit",
      "Xirurgik amaliyotlar oldidan infeksiya profilaktikasi"
    ],
    qarrshi: [
      "1 oydan kichik yangi tug'ilganlar (xavfsizligi o'rganilmagan)",
      "Preparat komponentlariga oshirilgan sezgirlik",
      "Boshqa tsefalosporin antibiotiklarga oshirilgan sezgirlik",
      "Buyrak yetishmovchiligi (ehtiyotkorlik bilan, doza sozlanishi talab qilinadi)",
      "Ichak kasalliklari, kolit (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Infeksiyalar": "Og'iz kandidozi (uzoq muddatli qo'llashda), jinsiy kandidoz, vaginit",
      "Qon tizimi": "Leykopeniya, granulotsitopeni, neytropeni, trombotsitopeni, leykotsitoz, eozinofili — odatda vaqtinchalik",
      "Allergik": "Eshakemi, qichima, teri toshmasi, bronxospazm, anafilaktik shok (juda kam)",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, qorin og'rig'i, gepatit, sariqlik",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi — yuqori dozalarda tutqanoqlar",
      "Buyrak": "Kreatinin va mochevina oshishi (yuqori dozada), interstitsial nefrit",
      "Yurak": "QT uzayishi, aritmiya (juda kamdan-kam)"
    },
    dozadan: "Belgilari: bosh og'rig'i, bosh aylanishi, paresteziya, hayajonlanish, miyoklonik titrashlar, tutqanoqlar. Laborator: kreatinin, mochevina, transaminazalar oshishi, trombotsitopeni yoki trombotsitoz. Davolash: tutqanoq yuzaga kelsa darhol dori to'xtatiladi, hayot ko'rsatkichlari kuzatiladi, zarur bo'lsa antikonvulsiv terapiya beriladi.",
    ozarotasir: [
      "«Halqa» diuretiklari (furosemid): kanalcha sekretsiyasini bloklaydi → kombinatsiya tavsiya etilmaydi",
      "Etanol: disulfiramga o'xshash reaksiya (kombinatsiyadan saqlanish kerak)",
      "Probenesid: tsefalosporinning chiqarilishini buzadi → konsentratsiya oshadi",
      "Antikoagulyantlar (varfarin): K vitamini sintezini pasaytiradi → qon ketish xavfi oshadi"
    ],
    qollash: {
      kattalar: "I/m, I/v (tomchi yoki struyali). O'rtacha sutkali doza — 1–4 g; 3–4 marta bo'lib. Maksimal sutkali doza — 6 g. Davolash muddati — 7–10 kun. Operatsiya profilaktikasi: 1 g operatsiyadan 30–60 daqiqa oldin I/v, operatsiya vaqtida 0,5–1 g, keyin har 8 soatda 0,5–1 g (birinchi sutka).",
      bolalar: "1 oydan katta: 25–50 mg/kg/kun, 3–4 marta bo'lib. Og'ir infeksiyalarda: 100 mg/kg/kun gacha."
    },
    chiqarish: "I/v va I/m yuborish uchun eritma tayyorlash kukuni: 1,0 g (500 mg) flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 11. CEFTRIAXON — MR Ceftriaxonum Natrium | ATX: J01DA13
  // ─────────────────────────────────────────────────────────
  "J01DA13": {
    gruppa: "Tsefalosporinlar — III avlod",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `Keng spektrli III avlod yarim sintetik tsefalosporin antibiotigi. Bakteritsid ta'sir — hujayra devorining murein sintezini bloklaydi. Beta-laktamazalarga (penitsillaza va tsefalosporinaza) nisbatan yuqori barqarorlik bilan ajralib turadi. Ko'plab grammanfiy aerob mikroorganizmlarga faol: Enterobacter aerogenes va cloacae, E.coli, Haemophilus influenzae (ampitsillinga chidamli shammlar ham), H.parainfluenzae, Klebsiella spp., N.gonorrhoeae (penitsillaza hosil qiluvchilar ham), N.meningitidis, Proteus mirabilis va vulgaris, Morganella morganii, Serratia marcescens, Citrobacter, Providencia, Salmonella, Shigella, Acinetobacter calcoaceticus. Grammusbat bakteriyalarga: Staphylococcus aureus (metitsillinga sezgir), Streptococcus spp., S.pneumoniae. Anaeroblarga: Bacteroides fragilis va Clostridium spp. ga ham faol.`,
    farmakokinetika: {
      sorish: "I/v yoki I/m yo'l bilan qo'llaniladi. I/v infuziyada 500 mg, 1 g, 2 g miqdorida plazma konsentratsiyasi mos ravishda taxminan 80, 150 va 250 mg/L. Farmakokinetika nonlinear (doza oshgan sari oqsilga bog'lanish to'yinadi).",
      tarqalish: "Taqsimlanish hajmi — 7–12 L. 1–2 g yuborilganda to'qimalar va suyuqliklarga yaxshi tarqaladi: o'pka, yurak, safro, suyak, miya-orqa miya suyuqligi (meningitda yuqori konsentratsiya). Yo'ldosh va ona sutiga o'tadi. Plazma oqsillariga bog'lanish — 83–96% (dozaga bog'liq).",
      metabolizm: "Jigar orqali minimal metabolizm. Bakteritsid faol metabolit hosil bo'lmaydi.",
      chiqarilish: "Kattalar — yarimi chiqarilish davri 5,8–8,7 soat (noyob uzoqlik). Siydik orqali 50–60%, qolgan qismi o't va najaslar bilan. Bu xususiyat kuniga 1 marta qo'llash imkonini beradi."
    },
    korsatmalar: [
      "Sepsiz, septitsemiya",
      "Meningit va boshqa MNS infeksiyalari",
      "Lyme borreliozi (tarqalgan shakl, erta va kech bosqichlari)",
      "Qorin bo'shlig'i infeksiyalari: peritonit, safro yo'llari va ichak infeksiyalari",
      "Suyak va bo'g'm infeksiyalari",
      "Teri va yumshoq to'qima infeksiyalari, yarangi infeksiyalar",
      "Immunodefitsitli bemorlarda infeksiyalar",
      "Kichik tos infeksiyalari",
      "Buyrak va siydik yo'li infeksiyalari",
      "Nafas yo'llari infeksiyalari, ayniqsa pnevmoniya",
      "LOR organlari infeksiyalari",
      "Jinsiy organlar infeksiyalari, gonoreya",
      "Operatsiyadan keyingi infeksiya profilaktikasi"
    ],
    qarrshi: [
      "Tseftriakson va boshqa tsefalosporinlarga, penitsillinga, karbapenem oshirilgan sezgirlik",
      "Giperbilurubinemiya bilan tug'ilgan chala va yangi tug'ilganlar (ehtiyotkorlik bilan)",
      "Yara­langan ichak kasalligida (NÁK), jigar va buyrak yetishmovchiligida ehtiyotkorlik",
      "Antibiotiklar bilan bog'liq enterit va kolit"
    ],
    nojoya: {
      "Allergik": "Eshakemi, sovqotish yoki isitma, toshma, qichima; kamdan-kam — bronxospazm, eozinofili, Stivens-Jonson sindromi, zardob kasalligi, anafilaktik shok",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya yoki qabziyat, meteorizm, qorin og'rig'i, ta'm o'zgarishi, stomatit, glossit, psevdomembranoz enterokolit, jigar transaminazalar oshishi, xolestatik sariqlik, safro 'shlake' sindromi, disbakterioz",
      "Qon tizimi": "Anemiya, leykopeniya, leykositoz, neytropeni, granulotsitopeni, limfopeni, trombotsitoz, trombotsitopeni, gemolitik anemiya, gipokoagulyatsiya",
      "Buyrak": "Kreatinin oshishi, oliguriya, siydikda oqsil (kamdan-kam)"
    },
    dozadan: "Gemodializ va peritoneal dializ preparatning konsentratsiyasini pasaytirmaydi. Spetsifik antidot yo'q. Davolash — simptomatik.",
    ozarotasir: [
      "Tsefalosporinlar ichak florasini bostiradi → K vitamini sintezi kamayadi → antikoagulyantlar (varfarin) va trombotsit agregatsiyasini pasaytiruvchilar (NSAIDlar, salisilat) bilan qon ketish xavfi oshadi",
      "Antikoagulyantlar bilan birga: ularning ta'siri kuchayadi",
      "«Halqa» diuretiklar bilan: nefrotoksik ta'sir xavfi oshadi",
      "Aminoglikozidlar bilan: ko'plab grammanfiy bakteriyalarga sinergistik ta'sir",
      "Kaltsiy tutgan eritma/preparatlar: tseftriakson bilan nisbatan hech bo'lmaganda 48 soat oralatib yuborilishi kerak (cho'kma xavfi)",
      "Etanol: mos kelmasligi"
    ],
    qollash: {
      kattalar: "I/m yoki I/v. Kattalar va 12 yoshdan kattalar: 1–2 g x 1 marta/kun (har 24 soatda). Og'ir infeksiyalarda: sutkali doza 4 g gacha oshiriladi. 50 mg/kg va undan yuqori doza I/v da kamida 30 daqiqa ichida tomchi bilan yuboriladi. Lyme borreliozi: 50 mg/kg x 1 marta/kun, 14 kun. Gonoreya: bir martalik 250 mg I/m.",
      bolalar: "12 yoshgacha: 50–75 mg/kg/kun, 1 yoki 2 marta bo'lib. Meningitda — 100 mg/kg/kun gacha (maximum 4 g). Yangi tug'ilganlarda: 20–50 mg/kg/kun (giperbilurubinemiyada ehtiyot bo'lish)."
    },
    chiqarish: "I/v va I/m yuborish uchun eritma tayyorlash kukuni 1 g flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 12. PEFLOXACIN — Abaksatsin-NGP | ATX: J01MA03
  // ─────────────────────────────────────────────────────────
  "J01MA03": {
    gruppa: "Ftorxinolon guruhidagi antibiotiklar",
    farmTasir: "Keng spektrli bakteritsid antibakterial",
    farmakodinamika: `Ftorxinolon guruhidan keng spektrli antimikrob preparat. Bakteritsid ta'sir ko'rsatadi — bakteriya DNKning DNK-giraza fermenti orqali replikatsiyasini inhibleydi; RNK va oqsil sinteziga ham ta'sir qiladi. Bo'linish fazasidagi (o'sish bosqichi) va tinch holatdagi grammanfiy bakteriyalarga ta'sir qiladi. Grammusbat shtamlarda faqat mitotik bo'linish jarayonidagi hujayralarga ta'sir qiladi. Hujayra ichidagi qo'zg'atuvchilarga ham faol. Faol bo'lgan bakteriyalar: Staphylococcus aureus, S.epidermidis, S.saprophyticus; grammanfiy: E.coli, Klebsiella, Enterobacter, Serratia, Proteus mirabilis va vulgaris, Citrobacter, Salmonella, Shigella, H.ducreyi, H.influenzae, N.gonorrhoeae, N.meningitidis, Aeromonas, Campylobacter, Legionella, Moraxella.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda oshqozon-ichak traktidan tez so'riladi. Bir marta 400 mg I/v infuziyadan keyin Cmax 4 mkg/ml bo'lib, 12–15 soat saqlanadi. Biologik qodalanish — taxminan 100%. Bir marta 400 mg ichilgandan keyin 1,5 soatda Cmax 4 mkg/ml ga yetadi.",
      tarqalish: "Plazma oqsillariga bog'lanish — 25–30%. Taqsimlanish hajmi — 1,5–1,8 L/kg. To'qimalar, organlar va suyuqliklarga tez penetratsiya qiladi: aorta klapanlari, mitral klapan, yurak mushagi, suyak, qorin bo'shlig'i, peritoneal suyuqliq, safro pufagi, prostata bezi, miometrium.",
      metabolizm: "Jigar orqali faol va faolsiz metabolitlarga parchalanadi. Sitoktrom P450 sistemasiga ta'sir qiladi.",
      chiqarilish: "Siydik va najas orqali. Yarimi chiqarilish davri — taxminan 10–12 soat."
    },
    korsatmalar: [
      "Buyrak va siydik yo'li infeksiyalari",
      "Oshqozon-ichak infeksiyalari: salmonellyoz, ich terlama",
      "Safro pufagi va safro yo'llari infeksiyalari: xoletsistit, xolangit, safro pufagi empiemasi",
      "Qorin bo'shlig'i infeksiyalari: intraabdominal abstsesslar, peritonit",
      "Kichik tos infeksiyalari: adneksit, prostatit",
      "Suyak va bo'g'm infeksiyalari, osteomielit",
      "Teri va yumshoq to'qima infeksiyalari",
      "Quyi nafas yo'llari infeksiyalari",
      "LOR organlari infeksiyalari (o'rta quloq, appendixal bo'shliqlar, tomoq va hiqildoq)",
      "Ko'z infeksiyalari",
      "Sepsiz, septitsemiya, bakterial endokardit",
      "Meningoensefalit",
      "Gonoreya, xlamidiyoz"
    ],
    qarrshi: [
      "Glyukoza-6-fosfatdegidrogena tanqisligi",
      "Homiladorlik va emizish davri",
      "15 yoshgacha bolalar va o'smirlar",
      "Pefloksasin va boshqa ftorxinolonlarga oshirilgan sezgirlik"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, qorin og'rig'i",
      "Asab tizimi": "Bosh og'rig'i, uyqusizlik",
      "Tayanch-harakat": "Mialgiya, artralgiya — tendinit xavfi (ayniqsa 60+ yoshda)",
      "Qon tizimi": "Trombotsitopeni (kunlik 1,6 g dan oshiq dozada)",
      "Teri": "Fotosensibilizatsiya — quyosh nuridan himoya qiling",
      "Allergik": "Teri qichishi, eshakemi"
    },
    dozadan: "Belgilari: nojo'ya ta'sirlarning kuchayishi. Davolash: simptomatik terapiya; zarur bo'lsa gemodializ va peritoneal dializ. Spetsifik antidot yo'q.",
    ozarotasir: [
      "Aminoglikozidlar: Pseudomonas aeruginosa ga nisbatan sinergizm",
      "To'g'ridan-to'g'ri bo'lmagan antikoagulyantlar: ta'sirini kuchayishi mumkin",
      "Antatsidlar (Al(OH)₃ va Mg(OH)₂): pefloksasinning so'rilishini sekinlashtiradi",
      "Simetidin: pefloksasinning umumiy klirensi pasayib, T½ uzayadi",
      "Teofillin: jigar sitoxrom P450 fermenti ingibiri natijasida teofillinning metabolizmi sekinlashadi → konsentratsiya oshishi xavfi"
    ],
    qollash: {
      kattalar: "Og'iz orqali: o'rtacha doza 800 mg/kun, 2 ta qabul. Og'ir infeksiyalarda I/v tomchi: birinchi doza 800 mg, keyin 400 mg har 12 soatda. Jigar kasalliklarida doza moslashtiriladi (sariqlikda har 24 soat; astsitda har 36 soat; ikkalasida har 48 soat). Maksimal sutkali doza — 1,2 g.",
      bolalar: "15 yoshgacha — TAQIQLANADI."
    },
    chiqarish: "Tabletka 400 mg, qoplamali (10 yoki 20 dona); Infuzion eritma"
  },

  // ─────────────────────────────────────────────────────────
  // 13. LEVOFLOXACIN | ATX: J01MA12
  // ─────────────────────────────────────────────────────────
  "J01MA12": {
    gruppa: "Ftorxinolon guruhidagi antibiotiklar",
    farmTasir: "Keng spektrli bakteritsid antibakterial (III avlod ftorxinolon)",
    farmakodinamika: `Bakterial topoizomeraza IV va DNK-giraza (II tip topoizomeraza) enzimlarini ingiberlaydi — bakteriya DNKsining replikatsiyasi, transkriptsiyasi, reparatsiyasi va rekombinatsiyasi uchun zarur fermentlar. Amaliy konsentratsiyalarda bakteritsid ta'sir ko'rsatadi. Spontan mutatsiyalar natijasida rezistentlik juda kamdan-kam hosil bo'ladi (10⁻⁹–10⁻¹⁰). Baʼzi boshqa ftorxinolonlarga chidamli mikroorganizmlar levoflokasin ga sezgir bo'lishi mumkin. Faol bo'lgan bakteriyalar — grammusbat: Enterococcus faecalis, Staphylococcus aureus (metitsillinga sezgir shammlar), S.epidermidis (metitsillinga sezgir), S.saprophyticus, Streptococcus pneumoniae (ko'p rezistent MDRSP shammlar ham). Grammanfiy: E.coli, Haemophilus influenzae va parainfluenzae, Klebsiella pneumoniae, Legionella pneumophila, Moraxella catarrhalis, Proteus mirabilis, Pseudomonas aeruginosa. Atipik: Chlamydia pneumoniae, Mycoplasma pneumoniae.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez va deyarli to'liq so'riladi (ovqat ta'sir qilmaydi). Biologik qodalanish — 99%. Plazma Cmax 1–2 soatda; 250 mg va 500 mg qabul qilinganda mos ravishda ~2,8 va ~5,2 mkg/ml.",
      tarqalish: "Plazma oqsillariga bog'lanish — 30–40%. Organlarga yaxshi kiradi: o'pka, bronx shilliq qavati, balg'am, siydik-jinsiy tizim, polimorf yadrolik leykotsitlar, alveolar makrofaglar.",
      metabolizm: "Jigar orqali kichik qism oksidlanadi va/yoki dezatsetillanadi. Buyrak klirensi umumiy klirensi ning 70%.",
      chiqarilish: "Asosan siydik orqali — glomerulyar filtrasiya va kanalcha sekretsiyasi yo'li bilan. 5% dan kam metabolitlar ko'rinishida, 87% o'zgarmagan holda. T½ — 8 soat."
    },
    korsatmalar: [
      "Qorin bo'shlig'i organlari infeksiyalari",
      "Surunkali bronxitning qo'zg'alishi",
      "Jamoa ortirilgan pnevmoniya (klinik jihatdan og'ir shakllari ham)",
      "Prostatit (bakterial)",
      "O'tkir sinusit",
      "Asoratlanmagan va asoratlangan siydik yo'li infeksiyalari (pielonefrit ham)",
      "Teri va yumshoq to'qima infeksiyalari",
      "Bakteriemiya/septitsemiya (ko'rsatmalar bilan bog'liq)",
      "Tuberkulyoz (boshqa antituberkulyoz preparatlar bilan kombinatsiyada)"
    ],
    qarrshi: [
      "Boshqa ftorxinolon qo'llash tarixi bilan bog'liq tendopati (pay kasalligi)",
      "18 yoshgacha bolalar va o'smirlar",
      "Epilepsiya",
      "Emizish davri",
      "Homiladorlik",
      "Levoflokasin yoki xonolonlarga oshirilgan individual sezgirlik",
      "Keksa yoshda buyrak yetishmovchiligi xavfi (ehtiyotkorlik bilan)",
      "Glyukoza-6-fosfatdegidrogena tanqisligi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Hazm tizimi": "Diareya, ko'ngil aynishi, jigar fermentlari oshishi (ko'pincha); kamdan-kam — bilirubinemi, og'ir qonli diareya (psevdomembranoz kolit belgisi bo'lishi mumkin); ishtahaning yo'qolishi, qorin og'rig'i, qusish, dispepsiya; juda kamdan-kam — gepatit",
      "Immunologik": "Arterial bosimning keskin tushishi (shok), allergik pnevmonit, ultrabinafsha nurlarga oshirilgan sezgirlik, vaskulit, yuzi shishi, anafilaktik reaksiya; teri qizarishi va qichima",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, uyquning buzilishi, parestheziya; kamdan-kam — psixoz, aloqasiz xatti-harakatlar, qo'rquv, depressiya, gallyutsinasiyalar, tutqanoqlar",
      "Tayanch-harakat": "Tendinit, tendon yirtilishi (ayniqsa keksa yoshda va kortikosteroidlar bilan birga qo'llanganda)",
      "Qon tizimi": "Anemiya, leykopeni, trombotsitopeni, agranulotsitoz"
    },
    dozadan: "Belgilari: ko'ngil aynishi, oshqozon-ichak shilliq qavati eroziyalari, QT intervali uzayishi, chalkashgan ong, bosh aylanishi, tutqanoqlar. Davolash: oshqozon yuvish, simptomatik terapiya; dializ samarasiz.",
    ozarotasir: [
      "Mg va Al tutuvchi antatsidlar, sukralfat, temir, sink tutuvchi vitaminlar, didanozin: bir vaqtda qabul qilganda so'rilishni sezilarli kamaytiradi → kamida 2 soat oralatib qabul qilish kerak",
      "Varfarin: antikoagulyant ta'sirini oshirishi mumkin — INR nazorati",
      "NSAIDlar: tutqanoq xavfini oshiradi",
      "Teofillin, tsiklosporin, kofein: sitoxrom P450 orqali metabolizmga ta'sir etadi — konsentratsiyalari oshishi mumkin",
      "Siyabirish vositalar: levoflokasinning buyrak chiqarilishini kamaytiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali ovqatdan oldin yoki orasida, chaynamay, yetarli suvda. I/v, sekin tomchi. Sinusit: 500 mg x 1/kun, 10–14 kun. Bronxit qo'zg'alishi: 250–500 mg x 1/kun, 7–10 kun. Pnevmoniya: og'iz orqali 250–500 mg x 1–2/kun (0,5–1 g/kun); I/v 500 mg x 1–2/kun, 7–14 kun. Siydik yo'li infeksiyalari: 250 mg x 1/kun, 7–10 kun. Teri infeksiyalari: 250–500 mg x 1–2/kun, 7–14 kun. Tuberkulyozda: 500 mg x 1–2/kun 3 oygacha.",
      bolalar: "18 yoshgacha — TAQIQLANADI."
    },
    chiqarish: "Infuzion eritma flakonda 100 mg (0,5 g faol modda); Tabletka 250 mg va 500 mg"
  },

  // ─────────────────────────────────────────────────────────
  // 14. ENTECAVIR | ATX: J05AF10
  // ─────────────────────────────────────────────────────────
  "J05AF10": {
    gruppa: "Nukleozid analoglari — antiviral",
    farmTasir: "Gepatit B virusi (HBV) polimerazasini ingiberlash",
    farmakodinamika: `Guanozin nukleozidining analogi. HBV polimeraza ga nisbatan kuchli va selektiv antiviral faollik ko'rsatadi. Hujayra ichida fosforillaniб faol trifosfatga aylanadi (hujayra ichidagi T½ — 15 soat). Trifosfat shakli tabiiy substrat bo'lgan deoksiguanozin-trifosfat bilan raqobatlashib HBV polimerazasining 3 ta funksiyasini ham ingiberlaydi: 1) HBV polimerazasining praimingini; 2) pregenomic iRNK dan manfiy zanjirning teskari transkriptsiyasini; 3) HBV DNK ning musbat zanjiri sintezini. Hujayra DNK polimeraza α, β va δ uchun zaif ingibitor bo'lib (Ki 18–40 mkM), hujayralarga toksik ta'siri minimal.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda so'rilish tez — Cmax 0,5–1,5 soatda. Doza bilan proporsional Cmax va AUC oshishi. Muvozanat holat 6–10 kun ichida 1 marta/kun qabul qilganda erishiladi (konsentratsiya ~2 baravar oshadi). Yog'li ovqat bilan qabul qilganda Cmax 44–46% va AUC 18–20% kamayadi — shu sababli och qoringa qabul qilinadi.",
      tarqalish: "Taqsimlanish hajmi qon hajmidan yuqori → to'qimalarda keng tarqaladi. Plazma oqsillariga bog'lanish — 13%.",
      metabolizm: "Oksidatsiya yoki glyukuronidlanish yo'li bilan minimal metabolizm.",
      chiqarilish: "Asosan o'zgarmagan holda siydik orqali glomerulyar filtrasiya va kanalcha sekretsiyasi yo'li bilan. T½ — 128–149 soat."
    },
    korsatmalar: [
      "Kattalar va 16+ yoshli o'smirlar uchun surunkali B gepatitini davolash, quyidagi holatlarda:",
      "– Dekompensatsiya qilingan jigar shikastlanishi",
      "– Kompensatsiya qilingan jigar shikastlanishi + viral replikatsiya + gistologik yallig'lanish belgilari + transaminazalar (ALT/AST) oshishi va/yoki fibroz"
    ],
    qarrshi: [
      "Laktoza intoleransi, laktaza tanqisligi, glyukoza-galaktoza malabsorbsiyasi",
      "18 yoshgacha bolalar (faqat tibbiy nazorat ostida)",
      "Preparat komponentlariga oshirilgan sezgirlik"
    ],
    nojoya: {
      "Hazm tizimi": "Kamdan-kam: diareya, dispepsiya, ko'ngil aynishi, qusish; transaminazalar oshishi mumkin",
      "Asab tizimi": "Ko'pincha: bosh og'rig'i, charchash; kamdan-kam — uyqusizlik, bosh aylanishi, uyquchanlik",
      "Immunologik": "Anafylaktoid reaksiya (mumkin)",
      "Teri": "Alopetsiya, toshma (mumkin)",
      "Moddalar almashinuvi": "Laktatsidoz (umumiy holsizlik, ko'ngil aynishi, qusish, qorin og'rig'i, vezn keskin tushishi, qisqa nafas, tezlashgan nafas, mushak zaifligi) — ayniqsa dekompensatsiya qilingan jigar shikastlanishida e'tiborli!"
    },
    dozadan: "Klinik tajriba cheklangan. Sog'lom odamlarda 40 mg gacha bir martalik doza yoki 20 mg/kun ko'p martalik (14 kunga qadar) dozada kuzatiladigan toksiklik kuzatilmagan. Ortiqcha dozada standart qo'llab-quvvatlovchi terapiya o'tkaziladi. 4-soatlik gemodializ seansida ~13% chiqariladi.",
    ozarotasir: [
      "Buyrak funksiyasini buzuvchi yoki kanalcha sekretsiyasi uchun raqobatlashuvchi preparatlar: entekavir va ular konsentratsiyasi oshishi mumkin — ehtiyotkorlik bilan kuzating",
      "Lamivudinga rezistentlikda: 0,5 mg o'rniga 1 mg doza talab qilinadi"
    ],
    qollash: {
      kattalar: "Och qoringa (taomdan kamida 2 soat oldin yoki 2 soat keyin). Kompensatsiya qilingan jigar shikastlanishi: 0,5 mg x 1 marta/kun. Lamivudinga rezistentlik yoki dekompensatsiya qilingan jigar shikastlanishi: 1 mg x 1 marta/kun. Buyrak yetishmovchiligida dozani sozlash talab qilinadi.",
      bolalar: "16 yoshdan — kattalar dozasida. 16 yoshgacha ehtiyotkorlik bilan."
    },
    chiqarish: "Tabletka 0,5 mg (oq) va 1 mg (pushti rang); 10 tabletka blisterdа, kartonda 3 blister"
  },

  // ─────────────────────────────────────────────────────────
  // 15. ENISAMIUM IODIDE — Amizol | ATX: J05AX
  // ─────────────────────────────────────────────────────────
  "J05AX": {
    gruppa: "Boshqa antiviral preparatlar — immunomodulyator",
    farmTasir: "Antiviral, immunomodulyator, yallig'lanishga qarshi",
    farmakodinamika: `Enisamiy yodid — antiviral, immunomodulyator va analgetik ta'sirga ega preparat. Interferonogenlik xususiyati mavjud (endogen interferon sintezini rag'batlantiradi). Gripp virusi, paragripp, RS-virus, adenoviruslar, gerpes, Epshteyn-Barr virusi va boshqa respirator viruslarga nisbatan faollik ko'rsatadi. Yallig'lanishga qarshi va analgetik ta'sir ham bor. Antibakterial preparatlar va immunomodulyatorlar ta'sirini kuchaytiradi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda tez so'riladi.",
      tarqalish: "To'qimalarga keng tarqaladi.",
      metabolizm: "Jigar orqali metabolizatsiya.",
      chiqarilish: "Siydik va najas orqali."
    },
    korsatmalar: [
      "Gripp va boshqa respirator viral infeksiyalar (davolash va profilaktika)",
      "Yuqum mononukleozi",
      "Qizamiq, qizilcha, suvchechak, parotit infeksiyasi",
      "Felinoz (mushuk tirnash kasalligi)",
      "A va E gepatitlarining nospetsifik kimyoviy profilaktikasi",
      "Kompleks terapiyada: viral, viral-bakterial va bakterial pnevmoniyalar va anginalar",
      "Viral meningit va meningoensefalit",
      "Gerpes infeksiyasi",
      "A va E gepatitlari",
      "Osteoxondroz, umurtqalararo disk churrasi, artrit, nevralgiyalarda og'riq sindromi"
    ],
    qarrshi: [
      "Yod preparatlariga va preparat komponentlariga oshirilgan sezgirlik",
      "Har qanday tabiatdagi allergik reaksiyalar tarixi",
      "Jigar va buyrakning og'ir organik shikastlanishlari",
      "Homiladorlikning I trimestri",
      "6 yoshgacha bolalar (ushbu doza shakli uchun)"
    ],
    nojoya: {
      "Allergik": "Teri toshmasi, eshakemi, angionevrotik shish, qichima — gipersezgirlik reaksiyalari",
      "Hazm tizimi": "Og'iz quruqligi va achchiq ta'm, og'iz shilliq qavati shishi, gipersekretsiya, tilning sariq rangga bo'yalishi, ko'ngil aynishi, qusish, qanog'simiz, qorin og'rig'i, o'ng qovurg'a osti og'riqligi, diareya, meteorizm",
      "Nafas tizimi": "Qisqa nafas, tomoq tirnalishi",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, holsizlik, qon bosimi tebranishi (pregistratsiyadan keyingi yakka holatlar)"
    },
    dozadan: "Amizol bilan dozadan oshish holatlari xabar qilinmagan. Ortiqcha dozada nojo'ya ta'sirlar kuchayishi, shilliq qavat jigarrang bo'yalishi, qusish, qorin og'rig'i va diareya, shishlar, eritema, akneya o'xshash va bullyoz toshmalar, isitma kuzatilishi mumkin. Davolash: oshqozon yuvish, simptomatik davolash.",
    ozarotasir: [
      "Antibakterial preparatlar: Amizol ularning ta'sirini kuchaytiradi",
      "Immunomodulyatorlar: kuchaytiradi",
      "Askorbin kislotasi va boshqa vitaminlar: samarali kombinatsiya",
      "Rekombinant interferon: birga buyurish mumkin"
    ],
    qollash: {
      kattalar: "Taomdan keyin og'iz orqali, chaynamay. Maksimal bir martalik doza — 1000 mg, sutkali — 2000 mg. Gripp va respirator infeksiyalarda: 250–500 mg x 2–4 marta/kun, 5–7 kun. Og'ir infeksiyalarda (meningoensefalit): 250 mg x 3 marta/kun, tibbiy nazorat ostida. Kurs davomiyligi kasallikning og'irligiga qarab — 5 dan 30 kungacha.",
      bolalar: "6–12 yosh: 125 mg x 2–3 marta/kun, 5–7 kun. 12–16 yosh: 250 mg, dan kamaytirilgan rejimda. 6 yoshgacha — ushbu shakl taqiqlangan."
    },
    chiqarish: "Qoplamali tabletka 0,125 g va 0,25 g, blisterdа 10 yoki 20 dona"
  },

  // ─────────────────────────────────────────────────────────
  // 16. AMIKACIN | ATX: J01GB06
  // ─────────────────────────────────────────────────────────
  "J01GB06": {
    gruppa: "Aminoglikozidlar — keng spektrli",
    farmTasir: "Keng spektrli bakteritsid aminoglikozid antibiotigi",
    farmakodinamika: `Yarim sintetik aminoglikozid antibiotigi. Bakteriya hujayrasi membranasidan faol kiradi. Ribosom 30S subbirligiga bog'lanib, transport va matritsa RNKning kompleks hosil qilishiga to'sqinlik qiladi, oqsil sintezini bloklaydi va sitoplazmatik membrana sintezini buzadi. Amikatsin gentamitin va tobramitsinга chidamli shammlar uchun ham samarali. Grammanfiy aerob mikroorganizmlarga faol: Pseudomonas aeruginosa, E.coli, Shigella, Salmonella, Klebsiella, Enterobacter, Providencia, Proteus (indol-musbat va manfiy shammlar), Serratia, Acinetobacter, Citrobacter freundii. Grammusbat mikroorganizmlarga: Staphylococcus spp. (penitsillinga, metitsillinga va ba'zi tsefalosporinlarga chidamlilari ham), Streptococcus pyogenes, S.pneumoniae, Enterococcus. M.tuberculosis ga ham faol. Psevdomonas aeruginosaga qarshi asosiy terapiya sifatida ishlatilishi mumkin.`,
    farmakokinetika: {
      sorish: "I/m dan so'ng tez va to'liq so'riladi. I/m da 7,5 mg/kg dozasida Cmax ~21 mkg/ml (Tmax ~1,5 soat); 30 min I/v infuziyada 7,5 mg/kg da Cmax ~38 mkg/ml. Terapevtik konsentratsiya I/v yoki I/m dan keyin 10–12 soat saqlanadi.",
      tarqalish: "Plazma oqsillariga bog'lanish — 4–11%. Taqsimlanish hajmi kattalar uchun — 0,26 L/kg; bolalarda — 0,2–0,4 L/kg; yangi tug'ilganlarda — 0,58–0,68 L/kg. Ekstrasellyular suyuqliqqa yaxshi tarqaladi (abstsess, plevral, astsitik, perikardial, sinoviyal, limfatik, peritoneal suyuqliqlar). Buyrak, jigar, o'pkada yuqori konsentratsiya. Suyak va yog' to'qimasida past. Gematoentsefalik to'siqdan o'tmaydi. Yo'ldosh va ona sutiga o'tadi.",
      metabolizm: "Metabolizmga uchramaydi.",
      chiqarilish: "95% siydik orqali o'zgarmagan holda glomerulyar filtrasiya yo'li bilan. T½ kattalar uchun — 2–4 soat; yangi tug'ilganlarda — 5–8 soat; keksalarda uzayadi. Buyrak yetishmovchiligida T½ sezilarli uzayadi."
    },
    korsatmalar: [
      "Grammanfiy mikroorganizmlar (gentamitin va tobramitsinga chidamlilar ham) qo'zg'atgan og'ir infeksiyalar: Pseudomonas, E.coli, Proteus, Klebsiella, Enterobacter, Serratia, Acinetobacter",
      "Bakterial sepsiz (yangi tug'ilganlarda ham)",
      "Nafas yo'llari og'ir infeksiyalari",
      "Suyak va bo'g'm infeksiyalari, osteomielit",
      "MNS infeksiyalari, meningit",
      "Teri va yumshoq to'qimaning yiringli infeksiyalari",
      "Qorin bo'shlig'i infeksiyalari, peritonit",
      "Kuydiruvchi va operatsiyadan keyingi infeksiyalar",
      "Siydik-jinsiy tizim infeksiyalari (og'ir, asoratlangan, takrorlanuvchi)",
      "Stafilokokk infeksiyalari (boshqa antibiotiklar samarasiz bo'lganda)"
    ],
    qarrshi: [
      "Amikatsin va boshqa aminoglikozidlarga oshirilgan sezgirlik",
      "Eshitish asabi neriti",
      "Azotemin va uremiya bilan og'ir surunkali buyrak yetishmovchiligi",
      "Miasteniya gravis, parkinsonizm, botulizm (ehtiyotkorlik bilan)",
      "Suvsizlanish, buyrak yetishmovchiligi (ehtiyotkorlik bilan, doza sozlash)",
      "Emizish davri (ehtiyotkorlik bilan)",
      "Keksa yoshdagilar (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Ototoksiklik": "VIII nervning koklear qismi shikastlanishi → eshitish yo'qolishi, quloqda shovqin — JIDDIY! Doimiy audiometrik nazorat kerak",
      "Vestibulotoksiklik": "VIII nervning vestibular qismi shikastlanishi → bosh aylanishi, muvozanat buzilishi",
      "Nefrotoksiklik": "Buyrak kanalchalari shikastlanishi — oliguriya, proteinuriya, mikrogematuriya; buyrak yetishmovchiligi xavfi",
      "Asab tizimi": "Bosh og'rig'i, uyquchanlik, neyrotoksik ta'sir (mushak titrashi, uyushish, achishish, tutqanoqlar), neyromushak blokada",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, jigar transaminazalar oshishi, giperbilirubinemi",
      "Qon tizimi": "Gemorragik diатez, anemiya (kamdan-kam), leykopeniya, granulotsitopeni, trombotsitopeni",
      "Allergik": "Teri toshmasi, qichima, teri giperemiyasi, isitma, Kvinke shishi"
    },
    dozadan: "Belgilari: toksik reaksiyalar, neyromushak blokada (nafas to'xtashigacha). Chaqaloqlarda: MNS susayishi (holsizlik, stupor, koma, chuqur nafas susayishi). Davolash: I/v kaltsiy xlorid, anticholinesteraz vositalar (neostigmin tери ostiga), m-xolinoblokatorlar (atropin), simptomatik terapiya; zarur bo'lsa sun'iy nafas. Buyrak yetishmovchiligida gemodializ va peritoneal dializ samarali; yangi tug'ilganlarda almashinuv qon quyish.",
    ozarotasir: [
      "Karbenisillin, benzilpenitsilling, tsefalosporinlar: sinergizm (og'ir surunkali buyrak yetishmovchiligida aminoglikozid samaradorligi pasayishi mumkin)",
      "Nalidiksik kislota, polimiksin B, sisplatin, vankomisin: ototoksiklik va nefrotoksiklik xavfini oshiradi",
      "Diuretiklar (furosemid), tsefalosporinlar, penitsilling, sulfonamidlar, NSAIDlar: nefron kanalchasida sekresiya uchun raqobatda aminoglikozidning eliminatsiyasini bloklaydi → toksiklik oshadi",
      "Boshqa aminoglikozidlar bilan birga qo'llash: ototoksiklik va nefrotoksiklik keskin oshadi — TAQIQLANADI"
    ],
    qollash: {
      kattalar: "I/m, I/v (struyali 2 daqiqa yoki tomchi 30–60 daqiqa). 5 mg/kg har 8 soatda yoki 7,5 mg/kg har 12 soatda. Asoratlanmagan siydik yo'li infeksiyasi: 250 mg har 12 soatda. Maksimal: 15 mg/kg/kun, lekin 1,5 g/kun dan oshmasin, 10 kun. I/v da 200 mL 5% glyukoza yoki 0,9% NaCl da suyultirilib tomchi yuboriladi.",
      bolalar: "7,5 mg/kg har 12 soatda yoki 5 mg/kg har 8 soatda. Yangi tug'ilganlarda: 7,5 mg/kg har 12 soatda."
    },
    chiqarish: "I/m va I/v yuborish uchun eritma tayyorlash kukuni 500 mg flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 17. AMOXICILLIN | ATX: J01CA04
  // ─────────────────────────────────────────────────────────
  "J01CA04": {
    gruppa: "Penitsilling guruhidagi antibiotiklar — keng spektrli",
    farmTasir: "Keng spektrli bakteritsid antibiotik (aminopenitsilling)",
    farmakodinamika: `Yarim sintetik penitsilling guruhidagi keng spektrli antibiotik. Ampitsillining 4-gidroksil analogi. Bakteritsid ta'sir — hujayra devorining murein sintezini bloklaydi. Faol bo'lgan bakteriyalar — aerob grammusbat: Staphylococcus spp. (penitsillaza hosil qilmaydiganlar), Streptococcus spp.; aerob grammanfiy: N.gonorrhoeae, N.meningitidis, E.coli, Shigella, Salmonella, Klebsiella. Penitsillaza hosil qiluvchi mikroorganizmlarga chidamli emas. Metronidazol bilan kombinatsiyada Helicobacter pylori ga ta'sir qiladi (H.pylori ning metronidazolga rezistentlik rivojlanishini kamaytiradi deb hisoblanadi). Klavulanat kislota bilan kombinatsiyada spektr kengayadi — beta-laktamaza hosil qiluvchi bakteriyalarga ham samarali.`,
    farmakokinetika: {
      sorish: "So'rilish tez va yuqori (93%). Ovqat ta'sir qilmaydi, oshqozon kislotasida parchalanmaydi. 125 mg va 250 mg ogʻiz orqali olganda Cmax mos ravishda 1,5–3 mkg/ml va 3,5–5 mkg/ml; Tmax 1–2 soat.",
      tarqalish: "Taqsimlanish hajmi katta — plazma, balg'am, bronxial sekret, plevral va peritoneal suyuqliq, siydik, o'pka to'qimasi, ichak shilliq qavati, jinsiy organlar, prostata bezi, o'rta quloq suyuqligi, suyak, yog' to'qimasi, safro pufagi, homila to'qimalariga kiradi.",
      metabolizm: "Jigar orqali qisman metabolizatsiya qilinadi.",
      chiqarilish: "Asosan siydik orqali (kanalcha sekretsiyasi va glomerulyar filtrasiya). T½ — 1–1,5 soat. Bemorlarning 50–70% buyrak orqali o'zgarmagan holda chiqadi."
    },
    korsatmalar: [
      "Yuqori nafas yo'llari infeksiyalari",
      "Otit (o'rta quloq yallig'lanishi)",
      "Pnevmoniya",
      "Tsistit, uretrit, pielonefrit",
      "Homiladorlikda bakteriuriya",
      "Peritonit, sepsiz, septitsemiya",
      "Bakterial endokardit",
      "Isitma sindromi",
      "Teri va yumshoq to'qima infeksiyalari",
      "Osteomielit",
      "Ginekologik infeksiyalar (tug'ruqdan keyingi sepsiz, septik abort)",
      "Gonoreya",
      "H.pylori eradikatsiyasi (metronidazol va omeprazol bilan kombinatsiyada)"
    ],
    qarrshi: [
      "Penitsillinga, ampitsilling va tsefalosporinlarga oshirilgan sezgirlik",
      "Allergik diatez",
      "Bronxial astma",
      "Shox isitma (allergy rinokonjunktivit)",
      "Yuqum mononukleozi",
      "Limfoleykoz",
      "Oshqozon-ichak kasalliklari",
      "Emizish davri"
    ],
    nojoya: {
      "Asab tizimi": "Uyqusizlik, holsizlik, hayajonlanish, tashvish, ataksiya, chalkashgan ong, depressiya, bosh aylanishi, bosh og'rig'i, tutqanoqlar, giperkinez",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, dispepsiya, ishtahaning yo'qolishi, og'iz quruqligi, ta'm o'zgarishi, meteorizm, transaminazalar oshishi, xolestatik sariqlik, gepatit",
      "Allergik": "Eozinofili, eshakemi, eritema, teri toshmasi, rinit, kon'yunktivit, Kvinke shishi, anafilaktik shok, Stivens-Jonson sindromi, vaskulit",
      "Boshqa": "Anemiya, taxikardiya, bo'g'm og'rig'i, nafas qiyinlashishi, interstitsial nefrit, superinfeksiya, disbakterioz, kandidoz, psevdomembranoz kolit"
    },
    dozadan: "Belgilari: ko'ngil aynishi, qusish, diareya, suv-elektrlit muvozanati buzilishi. Davolash: oshqozon yuvish, faollashtirilgan ko'mir, tuz surgi, suv-elektrlit muvozanatini qo'llab-quvvatlovchi terapiya; gemodializ.",
    ozarotasir: [
      "Bakteriostatik antibiotiklar (makrolidlar, xloramfenikol, linkosamidlar, tetratsiklinlar, sulfonamidlar): antagonizm",
      "Bakteritsid antibiotiklar (aminoglikozidlar, tsefalosporinlar, sikloserinlar, vankomisin, rifampisin): sinergizm",
      "To'g'ridan-to'g'ri bo'lmagan antikoagulyantlar: ichak florasini bostiradi → K vitamini pasayadi → antikoagulyant ta'siri kuchayadi",
      "Og'iz orqali kontraseptivlar: samaradorligini kamaytirishi mumkin",
      "Probenesid, diuretiklar, allopurinol, fenilbutazon, NSAIDlar: amoksitsillining kanalcha sekretsiyasini kamaytiradi → konsentratsiya oshishi",
      "Askorbin kislotasi: amoksitsilling so'rilishini oshiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali (taomdan oldin yoki keyin). Doza qo'zg'atuvchiga va kasallikning og'irligiga qarab belgilanadi. Kattalar va 40 kg dan og'irroq bolalar: 1500–3000 mg/kun, 3–4 ta qabul. Og'ir infeksiyalarda: 4000–6000 mg/kun. Maksimal: 6000 mg/kun. Kurs: 7–10 kun (beta-gemolitik streptokokk infeksiyasida kamida 10 kun). H.pylori eradikatsiyasi: metronidazol va omeprazol bilan kombinatsiyada.",
      bolalar: "40 kg dan kichik: 25–45 mg/kg/kun, 3 ta qabul. Og'ir infeksiyalarda: 45–90 mg/kg/kun."
    },
    chiqarish: "Tabletka 1,0 g (qoplamali); Kapsulalar 0,25 g va 0,5 g; Oral eritma 0,1 g/ml; Suspenziya 0,125 g/5 ml; Inyeksion kukun 1 g"
  },

  // ─────────────────────────────────────────────────────────
  // 18. AMPIOKS (Ampicillin+Oxacillin) | ATX: J01CR50
  // ─────────────────────────────────────────────────────────
  "J01CR50": {
    gruppa: "Penitsilling kombinatsiyalari",
    farmTasir: "Keng spektrli kombinatsion antibiotik",
    farmakodinamika: `Ampitsilling tridridrat va oksatsillin natriy tuzining 1:1 nisbatdagi kombinatsiyasi. Ampitsilling — keng spektrli bakteritsid penitsilling, grammusbat va grammanfiy bakteriyalarga ta'sir qiladi, lekin beta-laktamaza ta'sirida parchalanadi. Oksatsillin — penitsillazaga (beta-laktamaza) chidamli yarim sintetik penitsilling. Ikkala komponentning kombinatsiyasi keng spektrli ta'sir bilan birga penitsillaza hosil qiluvchi stafilokokklarga ham samarali bo'lishni ta'minlaydi. Ta'sir doirasi: grammusbat mikroorganizmlar (penitsillazaга chidamli stafilokokklar ham) va grammanfiy bakteriyalar (E.coli, Proteus, Shigella, Salmonella va boshqalar).`,
    farmakokinetika: {
      sorish: "Ikkala komponent og'iz orqali qabul qilganda yaxshi so'riladi. I/m va I/v yo'llari bilan ham yuboriladi.",
      tarqalish: "Ko'pchilik to'qimalarga tarqaladi. Jigar, o'pka, buyrak, siydik, safro yo'llariga yaxshi penetratsiya.",
      metabolizm: "Jigar orqali qisman metabolizm.",
      chiqarilish: "Asosan siydik orqali. T½ — qisqa (1–1,5 soat)."
    },
    korsatmalar: [
      "Sinusit, tonzillit, o'rta otit",
      "Bronxit, pnevmoniya",
      "Xolangit, xoletsistit",
      "Pielonefrit, pielit, tsistit, uretrit",
      "Gonoreya, servitsit",
      "Teri va yumshoq to'qima infeksiyalari: roʻja, impetigo, yomonlashgan dermatoz",
      "Operatsiyadan keyingi asoratlar profilaktikasi",
      "Yangi tug'ilganlarda infeksiyalar profilaktikasi",
      "Og'ir infeksiyalar: sepsiz, endokardit, meningit, tug'ruqdan keyingi infeksiya"
    ],
    qarrshi: [
      "Penitsilling preparatlariga toksik-allergik reaksiyalar tarixi",
      "Anamnezda allergik reaksiyalar (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Allergik": "Eshakemi, teri giperemiyasi, angionevrotik shish, rinit, kon'yunktivit; isitma, artralgiya, eozinofili; kamdan-kam — anafilaktik shok",
      "Hazm tizimi": "Ta'm o'zgarishi, ko'ngil aynishi, qusish, diareya; kamdan-kam — psevdomembranoz enterokolit",
      "Qon tizimi": "Leykopeniya, neytropeni, anemiya",
      "Umumiy": "Superinfeksiya, disbakterioz",
      "Mahalliy": "I/v da flebiti va periflebit; I/m da infiltrat, og'riq"
    },
    dozadan: "Ma'lumot cheklangan. Simptomatik terapiya o'tkaziladi.",
    ozarotasir: [
      "Aminoglikozidlar bilan birga qo'llash: sinergistik ta'sir",
      "Bakteriostatik antibiotiklar: ampitsillinga xos antagonizm",
      "Antikoagulyantlar: K vitamini sintezini pasaytiradi → qon ketish xavfi"
    ],
    qollash: {
      kattalar: "I/m yoki I/v (struyali yoki tomchi). Bir martalik doza: 0,5–1,0 g; sutkali: 2–4 g. I/m uchun: flekon tarkibiga 2 ml steril suv qo'shiladi. Og'iz orqali: bir martalik doza 0,5–1,0 g; sutkali 2–4 g, 4–6 ta qabul. Davolash davomiyligi: 5–7 kundan 3 haftagacha.",
      bolalar: "25–50 mg/kg/kun, 4–6 ta qabul."
    },
    chiqarish: "Kapsulalar 0,25 g (10 dona blister yoki qoʻngʻir shisha bankasida 20 dona); I/m va I/v yuborish uchun kukun flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 19. SULTAMYCILLIN (Ampicillin+Sulbactam) | ATX: J01CR04
  // ─────────────────────────────────────────────────────────
  "J01CR04": {
    gruppa: "Penitsilling + beta-laktamaza ingibitori kombinatsiyasi",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `Sültamitsillin — ampitsilling va sulbaktamning 1:1 nisbatdagi bitta molekulada qo'shilmasi (prodrug). Og'iz orqali qabul qilinganda so'rilish jarayonidayoq gidrolizlanib teng miqdordagi ampitsilling va sulbaktamga ajraladi. Sulbaktam — beta-laktamaza ingibitori: S.aureus, H.influenzae, B.fragilis va boshqa ko'plab beta-laktamaza ishlab chiqaruvchi mikroorganizmlardagi fermentlarni irreversibel bloklaydi. Bu kombinatsiya ampitsillinga chidamli bo'lgan ko'plab beta-laktamaza hosil qiluvchi shtammlar uchun ham samarali. Spektr: grammusbat va grammanfiy aerob va anaerob bakteriyalar, shu jumladan Staphylococcus aureus (beta-laktamaza hosil qiluvchi shammlar), Haemophilus influenzae, N.gonorrhoeae, E.coli, Klebsiella, Bacteroides fragilis.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda (I/v ga nisbatan) biologik qodalanish — 80%, ovqatdan mustaqil. Qon oqimida ampitsilling va sulbaktam nisbati 1:1. Ampitsillining Cmax, sulbaktam bilan kombinatsiyada, toza ampitsilling dan 2 barobar yuqori.",
      tarqalish: "Plazma oqsillariga bog'lanish: ampitsilling — 28%, sulbaktam — 38%. T½: ampitsilling — 0,75 soat, sulbaktam — 1 soat. Har bir preparatning 50–75% si siydik orqali o'zgarmagan holda chiqariladi.",
      metabolizm: "Prodrug sifatida gidrolizlanadi; qolgan qism jigar orqali.",
      chiqarilish: "Siydik orqali. Keksa bemorlar va buyrak yetishmovchiligida eliminatsiya sekinlashadi — doza sozlash kerak."
    },
    korsatmalar: [
      "Teri infeksiyalari",
      "Ichak infeksiyalari",
      "Ginekologik infeksiyalar",
      "LOR organlari infeksiyalari",
      "Nafas yo'llari infeksiyalari",
      "Siydik-jinsiy tizim infeksiyalari",
      "Yiringli-xirurgik infeksiyalar (abstsesslar, flegmonlar, osteomielitlar)",
      "Bakterial septitsemiya",
      "Suyak va bo'g'm infeksiyalari",
      "Gonokok infeksiyasi",
      "Operatsiyadan keyingi infeksiya profilaktikasi",
      "Ampitsillinga sezgir mikroorganizmlar qo'zg'atgan barcha infeksiyalar"
    ],
    qarrshi: [
      "Yuqum mononukleozi",
      "Penitsilling qatoridagi preparatlarga oshirilgan sezgirlik"
    ],
    nojoya: {
      "Hazm tizimi": "Diareya, qichima, toshma, teri reaksiyalari; kamdan-kam — ko'ngil aynishi, qusish, epigastral og'riq, kolik, uyquchanlik, holsizlik, bosh og'rig'i, enterokolit, psevdomembranoz kolit, superinfeksiya (zamburug' ham)",
      "Allergik": "Og'ir anafilaktik reaksiyalar (ta'riflangan hollar bor)"
    },
    dozadan: "Belgilari: diareya, qichima, toshma, tutqanoqlar. Davolash: simptomatik terapiya. Gemodializ orqali qon zardobidagi ampitsilling va sulbaktam konsentratsiyasini kamaytirish mumkin.",
    ozarotasir: [
      "Probenesid: ampitsilling va sulbaktam konsentratsiyasini oshiradi, buyrak chiqarilishini kamaytiradi",
      "Allopurinol: teri toshmasi ehtimolini sezilarli oshiradi",
      "Aminoglikozidlar bilan birga qo'llash: TAQIQLANADI",
      "Hormonal og'iz orqali kontraseptivlar: samaradorligi pasayishi mumkin"
    ],
    qollash: {
      kattalar: "Og'iz orqali, tabletka yoki suspenziya shaklida. 30 kg dan og'ir bemorlar: sutkali doza 750–1500 mg, 2 ta qabul. Kurs: 5–14 kun. Asoratlanmagan gonoreya: bir martalik 2,25 g (probenesid bilan).",
      bolalar: "30 kg dan engil: 25–50 mg/kg/kun, 2 ta qabul (kasallik og'irligiga qarab)."
    },
    chiqarish: "Tabletka qoplamali 375 mg va 750 mg (10 dona); Suspenziya tayyorlash kukuni 250 mg/5 ml (40 ml va 70 ml)"
  },

  // ─────────────────────────────────────────────────────────
  // 20. ARDUS — Cefoperazone+Sulbactam | ATX: J01DA32
  // ─────────────────────────────────────────────────────────
  "J01DA32": {
    gruppa: "Tsefalosporinlar III avlod + beta-laktamaza ingibitori",
    farmTasir: "Keng spektrli bakteritsid kombinatsion antibiotik",
    farmakodinamika: `Tsefoparzon va sulbaktamning 1:1 nisbatdagi kombinatsiyasi. Tsefoparzon — III avlod tsefalosporin antibiotigi, keng spektrli bakteritsid ta'sirga ega — hujayra devorining murein sintezini bloklaydi. Sulbaktam — beta-laktamaza ingibitori, tsefoparzonning ta'sir doirasini kengaytiradi, beta-laktamaza hosil qiluvchi mikroorganizmlarga nisbatan ham samarali qiladi. Kombinatsiya grammusbat va grammanfiy aerob va anaerob bakteriyalarga, jumladan Staphylococcus aureus (penitsillaza hosil qiluvchi), E.coli, Klebsiella, Haemophilus influenzae, Bacteroides fragilis, Pseudomonas aeruginosa (ehtiyotkorlik bilan) va boshqalarga nisbatan faol.`,
    farmakokinetika: {
      sorish: "I/v yoki I/m yo'l bilan qo'llaniladi. I/v 2 g (1 g sulbaktam + 1 g tsefoparzon) kombinatsiyasi 5 daqiqa ichida yuborilganda sulbaktam Cmax ~130,2 mkg/ml, tsefoparzon Cmax ~236,8 mkg/ml. I/m 1,5 g (500 mg sulbaktam + 1 g tsefoparzon) yuborilganda Cmax 15 daqiqa – 2 soat orasida.",
      tarqalish: "Sulbaktam taqsimlanish hajmi: 18,0–27,6 L; tsefoparzon taqsimlanish hajmi: 10,2–11,3 L. Ikkalasi ham to'qimalar va suyuqliqlarига yaxshi tarqaladi: safro, safro pufagi, teri, qoʻshimcha ichak, fallop naylari, tuxumdon, bachadon.",
      metabolizm: "Sulbaktam: minimal metabolizm. Tsefoparzon: jigar orqali qisman.",
      chiqarilish: "Sulbaktam asosan siydik orqali, tsefoparzon asosan safro bilan chiqariladi (shu sababli jigar kasalliklarida doza sozlanishi kerak)."
    },
    korsatmalar: [
      "Faringit, tonzillit, sinusit, bronxit",
      "Pnevmoniya, bronxopnevmoniya, empiyema, o'pka abstsessi",
      "Pielonefrit, tsistit, prostatit",
      "Endometrit, gonoreya, vulvovaginit",
      "Peritonit, xoletsistit, xolangit",
      "O'tkir o'rta otit, sinusit, angin",
      "Furunkulez, abstsess, piodermi, limfadenit, limfangit",
      "Osteomielit, bo'g'm infeksiyalari",
      "Sepsiz, meningit",
      "Qorin, ginekologik va ortopedik operatsiyalardan keyingi infektsion asoratlari profilaktikasi",
      "Yurak-qon tomir xirurgiyasida profilaktika"
    ],
    qarrshi: [
      "Tsefoparzon, sulbaktam va boshqa beta-laktam antibiotiklarga oshirilgan sezgirlik",
      "Penitsilling allergiyasi (ehtiyotkorlik bilan, mumkin o'zaro allergenlik)",
      "Og'ir jigar yetishmovchiligi (tsefoparzon asosan safro bilan chiqariladi — doza sozlash)",
      "Homiladorlik (zaruriyat bo'lsa, 2 va 3 trimestrlarda ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, psevdomembranoz kolit, jigar fermentlari oshishi, safro \"shlake\" sindromi",
      "Allergik": "Teri toshmasi, qichima, eshakemi, bronxospazm, anafilaktoid reaksiyalar",
      "Qon tizimi": "Neytropeni, leykopeniya, trombotsitopeni, K vitamini sintezi kamayishi → qon ketish xavfi",
      "Mahalliy": "I/m da og'riq, I/v da flebiti"
    },
    dozadan: "Belgilari: diareya, qichima, toshma, tutqanoqlar. Davolash: simptomatik. Spetsifik antidot yo'q.",
    ozarotasir: [
      "Antikoagulyantlar (varfarin): K vitamini sintezi kamayishi → qon ketish xavfi oshadi — INR nazorati",
      "NSAIDlar, salisilat: qon ketish xavfini oshiradi",
      "Etanol: kombinatsiyadan saqlanish (disulfiramga o'xshash reaksiya)",
      "Aminoglikozidlar bilan: ko'plab grammanfiy bakteriyalarga sinergizm — biroq fizik aralashmaslik kerak"
    ],
    qollash: {
      kattalar: "I/m yoki I/v. Komponent nisbati 1:1. Sutkali doza: 2–4 g kombinatsiya (tsefoparzon 1–2 g + sulbaktam 1–2 g), har 12 soatda teng ulushga bo'lib. Og'ir yoki refraktar infeksiyalarda: 8 g/kun gacha (tsefoparzon 4 g + sulbaktam 4 g) oshirilishi mumkin.",
      bolalar: "Sutkali doza: 40–80 mg/kg/kun kombinatsiya (tsefoparzon 20–40 mg/kg + sulbaktam 20–40 mg/kg), har 6–12 soatda teng ulushga bo'lib."
    },
    chiqarish: "I/v va I/m yuborish uchun eritma tayyorlash kukuni (tsefoparzon + sulbaktam) flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 21. CEFOTAXIM — ЦЕФОТАКСИМА НАТРИЕВАЯ СОЛЬ | ATX: J01DA10
  // ─────────────────────────────────────────────────────────
  "J01DA10": {
    gruppa: "Tsefalosporinlar — III avlod",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `III avlod tsefalosporin antibiotigi. Bakteritsid ta'sir — hujayra devorining murein sintezini bloklaydi. Ko'plab gram musbat va grammanfiy bakteriyalarga, jumladan ko'plab beta-laktamaza hosil qiluvchi shtammlarga nisbatan faol. Streptococcus pneumoniae, N.gonorrhoeae, N.meningitidis, H.influenzae, E.coli, Klebsiella, Proteus, Salmonella, Shigella va boshqalarga samarali. Pseudomonas aeruginosa ga ta'sir cheklangan.`,
    farmakokinetika: {
      sorish: "I/m yoki I/v yo'l bilan qo'llaniladi (og'iz orqali so'rilmaydi). I/m dan tez so'riladi.",
      tarqalish: "To'qimalar va suyuqliqlarга keng tarqaladi. Terapevtik konsentratsiyani beyin-orqa miya suyuqligida ham yaratadi (meningitda). Plazma oqsillariga bog'lanish — 40%.",
      metabolizm: "Jigar orqali faol metabolit — dezatsetiltsefotaksimga aylanadi.",
      chiqarilish: "Asosan siydik orqali. T½ — taxminan 1 soat (metabolit T½ — 1,5 soat). Buyrak yetishmovchiligida uzayadi."
    },
    korsatmalar: [
      "Meningit (grammanfiy va grammusbat etologiyasi)",
      "Sepsiz, septitsemiya",
      "Nafas yo'llari infeksiyalari: pnevmoniya, bronxit",
      "Siydik yo'li infeksiyalari",
      "Suyak va bo'g'm infeksiyalari",
      "Teri va yumshoq to'qima infeksiyalari",
      "Ginekologik infeksiyalar",
      "Qorin bo'shlig'i infeksiyalari",
      "Gonoreya",
      "Operatsiyadan keyingi infeksiya profilaktikasi"
    ],
    qarrshi: [
      "Tsefalosporin va penitsilling preparatlariga oshirilgan sezgirlik",
      "Buyrak yetishmovchiligi (doza sozlash talab qilinadi)"
    ],
    nojoya: {
      "Allergik": "Teri toshmasi, eshakemi, qichima, isitma; kamdan-kam — anafilaktik shok, Stivens-Jonson sindromi",
      "Hazm tizimi": "Ko'ngil aynishi, qusish, diareya, jigar fermentlari oshishi, psevdomembranoz kolit",
      "Qon tizimi": "Neytropeni, leykopeniya, trombotsitopeni (kamdan-kam)",
      "Buyrak": "Kreatinin oshishi, nefrotoksiklik (kamdan-kam)"
    },
    dozadan: "Belgilari: tutqanoqlar, ong buzilishi (yuqori dozada). Davolash: dori to'xtatiladi, simptomatik terapiya.",
    ozarotasir: [
      "«Halqa» diuretiklar bilan birga: buyrak shikastlanishi xavfi oshadi",
      "Kanalcha sekretsiyasini kamaytiruvchi preparatlar: tsefoplatsin konsentratsiyasini oshiradi",
      "Aminoglikozidlar: sinergizm (lekin fizik aralashmaslik — alohida in'eksiya)"
    ],
    qollash: {
      kattalar: "I/m yoki I/v. Sutkali doza: 1–12 g, 2–4 ta qabul. O'rtacha og'irlikdagi infeksiya: 1 g har 12 soatda. Og'ir infeksiya: 2 g har 6–8 soatda (maks. 12 g/kun).",
      bolalar: "1 oydan katta: 50–180 mg/kg/kun, 4–6 ta qabul. Yangi tug'ilganlarda: 50–100 mg/kg/kun."
    },
    chiqarish: "I/v va I/m yuborish uchun eritma tayyorlash kukuni 1,0 g flakonda"
  },

  // ─────────────────────────────────────────────────────────
  // 22. FLUKONAZOL — MR Flukanza | ATX: D01AC15
  // Manba: "dorilar 3.docx"
  // ─────────────────────────────────────────────────────────
  "D01AC15": {
    uz: {
      gruppa: "Zamburug'larga qarshi preparatlar (azollar)",
      farmTasir: "Yuqori selektiv zamburug'larga qarshi vosita",
      farmakodinamika: `Triazol hosilasi — yuqori selektiv zamburug'larga qarshi preparat. Sitoxrom P450 ga bog'liq bo'lgan zamburug' fermentlarini ingiberlaydi. Zamburug' hujayrasidagi lanosterolning ergosterolga aylanishini bloklab, hujayra membrananasining o'tkazuvchanligini oshiradi, zamburug' o'sishi va replikatsiyasini buzadi. Candida spp. (umumlashgan kandidoz shakllari bilan), Cryptococcus neoformans va Coccidioides immitis (meningit va ensefalitni ham o'z ichiga olgan), Microsporum spp., Trichophyton spp., Blastomyces dermatidis, Histoplasma capsulatum ga nisbatan faol. Antiandrogen ta'siri yo'q.`,
      farmakokinetika: {
        sorish: "Og'iz orqali qabul qilganda yaxshi so'riladi — biologik qodalanish >90% (i/v bilan solishtirilla). Ovqat qabul qilish so'rilishga ta'sir qilmaydi. Cmax ochlik holatida qabul qilganda 0,5–1,5 soatda erishiladi.",
        tarqalish: "Taqsimlanish hajmi organizmdagi umumiy suvga yaqin. Plazma oqsillariga bog'lanish — 11–12% (past). Barcha tana suyuqliklari (so'lak, balg'am, BOM suyuqligi ~80%, amnion suyuqliq)ga keng tarqaladi. Shox qavatda yuqori konsentratsiya yaratadi va to'planadi. Yo'ldoshdan o'tadi.",
        metabolizm: "Jigar orqali minimal metabolizm. Aylanuvchi metabolitlar aniqlanmagan. Sitorom P450 fermentlarini o'rta darajada inhibe qiladi.",
        chiqarilish: "Asosan siydik orqali — ~80% o'zgarmagan holda. Klirensi kreatinin klirensiga proportsional. T½ — 30 soat (uzoq muddatli, kuniga bir marta qabul qilish imkonini beradi)."
      },
      korsatmalar: [
        "Kriptokokkoz (MNS infeksiyasi): kriptokokk meningiti — kamida 6–8 hafta davolash",
        "OIV/OITS kasallarida kriptokokk meningitining qayta rivojlanishini oldini olish",
        "Tizimli kandidioz: kandidemiya, disseminatsiyalangan kandidioz",
        "Shilliq qavat kandidozi: og'iz-halqum, qizilo'ngach, vaginit, balanitozida",
        "Dermatofitlar: oyoq mikozi (6 haftagacha), tana mikozi, qalin teri burmasi mikozi",
        "Ko'p rangli temratki (otrubevidiy lishay)",
        "Tirnoq onixomikozi: haftalik 150 mg, yangi tirnoq o'sgunicha",
        "Chuqur endemik mikozlar: koktsidioidomikoz, gistoplazmos (oylar davomida)",
        "Neytropenia yoki immunodepressiya bo'lgan bemorlarda zamburug' infeksiyalarining profilaktikasi"
      ],
      qarrshi: [
        "Flukonazol yoki boshqa azol preparatlariga o'ta sezgirlik",
        "16 yoshgacha bolalarda (ehtiyotkorlik bilan — maxsus ko'rsatmalar bo'yicha)",
        "Homiladorlik va emizish davri",
        "Terfenadin, sisaprid bilan birgalikda (QT uzayishi xavfi)",
        "Og'ir jigar yetishmovchiligi (ehtiyotkorlik bilan)"
      ],
      nojoya: {
        "Hazm tizimi": "Ishtaha susayishi, ta'm o'zgarishi, qorin og'rig'i, qusish, ko'ngil aynishi, ich ketishi, meteorizm; kamdan-kam — gepatit, sariqlik, gepatonekroz, transaminazalar oshishi",
        "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, ortiqcha charchash; kamdan-kam — tutqanoqlar",
        "Qon tizimi": "Leykopeni, trombotsitopeni (qon ketish, petexiyalar), neytropeni, agranulotsitoz",
        "Allergik": "Teri toshmasi; kamdan-kam — ko'p shaklli eritema (Stivens-Jonson sindromi), toksik epidermal nekroliz, anafilaktoid reaksiyalar (Kvinke shishi, eshakemi)",
        "Yurak-qon tomir": "QT intervali uzayishi, qorinchalar titrashi/xiltillashi",
        "Boshqa": "Buyrak funksiyasining buzilishi (kamdan-kam), alopetsiya, giperxolesterinemiya, gipertriglitseridemiya, gipokaliemiya"
      },
      dozadan: "Belgilari: gallyutsinatsiyalar, paranoid holat. Davolash: simptomatik (oshqozon yuvish, kuchaytirilgan diurez). Gemodializ 3 soat ichida konsentratsiyani 50% kamaytiradi.",
      ozarotasir: [
        "Varfarin: protrombin vaqtini 12% oshiradi — qon ketish xavfi, INR monitoringi zarur",
        "Midazolam (og'iz orqali): midazolam konsentratsiyasini oshiradi — psixomotor ta'sir kuchayadi",
        "Sisaprid: QT uzayishi, aritmiya — birgalikda ishlatish TAQIQLANGAN",
        "Rifampitsin: flukonazol AUC ni 25%, T½ ni 20% kamaytiradi — doza oshirish kerak bo'lishi mumkin",
        "Teofillin: klirensini 18% kamaytiradi — toksiklik belgilarini kuzating",
        "Sulfonilmochevina preparatlari (xlorpropamid, glibenklamid): T½ uzayadi, gipoglikemiya xavfi",
        "Takrolimus, tsiklosporin: ularning konsentratsiyasini oshiradi — nefrotoksiklik nazorati",
        "Terfenadin 400 mg/kun va undan ko'p dozada: QT uzayishi — TAQIQLANGAN",
        "Zidovudin: AUC ni 74% oshiradi — yon ta'sirlarni kuzating",
        "Gidroxtlorotiazid: flukonazol konsentratsiyasini 40% oshiradi"
      ],
      qollash: {
        kattalar: "Og'iz orqali yoki i/v tomchilab (20 mg/daqiqadan ko'p bo'lmay). Kriptokokkoz/disseminatsiyalangan kandidioz: 1-kuni 400 mg, so'ng 200–400 mg/kun. Og'iz-halqum kandidozi: 50–100 mg/kun 7–14 kun. Vaginit: 150 mg bir martalik. Onixomikoz: 150 mg haftada bir marta. Buyrak yetishmovchiligida: kreatinin klirensi <50 ml/daq bo'lsa doza 50% ga kamaytiriladi.",
        bolalar: "Kuniga bir marta. Kandidioz: 3 mg/kg/kun; tizimli kandidioz va kriptokokk infeksiyasi: 6–12 mg/kg/kun 10–12 hafta. Yangi tug'ilganlarda: 72 soatlik interval; 2–4 haftalik bolalarda: 48 soatlik interval."
      },
      chiqarish: "Kapsulalar 50 mg, 100 mg, 150 mg, 200 mg; Sirop 5 mg/ml (0,5%); 0,2% eritma i/v infuziya uchun"
    },
    ru: {
      gruppa: "Противогрибковые средства (азолы)",
      farmTasir: "Высокоселективный противогрибковый препарат",
      farmakodinamika: `Производное триазола — высокоселективное противогрибковое средство. Ингибирует ферменты грибов, зависимые от цитохрома Р450. Блокирует превращение ланостерола в эргостерол в клетке гриба, увеличивает проницаемость клеточной мембраны, нарушает рост и репликацию. Активен в отношении Candida spp. (включая генерализованные формы на фоне иммунодепрессии), Cryptococcus neoformans, Coccidioides immitis (включая менингит и энцефалит), Microsporum spp., Trichophyton spp., Blastomyces dermatidis, Histoplasma capsulatum. Не обладает антиандрогенной активностью.`,
      farmakokinetika: {
        sorish: "При приёме внутрь хорошо всасывается — биодоступность >90% (сравнима с в/в). Приём пищи не влияет на всасывание. Cmax натощак достигается через 0,5–1,5 часа.",
        tarqalish: "Объём распределения близок к общему содержанию воды в организме. Связывание с белками плазмы — 11–12% (низкое). Широко проникает во все биологические жидкости (слюна, мокрота, СМЖ ~80%, амниотическая жидкость). Накапливается в роговом слое кожи. Проникает через плаценту.",
        metabolizm: "Минимальный метаболизм в печени. Циркулирующие метаболиты не обнаружены. Умеренное ингибирование изоферментов цитохрома Р450.",
        chiqarilish: "Преимущественно почками — ~80% в неизменённом виде. Клиренс пропорционален КК. T½ — около 30 часов (позволяет принимать 1 раз в сутки)."
      },
      korsatmalar: [
        "Криптококкоз (инфекция ЦНС): криптококковый менингит — минимум 6–8 недель терапии",
        "Профилактика рецидива криптококкового менингита у больных ВИЧ/СПИД",
        "Системный кандидоз: кандидемия, диссеминированный кандидоз",
        "Кандидоз слизистых: орофарингеальный, пищеводный, вагинальный, баланит",
        "Дерматофитии: микоз стоп (до 6 нед), тела, паховой области",
        "Отрубевидный лишай",
        "Онихомикоз: 150 мг еженедельно до отрастания здорового ногтя",
        "Глубокие эндемические микозы: кокцидиоидомикоз, гистоплазмоз",
        "Профилактика грибковых инфекций при нейтропении/иммунодепрессии"
      ],
      qarrshi: [
        "Повышенная чувствительность к флуконазолу или другим азолам",
        "До 16 лет (с осторожностью по специальным показаниям)",
        "Беременность и грудное вскармливание",
        "Одновременный приём терфенадина, цизаприда (риск удлинения QT)",
        "Тяжёлая печёночная недостаточность (с осторожностью)"
      ],
      nojoya: {
        "Пищеварительная система": "Снижение аппетита, изменение вкуса, боль в животе, рвота, тошнота, диарея, метеоризм; редко — гепатит, желтуха, гепатонекроз, повышение трансаминаз",
        "Нервная система": "Головная боль, головокружение, повышенная утомляемость; редко — судороги",
        "Кроветворение": "Лейкопения, тромбоцитопения (кровотечения, петехии), нейтропения, агранулоцитоз",
        "Аллергические реакции": "Кожная сыпь; редко — синдром Стивенса–Джонсона, токсический эпидермальный некролиз, анафилактоидные реакции (отёк Квинке, крапивница)",
        "Сердечно-сосудистая": "Удлинение интервала QT, мерцание/трепетание желудочков",
        "Прочие": "Нарушение функции почек (редко), алопеция, гиперхолестеринемия, гипертриглицеридемия, гипокалиемия"
      },
      dozadan: "Симптомы: галлюцинации, параноидное поведение. Лечение: симптоматическое (промывание желудка, форсированный диурез). Гемодиализ в течение 3 часов снижает концентрацию на 50%.",
      ozarotasir: [
        "Варфарин: увеличивает протромбиновое время на 12% — риск кровотечений, контроль МНО",
        "Мидазолам (per os): значительно увеличивает концентрацию и психомоторные эффекты",
        "Цизаприд: удлинение QT, аритмия типа «пируэт» — ПРОТИВОПОКАЗАНО совместное применение",
        "Рифампицин: снижает AUC флуконазола на 25%, T½ на 20% — может потребоваться увеличение дозы",
        "Теофиллин: снижает клиренс на 18% — наблюдать за симптомами передозировки",
        "Производные сульфонилмочевины (хлорпропамид, глибенкламид): удлинение T½, риск гипогликемии",
        "Такролимус, циклоспорин: повышение их концентрации — нефротоксический контроль",
        "Терфенадин ≥400 мг/сут: удлинение QT — ПРОТИВОПОКАЗАНО",
        "Зидовудин: повышение AUC на 74% — мониторинг побочных эффектов",
        "Гидрохлоротиазид: повышает плазменную концентрацию флуконазола на 40%"
      ],
      qollash: {
        kattalar: "Внутрь или в/в капельно (не быстрее 20 мг/мин). Криптококкоз/диссеминированный кандидоз: в 1-й день 400 мг, затем 200–400 мг/сут. Орофарингеальный кандидоз: 50–100 мг/сут 7–14 дней. Вагинальный кандидоз: 150 мг однократно. Онихомикоз: 150 мг еженедельно. При КК <50 мл/мин: 50% от рекомендуемой дозы или обычная доза 1 раз в 2 дня.",
        bolalar: "1 раз в сутки. Кандидоз: 3 мг/кг/сут; системный кандидоз и криптококковая инфекция: 6–12 мг/кг/сут. Новорождённые: интервал 72 ч; 2–4 недели: интервал 48 ч."
      },
      chiqarish: "Капсулы 50 мг, 100 мг, 150 мг, 200 мг; Сироп 5 мг/мл (0,5%); Раствор 0,2% для в/в инфузий"
    },
    en: {
      gruppa: "Antifungal agents (azoles)",
      farmTasir: "Highly selective antifungal agent",
      farmakodinamika: `Triazole derivative — highly selective antifungal. Inhibits cytochrome P450-dependent fungal enzymes. Blocks conversion of lanosterol to ergosterol in fungal cells, increases membrane permeability, disrupts growth and replication. Active against Candida spp. (including generalized forms in immunocompromised patients), Cryptococcus neoformans, Coccidioides immitis (including meningitis and encephalitis), Microsporum spp., Trichophyton spp., Blastomyces dermatidis, Histoplasma capsulatum. No antiandrogenic activity.`,
      farmakokinetika: {
        sorish: "Well absorbed orally — bioavailability >90% (comparable to IV). Food does not affect absorption. Cmax fasting reached within 0.5–1.5 hours.",
        tarqalish: "Volume of distribution approximates total body water. Protein binding — 11–12% (low). Widely distributed to all body fluids (saliva, sputum, CSF ~80%, amniotic fluid). Accumulates in stratum corneum. Crosses the placenta.",
        metabolizm: "Minimal hepatic metabolism. No circulating metabolites detected. Moderate inhibition of cytochrome P450 isoenzymes.",
        chiqarilish: "Primarily renal — ~80% unchanged. Clearance proportional to CrCl. T½ approximately 30 hours (enables once-daily dosing)."
      },
      korsatmalar: [
        "Cryptococcosis (CNS infection): cryptococcal meningitis — minimum 6–8 weeks therapy",
        "Prevention of cryptococcal meningitis relapse in HIV/AIDS patients",
        "Systemic candidiasis: candidemia, disseminated candidiasis",
        "Mucosal candidiasis: oropharyngeal, esophageal, vaginal, balanitis",
        "Dermatophytoses: tinea pedis (up to 6 weeks), corporis, cruris",
        "Pityriasis versicolor (tinea versicolor)",
        "Onychomycosis: 150 mg weekly until healthy nail regrowth",
        "Deep endemic mycoses: coccidioidomycosis, histoplasmosis",
        "Prophylaxis of fungal infections in neutropenia/immunosuppression"
      ],
      qarrshi: [
        "Hypersensitivity to fluconazole or other azole antifungals",
        "Under 16 years (use with caution under special indications)",
        "Pregnancy and breastfeeding",
        "Concomitant use of terfenadine, cisapride (QT prolongation risk)",
        "Severe hepatic impairment (use with caution)"
      ],
      nojoya: {
        "Gastrointestinal": "Decreased appetite, taste disturbance, abdominal pain, vomiting, nausea, diarrhea, flatulence; rare — hepatitis, jaundice, hepatonecrosis, elevated transaminases",
        "Nervous system": "Headache, dizziness, fatigue; rare — seizures",
        "Hematologic": "Leukopenia, thrombocytopenia (bleeding, petechiae), neutropenia, agranulocytosis",
        "Allergic reactions": "Skin rash; rare — Stevens–Johnson syndrome, toxic epidermal necrolysis, anaphylactoid reactions (angioedema, urticaria)",
        "Cardiovascular": "QT interval prolongation, ventricular fibrillation/flutter",
        "Other": "Renal impairment (rare), alopecia, hypercholesterolemia, hypertriglyceridemia, hypokalemia"
      },
      dozadan: "Symptoms: hallucinations, paranoid behavior. Treatment: symptomatic (gastric lavage, forced diuresis). Hemodialysis for 3 hours reduces plasma concentration by 50%.",
      ozarotasir: [
        "Warfarin: increases prothrombin time by 12% — bleeding risk, INR monitoring required",
        "Oral midazolam: markedly increases concentration and psychomotor effects",
        "Cisapride: QT prolongation, torsades de pointes — CONTRAINDICATED",
        "Rifampicin: reduces fluconazole AUC by 25%, T½ by 20% — dose increase may be needed",
        "Theophylline: reduces clearance by 18% — monitor for toxicity",
        "Sulfonylureas (chlorpropamide, glibenclamide): prolonged T½, hypoglycemia risk",
        "Tacrolimus, cyclosporine: increased concentrations — nephrotoxicity monitoring",
        "Terfenadine ≥400 mg/day: QT prolongation — CONTRAINDICATED",
        "Zidovudine: increases AUC by 74% — monitor adverse effects",
        "Hydrochlorothiazide: increases fluconazole plasma concentration by 40%"
      ],
      qollash: {
        kattalar: "Oral or IV infusion (no faster than 20 mg/min). Cryptococcosis/disseminated candidiasis: day 1 — 400 mg, then 200–400 mg/day. Oropharyngeal candidiasis: 50–100 mg/day for 7–14 days. Vaginal candidiasis: 150 mg single dose. Onychomycosis: 150 mg weekly. CrCl <50 mL/min: 50% of recommended dose or usual dose every 2 days.",
        bolalar: "Once daily. Candidiasis: 3 mg/kg/day; systemic candidiasis and cryptococcal infection: 6–12 mg/kg/day for 10–12 weeks. Neonates: 72-hour interval; 2–4 weeks old: 48-hour interval."
      },
      chiqarish: "Capsules 50 mg, 100 mg, 150 mg, 200 mg; Syrup 5 mg/mL (0.5%); 0.2% solution for IV infusion"
    }
  }

};
