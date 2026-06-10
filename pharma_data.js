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
}

};
