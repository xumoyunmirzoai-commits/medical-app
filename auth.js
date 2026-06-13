// =============================================
//  MedCore — auth.js
//  Google Sign-In + Demo Mode Authentication
// =============================================

// ══════════════════════════════════════════
// SOZLAMA — Bu yerga o'zingizning
// Google Client ID ni kiriting:
// 1) console.cloud.google.com ga kiring
// 2) Yangi loyiha yarating
// 3) "OAuth 2.0 Client ID" yarating
// 4) Authorized origins ga localhost va
//    faylingiz manzilini qo'shing
// ══════════════════════════════════════════
const GOOGLE_CLIENT_ID = "940738533350-52qg92i39i9q71vfnkmrkk4k3tsto9v7.apps.googleusercontent.com";
// Masalan: "123456789-abcde.apps.googleusercontent.com"

const AUTH_KEY   = "mc_auth_user";
const SESSION_KEY = "mc_auth_session";

// ─── Page load — check existing session ───
window.addEventListener("load", () => {
  // Faqat login.html da ishlaydi
  if (!document.getElementById("googleSignInBtn")) return;

  const existing = getStoredUser();
  if (existing) {
    // Agar login bo'lgan bo'lsa — to'g'ridan index.html ga o'tamiz
    redirectToApp();
  }

  // Google GSI ni inicializatsiya
  if (GOOGLE_CLIENT_ID !== "YOUR_GOOGLE_CLIENT_ID") {
    initGoogleSignIn();
    document.getElementById("setupNotice").style.display = "none";
  }
});

// ─── Google GSI Init ───
function initGoogleSignIn() {
  if (typeof google === "undefined") {
    console.warn("Google GSI yuklanmadi. Internet aloqasini tekshiring.");
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleSignIn,
    auto_select: false,
    cancel_on_tap_outside: true,
  });
}

// ─── Sign In Button ───
function signInWithGoogle() {
  if (GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID") {
    showSetupModal();
    return;
  }

  if (typeof google === "undefined") {
    alert("Google xizmati yuklanmadi. Internet aloqasini tekshiring.");
    return;
  }

  showLoading("Google bilan bog'lanilmoqda...");

  google.accounts.id.prompt(notification => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      // Fallback: popup
      google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: "email profile openid",
        callback: handleTokenResponse,
      }).requestAccessToken();
    }
    hideLoading();
  });
}

// ─── Google callback (JWT token) ───
function handleGoogleSignIn(response) {
  showLoading("Ma'lumotlar tekshirilmoqda...");
  try {
    const payload = parseJwt(response.credential);
    const user = {
      id:      payload.sub,
      name:    payload.name,
      email:   payload.email,
      picture: payload.picture,
      given_name: payload.given_name,
      loginType: "google",
      loginAt: new Date().toISOString(),
    };
    saveUser(user);
    showLoading("Xush kelibsiz, " + user.given_name + "! 🎉");
    setTimeout(redirectToApp, 1200);
  } catch (e) {
    hideLoading();
    console.error("Google Sign-In xatosi:", e);
    alert("Kirish jarayonida xatolik yuz berdi. Qaytadan urinib ko'ring.");
  }
}

// ─── Token response (fallback) ───
function handleTokenResponse(tokenResponse) {
  if (tokenResponse.error) {
    hideLoading();
    alert("Kirish bekor qilindi.");
    return;
  }
  showLoading("Ma'lumotlar tekshirilmoqda...");

  // Google UserInfo endpoint dan foydalanuvchi ma'lumotlarini olamiz
  fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: "Bearer " + tokenResponse.access_token }
  })
  .then(r => r.json())
  .then(profile => {
    const user = {
      id:      profile.sub,
      name:    profile.name,
      email:   profile.email,
      picture: profile.picture,
      given_name: profile.given_name,
      loginType: "google",
      loginAt: new Date().toISOString(),
    };
    saveUser(user);
    showLoading("Xush kelibsiz, " + user.given_name + "! 🎉");
    setTimeout(redirectToApp, 1200);
  })
  .catch(() => {
    hideLoading();
    alert("Foydalanuvchi ma'lumotlarini olishda xatolik.");
  });
}

