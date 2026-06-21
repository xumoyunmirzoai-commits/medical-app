# MedCore — Telegram bot (native, Mini App EMAS)

Bu **to'laqonli Telegram bot**: ilova ochilmaydi, barcha ma'lumotlar
botning o'zida — inline tugmali menyular orqali. Funksiyalar:

- `/start` → avval kanalga (`@MedCore_Tibbiyot_Platformasi`) **a'zolik tekshiriladi**
- A'zo bo'lgach — bosh menyu ochiladi (ilovadagi kabi):
  - 💊 **Dorilar bazasi** → guruhlar → dorilar (sahifalab) → dori kartasi → **Farmakologiya** (farmakodinamika, kinetika, ko'rsatma, qarshi, nojo'ya, dozalash, o'zaro ta'sir, dozadan oshish, shakl)
  - 🔬 **Laboratoriya** → bo'limlar → ko'rsatkich (normalar, optimum, yuqori/past sabablari)
  - 🔎 **Qidiruv** — dori nomini yozsangiz bo'ladi
  - 🌐 **Til** — o'zbek / rus / ingliz
- Ma'lumotlar mavjud `../data.js`, `../pharma_data.js`, `../lab_data.js` fayllaridan
  o'qiladi (alohida nusxa kerak emas).

Bog'liqliklar: **yo'q** (faqat Node.js 18+ — `fetch` o'rnatilgan).

---

## ⚠️ 1-shart: bot kanalda ADMIN bo'lsin

A'zolikni tekshirish uchun bot `@MedCore_Tibbiyot_Platformasi` kanalida
**administrator** bo'lishi shart:
Kanal → Administrators → Add Admin → `@MedCore_Tibbiyot_Platformasi_bot` qo'shing.
(Aks holda bot a'zolikni o'qiy olmaydi va hammani "a'zo emas" deb hisoblaydi.)

## ⚠️ 2-shart: token muhit o'zgaruvchisida

Token **hech qachon kodga yozilmaydi**. Faqat `BOT_TOKEN` orqali beriladi.
Token oshkor bo'lgan bo'lsa — BotFather'da `/revoke` qilib yangilang.

---

## A) O'z kompyuteringizda ishga tushirish (sinash uchun eng tez)

1. Node.js 18+ o'rnating: https://nodejs.org
2. Terminalda:

   **Windows (PowerShell):**
   ```powershell
   cd "telegram-bot"
   $env:BOT_TOKEN="<BOT_TOKEN>"
   node bot.js
   ```
   **macOS / Linux:**
   ```bash
   cd telegram-bot
   BOT_TOKEN=<BOT_TOKEN> node bot.js
   ```

3. Telegram'da botga `/start` yuboring.

> Kamchilik: kompyuter o'chsa yoki terminal yopilsa, bot to'xtaydi. Doimiy
> ishlashi uchun quyidagi (B) bulutli variantni ishlating.

## B) Bulutda 24/7 ishlatish (tavsiya etiladi)

Bot **long polling** ishlatadi — ochiq URL/domen kerak emas, istalgan Node
hostida ishlaydi. Eng oson variantlar:

### Railway (https://railway.app)
1. Reponi GitHub'ga qo'ying (allaqachon bor).
2. Railway → **New Project → Deploy from GitHub repo** → shu repo.
3. **Root Directory** = `telegram-bot` qiling (yoki Start buyrug'i: `node telegram-bot/bot.js`).
4. **Variables** → `BOT_TOKEN` = tokeningiz.
5. Deploy. Loglarda «Bot ishga tushdi» chiqsa — tayyor.

### Render (https://render.com) — "Background Worker"
1. New → **Background Worker** → GitHub repo.
2. Build: `npm install` (bog'liqlik yo'q, baribir o'tadi).
3. Start: `node telegram-bot/bot.js`
4. Environment → `BOT_TOKEN` qo'shing.

> Eslatma: Render'ning bepul **Web Service**'i uxlab qoladi; bot uchun
> **Background Worker** yoki Railway afzal.

### O'z serveringiz (VPS) — pm2 bilan
```bash
npm i -g pm2
cd telegram-bot
BOT_TOKEN=<BOT_TOKEN> pm2 start bot.js --name medcore-bot
pm2 save && pm2 startup
```

---

## Sozlash o'zgaruvchilari

| O'zgaruvchi | Majburiy | Tavsif |
|---|---|---|
| `BOT_TOKEN` | ✅ | BotFather bergan token |
| `CHANNEL`   | ❌ | Majburiy a'zolik kanali (standart: `@MedCore_Tibbiyot_Platformasi`) |

## Tuzilma

- `bot.js` — butun bot mantig'i (menyular, qidiruv, farmakologiya, laboratoriya)
- `user_lang.json` — foydalanuvchi tili (avtomatik yaratiladi)
- Ma'lumot: `../data.js`, `../pharma_data.js`, `../lab_data.js`

> Bu bot Mini App'dan mustaqil. Mini App (menyu tugmasi) kerak bo'lmasa,
> uni o'chirish: `telegram/SETUP.md` ichidagi `setChatMenuButton` → `{"type":"default"}`.
