# 🔔 MedCore Web Push (VAPID) — Sozlash qo'llanmasi

OneSignalsiz, o'zimizning push tizimi. Telefon yopiq turganda ham bildirishnoma keladi.

Tizim 3 qismdan iborat:
1. **Mijoz** (index.html + sw.js) — ✅ tayyor, kod yozilgan
2. **Cloudflare Worker** — obunalarni saqlaydi (bir martalik sozlash kerak)
3. **GitHub Action** — yangi dori qo'shilganda hammaga yuboradi (✅ kod tayyor, faqat Secrets kerak)

---

## 🔑 VAPID kalitlar (allaqachon generatsiya qilingan)

```
VAPID_PUBLIC_KEY  = BJGIrkQeyTx2miUTO67BHbnUgS4v6wyOg6Gkmf8O_OyTF_o3o4iMEHR1syvfduGQo6vKxr8BemN1YndGAn5En5I
VAPID_PRIVATE_KEY = (maxfiy — chat orqali yuborilgan, bu yerga yozilmaydi)
```

- **Ochiq kalit** allaqachon `index.html` va `sw.js` ichida.
- **Maxfiy kalit** hech qachon kodga/repoga yozilmaydi — faqat GitHub Secrets'ga (pastga qarang).
  Uni Claude chat orqali alohida yubordi.

---

## 1️⃣ Cloudflare Worker (obunalar ombori) — bepul, karta kerakmas

1. https://dash.cloudflare.com → ro'yxatdan o'ting (bepul).
2. Chap menyuda **Storage & Databases → KV** → **Create namespace** → nomi: `SUBSCRIPTIONS` → Create.
3. **Workers & Pages → Create → Create Worker** → nom bering (masalan `medcore-push`) → Deploy.
4. **Edit code** → `push/cloudflare-worker.js` faylidagi kodni to'liq joylashtiring → **Deploy**.
5. Worker → **Settings → Bindings → Add → KV namespace**:
   - Variable name: `SUBS`
   - KV namespace: `SUBSCRIPTIONS` → Save.
6. Worker → **Settings → Variables and Secrets → Add → Secret**:
   - Name: `ADMIN_KEY`
   - Value: uzun tasodifiy parol (masalan 32 belgili) — uni eslab qoling → Deploy.
7. Worker URL'ini nusxa oling, masalan:
   `https://medcore-push.SIZNING-NOMINGIZ.workers.dev`

---

## 2️⃣ index.html ga Worker URL'ini yozish

`index.html` ichidagi qatorni toping va Worker URL'ini yozing:

```js
const PUSH_API = "https://medcore-push.SIZNING-NOMINGIZ.workers.dev";
```

Keyin commit + push qiling.

---

## 3️⃣ GitHub Secrets qo'shish

GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**.
Quyidagi 5 ta secret'ni qo'shing:

| Nomi | Qiymati |
|------|---------|
| `VAPID_PUBLIC_KEY` | `BJGIrkQeyTx2miUTO67BHbnUgS4v6wyOg6Gkmf8O_OyTF_o3o4iMEHR1syvfduGQo6vKxr8BemN1YndGAn5En5I` |
| `VAPID_PRIVATE_KEY` | (chat orqali yuborilgan maxfiy kalit) |
| `VAPID_SUBJECT` | `mailto:sizning@email.uz` |
| `PUSH_API` | Worker URL (yuqoridagi bilan bir xil) |
| `PUSH_ADMIN_KEY` | Worker'dagi `ADMIN_KEY` bilan bir xil parol |

---

## ✅ Tayyor! Qanday ishlaydi

- **Foydalanuvchi**: ilovada 🔔 tugmasini bosadi → "Ruxsat berish" → obuna bo'ladi.
- **Yangi dori**: siz `pharma_data.js` ni push qilasiz → GitHub Action avtomatik ishga tushadi → barcha obunachilarga push yuboradi (telefon yopiq bo'lsa ham).
- **Qo'lda yuborish**: GitHub repo → Actions → "Foydalanuvchilarga bildirishnoma" → Run workflow → sarlavha/matn kiriting.

## 🧪 Tekshirish

- Worker ishlayaptimi: brauzerda `https://...workers.dev/count` → `{"count":0}` chiqishi kerak.
- Obuna bo'lgach `/count` 1 ga oshadi.
- Action loglari: GitHub → Actions → oxirgi run → "Web Push bildirishnoma yuborish".

## ⚠️ Eslatma
- Push **faqat HTTPS** da ishlaydi (GitHub Pages HTTPS — ✅). Localhost'da test qilish mumkin, lekin file:// da emas.
- iOS'da: foydalanuvchi avval ilovani "Add to Home Screen" qilishi kerak (Apple cheklovi).
