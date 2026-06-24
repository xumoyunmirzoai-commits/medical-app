# Kunlik avtopost — har kuni kanalga 5 ta dori

Bot (Cloudflare Worker) **har kuni avtomatik** rasmiy kanalga 5 ta dori
ma'lumotini post qiladi. Har post oxirida bot, ilova va kanal havolalari bo'ladi.

## Qanday ishlaydi
- **Cron**: kun **teng 5 qismga** bo'lingan (har ~4 soat 48 daqiqa), har safar **1 ta dori**.
  Jami kuniga 5 ta post. `wrangler.toml`:
  `crons = ["0 18 * * *", "48 22 * * *", "36 3 * * *", "24 8 * * *", "12 13 * * *"]` (UTC).
  Toshkent vaqti bo'yicha: **23:00, 03:48, 08:36, 13:24, 18:12**.
- Vaqtlarni o'zgartirish: `wrangler.toml` dagi cron'larni tahrirlang (UTC = Toshkent − 5 soat).
- **Navbat**: dorilar `bot-data/search.json` tartibida ketma-ket tanlanadi.
  Oxirgi joy KV'da (`daily:idx`) saqlanadi — har kuni keyingi 5 tasi, takrorlanmaydi,
  ro'yxat tugagach boshidan aylanadi.
- **Til**: kanal tili — o'zbekcha (`CHANNEL_LANG = 'uz'` worker.js da).
- Farmakologiya mavjud dorilar uchun postga qisqa "Ta'siri" va "Ko'rsatmalar" ham qo'shiladi.

## Deploy (o'zgarish kuchga kirishi uchun SHART)
Kod faqat qayta deploy qilingach ishlaydi:
```bash
cd telegram-worker
npx wrangler deploy
```
Cron Trigger'lar deploydan keyin Cloudflare panelida ko'rinadi:
**Workers & Pages → medcore-bot → Settings → Triggers → Cron Triggers**.

## Qo'lda sinash (kutmasdan tekshirish)
Himoyalangan endpoint orqali darhol 5 ta post yuborish (broadcast bilan bir xil
`ADMIN_SECRET` ishlatiladi):
```bash
curl -s -X POST "https://medcore-bot.xumoyunmirzoai.workers.dev/admin/daily-post" \
  -H "X-Admin-Secret: <ADMIN_SECRET>"
# Javob: {"ok":true,"sent":5,"from":0,"next":5,"total":8649}
```
> ⚠️ Bu haqiqatan kanalga 5 ta post yuboradi va navbatni 5 ga suradi.

## Sozlamalar (worker.js boshida)
| O'zgaruvchi | Standart | Tavsif |
|---|---|---|
| `DAILY_COUNT` | `1` | Har cron ishga tushganda nechta dori (kuniga 5 marta cron) |
| `CHANNEL_LANG` | `'uz'` | Post tili |
| `APP_URL` | github.io/medical-app | Footer ilova havolasi |
| `BOT_USERNAME` | @MedCore_…_bot | Footer bot havolasi |
| `CHANNEL_HANDLE` | @MedCore_Tibbiyot_Platformasi | Footer kanal havolasi |