// ─── Setup Modal (when no client ID) ───
function showSetupModal() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.5);
    backdrop-filter:blur(4px);z-index:2000;
    display:flex;align-items:center;justify-content:center;
  `;
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:36px;max-width:500px;width:90%;box-shadow:0 24px 48px rgba(0,0,0,.2)">
      <div style="font-size:36px;text-align:center;margin-bottom:16px">⚙️</div>
      <h3 style="font-size:18px;font-weight:800;color:#111;text-align:center;margin-bottom:10px">
        Google Client ID kerak
      </h3>
      <p style="font-size:13.5px;color:#6b7280;line-height:1.7;text-align:center;margin-bottom:20px">
        Google Sign-In ishlashi uchun Google Cloud Console da loyiha yaratib, Client ID ni olish kerak.
      </p>
      <div style="background:#fef2f2;border:1.5px solid #fecdd3;border-radius:10px;padding:16px;margin-bottom:20px;font-size:13px;line-height:1.7;color:#9f1239">
        <strong>Qadamlar:</strong><br>
        1. <a href="https://console.cloud.google.com" target="_blank" style="color:#e11d48">console.cloud.google.com</a> ga kiring<br>
        2. Yangi loyiha yarating (masalan: "MedCore")<br>
        3. APIs → OAuth consent screen → sozlang<br>
        4. Credentials → Create OAuth 2.0 Client ID<br>
        5. Application type: <strong>Web application</strong><br>
        6. Origins ga: <code style="background:rgba(0,0,0,.07);padding:1px 5px;border-radius:3px">file://</code> yoki serveringiz URL ni qo'shing<br>
        7. Client ID ni nusxa olib <code style="background:rgba(0,0,0,.07);padding:1px 5px;border-radius:3px">auth.js</code> ga qo'ying
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="this.closest('div[style]').parentElement.remove()"
          style="flex:1;padding:12px;border-radius:10px;border:none;background:#e11d48;color:#fff;font-size:13.5px;font-weight:600;cursor:pointer">
          Yopish
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════

function parseJwt(token) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(base64));
}

function saveUser(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  sessionStorage.setItem(SESSION_KEY, "active");
}

function getStoredUser() {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); }
  catch { return null; }
}

function clearUser() {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

function redirectToApp() {
  window.location.href = "index.html";
}

function redirectToLogin() {
  window.location.href = "login.html";
}

function showLoading(text = "Yuklanmoqda...") {
  const el = document.getElementById("authLoading");
  const txt = document.getElementById("loadingText");
  if (el) { el.classList.add("show"); }
  if (txt) { txt.textContent = text; }
}

function hideLoading() {
  const el = document.getElementById("authLoading");
  if (el) el.classList.remove("show");
}

// ══════════════════════════════════════════
// INDEX.HTML DA ISHLATILADIGAN FUNKSIYALAR
// ══════════════════════════════════════════

// index.html da session tekshirish
function checkAuthOnAppPage() {
  const user = getStoredUser();
  if (!user) {
    window.location.href = "login.html";
    return null;
  }
  return user;
}

// Profilni topbarda ko'rsatish
function renderUserInTopbar(user) {
  const avatarEl = document.querySelector(".topbar-avatar");
  const sidebarUser = document.querySelector(".user-name");
  const sidebarRole = document.querySelector(".user-role");
  const sidebarAvatar = document.querySelector(".user-avatar");

  if (avatarEl) {
    if (user.picture) {
      avatarEl.innerHTML = `<img src="${user.picture}" style="width:34px;height:34px;border-radius:9px;object-fit:cover" referrerpolicy="no-referrer"/>`;
      avatarEl.style.background = "none";
      avatarEl.style.padding = "0";
    } else {
      avatarEl.textContent = getInitials(user.name);
    }
  }

  if (sidebarUser)   sidebarUser.textContent  = user.name;
  if (sidebarRole)   sidebarRole.textContent  = "Shifokor";
  if (sidebarAvatar) {
    if (user.picture) {
      sidebarAvatar.innerHTML = `<img src="${user.picture}" style="width:36px;height:36px;border-radius:9px;object-fit:cover" referrerpolicy="no-referrer"/>`;
      sidebarAvatar.style.background = "none";
      sidebarAvatar.style.padding = "0";
    } else {
      sidebarAvatar.textContent = getInitials(user.name);
    }
  }
}

// Chiqish (logout)
function signOut() {
  if (!confirm("Chiqishni tasdiqlaysizmi?")) return;

  // Google session ni ham tugatish
  if (typeof google !== "undefined" && GOOGLE_CLIENT_ID !== "YOUR_GOOGLE_CLIENT_ID") {
    const user = getStoredUser();
    if (user?.id) {
      google.accounts.id.revoke(user.email, () => {});
    }
  }

  clearUser();
  window.location.href = "login.html";
}

function getInitials(name) {
  if (!name) return "?";
  return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
}
