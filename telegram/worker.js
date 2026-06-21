// ═══════════════════════════════════════════════════════════
//  MedCore — Telegram bot webhook (Cloudflare Worker)
//  Vazifasi: /start va boshqa xabarlarga javoban ilovani ochuvchi
//  "Mini App" tugmasini yuborish. Ilova butunlay web (GitHub Pages),
//  bot faqat kirish nuqtasi.
//
//  MAXFIY: BOT_TOKEN hech qachon bu faylda emas — faqat Worker
//  "secret" sifatida saqlanadi:  wrangler secret put BOT_TOKEN
// ═══════════════════════════════════════════════════════════

// Telegram ichida ochiladigan ilova manzili (GitHub Pages)
const WEBAPP_URL = "https://xumoyunmirzoai-commits.github.io/medical-app/";

// Webhookni o'rnatishda ishlatiladigan maxfiy yo'l (ixtiyoriy, lekin tavsiya etiladi)
// Telegram'dan kelgan so'rovlar shu sirli sarlavha bilan kelishi tekshiriladi.
const SECRET_HEADER = "X-Telegram-Bot-Api-Secret-Token";

const WELCOME = {
  uz: "🏥 *MedCore* — tibbiyot ma'lumotnomasiga xush kelibsiz!\n\n💊 8600+ dori, farmakologiya, laboratoriya ko'rsatkichlari va dorilar o'zaro ta'siri — barchasi bir joyda.\n\nIlovani ochish uchun quyidagi tugmani bosing 👇",
  ru: "🏥 Добро пожаловать в *MedCore* — медицинский справочник!\n\n💊 8600+ препаратов, фармакология, лабораторные показатели и взаимодействия — всё в одном месте.\n\nНажмите кнопку ниже, чтобы открыть приложение 👇",
  en: "🏥 Welcome to *MedCore* — your medical reference!\n\n💊 8600+ drugs, pharmacology, lab values and drug interactions — all in one place.\n\nTap the button below to open the app 👇"
};

const BTN = { uz: "💊 MedCore ochish", ru: "💊 Открыть MedCore", en: "💊 Open MedCore" };

function pickLang(code) {
  const lc = String(code || "").slice(0, 2);
  return lc === "ru" || lc === "en" ? lc : "uz";
}

async function tg(token, method, body) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("MedCore Telegram bot webhook is alive.", { status: 200 });
    }

    // Maxfiy sarlavhani tekshirish (agar o'rnatilgan bo'lsa)
    if (env.WEBHOOK_SECRET) {
      const got = request.headers.get(SECRET_HEADER);
      if (got !== env.WEBHOOK_SECRET) return new Response("forbidden", { status: 403 });
    }

    let update;
    try { update = await request.json(); } catch { return new Response("bad request", { status: 400 }); }

    const msg = update.message || update.edited_message;
    if (msg && msg.chat) {
      const lang = pickLang(msg.from && msg.from.language_code);
      await tg(env.BOT_TOKEN, "sendMessage", {
        chat_id: msg.chat.id,
        text: WELCOME[lang],
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [[{ text: BTN[lang], web_app: { url: WEBAPP_URL } }]]
        }
      });
    }

    // Telegram har doim 200 kutadi
    return new Response("ok", { status: 200 });
  }
};
