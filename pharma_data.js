// ═══════════════════════════════════════════════════════════
// PHARMA_DATA — Farmakologik ma'lumotlar (ATX kodi bo'yicha)
// Oxirgi yangilanish: 2026-06-10 | Fluconazole (D01AC15) + bildirishnoma tizimi
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
  },

// ─── J01DD62 · Cefoperazone + Sulbactam ───────────────────────────────────
"J01DD62": {
  uz: {
    gruppa: "III avlod sefalosporinlari + beta-laktamaza ingibitori",
    farmTasir: "Keng spektrli bakteritsid antibiotik kombinatsiyasi",
    farmakodinamika: `Sefalosporin III avlod (tsefoperazon) va β-laktamaza taqiqlovchi sulbaktamning kombinatsiyasi. Tsefoperazon bakteriya hujayra devori biosintezini mukopeptid sintezini inhibe qilish yo'li bilan buzadi. Sulbaktam β-laktamaza fermentlarining qaytmas inhibitori bo'lib, β-laktam antibiotiklarga chidamli mikroorganizmlarni zararsizlantiradi. Kombinatsiya Haemophilus influenzae, Bacteroides spp., Staphylococcus spp., Acinetobacter spp., Enterobacteriaceae oilasi vakillari, Pseudomonas aeruginosa va keng qamrovli anaerob flora (Bacteroides fragilis, Clostridium spp., Peptococcus spp.) ga nisbatan sinergistik faoliyat ko'rsatadi.`,
    farmakokinetika: {
      sorish: "V/v yoki v/m yuborilganda sulbaktam Cmax 130 mkg/ml, tsefoperazon Cmax 237 mkg/ml ga yetadi",
      tarqalish: "O't, qorin bo'shlig'i suyuqliklari, o'pka, suyak, tuxumdon, bachadon va boshqa to'qimalarda taqsimlanadi; platsenta to'sig'idan o'tadi",
      metabolizm: "Tsefoperazon asosan o't orqali, sulbaktam buyrak orqali chiqariladi",
      chiqarilish: "Sulbaktam T½ ≈ 1 soat; tsefoperazon T½ ≈ 1,7 soat. Sulbaktam doza ~84% buyrak, tsefoperazon ~75% o't orqali chiqariladi"
    },
    korsatmalar: [
      "Yuqori va quyi nafas yo'llari infeksiyalari (pnevmoniya, bronxit, plevra empiyemasi)",
      "Siydik chiqarish tizimi infeksiyalari (pielonefrit, sistit)",
      "Qorin bo'shlig'i infeksiyalari (peritonit, xoletsistit, xolangit)",
      "Septitsemiya va bakteriyemiya",
      "Markaziy asab tizimi infeksiyalari (meningit)",
      "Teri va yumshoq to'qimalar infeksiyalari",
      "Suyak va bo'g'imlar infeksiyalari",
      "Kichik chanoq organlari infeksiyalari (endometrit, gonoreya)",
      "Jarrohlik asoratlari profilaktikasi"
    ],
    qarrshi: [
      "Sefalosporin va penitsillinlarga o'ta sezuvchanlik",
      "Og'ir jigar yetishmovchiligi (nazorat ostida ishlatish)",
      "Homiladorlik (I trimester — ehtiyotkorlik bilan)",
      "Yangi tug'ilgan chaqaloqlarda (ehtiyotkorlik talab etiladi)"
    ],
    nojoya: {
      "Oshqozon-ichak tizimi": "Ko'ngil aynishi, qusish, diareya, psevdomembranoz kolit",
      "Allergiya": "Teri toshmasi, qichima, anafilaktik shok, Stevens-Johnson sindromi",
      "Qon tizimi": "Neytropeniya, trombotsitopeniya, gipoprotrombinемiya, gemolitik anemiya",
      "Jigar": "Transaminazalar va ishqoriy fosfataza faolligi oshishi",
      "Mahalliy reaksiyalar": "Flebit (v/v), og'riq (v/m)"
    },
    dozadan: "Nevrologik buzilishlar (tirishish, ensefalopatiya). Gemodiалiz yoki peritoneal dializ ko'rsatilgan.",
    ozarotasir: [
      "Aminoglikozidlar — nefrotoksiklik xavfi oshadi (kombinatsiyadan saqlaning)",
      "Spirt (etanol) — antabusga o'xshash effekt (disulfiram reaksiyasi)",
      "Antikoagulyantlar — protrombin vaqti uzayadi",
      "Bakteriostatik antibiotiklar — bakteritsid samaradorlikni kamaytiradi"
    ],
    qollash: {
      kattalar: "Sutkalik doza 2–4 g (1:1 nisbatda), har 12 soatda. Og'ir infeksiyalarda 8 g/sutka ga oshirish mumkin. Maks. sulbaktam doza 4 g/sutka.",
      bolalar: "40–80 mg/kg/sutka (1:1), har 6–12 soatda. Og'ir holatlarda 160 mg/kg/sutka gacha."
    },
    chiqarish: "V/v va v/m infuziya uchun kukun: 1 g+1 g, 2 g+2 g flakonlarda"
  },
  ru: {
    gruppa: "Цефалоспорины III поколения + ингибитор бета-лактамаз",
    farmTasir: "Комбинированный бактерицидный антибиотик широкого спектра",
    farmakodinamika: `Комбинация цефоперазона (цефалоспорин III поколения) и сульбактама (необратимый ингибитор β-лактамаз). Цефоперазон нарушает синтез мукопептида клеточной стенки бактерий. Сульбактам защищает цефоперазон от разрушения β-лактамазами резистентных штаммов и проявляет синергизм в отношении широкого спектра аэробных и анаэробных микроорганизмов: Haemophilus influenzae, Bacteroides spp., Staphylococcus spp., Acinetobacter spp., Enterobacteriaceae, Pseudomonas aeruginosa, Bacteroides fragilis, Clostridium spp.`,
    farmakokinetika: {
      sorish: "При в/в введении 2 г: Cmax сульбактама 130 мкг/мл, цефоперазона 237 мкг/мл",
      tarqalish: "Широко распределяется в ткани и жидкости: желчь, лёгкие, кости, органы малого таза; проникает через плацентарный барьер",
      metabolizm: "Цефоперазон — преимущественно билиарная экскреция; сульбактам — почечная элиминация",
      chiqarilish: "T½ сульбактама ≈ 1 ч; цефоперазона ≈ 1,7 ч. Сульбактам ~84% почками, цефоперазон ~75% с желчью"
    },
    korsatmalar: [
      "Инфекции верхних и нижних дыхательных путей",
      "Инфекции мочевыводящих путей",
      "Перитонит, холецистит, холангит",
      "Сепсис, бактериемия",
      "Менингит",
      "Инфекции кожи и мягких тканей",
      "Инфекции костей и суставов",
      "Воспалительные заболевания органов малого таза, гонорея",
      "Профилактика послеоперационных инфекций"
    ],
    qarrshi: [
      "Гиперчувствительность к цефалоспоринам и пенициллинам",
      "Тяжёлая печёночная недостаточность",
      "Беременность I триместр — с осторожностью",
      "Новорождённые — под строгим контролем"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, диарея, псевдомембранозный колит",
      "Аллергия": "Кожная сыпь, зуд, анафилактический шок, синдром Стивенса–Джонсона",
      "Кроветворение": "Нейтропения, тромбоцитопения, гипопротромбинемия, гемолитическая анемия",
      "Печень": "Повышение АЛТ, АСТ, щелочной фосфатазы",
      "Местные": "Флебит (в/в), болезненность (в/м)"
    },
    dozadan: "Неврологические расстройства (судороги, энцефалопатия). Показан гемодиализ или перитонеальный диализ.",
    ozarotasir: [
      "Аминогликозиды — повышен риск нефротоксичности",
      "Этанол — дисульфирамоподобная реакция",
      "Антикоагулянты — удлинение протромбинового времени",
      "Бактериостатические антибиотики — снижают бактерицидный эффект"
    ],
    qollash: {
      kattalar: "2–4 г/сут (1:1) каждые 12 ч в/в или в/м. При тяжёлых инфекциях до 8 г/сут. Макс. доза сульбактама 4 г/сут.",
      bolalar: "40–80 мг/кг/сут (1:1) каждые 6–12 ч. При тяжёлых инфекциях до 160 мг/кг/сут."
    },
    chiqarish: "Порошок для в/в и в/м инъекций: 1 г+1 г, 2 г+2 г во флаконах"
  },
  en: {
    gruppa: "Third-generation cephalosporins + beta-lactamase inhibitor",
    farmTasir: "Broad-spectrum bactericidal combination antibiotic",
    farmakodinamika: `Combination of cefoperazone (third-generation cephalosporin) and sulbactam (irreversible β-lactamase inhibitor). Cefoperazone disrupts bacterial cell wall synthesis by inhibiting transpeptidase-mediated cross-linking of peptidoglycan. Sulbactam protects cefoperazone from hydrolysis by β-lactamases produced by resistant organisms and demonstrates synergistic activity against Haemophilus influenzae, Bacteroides spp., Staphylococcus spp., Acinetobacter spp., Enterobacteriaceae, Pseudomonas aeruginosa, and anaerobes including Bacteroides fragilis and Clostridium spp.`,
    farmakokinetika: {
      sorish: "IV administration of 2 g: Cmax sulbactam 130 mcg/mL, cefoperazone 237 mcg/mL",
      tarqalish: "Widely distributed into tissues and fluids: bile, lungs, bone, pelvic organs; crosses placental barrier",
      metabolizm: "Cefoperazone primarily biliary excretion; sulbactam primarily renal elimination",
      chiqarilish: "T½ sulbactam ≈ 1 h; cefoperazone ≈ 1.7 h. Sulbactam ~84% renal, cefoperazone ~75% biliary"
    },
    korsatmalar: [
      "Upper and lower respiratory tract infections",
      "Urinary tract infections",
      "Peritonitis, cholecystitis, cholangitis",
      "Septicaemia and bacteraemia",
      "Meningitis",
      "Skin and soft tissue infections",
      "Bone and joint infections",
      "Pelvic inflammatory disease, gonorrhoea",
      "Prophylaxis of postoperative infections"
    ],
    qarrshi: [
      "Hypersensitivity to cephalosporins or penicillins",
      "Severe hepatic impairment",
      "Pregnancy (first trimester — caution)",
      "Neonates — use with strict monitoring"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, diarrhoea, pseudomembranous colitis",
      "Hypersensitivity": "Rash, pruritus, anaphylaxis, Stevens–Johnson syndrome",
      "Haematological": "Neutropenia, thrombocytopenia, hypoprothrombinaemia, haemolytic anaemia",
      "Hepatic": "Elevated ALT, AST, alkaline phosphatase",
      "Local": "Phlebitis (IV), pain at injection site (IM)"
    },
    dozadan: "Neurological toxicity (seizures, encephalopathy). Haemodialysis or peritoneal dialysis indicated.",
    ozarotasir: [
      "Aminoglycosides — increased nephrotoxicity risk",
      "Ethanol — disulfiram-like reaction",
      "Anticoagulants — prolonged prothrombin time",
      "Bacteriostatic antibiotics — reduced bactericidal effect"
    ],
    qollash: {
      kattalar: "2–4 g/day (1:1 ratio) every 12 h IV or IM. Severe infections up to 8 g/day. Max sulbactam dose 4 g/day.",
      bolalar: "40–80 mg/kg/day (1:1) every 6–12 h. Severe infections up to 160 mg/kg/day."
    },
    chiqarish: "Powder for IV and IM injection: 1 g+1 g, 2 g+2 g vials"
  }
},

// ─── J01DA11 · Ceftazidime ────────────────────────────────────────────────
"J01DA11": {
  uz: {
    gruppa: "III avlod sefalosporinlari",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `Tseftazidim — III avlod sefalosporini bo'lib, bakteriyalarning hujayra devori biosintezini inhibe qilish orqali bakteritsid ta'sir ko'rsatadi. Ko'plab β-laktamazalarga chidamli. Gram-manfiy mikroorganizmlar — Haemophilus influenzae, Neisseria spp., Enterobacteriaceae (E. coli, Klebsiella, Proteus, Serratia, Enterobacter, Citrobacter), Acinetobacter spp., Pseudomonas aeruginosa ga yuqori faol. Gram-musbat bakteriyalar — Streptococcus pneumoniae, S. pyogenes, metitsillin-sezgir Staphylococcus aureus ga ham ta'sir ko'rsatadi. Anaerob flora (Bacteroides spp., Clostridium perfringens, Peptostreptococcus spp.) ga o'rtacha faol.`,
    farmakokinetika: {
      sorish: "V/m 0,5 g da Cmax 17 mg/l, 1 g da 39 mg/l; Tmax ≈ 1 soat",
      tarqalish: "Zardob oqsillariga bog'lanish < 15%. Suyak, yurak to'qimasi, o't, bronx sekreti, sinovjal va plevrа suyuqliklariga yaxshi tarqaladi; BBO to'sig'idan kam o'tadi, meningit sharoitida 4–20 mg/l ga yetadi",
      metabolizm: "Jigar tomonidan metabolizmga uchramaydi",
      chiqarilish: "T½ ≈ 1,9 soat (yangi tug'ilganlarda 3–4 marta uzun). 80–90% buyrak orqali o'zgarmagan holda, 24 soat ichida chiqariladi"
    },
    korsatmalar: [
      "Nafas yo'llari infeksiyalari: bronxit, pnevmoniya, o'pka abstsessi, plevra empiyemasi",
      "LOR infeksiyalari: o'rta otit, mastoidit, sinusit",
      "Siydik-tanosil tizimi infeksiyalari: pielonefrit, sistit, prostatit",
      "Teri va yumshoq to'qimalar infeksiyalari: flegmona, yara infeksiyalari",
      "Suyak va bo'g'im infeksiyalari: osteomielit, septik artrit",
      "Qorin bo'shlig'i infeksiyalari: xolangit, peritonit, divertikulit",
      "Kichik chanoq organlari infeksiyalari, gonoreya",
      "Sepsis, meningit",
      "Dializ bilan bog'liq infeksiyalar, kistik fibroz"
    ],
    qarrshi: [
      "Sefalosporinlarga o'ta sezuvchanlik",
      "Penitsillinlarga allergiya anamnezida (ehtiyotkorlik bilan)",
      "Homiladorlik I trimestri (ehtiyotkorlik)",
      "Yangi tug'ilganlar (ehtiyotkorlik)"
    ],
    nojoya: {
      "Allergiya": "Urtikaria, anafilaktik shok, Stevens-Johnson sindromi, Lyell sindromi",
      "Asab tizimi": "Bosh og'riq, bosh aylanishi, paresteziyalar, tirishishlar, ensefalopati",
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, diareya, psevdomembranoz kolit, xolestaz",
      "Qon tizimi": "Leykopeniya, neytropeniya, trombotsitopeniya, gemolitik anemiya",
      "Siydik tizimi": "Toksik nefropatiya, buyrak funktsiyasi buzilishi",
      "Mahalliy": "Flebit (v/v), og'riq va qattiqlashish (v/m)"
    },
    dozadan: "Tirishishlar, ensefalopati, asteriksis, neyromotor qo'zg'aluvchanlik, koma. Gemodiалiz ko'rsatiladi.",
    ozarotasir: [
      "Petlali diuretiklar, aminoglikozidlar, vankomisin — nefrotoksiklik kuchayadi",
      "Bakteriostatik antibiotiklar (xloramfenikol) — samara kamayadi",
      "Etanol — disulfiramga o'xshash ta'sir"
    ],
    qollash: {
      kattalar: "1 g har 8–12 soatda yoki 2 g har 12 soatda v/v yoki v/m. Og'ir infeksiyalarda 2 g har 8 soatda. Siydik yo'li infeksiyasi: 0,25 g x 2.",
      bolalar: "2 oydan katta: 30–50 mg/kg/sutka 3 ta yuborishda; og'ir holatlarda 150 mg/kg/sutka, maks. 6 g/sutka. Yangi tug'ilganlar: 30 mg/kg/sutka 2 marta."
    },
    chiqarish: "V/v va v/m inyeksiya uchun kukun: 0,25 g; 0,5 g; 1 g; 2 g flakonlarda"
  },
  ru: {
    gruppa: "Цефалоспорины III поколения",
    farmTasir: "Антибактериальный препарат широкого спектра, бактерицидный",
    farmakodinamika: `Цефтазидим — цефалоспорин III поколения с широким антибактериальным спектром. Оказывает бактерицидное действие путём нарушения синтеза клеточной стенки микроорганизмов. Устойчив к действию большинства β-лактамаз. Высокоактивен в отношении грамотрицательных бактерий: Haemophilus influenzae, Neisseria spp., представителей семейства Enterobacteriaceae (E. coli, Klebsiella, Proteus, Serratia, Enterobacter, Citrobacter), Acinetobacter spp., Pseudomonas aeruginosa. Активен в отношении грамположительных кокков (Streptococcus pneumoniae, S. pyogenes, метициллинчувствительных штаммов Staphylococcus aureus) и ряда анаэробов.`,
    farmakokinetika: {
      sorish: "В/м 0,5 г: Cmax 17 мг/л; 1 г: 39 мг/л; Tmax ≈ 1 ч",
      tarqalish: "Связь с белками плазмы < 15%. Проникает в кости, ткань сердца, жёлчь, синовиальную, плевральную и перитонеальную жидкости. Через ГЭБ — слабо, при менингите 4–20 мг/л",
      metabolizm: "Не метаболизируется в печени",
      chiqarilish: "T½ ≈ 1,9 ч. 80–90% выводится почками в неизменённом виде в течение 24 ч"
    },
    korsatmalar: [
      "Инфекции дыхательных путей (бронхит, пневмония, абсцесс лёгкого, эмпиема плевры)",
      "ЛОР-инфекции (средний отит, мастоидит, синусит)",
      "Инфекции мочевыводящих путей (пиелонефрит, цистит, простатит)",
      "Инфекции кожи и мягких тканей",
      "Инфекции костей и суставов (остеомиелит, септический артрит)",
      "Инфекции ЖКТ и брюшной полости",
      "Инфекции органов малого таза, гонорея",
      "Сепсис, менингит",
      "Инфекции при диализе, муковисцидоз"
    ],
    qarrshi: [
      "Гиперчувствительность к цефалоспоринам",
      "Аллергия на пенициллины в анамнезе (с осторожностью)",
      "Беременность I триместр (с осторожностью)",
      "Новорождённые (с осторожностью)"
    ],
    nojoya: {
      "Аллергические": "Крапивница, анафилактический шок, синдром Стивенса–Джонсона, синдром Лайелла",
      "ЦНС": "Головная боль, судороги, энцефалопатия, парестезии",
      "ЖКТ": "Тошнота, рвота, диарея, псевдомембранозный колит, холестаз",
      "Кроветворение": "Лейкопения, нейтропения, тромбоцитопения, гемолитическая анемия",
      "Почки": "Токсическая нефропатия, нарушение функции почек",
      "Местные": "Флебит (в/в), болезненность (в/м)"
    },
    dozadan: "Судороги, энцефалопатия, астериксис, нервно-мышечная возбудимость, кома. Показан гемодиализ.",
    ozarotasir: [
      "Петлевые диуретики, аминогликозиды, ванкомицин — нефротоксичность",
      "Бактериостатические антибиотики (хлорамфеникол) — снижение эффекта",
      "Этанол — дисульфирамоподобная реакция"
    ],
    qollash: {
      kattalar: "1 г каждые 8–12 ч или 2 г каждые 12 ч в/в или в/м. Тяжёлые инфекции: 2 г каждые 8 ч. Макс. доза 6 г/сут.",
      bolalar: "С 2 мес: 30–50 мг/кг/сут в 3 введения; тяжёлые инфекции 150 мг/кг/сут, макс. 6 г/сут. Новорождённые: 30 мг/кг/сут в 2 введения."
    },
    chiqarish: "Порошок для в/в и в/м инъекций: 0,25 г; 0,5 г; 1 г; 2 г во флаконах"
  },
  en: {
    gruppa: "Third-generation cephalosporins",
    farmTasir: "Broad-spectrum bactericidal antibiotic",
    farmakodinamika: `Ceftazidime is a third-generation cephalosporin that exerts bactericidal activity by inhibiting bacterial cell wall synthesis. It is stable against most β-lactamases. Highly active against Gram-negative organisms including Haemophilus influenzae, Neisseria spp., Enterobacteriaceae (E. coli, Klebsiella, Proteus, Serratia, Enterobacter, Citrobacter), Acinetobacter spp., and Pseudomonas aeruginosa. Active against Gram-positive cocci (Streptococcus pneumoniae, S. pyogenes, methicillin-susceptible Staphylococcus aureus) and selected anaerobes.`,
    farmakokinetika: {
      sorish: "IM 0.5 g: Cmax 17 mg/L; 1 g: 39 mg/L; Tmax ≈ 1 h",
      tarqalish: "Protein binding < 15%. Distributes into bone, cardiac tissue, bile, synovial, pleural and peritoneal fluids. Poor CNS penetration; therapeutic levels (4–20 mg/L) achieved in meningitis",
      metabolizm: "Not metabolised in the liver",
      chiqarilish: "T½ ≈ 1.9 h. 80–90% excreted unchanged in urine within 24 h"
    },
    korsatmalar: [
      "Respiratory tract infections (bronchitis, pneumonia, lung abscess, pleural empyema)",
      "ENT infections (otitis media, mastoiditis, sinusitis)",
      "Urinary tract infections (pyelonephritis, cystitis, prostatitis)",
      "Skin and soft tissue infections",
      "Bone and joint infections (osteomyelitis, septic arthritis)",
      "Intra-abdominal infections",
      "Gynaecological infections, gonorrhoea",
      "Septicaemia, meningitis",
      "Dialysis-associated infections, cystic fibrosis"
    ],
    qarrshi: [
      "Hypersensitivity to cephalosporins",
      "History of penicillin allergy (caution)",
      "Pregnancy first trimester (caution)",
      "Neonates (caution)"
    ],
    nojoya: {
      "Hypersensitivity": "Urticaria, anaphylaxis, Stevens–Johnson syndrome, Lyell syndrome",
      "CNS": "Headache, seizures, encephalopathy, paraesthesiae",
      "Gastrointestinal": "Nausea, vomiting, diarrhoea, pseudomembranous colitis, cholestasis",
      "Haematological": "Leucopenia, neutropenia, thrombocytopenia, haemolytic anaemia",
      "Renal": "Toxic nephropathy, renal impairment",
      "Local": "Phlebitis (IV), pain at injection site (IM)"
    },
    dozadan: "Seizures, encephalopathy, asterixis, neuromuscular excitability, coma. Haemodialysis indicated.",
    ozarotasir: [
      "Loop diuretics, aminoglycosides, vancomycin — increased nephrotoxicity",
      "Bacteriostatic antibiotics (chloramphenicol) — antagonism",
      "Ethanol — disulfiram-like reaction"
    ],
    qollash: {
      kattalar: "1 g every 8–12 h or 2 g every 12 h IV or IM. Severe infections: 2 g every 8 h. Max 6 g/day.",
      bolalar: "Over 2 months: 30–50 mg/kg/day in 3 doses; severe infections 150 mg/kg/day, max 6 g/day. Neonates: 30 mg/kg/day in 2 doses."
    },
    chiqarish: "Powder for IV and IM injection: 0.25 g, 0.5 g, 1 g, 2 g vials"
  }
},

// ─── J01DH04 · Doripenem ──────────────────────────────────────────────────
"J01DH04": {
  uz: {
    gruppa: "Karbapenemlar",
    farmTasir: "Ultra keng spektrli bakteritsid antibiotik",
    farmakodinamika: `Doripenem — sintetik karbapenem antibiotik. Penitsillinga bog'lovchi oqsillarni (PBO) inaktivatsiya qilish orqali bakteriya hujayra devori sintezini buzadi va hujayra halokiga olib keladi. Imipenem va meropenemga nisbatan Pseudomonas aeruginosa ga 2–4 marta faolroq. Aerob gram-musbat (E. faecalis, metitsillin-sezgir Staphylococcus spp., Streptococcus spp.) va gram-manfiy (Acinetobacter baumannii, Citrobacter spp., Enterobacter spp., E. coli, H. influenzae, Klebsiella pneumoniae, P. aeruginosa, Serratia marcescens) hamda anaerob bakteriyalarga (Bacteroides fragilis, Clostridium spp., Peptostreptococcus spp.) faol. Ko'plab β-laktamazalarga, jumladan ESBL lar ga chidamli.`,
    farmakokinetika: {
      sorish: "Faqat parenteral (v/v) yo'l bilan qo'llaniladi",
      tarqalish: "Zardob oqsillariga bog'lanish ≈ 8%. Ko'plab to'qima va suyuqliklarda terapevtik konsentratsiyalarga erishiladi",
      metabolizm: "Jigar tomonidan deyarli metabolizmga uchramaydi",
      chiqarilish: "T½ ≈ 1 soat. 70–80% buyrak orqali o'zgarmagan holda chiqariladi"
    },
    korsatmalar: [
      "Nosokomial (kasalxona) pnevmoniyasi, shu jumladan IVL bilan bog'liq",
      "Murakkab qorin bo'shlig'i ichki infeksiyalari",
      "Murakkab siydik yo'li infeksiyalari, jumladan pielonefrit"
    ],
    qarrshi: [
      "Doripenem yoki boshqa karbapenеmlarga o'ta sezuvchanlik",
      "β-laktam antibiotiklarga og'ir allergiya",
      "18 yoshgacha bolalar (xavfsizlik ma'lumotlari yetarli emas)"
    ],
    nojoya: {
      "Bosh": "Bosh og'riq (10%) — eng ko'p uchraydigan",
      "Oshqozon-ichak": "Diareya (9%), ko'ngil aynishi (8%), transaminazalar oshishi; Clostridium difficile koliti (kam)",
      "Teri": "Qichima, toshmа",
      "Allergiya": "Anafilaktoid reaksiyalar; juda kam — toksik epidermal nekroliz, Stevens-Johnson sindromi",
      "Qon tizimi": "Neytropeniya, trombotsitopeniya (kam)",
      "Boshqa": "Og'iz bo'shlig'i va vaginal kandidoz"
    },
    dozadan: "Ma'lumot cheklangan; simptomatik davolash ko'rsatilgan.",
    ozarotasir: [
      "Valproat kislotasi — qon plazmasidagi konsentratsiyasi keskin kamayadi (epilepsiya xurujlari xavfi)",
      "Probenesid — doripenem klirensi kamayadi, kombinatsiyadan saqlaning"
    ],
    qollash: {
      kattalar: "500 mg har 8 soatda 1–4 soatlik v/v infuziya. Nosokomial pnevmoniya: 7–14 kun; qorin infeksiyalari: 5–14 kun; siydik yo'li: 10 kun. KK 30–50 ml/daq: 250 mg har 8 soatda; KK 10–30: 250 mg har 12 soatda.",
      bolalar: "18 yoshgacha qo'llanilmaydi"
    },
    chiqarish: "Infuzion eritma tayyorlash uchun kukun: 500 mg flakonlarda"
  },
  ru: {
    gruppa: "Карбапенемы",
    farmTasir: "Синтетический антибиотик сверхширокого спектра, бактерицидный",
    farmakodinamika: `Дорипенем — синтетический карбапенем широкого спектра действия. Оказывает бактерицидный эффект путём инактивации пенициллинсвязывающих белков (ПСБ), что нарушает синтез клеточной стенки бактерий. По сравнению с имипенемом и меропенемом в 2–4 раза активнее в отношении Pseudomonas aeruginosa. Активен в отношении аэробных грамположительных и грамотрицательных бактерий (включая ESBL-продуцирующие штаммы), а также анаэробов (Bacteroides fragilis, Clostridium spp., Peptostreptococcus spp.). Устойчив к гидролизу большинством β-лактамаз.`,
    farmakokinetika: {
      sorish: "Применяется только парентерально (в/в)",
      tarqalish: "Связь с белками плазмы ≈ 8%. Достигает терапевтических концентраций в большинстве тканей и жидкостей",
      metabolizm: "Практически не метаболизируется в печени",
      chiqarilish: "T½ ≈ 1 ч. 70–80% выводится почками в неизменённом виде"
    },
    korsatmalar: [
      "Нозокомиальная пневмония, в том числе ВАП",
      "Осложнённые интраабдоминальные инфекции",
      "Осложнённые инфекции мочевыводящих путей, включая пиелонефрит"
    ],
    qarrshi: [
      "Гиперчувствительность к дорипенему или другим карбапенемам",
      "Тяжёлые аллергические реакции на β-лактамы",
      "Возраст до 18 лет"
    ],
    nojoya: {
      "ЦНС": "Головная боль (10%) — наиболее частый нежелательный эффект",
      "ЖКТ": "Диарея (9%), тошнота (8%), повышение трансаминаз; колит, вызванный C. difficile (редко)",
      "Кожа": "Зуд, сыпь",
      "Аллергические": "Анафилактоидные реакции; очень редко — ТЭН, синдром Стивенса–Джонсона",
      "Кроветворение": "Нейтропения, тромбоцитопения (нечасто)",
      "Прочие": "Кандидоз полости рта, вагинальный кандидоз"
    },
    dozadan: "Данных недостаточно; симптоматическая терапия.",
    ozarotasir: [
      "Вальпроевая кислота — значительное снижение концентрации в плазме, риск эпилептических приступов",
      "Пробенецид — снижение клиренса дорипенема, комбинация не рекомендуется"
    ],
    qollash: {
      kattalar: "500 мг каждые 8 ч в/в инфузия 1–4 ч. Нозокомиальная пневмония: 7–14 сут; интраабдоминальные: 5–14 сут; мочевые пути: 10 сут. КК 30–50 мл/мин: 250 мг каждые 8 ч; КК 10–30: 250 мг каждые 12 ч.",
      bolalar: "До 18 лет не применяется"
    },
    chiqarish: "Порошок для приготовления раствора для инфузий 500 мг во флаконах"
  },
  en: {
    gruppa: "Carbapenems",
    farmTasir: "Ultra-broad-spectrum bactericidal synthetic antibiotic",
    farmakodinamika: `Doripenem is a synthetic carbapenem antibiotic that exerts bactericidal activity through inactivation of penicillin-binding proteins (PBPs), thereby disrupting bacterial cell wall synthesis. It is 2–4 times more potent against Pseudomonas aeruginosa than imipenem or meropenem. Active against aerobic Gram-positive and Gram-negative organisms (including ESBL-producing strains) and anaerobes (Bacteroides fragilis, Clostridium spp., Peptostreptococcus spp.). Stable against hydrolysis by most β-lactamases.`,
    farmakokinetika: {
      sorish: "Parenteral (IV) use only",
      tarqalish: "Protein binding ≈ 8%. Achieves therapeutic concentrations in most tissues and fluids",
      metabolizm: "Minimally metabolised in the liver",
      chiqarilish: "T½ ≈ 1 h. 70–80% excreted unchanged in urine"
    },
    korsatmalar: [
      "Hospital-acquired (nosocomial) pneumonia, including ventilator-associated pneumonia",
      "Complicated intra-abdominal infections",
      "Complicated urinary tract infections, including pyelonephritis"
    ],
    qarrshi: [
      "Hypersensitivity to doripenem or other carbapenems",
      "Severe β-lactam allergy",
      "Age under 18 years"
    ],
    nojoya: {
      "CNS": "Headache (10%) — most frequent adverse effect",
      "Gastrointestinal": "Diarrhoea (9%), nausea (8%), elevated transaminases; C. difficile colitis (rare)",
      "Dermatological": "Pruritus, rash",
      "Hypersensitivity": "Anaphylactoid reactions; very rarely TEN, Stevens–Johnson syndrome",
      "Haematological": "Neutropenia, thrombocytopenia (uncommon)",
      "Other": "Oral and vaginal candidiasis"
    },
    dozadan: "Limited data; symptomatic management.",
    ozarotasir: [
      "Valproic acid — significant reduction in plasma concentration, risk of seizures",
      "Probenecid — reduced doripenem clearance; combination not recommended"
    ],
    qollash: {
      kattalar: "500 mg every 8 h IV infusion over 1–4 h. Nosocomial pneumonia: 7–14 days; intra-abdominal: 5–14 days; UTI: 10 days. CrCl 30–50 mL/min: 250 mg every 8 h; CrCl 10–30: 250 mg every 12 h.",
      bolalar: "Not recommended under 18 years"
    },
    chiqarish: "Powder for solution for infusion: 500 mg vials"
  }
},

// ─── J01AA02 · Doxycycline ────────────────────────────────────────────────
"J01AA02": {
  uz: {
    gruppa: "Tetratsiklin antibiotiklari",
    farmTasir: "Keng spektrli bakteriostatik antibiotik",
    farmakodinamika: `Doksitsiklin — metatsiklindan olingan yarim sintetik tetratsiklin. Bakteriostatik mexanizm: hujayra ichiga kirib, ribosomaning 30S kichik bo'linmasiga bog'lanadi va aminoatsil-tRNK ning ribosoma bilan bog'lanishini inhibe qiladi, bu esa oqsil biosintezini to'xtatadi. Hujayra devori sinteziga ta'sir qilmaydi. Gram-musbat (Staphylococcus spp., Streptococcus spp., Clostridium spp., Listeria spp.) va gram-manfiy (Neisseria gonorrhoeae, N. meningitidis, Haemophilus influenzae, Klebsiella spp., E. coli, Shigella spp., Bacteroides spp.) mikroorganizmlarga, shuningdek hujayra ichidagi patogenlarga (Chlamydia, Mycoplasma, Rickettsia, Treponema, Borrelia) faol. Haemophilus influenzae (91–96%) va hujayra ichidagi patogenlarga eng yuqori sezuvchanlik.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda so'rilish juda yuqori — ~100%. Lipidlarda eruvchanligi yuqori. 200 mg qabul qilgandan 2,5 soatda Cmax ≈ 2,5 mkg/ml",
      tarqalish: "Zardob oqsillariga bog'lanish 80–90%. Jigar, buyrak, o'pka, taloq, suyak, tish, prostata, ko'z to'qimasiga, plevrа va astsit suyuqliklariga tez tarqaladi. Orqa miya suyuqligiga kam o'tadi (plazma darajasining 10–20%). Platsenta to'sig'idan o'tadi, ona sutiga chiqadi",
      metabolizm: "Jigar tomonidan 30–60% metabolizmga uchraydi. Enterogematik retsirkulatsiya mavjud",
      chiqarilish: "T½ = 16–24 soat. 40% doza 72 soatda buyrak orqali chiqariladi; qolgan qismi o't va najas bilan"
    },
    korsatmalar: [
      "Nafas yo'llari va LOR organlari infeksiyalari",
      "Oshqozon-ichak trakti infeksiyalari",
      "Teri va yumshoq to'qimalarning yiringli infeksiyalari (akne vulgaris)",
      "Siydik-tanosil infeksiyalari (gonoreya, birlamchi va ikkilamchi sifilis, xlamidioz)",
      "Toshma tif, brutselloz, rikkettsiozlar",
      "Osteomielit, traxoma, xlamidioz",
      "Leptospiroz, Lym kasalligi"
    ],
    qarrshi: [
      "Tetratsiklin antibiotiklarga o'ta sezuvchanlik",
      "Homiladorlik (tish emali va suyak skelet rivojlanishiga ta'sir)",
      "8 yoshgacha bolalar (suyak va tishda kalsiy bilan eruvchan kompleks hosil qiladi)",
      "Og'ir jigar yetishmovchiligi",
      "Porfiriya, leykopeniya, miasteniya (v/v)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, anoreksia, diareya, ezofagit, gepatotoksiklik",
      "Qon tizimi": "Neytropeniya, trombotsitopeniya, gemolitik anemiya",
      "Allergiya": "Teri toshmasi, fotodermatit, Kvinke shishi (kam)",
      "Boshqa": "Tishlar rangi o'zgarishi (bolalarda), kumulyatsiya xavfi, ichak disbakteriozi"
    },
    dozadan: "Bosh aylanishi, ko'ngil aynishi, qusish, tirishishlar, ong buzilishi (intrakranial bosim oshishi oqibatida). Maxsus antidot mavjud emas; gemodiалiz samarasiz.",
    ozarotasir: [
      "Antatsidlar (Al, Mg, Ca) va temir preparatlari — so'rilishni kamaytiradi (3 soat farq bilan qabul qiling)",
      "Bivalent metallar (süt, tvorog) — so'rilishni kamaytiradi",
      "Bakteritsid antibiotiklar (penitsillion, sefalosporinlar) — antagonizm",
      "Etanol, barbituratlar, rifampitsin — doksitsiklin metabolizmini tezlashtiradi",
      "Gormonal kontratseptivlar — ishonchliligi pasayadi",
      "Antikoagulyantlar (bilvosita) — ta'sirini kuchaytiradi (vitamin K sintezi kamayadi)"
    ],
    qollash: {
      kattalar: "1-kun: 200 mg/sutka; keyingi kunlar: 100–200 mg/sutka. Og'iz orqali yoki v/v (tomchilatib). Kuniga 1–2 marta.",
      bolalar: "8 yoshdan katta, vazni > 50 kg: 1-kun 4 mg/kg, keyingi kunlar 2–4 mg/kg. 9–12 yosh, < 45 kg: 1-kun 4 mg/kg, keyin 2 mg/kg."
    },
    chiqarish: "Kapsulalar 100 mg (10 ta); infuziya uchun liofilizat 100 mg, 200 mg ampoullarda"
  },
  ru: {
    gruppa: "Тетрациклиновые антибиотики",
    farmTasir: "Антибактериальный широкого спектра, бактериостатический",
    farmakodinamika: `Доксициклин — полусинтетический тетрациклин с бактериостатическим механизмом действия. Проникая в клетку, связывается с 30S субъединицей рибосомы, ингибируя связывание аминоацил-тРНК с рибосомальным комплексом, что нарушает синтез белка. Высокоактивен в отношении грамположительных (Staphylococcus spp., Streptococcus spp., Clostridium spp.) и грамотрицательных бактерий (Neisseria spp., H. influenzae, Klebsiella spp., E. coli, Shigella spp., Bacteroides spp.), а также внутриклеточных патогенов: Chlamydia spp., Mycoplasma, Rickettsia, Treponema, Borrelia.`,
    farmakokinetika: {
      sorish: "Абсорбция ~100%. Cmax ≈ 2,5 мкг/мл через 2,5 ч после приёма 200 мг",
      tarqalish: "Связь с белками плазмы 80–90%. Проникает в печень, почки, лёгкие, кости, зубы, простату, ткани глаза, плевральную и асцитическую жидкости. В СМЖ 10–20% от уровня плазмы",
      metabolizm: "Метаболизируется в печени 30–60%. Подвергается кишечно-печёночной рециркуляции",
      chiqarilish: "T½ = 16–24 ч. 40% дозы выводится почками за 72 ч; остаток — с желчью и фекалиями"
    },
    korsatmalar: [
      "Инфекции дыхательных путей и ЛОР-органов",
      "Инфекции ЖКТ",
      "Гнойные инфекции кожи и мягких тканей (в том числе акне)",
      "Урогенитальные инфекции (гонорея, сифилис, хламидиоз)",
      "Сыпной тиф, бруцеллёз, риккетсиозы",
      "Остеомиелит, трахома",
      "Лептоспироз, болезнь Лайма"
    ],
    qarrshi: [
      "Гиперчувствительность к тетрациклинам",
      "Беременность",
      "Дети до 8 лет",
      "Тяжёлая печёночная недостаточность",
      "Порфирия, лейкопения, миастения (для в/в)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, анорексия, диарея, эзофагит, гепатотоксичность",
      "Кроветворение": "Нейтропения, тромбоцитопения, гемолитическая анемия",
      "Аллергические": "Кожная сыпь, фотосенсибилизация, отёк Квинке (редко)",
      "Прочие": "Изменение цвета зубов у детей, дисбактериоз кишечника, кумуляция"
    },
    dozadan: "Головокружение, тошнота, рвота, судороги, нарушение сознания (повышение ВЧД). Специфического антидота нет; гемодиализ неэффективен.",
    ozarotasir: [
      "Антациды (Al, Mg, Ca), препараты железа — снижают абсорбцию (интервал ≥ 3 ч)",
      "Молочные продукты — снижают всасывание",
      "Бактерицидные антибиотики (пенициллины, цефалоспорины) — антагонизм",
      "Этанол, барбитураты, рифампицин — ускоряют метаболизм доксициклина",
      "Оральные контрацептивы — снижение эффективности",
      "Непрямые антикоагулянты — усиление действия"
    ],
    qollash: {
      kattalar: "1-й день: 200 мг/сут; последующие дни: 100–200 мг/сут внутрь или в/в (капельно) 1–2 раза в сутки.",
      bolalar: "Старше 8 лет, масса > 50 кг: 1-й день 4 мг/кг, затем 2–4 мг/кг/сут. 9–12 лет, < 45 кг: 1-й день 4 мг/кг, затем 2 мг/кг/сут."
    },
    chiqarish: "Капсулы 100 мг № 10; лиофилизат для инфузий 100 мг и 200 мг в ампулах"
  },
  en: {
    gruppa: "Tetracycline antibiotics",
    farmTasir: "Broad-spectrum bacteriostatic antibiotic",
    farmakodinamika: `Doxycycline is a semi-synthetic tetracycline with bacteriostatic activity. It penetrates bacterial cells and reversibly binds to the 30S ribosomal subunit, inhibiting binding of aminoacyl-tRNA to the ribosomal acceptor site, thereby blocking protein synthesis. Highly active against Gram-positive (Staphylococcus spp., Streptococcus spp., Clostridium spp.) and Gram-negative organisms (Neisseria spp., H. influenzae, Klebsiella spp., E. coli, Shigella spp., Bacteroides spp.), and intracellular pathogens: Chlamydia spp., Mycoplasma, Rickettsia, Treponema, Borrelia.`,
    farmakokinetika: {
      sorish: "Absorption ~100%. Cmax ≈ 2.5 mcg/mL at 2.5 h after 200 mg dose",
      tarqalish: "Plasma protein binding 80–90%. Widely distributed into liver, kidneys, lungs, bone, teeth, prostate, ocular tissues, pleural and ascitic fluids. CSF penetration 10–20% of plasma levels",
      metabolizm: "Hepatic metabolism 30–60%; undergoes enterohepatic recirculation",
      chiqarilish: "T½ = 16–24 h. 40% of dose renally excreted within 72 h; remainder via bile and faeces"
    },
    korsatmalar: [
      "Respiratory and ENT infections",
      "Gastrointestinal infections",
      "Purulent skin and soft tissue infections (including acne vulgaris)",
      "Urogenital infections (gonorrhoea, syphilis, chlamydiosis)",
      "Typhus, brucellosis, rickettsial infections",
      "Osteomyelitis, trachoma",
      "Leptospirosis, Lyme disease"
    ],
    qarrshi: [
      "Hypersensitivity to tetracyclines",
      "Pregnancy",
      "Children under 8 years",
      "Severe hepatic impairment",
      "Porphyria, leucopenia, myasthenia gravis (for IV use)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, anorexia, diarrhoea, oesophagitis, hepatotoxicity",
      "Haematological": "Neutropenia, thrombocytopenia, haemolytic anaemia",
      "Hypersensitivity": "Rash, photosensitisation, angioedema (rare)",
      "Other": "Dental staining in children, intestinal dysbiosis, drug accumulation"
    },
    dozadan: "Dizziness, nausea, vomiting, seizures, altered consciousness (raised intracranial pressure). No specific antidote; haemodialysis ineffective.",
    ozarotasir: [
      "Antacids (Al, Mg, Ca) and iron preparations — reduced absorption (separate by ≥ 3 h)",
      "Dairy products — reduced absorption",
      "Bactericidal antibiotics (penicillins, cephalosporins) — antagonism",
      "Ethanol, barbiturates, rifampicin — accelerated doxycycline metabolism",
      "Oral contraceptives — reduced efficacy",
      "Indirect anticoagulants — enhanced anticoagulant effect"
    ],
    qollash: {
      kattalar: "Day 1: 200 mg/day; subsequent days: 100–200 mg/day orally or IV infusion 1–2 times daily.",
      bolalar: "Over 8 years, weight > 50 kg: Day 1 4 mg/kg, then 2–4 mg/kg/day. Age 9–12, < 45 kg: Day 1 4 mg/kg, then 2 mg/kg/day."
    },
    chiqarish: "Capsules 100 mg × 10; lyophilisate for infusion 100 mg and 200 mg in ampoules"
  }
},

// ─── J01FA02 · Spiramycin ─────────────────────────────────────────────────
"J01FA02": {
  uz: {
    gruppa: "Makrolidlar va azalidlar",
    farmTasir: "Keng spektrli bakteriostatik antibiotik",
    farmakodinamika: `Spiramisin — makrolid guruhiga mansub antibiotik. Bakteriostatik ta'sir mexanizmi: ribosomal oqsil sintezini buzish orqali hujayra ichida oqsil hosil bo'lishini inhibe qiladi. Gram-musbat bakteriyalarga (Staphylococcus spp. — penitsillaza ishlab chiqaruvchi shammlar ham, Streptococcus spp., S. pneumoniae, Corynebacterium diphtheriae, Listeria monocytogenes) va gram-manfiy bakteriyalarga (Neisseria meningitidis, N. gonorrhoeae, Bordetella pertussis, Legionella spp., Campylobacter spp.), anaerob bakteriyalarga (Clostridium spp.) faol. Shuningdek Mycoplasma pneumoniae, Chlamydia spp., Treponema spp., Leptospira spp., Toxoplasma gondii ga nisbatan ta'sir ko'rsatadi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda so'rilish yaxshi",
      tarqalish: "To'qimalarda, ayniqsa o'pka, jigar, taloq, buyrak va limfa tugunlarida yuqori konsentratsiyalarga erishadi. Zardob oqsillariga bog'lanish past",
      metabolizm: "Jigar tomonidan metabolizmga uchraydi",
      chiqarilish: "Asosan o't orqali chiqariladi; buyrak orqali az miqdorda"
    },
    korsatmalar: [
      "Nafas yo'llari va LOR organlari infeksiyalari: pnevmoniya (atipik ham, shu jumladan mikoplazma, xlamidiya, legionella bilan bog'liq), faringit, tonzillit, sinusit, otit",
      "Siydik-tanosil infeksiyalari: ureтrit, prostatit",
      "Teri va yumshoq to'qimalar infeksiyalari",
      "Osteomielit va artrit",
      "Ginekologik kasalliklar, jinsiy yo'l bilan yuqadigan infeksiyalar (genitаl va ekstragenitаl xlamidioz)",
      "Revmatizm profilaktikasi (penitsillinlarga allergik bemorlarda)",
      "Toksoplazmoz, jumladan homilador ayollarda",
      "Meningokokkli meningit kontakt shaxslarida profilaktika maqsadida"
    ],
    qarrshi: [
      "Spiramisinga o'ta sezuvchanlik",
      "Og'ir jigar yetishmovchiligi (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Allergiya": "Teri toshmasi, qichima",
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, diareya, qorin og'rig'i (kam); xolestaz sariqlik (juda kam)"
    },
    dozadan: "Ma'lumot yetarli emas; simptomatik davolash tavsiya etiladi.",
    ozarotasir: [
      "Levodopa/karbidopa (Carbidopa) — Parkinsonda levodopa qon konsentratsiyasi oshishi mumkin",
      "Boshqa makrolidlar bilan bir vaqtda qo'llash — parallel ta'sir"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 2–3 g/sutka 2 ta qabul qilishda. Og'ir infeksiyalarda 4–5 g/sutka. V/v: har 8 soatda 500 mg; og'ir holatlarda har 8 soatda 1 g.",
      bolalar: "50–100 mg/kg/sutka bir necha qabul qilishda"
    },
    chiqarish: "Tabletkalar 1,5 mln ME (500 mg) va 3 mln ME (1000 mg); inyeksion eritma tayyorlash uchun 1,5 mln ME (500 mg)"
  },
  ru: {
    gruppa: "Макролиды и азалиды",
    farmTasir: "Антибактериальный широкого спектра, бактериостатический",
    farmakodinamika: `Спирамицин — антибиотик группы макролидов с бактериостатическим механизмом действия. Нарушает внутриклеточный синтез белка путём ингибирования рибосомального синтеза. Активен в отношении грамположительных кокков (Staphylococcus spp., Streptococcus spp., S. pneumoniae, Corynebacterium diphtheriae, Listeria monocytogenes), грамотрицательных бактерий (Neisseria meningitidis, N. gonorrhoeae, Bordetella pertussis, Legionella spp., Campylobacter spp.), анаэробов (Clostridium spp.), а также атипичных патогенов: Mycoplasma pneumoniae, Chlamydia spp., Treponema spp., Leptospira spp., Toxoplasma gondii.`,
    farmakokinetika: {
      sorish: "Хорошо всасывается после перорального приёма",
      tarqalish: "Высокие концентрации в тканях: лёгкие, печень, селезёнка, почки, лимфатические узлы. Низкое связывание с белками плазмы",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно билиарная экскреция; почечная — незначительная"
    },
    korsatmalar: [
      "Инфекции органов дыхания и ЛОР-органов (пневмония, в том числе атипичная, фарингит, тонзиллит, синусит, отит)",
      "Инфекции мочевыводящих путей (уретрит, простатит)",
      "Инфекции кожи и мягких тканей",
      "Остеомиелит и артрит",
      "Гинекологические инфекции, ЗППП (хламидиоз)",
      "Профилактика ревматизма у больных с аллергией на пенициллины",
      "Токсоплазмоз, в том числе у беременных",
      "Профилактика менингококкового менингита у контактных лиц"
    ],
    qarrshi: [
      "Гиперчувствительность к спирамицину",
      "Тяжёлая печёночная недостаточность (с осторожностью)"
    ],
    nojoya: {
      "Аллергические": "Кожная сыпь, зуд",
      "ЖКТ": "Тошнота, рвота, диарея, боли в животе (редко); холестатическая желтуха (очень редко)"
    },
    dozadan: "Данных недостаточно; симптоматическая терапия.",
    ozarotasir: [
      "Леводопа/карбидопа — возможно повышение концентрации леводопы",
      "Другие макролиды — аддитивный эффект"
    ],
    qollash: {
      kattalar: "Внутрь: 2–3 г/сут в 2 приёма; при тяжёлых инфекциях 4–5 г/сут. В/в: 500 мг каждые 8 ч; тяжёлые — 1 г каждые 8 ч.",
      bolalar: "50–100 мг/кг/сут в нескольких приёмах"
    },
    chiqarish: "Таблетки 1,5 млн МЕ (500 мг) и 3 млн МЕ (1000 мг); раствор для инъекций 1,5 млн МЕ (500 мг)"
  },
  en: {
    gruppa: "Macrolides and azalides",
    farmTasir: "Broad-spectrum bacteriostatic antibiotic",
    farmakodinamika: `Spiramycin is a macrolide antibiotic with bacteriostatic activity mediated through inhibition of intracellular protein synthesis at the ribosomal level. Active against Gram-positive organisms (Staphylococcus spp. including penicillinase-producing strains, Streptococcus spp., S. pneumoniae, Corynebacterium diphtheriae, Listeria monocytogenes), Gram-negative bacteria (Neisseria meningitidis, N. gonorrhoeae, Bordetella pertussis, Legionella spp., Campylobacter spp.), anaerobes (Clostridium spp.), and atypical pathogens including Mycoplasma pneumoniae, Chlamydia spp., Treponema spp., Leptospira spp., and Toxoplasma gondii.`,
    farmakokinetika: {
      sorish: "Well absorbed after oral administration",
      tarqalish: "High tissue concentrations in lungs, liver, spleen, kidneys, lymph nodes. Low plasma protein binding",
      metabolizm: "Hepatically metabolised",
      chiqarilish: "Predominantly biliary excretion; minimal renal elimination"
    },
    korsatmalar: [
      "Respiratory and ENT infections (pneumonia including atypical, pharyngitis, tonsillitis, sinusitis, otitis)",
      "Urinary tract infections (urethritis, prostatitis)",
      "Skin and soft tissue infections",
      "Osteomyelitis and arthritis",
      "Gynaecological infections, STIs (chlamydiosis)",
      "Rheumatic fever prophylaxis in penicillin-allergic patients",
      "Toxoplasmosis, including in pregnancy",
      "Prophylaxis of meningococcal meningitis in close contacts"
    ],
    qarrshi: [
      "Hypersensitivity to spiramycin",
      "Severe hepatic impairment (caution)"
    ],
    nojoya: {
      "Hypersensitivity": "Rash, pruritus",
      "Gastrointestinal": "Nausea, vomiting, diarrhoea, abdominal pain (rare); cholestatic jaundice (very rare)"
    },
    dozadan: "Limited data; symptomatic treatment.",
    ozarotasir: [
      "Levodopa/carbidopa — possible increase in levodopa plasma concentration",
      "Other macrolides — additive effect"
    ],
    qollash: {
      kattalar: "Oral: 2–3 g/day in 2 doses; severe infections 4–5 g/day. IV: 500 mg every 8 h; severe 1 g every 8 h.",
      bolalar: "50–100 mg/kg/day in divided doses"
    },
    chiqarish: "Tablets 1.5 MIU (500 mg) and 3 MIU (1000 mg); solution for injection 1.5 MIU (500 mg)"
  }
},

// ─── J01DD54 · Ceftriaxone + Sulbactam ───────────────────────────────────
"J01DD54": {
  uz: {
    gruppa: "III avlod sefalosporinlari + beta-laktamaza ingibitori",
    farmTasir: "Keng spektrli kombinatsiyalangan bakteritsid antibiotik",
    farmakodinamika: `Tseftriakson (III avlod sefalosporini) va sulbaktamning (β-laktamaza inhibitori) kombinatsiyasi. Tseftriakson hujayra devori sintezini inhibitsiya qilish orqali bakteritsid ta'sir ko'rsatadi. Sulbaktam β-laktamazalarni qaytmas bloklab, tseftriaksonga chidamli mikroorganizmlar ustidan sulbaktamning sinergistik ta'sirini ta'minlaydi. Qo'shma preparat aerob gram-manfiy (Acinetobacter spp., E. coli, Klebsiella, Proteus, H. influenzae, Neisseria, Serratia, Salmonella, Shigella, Pseudomonas spp. ko'pgina shtammlari), gram-musbat (Staphylococcus aureus — penitsillaza ishlab chiqaruvchi, Streptococcus spp.) va anaerob mikroorganizmlarga (Bacteroides, Clostridium, Fusobacterium, Peptostreptococcus) faol.`,
    farmakokinetika: {
      sorish: "V/m yuborilganda 100% biologik faollik. Tseftriakson Cmax ≈ 81 mg/l, sulbaktam Cmax ≈ 6,24 mg/l",
      tarqalish: "Keng tarqaladi: astsit, orqa miya suyuqligi (meningit da), siydik, so'lak, tonzillar, teri, bachadon trubasi, o'pka, suyak, o't, o't pufagi. Zardob oqsillariga bog'lanish: tseftriakson 70–90%, sulbaktam 38%",
      metabolizm: "Tseftriakson sistemali metabolizmga uchramaydi (ichak mikroflorasi tomonidan inaktiv metabolitlarga aylanadi). Sulbaktam buyrak orqali o'zgarmagan holda",
      chiqarilish: "T½ sulbaktam ≈ 1 soat; tseftriakson ≈ 8 soat. Sulbaktam ~84%, tseftriakson 50–60% buyrak orqali chiqariladi"
    },
    korsatmalar: [
      "Buyrak va siydik chiqarish tizimi infeksiyalari",
      "Qorin bo'shlig'i infeksiyalari: peritonit, o't yo'llari infeksiyalari",
      "Quyi nafas yo'llari infeksiyalari, jumladan pnevmoniya",
      "LOR organlar infeksiyalari (o'tkir o'rta otit)",
      "Bakterial meningit",
      "Septitsemiya",
      "Suyak, bo'g'im infeksiyalari",
      "Teri va yumshoq to'qimalar infeksiyalari, yara infeksiyalari",
      "Lym kasalligi",
      "Jinsiy yo'l bilan yuqadigan infeksiyalar (asoratlanmagan gonoreya)",
      "Immunitetni bostirilgan bemorlar infeksiyalari",
      "Jarrohlik asoratlari profilaktikasi"
    ],
    qarrshi: [
      "Sulbaktam, tseftriaksonga yoki boshqa sefalosporin/penitsillinlarga o'ta sezuvchanlik",
      "Chaqaloqlarda giperbilirubinемiya yoki sariqlik",
      "Muddatidan avval tug'ilgan chaqaloqlar (gestatsion yosh 41 haftadan kam)",
      "Kalsiy eritmalari v/v yuborilishi kerak bo'lgan chaqaloqlar",
      "Chaqaloqlarda atsidoz, gipoalbuminемiya"
    ],
    nojoya: {
      "Allergiya": "Isitma, anafilaksiya, teri toshmasi, Stivens-Johnson sindromi, Lyell sindromi",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, tirishishlar",
      "Oshqozon-ichak": "Qorin og'rig'i, diareya, ko'ngil aynishi, qusish, pankreatit, psevdomembranoz kolit",
      "Jigar": "Xololitiaz, «shlam-fenomeni», sariqlik",
      "Qon tizimi": "Anemiya (gemolitik ham), leykopeniya, trombotsitopeniya, agranulotsitozlar",
      "Siydik tizimi": "Nefroliteaz, kandidoz",
      "Mahalliy": "Flebit (v/v), og'riq (v/m)"
    },
    dozadan: "Tirishishlar, qo'zg'alish, bosh aylanishi. Maxsus antidot yo'q.",
    ozarotasir: [
      "Aminoglikozidlar — sinergizm gram-manfiy bakteriyalarga nisbatan (buyrak funksiyasini nazorat qiling)",
      "Kalsiy tutuvchi eritmalari — tseftriakson tuzlarining cho'kmasi (aralash yubormang)",
      "Vankomisin, amsakrin, ftokonazol, aminoglikozidlar — farmatsevtik nomuvofiqlик",
      "Bakteriostatik antibiotiklar — bakteritsid effekt kamayadi",
      "Gormonal kontratseptivlar — samaradorligi pasayadi"
    ],
    qollash: {
      kattalar: "1–2 g tseftriakson (0,5–1 g sulbaktam) kuniga 1 marta yoki har 12 soatda v/v yoki v/m. Og'ir holatlarda 4 g gacha. Maks. sulbaktam doza 4 g/sutka.",
      bolalar: "12 yoshgacha: doza va rejim ko'rsatma va tana vazniga qarab belgilanadi."
    },
    chiqarish: "V/m va v/v inyeksiya uchun kukun: 0,5 g+0,25 g, 1 g+0,5 g, 2 g+1 g flakonlarda"
  },
  ru: {
    gruppa: "Цефалоспорины III поколения + ингибитор бета-лактамаз",
    farmTasir: "Комбинированный бактерицидный антибиотик широкого спектра",
    farmakodinamika: `Комбинация цефтриаксона (цефалоспорин III поколения) и сульбактама (необратимый ингибитор β-лактамаз). Цефтриаксон ингибирует синтез клеточной стенки бактерий. Сульбактам защищает цефтриаксон от деструкции β-лактамазами и проявляет синергизм в отношении широкого спектра аэробных грамотрицательных (Acinetobacter spp., E. coli, Klebsiella, Proteus, H. influenzae, Neisseria, Serratia, Salmonella, Shigella), грамположительных (Staphylococcus aureus, Streptococcus spp.) и анаэробных микроорганизмов (Bacteroides, Clostridium, Fusobacterium, Peptostreptococcus).`,
    farmakokinetika: {
      sorish: "При в/м введении биодоступность 100%. Cmax цефтриаксона ≈ 81 мг/л, сульбактама ≈ 6,24 мг/л",
      tarqalish: "Широко распределяется: асцитическая и спинномозговая жидкость (при менингите), моча, слюна, миндалины, кожа, маточные трубы, лёгкие, кости, желчь. Связь с белками: цефтриаксон 70–90%, сульбактам 38%",
      metabolizm: "Цефтриаксон не подвергается системному метаболизму. Сульбактам — почечная экскреция в неизменённом виде",
      chiqarilish: "T½ сульбактама ≈ 1 ч; цефтриаксона ≈ 8 ч. Сульбактам ~84%, цефтриаксон 50–60% почками"
    },
    korsatmalar: [
      "Инфекции почек и мочевыводящих путей",
      "Инфекции органов брюшной полости (перитонит, желчевыводящие пути)",
      "Инфекции нижних дыхательных путей (пневмония)",
      "ЛОР-инфекции (острый средний отит)",
      "Бактериальный менингит",
      "Септицемия",
      "Инфекции костей и суставов",
      "Инфекции кожи и мягких тканей",
      "Болезнь Лайма",
      "ЗППП (неосложнённая гонорея)",
      "Инфекции у иммунокомпрометированных пациентов",
      "Профилактика послеоперационных инфекций"
    ],
    qarrshi: [
      "Гиперчувствительность к сульбактаму, цефтриаксону, цефалоспоринам или пенициллинам",
      "Гипербилирубинемия или желтуха у новорождённых",
      "Недоношенные новорождённые (гестационный возраст < 41 недели)",
      "Новорождённые, которым показано в/в введение кальцийсодержащих растворов",
      "Ацидоз, гипоальбуминемия у новорождённых"
    ],
    nojoya: {
      "Аллергические": "Лихорадка, анафилаксия, сыпь, синдром Стивенса–Джонсона, синдром Лайелла",
      "ЦНС": "Головная боль, головокружение, судороги",
      "ЖКТ": "Боль в животе, диарея, тошнота, рвота, панкреатит, псевдомембранозный колит",
      "Печень": "Холелитиаз, «сладж-феномен», желтуха",
      "Кроветворение": "Анемия (в том числе гемолитическая), лейкопения, тромбоцитопения, агранулоцитоз",
      "Почки": "Нефролитиаз, кандидоз",
      "Местные": "Флебит (в/в), болезненность (в/м)"
    },
    dozadan: "Судороги, возбуждение, головокружение. Специфического антидота нет.",
    ozarotasir: [
      "Аминогликозиды — синергизм (контроль функции почек)",
      "Кальцийсодержащие растворы — образование преципитатов",
      "Ванкомицин, амсакрин, флуконазол, аминогликозиды — фармацевтическая несовместимость",
      "Бактериостатические антибиотики — снижение бактерицидного эффекта",
      "Гормональные контрацептивы — снижение эффективности"
    ],
    qollash: {
      kattalar: "1–2 г цефтриаксона (0,5–1 г сульбактама) 1 раз/сут или каждые 12 ч в/в или в/м. При тяжёлых инфекциях до 4 г. Макс. доза сульбактама 4 г/сут.",
      bolalar: "До 12 лет: доза и схема индивидуально по показаниям и массе тела."
    },
    chiqarish: "Порошок для в/м и в/в инъекций: 0,5 г+0,25 г, 1 г+0,5 г, 2 г+1 г во флаконах"
  },
  en: {
    gruppa: "Third-generation cephalosporins + beta-lactamase inhibitor",
    farmTasir: "Broad-spectrum combination bactericidal antibiotic",
    farmakodinamika: `Combination of ceftriaxone (third-generation cephalosporin) and sulbactam (irreversible β-lactamase inhibitor). Ceftriaxone inhibits bacterial cell wall synthesis via acetylation of membrane-bound transpeptidases. Sulbactam shields ceftriaxone from hydrolysis and demonstrates synergism against a broad spectrum of aerobic Gram-negative (Acinetobacter spp., E. coli, Klebsiella, Proteus, H. influenzae, Neisseria, Serratia, Salmonella, Shigella), Gram-positive (Staphylococcus aureus, Streptococcus spp.) and anaerobic organisms (Bacteroides, Clostridium, Fusobacterium, Peptostreptococcus).`,
    farmakokinetika: {
      sorish: "Bioavailability 100% after IM injection. Cmax ceftriaxone ≈ 81 mg/L, sulbactam ≈ 6.24 mg/L",
      tarqalish: "Wide distribution: ascitic and CSF (in meningitis), urine, saliva, tonsils, skin, fallopian tubes, lungs, bone, bile. Protein binding: ceftriaxone 70–90%, sulbactam 38%",
      metabolizm: "Ceftriaxone undergoes no systemic metabolism. Sulbactam excreted unchanged renally",
      chiqarilish: "T½ sulbactam ≈ 1 h; ceftriaxone ≈ 8 h. Sulbactam ~84%, ceftriaxone 50–60% renal"
    },
    korsatmalar: [
      "Renal and urinary tract infections",
      "Intra-abdominal infections (peritonitis, biliary infections)",
      "Lower respiratory tract infections (pneumonia)",
      "ENT infections (acute otitis media)",
      "Bacterial meningitis",
      "Septicaemia",
      "Bone and joint infections",
      "Skin and soft tissue infections",
      "Lyme disease",
      "STIs (uncomplicated gonorrhoea)",
      "Infections in immunocompromised patients",
      "Prophylaxis of postoperative infections"
    ],
    qarrshi: [
      "Hypersensitivity to sulbactam, ceftriaxone, cephalosporins or penicillins",
      "Hyperbilirubinaemia or jaundice in neonates",
      "Premature neonates (gestational age < 41 weeks)",
      "Neonates requiring IV calcium-containing solutions",
      "Neonatal acidosis, hypoalbuminaemia"
    ],
    nojoya: {
      "Hypersensitivity": "Fever, anaphylaxis, rash, Stevens–Johnson syndrome, Lyell syndrome",
      "CNS": "Headache, dizziness, seizures",
      "Gastrointestinal": "Abdominal pain, diarrhoea, nausea, vomiting, pancreatitis, pseudomembranous colitis",
      "Hepatobiliary": "Cholelithiasis, biliary sludge, jaundice",
      "Haematological": "Anaemia (including haemolytic), leucopenia, thrombocytopenia, agranulocytosis",
      "Renal": "Nephrolithiasis, candidiasis",
      "Local": "Phlebitis (IV), pain at injection site (IM)"
    },
    dozadan: "Seizures, agitation, dizziness. No specific antidote.",
    ozarotasir: [
      "Aminoglycosides — synergism; monitor renal function",
      "Calcium-containing solutions — precipitate formation; do not mix",
      "Vancomycin, amsacrine, fluconazole, aminoglycosides — pharmaceutical incompatibility",
      "Bacteriostatic antibiotics — reduced bactericidal effect",
      "Hormonal contraceptives — reduced efficacy"
    ],
    qollash: {
      kattalar: "1–2 g ceftriaxone (0.5–1 g sulbactam) once daily or every 12 h IV or IM. Severe infections up to 4 g. Max sulbactam 4 g/day.",
      bolalar: "Under 12 years: dose and regimen individualised according to indication and body weight."
    },
    chiqarish: "Powder for IM and IV injection: 0.5 g+0.25 g, 1 g+0.5 g, 2 g+1 g vials"
  }
},

// ─── J02AC03 · Voriconazole ───────────────────────────────────────────────
"J02AC03": {
  uz: {
    gruppa: "Zamburug'larga qarshi preparatlar (triazollar)",
    farmTasir: "Keng spektrli invaziv mikozlarda qo'llaniladigan antifungal preparat",
    farmakodinamika: `Vorikonazol — triazol hosilasi. Ta'sir mexanizmi: zamburug' sitoхromi P450 vositachiligidagi 14α-sterol demetillanish jarayonini inhibe qiladi; bu ergosterol biosintezining asosiy bosqichi bo'lib, uning buzilishi zamburug' membranasining zararlanishiga olib keladi. In vitro barcha Aspergillus spp. shtammlariga (A. fumigatus, A. flavus, A. terreus, A. niger, A. nidulans) nisbatan fungitsid, Candida spp.ga (flukonazolga chidamli Candida krusei va C. glabrata shtammlari ham) nisbatan faol. Shuningdek Scedosporium spp., Fusarium spp., Cryptococcus neoformans, Histoplasma capsulatum va boshqa patogen zamburug'larga ta'sir ko'rsatadi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qabul qilganda biologik faollik 96%. Cmax 1–2 soatda yetadi. Yuqori yog'li ovqat bilan Cmax 34%, AUC 24% kamayadi",
      tarqalish: "Taqsimlanish hajmi 4,6 l/kg — to'qimalarga keng tarqaladi. Zardob oqsillariga bog'lanish 58%. BBO to'sig'idan o'tadi, orqa miya suyuqligida aniqlanadi",
      metabolizm: "CYP2C19 (asosiy), CYP2C9, CYP3A4 izofermentlari ishtirokida metabolizmga uchraydi. Genetik polimorfizm muhim: Osiyo aholisida 15–20% kam metabolizatorlar",
      chiqarilish: "T½ dozaga bog'liq (200 mg da ≈ 6 soat). 80% dan ortiq doza metabolitlar shaklida siydik bilan chiqariladi"
    },
    korsatmalar: [
      "Invaziv aspergillyoz",
      "Og'ir invaziv kandidoz (Candida krusei ham)",
      "Qizilo'ngach kandidozi",
      "Scedosporium spp. va Fusarium spp. bilan og'ir zamburug' infeksiyalari",
      "Boshqa antifungal preparatlarga chidamli yoki ular ko'tarilmagan og'ir mikozlar",
      "Yuqori xavf guruhidagi isitmalik bemоrlarda breakthrough infeksiyalarning profilaktikasi (allogen suyak ko'migini transplantatsiyadan o'tganlar, leykemiya recidivi)"
    ],
    qarrshi: [
      "Bir vaqtda terfenadine, astemizol, tsizaprid, pimozid, kinidin (CYP3A4 substratlar) qabul qilish",
      "Sirolimus bilan bir vaqtda qabul qilish",
      "Rifampitsin, karbamazepin, uzoq ta'sirli barbituratlar",
      "Ritonavir, efavirenz",
      "Ergot alkaloidi preparatlari (ergotamin, digidroergotamin)",
      "Vorikonazolga o'ta sezuvchanlik",
      "2 yoshgacha bolalar (xavfsizlik isbotlanmagan)"
    ],
    nojoya: {
      "Ko'rish": "Ko'rish buzilishlari (xiralashuv, yorqin qabul kuchayishi, rang idrokining o'zgarishi, fotofobiya) — juda ko'p",
      "Teri": "Toshmа, qichima, fotodermatit, alopetsiya — ko'p; psoriaz, qizil bo'richa (kam)",
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, diareya, qorin og'rig'i, xolestaz, jigar yetishmovchiligi",
      "Yurak": "QT intervalining uzayishi, aritmiyalar (kamdan-kam)",
      "Asab": "Bosh og'rig'i, bosh aylanishi, gallyutsinatsiyalar, chalkashlik, tirishishlar",
      "Qon tizimi": "Trombotsitopeniya, anemiya, leykopeniya, pansitopeniya",
      "Buyrak": "Kreаtinin oshishi, o'tkir buyrak yetishmovchiligi",
      "Endokrin": "Gipokaliemiya, gipoglikemiya"
    },
    dozadan: "Ma'lumot cheklangan. Simptomatik davolash, jigar va buyrak funksiyasini nazorat qilish.",
    ozarotasir: [
      "Rifampitsin/karbamazepin — vorikonazol AUC ni keskin kamaytiradi (birikmasi mumkin emas)",
      "Siklosporin — siklosporin Cmax 13%, AUC 70% oshadi (doza yarmiga kamaytiring)",
      "Takrolimus — Cmax 117%, AUC 221% oshadi (doza 1/3 ga kamaytiring)",
      "Varfarin — protrombin vaqti 93% ga oshishi mumkin (nazorat qiling)",
      "Sirolimus — AUC 1014% oshadi (mutlaq qarshi ko'rsatma)",
      "Statinlar (CYP3A4 substratlar) — rаbdomioliz xavfi",
      "Omeprazol — omeprazol AUC 280% oshadi (doza yarmiga kamaytiring)"
    ],
    qollash: {
      kattalar: "Og'iz orqali: yuklama 400 mg x 2 (1-kun), keyin 200 mg x 2. V/v: yuklama 6 mg/kg x 2 (1-kun), keyin 4 mg/kg x 2. Jigar tsirrozida (Child-Pugh A, B) ta'minlama doza 100 mg x 2.",
      bolalar: "2–12 yosh: 9 mg/kg x 2 (maks. 350 mg); ta'minlama 8 mg/kg x 2 (maks. 350 mg). 12–14 yosh: kattalar rejimi."
    },
    chiqarish: "Tabletkalar 50 mg, 200 mg; infuziya uchun kukun 200 mg/flakon; oral suspenziya 40 mg/ml"
  },
  ru: {
    gruppa: "Противогрибковые препараты (триазолы)",
    farmTasir: "Противогрибковый препарат широкого спектра для лечения инвазивных микозов",
    farmakodinamika: `Вориконазол — производное триазола. Механизм действия: ингибирование опосредованного грибковым цитохромом P450 деметилирования 14α-стерола — ключевого этапа биосинтеза эргостерола, что нарушает целостность грибковой мембраны. Обладает фунгицидной активностью в отношении всех изученных штаммов Aspergillus spp. (A. fumigatus, A. flavus, A. terreus, A. niger) и широким спектром в отношении Candida spp. (включая флуконазолрезистентные C. krusei и C. glabrata), Scedosporium spp., Fusarium spp., Cryptococcus neoformans и других патогенных грибов.`,
    farmakokinetika: {
      sorish: "Биодоступность при пероральном приёме 96%. Cmax достигается через 1–2 ч. Жирная пища снижает Cmax на 34%, AUC на 24%",
      tarqalish: "Vd ≈ 4,6 л/кг — активное распределение в ткани. Связь с белками плазмы 58%. Проникает через ГЭБ и в СМЖ",
      metabolizm: "Метаболизируется при участии CYP2C19 (основной), CYP2C9 и CYP3A4. Выраженный генетический полиморфизм: 15–20% азиатского населения — «медленные метаболизаторы»",
      chiqarilish: "T½ дозозависим (≈ 6 ч при 200 мг). > 80% дозы выводится в виде метаболитов с мочой"
    },
    korsatmalar: [
      "Инвазивный аспергиллёз",
      "Тяжёлые инвазивные кандидозные инфекции (включая C. krusei)",
      "Кандидоз пищевода",
      "Тяжёлые грибковые инфекции (Scedosporium spp., Fusarium spp.)",
      "Тяжёлые микозы при непереносимости/рефрактерности других антимикотиков",
      "Профилактика прорывных микозов у пациентов высокого риска (реципиенты аллогенного КМ, рецидив лейкоза)"
    ],
    qarrshi: [
      "Одновременный приём субстратов CYP3A4: терфенадин, астемизол, цизаприд, пимозид, хинидин",
      "Сиролимус одновременно",
      "Рифампицин, карбамазепин, длительно действующие барбитураты",
      "Ритонавир, эфавиренз",
      "Алкалоиды спорыньи (эрготамин, дигидроэрготамин)",
      "Гиперчувствительность к вориконазолу",
      "Дети до 2 лет"
    ],
    nojoya: {
      "Зрение": "Нарушения зрения (туман, усиление восприятия, изменение цветовосприятия, фотофобия) — очень часто",
      "Кожа": "Сыпь, зуд, фотосенсибилизация, алопеция — часто; псориаз, красная волчанка (редко)",
      "ЖКТ/Печень": "Тошнота, рвота, диарея, холестаз, печёночная недостаточность",
      "Сердце": "Удлинение QT, аритмии (редко)",
      "ЦНС": "Головная боль, головокружение, галлюцинации, спутанность, судороги",
      "Кроветворение": "Тромбоцитопения, анемия, лейкопения, панцитопения",
      "Почки": "Повышение креатинина, острая почечная недостаточность",
      "Эндокринные": "Гипокалиемия, гипогликемия"
    },
    dozadan: "Ограниченные данные. Симптоматическая терапия, мониторинг функции печени и почек.",
    ozarotasir: [
      "Рифампицин/карбамазепин — резкое снижение AUC вориконазола (противопоказано)",
      "Циклоспорин — Cmax +13%, AUC +70% (снизить дозу вдвое)",
      "Такролимус — Cmax +117%, AUC +221% (снизить до 1/3 дозы)",
      "Варфарин — протромбиновое время +93% (контроль МНО)",
      "Сиролимус — AUC +1014% (абсолютное противопоказание)",
      "Статины (субстраты CYP3A4) — риск рабдомиолиза",
      "Омепразол — AUC омепразола +280% (снизить дозу вдвое)"
    ],
    qollash: {
      kattalar: "Внутрь: нагрузочная доза 400 мг × 2 (1-й день), затем 200 мг × 2. В/в: 6 мг/кг × 2 (1-й день), затем 4 мг/кг × 2. При циррозе (Child-Pugh A, B): поддерживающая доза 100 мг × 2.",
      bolalar: "2–12 лет: нагрузочная 9 мг/кг × 2 (макс. 350 мг); поддерживающая 8 мг/кг × 2 (макс. 350 мг). 12–14 лет: режим взрослых."
    },
    chiqarish: "Таблетки 50 мг, 200 мг; порошок для инфузий 200 мг/флакон; пероральная суспензия 40 мг/мл"
  },
  en: {
    gruppa: "Antifungal agents (triazoles)",
    farmTasir: "Broad-spectrum antifungal for invasive mycoses",
    farmakodinamika: `Voriconazole is a triazole derivative that exerts antifungal activity by inhibiting fungal cytochrome P450-mediated 14α-sterol demethylation, a critical step in ergosterol biosynthesis, thereby disrupting fungal membrane integrity. Exhibits fungicidal activity against all studied Aspergillus spp. (A. fumigatus, A. flavus, A. terreus, A. niger) and broad activity against Candida spp. (including fluconazole-resistant C. krusei and C. glabrata), Scedosporium spp., Fusarium spp., Cryptococcus neoformans and other pathogenic fungi.`,
    farmakokinetika: {
      sorish: "Oral bioavailability 96%. Cmax reached within 1–2 h. High-fat meals reduce Cmax by 34% and AUC by 24%",
      tarqalish: "Vd ≈ 4.6 L/kg — extensive tissue distribution. Plasma protein binding 58%. Penetrates CNS; detected in CSF",
      metabolizm: "Metabolised via CYP2C19 (primary), CYP2C9 and CYP3A4. Marked genetic polymorphism: 15–20% of Asian populations are poor metabolisers",
      chiqarilish: "T½ dose-dependent (≈ 6 h at 200 mg). > 80% excreted as metabolites in urine"
    },
    korsatmalar: [
      "Invasive aspergillosis",
      "Severe invasive candidiasis (including C. krusei)",
      "Oesophageal candidiasis",
      "Severe fungal infections caused by Scedosporium spp. and Fusarium spp.",
      "Severe mycoses refractory or intolerant to other antifungals",
      "Prophylaxis of breakthrough fungal infections in high-risk febrile patients (allogeneic BMT recipients, leukaemia relapse)"
    ],
    qarrshi: [
      "Concomitant CYP3A4 substrates: terfenadine, astemizole, cisapride, pimozide, quinidine",
      "Concomitant sirolimus",
      "Rifampicin, carbamazepine, long-acting barbiturates",
      "Ritonavir, efavirenz",
      "Ergot alkaloids (ergotamine, dihydroergotamine)",
      "Hypersensitivity to voriconazole",
      "Children under 2 years"
    ],
    nojoya: {
      "Visual": "Visual disturbances (blurring, enhanced perception, colour changes, photophobia) — very common",
      "Dermatological": "Rash, pruritus, photosensitisation, alopecia — common; psoriasis, lupus erythematosus (rare)",
      "Hepatogastrointestinal": "Nausea, vomiting, diarrhoea, cholestasis, hepatic failure",
      "Cardiac": "QT prolongation, arrhythmias (rare)",
      "CNS": "Headache, dizziness, hallucinations, confusion, seizures",
      "Haematological": "Thrombocytopenia, anaemia, leucopenia, pancytopenia",
      "Renal": "Elevated creatinine, acute renal failure",
      "Endocrine": "Hypokalaemia, hypoglycaemia"
    },
    dozadan: "Limited data. Symptomatic treatment; monitor hepatic and renal function.",
    ozarotasir: [
      "Rifampicin/carbamazepine — markedly reduce voriconazole AUC (contraindicated)",
      "Ciclosporin — Cmax +13%, AUC +70% (halve ciclosporin dose)",
      "Tacrolimus — Cmax +117%, AUC +221% (reduce to one-third of dose)",
      "Warfarin — prothrombin time +93% (monitor INR)",
      "Sirolimus — AUC +1014% (absolute contraindication)",
      "CYP3A4-metabolised statins — rhabdomyolysis risk",
      "Omeprazole — omeprazole AUC +280% (halve omeprazole dose)"
    ],
    qollash: {
      kattalar: "Oral: loading 400 mg × 2 (day 1), then 200 mg × 2. IV: 6 mg/kg × 2 (day 1), then 4 mg/kg × 2. Cirrhosis (Child-Pugh A/B): maintenance 100 mg × 2.",
      bolalar: "2–12 years: loading 9 mg/kg × 2 (max 350 mg); maintenance 8 mg/kg × 2 (max 350 mg). 12–14 years: adult regimen."
    },
    chiqarish: "Tablets 50 mg, 200 mg; powder for infusion 200 mg/vial; oral suspension 40 mg/mL"
  }
},

// ─── J01DD04 · Ceftriaxone ────────────────────────────────────────────────
"J01DD04": {
  uz: {
    gruppa: "III avlod sefalosporinlari",
    farmTasir: "Keng spektrli bakteritsid antibiotik",
    farmakodinamika: `Tseftriakson — III avlod sefalosporini. Membranaga bog'langan transpeptidazalarni atsetillab, peptidoglikan zanjirlarining ko'ndalang bog'lanishini buzadi va hujayra devori rigidligini yo'q qiladi. Bu bakteriyalarning lyziсiga olib keladi. β-laktamazalarga chidamli. Aerob va anaerob, gram-musbat (Streptococcus pneumoniae, S. pyogenes, metitsillin-sezgir Staphylococcus aureus) va gram-manfiy bakteriyalarga (Neisseria spp., H. influenzae, E. coli, Klebsiella spp., Proteus mirabilis, Serratia spp., Salmonella, Shigella) faol.`,
    farmakokinetika: {
      sorish: "Faqat parenteral yo'l bilan qo'llaniladi (v/v, v/m)",
      tarqalish: "Zardob oqsillariga bog'lanish 85–95%. To'qima va suyuqliqlarda keng tarqaladi. Meningit holatida orqa miya suyuqligida terapevtik konsentratsiyalarga erishadi. O'tda yuqori konsentratsiyalar. Platsenta to'sig'idan o'tadi; ona sutiga oz miqdorda chiqariladi",
      metabolizm: "Sistemali metabolizmga uchramaydi; ichak mikroflorasi tomonidan inaktiv metabolitlarga aylanadi",
      chiqarilish: "T½ ≈ 6–8 soat (ikki fazali eliminatsiya). 40–65% buyrak orqali o'zgarmagan holda, qolgan qismi o't va najas bilan"
    },
    korsatmalar: [
      "Peritonit, sepsis, meningit",
      "Xolangit, o't pufagi empiyemasi",
      "Dizenteriya, salmonella tashuvchi holat",
      "Pnevmoniya, o'pka abstsessi, plevra empiyemasi",
      "Pielonefrit",
      "Suyak, bo'g'im, teri va yumshoq to'qimalar infeksiyalari",
      "Jinsiy organlar infeksiyalari",
      "Zararlangan yaralar va kuyishlar",
      "Jarrohlik asoratlari profilaktikasi"
    ],
    qarrshi: [
      "Tseftriakson yoki boshqa sefalosporinlarga o'ta sezuvchanlik",
      "Chaqaloqlarda giperbilirubinемiya (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, diareya, transaminazalar oshishi, xolestaz, psevdomembranoz kolit",
      "Allergiya": "Teri toshmasi, qichima, eozinofiliya, Kvinke shishi (kam)",
      "Qon tizimi": "Leykopeniya, neytropeniya, trombotsitopeniya, gemolitik anemiya (ko'p dozada)",
      "Gemostaz": "Gipoprotrombinemiya",
      "Buyrak": "Interstitsial nefrit",
      "Boshqa": "Kandidoz",
      "Mahalliy": "Flebit (v/v), og'riq (v/m)"
    },
    dozadan: "Simptomatik davolash. Maxsus antidot yo'q.",
    ozarotasir: [
      "Ichak florasini bostiradi → K vitamini sintezi kamayadi → NSAID, salitsilatlar bilan qon ketish xavfi oshadi",
      "Antikoagulyantlar (bilvosita) — ta'siri kuchayadi",
      "Petlali diuretiklar — nefrotoksiklik xavfi oshadi",
      "Kalsiy tutuvchi eritmalar — cho'kma hosil qiladi (aralash yubormang)"
    ],
    qollash: {
      kattalar: "V/m yoki v/v: 1–2 g har 24 soatda yoki 0,5–1 g har 12 soatda. Maks. sutkalik doza 4 g. Gonoreya: v/m 250 mg bir marta.",
      bolalar: "Yangi tug'ilganlar: 20–50 mg/kg/sutka. 2 oydan 12 yoshgacha: 20–100 mg/kg/sutka kuniga 1 marta. Maks. bolalar uchun 2 g/sutka."
    },
    chiqarish: "V/v va v/m inyeksiya uchun kukun: 0,25 g; 0,5 g; 1 g; 2 g flakonlarda"
  },
  ru: {
    gruppa: "Цефалоспорины III поколения",
    farmTasir: "Антибиотик-цефалоспорин широкого спектра, бактерицидный",
    farmakodinamika: `Цефтриаксон — цефалоспориновый антибиотик III поколения. Оказывает бактерицидное действие за счёт ацетилирования мембраносвязанных транспептидаз, нарушающего перекрёстную сшивку пептидогликана, что обусловливает лизис бактериальной клетки. Устойчив к β-лактамазам. Активен в отношении аэробных, анаэробных, грамположительных и грамотрицательных бактерий (Streptococcus pneumoniae, S. pyogenes, MSSA, Neisseria spp., H. influenzae, E. coli, Klebsiella, Proteus, Serratia, Salmonella, Shigella).`,
    farmakokinetika: {
      sorish: "Только парентерально (в/в, в/м)",
      tarqalish: "Связь с белками плазмы 85–95%. Широко распределяется в ткани и жидкости. При менингите достигает терапевтических концентраций в СМЖ. Высокие концентрации в желчи. Проникает через плацентарный барьер; в грудное молоко — в малых количествах",
      metabolizm: "Системному метаболизму не подвергается; инактивируется кишечной микрофлорой",
      chiqarilish: "T½ ≈ 6–8 ч. 40–65% выводится почками в неизменённом виде, остаток — с желчью и фекалиями"
    },
    korsatmalar: [
      "Перитонит, сепсис, менингит",
      "Холангит, эмпиема желчного пузыря",
      "Шигеллёз, сальмонеллоносительство",
      "Пневмония, абсцесс лёгкого, эмпиема плевры",
      "Пиелонефрит",
      "Инфекции костей, суставов, кожи и мягких тканей",
      "Инфекции половых органов",
      "Инфицированные раны и ожоги",
      "Профилактика послеоперационной инфекции"
    ],
    qarrshi: [
      "Гиперчувствительность к цефтриаксону или другим цефалоспоринам",
      "Гипербилирубинемия у новорождённых (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, диарея, повышение трансаминаз, холестаз, псевдомембранозный колит",
      "Аллергические": "Кожная сыпь, зуд, эозинофилия, отёк Квинке (редко)",
      "Кроветворение": "Лейкопения, нейтропения, тромбоцитопения, гемолитическая анемия (при высоких дозах)",
      "Гемостаз": "Гипопротромбинемия",
      "Почки": "Интерстициальный нефрит",
      "Прочие": "Кандидоз",
      "Местные": "Флебит (в/в), болезненность (в/м)"
    },
    dozadan: "Симптоматическая терапия. Специфического антидота нет.",
    ozarotasir: [
      "Подавляет кишечную флору → снижение синтеза витамина К → риск кровотечений при НПВС, салицилатах",
      "Непрямые антикоагулянты — усиление эффекта",
      "Петлевые диуретики — нефротоксичность",
      "Кальцийсодержащие растворы — образование преципитатов"
    ],
    qollash: {
      kattalar: "В/м или в/в: 1–2 г каждые 24 ч или 0,5–1 г каждые 12 ч. Макс. суточная доза 4 г. Гонорея: 250 мг в/м однократно.",
      bolalar: "Новорождённые: 20–50 мг/кг/сут. 2 мес – 12 лет: 20–100 мг/кг/сут 1 раз/сут. Макс. 2 г/сут."
    },
    chiqarish: "Порошок для в/в и в/м инъекций: 0,25 г; 0,5 г; 1 г; 2 г во флаконах"
  },
  en: {
    gruppa: "Third-generation cephalosporins",
    farmTasir: "Broad-spectrum bactericidal cephalosporin antibiotic",
    farmakodinamika: `Ceftriaxone is a third-generation cephalosporin that exerts bactericidal activity by acetylating membrane-bound transpeptidases, thereby disrupting cross-linking of peptidoglycan and causing cell lysis. Resistant to β-lactamases. Active against aerobic, anaerobic, Gram-positive and Gram-negative bacteria including Streptococcus pneumoniae, S. pyogenes, MSSA, Neisseria spp., H. influenzae, E. coli, Klebsiella spp., Proteus mirabilis, Serratia spp., Salmonella, and Shigella.`,
    farmakokinetika: {
      sorish: "Parenteral use only (IV, IM)",
      tarqalish: "Plasma protein binding 85–95%. Widely distributed into tissues and fluids. Achieves therapeutic CSF concentrations in meningitis. High biliary concentrations. Crosses placenta; excreted in breast milk in small amounts",
      metabolizm: "No systemic metabolism; inactivated by intestinal flora",
      chiqarilish: "T½ ≈ 6–8 h. 40–65% excreted unchanged renally; remainder via bile and faeces"
    },
    korsatmalar: [
      "Peritonitis, septicaemia, meningitis",
      "Cholangitis, gallbladder empyema",
      "Shigellosis, Salmonella carrier state",
      "Pneumonia, lung abscess, pleural empyema",
      "Pyelonephritis",
      "Bone, joint, skin and soft tissue infections",
      "Genital infections",
      "Infected wounds and burns",
      "Prophylaxis of postoperative infection"
    ],
    qarrshi: [
      "Hypersensitivity to ceftriaxone or other cephalosporins",
      "Neonatal hyperbilirubinaemia (use with caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, diarrhoea, elevated transaminases, cholestasis, pseudomembranous colitis",
      "Hypersensitivity": "Rash, pruritus, eosinophilia, angioedema (rare)",
      "Haematological": "Leucopenia, neutropenia, thrombocytopenia, haemolytic anaemia (high doses)",
      "Haemostasis": "Hypoprothrombinaemia",
      "Renal": "Interstitial nephritis",
      "Other": "Candidiasis",
      "Local": "Phlebitis (IV), pain at injection site (IM)"
    },
    dozadan: "Symptomatic treatment. No specific antidote.",
    ozarotasir: [
      "Suppresses intestinal flora → reduced vitamin K synthesis → increased bleeding risk with NSAIDs, salicylates",
      "Indirect anticoagulants — enhanced anticoagulant effect",
      "Loop diuretics — nephrotoxicity",
      "Calcium-containing solutions — precipitate formation; do not co-administer"
    ],
    qollash: {
      kattalar: "IM or IV: 1–2 g every 24 h or 0.5–1 g every 12 h. Max daily dose 4 g. Gonorrhoea: 250 mg IM single dose.",
      bolalar: "Neonates: 20–50 mg/kg/day. 2 months–12 years: 20–100 mg/kg/day once daily. Max 2 g/day."
    },
    chiqarish: "Powder for IV and IM injection: 0.25 g, 0.5 g, 1 g, 2 g vials"
  }
},

// ─── J01RA09 · Ofloxacin + Ornidazole ────────────────────────────────────
"J01RA09": {
  uz: {
    gruppa: "Kombinatsiyalangan antimikrob preparatlar (ftorxinolon + nitroimidazol)",
    farmTasir: "Aerob va anaerob bakteriyalar hamda protozoan infeksiyalariga qarshi kombinatsiyalangan preparat",
    farmakodinamika: `Kombinatsiyalangan preparat: ofloksatsin (ftorxinolon) va ornidazol (5-nitroimidazol hosilasi). Ofloksatsin — bakteritsid ta'sir, ДНК-giraza va topoisomeraza IV fermentlarini inhibe qilib ДНК sintezini buzadi; gram-musbat (MSSA, S. epidermidis, S. saprophyticus, S. pneumoniae, S. pyogenes) va gram-manfiy aerob bakteriyalarga (Acinetobacter, Bordetella, Citrobacter, Enterobacter, E. coli, H. influenzae, Klebsiella, Moraxella, N. gonorrhoeae, Proteus, Pseudomonas aeruginosa, Serratia, Chlamydia, Mycoplasma, Ureaplasma) faol. Ornidazol — anaerob bakteriyalar (Bacteroides spp., Fusobacterium spp., Clostridium spp.) va sodda hayvonlar (Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica) ga nisbatan; 5-nitrogrup qaytarilganda ДНК bilan bog'lanib nuklein kislota sintezini blokaydi.`,
    farmakokinetika: {
      sorish: "Biologik faollik: ornidazol ~90%, ofloksatsin ~95%. Tmax: ofloksatsin 1–2 soat, ornidazol 3 soat",
      tarqalish: "Ofloksatsin: Vd ≈ 100 l; leykotsitlar, o'pka, suyak, qorin va kichik chanoq organlariga, siydik, so'lak, o'tga yaxshi tarqaladi; BBO dan 14–60% o'tadi. Ornidazol: aksariyat to'qimalarga, BBO va plasentadan o'tadi",
      metabolizm: "Ofloksatsin: jigar tomonidan ~5% metabolizmga uchraydi. Ornidazol: jigarда gidroksillanish, oksidatsiya va glyukuronidatsiya yo'li bilan",
      chiqarilish: "Ofloksatsin T½ = 4,5–7 soat; 75–90% buyrak orqali o'zgarmagan. Ornidazol T½ = 12–14 soat; metabolitlar ko'rinishida buyrak va ichak orqali"
    },
    korsatmalar: [
      "Gram-musbat va gram-manfiy mikrofloraninig anaerob va/yoki protozoalar bilan kombinatsiyasi bilan qo'zg'atilgan aralash bakterial infeksiyalar",
      "Qorin bo'shlig'i va o't yo'llari infeksiyalari",
      "Buyrak va pastki siydik yo'llari infeksiyalari (pielonefrit, sistit, ureтrit)",
      "Jinsiy organlar va kichik chanoq infeksiyalari (endometrit, salpingit, ooforit, tsеrvitsit, prostаtit, kоlpit, orxit, epidididmit)"
    ],
    qarrshi: [
      "Epilepsiya yoki tirishish anamnezi",
      "Oldingi ftorxinolon davolashdan keyin pay zararlanishi",
      "18 yoshgacha bolalar",
      "Homiladorlik va laktatsiya",
      "Ofloksatsin, ornidazol, boshqa ftorxinolon yoki imidazol hosilalariga o'ta sezuvchanlik",
      "QT intervali uzayishi sindromi (tug'ma)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Gastralгiya, ko'ngil aynishi, qusish, diareya, qorin og'rig'i, xolestaz, psevdomembranoz kolit",
      "Asab tizimi": "Bosh og'riq, bosh aylanishi, uyqusizlik, tirishishlar, gallyutsinatsiyalar, depressiya, periferik nevrоpatiya",
      "Tayanch-harakat": "Tendinit, pay uzilishi xavfi (ayniqsa keksa bemorlar), artralгiya, mialгiya, rabdomioliz",
      "Yurak": "Taxikardiya, QT uzayishi, aritmiyalar",
      "Allergiya": "Teri toshmasi, urtikaria, Stivens-Johnson sindromi, Lyell sindromi, anafilaktik shok",
      "Qon tizimi": "Leykopeniya, agranulotsitozlar, anemiya, trombotsitopeniya",
      "Buyrak": "O'tkir interstitsial nefrit, buyrak yetishmovchiligi",
      "Boshqa": "Disbakterioz, vaginit, fotodermatit"
    },
    dozadan: "Bosh aylanishi, chalkashlik, uyquchanlik, qusish, epileptiform tirishishlar, periferik nevrit. Oshqozoni yuvish, diazepam (tirishishlarda). Simptomatik davolash.",
    ozarotasir: [
      "Teofillin — klirensi 25% kamayadi (doza kamaytiring)",
      "Tsiklosporin — qon konsentratsiyasi oshadi",
      "Bilvosita antikoagulyantlar — INR nazoratini kuchaytiring",
      "NSAID — neyrotoксiklik va tirishish xavfi oshadi",
      "QT uzaytiruvchi preparatlar — sinergistik QT uzayishi (aritmiya xavfi)",
      "Glyukokortikoidlar — paylar uzilishi xavfi oshadi (keksa bemorlar)",
      "Antatsidlar, Ca, Mg, Fe, Al preparatlari — so'rilishni kamaytiradi (2 soat farq bilan qabul qiling)",
      "Ornidazol + etanol — mos keladi (metronidazoldan farqli)"
    ],
    qollash: {
      kattalar: "1 tabletka 2 marta kuniga ovqatdan 1 soat oldin yoki 2 soat keyin, ko'p suv bilan. 7–10 kun. KK 50–20 ml/daq: 200 mg/24 soat; KK < 20: 200 mg/48 soat. Jigar yetishmovchiligida maks. 2 tabletka/sutka.",
      bolalar: "18 yoshgacha qarshi ko'rsatilgan"
    },
    chiqarish: "Tabletkalar: ofloksatsin 200 mg + ornidazol 500 mg"
  },
  ru: {
    gruppa: "Комбинированные противомикробные препараты (фторхинолон + нитроимидазол)",
    farmTasir: "Комбинированный препарат против аэробных, анаэробных бактерий и простейших",
    farmakodinamika: `Комбинированный препарат, содержащий офлоксацин (фторхинолон) и орнидазол (производное 5-нитроимидазола). Офлоксацин оказывает бактерицидное действие путём ингибирования ДНК-гиразы и топоизомеразы IV, нарушая синтез ДНК бактерий; активен в отношении широкого спектра грамположительных и грамотрицательных аэробов (включая Pseudomonas aeruginosa), а также Chlamydia, Mycoplasma, Ureaplasma. Орнидазол действует против анаэробов (Bacteroides spp., Fusobacterium, Clostridium) и простейших (Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica), блокируя синтез нуклеиновых кислот через восстановленную 5-нитрогруппу.`,
    farmakokinetika: {
      sorish: "Биодоступность: орнидазол ~90%, офлоксацин ~95%. Tmax: офлоксацин 1–2 ч, орнидазол 3 ч",
      tarqalish: "Офлоксацин: Vd ≈ 100 л; распределяется в лейкоциты, лёгкие, кости, органы брюшной полости и малого таза, мочу, слюну, желчь; через ГЭБ 14–60%. Орнидазол: проникает в большинство тканей, ГЭБ и плаценту",
      metabolizm: "Офлоксацин: ~5% метаболизируется печенью. Орнидазол: гидроксилирование, окисление и глюкуронирование в печени",
      chiqarilish: "Офлоксацин T½ = 4,5–7 ч; 75–90% почками в неизменённом виде. Орнидазол T½ = 12–14 ч; в виде метаболитов почками и кишечником"
    },
    korsatmalar: [
      "Смешанные бактериальные инфекции аэробно-анаэробными возбудителями и/или простейшими",
      "Инфекции органов брюшной полости и желчевыводящих путей",
      "Инфекции почек и нижних мочевыводящих путей (пиелонефрит, цистит, уретрит)",
      "Инфекции половых органов и малого таза (эндометрит, сальпингит, оофорит, цервицит, простатит, кольпит, орхит, эпидидимит)"
    ],
    qarrshi: [
      "Эпилепсия или судороги в анамнезе",
      "Поражение сухожилий при ранее проводившемся лечении фторхинолонами",
      "Возраст до 18 лет",
      "Беременность и лактация",
      "Гиперчувствительность к офлоксацину, орнидазолу, фторхинолонам или производным имидазола",
      "Врождённый синдром удлинённого QT"
    ],
    nojoya: {
      "ЖКТ": "Гастралгия, тошнота, рвота, диарея, боль в животе, холестаз, псевдомембранозный колит",
      "ЦНС": "Головная боль, головокружение, бессонница, судороги, галлюцинации, депрессия, периферическая нейропатия",
      "ОДА": "Тендинит, риск разрыва сухожилий (особенно у пожилых), артралгия, миалгия, рабдомиолиз",
      "Сердце": "Тахикардия, удлинение QT, аритмии",
      "Аллергические": "Сыпь, крапивница, синдром Стивенса–Джонсона, ТЭН, анафилактический шок",
      "Кроветворение": "Лейкопения, агранулоцитоз, анемия, тромбоцитопения",
      "Почки": "Острый интерстициальный нефрит, почечная недостаточность",
      "Прочие": "Дисбактериоз, вагинит, фотосенсибилизация"
    },
    dozadan: "Головокружение, спутанность сознания, сонливость, рвота, эпилептиформные судороги, периферический неврит. Промывание желудка, диазепам (при судорогах). Симптоматическая терапия.",
    ozarotasir: [
      "Теофиллин — снижение клиренса на 25% (уменьшить дозу)",
      "Циклоспорин — повышение сывороточной концентрации",
      "Непрямые антикоагулянты — усиление (контроль МНО)",
      "НПВП — повышение риска нейротоксичности и судорог",
      "Препараты, удлиняющие QT — синергистическое удлинение QT",
      "ГКС — риск разрыва сухожилий у пожилых",
      "Антациды, соли Ca, Mg, Fe, Al — снижают абсорбцию офлоксацина (интервал ≥ 2 ч)",
      "Орнидазол + этанол — совместим (в отличие от метронидазола)"
    ],
    qollash: {
      kattalar: "1 таблетка 2 раза в день за 1 ч до или через 2 ч после еды, запивая водой. 7–10 дней. КК 50–20 мл/мин: 200 мг/24 ч; КК < 20: 200 мг/48 ч. Макс. доза при печёночной недостаточности — 2 табл./сут.",
      bolalar: "Противопоказан до 18 лет"
    },
    chiqarish: "Таблетки: офлоксацин 200 мг + орнидазол 500 мг"
  },
  en: {
    gruppa: "Combined antimicrobial agents (fluoroquinolone + nitroimidazole)",
    farmTasir: "Combination agent active against aerobic, anaerobic bacteria and protozoa",
    farmakodinamika: `Fixed-dose combination of ofloxacin (fluoroquinolone) and ornidazole (5-nitroimidazole derivative). Ofloxacin exerts bactericidal activity by inhibiting DNA gyrase and topoisomerase IV, disrupting bacterial DNA synthesis; active against a broad spectrum of Gram-positive and Gram-negative aerobes (including Pseudomonas aeruginosa), Chlamydia, Mycoplasma and Ureaplasma. Ornidazole acts against anaerobes (Bacteroides spp., Fusobacterium spp., Clostridium spp.) and protozoa (Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica) by blocking nucleic acid synthesis through its reduced 5-nitro group.`,
    farmakokinetika: {
      sorish: "Bioavailability: ornidazole ~90%, ofloxacin ~95%. Tmax: ofloxacin 1–2 h, ornidazole 3 h",
      tarqalish: "Ofloxacin: Vd ≈ 100 L; distributes into leucocytes, lungs, bone, abdominal and pelvic organs, urine, saliva, bile; CNS penetration 14–60%. Ornidazole: penetrates most tissues including CNS and placenta",
      metabolizm: "Ofloxacin: ~5% hepatic metabolism. Ornidazole: hydroxylation, oxidation and glucuronidation in liver",
      chiqarilish: "Ofloxacin T½ = 4.5–7 h; 75–90% renal unchanged. Ornidazole T½ = 12–14 h; metabolites via kidneys and intestine"
    },
    korsatmalar: [
      "Mixed aerobic-anaerobic and/or protozoal bacterial infections",
      "Intra-abdominal and biliary infections",
      "Renal and lower urinary tract infections (pyelonephritis, cystitis, urethritis)",
      "Genital and pelvic infections (endometritis, salpingitis, oophoritis, cervicitis, prostatitis, colpitis, orchitis, epididymitis)"
    ],
    qarrshi: [
      "Epilepsy or history of seizures",
      "Tendon disorders from prior fluoroquinolone treatment",
      "Age under 18 years",
      "Pregnancy and lactation",
      "Hypersensitivity to ofloxacin, ornidazole, fluoroquinolones or imidazole derivatives",
      "Congenital long QT syndrome"
    ],
    nojoya: {
      "Gastrointestinal": "Gastralgia, nausea, vomiting, diarrhoea, abdominal pain, cholestasis, pseudomembranous colitis",
      "CNS": "Headache, dizziness, insomnia, seizures, hallucinations, depression, peripheral neuropathy",
      "Musculoskeletal": "Tendinitis, tendon rupture risk (especially elderly), arthralgia, myalgia, rhabdomyolysis",
      "Cardiac": "Tachycardia, QT prolongation, arrhythmias",
      "Hypersensitivity": "Rash, urticaria, Stevens–Johnson syndrome, TEN, anaphylaxis",
      "Haematological": "Leucopenia, agranulocytosis, anaemia, thrombocytopenia",
      "Renal": "Acute interstitial nephritis, renal failure",
      "Other": "Intestinal dysbiosis, vaginitis, photosensitisation"
    },
    dozadan: "Dizziness, confusion, drowsiness, vomiting, epileptiform seizures, peripheral neuritis. Gastric lavage, diazepam (seizures). Symptomatic treatment.",
    ozarotasir: [
      "Theophylline — clearance reduced 25% (reduce dose)",
      "Ciclosporin — elevated plasma concentration",
      "Indirect anticoagulants — enhanced effect (monitor INR)",
      "NSAIDs — increased neurotoxicity and seizure risk",
      "QT-prolonging drugs — synergistic QT prolongation",
      "Corticosteroids — tendon rupture risk in elderly",
      "Antacids, Ca/Mg/Fe/Al salts — reduced ofloxacin absorption (separate by ≥ 2 h)",
      "Ornidazole + ethanol — compatible (unlike metronidazole)"
    ],
    qollash: {
      kattalar: "1 tablet twice daily 1 h before or 2 h after food, with water. 7–10 days. CrCl 50–20 mL/min: 200 mg/24 h; CrCl < 20: 200 mg/48 h. Max 2 tablets/day in hepatic impairment.",
      bolalar: "Contraindicated under 18 years"
    },
    chiqarish: "Tablets: ofloxacin 200 mg + ornidazole 500 mg"
  }
},

// ─── J02AC01 · Fluconazole (tizimli) ──────────────────────────────────────
"J02AC01": {
  uz: {
    gruppa: "Zamburug'larga qarshi preparatlar (triazollar)",
    farmTasir: "Tizimli mikozlarda qo'llaniladigan yuqori selektiv antifungal vosita",
    farmakodinamika: `Flukonazol — triazol guruhiga mansub zamburug'larga qarshi preparat bo'lib, yuqori spetsifik ta'sirga ega: zamburug' sitoxromi P450 ga bog'liq fermentlar faolligini inhibe qiladi. Zamburug' hujayralarida lanosterolning ergosterolga aylanishini bloklaydi, hujayra membranasi o'tkazuvchanligini oshiradi, uning o'sishi va replikatsiyasini buzadi. Inson sitoxromi P450 ga nisbatan tanlovchanligi yuqori bo'lgani uchun itrakonazol, klotrimazol, ekonazol va ketokonazolga qaraganda jigar mikrosomalaridagi oksidlovchi jarayonlarni kam darajada bostiradi. Antiandrogen ta'siri yo'q. Candida spp. (immunodepressiya fonidagi generalizatsiyalangan kandidoz shakllari bilan), Cryptococcus neoformans va Coccidioides immitis (meningit va ensefalit bilan), Microsporum spp., Trichophyton spp.ga; Blastomyces dermatidis, Histoplasma capsulatum keltirib chiqargan endemik mikozlarga nisbatan faol.`,
    farmakokinetika: {
      sorish: "Og'iz orqali yaxshi so'riladi; biologik faollik >90% (i/v bilan teng). Ovqat so'rilishga ta'sir qilmaydi. Cmax ochlik holatida 0,5–1,5 soatda; konsentratsiya dozaga proportsional",
      tarqalish: "Vd tana umumiy suviga yaqin. Plazma oqsillariga bog'lanish past (11–12%). Barcha suyuqliklarga yaxshi o'tadi; meningitda BOM suyuqligida ~80% darajaga yetadi. Shox qavat, epidermis-derma va terda yuqori, plazmadan ortiq konsentratsiya hosil qiladi, to'planadi",
      metabolizm: "Aylanuvchi metabolitlar aniqlanmagan; jigar fermentlariga ta'siri minimal",
      chiqarilish: "Asosan buyrak orqali; dozaning ~80% siydikda o'zgarmagan holda. Klirensi KK ga proportsional. T½ uzoq, kuniga 1 marta yoki haftada 1 marta qabul qilish imkonini beradi"
    },
    korsatmalar: [
      "Kriptokokkoz, jumladan kriptokokk meningiti",
      "Tizimli kandidoz, kandidemiya, dissseminatsiyalangan kandidoz",
      "Shilliq pardalar kandidozi (orofaringeal, qizilo'ngach), vaginal kandidoz",
      "Teri mikozlari (oyoq, chov sohasi), pitiriaz (otrubasimon temiratki), onixomikoz",
      "Chuqur endemik mikozlar (koktsidioidomikoz, parakoktsidioidomikoz, sporotrixoz, gistoplazmoz)",
      "Immunitet bostirilgan (xavfli o'sma, sitostatik/nurlanish terapiyasi, transplantatsiya) bemorlarda zamburug' infeksiyalari profilaktikasi"
    ],
    qarrshi: [
      "Flukonazol yoki azol hosilalariga o'ta sezuvchanlik",
      "Tsizaprid bilan bir vaqtda qabul qilish",
      "Terfenadin (flukonazol ≥400 mg/sut bilan) bilan bir vaqtda",
      "Homiladorlik va emizish davri",
      "16 yoshgacha bolalar (umumiy preparatlar uchun)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ishtaha pasayishi, ta'm o'zgarishi, qorin og'rig'i, ko'ngil aynishi, qusish, diareya, meteorizm",
      "Jigar": "Jigar funksiyasi buzilishi — sariqlik, gepatit, gepatonekroz, giperbilirubinemiya, transaminazalar va ishqoriy fosfataza oshishi (kam, ba'zan og'ir)",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, charchoq, kamdan-kam tirishishlar",
      "Qon tizimi": "Leykopeniya, trombotsitopeniya, neytropeniya, agranulotsitoz (kam)",
      "Allergiya": "Teri toshmasi, multiform ekssudativ eritema (Stivens-Johnson sindromi), toksik epidermal nekroliz (Lyell sindromi), anafilaktoid reaksiyalar, Kvinke shishi",
      "Yurak": "QT intervalining uzayishi, qorinchalar miltillashi/titrashi",
      "Boshqa": "Buyrak funksiyasi buzilishi, alopetsiya, giperxolesterinemiya, gipertrigliseridemiya, gipokaliemiya"
    },
    dozadan: "Belgilar: gallyutsinatsiyalar, paranoid xulq-atvor. Davolash: simptomatik (oshqozonni yuvish, forsirlangan diurez). Dastlabki 3 soatda gemodializ konsentratsiyani 50% kamaytiradi.",
    ozarotasir: [
      "Varfarin — protrombin vaqtini 12% oshiradi, qon ketish xavfi (INR nazorati)",
      "Tsizaprid — yurak aritmiyalari («piruet» tipidagi), mutlaq qarshi ko'rsatma",
      "Midazolam/benzodiazepinlar — konsentratsiyasi va psixomotor ta'siri ortadi",
      "Tsiklosporin, takrolimus — plazma konsentratsiyasi oshadi (nazorat)",
      "Sulfonilmochevina hosilalari (glibenklamid, glipizid) — gipoglikemiya xavfi",
      "Fenitoin, rifabutin, teofillin, zidovudin — konsentratsiyasi oshadi",
      "Rifampitsin — flukonazol AUC ni 25% kamaytiradi (doza oshirilishi mumkin)",
      "Gidroxlortiazid — flukonazol konsentratsiyasini 40% oshiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali yoki i/v (≤20 mg/daq). Kriptokokk infeksiyasi/dissseminatsiyalangan kandidoz: 1-kun 400 mg, keyin 200–400 mg/sut. Orofaringeal kandidoz: 50–100 mg/sut 7–10 kun. Vaginal kandidoz: 150 mg bir marta. Onixomikoz: haftada 150 mg. KK <50 ml/daq: dozaning 50% yoki odatdagi doza 2 kunda bir marta.",
      bolalar: "Kuniga 1 marta. Kandidoz: 3 mg/kg/sut; generalizatsiyalangan kandidoz va kriptokokk infeksiyasi: 6–12 mg/kg/sut 10–12 hafta. Yangi tug'ilganlar: 72 soat oraliq; 2–4 haftalik: 48 soat oraliq. Sutkalik doza kattalarnikidan oshmasligi kerak"
    },
    chiqarish: "Kapsulalar 50; 100; 150; 200 mg; sirop 5 mg/ml (0,5%); i/v infuziya uchun 0,2% eritma"
  },
  ru: {
    gruppa: "Противогрибковые препараты (триазолы)",
    farmTasir: "Высокоселективное противогрибковое средство при системных микозах",
    farmakodinamika: `Флуконазол — противогрибковое средство из группы триазолов, обладает высокоспецифичным действием, ингибируя активность зависимых от цитохрома Р450 ферментов грибов. Блокирует превращение ланостерола клеток грибов в эргостерол, увеличивает проницаемость клеточной мембраны, нарушает её рост и репликацию. Будучи высокоизбирательным для цитохрома Р450 грибов, в меньшей степени, чем итраконазол, клотримазол, эконазол и кетоконазол, подавляет зависимые от Р450 окислительные процессы в микросомах печени человека. Не обладает антиандрогенной активностью. Активен в отношении Candida spp. (включая генерализованные формы на фоне иммунодепрессии), Cryptococcus neoformans и Coccidioides immitis (включая менингит и энцефалит), Microsporum spp., Trichophyton spp.; при эндемических микозах (Blastomyces dermatidis, Histoplasma capsulatum).`,
    farmakokinetika: {
      sorish: "Хорошо абсорбируется внутрь; биодоступность >90% (как при в/в). Пища не влияет. Cmax натощак через 0,5–1,5 ч; концентрация пропорциональна дозе",
      tarqalish: "Vd близок к общему содержанию воды в организме. Связь с белками низкая (11–12%). Хорошо проникает во все жидкости; при менингите в СМЖ ~80%. В роговом слое, эпидермисе-дерме и поте — высокие концентрации выше сывороточных, накапливается",
      metabolizm: "Циркулирующие метаболиты не обнаружены; влияние на ферменты печени минимально",
      chiqarilish: "Преимущественно почками; ~80% дозы в моче в неизменённом виде. Клиренс пропорционален КК. Длительный T½ — приём 1 раз/сут или 1 раз/нед"
    },
    korsatmalar: [
      "Криптококкоз, включая криптококковый менингит",
      "Системный кандидоз, кандидемия, диссеминированный кандидоз",
      "Кандидоз слизистых (орофарингеальный, пищевода), вагинальный кандидоз",
      "Микозы кожи (стоп, паховой области), отрубевидный лишай, онихомикоз",
      "Глубокие эндемические микозы (кокцидиоидомикоз, паракокцидиоидомикоз, споротрихоз, гистоплазмоз)",
      "Профилактика грибковых инфекций при иммунодепрессии (злокачественные опухоли, цитостатики/лучевая терапия, трансплантация)"
    ],
    qarrshi: [
      "Гиперчувствительность к флуконазолу или производным азола",
      "Одновременный приём цизаприда",
      "Одновременный приём терфенадина (с флуконазолом ≥400 мг/сут)",
      "Беременность и период лактации",
      "Детский возраст до 16 лет (для системных препаратов)"
    ],
    nojoya: {
      "ЖКТ": "Снижение аппетита, изменение вкуса, боль в животе, тошнота, рвота, диарея, метеоризм",
      "Печень": "Нарушение функции печени — желтуха, гепатит, гепатонекроз, гипербилирубинемия, повышение трансаминаз и ЩФ (редко, иногда тяжёлое)",
      "ЦНС": "Головная боль, головокружение, утомляемость, редко судороги",
      "Кроветворение": "Лейкопения, тромбоцитопения, нейтропения, агранулоцитоз (редко)",
      "Аллергические": "Кожная сыпь, многоформная экссудативная эритема (синдром Стивенса–Джонсона), токсический эпидермальный некролиз (синдром Лайелла), анафилактоидные реакции, отёк Квинке",
      "Сердце": "Удлинение QT, мерцание/трепетание желудочков",
      "Прочие": "Нарушение функции почек, алопеция, гиперхолестеринемия, гипертриглицеридемия, гипокалиемия"
    },
    dozadan: "Симптомы: галлюцинации, параноидальное поведение. Лечение: симптоматическое (промывание желудка, форсированный диурез). Гемодиализ в первые 3 ч снижает концентрацию на 50%.",
    ozarotasir: [
      "Варфарин — повышает протромбиновое время на 12%, риск кровотечений (контроль МНО)",
      "Цизаприд — аритмии («пируэт»), абсолютное противопоказание",
      "Мидазолам/бензодиазепины — повышение концентрации и психомоторных эффектов",
      "Циклоспорин, такролимус — повышение концентрации (мониторинг)",
      "Производные сульфонилмочевины (глибенкламид, глипизид) — риск гипогликемии",
      "Фенитоин, рифабутин, теофиллин, зидовудин — повышение концентрации",
      "Рифампицин — снижает AUC флуконазола на 25% (возможно увеличение дозы)",
      "Гидрохлоротиазид — повышает концентрацию флуконазола на 40%"
    ],
    qollash: {
      kattalar: "Внутрь или в/в (≤20 мг/мин). Криптококковая инфекция/диссеминированный кандидоз: 1-й день 400 мг, затем 200–400 мг/сут. Орофарингеальный кандидоз: 50–100 мг/сут 7–10 дней. Вагинальный кандидоз: 150 мг однократно. Онихомикоз: 150 мг/нед. КК <50 мл/мин: 50% дозы или обычная доза 1 раз в 2 дня.",
      bolalar: "1 раз/сут. Кандидоз: 3 мг/кг/сут; генерализованный кандидоз и криптококковая инфекция: 6–12 мг/кг/сут 10–12 нед. Новорождённые: интервал 72 ч; 2–4 нед: интервал 48 ч. Суточная доза не должна превышать таковую у взрослых"
    },
    chiqarish: "Капсулы 50; 100; 150; 200 мг; сироп 5 мг/мл (0,5%); 0,2% раствор для в/в инфузии"
  },
  en: {
    gruppa: "Antifungal agents (triazoles)",
    farmTasir: "Highly selective antifungal for systemic mycoses",
    farmakodinamika: `Fluconazole is a triazole antifungal with highly specific activity, inhibiting fungal cytochrome P450-dependent enzymes. It blocks conversion of lanosterol to ergosterol in fungal cells, increasing membrane permeability and disrupting growth and replication. Being highly selective for fungal P450, it inhibits P450-dependent oxidative processes in human hepatic microsomes to a lesser degree than itraconazole, clotrimazole, econazole and ketoconazole. It has no antiandrogenic activity. Active against Candida spp. (including generalised forms under immunosuppression), Cryptococcus neoformans and Coccidioides immitis (including meningitis and encephalitis), Microsporum spp., Trichophyton spp.; and endemic mycoses (Blastomyces dermatidis, Histoplasma capsulatum).`,
    farmakokinetika: {
      sorish: "Well absorbed orally; bioavailability >90% (equal to IV). Food has no effect. Cmax 0.5–1.5 h fasting; concentration dose-proportional",
      tarqalish: "Vd approximates total body water. Low protein binding (11–12%). Penetrates all fluids well; CSF ~80% in meningitis. High, supra-serum concentrations in stratum corneum, epidermis-dermis and sweat, with accumulation",
      metabolizm: "No circulating metabolites detected; minimal effect on hepatic enzymes",
      chiqarilish: "Predominantly renal; ~80% excreted unchanged in urine. Clearance proportional to CrCl. Long T½ permits once-daily or once-weekly dosing"
    },
    korsatmalar: [
      "Cryptococcosis, including cryptococcal meningitis",
      "Systemic candidiasis, candidaemia, disseminated candidiasis",
      "Mucosal candidiasis (oropharyngeal, oesophageal), vaginal candidiasis",
      "Skin mycoses (feet, groin), pityriasis versicolor, onychomycosis",
      "Deep endemic mycoses (coccidioidomycosis, paracoccidioidomycosis, sporotrichosis, histoplasmosis)",
      "Prophylaxis of fungal infections in immunosuppression (malignancy, cytotoxic/radiation therapy, transplantation)"
    ],
    qarrshi: [
      "Hypersensitivity to fluconazole or azole derivatives",
      "Concomitant cisapride",
      "Concomitant terfenadine (with fluconazole ≥400 mg/day)",
      "Pregnancy and lactation",
      "Children under 16 years (for systemic preparations)"
    ],
    nojoya: {
      "Gastrointestinal": "Anorexia, taste disturbance, abdominal pain, nausea, vomiting, diarrhoea, flatulence",
      "Hepatic": "Hepatic dysfunction — jaundice, hepatitis, hepatonecrosis, hyperbilirubinaemia, raised transaminases and ALP (rare, occasionally severe)",
      "CNS": "Headache, dizziness, fatigue, rarely seizures",
      "Haematological": "Leucopenia, thrombocytopenia, neutropenia, agranulocytosis (rare)",
      "Hypersensitivity": "Rash, erythema multiforme (Stevens–Johnson syndrome), toxic epidermal necrolysis (Lyell syndrome), anaphylactoid reactions, angioedema",
      "Cardiac": "QT prolongation, ventricular fibrillation/flutter",
      "Other": "Renal dysfunction, alopecia, hypercholesterolaemia, hypertriglyceridaemia, hypokalaemia"
    },
    dozadan: "Symptoms: hallucinations, paranoid behaviour. Treatment: symptomatic (gastric lavage, forced diuresis). Haemodialysis within 3 h reduces concentration by 50%.",
    ozarotasir: [
      "Warfarin — increases prothrombin time by 12%, bleeding risk (monitor INR)",
      "Cisapride — arrhythmias (torsades de pointes), absolute contraindication",
      "Midazolam/benzodiazepines — increased concentration and psychomotor effects",
      "Ciclosporin, tacrolimus — raised concentration (monitor)",
      "Sulfonylureas (glibenclamide, glipizide) — hypoglycaemia risk",
      "Phenytoin, rifabutin, theophylline, zidovudine — increased concentration",
      "Rifampicin — reduces fluconazole AUC by 25% (dose increase may be needed)",
      "Hydrochlorothiazide — raises fluconazole concentration by 40%"
    ],
    qollash: {
      kattalar: "Oral or IV (≤20 mg/min). Cryptococcal/disseminated candidiasis: day 1 400 mg, then 200–400 mg/day. Oropharyngeal candidiasis: 50–100 mg/day for 7–10 days. Vaginal candidiasis: 150 mg single dose. Onychomycosis: 150 mg weekly. CrCl <50 mL/min: 50% of dose or usual dose every 2 days.",
      bolalar: "Once daily. Candidiasis: 3 mg/kg/day; generalised candidiasis and cryptococcal infection: 6–12 mg/kg/day for 10–12 weeks. Neonates: 72-h interval; 2–4 weeks: 48-h interval. Daily dose must not exceed the adult dose"
    },
    chiqarish: "Capsules 50, 100, 150, 200 mg; syrup 5 mg/mL (0.5%); 0.2% solution for IV infusion"
  }
},

// ─── J01XA01 · Vancomycin ─────────────────────────────────────────────────
"J01XA01": {
  uz: {
    gruppa: "Glikopeptid antibiotiklari",
    farmTasir: "Gram-musbat bakteriyalarga qarshi bakteritsid antibiotik",
    farmakodinamika: `Vankomitsin — glikopeptidlar guruhiga mansub antibiotik, bakteritsid ta'sir ko'rsatadi. Bakteriya hujayra devori sintezini, sitoplazmatik membrana o'tkazuvchanligini va RNK sintezini buzadi. Gram-musbat bakteriyalarga: Staphylococcus spp. (penitsillinaza ishlab chiqaradigan va metitsillinrezistent shtammlar ham), Streptococcus spp., Enterococcus spp., Corynebacterium spp., Listeria spp., Actinomyces spp., Clostridium spp. (Clostridium difficile ham) nisbatan faol. Boshqa guruh antibiotiklari bilan o'zaro chidamlilik kuzatilmagan.`,
    farmakokinetika: {
      sorish: "Tizimli infeksiyalarda i/v yuboriladi (og'iz orqali so'rilmaydi); Clostridium difficile kolitida og'iz orqali — ichak ichida ta'sir qiladi",
      tarqalish: "Aksariyat to'qima va suyuqliklarga keng tarqaladi. BBO dan yomon o'tadi, biroq miya pardalari yallig'langanda o'tkazuvchanligi ortadi. Platsenta to'sig'idan o'tadi. Zardob oqsillariga bog'lanish 55%",
      metabolizm: "Amalda metabolizmga uchramaydi",
      chiqarilish: "T½ 4–11 soat. 80–90% siydik bilan, oz miqdori o't bilan chiqariladi. Buyrak yetishmovchiligida doza KK ga qarab kamaytiriladi"
    },
    korsatmalar: [
      "Sezgir qo'zg'atuvchilar keltirib chiqargan og'ir infeksion-yallig'lanish kasalliklari (boshqa antibiotiklar, jumladan penitsillin yoki sefalosporinlar samarasiz yoki ko'tarilmaganda)",
      "Sepsis, endokardit (monoterapiya yoki kombinatsiyada)",
      "Pnevmoniya, o'pka abstsessi, meningit",
      "Suyak va bo'g'imlar infeksiyalari, teri va yumshoq to'qimalar infeksiyalari",
      "Clostridium difficile keltirib chiqargan psevdomembranoz kolit"
    ],
    qarrshi: [
      "Eshitish nervi nevriti",
      "Buyrak funksiyasining keskin buzilishi",
      "Homiladorlikning I trimestri",
      "Laktatsiya (emizish) davri",
      "Vankomitsinga o'ta sezuvchanlik"
    ],
    nojoya: {
      "Yurak": "Yurak to'xtashi, qizarish, AB pasayishi, shok (asosan tez infuziya bilan bog'liq)",
      "Qon tizimi": "Neytropeniya, eozinofiliya, trombotsitopeniya, agranulotsitoz",
      "Oshqozon-ichak": "Ko'ngil aynishi",
      "Buyrak": "Interstitsial nefrit, buyrak funksiyasi buzilishi",
      "Sezgi organlari": "Vertigo, quloqda shovqin, ototoksik ta'sirlar",
      "Teri": "Eksfoliativ dermatit, pufakli dermatoz, qichima, toshma",
      "Allergiya": "Eshakemi, Stivens-Johnson sindromi, toksik epidermal nekroliz, vaskulit, anafilaktoid reaksiyalar",
      "Boshqa": "Titroq, dori isitmasi, inyeksiya joyida nekroz va og'riq, tromboflebit; tez i/v yuborishda «qizil bo'yin sindromi» (gistamin chiqishi: eritema, yuz-bo'yin qizarishi, taxikardiya)"
    },
    dozadan: "Simptomatik davolash; eritma konsentratsiyasini nazorat qilish, buyrak va eshitish funksiyasini kuzatish. Maxsus antidot yo'q.",
    ozarotasir: [
      "Mahalliy anesteziklar — eritema, gistaminga o'xshash qizarish, anafilaktik shok",
      "Aminoglikozidlar, amfoteritsin B, sisplatin, tsiklosporin, furosemid, polimiksinlar — oto- va nefrotoksik ta'sir kuchayadi"
    ],
    qollash: {
      kattalar: "I/v tomchilab: 500 mg har 6 soatda yoki 1 g har 12 soatda; infuziya ≥60 daqiqa (kollaptoid reaksiyalarning oldini olish uchun). Maks. sutkalik doza i/v 3–4 g. Og'iz orqali (C. difficile): 0,5–2 g/sut 3–4 marta. Mushak ichiga yuborish taqiqlanadi (to'qima nekrozi xavfi).",
      bolalar: "I/v: 40 mg/kg/sut, har bir doza ≥60 daqiqa. Og'iz orqali: 40 mg/kg/sut 3–4 marta. Yangi tug'ilganlarda plazma konsentratsiyasi nazorat qilinadi"
    },
    chiqarish: "Infuziya eritmasi tayyorlash uchun kukun (flakonlar) 0,5 g; 1 g"
  },
  ru: {
    gruppa: "Антибиотики группы гликопептидов",
    farmTasir: "Бактерицидный антибиотик против грамположительных бактерий",
    farmakodinamika: `Ванкомицин — антибиотик группы гликопептидов, оказывает бактерицидное действие. Нарушает синтез клеточной стенки, проницаемость цитоплазматической мембраны и синтез РНК бактерий. Активен в отношении грамположительных бактерий: Staphylococcus spp. (включая пенициллиназопродуцирующие и метициллин-резистентные штаммы), Streptococcus spp., Enterococcus spp., Corynebacterium spp., Listeria spp., Actinomyces spp., Clostridium spp. (в т.ч. Clostridium difficile). Перекрёстной резистентности с антибиотиками других групп не отмечено.`,
    farmakokinetika: {
      sorish: "При системных инфекциях вводят в/в (внутрь не всасывается); при колите Clostridium difficile — внутрь, действует в просвете кишечника",
      tarqalish: "Широко распределяется в большинстве тканей и жидкостей. Плохо проникает через ГЭБ, но при воспалении оболочек проницаемость возрастает. Проникает через плаценту. Связь с белками плазмы 55%",
      metabolizm: "Практически не метаболизируется",
      chiqarilish: "T½ 4–11 ч. 80–90% выводится с мочой, небольшое количество с желчью. При почечной недостаточности дозу уменьшают с учётом КК"
    },
    korsatmalar: [
      "Тяжёлые инфекционно-воспалительные заболевания, вызванные чувствительными возбудителями (при неэффективности/непереносимости других антибиотиков, включая пенициллины и цефалоспорины)",
      "Сепсис, эндокардит (монотерапия или в комбинации)",
      "Пневмония, абсцесс лёгких, менингит",
      "Инфекции костей и суставов, кожи и мягких тканей",
      "Псевдомембранозный колит, вызванный Clostridium difficile"
    ],
    qarrshi: [
      "Неврит слухового нерва",
      "Выраженные нарушения функции почек",
      "I триместр беременности",
      "Период лактации (грудного вскармливания)",
      "Гиперчувствительность к ванкомицину"
    ],
    nojoya: {
      "Сердце": "Остановка сердца, приливы, снижение АД, шок (в основном при быстрой инфузии)",
      "Кроветворение": "Нейтропения, эозинофилия, тромбоцитопения, агранулоцитоз",
      "ЖКТ": "Тошнота",
      "Почки": "Интерстициальный нефрит, нарушение функции почек",
      "Органы чувств": "Вертиго, звон в ушах, ототоксические эффекты",
      "Кожа": "Эксфолиативный дерматит, пузырчатый дерматоз, зудящий дерматоз, сыпь",
      "Аллергические": "Крапивница, синдром Стивенса–Джонсона, токсический эпидермальный некролиз, васкулит, анафилактоидные реакции",
      "Прочие": "Озноб, лекарственная лихорадка, некроз и боль в местах инъекций, тромбофлебит; при быстром в/в введении «синдром красной шеи» (высвобождение гистамина: эритема, покраснение лица и шеи, тахикардия)"
    },
    dozadan: "Симптоматическая терапия; контроль концентрации, функции почек и слуха. Специфического антидота нет.",
    ozarotasir: [
      "Местные анестетики — эритема, гистаминоподобные приливы, анафилактический шок",
      "Аминогликозиды, амфотерицин В, цисплатин, циклоспорин, фуросемид, полимиксины — усиление ото- и нефротоксичности"
    ],
    qollash: {
      kattalar: "В/в капельно: 500 мг каждые 6 ч или 1 г каждые 12 ч; инфузия ≥60 мин (профилактика коллаптоидных реакций). Макс. суточная доза в/в 3–4 г. Внутрь (C. difficile): 0,5–2 г/сут в 3–4 приёма. В/м введение запрещено (риск некроза тканей).",
      bolalar: "В/в: 40 мг/кг/сут, каждую дозу ≥60 мин. Внутрь: 40 мг/кг/сут в 3–4 приёма. У новорождённых контролируют концентрацию в плазме"
    },
    chiqarish: "Порошок для приготовления раствора для инфузий (флаконы) 0,5 г; 1 г"
  },
  en: {
    gruppa: "Glycopeptide antibiotics",
    farmTasir: "Bactericidal antibiotic against Gram-positive bacteria",
    farmakodinamika: `Vancomycin is a glycopeptide antibiotic with bactericidal action. It disrupts bacterial cell wall synthesis, cytoplasmic membrane permeability and RNA synthesis. Active against Gram-positive bacteria: Staphylococcus spp. (including penicillinase-producing and methicillin-resistant strains), Streptococcus spp., Enterococcus spp., Corynebacterium spp., Listeria spp., Actinomyces spp., Clostridium spp. (including Clostridium difficile). No cross-resistance with antibiotics of other groups has been observed.`,
    farmakokinetika: {
      sorish: "For systemic infections given IV (not absorbed orally); in Clostridium difficile colitis given orally to act within the gut lumen",
      tarqalish: "Widely distributed in most tissues and fluids. Poor CNS penetration, increased with meningeal inflammation. Crosses the placenta. Plasma protein binding 55%",
      metabolizm: "Essentially not metabolised",
      chiqarilish: "T½ 4–11 h. 80–90% excreted in urine, small amount in bile. Dose reduced per CrCl in renal impairment"
    },
    korsatmalar: [
      "Severe infectious-inflammatory diseases caused by susceptible organisms (when other antibiotics including penicillins/cephalosporins are ineffective or not tolerated)",
      "Sepsis, endocarditis (monotherapy or combination)",
      "Pneumonia, lung abscess, meningitis",
      "Bone and joint infections, skin and soft tissue infections",
      "Pseudomembranous colitis caused by Clostridium difficile"
    ],
    qarrshi: [
      "Auditory nerve neuritis",
      "Severe renal impairment",
      "First trimester of pregnancy",
      "Lactation period",
      "Hypersensitivity to vancomycin"
    ],
    nojoya: {
      "Cardiac": "Cardiac arrest, flushing, hypotension, shock (mainly with rapid infusion)",
      "Haematological": "Neutropenia, eosinophilia, thrombocytopenia, agranulocytosis",
      "Gastrointestinal": "Nausea",
      "Renal": "Interstitial nephritis, renal dysfunction",
      "Sensory": "Vertigo, tinnitus, ototoxic effects",
      "Dermatological": "Exfoliative dermatitis, bullous dermatosis, pruritic dermatosis, rash",
      "Hypersensitivity": "Urticaria, Stevens–Johnson syndrome, toxic epidermal necrolysis, vasculitis, anaphylactoid reactions",
      "Other": "Chills, drug fever, injection-site necrosis and pain, thrombophlebitis; rapid IV gives red man syndrome (histamine release: erythema, face/neck flushing, tachycardia)"
    },
    dozadan: "Symptomatic treatment; monitor concentration, renal and auditory function. No specific antidote.",
    ozarotasir: [
      "Local anaesthetics — erythema, histamine-like flushing, anaphylactic shock",
      "Aminoglycosides, amphotericin B, cisplatin, ciclosporin, furosemide, polymyxins — enhanced oto- and nephrotoxicity"
    ],
    qollash: {
      kattalar: "IV infusion: 500 mg every 6 h or 1 g every 12 h; infuse over ≥60 min (to prevent collapse reactions). Max IV daily dose 3–4 g. Oral (C. difficile): 0.5–2 g/day in 3–4 doses. IM administration prohibited (tissue necrosis risk).",
      bolalar: "IV: 40 mg/kg/day, each dose over ≥60 min. Oral: 40 mg/kg/day in 3–4 doses. Monitor plasma concentration in neonates"
    },
    chiqarish: "Powder for solution for infusion (vials) 0.5 g; 1 g"
  }
},

// ─── J07B · Gam-COVID-Vac (Sputnik V) ─────────────────────────────────────
"J07B": {
  uz: {
    gruppa: "Virusli vaktsinalar",
    farmTasir: "SARS-CoV-2 (COVID-19) profilaktikasi uchun kombinatsiyalangan vektorli vaktsina",
    farmakodinamika: `Gam-KOVID-Vak — biotexnologik yo'l bilan olingan, inson uchun patogen SARS-CoV-2 virusi ishlatilmagan ikki komponentli vaktsina. I komponent inson 26-serotipidagi rekombinant adenovirus vektoriga, II komponent 5-serotipdagi adenovirus vektoriga asoslangan bo'lib, ikkalasi ham SARS-CoV-2 virusining S-oqsili genini olib yuradi. Vaktsina SARS-CoV-2 ga qarshi gumoral (antitanachalar) va hujayraviy (CD4+ T-xelper va CD8+ T-sitotoksik limfotsitlar, IFNγ sekretsiyasi) immunitet shakllanishini induktsiya qiladi. Replikatsiyalanmaydigan vektor hujayralarda S-oqsil ekspressiyasini ta'minlaydi.`,
    farmakokinetika: {
      sorish: "Faqat mushak ichiga (deltasimon mushak) yuboriladi; v/v yuborish qat'iyan taqiqlanadi. Tizimli farmakokinetik so'rilish tushunchasi vaktsinalarga taalluqli emas",
      tarqalish: "42-kunga seroversiya vaksinatsiya qilinganlarning 99,1% ida kuzatiladi va 180-kunga 93,9% ida saqlanadi; vaksinaning antigen-spetsifik T-hujayraviy immuniteti deyarli barcha tekshirilganlarda shakllanadi",
      metabolizm: "Rekombinant adenovirus vektori hujayralarda S-oqsil ekspressiyasini ta'minlaydi va replikatsiyalanmaydi",
      chiqarilish: "Himoya titri va himoya davomiyligi hozircha aniq belgilanmagan; III faza ma'lumotlariga ko'ra samaradorlik yovvoyi shtammga >91%, og'ir kechishga qarshi >88%"
    },
    korsatmalar: [
      "18 yoshdan katta kattalarda yangi koronavirus infeksiyasi (COVID-19) profilaktikasi"
    ],
    qarrshi: [
      "Vaktsina komponentlariga yoki oldingi dozaga o'ta sezuvchanlik",
      "Og'ir allergik reaksiyalar anamnezi",
      "O'tkir infeksion va noinfeksion kasalliklar, surunkali kasalliklarning zo'rayishi (sog'ayguncha yoki remissiyaga qadar kechiktiriladi)",
      "18 yoshgacha bo'lganlar (samaradorlik va xavfsizlik aniqlanmagan)",
      "Homiladorlik va emizish davri (ehtiyotkorlik bilan, faqat foyda xavfdan ustun bo'lganda)"
    ],
    nojoya: {
      "Umumiy": "Qisqa muddatli grippsimon sindrom — titroq, isitma, artralgiya va mialgiya, holsizlik, bosh og'rig'i",
      "Mahalliy": "Inyeksiya joyida og'riq, qizarish, shish",
      "Oshqozon-ichak": "Ko'ngil aynishi, dispepsiya, ishtaha pasayishi (kam)",
      "Allergiya": "Kam hollarda allergik reaksiyalar",
      "Boshqa": "Limfa tugunlari kattalashishi (kam)"
    },
    dozadan: "Doza oshib ketishi haqida ma'lumot yo'q. Yuboriladigan doza 0,5 ml dan oshmasligi kerak.",
    ozarotasir: [
      "Boshqa vaktsinalar bilan bir vaqtda qo'llash bo'yicha ma'lumotlar cheklangan",
      "Immunosupressiv terapiya immun javobni susaytirishi mumkin"
    ],
    qollash: {
      kattalar: "Faqat mushak ichiga (deltasimon mushak). Vaksinatsiya ikki bosqichda: avval I komponent 0,5 ml, 3 hafta o'tib II komponent 0,5 ml. Zarur bo'lganda I komponent bilan bir martalik vaksinatsiyaga ruxsat etiladi. Yuborilgandan keyin bemor 30 daqiqa kuzatuvda bo'ladi.",
      bolalar: "18 yoshgacha qo'llash ko'rsatilmagan"
    },
    chiqarish: "Mushak ichiga yuborish uchun eritma/suspenziya — muzlatilgan yoki suyuq shaklda (flakonlar, ampulalar); 1 doza = 0,5 ml"
  },
  ru: {
    gruppa: "Вирусные вакцины",
    farmTasir: "Комбинированная векторная вакцина для профилактики COVID-19 (SARS-CoV-2)",
    farmakodinamika: `Гам-КОВИД-Вак — двухкомпонентная вакцина, полученная биотехнологическим путём без использования патогенного для человека вируса SARS-CoV-2. Компонент I основан на рекомбинантном аденовирусном векторе человека 26 серотипа, компонент II — 5 серотипа; оба несут ген белка S вируса SARS-CoV-2. Вакцина индуцирует формирование гуморального (антитела) и клеточного (CD4+ Т-хелперы и CD8+ Т-цитотоксические лимфоциты, секреция ИФНγ) иммунитета против SARS-CoV-2. Нереплицирующийся вектор обеспечивает экспрессию белка S в клетках.`,
    farmakokinetika: {
      sorish: "Только внутримышечно (дельтовидная мышца); в/в введение строго запрещено. Понятие системной фармакокинетической абсорбции к вакцинам неприменимо",
      tarqalish: "Сероконверсия к 42 дню — у 99,1% вакцинированных, сохраняется к 180 дню у 93,9%; антиген-специфический клеточный иммунитет формируется практически у всех обследованных",
      metabolizm: "Рекомбинантный аденовирусный вектор обеспечивает экспрессию белка S в клетках и не реплицируется",
      chiqarilish: "Защитный титр и длительность защиты пока не установлены; по данным III фазы эффективность против дикого штамма >91%, против тяжёлого течения >88%"
    },
    korsatmalar: [
      "Профилактика новой коронавирусной инфекции (COVID-19) у взрослых старше 18 лет"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам вакцины или к предыдущей дозе",
      "Тяжёлые аллергические реакции в анамнезе",
      "Острые инфекционные и неинфекционные заболевания, обострение хронических (откладывают до выздоровления/ремиссии)",
      "Возраст до 18 лет (эффективность и безопасность не установлены)",
      "Беременность и лактация (с осторожностью, только если польза превышает риск)"
    ],
    nojoya: {
      "Общие": "Кратковременный гриппоподобный синдром — озноб, лихорадка, артралгия и миалгия, недомогание, головная боль",
      "Местные": "Болезненность, покраснение, отёк в месте инъекции",
      "ЖКТ": "Тошнота, диспепсия, снижение аппетита (редко)",
      "Аллергические": "Редко аллергические реакции",
      "Прочие": "Увеличение лимфатических узлов (редко)"
    },
    dozadan: "Данных о передозировке нет. Вводимая доза не должна превышать 0,5 мл.",
    ozarotasir: [
      "Данные по одновременному применению с другими вакцинами ограничены",
      "Иммуносупрессивная терапия может ослаблять иммунный ответ"
    ],
    qollash: {
      kattalar: "Только внутримышечно (дельтовидная мышца). Вакцинация в два этапа: сначала компонент I 0,5 мл, через 3 недели — компонент II 0,5 мл. При необходимости допускается однократная вакцинация компонентом I. После введения пациент находится под наблюдением 30 минут.",
      bolalar: "Не показана до 18 лет"
    },
    chiqarish: "Раствор/суспензия для в/м введения — замороженная или жидкая форма (флаконы, ампулы); 1 доза = 0,5 мл"
  },
  en: {
    gruppa: "Viral vaccines",
    farmTasir: "Combined vector vaccine for prevention of COVID-19 (SARS-CoV-2)",
    farmakodinamika: `Gam-COVID-Vac is a two-component vaccine produced biotechnologically without using the human-pathogenic SARS-CoV-2 virus. Component I is based on a recombinant human adenovirus serotype 26 vector and component II on serotype 5; both carry the gene for the SARS-CoV-2 spike (S) protein. The vaccine induces humoral (antibody) and cellular (CD4+ T-helper and CD8+ cytotoxic T-lymphocytes, IFN-γ secretion) immunity against SARS-CoV-2. The non-replicating vector drives S-protein expression in cells.`,
    farmakokinetika: {
      sorish: "Intramuscular only (deltoid muscle); IV administration strictly prohibited. The concept of systemic pharmacokinetic absorption does not apply to vaccines",
      tarqalish: "Seroconversion by day 42 in 99.1% of vaccinees, maintained at day 180 in 93.9%; antigen-specific cellular immunity forms in nearly all subjects examined",
      metabolizm: "The recombinant adenoviral vector drives S-protein expression in cells and does not replicate",
      chiqarilish: "Protective titre and duration of protection not yet established; phase III data show efficacy >91% against the wild strain and >88% against severe disease"
    },
    korsatmalar: [
      "Prevention of novel coronavirus infection (COVID-19) in adults over 18 years"
    ],
    qarrshi: [
      "Hypersensitivity to vaccine components or to a previous dose",
      "History of severe allergic reactions",
      "Acute infectious and non-infectious diseases, exacerbation of chronic conditions (defer until recovery/remission)",
      "Age under 18 years (efficacy and safety not established)",
      "Pregnancy and lactation (caution, only if benefit outweighs risk)"
    ],
    nojoya: {
      "General": "Short-lived flu-like syndrome — chills, fever, arthralgia and myalgia, malaise, headache",
      "Local": "Injection-site pain, redness, swelling",
      "Gastrointestinal": "Nausea, dyspepsia, decreased appetite (rare)",
      "Hypersensitivity": "Rare allergic reactions",
      "Other": "Lymph node enlargement (rare)"
    },
    dozadan: "No data on overdose. The administered dose must not exceed 0.5 mL.",
    ozarotasir: [
      "Data on concomitant use with other vaccines are limited",
      "Immunosuppressive therapy may weaken the immune response"
    ],
    qollash: {
      kattalar: "Intramuscular only (deltoid). Two-stage vaccination: component I 0.5 mL first, then component II 0.5 mL after 3 weeks. Single-dose vaccination with component I is permitted if necessary. The patient is observed for 30 minutes after administration.",
      bolalar: "Not indicated under 18 years"
    },
    chiqarish: "Solution/suspension for IM injection — frozen or liquid form (vials, ampoules); 1 dose = 0.5 mL"
  }
},

// ─── J01MB · Gatifloxacin ─────────────────────────────────────────────────
"J01MB": {
  uz: {
    gruppa: "Xinolonlar / ftorxinolonlar",
    farmTasir: "Keng spektrli antibakterial ftorxinolon",
    farmakodinamika: `Gatifloksatsin — 8-metoksiftorxinolon, keng spektrli antibakterial preparat. ДНК-giraza va topoizomeraza IV ni bloklab ДНК sintezini inhibe qiladi, ДНК uzilishlarining tikilishini buzadi, bakteriya sitoplazmasi, hujayra devori va membranasini zararlaydi. Hujayradan tashqari va ichida joylashgan mikroorganizmlarga ta'sir qiladi. Gram-musbat va gram-manfiy bakteriyalarga, anaerob mikrofloraga, shuningdek mikoplazma, rikketsiya, ureaplazmaga nisbatan keng faollikka ega. β-laktam va makrolid antibiotiklarga chidamli bakteriyalarga ta'sirchan. Sil mikobakteriyalari va H. pylori ham gatifloksatsinga sezgir.`,
    farmakokinetika: {
      sorish: "Og'iz orqali yaxshi so'riladi; mutlaq biologik faollik 96%. Cmax 1–2 soatda yetadi. Farmakokinetikasi 200–800 mg dozalarda chiziqli",
      tarqalish: "Zardob oqsillariga bog'lanish ~20% (konsentratsiyaga bog'liq emas). Ko'plab to'qima va suyuqliklarga (bronx shilliq pardasi, alveolyar makrofaglar, qin va bachadon bo'yni) keng tarqaladi; nishon organlarda zardobdan yuqori konsentratsiya hosil qiladi",
      metabolizm: "Organizmda cheklangan biotransformatsiyaga uchraydi; dozaning <1% siydikda metabolitlar shaklida chiqadi",
      chiqarilish: "O'zgarmagan holda asosan buyrak orqali (48 soatda >70%); 5% najas bilan"
    },
    korsatmalar: [
      "Pnevmoniya, surunkali bronxitning zo'rayishi",
      "Pielonefrit, asoratli va asoratsiz siydik yo'llari infeksiyalari (sistit)",
      "LOR-a'zolar infeksiyalari, jumladan o'tkir sinusit",
      "Teri va yumshoq to'qimalar infeksiyalari",
      "Jinsiy yo'l bilan yuqadigan kasalliklar (uretrit, tservitsit, proktit; gonokokk infeksiyalari)",
      "Oftalmologiyada: sezgir qo'zg'atuvchilar keltirib chiqargan bakterial konyunktivitlar"
    ],
    qarrshi: [
      "Gatifloksatsin yoki boshqa ftorxinolonlarga o'ta sezuvchanlik",
      "18 yoshgacha bolalar va o'smirlar",
      "Homiladorlik va emizish davri",
      "QT intervalining uzayishi; IA (xinidin, prokainamid) yoki III (amiodaron, sotalol) sinf antiaritmiklar bilan birga qo'llash (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, qorin og'rig'i, anoreksiya, diareya, qabziyat, dispepsiya, meteorizm, gastrit, glossit, stomatit",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, migren, uyqusizlik, ajitatsiya, xavotir, chalkashlik, paresteziya, tremor, tirishishlar, depressiya, periferik neyropatiya",
      "Yurak": "Taxikardiya, bradikardiya, arterial gipertenziya, QT uzayishi",
      "Tayanch-harakat": "Pay uzilishi xavfining oshishi, ossalgiya, artrit",
      "Nafas": "Giperventilyatsiya, bronxospazm",
      "Allergiya": "Yuz va og'iz shilliq pardasi shishi, generalizatsiyalangan shish, makulo-papulyoz va vezikulobullyoz toshma",
      "Boshqa": "Ko'krak va quloq og'rig'i, tashnalik, teri quruqligi, isitma, vaginit, gipoglikemiya, gematuriya",
      "Mahalliy (oftalmologiya)": "Konyunktiva tirnashishi, ko'z yoshlanishi, keratit, ko'z qurishi sindromi, ko'rish keskinligi pasayishi"
    },
    dozadan: "Maxsus ma'lumotlar yo'q. Simptomatik davolash; QT intervali va yurak faoliyatini nazorat qilish tavsiya etiladi.",
    ozarotasir: [
      "Antidiabetik vositalar (gliburid, insulin) — gipo/giperglikemiya, glyukoza nazorati zarur",
      "QT uzaytiruvchi preparatlar (sizaprid, eritromitsin, antipsixotiklar, trisiklik antidepressantlar), IA va III sinf antiaritmiklar — sinergistik QT uzayishi (ehtiyotkorlik)",
      "Digoksin — ba'zi bemorlarda konsentratsiyasi oshadi (nazorat)",
      "Probenetsid — gatifloksatsinning tizimli klirensini sezilarli oshiradi",
      "Varfarin — protrombin vaqtini nazorat qilish tavsiya etiladi",
      "NSAID — MNS tomonidan nojo'ya ta'sirlar, jumladan tirishishlar xavfini oshiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali yoki i/v infuziya: pnevmoniya, bronxit zo'rayishi, teri infeksiyalari, pielonefrit, asoratli siydik yo'llari infeksiyalarida 400 mg/sut yoki 200 mg 2 marta 7–10 kun. O'tkir sinusit: 400 mg/sut 7–14 kun. Asoratsiz sistit: 1-doza 400 mg, keyin 200 mg/sut 3 kun. Asoratsiz gonokokk infeksiyasi: 400 mg bir marta. Ovqatdan 1 soat oldin yoki 2 soat keyin.",
      bolalar: "Tizimli qo'llash 18 yoshgacha qarshi ko'rsatilgan. Oftalmologiyada (1 yoshdan): 1-kun har 2 soatda 1 tomchi (kuniga 8 martagacha), 2–7-kun 2–4 marta 1 tomchi"
    },
    chiqarish: "Pardali tabletkalar 200 mg va 400 mg; i/v infuziya uchun eritma 2 mg/ml; ko'z tomchilari 0,3%"
  },
  ru: {
    gruppa: "Хинолоны / фторхинолоны",
    farmTasir: "Антибактериальный фторхинолон широкого спектра",
    farmakodinamika: `Гатифлоксацин — 8-метоксифторхинолон, антибактериальный препарат широкого спектра. Ингибирует синтез ДНК, блокируя ДНК-гиразу и топоизомеразу IV, нарушает сшивку разрывов ДНК, разрушает цитоплазму, клеточную стенку и мембраны бактерий. Действует на вне- и внутриклеточно расположенные микроорганизмы. Обладает широкой активностью в отношении грамположительных и грамотрицательных бактерий, анаэробной микрофлоры, а также микоплазм, риккетсий, уреаплазм. Эффективен против бактерий, резистентных к β-лактамным и макролидным антибиотикам. К гатифлоксацину чувствительны микобактерии туберкулёза и H. pylori.`,
    farmakokinetika: {
      sorish: "Хорошо абсорбируется внутрь; абсолютная биодоступность 96%. Cmax через 1–2 ч. Фармакокинетика линейна в дозах 200–800 мг",
      tarqalish: "Связь с белками плазмы ~20% (не зависит от концентрации). Широко распределяется во многие ткани и жидкости (слизистая бронхов, альвеолярные макрофаги, влагалище и шейка матки); в органах-мишенях концентрации выше сывороточных",
      metabolizm: "Подвергается ограниченной биотрансформации; <1% дозы экскретируется с мочой в виде метаболитов",
      chiqarilish: "В неизменённом виде преимущественно почками (>70% за 48 ч); 5% с калом"
    },
    korsatmalar: [
      "Пневмония, обострение хронического бронхита",
      "Пиелонефрит, осложнённые и неосложнённые инфекции мочевых путей (цистит)",
      "Инфекции ЛОР-органов, включая острый синусит",
      "Инфекции кожи и мягких тканей",
      "Заболевания, передающиеся половым путём (уретрит, цервицит, проктит; гонококковые инфекции)",
      "В офтальмологии: бактериальные конъюнктивиты, вызванные чувствительными возбудителями"
    ],
    qarrshi: [
      "Гиперчувствительность к гатифлоксацину или другим фторхинолонам",
      "Детский и подростковый возраст до 18 лет",
      "Беременность и период лактации",
      "Удлинение интервала QT; одновременный приём антиаритмиков класса IА (хинидин, прокаинамид) или III (амиодарон, соталол) — с осторожностью"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, боль в животе, анорексия, диарея, запор, диспепсия, метеоризм, гастрит, глоссит, стоматит",
      "Нервная система": "Головная боль, головокружение, мигрень, бессонница, ажитация, тревожность, спутанность, парестезии, тремор, судороги, депрессия, периферическая невропатия",
      "Сердце": "Тахикардия, брадикардия, артериальная гипертензия, удлинение QT",
      "Костно-мышечная": "Повышенный риск разрыва сухожилий, оссалгии, артрит",
      "Дыхательная": "Гипервентиляция, бронхоспазм",
      "Аллергические": "Отёк лица и слизистой рта, генерализованный отёк, макуло-папулёзная и везикулобуллёзная сыпь",
      "Прочие": "Боль в груди и ушах, жажда, сухость кожи, лихорадка, вагинит, гипогликемия, гематурия",
      "Местные (офтальмология)": "Раздражение конъюнктивы, слезотечение, кератит, синдром сухого глаза, снижение остроты зрения"
    },
    dozadan: "Специальных данных нет. Симптоматическая терапия; рекомендуется контроль интервала QT и сердечной деятельности.",
    ozarotasir: [
      "Антидиабетические средства (глибурид, инсулин) — гипо/гипергликемия, контроль глюкозы",
      "Препараты, удлиняющие QT (цизаприд, эритромицин, антипсихотики, трициклические антидепрессанты), антиаритмики IА и III класса — синергистическое удлинение QT (осторожность)",
      "Дигоксин — у некоторых пациентов повышается концентрация (контроль)",
      "Пробенецид — значительно повышает системный клиренс гатифлоксацина",
      "Варфарин — рекомендуется контроль протромбинового времени",
      "НПВП — повышают риск побочных эффектов со стороны ЦНС, включая судороги"
    ],
    qollash: {
      kattalar: "Внутрь или в/в инфузия: при пневмонии, обострении бронхита, инфекциях кожи, пиелонефрите, осложнённых инфекциях мочевых путей — 400 мг/сут или 200 мг 2 раза 7–10 дней. Острый синусит: 400 мг/сут 7–14 дней. Неосложнённый цистит: 1-я доза 400 мг, затем 200 мг/сут 3 дня. Неосложнённая гонококковая инфекция: 400 мг однократно. За 1 ч до или через 2 ч после еды.",
      bolalar: "Системное применение противопоказано до 18 лет. В офтальмологии (с 1 года): день 1-й — по 1 капле каждые 2 ч (до 8 раз), дни 2–7 — по 1 капле 2–4 раза"
    },
    chiqarish: "Таблетки, покрытые оболочкой, 200 мг и 400 мг; раствор для в/в инфузии 2 мг/мл; глазные капли 0,3%"
  },
  en: {
    gruppa: "Quinolones / fluoroquinolones",
    farmTasir: "Broad-spectrum antibacterial fluoroquinolone",
    farmakodinamika: `Gatifloxacin is an 8-methoxyfluoroquinolone, a broad-spectrum antibacterial agent. It inhibits DNA synthesis by blocking DNA gyrase and topoisomerase IV, disrupts repair of DNA breaks, and damages bacterial cytoplasm, cell wall and membranes. It acts on both extracellular and intracellular organisms. It has broad activity against Gram-positive and Gram-negative bacteria, anaerobic flora, as well as mycoplasma, rickettsia and ureaplasma. Effective against bacteria resistant to β-lactam and macrolide antibiotics. Mycobacterium tuberculosis and H. pylori are also susceptible.`,
    farmakokinetika: {
      sorish: "Well absorbed orally; absolute bioavailability 96%. Cmax in 1–2 h. Pharmacokinetics linear over 200–800 mg",
      tarqalish: "Plasma protein binding ~20% (concentration-independent). Widely distributed into many tissues and fluids (bronchial mucosa, alveolar macrophages, vagina and cervix); concentrations in target organs exceed serum",
      metabolizm: "Undergoes limited biotransformation; <1% of dose excreted in urine as metabolites",
      chiqarilish: "Excreted unchanged predominantly by kidneys (>70% within 48 h); 5% in faeces"
    },
    korsatmalar: [
      "Pneumonia, exacerbation of chronic bronchitis",
      "Pyelonephritis, complicated and uncomplicated urinary tract infections (cystitis)",
      "ENT infections, including acute sinusitis",
      "Skin and soft tissue infections",
      "Sexually transmitted diseases (urethritis, cervicitis, proctitis; gonococcal infections)",
      "Ophthalmology: bacterial conjunctivitis caused by susceptible organisms"
    ],
    qarrshi: [
      "Hypersensitivity to gatifloxacin or other fluoroquinolones",
      "Children and adolescents under 18 years",
      "Pregnancy and lactation",
      "QT prolongation; concomitant class IA (quinidine, procainamide) or III (amiodarone, sotalol) antiarrhythmics — use with caution"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, abdominal pain, anorexia, diarrhoea, constipation, dyspepsia, flatulence, gastritis, glossitis, stomatitis",
      "Nervous system": "Headache, dizziness, migraine, insomnia, agitation, anxiety, confusion, paraesthesia, tremor, seizures, depression, peripheral neuropathy",
      "Cardiac": "Tachycardia, bradycardia, arterial hypertension, QT prolongation",
      "Musculoskeletal": "Increased tendon rupture risk, ossalgia, arthritis",
      "Respiratory": "Hyperventilation, bronchospasm",
      "Hypersensitivity": "Facial and oral mucosal oedema, generalised oedema, maculopapular and vesiculobullous rash",
      "Other": "Chest and ear pain, thirst, dry skin, fever, vaginitis, hypoglycaemia, haematuria",
      "Local (ophthalmic)": "Conjunctival irritation, lacrimation, keratitis, dry eye syndrome, reduced visual acuity"
    },
    dozadan: "No specific data. Symptomatic treatment; monitoring of QT interval and cardiac activity is recommended.",
    ozarotasir: [
      "Antidiabetic agents (glyburide, insulin) — hypo/hyperglycaemia, monitor glucose",
      "QT-prolonging drugs (cisapride, erythromycin, antipsychotics, tricyclic antidepressants), class IA and III antiarrhythmics — synergistic QT prolongation (caution)",
      "Digoxin — raised concentration in some patients (monitor)",
      "Probenecid — markedly increases systemic clearance of gatifloxacin",
      "Warfarin — monitoring of prothrombin time recommended",
      "NSAIDs — increase risk of CNS adverse effects, including seizures"
    ],
    qollash: {
      kattalar: "Oral or IV infusion: for pneumonia, bronchitis exacerbation, skin infections, pyelonephritis, complicated UTIs — 400 mg/day or 200 mg twice daily for 7–10 days. Acute sinusitis: 400 mg/day for 7–14 days. Uncomplicated cystitis: 400 mg first dose, then 200 mg/day for 3 days. Uncomplicated gonococcal infection: 400 mg single dose. Take 1 h before or 2 h after food.",
      bolalar: "Systemic use contraindicated under 18 years. Ophthalmology (from 1 year): day 1 — 1 drop every 2 h (up to 8 times), days 2–7 — 1 drop 2–4 times daily"
    },
    chiqarish: "Film-coated tablets 200 mg and 400 mg; solution for IV infusion 2 mg/mL; eye drops 0.3%"
  }
},

// ─── A01AB · Metronidazol + Xlorgeksidin (stomatologik) ───────────────────
"A01AB": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antiinfeksion va antiseptik vositalar",
    farmTasir: "Stomatologiyada qo'llaniladigan antibakterial va antiseptik kombinatsiya",
    farmakodinamika: `Metronidazol va xlorgeksidin kombinatsiyasi. Metronidazol — 5-nitroimidazol hosilasi bo'lib, anaerob bakteriyalar va sodda jonivorlarning ДНК sintezini buzadi (qaytarilgan nitroguruh ДНК bilan bog'lanadi); periodontal patogenlarga (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium spp., anaerob streptokokklar) faol. Xlorgeksidin — bisbiguanid antiseptik, bakteriya hujayra membranasiga bog'lanib uni shikastlaydi, gram-musbat va gram-manfiy bakteriyalar, zamburug'larga nisbatan bakteritsid. Kombinatsiya gingivit va periodontitda mikrob plyonkasini bostiradi.`,
    farmakokinetika: {
      sorish: "Mahalliy qo'llashda tizimli so'rilish minimal",
      tarqalish: "Og'iz shilliq pardasi va milk yuzasida ta'sir qiladi; tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Mahalliy qo'llashda klinik ahamiyatga ega metabolizm yo'q",
      chiqarilish: "Yutilgan oz miqdori metronidazol jigarda metabolizmga uchrab buyrak orqali chiqariladi"
    },
    korsatmalar: [
      "O'tkir va surunkali gingivit",
      "Periodontit, periodontal abstsesslar",
      "Aftoz stomatit",
      "Xeylit, milk qonashi",
      "Tishni olib tashlashdan keyingi yallig'lanish profilaktikasi"
    ],
    qarrshi: [
      "Metronidazol yoki xlorgeksidinga o'ta sezuvchanlik",
      "6 yoshgacha bolalar",
      "Homiladorlikning I trimestri (ehtiyotkorlik bilan)"
    ],
    nojoya: {
      "Mahalliy": "Achishish, og'iz qurishi, ta'm sezgisining vaqtincha o'zgarishi",
      "Allergiya": "Milk shilliq pardasi qichishi, toshma",
      "Boshqa": "Uzoq qo'llashda tish emalining qaytar dog'lanishi (xlorgeksidin)"
    },
    dozadan: "Mahalliy qo'llashda doza oshib ketishi ehtimoli past. Tasodifan yutilganda — simptomatik davolash.",
    ozarotasir: [
      "Xlorgeksidin anion saqlovchi tish pastalari (natriy lauril sulfat) bilan faolligini yo'qotadi — qo'llash orasida 30 daqiqa farq",
      "Etanol bilan metronidazol disulfiramsimon reaksiya berishi mumkin"
    ],
    qollash: {
      kattalar: "Gelni kuniga 2 marta milkka surtish yoki applikatsiya; kurs odatda 7–10 kun.",
      bolalar: "6 yoshdan: kattalardagidek, shifokor nazorati ostida"
    },
    chiqarish: "Stomatologik gel (metronidazol + xlorgeksidin)"
  },
  ru: {
    gruppa: "Местные противоинфекционные и антисептические средства для полости рта",
    farmTasir: "Антибактериальная и антисептическая комбинация для стоматологии",
    farmakodinamika: `Комбинация метронидазола и хлоргексидина. Метронидазол — производное 5-нитроимидазола, нарушает синтез ДНК анаэробных бактерий и простейших (восстановленная нитрогруппа связывается с ДНК); активен в отношении пародонтопатогенов (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium spp., анаэробные стрептококки). Хлоргексидин — бисбигуанидный антисептик, связывается с мембраной бактерий и повреждает её, оказывая бактерицидное действие на грамположительные и грамотрицательные бактерии и грибы. Комбинация подавляет микробную биоплёнку при гингивите и пародонтите.`,
    farmakokinetika: {
      sorish: "При местном применении системная абсорбция минимальна",
      tarqalish: "Действует на слизистой полости рта и поверхности дёсен; системное распределение незначительно",
      metabolizm: "Клинически значимый метаболизм при местном применении отсутствует",
      chiqarilish: "Проглоченное небольшое количество метронидазола метаболизируется в печени и выводится почками"
    },
    korsatmalar: [
      "Острый и хронический гингивит",
      "Пародонтит, пародонтальные абсцессы",
      "Афтозный стоматит",
      "Хейлит, кровоточивость дёсен",
      "Профилактика воспаления после удаления зуба"
    ],
    qarrshi: [
      "Гиперчувствительность к метронидазолу или хлоргексидину",
      "Детский возраст до 6 лет",
      "I триместр беременности (с осторожностью)"
    ],
    nojoya: {
      "Местные": "Жжение, сухость во рту, временное изменение вкуса",
      "Аллергические": "Зуд слизистой дёсен, сыпь",
      "Прочие": "Обратимое окрашивание эмали зубов при длительном применении (хлоргексидин)"
    },
    dozadan: "При местном применении передозировка маловероятна. При случайном проглатывании — симптоматическое лечение.",
    ozarotasir: [
      "Хлоргексидин теряет активность с анионными зубными пастами (натрия лаурилсульфат) — интервал 30 минут",
      "С этанолом метронидазол может давать дисульфирамоподобную реакцию"
    ],
    qollash: {
      kattalar: "Гель наносить на дёсны 2 раза в день или в виде аппликаций; курс обычно 7–10 дней.",
      bolalar: "С 6 лет: как у взрослых, под контролем врача"
    },
    chiqarish: "Стоматологический гель (метронидазол + хлоргексидин)"
  },
  en: {
    gruppa: "Local anti-infective and antiseptic agents for oral treatment",
    farmTasir: "Antibacterial and antiseptic combination for dentistry",
    farmakodinamika: `A combination of metronidazole and chlorhexidine. Metronidazole, a 5-nitroimidazole derivative, disrupts DNA synthesis of anaerobic bacteria and protozoa (its reduced nitro group binds DNA); active against periodontal pathogens (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium spp., anaerobic streptococci). Chlorhexidine, a bisbiguanide antiseptic, binds to and damages the bacterial membrane, exerting bactericidal activity against Gram-positive and Gram-negative bacteria and fungi. The combination suppresses microbial biofilm in gingivitis and periodontitis.`,
    farmakokinetika: {
      sorish: "Systemic absorption is minimal with topical use",
      tarqalish: "Acts on the oral mucosa and gingival surface; systemic distribution negligible",
      metabolizm: "No clinically significant metabolism with topical use",
      chiqarilish: "Small swallowed amounts of metronidazole are hepatically metabolised and renally excreted"
    },
    korsatmalar: [
      "Acute and chronic gingivitis",
      "Periodontitis, periodontal abscesses",
      "Aphthous stomatitis",
      "Cheilitis, bleeding gums",
      "Prophylaxis of inflammation after tooth extraction"
    ],
    qarrshi: [
      "Hypersensitivity to metronidazole or chlorhexidine",
      "Children under 6 years",
      "First trimester of pregnancy (use with caution)"
    ],
    nojoya: {
      "Local": "Burning, dry mouth, transient taste alteration",
      "Hypersensitivity": "Gingival mucosal itching, rash",
      "Other": "Reversible tooth enamel staining with prolonged use (chlorhexidine)"
    },
    dozadan: "Overdose unlikely with topical use. If accidentally swallowed — symptomatic treatment.",
    ozarotasir: [
      "Chlorhexidine is inactivated by anionic toothpastes (sodium lauryl sulfate) — separate by 30 minutes",
      "Metronidazole may cause a disulfiram-like reaction with ethanol"
    ],
    qollash: {
      kattalar: "Apply gel to the gums twice daily or as applications; course usually 7–10 days.",
      bolalar: "From 6 years: as in adults, under medical supervision"
    },
    chiqarish: "Dental gel (metronidazole + chlorhexidine)"
  }
},

// ─── A01AB03 · Xlorgeksidin ───────────────────────────────────────────────
"A01AB03": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antiseptiklar",
    farmTasir: "Keng spektrli antiseptik va dezinfeksiyalovchi vosita",
    farmakodinamika: `Xlorgeksidin — bisbiguanid guruhiga mansub antiseptik. Musbat zaryadlangan molekulasi bakteriya hujayra devorining manfiy zaryadlangan guruhlariga bog'lanib, sitoplazmatik membrana o'tkazuvchanligini buzadi va hujayra ichidagi komponentlarning chiqib ketishiga olib keladi; past konsentratsiyada bakteriostatik, yuqori konsentratsiyada bakteritsid. Gram-musbat va gram-manfiy bakteriyalar, xachamir zamburug'lari va ba'zi viruslarga ta'sirchan. Sil mikobakteriyasi va bakterial sporalarga zaif ta'sir qiladi. Og'iz shilliq pardasi va tishlarga bog'lanib uzoq ta'sir (substantivlik) ko'rsatadi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichak yo'lidan deyarli so'rilmaydi; mahalliy ta'sir qiladi",
      tarqalish: "Og'iz shilliq pardasi, tish yuzasi va pellikulaga bog'lanadi; 8–12 soatgacha saqlanadi",
      metabolizm: "Tizimli metabolizmga uchramaydi",
      chiqarilish: "Asosan najas bilan o'zgarmagan holda chiqadi"
    },
    korsatmalar: [
      "Gingivit, stomatit, periodontit",
      "Og'iz bo'shlig'i va halqumning antiseptik ishlovi",
      "Tish jarrohligi va ekstraksiyadan keyingi infeksiya profilaktikasi",
      "Tish protezlarini parvarish qilish",
      "Teri va shilliq pardalarni dezinfeksiyalash"
    ],
    qarrshi: [
      "Xlorgeksidinga o'ta sezuvchanlik",
      "Dermatitlar",
      "Boshqa antiseptiklar bilan birga ishlatish (ayniqsa anionli)"
    ],
    nojoya: {
      "Mahalliy": "Ta'm sezgisining buzilishi, og'iz qurishi, achishish",
      "Tishlar": "Uzoq qo'llashda tish va til yuzasining qaytar jigarrang dog'lanishi, tish toshi to'planishi",
      "Allergiya": "Dermatit, qichishish, kamdan-kam anafilaktik reaksiya"
    },
    dozadan: "Tasodifan yutilganda (>300 ml 0,05% eritma) — oshqozonni yuvish, simptomatik davolash.",
    ozarotasir: [
      "Anionli birikmalar (sovun, natriy lauril sulfat) xlorgeksidin faolligini kamaytiradi",
      "Boshqa antiseptiklar bilan mos kelmasligi mumkin"
    ],
    qollash: {
      kattalar: "0,05–0,2% eritma bilan og'izni kuniga 2–3 marta chayish (10–15 ml, 30 soniya); ovqatdan keyin.",
      bolalar: "6 yoshdan: katta nazorati ostida, yutmaslik sharti bilan"
    },
    chiqarish: "Og'iz chayish eritmasi 0,05%; 0,1%; 0,2%; sprey; gel"
  },
  ru: {
    gruppa: "Местные антисептики для полости рта",
    farmTasir: "Антисептик и дезинфицирующее средство широкого спектра",
    farmakodinamika: `Хлоргексидин — антисептик группы бисбигуанидов. Его положительно заряженная молекула связывается с отрицательно заряженными группами клеточной стенки бактерий, нарушает проницаемость цитоплазматической мембраны и вызывает выход внутриклеточных компонентов; в низких концентрациях бактериостатичен, в высоких — бактерициден. Активен в отношении грамположительных и грамотрицательных бактерий, дрожжевых грибов и некоторых вирусов. Слабо действует на микобактерии туберкулёза и бактериальные споры. Связывается со слизистой и зубами, обеспечивая длительное действие (субстантивность).`,
    farmakokinetika: {
      sorish: "Практически не всасывается из ЖКТ; действует местно",
      tarqalish: "Связывается со слизистой полости рта, поверхностью зубов и пелликулой; удерживается до 8–12 ч",
      metabolizm: "Системному метаболизму не подвергается",
      chiqarilish: "Выводится преимущественно с калом в неизменённом виде"
    },
    korsatmalar: [
      "Гингивит, стоматит, пародонтит",
      "Антисептическая обработка полости рта и глотки",
      "Профилактика инфекции после стоматологических операций и экстракции",
      "Уход за зубными протезами",
      "Дезинфекция кожи и слизистых"
    ],
    qarrshi: [
      "Гиперчувствительность к хлоргексидину",
      "Дерматиты",
      "Совместное применение с другими антисептиками (особенно анионными)"
    ],
    nojoya: {
      "Местные": "Нарушение вкуса, сухость во рту, жжение",
      "Зубы": "Обратимое коричневое окрашивание зубов и языка при длительном применении, отложение зубного камня",
      "Аллергические": "Дерматит, зуд, редко анафилактическая реакция"
    },
    dozadan: "При случайном проглатывании (>300 мл 0,05% раствора) — промывание желудка, симптоматическое лечение.",
    ozarotasir: [
      "Анионные соединения (мыло, натрия лаурилсульфат) снижают активность хлоргексидина",
      "Может быть несовместим с другими антисептиками"
    ],
    qollash: {
      kattalar: "Полоскание рта 0,05–0,2% раствором 2–3 раза в день (10–15 мл, 30 секунд); после еды.",
      bolalar: "С 6 лет: под контролем взрослых, не проглатывая"
    },
    chiqarish: "Раствор для полоскания 0,05%; 0,1%; 0,2%; спрей; гель"
  },
  en: {
    gruppa: "Local antiseptics for oral treatment",
    farmTasir: "Broad-spectrum antiseptic and disinfectant",
    farmakodinamika: `Chlorhexidine is a bisbiguanide antiseptic. Its positively charged molecule binds to negatively charged groups of the bacterial cell wall, disrupts cytoplasmic membrane permeability and causes leakage of intracellular components; bacteriostatic at low and bactericidal at high concentrations. Active against Gram-positive and Gram-negative bacteria, yeasts and some viruses. Weak activity against mycobacteria and bacterial spores. It binds to oral mucosa and teeth, providing prolonged action (substantivity).`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the GI tract; acts locally",
      tarqalish: "Binds to oral mucosa, tooth surface and pellicle; retained for 8–12 h",
      metabolizm: "Not subject to systemic metabolism",
      chiqarilish: "Excreted mainly unchanged in faeces"
    },
    korsatmalar: [
      "Gingivitis, stomatitis, periodontitis",
      "Antiseptic treatment of the oral cavity and pharynx",
      "Infection prophylaxis after dental surgery and extraction",
      "Denture care",
      "Disinfection of skin and mucous membranes"
    ],
    qarrshi: [
      "Hypersensitivity to chlorhexidine",
      "Dermatitis",
      "Concurrent use with other antiseptics (especially anionic)"
    ],
    nojoya: {
      "Local": "Taste disturbance, dry mouth, burning",
      "Teeth": "Reversible brown staining of teeth and tongue with prolonged use, tartar deposition",
      "Hypersensitivity": "Dermatitis, itching, rarely anaphylactic reaction"
    },
    dozadan: "If accidentally swallowed (>300 mL of 0.05% solution) — gastric lavage, symptomatic treatment.",
    ozarotasir: [
      "Anionic compounds (soap, sodium lauryl sulfate) reduce chlorhexidine activity",
      "May be incompatible with other antiseptics"
    ],
    qollash: {
      kattalar: "Rinse the mouth with 0.05–0.2% solution 2–3 times daily (10–15 mL, 30 seconds); after meals.",
      bolalar: "From 6 years: under adult supervision, without swallowing"
    },
    chiqarish: "Mouthwash solution 0.05%, 0.1%, 0.2%; spray; gel"
  }
},

// ─── A01AB09 · Mikonazol (og'iz) ──────────────────────────────────────────
"A01AB09": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antifungal vositalar",
    farmTasir: "Og'iz kandidoziga qarshi imidazol antifungal",
    farmakodinamika: `Mikonazol — imidazol guruhiga mansub zamburug'larga qarshi preparat. Zamburug' sitoxromi P450 ga bog'liq 14α-demetilaza fermentini inhibe qilib, ergosterol biosintezini buzadi; hujayra membranasi o'tkazuvchanligi oshadi, zamburug' halok bo'ladi. Candida albicans va boshqa Candida turlariga, dermatofitlarga, shuningdek ba'zi gram-musbat bakteriyalarga (stafilokokk, streptokokk) faol. Og'iz bo'shlig'i kandidozida mahalliy yuqori konsentratsiya hosil qiladi.`,
    farmakokinetika: {
      sorish: "Og'iz gelidan tizimli so'rilish past, lekin yutilganda qisman so'riladi",
      tarqalish: "So'lakda va og'iz shilliq pardasida ta'sirchan konsentratsiya; gel uzoq ushlanib turadi",
      metabolizm: "So'rilgan qismi jigarda metabolizmga uchraydi (CYP450)",
      chiqarilish: "Asosan najas bilan; oz qismi siydik orqali"
    },
    korsatmalar: [
      "Og'iz bo'shlig'i va halqum kandidozi (soor)",
      "Tish protezi ostidagi kandidozli stomatit",
      "Oshqozon-ichak yo'lining yuqori qismi kandidozi profilaktikasi"
    ],
    qarrshi: [
      "Mikonazol yoki boshqa imidazollarga o'ta sezuvchanlik",
      "Jigar funksiyasining og'ir buzilishi",
      "Varfarin, ba'zi statinlar, triazolam bilan birga qo'llash (CYP ta'siri)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, og'izda noxush sezgi, qusish (kam)",
      "Allergiya": "Og'iz shilliq pardasi qichishi, toshma",
      "Jigar": "Uzoq qo'llashda transaminazalar oshishi (kam)"
    },
    dozadan: "Maxsus antidot yo'q. Tasodifan ko'p yutilганda simptomatik davolash.",
    ozarotasir: [
      "Varfarin — antikoagulyant ta'sirini kuchaytiradi (qon ketish xavfi, INR nazorati)",
      "CYP3A4 substratlari (statinlar, triazolam, siklosporin) — konsentratsiyasi oshadi",
      "Peroral antidiabetiklar — gipoglikemiya xavfi"
    ],
    qollash: {
      kattalar: "Og'iz geli: 2,5 ml kuniga 4 marta, gelni og'izda imkon qadar ushlab turish; simptomlar yo'qolgach 7 kun davom ettirish.",
      bolalar: "4 oydan: 1,25–2,5 ml kuniga 2–4 marta (yoshга qarab), tiqilib qolish xavfi uchun ehtiyotkorlik bilan"
    },
    chiqarish: "Og'iz uchun gel 2% (20 mg/g)"
  },
  ru: {
    gruppa: "Местные противогрибковые средства для полости рта",
    farmTasir: "Имидазольный антимикотик против кандидоза полости рта",
    farmakodinamika: `Миконазол — противогрибковое средство группы имидазолов. Ингибирует зависимую от цитохрома Р450 14α-деметилазу грибов, нарушая биосинтез эргостерола; повышается проницаемость клеточной мембраны, и гриб погибает. Активен в отношении Candida albicans и других видов Candida, дерматофитов, а также некоторых грамположительных бактерий (стафилококки, стрептококки). При кандидозе полости рта создаёт высокую местную концентрацию.`,
    farmakokinetika: {
      sorish: "Системная абсорбция из орального геля низкая, но при проглатывании частично всасывается",
      tarqalish: "Действующие концентрации в слюне и слизистой рта; гель длительно удерживается",
      metabolizm: "Всосавшаяся часть метаболизируется в печени (CYP450)",
      chiqarilish: "Преимущественно с калом; небольшая часть с мочой"
    },
    korsatmalar: [
      "Кандидоз полости рта и глотки (молочница)",
      "Кандидозный стоматит под зубными протезами",
      "Профилактика кандидоза верхних отделов ЖКТ"
    ],
    qarrshi: [
      "Гиперчувствительность к миконазолу или другим имидазолам",
      "Тяжёлые нарушения функции печени",
      "Одновременный приём варфарина, некоторых статинов, триазолама (влияние на CYP)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, неприятные ощущения во рту, рвота (редко)",
      "Аллергические": "Зуд слизистой рта, сыпь",
      "Печень": "Повышение трансаминаз при длительном применении (редко)"
    },
    dozadan: "Специфического антидота нет. При случайном проглатывании большого количества — симптоматическое лечение.",
    ozarotasir: [
      "Варфарин — усиливает антикоагулянтный эффект (риск кровотечений, контроль МНО)",
      "Субстраты CYP3A4 (статины, триазолам, циклоспорин) — повышение концентрации",
      "Пероральные антидиабетики — риск гипогликемии"
    ],
    qollash: {
      kattalar: "Оральный гель: 2,5 мл 4 раза в день, удерживая гель во рту как можно дольше; продолжать 7 дней после исчезновения симптомов.",
      bolalar: "С 4 месяцев: 1,25–2,5 мл 2–4 раза в день (по возрасту), с осторожностью из-за риска аспирации"
    },
    chiqarish: "Гель для полости рта 2% (20 мг/г)"
  },
  en: {
    gruppa: "Local antifungal agents for oral treatment",
    farmTasir: "Imidazole antifungal for oral candidiasis",
    farmakodinamika: `Miconazole is an imidazole antifungal. It inhibits fungal cytochrome P450-dependent 14α-demethylase, disrupting ergosterol biosynthesis; membrane permeability increases and the fungus dies. Active against Candida albicans and other Candida species, dermatophytes, and some Gram-positive bacteria (staphylococci, streptococci). It achieves high local concentrations in oral candidiasis.`,
    farmakokinetika: {
      sorish: "Systemic absorption from the oral gel is low, but partial absorption occurs if swallowed",
      tarqalish: "Active concentrations in saliva and oral mucosa; the gel is retained for a prolonged time",
      metabolizm: "The absorbed fraction is metabolised in the liver (CYP450)",
      chiqarilish: "Mainly in faeces; a small part in urine"
    },
    korsatmalar: [
      "Oral and pharyngeal candidiasis (thrush)",
      "Candidal stomatitis under dentures",
      "Prophylaxis of upper GI tract candidiasis"
    ],
    qarrshi: [
      "Hypersensitivity to miconazole or other imidazoles",
      "Severe hepatic impairment",
      "Concomitant warfarin, certain statins, triazolam (CYP effect)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, unpleasant oral sensation, vomiting (rare)",
      "Hypersensitivity": "Oral mucosal itching, rash",
      "Hepatic": "Raised transaminases with prolonged use (rare)"
    },
    dozadan: "No specific antidote. If a large amount is accidentally swallowed — symptomatic treatment.",
    ozarotasir: [
      "Warfarin — enhances anticoagulant effect (bleeding risk, monitor INR)",
      "CYP3A4 substrates (statins, triazolam, ciclosporin) — raised concentration",
      "Oral antidiabetics — hypoglycaemia risk"
    ],
    qollash: {
      kattalar: "Oral gel: 2.5 mL four times daily, holding the gel in the mouth as long as possible; continue 7 days after symptoms resolve.",
      bolalar: "From 4 months: 1.25–2.5 mL 2–4 times daily (by age), with caution due to aspiration risk"
    },
    chiqarish: "Oral gel 2% (20 mg/g)"
  }
},

// ─── A01AB11 · Xlorgeksidin + Xlorbutanol (antiseptik) ────────────────────
"A01AB11": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antiseptiklar (kombinatsiyalar)",
    farmTasir: "Antiseptik va yumshoq mahalliy og'riqsizlantiruvchi kombinatsiya",
    farmakodinamika: `Xlorgeksidin va xlorbutanol kombinatsiyasi. Xlorgeksidin — bisbiguanid antiseptik, bakteriya membranasini buzib gram-musbat va gram-manfiy bakteriyalar hamda zamburug'larga bakteritsid ta'sir qiladi. Xlorbutanol — antiseptik va konservant xususiyatiga ega, shuningdek yengil mahalliy og'riqsizlantiruvchi va tinchlantiruvchi ta'sir ko'rsatadi. Kombinatsiya og'iz va halqum shilliq pardasidagi infeksiya va yallig'lanishni kamaytiradi.`,
    farmakokinetika: {
      sorish: "Mahalliy qo'llashda tizimli so'rilish ahamiyatsiz",
      tarqalish: "Og'iz-halqum shilliq pardasida ta'sir qiladi",
      metabolizm: "Klinik ahamiyatga ega metabolizm yo'q",
      chiqarilish: "So'rilgan oz qism buyrak/jigar orqali"
    },
    korsatmalar: [
      "Faringit, tonzillit, stomatit, gingivit",
      "Og'iz va halqumning antiseptik ishlovi",
      "Lar3it va og'iz bo'shlig'i yallig'lanishlari"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Atrofik faringit",
      "6 yoshgacha bolalar (shakliga qarab)"
    ],
    nojoya: {
      "Mahalliy": "Achishish, ta'm sezgisining vaqtincha o'zgarishi, og'iz qurishi",
      "Tishlar": "Uzoq qo'llashda tishlarning qaytar dog'lanishi",
      "Allergiya": "Shilliq parda qichishi, toshma"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past; ko'p yutilganda simptomatik davolash.",
    ozarotasir: [
      "Anionli vositalar (tish pastasi tarkibidagi) xlorgeksidin faolligini kamaytiradi",
      "Boshqa antiseptiklar bilan bir vaqtda tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "Og'izni chayish yoki purkash kuniga 2–3 marta; ovqatdan keyin.",
      bolalar: "6 yoshdan: katta nazorati ostida"
    },
    chiqarish: "Og'iz chayish eritmasi / sprey (xlorgeksidin + xlorbutanol)"
  },
  ru: {
    gruppa: "Местные антисептики для полости рта (комбинации)",
    farmTasir: "Антисептическая комбинация с мягким местноанестезирующим действием",
    farmakodinamika: `Комбинация хлоргексидина и хлорбутанола. Хлоргексидин — бисбигуанидный антисептик, нарушает мембрану бактерий и оказывает бактерицидное действие на грамположительные и грамотрицательные бактерии и грибы. Хлорбутанол обладает антисептическими и консервирующими свойствами, а также лёгким местноанестезирующим и успокаивающим действием. Комбинация уменьшает инфекцию и воспаление слизистой рта и глотки.`,
    farmakokinetika: {
      sorish: "При местном применении системная абсорбция незначительна",
      tarqalish: "Действует на слизистой ротоглотки",
      metabolizm: "Клинически значимый метаболизм отсутствует",
      chiqarilish: "Всосавшаяся малая часть выводится почками/печенью"
    },
    korsatmalar: [
      "Фарингит, тонзиллит, стоматит, гингивит",
      "Антисептическая обработка рта и глотки",
      "Ларингит и воспаления полости рта"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Атрофический фарингит",
      "Детский возраст до 6 лет (в зависимости от формы)"
    ],
    nojoya: {
      "Местные": "Жжение, временное изменение вкуса, сухость во рту",
      "Зубы": "Обратимое окрашивание зубов при длительном применении",
      "Аллергические": "Зуд слизистой, сыпь"
    },
    dozadan: "При местном применении маловероятна; при проглатывании большого количества — симптоматическое лечение.",
    ozarotasir: [
      "Анионные средства (в составе зубных паст) снижают активность хлоргексидина",
      "Не рекомендуется одновременно с другими антисептиками"
    ],
    qollash: {
      kattalar: "Полоскание или орошение рта 2–3 раза в день; после еды.",
      bolalar: "С 6 лет: под контролем взрослых"
    },
    chiqarish: "Раствор для полоскания / спрей (хлоргексидин + хлорбутанол)"
  },
  en: {
    gruppa: "Local antiseptics for oral treatment (combinations)",
    farmTasir: "Antiseptic combination with mild local anaesthetic action",
    farmakodinamika: `A combination of chlorhexidine and chlorobutanol. Chlorhexidine, a bisbiguanide antiseptic, disrupts the bacterial membrane and is bactericidal against Gram-positive and Gram-negative bacteria and fungi. Chlorobutanol has antiseptic and preservative properties plus a mild local anaesthetic and soothing effect. The combination reduces infection and inflammation of the oral and pharyngeal mucosa.`,
    farmakokinetika: {
      sorish: "Systemic absorption is negligible with topical use",
      tarqalish: "Acts on the oropharyngeal mucosa",
      metabolizm: "No clinically significant metabolism",
      chiqarilish: "The small absorbed fraction is excreted renally/hepatically"
    },
    korsatmalar: [
      "Pharyngitis, tonsillitis, stomatitis, gingivitis",
      "Antiseptic treatment of the mouth and pharynx",
      "Laryngitis and oral cavity inflammation"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Atrophic pharyngitis",
      "Children under 6 years (depending on the form)"
    ],
    nojoya: {
      "Local": "Burning, transient taste change, dry mouth",
      "Teeth": "Reversible tooth staining with prolonged use",
      "Hypersensitivity": "Mucosal itching, rash"
    },
    dozadan: "Unlikely with topical use; if a large amount is swallowed — symptomatic treatment.",
    ozarotasir: [
      "Anionic agents (in toothpastes) reduce chlorhexidine activity",
      "Not recommended together with other antiseptics"
    ],
    qollash: {
      kattalar: "Rinse or spray the mouth 2–3 times daily; after meals.",
      bolalar: "From 6 years: under adult supervision"
    },
    chiqarish: "Mouthwash solution / spray (chlorhexidine + chlorobutanol)"
  }
},

// ─── A01AB12 · Geksetidin ─────────────────────────────────────────────────
"A01AB12": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antiseptiklar",
    farmTasir: "Antibakterial, antifungal va yengil og'riqsizlantiruvchi antiseptik",
    farmakodinamika: `Geksetidin — pirimidin hosilasi bo'lgan antiseptik. Mikroorganizmlar metabolizmi uchun zarur tiamin (B1 vitamini) ni antagonistlash orqali ta'sir qiladi; gram-musbat va gram-manfiy bakteriyalar hamda zamburug'larga (ayniqsa Candida albicans) keng antimikrob ta'sir ko'rsatadi. Shuningdek yengil mahalliy og'riqsizlantiruvchi, qonni to'xtatuvchi va hidsizlantiruvchi (dezodorlovchi) ta'sirga ega. Shilliq pardada bir necha soat saqlanadi.`,
    farmakokinetika: {
      sorish: "Shilliq pardadan deyarli so'rilmaydi; mahalliy ta'sir",
      tarqalish: "Og'iz-halqum shilliq pardasi va tish kataklarida 8–10 soatgacha saqlanadi",
      metabolizm: "Tizimli metabolizmga uchramaydi",
      chiqarilish: "Mahalliy qo'llashda ahamiyatsiz"
    },
    korsatmalar: [
      "Gingivit, stomatit, glossit, faringit, tonzillit",
      "Aftoz va kandidozli og'iz yallig'lanishlari",
      "Tish jarrohligi va ekstraksiyadan keyingi parvarish",
      "Og'izdan kelayotgan noxush hidda (galitoz)"
    ],
    qarrshi: [
      "Geksetidinga o'ta sezuvchanlik",
      "Atrofik (quruq) faringit",
      "3 yoshgacha bolalar"
    ],
    nojoya: {
      "Mahalliy": "Achishish, ta'm sezgisining vaqtincha buzilishi",
      "Allergiya": "Shilliq parda qichishi, toshma (kam)",
      "Boshqa": "Uzoq qo'llashda til yuzasining dog'lanishi (kam)"
    },
    dozadan: "Ko'p yutilganda (spirt tarkibi tufayli) ko'ngil aynishi mumkin; simptomatik davolash.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir aniqlanmagan",
      "Boshqa antiseptiklar bilan bir vaqtda tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "0,1% eritma bilan og'izni 15 ml, kuniga 2 marta (ertalab va kechqurun) chayish, suyultirmasdan; yoki sprey bilan purkash.",
      bolalar: "3 yoshdan: katta nazorati ostida, yutmaslik sharti bilan"
    },
    chiqarish: "Og'iz chayish eritmasi 0,1%; sprey 0,2%"
  },
  ru: {
    gruppa: "Местные антисептики для полости рта",
    farmTasir: "Антибактериальный, противогрибковый антисептик с лёгким анестезирующим действием",
    farmakodinamika: `Гексетидин — антисептик, производное пиримидина. Действует путём антагонизма тиамина (витамина B1), необходимого для метаболизма микроорганизмов; обладает широким антимикробным действием в отношении грамположительных и грамотрицательных бактерий и грибов (особенно Candida albicans). Имеет также лёгкое местноанестезирующее, гемостатическое и дезодорирующее действие. Удерживается на слизистой несколько часов.`,
    farmakokinetika: {
      sorish: "Практически не всасывается со слизистой; действует местно",
      tarqalish: "Удерживается на слизистой ротоглотки и в зубных карманах до 8–10 ч",
      metabolizm: "Системному метаболизму не подвергается",
      chiqarilish: "Незначительно при местном применении"
    },
    korsatmalar: [
      "Гингивит, стоматит, глоссит, фарингит, тонзиллит",
      "Афтозные и кандидозные воспаления полости рта",
      "Уход после стоматологических операций и экстракции",
      "Неприятный запах изо рта (галитоз)"
    ],
    qarrshi: [
      "Гиперчувствительность к гексетидину",
      "Атрофический (сухой) фарингит",
      "Детский возраст до 3 лет"
    ],
    nojoya: {
      "Местные": "Жжение, временное нарушение вкуса",
      "Аллергические": "Зуд слизистой, сыпь (редко)",
      "Прочие": "Окрашивание поверхности языка при длительном применении (редко)"
    },
    dozadan: "При проглатывании большого количества (из-за содержания спирта) возможна тошнота; симптоматическое лечение.",
    ozarotasir: [
      "Клинически значимых взаимодействий не выявлено",
      "Не рекомендуется одновременно с другими антисептиками"
    ],
    qollash: {
      kattalar: "Полоскание рта 0,1% раствором по 15 мл 2 раза в день (утром и вечером), не разводя; или орошение спреем.",
      bolalar: "С 3 лет: под контролем взрослых, не проглатывая"
    },
    chiqarish: "Раствор для полоскания 0,1%; спрей 0,2%"
  },
  en: {
    gruppa: "Local antiseptics for oral treatment",
    farmTasir: "Antibacterial, antifungal antiseptic with mild anaesthetic action",
    farmakodinamika: `Hexetidine is an antiseptic, a pyrimidine derivative. It acts by antagonising thiamine (vitamin B1) required for microbial metabolism; it has broad antimicrobial activity against Gram-positive and Gram-negative bacteria and fungi (especially Candida albicans). It also has mild local anaesthetic, haemostatic and deodorising effects. It is retained on the mucosa for several hours.`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the mucosa; acts locally",
      tarqalish: "Retained on the oropharyngeal mucosa and in dental pockets for up to 8–10 h",
      metabolizm: "Not subject to systemic metabolism",
      chiqarilish: "Negligible with topical use"
    },
    korsatmalar: [
      "Gingivitis, stomatitis, glossitis, pharyngitis, tonsillitis",
      "Aphthous and candidal oral inflammation",
      "Care after dental surgery and extraction",
      "Bad breath (halitosis)"
    ],
    qarrshi: [
      "Hypersensitivity to hexetidine",
      "Atrophic (dry) pharyngitis",
      "Children under 3 years"
    ],
    nojoya: {
      "Local": "Burning, transient taste disturbance",
      "Hypersensitivity": "Mucosal itching, rash (rare)",
      "Other": "Tongue surface staining with prolonged use (rare)"
    },
    dozadan: "Swallowing a large amount (due to alcohol content) may cause nausea; symptomatic treatment.",
    ozarotasir: [
      "No clinically significant interactions identified",
      "Not recommended together with other antiseptics"
    ],
    qollash: {
      kattalar: "Rinse the mouth with 15 mL of 0.1% solution twice daily (morning and evening), undiluted; or spray.",
      bolalar: "From 3 years: under adult supervision, without swallowing"
    },
    chiqarish: "Mouthwash solution 0.1%; spray 0.2%"
  }
},

// ─── A01AB17 · Metronidazol (stomatologik) ────────────────────────────────
"A01AB17": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy antiinfeksion vositalar",
    farmTasir: "Anaerob infeksiyalarga qarshi mahalliy antibakterial",
    farmakodinamika: `Metronidazol — 5-nitroimidazol hosilasi. Anaerob bakteriyalar va sodda jonivorlar hujayrasiga kirib, qaytarilgan nitroguruh orqali ДНК spiralini buzadi va nuklein kislota sintezini to'xtatadi, bu mikrob halokatiga olib keladi. Periodontal anaerob patogenlarga (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium, Treponema, anaerob streptokokk) yuqori faollik ko'rsatadi. Stomatologiyada mahalliy yuqori konsentratsiya hosil qilib gingivit va periodontitni bostiradi.`,
    farmakokinetika: {
      sorish: "Mahalliy (gel) qo'llashda tizimli so'rilish past",
      tarqalish: "Milk cho'ntagi va periodontal to'qimada ta'sirchan konsentratsiya",
      metabolizm: "So'rilgan qismi jigarda metabolizmga uchraydi",
      chiqarilish: "So'rilgan qism asosan buyrak orqali (metabolitlar)"
    },
    korsatmalar: [
      "O'tkir va surunkali gingivit",
      "Periodontit, periodontal abstsess",
      "Aftoz stomatit",
      "Yarali-nekrotik gingivostomatit (Vinsent)"
    ],
    qarrshi: [
      "Metronidazol yoki nitroimidazollarga o'ta sezuvchanlik",
      "Homiladorlikning I trimestri",
      "6 yoshgacha bolalar"
    ],
    nojoya: {
      "Mahalliy": "Og'izda metall ta'mi, achishish",
      "Allergiya": "Milk shilliq pardasi qichishi, toshma",
      "Oshqozon-ichak": "Yutilганда ko'ngil aynishi (kam)"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past. Tasodifan ko'p yutilganda simptomatik davolash.",
    ozarotasir: [
      "Etanol bilan disulfiramsimon reaksiya",
      "Varfarin — antikoagulyant ta'sirini kuchaytiradi (yutilganda)"
    ],
    qollash: {
      kattalar: "Gelni milkka kuniga 2 marta surtish; kurs 7–10 kun.",
      bolalar: "6 yoshdan: kattalardagidek, shifokor nazorati ostida"
    },
    chiqarish: "Stomatologik gel 1% (10 mg/g)"
  },
  ru: {
    gruppa: "Местные противоинфекционные средства для полости рта",
    farmTasir: "Местный антибактериальный препарат против анаэробных инфекций",
    farmakodinamika: `Метронидазол — производное 5-нитроимидазола. Проникая в клетки анаэробных бактерий и простейших, через восстановленную нитрогруппу повреждает спираль ДНК и прекращает синтез нуклеиновых кислот, что ведёт к гибели микроба. Высокоактивен в отношении пародонтальных анаэробов (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium, Treponema, анаэробные стрептококки). В стоматологии создаёт высокую местную концентрацию, подавляя гингивит и пародонтит.`,
    farmakokinetika: {
      sorish: "При местном (гель) применении системная абсорбция низкая",
      tarqalish: "Действующие концентрации в десневом кармане и пародонтальной ткани",
      metabolizm: "Всосавшаяся часть метаболизируется в печени",
      chiqarilish: "Всосавшаяся часть выводится преимущественно почками (метаболиты)"
    },
    korsatmalar: [
      "Острый и хронический гингивит",
      "Пародонтит, пародонтальный абсцесс",
      "Афтозный стоматит",
      "Язвенно-некротический гингивостоматит (Венсана)"
    ],
    qarrshi: [
      "Гиперчувствительность к метронидазолу или нитроимидазолам",
      "I триместр беременности",
      "Детский возраст до 6 лет"
    ],
    nojoya: {
      "Местные": "Металлический привкус во рту, жжение",
      "Аллергические": "Зуд слизистой дёсен, сыпь",
      "ЖКТ": "Тошнота при проглатывании (редко)"
    },
    dozadan: "При местном применении маловероятна. При случайном проглатывании большого количества — симптоматическое лечение.",
    ozarotasir: [
      "С этанолом — дисульфирамоподобная реакция",
      "Варфарин — усиление антикоагулянтного действия (при проглатывании)"
    ],
    qollash: {
      kattalar: "Гель наносить на дёсны 2 раза в день; курс 7–10 дней.",
      bolalar: "С 6 лет: как у взрослых, под контролем врача"
    },
    chiqarish: "Стоматологический гель 1% (10 мг/г)"
  },
  en: {
    gruppa: "Local anti-infective agents for oral treatment",
    farmTasir: "Local antibacterial for anaerobic infections",
    farmakodinamika: `Metronidazole is a 5-nitroimidazole derivative. Entering anaerobic bacteria and protozoa, its reduced nitro group damages the DNA helix and halts nucleic acid synthesis, killing the microbe. Highly active against periodontal anaerobes (Porphyromonas gingivalis, Prevotella intermedia, Fusobacterium, Treponema, anaerobic streptococci). In dentistry it achieves high local concentrations, suppressing gingivitis and periodontitis.`,
    farmakokinetika: {
      sorish: "Systemic absorption is low with topical (gel) use",
      tarqalish: "Active concentrations in the gingival pocket and periodontal tissue",
      metabolizm: "The absorbed fraction is metabolised in the liver",
      chiqarilish: "The absorbed fraction is excreted mainly renally (metabolites)"
    },
    korsatmalar: [
      "Acute and chronic gingivitis",
      "Periodontitis, periodontal abscess",
      "Aphthous stomatitis",
      "Necrotising ulcerative gingivostomatitis (Vincent)"
    ],
    qarrshi: [
      "Hypersensitivity to metronidazole or nitroimidazoles",
      "First trimester of pregnancy",
      "Children under 6 years"
    ],
    nojoya: {
      "Local": "Metallic taste in the mouth, burning",
      "Hypersensitivity": "Gingival mucosal itching, rash",
      "Gastrointestinal": "Nausea if swallowed (rare)"
    },
    dozadan: "Unlikely with topical use. If a large amount is accidentally swallowed — symptomatic treatment.",
    ozarotasir: [
      "Disulfiram-like reaction with ethanol",
      "Warfarin — enhanced anticoagulant effect (if swallowed)"
    ],
    qollash: {
      kattalar: "Apply gel to the gums twice daily; course 7–10 days.",
      bolalar: "From 6 years: as in adults, under medical supervision"
    },
    chiqarish: "Dental gel 1% (10 mg/g)"
  }
},

// ─── A01AC02 · Deksametazon (og'iz, mahalliy) ─────────────────────────────
"A01AC02": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy kortikosteroidlar",
    farmTasir: "Og'iz shilliq pardasi yallig'lanishiga qarshi glyukokortikoid",
    farmakodinamika: `Deksametazon — kuchli sintetik glyukokortikoid. Hujayra ichidagi glyukokortikoid retseptorlariga bog'lanib, yallig'lanishga qarshi oqsillar (lipokortin) sintezini induktsiya qiladi va fosfolipaza A2 ni inhibe qilib araxidon kislotadan prostaglandin va leykotrien hosil bo'lishini kamaytiradi; yallig'lanish mediatorlari, shish va immun reaksiyani bostiradi. Mahalliy qo'llashda og'iz shilliq pardasidagi yallig'lanish, og'riq va shishni kamaytiradi.`,
    farmakokinetika: {
      sorish: "Mahalliy qo'llashda tizimli so'rilish past, lekin shilliq pardadan qisman so'riladi",
      tarqalish: "Yallig'langan shilliq pardada ta'sir qiladi",
      metabolizm: "So'rilgan qism jigarda metabolizmga uchraydi",
      chiqarilish: "Metabolitlar buyrak orqali"
    },
    korsatmalar: [
      "Aftoz stomatit",
      "Og'iz shilliq pardasining eroziv-yarali yallig'lanishlari",
      "Yassi temiratki (oral qizil yassi lishay)",
      "Allergik va yallig'lanishli gingivit/stomatit"
    ],
    qarrshi: [
      "Deksametazonga o'ta sezuvchanlik",
      "Og'iz bo'shlig'ining bakterial, virusli yoki zamburug'li infeksiyalari (davolanmagan)",
      "Og'iz shilliq pardasi tuberkulyozi"
    ],
    nojoya: {
      "Mahalliy": "Og'iz bo'shlig'i kandidozi (uzoq qo'llashda), shilliq parda yupqalashishi",
      "Allergiya": "Mahalliy tirnash xususiyati, achishish",
      "Boshqa": "Uzoq/keng qo'llashda tizimli kortikosteroid ta'siri (kam)"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past. Uzoq qo'llashda tizimli ta'sirni baholash.",
    ozarotasir: [
      "Mahalliy qo'llashda klinik ahamiyatga ega o'zaro ta'sir kam",
      "Tizimli so'rilganда NSAID bilan oshqozon-ichak xavfi oshishi mumkin"
    ],
    qollash: {
      kattalar: "Zararlangan sohaga kuniga 2–3 marta surtish yoki applikatsiya; qisqa kurs.",
      bolalar: "Shifokor nazorati ostida, qisqa muddat"
    },
    chiqarish: "Og'iz uchun gel/pasta; eritma (mahalliy applikatsiya uchun)"
  },
  ru: {
    gruppa: "Местные кортикостероиды для полости рта",
    farmTasir: "Глюкокортикоид против воспаления слизистой полости рта",
    farmakodinamika: `Дексаметазон — мощный синтетический глюкокортикоид. Связываясь с внутриклеточными глюкокортикоидными рецепторами, индуцирует синтез противовоспалительных белков (липокортина) и ингибирует фосфолипазу А2, снижая образование простагландинов и лейкотриенов из арахидоновой кислоты; подавляет медиаторы воспаления, отёк и иммунный ответ. При местном применении уменьшает воспаление, боль и отёк слизистой полости рта.`,
    farmakokinetika: {
      sorish: "При местном применении системная абсорбция низкая, но частичное всасывание со слизистой возможно",
      tarqalish: "Действует на воспалённой слизистой",
      metabolizm: "Всосавшаяся часть метаболизируется в печени",
      chiqarilish: "Метаболиты выводятся почками"
    },
    korsatmalar: [
      "Афтозный стоматит",
      "Эрозивно-язвенные воспаления слизистой рта",
      "Красный плоский лишай полости рта",
      "Аллергический и воспалительный гингивит/стоматит"
    ],
    qarrshi: [
      "Гиперчувствительность к дексаметазону",
      "Нелеченные бактериальные, вирусные или грибковые инфекции полости рта",
      "Туберкулёз слизистой рта"
    ],
    nojoya: {
      "Местные": "Кандидоз полости рта (при длительном применении), истончение слизистой",
      "Аллергические": "Местное раздражение, жжение",
      "Прочие": "Системное действие кортикостероида при длительном/обширном применении (редко)"
    },
    dozadan: "При местном применении маловероятна. При длительном применении оценивать системное действие.",
    ozarotasir: [
      "При местном применении клинически значимые взаимодействия редки",
      "При системном всасывании возможно повышение ЖКТ-риска с НПВП"
    ],
    qollash: {
      kattalar: "Наносить на поражённый участок 2–3 раза в день или в виде аппликаций; короткий курс.",
      bolalar: "Под контролем врача, кратковременно"
    },
    chiqarish: "Гель/паста для полости рта; раствор (для местных аппликаций)"
  },
  en: {
    gruppa: "Local corticosteroids for oral treatment",
    farmTasir: "Glucocorticoid for oral mucosal inflammation",
    farmakodinamika: `Dexamethasone is a potent synthetic glucocorticoid. Binding to intracellular glucocorticoid receptors, it induces anti-inflammatory proteins (lipocortin) and inhibits phospholipase A2, reducing prostaglandin and leukotriene formation from arachidonic acid; it suppresses inflammatory mediators, oedema and the immune response. Applied topically, it reduces inflammation, pain and swelling of the oral mucosa.`,
    farmakokinetika: {
      sorish: "Systemic absorption is low with topical use, but partial mucosal absorption can occur",
      tarqalish: "Acts on inflamed mucosa",
      metabolizm: "The absorbed fraction is metabolised in the liver",
      chiqarilish: "Metabolites are excreted renally"
    },
    korsatmalar: [
      "Aphthous stomatitis",
      "Erosive-ulcerative oral mucosal inflammation",
      "Oral lichen planus",
      "Allergic and inflammatory gingivitis/stomatitis"
    ],
    qarrshi: [
      "Hypersensitivity to dexamethasone",
      "Untreated bacterial, viral or fungal oral infections",
      "Tuberculosis of the oral mucosa"
    ],
    nojoya: {
      "Local": "Oral candidiasis (with prolonged use), mucosal thinning",
      "Hypersensitivity": "Local irritation, burning",
      "Other": "Systemic corticosteroid effects with prolonged/extensive use (rare)"
    },
    dozadan: "Unlikely with topical use. Assess systemic effects with prolonged use.",
    ozarotasir: [
      "Clinically significant interactions are rare with topical use",
      "With systemic absorption, GI risk may increase with NSAIDs"
    ],
    qollash: {
      kattalar: "Apply to the affected area 2–3 times daily or as applications; short course.",
      bolalar: "Under medical supervision, short term"
    },
    chiqarish: "Oral gel/paste; solution (for local application)"
  }
},

// ─── A01AD · Xolin salitsilat + Setalkoniy (stomatologik) ─────────────────
"A01AD": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun boshqa mahalliy vositalar",
    farmTasir: "Yallig'lanishga qarshi, og'riqsizlantiruvchi va antiseptik stomatologik kombinatsiya",
    farmakodinamika: `Xolin salitsilat va setalkoniy xlorid kombinatsiyasi. Xolin salitsilat — salitsilat hosilasi bo'lib, siklooksigenazani inhibe qilib prostaglandin sintezini kamaytiradi, yallig'lanishga qarshi va og'riqsizlantiruvchi ta'sir ko'rsatadi; shilliq pardaga tez so'riladi va og'riqni bartaraf qiladi. Setalkoniy xlorid — to'rtlamchi ammoniyli antiseptik, gram-musbat va gram-manfiy bakteriyalar hamda zamburug'larga ta'sirchan. Kombinatsiya og'iz shilliq pardasi yallig'lanishida og'riq, shish va infeksiyani kamaytiradi.`,
    farmakokinetika: {
      sorish: "Shilliq pardadan tez mahalliy so'riladi; tizimli ahamiyat past",
      tarqalish: "Yallig'langan milk va shilliq pardada ta'sir qiladi",
      metabolizm: "So'rilgan salitsilat jigarda metabolizmga uchraydi",
      chiqarilish: "Metabolitlar buyrak orqali"
    },
    korsatmalar: [
      "Gingivit, stomatit, xeylit",
      "Tish chiqishi davridagi og'riq (kattalar/bolalar)",
      "Tish protezi ostidagi yallig'lanish va og'riq",
      "Aftoz yaralar"
    ],
    qarrshi: [
      "Salitsilatlar yoki komponentlarga o'ta sezuvchanlik",
      "Homiladorlikning III trimestri (salitsilat)",
      "1 yoshgacha bolalar"
    ],
    nojoya: {
      "Mahalliy": "Surtilgan joyda qisqa muddatli achishish",
      "Allergiya": "Shilliq parda qichishi, toshma",
      "Boshqa": "Salitsilatga sezgir bemorlarda allergik reaksiya"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past. Ko'p yutilganда salitsilat ta'siri — simptomatik davolash.",
    ozarotasir: [
      "Boshqa NSAID/salitsilatlar bilan ta'sir kuchayishi mumkin",
      "Mahalliy qo'llashda klinik ahamiyat past"
    ],
    qollash: {
      kattalar: "Gel ~1 sm uzunlikda zararlangan sohaga kuniga 3–4 marta surtish (massaj bilan).",
      bolalar: "1 yoshdan: kichikroq miqdorda, katta nazorati ostida"
    },
    chiqarish: "Stomatologik gel (xolin salitsilat + setalkoniy xlorid)"
  },
  ru: {
    gruppa: "Прочие местные средства для полости рта",
    farmTasir: "Противовоспалительная, обезболивающая и антисептическая стоматологическая комбинация",
    farmakodinamika: `Комбинация холина салицилата и цеталкония хлорида. Холина салицилат — производное салициловой кислоты, ингибирует циклооксигеназу, снижая синтез простагландинов, оказывает противовоспалительное и обезболивающее действие; быстро всасывается слизистой и устраняет боль. Цеталкония хлорид — четвертичный аммониевый антисептик, активен в отношении грамположительных и грамотрицательных бактерий и грибов. Комбинация уменьшает боль, отёк и инфекцию при воспалении слизистой полости рта.`,
    farmakokinetika: {
      sorish: "Быстро всасывается слизистой местно; системное значение низкое",
      tarqalish: "Действует на воспалённой десне и слизистой",
      metabolizm: "Всосавшийся салицилат метаболизируется в печени",
      chiqarilish: "Метаболиты выводятся почками"
    },
    korsatmalar: [
      "Гингивит, стоматит, хейлит",
      "Боль при прорезывании зубов (взрослые/дети)",
      "Воспаление и боль под зубными протезами",
      "Афтозные язвы"
    ],
    qarrshi: [
      "Гиперчувствительность к салицилатам или компонентам",
      "III триместр беременности (салицилат)",
      "Детский возраст до 1 года"
    ],
    nojoya: {
      "Местные": "Кратковременное жжение в месте нанесения",
      "Аллергические": "Зуд слизистой, сыпь",
      "Прочие": "Аллергическая реакция у чувствительных к салицилатам"
    },
    dozadan: "При местном применении маловероятна. При проглатывании большого количества — эффект салицилата, симптоматическое лечение.",
    ozarotasir: [
      "Возможно усиление действия с другими НПВП/салицилатами",
      "При местном применении клиническое значение низкое"
    ],
    qollash: {
      kattalar: "Гель ~1 см наносить на поражённый участок 3–4 раза в день (с массажем).",
      bolalar: "С 1 года: меньшим количеством, под контролем взрослых"
    },
    chiqarish: "Стоматологический гель (холина салицилат + цеталкония хлорид)"
  },
  en: {
    gruppa: "Other local agents for oral treatment",
    farmTasir: "Anti-inflammatory, analgesic and antiseptic dental combination",
    farmakodinamika: `A combination of choline salicylate and cetalkonium chloride. Choline salicylate, a salicylic acid derivative, inhibits cyclooxygenase, reducing prostaglandin synthesis, providing anti-inflammatory and analgesic effects; it is rapidly absorbed by the mucosa and relieves pain. Cetalkonium chloride is a quaternary ammonium antiseptic active against Gram-positive and Gram-negative bacteria and fungi. The combination reduces pain, swelling and infection in oral mucosal inflammation.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed by the mucosa locally; systemic relevance is low",
      tarqalish: "Acts on inflamed gum and mucosa",
      metabolizm: "Absorbed salicylate is metabolised in the liver",
      chiqarilish: "Metabolites are excreted renally"
    },
    korsatmalar: [
      "Gingivitis, stomatitis, cheilitis",
      "Teething pain (adults/children)",
      "Inflammation and pain under dentures",
      "Aphthous ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to salicylates or components",
      "Third trimester of pregnancy (salicylate)",
      "Children under 1 year"
    ],
    nojoya: {
      "Local": "Brief burning at the application site",
      "Hypersensitivity": "Mucosal itching, rash",
      "Other": "Allergic reaction in salicylate-sensitive patients"
    },
    dozadan: "Unlikely with topical use. If a large amount is swallowed — salicylate effect, symptomatic treatment.",
    ozarotasir: [
      "Effects may be enhanced with other NSAIDs/salicylates",
      "Clinical relevance is low with topical use"
    ],
    qollash: {
      kattalar: "Apply ~1 cm of gel to the affected area 3–4 times daily (with massage).",
      bolalar: "From 1 year: smaller amount, under adult supervision"
    },
    chiqarish: "Dental gel (choline salicylate + cetalkonium chloride)"
  }
},

// ─── A01AD02 · Benzidamin ─────────────────────────────────────────────────
"A01AD02": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun boshqa mahalliy vositalar (NSAID)",
    farmTasir: "Mahalliy yallig'lanishga qarshi, og'riqsizlantiruvchi va antiseptik vosita",
    farmakodinamika: `Benzidamin — indazol hosilasi bo'lgan nosteroid yallig'lanishga qarshi vosita (NSAID). Prostaglandin sintezini inhibe qiladi, hujayra membranasini barqarorlashtiradi va yallig'lanish mediatorlari chiqishini kamaytiradi; mahalliy yallig'lanishga qarshi, og'riqsizlantiruvchi va yengil mahalliy anestetik ta'sir ko'rsatadi. Yuqori konsentratsiyada antiseptik va antifungal (Candida albicans) xususiyatiga ega. Yallig'langan to'qimalarda tanlab to'planadi.`,
    farmakokinetika: {
      sorish: "Yallig'langan shilliq pardadan yaxshi so'riladi, tizimli konsentratsiya past",
      tarqalish: "Yallig'langan to'qimalarda to'planadi; mahalliy ta'sir qiladi",
      metabolizm: "So'rilgan qism jigarda metabolizmga uchraydi",
      chiqarilish: "Asosan siydik orqali (metabolitlar va konyugatlar)"
    },
    korsatmalar: [
      "Faringit, laringit, tonzillit",
      "Stomatit, gingivit, glossit",
      "Tish olib tashlash, jarrohlik va nurlanishdan keyingi og'iz-halqum yallig'lanishi",
      "Tish protezi bilan bog'liq yallig'lanish",
      "So'lak bezlari kasalliklari (kalkulyoz sialadenit)"
    ],
    qarrshi: [
      "Benzidaminga o'ta sezuvchanlik",
      "Fenilketonuriya (tarkibida aspartam bo'lsa)",
      "12 yoshgacha bolalar (ba'zi shakllar uchun)"
    ],
    nojoya: {
      "Mahalliy": "Og'iz va halqumda achishish, qurish, uyqusizlik sezgisi, og'iz qurishi",
      "Allergiya": "Toshma, qichishish, laringospazm, kamdan-kam anafilaktik reaksiya",
      "Boshqa": "Ko'ngil aynishi, qusish (yutilganda)"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past; ko'p yutilganда (ayniqsa bolalarda) qo'zg'aluvchanlik, tirishish, ko'ngil aynishi — simptomatik davolash.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir aniqlanmagan"
    ],
    qollash: {
      kattalar: "Og'iz/halqumni chayish: 15 ml 0,15% eritma kuniga 2–3 marta; yoki sprey 4–8 marta purkash; yoki so'riladigan tabletka kuniga 3–4 marta.",
      bolalar: "6–12 yosh: shifokor tavsiyasi bilan kamaytirilgan dozada; spreyda yosh bo'yicha purkash soni belgilanadi"
    },
    chiqarish: "Og'iz chayish eritmasi 0,15%; sprey 0,255 mg/doza; so'riladigan tabletkalar 3 mg"
  },
  ru: {
    gruppa: "Прочие местные средства для полости рта (НПВП)",
    farmTasir: "Местное противовоспалительное, обезболивающее и антисептическое средство",
    farmakodinamika: `Бензидамин — нестероидное противовоспалительное средство (НПВП), производное индазола. Ингибирует синтез простагландинов, стабилизирует клеточные мембраны и уменьшает высвобождение медиаторов воспаления; оказывает местное противовоспалительное, обезболивающее и лёгкое местноанестезирующее действие. В высоких концентрациях обладает антисептическими и противогрибковыми (Candida albicans) свойствами. Избирательно накапливается в воспалённых тканях.`,
    farmakokinetika: {
      sorish: "Хорошо всасывается с воспалённой слизистой, системная концентрация низкая",
      tarqalish: "Накапливается в воспалённых тканях; действует местно",
      metabolizm: "Всосавшаяся часть метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой (метаболиты и конъюгаты)"
    },
    korsatmalar: [
      "Фарингит, ларингит, тонзиллит",
      "Стоматит, гингивит, глоссит",
      "Воспаление полости рта и глотки после удаления зуба, операций и лучевой терапии",
      "Воспаление, связанное с зубными протезами",
      "Заболевания слюнных желёз (калькулёзный сиаладенит)"
    ],
    qarrshi: [
      "Гиперчувствительность к бензидамину",
      "Фенилкетонурия (при наличии аспартама)",
      "Детский возраст до 12 лет (для некоторых форм)"
    ],
    nojoya: {
      "Местные": "Жжение, сухость во рту и глотке, онемение, сухость во рту",
      "Аллергические": "Сыпь, зуд, ларингоспазм, редко анафилактическая реакция",
      "Прочие": "Тошнота, рвота (при проглатывании)"
    },
    dozadan: "При местном применении маловероятна; при проглатывании большого количества (особенно у детей) — возбуждение, судороги, тошнота — симптоматическое лечение.",
    ozarotasir: [
      "Клинически значимых взаимодействий не выявлено"
    ],
    qollash: {
      kattalar: "Полоскание рта/глотки: 15 мл 0,15% раствора 2–3 раза в день; или спрей 4–8 впрыскиваний; или таблетки для рассасывания 3–4 раза в день.",
      bolalar: "6–12 лет: в сниженной дозе по рекомендации врача; для спрея число впрыскиваний по возрасту"
    },
    chiqarish: "Раствор для полоскания 0,15%; спрей 0,255 мг/доза; таблетки для рассасывания 3 мг"
  },
  en: {
    gruppa: "Other local agents for oral treatment (NSAID)",
    farmTasir: "Local anti-inflammatory, analgesic and antiseptic agent",
    farmakodinamika: `Benzydamine is a non-steroidal anti-inflammatory drug (NSAID), an indazole derivative. It inhibits prostaglandin synthesis, stabilises cell membranes and reduces release of inflammatory mediators; it provides local anti-inflammatory, analgesic and mild local anaesthetic effects. At high concentrations it has antiseptic and antifungal (Candida albicans) properties. It selectively accumulates in inflamed tissues.`,
    farmakokinetika: {
      sorish: "Well absorbed from inflamed mucosa, systemic concentration low",
      tarqalish: "Accumulates in inflamed tissues; acts locally",
      metabolizm: "The absorbed fraction is metabolised in the liver",
      chiqarilish: "Mainly in urine (metabolites and conjugates)"
    },
    korsatmalar: [
      "Pharyngitis, laryngitis, tonsillitis",
      "Stomatitis, gingivitis, glossitis",
      "Oral and pharyngeal inflammation after tooth extraction, surgery and radiotherapy",
      "Inflammation associated with dentures",
      "Salivary gland disorders (calculous sialadenitis)"
    ],
    qarrshi: [
      "Hypersensitivity to benzydamine",
      "Phenylketonuria (if aspartame is present)",
      "Children under 12 years (for some forms)"
    ],
    nojoya: {
      "Local": "Burning, dryness of the mouth and throat, numbness, dry mouth",
      "Hypersensitivity": "Rash, itching, laryngospasm, rarely anaphylactic reaction",
      "Other": "Nausea, vomiting (if swallowed)"
    },
    dozadan: "Unlikely with topical use; swallowing a large amount (especially in children) — agitation, seizures, nausea — symptomatic treatment.",
    ozarotasir: [
      "No clinically significant interactions identified"
    ],
    qollash: {
      kattalar: "Mouth/throat rinse: 15 mL of 0.15% solution 2–3 times daily; or spray 4–8 actuations; or lozenges 3–4 times daily.",
      bolalar: "6–12 years: reduced dose on medical advice; spray actuation count by age"
    },
    chiqarish: "Mouthwash solution 0.15%; spray 0.255 mg/dose; lozenges 3 mg"
  }
},

// ─── A01AD11 · Xlorgeksidin + Benzidamin ──────────────────────────────────
"A01AD11": {
  uz: {
    gruppa: "Og'iz bo'shlig'i uchun mahalliy vositalar (kombinatsiyalar)",
    farmTasir: "Antiseptik va yallig'lanishga qarshi kombinatsiya",
    farmakodinamika: `Xlorgeksidin va benzidamin kombinatsiyasi. Xlorgeksidin — bisbiguanid antiseptik, bakteriya membranasini buzib gram-musbat va gram-manfiy bakteriyalar hamda zamburug'larga bakteritsid ta'sir qiladi. Benzidamin — indazol NSAID, prostaglandin sintezini kamaytirib mahalliy yallig'lanishga qarshi va og'riqsizlantiruvchi ta'sir beradi. Kombinatsiya og'iz-halqumdagi infeksiya, yallig'lanish va og'riqni bir vaqtda kamaytiradi.`,
    farmakokinetika: {
      sorish: "Mahalliy qo'llashda tizimli so'rilish past (xlorgeksidin deyarli so'rilmaydi)",
      tarqalish: "Og'iz-halqum shilliq pardasida ta'sir qiladi; benzidamin yallig'langan to'qimaga o'tadi",
      metabolizm: "Benzidaminning so'rilgan qismi jigarda metabolizmga uchraydi",
      chiqarilish: "Benzidamin metabolitlari siydik orqali; xlorgeksidin najas bilan"
    },
    korsatmalar: [
      "Faringit, tonzillit, laringit",
      "Stomatit, gingivit, glossit",
      "Og'iz va halqumning antiseptik va yallig'lanishga qarshi davosi",
      "Tish jarrohligi va ekstraksiyadan keyingi parvarish"
    ],
    qarrshi: [
      "Xlorgeksidin yoki benzidaminga o'ta sezuvchanlik",
      "Atrofik faringit",
      "Anionli antiseptiklar bilan birga qo'llash",
      "6 yoshgacha bolalar (shakliga qarab)"
    ],
    nojoya: {
      "Mahalliy": "Achishish, og'iz qurishi, ta'm sezgisining vaqtincha o'zgarishi, uyqusizlik sezgisi",
      "Tishlar": "Uzoq qo'llashda tishlarning qaytar dog'lanishi",
      "Allergiya": "Shilliq parda qichishi, toshma, kamdan-kam laringospazm"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past; ko'p yutilganда simptomatik davolash.",
    ozarotasir: [
      "Anionli vositalar (tish pastasi) xlorgeksidin faolligini kamaytiradi — 30 daqiqa farq"
    ],
    qollash: {
      kattalar: "Og'iz/halqumni chayish yoki purkash kuniga 2–3 marta; ovqatdan keyin.",
      bolalar: "6 yoshdan: katta nazorati ostida, yutmaslik sharti bilan"
    },
    chiqarish: "Og'iz chayish eritmasi / sprey (xlorgeksidin + benzidamin)"
  },
  ru: {
    gruppa: "Местные средства для полости рта (комбинации)",
    farmTasir: "Антисептическая и противовоспалительная комбинация",
    farmakodinamika: `Комбинация хлоргексидина и бензидамина. Хлоргексидин — бисбигуанидный антисептик, нарушает мембрану бактерий и оказывает бактерицидное действие на грамположительные и грамотрицательные бактерии и грибы. Бензидамин — индазольный НПВП, снижает синтез простагландинов, обеспечивая местное противовоспалительное и обезболивающее действие. Комбинация одновременно уменьшает инфекцию, воспаление и боль в ротоглотке.`,
    farmakokinetika: {
      sorish: "При местном применении системная абсорбция низкая (хлоргексидин почти не всасывается)",
      tarqalish: "Действует на слизистой ротоглотки; бензидамин проникает в воспалённую ткань",
      metabolizm: "Всосавшаяся часть бензидамина метаболизируется в печени",
      chiqarilish: "Метаболиты бензидамина с мочой; хлоргексидин с калом"
    },
    korsatmalar: [
      "Фарингит, тонзиллит, ларингит",
      "Стоматит, гингивит, глоссит",
      "Антисептическое и противовоспалительное лечение рта и глотки",
      "Уход после стоматологических операций и экстракции"
    ],
    qarrshi: [
      "Гиперчувствительность к хлоргексидину или бензидамину",
      "Атрофический фарингит",
      "Совместное применение с анионными антисептиками",
      "Детский возраст до 6 лет (в зависимости от формы)"
    ],
    nojoya: {
      "Местные": "Жжение, сухость во рту, временное изменение вкуса, онемение",
      "Зубы": "Обратимое окрашивание зубов при длительном применении",
      "Аллергические": "Зуд слизистой, сыпь, редко ларингоспазм"
    },
    dozadan: "При местном применении маловероятна; при проглатывании большого количества — симптоматическое лечение.",
    ozarotasir: [
      "Анионные средства (зубная паста) снижают активность хлоргексидина — интервал 30 минут"
    ],
    qollash: {
      kattalar: "Полоскание или орошение рта/глотки 2–3 раза в день; после еды.",
      bolalar: "С 6 лет: под контролем взрослых, не проглатывая"
    },
    chiqarish: "Раствор для полоскания / спрей (хлоргексидин + бензидамин)"
  },
  en: {
    gruppa: "Local agents for oral treatment (combinations)",
    farmTasir: "Antiseptic and anti-inflammatory combination",
    farmakodinamika: `A combination of chlorhexidine and benzydamine. Chlorhexidine, a bisbiguanide antiseptic, disrupts the bacterial membrane and is bactericidal against Gram-positive and Gram-negative bacteria and fungi. Benzydamine, an indazole NSAID, reduces prostaglandin synthesis, providing local anti-inflammatory and analgesic effects. The combination simultaneously reduces infection, inflammation and pain in the oropharynx.`,
    farmakokinetika: {
      sorish: "Systemic absorption is low with topical use (chlorhexidine barely absorbed)",
      tarqalish: "Acts on the oropharyngeal mucosa; benzydamine penetrates inflamed tissue",
      metabolizm: "The absorbed benzydamine fraction is metabolised in the liver",
      chiqarilish: "Benzydamine metabolites in urine; chlorhexidine in faeces"
    },
    korsatmalar: [
      "Pharyngitis, tonsillitis, laryngitis",
      "Stomatitis, gingivitis, glossitis",
      "Antiseptic and anti-inflammatory treatment of the mouth and throat",
      "Care after dental surgery and extraction"
    ],
    qarrshi: [
      "Hypersensitivity to chlorhexidine or benzydamine",
      "Atrophic pharyngitis",
      "Concurrent use with anionic antiseptics",
      "Children under 6 years (depending on the form)"
    ],
    nojoya: {
      "Local": "Burning, dry mouth, transient taste change, numbness",
      "Teeth": "Reversible tooth staining with prolonged use",
      "Hypersensitivity": "Mucosal itching, rash, rarely laryngospasm"
    },
    dozadan: "Unlikely with topical use; if a large amount is swallowed — symptomatic treatment.",
    ozarotasir: [
      "Anionic agents (toothpaste) reduce chlorhexidine activity — separate by 30 minutes"
    ],
    qollash: {
      kattalar: "Rinse or spray the mouth/throat 2–3 times daily; after meals.",
      bolalar: "From 6 years: under adult supervision, without swallowing"
    },
    chiqarish: "Mouthwash solution / spray (chlorhexidine + benzydamine)"
  }
},

// ─── A02A · Antatsid (natriy bikarbonat + limon kislotasi) ────────────────
"A02A": {
  uz: {
    gruppa: "Antatsidlar",
    farmTasir: "Oshqozon kislotasini neytrallovchi (antatsid) vosita",
    farmakodinamika: `Natriy bikarbonat, limon kislotasi va natriy karbonat asosidagi shippuchi (effervessent) antatsid. Suvda eriganida karbonat angidrid ajralib chiqadi va oshqozonda xlorid kislotani tez neytrallaydi, oshqozon-ichak suyuqligi pH ini oshiradi va pepsin faolligini kamaytiradi. Ta'siri tez boshlanadi, lekin qisqa muddatli. Ko'p yoki uzoq qo'llanganda tizimli ishqorlanish (alkaloz) keltirib chiqarishi mumkin (so'riluvchi antatsid).`,
    farmakokinetika: {
      sorish: "Bikarbonat qisman tizimli so'riladi (so'riluvchi antatsid)",
      tarqalish: "Asosan oshqozon-ichak luminda ta'sir qiladi",
      metabolizm: "Karbonat angidridга parchalanadi",
      chiqarilish: "Natriy va bikarbonat buyrak orqali; CO2 nafas bilan"
    },
    korsatmalar: [
      "Oshqozon kislotaliligi oshishi bilan kechadigan dispepsiya, jig'ildon qaynashi",
      "Gastrit va gastroduodenitda kislotalilikni vaqtincha kamaytirish",
      "Refluks-ezofagit simptomatik davosi"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Metabolik alkaloz",
      "Og'ir buyrak yetishmovchiligi",
      "Natriy cheklangan parhez (yurak yetishmovchiligi, gipertenziya, shish)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Kekirish, meteorizm, qorin shishi",
      "Metabolik": "Ko'p qo'llashda metabolik alkaloz, gipernatriemiya",
      "Boshqa": "Sut-ishqor sindromi (uzoq, ko'p qo'llashda)"
    },
    dozadan: "Ko'p qo'llashda alkaloz, gipernatriemiya — preparatni to'xtatish, elektrolitlarni tuzatish.",
    ozarotasir: [
      "Oshqozon pH ini oshirib boshqa dorilar so'rilishini o'zgartiradi (tetratsiklin, temir, ftorxinolonlar) — 2 soat farq bilan qabul qiling",
      "Kislotada eriydigan qobiqli dorilar bilan birga tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "1 shipuchi tabletka/kukunni bir stakan suvda eritib, kerak bo'lganda ovqatdan keyin yoki jig'ildon qaynaganda; kuniga 3–4 martadan ko'p emas.",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Shippuchi (effervessent) tabletkalar yoki kukun"
  },
  ru: {
    gruppa: "Антациды",
    farmTasir: "Средство, нейтрализующее желудочную кислоту (антацид)",
    farmakodinamika: `Шипучий (эффервесцентный) антацид на основе натрия бикарбоната, лимонной кислоты и натрия карбоната. При растворении в воде выделяется углекислый газ, и в желудке быстро нейтрализуется соляная кислота, повышается pH желудочного содержимого и снижается активность пепсина. Действие наступает быстро, но кратковременно. При избыточном или длительном применении может вызвать системный алкалоз (всасывающийся антацид).`,
    farmakokinetika: {
      sorish: "Бикарбонат частично всасывается системно (всасывающийся антацид)",
      tarqalish: "Действует преимущественно в просвете ЖКТ",
      metabolizm: "Распадается до углекислого газа",
      chiqarilish: "Натрий и бикарбонат почками; CO2 с дыханием"
    },
    korsatmalar: [
      "Диспепсия и изжога при повышенной кислотности",
      "Временное снижение кислотности при гастрите и гастродуодените",
      "Симптоматическое лечение рефлюкс-эзофагита"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Метаболический алкалоз",
      "Тяжёлая почечная недостаточность",
      "Диета с ограничением натрия (сердечная недостаточность, гипертензия, отёки)"
    ],
    nojoya: {
      "ЖКТ": "Отрыжка, метеоризм, вздутие живота",
      "Метаболические": "При избыточном применении метаболический алкалоз, гипернатриемия",
      "Прочие": "Молочно-щелочной синдром (при длительном избыточном применении)"
    },
    dozadan: "При избыточном применении алкалоз, гипернатриемия — отмена препарата, коррекция электролитов.",
    ozarotasir: [
      "Повышая pH желудка, изменяет всасывание других препаратов (тетрациклин, железо, фторхинолоны) — интервал 2 часа",
      "Не рекомендуется с препаратами в кислотоустойчивой оболочке"
    ],
    qollash: {
      kattalar: "1 шипучую таблетку/порошок растворить в стакане воды, при необходимости после еды или при изжоге; не более 3–4 раз в день.",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Шипучие (эффервесцентные) таблетки или порошок"
  },
  en: {
    gruppa: "Antacids",
    farmTasir: "Agent that neutralises gastric acid (antacid)",
    farmakodinamika: `An effervescent antacid based on sodium bicarbonate, citric acid and sodium carbonate. On dissolving in water it releases carbon dioxide and rapidly neutralises hydrochloric acid in the stomach, raising gastric pH and reducing pepsin activity. Onset is rapid but short-lived. Excessive or prolonged use may cause systemic alkalosis (an absorbable antacid).`,
    farmakokinetika: {
      sorish: "Bicarbonate is partly absorbed systemically (absorbable antacid)",
      tarqalish: "Acts mainly in the GI lumen",
      metabolizm: "Breaks down to carbon dioxide",
      chiqarilish: "Sodium and bicarbonate renally; CO2 via respiration"
    },
    korsatmalar: [
      "Dyspepsia and heartburn with hyperacidity",
      "Temporary reduction of acidity in gastritis and gastroduodenitis",
      "Symptomatic treatment of reflux oesophagitis"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Metabolic alkalosis",
      "Severe renal impairment",
      "Sodium-restricted diet (heart failure, hypertension, oedema)"
    ],
    nojoya: {
      "Gastrointestinal": "Belching, flatulence, bloating",
      "Metabolic": "Metabolic alkalosis, hypernatraemia with excessive use",
      "Other": "Milk-alkali syndrome (with prolonged excessive use)"
    },
    dozadan: "Excessive use causes alkalosis, hypernatraemia — discontinue, correct electrolytes.",
    ozarotasir: [
      "By raising gastric pH it alters absorption of other drugs (tetracycline, iron, fluoroquinolones) — separate by 2 hours",
      "Not recommended with enteric-coated drugs"
    ],
    qollash: {
      kattalar: "Dissolve 1 effervescent tablet/sachet in a glass of water as needed after meals or for heartburn; no more than 3–4 times daily.",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Effervescent tablets or powder"
  }
},

// ─── A02AB02 · Algeldrat (alyuminiy gidroksid) ────────────────────────────
"A02AB02": {
  uz: {
    gruppa: "Antatsidlar — alyuminiy birikmalari",
    farmTasir: "So'rilmaydigan antatsid va o'rab oluvchi vosita",
    farmakodinamika: `Algeldrat (alyuminiy gidroksid) — so'rilmaydigan antatsid. Oshqozon xlorid kislotasi bilan reaksiyaga kirishib uni neytrallaydi (alyuminiy xlorid hosil bo'ladi) va pH ni oshiradi, pepsin proteolitik faolligini kamaytiradi. Shilliq pardada himoya qatlamini hosil qiladi va o'rab oluvchi-adsorbsiyalovchi ta'sir ko'rsatadi. Fosfat ionlarini bog'lab najas bilan chiqaradi. Ta'siri sekin boshlanadi, lekin uzoqroq davom etadi; ich qotishini keltirib chiqarishga moyil.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichak yo'lidan deyarli so'rilmaydi",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir qiladi",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan (alyuminiy fosfat/karbonat); oz qismi so'rilib siydik orqali"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi (kompleks davoda)",
      "O'tkir va surunkali giperatsid gastrit",
      "Reflyuks-ezofagit, jig'ildon qaynashi, dispepsiya",
      "Giperfosfatemiya (fosfat bog'lovchi sifatida)"
    ],
    qarrshi: [
      "Alyuminiy birikmalariga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi (alyuminiy to'planishi)",
      "Gipofosfatemiya",
      "Altsgeymer kasalligi (alyuminiy to'planishi xavfi)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi, ko'ngil aynishi, og'iz qurishi",
      "Metabolik": "Gipofosfatemiya (uzoq qo'llashda), suyak yumshashi",
      "Asab": "Buyrak yetishmovchiligida ensefalopatiya (alyuminiy)",
      "Boshqa": "Ko'p dozada osteomalatsiya, miopatiya"
    },
    dozadan: "Uzoq/ko'p qo'llashda gipofosfatemiya, ich qotishi — dozani kamaytirish, simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklinlar, ftorxinolonlar, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan qabul qiling",
      "Kislotada eriydigan qobiqli (enterik) preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "Ovqatdan 1–1,5 soat keyin va uxlash oldidan; kuniga 4–6 marta (gel/suspenziya 5–10 ml yoki chaynaladigan tabletka).",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Ichish uchun suspenziya/gel; chaynaladigan tabletkalar"
  },
  ru: {
    gruppa: "Антациды — соединения алюминия",
    farmTasir: "Невсасывающийся антацид и обволакивающее средство",
    farmakodinamika: `Алгелдрат (алюминия гидроксид) — невсасывающийся антацид. Реагирует с соляной кислотой желудка, нейтрализуя её (образуется хлорид алюминия) и повышая pH, снижает протеолитическую активность пепсина. Образует защитный слой на слизистой, оказывает обволакивающее и адсорбирующее действие. Связывает фосфат-ионы и выводит их с калом. Действие наступает медленно, но более продолжительно; склонен вызывать запор.`,
    farmakokinetika: {
      sorish: "Практически не всасывается из ЖКТ",
      tarqalish: "Действует местно в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом (фосфат/карбонат алюминия); небольшая всосавшаяся часть с мочой"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки (в комплексной терапии)",
      "Острый и хронический гиперацидный гастрит",
      "Рефлюкс-эзофагит, изжога, диспепсия",
      "Гиперфосфатемия (как фосфатсвязывающее средство)"
    ],
    qarrshi: [
      "Гиперчувствительность к соединениям алюминия",
      "Тяжёлая почечная недостаточность (накопление алюминия)",
      "Гипофосфатемия",
      "Болезнь Альцгеймера (риск накопления алюминия)"
    ],
    nojoya: {
      "ЖКТ": "Запор, тошнота, сухость во рту",
      "Метаболические": "Гипофосфатемия (при длительном применении), размягчение костей",
      "ЦНС": "Энцефалопатия при почечной недостаточности (алюминий)",
      "Прочие": "При высоких дозах остеомаляция, миопатия"
    },
    dozadan: "При длительном/избыточном применении гипофосфатемия, запор — снижение дозы, симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклинов, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в кислотоустойчивой (энтеросолюбильной) оболочке"
    ],
    qollash: {
      kattalar: "Через 1–1,5 ч после еды и перед сном; 4–6 раз в день (гель/суспензия 5–10 мл или жевательная таблетка).",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Суспензия/гель для приёма внутрь; жевательные таблетки"
  },
  en: {
    gruppa: "Antacids — aluminium compounds",
    farmTasir: "Non-absorbable antacid and demulcent",
    farmakodinamika: `Algeldrate (aluminium hydroxide) is a non-absorbable antacid. It reacts with gastric hydrochloric acid, neutralising it (forming aluminium chloride) and raising pH, and reduces the proteolytic activity of pepsin. It forms a protective layer on the mucosa with demulcent and adsorbent action. It binds phosphate ions and excretes them in faeces. Onset is slow but more prolonged; it tends to cause constipation.`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the GI tract",
      tarqalish: "Acts locally in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces (aluminium phosphate/carbonate); a small absorbed fraction renally"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer (in combination therapy)",
      "Acute and chronic hyperacid gastritis",
      "Reflux oesophagitis, heartburn, dyspepsia",
      "Hyperphosphataemia (as a phosphate binder)"
    ],
    qarrshi: [
      "Hypersensitivity to aluminium compounds",
      "Severe renal impairment (aluminium accumulation)",
      "Hypophosphataemia",
      "Alzheimer's disease (risk of aluminium accumulation)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation, nausea, dry mouth",
      "Metabolic": "Hypophosphataemia (prolonged use), bone softening",
      "CNS": "Encephalopathy in renal failure (aluminium)",
      "Other": "Osteomalacia, myopathy at high doses"
    },
    dozadan: "Prolonged/excessive use causes hypophosphataemia, constipation — reduce dose, symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracyclines, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1–1.5 h after meals and at bedtime; 4–6 times daily (gel/suspension 5–10 mL or chewable tablet).",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Oral suspension/gel; chewable tablets"
  }
},

// ─── A02AB03 · Alyuminiy fosfat ───────────────────────────────────────────
"A02AB03": {
  uz: {
    gruppa: "Antatsidlar — alyuminiy birikmalari",
    farmTasir: "So'rilmaydigan antatsid va shilliq pardani himoyalovchi vosita",
    farmakodinamika: `Alyuminiy fosfat — so'rilmaydigan antatsid. Oshqozon xlorid kislotasini neytrallaydi va pH ni fiziologik darajaga yaqinlashtiradi (kuchli ishqorlanish keltirib chiqarmaydi), pepsin faolligini kamaytiradi. Kolloid shaklda shilliq pardada himoya pardasini hosil qilib, kislota va pepsindan himoyalaydi (sitoprotektiv ta'sir). Alyuminiy gidroksiddan farqli o'laroq fosfat tanqisligiga kamroq sabab bo'ladi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan so'rilmaydi",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Giperatsid gastrit, gastroduodenit",
      "Oshqozon va o'n ikki barmoq ichak yarasi (kompleks davoda)",
      "Reflyuks-ezofagit, jig'ildon qaynashi, dispepsiya",
      "Oziq-ovqat va dori-darmon bilan bog'liq oshqozon tirnashishi"
    ],
    qarrshi: [
      "Alyuminiy birikmalariga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Surunkali ich qotishi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi (ayniqsa keksalarda va katta dozada)",
      "Metabolik": "Uzoq qo'llashda gipofosfatemiya (kam)",
      "Boshqa": "Buyrak yetishmovchiligida alyuminiy to'planishi"
    },
    dozadan: "Ich qotishi — dozani kamaytirish, suyuqlik ko'paytirish; simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "1–2 paket (gel) kuniga 2–3 marta, og'riq paytida yoki ovqatdan keyin/uxlash oldidan.",
      bolalar: "6 yoshdan: kamaytirilgan dozada, shifokor tavsiyasi bilan"
    },
    chiqarish: "Ichish uchun gel (paketlarda); suspenziya"
  },
  ru: {
    gruppa: "Антациды — соединения алюминия",
    farmTasir: "Невсасывающийся антацид и защищающее слизистую средство",
    farmakodinamika: `Алюминия фосфат — невсасывающийся антацид. Нейтрализует соляную кислоту желудка, приближая pH к физиологическому (не вызывает выраженного ощелачивания), снижает активность пепсина. В коллоидной форме образует защитную плёнку на слизистой, защищая её от кислоты и пепсина (цитопротективное действие). В отличие от гидроксида алюминия реже вызывает дефицит фосфатов.`,
    farmakokinetika: {
      sorish: "Не всасывается из ЖКТ",
      tarqalish: "Местное действие в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом в неизменённом виде"
    },
    korsatmalar: [
      "Гиперацидный гастрит, гастродуоденит",
      "Язва желудка и двенадцатиперстной кишки (в комплексной терапии)",
      "Рефлюкс-эзофагит, изжога, диспепсия",
      "Раздражение желудка, связанное с пищей и лекарствами"
    ],
    qarrshi: [
      "Гиперчувствительность к соединениям алюминия",
      "Тяжёлая почечная недостаточность",
      "Хронический запор"
    ],
    nojoya: {
      "ЖКТ": "Запор (особенно у пожилых и при высоких дозах)",
      "Метаболические": "Гипофосфатемия при длительном применении (редко)",
      "Прочие": "Накопление алюминия при почечной недостаточности"
    },
    dozadan: "Запор — снижение дозы, увеличение жидкости; симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "1–2 пакета (гель) 2–3 раза в день, при боли или после еды/перед сном.",
      bolalar: "С 6 лет: в сниженной дозе по рекомендации врача"
    },
    chiqarish: "Гель для приёма внутрь (в пакетах); суспензия"
  },
  en: {
    gruppa: "Antacids — aluminium compounds",
    farmTasir: "Non-absorbable antacid and mucosal protectant",
    farmakodinamika: `Aluminium phosphate is a non-absorbable antacid. It neutralises gastric hydrochloric acid, bringing pH close to physiological (without marked alkalinisation), and reduces pepsin activity. In colloidal form it creates a protective film on the mucosa, shielding it from acid and pepsin (cytoprotective action). Unlike aluminium hydroxide, it less often causes phosphate depletion.`,
    farmakokinetika: {
      sorish: "Not absorbed from the GI tract",
      tarqalish: "Local action in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces unchanged"
    },
    korsatmalar: [
      "Hyperacid gastritis, gastroduodenitis",
      "Gastric and duodenal ulcer (in combination therapy)",
      "Reflux oesophagitis, heartburn, dyspepsia",
      "Gastric irritation related to food and drugs"
    ],
    qarrshi: [
      "Hypersensitivity to aluminium compounds",
      "Severe renal impairment",
      "Chronic constipation"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation (especially in the elderly and at high doses)",
      "Metabolic": "Hypophosphataemia with prolonged use (rare)",
      "Other": "Aluminium accumulation in renal failure"
    },
    dozadan: "Constipation — reduce dose, increase fluids; symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1–2 sachets (gel) 2–3 times daily, with pain or after meals/at bedtime.",
      bolalar: "From 6 years: reduced dose on medical advice"
    },
    chiqarish: "Oral gel (in sachets); suspension"
  }
},

// ─── A02AD01 · Alyuminiy + Magniy (antatsid kombinatsiya) ─────────────────
"A02AD01": {
  uz: {
    gruppa: "Antatsidlar — alyuminiy va magniy kombinatsiyalari",
    farmTasir: "Muvozanatlashgan so'rilmaydigan antatsid",
    farmakodinamika: `Alyuminiy va magniy gidroksidi (yoki karbonati) kombinatsiyasi — so'rilmaydigan antatsid. Ikkala komponent oshqozon xlorid kislotasini neytrallaydi, pH ni oshiradi va pepsin faolligini kamaytiradi; shilliq pardani o'rab himoyalaydi. Alyuminiy ich qotishiga, magniy esa ich yumshashiga moyilligi tufayli kombinatsiya ichak harakatiga muvozanatli ta'sir ko'rsatadi. Ta'siri tez boshlanadi va o'rtacha davom etadi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan deyarli so'rilmaydi",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan; oz qismi (Mg, Al) so'rilib buyrak orqali"
    },
    korsatmalar: [
      "Giperatsid gastrit, gastroduodenit",
      "Oshqozon va o'n ikki barmoq ichak yarasi (kompleks davoda)",
      "Reflyuks-ezofagit, jig'ildon qaynashi, dispepsiya",
      "Ovqat, dori, kofe, nikotin bilan bog'liq oshqozon noxushligi"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Gipofosfatemiya",
      "Altsgeymer kasalligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich yumshashi yoki ich qotishi, ko'ngil aynishi, qusish, ta'm o'zgarishi",
      "Metabolik": "Uzoq qo'llashda gipermagniemiya (buyrak yetishmovchiligida), gipofosfatemiya",
      "Boshqa": "Buyrak yetishmovchiligida alyuminiy/magniy to'planishi"
    },
    dozadan: "Buyrak yetishmovchiligida gipermagniemiya (gipotenziya, bo'shashish) — preparatni to'xtatish, simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "Ovqatdan 1–2 soat keyin va uxlash oldidan; kuniga 3–4 marta (suspenziya 5–10 ml yoki chaynaladigan tabletka).",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Ichish uchun suspenziya; chaynaladigan tabletkalar"
  },
  ru: {
    gruppa: "Антациды — комбинации алюминия и магния",
    farmTasir: "Сбалансированный невсасывающийся антацид",
    farmakodinamika: `Комбинация гидроксида (или карбоната) алюминия и магния — невсасывающийся антацид. Оба компонента нейтрализуют соляную кислоту желудка, повышают pH и снижают активность пепсина; обволакивают и защищают слизистую. Алюминий склонен вызывать запор, а магний — послабление, поэтому комбинация оказывает сбалансированное влияние на моторику кишечника. Действие наступает быстро и продолжается умеренно.`,
    farmakokinetika: {
      sorish: "Практически не всасывается из ЖКТ",
      tarqalish: "Местное действие в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом; небольшая часть (Mg, Al) всасывается и выводится почками"
    },
    korsatmalar: [
      "Гиперацидный гастрит, гастродуоденит",
      "Язва желудка и двенадцатиперстной кишки (в комплексной терапии)",
      "Рефлюкс-эзофагит, изжога, диспепсия",
      "Желудочный дискомфорт, связанный с едой, лекарствами, кофе, никотином"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Тяжёлая почечная недостаточность",
      "Гипофосфатемия",
      "Болезнь Альцгеймера"
    ],
    nojoya: {
      "ЖКТ": "Послабление или запор, тошнота, рвота, изменение вкуса",
      "Метаболические": "При длительном применении гипермагниемия (при почечной недостаточности), гипофосфатемия",
      "Прочие": "Накопление алюминия/магния при почечной недостаточности"
    },
    dozadan: "При почечной недостаточности гипермагниемия (гипотензия, слабость) — отмена препарата, симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "Через 1–2 ч после еды и перед сном; 3–4 раза в день (суспензия 5–10 мл или жевательная таблетка).",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Суспензия для приёма внутрь; жевательные таблетки"
  },
  en: {
    gruppa: "Antacids — aluminium and magnesium combinations",
    farmTasir: "Balanced non-absorbable antacid",
    farmakodinamika: `A combination of aluminium and magnesium hydroxide (or carbonate) — a non-absorbable antacid. Both components neutralise gastric hydrochloric acid, raise pH and reduce pepsin activity; they coat and protect the mucosa. Aluminium tends to cause constipation while magnesium causes loosening, so the combination has a balanced effect on bowel motility. Onset is rapid with moderate duration.`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the GI tract",
      tarqalish: "Local action in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces; a small fraction (Mg, Al) is absorbed and excreted renally"
    },
    korsatmalar: [
      "Hyperacid gastritis, gastroduodenitis",
      "Gastric and duodenal ulcer (in combination therapy)",
      "Reflux oesophagitis, heartburn, dyspepsia",
      "Gastric discomfort related to food, drugs, coffee, nicotine"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Severe renal impairment",
      "Hypophosphataemia",
      "Alzheimer's disease"
    ],
    nojoya: {
      "Gastrointestinal": "Loosening or constipation, nausea, vomiting, taste change",
      "Metabolic": "Hypermagnesaemia with prolonged use (in renal failure), hypophosphataemia",
      "Other": "Aluminium/magnesium accumulation in renal failure"
    },
    dozadan: "In renal failure hypermagnesaemia (hypotension, weakness) — discontinue, symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1–2 h after meals and at bedtime; 3–4 times daily (suspension 5–10 mL or chewable tablet).",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Oral suspension; chewable tablets"
  }
},

// ─── A02AD04 · Gidrotalsit ────────────────────────────────────────────────
"A02AD04": {
  uz: {
    gruppa: "Antatsidlar — alyuminiy va magniy kombinatsiyalari",
    farmTasir: "Qatlamli alyuminiy-magniy antatsid",
    farmakodinamika: `Gidrotalsit — alyuminiy va magniy gidroksid-karbonatining qatlamli kristall tuzilishga ega so'rilmaydigan antatsidi. Oshqozon kislotaliligiga qarab bosqichma-bosqich erib, xlorid kislotani neytrallaydi va pH ni fiziologik diapazonda ushlab turadi (buferli ta'sir). Pepsin va o't (safro) kislotalarini bog'laydi, shilliq pardani himoyalaydi. Muvozanatlashgan Al/Mg tarkibi tufayli ichak harakatiga neytral ta'sir qiladi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan deyarli so'rilmaydi",
      tarqalish: "Oshqozon luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan; oz qismi ionlari buyrak orqali"
    },
    korsatmalar: [
      "Giperatsid gastrit, gastroduodenit",
      "Oshqozon va o'n ikki barmoq ichak yarasi (kompleks davoda)",
      "Reflyuks-ezofagit, jig'ildon qaynashi, dispepsiya",
      "Safro reflyuksi bilan bog'liq gastrit"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Gipofosfatemiya"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich yumshashi, ko'ngil aynishi (katta dozada)",
      "Metabolik": "Buyrak yetishmovchiligida gipermagniemiya",
      "Boshqa": "Uzoq qo'llashda alyuminiy to'planishi (buyrak yetishmovchiligida)"
    },
    dozadan: "Buyrak yetishmovchiligida gipermagniemiya — preparatni to'xtatish, simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "500–1000 mg (1–2 chaynaladigan tabletka yoki 5–10 ml suspenziya) kuniga 3–4 marta, ovqatdan keyin va uxlash oldidan.",
      bolalar: "6 yoshdan: kamaytirilgan dozada, shifokor tavsiyasi bilan"
    },
    chiqarish: "Chaynaladigan tabletkalar 500 mg; ichish uchun suspenziya"
  },
  ru: {
    gruppa: "Антациды — комбинации алюминия и магния",
    farmTasir: "Слоистый алюминиево-магниевый антацид",
    farmakodinamika: `Гидроталцит — невсасывающийся антацид со слоистой кристаллической структурой гидроксид-карбоната алюминия и магния. Растворяется постепенно в зависимости от кислотности желудка, нейтрализует соляную кислоту и удерживает pH в физиологическом диапазоне (буферное действие). Связывает пепсин и жёлчные кислоты, защищает слизистую. Благодаря сбалансированному составу Al/Mg оказывает нейтральное влияние на моторику кишечника.`,
    farmakokinetika: {
      sorish: "Практически не всасывается из ЖКТ",
      tarqalish: "Местное действие в просвете желудка",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом; небольшая часть ионов почками"
    },
    korsatmalar: [
      "Гиперацидный гастрит, гастродуоденит",
      "Язва желудка и двенадцатиперстной кишки (в комплексной терапии)",
      "Рефлюкс-эзофагит, изжога, диспепсия",
      "Гастрит, связанный с жёлчным рефлюксом"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Тяжёлая почечная недостаточность",
      "Гипофосфатемия"
    ],
    nojoya: {
      "ЖКТ": "Послабление стула, тошнота (при высоких дозах)",
      "Метаболические": "Гипермагниемия при почечной недостаточности",
      "Прочие": "Накопление алюминия при длительном применении (при почечной недостаточности)"
    },
    dozadan: "При почечной недостаточности гипермагниемия — отмена препарата, симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "500–1000 мг (1–2 жевательные таблетки или 5–10 мл суспензии) 3–4 раза в день, после еды и перед сном.",
      bolalar: "С 6 лет: в сниженной дозе по рекомендации врача"
    },
    chiqarish: "Жевательные таблетки 500 мг; суспензия для приёма внутрь"
  },
  en: {
    gruppa: "Antacids — aluminium and magnesium combinations",
    farmTasir: "Layered aluminium-magnesium antacid",
    farmakodinamika: `Hydrotalcite is a non-absorbable antacid with a layered crystalline structure of aluminium-magnesium hydroxide carbonate. It dissolves gradually depending on gastric acidity, neutralises hydrochloric acid and keeps pH within the physiological range (buffering action). It binds pepsin and bile acids and protects the mucosa. Owing to its balanced Al/Mg composition it has a neutral effect on bowel motility.`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the GI tract",
      tarqalish: "Local action in the gastric lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces; a small fraction of ions renally"
    },
    korsatmalar: [
      "Hyperacid gastritis, gastroduodenitis",
      "Gastric and duodenal ulcer (in combination therapy)",
      "Reflux oesophagitis, heartburn, dyspepsia",
      "Gastritis associated with bile reflux"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Severe renal impairment",
      "Hypophosphataemia"
    ],
    nojoya: {
      "Gastrointestinal": "Loose stools, nausea (at high doses)",
      "Metabolic": "Hypermagnesaemia in renal failure",
      "Other": "Aluminium accumulation with prolonged use (in renal failure)"
    },
    dozadan: "In renal failure hypermagnesaemia — discontinue, symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "500–1000 mg (1–2 chewable tablets or 5–10 mL suspension) 3–4 times daily, after meals and at bedtime.",
      bolalar: "From 6 years: reduced dose on medical advice"
    },
    chiqarish: "Chewable tablets 500 mg; oral suspension"
  }
},

// ─── A02AF02 · Antatsid + Simetikon (gaz haydovchi) ───────────────────────
"A02AF02": {
  uz: {
    gruppa: "Antatsidlar — gaz haydovchi (antiflatulent) bilan kombinatsiyalar",
    farmTasir: "Antatsid va meteorizmga qarshi kombinatsiya",
    farmakodinamika: `Alyuminiy va magniy gidroksidi (karbonati) hamda simetikon kombinatsiyasi. Antatsid komponentlar oshqozon xlorid kislotasini neytrallab pH ni oshiradi, pepsin faolligini kamaytiradi va shilliq pardani himoyalaydi. Simetikon — yuza tarangligini pasaytiruvchi inert silikon birikma; ichakdagi gaz pufakchalarini birlashtirib yo'q qiladi, gaz to'planishi va meteorizm simptomlarini kamaytiradi. Simetikon so'rilmaydi va kimyoviy faol emas.`,
    farmakokinetika: {
      sorish: "Komponentlar deyarli so'rilmaydi; simetikon umuman so'rilmaydi",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Giperatsid gastrit, dispepsiya, jig'ildon qaynashi",
      "Reflyuks-ezofagit",
      "Oshqozon-ichak yarasi (kompleks davoda)",
      "Meteorizm, qorin shishi va gaz to'planishi bilan kechadigan holatlar"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Gipofosfatemiya"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich yumshashi yoki qotishi, ko'ngil aynishi (kam)",
      "Metabolik": "Buyrak yetishmovchiligida gipermagniemiya, gipofosfatemiya",
      "Allergiya": "Toshma, qichishish (kam)"
    },
    dozadan: "Ehtimoli past; buyrak yetishmovchiligida gipermagniemiya — simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "1–2 chaynaladigan tabletka yoki 5–10 ml suspenziya kuniga 3–4 marta, ovqatdan 1 soat keyin va uxlash oldidan.",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Chaynaladigan tabletkalar; ichish uchun suspenziya"
  },
  ru: {
    gruppa: "Антациды в комбинации с ветрогонными (антифлатулентами)",
    farmTasir: "Антацидная и ветрогонная комбинация",
    farmakodinamika: `Комбинация гидроксида (карбоната) алюминия и магния с симетиконом. Антацидные компоненты нейтрализуют соляную кислоту желудка, повышая pH, снижают активность пепсина и защищают слизистую. Симетикон — инертное силиконовое соединение, снижающее поверхностное натяжение; объединяет и разрушает пузырьки газа в кишечнике, уменьшая газообразование и метеоризм. Симетикон не всасывается и химически инертен.`,
    farmakokinetika: {
      sorish: "Компоненты практически не всасываются; симетикон не всасывается вовсе",
      tarqalish: "Местное действие в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом в неизменённом виде"
    },
    korsatmalar: [
      "Гиперацидный гастрит, диспепсия, изжога",
      "Рефлюкс-эзофагит",
      "Язва желудка и кишечника (в комплексной терапии)",
      "Состояния с метеоризмом, вздутием и скоплением газов"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Тяжёлая почечная недостаточность",
      "Гипофосфатемия"
    ],
    nojoya: {
      "ЖКТ": "Послабление или запор, тошнота (редко)",
      "Метаболические": "Гипермагниемия, гипофосфатемия при почечной недостаточности",
      "Аллергические": "Сыпь, зуд (редко)"
    },
    dozadan: "Маловероятна; при почечной недостаточности гипермагниемия — симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "1–2 жевательные таблетки или 5–10 мл суспензии 3–4 раза в день, через 1 ч после еды и перед сном.",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Жевательные таблетки; суспензия для приёма внутрь"
  },
  en: {
    gruppa: "Antacids in combination with antiflatulents",
    farmTasir: "Antacid and antiflatulent combination",
    farmakodinamika: `A combination of aluminium and magnesium hydroxide (carbonate) with simethicone. The antacid components neutralise gastric hydrochloric acid, raising pH, reduce pepsin activity and protect the mucosa. Simethicone is an inert silicone compound that lowers surface tension; it coalesces and disperses gas bubbles in the gut, reducing gas formation and flatulence. Simethicone is not absorbed and is chemically inert.`,
    farmakokinetika: {
      sorish: "The components are practically not absorbed; simethicone is not absorbed at all",
      tarqalish: "Local action in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces unchanged"
    },
    korsatmalar: [
      "Hyperacid gastritis, dyspepsia, heartburn",
      "Reflux oesophagitis",
      "Gastric and intestinal ulcer (in combination therapy)",
      "Conditions with flatulence, bloating and gas accumulation"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Severe renal impairment",
      "Hypophosphataemia"
    ],
    nojoya: {
      "Gastrointestinal": "Loosening or constipation, nausea (rare)",
      "Metabolic": "Hypermagnesaemia, hypophosphataemia in renal failure",
      "Hypersensitivity": "Rash, itching (rare)"
    },
    dozadan: "Unlikely; hypermagnesaemia in renal failure — symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1–2 chewable tablets or 5–10 mL suspension 3–4 times daily, 1 h after meals and at bedtime.",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Chewable tablets; oral suspension"
  }
},

// ─── A02AH · Antatsid + Natriy bikarbonat ─────────────────────────────────
"A02AH": {
  uz: {
    gruppa: "Antatsidlar — natriy bikarbonat bilan kombinatsiyalar",
    farmTasir: "Tez ta'sir qiluvchi shippuchi antatsid kombinatsiya",
    farmakodinamika: `Natriy bikarbonat va boshqa antatsid tuzlar (kalsiy karbonat va h.k.) kombinatsiyasi. Natriy bikarbonat oshqozon xlorid kislotasini tezda neytrallaydi (CO2 ajralib chiqadi), pH ni oshiradi va jig'ildon qaynashini tez bartaraf qiladi. Kombinatsiyadagi so'rilmaydigan komponentlar ta'sirni uzaytiradi. Tez, lekin nisbatan qisqa muddatli ta'sir; ko'p qo'llanганда natriy yukи va tizimli alkaloz xavfi bor.`,
    farmakokinetika: {
      sorish: "Natriy bikarbonat qisman so'riladi; boshqa komponentlar so'rilmaydi",
      tarqalish: "Oshqozon luminida mahalliy ta'sir",
      metabolizm: "Bikarbonat CO2 ga parchalanadi",
      chiqarilish: "Natriy buyrak orqali; CO2 nafas bilan"
    },
    korsatmalar: [
      "Jig'ildon qaynashi, giperatsid dispepsiya",
      "Reflyuks-ezofagit simptomatik davosi",
      "Oshqozon noxushligini tez bartaraf qilish"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Metabolik alkaloz",
      "Og'ir buyrak yetishmovchiligi",
      "Natriy cheklangan parhez (yurak yetishmovchiligi, gipertenziya, shish)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Kekirish, meteorizm, qorin shishi",
      "Metabolik": "Ko'p qo'llashda metabolik alkaloz, gipernatriemiya, suyuqlik ushlanishi",
      "Boshqa": "Sut-ishqor sindromi (kalsiy tutsa, uzoq qo'llashda)"
    },
    dozadan: "Ko'p qo'llashda alkaloz, gipernatriemiya, shish — preparatni to'xtatish, elektrolitlarni tuzatish.",
    ozarotasir: [
      "Oshqozon pH ini oshirib boshqa dorilar (tetratsiklin, temir, ftorxinolon) so'rilishini o'zgartiradi — 2 soat farq bilan",
      "Natriy ushlanishi tufayli gipertenziya va yurak yetishmovchiligida ehtiyotkorlik"
    ],
    qollash: {
      kattalar: "1 doza bir stakan suvda eritib, jig'ildon qaynaganda yoki ovqatdan keyin; kuniga 3–4 martadan ko'p emas, qisqa muddat.",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Shippuchi tabletkalar yoki kukun (natriy bikarbonat asosida)"
  },
  ru: {
    gruppa: "Антациды в комбинации с натрия бикарбонатом",
    farmTasir: "Быстродействующая шипучая антацидная комбинация",
    farmakodinamika: `Комбинация натрия бикарбоната и других антацидных солей (карбонат кальция и др.). Натрия бикарбонат быстро нейтрализует соляную кислоту желудка (выделяется CO2), повышает pH и быстро устраняет изжогу. Невсасывающиеся компоненты комбинации продлевают действие. Действие быстрое, но относительно кратковременное; при избыточном применении есть риск натриевой нагрузки и системного алкалоза.`,
    farmakokinetika: {
      sorish: "Натрия бикарбонат частично всасывается; другие компоненты не всасываются",
      tarqalish: "Местное действие в просвете желудка",
      metabolizm: "Бикарбонат распадается до CO2",
      chiqarilish: "Натрий почками; CO2 с дыханием"
    },
    korsatmalar: [
      "Изжога, гиперацидная диспепсия",
      "Симптоматическое лечение рефлюкс-эзофагита",
      "Быстрое устранение желудочного дискомфорта"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Метаболический алкалоз",
      "Тяжёлая почечная недостаточность",
      "Диета с ограничением натрия (сердечная недостаточность, гипертензия, отёки)"
    ],
    nojoya: {
      "ЖКТ": "Отрыжка, метеоризм, вздутие живота",
      "Метаболические": "При избыточном применении метаболический алкалоз, гипернатриемия, задержка жидкости",
      "Прочие": "Молочно-щелочной синдром (при содержании кальция, длительном применении)"
    },
    dozadan: "При избыточном применении алкалоз, гипернатриемия, отёки — отмена препарата, коррекция электролитов.",
    ozarotasir: [
      "Повышая pH желудка, изменяет всасывание других препаратов (тетрациклин, железо, фторхинолоны) — интервал 2 часа",
      "Осторожно при гипертензии и сердечной недостаточности из-за задержки натрия"
    ],
    qollash: {
      kattalar: "1 дозу растворить в стакане воды при изжоге или после еды; не более 3–4 раз в день, кратковременно.",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Шипучие таблетки или порошок (на основе натрия бикарбоната)"
  },
  en: {
    gruppa: "Antacids in combination with sodium bicarbonate",
    farmTasir: "Fast-acting effervescent antacid combination",
    farmakodinamika: `A combination of sodium bicarbonate and other antacid salts (calcium carbonate, etc.). Sodium bicarbonate rapidly neutralises gastric hydrochloric acid (releasing CO2), raises pH and quickly relieves heartburn. Non-absorbable components in the combination prolong the action. Onset is rapid but relatively short-lived; excessive use carries a risk of sodium load and systemic alkalosis.`,
    farmakokinetika: {
      sorish: "Sodium bicarbonate is partly absorbed; other components are not absorbed",
      tarqalish: "Local action in the gastric lumen",
      metabolizm: "Bicarbonate breaks down to CO2",
      chiqarilish: "Sodium renally; CO2 via respiration"
    },
    korsatmalar: [
      "Heartburn, hyperacid dyspepsia",
      "Symptomatic treatment of reflux oesophagitis",
      "Rapid relief of gastric discomfort"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Metabolic alkalosis",
      "Severe renal impairment",
      "Sodium-restricted diet (heart failure, hypertension, oedema)"
    ],
    nojoya: {
      "Gastrointestinal": "Belching, flatulence, bloating",
      "Metabolic": "Metabolic alkalosis, hypernatraemia, fluid retention with excessive use",
      "Other": "Milk-alkali syndrome (if calcium-containing, with prolonged use)"
    },
    dozadan: "Excessive use causes alkalosis, hypernatraemia, oedema — discontinue, correct electrolytes.",
    ozarotasir: [
      "By raising gastric pH it alters absorption of other drugs (tetracycline, iron, fluoroquinolones) — separate by 2 hours",
      "Caution in hypertension and heart failure due to sodium retention"
    ],
    qollash: {
      kattalar: "Dissolve 1 dose in a glass of water for heartburn or after meals; no more than 3–4 times daily, short term.",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Effervescent tablets or powder (sodium bicarbonate based)"
  }
},

// ─── A02AX · Antatsid kombinatsiyalari (boshqa) ───────────────────────────
"A02AX": {
  uz: {
    gruppa: "Antatsidlar — boshqa kombinatsiyalar",
    farmTasir: "Aralash antatsid va simptomlarni yengillashtiruvchi kombinatsiya",
    farmakodinamika: `Alyuminiy va magniy gidroksidi hamda simetikon (ba'zan og'riqsizlantiruvchi yoki o'rab oluvchi qo'shimchalar) asosidagi aralash antatsid. Antatsid komponentlar oshqozon xlorid kislotasini neytrallaydi, pH ni oshiradi va pepsin faolligini kamaytiradi, shilliq pardani o'rab himoyalaydi; simetikon gaz pufakchalarini yo'q qilib meteorizmni kamaytiradi. Kombinatsiyalangan tarkib kislotalilik va gaz bilan bog'liq simptomlarni bir vaqtda yengillashtiradi.`,
    farmakokinetika: {
      sorish: "Komponentlar deyarli so'rilmaydi (simetikon umuman)",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Giperatsid gastrit, dispepsiya, jig'ildon qaynashi",
      "Reflyuks-ezofagit",
      "Oshqozon-ichak yarasi (kompleks davoda)",
      "Meteorizm va gaz to'planishi bilan kechadigan oshqozon noxushligi"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Gipofosfatemiya"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich yumshashi yoki qotishi, ko'ngil aynishi",
      "Metabolik": "Buyrak yetishmovchiligida gipermagniemiya, gipofosfatemiya",
      "Allergiya": "Toshma, qichishish (kam)"
    },
    dozadan: "Ehtimoli past; buyrak yetishmovchiligida elektrolit buzilishlari — simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "1–2 chaynaladigan tabletka yoki 5–10 ml suspenziya kuniga 3–4 marta, ovqatdan 1 soat keyin va uxlash oldidan.",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Chaynaladigan tabletkalar; ichish uchun suspenziya"
  },
  ru: {
    gruppa: "Антациды — прочие комбинации",
    farmTasir: "Смешанная антацидная и симптом-облегчающая комбинация",
    farmakodinamika: `Смешанный антацид на основе гидроксида алюминия и магния с симетиконом (иногда с обезболивающими или обволакивающими добавками). Антацидные компоненты нейтрализуют соляную кислоту желудка, повышают pH и снижают активность пепсина, обволакивают и защищают слизистую; симетикон разрушает пузырьки газа, уменьшая метеоризм. Комбинированный состав одновременно облегчает симптомы, связанные с кислотностью и газами.`,
    farmakokinetika: {
      sorish: "Компоненты практически не всасываются (симетикон совсем)",
      tarqalish: "Местное действие в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом в неизменённом виде"
    },
    korsatmalar: [
      "Гиперацидный гастрит, диспепсия, изжога",
      "Рефлюкс-эзофагит",
      "Язва желудка и кишечника (в комплексной терапии)",
      "Желудочный дискомфорт с метеоризмом и скоплением газов"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Тяжёлая почечная недостаточность",
      "Гипофосфатемия"
    ],
    nojoya: {
      "ЖКТ": "Послабление или запор, тошнота",
      "Метаболические": "Гипермагниемия, гипофосфатемия при почечной недостаточности",
      "Аллергические": "Сыпь, зуд (редко)"
    },
    dozadan: "Маловероятна; при почечной недостаточности электролитные нарушения — симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "1–2 жевательные таблетки или 5–10 мл суспензии 3–4 раза в день, через 1 ч после еды и перед сном.",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Жевательные таблетки; суспензия для приёма внутрь"
  },
  en: {
    gruppa: "Antacids — other combinations",
    farmTasir: "Mixed antacid and symptom-relieving combination",
    farmakodinamika: `A mixed antacid based on aluminium and magnesium hydroxide with simethicone (sometimes with analgesic or demulcent additives). The antacid components neutralise gastric hydrochloric acid, raise pH and reduce pepsin activity, coating and protecting the mucosa; simethicone disperses gas bubbles, reducing flatulence. The combined composition simultaneously relieves acidity- and gas-related symptoms.`,
    farmakokinetika: {
      sorish: "The components are practically not absorbed (simethicone not at all)",
      tarqalish: "Local action in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces unchanged"
    },
    korsatmalar: [
      "Hyperacid gastritis, dyspepsia, heartburn",
      "Reflux oesophagitis",
      "Gastric and intestinal ulcer (in combination therapy)",
      "Gastric discomfort with flatulence and gas accumulation"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Severe renal impairment",
      "Hypophosphataemia"
    ],
    nojoya: {
      "Gastrointestinal": "Loosening or constipation, nausea",
      "Metabolic": "Hypermagnesaemia, hypophosphataemia in renal failure",
      "Hypersensitivity": "Rash, itching (rare)"
    },
    dozadan: "Unlikely; electrolyte disturbances in renal failure — symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1–2 chewable tablets or 5–10 mL suspension 3–4 times daily, 1 h after meals and at bedtime.",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Chewable tablets; oral suspension"
  }
},

// ─── A02AF01 · Magaldrat + Simetikon ──────────────────────────────────────
"A02AF01": {
  uz: {
    gruppa: "Antatsidlar — gaz haydovchi bilan kombinatsiyalar",
    farmTasir: "Antatsid va meteorizmga qarshi kombinatsiya",
    farmakodinamika: `Magaldrat (alyuminiy-magniy gidroksid sulfat) va simetikon kombinatsiyasi. Magaldrat — o'ziga xos kristall tuzilishga ega so'rilmaydigan antatsid; oshqozon kislotaliligiga qarab bosqichma-bosqich erib, xlorid kislotani neytrallaydi va pH ni fiziologik darajada ushlab turadi (buferli ta'sir), pepsin va o't kislotalarini bog'laydi. Simetikon yuza tarangligini pasaytirib gaz pufakchalarini yo'q qiladi va meteorizmni kamaytiradi. Muvozanatlashgan Al/Mg tarkibi ichak harakatiga neytral ta'sir qiladi.`,
    farmakokinetika: {
      sorish: "Magaldrat deyarli so'rilmaydi; simetikon umuman so'rilmaydi",
      tarqalish: "Oshqozon-ichak luminida mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Giperatsid gastrit, dispepsiya, jig'ildon qaynashi",
      "Reflyuks-ezofagit",
      "Oshqozon-ichak yarasi (kompleks davoda)",
      "Meteorizm va gaz to'planishi bilan kechadigan oshqozon noxushligi"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi",
      "Gipofosfatemiya"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich yumshashi, ko'ngil aynishi (katta dozada)",
      "Metabolik": "Buyrak yetishmovchiligida gipermagniemiya",
      "Allergiya": "Toshma, qichishish (kam)"
    },
    dozadan: "Ehtimoli past; buyrak yetishmovchiligida gipermagniemiya — simptomatik davolash.",
    ozarotasir: [
      "Tetratsiklin, ftorxinolon, temir, digoksin, tiroid gormoni so'rilishini kamaytiradi — 2 soat farq bilan",
      "Enterik qobiqli preparatlar bilan tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "1 paket yoki 1–2 chaynaladigan tabletka kuniga 3–4 marta, ovqatdan 1 soat keyin va uxlash oldidan.",
      bolalar: "Shifokor tavsiyasi bilan, kamaytirilgan dozada"
    },
    chiqarish: "Chaynaladigan tabletkalar; ichish uchun suspenziya (paketlarda)"
  },
  ru: {
    gruppa: "Антациды в комбинации с ветрогонными",
    farmTasir: "Антацидная и ветрогонная комбинация",
    farmakodinamika: `Комбинация магалдрата (алюминиево-магниевый гидроксид сульфат) и симетикона. Магалдрат — невсасывающийся антацид с особой кристаллической структурой; растворяется постепенно в зависимости от кислотности, нейтрализует соляную кислоту и удерживает pH на физиологическом уровне (буферное действие), связывает пепсин и жёлчные кислоты. Симетикон снижает поверхностное натяжение, разрушает пузырьки газа и уменьшает метеоризм. Сбалансированный состав Al/Mg нейтрально влияет на моторику кишечника.`,
    farmakokinetika: {
      sorish: "Магалдрат практически не всасывается; симетикон не всасывается вовсе",
      tarqalish: "Местное действие в просвете ЖКТ",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом в неизменённом виде"
    },
    korsatmalar: [
      "Гиперацидный гастрит, диспепсия, изжога",
      "Рефлюкс-эзофагит",
      "Язва желудка и кишечника (в комплексной терапии)",
      "Желудочный дискомфорт с метеоризмом"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Тяжёлая почечная недостаточность",
      "Гипофосфатемия"
    ],
    nojoya: {
      "ЖКТ": "Послабление стула, тошнота (при высоких дозах)",
      "Метаболические": "Гипермагниемия при почечной недостаточности",
      "Аллергические": "Сыпь, зуд (редко)"
    },
    dozadan: "Маловероятна; при почечной недостаточности гипермагниемия — симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание тетрациклина, фторхинолонов, железа, дигоксина, тиреоидных гормонов — интервал 2 часа",
      "Не рекомендуется с препаратами в энтеросолюбильной оболочке"
    ],
    qollash: {
      kattalar: "1 пакет или 1–2 жевательные таблетки 3–4 раза в день, через 1 ч после еды и перед сном.",
      bolalar: "По рекомендации врача, в сниженной дозе"
    },
    chiqarish: "Жевательные таблетки; суспензия для приёма внутрь (в пакетах)"
  },
  en: {
    gruppa: "Antacids in combination with antiflatulents",
    farmTasir: "Antacid and antiflatulent combination",
    farmakodinamika: `A combination of magaldrate (aluminium-magnesium hydroxide sulfate) and simethicone. Magaldrate is a non-absorbable antacid with a distinct crystalline structure; it dissolves gradually depending on acidity, neutralises hydrochloric acid and maintains pH at a physiological level (buffering action), and binds pepsin and bile acids. Simethicone lowers surface tension, disperses gas bubbles and reduces flatulence. The balanced Al/Mg composition has a neutral effect on bowel motility.`,
    farmakokinetika: {
      sorish: "Magaldrate is practically not absorbed; simethicone not at all",
      tarqalish: "Local action in the GI lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces unchanged"
    },
    korsatmalar: [
      "Hyperacid gastritis, dyspepsia, heartburn",
      "Reflux oesophagitis",
      "Gastric and intestinal ulcer (in combination therapy)",
      "Gastric discomfort with flatulence"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Severe renal impairment",
      "Hypophosphataemia"
    ],
    nojoya: {
      "Gastrointestinal": "Loose stools, nausea (at high doses)",
      "Metabolic": "Hypermagnesaemia in renal failure",
      "Hypersensitivity": "Rash, itching (rare)"
    },
    dozadan: "Unlikely; hypermagnesaemia in renal failure — symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of tetracycline, fluoroquinolones, iron, digoxin, thyroid hormones — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "1 sachet or 1–2 chewable tablets 3–4 times daily, 1 h after meals and at bedtime.",
      bolalar: "On medical advice, in reduced dose"
    },
    chiqarish: "Chewable tablets; oral suspension (in sachets)"
  }
},

// ─── A02B · Domperidon + Omeprazol (kombinatsiya) ─────────────────────────
"A02B": {
  uz: {
    gruppa: "Yara va GERB davosida qo'llaniladigan preparatlar (kombinatsiya)",
    farmTasir: "Protyon pompa inhibitori va prokinetik kombinatsiyasi",
    farmakodinamika: `Omeprazol va domperidon kombinatsiyasi. Omeprazol — protyon pompa inhibitori (PPI): oshqozon parietal hujayralaridagi H+/K+-ATFaza fermentini qaytmas bloklab, kislota sekretsiyasining yakuniy bosqichini to'xtatadi va bazal hamda stimullangan kislota ishlab chiqarishini kuchli kamaytiradi. Domperidon — periferik dofamin D2 retseptorlari antagonisti (prokinetik): oshqozon va o'n ikki barmoq ichak harakatini kuchaytiradi, pastki qizilo'ngach sfinkteri tonusini oshiradi va oshqozon bo'shashini tezlashtiradi, shu bilan reflyuks va ko'ngil aynishini kamaytiradi. Kombinatsiya kislota bostirish va motorikani birga ta'minlaydi.`,
    farmakokinetika: {
      sorish: "Omeprazol enterik qobiqdan ingichka ichakда so'riladi; domperidon og'iz orqali so'riladi (biofaollik past — birinchi o'tish effekti)",
      tarqalish: "Omeprazol oqsilga 95% bog'lanadi; domperidon BBO dan deyarli o'tmaydi",
      metabolizm: "Ikkalasi jigarda metabolizmga uchraydi (omeprazol — CYP2C19/3A4; domperidon — CYP3A4)",
      chiqarilish: "Omeprazol asosan buyrak orqali (metabolitlar); domperidon najas va siydik bilan"
    },
    korsatmalar: [
      "Gastroezofageal reflyuks kasalligi (GERB), reflyuks-ezofagit",
      "Oshqozon-ichak harakati sustligi bilan kechadigan dispepsiya",
      "Ko'ngil aynishi va qusish bilan kechadigan giperatsid holatlar"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Oshqozon-ichak qon ketishi, perforatsiya yoki obstruksiyasi",
      "Prolaktinoma",
      "QT intervali uzayishi, sezilarli elektrolit buzilishlari yoki yurak kasalliklari (domperidon)",
      "CYP3A4 ni kuchli inhibe qiluvchi yoki QT uzaytiruvchi preparatlar bilan birga"
    ],
    nojoya: {
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi",
      "Oshqozon-ichak": "Qorin og'rig'i, ich yumshashi yoki qotishi, og'iz qurishi",
      "Endokrin": "Giperprolaktinemiya, ginekomastiya, galaktoreya (domperidon)",
      "Yurak": "QT uzayishi, aritmiya xavfi (domperidon, ayniqsa katta dozada)"
    },
    dozadan: "Domperidonda ekstrapiramidal belgilar va aritmiya mumkin — yurakni nazorat qilish, simptomatik davolash.",
    ozarotasir: [
      "CYP3A4 inhibitorlari (ketokonazol, eritromitsin) — domperidon konsentratsiyasi va QT xavfini oshiradi",
      "Omeprazol klopidogrel faolligini kamaytiradi (CYP2C19)",
      "Omeprazol oshqozon pH ini oshirib ketokonazol, atazanavir, temir so'rilishini kamaytiradi",
      "Antixolinergiklar domperidon prokinetik ta'sirini susaytiradi"
    ],
    qollash: {
      kattalar: "1 kapsula (odatda omeprazol 20 mg + domperidon 10–30 mg) kuniga 1 marta ovqatdan 15–30 daqiqa oldin; kurs shifokor tavsiyasi bilan.",
      bolalar: "Tavsiya etilmaydi"
    },
    chiqarish: "Kapsula/tabletka (omeprazol + domperidon, ko'pincha modifikatsiyalangan chiqarishli)"
  },
  ru: {
    gruppa: "Препараты для лечения язвы и ГЭРБ (комбинация)",
    farmTasir: "Комбинация ингибитора протонной помпы и прокинетика",
    farmakodinamika: `Комбинация омепразола и домперидона. Омепразол — ингибитор протонной помпы (ИПП): необратимо блокирует H+/K+-АТФазу париетальных клеток желудка, останавливая конечный этап секреции кислоты и значительно снижая базальную и стимулированную продукцию кислоты. Домперидон — антагонист периферических дофаминовых D2-рецепторов (прокинетик): усиливает моторику желудка и двенадцатиперстной кишки, повышает тонус нижнего пищеводного сфинктера и ускоряет опорожнение желудка, уменьшая рефлюкс и тошноту. Комбинация обеспечивает подавление кислоты и улучшение моторики.`,
    farmakokinetika: {
      sorish: "Омепразол всасывается в тонкой кишке из энтеросолюбильной оболочки; домперидон всасывается внутрь (низкая биодоступность — эффект первого прохождения)",
      tarqalish: "Омепразол связывается с белками на 95%; домперидон почти не проникает через ГЭБ",
      metabolizm: "Оба метаболизируются в печени (омепразол — CYP2C19/3A4; домперидон — CYP3A4)",
      chiqarilish: "Омепразол преимущественно почками (метаболиты); домперидон с калом и мочой"
    },
    korsatmalar: [
      "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ), рефлюкс-эзофагит",
      "Диспепсия со сниженной моторикой ЖКТ",
      "Гиперацидные состояния с тошнотой и рвотой"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Желудочно-кишечное кровотечение, перфорация или обструкция",
      "Пролактинома",
      "Удлинение QT, выраженные электролитные нарушения или болезни сердца (домперидон)",
      "Одновременно с сильными ингибиторами CYP3A4 или препаратами, удлиняющими QT"
    ],
    nojoya: {
      "ЦНС": "Головная боль, головокружение",
      "ЖКТ": "Боль в животе, послабление или запор, сухость во рту",
      "Эндокринные": "Гиперпролактинемия, гинекомастия, галакторея (домперидон)",
      "Сердце": "Удлинение QT, риск аритмии (домперидон, особенно в высоких дозах)"
    },
    dozadan: "Возможны экстрапирамидные симптомы и аритмия (домперидон) — контроль сердца, симптоматическое лечение.",
    ozarotasir: [
      "Ингибиторы CYP3A4 (кетоконазол, эритромицин) — повышают концентрацию домперидона и риск QT",
      "Омепразол снижает активность клопидогрела (CYP2C19)",
      "Омепразол, повышая pH желудка, снижает всасывание кетоконазола, атазанавира, железа",
      "Антихолинергические средства ослабляют прокинетическое действие домперидона"
    ],
    qollash: {
      kattalar: "1 капсула (обычно омепразол 20 мг + домперидон 10–30 мг) 1 раз в день за 15–30 минут до еды; курс по рекомендации врача.",
      bolalar: "Не рекомендуется"
    },
    chiqarish: "Капсула/таблетка (омепразол + домперидон, часто с модифицированным высвобождением)"
  },
  en: {
    gruppa: "Drugs for ulcer and GERD (combination)",
    farmTasir: "Combination of a proton pump inhibitor and a prokinetic",
    farmakodinamika: `A combination of omeprazole and domperidone. Omeprazole is a proton pump inhibitor (PPI): it irreversibly blocks the H+/K+-ATPase of gastric parietal cells, halting the final step of acid secretion and markedly reducing basal and stimulated acid production. Domperidone is a peripheral dopamine D2 receptor antagonist (prokinetic): it enhances gastric and duodenal motility, increases lower oesophageal sphincter tone and accelerates gastric emptying, reducing reflux and nausea. The combination provides both acid suppression and improved motility.`,
    farmakokinetika: {
      sorish: "Omeprazole is absorbed in the small intestine from its enteric coating; domperidone is absorbed orally (low bioavailability — first-pass effect)",
      tarqalish: "Omeprazole is 95% protein-bound; domperidone barely crosses the blood-brain barrier",
      metabolizm: "Both are hepatically metabolised (omeprazole — CYP2C19/3A4; domperidone — CYP3A4)",
      chiqarilish: "Omeprazole mainly renally (metabolites); domperidone in faeces and urine"
    },
    korsatmalar: [
      "Gastro-oesophageal reflux disease (GERD), reflux oesophagitis",
      "Dyspepsia with reduced GI motility",
      "Hyperacid states with nausea and vomiting"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "GI bleeding, perforation or obstruction",
      "Prolactinoma",
      "QT prolongation, significant electrolyte disturbances or cardiac disease (domperidone)",
      "Concurrent strong CYP3A4 inhibitors or QT-prolonging drugs"
    ],
    nojoya: {
      "CNS": "Headache, dizziness",
      "Gastrointestinal": "Abdominal pain, loosening or constipation, dry mouth",
      "Endocrine": "Hyperprolactinaemia, gynaecomastia, galactorrhoea (domperidone)",
      "Cardiac": "QT prolongation, arrhythmia risk (domperidone, especially at high doses)"
    },
    dozadan: "Extrapyramidal symptoms and arrhythmia possible (domperidone) — cardiac monitoring, symptomatic treatment.",
    ozarotasir: [
      "CYP3A4 inhibitors (ketoconazole, erythromycin) — raise domperidone concentration and QT risk",
      "Omeprazole reduces clopidogrel activation (CYP2C19)",
      "Omeprazole, by raising gastric pH, reduces absorption of ketoconazole, atazanavir, iron",
      "Anticholinergics weaken the prokinetic effect of domperidone"
    ],
    qollash: {
      kattalar: "1 capsule (usually omeprazole 20 mg + domperidone 10–30 mg) once daily 15–30 min before food; course on medical advice.",
      bolalar: "Not recommended"
    },
    chiqarish: "Capsule/tablet (omeprazole + domperidone, often modified-release)"
  }
},

// ─── A02BA02 · Ranitidin ──────────────────────────────────────────────────
"A02BA02": {
  uz: {
    gruppa: "Histamin H2-retseptor blokatorlari",
    farmTasir: "Oshqozon kislotasi sekretsiyasini kamaytiruvchi vosita",
    farmakodinamika: `Ranitidin — ikkinchi avlod histamin H2-retseptor blokatori. Oshqozon parietal hujayralaridagi H2-retseptorlarni tanlab bloklab, bazal va stimullangan (histamin, gastrin, asetilxolin tomonidan) xlorid kislota sekretsiyasini kamaytiradi; oshqozon shirasi hajmi va pepsin ishlab chiqarilishini pasaytiradi. Simetidиndan kuchliroq va uzoqroq ta'sir qiladi, antiandrogen va fermentlarni inhibe qiluvchi ta'siri ancha kam. Eslatma: NDMA aralashmasi xavfi tufayli ko'pgina mamlakatlarda bozordan olib qo'yilgan.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi; biofaollik ~50%. Ovqat sezilarli ta'sir qilmaydi. Cmax 2–3 soatda",
      tarqalish: "Oqsilga bog'lanish ~15%; to'qimalarga keng tarqaladi, ona sutiga o'tadi",
      metabolizm: "Jigarda qisman metabolizmga uchraydi (oz qism)",
      chiqarilish: "Asosan buyrak orqali (kanalcha sekretsiyasi); T½ 2–3 soat"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi (davolash va profilaktika)",
      "Reflyuks-ezofagit, gastroezofageal reflyuks",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara profilaktikasi",
      "Mendelson sindromi profilaktikasi (anesteziyadan oldin)"
    ],
    qarrshi: [
      "Ranitidinga o'ta sezuvchanlik",
      "Homiladorlik va emizish davri (ehtiyotkorlik)",
      "O'tkir porfiriya anamnezi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi yoki yumshashi, ko'ngil aynishi, transaminazalar oshishi (kam)",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, charchoq; keksalar/buyrak yetishmovchiligida chalkashlik",
      "Yurak": "Bradikardiya, AV-blokada (tez v/v yuborishda, kam)",
      "Endokrin": "Kam hollarda ginekomastiya, giperprolaktinemiya",
      "Qon tizimi": "Leykopeniya, trombotsitopeniya (kam)"
    },
    dozadan: "Maxsus antidot yo'q. Simptomatik davolash; gemodializ konsentratsiyani kamaytiradi.",
    ozarotasir: [
      "Oshqozon pH ini oshirib ketokonazol, itrakonazol, temir, atazanavir so'rilishini kamaytiradi",
      "Prokainamid eliminatsiyasini sekinlashtiradi",
      "Antatsidlar ranitidin so'rilishini kamaytiradi — 1–2 soat farq bilan"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 150 mg kuniga 2 marta yoki 300 mg kechqurun; profilaktika 150 mg kechqurun. V/m yoki v/v: 50 mg har 6–8 soatda. Buyrak yetishmovchiligida doza kamaytiriladi.",
      bolalar: "Yaraда 2–4 mg/kg kuniga 2 marta (maks. 300 mg/sut)"
    },
    chiqarish: "Tabletkalar 150 mg, 300 mg; inyeksiya eritmasi 25 mg/ml"
  },
  ru: {
    gruppa: "Блокаторы гистаминовых H2-рецепторов",
    farmTasir: "Средство, снижающее секрецию желудочной кислоты",
    farmakodinamika: `Ранитидин — блокатор гистаминовых H2-рецепторов второго поколения. Избирательно блокирует H2-рецепторы париетальных клеток желудка, снижая базальную и стимулированную (гистамином, гастрином, ацетилхолином) секрецию соляной кислоты; уменьшает объём желудочного сока и продукцию пепсина. Действует сильнее и дольше циметидина, с гораздо меньшим антиандрогенным и фермент-ингибирующим действием. Примечание: из-за риска примеси NDMA отозван с рынка во многих странах.`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь; биодоступность ~50%. Пища существенно не влияет. Cmax через 2–3 ч",
      tarqalish: "Связь с белками ~15%; широко распределяется, проникает в грудное молоко",
      metabolizm: "Частично метаболизируется в печени (небольшая часть)",
      chiqarilish: "Преимущественно почками (канальцевая секреция); T½ 2–3 ч"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки (лечение и профилактика)",
      "Рефлюкс-эзофагит, гастроэзофагеальный рефлюкс",
      "Синдром Золлингера–Эллисона",
      "Профилактика язв, связанных с НПВП",
      "Профилактика синдрома Мендельсона (перед анестезией)"
    ],
    qarrshi: [
      "Гиперчувствительность к ранитидину",
      "Беременность и период лактации (с осторожностью)",
      "Острая порфирия в анамнезе"
    ],
    nojoya: {
      "ЖКТ": "Запор или послабление, тошнота, повышение трансаминаз (редко)",
      "ЦНС": "Головная боль, головокружение, утомляемость; спутанность у пожилых/при почечной недостаточности",
      "Сердце": "Брадикардия, АВ-блокада (при быстром в/в введении, редко)",
      "Эндокринные": "Редко гинекомастия, гиперпролактинемия",
      "Кроветворение": "Лейкопения, тромбоцитопения (редко)"
    },
    dozadan: "Специфического антидота нет. Симптоматическое лечение; гемодиализ снижает концентрацию.",
    ozarotasir: [
      "Повышая pH желудка, снижает всасывание кетоконазола, итраконазола, железа, атазанавира",
      "Замедляет элиминацию прокаинамида",
      "Антациды снижают всасывание ранитидина — интервал 1–2 часа"
    ],
    qollash: {
      kattalar: "Внутрь: 150 мг 2 раза в день или 300 мг на ночь; профилактика 150 мг на ночь. В/м или в/в: 50 мг каждые 6–8 ч. При почечной недостаточности дозу снижают.",
      bolalar: "При язве 2–4 мг/кг 2 раза в день (макс. 300 мг/сут)"
    },
    chiqarish: "Таблетки 150 мг, 300 мг; раствор для инъекций 25 мг/мл"
  },
  en: {
    gruppa: "Histamine H2-receptor antagonists",
    farmTasir: "Agent that reduces gastric acid secretion",
    farmakodinamika: `Ranitidine is a second-generation histamine H2-receptor antagonist. It selectively blocks H2 receptors of gastric parietal cells, reducing basal and stimulated (by histamine, gastrin, acetylcholine) hydrochloric acid secretion; it lowers gastric juice volume and pepsin output. It is more potent and longer-acting than cimetidine, with much less antiandrogenic and enzyme-inhibiting effect. Note: due to NDMA impurity risk it has been withdrawn from the market in many countries.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally; bioavailability ~50%. Food has little effect. Cmax in 2–3 h",
      tarqalish: "Protein binding ~15%; widely distributed, enters breast milk",
      metabolizm: "Partly metabolised in the liver (a small fraction)",
      chiqarilish: "Mainly renally (tubular secretion); T½ 2–3 h"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer (treatment and prophylaxis)",
      "Reflux oesophagitis, gastro-oesophageal reflux",
      "Zollinger-Ellison syndrome",
      "Prophylaxis of NSAID-associated ulcers",
      "Prophylaxis of Mendelson's syndrome (before anaesthesia)"
    ],
    qarrshi: [
      "Hypersensitivity to ranitidine",
      "Pregnancy and lactation (with caution)",
      "History of acute porphyria"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation or loosening, nausea, raised transaminases (rare)",
      "CNS": "Headache, dizziness, fatigue; confusion in the elderly/renal impairment",
      "Cardiac": "Bradycardia, AV block (with rapid IV, rare)",
      "Endocrine": "Rarely gynaecomastia, hyperprolactinaemia",
      "Haematological": "Leucopenia, thrombocytopenia (rare)"
    },
    dozadan: "No specific antidote. Symptomatic treatment; haemodialysis reduces concentration.",
    ozarotasir: [
      "By raising gastric pH it reduces absorption of ketoconazole, itraconazole, iron, atazanavir",
      "Slows elimination of procainamide",
      "Antacids reduce ranitidine absorption — separate by 1–2 hours"
    ],
    qollash: {
      kattalar: "Oral: 150 mg twice daily or 300 mg at night; prophylaxis 150 mg at night. IM or IV: 50 mg every 6–8 h. Reduce dose in renal impairment.",
      bolalar: "For ulcer 2–4 mg/kg twice daily (max 300 mg/day)"
    },
    chiqarish: "Tablets 150 mg, 300 mg; injection solution 25 mg/mL"
  }
},

// ─── A02BA03 · Famotidin ──────────────────────────────────────────────────
"A02BA03": {
  uz: {
    gruppa: "Histamin H2-retseptor blokatorlari",
    farmTasir: "Oshqozon kislotasi sekretsiyasini kuchli kamaytiruvchi vosita",
    farmakodinamika: `Famotidin — uchinchi avlod histamin H2-retseptor blokatori. Parietal hujayralardagi H2-retseptorlarni tanlab bloklab, bazal va stimullangan xlorid kislota sekretsiyasini kamaytiradi, oshqozon shirasi hajmi va pepsin faolligini pasaytiradi. Ranitidindan ~8 marta, simetidindan ~40 marta kuchliroq; ta'siri uzoqroq (10–12 soatgacha). Sitoxrom P450 ga ta'sir qilmaydi, antiandrogen ta'siri yo'q, shuning uchun dori-dori o'zaro ta'siri kam.`,
    farmakokinetika: {
      sorish: "Og'iz orqali qisman so'riladi; biofaollik 40–45%. Cmax 1–3 soatda",
      tarqalish: "Oqsilga bog'lanish 15–20%; ona sutiga o'tadi",
      metabolizm: "Jigarda minimal metabolizm (S-oksid)",
      chiqarilish: "Asosan buyrak orqali o'zgarmagan holda (kanalcha sekretsiyasi); T½ 2,5–3,5 soat"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi (davolash va profilaktika)",
      "Reflyuks-ezofagit, GERB",
      "Zollinger-Ellison sindromi",
      "Stress yaralari va NSAID gastropatiyasi profilaktikasi",
      "Funksional dispepsiya"
    ],
    qarrshi: [
      "Famotidinga yoki boshqa H2-blokatorlarga o'ta sezuvchanlik",
      "Homiladorlik va emizish davri (ehtiyotkorlik)",
      "3 yoshgacha bolalar (cheklangan ma'lumot)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi yoki diareya, ko'ngil aynishi, og'iz qurishi",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi; buyrak yetishmovchiligida chalkashlik",
      "Yurak": "Aritmiya, QT uzayishi (kam, ko'p dozada/buyrak yetishmovchiligida)",
      "Allergiya": "Toshma, qichishish, kamdan-kam anafilaksiya"
    },
    dozadan: "Maxsus antidot yo'q. Simptomatik davolash, qusdirish/oshqozonni yuvish.",
    ozarotasir: [
      "Oshqozon pH ini oshirib ketokonazol, itrakonazol, atazanavir, temir so'rilishini kamaytiradi",
      "Antatsidlar famotidin so'rilishini kamaytiradi — 1–2 soat farq bilan",
      "Probenetsid famotidin chiqarilishini sekinlashtiradi"
    ],
    qollash: {
      kattalar: "Yarada: 40 mg kechqurun yoki 20 mg kuniga 2 marta, 4–8 hafta. Profilaktika: 20 mg kechqurun. Zollinger-Ellison: 20–40 mg har 6 soatda. Buyrak yetishmovchiligida doza kamaytiriladi.",
      bolalar: "3 yoshdan: 0,5–1 mg/kg/sut (maks. 40 mg/sut)"
    },
    chiqarish: "Tabletkalar 20 mg, 40 mg; inyeksiya uchun kukun 20 mg"
  },
  ru: {
    gruppa: "Блокаторы гистаминовых H2-рецепторов",
    farmTasir: "Средство, выраженно снижающее секрецию желудочной кислоты",
    farmakodinamika: `Фамотидин — блокатор гистаминовых H2-рецепторов третьего поколения. Избирательно блокирует H2-рецепторы париетальных клеток, снижая базальную и стимулированную секрецию соляной кислоты, уменьшая объём желудочного сока и активность пепсина. Примерно в 8 раз сильнее ранитидина и в 40 раз — циметидина; действие более длительное (до 10–12 ч). Не влияет на цитохром P450, лишён антиандрогенного действия, поэтому имеет мало лекарственных взаимодействий.`,
    farmakokinetika: {
      sorish: "Частично всасывается внутрь; биодоступность 40–45%. Cmax через 1–3 ч",
      tarqalish: "Связь с белками 15–20%; проникает в грудное молоко",
      metabolizm: "Минимальный метаболизм в печени (S-оксид)",
      chiqarilish: "Преимущественно почками в неизменённом виде (канальцевая секреция); T½ 2,5–3,5 ч"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки (лечение и профилактика)",
      "Рефлюкс-эзофагит, ГЭРБ",
      "Синдром Золлингера–Эллисона",
      "Профилактика стрессовых язв и НПВП-гастропатии",
      "Функциональная диспепсия"
    ],
    qarrshi: [
      "Гиперчувствительность к фамотидину или другим H2-блокаторам",
      "Беременность и период лактации (с осторожностью)",
      "Детский возраст до 3 лет (ограниченные данные)"
    ],
    nojoya: {
      "ЖКТ": "Запор или диарея, тошнота, сухость во рту",
      "ЦНС": "Головная боль, головокружение; спутанность при почечной недостаточности",
      "Сердце": "Аритмия, удлинение QT (редко, при высоких дозах/почечной недостаточности)",
      "Аллергические": "Сыпь, зуд, редко анафилаксия"
    },
    dozadan: "Специфического антидота нет. Симптоматическое лечение, вызывание рвоты/промывание желудка.",
    ozarotasir: [
      "Повышая pH желудка, снижает всасывание кетоконазола, итраконазола, атазанавира, железа",
      "Антациды снижают всасывание фамотидина — интервал 1–2 часа",
      "Пробенецид замедляет выведение фамотидина"
    ],
    qollash: {
      kattalar: "При язве: 40 мг на ночь или 20 мг 2 раза в день, 4–8 недель. Профилактика: 20 мг на ночь. Синдром Золлингера–Эллисона: 20–40 мг каждые 6 ч. При почечной недостаточности дозу снижают.",
      bolalar: "С 3 лет: 0,5–1 мг/кг/сут (макс. 40 мг/сут)"
    },
    chiqarish: "Таблетки 20 мг, 40 мг; порошок для инъекций 20 мг"
  },
  en: {
    gruppa: "Histamine H2-receptor antagonists",
    farmTasir: "Agent that markedly reduces gastric acid secretion",
    farmakodinamika: `Famotidine is a third-generation histamine H2-receptor antagonist. It selectively blocks H2 receptors of parietal cells, reducing basal and stimulated hydrochloric acid secretion and lowering gastric juice volume and pepsin activity. It is about 8 times more potent than ranitidine and 40 times more than cimetidine, with longer action (up to 10–12 h). It does not affect cytochrome P450 and lacks antiandrogenic action, so it has few drug interactions.`,
    farmakokinetika: {
      sorish: "Partly absorbed orally; bioavailability 40–45%. Cmax in 1–3 h",
      tarqalish: "Protein binding 15–20%; enters breast milk",
      metabolizm: "Minimal hepatic metabolism (S-oxide)",
      chiqarilish: "Mainly renally unchanged (tubular secretion); T½ 2.5–3.5 h"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer (treatment and prophylaxis)",
      "Reflux oesophagitis, GERD",
      "Zollinger-Ellison syndrome",
      "Prophylaxis of stress ulcers and NSAID gastropathy",
      "Functional dyspepsia"
    ],
    qarrshi: [
      "Hypersensitivity to famotidine or other H2 blockers",
      "Pregnancy and lactation (with caution)",
      "Children under 3 years (limited data)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation or diarrhoea, nausea, dry mouth",
      "CNS": "Headache, dizziness; confusion in renal impairment",
      "Cardiac": "Arrhythmia, QT prolongation (rare, at high doses/renal impairment)",
      "Hypersensitivity": "Rash, itching, rarely anaphylaxis"
    },
    dozadan: "No specific antidote. Symptomatic treatment, induced emesis/gastric lavage.",
    ozarotasir: [
      "By raising gastric pH it reduces absorption of ketoconazole, itraconazole, atazanavir, iron",
      "Antacids reduce famotidine absorption — separate by 1–2 hours",
      "Probenecid slows famotidine excretion"
    ],
    qollash: {
      kattalar: "For ulcer: 40 mg at night or 20 mg twice daily, 4–8 weeks. Prophylaxis: 20 mg at night. Zollinger-Ellison: 20–40 mg every 6 h. Reduce dose in renal impairment.",
      bolalar: "From 3 years: 0.5–1 mg/kg/day (max 40 mg/day)"
    },
    chiqarish: "Tablets 20 mg, 40 mg; powder for injection 20 mg"
  }
},

// ─── A02BB01 · Mizoprostol ────────────────────────────────────────────────
"A02BB01": {
  uz: {
    gruppa: "Prostaglandinlar (oshqozon shilliq pardasini himoyalovchi)",
    farmTasir: "Sintetik prostaglandin E1 analogi — sitoprotektiv va kislotani kamaytiruvchi",
    farmakodinamika: `Mizoprostol — prostaglandin E1 ning sintetik analogi. Parietal hujayralardagi prostaglandin retseptorlariga ta'sir qilib bazal va stimullangan xlorid kislota sekretsiyasini kamaytiradi. Shu bilan birga shilliq pardani himoyalovchi (sitoprotektiv) ta'sir ko'rsatadi: bikarbonat va shilimshiq sekretsiyasini oshiradi, shilliq qavat qon aylanishini yaxshilaydi. Bachadon silliq mushaklarini qisqartiradi (uterotonik ta'sir) — bu xususiyat akusherlikda ham qo'llaniladi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi; ovqat va antatsidlar so'rilishni sekinlashtiradi",
      tarqalish: "Faol metaboliti (mizoprostol kislotasi) oqsilga ~85% bog'lanadi",
      metabolizm: "Tez esterlanib faol mizoprostol kislotasiga aylanadi, keyin oksidlanadi",
      chiqarilish: "Asosan buyrak orqali; T½ ~20–40 daqiqa (faol metabolit)"
    },
    korsatmalar: [
      "NSAID qabul qilish bilan bog'liq oshqozon va o'n ikki barmoq ichak yarasi profilaktikasi",
      "Oshqozon va o'n ikki barmoq ichak yarasini davolash",
      "Akusherlikda (alohida indikatsiyalar): homila tushishi, tug'ruqni induktsiya qilish, tug'ruqdan keyingi qon ketishi (mahalliy protokollar bo'yicha)"
    ],
    qarrshi: [
      "Mizoprostol yoki prostaglandinlarга o'ta sezuvchanlik",
      "Homiladorlik (yarani davolash maqsadida — mutlaq qarshi; bachadon qisqarishi va homila tushishi xavfi)",
      "Reproduktiv yoshdagi ayollarda ishonchli kontratsepsiyasiz qo'llash",
      "Og'ir yallig'lanishli ichak kasalliklari"
    ],
    nojoya: {
      "Oshqozon-ichak": "Diareya (ko'p), qorin og'rig'i, ko'ngil aynishi, meteorizm",
      "Ginekologik": "Bachadon qisqarishi, qindan qon ketishi, menstrual buzilishlar",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi",
      "Boshqa": "Titroq, isitma (akusherlik dozalarida)"
    },
    dozadan: "Belgilar: qorin og'rig'i, diareya, isitma, tremor, gipotenziya, bradikardiya. Davolash: simptomatik.",
    ozarotasir: [
      "Magniy tutuvchi antatsidlar diareyani kuchaytiradi — birga tavsiya etilmaydi",
      "NSAID bilan birga maqsadli (yara profilaktikasi) qo'llaniladi"
    ],
    qollash: {
      kattalar: "Yara/profilaktika: 200 mkg kuniga 2–4 marta ovqat bilan va uxlash oldidan (ko'tarilmasa 100 mkg). Akusherlik indikatsiyalari — faqat shifokor nazoratida, maxsus protokollar bo'yicha.",
      bolalar: "Tavsiya etilmaydi"
    },
    chiqarish: "Tabletkalar 200 mkg (ba'zan 25 mkg, 100 mkg — akusherlik shakllari)"
  },
  ru: {
    gruppa: "Простагландины (защищающие слизистую желудка)",
    farmTasir: "Синтетический аналог простагландина E1 — цитопротективный и кислотоснижающий",
    farmakodinamika: `Мизопростол — синтетический аналог простагландина E1. Воздействуя на простагландиновые рецепторы париетальных клеток, снижает базальную и стимулированную секрецию соляной кислоты. Одновременно оказывает защищающее слизистую (цитопротективное) действие: повышает секрецию бикарбоната и слизи, улучшает кровоток слизистой. Сокращает гладкую мускулатуру матки (утеротоническое действие) — это свойство используется в акушерстве.`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь; пища и антациды замедляют всасывание",
      tarqalish: "Активный метаболит (мизопростоловая кислота) связывается с белками на ~85%",
      metabolizm: "Быстро этерифицируется в активную мизопростоловую кислоту, затем окисляется",
      chiqarilish: "Преимущественно почками; T½ ~20–40 минут (активный метаболит)"
    },
    korsatmalar: [
      "Профилактика язв желудка и двенадцатиперстной кишки, связанных с приёмом НПВП",
      "Лечение язвы желудка и двенадцатиперстной кишки",
      "В акушерстве (отдельные показания): прерывание беременности, индукция родов, послеродовое кровотечение (по местным протоколам)"
    ],
    qarrshi: [
      "Гиперчувствительность к мизопростолу или простагландинам",
      "Беременность (для лечения язвы — абсолютно противопоказан; риск сокращений матки и выкидыша)",
      "Применение у женщин репродуктивного возраста без надёжной контрацепции",
      "Тяжёлые воспалительные заболевания кишечника"
    ],
    nojoya: {
      "ЖКТ": "Диарея (часто), боль в животе, тошнота, метеоризм",
      "Гинекологические": "Сокращения матки, вагинальное кровотечение, нарушения менструации",
      "ЦНС": "Головная боль, головокружение",
      "Прочие": "Озноб, лихорадка (в акушерских дозах)"
    },
    dozadan: "Симптомы: боль в животе, диарея, лихорадка, тремор, гипотензия, брадикардия. Лечение: симптоматическое.",
    ozarotasir: [
      "Магнийсодержащие антациды усиливают диарею — не рекомендуется вместе",
      "С НПВП применяется целенаправленно (профилактика язв)"
    ],
    qollash: {
      kattalar: "Язва/профилактика: 200 мкг 2–4 раза в день с едой и перед сном (при непереносимости 100 мкг). Акушерские показания — только под контролем врача, по специальным протоколам.",
      bolalar: "Не рекомендуется"
    },
    chiqarish: "Таблетки 200 мкг (иногда 25 мкг, 100 мкг — акушерские формы)"
  },
  en: {
    gruppa: "Prostaglandins (gastric mucosal protectants)",
    farmTasir: "Synthetic prostaglandin E1 analogue — cytoprotective and acid-reducing",
    farmakodinamika: `Misoprostol is a synthetic analogue of prostaglandin E1. Acting on prostaglandin receptors of parietal cells, it reduces basal and stimulated hydrochloric acid secretion. It also has a mucosa-protecting (cytoprotective) effect: it increases bicarbonate and mucus secretion and improves mucosal blood flow. It contracts uterine smooth muscle (uterotonic action) — a property also used in obstetrics.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally; food and antacids slow absorption",
      tarqalish: "The active metabolite (misoprostol acid) is ~85% protein-bound",
      metabolizm: "Rapidly esterified to active misoprostol acid, then oxidised",
      chiqarilish: "Mainly renally; T½ ~20–40 minutes (active metabolite)"
    },
    korsatmalar: [
      "Prophylaxis of NSAID-associated gastric and duodenal ulcers",
      "Treatment of gastric and duodenal ulcer",
      "In obstetrics (separate indications): pregnancy termination, labour induction, postpartum haemorrhage (per local protocols)"
    ],
    qarrshi: [
      "Hypersensitivity to misoprostol or prostaglandins",
      "Pregnancy (for ulcer treatment — absolutely contraindicated; risk of uterine contractions and miscarriage)",
      "Use in women of reproductive age without reliable contraception",
      "Severe inflammatory bowel disease"
    ],
    nojoya: {
      "Gastrointestinal": "Diarrhoea (common), abdominal pain, nausea, flatulence",
      "Gynaecological": "Uterine contractions, vaginal bleeding, menstrual disturbances",
      "CNS": "Headache, dizziness",
      "Other": "Chills, fever (at obstetric doses)"
    },
    dozadan: "Symptoms: abdominal pain, diarrhoea, fever, tremor, hypotension, bradycardia. Treatment: symptomatic.",
    ozarotasir: [
      "Magnesium-containing antacids worsen diarrhoea — not recommended together",
      "Used deliberately with NSAIDs (ulcer prophylaxis)"
    ],
    qollash: {
      kattalar: "Ulcer/prophylaxis: 200 mcg 2–4 times daily with food and at bedtime (100 mcg if not tolerated). Obstetric indications — only under medical supervision per specific protocols.",
      bolalar: "Not recommended"
    },
    chiqarish: "Tablets 200 mcg (sometimes 25 mcg, 100 mcg — obstetric forms)"
  }
},

// ─── A02BC01 · Omeprazol ──────────────────────────────────────────────────
"A02BC01": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Oshqozon kislotasi sekretsiyasini kuchli va uzoq bostiruvchi vosita",
    farmakodinamika: `Omeprazol — protyon pompa inhibitori (PPI), benzimidazol hosilasi. Prepara-prodori bo'lib, oshqozon parietal hujayralarining sekretor kanalchalaridagi kislotali muhitda faol shaklga aylanadi va H+/K+-ATFaza (protyon pompa) fermentini qaytmas bloklaydi — bu kislota sekretsiyasining yakuniy umumiy bosqichi. Natijada bazal va har qanday qo'zg'atuvchi (histamin, gastrin, asetilxolin) bilan stimullangan kislota ishlab chiqarilishi kuchli va uzoq (24 soatgacha) kamayadi.`,
    farmakokinetika: {
      sorish: "Enterik (kislotaga chidamli) qobiqda; ingichka ichakда so'riladi, biofaollik 35–60% (takroriy qabulда oshadi)",
      tarqalish: "Oqsilga bog'lanish ~95%; parietal hujayralarda to'planadi",
      metabolizm: "Jigarda CYP2C19 va CYP3A4 orqali to'liq metabolizmga uchraydi (CYP2C19 polimorfizmi muhim)",
      chiqarilish: "Metabolitlar asosan buyrak orqali (~80%); T½ 0,5–1 soat, lekin ta'siri ferment qaytmas blokirovkasi tufayli ancha uzoq"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "Gastroezofageal reflyuks kasalligi (GERB), eroziv ezofagit",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara davosi va profilaktikasi"
    ],
    qarrshi: [
      "Omeprazol yoki boshqa PPI/benzimidazollarga o'ta sezuvchanlik",
      "Nelfinavir, atazanavir bilan birga qo'llash",
      "Ehtiyotkorlik: og'ir jigar yetishmovchiligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Bosh og'rig'i, diareya yoki ich qotishi, qorin og'rig'i, ko'ngil aynishi, meteorizm",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 vitamini va temir so'rilishi kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi (osteoporotik)",
      "Infeksiya": "Ichak infeksiyalari (C. difficile), pnevmoniya xavfi biroz oshishi",
      "Boshqa": "Transaminazalar oshishi, toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz (oqsilga bog'langan). Simptomatik davolash.",
    ozarotasir: [
      "Klopidogrel — faollanishini kamaytiradi (CYP2C19), antiagregant ta'sir susayadi",
      "Atazanavir, nelfinavir, ketokonazol, itrakonazol — so'rilishi kamayadi (pH)",
      "Varfarin, fenitoin, diazepam — metabolizmini sekinlashtiradi (nazorat)",
      "Metotreksat (yuqori dozada) — konsentratsiyasi oshishi mumkin",
      "Digoksin, temir, B12 so'rilishiga ta'sir qiladi"
    ],
    qollash: {
      kattalar: "GERB/yara: 20–40 mg kuniga 1 marta ertalab ovqatdan oldin, 4–8 hafta. H. pylori: 20 mg kuniga 2 marta antibiotiklar bilan 7–14 kun. Zollinger-Ellison: 60 mg/sut dan boshlab titrlanadi.",
      bolalar: "1 yoshdan, vaznга qarab: 10–20 mg/sut"
    },
    chiqarish: "Kapsulalar/tabletkalar 10 mg, 20 mg, 40 mg (enterik); i/v infuziya uchun kukun 40 mg"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "Средство, мощно и длительно подавляющее секрецию желудочной кислоты",
    farmakodinamika: `Омепразол — ингибитор протонной помпы (ИПП), производное бензимидазола. Является пролекарством: в кислой среде секреторных канальцев париетальных клеток превращается в активную форму и необратимо блокирует H+/K+-АТФазу (протонную помпу) — конечный общий этап секреции кислоты. В результате базальная и стимулированная любым раздражителем (гистамин, гастрин, ацетилхолин) продукция кислоты мощно и длительно (до 24 ч) снижается.`,
    farmakokinetika: {
      sorish: "В энтеросолюбильной (кислотоустойчивой) оболочке; всасывается в тонкой кишке, биодоступность 35–60% (повышается при повторном приёме)",
      tarqalish: "Связь с белками ~95%; накапливается в париетальных клетках",
      metabolizm: "Полностью метаболизируется в печени через CYP2C19 и CYP3A4 (важен полиморфизм CYP2C19)",
      chiqarilish: "Метаболиты преимущественно почками (~80%); T½ 0,5–1 ч, но действие гораздо дольше из-за необратимой блокады фермента"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки",
      "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ), эрозивный эзофагит",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Синдром Золлингера–Эллисона",
      "Лечение и профилактика язв, связанных с НПВП"
    ],
    qarrshi: [
      "Гиперчувствительность к омепразолу или другим ИПП/бензимидазолам",
      "Одновременный приём нелфинавира, атазанавира",
      "С осторожностью: тяжёлая печёночная недостаточность"
    ],
    nojoya: {
      "ЖКТ": "Головная боль, диарея или запор, боль в животе, тошнота, метеоризм",
      "Метаболические": "При длительном применении гипомагниемия, снижение всасывания витамина B12 и железа",
      "Кости": "Риск переломов при длительном применении (остеопоротических)",
      "Инфекции": "Кишечные инфекции (C. difficile), небольшое повышение риска пневмонии",
      "Прочие": "Повышение трансаминаз, сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен (связь с белками). Симптоматическое лечение.",
    ozarotasir: [
      "Клопидогрел — снижает его активацию (CYP2C19), ослабляя антиагрегантный эффект",
      "Атазанавир, нелфинавир, кетоконазол, итраконазол — снижается всасывание (pH)",
      "Варфарин, фенитоин, диазепам — замедляет их метаболизм (контроль)",
      "Метотрексат (в высоких дозах) — возможно повышение концентрации",
      "Влияет на всасывание дигоксина, железа, B12"
    ],
    qollash: {
      kattalar: "ГЭРБ/язва: 20–40 мг 1 раз в день утром до еды, 4–8 недель. H. pylori: 20 мг 2 раза в день с антибиотиками 7–14 дней. Синдром Золлингера–Эллисона: с 60 мг/сут с титрованием.",
      bolalar: "С 1 года, по массе тела: 10–20 мг/сут"
    },
    chiqarish: "Капсулы/таблетки 10 мг, 20 мг, 40 мг (энтеросолюбильные); порошок для в/в инфузии 40 мг"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Agent that potently and durably suppresses gastric acid secretion",
    farmakodinamika: `Omeprazole is a proton pump inhibitor (PPI), a benzimidazole derivative. It is a prodrug: in the acidic secretory canaliculi of parietal cells it converts to the active form and irreversibly blocks H+/K+-ATPase (the proton pump) — the final common step of acid secretion. As a result, basal and stimulated (by histamine, gastrin, acetylcholine) acid production is potently and durably (up to 24 h) reduced.`,
    farmakokinetika: {
      sorish: "Enteric (acid-resistant) coated; absorbed in the small intestine, bioavailability 35–60% (increases with repeated dosing)",
      tarqalish: "Protein binding ~95%; accumulates in parietal cells",
      metabolizm: "Fully metabolised in the liver via CYP2C19 and CYP3A4 (CYP2C19 polymorphism is important)",
      chiqarilish: "Metabolites mainly renally (~80%); T½ 0.5–1 h, but action is much longer due to irreversible enzyme blockade"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer",
      "Gastro-oesophageal reflux disease (GERD), erosive oesophagitis",
      "Helicobacter pylori eradication (with antibiotics)",
      "Zollinger-Ellison syndrome",
      "Treatment and prophylaxis of NSAID-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to omeprazole or other PPIs/benzimidazoles",
      "Concomitant nelfinavir, atazanavir",
      "Caution: severe hepatic impairment"
    ],
    nojoya: {
      "Gastrointestinal": "Headache, diarrhoea or constipation, abdominal pain, nausea, flatulence",
      "Metabolic": "Hypomagnesaemia, reduced vitamin B12 and iron absorption with prolonged use",
      "Bone": "Risk of (osteoporotic) fractures with prolonged use",
      "Infections": "Intestinal infections (C. difficile), slight increase in pneumonia risk",
      "Other": "Raised transaminases, rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective (protein-bound). Symptomatic treatment.",
    ozarotasir: [
      "Clopidogrel — reduces its activation (CYP2C19), weakening antiplatelet effect",
      "Atazanavir, nelfinavir, ketoconazole, itraconazole — reduced absorption (pH)",
      "Warfarin, phenytoin, diazepam — slows their metabolism (monitor)",
      "Methotrexate (high dose) — concentration may rise",
      "Affects absorption of digoxin, iron, B12"
    ],
    qollash: {
      kattalar: "GERD/ulcer: 20–40 mg once daily in the morning before food, 4–8 weeks. H. pylori: 20 mg twice daily with antibiotics for 7–14 days. Zollinger-Ellison: from 60 mg/day, titrated.",
      bolalar: "From 1 year, by body weight: 10–20 mg/day"
    },
    chiqarish: "Capsules/tablets 10 mg, 20 mg, 40 mg (enteric); powder for IV infusion 40 mg"
  }
},

// ─── A02BC02 · Pantoprazol ────────────────────────────────────────────────
"A02BC02": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Oshqozon kislotasi sekretsiyasini bostiruvchi vosita",
    farmakodinamika: `Pantoprazol — protyon pompa inhibitori, benzimidazol hosilasi. Parietal hujayralarning kislotali sekretor kanalchalarida faollashib, H+/K+-ATFazani qaytmas bloklaydi va kislota sekretsiyasining yakuniy bosqichini to'xtatadi. Boshqa PPIlardan farqli — kislotali muhitда biroz barqarorroq va CYP fermentlariga ta'siri kamroq, shuning uchun dori-dori o'zaro ta'siri nisbatan past. Bazal va stimullangan kislota ishlab chiqarilishini uzoq kamaytiradi.`,
    farmakokinetika: {
      sorish: "Enterik qobiqda; biofaollik ~77% (birinchi dozadanoq, takрorda o'zgarmaydi). Ovqat Cmax vaqtini o'zgartirishi mumkin",
      tarqalish: "Oqsilga bog'lanish ~98%",
      metabolizm: "Jigarda CYP2C19 (asosan) va CYP3A4 orqali; CYP2C19 polimorfizmiga ta'siri kamroq",
      chiqarilish: "Metabolitlar asosan buyrak orqali (~80%); T½ ~1 soat, ta'siri uzoq"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "GERB, eroziv-yarali ezofagit",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara profilaktikasi"
    ],
    qarrshi: [
      "Pantoprazol yoki benzimidazollarga o'ta sezuvchanlik",
      "Atazanavir/nelfinavir bilan birga qo'llash",
      "Ehtiyotkorlik: og'ir jigar yetishmovchiligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Bosh og'rig'i, diareya, qorin og'rig'i, ko'ngil aynishi, meteorizm",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi",
      "Boshqa": "Transaminazalar oshishi, toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz. Simptomatik davolash.",
    ozarotasir: [
      "Atazanavir, ketokonazol, temir — so'rilishi kamayadi (pH)",
      "Varfarin — INR nazorati tavsiya etiladi",
      "Klopidogrelga ta'siri boshqa PPIlardan kamroq (lekin ehtiyotkorlik)"
    ],
    qollash: {
      kattalar: "GERB/yara: 40 mg kuniga 1 marta ertalab ovqatdan oldin, 4–8 hafta. H. pylori: 40 mg kuniga 2 marta antibiotiklar bilan. Zollinger-Ellison: 80 mg/sut dan titrlanadi.",
      bolalar: "5 yoshdan, vaznга qarab: 20–40 mg/sut"
    },
    chiqarish: "Enterik tabletkalar 20 mg, 40 mg; i/v inyeksiya uchun kukun 40 mg"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "Средство, подавляющее секрецию желудочной кислоты",
    farmakodinamika: `Пантопразол — ингибитор протонной помпы, производное бензимидазола. Активируется в кислых секреторных канальцах париетальных клеток и необратимо блокирует H+/K+-АТФазу, останавливая конечный этап секреции кислоты. В отличие от других ИПП несколько стабильнее в кислой среде и меньше влияет на ферменты CYP, поэтому имеет относительно мало лекарственных взаимодействий. Длительно снижает базальную и стимулированную продукцию кислоты.`,
    farmakokinetika: {
      sorish: "В энтеросолюбильной оболочке; биодоступность ~77% (с первой дозы, не меняется при повторном приёме). Пища может изменить время Cmax",
      tarqalish: "Связь с белками ~98%",
      metabolizm: "В печени через CYP2C19 (преимущественно) и CYP3A4; меньше зависит от полиморфизма CYP2C19",
      chiqarilish: "Метаболиты преимущественно почками (~80%); T½ ~1 ч, действие длительное"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки",
      "ГЭРБ, эрозивно-язвенный эзофагит",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Синдром Золлингера–Эллисона",
      "Профилактика язв, связанных с НПВП"
    ],
    qarrshi: [
      "Гиперчувствительность к пантопразолу или бензимидазолам",
      "Одновременный приём атазанавира/нелфинавира",
      "С осторожностью: тяжёлая печёночная недостаточность"
    ],
    nojoya: {
      "ЖКТ": "Головная боль, диарея, боль в животе, тошнота, метеоризм",
      "Метаболические": "При длительном применении гипомагниемия, снижение B12",
      "Кости": "Риск переломов при длительном применении",
      "Прочие": "Повышение трансаминаз, сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен. Симптоматическое лечение.",
    ozarotasir: [
      "Атазанавир, кетоконазол, железо — снижается всасывание (pH)",
      "Варфарин — рекомендуется контроль МНО",
      "Влияние на клопидогрел меньше, чем у других ИПП (но с осторожностью)"
    ],
    qollash: {
      kattalar: "ГЭРБ/язва: 40 мг 1 раз в день утром до еды, 4–8 недель. H. pylori: 40 мг 2 раза в день с антибиотиками. Синдром Золлингера–Эллисона: с 80 мг/сут с титрованием.",
      bolalar: "С 5 лет, по массе тела: 20–40 мг/сут"
    },
    chiqarish: "Энтеросолюбильные таблетки 20 мг, 40 мг; порошок для в/в инъекций 40 мг"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Agent that suppresses gastric acid secretion",
    farmakodinamika: `Pantoprazole is a proton pump inhibitor, a benzimidazole derivative. It is activated in the acidic secretory canaliculi of parietal cells and irreversibly blocks H+/K+-ATPase, halting the final step of acid secretion. Unlike other PPIs it is somewhat more stable in acidic conditions and has less effect on CYP enzymes, so it has relatively few drug interactions. It durably reduces basal and stimulated acid production.`,
    farmakokinetika: {
      sorish: "Enteric-coated; bioavailability ~77% (from the first dose, unchanged with repeated dosing). Food may alter Cmax timing",
      tarqalish: "Protein binding ~98%",
      metabolizm: "Hepatic via CYP2C19 (mainly) and CYP3A4; less dependent on CYP2C19 polymorphism",
      chiqarilish: "Metabolites mainly renally (~80%); T½ ~1 h, action prolonged"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer",
      "GERD, erosive-ulcerative oesophagitis",
      "Helicobacter pylori eradication (with antibiotics)",
      "Zollinger-Ellison syndrome",
      "Prophylaxis of NSAID-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to pantoprazole or benzimidazoles",
      "Concomitant atazanavir/nelfinavir",
      "Caution: severe hepatic impairment"
    ],
    nojoya: {
      "Gastrointestinal": "Headache, diarrhoea, abdominal pain, nausea, flatulence",
      "Metabolic": "Hypomagnesaemia, reduced B12 with prolonged use",
      "Bone": "Fracture risk with prolonged use",
      "Other": "Raised transaminases, rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective. Symptomatic treatment.",
    ozarotasir: [
      "Atazanavir, ketoconazole, iron — reduced absorption (pH)",
      "Warfarin — INR monitoring recommended",
      "Less effect on clopidogrel than other PPIs (but use caution)"
    ],
    qollash: {
      kattalar: "GERD/ulcer: 40 mg once daily in the morning before food, 4–8 weeks. H. pylori: 40 mg twice daily with antibiotics. Zollinger-Ellison: from 80 mg/day, titrated.",
      bolalar: "From 5 years, by body weight: 20–40 mg/day"
    },
    chiqarish: "Enteric tablets 20 mg, 40 mg; powder for IV injection 40 mg"
  }
},

// ─── A02BC03 · Lansoprazol ────────────────────────────────────────────────
"A02BC03": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Oshqozon kislotasi sekretsiyasini bostiruvchi vosita",
    farmakodinamika: `Lansoprazol — protyon pompa inhibitori, benzimidazol hosilasi. Parietal hujayralarning kislotali kanalchalarida faollashib, H+/K+-ATFazani qaytmas bloklaydi va kislota sekretsiyasining yakuniy bosqichini to'xtatadi. Bazal va stimullangan kislota ishlab chiqarilishini kuchli va uzoq kamaytiradi. Yuqori biofaollik bilan ajralib turadi va kislota bostirishni tez boshlaydi.`,
    farmakokinetika: {
      sorish: "Enterik qobiqda; biofaollik yuqori (~80–90%). Ovqat so'rilishni kamaytiradi — ovqatdan oldin qabul qilinadi",
      tarqalish: "Oqsilga bog'lanish ~97%",
      metabolizm: "Jigarda CYP2C19 va CYP3A4 orqali",
      chiqarilish: "Metabolitlar o't va siydik bilan; T½ ~1,5 soat, ta'siri uzoq"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "GERB, eroziv ezofagit",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara davosi va profilaktikasi"
    ],
    qarrshi: [
      "Lansoprazol yoki benzimidazollarga o'ta sezuvchanlik",
      "Atazanavir/nelfinavir bilan birga qo'llash",
      "Ehtiyotkorlik: og'ir jigar yetishmovchiligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Bosh og'rig'i, diareya, ko'ngil aynishi, qorin og'rig'i, meteorizm",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi",
      "Boshqa": "Transaminazalar oshishi, toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz. Simptomatik davolash.",
    ozarotasir: [
      "Atazanavir, ketokonazol, temir — so'rilishi kamayadi (pH)",
      "Klopidogrel faollanishini kamaytirishi mumkin (CYP2C19)",
      "Teofillin, takrolimus konsentratsiyasiga ta'sir qilishi mumkin"
    ],
    qollash: {
      kattalar: "GERB/yara: 30 mg kuniga 1 marta ertalab ovqatdan oldin, 4–8 hafta. H. pylori: 30 mg kuniga 2 marta antibiotiklar bilan. Saqlash dozasi 15 mg/sut.",
      bolalar: "1 yoshdan, vaznга qarab: 15–30 mg/sut"
    },
    chiqarish: "Kapsulalar/og'izda eriydigan tabletkalar 15 mg, 30 mg (enterik)"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "Средство, подавляющее секрецию желудочной кислоты",
    farmakodinamika: `Лансопразол — ингибитор протонной помпы, производное бензимидазола. Активируется в кислых канальцах париетальных клеток, необратимо блокирует H+/K+-АТФазу и останавливает конечный этап секреции кислоты. Мощно и длительно снижает базальную и стимулированную продукцию кислоты. Отличается высокой биодоступностью и быстрым началом подавления кислоты.`,
    farmakokinetika: {
      sorish: "В энтеросолюбильной оболочке; биодоступность высокая (~80–90%). Пища снижает всасывание — принимают до еды",
      tarqalish: "Связь с белками ~97%",
      metabolizm: "В печени через CYP2C19 и CYP3A4",
      chiqarilish: "Метаболиты с жёлчью и мочой; T½ ~1,5 ч, действие длительное"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки",
      "ГЭРБ, эрозивный эзофагит",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Синдром Золлингера–Эллисона",
      "Лечение и профилактика язв, связанных с НПВП"
    ],
    qarrshi: [
      "Гиперчувствительность к лансопразолу или бензимидазолам",
      "Одновременный приём атазанавира/нелфинавира",
      "С осторожностью: тяжёлая печёночная недостаточность"
    ],
    nojoya: {
      "ЖКТ": "Головная боль, диарея, тошнота, боль в животе, метеоризм",
      "Метаболические": "При длительном применении гипомагниемия, снижение B12",
      "Кости": "Риск переломов при длительном применении",
      "Прочие": "Повышение трансаминаз, сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен. Симптоматическое лечение.",
    ozarotasir: [
      "Атазанавир, кетоконазол, железо — снижается всасывание (pH)",
      "Может снижать активацию клопидогрела (CYP2C19)",
      "Может влиять на концентрацию теофиллина, такролимуса"
    ],
    qollash: {
      kattalar: "ГЭРБ/язва: 30 мг 1 раз в день утром до еды, 4–8 недель. H. pylori: 30 мг 2 раза в день с антибиотиками. Поддерживающая доза 15 мг/сут.",
      bolalar: "С 1 года, по массе тела: 15–30 мг/сут"
    },
    chiqarish: "Капсулы/таблетки, диспергируемые во рту, 15 мг, 30 мг (энтеросолюбильные)"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Agent that suppresses gastric acid secretion",
    farmakodinamika: `Lansoprazole is a proton pump inhibitor, a benzimidazole derivative. It is activated in the acidic canaliculi of parietal cells, irreversibly blocks H+/K+-ATPase and halts the final step of acid secretion. It potently and durably reduces basal and stimulated acid production. It is notable for high bioavailability and rapid onset of acid suppression.`,
    farmakokinetika: {
      sorish: "Enteric-coated; bioavailability high (~80–90%). Food reduces absorption — taken before meals",
      tarqalish: "Protein binding ~97%",
      metabolizm: "Hepatic via CYP2C19 and CYP3A4",
      chiqarilish: "Metabolites in bile and urine; T½ ~1.5 h, action prolonged"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer",
      "GERD, erosive oesophagitis",
      "Helicobacter pylori eradication (with antibiotics)",
      "Zollinger-Ellison syndrome",
      "Treatment and prophylaxis of NSAID-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to lansoprazole or benzimidazoles",
      "Concomitant atazanavir/nelfinavir",
      "Caution: severe hepatic impairment"
    ],
    nojoya: {
      "Gastrointestinal": "Headache, diarrhoea, nausea, abdominal pain, flatulence",
      "Metabolic": "Hypomagnesaemia, reduced B12 with prolonged use",
      "Bone": "Fracture risk with prolonged use",
      "Other": "Raised transaminases, rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective. Symptomatic treatment.",
    ozarotasir: [
      "Atazanavir, ketoconazole, iron — reduced absorption (pH)",
      "May reduce clopidogrel activation (CYP2C19)",
      "May affect theophylline, tacrolimus concentrations"
    ],
    qollash: {
      kattalar: "GERD/ulcer: 30 mg once daily in the morning before food, 4–8 weeks. H. pylori: 30 mg twice daily with antibiotics. Maintenance 15 mg/day.",
      bolalar: "From 1 year, by body weight: 15–30 mg/day"
    },
    chiqarish: "Capsules/orally disintegrating tablets 15 mg, 30 mg (enteric)"
  }
},

// ─── A02BC04 · Rabeprazol ─────────────────────────────────────────────────
"A02BC04": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Oshqozon kislotasi sekretsiyasini tez bostiruvchi vosita",
    farmakodinamika: `Rabeprazol — protyon pompa inhibitori, benzimidazol hosilasi. Parietal hujayralarning kislotali kanalchalarida faollashib, H+/K+-ATFazani bloklaydi va kislota sekretsiyasining yakuniy bosqichini to'xtatadi. Boshqa PPIlarga nisbatan tezroq faollashadi va kislota bostirishni tez boshlaydi; CYP2C19 ga kamroq bog'liq metabolizmga ega (asosan ferment bo'lmagan yo'l bilan), shuning uchun polimorfizmga sezgirligi past.`,
    farmakokinetika: {
      sorish: "Enterik qobiqda; biofaollik ~52%. Ovqat Cmax vaqtini kechiktiradi, lekin so'rilish darajasiga ta'siri kam",
      tarqalish: "Oqsilga bog'lanish ~96%",
      metabolizm: "Asosan ferment bo'lmagan (noenzimatik) yo'l bilan tiyoeterga; qisman CYP2C19/3A4",
      chiqarilish: "Metabolitlar asosan buyrak orqali; T½ ~1 soat, ta'siri uzoq"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "GERB, eroziv-yarali ezofagit",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara profilaktikasi"
    ],
    qarrshi: [
      "Rabeprazol yoki benzimidazollarga o'ta sezuvchanlik",
      "Atazanavir/nelfinavir bilan birga qo'llash",
      "Homiladorlik va emizish davri (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Bosh og'rig'i, diareya, ko'ngil aynishi, qorin og'rig'i, meteorizm",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi",
      "Boshqa": "Transaminazalar oshishi, toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz. Simptomatik davolash.",
    ozarotasir: [
      "Atazanavir, ketokonazol, temir — so'rilishi kamayadi (pH)",
      "Digoksin so'rilishini biroz oshirishi mumkin",
      "Klopidogrelga ta'siri boshqa PPIlardan kamroq"
    ],
    qollash: {
      kattalar: "GERB/yara: 20 mg kuniga 1 marta ertalab, 4–8 hafta. H. pylori: 20 mg kuniga 2 marta antibiotiklar bilan. Zollinger-Ellison: 60 mg/sut dan titrlanadi.",
      bolalar: "12 yoshdan: 20 mg/sut (GERB)"
    },
    chiqarish: "Enterik tabletkalar 10 mg, 20 mg"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "Средство, быстро подавляющее секрецию желудочной кислоты",
    farmakodinamika: `Рабепразол — ингибитор протонной помпы, производное бензимидазола. Активируется в кислых канальцах париетальных клеток, блокирует H+/K+-АТФазу и останавливает конечный этап секреции кислоты. По сравнению с другими ИПП активируется быстрее и быстрее начинает подавление кислоты; метаболизируется в основном неферментным путём (меньше зависит от CYP2C19), поэтому менее чувствителен к полиморфизму.`,
    farmakokinetika: {
      sorish: "В энтеросолюбильной оболочке; биодоступность ~52%. Пища задерживает Cmax, но мало влияет на степень всасывания",
      tarqalish: "Связь с белками ~96%",
      metabolizm: "В основном неферментным путём до тиоэфира; частично CYP2C19/3A4",
      chiqarilish: "Метаболиты преимущественно почками; T½ ~1 ч, действие длительное"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки",
      "ГЭРБ, эрозивно-язвенный эзофагит",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Синдром Золлингера–Эллисона",
      "Профилактика язв, связанных с НПВП"
    ],
    qarrshi: [
      "Гиперчувствительность к рабепразолу или бензимидазолам",
      "Одновременный приём атазанавира/нелфинавира",
      "Беременность и период лактации (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Головная боль, диарея, тошнота, боль в животе, метеоризм",
      "Метаболические": "При длительном применении гипомагниемия, снижение B12",
      "Кости": "Риск переломов при длительном применении",
      "Прочие": "Повышение трансаминаз, сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен. Симптоматическое лечение.",
    ozarotasir: [
      "Атазанавир, кетоконазол, железо — снижается всасывание (pH)",
      "Может несколько повышать всасывание дигоксина",
      "Влияние на клопидогрел меньше, чем у других ИПП"
    ],
    qollash: {
      kattalar: "ГЭРБ/язва: 20 мг 1 раз в день утром, 4–8 недель. H. pylori: 20 мг 2 раза в день с антибиотиками. Синдром Золлингера–Эллисона: с 60 мг/сут с титрованием.",
      bolalar: "С 12 лет: 20 мг/сут (ГЭРБ)"
    },
    chiqarish: "Энтеросолюбильные таблетки 10 мг, 20 мг"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Agent that rapidly suppresses gastric acid secretion",
    farmakodinamika: `Rabeprazole is a proton pump inhibitor, a benzimidazole derivative. It is activated in the acidic canaliculi of parietal cells, blocks H+/K+-ATPase and halts the final step of acid secretion. Compared with other PPIs it is activated faster and begins acid suppression more quickly; it is metabolised largely by a non-enzymatic pathway (less dependent on CYP2C19), so it is less sensitive to polymorphism.`,
    farmakokinetika: {
      sorish: "Enteric-coated; bioavailability ~52%. Food delays Cmax but has little effect on the extent of absorption",
      tarqalish: "Protein binding ~96%",
      metabolizm: "Mainly non-enzymatic to a thioether; partly CYP2C19/3A4",
      chiqarilish: "Metabolites mainly renally; T½ ~1 h, action prolonged"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer",
      "GERD, erosive-ulcerative oesophagitis",
      "Helicobacter pylori eradication (with antibiotics)",
      "Zollinger-Ellison syndrome",
      "Prophylaxis of NSAID-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to rabeprazole or benzimidazoles",
      "Concomitant atazanavir/nelfinavir",
      "Pregnancy and lactation (with caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Headache, diarrhoea, nausea, abdominal pain, flatulence",
      "Metabolic": "Hypomagnesaemia, reduced B12 with prolonged use",
      "Bone": "Fracture risk with prolonged use",
      "Other": "Raised transaminases, rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective. Symptomatic treatment.",
    ozarotasir: [
      "Atazanavir, ketoconazole, iron — reduced absorption (pH)",
      "May slightly increase digoxin absorption",
      "Less effect on clopidogrel than other PPIs"
    ],
    qollash: {
      kattalar: "GERD/ulcer: 20 mg once daily in the morning, 4–8 weeks. H. pylori: 20 mg twice daily with antibiotics. Zollinger-Ellison: from 60 mg/day, titrated.",
      bolalar: "From 12 years: 20 mg/day (GERD)"
    },
    chiqarish: "Enteric tablets 10 mg, 20 mg"
  }
},

// ─── A02BC05 · Ezomeprazol ────────────────────────────────────────────────
"A02BC05": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Oshqozon kislotasi sekretsiyasini kuchli va barqaror bostiruvchi vosita",
    farmakodinamika: `Ezomeprazol — omeprazolning S-enantiomeri (chap aylantiruvchi izomeri), protyon pompa inhibitori. Parietal hujayralarning kislotali sekretor kanalchalarida faollashib, H+/K+-ATFazani qaytmas bloklaydi va kislota sekretsiyasining yakuniy bosqichini to'xtatadi. S-enantiomer bo'lgani uchun jigarda metabolizmi sekinroq va barqarorroq — bu yuqoriroq va izchilroq kislota bostirishni ta'minlaydi. Bazal va stimullangan kislota ishlab chiqarilishini uzoq (24 soatgacha) kamaytiradi.`,
    farmakokinetika: {
      sorish: "Enterik qobiqda; biofaollik ~64–90% (takroriy qabulда oshadi). Ovqat so'rilishni kechiktiradi — ovqatdan oldin",
      tarqalish: "Oqsilga bog'lanish ~97%",
      metabolizm: "Jigarda CYP2C19 (asosan) va CYP3A4 orqali; omeprazoldan barqarorroq",
      chiqarilish: "Metabolitlar asosan buyrak orqali; T½ ~1,3 soat, ta'siri uzoq"
    },
    korsatmalar: [
      "Gastroezofageal reflyuks kasalligi (GERB), eroziv ezofagit",
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "Zollinger-Ellison sindromi",
      "NSAID bilan bog'liq yara davosi va profilaktikasi"
    ],
    qarrshi: [
      "Ezomeprazol yoki boshqa PPI/benzimidazollarga o'ta sezuvchanlik",
      "Nelfinavir, atazanavir bilan birga qo'llash",
      "Ehtiyotkorlik: og'ir jigar yetishmovchiligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Bosh og'rig'i, diareya yoki ich qotishi, qorin og'rig'i, ko'ngil aynishi, meteorizm",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 va temir so'rilishi kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi",
      "Boshqa": "Transaminazalar oshishi, toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz. Simptomatik davolash.",
    ozarotasir: [
      "Klopidogrel — faollanishini kamaytiradi (CYP2C19)",
      "Atazanavir, nelfinavir, ketokonazol, temir — so'rilishi kamayadi (pH)",
      "Diazepam, fenitoin, varfarin — metabolizmini sekinlashtiradi (nazorat)"
    ],
    qollash: {
      kattalar: "GERB/yara: 20–40 mg kuniga 1 marta ovqatdan oldin, 4–8 hafta. H. pylori: 20 mg kuniga 2 marta antibiotiklar bilan. Zollinger-Ellison: 40 mg kuniga 2 marta dan titrlanadi.",
      bolalar: "1 yoshdan, vaznга qarab: 10–20 mg/sut"
    },
    chiqarish: "Enterik kapsulalar/tabletkalar 20 mg, 40 mg; i/v inyeksiya uchun kukun 40 mg"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "Средство, мощно и стабильно подавляющее секрецию кислоты",
    farmakodinamika: `Эзомепразол — S-энантиомер омепразола, ингибитор протонной помпы. Активируется в кислых секреторных канальцах париетальных клеток, необратимо блокирует H+/K+-АТФазу и останавливает конечный этап секреции кислоты. Будучи S-энантиомером, медленнее и стабильнее метаболизируется в печени, что обеспечивает более высокое и стабильное подавление кислоты. Длительно (до 24 ч) снижает базальную и стимулированную продукцию кислоты.`,
    farmakokinetika: {
      sorish: "В энтеросолюбильной оболочке; биодоступность ~64–90% (повышается при повторном приёме). Пища задерживает всасывание — до еды",
      tarqalish: "Связь с белками ~97%",
      metabolizm: "В печени через CYP2C19 (преимущественно) и CYP3A4; стабильнее омепразола",
      chiqarilish: "Метаболиты преимущественно почками; T½ ~1,3 ч, действие длительное"
    },
    korsatmalar: [
      "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ), эрозивный эзофагит",
      "Язва желудка и двенадцатиперстной кишки",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Синдром Золлингера–Эллисона",
      "Лечение и профилактика язв, связанных с НПВП"
    ],
    qarrshi: [
      "Гиперчувствительность к эзомепразолу или другим ИПП/бензимидазолам",
      "Одновременный приём нелфинавира, атазанавира",
      "С осторожностью: тяжёлая печёночная недостаточность"
    ],
    nojoya: {
      "ЖКТ": "Головная боль, диарея или запор, боль в животе, тошнота, метеоризм",
      "Метаболические": "При длительном применении гипомагниемия, снижение всасывания B12 и железа",
      "Кости": "Риск переломов при длительном применении",
      "Прочие": "Повышение трансаминаз, сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен. Симптоматическое лечение.",
    ozarotasir: [
      "Клопидогрел — снижает его активацию (CYP2C19)",
      "Атазанавир, нелфинавир, кетоконазол, железо — снижается всасывание (pH)",
      "Диазепам, фенитоин, варфарин — замедляет метаболизм (контроль)"
    ],
    qollash: {
      kattalar: "ГЭРБ/язва: 20–40 мг 1 раз в день до еды, 4–8 недель. H. pylori: 20 мг 2 раза в день с антибиотиками. Синдром Золлингера–Эллисона: с 40 мг 2 раза в день с титрованием.",
      bolalar: "С 1 года, по массе тела: 10–20 мг/сут"
    },
    chiqarish: "Энтеросолюбильные капсулы/таблетки 20 мг, 40 мг; порошок для в/в инъекций 40 мг"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Agent that potently and stably suppresses acid secretion",
    farmakodinamika: `Esomeprazole is the S-enantiomer of omeprazole, a proton pump inhibitor. It is activated in the acidic secretory canaliculi of parietal cells, irreversibly blocks H+/K+-ATPase and halts the final step of acid secretion. As the S-enantiomer it is metabolised more slowly and stably in the liver, giving higher and more consistent acid suppression. It durably (up to 24 h) reduces basal and stimulated acid production.`,
    farmakokinetika: {
      sorish: "Enteric-coated; bioavailability ~64–90% (increases with repeated dosing). Food delays absorption — before meals",
      tarqalish: "Protein binding ~97%",
      metabolizm: "Hepatic via CYP2C19 (mainly) and CYP3A4; more stable than omeprazole",
      chiqarilish: "Metabolites mainly renally; T½ ~1.3 h, action prolonged"
    },
    korsatmalar: [
      "Gastro-oesophageal reflux disease (GERD), erosive oesophagitis",
      "Gastric and duodenal ulcer",
      "Helicobacter pylori eradication (with antibiotics)",
      "Zollinger-Ellison syndrome",
      "Treatment and prophylaxis of NSAID-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to esomeprazole or other PPIs/benzimidazoles",
      "Concomitant nelfinavir, atazanavir",
      "Caution: severe hepatic impairment"
    ],
    nojoya: {
      "Gastrointestinal": "Headache, diarrhoea or constipation, abdominal pain, nausea, flatulence",
      "Metabolic": "Hypomagnesaemia, reduced B12 and iron absorption with prolonged use",
      "Bone": "Fracture risk with prolonged use",
      "Other": "Raised transaminases, rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective. Symptomatic treatment.",
    ozarotasir: [
      "Clopidogrel — reduces its activation (CYP2C19)",
      "Atazanavir, nelfinavir, ketoconazole, iron — reduced absorption (pH)",
      "Diazepam, phenytoin, warfarin — slows metabolism (monitor)"
    ],
    qollash: {
      kattalar: "GERD/ulcer: 20–40 mg once daily before food, 4–8 weeks. H. pylori: 20 mg twice daily with antibiotics. Zollinger-Ellison: from 40 mg twice daily, titrated.",
      bolalar: "From 1 year, by body weight: 10–20 mg/day"
    },
    chiqarish: "Enteric capsules/tablets 20 mg, 40 mg; powder for IV injection 40 mg"
  }
},

// ─── A02BC06 · Dekslansoprazol ────────────────────────────────────────────
"A02BC06": {
  uz: {
    gruppa: "Protyon pompa inhibitorlari (PPI)",
    farmTasir: "Ikki bosqichli chiqarishli, uzaytirilgan kislota bostiruvchi PPI",
    farmakodinamika: `Dekslansoprazol — lansoprazolning R-enantiomeri, protyon pompa inhibitori. Parietal hujayralarda H+/K+-ATFazani qaytmas bloklaydi. Maxsus ikki bosqichli (dual delayed release) chiqarish texnologiyasi tufayli dori ikki marta — turli ichak pH larida — ajraladi, bu kislota bostirish davomiyligini uzaytiradi va ovqatlanish vaqtiga bog'liqligini kamaytiradi. Bazal va stimullangan kislota ishlab chiqarilishini uzoq kamaytiradi.`,
    farmakokinetika: {
      sorish: "Ikki bosqichli chiqarish — ikki Cmax (1–2 va 4–5 soat). Ovqatga bog'liqligi past, vaqtdan qat'i nazar qabul mumkin",
      tarqalish: "Oqsilga bog'lanish ~96–99%",
      metabolizm: "Jigarda CYP2C19 va CYP3A4 orqali",
      chiqarilish: "Metabolitlar siydik va najas bilan; ta'siri uzoq"
    },
    korsatmalar: [
      "Eroziv ezofagit davolash va saqlash terapiyasi",
      "Eroziv bo'lmagan GERB (jig'ildon qaynashi)",
      "Oshqozon-ichak yarasi (mahalliy ko'rsatmalar bo'yicha)"
    ],
    qarrshi: [
      "Dekslansoprazol yoki benzimidazollarga o'ta sezuvchanlik",
      "Atazanavir/nelfinavir bilan birga qo'llash",
      "Ehtiyotkorlik: og'ir jigar yetishmovchiligi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Diareya, qorin og'rig'i, ko'ngil aynishi, meteorizm, bosh og'rig'i",
      "Metabolik": "Uzoq qo'llashda gipomagniemiya, B12 kamayishi",
      "Suyak": "Uzoq qo'llashda suyak sinishi xavfi",
      "Boshqa": "Toshma, interstitsial nefrit (kam)"
    },
    dozadan: "Maxsus antidot yo'q; gemodializ samarasiz. Simptomatik davolash.",
    ozarotasir: [
      "Atazanavir, ketokonazol, temir — so'rilishi kamayadi (pH)",
      "Klopidogrel faollanishini kamaytirishi mumkin (CYP2C19)",
      "Varfarin — INR nazorati"
    ],
    qollash: {
      kattalar: "Eroziv ezofagit: 60 mg kuniga 1 marta 8 haftagacha, saqlash 30 mg/sut. Eroziv bo'lmagan GERB: 30 mg/sut 4 hafta. Vaqtdan qat'i nazar.",
      bolalar: "12 yoshdan: 30–60 mg/sut (ko'rsatmaga qarab)"
    },
    chiqarish: "Modifikatsiyalangan chiqarishli kapsulalar 30 mg, 60 mg"
  },
  ru: {
    gruppa: "Ингибиторы протонной помпы (ИПП)",
    farmTasir: "ИПП с двухфазным высвобождением и пролонгированным подавлением кислоты",
    farmakodinamika: `Декслансопразол — R-энантиомер лансопразола, ингибитор протонной помпы. Необратимо блокирует H+/K+-АТФазу париетальных клеток. Благодаря технологии двухфазного (dual delayed release) высвобождения препарат высвобождается дважды при разных pH кишечника, что удлиняет подавление кислоты и снижает зависимость от приёма пищи. Длительно снижает базальную и стимулированную продукцию кислоты.`,
    farmakokinetika: {
      sorish: "Двухфазное высвобождение — два пика Cmax (1–2 и 4–5 ч). Малая зависимость от пищи, можно принимать независимо от времени",
      tarqalish: "Связь с белками ~96–99%",
      metabolizm: "В печени через CYP2C19 и CYP3A4",
      chiqarilish: "Метаболиты с мочой и калом; действие длительное"
    },
    korsatmalar: [
      "Лечение и поддерживающая терапия эрозивного эзофагита",
      "Неэрозивная ГЭРБ (изжога)",
      "Язва ЖКТ (по местным показаниям)"
    ],
    qarrshi: [
      "Гиперчувствительность к декслансопразолу или бензимидазолам",
      "Одновременный приём атазанавира/нелфинавира",
      "С осторожностью: тяжёлая печёночная недостаточность"
    ],
    nojoya: {
      "ЖКТ": "Диарея, боль в животе, тошнота, метеоризм, головная боль",
      "Метаболические": "При длительном применении гипомагниемия, снижение B12",
      "Кости": "Риск переломов при длительном применении",
      "Прочие": "Сыпь, интерстициальный нефрит (редко)"
    },
    dozadan: "Специфического антидота нет; гемодиализ неэффективен. Симптоматическое лечение.",
    ozarotasir: [
      "Атазанавир, кетоконазол, железо — снижается всасывание (pH)",
      "Может снижать активацию клопидогрела (CYP2C19)",
      "Варфарин — контроль МНО"
    ],
    qollash: {
      kattalar: "Эрозивный эзофагит: 60 мг 1 раз в день до 8 недель, поддержка 30 мг/сут. Неэрозивная ГЭРБ: 30 мг/сут 4 недели. Независимо от времени.",
      bolalar: "С 12 лет: 30–60 мг/сут (по показанию)"
    },
    chiqarish: "Капсулы с модифицированным высвобождением 30 мг, 60 мг"
  },
  en: {
    gruppa: "Proton pump inhibitors (PPI)",
    farmTasir: "Dual delayed-release PPI with prolonged acid suppression",
    farmakodinamika: `Dexlansoprazole is the R-enantiomer of lansoprazole, a proton pump inhibitor. It irreversibly blocks parietal cell H+/K+-ATPase. Owing to its dual delayed-release technology the drug is released twice at different intestinal pH levels, prolonging acid suppression and reducing dependence on meal timing. It durably reduces basal and stimulated acid production.`,
    farmakokinetika: {
      sorish: "Dual-release — two Cmax peaks (1–2 and 4–5 h). Little food dependence, may be taken at any time",
      tarqalish: "Protein binding ~96–99%",
      metabolizm: "Hepatic via CYP2C19 and CYP3A4",
      chiqarilish: "Metabolites in urine and faeces; action prolonged"
    },
    korsatmalar: [
      "Treatment and maintenance of erosive oesophagitis",
      "Non-erosive GERD (heartburn)",
      "GI ulcer (per local indications)"
    ],
    qarrshi: [
      "Hypersensitivity to dexlansoprazole or benzimidazoles",
      "Concomitant atazanavir/nelfinavir",
      "Caution: severe hepatic impairment"
    ],
    nojoya: {
      "Gastrointestinal": "Diarrhoea, abdominal pain, nausea, flatulence, headache",
      "Metabolic": "Hypomagnesaemia, reduced B12 with prolonged use",
      "Bone": "Fracture risk with prolonged use",
      "Other": "Rash, interstitial nephritis (rare)"
    },
    dozadan: "No specific antidote; haemodialysis ineffective. Symptomatic treatment.",
    ozarotasir: [
      "Atazanavir, ketoconazole, iron — reduced absorption (pH)",
      "May reduce clopidogrel activation (CYP2C19)",
      "Warfarin — INR monitoring"
    ],
    qollash: {
      kattalar: "Erosive oesophagitis: 60 mg once daily up to 8 weeks, maintenance 30 mg/day. Non-erosive GERD: 30 mg/day for 4 weeks. Regardless of timing.",
      bolalar: "From 12 years: 30–60 mg/day (per indication)"
    },
    chiqarish: "Modified-release capsules 30 mg, 60 mg"
  }
},

// ─── A02BC08 · Vonoprazan ─────────────────────────────────────────────────
"A02BC08": {
  uz: {
    gruppa: "Kaliy-konkurent kislota blokatorlari (P-CAB)",
    farmTasir: "Tez va kuchli, uzoq ta'sirli oshqozon kislotasi blokatori",
    farmakodinamika: `Vonoprazan — kaliy bilan raqobatlashuvchi kislota blokatori (P-CAB). An'anaviy PPIlardan farqli o'laroq, prodori emas va kislotali muhitda faollashishi shart emas: H+/K+-ATFazaning kaliy bog'lanish joyiga qaytar, lekin mustahkam bog'lanib, protyon pompani to'g'ridan-to'g'ri bloklaydi. Bu kislota bostirishni tezroq (birinchi dozadanoq), kuchliroq va uzoqroq (24 soatdan ortiq) ta'minlaydi; ovqat va CYP2C19 polimorfizmiga bog'liqligi past. Helicobacter pylori eradikatsiyasida samaradorligi yuqori.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi; ovqatdan qat'i nazar. Kislota bostirish birinchi kunдан to'liq",
      tarqalish: "Oqsilga bog'lanish ~80–85%; parietal hujayralarda to'planadi",
      metabolizm: "Jigarda asosan CYP3A4 (qisman CYP2B6, 2C19, 2D6) orqali",
      chiqarilish: "Metabolitlar siydik va najas bilan; T½ ~7 soat (PPIlardan uzunroq)"
    },
    korsatmalar: [
      "Eroziv ezofagit (davolash va saqlash)",
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "Helicobacter pylori eradikatsiyasi (antibiotiklar bilan)",
      "NSAID/aspirin bilan bog'liq yara profilaktikasi"
    ],
    qarrshi: [
      "Vonoprazanga o'ta sezuvchanlik",
      "Atazanavir, rilpivirin, nelfinavir bilan birga qo'llash",
      "Og'ir jigar yetishmovchiligi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi yoki diareya, qorin og'rig'i, ko'ngil aynishi",
      "Asab tizimi": "Bosh og'rig'i",
      "Endokrin/metabolik": "Gastrin darajasi oshishi, uzoq qo'llashda oshqozon poliplari",
      "Boshqa": "Toshma, transaminazalar oshishi (kam)"
    },
    dozadan: "Ma'lumot cheklangan. Simptomatik davolash, nazorat.",
    ozarotasir: [
      "Kislotaga bog'liq so'riladigan preparatlar (atazanavir, ketokonazol) so'rilishini kamaytiradi",
      "Digoksin, metotreksat konsentratsiyasiga ta'sir qilishi mumkin",
      "CYP3A4 induktorlari (rifampitsin) vonoprazan ta'sirini kamaytiradi"
    ],
    qollash: {
      kattalar: "Eroziv ezofagit: 20 mg kuniga 1 marta 4–8 hafta, saqlash 10 mg/sut. Yara: 20 mg/sut. H. pylori: 20 mg kuniga 2 marta antibiotiklar bilan 7 kun.",
      bolalar: "Tavsiya etilmaydi (ma'lumot cheklangan)"
    },
    chiqarish: "Tabletkalar 10 mg, 20 mg"
  },
  ru: {
    gruppa: "Калий-конкурентные блокаторы кислоты (P-CAB)",
    farmTasir: "Быстрый, мощный и длительный блокатор желудочной кислоты",
    farmakodinamika: `Вонопразан — калий-конкурентный блокатор кислоты (P-CAB). В отличие от традиционных ИПП не является пролекарством и не требует активации в кислой среде: обратимо, но прочно связывается с калий-связывающим участком H+/K+-АТФазы, напрямую блокируя протонную помпу. Это обеспечивает более быстрое (с первой дозы), мощное и длительное (более 24 ч) подавление кислоты; мало зависит от пищи и полиморфизма CYP2C19. Высокоэффективен при эрадикации Helicobacter pylori.`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь; независимо от пищи. Полное подавление кислоты с первого дня",
      tarqalish: "Связь с белками ~80–85%; накапливается в париетальных клетках",
      metabolizm: "В печени преимущественно CYP3A4 (частично CYP2B6, 2C19, 2D6)",
      chiqarilish: "Метаболиты с мочой и калом; T½ ~7 ч (дольше, чем у ИПП)"
    },
    korsatmalar: [
      "Эрозивный эзофагит (лечение и поддержка)",
      "Язва желудка и двенадцатиперстной кишки",
      "Эрадикация Helicobacter pylori (с антибиотиками)",
      "Профилактика язв, связанных с НПВП/аспирином"
    ],
    qarrshi: [
      "Гиперчувствительность к вонопразану",
      "Одновременный приём атазанавира, рилпивирина, нелфинавира",
      "Тяжёлая печёночная недостаточность (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Запор или диарея, боль в животе, тошнота",
      "ЦНС": "Головная боль",
      "Эндокринно-метаболические": "Повышение уровня гастрина, полипы желудка при длительном применении",
      "Прочие": "Сыпь, повышение трансаминаз (редко)"
    },
    dozadan: "Данные ограничены. Симптоматическое лечение, наблюдение.",
    ozarotasir: [
      "Снижает всасывание кислотозависимых препаратов (атазанавир, кетоконазол)",
      "Может влиять на концентрацию дигоксина, метотрексата",
      "Индукторы CYP3A4 (рифампицин) снижают действие вонопразана"
    ],
    qollash: {
      kattalar: "Эрозивный эзофагит: 20 мг 1 раз в день 4–8 недель, поддержка 10 мг/сут. Язва: 20 мг/сут. H. pylori: 20 мг 2 раза в день с антибиотиками 7 дней.",
      bolalar: "Не рекомендуется (данные ограничены)"
    },
    chiqarish: "Таблетки 10 мг, 20 мг"
  },
  en: {
    gruppa: "Potassium-competitive acid blockers (P-CAB)",
    farmTasir: "Fast, potent and long-acting gastric acid blocker",
    farmakodinamika: `Vonoprazan is a potassium-competitive acid blocker (P-CAB). Unlike conventional PPIs it is not a prodrug and does not require activation in an acidic environment: it binds reversibly but firmly to the potassium-binding site of H+/K+-ATPase, directly blocking the proton pump. This provides faster (from the first dose), more potent and longer (over 24 h) acid suppression, with little dependence on food or CYP2C19 polymorphism. It is highly effective in Helicobacter pylori eradication.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally; independent of food. Full acid suppression from day one",
      tarqalish: "Protein binding ~80–85%; accumulates in parietal cells",
      metabolizm: "Hepatic, mainly CYP3A4 (partly CYP2B6, 2C19, 2D6)",
      chiqarilish: "Metabolites in urine and faeces; T½ ~7 h (longer than PPIs)"
    },
    korsatmalar: [
      "Erosive oesophagitis (treatment and maintenance)",
      "Gastric and duodenal ulcer",
      "Helicobacter pylori eradication (with antibiotics)",
      "Prophylaxis of NSAID/aspirin-associated ulcers"
    ],
    qarrshi: [
      "Hypersensitivity to vonoprazan",
      "Concomitant atazanavir, rilpivirine, nelfinavir",
      "Severe hepatic impairment (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation or diarrhoea, abdominal pain, nausea",
      "CNS": "Headache",
      "Endocrine/metabolic": "Raised gastrin levels, gastric polyps with prolonged use",
      "Other": "Rash, raised transaminases (rare)"
    },
    dozadan: "Data limited. Symptomatic treatment, monitoring.",
    ozarotasir: [
      "Reduces absorption of acid-dependent drugs (atazanavir, ketoconazole)",
      "May affect digoxin, methotrexate concentrations",
      "CYP3A4 inducers (rifampicin) reduce vonoprazan effect"
    ],
    qollash: {
      kattalar: "Erosive oesophagitis: 20 mg once daily 4–8 weeks, maintenance 10 mg/day. Ulcer: 20 mg/day. H. pylori: 20 mg twice daily with antibiotics for 7 days.",
      bolalar: "Not recommended (limited data)"
    },
    chiqarish: "Tablets 10 mg, 20 mg"
  }
},

// ─── A02BX · Natriy alginat + Antatsid (raft hosil qiluvchi) ──────────────
"A02BX": {
  uz: {
    gruppa: "Yara va GERB davosida boshqa preparatlar (alginatlar)",
    farmTasir: "Reflyuksga qarshi raft (qalqon) hosil qiluvchi vosita",
    farmakodinamika: `Natriy alginat, natriy bikarbonat va kalsiy karbonat kombinatsiyasi. Oshqozon kislotasi bilan reaksiyaga kirishganda alginat past zichlikdagi gel — «raft» (suzuvchi qalqon) hosil qiladi, u oshqozon tarkibi yuzasida suzib turadi va kislotali tarkibning qizilo'ngachga qaytishini (reflyuks) mexanik to'sadi. Bikarbonat va karbonat qisman kislotani neytrallaydi. Tizimli ta'sirsiz, asosan mexanik antireflyuks vosita; ta'siri tez boshlanadi va 3–4 soatgacha davom etadi.`,
    farmakokinetika: {
      sorish: "Komponentlar deyarli so'rilmaydi; mahalliy mexanik ta'sir",
      tarqalish: "Oshqozon-qizilo'ngach luminида ta'sir qiladi",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Najas bilan; bikarbonat qisman so'rilib buyrak orqali"
    },
    korsatmalar: [
      "Gastroezofageal reflyuks, jig'ildon qaynashi",
      "Homiladorlikdagi reflyuks va jig'ildon qaynashi (xavfsiz variant)",
      "Ovqatdan keyingi kislota reflyuksi simptomlari",
      "GERB ning yengil shakllari va PPI ga qo'shimcha"
    ],
    qarrshi: [
      "Komponentlarga o'ta sezuvchanlik",
      "Natriy/kalsiy cheklangan parhez (ehtiyotkorlik)",
      "Og'ir buyrak yetishmovchiligi (kalsiy, natriy)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Meteorizm, kekirish, kamdan-kam ich qotishi yoki diareya",
      "Metabolik": "Ko'p qo'llashda giperkalsemiya, alkaloz (kam)",
      "Allergiya": "Toshma, qichishish (juda kam)"
    },
    dozadan: "Ehtimoli past; ko'p qo'llashda qorin shishi, alkaloz — simptomatik davolash.",
    ozarotasir: [
      "Boshqa dorilar so'rilishini kamaytirishi mumkin — 2 soat farq bilan qabul qiling",
      "Kislotada eriydigan qobiqli preparatlar bilan birga tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "10–20 ml suspenziya yoki 2–4 chaynaladigan tabletka ovqatdan keyin va uxlash oldidan; kuniga 4 martagacha.",
      bolalar: "12 yoshdan: kattalardagidek; kichik yoshda shifokor tavsiyasi bilan"
    },
    chiqarish: "Ichish uchun suspenziya; chaynaladigan tabletkalar (paketlar)"
  },
  ru: {
    gruppa: "Прочие препараты при язве и ГЭРБ (альгинаты)",
    farmTasir: "Антирефлюксное средство, образующее защитный «плот»",
    farmakodinamika: `Комбинация натрия альгината, натрия бикарбоната и кальция карбоната. При реакции с желудочной кислотой альгинат образует гель низкой плотности — «плот» (плавающий барьер), который держится на поверхности желудочного содержимого и механически препятствует забросу кислого содержимого в пищевод (рефлюкс). Бикарбонат и карбонат частично нейтрализуют кислоту. Преимущественно механическое антирефлюксное средство без системного действия; эффект наступает быстро и длится 3–4 ч.`,
    farmakokinetika: {
      sorish: "Компоненты практически не всасываются; местное механическое действие",
      tarqalish: "Действует в просвете желудка и пищевода",
      metabolizm: "Не метаболизируется",
      chiqarilish: "С калом; бикарбонат частично всасывается и выводится почками"
    },
    korsatmalar: [
      "Гастроэзофагеальный рефлюкс, изжога",
      "Рефлюкс и изжога при беременности (безопасный вариант)",
      "Постпрандиальные симптомы кислотного рефлюкса",
      "Лёгкие формы ГЭРБ и дополнение к ИПП"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам",
      "Диета с ограничением натрия/кальция (с осторожностью)",
      "Тяжёлая почечная недостаточность (кальций, натрий)"
    ],
    nojoya: {
      "ЖКТ": "Метеоризм, отрыжка, редко запор или диарея",
      "Метаболические": "При избыточном применении гиперкальциемия, алкалоз (редко)",
      "Аллергические": "Сыпь, зуд (очень редко)"
    },
    dozadan: "Маловероятна; при избыточном применении вздутие, алкалоз — симптоматическое лечение.",
    ozarotasir: [
      "Может снижать всасывание других препаратов — интервал 2 часа",
      "Не рекомендуется с препаратами в кислотоустойчивой оболочке"
    ],
    qollash: {
      kattalar: "10–20 мл суспензии или 2–4 жевательные таблетки после еды и перед сном; до 4 раз в день.",
      bolalar: "С 12 лет: как у взрослых; в младшем возрасте по рекомендации врача"
    },
    chiqarish: "Суспензия для приёма внутрь; жевательные таблетки (пакеты)"
  },
  en: {
    gruppa: "Other drugs for ulcer and GERD (alginates)",
    farmTasir: "Anti-reflux agent forming a protective raft",
    farmakodinamika: `A combination of sodium alginate, sodium bicarbonate and calcium carbonate. On reacting with gastric acid the alginate forms a low-density gel — a "raft" (floating barrier) — that sits on top of the gastric contents and mechanically prevents reflux of acidic content into the oesophagus. Bicarbonate and carbonate partly neutralise acid. It is mainly a mechanical anti-reflux agent without systemic action; onset is rapid and the effect lasts 3–4 h.`,
    farmakokinetika: {
      sorish: "The components are practically not absorbed; local mechanical action",
      tarqalish: "Acts in the gastric and oesophageal lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "In faeces; bicarbonate partly absorbed and excreted renally"
    },
    korsatmalar: [
      "Gastro-oesophageal reflux, heartburn",
      "Reflux and heartburn in pregnancy (a safe option)",
      "Postprandial acid reflux symptoms",
      "Mild GERD and as an add-on to PPIs"
    ],
    qarrshi: [
      "Hypersensitivity to the components",
      "Sodium/calcium-restricted diet (caution)",
      "Severe renal impairment (calcium, sodium)"
    ],
    nojoya: {
      "Gastrointestinal": "Flatulence, belching, rarely constipation or diarrhoea",
      "Metabolic": "Hypercalcaemia, alkalosis with excessive use (rare)",
      "Hypersensitivity": "Rash, itching (very rare)"
    },
    dozadan: "Unlikely; bloating, alkalosis with excessive use — symptomatic treatment.",
    ozarotasir: [
      "May reduce absorption of other drugs — separate by 2 hours",
      "Not recommended with enteric-coated preparations"
    ],
    qollash: {
      kattalar: "10–20 mL suspension or 2–4 chewable tablets after meals and at bedtime; up to 4 times daily.",
      bolalar: "From 12 years: as in adults; younger on medical advice"
    },
    chiqarish: "Oral suspension; chewable tablets (sachets)"
  }
},

// ─── A02BX02 · Sukralfat (± oksetakain) ───────────────────────────────────
"A02BX02": {
  uz: {
    gruppa: "Yara va GERB davosida boshqa preparatlar (shilliq pardani himoyalovchi)",
    farmTasir: "Yara yuzasini himoyalovchi (sitoprotektiv) vosita",
    farmakodinamika: `Sukralfat — saxaroza sulfatining alyuminiy tutuvchi tuzi. Kislotali muhitda polimerlanib yopishqoq massa hosil qiladi va yara/eroziya yuzasidagi oqsillarga (albumin, fibrinogen) tanlab bog'lanib, himoya pardasi yaratadi — bu kislota, pepsin va o't kislotalaridan himoyalaydi. Shuningdek shilimshiq va bikarbonat sekretsiyasini, prostaglandin sintezini va shilliq qavat qon aylanishini oshiradi. (Oksetakain qo'shilsa — mahalliy og'riqsizlantiruvchi ta'sir.) Tizimli so'rilishi minimal.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan deyarli so'rilmaydi (3–5% alyuminiy)",
      tarqalish: "Yara yuzasida 6 soatgacha saqlanadi; mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Asosan najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi (davolash va profilaktika)",
      "Surunkali gastrit zo'rayishi",
      "Reflyuks-ezofagit",
      "Stress yaralari va NSAID gastropatiyasi profilaktikasi"
    ],
    qarrshi: [
      "Sukralfatga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi (alyuminiy to'planishi)",
      "Oshqozon-ichak obstruksiyasi"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi (ko'p), og'iz qurishi, ko'ngil aynishi, meteorizm",
      "Metabolik": "Buyrak yetishmovchiligida giperalyuminemiya",
      "Boshqa": "Bezoar hosil bo'lishi (kam, ayniqsa zond bilan oziqlanuvchilarda)"
    },
    dozadan: "Past toksiklik; ich qotishi — suyuqlik ko'paytirish, simptomatik davolash.",
    ozarotasir: [
      "Ftorxinolon, tetratsiklin, digoksin, levotiroksin, fenitoin so'rilishini kamaytiradi — 2 soat farq bilan",
      "Antatsidlar bilan birga bermang (kislotali muhit faollik uchun zarur) — 30 daqiqa farq"
    ],
    qollash: {
      kattalar: "1 g kuniga 4 marta (ovqatdan 1 soat oldin va uxlash oldidan) yoki 2 g kuniga 2 marta; 4–8 hafta. Bo'sh oshqozonga.",
      bolalar: "Vaznга qarab, shifokor tavsiyasi bilan"
    },
    chiqarish: "Tabletkalar 1 g; ichish uchun suspenziya/gel (oksetakain bilan ham)"
  },
  ru: {
    gruppa: "Прочие препараты при язве и ГЭРБ (защищающие слизистую)",
    farmTasir: "Средство, защищающее поверхность язвы (цитопротектор)",
    farmakodinamika: `Сукральфат — алюминийсодержащая соль сульфатированной сахарозы. В кислой среде полимеризуется в вязкую массу и избирательно связывается с белками (альбумин, фибриноген) на поверхности язвы/эрозии, образуя защитную плёнку, которая защищает от кислоты, пепсина и жёлчных кислот. Также повышает секрецию слизи и бикарбоната, синтез простагландинов и кровоток слизистой. (При добавлении оксетакаина — местноанестезирующее действие.) Системное всасывание минимально.`,
    farmakokinetika: {
      sorish: "Практически не всасывается из ЖКТ (3–5% алюминия)",
      tarqalish: "Удерживается на поверхности язвы до 6 ч; местное действие",
      metabolizm: "Не метаболизируется",
      chiqarilish: "Преимущественно с калом в неизменённом виде"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки (лечение и профилактика)",
      "Обострение хронического гастрита",
      "Рефлюкс-эзофагит",
      "Профилактика стрессовых язв и НПВП-гастропатии"
    ],
    qarrshi: [
      "Гиперчувствительность к сукральфату",
      "Тяжёлая почечная недостаточность (накопление алюминия)",
      "Обструкция ЖКТ"
    ],
    nojoya: {
      "ЖКТ": "Запор (часто), сухость во рту, тошнота, метеоризм",
      "Метаболические": "Гипералюминиемия при почечной недостаточности",
      "Прочие": "Образование безоара (редко, особенно при зондовом питании)"
    },
    dozadan: "Низкая токсичность; запор — увеличение жидкости, симптоматическое лечение.",
    ozarotasir: [
      "Снижает всасывание фторхинолонов, тетрациклина, дигоксина, левотироксина, фенитоина — интервал 2 часа",
      "Не давать с антацидами (кислая среда нужна для активности) — интервал 30 минут"
    ],
    qollash: {
      kattalar: "1 г 4 раза в день (за 1 ч до еды и перед сном) или 2 г 2 раза в день; 4–8 недель. Натощак.",
      bolalar: "По массе тела, по рекомендации врача"
    },
    chiqarish: "Таблетки 1 г; суспензия/гель для приёма внутрь (в т.ч. с оксетакаином)"
  },
  en: {
    gruppa: "Other drugs for ulcer and GERD (mucosal protectants)",
    farmTasir: "Agent that protects the ulcer surface (cytoprotectant)",
    farmakodinamika: `Sucralfate is an aluminium-containing salt of sulfated sucrose. In an acidic environment it polymerises into a viscous mass and selectively binds to proteins (albumin, fibrinogen) on the ulcer/erosion surface, forming a protective film that shields against acid, pepsin and bile acids. It also increases mucus and bicarbonate secretion, prostaglandin synthesis and mucosal blood flow. (When oxetacaine is added — local anaesthetic action.) Systemic absorption is minimal.`,
    farmakokinetika: {
      sorish: "Practically not absorbed from the GI tract (3–5% aluminium)",
      tarqalish: "Retained on the ulcer surface for up to 6 h; local action",
      metabolizm: "Not metabolised",
      chiqarilish: "Mainly in faeces unchanged"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer (treatment and prophylaxis)",
      "Exacerbation of chronic gastritis",
      "Reflux oesophagitis",
      "Prophylaxis of stress ulcers and NSAID gastropathy"
    ],
    qarrshi: [
      "Hypersensitivity to sucralfate",
      "Severe renal impairment (aluminium accumulation)",
      "GI obstruction"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation (common), dry mouth, nausea, flatulence",
      "Metabolic": "Hyperaluminaemia in renal failure",
      "Other": "Bezoar formation (rare, especially in tube-fed patients)"
    },
    dozadan: "Low toxicity; constipation — increase fluids, symptomatic treatment.",
    ozarotasir: [
      "Reduces absorption of fluoroquinolones, tetracycline, digoxin, levothyroxine, phenytoin — separate by 2 hours",
      "Do not give with antacids (acidic environment needed for activity) — separate by 30 minutes"
    ],
    qollash: {
      kattalar: "1 g four times daily (1 h before meals and at bedtime) or 2 g twice daily; 4–8 weeks. On an empty stomach.",
      bolalar: "By body weight, on medical advice"
    },
    chiqarish: "Tablets 1 g; oral suspension/gel (including with oxetacaine)"
  }
},

// ─── A02BX05 · Bismut subsitrat ───────────────────────────────────────────
"A02BX05": {
  uz: {
    gruppa: "Yara va GERB davosida boshqa preparatlar (bismut birikmalari)",
    farmTasir: "Shilliq pardani himoyalovchi va antibakterial (anti-H. pylori) vosita",
    farmakodinamika: `Bismut trikaliy ditsitrat (kolloid bismut subsitrat) — gastrosytoprotektiv vosita. Kislotali muhitda yara yuzasidagi oqsillar bilan xelat birikma hosil qilib, kislota va pepsindan himoya qiluvchi parda yaratadi; prostaglandin, shilimshiq va bikarbonat sekretsiyasini oshiradi. Helicobacter pylori ga to'g'ridan-to'g'ri bakteritsid ta'sir ko'rsatadi (fermentlar va devor sintezini buzadi), shuning uchun eradikatsiya sxemalarida qo'llaniladi. Tizimli so'rilishi past.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan juda kam so'riladi",
      tarqalish: "Yara yuzasida va shilliq pardada mahalliy ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Asosan najas bilan (qora rang beradi); so'rilgan oz qism buyrak orqali"
    },
    korsatmalar: [
      "Oshqozon va o'n ikki barmoq ichak yarasi",
      "Helicobacter pylori eradikatsiyasi (kombinatsiyalangan sxemada)",
      "Surunkali gastrit va dispepsiya"
    ],
    qarrshi: [
      "Bismutga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi (bismut to'planishi va ensefalopatiya xavfi)",
      "Homiladorlik va emizish davri"
    ],
    nojoya: {
      "Oshqozon-ichak": "Najasning qora rangga bo'yalishi, tilning qoraisishi, ko'ngil aynishi, ich qotishi yoki diareya",
      "Asab tizimi": "Uzoq/ko'p qo'llashda bismut ensefalopatiyasi (kam)",
      "Boshqa": "Buyrak yetishmovchiligida bismut to'planishi"
    },
    dozadan: "Uzoq qo'llashda bismut ensefalopatiyasi va nefrotoksiklik — preparatni to'xtatish, xelatlovchi terapiya; gemodializ.",
    ozarotasir: [
      "Antatsidlar, sut, ovqat bismut faolligini kamaytiradi — 30 daqiqa farq",
      "Tetratsiklin so'rilishini kamaytiradi — alohida qabul qiling"
    ],
    qollash: {
      kattalar: "120 mg (1 tabletka) kuniga 4 marta ovqatdan 30 daqiqa oldin va uxlash oldidan, yoki 240 mg kuniga 2 marta; kurs 4–8 hafta (kvadroterapiyada 10–14 kun).",
      bolalar: "Tavsiya etilmaydi (yoki faqat shifokor nazoratida)"
    },
    chiqarish: "Tabletkalar 120 mg (bismut oksidiga hisoblangan)"
  },
  ru: {
    gruppa: "Прочие препараты при язве и ГЭРБ (соединения висмута)",
    farmTasir: "Гастропротектор с антибактериальным (анти-H. pylori) действием",
    farmakodinamika: `Висмута трикалия дицитрат (коллоидный субцитрат висмута) — гастроцитопротективное средство. В кислой среде образует хелатные соединения с белками поверхности язвы, создавая защитную плёнку от кислоты и пепсина; повышает секрецию простагландинов, слизи и бикарбоната. Оказывает прямое бактерицидное действие на Helicobacter pylori (нарушает ферменты и синтез стенки), поэтому применяется в схемах эрадикации. Системное всасывание низкое.`,
    farmakokinetika: {
      sorish: "Очень мало всасывается из ЖКТ",
      tarqalish: "Местное действие на поверхности язвы и слизистой",
      metabolizm: "Не метаболизируется",
      chiqarilish: "Преимущественно с калом (окрашивает в чёрный); всосавшаяся часть почками"
    },
    korsatmalar: [
      "Язва желудка и двенадцатиперстной кишки",
      "Эрадикация Helicobacter pylori (в комбинированной схеме)",
      "Хронический гастрит и диспепсия"
    ],
    qarrshi: [
      "Гиперчувствительность к висмуту",
      "Тяжёлая почечная недостаточность (риск накопления висмута и энцефалопатии)",
      "Беременность и период лактации"
    ],
    nojoya: {
      "ЖКТ": "Окрашивание кала в чёрный, потемнение языка, тошнота, запор или диарея",
      "ЦНС": "Висмутовая энцефалопатия при длительном/избыточном применении (редко)",
      "Прочие": "Накопление висмута при почечной недостаточности"
    },
    dozadan: "При длительном применении висмутовая энцефалопатия и нефротоксичность — отмена, хелатная терапия; гемодиализ.",
    ozarotasir: [
      "Антациды, молоко, пища снижают активность висмута — интервал 30 минут",
      "Снижает всасывание тетрациклина — принимать отдельно"
    ],
    qollash: {
      kattalar: "120 мг (1 таблетка) 4 раза в день за 30 минут до еды и перед сном, или 240 мг 2 раза в день; курс 4–8 недель (в квадротерапии 10–14 дней).",
      bolalar: "Не рекомендуется (или только под контролем врача)"
    },
    chiqarish: "Таблетки 120 мг (в пересчёте на оксид висмута)"
  },
  en: {
    gruppa: "Other drugs for ulcer and GERD (bismuth compounds)",
    farmTasir: "Gastroprotectant with antibacterial (anti-H. pylori) action",
    farmakodinamika: `Bismuth tripotassium dicitrate (colloidal bismuth subcitrate) is a gastrocytoprotective agent. In an acidic environment it forms chelate complexes with proteins on the ulcer surface, creating a protective film against acid and pepsin; it increases prostaglandin, mucus and bicarbonate secretion. It has direct bactericidal action against Helicobacter pylori (disrupting enzymes and wall synthesis), so it is used in eradication regimens. Systemic absorption is low.`,
    farmakokinetika: {
      sorish: "Very little absorbed from the GI tract",
      tarqalish: "Local action on the ulcer surface and mucosa",
      metabolizm: "Not metabolised",
      chiqarilish: "Mainly in faeces (colours it black); the absorbed fraction renally"
    },
    korsatmalar: [
      "Gastric and duodenal ulcer",
      "Helicobacter pylori eradication (in a combination regimen)",
      "Chronic gastritis and dyspepsia"
    ],
    qarrshi: [
      "Hypersensitivity to bismuth",
      "Severe renal impairment (risk of bismuth accumulation and encephalopathy)",
      "Pregnancy and lactation"
    ],
    nojoya: {
      "Gastrointestinal": "Black discolouration of stools, darkening of the tongue, nausea, constipation or diarrhoea",
      "CNS": "Bismuth encephalopathy with prolonged/excessive use (rare)",
      "Other": "Bismuth accumulation in renal failure"
    },
    dozadan: "Prolonged use causes bismuth encephalopathy and nephrotoxicity — discontinue, chelation therapy; haemodialysis.",
    ozarotasir: [
      "Antacids, milk, food reduce bismuth activity — separate by 30 minutes",
      "Reduces tetracycline absorption — take separately"
    ],
    qollash: {
      kattalar: "120 mg (1 tablet) four times daily 30 minutes before meals and at bedtime, or 240 mg twice daily; course 4–8 weeks (10–14 days in quadruple therapy).",
      bolalar: "Not recommended (or only under medical supervision)"
    },
    chiqarish: "Tablets 120 mg (expressed as bismuth oxide)"
  }
},

// ─── A02BX14 · Rebamipid ──────────────────────────────────────────────────
"A02BX14": {
  uz: {
    gruppa: "Yara va GERB davosida boshqa preparatlar (shilliq pardani himoyalovchi)",
    farmTasir: "Oshqozon shilliq pardasini himoyalovchi va tiklovchi vosita",
    farmakodinamika: `Rebamipid — gastroprotektiv vosita. Oshqozon shilliq pardasidagi prostaglandin (PGE2, PGI2) sintezini oshiradi, shilimshiq qatlam va bikarbonat sekretsiyasini kuchaytiradi, shilliq qavat qon aylanishini yaxshilaydi. Erkin radikallar (kislorodning faol shakllari) ni bog'lab, yallig'lanish va oksidlovchi shikastlanishni kamaytiradi, neytrofillar faolligini bostiradi. Helicobacter pylori va NSAID keltirib chiqargan shilliq parda shikastlanishini tiklaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali so'riladi; Cmax ~2 soatda",
      tarqalish: "Oshqozon shilliq pardasida tanlab to'planadi",
      metabolizm: "Jigarда minimal metabolizm",
      chiqarilish: "Asosan buyrak orqali o'zgarmagan holda; T½ ~1–2 soat"
    },
    korsatmalar: [
      "Oshqozon yarasi va surunkali gastrit zo'rayishi (eroziya, qonash, qizarish, shish)",
      "NSAID gastropatiyasi profilaktikasi va davosi",
      "Helicobacter pylori eradikatsiyasiga qo'shimcha",
      "Funksional dispepsiya (yordamchi)"
    ],
    qarrshi: [
      "Rebamipidga o'ta sezuvchanlik",
      "Homiladorlik va emizish davri (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi, qorin shishi, diareya, ko'ngil aynishi (kam)",
      "Allergiya": "Toshma, qichishish, kamdan-kam eozinofiliya",
      "Boshqa": "Transaminazalar oshishi (kam), ta'm o'zgarishi"
    },
    dozadan: "Past toksiklik; simptomatik davolash.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir kam aniqlangan"
    ],
    qollash: {
      kattalar: "100 mg (1 tabletka) kuniga 3 marta (ertalab, kunduzi va uxlash oldidan).",
      bolalar: "Xavfsizligi aniqlanmagan"
    },
    chiqarish: "Tabletkalar 100 mg"
  },
  ru: {
    gruppa: "Прочие препараты при язве и ГЭРБ (защищающие слизистую)",
    farmTasir: "Средство, защищающее и восстанавливающее слизистую желудка",
    farmakodinamika: `Ребамипид — гастропротективное средство. Повышает синтез простагландинов (PGE2, PGI2) в слизистой желудка, усиливает секрецию слизи и бикарбоната, улучшает кровоток слизистой. Связывает свободные радикалы (активные формы кислорода), уменьшая воспаление и окислительное повреждение, подавляет активность нейтрофилов. Восстанавливает повреждения слизистой, вызванные Helicobacter pylori и НПВП.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь; Cmax ~2 ч",
      tarqalish: "Избирательно накапливается в слизистой желудка",
      metabolizm: "Минимальный метаболизм в печени",
      chiqarilish: "Преимущественно почками в неизменённом виде; T½ ~1–2 ч"
    },
    korsatmalar: [
      "Язва желудка и обострение хронического гастрита (эрозия, кровоточивость, гиперемия, отёк)",
      "Профилактика и лечение НПВП-гастропатии",
      "Дополнение к эрадикации Helicobacter pylori",
      "Функциональная диспепсия (вспомогательно)"
    ],
    qarrshi: [
      "Гиперчувствительность к ребамипиду",
      "Беременность и период лактации (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Запор, вздутие живота, диарея, тошнота (редко)",
      "Аллергические": "Сыпь, зуд, редко эозинофилия",
      "Прочие": "Повышение трансаминаз (редко), изменение вкуса"
    },
    dozadan: "Низкая токсичность; симптоматическое лечение.",
    ozarotasir: [
      "Клинически значимых взаимодействий выявлено мало"
    ],
    qollash: {
      kattalar: "100 мг (1 таблетка) 3 раза в день (утром, днём и перед сном).",
      bolalar: "Безопасность не установлена"
    },
    chiqarish: "Таблетки 100 мг"
  },
  en: {
    gruppa: "Other drugs for ulcer and GERD (mucosal protectants)",
    farmTasir: "Agent that protects and restores the gastric mucosa",
    farmakodinamika: `Rebamipide is a gastroprotective agent. It increases prostaglandin (PGE2, PGI2) synthesis in the gastric mucosa, enhances mucus and bicarbonate secretion and improves mucosal blood flow. It scavenges free radicals (reactive oxygen species), reducing inflammation and oxidative damage, and suppresses neutrophil activity. It repairs mucosal damage caused by Helicobacter pylori and NSAIDs.`,
    farmakokinetika: {
      sorish: "Absorbed orally; Cmax ~2 h",
      tarqalish: "Selectively accumulates in the gastric mucosa",
      metabolizm: "Minimal hepatic metabolism",
      chiqarilish: "Mainly renally unchanged; T½ ~1–2 h"
    },
    korsatmalar: [
      "Gastric ulcer and exacerbation of chronic gastritis (erosion, bleeding, hyperaemia, oedema)",
      "Prophylaxis and treatment of NSAID gastropathy",
      "Adjunct to Helicobacter pylori eradication",
      "Functional dyspepsia (supportive)"
    ],
    qarrshi: [
      "Hypersensitivity to rebamipide",
      "Pregnancy and lactation (with caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation, bloating, diarrhoea, nausea (rare)",
      "Hypersensitivity": "Rash, itching, rarely eosinophilia",
      "Other": "Raised transaminases (rare), taste change"
    },
    dozadan: "Low toxicity; symptomatic treatment.",
    ozarotasir: [
      "Few clinically significant interactions identified"
    ],
    qollash: {
      kattalar: "100 mg (1 tablet) three times daily (morning, midday and at bedtime).",
      bolalar: "Safety not established"
    },
    chiqarish: "Tablets 100 mg"
  }
},

// ─── A02DA · Simetikon (gaz haydovchi) ────────────────────────────────────
"A02DA": {
  uz: {
    gruppa: "Gaz haydovchi (antiflatulent) vositalar",
    farmTasir: "Ichakdagi gaz to'planishini kamaytiruvchi vosita",
    farmakodinamika: `Simetikon — dimetilsiloksan va kremniy dioksidi asosidagi inert silikon birikma. Ichak suyuqligi va shilimshig'idagi gaz pufakchalarining yuza tarangligini pasaytiradi, natijada pufakchalar birlashib yorilib, gaz ichak devori orqali so'riladi yoki peristaltika bilan chiqariladi. Meteorizm, qorin shishi va gaz bilan bog'liq og'riqni kamaytiradi. Kimyoviy va fiziologik jihatdan inert — so'rilmaydi, fermentlar va bakteriyalarga ta'sir qilmaydi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan umuman so'rilmaydi",
      tarqalish: "Faqat ichak luminida fizik ta'sir qiladi",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "O'zgarmagan holda najas bilan to'liq chiqariladi"
    },
    korsatmalar: [
      "Meteorizm, qorin shishi, aerofagiya",
      "Funksional dispepsiyada gaz simptomlari",
      "Operatsiya yoki rentgen/ultratovush tekshiruvidan oldin ichakda gazni kamaytirish",
      "Yuvuvchi vositalar (detergentlar) bilan zaharlanishda ko'piklanishni kamaytirish"
    ],
    qarrshi: [
      "Simetikonga o'ta sezuvchanlik",
      "Ichak obstruksiyasi yoki perforatsiyasi"
    ],
    nojoya: {
      "Umumiy": "Juda yaxshi ko'tariladi; kamdan-kam allergik reaksiya (toshma, qichishish)"
    },
    dozadan: "Inert bo'lgani uchun doza oshib ketishi xavfsiz; maxsus chora talab qilmaydi.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir yo'q (so'rilmaydi)"
    ],
    qollash: {
      kattalar: "40–125 mg har ovqatdan keyin va uxlash oldidan; kuniga 3–4 marta.",
      bolalar: "Chaqaloqlar va bolalarda yoshga mos tomchi/suspenziya shakllari (qorin sanchig'ida)"
    },
    chiqarish: "Kapsulalar, chaynaladigan tabletkalar, emulsiya/tomchilar (40–125 mg)"
  },
  ru: {
    gruppa: "Ветрогонные (антифлатулентные) средства",
    farmTasir: "Средство, уменьшающее скопление газов в кишечнике",
    farmakodinamika: `Симетикон — инертное силиконовое соединение на основе диметилсилоксана и диоксида кремния. Снижает поверхностное натяжение пузырьков газа в кишечной жидкости и слизи, в результате чего пузырьки сливаются и лопаются, а газ всасывается через стенку кишки или выводится перистальтикой. Уменьшает метеоризм, вздутие и связанную с газами боль. Химически и физиологически инертен — не всасывается, не влияет на ферменты и бактерии.`,
    farmakokinetika: {
      sorish: "Совершенно не всасывается из ЖКТ",
      tarqalish: "Оказывает только физическое действие в просвете кишки",
      metabolizm: "Не метаболизируется",
      chiqarilish: "Полностью выводится с калом в неизменённом виде"
    },
    korsatmalar: [
      "Метеоризм, вздутие живота, аэрофагия",
      "Газовые симптомы при функциональной диспепсии",
      "Уменьшение газа в кишечнике перед операцией или рентген/УЗИ",
      "Уменьшение пенообразования при отравлении детергентами"
    ],
    qarrshi: [
      "Гиперчувствительность к симетикону",
      "Обструкция или перфорация кишечника"
    ],
    nojoya: {
      "Общие": "Очень хорошо переносится; редко аллергическая реакция (сыпь, зуд)"
    },
    dozadan: "Поскольку инертен, передозировка безопасна; специальных мер не требует.",
    ozarotasir: [
      "Клинически значимых взаимодействий нет (не всасывается)"
    ],
    qollash: {
      kattalar: "40–125 мг после каждого приёма пищи и перед сном; 3–4 раза в день.",
      bolalar: "У младенцев и детей формы в виде капель/суспензии по возрасту (при кишечных коликах)"
    },
    chiqarish: "Капсулы, жевательные таблетки, эмульсия/капли (40–125 мг)"
  },
  en: {
    gruppa: "Antiflatulent agents",
    farmTasir: "Agent that reduces intestinal gas accumulation",
    farmakodinamika: `Simethicone is an inert silicone compound based on dimethylsiloxane and silicon dioxide. It lowers the surface tension of gas bubbles in intestinal fluid and mucus, so the bubbles coalesce and burst, and the gas is absorbed through the bowel wall or expelled by peristalsis. It reduces flatulence, bloating and gas-related pain. It is chemically and physiologically inert — not absorbed and without effect on enzymes or bacteria.`,
    farmakokinetika: {
      sorish: "Not absorbed at all from the GI tract",
      tarqalish: "Exerts only a physical action in the bowel lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "Completely excreted unchanged in faeces"
    },
    korsatmalar: [
      "Flatulence, bloating, aerophagia",
      "Gas symptoms in functional dyspepsia",
      "Reducing bowel gas before surgery or X-ray/ultrasound",
      "Reducing foaming in detergent poisoning"
    ],
    qarrshi: [
      "Hypersensitivity to simethicone",
      "Bowel obstruction or perforation"
    ],
    nojoya: {
      "General": "Very well tolerated; rarely allergic reaction (rash, itching)"
    },
    dozadan: "Being inert, overdose is safe; no specific measures needed.",
    ozarotasir: [
      "No clinically significant interactions (not absorbed)"
    ],
    qollash: {
      kattalar: "40–125 mg after each meal and at bedtime; 3–4 times daily.",
      bolalar: "Age-appropriate drop/suspension forms in infants and children (for colic)"
    },
    chiqarish: "Capsules, chewable tablets, emulsion/drops (40–125 mg)"
  }
},

// ─── A03AA04 · Mebeverin ──────────────────────────────────────────────────
"A03AA04": {
  uz: {
    gruppa: "Funksional ichak kasalliklarida spazmolitiklar (miotrop)",
    farmTasir: "Ichak silliq mushaklariga to'g'ridan-to'g'ri ta'sir qiluvchi spazmolitik",
    farmakodinamika: `Mebeverin — miotrop (muskulotrop) spazmolitik. Oshqozon-ichak silliq mushaklariga to'g'ridan-to'g'ri ta'sir qilib, hujayra membranasidagi natriy kanallarini bloklaydi va depolarizatsiyani kamaytiradi; shuningdek kaltsiy zaxiralarining to'lishini cheklaydi. Natijada spazm yo'qoladi, lekin normal peristaltika to'liq bostirilmaydi (gipotoniya yuzaga kelmaydi). Antixolinergik ta'siri yo'q, shuning uchun atropinga xos nojo'ya ta'sirlar (og'iz qurishi, ko'rish xiralashuvi) kuzatilmaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi",
      tarqalish: "Faol metabolitlari to'qimaga tarqaladi",
      metabolizm: "Ichak devori va jigarда tez gidroliz va metabolizmga uchraydi (vera kislotasi va boshqalar)",
      chiqarilish: "Asosan siydik bilan metabolitlar shaklida; tizimda to'planmaydi"
    },
    korsatmalar: [
      "Tirnashgan ichak sindromi (TIS) — qorin og'rig'i va spazmlari",
      "Oshqozon-ichak funksional spazmlari",
      "O't yo'llari spazmiga bog'liq og'riq",
      "Ikkilamchi (organik kasalliklar fonidagi) ichak spazmlari"
    ],
    qarrshi: [
      "Mebeverinга o'ta sezuvchanlik",
      "Paralitik ichak tutilishi (ileus)",
      "Homiladorlik (ehtiyotkorlik, ma'lumot cheklangan)"
    ],
    nojoya: {
      "Allergiya": "Toshma, qichishish, eshakemi, Kvinke shishi (kam)",
      "Oshqozon-ichak": "Kamdan-kam ko'ngil aynishi, ich qotishi",
      "Asab tizimi": "Kamdan-kam bosh og'rig'i, bosh aylanishi"
    },
    dozadan: "Belgilar: markaziy asab tizimi qo'zg'aluvchanligi (nazariy). Davolash: simptomatik, oshqozonni yuvish.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir kam aniqlangan"
    ],
    qollash: {
      kattalar: "135 mg kuniga 3 marta ovqatdan 20 daqiqa oldin; yoki uzaytirilgan shakl 200 mg kuniga 2 marta.",
      bolalar: "18 yoshgacha odatda tavsiya etilmaydi (shakliga qarab)"
    },
    chiqarish: "Tabletkalar 135 mg; uzaytirilgan chiqarishli kapsulalar 200 mg"
  },
  ru: {
    gruppa: "Спазмолитики при функциональных заболеваниях кишечника (миотропные)",
    farmTasir: "Спазмолитик прямого действия на гладкую мускулатуру кишечника",
    farmakodinamika: `Мебеверин — миотропный (мускулотропный) спазмолитик. Действует непосредственно на гладкую мускулатуру ЖКТ, блокируя натриевые каналы клеточной мембраны и уменьшая деполяризацию; также ограничивает пополнение запасов кальция. В результате спазм устраняется, но нормальная перистальтика полностью не подавляется (гипотония не возникает). Не обладает антихолинергическим действием, поэтому атропиноподобные побочные эффекты (сухость во рту, нечёткость зрения) отсутствуют.`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь",
      tarqalish: "Активные метаболиты распределяются в ткани",
      metabolizm: "Быстро гидролизуется и метаболизируется в стенке кишки и печени (вератровая кислота и др.)",
      chiqarilish: "Преимущественно с мочой в виде метаболитов; не накапливается"
    },
    korsatmalar: [
      "Синдром раздражённого кишечника (СРК) — боль и спазмы",
      "Функциональные спазмы ЖКТ",
      "Боль, связанная со спазмом жёлчных путей",
      "Вторичные спазмы кишечника (на фоне органических заболеваний)"
    ],
    qarrshi: [
      "Гиперчувствительность к мебеверину",
      "Паралитическая кишечная непроходимость (илеус)",
      "Беременность (с осторожностью, данные ограничены)"
    ],
    nojoya: {
      "Аллергические": "Сыпь, зуд, крапивница, отёк Квинке (редко)",
      "ЖКТ": "Редко тошнота, запор",
      "ЦНС": "Редко головная боль, головокружение"
    },
    dozadan: "Симптомы: возбудимость ЦНС (теоретически). Лечение: симптоматическое, промывание желудка.",
    ozarotasir: [
      "Клинически значимых взаимодействий выявлено мало"
    ],
    qollash: {
      kattalar: "135 мг 3 раза в день за 20 минут до еды; или пролонгированная форма 200 мг 2 раза в день.",
      bolalar: "До 18 лет обычно не рекомендуется (в зависимости от формы)"
    },
    chiqarish: "Таблетки 135 мг; капсулы пролонгированного действия 200 мг"
  },
  en: {
    gruppa: "Antispasmodics for functional bowel disorders (musculotropic)",
    farmTasir: "Direct-acting antispasmodic on intestinal smooth muscle",
    farmakodinamika: `Mebeverine is a musculotropic antispasmodic. It acts directly on GI smooth muscle, blocking sodium channels of the cell membrane and reducing depolarisation; it also limits replenishment of calcium stores. Spasm is relieved, but normal peristalsis is not fully suppressed (no hypotonia). It has no anticholinergic action, so atropine-like side effects (dry mouth, blurred vision) do not occur.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally",
      tarqalish: "Active metabolites distribute to tissues",
      metabolizm: "Rapidly hydrolysed and metabolised in the bowel wall and liver (veratric acid and others)",
      chiqarilish: "Mainly in urine as metabolites; does not accumulate"
    },
    korsatmalar: [
      "Irritable bowel syndrome (IBS) — pain and spasm",
      "Functional GI spasm",
      "Pain associated with biliary spasm",
      "Secondary bowel spasm (on a background of organic disease)"
    ],
    qarrshi: [
      "Hypersensitivity to mebeverine",
      "Paralytic ileus",
      "Pregnancy (caution, limited data)"
    ],
    nojoya: {
      "Hypersensitivity": "Rash, itching, urticaria, angioedema (rare)",
      "Gastrointestinal": "Rarely nausea, constipation",
      "CNS": "Rarely headache, dizziness"
    },
    dozadan: "Symptoms: CNS excitability (theoretical). Treatment: symptomatic, gastric lavage.",
    ozarotasir: [
      "Few clinically significant interactions identified"
    ],
    qollash: {
      kattalar: "135 mg three times daily 20 minutes before meals; or prolonged-release form 200 mg twice daily.",
      bolalar: "Generally not recommended under 18 years (depending on the form)"
    },
    chiqarish: "Tablets 135 mg; prolonged-release capsules 200 mg"
  }
},

// ─── A03AA05 · Trimebutin ─────────────────────────────────────────────────
"A03AA05": {
  uz: {
    gruppa: "Funksional ichak kasalliklarida spazmolitiklar (motorikani modulyatorlovchi)",
    farmTasir: "Ichak harakatini tartibga soluvchi (modulyatorlovchi) vosita",
    farmakodinamika: `Trimebutin — periferik enkefalinergik (opioid) retseptorlarga (μ, κ, δ) ta'sir qiluvchi ichak motorikasi modulyatori. Ichak harakati kuchaygan bo'lsa — uni kamaytiradi, susaygan bo'lsa — kuchaytiradi, ya'ni fiziologik me'yorga qaytaradi. Shuningdek ichak silliq mushaklarining elektr faolligiga ta'sir qilib spazmni bartaraf qiladi va visceral og'riq sezgirligini kamaytiradi. Antixolinergik ta'siri yo'q.`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi; Cmax ~1–2 soatda",
      tarqalish: "To'qimalarga tarqaladi",
      metabolizm: "Jigarда metabolizmga uchraydi (asosiy metabolit — nor-trimebutin ham faol)",
      chiqarilish: "Asosan siydik orqali; T½ ~10–12 soat"
    },
    korsatmalar: [
      "Tirnashgan ichak sindromi (TIS)",
      "Oshqozon-ichak motorikasi buzilishlari (dispepsiya, ko'ngil aynishi, qorin shishi, spazm)",
      "Operatsiyadan keyingi paralitik ileus profilaktikasi",
      "Bolalardagi funksional oshqozon-ichak buzilishlari"
    ],
    qarrshi: [
      "Trimebutinga o'ta sezuvchanlik",
      "Homiladorlikning I trimestri (ehtiyotkorlik)",
      "Emizish davri"
    ],
    nojoya: {
      "Teri": "Toshma, qichishish (kam)",
      "Oshqozon-ichak": "Og'izda quruqlik, ko'ngil aynishi, ich qotishi yoki diareya (kam)",
      "Asab tizimi": "Bosh aylanishi, charchoq, uyquchanlik (kam)"
    },
    dozadan: "Ma'lumot cheklangan; simptomatik davolash.",
    ozarotasir: [
      "Tubokurarin kabi mushak relaksantlari ta'sirini o'zgartirishi mumkin",
      "Klinik ahamiyatga ega boshqa o'zaro ta'sir kam"
    ],
    qollash: {
      kattalar: "100–200 mg kuniga 3 marta ovqatdan oldin.",
      bolalar: "Vaznга qarab suspenziya shaklida (yoshга mos dozada)"
    },
    chiqarish: "Tabletkalar 100 mg, 200 mg; ichish uchun suspenziya"
  },
  ru: {
    gruppa: "Спазмолитики при функциональных заболеваниях кишечника (модуляторы моторики)",
    farmTasir: "Средство, регулирующее (модулирующее) моторику кишечника",
    farmakodinamika: `Тримебутин — модулятор моторики кишечника, воздействующий на периферические энкефалинергические (опиоидные) рецепторы (μ, κ, δ). При повышенной моторике снижает её, при сниженной — усиливает, то есть возвращает к физиологической норме. Также влияет на электрическую активность гладких мышц кишечника, устраняя спазм и снижая висцеральную болевую чувствительность. Не обладает антихолинергическим действием.`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь; Cmax ~1–2 ч",
      tarqalish: "Распределяется в ткани",
      metabolizm: "Метаболизируется в печени (основной метаболит — нор-тримебутин также активен)",
      chiqarilish: "Преимущественно с мочой; T½ ~10–12 ч"
    },
    korsatmalar: [
      "Синдром раздражённого кишечника (СРК)",
      "Нарушения моторики ЖКТ (диспепсия, тошнота, вздутие, спазм)",
      "Профилактика послеоперационного паралитического илеуса",
      "Функциональные расстройства ЖКТ у детей"
    ],
    qarrshi: [
      "Гиперчувствительность к тримебутину",
      "I триместр беременности (с осторожностью)",
      "Период лактации"
    ],
    nojoya: {
      "Кожа": "Сыпь, зуд (редко)",
      "ЖКТ": "Сухость во рту, тошнота, запор или диарея (редко)",
      "ЦНС": "Головокружение, утомляемость, сонливость (редко)"
    },
    dozadan: "Данные ограничены; симптоматическое лечение.",
    ozarotasir: [
      "Может изменять действие миорелаксантов типа тубокурарина",
      "Других клинически значимых взаимодействий мало"
    ],
    qollash: {
      kattalar: "100–200 мг 3 раза в день до еды.",
      bolalar: "По массе тела в виде суспензии (в возрастной дозе)"
    },
    chiqarish: "Таблетки 100 мг, 200 мг; суспензия для приёма внутрь"
  },
  en: {
    gruppa: "Antispasmodics for functional bowel disorders (motility modulators)",
    farmTasir: "Agent that regulates (modulates) bowel motility",
    farmakodinamika: `Trimebutine is a bowel motility modulator acting on peripheral enkephalinergic (opioid) receptors (μ, κ, δ). It reduces motility when it is increased and enhances it when reduced, returning it to the physiological norm. It also affects the electrical activity of intestinal smooth muscle, relieving spasm and reducing visceral pain sensitivity. It has no anticholinergic action.`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally; Cmax ~1–2 h",
      tarqalish: "Distributes to tissues",
      metabolizm: "Hepatically metabolised (the main metabolite nor-trimebutine is also active)",
      chiqarilish: "Mainly in urine; T½ ~10–12 h"
    },
    korsatmalar: [
      "Irritable bowel syndrome (IBS)",
      "GI motility disorders (dyspepsia, nausea, bloating, spasm)",
      "Prophylaxis of postoperative paralytic ileus",
      "Functional GI disorders in children"
    ],
    qarrshi: [
      "Hypersensitivity to trimebutine",
      "First trimester of pregnancy (caution)",
      "Lactation period"
    ],
    nojoya: {
      "Dermatological": "Rash, itching (rare)",
      "Gastrointestinal": "Dry mouth, nausea, constipation or diarrhoea (rare)",
      "CNS": "Dizziness, fatigue, drowsiness (rare)"
    },
    dozadan: "Data limited; symptomatic treatment.",
    ozarotasir: [
      "May alter the effect of muscle relaxants such as tubocurarine",
      "Few other clinically significant interactions"
    ],
    qollash: {
      kattalar: "100–200 mg three times daily before meals.",
      bolalar: "By body weight as suspension (age-appropriate dose)"
    },
    chiqarish: "Tablets 100 mg, 200 mg; oral suspension"
  }
},

// ─── A03AB06 · Otiloniy bromid ────────────────────────────────────────────
"A03AB06": {
  uz: {
    gruppa: "Sintetik antixolinergik spazmolitiklar (to'rtlamchi ammoniyli)",
    farmTasir: "Ichakka tanlab ta'sir qiluvchi spazmolitik",
    farmakodinamika: `Otiloniy bromid — to'rtlamchi ammoniyli birikma, oshqozon-ichak silliq mushaklariga tanlab ta'sir qiluvchi spazmolitik. Asosan hujayraga kaltsiy kirishini bloklab (kaltsiy kanallari antagonisti) silliq mushak qisqarishini kamaytiradi; shuningdek muskarin va taxikinin (neyrokinin) retseptorlarini qisman bloklaydi. To'rtlamchi tuzilishi tufayli oshqozon-ichakdan kam so'riladi va tizimli antixolinergik ta'sir bermaydi — ta'siri ichakда mahalliy bo'ladi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan juda kam so'riladi (<5%)",
      tarqalish: "Asosan ichak devorida mahalliy to'planadi",
      metabolizm: "So'rilgan oz qism metabolizmga uchraydi",
      chiqarilish: "Asosan najas (o't) bilan; so'rilgan qism siydik orqali"
    },
    korsatmalar: [
      "Tirnashgan ichak sindromi (TIS) — qorin og'rig'i, spazm, shish",
      "Oshqozon-ichak spazmlari",
      "Endoskopiya yoki rentgen tekshiruvidan oldin spazmni kamaytirish"
    ],
    qarrshi: [
      "Otiloniy bromidga o'ta sezuvchanlik",
      "Glaukoma, prostata gipertrofiyasi, piloroduodenal stenoz (antixolinergik ehtiyotkorlik)"
    ],
    nojoya: {
      "Umumiy": "Odatda yaxshi ko'tariladi (tizimli so'rilish past)",
      "Allergiya": "Toshma, qichishish (kam)",
      "Oshqozon-ichak": "Kamdan-kam ko'ngil aynishi, epigastral noxushlik"
    },
    dozadan: "Past tizimli so'rilish tufayli xavf past; simptomatik davolash.",
    ozarotasir: [
      "Boshqa antixolinergiklar bilan ta'sir kuchayishi mumkin (nazariy)"
    ],
    qollash: {
      kattalar: "40 mg kuniga 2–3 marta ovqatdan oldin.",
      bolalar: "Tavsiya etilmaydi"
    },
    chiqarish: "Pardali tabletkalar 40 mg"
  },
  ru: {
    gruppa: "Синтетические антихолинергические спазмолитики (четвертичные аммониевые)",
    farmTasir: "Спазмолитик с избирательным действием на кишечник",
    farmakodinamika: `Отилония бромид — четвертичное аммониевое соединение, спазмолитик с избирательным действием на гладкую мускулатуру ЖКТ. Главным образом блокирует вход кальция в клетку (антагонист кальциевых каналов), снижая сокращение гладких мышц; также частично блокирует мускариновые и тахикининовые (нейрокининовые) рецепторы. Из-за четвертичной структуры мало всасывается из ЖКТ и не даёт системного антихолинергического действия — действует местно в кишечнике.`,
    farmakokinetika: {
      sorish: "Очень мало всасывается из ЖКТ (<5%)",
      tarqalish: "Накапливается преимущественно в стенке кишки местно",
      metabolizm: "Всосавшаяся малая часть метаболизируется",
      chiqarilish: "Преимущественно с калом (жёлчь); всосавшаяся часть с мочой"
    },
    korsatmalar: [
      "Синдром раздражённого кишечника (СРК) — боль, спазм, вздутие",
      "Спазмы ЖКТ",
      "Уменьшение спазма перед эндоскопией или рентгеном"
    ],
    qarrshi: [
      "Гиперчувствительность к отилония бромиду",
      "Глаукома, гипертрофия простаты, пилородуоденальный стеноз (антихолинергическая осторожность)"
    ],
    nojoya: {
      "Общие": "Обычно хорошо переносится (низкое системное всасывание)",
      "Аллергические": "Сыпь, зуд (редко)",
      "ЖКТ": "Редко тошнота, дискомфорт в эпигастрии"
    },
    dozadan: "Из-за низкого системного всасывания риск низкий; симптоматическое лечение.",
    ozarotasir: [
      "Возможно усиление действия с другими антихолинергиками (теоретически)"
    ],
    qollash: {
      kattalar: "40 мг 2–3 раза в день до еды.",
      bolalar: "Не рекомендуется"
    },
    chiqarish: "Таблетки, покрытые оболочкой, 40 мг"
  },
  en: {
    gruppa: "Synthetic anticholinergic antispasmodics (quaternary ammonium)",
    farmTasir: "Antispasmodic with selective action on the bowel",
    farmakodinamika: `Otilonium bromide is a quaternary ammonium compound, an antispasmodic with selective action on GI smooth muscle. It mainly blocks calcium entry into the cell (calcium channel antagonist), reducing smooth muscle contraction; it also partially blocks muscarinic and tachykinin (neurokinin) receptors. Owing to its quaternary structure it is poorly absorbed from the GI tract and produces no systemic anticholinergic effect — acting locally in the bowel.`,
    farmakokinetika: {
      sorish: "Very poorly absorbed from the GI tract (<5%)",
      tarqalish: "Accumulates mainly in the bowel wall locally",
      metabolizm: "The small absorbed fraction is metabolised",
      chiqarilish: "Mainly in faeces (bile); the absorbed fraction in urine"
    },
    korsatmalar: [
      "Irritable bowel syndrome (IBS) — pain, spasm, bloating",
      "GI spasm",
      "Reducing spasm before endoscopy or X-ray"
    ],
    qarrshi: [
      "Hypersensitivity to otilonium bromide",
      "Glaucoma, prostatic hypertrophy, pyloroduodenal stenosis (anticholinergic caution)"
    ],
    nojoya: {
      "General": "Usually well tolerated (low systemic absorption)",
      "Hypersensitivity": "Rash, itching (rare)",
      "Gastrointestinal": "Rarely nausea, epigastric discomfort"
    },
    dozadan: "Risk is low due to low systemic absorption; symptomatic treatment.",
    ozarotasir: [
      "Effects may be enhanced with other anticholinergics (theoretical)"
    ],
    qollash: {
      kattalar: "40 mg 2–3 times daily before meals.",
      bolalar: "Not recommended"
    },
    chiqarish: "Film-coated tablets 40 mg"
  }
},

// ─── A03AD01 · Papaverin ──────────────────────────────────────────────────
"A03AD01": {
  uz: {
    gruppa: "Miotrop spazmolitiklar (papaverin va hosilalari)",
    farmTasir: "Silliq mushaklarni bo'shashtiruvchi miotrop spazmolitik",
    farmakodinamika: `Papaverin — afyun (opiy) izoxinolin alkaloidi, lekin narkotik ta'siri yo'q. Fosfodiesteraza fermentini inhibe qilib hujayra ichidagi siklik AMF (sAMF) miqdorini oshiradi va hujayra ichidagi kaltsiy darajasini kamaytiradi, natijada silliq mushaklar bo'shashadi. Oshqozon-ichak, o't yo'llari, siydik yo'llari va qon tomir silliq mushaklariga spazmolitik va tomir kengaytiruvchi ta'sir ko'rsatadi. Yuqori dozada yurak o'tkazuvchanligini sekinlashtiradi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali so'riladi (biofaollik o'zgaruvchan)",
      tarqalish: "Oqsilga bog'lanish ~90%; to'qimalarga keng tarqaladi",
      metabolizm: "Jigarда metabolizmga uchraydi",
      chiqarilish: "Asosan siydik bilan metabolitlar shaklida; T½ ~1–2 soat"
    },
    korsatmalar: [
      "Oshqozon-ichak silliq mushaklari spazmi (pilorospazm, kolit, spastik qabziyat)",
      "O't yo'llari va siydik yo'llari spazmi",
      "Periferik va miya tomirlari spazmi",
      "Bronxospazm (yordamchi)"
    ],
    qarrshi: [
      "Papaverinга o'ta sezuvchanlik",
      "AV-blokada, yurak o'tkazuvchanligi og'ir buzilishlari",
      "Glaukoma",
      "Og'ir jigar yetishmovchiligi",
      "Keksa yosh (gipertermiya xavfi) va yosh bolalar"
    ],
    nojoya: {
      "Yurak": "AB pasayishi, taxikardiya, aritmiya, AV-o'tkazuvchanlik sekinlashishi (ayniqsa tez v/v)",
      "Asab tizimi": "Uyquchanlik, bosh aylanishi",
      "Jigar": "Transaminazalar oshishi, sariqlik (uzoq qo'llashda)",
      "Oshqozon-ichak": "Ich qotishi, ko'ngil aynishi"
    },
    dozadan: "Belgilar: ko'rishning ikkilanishi, holsizlik, gipotenziya. Davolash: simptomatik, AB ni qo'llab-quvvatlash.",
    ozarotasir: [
      "Gipotenziv vositalar ta'sirini kuchaytiradi",
      "Levodopa ta'sirini kamaytiradi",
      "MAO inhibitorlari bilan ehtiyotkorlik"
    ],
    qollash: {
      kattalar: "Og'iz orqali 40–60 mg kuniga 3–4 marta; v/m yoki sekin v/v 20–40 mg.",
      bolalar: "Yoshга qarab kamaytirilgan dozada (6 oydan)"
    },
    chiqarish: "Tabletkalar 40 mg; inyeksiya eritmasi 2% (20 mg/ml); rektal svechalar"
  },
  ru: {
    gruppa: "Миотропные спазмолитики (папаверин и производные)",
    farmTasir: "Миотропный спазмолитик, расслабляющий гладкую мускулатуру",
    farmakodinamika: `Папаверин — изохинолиновый алкалоид опия, но без наркотического действия. Ингибирует фосфодиэстеразу, повышая внутриклеточный циклический АМФ (цАМФ) и снижая уровень внутриклеточного кальция, в результате чего гладкие мышцы расслабляются. Оказывает спазмолитическое и сосудорасширяющее действие на гладкую мускулатуру ЖКТ, жёлчных, мочевых путей и сосудов. В высоких дозах замедляет сердечную проводимость.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь (биодоступность вариабельна)",
      tarqalish: "Связь с белками ~90%; широко распределяется",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой в виде метаболитов; T½ ~1–2 ч"
    },
    korsatmalar: [
      "Спазм гладкой мускулатуры ЖКТ (пилороспазм, колит, спастический запор)",
      "Спазм жёлчных и мочевых путей",
      "Спазм периферических и мозговых сосудов",
      "Бронхоспазм (вспомогательно)"
    ],
    qarrshi: [
      "Гиперчувствительность к папаверину",
      "АВ-блокада, тяжёлые нарушения проводимости сердца",
      "Глаукома",
      "Тяжёлая печёночная недостаточность",
      "Пожилой возраст (риск гипертермии) и дети раннего возраста"
    ],
    nojoya: {
      "Сердце": "Снижение АД, тахикардия, аритмия, замедление АВ-проводимости (особенно при быстром в/в)",
      "ЦНС": "Сонливость, головокружение",
      "Печень": "Повышение трансаминаз, желтуха (при длительном применении)",
      "ЖКТ": "Запор, тошнота"
    },
    dozadan: "Симптомы: двоение в глазах, слабость, гипотензия. Лечение: симптоматическое, поддержание АД.",
    ozarotasir: [
      "Усиливает действие гипотензивных средств",
      "Снижает действие леводопы",
      "Осторожно с ингибиторами МАО"
    ],
    qollash: {
      kattalar: "Внутрь 40–60 мг 3–4 раза в день; в/м или медленно в/в 20–40 мг.",
      bolalar: "В сниженной дозе по возрасту (с 6 месяцев)"
    },
    chiqarish: "Таблетки 40 мг; раствор для инъекций 2% (20 мг/мл); ректальные свечи"
  },
  en: {
    gruppa: "Musculotropic antispasmodics (papaverine and derivatives)",
    farmTasir: "Musculotropic antispasmodic that relaxes smooth muscle",
    farmakodinamika: `Papaverine is an isoquinoline opium alkaloid but without narcotic action. It inhibits phosphodiesterase, raising intracellular cyclic AMP (cAMP) and lowering intracellular calcium, so smooth muscle relaxes. It has antispasmodic and vasodilator action on the smooth muscle of the GI tract, biliary and urinary tracts and blood vessels. At high doses it slows cardiac conduction.`,
    farmakokinetika: {
      sorish: "Absorbed orally (variable bioavailability)",
      tarqalish: "Protein binding ~90%; widely distributed",
      metabolizm: "Metabolised in the liver",
      chiqarilish: "Mainly in urine as metabolites; T½ ~1–2 h"
    },
    korsatmalar: [
      "GI smooth muscle spasm (pylorospasm, colitis, spastic constipation)",
      "Biliary and urinary tract spasm",
      "Peripheral and cerebral vascular spasm",
      "Bronchospasm (adjunct)"
    ],
    qarrshi: [
      "Hypersensitivity to papaverine",
      "AV block, severe cardiac conduction disorders",
      "Glaucoma",
      "Severe hepatic impairment",
      "Old age (hyperthermia risk) and young children"
    ],
    nojoya: {
      "Cardiac": "Hypotension, tachycardia, arrhythmia, slowed AV conduction (especially with rapid IV)",
      "CNS": "Drowsiness, dizziness",
      "Hepatic": "Raised transaminases, jaundice (with prolonged use)",
      "Gastrointestinal": "Constipation, nausea"
    },
    dozadan: "Symptoms: double vision, weakness, hypotension. Treatment: symptomatic, support blood pressure.",
    ozarotasir: [
      "Enhances the effect of antihypertensives",
      "Reduces the effect of levodopa",
      "Caution with MAO inhibitors"
    ],
    qollash: {
      kattalar: "Oral 40–60 mg 3–4 times daily; IM or slow IV 20–40 mg.",
      bolalar: "Reduced dose by age (from 6 months)"
    },
    chiqarish: "Tablets 40 mg; injection solution 2% (20 mg/mL); rectal suppositories"
  }
},

// ─── A03AD02 · Drotaverin ─────────────────────────────────────────────────
"A03AD02": {
  uz: {
    gruppa: "Miotrop spazmolitiklar (papaverin hosilalari)",
    farmTasir: "Kuchli miotrop spazmolitik (No-shpa)",
    farmakodinamika: `Drotaverin — papaverinning izoxinolin hosilasi, miotrop spazmolitik. Fosfodiesteraza-4 (PDE4) fermentini tanlab inhibe qilib, hujayra ichidagi siklik AMF (sAMF) ni oshiradi, kaltsiy darajasini kamaytiradi va silliq mushaklarni bo'shashtiradi. Papaverindan kuchliroq va uzoqroq ta'sir qiladi, yurak-tomir tizimiga ta'siri kam. Oshqozon-ichak, o't yo'llari, siydik-tanosil yo'llari va bachadon silliq mushaklari spazmini samarali bartaraf qiladi. Vegetativ asab tizimiga bog'liq emas (antixolinergik emas).`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez va to'liq so'riladi; biofaollik ~65%. Cmax 45–60 daqiqada",
      tarqalish: "Oqsilga bog'lanish yuqori (~95%); silliq mushak to'qimasiga tarqaladi",
      metabolizm: "Jigarда to'liq metabolizmga uchraydi",
      chiqarilish: "Metabolitlar siydik va o't bilan; T½ ~8–10 soat"
    },
    korsatmalar: [
      "O't yo'llari spazmi (xolesistit, xolelitiaz, xolangit)",
      "Siydik yo'llari spazmi (nefrolitiaz, sistit, tenezmlar)",
      "Oshqozon-ichak spazmi (gastrit, enterit, kolit, pilorospazm, spastik qabziyat)",
      "Dismenoreya va bachadon spazmi; tug'ruqda bachadon bo'yni spazmi",
      "Spazmga bog'liq bosh og'rig'i (tension) — yordamchi"
    ],
    qarrshi: [
      "Drotaverinга o'ta sezuvchanlik",
      "Og'ir jigar, buyrak yoki yurak yetishmovchiligi (AV-blokada)",
      "Kardiogen shok, og'ir gipotenziya",
      "1 yoshgacha bolalar; emizish davri (ma'lumot cheklangan)"
    ],
    nojoya: {
      "Yurak": "AB pasayishi, yurak urishi sezgisi (ayniqsa v/v yuborishda)",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, uyqusizlik",
      "Oshqozon-ichak": "Ko'ngil aynishi, ich qotishi",
      "Allergiya": "Toshma, qichishish, Kvinke shishi, kamdan-kam anafilaktik shok (in'eksion shakl)"
    },
    dozadan: "Belgilar: yurak o'tkazuvchanligi buzilishi, AB pasayishi. Davolash: simptomatik, yurak-tomir nazorati.",
    ozarotasir: [
      "Boshqa spazmolitiklar (papaverin, atropin) ta'sirini kuchaytiradi",
      "Levodopa ta'sirini kamaytiradi (rigidlik/tremor kuchayishi mumkin)",
      "Gipotenziv vositalar ta'sirini kuchaytirishi mumkin"
    ],
    qollash: {
      kattalar: "Og'iz orqali 40–80 mg kuniga 2–3 marta. V/m yoki sekin v/v 40–80 mg (o'tkir spazm/sanchiqда); sutkalik maks. 240 mg.",
      bolalar: "1–6 yosh: 40–120 mg/sut; 6 yoshdan: 80–200 mg/sut, 2–5 qabulga bo'lib"
    },
    chiqarish: "Tabletkalar 40 mg, 80 mg; inyeksiya eritmasi 20 mg/ml (2 ml)"
  },
  ru: {
    gruppa: "Миотропные спазмолитики (производные папаверина)",
    farmTasir: "Мощный миотропный спазмолитик (Но-шпа)",
    farmakodinamika: `Дротаверин — изохинолиновое производное папаверина, миотропный спазмолитик. Избирательно ингибирует фосфодиэстеразу-4 (ФДЭ4), повышая внутриклеточный циклический АМФ (цАМФ), снижая уровень кальция и расслабляя гладкие мышцы. Действует сильнее и дольше папаверина, с меньшим влиянием на сердечно-сосудистую систему. Эффективно устраняет спазм гладкой мускулатуры ЖКТ, жёлчных, мочеполовых путей и матки. Не зависит от вегетативной нервной системы (не антихолинергик).`,
    farmakokinetika: {
      sorish: "Быстро и полно всасывается внутрь; биодоступность ~65%. Cmax через 45–60 минут",
      tarqalish: "Высокая связь с белками (~95%); распределяется в гладкомышечную ткань",
      metabolizm: "Полностью метаболизируется в печени",
      chiqarilish: "Метаболиты с мочой и жёлчью; T½ ~8–10 ч"
    },
    korsatmalar: [
      "Спазм жёлчных путей (холецистит, холелитиаз, холангит)",
      "Спазм мочевых путей (нефролитиаз, цистит, тенезмы)",
      "Спазм ЖКТ (гастрит, энтерит, колит, пилороспазм, спастический запор)",
      "Дисменорея и спазм матки; спазм шейки матки в родах",
      "Головная боль напряжения, связанная со спазмом — вспомогательно"
    ],
    qarrshi: [
      "Гиперчувствительность к дротаверину",
      "Тяжёлая печёночная, почечная или сердечная недостаточность (АВ-блокада)",
      "Кардиогенный шок, тяжёлая гипотензия",
      "Дети до 1 года; период лактации (данные ограничены)"
    ],
    nojoya: {
      "Сердце": "Снижение АД, ощущение сердцебиения (особенно при в/в введении)",
      "ЦНС": "Головная боль, головокружение, бессонница",
      "ЖКТ": "Тошнота, запор",
      "Аллергические": "Сыпь, зуд, отёк Квинке, редко анафилактический шок (инъекционная форма)"
    },
    dozadan: "Симптомы: нарушение проводимости сердца, снижение АД. Лечение: симптоматическое, сердечно-сосудистый контроль.",
    ozarotasir: [
      "Усиливает действие других спазмолитиков (папаверин, атропин)",
      "Снижает действие леводопы (возможно усиление ригидности/тремора)",
      "Может усиливать действие гипотензивных средств"
    ],
    qollash: {
      kattalar: "Внутрь 40–80 мг 3 раза в день. В/м или медленно в/в 40–80 мг (при острой колике); макс. 240 мг/сут.",
      bolalar: "1–6 лет: 40–120 мг/сут; с 6 лет: 80–200 мг/сут в 2–5 приёмов"
    },
    chiqarish: "Таблетки 40 мг, 80 мг; раствор для инъекций 20 мг/мл (2 мл)"
  },
  en: {
    gruppa: "Musculotropic antispasmodics (papaverine derivatives)",
    farmTasir: "Potent musculotropic antispasmodic (No-spa)",
    farmakodinamika: `Drotaverine is an isoquinoline derivative of papaverine, a musculotropic antispasmodic. It selectively inhibits phosphodiesterase-4 (PDE4), raising intracellular cyclic AMP (cAMP), lowering calcium and relaxing smooth muscle. It is more potent and longer-acting than papaverine, with less cardiovascular effect. It effectively relieves smooth muscle spasm of the GI, biliary, genitourinary tracts and uterus. It is independent of the autonomic nervous system (not anticholinergic).`,
    farmakokinetika: {
      sorish: "Rapidly and completely absorbed orally; bioavailability ~65%. Cmax in 45–60 minutes",
      tarqalish: "High protein binding (~95%); distributes to smooth muscle tissue",
      metabolizm: "Fully metabolised in the liver",
      chiqarilish: "Metabolites in urine and bile; T½ ~8–10 h"
    },
    korsatmalar: [
      "Biliary tract spasm (cholecystitis, cholelithiasis, cholangitis)",
      "Urinary tract spasm (nephrolithiasis, cystitis, tenesmus)",
      "GI spasm (gastritis, enteritis, colitis, pylorospasm, spastic constipation)",
      "Dysmenorrhoea and uterine spasm; cervical spasm in labour",
      "Tension headache associated with spasm — adjunct"
    ],
    qarrshi: [
      "Hypersensitivity to drotaverine",
      "Severe hepatic, renal or cardiac failure (AV block)",
      "Cardiogenic shock, severe hypotension",
      "Children under 1 year; lactation (limited data)"
    ],
    nojoya: {
      "Cardiac": "Hypotension, palpitations (especially with IV administration)",
      "CNS": "Headache, dizziness, insomnia",
      "Gastrointestinal": "Nausea, constipation",
      "Hypersensitivity": "Rash, itching, angioedema, rarely anaphylactic shock (injectable form)"
    },
    dozadan: "Symptoms: cardiac conduction disturbance, hypotension. Treatment: symptomatic, cardiovascular monitoring.",
    ozarotasir: [
      "Enhances the effect of other antispasmodics (papaverine, atropine)",
      "Reduces the effect of levodopa (may worsen rigidity/tremor)",
      "May enhance the effect of antihypertensives"
    ],
    qollash: {
      kattalar: "Oral 40–80 mg three times daily. IM or slow IV 40–80 mg (for acute colic); max 240 mg/day.",
      bolalar: "1–6 years: 40–120 mg/day; from 6 years: 80–200 mg/day in 2–5 divided doses"
    },
    chiqarish: "Tablets 40 mg, 80 mg; injection solution 20 mg/mL (2 mL)"
  }
},

// ─── A03AX04 · Pinaveriy bromid ───────────────────────────────────────────
"A03AX04": {
  uz: {
    gruppa: "Boshqa funksional ichak spazmolitiklari (kaltsiy kanal blokatori)",
    farmTasir: "Ichakka tanlab ta'sir qiluvchi kaltsiy antagonisti spazmolitik",
    farmakodinamika: `Pinaveriy bromid — to'rtlamchi ammoniyli birikma, oshqozon-ichak silliq mushaklariga tanlab ta'sir qiluvchi kaltsiy kanal blokatori (spazmolitik). Ichak silliq mushak hujayralarига kaltsiy kirishini bloklab, qisqaruvchanlikni va spazmni kamaytiradi. Tanlovchanligi yuqori — yurak-tomir tizimiga ta'siri ahamiyatsiz. To'rtlamchi tuzilishi tufayli kam so'riladi va antixolinergik ta'sir bermaydi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan kam so'riladi (~10%)",
      tarqalish: "Asosan oshqozon-ichak traktida mahalliy to'planadi",
      metabolizm: "Jigarда metabolizmga uchraydi",
      chiqarilish: "Asosan najas bilan"
    },
    korsatmalar: [
      "Tirnashgan ichak sindromi (TIS) — qorin og'rig'i, spazm, ichak harakati buzilishi",
      "O't yo'llari disfunksiyasi bilan bog'liq og'riq",
      "Rentgen/endoskopik tekshiruvga tayyorgarlik (ichak spazmini kamaytirish)"
    ],
    qarrshi: [
      "Pinaveriy bromidga o'ta sezuvchanlik",
      "Bolalar yoshi (ma'lumot cheklangan)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Epigastral noxushlik, ko'ngil aynishi, ich qotishi yoki diareya (kam)",
      "Allergiya": "Toshma, qichishish (kam)",
      "Boshqa": "Qizilo'ngach tirnashishi (yetarli suv bilan ichmaslikda)"
    },
    dozadan: "Past tizimli so'rilish tufayli xavf past; simptomatik davolash.",
    ozarotasir: [
      "Antixolinergiklar bilan ta'sir kuchayishi mumkin (nazariy)"
    ],
    qollash: {
      kattalar: "50 mg kuniga 3 marta yoki 100 mg kuniga 2 marta, ovqat bilan, ko'p suv bilan (yotgan holatda ichmaslik).",
      bolalar: "Tavsiya etilmaydi"
    },
    chiqarish: "Pardali tabletkalar 50 mg, 100 mg"
  },
  ru: {
    gruppa: "Прочие спазмолитики при функциональных заболеваниях кишечника (блокатор кальциевых каналов)",
    farmTasir: "Спазмолитик-антагонист кальция с избирательным действием на кишечник",
    farmakodinamika: `Пинаверия бромид — четвертичное аммониевое соединение, блокатор кальциевых каналов (спазмолитик) с избирательным действием на гладкую мускулатуру ЖКТ. Блокирует вход кальция в гладкомышечные клетки кишечника, снижая сократимость и спазм. Высокоизбирателен — влияние на сердечно-сосудистую систему незначительно. Из-за четвертичной структуры мало всасывается и не даёт антихолинергического действия.`,
    farmakokinetika: {
      sorish: "Мало всасывается из ЖКТ (~10%)",
      tarqalish: "Накапливается преимущественно местно в ЖКТ",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно с калом"
    },
    korsatmalar: [
      "Синдром раздражённого кишечника (СРК) — боль, спазм, нарушение моторики",
      "Боль, связанная с дисфункцией жёлчных путей",
      "Подготовка к рентген/эндоскопическому исследованию (уменьшение спазма)"
    ],
    qarrshi: [
      "Гиперчувствительность к пинаверия бромиду",
      "Детский возраст (данные ограничены)"
    ],
    nojoya: {
      "ЖКТ": "Дискомфорт в эпигастрии, тошнота, запор или диарея (редко)",
      "Аллергические": "Сыпь, зуд (редко)",
      "Прочие": "Раздражение пищевода (при приёме без достаточного количества воды)"
    },
    dozadan: "Из-за низкого системного всасывания риск низкий; симптоматическое лечение.",
    ozarotasir: [
      "Возможно усиление действия с антихолинергиками (теоретически)"
    ],
    qollash: {
      kattalar: "50 мг 3 раза в день или 100 мг 2 раза в день, во время еды, запивая большим количеством воды (не лёжа).",
      bolalar: "Не рекомендуется"
    },
    chiqarish: "Таблетки, покрытые оболочкой, 50 мг, 100 мг"
  },
  en: {
    gruppa: "Other antispasmodics for functional bowel disorders (calcium channel blocker)",
    farmTasir: "Calcium antagonist antispasmodic with selective action on the bowel",
    farmakodinamika: `Pinaverium bromide is a quaternary ammonium compound, a calcium channel blocker (antispasmodic) with selective action on GI smooth muscle. It blocks calcium entry into intestinal smooth muscle cells, reducing contractility and spasm. It is highly selective — its cardiovascular effect is negligible. Owing to its quaternary structure it is poorly absorbed and produces no anticholinergic effect.`,
    farmakokinetika: {
      sorish: "Poorly absorbed from the GI tract (~10%)",
      tarqalish: "Accumulates mainly locally in the GI tract",
      metabolizm: "Metabolised in the liver",
      chiqarilish: "Mainly in faeces"
    },
    korsatmalar: [
      "Irritable bowel syndrome (IBS) — pain, spasm, motility disturbance",
      "Pain associated with biliary tract dysfunction",
      "Preparation for X-ray/endoscopic examination (reducing spasm)"
    ],
    qarrshi: [
      "Hypersensitivity to pinaverium bromide",
      "Childhood (limited data)"
    ],
    nojoya: {
      "Gastrointestinal": "Epigastric discomfort, nausea, constipation or diarrhoea (rare)",
      "Hypersensitivity": "Rash, itching (rare)",
      "Other": "Oesophageal irritation (if taken without enough water)"
    },
    dozadan: "Risk is low due to low systemic absorption; symptomatic treatment.",
    ozarotasir: [
      "Effects may be enhanced with anticholinergics (theoretical)"
    ],
    qollash: {
      kattalar: "50 mg three times daily or 100 mg twice daily, with food, with plenty of water (not lying down).",
      bolalar: "Not recommended"
    },
    chiqarish: "Film-coated tablets 50 mg, 100 mg"
  }
},

// ─── A03AX13 · Simetikon ──────────────────────────────────────────────────
"A03AX13": {
  uz: {
    gruppa: "Gaz haydovchi (antiflatulent) vositalar",
    farmTasir: "Ichakdagi gaz to'planishini kamaytiruvchi vosita",
    farmakodinamika: `Simetikon — dimetilsiloksan va kremniy dioksidi asosidagi inert silikon birikma (gaz haydovchi). Oshqozon-ichak suyuqligi va shilimshig'idagi gaz pufakchalarining yuza tarangligini pasaytiradi; pufakchalar birlashib yorilib, gaz ichak devori orqali so'riladi yoki tabiiy chiqariladi. Meteorizm, qorin shishi va gaz bilan bog'liq og'riqni yengillashtiradi. Kimyoviy inert — so'rilmaydi, fermentlar va mikroflorага ta'sir qilmaydi. Ultratovush/endoskopiyada ko'rinishni yaxshilaydi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan umuman so'rilmaydi",
      tarqalish: "Faqat ichak luminida fizik ta'sir",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "O'zgarmagan holda najas bilan"
    },
    korsatmalar: [
      "Meteorizm, qorin shishi, aerofagiya",
      "Chaqaloqlarda qorin sanchig'i (koliki)",
      "Funksional dispepsiyada gaz simptomlari",
      "Diagnostik tekshiruvlardan (UTT, rentgen, endoskopiya) oldin tayyorgarlik",
      "Yuvuvchi vositalar bilan zaharlanishda ko'piklanishni kamaytirish"
    ],
    qarrshi: [
      "Simetikonga o'ta sezuvchanlik",
      "Ichak obstruksiyasi yoki perforatsiyasi"
    ],
    nojoya: {
      "Umumiy": "Juda yaxshi ko'tariladi; kamdan-kam allergik reaksiya (toshma, qichishish)"
    },
    dozadan: "Inert bo'lgani uchun xavfsiz; maxsus chora talab qilmaydi.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir yo'q (so'rilmaydi)"
    ],
    qollash: {
      kattalar: "40–125 mg har ovqatdan keyin va uxlash oldidan; diagnostikadan oldin maxsus sxema bo'yicha.",
      bolalar: "Chaqaloqlar: 20–40 mg har emizishdan keyin (tomchi/suspenziya)"
    },
    chiqarish: "Kapsulalar, chaynaladigan tabletkalar, emulsiya/tomchilar (40–125 mg)"
  },
  ru: {
    gruppa: "Ветрогонные (антифлатулентные) средства",
    farmTasir: "Средство, уменьшающее скопление газов в кишечнике",
    farmakodinamika: `Симетикон — инертное силиконовое соединение на основе диметилсилоксана и диоксида кремния (ветрогонное). Снижает поверхностное натяжение пузырьков газа в желудочно-кишечной жидкости и слизи; пузырьки сливаются и лопаются, газ всасывается через стенку кишки или выводится естественно. Облегчает метеоризм, вздутие и связанную с газами боль. Химически инертен — не всасывается, не влияет на ферменты и микрофлору. Улучшает визуализацию при УЗИ/эндоскопии.`,
    farmakokinetika: {
      sorish: "Совершенно не всасывается из ЖКТ",
      tarqalish: "Только физическое действие в просвете кишки",
      metabolizm: "Не метаболизируется",
      chiqarilish: "В неизменённом виде с калом"
    },
    korsatmalar: [
      "Метеоризм, вздутие живота, аэрофагия",
      "Кишечные колики у младенцев",
      "Газовые симптомы при функциональной диспепсии",
      "Подготовка к диагностическим исследованиям (УЗИ, рентген, эндоскопия)",
      "Уменьшение пенообразования при отравлении детергентами"
    ],
    qarrshi: [
      "Гиперчувствительность к симетикону",
      "Обструкция или перфорация кишечника"
    ],
    nojoya: {
      "Общие": "Очень хорошо переносится; редко аллергическая реакция (сыпь, зуд)"
    },
    dozadan: "Поскольку инертен, безопасен; специальных мер не требует.",
    ozarotasir: [
      "Клинически значимых взаимодействий нет (не всасывается)"
    ],
    qollash: {
      kattalar: "40–125 мг после каждого приёма пищи и перед сном; перед диагностикой по специальной схеме.",
      bolalar: "Младенцы: 20–40 мг после каждого кормления (капли/суспензия)"
    },
    chiqarish: "Капсулы, жевательные таблетки, эмульсия/капли (40–125 мг)"
  },
  en: {
    gruppa: "Antiflatulent agents",
    farmTasir: "Agent that reduces intestinal gas accumulation",
    farmakodinamika: `Simethicone is an inert silicone compound based on dimethylsiloxane and silicon dioxide (an antiflatulent). It lowers the surface tension of gas bubbles in GI fluid and mucus; the bubbles coalesce and burst, and the gas is absorbed through the bowel wall or expelled naturally. It relieves flatulence, bloating and gas-related pain. It is chemically inert — not absorbed and without effect on enzymes or microflora. It improves visualisation in ultrasound/endoscopy.`,
    farmakokinetika: {
      sorish: "Not absorbed at all from the GI tract",
      tarqalish: "Only a physical action in the bowel lumen",
      metabolizm: "Not metabolised",
      chiqarilish: "Unchanged in faeces"
    },
    korsatmalar: [
      "Flatulence, bloating, aerophagia",
      "Infant colic",
      "Gas symptoms in functional dyspepsia",
      "Preparation for diagnostic examinations (ultrasound, X-ray, endoscopy)",
      "Reducing foaming in detergent poisoning"
    ],
    qarrshi: [
      "Hypersensitivity to simethicone",
      "Bowel obstruction or perforation"
    ],
    nojoya: {
      "General": "Very well tolerated; rarely allergic reaction (rash, itching)"
    },
    dozadan: "Being inert, it is safe; no specific measures needed.",
    ozarotasir: [
      "No clinically significant interactions (not absorbed)"
    ],
    qollash: {
      kattalar: "40–125 mg after each meal and at bedtime; before diagnostics per a special schedule.",
      bolalar: "Infants: 20–40 mg after each feed (drops/suspension)"
    },
    chiqarish: "Capsules, chewable tablets, emulsion/drops (40–125 mg)"
  }
},

// ─── A03BA01 · Atropin sulfat ─────────────────────────────────────────────
"A03BA01": {
  uz: {
    gruppa: "Antixolinergiklar (belladonna alkaloidlari)",
    farmTasir: "M-xolinoblokator (antimuskarin) spazmolitik",
    farmakodinamika: `Atropin — belladonna (Atropa belladonna) tabiiy alkaloidi, raqobatli M-xolinoretseptor blokatori (antimuskarin). Asetilxolinning muskarin retseptorlariga ta'sirini to'sib, silliq mushak tonusi va spazmini kamaytiradi (oshqozon-ichak, o't va siydik yo'llari, bronx), bez sekretsiyasini (so'lak, ter, bronx, oshqozon) kamaytiradi, yurak urishini tezlashtiradi (vagusni bostiradi), ko'z qorachig'ini kengaytiradi (midriaz) va akkomodatsiyani falaj qiladi. Markaziy ta'sirga ham ega (yuqori dozada qo'zg'aluvchanlik).`,
    farmakokinetika: {
      sorish: "Og'iz, parenteral va shilliq pardadan yaxshi so'riladi",
      tarqalish: "To'qimalarga keng tarqaladi, BBO va platsentadan o'tadi",
      metabolizm: "Jigarда qisman metabolizmga uchraydi",
      chiqarilish: "Asosan siydik bilan (50% o'zgarmagan); T½ ~2–4 soat"
    },
    korsatmalar: [
      "Oshqozon-ichak, o't va siydik yo'llari spazmi, sanchiq",
      "Bradikardiya, AV-blokada (yurak vagus ta'sirini kamaytirish)",
      "Anesteziyadan oldin premedikatsiya (sekretsiya va vagal refleksni kamaytirish)",
      "Xolinergik (fosfororganik) moddalar va antixolinesteraza bilan zaharlanish — antidot",
      "Oftalmologiyada midriaz va sikloplegiya"
    ],
    qarrshi: [
      "Atropinga o'ta sezuvchanlik",
      "Yopiq burchakli glaukoma",
      "Prostata gipertrofiyasi va siydik tutilishi",
      "Taxiaritmiya, og'ir yurak yetishmovchiligi",
      "Paralitik ileus, piloroduodenal stenoz, og'ir yarali kolit"
    ],
    nojoya: {
      "Antixolinergik": "Og'iz qurishi, ko'rish xiralashuvi, midriaz, fotofobiya, siydik tutilishi, ich qotishi",
      "Yurak": "Taxikardiya, yurak urishi sezgisi, aritmiya",
      "Asab tizimi": "Bosh og'rig'i, hayajonlanish, gallyutsinatsiyalar, chalkashlik (yuqori dozada)",
      "Boshqa": "Ter ajralishi kamayishi va gipertermiya (ayniqsa bolalarda)"
    },
    dozadan: "«Antixolinergik sindrom»: issiq quruq teri, midriaz, taxikardiya, qo'zg'aluvchanlik, gallyutsinatsiya, koma. Antidot — fizostigmin; simptomatik va qo'llab-quvvatlovchi davolash.",
    ozarotasir: [
      "Boshqa antixolinergik ta'sirli dorilar (trisiklik antidepressantlar, antigistaminlar, neyroleptiklar) ta'sirini kuchaytiradi",
      "Oshqozon-ichak motorikasini sekinlashtirib boshqa dorilar so'rilishini o'zgartiradi"
    ],
    qollash: {
      kattalar: "Spazm: 0,25–1 mg v/m, v/v yoki teri ostiga. Bradikardiya: 0,5–1 mg v/v (kerak bo'lsa takror, maks. 3 mg). FOS zaharlanishida yuqori dozalar (atropinizatsiyagacha).",
      bolalar: "Vaznга qarab 0,01–0,02 mg/kg (premedikatsiya/bradikardiya)"
    },
    chiqarish: "Inyeksiya eritmasi 0,1% (1 mg/ml); ko'z tomchilari 1%; tabletkalar"
  },
  ru: {
    gruppa: "Антихолинергические средства (алкалоиды белладонны)",
    farmTasir: "М-холиноблокатор (антимускариновый) спазмолитик",
    farmakodinamika: `Атропин — природный алкалоид белладонны (Atropa belladonna), конкурентный блокатор М-холинорецепторов (антимускариновый). Блокируя действие ацетилхолина на мускариновые рецепторы, снижает тонус и спазм гладкой мускулатуры (ЖКТ, жёлчных и мочевых путей, бронхов), уменьшает секрецию желёз (слюнных, потовых, бронхиальных, желудочных), учащает сердцебиение (подавляет вагус), расширяет зрачок (мидриаз) и парализует аккомодацию. Обладает и центральным действием (возбуждение в высоких дозах).`,
    farmakokinetika: {
      sorish: "Хорошо всасывается внутрь, парентерально и со слизистых",
      tarqalish: "Широко распределяется, проникает через ГЭБ и плаценту",
      metabolizm: "Частично метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой (50% в неизменённом виде); T½ ~2–4 ч"
    },
    korsatmalar: [
      "Спазм и колика ЖКТ, жёлчных и мочевых путей",
      "Брадикардия, АВ-блокада (снижение вагусного влияния на сердце)",
      "Премедикация перед анестезией (снижение секреции и вагальных рефлексов)",
      "Отравление холинергическими (фосфорорганическими) веществами и антихолинэстеразными — антидот",
      "В офтальмологии мидриаз и циклоплегия"
    ],
    qarrshi: [
      "Гиперчувствительность к атропину",
      "Закрытоугольная глаукома",
      "Гипертрофия простаты и задержка мочи",
      "Тахиаритмия, тяжёлая сердечная недостаточность",
      "Паралитический илеус, пилородуоденальный стеноз, тяжёлый язвенный колит"
    ],
    nojoya: {
      "Антихолинергические": "Сухость во рту, нечёткость зрения, мидриаз, фотофобия, задержка мочи, запор",
      "Сердце": "Тахикардия, сердцебиение, аритмия",
      "ЦНС": "Головная боль, возбуждение, галлюцинации, спутанность (в высоких дозах)",
      "Прочие": "Снижение потоотделения и гипертермия (особенно у детей)"
    },
    dozadan: "«Антихолинергический синдром»: горячая сухая кожа, мидриаз, тахикардия, возбуждение, галлюцинации, кома. Антидот — физостигмин; симптоматическое и поддерживающее лечение.",
    ozarotasir: [
      "Усиливает действие других препаратов с антихолинергическим эффектом (трициклические антидепрессанты, антигистаминные, нейролептики)",
      "Замедляя моторику ЖКТ, изменяет всасывание других препаратов"
    ],
    qollash: {
      kattalar: "Спазм: 0,25–1 мг в/м, в/в или п/к. Брадикардия: 0,5–1 мг в/в (при необходимости повторно, макс. 3 мг). При отравлении ФОС — высокие дозы (до атропинизации).",
      bolalar: "По массе тела 0,01–0,02 мг/кг (премедикация/брадикардия)"
    },
    chiqarish: "Раствор для инъекций 0,1% (1 мг/мл); глазные капли 1%; таблетки"
  },
  en: {
    gruppa: "Anticholinergics (belladonna alkaloids)",
    farmTasir: "Muscarinic antagonist (antimuscarinic) antispasmodic",
    farmakodinamika: `Atropine is a natural belladonna (Atropa belladonna) alkaloid, a competitive muscarinic (M) cholinoreceptor blocker. By blocking acetylcholine at muscarinic receptors it reduces smooth muscle tone and spasm (GI, biliary and urinary tracts, bronchi), decreases glandular secretion (salivary, sweat, bronchial, gastric), increases heart rate (suppressing the vagus), dilates the pupil (mydriasis) and paralyses accommodation. It also has central effects (excitation at high doses).`,
    farmakokinetika: {
      sorish: "Well absorbed orally, parenterally and from mucous membranes",
      tarqalish: "Widely distributed, crosses the blood-brain barrier and placenta",
      metabolizm: "Partly metabolised in the liver",
      chiqarilish: "Mainly in urine (50% unchanged); T½ ~2–4 h"
    },
    korsatmalar: [
      "Spasm and colic of the GI, biliary and urinary tracts",
      "Bradycardia, AV block (reducing vagal influence on the heart)",
      "Premedication before anaesthesia (reducing secretions and vagal reflexes)",
      "Poisoning with cholinergic (organophosphate) agents and anticholinesterases — antidote",
      "Mydriasis and cycloplegia in ophthalmology"
    ],
    qarrshi: [
      "Hypersensitivity to atropine",
      "Closed-angle glaucoma",
      "Prostatic hypertrophy and urinary retention",
      "Tachyarrhythmia, severe heart failure",
      "Paralytic ileus, pyloroduodenal stenosis, severe ulcerative colitis"
    ],
    nojoya: {
      "Anticholinergic": "Dry mouth, blurred vision, mydriasis, photophobia, urinary retention, constipation",
      "Cardiac": "Tachycardia, palpitations, arrhythmia",
      "CNS": "Headache, excitation, hallucinations, confusion (at high doses)",
      "Other": "Reduced sweating and hyperthermia (especially in children)"
    },
    dozadan: "Anticholinergic syndrome: hot dry skin, mydriasis, tachycardia, agitation, hallucinations, coma. Antidote — physostigmine; symptomatic and supportive treatment.",
    ozarotasir: [
      "Enhances other drugs with anticholinergic effect (tricyclic antidepressants, antihistamines, neuroleptics)",
      "By slowing GI motility it alters absorption of other drugs"
    ],
    qollash: {
      kattalar: "Spasm: 0.25–1 mg IM, IV or SC. Bradycardia: 0.5–1 mg IV (repeat if needed, max 3 mg). In organophosphate poisoning — high doses (to atropinisation).",
      bolalar: "By body weight 0.01–0.02 mg/kg (premedication/bradycardia)"
    },
    chiqarish: "Injection solution 0.1% (1 mg/mL); eye drops 1%; tablets"
  }
},

// ─── A03AX · Platifillin ──────────────────────────────────────────────────
"A03AX": {
  uz: {
    gruppa: "Antixolinergik spazmolitiklar (belladonna alkaloidlari)",
    farmTasir: "M-xolinoblokator va miotrop spazmolitik",
    farmakodinamika: `Platifillin — belladonna oilasiga mansub o'simlik (Senecio) alkaloidi. M-xolinoretseptorlarni bloklab (atropinga o'xshash, lekin kuchsizroq), silliq mushak tonusini va spazmini kamaytiradi; bundan tashqari silliq mushaklarga to'g'ridan-to'g'ri miotrop (papaverinsimon) bo'shashtiruvchi ta'sir ham ko'rsatadi. Bez sekretsiyasini kamaytiradi, ko'z qorachig'ini kengaytiradi. Vazomotor markazlarga va periferik tomirlarга ta'sir qilib qon bosimini biroz pasaytiradi. Markaziy ta'siri atropindan kam.`,
    farmakokinetika: {
      sorish: "Parenteral va og'iz orqali so'riladi",
      tarqalish: "To'qimalarga tarqaladi, BBO dan o'tadi",
      metabolizm: "Jigarда metabolizmga uchraydi",
      chiqarilish: "Asosan siydik bilan"
    },
    korsatmalar: [
      "Oshqozon-ichak, o't va siydik yo'llari silliq mushaklari spazmi va sanchig'i",
      "Oshqozon va o'n ikki barmoq ichak yarasi (spazm komponenti)",
      "Bronxospazm (yordamchi)",
      "Periferik va miya tomirlari spazmi, gipertonik kriz (yordamchi)",
      "Oftalmologiyada midriaz (diagnostik)"
    ],
    qarrshi: [
      "Platifillinга o'ta sezuvchanlik",
      "Yopiq burchakli glaukoma",
      "Og'ir jigar va buyrak yetishmovchiligi",
      "Prostata gipertrofiyasi, siydik tutilishi",
      "Paralitik ileus, taxiaritmiya"
    ],
    nojoya: {
      "Antixolinergik": "Og'iz qurishi, ko'rish xiralashuvi, midriaz, siydik tutilishi, ich qotishi",
      "Yurak": "Taxikardiya, yurak urishi sezgisi",
      "Asab tizimi": "Bosh aylanishi, bosh og'rig'i; yuqori dozada qo'zg'aluvchanlik",
      "Boshqa": "Ter ajralishi kamayishi"
    },
    dozadan: "Antixolinergik sindrom (og'iz qurishi, midriaz, taxikardiya, qo'zg'alish). Antidot — fizostigmin/prozerin; simptomatik davolash.",
    ozarotasir: [
      "Boshqa antixolinergiklar (atropin, trisiklik antidepressantlar, antigistaminlar) ta'sirini kuchaytiradi",
      "Oshqozon-ichak motorikasini sekinlashtirib boshqa dorilar so'rilishini o'zgartiradi"
    ],
    qollash: {
      kattalar: "Teri ostiga, v/m yoki og'iz orqali 2–4 mg (0,2% eritma 1–2 ml) kuniga 2–3 marta; o'tkir sanchiqда yagona doza.",
      bolalar: "Yoshга qarab kamaytirilgan dozada (shifokor tavsiyasi bilan)"
    },
    chiqarish: "Inyeksiya eritmasi 0,2% (2 mg/ml); tabletkalar 5 mg"
  },
  ru: {
    gruppa: "Антихолинергические спазмолитики (алкалоиды белладонны)",
    farmTasir: "М-холиноблокатор и миотропный спазмолитик",
    farmakodinamika: `Платифиллин — растительный алкалоид (Senecio) группы белладонны. Блокирует М-холинорецепторы (подобно атропину, но слабее), снижая тонус и спазм гладкой мускулатуры; дополнительно оказывает прямое миотропное (папавериноподобное) расслабляющее действие. Уменьшает секрецию желёз, расширяет зрачок. Влияя на вазомоторные центры и периферические сосуды, несколько снижает АД. Центральное действие меньше, чем у атропина.`,
    farmakokinetika: {
      sorish: "Всасывается парентерально и внутрь",
      tarqalish: "Распределяется в ткани, проникает через ГЭБ",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой"
    },
    korsatmalar: [
      "Спазм и колика гладкой мускулатуры ЖКТ, жёлчных и мочевых путей",
      "Язва желудка и двенадцатиперстной кишки (спазмовый компонент)",
      "Бронхоспазм (вспомогательно)",
      "Спазм периферических и мозговых сосудов, гипертонический криз (вспомогательно)",
      "В офтальмологии мидриаз (диагностический)"
    ],
    qarrshi: [
      "Гиперчувствительность к платифиллину",
      "Закрытоугольная глаукома",
      "Тяжёлая печёночная и почечная недостаточность",
      "Гипертрофия простаты, задержка мочи",
      "Паралитический илеус, тахиаритмия"
    ],
    nojoya: {
      "Антихолинергические": "Сухость во рту, нечёткость зрения, мидриаз, задержка мочи, запор",
      "Сердце": "Тахикардия, сердцебиение",
      "ЦНС": "Головокружение, головная боль; в высоких дозах возбуждение",
      "Прочие": "Снижение потоотделения"
    },
    dozadan: "Антихолинергический синдром (сухость во рту, мидриаз, тахикардия, возбуждение). Антидот — физостигмин/прозерин; симптоматическое лечение.",
    ozarotasir: [
      "Усиливает действие других антихолинергиков (атропин, трициклические антидепрессанты, антигистаминные)",
      "Замедляя моторику ЖКТ, изменяет всасывание других препаратов"
    ],
    qollash: {
      kattalar: "П/к, в/м или внутрь 2–4 мг (0,2% раствор 1–2 мл) 2–3 раза в день; при острой колике однократно.",
      bolalar: "В сниженной дозе по возрасту (по рекомендации врача)"
    },
    chiqarish: "Раствор для инъекций 0,2% (2 мг/мл); таблетки 5 мг"
  },
  en: {
    gruppa: "Anticholinergic antispasmodics (belladonna alkaloids)",
    farmTasir: "Muscarinic antagonist and musculotropic antispasmodic",
    farmakodinamika: `Platyphylline is a plant alkaloid (Senecio) of the belladonna group. It blocks muscarinic (M) cholinoreceptors (like atropine but weaker), reducing smooth muscle tone and spasm; it additionally has a direct musculotropic (papaverine-like) relaxant effect. It decreases glandular secretion and dilates the pupil. Acting on vasomotor centres and peripheral vessels, it slightly lowers blood pressure. Its central effect is less than that of atropine.`,
    farmakokinetika: {
      sorish: "Absorbed parenterally and orally",
      tarqalish: "Distributes to tissues, crosses the blood-brain barrier",
      metabolizm: "Metabolised in the liver",
      chiqarilish: "Mainly in urine"
    },
    korsatmalar: [
      "Spasm and colic of GI, biliary and urinary smooth muscle",
      "Gastric and duodenal ulcer (spasm component)",
      "Bronchospasm (adjunct)",
      "Spasm of peripheral and cerebral vessels, hypertensive crisis (adjunct)",
      "Mydriasis in ophthalmology (diagnostic)"
    ],
    qarrshi: [
      "Hypersensitivity to platyphylline",
      "Closed-angle glaucoma",
      "Severe hepatic and renal impairment",
      "Prostatic hypertrophy, urinary retention",
      "Paralytic ileus, tachyarrhythmia"
    ],
    nojoya: {
      "Anticholinergic": "Dry mouth, blurred vision, mydriasis, urinary retention, constipation",
      "Cardiac": "Tachycardia, palpitations",
      "CNS": "Dizziness, headache; excitation at high doses",
      "Other": "Reduced sweating"
    },
    dozadan: "Anticholinergic syndrome (dry mouth, mydriasis, tachycardia, agitation). Antidote — physostigmine/neostigmine; symptomatic treatment.",
    ozarotasir: [
      "Enhances other anticholinergics (atropine, tricyclic antidepressants, antihistamines)",
      "By slowing GI motility it alters absorption of other drugs"
    ],
    qollash: {
      kattalar: "SC, IM or oral 2–4 mg (0.2% solution 1–2 mL) 2–3 times daily; single dose for acute colic.",
      bolalar: "Reduced dose by age (on medical advice)"
    },
    chiqarish: "Injection solution 0.2% (2 mg/mL); tablets 5 mg"
  }
},

// ─── A03AX12 · Floroglyutsinol ────────────────────────────────────────────
"A03AX12": {
  uz: {
    gruppa: "Boshqa funksional ichak spazmolitiklari (miotrop)",
    farmTasir: "Silliq mushaklarga tanlab ta'sir qiluvchi miotrop spazmolitik",
    farmakodinamika: `Floroglyutsinol (1,3,5-trimetoksibenzol bilan) — miotrop (muskulotrop) spazmolitik. Oshqozon-ichak, o't va siydik-tanosil yo'llari silliq mushaklariga tanlab to'g'ridan-to'g'ri ta'sir qilib spazmni bartaraf qiladi. Antixolinergik ta'siri yo'q, shuning uchun atropinga xos nojo'ya ta'sirlar (og'iz qurishi, ko'rish buzilishi, taxikardiya) kuzatilmaydi va yurak-tomir/ko'z bezovta qilmaydi. Normal mushak tonusiga ta'sir qilmaydi — faqat spazmni yo'qotadi.`,
    farmakokinetika: {
      sorish: "Og'iz va parenteral yo'l bilan so'riladi",
      tarqalish: "Silliq mushak to'qimasiga tarqaladi",
      metabolizm: "Jigarда metabolizmga uchraydi",
      chiqarilish: "Asosan siydik bilan"
    },
    korsatmalar: [
      "Oshqozon-ichak spazmi va og'rig'i (tirnashgan ichak sindromi)",
      "O't yo'llari spazmi va sanchig'i (biliar kolika)",
      "Siydik yo'llari spazmi va sanchig'i (renal kolika)",
      "Ginekologik spazmlar, dismenoreya",
      "Tug'ruqda bachadon bo'yni spazmi"
    ],
    qarrshi: [
      "Floroglyutsinolга o'ta sezuvchanlik"
    ],
    nojoya: {
      "Allergiya": "Toshma, qichishish, eshakemi, kamdan-kam anafilaktik reaksiya (in'eksion shakl)",
      "Boshqa": "Juda yaxshi ko'tariladi; kamdan-kam bosh aylanishi, gipotenziya (v/v)"
    },
    dozadan: "Past toksiklik; simptomatik davolash.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir kam aniqlangan"
    ],
    qollash: {
      kattalar: "Og'iz orqali 80 mg kuniga 2–3 marta; o'tkir sanchiqда 80 mg v/m yoki sekin v/v, kerak bo'lsa takror (sutkalik maks. ~240 mg).",
      bolalar: "Yoshга qarab kamaytirilgan dozada"
    },
    chiqarish: "Tabletkalar 80 mg; og'izda eriydigan tabletkalar; inyeksiya eritmasi 40 mg/4 ml"
  },
  ru: {
    gruppa: "Прочие спазмолитики при функциональных заболеваниях кишечника (миотропные)",
    farmTasir: "Миотропный спазмолитик с избирательным действием на гладкие мышцы",
    farmakodinamika: `Флороглюцинол (с 1,3,5-триметоксибензолом) — миотропный (мускулотропный) спазмолитик. Избирательно и непосредственно действует на гладкую мускулатуру ЖКТ, жёлчных и мочеполовых путей, устраняя спазм. Не обладает антихолинергическим действием, поэтому атропиноподобные побочные эффекты (сухость во рту, нарушение зрения, тахикардия) отсутствуют и нет влияния на сердечно-сосудистую систему/глаза. Не влияет на нормальный мышечный тонус — устраняет только спазм.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь и парентерально",
      tarqalish: "Распределяется в гладкомышечную ткань",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой"
    },
    korsatmalar: [
      "Спазм и боль ЖКТ (синдром раздражённого кишечника)",
      "Спазм и колика жёлчных путей (билиарная колика)",
      "Спазм и колика мочевых путей (почечная колика)",
      "Гинекологические спазмы, дисменорея",
      "Спазм шейки матки в родах"
    ],
    qarrshi: [
      "Гиперчувствительность к флороглюцинолу"
    ],
    nojoya: {
      "Аллергические": "Сыпь, зуд, крапивница, редко анафилактическая реакция (инъекционная форма)",
      "Прочие": "Очень хорошо переносится; редко головокружение, гипотензия (в/в)"
    },
    dozadan: "Низкая токсичность; симптоматическое лечение.",
    ozarotasir: [
      "Клинически значимых взаимодействий выявлено мало"
    ],
    qollash: {
      kattalar: "Внутрь 80 мг 2–3 раза в день; при острой колике 80 мг в/м или медленно в/в, при необходимости повторно (макс. ~240 мг/сут).",
      bolalar: "В сниженной дозе по возрасту"
    },
    chiqarish: "Таблетки 80 мг; таблетки для рассасывания; раствор для инъекций 40 мг/4 мл"
  },
  en: {
    gruppa: "Other antispasmodics for functional bowel disorders (musculotropic)",
    farmTasir: "Musculotropic antispasmodic with selective action on smooth muscle",
    farmakodinamika: `Phloroglucinol (with 1,3,5-trimethoxybenzene) is a musculotropic antispasmodic. It acts selectively and directly on the smooth muscle of the GI, biliary and genitourinary tracts, relieving spasm. It has no anticholinergic action, so atropine-like side effects (dry mouth, visual disturbance, tachycardia) do not occur and there is no cardiovascular/ocular effect. It does not affect normal muscle tone — it relieves only spasm.`,
    farmakokinetika: {
      sorish: "Absorbed orally and parenterally",
      tarqalish: "Distributes to smooth muscle tissue",
      metabolizm: "Metabolised in the liver",
      chiqarilish: "Mainly in urine"
    },
    korsatmalar: [
      "GI spasm and pain (irritable bowel syndrome)",
      "Biliary tract spasm and colic (biliary colic)",
      "Urinary tract spasm and colic (renal colic)",
      "Gynaecological spasms, dysmenorrhoea",
      "Cervical spasm in labour"
    ],
    qarrshi: [
      "Hypersensitivity to phloroglucinol"
    ],
    nojoya: {
      "Hypersensitivity": "Rash, itching, urticaria, rarely anaphylactic reaction (injectable form)",
      "Other": "Very well tolerated; rarely dizziness, hypotension (IV)"
    },
    dozadan: "Low toxicity; symptomatic treatment.",
    ozarotasir: [
      "Few clinically significant interactions identified"
    ],
    qollash: {
      kattalar: "Oral 80 mg 2–3 times daily; for acute colic 80 mg IM or slow IV, repeat if needed (max ~240 mg/day).",
      bolalar: "Reduced dose by age"
    },
    chiqarish: "Tablets 80 mg; orodispersible tablets; injection solution 40 mg/4 mL"
  }
},

// ─── A03BA04 · Belladonna barg ekstrakti ──────────────────────────────────
"A03BA04": {
  uz: {
    gruppa: "Antixolinergiklar (belladonna alkaloidlari)",
    farmTasir: "Tabiiy antixolinergik spazmolitik",
    farmakodinamika: `Belladonna (Atropa belladonna) barg ekstrakti tarkibida atropin, gioshiamin va skopolamin alkaloidlari bo'ladi. M-xolinoretseptorlarni bloklab (antimuskarin), oshqozon-ichak, o't va siydik yo'llari silliq mushaklari tonusi va spazmini kamaytiradi, bez (so'lak, oshqozon, ter) sekretsiyasini pasaytiradi. Atropinga o'xshash, lekin standartlanmagan o'simlik preparati. Asosan spastik holatlar va og'riqda yengillik beradi.`,
    farmakokinetika: {
      sorish: "Og'iz va rektal yo'l bilan so'riladi",
      tarqalish: "To'qimalarga tarqaladi, BBO dan o'tadi",
      metabolizm: "Jigarда metabolizmga uchraydi",
      chiqarilish: "Asosan siydik bilan"
    },
    korsatmalar: [
      "Oshqozon-ichak silliq mushaklari spazmi (spastik kolit, oshqozon yarasi spazmi)",
      "O't yo'llari spazmi va sanchig'i",
      "Bavosil (gemorroy) va anal yoriqlarда spazm va og'riq (svechalar)",
      "Dismenoreya"
    ],
    qarrshi: [
      "Belladonna alkaloidlariga o'ta sezuvchanlik",
      "Yopiq burchakli glaukoma",
      "Prostata gipertrofiyasi, siydik tutilishi",
      "Taxiaritmiya, paralitik ileus",
      "Homiladorlik va emizish davri"
    ],
    nojoya: {
      "Antixolinergik": "Og'iz qurishi, ko'rish xiralashuvi, midriaz, siydik tutilishi, ich qotishi",
      "Yurak": "Taxikardiya, yurak urishi sezgisi",
      "Asab tizimi": "Bosh aylanishi, qo'zg'aluvchanlik (yuqori dozada)",
      "Boshqa": "Ter ajralishi kamayishi, gipertermiya"
    },
    dozadan: "Antixolinergik sindrom. Antidot — fizostigmin; simptomatik davolash.",
    ozarotasir: [
      "Boshqa antixolinergiklar ta'sirini kuchaytiradi",
      "Antatsidlar belladonna alkaloidlari so'rilishini kamaytiradi"
    ],
    qollash: {
      kattalar: "Og'iz orqali ekstrakt 10–15 mg kuniga 2–3 marta; rektal svechalar kuniga 1–2 marta.",
      bolalar: "Tavsiya etilmaydi (yoki faqat shifokor nazoratida)"
    },
    chiqarish: "Tabletkalar (quruq ekstrakt); rektal svechalar; kombinatsiyalangan preparatlar tarkibida"
  },
  ru: {
    gruppa: "Антихолинергические средства (алкалоиды белладонны)",
    farmTasir: "Природный антихолинергический спазмолитик",
    farmakodinamika: `Экстракт листьев белладонны (Atropa belladonna) содержит алкалоиды атропин, гиосциамин и скополамин. Блокируя М-холинорецепторы (антимускариновое действие), снижает тонус и спазм гладкой мускулатуры ЖКТ, жёлчных и мочевых путей, уменьшает секрецию желёз (слюнных, желудочных, потовых). Подобен атропину, но это нестандартизированный растительный препарат. В основном облегчает спастические состояния и боль.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь и ректально",
      tarqalish: "Распределяется в ткани, проникает через ГЭБ",
      metabolizm: "Метаболизируется в печени",
      chiqarilish: "Преимущественно с мочой"
    },
    korsatmalar: [
      "Спазм гладкой мускулатуры ЖКТ (спастический колит, спазм при язве)",
      "Спазм и колика жёлчных путей",
      "Спазм и боль при геморрое и анальных трещинах (свечи)",
      "Дисменорея"
    ],
    qarrshi: [
      "Гиперчувствительность к алкалоидам белладонны",
      "Закрытоугольная глаукома",
      "Гипертрофия простаты, задержка мочи",
      "Тахиаритмия, паралитический илеус",
      "Беременность и период лактации"
    ],
    nojoya: {
      "Антихолинергические": "Сухость во рту, нечёткость зрения, мидриаз, задержка мочи, запор",
      "Сердце": "Тахикардия, сердцебиение",
      "ЦНС": "Головокружение, возбуждение (в высоких дозах)",
      "Прочие": "Снижение потоотделения, гипертермия"
    },
    dozadan: "Антихолинергический синдром. Антидот — физостигмин; симптоматическое лечение.",
    ozarotasir: [
      "Усиливает действие других антихолинергиков",
      "Антациды снижают всасывание алкалоидов белладонны"
    ],
    qollash: {
      kattalar: "Внутрь экстракт 10–15 мг 2–3 раза в день; ректальные свечи 1–2 раза в день.",
      bolalar: "Не рекомендуется (или только под контролем врача)"
    },
    chiqarish: "Таблетки (сухой экстракт); ректальные свечи; в составе комбинированных препаратов"
  },
  en: {
    gruppa: "Anticholinergics (belladonna alkaloids)",
    farmTasir: "Natural anticholinergic antispasmodic",
    farmakodinamika: `Belladonna (Atropa belladonna) leaf extract contains the alkaloids atropine, hyoscyamine and scopolamine. By blocking muscarinic (M) cholinoreceptors (antimuscarinic action) it reduces the tone and spasm of GI, biliary and urinary smooth muscle and decreases glandular secretion (salivary, gastric, sweat). It is similar to atropine but is a non-standardised herbal preparation. It mainly relieves spastic conditions and pain.`,
    farmakokinetika: {
      sorish: "Absorbed orally and rectally",
      tarqalish: "Distributes to tissues, crosses the blood-brain barrier",
      metabolizm: "Metabolised in the liver",
      chiqarilish: "Mainly in urine"
    },
    korsatmalar: [
      "GI smooth muscle spasm (spastic colitis, ulcer-related spasm)",
      "Biliary tract spasm and colic",
      "Spasm and pain in haemorrhoids and anal fissures (suppositories)",
      "Dysmenorrhoea"
    ],
    qarrshi: [
      "Hypersensitivity to belladonna alkaloids",
      "Closed-angle glaucoma",
      "Prostatic hypertrophy, urinary retention",
      "Tachyarrhythmia, paralytic ileus",
      "Pregnancy and lactation"
    ],
    nojoya: {
      "Anticholinergic": "Dry mouth, blurred vision, mydriasis, urinary retention, constipation",
      "Cardiac": "Tachycardia, palpitations",
      "CNS": "Dizziness, excitation (at high doses)",
      "Other": "Reduced sweating, hyperthermia"
    },
    dozadan: "Anticholinergic syndrome. Antidote — physostigmine; symptomatic treatment.",
    ozarotasir: [
      "Enhances other anticholinergics",
      "Antacids reduce absorption of belladonna alkaloids"
    ],
    qollash: {
      kattalar: "Oral extract 10–15 mg 2–3 times daily; rectal suppositories 1–2 times daily.",
      bolalar: "Not recommended (or only under medical supervision)"
    },
    chiqarish: "Tablets (dry extract); rectal suppositories; within combination preparations"
  }
},

// ─── A03DA02 · Metamizol + Pitofenon + Fenpiverin (Spazmalgon) ────────────
"A03DA02": {
  uz: {
    gruppa: "Spazmolitik va analgetik kombinatsiyalar",
    farmTasir: "Spazmolitik-og'riqsizlantiruvchi uchlik kombinatsiya",
    farmakodinamika: `Metamizol natriy, pitofenon va fenpiverin bromid kombinatsiyasi. Metamizol — pirazolon hosilasi, og'riqsizlantiruvchi va isitma tushiruvchi (siklooksigenazani inhibe qilib prostaglandin sintezini kamaytiradi). Pitofenon — papaverinsimon miotrop spazmolitik, silliq mushaklarni to'g'ridan-to'g'ri bo'shashtiradi. Fenpiverin bromid — antixolinergik (M-xolinoblokator), qo'shimcha spazmolitik ta'sir beradi. Uchala komponent birgalikda spazmga bog'liq og'riqni samarali yo'qotadi (analgetik + ikki xil spazmolitik mexanizm).`,
    farmakokinetika: {
      sorish: "Og'iz va parenteral yo'l bilan yaxshi so'riladi",
      tarqalish: "To'qimalarga tarqaladi; metamizol metabolitlari ona sutiga o'tadi",
      metabolizm: "Metamizol jigarда faol metabolitlarga aylanadi",
      chiqarilish: "Asosan siydik bilan metabolitlar shaklida"
    },
    korsatmalar: [
      "Silliq mushak spazmi bilan kechadigan og'riq: renal va biliar kolika",
      "Oshqozon-ichak spazmi (spastik kolit, gastrit)",
      "Dismenoreya (hayz og'rig'i)",
      "Siydik yo'llari spazmi",
      "Operatsiyadan keyingi spastik og'riqlar (qisqa muddat)"
    ],
    qarrshi: [
      "Komponentlarga (ayniqsa pirazolonlar) o'ta sezuvchanlik",
      "Qon yaratilishi buzilishlari (agranulotsitoz, leykopeniya)",
      "Glaukoma, prostata gipertrofiyasi, taxiaritmiya, paralitik ileus",
      "Og'ir jigar/buyrak yetishmovchiligi, glyukoza-6-fosfatdegidrogenaza tanqisligi",
      "Homiladorlik (I va III trimestr) va emizish davri",
      "3 oygacha (yoki 5 kg gacha) chaqaloqlar"
    ],
    nojoya: {
      "Qon tizimi": "Leykopeniya, agranulotsitoz, trombotsitopeniya (metamizol — jiddiy, kam)",
      "Allergiya": "Toshma, eshakemi, Stivens-Johnson/Lyell sindromi, anafilaktik shok (metamizol)",
      "Antixolinergik": "Og'iz qurishi, ter kamayishi, siydik chiqishi qiyinlashuvi, akkomodatsiya parezi",
      "Yurak/qon": "AB pasayishi, taxikardiya",
      "Buyrak": "Siydikning qizg'ish rangga bo'yalishi, interstitsial nefrit (kam)"
    },
    dozadan: "Belgilar: ko'ngil aynishi, qusish, gipotenziya, uyquchanlik, tirishish, agranulotsitoz; antixolinergik belgilar. Davolash: simptomatik, oshqozonni yuvish, qon nazorati.",
    ozarotasir: [
      "Boshqa NSAID, og'riqsizlantiruvchilar bilan toksiklik kuchayadi",
      "Bilvosita antikoagulyantlar, peroral antidiabetiklar ta'sirini kuchaytiradi",
      "Siklosporin konsentratsiyasini kamaytiradi",
      "Boshqa antixolinergiklar bilan fenpiverin ta'siri kuchayadi",
      "Etanol bilan birga tavsiya etilmaydi"
    ],
    qollash: {
      kattalar: "Og'iz orqali 1–2 tabletka kuniga 2–3 marta. V/m yoki sekin v/v 2–5 ml o'tkir og'riqда (kuniga 2 martagacha). Qisqa kurs (3–5 kun).",
      bolalar: "Yoshга va vaznга qarab kamaytirilgan dozada (svechalar/tomchilar; tabletka 12 yoshdan)"
    },
    chiqarish: "Pardali tabletkalar; inyeksiya eritmasi 2 ml, 5 ml"
  },
  ru: {
    gruppa: "Спазмолитические и анальгезирующие комбинации",
    farmTasir: "Спазмолитик-анальгетик тройная комбинация",
    farmakodinamika: `Комбинация метамизола натрия, питофенона и фенпиверина бромида. Метамизол — производное пиразолона, оказывает обезболивающее и жаропонижающее действие (ингибирует циклооксигеназу, снижая синтез простагландинов). Питофенон — папавериноподобный миотропный спазмолитик, прямо расслабляет гладкую мускулатуру. Фенпиверина бромид — антихолинергик (М-холиноблокатор), даёт дополнительное спазмолитическое действие. Вместе три компонента эффективно устраняют боль, связанную со спазмом (анальгетик + два механизма спазмолиза).`,
    farmakokinetika: {
      sorish: "Хорошо всасывается внутрь и парентерально",
      tarqalish: "Распределяется в ткани; метаболиты метамизола проникают в грудное молоко",
      metabolizm: "Метамизол превращается в активные метаболиты в печени",
      chiqarilish: "Преимущественно с мочой в виде метаболитов"
    },
    korsatmalar: [
      "Боль со спазмом гладкой мускулатуры: почечная и билиарная колика",
      "Спазм ЖКТ (спастический колит, гастрит)",
      "Дисменорея (менструальная боль)",
      "Спазм мочевых путей",
      "Послеоперационные спастические боли (кратковременно)"
    ],
    qarrshi: [
      "Гиперчувствительность к компонентам (особенно пиразолонам)",
      "Нарушения кроветворения (агранулоцитоз, лейкопения)",
      "Глаукома, гипертрофия простаты, тахиаритмия, паралитический илеус",
      "Тяжёлая печёночная/почечная недостаточность, дефицит Г6ФД",
      "Беременность (I и III триместр) и период лактации",
      "Дети до 3 месяцев (или до 5 кг)"
    ],
    nojoya: {
      "Кроветворение": "Лейкопения, агранулоцитоз, тромбоцитопения (метамизол — серьёзное, редко)",
      "Аллергические": "Сыпь, крапивница, синдром Стивенса–Джонсона/Лайелла, анафилактический шок (метамизол)",
      "Антихолинергические": "Сухость во рту, снижение потоотделения, затруднение мочеиспускания, парез аккомодации",
      "Сердце/сосуды": "Снижение АД, тахикардия",
      "Почки": "Окрашивание мочи в красноватый цвет, интерстициальный нефрит (редко)"
    },
    dozadan: "Симптомы: тошнота, рвота, гипотензия, сонливость, судороги, агранулоцитоз; антихолинергические признаки. Лечение: симптоматическое, промывание желудка, контроль крови.",
    ozarotasir: [
      "С другими НПВП, анальгетиками усиливается токсичность",
      "Усиливает действие непрямых антикоагулянтов, пероральных антидиабетиков",
      "Снижает концентрацию циклоспорина",
      "С другими антихолинергиками усиливается действие фенпиверина",
      "Не рекомендуется с этанолом"
    ],
    qollash: {
      kattalar: "Внутрь 1–2 таблетки 2–3 раза в день. В/м или медленно в/в 2–5 мл при острой боли (до 2 раз в день). Короткий курс (3–5 дней).",
      bolalar: "В сниженной дозе по возрасту и массе (свечи/капли; таблетки с 12 лет)"
    },
    chiqarish: "Таблетки, покрытые оболочкой; раствор для инъекций 2 мл, 5 мл"
  },
  en: {
    gruppa: "Antispasmodic and analgesic combinations",
    farmTasir: "Antispasmodic-analgesic triple combination",
    farmakodinamika: `A combination of metamizole sodium, pitofenone and fenpiverinium bromide. Metamizole is a pyrazolone derivative with analgesic and antipyretic action (inhibiting cyclooxygenase and reducing prostaglandin synthesis). Pitofenone is a papaverine-like musculotropic antispasmodic that directly relaxes smooth muscle. Fenpiverinium bromide is an anticholinergic (M-cholinoblocker) providing additional antispasmodic action. Together the three components effectively relieve spasm-related pain (analgesic + two antispasmodic mechanisms).`,
    farmakokinetika: {
      sorish: "Well absorbed orally and parenterally",
      tarqalish: "Distributes to tissues; metamizole metabolites enter breast milk",
      metabolizm: "Metamizole is converted to active metabolites in the liver",
      chiqarilish: "Mainly in urine as metabolites"
    },
    korsatmalar: [
      "Pain with smooth muscle spasm: renal and biliary colic",
      "GI spasm (spastic colitis, gastritis)",
      "Dysmenorrhoea (menstrual pain)",
      "Urinary tract spasm",
      "Postoperative spastic pain (short term)"
    ],
    qarrshi: [
      "Hypersensitivity to the components (especially pyrazolones)",
      "Haematopoietic disorders (agranulocytosis, leucopenia)",
      "Glaucoma, prostatic hypertrophy, tachyarrhythmia, paralytic ileus",
      "Severe hepatic/renal impairment, G6PD deficiency",
      "Pregnancy (first and third trimester) and lactation",
      "Infants under 3 months (or under 5 kg)"
    ],
    nojoya: {
      "Haematological": "Leucopenia, agranulocytosis, thrombocytopenia (metamizole — serious, rare)",
      "Hypersensitivity": "Rash, urticaria, Stevens–Johnson/Lyell syndrome, anaphylactic shock (metamizole)",
      "Anticholinergic": "Dry mouth, reduced sweating, difficulty urinating, accommodation paresis",
      "Cardiovascular": "Hypotension, tachycardia",
      "Renal": "Reddish discolouration of urine, interstitial nephritis (rare)"
    },
    dozadan: "Symptoms: nausea, vomiting, hypotension, drowsiness, seizures, agranulocytosis; anticholinergic signs. Treatment: symptomatic, gastric lavage, blood monitoring.",
    ozarotasir: [
      "Toxicity increases with other NSAIDs and analgesics",
      "Enhances the effect of indirect anticoagulants and oral antidiabetics",
      "Reduces ciclosporin concentration",
      "Fenpiverinium effect is enhanced with other anticholinergics",
      "Not recommended with ethanol"
    ],
    qollash: {
      kattalar: "Oral 1–2 tablets 2–3 times daily. IM or slow IV 2–5 mL for acute pain (up to twice daily). Short course (3–5 days).",
      bolalar: "Reduced dose by age and weight (suppositories/drops; tablets from 12 years)"
    },
    chiqarish: "Film-coated tablets; injection solution 2 mL, 5 mL"
  }
},

// ─── A03FA01 · Metoklopramid ──────────────────────────────────────────────
"A03FA01": {
  uz: {
    gruppa: "Prokinetiklar (qusishga qarshi, dofamin antagonisti)",
    farmTasir: "Ichak harakatini kuchaytiruvchi va qusishga qarshi vosita",
    farmakodinamika: `Metoklopramid — markaziy va periferik dofamin D2-retseptor antagonisti, prokinetik va antiemetik. Miya qusish markazidagi xemoretseptor trigger zonasi (CTZ) dofamin retseptorlarini bloklab qusishni bostiradi; yuqori dozada serotonin (5-HT3) retseptorlariga ham ta'sir qiladi. Periferiyada oshqozon va yuqori ichak harakatini kuchaytiradi, oshqozon bo'shashini tezlashtiradi, pastki qizilo'ngach sfinkteri tonusini oshiradi, pilorus va o'n ikki barmoq ichakni bo'shashtiradi — reflyuks va ko'ngil aynishini kamaytiradi. BBO dan o'tadi (ekstrapiramidal ta'sir xavfi).`,
    farmakokinetika: {
      sorish: "Og'iz orqali tez so'riladi; biofaollik ~80%. Cmax 1–2 soatда",
      tarqalish: "Oqsilga bog'lanish ~30%; BBO va platsentadan o'tadi, ona sutiga chiqadi",
      metabolizm: "Jigarда qisman metabolizmga uchraydi",
      chiqarilish: "Asosan buyrak orqali; T½ 4–6 soat (buyrak yetishmovchiligida uzayadi)"
    },
    korsatmalar: [
      "Turli kelib chiqishli ko'ngil aynishi va qusish (jumladan kimyoterapiya, nurlanish, operatsiyadan keyin, migren)",
      "Diabetik gastroparez, oshqozon bo'shashining sustligi",
      "Gastroezofageal reflyuks, funksional dispepsiya",
      "Diagnostik tekshiruvlarda (zond, rentgen) oshqozon-ichak harakatini tezlashtirish"
    ],
    qarrshi: [
      "Metoklopramidga o'ta sezuvchanlik",
      "Oshqozon-ichak qon ketishi, mexanik obstruksiya yoki perforatsiya",
      "Feoxromotsitoma (gipertonik kriz xavfi)",
      "Epilepsiya, ekstrapiramidal buzilishlar, Parkinson kasalligi",
      "Prolaktinoma; 1 yoshgacha bolalar"
    ],
    nojoya: {
      "Asab tizimi": "Ekstrapiramidal buzilishlar (distoniya, akatiziya, ayniqsa yoshlarda va katta dozada), uyquchanlik, charchoq, kech diskineziya (uzoq qo'llashda)",
      "Endokrin": "Giperprolaktinemiya, galaktoreya, ginekomastiya, menstrual buzilishlar",
      "Oshqozon-ichak": "Diareya, og'iz qurishi",
      "Yurak": "AB pasayishi yoki oshishi, kamdan-kam aritmiya (v/v tez yuborishda)",
      "Boshqa": "Neyroleptik malign sindrom (kam, lekin jiddiy)"
    },
    dozadan: "Belgilar: ekstrapiramidal buzilishlar, uyquchanlik, chalkashlik. Davolash: antixolinergiklar (biperiden) yoki benzodiazepinlar (distoniyada), simptomatik.",
    ozarotasir: [
      "Markaziy depressantlar (alkogol, sedativ, opioidlar) ta'sirini kuchaytiradi",
      "Antixolinergiklar va opioidlar prokinetik ta'sirini susaytiradi",
      "Neyroleptiklar bilan ekstrapiramidal xavf oshadi",
      "Levodopa bilan o'zaro antagonizm",
      "Digoksin, siklosporin, paratsetamol so'rilishini o'zgartiradi"
    ],
    qollash: {
      kattalar: "10 mg kuniga 3 marta ovqatdan 30 daqiqa oldin (maks. 30 mg/sut, 5 kungacha). V/m yoki sekin v/v 10 mg. Buyrak yetishmovchiligida doza kamaytiriladi.",
      bolalar: "1 yoshdan: 0,1–0,15 mg/kg kuniga 3 martagacha (qattiq cheklov, ekstrapiramidal xavf)"
    },
    chiqarish: "Tabletkalar 10 mg; inyeksiya eritmasi 5 mg/ml (2 ml); ichish uchun eritma"
  },
  ru: {
    gruppa: "Прокинетики (противорвотные, антагонисты дофамина)",
    farmTasir: "Средство, усиливающее моторику ЖКТ и противорвотное",
    farmakodinamika: `Метоклопрамид — центральный и периферический антагонист дофаминовых D2-рецепторов, прокинетик и противорвотное. Блокирует дофаминовые рецепторы хеморецепторной триггерной зоны (ХТЗ) рвотного центра, подавляя рвоту; в высоких дозах влияет и на серотониновые (5-HT3) рецепторы. На периферии усиливает моторику желудка и верхних отделов кишечника, ускоряет опорожнение желудка, повышает тонус нижнего пищеводного сфинктера, расслабляет привратник и двенадцатиперстную кишку — уменьшая рефлюкс и тошноту. Проникает через ГЭБ (риск экстрапирамидных эффектов).`,
    farmakokinetika: {
      sorish: "Быстро всасывается внутрь; биодоступность ~80%. Cmax через 1–2 ч",
      tarqalish: "Связь с белками ~30%; проникает через ГЭБ и плаценту, в грудное молоко",
      metabolizm: "Частично метаболизируется в печени",
      chiqarilish: "Преимущественно почками; T½ 4–6 ч (удлиняется при почечной недостаточности)"
    },
    korsatmalar: [
      "Тошнота и рвота различного генеза (химиотерапия, лучевая терапия, послеоперационная, мигрень)",
      "Диабетический гастропарез, замедленное опорожнение желудка",
      "Гастроэзофагеальный рефлюкс, функциональная диспепсия",
      "Ускорение моторики ЖКТ при диагностических исследованиях (зондирование, рентген)"
    ],
    qarrshi: [
      "Гиперчувствительность к метоклопрамиду",
      "Желудочно-кишечное кровотечение, механическая обструкция или перфорация",
      "Феохромоцитома (риск гипертонического криза)",
      "Эпилепсия, экстрапирамидные нарушения, болезнь Паркинсона",
      "Пролактинома; дети до 1 года"
    ],
    nojoya: {
      "ЦНС": "Экстрапирамидные нарушения (дистония, акатизия, особенно у молодых и при высоких дозах), сонливость, утомляемость, поздняя дискинезия (при длительном применении)",
      "Эндокринные": "Гиперпролактинемия, галакторея, гинекомастия, нарушения менструации",
      "ЖКТ": "Диарея, сухость во рту",
      "Сердце": "Снижение или повышение АД, редко аритмия (при быстром в/в)",
      "Прочие": "Нейролептический злокачественный синдром (редко, но серьёзно)"
    },
    dozadan: "Симптомы: экстрапирамидные нарушения, сонливость, спутанность. Лечение: антихолинергики (бипериден) или бензодиазепины (при дистонии), симптоматическое.",
    ozarotasir: [
      "Усиливает действие центральных депрессантов (алкоголь, седативные, опиоиды)",
      "Антихолинергики и опиоиды ослабляют прокинетическое действие",
      "С нейролептиками повышается экстрапирамидный риск",
      "Антагонизм с леводопой",
      "Изменяет всасывание дигоксина, циклоспорина, парацетамола"
    ],
    qollash: {
      kattalar: "10 мг 3 раза в день за 30 минут до еды (макс. 30 мг/сут, до 5 дней). В/м или медленно в/в 10 мг. При почечной недостаточности дозу снижают.",
      bolalar: "С 1 года: 0,1–0,15 мг/кг до 3 раз в день (строгое ограничение, экстрапирамидный риск)"
    },
    chiqarish: "Таблетки 10 мг; раствор для инъекций 5 мг/мл (2 мл); раствор для приёма внутрь"
  },
  en: {
    gruppa: "Prokinetics (antiemetic, dopamine antagonist)",
    farmTasir: "Agent that enhances GI motility and is antiemetic",
    farmakodinamika: `Metoclopramide is a central and peripheral dopamine D2-receptor antagonist, a prokinetic and antiemetic. It blocks dopamine receptors of the chemoreceptor trigger zone (CTZ) of the vomiting centre, suppressing emesis; at high doses it also affects serotonin (5-HT3) receptors. Peripherally it enhances gastric and upper intestinal motility, accelerates gastric emptying, increases lower oesophageal sphincter tone and relaxes the pylorus and duodenum — reducing reflux and nausea. It crosses the blood-brain barrier (risk of extrapyramidal effects).`,
    farmakokinetika: {
      sorish: "Rapidly absorbed orally; bioavailability ~80%. Cmax in 1–2 h",
      tarqalish: "Protein binding ~30%; crosses the blood-brain barrier and placenta, enters breast milk",
      metabolizm: "Partly metabolised in the liver",
      chiqarilish: "Mainly renally; T½ 4–6 h (prolonged in renal impairment)"
    },
    korsatmalar: [
      "Nausea and vomiting of various origin (chemotherapy, radiotherapy, postoperative, migraine)",
      "Diabetic gastroparesis, delayed gastric emptying",
      "Gastro-oesophageal reflux, functional dyspepsia",
      "Accelerating GI motility during diagnostic procedures (intubation, X-ray)"
    ],
    qarrshi: [
      "Hypersensitivity to metoclopramide",
      "GI bleeding, mechanical obstruction or perforation",
      "Phaeochromocytoma (risk of hypertensive crisis)",
      "Epilepsy, extrapyramidal disorders, Parkinson's disease",
      "Prolactinoma; children under 1 year"
    ],
    nojoya: {
      "CNS": "Extrapyramidal disorders (dystonia, akathisia, especially in the young and at high doses), drowsiness, fatigue, tardive dyskinesia (with prolonged use)",
      "Endocrine": "Hyperprolactinaemia, galactorrhoea, gynaecomastia, menstrual disturbances",
      "Gastrointestinal": "Diarrhoea, dry mouth",
      "Cardiac": "Hypotension or hypertension, rarely arrhythmia (with rapid IV)",
      "Other": "Neuroleptic malignant syndrome (rare but serious)"
    },
    dozadan: "Symptoms: extrapyramidal disorders, drowsiness, confusion. Treatment: anticholinergics (biperiden) or benzodiazepines (for dystonia), symptomatic.",
    ozarotasir: [
      "Enhances central depressants (alcohol, sedatives, opioids)",
      "Anticholinergics and opioids weaken the prokinetic effect",
      "Extrapyramidal risk increases with neuroleptics",
      "Antagonism with levodopa",
      "Alters absorption of digoxin, ciclosporin, paracetamol"
    ],
    qollash: {
      kattalar: "10 mg three times daily 30 minutes before meals (max 30 mg/day, up to 5 days). IM or slow IV 10 mg. Reduce dose in renal impairment.",
      bolalar: "From 1 year: 0.1–0.15 mg/kg up to three times daily (strict limit, extrapyramidal risk)"
    },
    chiqarish: "Tablets 10 mg; injection solution 5 mg/mL (2 mL); oral solution"
  }
},

// ─── A03FA03 · Domperidon ─────────────────────────────────────────────────
"A03FA03": {
  uz: {
    gruppa: "Prokinetiklar (periferik dofamin antagonisti)",
    farmTasir: "Ichak harakatini kuchaytiruvchi va qusishga qarshi vosita",
    farmakodinamika: `Domperidon — periferik dofamin D2-retseptor antagonisti, prokinetik va antiemetik. Metoklopramiddan farqli o'laroq qon-miya to'sig'idan deyarli o'tmaydi, shuning uchun ekstrapiramidal nojo'ya ta'sirlari kam. Oshqozon va o'n ikki barmoq ichak harakatini kuchaytiradi, oshqozon bo'shashini tezlashtiradi, antroduodenal koordinatsiyani yaxshilaydi va pastki qizilo'ngach sfinkteri tonusini oshiradi. Miya qusish markazidagi xemoretseptor trigger zonasi (BBO tashqarisida joylashgan) dofamin retseptorlarini bloklab qusishni bostiradi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali so'riladi, lekin biofaollik past (~15%) — birinchi o'tish effekti. Oshqozon kislotaliligi pasaysa so'rilish kamayadi",
      tarqalish: "Oqsilga bog'lanish ~90%; BBO dan deyarli o'tmaydi",
      metabolizm: "Jigarда CYP3A4 orqali to'liq metabolizmga uchraydi",
      chiqarilish: "Metabolitlar najas va siydik bilan; T½ ~7–9 soat"
    },
    korsatmalar: [
      "Ko'ngil aynishi va qusish (jumladan dofaminergik agonistlar — levodopa, bromokriptin bilan bog'liq)",
      "Funksional dispepsiya, oshqozon bo'shashining sustligi",
      "Gastroezofageal reflyuks simptomlari (to'lqinlanish, kekirish, epigastral noxushlik)",
      "Diabetik va idiopatik gastroparez"
    ],
    qarrshi: [
      "Domperidonga o'ta sezuvchanlik",
      "Prolaktin ishlab chiqaruvchi gipofiz o'smasi (prolaktinoma)",
      "Oshqozon-ichak qon ketishi, mexanik obstruksiya yoki perforatsiya",
      "QT intervali uzayishi, sezilarli elektrolit buzilishlari yoki yurak kasalliklari",
      "Og'ir jigar yetishmovchiligi; CYP3A4 ni kuchli inhibe qiluvchilar bilan birga"
    ],
    nojoya: {
      "Endokrin": "Giperprolaktinemiya, galaktoreya, ginekomastiya, menstrual buzilishlar",
      "Yurak": "QT intervalining uzayishi, jiddiy aritmiya va to'satdan yurak o'limi xavfi (ayniqsa katta dozada, keksalarда)",
      "Oshqozon-ichak": "Og'iz qurishi, ich qotishi yoki diareya, qorin spazmlari",
      "Asab tizimi": "Bosh og'rig'i; ekstrapiramidal buzilishlar juda kam (BBO dan o'tmaydi)"
    },
    dozadan: "Belgilar: uyquchanlik, dezoriyentatsiya, ekstrapiramidal reaksiyalar (kam), aritmiya. Davolash: simptomatik, yurak nazorati; antixolinergiklar (ekstrapiramidalда).",
    ozarotasir: [
      "CYP3A4 inhibitorlari (ketokonazol, eritromitsin, ritonavir) — domperidon konsentratsiyasi va QT xavfini oshiradi (qarshi ko'rsatma)",
      "QT uzaytiruvchi boshqa preparatlar bilan sinergistik xavf",
      "Antixolinergiklar va opioidlar prokinetik ta'sirini susaytiradi",
      "Oshqozon kislotasini kamaytiruvchilar (PPI, H2-blokerlar, antatsidlar) so'rilishini kamaytiradi"
    ],
    qollash: {
      kattalar: "10 mg kuniga 3 martagacha ovqatdan 15–30 daqiqa oldin; maks. 30 mg/sut, eng qisqa muddat (odatda ≤7 kun).",
      bolalar: "12 yoshdan va ≥35 kg: 10 mg kuniga 3 martagacha (kichik yoshda faqat maxsus ko'rsatma bilan, vaznга qarab)"
    },
    chiqarish: "Tabletkalar 10 mg; og'izda eriydigan tabletkalar; ichish uchun suspenziya 1 mg/ml"
  },
  ru: {
    gruppa: "Прокинетики (периферический антагонист дофамина)",
    farmTasir: "Средство, усиливающее моторику ЖКТ и противорвотное",
    farmakodinamika: `Домперидон — периферический антагонист дофаминовых D2-рецепторов, прокинетик и противорвотное. В отличие от метоклопрамида почти не проникает через гематоэнцефалический барьер, поэтому экстрапирамидные побочные эффекты редки. Усиливает моторику желудка и двенадцатиперстной кишки, ускоряет опорожнение желудка, улучшает антродуоденальную координацию и повышает тонус нижнего пищеводного сфинктера. Блокирует дофаминовые рецепторы хеморецепторной триггерной зоны (расположенной вне ГЭБ), подавляя рвоту.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь, но биодоступность низкая (~15%) — эффект первого прохождения. При снижении кислотности желудка всасывание уменьшается",
      tarqalish: "Связь с белками ~90%; почти не проникает через ГЭБ",
      metabolizm: "Полностью метаболизируется в печени через CYP3A4",
      chiqarilish: "Метаболиты с калом и мочой; T½ ~7–9 ч"
    },
    korsatmalar: [
      "Тошнота и рвота (в т.ч. связанная с дофаминергическими агонистами — леводопа, бромокриптин)",
      "Функциональная диспепсия, замедленное опорожнение желудка",
      "Симптомы гастроэзофагеального рефлюкса (регургитация, отрыжка, дискомфорт в эпигастрии)",
      "Диабетический и идиопатический гастропарез"
    ],
    qarrshi: [
      "Гиперчувствительность к домперидону",
      "Пролактинсекретирующая опухоль гипофиза (пролактинома)",
      "Желудочно-кишечное кровотечение, механическая обструкция или перфорация",
      "Удлинение QT, выраженные электролитные нарушения или болезни сердца",
      "Тяжёлая печёночная недостаточность; одновременно с сильными ингибиторами CYP3A4"
    ],
    nojoya: {
      "Эндокринные": "Гиперпролактинемия, галакторея, гинекомастия, нарушения менструации",
      "Сердце": "Удлинение QT, риск серьёзных аритмий и внезапной сердечной смерти (особенно при высоких дозах, у пожилых)",
      "ЖКТ": "Сухость во рту, запор или диарея, спазмы в животе",
      "ЦНС": "Головная боль; экстрапирамидные нарушения очень редки (не проникает через ГЭБ)"
    },
    dozadan: "Симптомы: сонливость, дезориентация, экстрапирамидные реакции (редко), аритмия. Лечение: симптоматическое, контроль сердца; антихолинергики (при экстрапирамидных).",
    ozarotasir: [
      "Ингибиторы CYP3A4 (кетоконазол, эритромицин, ритонавир) — повышают концентрацию домперидона и риск QT (противопоказание)",
      "Синергический риск с другими препаратами, удлиняющими QT",
      "Антихолинергики и опиоиды ослабляют прокинетическое действие",
      "Препараты, снижающие кислотность (ИПП, H2-блокаторы, антациды), снижают всасывание"
    ],
    qollash: {
      kattalar: "10 мг до 3 раз в день за 15–30 минут до еды; макс. 30 мг/сут, кратчайший срок (обычно ≤7 дней).",
      bolalar: "С 12 лет и ≥35 кг: 10 мг до 3 раз в день (в младшем возрасте только по особым показаниям, по массе тела)"
    },
    chiqarish: "Таблетки 10 мг; таблетки, диспергируемые во рту; суспензия для приёма внутрь 1 мг/мл"
  },
  en: {
    gruppa: "Prokinetics (peripheral dopamine antagonist)",
    farmTasir: "Agent that enhances GI motility and is antiemetic",
    farmakodinamika: `Domperidone is a peripheral dopamine D2-receptor antagonist, a prokinetic and antiemetic. Unlike metoclopramide it barely crosses the blood-brain barrier, so extrapyramidal side effects are rare. It enhances gastric and duodenal motility, accelerates gastric emptying, improves antroduodenal coordination and increases lower oesophageal sphincter tone. It blocks dopamine receptors of the chemoreceptor trigger zone (located outside the BBB), suppressing emesis.`,
    farmakokinetika: {
      sorish: "Absorbed orally but with low bioavailability (~15%) — first-pass effect. Absorption decreases when gastric acidity is reduced",
      tarqalish: "Protein binding ~90%; barely crosses the blood-brain barrier",
      metabolizm: "Fully metabolised in the liver via CYP3A4",
      chiqarilish: "Metabolites in faeces and urine; T½ ~7–9 h"
    },
    korsatmalar: [
      "Nausea and vomiting (including that associated with dopaminergic agonists — levodopa, bromocriptine)",
      "Functional dyspepsia, delayed gastric emptying",
      "Gastro-oesophageal reflux symptoms (regurgitation, belching, epigastric discomfort)",
      "Diabetic and idiopathic gastroparesis"
    ],
    qarrshi: [
      "Hypersensitivity to domperidone",
      "Prolactin-secreting pituitary tumour (prolactinoma)",
      "GI bleeding, mechanical obstruction or perforation",
      "QT prolongation, significant electrolyte disturbances or cardiac disease",
      "Severe hepatic impairment; concomitant strong CYP3A4 inhibitors"
    ],
    nojoya: {
      "Endocrine": "Hyperprolactinaemia, galactorrhoea, gynaecomastia, menstrual disturbances",
      "Cardiac": "QT prolongation, risk of serious arrhythmias and sudden cardiac death (especially at high doses, in the elderly)",
      "Gastrointestinal": "Dry mouth, constipation or diarrhoea, abdominal cramps",
      "CNS": "Headache; extrapyramidal disorders very rare (does not cross the BBB)"
    },
    dozadan: "Symptoms: drowsiness, disorientation, extrapyramidal reactions (rare), arrhythmia. Treatment: symptomatic, cardiac monitoring; anticholinergics (for extrapyramidal).",
    ozarotasir: [
      "CYP3A4 inhibitors (ketoconazole, erythromycin, ritonavir) — raise domperidone concentration and QT risk (contraindication)",
      "Synergistic risk with other QT-prolonging drugs",
      "Anticholinergics and opioids weaken the prokinetic effect",
      "Acid-reducing drugs (PPIs, H2 blockers, antacids) reduce absorption"
    ],
    qollash: {
      kattalar: "10 mg up to three times daily 15–30 minutes before meals; max 30 mg/day, shortest duration (usually ≤7 days).",
      bolalar: "From 12 years and ≥35 kg: 10 mg up to three times daily (younger only on special indication, by body weight)"
    },
    chiqarish: "Tablets 10 mg; orodispersible tablets; oral suspension 1 mg/mL"
  }
},

// ─── A04AA01 · Ondansetron ────────────────────────────────────────────────
"A04AA01": {
  uz: {
    gruppa: "Qusishga qarshi vositalar (5-HT3 retseptor antagonistlari)",
    farmTasir: "Kuchli antiemetik (serotonin antagonisti)",
    farmakodinamika: `Ondansetron — tanlab ta'sir qiluvchi serotonin 5-HT3-retseptor antagonisti. Kimyoterapiya va nurlanish ingichka ichak enterоxromaffin hujayralaridan serotonin (5-HT) ajralishiga sabab bo'ladi; serotonin afferent vagus nervining 5-HT3 retseptorlarini qo'zg'atib qusish refleksini ishga tushiradi. Ondansetron ham periferik (vagus afferentlari), ham markaziy (xemoretseptor trigger zonasi) 5-HT3 retseptorlarini bloklab qusishni samarali oldini oladi. Ekstrapiramidal ta'sir bermaydi va dofamin retseptorlariga ta'sir qilmaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali yaxshi so'riladi; biofaollik ~60% (birinchi o'tish effekti). Cmax ~1,5 soatда",
      tarqalish: "Oqsilga bog'lanish 70–76%; to'qimalarga tarqaladi",
      metabolizm: "Jigarда CYP3A4, CYP2D6, CYP1A2 orqali keng metabolizmga uchraydi",
      chiqarilish: "Metabolitlar asosan siydik bilan; T½ ~3–5 soat (keksalar/jigar yetishmovchiligida uzayadi)"
    },
    korsatmalar: [
      "Kimyoterapiya keltirib chiqargan ko'ngil aynishi va qusish (CINV)",
      "Nurlanish terapiyasi bilan bog'liq qusish",
      "Operatsiyadan keyingi ko'ngil aynishi va qusish (PONV) profilaktikasi va davosi"
    ],
    qarrshi: [
      "Ondansetron yoki boshqa setronlarga o'ta sezuvchanlik",
      "Apomorfin bilan birga qo'llash (og'ir gipotenziya, hushdan ketish)",
      "Tug'ma uzun QT sindromi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi (ko'p), og'iz qurligi",
      "Asab tizimi": "Bosh og'rig'i, bosh aylanishi, issiqlik to'lqini sezgisi",
      "Yurak": "QT intervalining uzayishi, aritmiya (katta dozada/v/v); bradikardiya, gipotenziya",
      "Jigar": "Transaminazalarning vaqtincha oshishi",
      "Allergiya": "Toshma, kamdan-kam anafilaksiya"
    },
    dozadan: "Belgilar: ko'rishning buzilishi, og'ir ich qotishi, gipotenziya, QT uzayishi, vazovagal sinkope. Davolash: simptomatik, yurak nazorati.",
    ozarotasir: [
      "QT uzaytiruvchi va elektrolitlarga ta'sir qiluvchi preparatlar (antiaritmiklar, ba'zi antibiotiklar) — aritmiya xavfi oshadi",
      "Kuchli CYP3A4 induktorlari (rifampitsin, fenitoin, karbamazepin) ondansetron konsentratsiyasini kamaytiradi",
      "Apomorfin — qarshi ko'rsatma",
      "Serotoninergik dorilar bilan serotonin sindromi xavfi"
    ],
    qollash: {
      kattalar: "Kimyoterapiyada: 8 mg og'iz orqali yoki v/v davolashdan 30–60 daqiqa oldin, keyin 8 mg har 8–12 soatda. PONV: 4 mg v/v induktsiyada. Maks. sutkalik doza odatda 16 mg (QT xavfi).",
      bolalar: "Vaznга/yuzaга qarab 0,1–0,15 mg/kg v/v (maks. 8 mg)"
    },
    chiqarish: "Tabletkalar 4 mg, 8 mg; og'izda eriydigan tabletkalar; inyeksiya eritmasi 2 mg/ml; sirop"
  },
  ru: {
    gruppa: "Противорвотные средства (антагонисты 5-HT3-рецепторов)",
    farmTasir: "Мощный противорвотный препарат (антагонист серотонина)",
    farmakodinamika: `Ондансетрон — селективный антагонист серотониновых 5-HT3-рецепторов. Химиотерапия и облучение вызывают высвобождение серотонина (5-HT) из энтерохромаффинных клеток тонкой кишки; серотонин возбуждает 5-HT3-рецепторы афферентного блуждающего нерва, запуская рвотный рефлекс. Ондансетрон блокирует как периферические (афференты вагуса), так и центральные (хеморецепторная триггерная зона) 5-HT3-рецепторы, эффективно предотвращая рвоту. Не вызывает экстрапирамидных эффектов и не влияет на дофаминовые рецепторы.`,
    farmakokinetika: {
      sorish: "Хорошо всасывается внутрь; биодоступность ~60% (эффект первого прохождения). Cmax ~1,5 ч",
      tarqalish: "Связь с белками 70–76%; распределяется в ткани",
      metabolizm: "Широко метаболизируется в печени через CYP3A4, CYP2D6, CYP1A2",
      chiqarilish: "Метаболиты преимущественно с мочой; T½ ~3–5 ч (удлиняется у пожилых/при печёночной недостаточности)"
    },
    korsatmalar: [
      "Тошнота и рвота, вызванные химиотерапией (CINV)",
      "Рвота, связанная с лучевой терапией",
      "Профилактика и лечение послеоперационной тошноты и рвоты (PONV)"
    ],
    qarrshi: [
      "Гиперчувствительность к ондансетрону или другим сетронам",
      "Одновременный приём апоморфина (тяжёлая гипотензия, потеря сознания)",
      "Врождённый синдром удлинённого QT (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Запор (часто), сухость во рту",
      "ЦНС": "Головная боль, головокружение, ощущение прилива жара",
      "Сердце": "Удлинение QT, аритмия (при высоких дозах/в/в); брадикардия, гипотензия",
      "Печень": "Транзиторное повышение трансаминаз",
      "Аллергические": "Сыпь, редко анафилаксия"
    },
    dozadan: "Симптомы: нарушение зрения, тяжёлый запор, гипотензия, удлинение QT, вазовагальный обморок. Лечение: симптоматическое, контроль сердца.",
    ozarotasir: [
      "Препараты, удлиняющие QT и влияющие на электролиты (антиаритмики, некоторые антибиотики) — повышают риск аритмии",
      "Сильные индукторы CYP3A4 (рифампицин, фенитоин, карбамазепин) снижают концентрацию ондансетрона",
      "Апоморфин — противопоказание",
      "Риск серотонинового синдрома с серотонинергическими препаратами"
    ],
    qollash: {
      kattalar: "При химиотерапии: 8 мг внутрь или в/в за 30–60 минут до лечения, затем 8 мг каждые 8–12 ч. PONV: 4 мг в/в при индукции. Макс. суточная доза обычно 16 мг (риск QT).",
      bolalar: "По массе/поверхности тела 0,1–0,15 мг/кг в/в (макс. 8 мг)"
    },
    chiqarish: "Таблетки 4 мг, 8 мг; таблетки, диспергируемые во рту; раствор для инъекций 2 мг/мл; сироп"
  },
  en: {
    gruppa: "Antiemetics (5-HT3 receptor antagonists)",
    farmTasir: "Potent antiemetic (serotonin antagonist)",
    farmakodinamika: `Ondansetron is a selective serotonin 5-HT3-receptor antagonist. Chemotherapy and radiation cause release of serotonin (5-HT) from enterochromaffin cells of the small intestine; serotonin excites 5-HT3 receptors of the afferent vagus nerve, triggering the vomiting reflex. Ondansetron blocks both peripheral (vagal afferents) and central (chemoreceptor trigger zone) 5-HT3 receptors, effectively preventing vomiting. It causes no extrapyramidal effects and does not affect dopamine receptors.`,
    farmakokinetika: {
      sorish: "Well absorbed orally; bioavailability ~60% (first-pass effect). Cmax ~1.5 h",
      tarqalish: "Protein binding 70–76%; distributes to tissues",
      metabolizm: "Extensively metabolised in the liver via CYP3A4, CYP2D6, CYP1A2",
      chiqarilish: "Metabolites mainly in urine; T½ ~3–5 h (prolonged in the elderly/hepatic impairment)"
    },
    korsatmalar: [
      "Chemotherapy-induced nausea and vomiting (CINV)",
      "Radiotherapy-associated vomiting",
      "Prophylaxis and treatment of postoperative nausea and vomiting (PONV)"
    ],
    qarrshi: [
      "Hypersensitivity to ondansetron or other setrons",
      "Concomitant apomorphine (severe hypotension, loss of consciousness)",
      "Congenital long QT syndrome (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation (common), dry mouth",
      "CNS": "Headache, dizziness, sensation of flushing",
      "Cardiac": "QT prolongation, arrhythmia (at high doses/IV); bradycardia, hypotension",
      "Hepatic": "Transient rise in transaminases",
      "Hypersensitivity": "Rash, rarely anaphylaxis"
    },
    dozadan: "Symptoms: visual disturbance, severe constipation, hypotension, QT prolongation, vasovagal syncope. Treatment: symptomatic, cardiac monitoring.",
    ozarotasir: [
      "QT-prolonging and electrolyte-affecting drugs (antiarrhythmics, some antibiotics) — increase arrhythmia risk",
      "Strong CYP3A4 inducers (rifampicin, phenytoin, carbamazepine) reduce ondansetron concentration",
      "Apomorphine — contraindicated",
      "Risk of serotonin syndrome with serotonergic drugs"
    ],
    qollash: {
      kattalar: "Chemotherapy: 8 mg orally or IV 30–60 minutes before treatment, then 8 mg every 8–12 h. PONV: 4 mg IV at induction. Max daily dose usually 16 mg (QT risk).",
      bolalar: "By weight/body surface 0.1–0.15 mg/kg IV (max 8 mg)"
    },
    chiqarish: "Tablets 4 mg, 8 mg; orodispersible tablets; injection solution 2 mg/mL; syrup"
  }
},

// ─── A04AA02 · Granisetron ────────────────────────────────────────────────
"A04AA02": {
  uz: {
    gruppa: "Qusishga qarshi vositalar (5-HT3 retseptor antagonistlari)",
    farmTasir: "Tanlab ta'sir qiluvchi antiemetik (serotonin antagonisti)",
    farmakodinamika: `Granisetron — yuqori tanlovchanlikka ega serotonin 5-HT3-retseptor antagonisti. Periferik (vagus afferentlari) va markaziy (xemoretseptor trigger zonasi) 5-HT3 retseptorlarini bloklab, kimyoterapiya/nurlanish keltirib chiqargan serotonin vositachiligidagi qusish refleksini oldini oladi. Ondansetronga o'xshash, lekin ta'siri uzoqroq. Dofamin retseptorlariga ta'sir qilmaydi, ekstrapiramidal nojo'ya bermaydi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali yaxshi so'riladi; ovqat ta'sir qilmaydi",
      tarqalish: "Oqsilga bog'lanish ~65%; to'qimalarga keng tarqaladi",
      metabolizm: "Jigarда asosan CYP3A4 orqali metabolizmga uchraydi",
      chiqarilish: "Metabolitlar siydik va o't bilan; T½ ~9 soat (ondansetrondan uzunroq)"
    },
    korsatmalar: [
      "Kimyoterapiya keltirib chiqargan ko'ngil aynishi va qusish (CINV)",
      "Nurlanish terapiyasi bilan bog'liq qusish",
      "Operatsiyadan keyingi ko'ngil aynishi va qusish (PONV)"
    ],
    qarrshi: [
      "Granisetron yoki boshqa setronlarga o'ta sezuvchanlik",
      "Tug'ma uzun QT sindromi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ich qotishi, og'iz qurishi, ko'ngil aynishi",
      "Asab tizimi": "Bosh og'rig'i, uyqusizlik",
      "Yurak": "QT intervalining uzayishi (kam)",
      "Jigar": "Transaminazalarning vaqtincha oshishi"
    },
    dozadan: "Belgilar: bosh og'rig'i; QT uzayishi mumkin. Davolash: simptomatik.",
    ozarotasir: [
      "QT uzaytiruvchi preparatlar bilan aritmiya xavfi oshadi",
      "CYP3A4 induktor/inhibitorlari konsentratsiyasiga ta'sir qiladi",
      "Serotoninergik dorilar bilan serotonin sindromi xavfi"
    ],
    qollash: {
      kattalar: "Kimyoterapiyada: 1–2 mg og'iz orqali yoki 1 mg (yoki 0,01 mg/kg) v/v davolashdan oldin. Transdermal plastir 7 kungacha. PONV: 1 mg v/v.",
      bolalar: "0,02–0,04 mg/kg v/v (maks. 3 mg)"
    },
    chiqarish: "Tabletkalar 1 mg, 2 mg; inyeksiya eritmasi 1 mg/ml; transdermal plastir"
  },
  ru: {
    gruppa: "Противорвотные средства (антагонисты 5-HT3-рецепторов)",
    farmTasir: "Селективный противорвотный препарат (антагонист серотонина)",
    farmakodinamika: `Гранисетрон — высокоселективный антагонист серотониновых 5-HT3-рецепторов. Блокируя периферические (афференты вагуса) и центральные (хеморецепторная триггерная зона) 5-HT3-рецепторы, предотвращает опосредованный серотонином рвотный рефлекс при химиотерапии/облучении. Подобен ондансетрону, но действует дольше. Не влияет на дофаминовые рецепторы, не даёт экстрапирамидных эффектов.`,
    farmakokinetika: {
      sorish: "Хорошо всасывается внутрь; пища не влияет",
      tarqalish: "Связь с белками ~65%; широко распределяется",
      metabolizm: "Метаболизируется в печени преимущественно через CYP3A4",
      chiqarilish: "Метаболиты с мочой и жёлчью; T½ ~9 ч (дольше ондансетрона)"
    },
    korsatmalar: [
      "Тошнота и рвота, вызванные химиотерапией (CINV)",
      "Рвота, связанная с лучевой терапией",
      "Послеоперационная тошнота и рвота (PONV)"
    ],
    qarrshi: [
      "Гиперчувствительность к гранисетрону или другим сетронам",
      "Врождённый синдром удлинённого QT (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Запор, сухость во рту, тошнота",
      "ЦНС": "Головная боль, бессонница",
      "Сердце": "Удлинение QT (редко)",
      "Печень": "Транзиторное повышение трансаминаз"
    },
    dozadan: "Симптомы: головная боль; возможно удлинение QT. Лечение: симптоматическое.",
    ozarotasir: [
      "С препаратами, удлиняющими QT, повышается риск аритмии",
      "Индукторы/ингибиторы CYP3A4 влияют на концентрацию",
      "Риск серотонинового синдрома с серотонинергическими препаратами"
    ],
    qollash: {
      kattalar: "При химиотерапии: 1–2 мг внутрь или 1 мг (или 0,01 мг/кг) в/в до лечения. Трансдермальный пластырь до 7 дней. PONV: 1 мг в/в.",
      bolalar: "0,02–0,04 мг/кг в/в (макс. 3 мг)"
    },
    chiqarish: "Таблетки 1 мг, 2 мг; раствор для инъекций 1 мг/мл; трансдермальный пластырь"
  },
  en: {
    gruppa: "Antiemetics (5-HT3 receptor antagonists)",
    farmTasir: "Selective antiemetic (serotonin antagonist)",
    farmakodinamika: `Granisetron is a highly selective serotonin 5-HT3-receptor antagonist. By blocking peripheral (vagal afferents) and central (chemoreceptor trigger zone) 5-HT3 receptors, it prevents the serotonin-mediated vomiting reflex of chemotherapy/radiation. It is similar to ondansetron but longer-acting. It does not affect dopamine receptors and produces no extrapyramidal effects.`,
    farmakokinetika: {
      sorish: "Well absorbed orally; food has no effect",
      tarqalish: "Protein binding ~65%; widely distributed",
      metabolizm: "Metabolised in the liver mainly via CYP3A4",
      chiqarilish: "Metabolites in urine and bile; T½ ~9 h (longer than ondansetron)"
    },
    korsatmalar: [
      "Chemotherapy-induced nausea and vomiting (CINV)",
      "Radiotherapy-associated vomiting",
      "Postoperative nausea and vomiting (PONV)"
    ],
    qarrshi: [
      "Hypersensitivity to granisetron or other setrons",
      "Congenital long QT syndrome (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Constipation, dry mouth, nausea",
      "CNS": "Headache, insomnia",
      "Cardiac": "QT prolongation (rare)",
      "Hepatic": "Transient rise in transaminases"
    },
    dozadan: "Symptoms: headache; QT prolongation possible. Treatment: symptomatic.",
    ozarotasir: [
      "Arrhythmia risk increases with QT-prolonging drugs",
      "CYP3A4 inducers/inhibitors affect concentration",
      "Risk of serotonin syndrome with serotonergic drugs"
    ],
    qollash: {
      kattalar: "Chemotherapy: 1–2 mg orally or 1 mg (or 0.01 mg/kg) IV before treatment. Transdermal patch up to 7 days. PONV: 1 mg IV.",
      bolalar: "0.02–0.04 mg/kg IV (max 3 mg)"
    },
    chiqarish: "Tablets 1 mg, 2 mg; injection solution 1 mg/mL; transdermal patch"
  }
},

// ─── A05AA02 · Ursodeoksixol kislota ──────────────────────────────────────
"A05AA02": {
  uz: {
    gruppa: "O't kislotalari preparatlari (gepatoprotektorlar)",
    farmTasir: "O't toshini erituvchi va jigarni himoyalovchi o't kislotasi",
    farmakodinamika: `Ursodeoksixol kislota (UDXK) — tabiiy gidrofil o't kislotasi. O't tarkibidagi xolesterin to'yinganligini kamaytiradi (ichakdan xolesterin so'rilishi va jigardan ekskretsiyasini pasaytiradi), bu xolesterin o't toshlarining asta-sekin erishiga olib keladi. Gepatoprotektiv ta'sir: gidrofob (toksik) o't kislotalarini siqib chiqaradi va membranalarni ularning zararli ta'siridan himoyalaydi (membrana-stabillovchi), xolerez (o't oqimi) ni kuchaytiradi, immunomodulyator va antiapoptotik ta'sir ko'rsatadi. Xoletik va xolelitolitik vosita.`,
    farmakokinetika: {
      sorish: "Ingichka ichakда so'riladi; jigarning enterоgepatik aylanishiga kiradi",
      tarqalish: "Oqsilga yuqori bog'lanadi; jigarда to'planadi",
      metabolizm: "Jigarда konyugatsiyalanadi; ichak bakteriyalari litoxol kislotaga aylantiradi",
      chiqarilish: "Asosan najas bilan (o't orqali); enterоgepatik retsirkulyatsiya"
    },
    korsatmalar: [
      "Xolesterinli o't toshlari (rentgen-manfiy, o't pufagi faoliyati saqlangan)",
      "Birlamchi biliar xolangit (sirroz)",
      "Biliar reflyuks-gastrit",
      "Surunkali jigar kasalliklari (steatogepatit, xolestaz, kistoz fibroz, biliar atreziya)",
      "Parenteral oziqlanish fonidagi xolestaz profilaktikasi"
    ],
    qarrshi: [
      "UDXK ga o'ta sezuvchanlik",
      "Faol o't pufagi va o't yo'llari yallig'lanishi (xolesistit, xolangit)",
      "Rentgen-musbat (kalsiyli) o't toshlari, ishlamaydigan o't pufagi",
      "O't yo'llari obstruksiyasi, tez-tez biliar kolika",
      "Dekompensatsiyalangan jigar sirrozi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Diareya (ko'p), qorin noxushligi, ko'ngil aynishi",
      "Jigar": "Transaminazalarning vaqtincha oshishi; davolash davomida o't toshlarining kalsifikatsiyasi",
      "Allergiya": "Toshma, qichishish (kam)"
    },
    dozadan: "Past toksiklik; ko'p dozada diareya. Simptomatik davolash.",
    ozarotasir: [
      "Xolestiramin, alyuminiy tutuvchi antatsidlar UDXK so'rilishini kamaytiradi — alohida qabul qiling",
      "Estrogenlar va xolesterin tushiruvchilar (klofibrat) o't xolesterinini oshirib UDXK ta'sirini pasaytiradi",
      "Siklosporin so'rilishini o'zgartirishi mumkin"
    ],
    qollash: {
      kattalar: "O't toshlari: 10 mg/kg/sut uxlash oldidan (toshlar eriguncha, 6–24 oy). Birlamchi biliar xolangit: 13–15 mg/kg/sut 2–3 qabulга bo'lib.",
      bolalar: "Vaznга qarab 10–20 mg/kg/sut (xolestaz, kistoz fibroz)"
    },
    chiqarish: "Kapsulalar 250 mg; tabletkalar 250 mg, 500 mg; suspenziya 250 mg/5 ml"
  },
  ru: {
    gruppa: "Препараты жёлчных кислот (гепатопротекторы)",
    farmTasir: "Жёлчная кислота, растворяющая камни и защищающая печень",
    farmakodinamika: `Урсодезоксихолевая кислота (УДХК) — природная гидрофильная жёлчная кислота. Снижает насыщение жёлчи холестерином (уменьшает всасывание холестерина в кишечнике и его экскрецию из печени), что ведёт к постепенному растворению холестериновых жёлчных камней. Гепатопротективное действие: вытесняет гидрофобные (токсичные) жёлчные кислоты и защищает мембраны от их повреждающего действия (мембраностабилизирующее), усиливает холерез (ток жёлчи), оказывает иммуномодулирующее и антиапоптотическое действие. Холеретическое и холелитолитическое средство.`,
    farmakokinetika: {
      sorish: "Всасывается в тонкой кишке; включается в энтерогепатическую циркуляцию печени",
      tarqalish: "Высоко связывается с белками; накапливается в печени",
      metabolizm: "Конъюгируется в печени; кишечные бактерии превращают в литохолевую кислоту",
      chiqarilish: "Преимущественно с калом (через жёлчь); энтерогепатическая рециркуляция"
    },
    korsatmalar: [
      "Холестериновые жёлчные камни (рентгеннегативные, при сохранённой функции жёлчного пузыря)",
      "Первичный билиарный холангит (цирроз)",
      "Билиарный рефлюкс-гастрит",
      "Хронические заболевания печени (стеатогепатит, холестаз, муковисцидоз, билиарная атрезия)",
      "Профилактика холестаза при парентеральном питании"
    ],
    qarrshi: [
      "Гиперчувствительность к УДХК",
      "Острое воспаление жёлчного пузыря и путей (холецистит, холангит)",
      "Рентгенпозитивные (кальцийсодержащие) камни, нефункционирующий жёлчный пузырь",
      "Обструкция жёлчных путей, частая билиарная колика",
      "Декомпенсированный цирроз печени (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Диарея (часто), дискомфорт в животе, тошнота",
      "Печень": "Транзиторное повышение трансаминаз; кальцификация камней при лечении",
      "Аллергические": "Сыпь, зуд (редко)"
    },
    dozadan: "Низкая токсичность; при больших дозах диарея. Симптоматическое лечение.",
    ozarotasir: [
      "Холестирамин, алюминийсодержащие антациды снижают всасывание УДХК — принимать отдельно",
      "Эстрогены и гиполипидемические (клофибрат) повышают холестерин жёлчи, снижая действие УДХК",
      "Может изменять всасывание циклоспорина"
    ],
    qollash: {
      kattalar: "Камни: 10 мг/кг/сут на ночь (до растворения, 6–24 мес). Первичный билиарный холангит: 13–15 мг/кг/сут в 2–3 приёма.",
      bolalar: "По массе тела 10–20 мг/кг/сут (холестаз, муковисцидоз)"
    },
    chiqarish: "Капсулы 250 мг; таблетки 250 мг, 500 мг; суспензия 250 мг/5 мл"
  },
  en: {
    gruppa: "Bile acid preparations (hepatoprotectants)",
    farmTasir: "Bile acid that dissolves stones and protects the liver",
    farmakodinamika: `Ursodeoxycholic acid (UDCA) is a natural hydrophilic bile acid. It reduces cholesterol saturation of bile (decreasing intestinal cholesterol absorption and hepatic excretion), leading to gradual dissolution of cholesterol gallstones. Hepatoprotective action: it displaces hydrophobic (toxic) bile acids and protects membranes from their damaging effect (membrane-stabilising), enhances choleresis (bile flow), and has immunomodulatory and antiapoptotic effects. A choleretic and cholelitholytic agent.`,
    farmakokinetika: {
      sorish: "Absorbed in the small intestine; enters the enterohepatic circulation of the liver",
      tarqalish: "Highly protein-bound; accumulates in the liver",
      metabolizm: "Conjugated in the liver; gut bacteria convert it to lithocholic acid",
      chiqarilish: "Mainly in faeces (via bile); enterohepatic recirculation"
    },
    korsatmalar: [
      "Cholesterol gallstones (radiolucent, with preserved gallbladder function)",
      "Primary biliary cholangitis (cirrhosis)",
      "Biliary reflux gastritis",
      "Chronic liver diseases (steatohepatitis, cholestasis, cystic fibrosis, biliary atresia)",
      "Prophylaxis of parenteral nutrition-associated cholestasis"
    ],
    qarrshi: [
      "Hypersensitivity to UDCA",
      "Acute inflammation of the gallbladder and ducts (cholecystitis, cholangitis)",
      "Radiopaque (calcified) stones, non-functioning gallbladder",
      "Biliary obstruction, frequent biliary colic",
      "Decompensated liver cirrhosis (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Diarrhoea (common), abdominal discomfort, nausea",
      "Hepatic": "Transient rise in transaminases; stone calcification during treatment",
      "Hypersensitivity": "Rash, itching (rare)"
    },
    dozadan: "Low toxicity; diarrhoea at large doses. Symptomatic treatment.",
    ozarotasir: [
      "Cholestyramine and aluminium-containing antacids reduce UDCA absorption — take separately",
      "Oestrogens and lipid-lowering agents (clofibrate) raise biliary cholesterol, reducing UDCA effect",
      "May alter ciclosporin absorption"
    ],
    qollash: {
      kattalar: "Stones: 10 mg/kg/day at bedtime (until dissolved, 6–24 months). Primary biliary cholangitis: 13–15 mg/kg/day in 2–3 divided doses.",
      bolalar: "By body weight 10–20 mg/kg/day (cholestasis, cystic fibrosis)"
    },
    chiqarish: "Capsules 250 mg; tablets 250 mg, 500 mg; suspension 250 mg/5 mL"
  }
},

// ─── A05BA · L-ornitin-L-aspartat ─────────────────────────────────────────
"A05BA": {
  uz: {
    gruppa: "Jigarni himoyalovchi vositalar (gepatoprotektorlar)",
    farmTasir: "Ammiakni zararsizlantiruvchi gepatoprotektor (Hepa-Merz)",
    farmakodinamika: `L-ornitin-L-aspartat — ammiakni zararsizlantiruvchi gepatoprotektor. Tarkibidagi ikkala aminokislota organizmda ammiakni zararsizlantirishning ikki asosiy yo'lida ishtirok etadi: ornitin — jigardagi karbamid (mochevina) sintezi sikli (ornitin sikli) substrati, aspartat esa periven gepatotsitlar va mushaklarda glutamin sintezi orqali ammiakni bog'laydi. Natijada qondagi ammiak darajasi pasayadi (gipoammoniemik ta'sir), bu jigar ensefalopatiyasi belgilarini kamaytiradi. Shuningdek energiya almashinuvini va insulin/somatotropin sekretsiyasini yaxshilaydi.`,
    farmakokinetika: {
      sorish: "Og'iz va parenteral yo'l bilan so'riladi; aminokislotalar tez metabolizmga kiradi",
      tarqalish: "Jigar, mushak va boshqa to'qimalarga tarqaladi",
      metabolizm: "Ornitin sikli va glutamin sintezida sarflanadi",
      chiqarilish: "Karbamid shaklida buyrak orqali (mochevina sikli mahsuloti)"
    },
    korsatmalar: [
      "Jigar kasalliklari (steatoz, gepatit, sirroz) fonidagi giperammoniemiya",
      "Jigar ensefalopatiyasi (latent va manifest shakllari) profilaktikasi va davosi",
      "Surunkali jigar yetishmovchiligi kompleks davosi",
      "Jigar funksiyasi buzilishi bilan bog'liq holsizlik va dispepsiya"
    ],
    qarrshi: [
      "Preparatga o'ta sezuvchanlik",
      "Og'ir buyrak yetishmovchiligi (kreаtinin >3 mg/100 ml)",
      "Homiladorlik va emizish davri (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, qorin og'rig'i, meteorizm (ko'p dozada)",
      "Asab tizimi": "Bosh og'rig'i (kam)",
      "Allergiya": "Teri reaksiyalari (kam)",
      "Mahalliy": "Tez infuziyada — qisqa muddatli noxushlik"
    },
    dozadan: "Past toksiklik; ko'p dozada oshqozon-ichak belgilari — dozani kamaytirish.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir kam aniqlangan"
    ],
    qollash: {
      kattalar: "Og'iz orqali: 3–6 g (1–2 paket granula) kuniga 2–3 marta ovqatdan keyin. V/v infuziya: 20–40 g/sut (og'ir ensefalopatiyada), sekin tomchilab.",
      bolalar: "Faqat shifokor nazoratida, vaznга qarab"
    },
    chiqarish: "Og'iz uchun granula (eritma) 3 g/paket; infuziya uchun konsentrat 5 g/10 ml"
  },
  ru: {
    gruppa: "Гепатопротекторы",
    farmTasir: "Гепатопротектор, обезвреживающий аммиак (Гепа-Мерц)",
    farmakodinamika: `L-орнитин-L-аспартат — гепатопротектор, обезвреживающий аммиак. Обе входящие аминокислоты участвуют в двух основных путях обезвреживания аммиака: орнитин — субстрат цикла синтеза мочевины (орнитинового цикла) в печени, а аспартат связывает аммиак через синтез глутамина в перивенозных гепатоцитах и мышцах. В результате снижается уровень аммиака в крови (гипоаммониемическое действие), что уменьшает симптомы печёночной энцефалопатии. Также улучшает энергетический обмен и секрецию инсулина/соматотропина.`,
    farmakokinetika: {
      sorish: "Всасывается внутрь и парентерально; аминокислоты быстро вступают в метаболизм",
      tarqalish: "Распределяется в печень, мышцы и другие ткани",
      metabolizm: "Расходуется в орнитиновом цикле и синтезе глутамина",
      chiqarilish: "В виде мочевины почками (продукт цикла мочевины)"
    },
    korsatmalar: [
      "Гипераммониемия при заболеваниях печени (стеатоз, гепатит, цирроз)",
      "Профилактика и лечение печёночной энцефалопатии (латентной и манифестной)",
      "Комплексная терапия хронической печёночной недостаточности",
      "Слабость и диспепсия, связанные с нарушением функции печени"
    ],
    qarrshi: [
      "Гиперчувствительность к препарату",
      "Тяжёлая почечная недостаточность (креатинин >3 мг/100 мл)",
      "Беременность и период лактации (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, боль в животе, метеоризм (при высоких дозах)",
      "ЦНС": "Головная боль (редко)",
      "Аллергические": "Кожные реакции (редко)",
      "Местные": "При быстрой инфузии — кратковременный дискомфорт"
    },
    dozadan: "Низкая токсичность; при больших дозах ЖКТ-симптомы — снижение дозы.",
    ozarotasir: [
      "Клинически значимых взаимодействий выявлено мало"
    ],
    qollash: {
      kattalar: "Внутрь: 3–6 г (1–2 пакета гранул) 2–3 раза в день после еды. В/в инфузия: 20–40 г/сут (при тяжёлой энцефалопатии), медленно капельно.",
      bolalar: "Только под контролем врача, по массе тела"
    },
    chiqarish: "Гранулы для приёма внутрь (раствор) 3 г/пакет; концентрат для инфузий 5 г/10 мл"
  },
  en: {
    gruppa: "Hepatoprotectants",
    farmTasir: "Ammonia-detoxifying hepatoprotectant (Hepa-Merz)",
    farmakodinamika: `L-ornithine-L-aspartate is an ammonia-detoxifying hepatoprotectant. Its two amino acids participate in the two main ammonia-detoxification pathways: ornithine is a substrate of the hepatic urea synthesis cycle (ornithine cycle), while aspartate binds ammonia through glutamine synthesis in perivenous hepatocytes and muscle. This lowers blood ammonia (hypoammonaemic effect), reducing symptoms of hepatic encephalopathy. It also improves energy metabolism and insulin/somatotropin secretion.`,
    farmakokinetika: {
      sorish: "Absorbed orally and parenterally; the amino acids rapidly enter metabolism",
      tarqalish: "Distributes to the liver, muscle and other tissues",
      metabolizm: "Consumed in the ornithine cycle and glutamine synthesis",
      chiqarilish: "As urea via the kidneys (urea cycle product)"
    },
    korsatmalar: [
      "Hyperammonaemia in liver disease (steatosis, hepatitis, cirrhosis)",
      "Prophylaxis and treatment of hepatic encephalopathy (latent and manifest)",
      "Combination therapy of chronic liver failure",
      "Weakness and dyspepsia associated with impaired liver function"
    ],
    qarrshi: [
      "Hypersensitivity to the preparation",
      "Severe renal impairment (creatinine >3 mg/100 mL)",
      "Pregnancy and lactation (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, abdominal pain, flatulence (at high doses)",
      "CNS": "Headache (rare)",
      "Hypersensitivity": "Skin reactions (rare)",
      "Local": "Brief discomfort with rapid infusion"
    },
    dozadan: "Low toxicity; GI symptoms at large doses — reduce dose.",
    ozarotasir: [
      "Few clinically significant interactions identified"
    ],
    qollash: {
      kattalar: "Oral: 3–6 g (1–2 sachets of granules) 2–3 times daily after meals. IV infusion: 20–40 g/day (in severe encephalopathy), slowly by drip.",
      bolalar: "Only under medical supervision, by body weight"
    },
    chiqarish: "Granules for oral solution 3 g/sachet; concentrate for infusion 5 g/10 mL"
  }
},

// ─── A05BA03 · Silimarin ──────────────────────────────────────────────────
"A05BA03": {
  uz: {
    gruppa: "Jigarni himoyalovchi vositalar (gepatoprotektorlar, o'simlik)",
    farmTasir: "Tikan (rastoropsha) flavonoidi — gepatoprotektor",
    farmakodinamika: `Silimarin — sutli tikan (Silybum marianum) mevasidan olingan flavonolignanlar (silibinin, silidianin, silikristin) aralashmasi. Gepatotsit membranasini barqarorlashtiradi va toksinlarning (jumladan oqartirma zahari — amanitin) hujayraga kirishini to'sadi; erkin radikallarni bog'lab antioksidant ta'sir ko'rsatadi va lipid peroksidatsiyasini kamaytiradi. Hujayra ichidagi oqsil va fosfolipid sintezini (RNK-polimeraza I orqali) rag'batlantirib, shikastlangan gepatotsitlar regeneratsiyasini tezlashtiradi. Antifibrotik ta'sirga ham ega.`,
    farmakokinetika: {
      sorish: "Og'iz orqali kam so'riladi (suvда yomon eriydi)",
      tarqalish: "Asosan jigar hujayralariga tarqaladi",
      metabolizm: "Jigarда konyugatsiyalanadi (glyukuronid va sulfat)",
      chiqarilish: "Asosan o't bilan (enterоgepatik aylanish); T½ ~6 soat"
    },
    korsatmalar: [
      "Surunkali gepatit, jigar sirrozi (kompleks davoda)",
      "Toksik va dori (alkogol, kimyoviy) jarohatlari fonidagi jigar shikastlanishi",
      "Jigarning yog' bosishi (steatogepatit)",
      "Oqartirma (Amanita) zaharlanishida yordamchi davo"
    ],
    qarrshi: [
      "Silimarin yoki murakkabguldoshlarga (astra oilasi) o'ta sezuvchanlik",
      "O't yo'llari o'tkir obstruksiyasi (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Yengil ich yumshashi (laksatив ta'sir), ko'ngil aynishi, qorin noxushligi",
      "Allergiya": "Toshma, qichishish (kam)",
      "Endokrin": "Estrogensimon ta'sir mumkin (kam)"
    },
    dozadan: "Past toksiklik; ko'p dozada ich yumshashi — simptomatik.",
    ozarotasir: [
      "CYP enzimlariga ta'sir qilib ba'zi dorilar (statinlar, ba'zi antikoagulyantlar) metabolizmini o'zgartirishi mumkin (nazariy)"
    ],
    qollash: {
      kattalar: "70–140 mg (silimaringa hisoblangan) kuniga 3 marta ovqat bilan; saqlash dozasi 70 mg kuniga 3 marta.",
      bolalar: "12 yoshdan, kamaytirilgan dozada"
    },
    chiqarish: "Kapsulalar/tabletkalar 35 mg, 70 mg, 140 mg (silimarin)"
  },
  ru: {
    gruppa: "Гепатопротекторы (растительные)",
    farmTasir: "Флавоноид расторопши — гепатопротектор",
    farmakodinamika: `Силимарин — смесь флаволигнанов (силибинин, силидианин, силикристин) из плодов расторопши пятнистой (Silybum marianum). Стабилизирует мембрану гепатоцитов и препятствует проникновению токсинов (в т.ч. яда бледной поганки — аманитина) в клетку; связывает свободные радикалы (антиоксидантное действие) и уменьшает перекисное окисление липидов. Стимулирует синтез внутриклеточных белков и фосфолипидов (через РНК-полимеразу I), ускоряя регенерацию повреждённых гепатоцитов. Обладает также антифибротическим действием.`,
    farmakokinetika: {
      sorish: "Плохо всасывается внутрь (плохо растворим в воде)",
      tarqalish: "Распределяется преимущественно в клетки печени",
      metabolizm: "Конъюгируется в печени (глюкуронид и сульфат)",
      chiqarilish: "Преимущественно с жёлчью (энтерогепатическая циркуляция); T½ ~6 ч"
    },
    korsatmalar: [
      "Хронический гепатит, цирроз печени (в комплексной терапии)",
      "Токсические и лекарственные (алкоголь, химические) поражения печени",
      "Жировая дистрофия печени (стеатогепатит)",
      "Вспомогательное лечение при отравлении бледной поганкой (Amanita)"
    ],
    qarrshi: [
      "Гиперчувствительность к силимарину или сложноцветным (астровые)",
      "Острая обструкция жёлчных путей (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Лёгкое послабление стула (слабительное действие), тошнота, дискомфорт в животе",
      "Аллергические": "Сыпь, зуд (редко)",
      "Эндокринные": "Возможно эстрогеноподобное действие (редко)"
    },
    dozadan: "Низкая токсичность; при больших дозах послабление стула — симптоматически.",
    ozarotasir: [
      "Влияя на ферменты CYP, может изменять метаболизм некоторых препаратов (статины, некоторые антикоагулянты) (теоретически)"
    ],
    qollash: {
      kattalar: "70–140 мг (в пересчёте на силимарин) 3 раза в день с едой; поддерживающая доза 70 мг 3 раза в день.",
      bolalar: "С 12 лет, в сниженной дозе"
    },
    chiqarish: "Капсулы/таблетки 35 мг, 70 мг, 140 мг (силимарин)"
  },
  en: {
    gruppa: "Hepatoprotectants (herbal)",
    farmTasir: "Milk thistle flavonoid — hepatoprotectant",
    farmakodinamika: `Silymarin is a mixture of flavonolignans (silibinin, silidianin, silicristin) from the fruit of milk thistle (Silybum marianum). It stabilises the hepatocyte membrane and prevents toxins (including death-cap poison amanitin) from entering the cell; it scavenges free radicals (antioxidant action) and reduces lipid peroxidation. It stimulates intracellular protein and phospholipid synthesis (via RNA polymerase I), accelerating regeneration of damaged hepatocytes. It also has an antifibrotic effect.`,
    farmakokinetika: {
      sorish: "Poorly absorbed orally (poorly water-soluble)",
      tarqalish: "Distributes mainly to liver cells",
      metabolizm: "Conjugated in the liver (glucuronide and sulfate)",
      chiqarilish: "Mainly in bile (enterohepatic circulation); T½ ~6 h"
    },
    korsatmalar: [
      "Chronic hepatitis, liver cirrhosis (in combination therapy)",
      "Toxic and drug-induced (alcohol, chemical) liver damage",
      "Fatty liver disease (steatohepatitis)",
      "Adjunctive treatment in death-cap (Amanita) poisoning"
    ],
    qarrshi: [
      "Hypersensitivity to silymarin or Asteraceae (daisy family)",
      "Acute biliary obstruction (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Mild loosening of stools (laxative effect), nausea, abdominal discomfort",
      "Hypersensitivity": "Rash, itching (rare)",
      "Endocrine": "Possible oestrogen-like effect (rare)"
    },
    dozadan: "Low toxicity; loose stools at large doses — symptomatic.",
    ozarotasir: [
      "By affecting CYP enzymes it may alter metabolism of some drugs (statins, some anticoagulants) (theoretical)"
    ],
    qollash: {
      kattalar: "70–140 mg (expressed as silymarin) three times daily with food; maintenance 70 mg three times daily.",
      bolalar: "From 12 years, in reduced dose"
    },
    chiqarish: "Capsules/tablets 35 mg, 70 mg, 140 mg (silymarin)"
  }
},

// ─── A05C · Essensial fosfolipidlar ───────────────────────────────────────
"A05C": {
  uz: {
    gruppa: "Jigarni himoyalovchi vositalar (fosfolipidlar)",
    farmTasir: "Hujayra membranasini tiklovchi gepatoprotektor (Essentiale)",
    farmakodinamika: `Essensial fosfolipidlar — soya loviyasidan olingan, ko'p to'yinmagan yog' kislotalariga boy fosfatidilxolin (polienilfosfatidilxolin). Tuzilishi bo'yicha gepatotsit hujayra membranasining tabiiy fosfolipidlariga mos keladi va shikastlangan membranalarga o'rnashib, ularning yaxlitligini va funksiyasini (membranaga bog'liq fermentlar, transport, oksidlanish-fosforlanish) tiklaydi. Lipid va xolesterin almashinuvini me'yorlashtiradi, jigarning detoksikatsiya qobiliyatini yaxshilaydi va biriktiruvchi to'qima rivojlanishini (fibroz) sekinlashtiradi.`,
    farmakokinetika: {
      sorish: "Og'iz orqali yaxshi so'riladi (>90%); ingichka ichakда parchalanib so'riladi",
      tarqalish: "Asosan jigar membranalariga o'rnashadi",
      metabolizm: "Holin va to'yinmagan yog' kislotalari sifatida metabolizmga kiradi",
      chiqarilish: "Metabolitlar tabiiy yo'llar bilan"
    },
    korsatmalar: [
      "Surunkali gepatit, jigar sirrozi",
      "Jigarning yog' bosishi (steatoz, steatogepatit), jumladan diabet fonida",
      "Toksik, alkogol va dori jarohatlari fonidagi jigar shikastlanishi",
      "Homiladorlar toksikozi, o't-tosh kasalligi profilaktikasiga yordamchi",
      "Nurlanish sindromida jigarni qo'llab-quvvatlash"
    ],
    qarrshi: [
      "Essensial fosfolipidlar yoki soyaga o'ta sezuvchanlik",
      "12 yoshgacha bolalar (in'eksion shakl uchun ma'lumot cheklangan)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Yengil noxushlik, diareya, ich yumshashi (ko'p dozada, kam)",
      "Allergiya": "Toshma, qichishish, eshakemi (kam)",
      "Mahalliy": "In'eksiya joyida reaksiya (v/v shaklda)"
    },
    dozadan: "Past toksiklik; ko'p dozada oshqozon-ichak belgilari — simptomatik.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir kam; antikoagulyantlar bilan ehtiyotkorlik (nazariy)"
    ],
    qollash: {
      kattalar: "Og'iz orqali 2 kapsula (600 mg) kuniga 3 marta ovqat bilan; saqlash 1 kapsula kuniga 3 marta. V/v sekin 5–10 ml/sut (og'ir holatlarда).",
      bolalar: "12 yoshdan: kattalardagidek (og'iz shakli)"
    },
    chiqarish: "Kapsulalar 300 mg; inyeksiya eritmasi 250 mg/5 ml"
  },
  ru: {
    gruppa: "Гепатопротекторы (фосфолипиды)",
    farmTasir: "Гепатопротектор, восстанавливающий клеточную мембрану (Эссенциале)",
    farmakodinamika: `Эссенциальные фосфолипиды — фосфатидилхолин (полиенилфосфатидилхолин) из соевых бобов, богатый полиненасыщенными жирными кислотами. По структуре соответствуют природным фосфолипидам мембраны гепатоцитов и встраиваются в повреждённые мембраны, восстанавливая их целостность и функцию (мембраносвязанные ферменты, транспорт, окислительное фосфорилирование). Нормализуют обмен липидов и холестерина, улучшают детоксикационную функцию печени и замедляют развитие соединительной ткани (фиброз).`,
    farmakokinetika: {
      sorish: "Хорошо всасывается внутрь (>90%); расщепляется и всасывается в тонкой кишке",
      tarqalish: "Встраивается преимущественно в мембраны печени",
      metabolizm: "Метаболизируется как холин и ненасыщенные жирные кислоты",
      chiqarilish: "Метаболиты естественными путями"
    },
    korsatmalar: [
      "Хронический гепатит, цирроз печени",
      "Жировая дистрофия печени (стеатоз, стеатогепатит), в т.ч. при диабете",
      "Токсические, алкогольные и лекарственные поражения печени",
      "Токсикоз беременных, вспомогательно при профилактике желчнокаменной болезни",
      "Поддержка печени при лучевом синдроме"
    ],
    qarrshi: [
      "Гиперчувствительность к эссенциальным фосфолипидам или сое",
      "Детский возраст до 12 лет (для инъекционной формы данные ограничены)"
    ],
    nojoya: {
      "ЖКТ": "Лёгкий дискомфорт, диарея, послабление стула (при высоких дозах, редко)",
      "Аллергические": "Сыпь, зуд, крапивница (редко)",
      "Местные": "Реакция в месте инъекции (в/в форма)"
    },
    dozadan: "Низкая токсичность; при больших дозах ЖКТ-симптомы — симптоматически.",
    ozarotasir: [
      "Клинически значимых взаимодействий мало; с осторожностью с антикоагулянтами (теоретически)"
    ],
    qollash: {
      kattalar: "Внутрь 2 капсулы (600 мг) 3 раза в день с едой; поддержка 1 капсула 3 раза в день. В/в медленно 5–10 мл/сут (при тяжёлых состояниях).",
      bolalar: "С 12 лет: как у взрослых (пероральная форма)"
    },
    chiqarish: "Капсулы 300 мг; раствор для инъекций 250 мг/5 мл"
  },
  en: {
    gruppa: "Hepatoprotectants (phospholipids)",
    farmTasir: "Membrane-restoring hepatoprotectant (Essentiale)",
    farmakodinamika: `Essential phospholipids are phosphatidylcholine (polyenylphosphatidylcholine) from soybeans, rich in polyunsaturated fatty acids. Structurally they correspond to the natural phospholipids of the hepatocyte membrane and incorporate into damaged membranes, restoring their integrity and function (membrane-bound enzymes, transport, oxidative phosphorylation). They normalise lipid and cholesterol metabolism, improve the liver's detoxification capacity and slow connective tissue development (fibrosis).`,
    farmakokinetika: {
      sorish: "Well absorbed orally (>90%); cleaved and absorbed in the small intestine",
      tarqalish: "Incorporates mainly into liver membranes",
      metabolizm: "Metabolised as choline and unsaturated fatty acids",
      chiqarilish: "Metabolites via natural pathways"
    },
    korsatmalar: [
      "Chronic hepatitis, liver cirrhosis",
      "Fatty liver disease (steatosis, steatohepatitis), including in diabetes",
      "Toxic, alcoholic and drug-induced liver damage",
      "Toxaemia of pregnancy, adjunct in gallstone disease prophylaxis",
      "Liver support in radiation syndrome"
    ],
    qarrshi: [
      "Hypersensitivity to essential phospholipids or soy",
      "Children under 12 years (limited data for the injectable form)"
    ],
    nojoya: {
      "Gastrointestinal": "Mild discomfort, diarrhoea, loose stools (at high doses, rare)",
      "Hypersensitivity": "Rash, itching, urticaria (rare)",
      "Local": "Injection-site reaction (IV form)"
    },
    dozadan: "Low toxicity; GI symptoms at large doses — symptomatic.",
    ozarotasir: [
      "Few clinically significant interactions; caution with anticoagulants (theoretical)"
    ],
    qollash: {
      kattalar: "Oral 2 capsules (600 mg) three times daily with food; maintenance 1 capsule three times daily. IV slowly 5–10 mL/day (in severe conditions).",
      bolalar: "From 12 years: as in adults (oral form)"
    },
    chiqarish: "Capsules 300 mg; injection solution 250 mg/5 mL"
  }
},

// ─── A06AB02 · Bisakodil ──────────────────────────────────────────────────
"A06AB02": {
  uz: {
    gruppa: "Surgi (laksativ) vositalar — kontakt (stimulyatsiyalovchi)",
    farmTasir: "Yo'g'on ichakni qo'zg'atuvchi surgi vosita",
    farmakodinamika: `Bisakodil — difenilmetan hosilasi, kontakt (stimulyatsiyalovchi) laksativ. Yo'g'on ichakda ichak shilliq parda fermentlari ta'sirida faol metabolit (defenol)ga aylanadi, yo'g'on ichak shilliq pardasining nerv uchlarini bevosita qo'zg'atib, peristaltikani kuchaytiradi. Shu bilan birga ichak luminига suv va elektrolitlar sekretsiyasini oshiradi, najasni yumshatadi. Ta'sir faqat yo'g'on ichakда, fiziologik defekatsiya jarayoniga ta'sir qiladi.`,
    farmakokinetika: {
      sorish: "Og'iz/rektal yo'l bilan deyarli so'rilmaydi (<5%); mahalliy ta'sir",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Ichakда faol metabolitga aylanadi; so'rilgan qism jigarда konyugatsiyalanadi",
      chiqarilish: "Asosan najas bilan; oz qism siydik (glyukuronid)"
    },
    korsatmalar: [
      "Surunkali va vaqtinchalik qabziyat (ich qotishi)",
      "Operatsiya, tug'ruq oldidan ichakni bo'shatish",
      "Diagnostik tekshiruv (rentgen, endoskopiya) oldidan ichakni tayyorlash",
      "Defekatsiyani yengillashtirish kerak bo'lgan holatlar (bavosil, anal yoriq)"
    ],
    qarrshi: [
      "Bisakodilга o'ta sezuvchanlik",
      "Ichak tutilishi (ileus), o'tkir qorin, o'tkir yallig'lanishli ichak kasalliklari",
      "O'tkir appendisit, qorin sohasidagi noaniq og'riq",
      "Og'ir degidratatsiya, elektrolit buzilishlari"
    ],
    nojoya: {
      "Oshqozon-ichak": "Qorin sanchig'i, spazm, diareya, ko'ngil aynishi",
      "Metabolik": "Uzoq/ko'p qo'llashda suv-elektrolit yo'qotilishi (gipokaliemiya)",
      "Boshqa": "Uzoq qo'llashda «laksativ ichak» (atoniya), bog'liqlik"
    },
    dozadan: "Diareya, suv-elektrolit yo'qotilishi, gipokaliemiya. Davolash: suyuqlik va elektrolitlarni to'ldirish.",
    ozarotasir: [
      "Diuretiklar va GKS bilan gipokaliemiya xavfi oshadi",
      "Gipokaliemiya yurak glikozidlari ta'sirini kuchaytiradi",
      "Antatsidlar/sut enterik qobiqni erta eritib oshqozon tirnashishiga olib keladi — 1 soat farq"
    ],
    qollash: {
      kattalar: "Og'iz orqali 5–10 mg kechqurun (uxlash oldidan); rektal svecha 10 mg ertalab. Tekshiruvga tayyorgarlikda yuqoriroq.",
      bolalar: "4 yoshdan: 5 mg; rektal 5–10 mg yoshга qarab"
    },
    chiqarish: "Enterik tabletkalar/dragelar 5 mg; rektal svechalar 10 mg"
  },
  ru: {
    gruppa: "Слабительные средства — контактные (стимулирующие)",
    farmTasir: "Слабительное, стимулирующее толстую кишку",
    farmakodinamika: `Бисакодил — производное дифенилметана, контактное (стимулирующее) слабительное. В толстой кишке под действием ферментов слизистой превращается в активный метаболит (дефенол), который непосредственно раздражает нервные окончания слизистой толстой кишки, усиливая перистальтику. Одновременно повышает секрецию воды и электролитов в просвет кишки, размягчая каловые массы. Действует только в толстой кишке.`,
    farmakokinetika: {
      sorish: "При приёме внутрь/ректально почти не всасывается (<5%); местное действие",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Превращается в активный метаболит в кишке; всосавшаяся часть конъюгируется в печени",
      chiqarilish: "Преимущественно с калом; небольшая часть с мочой (глюкуронид)"
    },
    korsatmalar: [
      "Хронический и эпизодический запор",
      "Опорожнение кишечника перед операцией, родами",
      "Подготовка кишечника к диагностике (рентген, эндоскопия)",
      "Состояния, требующие облегчения дефекации (геморрой, анальная трещина)"
    ],
    qarrshi: [
      "Гиперчувствительность к бисакодилу",
      "Кишечная непроходимость (илеус), острый живот, острые воспалительные заболевания кишечника",
      "Острый аппендицит, неясная боль в животе",
      "Тяжёлая дегидратация, электролитные нарушения"
    ],
    nojoya: {
      "ЖКТ": "Кишечная колика, спазм, диарея, тошнота",
      "Метаболические": "При длительном/избыточном применении потеря воды и электролитов (гипокалиемия)",
      "Прочие": "При длительном применении «слабительная кишка» (атония), зависимость"
    },
    dozadan: "Диарея, потеря воды и электролитов, гипокалиемия. Лечение: восполнение жидкости и электролитов.",
    ozarotasir: [
      "С диуретиками и ГКС повышается риск гипокалиемии",
      "Гипокалиемия усиливает действие сердечных гликозидов",
      "Антациды/молоко преждевременно растворяют энтеросолюбильную оболочку — интервал 1 час"
    ],
    qollash: {
      kattalar: "Внутрь 5–10 мг на ночь; ректальная свеча 10 мг утром. Для подготовки к исследованию выше.",
      bolalar: "С 4 лет: 5 мг; ректально 5–10 мг по возрасту"
    },
    chiqarish: "Энтеросолюбильные таблетки/драже 5 мг; ректальные свечи 10 мг"
  },
  en: {
    gruppa: "Laxatives — contact (stimulant)",
    farmTasir: "Stimulant laxative acting on the colon",
    farmakodinamika: `Bisacodyl is a diphenylmethane derivative, a contact (stimulant) laxative. In the colon, mucosal enzymes convert it to the active metabolite (desphenol), which directly stimulates nerve endings of the colonic mucosa, enhancing peristalsis. It also increases water and electrolyte secretion into the bowel lumen, softening the stool. It acts only in the colon.`,
    farmakokinetika: {
      sorish: "Barely absorbed orally/rectally (<5%); local action",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Converted to the active metabolite in the gut; the absorbed fraction is conjugated in the liver",
      chiqarilish: "Mainly in faeces; a small part in urine (glucuronide)"
    },
    korsatmalar: [
      "Chronic and episodic constipation",
      "Bowel emptying before surgery or childbirth",
      "Bowel preparation for diagnostics (X-ray, endoscopy)",
      "Conditions requiring easier defecation (haemorrhoids, anal fissure)"
    ],
    qarrshi: [
      "Hypersensitivity to bisacodyl",
      "Intestinal obstruction (ileus), acute abdomen, acute inflammatory bowel disease",
      "Acute appendicitis, undiagnosed abdominal pain",
      "Severe dehydration, electrolyte disturbances"
    ],
    nojoya: {
      "Gastrointestinal": "Intestinal colic, spasm, diarrhoea, nausea",
      "Metabolic": "Water and electrolyte loss (hypokalaemia) with prolonged/excessive use",
      "Other": "Laxative-dependent bowel (atony), dependence with prolonged use"
    },
    dozadan: "Diarrhoea, water and electrolyte loss, hypokalaemia. Treatment: replace fluids and electrolytes.",
    ozarotasir: [
      "Hypokalaemia risk increases with diuretics and corticosteroids",
      "Hypokalaemia enhances the effect of cardiac glycosides",
      "Antacids/milk prematurely dissolve the enteric coating — separate by 1 hour"
    ],
    qollash: {
      kattalar: "Oral 5–10 mg at night; rectal suppository 10 mg in the morning. Higher for examination preparation.",
      bolalar: "From 4 years: 5 mg; rectally 5–10 mg by age"
    },
    chiqarish: "Enteric tablets/dragees 5 mg; rectal suppositories 10 mg"
  }
},

// ─── A06AB06 · Sennozidlar (senna) ────────────────────────────────────────
"A06AB06": {
  uz: {
    gruppa: "Surgi (laksativ) vositalar — o'simlik kontakt (antraxinonlar)",
    farmTasir: "Senna asosidagi qo'zg'atuvchi surgi vosita",
    farmakodinamika: `Sennozidlar A va B — senna (Cassia/Senna) o'simligi bargi va mevasidan olingan antraxinon (antraglikozid) hosilalari. Yo'g'on ichak bakteriyalari ta'sirida faol shaklga (reinantron) parchalanib, yo'g'on ichak shilliq pardasi va Auerbax chigalini qo'zg'atadi, peristaltikani kuchaytiradi. Shu bilan birga suv va elektrolitlarning ichakdan so'rilishini kamaytirib, luminга sekretsiyani oshiradi — najas hajmi va namligi ortadi. Ta'sir 8–12 soatdan keyin boshlanadi.`,
    farmakokinetika: {
      sorish: "Faol birikma deyarli so'rilmaydi; yo'g'on ichakда bakterial faollanadi",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Ichak bakteriyalari tomonidan faollashtiriladi",
      chiqarilish: "Asosan najas bilan; oz qism siydik (rangini o'zgartirishi mumkin)"
    },
    korsatmalar: [
      "Surunkali va vaqtinchalik qabziyat (ichak atoniyasi/sustligi)",
      "Defekatsiyani yumshatish kerak bo'lgan holatlar (bavosil, anal yoriq, operatsiyadan keyin)",
      "Diagnostik tekshiruv oldidan ichakni tozalash"
    ],
    qarrshi: [
      "Senna/antraxinonlarga o'ta sezuvchanlik",
      "Ichak tutilishi, o'tkir qorin, o'tkir yallig'lanishli ichak kasalliklari, appendisit",
      "Spastik qabziyat, noaniq qorin og'rig'i",
      "Og'ir degidratatsiya; homiladorlik (I trimestr) va emizish (ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Qorin sanchig'i, spazm, diareya",
      "Metabolik": "Uzoq qo'llashda gipokaliemiya, albuminuriya, gematuriya",
      "Boshqa": "Uzoq qo'llashda ichak shilliq pardasining pigmentatsiyasi (melanosis coli), atoniya, bog'liqlik; siydik rangining o'zgarishi"
    },
    dozadan: "Diareya, qorin og'rig'i, suv-elektrolit yo'qotilishi (gipokaliemiya). Davolash: suyuqlik va elektrolitlarni to'ldirish.",
    ozarotasir: [
      "Diuretiklar, GKS, mineralokortikoidlar bilan gipokaliemiya xavfi oshadi",
      "Gipokaliemiya yurak glikozidlari ta'sirini kuchaytiradi"
    ],
    qollash: {
      kattalar: "1–2 tabletka (15–30 mg sennozid) yoki choy/damlama kechqurun uxlash oldidan; ta'sir 8–12 soatда.",
      bolalar: "6 yoshdan: kamaytirilgan dozada, qisqa muddat"
    },
    chiqarish: "Tabletkalar (sennozid 13,5 mg); o'simlik xom ashyosi (barg/meva), choy"
  },
  ru: {
    gruppa: "Слабительные средства — растительные контактные (антрахиноны)",
    farmTasir: "Стимулирующее слабительное на основе сенны",
    farmakodinamika: `Сеннозиды A и B — производные антрахинона (антрагликозиды) из листьев и плодов сенны (Cassia/Senna). Под действием бактерий толстой кишки расщепляются до активной формы (реинантрон), раздражающей слизистую толстой кишки и ауэрбаховское сплетение, усиливая перистальтику. Одновременно снижают всасывание воды и электролитов из кишки и повышают секрецию в просвет — увеличивая объём и влажность кала. Действие наступает через 8–12 ч.`,
    farmakokinetika: {
      sorish: "Активное соединение почти не всасывается; активируется бактериями толстой кишки",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Активируется кишечными бактериями",
      chiqarilish: "Преимущественно с калом; небольшая часть с мочой (может изменять её цвет)"
    },
    korsatmalar: [
      "Хронический и эпизодический запор (атония/вялость кишечника)",
      "Состояния, требующие облегчения дефекации (геморрой, анальная трещина, после операции)",
      "Очищение кишечника перед диагностикой"
    ],
    qarrshi: [
      "Гиперчувствительность к сенне/антрахинонам",
      "Кишечная непроходимость, острый живот, острые воспалительные заболевания кишечника, аппендицит",
      "Спастический запор, неясная боль в животе",
      "Тяжёлая дегидратация; беременность (I триместр) и лактация (с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Кишечная колика, спазм, диарея",
      "Метаболические": "При длительном применении гипокалиемия, альбуминурия, гематурия",
      "Прочие": "При длительном применении пигментация слизистой кишки (melanosis coli), атония, зависимость; изменение цвета мочи"
    },
    dozadan: "Диарея, боль в животе, потеря воды и электролитов (гипокалиемия). Лечение: восполнение жидкости и электролитов.",
    ozarotasir: [
      "С диуретиками, ГКС, минералокортикоидами повышается риск гипокалиемии",
      "Гипокалиемия усиливает действие сердечных гликозидов"
    ],
    qollash: {
      kattalar: "1–2 таблетки (15–30 мг сеннозидов) или чай/настой на ночь; действие через 8–12 ч.",
      bolalar: "С 6 лет: в сниженной дозе, кратковременно"
    },
    chiqarish: "Таблетки (сеннозиды 13,5 мг); растительное сырьё (лист/плод), чай"
  },
  en: {
    gruppa: "Laxatives — herbal contact (anthraquinones)",
    farmTasir: "Senna-based stimulant laxative",
    farmakodinamika: `Sennosides A and B are anthraquinone (anthraglycoside) derivatives from the leaves and pods of senna (Cassia/Senna). Colonic bacteria split them to the active form (rheinanthrone), which irritates the colonic mucosa and the Auerbach plexus, enhancing peristalsis. They also reduce water and electrolyte absorption from the bowel and increase luminal secretion — increasing stool volume and moisture. Onset is in 8–12 h.`,
    farmakokinetika: {
      sorish: "The active compound is barely absorbed; activated by colonic bacteria",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Activated by gut bacteria",
      chiqarilish: "Mainly in faeces; a small part in urine (may change its colour)"
    },
    korsatmalar: [
      "Chronic and episodic constipation (bowel atony/sluggishness)",
      "Conditions requiring easier defecation (haemorrhoids, anal fissure, postoperative)",
      "Bowel cleansing before diagnostics"
    ],
    qarrshi: [
      "Hypersensitivity to senna/anthraquinones",
      "Intestinal obstruction, acute abdomen, acute inflammatory bowel disease, appendicitis",
      "Spastic constipation, undiagnosed abdominal pain",
      "Severe dehydration; pregnancy (first trimester) and lactation (caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Intestinal colic, spasm, diarrhoea",
      "Metabolic": "Hypokalaemia, albuminuria, haematuria with prolonged use",
      "Other": "Colonic mucosal pigmentation (melanosis coli), atony, dependence with prolonged use; urine colour change"
    },
    dozadan: "Diarrhoea, abdominal pain, water and electrolyte loss (hypokalaemia). Treatment: replace fluids and electrolytes.",
    ozarotasir: [
      "Hypokalaemia risk increases with diuretics, corticosteroids, mineralocorticoids",
      "Hypokalaemia enhances the effect of cardiac glycosides"
    ],
    qollash: {
      kattalar: "1–2 tablets (15–30 mg sennosides) or tea/infusion at night; onset in 8–12 h.",
      bolalar: "From 6 years: reduced dose, short term"
    },
    chiqarish: "Tablets (sennosides 13.5 mg); herbal material (leaf/pod), tea"
  }
},

// ─── A06AB08 · Natriy pikosulfat ──────────────────────────────────────────
"A06AB08": {
  uz: {
    gruppa: "Surgi (laksativ) vositalar — kontakt (stimulyatsiyalovchi)",
    farmTasir: "Yo'g'on ichakni qo'zg'atuvchi surgi vosita",
    farmakodinamika: `Natriy pikosulfat — triarilmetan hosilasi, kontakt (stimulyatsiyalovchi) laksativ. Yo'g'on ichak bakteriyalari (sulfataza) ta'sirida faol metabolitga aylanadi, yo'g'on ichak shilliq pardasini qo'zg'atib peristaltikani kuchaytiradi va suv-elektrolitlar so'rilishini kamaytiradi. Bisakodilga o'xshash mexanizm, lekin oshqozon va ingichka ichakда parchalanmaydi — faqat yo'g'on ichakда faollashadi. Ta'sir 6–12 soatda boshlanadi.`,
    farmakokinetika: {
      sorish: "Deyarli so'rilmaydi; yo'g'on ichakда bakterial faollanadi",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Ichak bakteriyalari tomonidan faollashtiriladi",
      chiqarilish: "Asosan najas bilan"
    },
    korsatmalar: [
      "Surunkali va vaqtinchalik qabziyat",
      "Defekatsiyani yumshatish kerak bo'lgan holatlar",
      "Diagnostik tekshiruv/operatsiya oldidan ichakni tayyorlash (kombinatsiyalangan shakllarda)"
    ],
    qarrshi: [
      "Natriy pikosulfatга o'ta sezuvchanlik",
      "Ichak tutilishi, o'tkir qorin, o'tkir yallig'lanishli ichak kasalliklari, appendisit",
      "Og'ir degidratatsiya, elektrolit buzilishlari"
    ],
    nojoya: {
      "Oshqozon-ichak": "Qorin sanchig'i, spazm, diareya, ko'ngil aynishi",
      "Metabolik": "Uzoq/ko'p qo'llashda gipokaliemiya, suyuqlik yo'qotilishi",
      "Boshqa": "Uzoq qo'llashda atoniya va bog'liqlik"
    },
    dozadan: "Diareya, suv-elektrolit yo'qotilishi, gipokaliemiya. Davolash: suyuqlik/elektrolit to'ldirish.",
    ozarotasir: [
      "Diuretiklar, GKS bilan gipokaliemiya xavfi oshadi",
      "Keng spektrli antibiotiklar ichak florasini bostirib laksativ ta'sirini kamaytiradi",
      "Gipokaliemiya yurak glikozidlari ta'sirini kuchaytiradi"
    ],
    qollash: {
      kattalar: "5–10 mg (10–20 tomchi) yoki 1 tabletka kechqurun uxlash oldidan; ta'sir 6–12 soatда.",
      bolalar: "4 yoshdan: 2,5–5 mg (5–10 tomchi) kechqurun"
    },
    chiqarish: "Tomchilar 7,5 mg/ml; tabletkalar 5 mg"
  },
  ru: {
    gruppa: "Слабительные средства — контактные (стимулирующие)",
    farmTasir: "Слабительное, стимулирующее толстую кишку",
    farmakodinamika: `Натрия пикосульфат — производное триарилметана, контактное (стимулирующее) слабительное. Под действием бактерий толстой кишки (сульфатаза) превращается в активный метаболит, раздражающий слизистую толстой кишки, усиливая перистальтику и снижая всасывание воды и электролитов. Механизм подобен бисакодилу, но не расщепляется в желудке и тонкой кишке — активируется только в толстой. Действие через 6–12 ч.`,
    farmakokinetika: {
      sorish: "Почти не всасывается; активируется бактериями толстой кишки",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Активируется кишечными бактериями",
      chiqarilish: "Преимущественно с калом"
    },
    korsatmalar: [
      "Хронический и эпизодический запор",
      "Состояния, требующие облегчения дефекации",
      "Подготовка кишечника перед диагностикой/операцией (в комбинированных формах)"
    ],
    qarrshi: [
      "Гиперчувствительность к натрия пикосульфату",
      "Кишечная непроходимость, острый живот, острые воспалительные заболевания кишечника, аппендицит",
      "Тяжёлая дегидратация, электролитные нарушения"
    ],
    nojoya: {
      "ЖКТ": "Кишечная колика, спазм, диарея, тошнота",
      "Метаболические": "При длительном/избыточном применении гипокалиемия, потеря жидкости",
      "Прочие": "При длительном применении атония и зависимость"
    },
    dozadan: "Диарея, потеря воды и электролитов, гипокалиемия. Лечение: восполнение жидкости/электролитов.",
    ozarotasir: [
      "С диуретиками, ГКС повышается риск гипокалиемии",
      "Антибиотики широкого спектра подавляют флору, снижая слабительное действие",
      "Гипокалиемия усиливает действие сердечных гликозидов"
    ],
    qollash: {
      kattalar: "5–10 мг (10–20 капель) или 1 таблетка на ночь; действие через 6–12 ч.",
      bolalar: "С 4 лет: 2,5–5 мг (5–10 капель) на ночь"
    },
    chiqarish: "Капли 7,5 мг/мл; таблетки 5 мг"
  },
  en: {
    gruppa: "Laxatives — contact (stimulant)",
    farmTasir: "Stimulant laxative acting on the colon",
    farmakodinamika: `Sodium picosulfate is a triarylmethane derivative, a contact (stimulant) laxative. Colonic bacteria (sulfatase) convert it to an active metabolite that irritates the colonic mucosa, enhancing peristalsis and reducing water and electrolyte absorption. Its mechanism is similar to bisacodyl, but it is not split in the stomach and small intestine — being activated only in the colon. Onset is in 6–12 h.`,
    farmakokinetika: {
      sorish: "Barely absorbed; activated by colonic bacteria",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Activated by gut bacteria",
      chiqarilish: "Mainly in faeces"
    },
    korsatmalar: [
      "Chronic and episodic constipation",
      "Conditions requiring easier defecation",
      "Bowel preparation before diagnostics/surgery (in combination forms)"
    ],
    qarrshi: [
      "Hypersensitivity to sodium picosulfate",
      "Intestinal obstruction, acute abdomen, acute inflammatory bowel disease, appendicitis",
      "Severe dehydration, electrolyte disturbances"
    ],
    nojoya: {
      "Gastrointestinal": "Intestinal colic, spasm, diarrhoea, nausea",
      "Metabolic": "Hypokalaemia, fluid loss with prolonged/excessive use",
      "Other": "Atony and dependence with prolonged use"
    },
    dozadan: "Diarrhoea, water and electrolyte loss, hypokalaemia. Treatment: replace fluids/electrolytes.",
    ozarotasir: [
      "Hypokalaemia risk increases with diuretics, corticosteroids",
      "Broad-spectrum antibiotics suppress flora, reducing the laxative effect",
      "Hypokalaemia enhances the effect of cardiac glycosides"
    ],
    qollash: {
      kattalar: "5–10 mg (10–20 drops) or 1 tablet at night; onset in 6–12 h.",
      bolalar: "From 4 years: 2.5–5 mg (5–10 drops) at night"
    },
    chiqarish: "Drops 7.5 mg/mL; tablets 5 mg"
  }
},

// ─── A06AD11 · Laktuloza ──────────────────────────────────────────────────
"A06AD11": {
  uz: {
    gruppa: "Surgi (laksativ) vositalar — osmotik",
    farmTasir: "Osmotik surgi va ammiakni kamaytiruvchi vosita",
    farmakodinamika: `Laktuloza — galaktoza va fruktozadan iborat sintetik disaxarid. Ingichka ichakда so'rilmaydi va parchalanmaydi (inson fermentlari yo'q), yo'g'on ichakda bakteriyalar tomonidan past molekulali organik kislotalarga (sut, sirka, chumoli kislotasi) parchalanadi. Bu osmotik bosimni oshirib ichakka suv tortadi, najas hajmini va namligini oshiradi hamda peristaltikani rag'batlantiradi (laksativ ta'sir). Ichak muhitini kislotali qiladi, bu ammiak (NH3) ni ammoniyga (NH4+) aylantirib qonga so'rilishini kamaytiradi (gipoammoniemik ta'sir — jigar ensefalopatiyasida).`,
    farmakokinetika: {
      sorish: "Deyarli so'rilmaydi (<3%); yo'g'on ichakда bakterial parchalanadi",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Yo'g'on ichak bakteriyalari tomonidan metabolizmga uchraydi",
      chiqarilish: "Asosan najas bilan"
    },
    korsatmalar: [
      "Surunkali qabziyat (yumshoq, fiziologik surgi)",
      "Jigar ensefalopatiyasi (prekoma va koma) profilaktikasi va davosi",
      "Defekatsiyani yumshatish kerak bo'lgan holatlar (bavosil, anal yoriq, operatsiyadan keyin)",
      "Salmonellyoz tashuvchanligida ichak florasini sog'lomlashtirish"
    ],
    qarrshi: [
      "Laktulozaга o'ta sezuvchanlik",
      "Galaktozemiya",
      "Ichak tutilishi, o'tkir qorin, ichak perforatsiyasi xavfi",
      "Ehtiyotkorlik: qandli diabet (yuqori dozalarda)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Meteorizm, qorin shishi va sanchig'i (boshlanishida), diareya (ko'p dozada)",
      "Metabolik": "Uzoq/ko'p qo'llashda suv-elektrolit (kaliy) yo'qotilishi",
      "Boshqa": "Ko'ngil aynishi (kam)"
    },
    dozadan: "Diareya va qorin og'rig'i, elektrolit yo'qotilishi. Davolash: dozani kamaytirish, suyuqlik/elektrolitlarni to'ldirish.",
    ozarotasir: [
      "Ichak pH ini pasaytiruvchi (laktuloza) ta'siri yo'g'on ichakда faollashadigan preparatlarga (ba'zi PPI/mesalazinга) ta'sir qilishi mumkin",
      "Antatsidlar va antibiotiklar laksativ/ozaytiruvchi ta'sirini kamaytirishi mumkin"
    ],
    qollash: {
      kattalar: "Qabziyat: 15–45 ml/sut (boshlang'ich), keyin 10–25 ml/sut saqlash. Jigar ensefalopatiyasi: 30–45 ml kuniga 3–4 marta (kuniga 2–3 yumshoq najasga erishilguncha).",
      bolalar: "Yoshга qarab 5–15 ml/sut (chaqaloqlar uchun ham mavjud)"
    },
    chiqarish: "Ichish uchun sirop 667 mg/ml (paketlar yoki flakonlar)"
  },
  ru: {
    gruppa: "Слабительные средства — осмотические",
    farmTasir: "Осмотическое слабительное, снижающее аммиак",
    farmakodinamika: `Лактулоза — синтетический дисахарид из галактозы и фруктозы. Не всасывается и не расщепляется в тонкой кишке (нет ферментов у человека), в толстой кишке расщепляется бактериями до низкомолекулярных органических кислот (молочная, уксусная, муравьиная). Это повышает осмотическое давление, притягивая воду в кишку, увеличивает объём и влажность кала и стимулирует перистальтику (слабительное действие). Закисляет содержимое кишки, превращая аммиак (NH3) в аммоний (NH4+) и снижая его всасывание в кровь (гипоаммониемическое действие — при печёночной энцефалопатии).`,
    farmakokinetika: {
      sorish: "Почти не всасывается (<3%); расщепляется бактериями толстой кишки",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Метаболизируется бактериями толстой кишки",
      chiqarilish: "Преимущественно с калом"
    },
    korsatmalar: [
      "Хронический запор (мягкое физиологическое слабительное)",
      "Профилактика и лечение печёночной энцефалопатии (прекома и кома)",
      "Состояния, требующие облегчения дефекации (геморрой, анальная трещина, после операции)",
      "Оздоровление кишечной флоры при сальмонеллёзном носительстве"
    ],
    qarrshi: [
      "Гиперчувствительность к лактулозе",
      "Галактоземия",
      "Кишечная непроходимость, острый живот, риск перфорации кишки",
      "С осторожностью: сахарный диабет (при высоких дозах)"
    ],
    nojoya: {
      "ЖКТ": "Метеоризм, вздутие и колика (в начале), диарея (при высоких дозах)",
      "Метаболические": "При длительном/избыточном применении потеря воды и электролитов (калия)",
      "Прочие": "Тошнота (редко)"
    },
    dozadan: "Диарея и боль в животе, потеря электролитов. Лечение: снижение дозы, восполнение жидкости/электролитов.",
    ozarotasir: [
      "Закисляя содержимое кишки, может влиять на препараты, активируемые в толстой кишке (некоторые ИПП/месалазин)",
      "Антациды и антибиотики могут снижать слабительное/закисляющее действие"
    ],
    qollash: {
      kattalar: "Запор: 15–45 мл/сут (начальная), затем 10–25 мл/сут поддержка. Печёночная энцефалопатия: 30–45 мл 3–4 раза в день (до 2–3 мягких стулов в день).",
      bolalar: "По возрасту 5–15 мл/сут (есть формы для младенцев)"
    },
    chiqarish: "Сироп для приёма внутрь 667 мг/мл (пакеты или флаконы)"
  },
  en: {
    gruppa: "Laxatives — osmotic",
    farmTasir: "Osmotic laxative that lowers ammonia",
    farmakodinamika: `Lactulose is a synthetic disaccharide of galactose and fructose. It is not absorbed or split in the small intestine (humans lack the enzyme); in the colon bacteria break it down to low-molecular organic acids (lactic, acetic, formic). This raises osmotic pressure, drawing water into the bowel, increasing stool volume and moisture and stimulating peristalsis (laxative effect). It acidifies the bowel content, converting ammonia (NH3) to ammonium (NH4+) and reducing its absorption into the blood (hypoammonaemic effect — in hepatic encephalopathy).`,
    farmakokinetika: {
      sorish: "Barely absorbed (<3%); broken down by colonic bacteria",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Metabolised by colonic bacteria",
      chiqarilish: "Mainly in faeces"
    },
    korsatmalar: [
      "Chronic constipation (gentle physiological laxative)",
      "Prophylaxis and treatment of hepatic encephalopathy (precoma and coma)",
      "Conditions requiring easier defecation (haemorrhoids, anal fissure, postoperative)",
      "Restoring gut flora in Salmonella carriage"
    ],
    qarrshi: [
      "Hypersensitivity to lactulose",
      "Galactosaemia",
      "Intestinal obstruction, acute abdomen, risk of bowel perforation",
      "Caution: diabetes mellitus (at high doses)"
    ],
    nojoya: {
      "Gastrointestinal": "Flatulence, bloating and colic (at the start), diarrhoea (at high doses)",
      "Metabolic": "Water and electrolyte (potassium) loss with prolonged/excessive use",
      "Other": "Nausea (rare)"
    },
    dozadan: "Diarrhoea and abdominal pain, electrolyte loss. Treatment: reduce dose, replace fluids/electrolytes.",
    ozarotasir: [
      "By acidifying bowel content it may affect drugs activated in the colon (some PPIs/mesalazine)",
      "Antacids and antibiotics may reduce the laxative/acidifying effect"
    ],
    qollash: {
      kattalar: "Constipation: 15–45 mL/day (initial), then 10–25 mL/day maintenance. Hepatic encephalopathy: 30–45 mL 3–4 times daily (to achieve 2–3 soft stools/day).",
      bolalar: "By age 5–15 mL/day (infant formulations available)"
    },
    chiqarish: "Oral syrup 667 mg/mL (sachets or bottles)"
  }
},

// ─── A06AX01 · Glitserin (rektal) ─────────────────────────────────────────
"A06AX01": {
  uz: {
    gruppa: "Surgi (laksativ) vositalar — boshqa (osmotik/yumshatuvchi)",
    farmTasir: "Mahalliy osmotik rektal surgi vosita",
    farmakodinamika: `Glitserin (glitserol) — rektal yo'l bilan qo'llanганда osmotik va yumshatuvchi laksativ. To'g'ri ichak shilliq pardasidan suv tortib najasni yumshatadi va hajmini oshiradi; shilliq pardani yengil tirnashtirib (osmotik va mahalliy ta'sir) defekatsiya refleksini qo'zg'atadi. Shuningdek surilish jarayonini yengillashtiruvchi moylash (lubrikant) ta'siriga ega. Ta'sir tez (15–30 daqiqada) boshlanadi.`,
    farmakokinetika: {
      sorish: "Rektal qo'llashda mahalliy ta'sir; oz qism so'rilib metabolizmga kiradi",
      tarqalish: "So'rilgan qism organizm suvi bilan tarqaladi",
      metabolizm: "Jigarда glyukoza va glikogenga metabolizmga uchraydi",
      chiqarilish: "Metabolitlar tabiiy yo'llar bilan"
    },
    korsatmalar: [
      "Vaqtinchalik qabziyat (ich qotishi)",
      "Defekatsiyani yengillashtirish kerak bo'lgan holatlar (bavosil, anal yoriq, keksalar, yotoq rejimi)",
      "Tug'ruqdan keyin va operatsiyadan keyin ichakni yengil bo'shatish"
    ],
    qarrshi: [
      "Glitseringa o'ta sezuvchanlik",
      "To'g'ri ichak yallig'lanishi, yoriqlari yoki o'smasi (o'tkir bosqichda)",
      "O'tkir gemorroy zo'rayishi, proktit, anal qonash"
    ],
    nojoya: {
      "Mahalliy": "To'g'ri ichakда achishish, tirnashish, kamdan-kam yallig'lanish",
      "Boshqa": "Uzoq qo'llashda to'g'ri ichak kataralli yallig'lanishi, tabiiy defekatsiya refleksining susayishi"
    },
    dozadan: "Mahalliy qo'llashda ehtimoli past; uzoq qo'llashda mahalliy tirnashish — to'xtatish.",
    ozarotasir: [
      "Klinik ahamiyatga ega o'zaro ta'sir yo'q (mahalliy)"
    ],
    qollash: {
      kattalar: "1 rektal svecha (2–3 g) kerak bo'lganda, odatda ertalab nonushtadan keyin.",
      bolalar: "Bolalar uchun svechalar (1–1,5 g) yoshга qarab"
    },
    chiqarish: "Rektal svechalar 1,5 g (bolalar), 2–3 g (kattalar); rektal eritma"
  },
  ru: {
    gruppa: "Слабительные средства — прочие (осмотические/смягчающие)",
    farmTasir: "Местное осмотическое ректальное слабительное",
    farmakodinamika: `Глицерин (глицерол) при ректальном применении — осмотическое и смягчающее слабительное. Притягивает воду из слизистой прямой кишки, размягчая кал и увеличивая его объём; лёгкое раздражение слизистой (осмотическое и местное действие) вызывает рефлекс дефекации. Обладает также смазывающим (лубрикантным) действием, облегчающим прохождение кала. Действие наступает быстро (через 15–30 минут).`,
    farmakokinetika: {
      sorish: "При ректальном применении местное действие; небольшая часть всасывается",
      tarqalish: "Всосавшаяся часть распределяется с водой организма",
      metabolizm: "Метаболизируется в печени до глюкозы и гликогена",
      chiqarilish: "Метаболиты естественными путями"
    },
    korsatmalar: [
      "Эпизодический запор",
      "Состояния, требующие облегчения дефекации (геморрой, анальная трещина, пожилые, постельный режим)",
      "Лёгкое опорожнение кишечника после родов и операций"
    ],
    qarrshi: [
      "Гиперчувствительность к глицерину",
      "Воспаление, трещины или опухоль прямой кишки (в острой стадии)",
      "Острое обострение геморроя, проктит, анальное кровотечение"
    ],
    nojoya: {
      "Местные": "Жжение, раздражение в прямой кишке, редко воспаление",
      "Прочие": "При длительном применении катаральное воспаление прямой кишки, ослабление естественного рефлекса дефекации"
    },
    dozadan: "При местном применении маловероятна; при длительном применении местное раздражение — отмена.",
    ozarotasir: [
      "Клинически значимых взаимодействий нет (местное)"
    ],
    qollash: {
      kattalar: "1 ректальная свеча (2–3 г) при необходимости, обычно утром после завтрака.",
      bolalar: "Детские свечи (1–1,5 г) по возрасту"
    },
    chiqarish: "Ректальные свечи 1,5 г (детские), 2–3 г (взрослые); ректальный раствор"
  },
  en: {
    gruppa: "Laxatives — other (osmotic/emollient)",
    farmTasir: "Local osmotic rectal laxative",
    farmakodinamika: `Glycerol (glycerin), administered rectally, is an osmotic and emollient laxative. It draws water from the rectal mucosa, softening the stool and increasing its volume; mild mucosal irritation (osmotic and local action) triggers the defecation reflex. It also has a lubricant effect that eases passage of stool. Onset is rapid (within 15–30 minutes).`,
    farmakokinetika: {
      sorish: "Local action with rectal use; a small part is absorbed",
      tarqalish: "The absorbed fraction distributes with body water",
      metabolizm: "Metabolised in the liver to glucose and glycogen",
      chiqarilish: "Metabolites via natural pathways"
    },
    korsatmalar: [
      "Episodic constipation",
      "Conditions requiring easier defecation (haemorrhoids, anal fissure, elderly, bed rest)",
      "Gentle bowel emptying after childbirth and surgery"
    ],
    qarrshi: [
      "Hypersensitivity to glycerol",
      "Rectal inflammation, fissures or tumour (in the acute stage)",
      "Acute haemorrhoid exacerbation, proctitis, anal bleeding"
    ],
    nojoya: {
      "Local": "Burning, irritation in the rectum, rarely inflammation",
      "Other": "Catarrhal rectal inflammation and weakening of the natural defecation reflex with prolonged use"
    },
    dozadan: "Unlikely with local use; local irritation with prolonged use — discontinue.",
    ozarotasir: [
      "No clinically significant interactions (local)"
    ],
    qollash: {
      kattalar: "1 rectal suppository (2–3 g) as needed, usually in the morning after breakfast.",
      bolalar: "Paediatric suppositories (1–1.5 g) by age"
    },
    chiqarish: "Rectal suppositories 1.5 g (paediatric), 2–3 g (adult); rectal solution"
  }
},

// ─── A07AA02 · Nistatin ───────────────────────────────────────────────────
"A07AA02": {
  uz: {
    gruppa: "Ichak antiinfeksion vositalari (poliyen antibiotiklari)",
    farmTasir: "Zamburug'larga qarshi (antifungal) poliyen antibiotik",
    farmakodinamika: `Nistatin — poliyen guruhiga mansub antifungal antibiotik. Zamburug' hujayra membranasidagi ergosterolga bog'lanib, membranada g'ovaklar (kanallar) hosil qiladi; bu hujayra ichidagi ionlar (K+) va komponentlarning chiqib ketishiga olib keladi va zamburug' halok bo'ladi. Asosan Candida turlariga (C. albicans) fungistatik/fungitsid ta'sir ko'rsatadi. Bakteriyalar va viruslarga ta'siri yo'q. Mahalliy va ichak luminида ishlaydi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan deyarli so'rilmaydi; ichak luminида mahalliy ta'sir",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Metabolizmga uchramaydi",
      chiqarilish: "Asosan najas bilan o'zgarmagan holda"
    },
    korsatmalar: [
      "Oshqozon-ichak yo'li kandidozi (og'iz, qizilo'ngach, ichak)",
      "Antibiotiklar bilan davolashda kandidoz profilaktikasi",
      "Teri va shilliq pardalar kandidozi (mahalliy shakllar)",
      "Vaginal kandidoz (mahalliy shakllar)"
    ],
    qarrshi: [
      "Nistatinга o'ta sezuvchanlik",
      "Og'ir jigar funksiyasi buzilishi (ehtiyotkorlik)",
      "Oshqozon-ichak yarasi zo'rayishi (ichak shakli uchun ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qusish, diareya, qorin noxushligi (katta dozada)",
      "Allergiya": "Toshma, qichishish, isitma, kamdan-kam Stivens-Johnson sindromi",
      "Boshqa": "Yuqori dozada ta'm sezgisining o'zgarishi"
    },
    dozadan: "Past tizimli so'rilish tufayli toksiklik past; ko'p dozada oshqozon-ichak belgilari — simptomatik.",
    ozarotasir: [
      "Klinik ahamiyatga ega tizimli o'zaro ta'sir kam (so'rilmaydi)"
    ],
    qollash: {
      kattalar: "Ichak kandidozida: 500 000 IB kuniga 3–4 marta (1,5–3 mln IB/sut), 10–14 kun. Og'iz kandidozida suspenziya bilan chayish/yutish.",
      bolalar: "Yoshга qarab 100 000–250 000 IB kuniga 3–4 marta"
    },
    chiqarish: "Tabletkalar 500 000 IB; ichish uchun suspenziya; rektal/vaginal svechalar; malham"
  },
  ru: {
    gruppa: "Кишечные противоинфекционные средства (полиеновые антибиотики)",
    farmTasir: "Противогрибковый полиеновый антибиотик",
    farmakodinamika: `Нистатин — противогрибковый антибиотик группы полиенов. Связывается с эргостеролом мембраны грибковой клетки, образуя в мембране поры (каналы); это ведёт к выходу внутриклеточных ионов (K+) и компонентов, и гриб погибает. Действует преимущественно фунгистатически/фунгицидно на виды Candida (C. albicans). На бактерии и вирусы не действует. Работает местно и в просвете кишечника.`,
    farmakokinetika: {
      sorish: "Почти не всасывается из ЖКТ; местное действие в просвете кишки",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Не метаболизируется",
      chiqarilish: "Преимущественно с калом в неизменённом виде"
    },
    korsatmalar: [
      "Кандидоз ЖКТ (рот, пищевод, кишечник)",
      "Профилактика кандидоза при лечении антибиотиками",
      "Кандидоз кожи и слизистых (местные формы)",
      "Вагинальный кандидоз (местные формы)"
    ],
    qarrshi: [
      "Гиперчувствительность к нистатину",
      "Тяжёлые нарушения функции печени (с осторожностью)",
      "Обострение язвы ЖКТ (с осторожностью для кишечной формы)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, рвота, диарея, дискомфорт в животе (при высоких дозах)",
      "Аллергические": "Сыпь, зуд, лихорадка, редко синдром Стивенса–Джонсона",
      "Прочие": "Изменение вкуса при высоких дозах"
    },
    dozadan: "Из-за низкого системного всасывания токсичность низкая; при больших дозах ЖКТ-симптомы — симптоматически.",
    ozarotasir: [
      "Клинически значимых системных взаимодействий мало (не всасывается)"
    ],
    qollash: {
      kattalar: "При кишечном кандидозе: 500 000 ЕД 3–4 раза в день (1,5–3 млн ЕД/сут), 10–14 дней. При оральном кандидозе полоскание/проглатывание суспензии.",
      bolalar: "По возрасту 100 000–250 000 ЕД 3–4 раза в день"
    },
    chiqarish: "Таблетки 500 000 ЕД; суспензия для приёма внутрь; ректальные/вагинальные свечи; мазь"
  },
  en: {
    gruppa: "Intestinal anti-infectives (polyene antibiotics)",
    farmTasir: "Antifungal polyene antibiotic",
    farmakodinamika: `Nystatin is an antifungal antibiotic of the polyene group. It binds to ergosterol in the fungal cell membrane, forming pores (channels); this leads to leakage of intracellular ions (K+) and components, and the fungus dies. It acts mainly fungistatically/fungicidally against Candida species (C. albicans). It has no effect on bacteria or viruses. It works locally and in the bowel lumen.`,
    farmakokinetika: {
      sorish: "Barely absorbed from the GI tract; local action in the bowel lumen",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Not metabolised",
      chiqarilish: "Mainly in faeces unchanged"
    },
    korsatmalar: [
      "GI tract candidiasis (mouth, oesophagus, intestine)",
      "Prophylaxis of candidiasis during antibiotic therapy",
      "Skin and mucosal candidiasis (topical forms)",
      "Vaginal candidiasis (local forms)"
    ],
    qarrshi: [
      "Hypersensitivity to nystatin",
      "Severe hepatic impairment (caution)",
      "Exacerbation of GI ulcer (caution for the intestinal form)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, vomiting, diarrhoea, abdominal discomfort (at high doses)",
      "Hypersensitivity": "Rash, itching, fever, rarely Stevens–Johnson syndrome",
      "Other": "Taste change at high doses"
    },
    dozadan: "Toxicity is low due to low systemic absorption; GI symptoms at large doses — symptomatic.",
    ozarotasir: [
      "Few clinically significant systemic interactions (not absorbed)"
    ],
    qollash: {
      kattalar: "Intestinal candidiasis: 500,000 IU 3–4 times daily (1.5–3 million IU/day), 10–14 days. For oral candidiasis, swish/swallow the suspension.",
      bolalar: "By age 100,000–250,000 IU 3–4 times daily"
    },
    chiqarish: "Tablets 500,000 IU; oral suspension; rectal/vaginal suppositories; ointment"
  }
},

// ─── A07AX03 · Nifuroksazid ───────────────────────────────────────────────
"A07AX03": {
  uz: {
    gruppa: "Ichak antiseptiklari (nitrofuran hosilalari)",
    farmTasir: "Ichakка ta'sir qiluvchi antibakterial (ichak antiseptigi)",
    farmakodinamika: `Nifuroksazid — nitrofuran hosilasi, ichak antiseptigi. Bakteriya hujayrasidagi degidrogenaza fermentlarini inhibe qilib, hayotiy muhim oqsillar va nuklein kislotalar sintezini buzadi; pastroq konsentratsiyada bakteriostatik, yuqori konsentratsiyada bakteritsid. Ko'plab gram-musbat (stafilokokk, streptokokk) va gram-manfiy (E. coli, Salmonella, Shigella, Klebsiella, Proteus, Vibrio) ichak patogenlariga faol. Ichak luminида ishlaydi, normal ichak florasini deyarli buzmaydi va chidamlilik kam rivojlanadi.`,
    farmakokinetika: {
      sorish: "Oshqozon-ichakdan deyarli so'rilmaydi (<5%); ichak luminида mahalliy ta'sir",
      tarqalish: "Tizimli taqsimlanish ahamiyatsiz",
      metabolizm: "Ichakда faol ta'sir; so'rilgan oz qism metabolizmga uchraydi",
      chiqarilish: "Asosan najas bilan"
    },
    korsatmalar: [
      "O'tkir va surunkali bakterial diareya (ich ketishi)",
      "Bakterial kelib chiqishli yuqumli enterit va kolit",
      "Ichak infeksiyalari profilaktikasi va kompleks davosi",
      "Regidratatsiya bilan birga ichburug' (suvsizlanish belgilarsiz)"
    ],
    qarrshi: [
      "Nifuroksazid yoki nitrofuranlarga o'ta sezuvchanlik",
      "1 oygacha (suspenziya) / 6 yoshgacha (kapsula) bolalar",
      "Homiladorlik (I trimestr, ehtiyotkorlik)"
    ],
    nojoya: {
      "Oshqozon-ichak": "Ko'ngil aynishi, qorin og'rig'i (kam), diareyaning kuchayishi (kam)",
      "Allergiya": "Toshma, qichishish, eshakemi, kamdan-kam Kvinke shishi/anafilaksiya"
    },
    dozadan: "Past toksiklik (so'rilmaydi); simptomatik davolash.",
    ozarotasir: [
      "Etanol bilan disulfiramsimon reaksiya berishi mumkin",
      "Sorbentlar (faollashtirilgan ko'mir) bilan birga ta'siri kamayadi",
      "Tizimli o'zaro ta'sir kam (so'rilmaydi)"
    ],
    qollash: {
      kattalar: "200 mg (1 kapsula) kuniga 4 marta; kurs 5–7 kun.",
      bolalar: "1–6 oy: 100 mg kuniga 2–3 marta; 6 oy–6 yosh: 100 mg kuniga 3 marta; 6 yoshdan: 200 mg kuniga 3–4 marta (suspenziya)"
    },
    chiqarish: "Kapsulalar 200 mg; ichish uchun suspenziya 220 mg/5 ml"
  },
  ru: {
    gruppa: "Кишечные антисептики (производные нитрофурана)",
    farmTasir: "Антибактериальное средство, действующее в кишечнике (кишечный антисептик)",
    farmakodinamika: `Нифуроксазид — производное нитрофурана, кишечный антисептик. Ингибирует дегидрогеназные ферменты бактериальной клетки, нарушая синтез жизненно важных белков и нуклеиновых кислот; в более низких концентрациях бактериостатичен, в высоких — бактерициден. Активен в отношении многих грамположительных (стафилококки, стрептококки) и грамотрицательных (E. coli, Salmonella, Shigella, Klebsiella, Proteus, Vibrio) кишечных патогенов. Действует в просвете кишечника, почти не нарушает нормальную флору, устойчивость развивается мало.`,
    farmakokinetika: {
      sorish: "Почти не всасывается из ЖКТ (<5%); местное действие в просвете кишки",
      tarqalish: "Системное распределение незначительно",
      metabolizm: "Действует в кишке; всосавшаяся малая часть метаболизируется",
      chiqarilish: "Преимущественно с калом"
    },
    korsatmalar: [
      "Острая и хроническая бактериальная диарея",
      "Инфекционный энтерит и колит бактериального происхождения",
      "Профилактика и комплексное лечение кишечных инфекций",
      "Диарея с регидратацией (без признаков обезвоживания)"
    ],
    qarrshi: [
      "Гиперчувствительность к нифуроксазиду или нитрофуранам",
      "Дети до 1 месяца (суспензия) / до 6 лет (капсулы)",
      "Беременность (I триместр, с осторожностью)"
    ],
    nojoya: {
      "ЖКТ": "Тошнота, боль в животе (редко), усиление диареи (редко)",
      "Аллергические": "Сыпь, зуд, крапивница, редко отёк Квинке/анафилаксия"
    },
    dozadan: "Низкая токсичность (не всасывается); симптоматическое лечение.",
    ozarotasir: [
      "С этанолом может давать дисульфирамоподобную реакцию",
      "С сорбентами (активированный уголь) действие снижается",
      "Системных взаимодействий мало (не всасывается)"
    ],
    qollash: {
      kattalar: "200 мг (1 капсула) 4 раза в день; курс 5–7 дней.",
      bolalar: "1–6 мес: 100 мг 2–3 раза в день; 6 мес–6 лет: 100 мг 3 раза в день; с 6 лет: 200 мг 3–4 раза в день (суспензия)"
    },
    chiqarish: "Капсулы 200 мг; суспензия для приёма внутрь 220 мг/5 мл"
  },
  en: {
    gruppa: "Intestinal antiseptics (nitrofuran derivatives)",
    farmTasir: "Antibacterial acting in the bowel (intestinal antiseptic)",
    farmakodinamika: `Nifuroxazide is a nitrofuran derivative, an intestinal antiseptic. It inhibits bacterial dehydrogenase enzymes, disrupting synthesis of vital proteins and nucleic acids; bacteriostatic at lower and bactericidal at higher concentrations. It is active against many Gram-positive (staphylococci, streptococci) and Gram-negative (E. coli, Salmonella, Shigella, Klebsiella, Proteus, Vibrio) enteric pathogens. It acts in the bowel lumen, barely disturbs the normal flora, and resistance rarely develops.`,
    farmakokinetika: {
      sorish: "Barely absorbed from the GI tract (<5%); local action in the bowel lumen",
      tarqalish: "Systemic distribution negligible",
      metabolizm: "Acts in the bowel; the small absorbed fraction is metabolised",
      chiqarilish: "Mainly in faeces"
    },
    korsatmalar: [
      "Acute and chronic bacterial diarrhoea",
      "Infectious enteritis and colitis of bacterial origin",
      "Prophylaxis and combination treatment of intestinal infections",
      "Diarrhoea with rehydration (without signs of dehydration)"
    ],
    qarrshi: [
      "Hypersensitivity to nifuroxazide or nitrofurans",
      "Children under 1 month (suspension) / under 6 years (capsules)",
      "Pregnancy (first trimester, caution)"
    ],
    nojoya: {
      "Gastrointestinal": "Nausea, abdominal pain (rare), worsening of diarrhoea (rare)",
      "Hypersensitivity": "Rash, itching, urticaria, rarely angioedema/anaphylaxis"
    },
    dozadan: "Low toxicity (not absorbed); symptomatic treatment.",
    ozarotasir: [
      "May cause a disulfiram-like reaction with ethanol",
      "Effect is reduced with sorbents (activated charcoal)",
      "Few systemic interactions (not absorbed)"
    ],
    qollash: {
      kattalar: "200 mg (1 capsule) four times daily; course 5–7 days.",
      bolalar: "1–6 months: 100 mg 2–3 times daily; 6 months–6 years: 100 mg three times daily; from 6 years: 200 mg 3–4 times daily (suspension)"
    },
    chiqarish: "Capsules 200 mg; oral suspension 220 mg/5 mL"
  }
}

};
