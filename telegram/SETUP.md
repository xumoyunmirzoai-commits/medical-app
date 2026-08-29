# MedCore — Telegram bot (Mini App) sozlash

Ilova Telegram ichida **Mini App** sifatida ochiladi: bot foydalanuvchiga tugma
beradi, tugma bosilganda butun MedCore ilovasi Telegram oynasida ochiladi.
Ilova allaqachon Telegram'ni taniydi (`index.html` ichidagi integratsiya) —
foydalanuvchi Google'siz avtomatik kiradi, tili va mavzusi moslashadi.

> ⚠️ **Maxfiylik:** bot tokeni hech qachon repoga yozilmaydi. Uni faqat
> quyidagi buyruqlarda (terminalda) yoki Cloudflare "secret" sifatida ishlating.
> Token tasodifan oshkor bo'lsa — BotFather'da `/revoke` qilib yangilang.

Quyida `<TOKEN>` o'rniga o'z bot tokeningizni qo'ying.

---

## A variant — Eng oddiy (serversiz): "Menu" tugmasi

Bitta marta API chaqirig'i — bot ostidagi doimiy menyu tugmasi ilovani ochadi.
Hech qanday server/hosting kerak emas.

```bash
# 1) Menyu tugmasini Mini App'ga ulash
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setChatMenuButton" \
  -H "Content-Type: application/json" \
  -d '{"menu_button":{"type":"web_app","text":"MedCore","web_app":{"url":"https://xumoyunmirzoai-commits.github.io/medical-app/"}}}'

# 2) Bot tavsifi (foydalanuvchi botni ochganda ko'radi)
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setMyDescription" \
  -H "Content-Type: application/json" \
  -d '{"description":"MedCore — tibbiyot ma'lumotnomasi: 8600+ dori, farmakologiya, laboratoriya va dorilar o'zaro ta'siri. Ochish uchun pastdagi tugmani bosing."}'

curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setMyShortDescription" \
  -H "Content-Type: application/json" \
  -d '{"short_description":"Tibbiyot ma'lumotnomasi: dorilar, farmakologiya, laboratoriya."}'

# 3) /start buyrug'i ro'yxatda ko'rinsin
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setMyCommands" \
  -H "Content-Type: application/json" \
  -d '{"commands":[{"command":"start","description":"MedCore ilovasini ochish"}]}'
```

Shundan so'ng botni Telegram'da oching → pastdagi **MedCore** tugmasi ilovani ochadi.

---

## B variant — `/start` ga chiroyli javob (Cloudflare Worker)

`/start` (yoki istalgan xabar) yuborilganda bot xush kelibsiz matni va ilovani
ochuvchi tugma yuboradi. Bu mavjud push Worker'ingiz bilan bir xil platformada.

### 1. Worker yaratish va deploy

```bash
cd telegram
# wrangler o'rnatilmagan bo'lsa: npm i -g wrangler
wrangler init medcore-tg-bot      # yoki mavjud loyihaga worker.js ni qo'shing
# worker.js ni asosiy fayl qiling, keyin:
wrangler secret put BOT_TOKEN      # so'raganda bot tokenini kiriting
wrangler secret put WEBHOOK_SECRET # ixtiyoriy: tasodifiy uzun satr
wrangler deploy
```

Deploydan keyin Worker manzilini olasiz, masalan:
`https://medcore-tg-bot.<akkaunt>.workers.dev`

### 2. Webhookni ulash

```bash
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://medcore-tg-bot.<akkaunt>.workers.dev","secret_token":"<WEBHOOK_SECRET>"}'
```

(`secret_token` ni 1-bosqichdagi `WEBHOOK_SECRET` bilan bir xil qiling; ishlatmasangiz olib tashlang.)

### 3. Tekshirish

Telegram'da botga `/start` yuboring — xush kelibsiz xabari va **MedCore ochish**
tugmasi keladi.

> A va B variantlarni birga ishlatish mumkin: menyu tugmasi doimo ko'rinadi,
> `/start` esa chiroyli kirish beradi.

---

## Foydali buyruqlar

```bash
# Webhook holatini ko'rish
curl -s "https://api.telegram.org/bot<TOKEN>/getWebhookInfo"

# Webhookni o'chirish (long-polling'ga qaytish uchun)
curl -s "https://api.telegram.org/bot<TOKEN>/deleteWebhook"

# Menyu tugmasini odatiy holatga qaytarish
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/setChatMenuButton" \
  -d '{"menu_button":{"type":"default"}}'
```
