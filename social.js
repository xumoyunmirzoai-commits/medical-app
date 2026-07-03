// ══════════════════════════════════════════════════════════
//  MedCore — Jamiyat (Social) frontend
//  Profil, kanal, YouTube video/material postlar, like, komment,
//  obuna va shaxsiy chat. Backend: medcore-social (Cloudflare + D1).
// ══════════════════════════════════════════════════════════
(function () {
  const API = (typeof SOCIAL_API !== "undefined") ? SOCIAL_API : "";
  const GID = (typeof GOOGLE_CLIENT_ID !== "undefined") ? GOOGLE_CLIENT_ID : "";
  const TOKEN_KEY = "mc_social_token";
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let me = null, view = "feed", feedScope = "all", pollTimer = null, chatWith = null, inited = false;

  const STR = {
    uz: { join: "Jamiyatga qoʻshiling", joinDesc: "Video darslar yuklang, kanal oching, hamkasblar bilan muloqot qiling.", feed: "Lenta", discover: "Kashf et", chat: "Suhbatlar", mine: "Mening kanalim", upload: "Yuklash", all: "Barchasi", following: "Obunalarim", like: "Yoqdi", comment: "Izoh", comments: "Izohlar", follow: "Obuna boʻlish", unfollow: "Obunani bekor qilish", followers: "obunachi", subs: "obuna", posts: "post", write: "Izoh yozing...", send: "Yuborish", noPosts: "Hali post yoʻq", newPost: "Yangi post", video: "Video (YouTube)", material: "Material (havola)", title: "Sarlavha", ytLink: "YouTube havolasi yoki ID", matLink: "Material havolasi (URL)", descr: "Tavsif (ixtiyoriy)", tag: "Mavzu (ixtiyoriy)", publish: "Eʼlon qilish", edit: "Tahrirlash", save: "Saqlash", bio: "Oʻzingiz haqingizda...", name: "Ism", msg: "Xabar yozing...", noChats: "Hali suhbat yoʻq. Kanaldan yozing.", del: "Oʻchirish", back: "Orqaga", search: "Qidirish...", loginBtn: "Google bilan kirish", views: "" }
  };
  const T = () => STR.uz;

  // ── API ──
  function token() { try { return localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; } }
  async function api(path, opts = {}) {
    const h = { "Content-Type": "application/json" };
    const t = token(); if (t) h.Authorization = "Bearer " + t;
    const r = await fetch(API + path, { method: opts.method || "GET", headers: h, body: opts.body ? JSON.stringify(opts.body) : undefined });
    if (r.status === 401) { try { localStorage.removeItem(TOKEN_KEY); } catch (e) {} me = null; renderGate(); throw new Error("auth"); }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || "error");
    return j;
  }

  const avatar = (u, size = 40) => u && u.avatar
    ? `<img class="soc-av" style="width:${size}px;height:${size}px" src="${esc(u.avatar)}" referrerpolicy="no-referrer" alt="">`
    : `<div class="soc-av soc-av-ph" style="width:${size}px;height:${size}px;font-size:${size * 0.4}px">${esc((u && u.name || "?").slice(0, 1).toUpperCase())}</div>`;
  function ago(ts) {
    const d = (Date.now() - ts) / 1000;
    if (d < 60) return "hozir"; if (d < 3600) return Math.floor(d / 60) + " daq"; if (d < 86400) return Math.floor(d / 3600) + " soat";
    if (d < 2592000) return Math.floor(d / 86400) + " kun"; return new Date(ts).toLocaleDateString();
  }
  const root = () => $("socRoot");
  function stopPoll() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }

  // ── Sessiya / kirish ──
  async function loadMe() { try { const j = await api("/me"); me = j.user; return true; } catch (e) { me = null; return false; } }

  function onGoogleCred(resp) {
    api("/auth/session", { method: "POST", body: { provider: "google", id_token: resp.credential } })
      .then(j => { try { localStorage.setItem(TOKEN_KEY, j.token); } catch (e) {} me = j.user; renderShell(); showFeed("all"); })
      .catch(() => alert("Kirishda xatolik. Qayta urinib koʻring."));
  }
  async function tryTelegram() {
    try {
      const tg = window.Telegram && window.Telegram.WebApp;
      if (!tg || !tg.initData) return false;
      const j = await api("/auth/session", { method: "POST", body: { provider: "telegram", initData: tg.initData } });
      localStorage.setItem(TOKEN_KEY, j.token); me = j.user; return true;
    } catch (e) { return false; }
  }

  function renderGate() {
    stopPoll();
    const t = T();
    root().innerHTML = `<div class="soc-gate">
      <div class="soc-gate-ic">👥</div>
      <h2>${t.join}</h2>
      <p>${t.joinDesc}</p>
      <div id="socGoogleBtn" class="soc-gbtn"></div>
    </div>`;
    if (window.google && google.accounts && GID) {
      try {
        google.accounts.id.initialize({ client_id: GID, callback: onGoogleCred });
        google.accounts.id.renderButton($("socGoogleBtn"), { theme: "filled_blue", size: "large", text: "continue_with", shape: "pill", locale: "uz" });
      } catch (e) { $("socGoogleBtn").innerHTML = `<button class="soc-btn primary" onclick="google.accounts.id.prompt()">${t.loginBtn}</button>`; }
    } else {
      $("socGoogleBtn").innerHTML = `<p style="color:var(--gray-500);font-size:13px">Google xizmati yuklanmadi.</p>`;
    }
  }

  // ── Shell (tab bar) ──
  function renderShell() {
    const t = T();
    $("page-social").querySelector(".soc-wrap").innerHTML = `
      <div class="soc-tabs">
        <button class="soc-tab" data-v="feed" onclick="socGo('feed')">📰 ${t.feed}</button>
        <button class="soc-tab" data-v="discover" onclick="socGo('discover')">🔍 ${t.discover}</button>
        <button class="soc-tab" data-v="chat" onclick="socGo('chat')">💬 ${t.chat}<span class="soc-tab-badge" id="socChatBadge" style="display:none"></span></button>
        <button class="soc-tab" data-v="mine" onclick="socGo('mine')">👤 ${t.mine}</button>
        <button class="soc-tab soc-tab-up" data-v="upload" onclick="socGo('upload')">＋ ${t.upload}</button>
      </div>
      <div id="socRoot" class="soc-root"></div>`;
    refreshUnread();
  }
  function setTab(v) { document.querySelectorAll(".soc-tab").forEach(b => b.classList.toggle("active", b.dataset.v === v)); }

  window.socGo = function (v) { stopPoll(); view = v; setTab(v);
    if (v === "feed") showFeed(feedScope);
    else if (v === "discover") showDiscover();
    else if (v === "chat") showChat();
    else if (v === "mine") showChannel(me.id, true);
    else if (v === "upload") showUpload();
  };

  // ── Lenta ──
  async function showFeed(scope) {
    feedScope = scope; setTab("feed");
    const t = T();
    root().innerHTML = `<div class="soc-seg">
        <button class="soc-seg-b ${scope === 'all' ? 'active' : ''}" onclick="socFeed('all')">${t.all}</button>
        <button class="soc-seg-b ${scope === 'following' ? 'active' : ''}" onclick="socFeed('following')">${t.following}</button>
      </div><div id="socFeedList"><div class="soc-load">⏳</div></div>`;
    try {
      const j = await api("/feed?scope=" + scope);
      $("socFeedList").innerHTML = j.posts.length ? j.posts.map(postCard).join("") : `<div class="soc-empty">${t.noPosts}</div>`;
    } catch (e) { if (e.message !== "auth") $("socFeedList").innerHTML = `<div class="soc-empty">Xatolik</div>`; }
  }
  window.socFeed = s => showFeed(s);

  function postCard(p) {
    const thumb = p.type === "video"
      ? `<div class="soc-thumb"><img loading="lazy" src="${esc(p.thumb)}" alt=""><span class="soc-play">▶</span></div>`
      : `<div class="soc-thumb soc-thumb-mat"><span>📄</span></div>`;
    return `<div class="soc-card" onclick="socPost('${p.id}')">
      ${thumb}
      <div class="soc-card-b">
        <div class="soc-card-title">${esc(p.title)}</div>
        <div class="soc-card-meta">${avatar(p.author, 22)}<span>${esc(p.author.name)}</span> · ${ago(p.created)}</div>
        <div class="soc-card-stat">❤ ${p.likes} · 💬 ${p.comments}${p.tag ? ` · <span class="soc-tag">${esc(p.tag)}</span>` : ""}</div>
      </div></div>`;
  }

  // ── Post / video sahifasi ──
  window.socPost = async function (id) {
    stopPoll(); const t = T();
    root().innerHTML = `<button class="soc-back" onclick="socGo('feed')">← ${t.back}</button><div class="soc-load">⏳</div>`;
    try {
      const { post: p } = await api("/posts/" + id);
      const player = p.type === "video"
        ? `<div class="soc-player"><iframe src="https://www.youtube.com/embed/${esc(p.yt_id)}" title="${esc(p.title)}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div>`
        : `<a class="soc-matbox" href="${esc(p.link)}" target="_blank" rel="noopener">📄 Materialni ochish ↗</a>`;
      const owner = me && me.id === p.author.id;
      root().innerHTML = `
        <button class="soc-back" onclick="socGo('feed')">← ${t.back}</button>
        ${player}
        <h2 class="soc-post-title">${esc(p.title)}</h2>
        <div class="soc-post-head">
          <div class="soc-post-author" onclick="socChannel('${p.author.id}')">${avatar(p.author, 40)}<div><div class="soc-pa-name">${esc(p.author.name)}</div><div class="soc-pa-sub">${ago(p.created)}</div></div></div>
          <div class="soc-post-actions">
            <button class="soc-like ${p.liked ? 'on' : ''}" id="socLikeBtn" onclick="socLike('${p.id}',${p.liked})">❤ <span id="socLikeC">${p.likes}</span></button>
            ${owner ? `<button class="soc-del" onclick="socDel('${p.id}')">🗑</button>` : ""}
          </div>
        </div>
        ${p.descr ? `<div class="soc-post-descr">${esc(p.descr).replace(/\n/g, "<br>")}</div>` : ""}
        <div class="soc-comments">
          <h3>${t.comments} (<span id="socCC">${p.comments}</span>)</h3>
          ${me ? `<div class="soc-cadd">${avatar(me, 32)}<input id="socCInput" placeholder="${t.write}" maxlength="2000"><button class="soc-btn primary" onclick="socComment('${p.id}')">${t.send}</button></div>` : ""}
          <div id="socCList"><div class="soc-load">⏳</div></div>
        </div>`;
      loadComments(id);
    } catch (e) { if (e.message !== "auth") root().innerHTML = `<div class="soc-empty">Post topilmadi</div>`; }
  };
  async function loadComments(id) {
    try { const j = await api("/posts/" + id + "/comments");
      $("socCList").innerHTML = j.comments.length ? j.comments.map(c => `<div class="soc-cm">${avatar(c.author, 30)}<div class="soc-cm-b"><div class="soc-cm-h"><b>${esc(c.author.name)}</b> <span>${ago(c.created)}</span></div><div>${esc(c.text).replace(/\n/g, "<br>")}</div></div></div>`).join("") : `<div class="soc-empty" style="padding:14px">—</div>`;
    } catch (e) {}
  }
  window.socComment = async function (id) {
    const inp = $("socCInput"); const text = (inp.value || "").trim(); if (!text) return;
    inp.value = "";
    try { await api("/posts/" + id + "/comments", { method: "POST", body: { text } }); $("socCC").textContent = (+$("socCC").textContent + 1); loadComments(id); } catch (e) {}
  };
  window.socLike = async function (id, liked) {
    try { const j = await api("/posts/" + id + "/like", { method: liked ? "DELETE" : "POST" });
      const b = $("socLikeBtn"); b.classList.toggle("on", j.liked); $("socLikeC").textContent = j.likes;
      b.setAttribute("onclick", `socLike('${id}',${j.liked})`);
    } catch (e) {}
  };
  window.socDel = async function (id) { if (!confirm("Postni oʻchirasizmi?")) return; try { await api("/posts/" + id, { method: "DELETE" }); socGo("mine"); } catch (e) {} };

  // ── Kashf et (odamlar) ──
  async function showDiscover() {
    setTab("discover"); const t = T();
    root().innerHTML = `<div class="soc-searchbar"><input id="socPeopleQ" placeholder="${t.search}" oninput="socPeople(this.value)"></div><div id="socPeople"><div class="soc-load">⏳</div></div>`;
    socPeople("");
  }
  window.socPeople = async function (q) {
    try { const j = await api("/people" + (q ? "?q=" + encodeURIComponent(q) : ""));
      $("socPeople").innerHTML = j.people.length ? j.people.map(u => `
        <div class="soc-person">
          <div class="soc-person-l" onclick="socChannel('${u.id}')">${avatar(u, 46)}<div><div class="soc-person-n">${esc(u.name)}</div><div class="soc-person-b">${esc(u.bio || "").slice(0, 60) || (u.followers + " obunachi")}</div></div></div>
          <button class="soc-btn ${u.isFollowing ? '' : 'primary'} sm" onclick="socFollow('${u.id}',${u.isFollowing},this)">${u.isFollowing ? T().unfollow : T().follow}</button>
        </div>`).join("") : `<div class="soc-empty">Hech kim topilmadi</div>`;
    } catch (e) {}
  };
  window.socFollow = async function (id, following, btn) {
    try { const j = await api("/follow/" + encodeURIComponent(id), { method: following ? "DELETE" : "POST" });
      if (btn) { btn.textContent = j.following ? T().unfollow : T().follow; btn.classList.toggle("primary", !j.following); btn.setAttribute("onclick", `socFollow('${id}',${j.following},this)`); }
    } catch (e) {}
  };

  // ── Kanal / profil ──
  window.socChannel = id => showChannel(id, me && id === me.id);
  async function showChannel(id, mine) {
    stopPoll(); setTab(mine ? "mine" : ""); const t = T();
    root().innerHTML = `<div class="soc-load">⏳</div>`;
    try {
      const info = await api("/users/" + encodeURIComponent(id));
      const ch = await api("/channel/" + encodeURIComponent(id));
      const u = info.user;
      const followBtn = (me && me.id !== id) ? `<button class="soc-btn ${info.isFollowing ? '' : 'primary'}" onclick="socFollow('${id}',${info.isFollowing},this)">${info.isFollowing ? t.unfollow : t.follow}</button>` : "";
      const editBtn = mine ? `<button class="soc-btn" onclick="socEdit()">✎ ${t.edit}</button>` : "";
      const chatBtn = (me && me.id !== id) ? `<button class="soc-btn" onclick="socOpenChat('${id}','${esc(u.name)}')">💬</button>` : "";
      root().innerHTML = `
        <div class="soc-profile">
          ${avatar(u, 76)}
          <div class="soc-profile-i">
            <div class="soc-profile-n">${esc(u.name)}</div>
            <div class="soc-profile-stat"><b>${info.posts}</b> ${t.posts} · <b>${info.followers}</b> ${t.followers} · <b>${info.following}</b> ${t.subs}</div>
            ${u.bio ? `<div class="soc-profile-bio">${esc(u.bio)}</div>` : ""}
            <div class="soc-profile-btns">${followBtn}${chatBtn}${editBtn}</div>
          </div>
        </div>
        <div class="soc-grid">${ch.posts.length ? ch.posts.map(postCard).join("") : `<div class="soc-empty">${t.noPosts}</div>`}</div>`;
    } catch (e) { if (e.message !== "auth") root().innerHTML = `<div class="soc-empty">Kanal topilmadi</div>`; }
  }
  window.socEdit = function () {
    const t = T();
    root().innerHTML = `<button class="soc-back" onclick="socGo('mine')">← ${t.back}</button>
      <div class="soc-form">
        <label>${t.name}</label><input id="socEName" value="${esc(me.name)}" maxlength="80">
        <label>${t.bio}</label><textarea id="socEBio" maxlength="500" rows="3">${esc(me.bio || "")}</textarea>
        <button class="soc-btn primary" onclick="socSaveProfile()">${t.save}</button>
      </div>`;
  };
  window.socSaveProfile = async function () {
    try { const j = await api("/me", { method: "PUT", body: { name: $("socEName").value.trim(), bio: $("socEBio").value.trim() } }); me = j.user; socGo("mine"); } catch (e) {}
  };

  // ── Yuklash ──
  function showUpload() {
    setTab("upload"); const t = T();
    root().innerHTML = `<div class="soc-form">
      <div class="soc-seg">
        <button class="soc-seg-b active" id="socTV" onclick="socType('video')">🎬 ${t.video}</button>
        <button class="soc-seg-b" id="socTM" onclick="socType('material')">📄 ${t.material}</button>
      </div>
      <label>${t.title}</label><input id="socUTitle" maxlength="160">
      <div id="socUVideo"><label>${t.ytLink}</label><input id="socULink" placeholder="https://youtu.be/..."></div>
      <label>${t.descr}</label><textarea id="socUDescr" rows="3" maxlength="4000"></textarea>
      <label>${t.tag}</label><input id="socUTag" maxlength="40" placeholder="Pediatriya, Kardiologiya...">
      <button class="soc-btn primary" onclick="socPublish()">${t.publish}</button>
      <div id="socUErr" class="soc-err"></div>
    </div>`;
  }
  let upType = "video";
  window.socType = function (x) { upType = x; $("socTV").classList.toggle("active", x === "video"); $("socTM").classList.toggle("active", x === "material");
    $("socUVideo").innerHTML = x === "video" ? `<label>${T().ytLink}</label><input id="socULink" placeholder="https://youtu.be/...">` : `<label>${T().matLink}</label><input id="socULink" placeholder="https://...">`;
  };
  window.socPublish = async function () {
    const title = $("socUTitle").value.trim(); const link = $("socULink").value.trim();
    const err = $("socUErr");
    if (!title) { err.textContent = "Sarlavha kiriting"; return; }
    if (!link) { err.textContent = "Havola kiriting"; return; }
    err.textContent = "";
    try {
      const body = { type: upType, title, descr: $("socUDescr").value.trim(), tag: $("socUTag").value.trim() };
      if (upType === "video") body.yt_id = link; else body.link = link;
      const j = await api("/posts", { method: "POST", body });
      socPost(j.post.id);
    } catch (e) { err.textContent = e.message === "bad_youtube" ? "YouTube havolasi notoʻgʻri" : (e.message === "bad_link" ? "Havola notoʻgʻri (http/https)" : "Xatolik"); }
  };

  // ── Chat ──
  async function showChat() {
    stopPoll(); setTab("chat"); chatWith = null; const t = T();
    root().innerHTML = `<div id="socThreads"><div class="soc-load">⏳</div></div>`;
    try { const j = await api("/threads");
      $("socThreads").innerHTML = j.threads.length ? j.threads.map(th => `
        <div class="soc-thread" onclick="socOpenChat('${th.user.id}','${esc(th.user.name)}')">
          ${avatar(th.user, 46)}
          <div class="soc-thread-b"><div class="soc-thread-n">${esc(th.user.name)}${th.unread ? `<span class="soc-unread">${th.unread}</span>` : ""}</div>
          <div class="soc-thread-last">${esc((th.last && th.last.text || "").slice(0, 48))}</div></div>
          <div class="soc-thread-t">${th.last ? ago(th.last.created) : ""}</div>
        </div>`).join("") : `<div class="soc-empty">${t.noChats}</div>`;
    } catch (e) {}
    refreshUnread();
  }
  window.socOpenChat = async function (id, name) {
    stopPoll(); chatWith = id; const t = T();
    root().innerHTML = `<button class="soc-back" onclick="socGo('chat')">← ${t.back}</button>
      <div class="soc-chat-head">${esc(name)}</div>
      <div id="socMsgs" class="soc-msgs"><div class="soc-load">⏳</div></div>
      <div class="soc-chat-bar"><input id="socMsgInput" placeholder="${t.msg}" maxlength="4000" onkeydown="if(event.key==='Enter')socSend()"><button class="soc-btn primary" onclick="socSend()">➤</button></div>`;
    await loadMsgs(true);
    pollTimer = setInterval(() => { if (chatWith === id && view === "chat") loadMsgs(false); }, 5000);
  };
  async function loadMsgs(scroll) {
    if (!chatWith) return;
    try { const j = await api("/messages/" + encodeURIComponent(chatWith));
      const box = $("socMsgs"); if (!box) return;
      box.innerHTML = j.messages.length ? j.messages.map(m => `<div class="soc-msg ${m.from_id === me.id ? 'out' : 'in'}"><span>${esc(m.text).replace(/\n/g, "<br>")}</span><i>${ago(m.created)}</i></div>`).join("") : `<div class="soc-empty" style="margin:auto">Suhbatni boshlang</div>`;
      if (scroll) box.scrollTop = box.scrollHeight;
      else if (box.scrollHeight - box.scrollTop - box.clientHeight < 120) box.scrollTop = box.scrollHeight;
    } catch (e) {}
  }
  window.socSend = async function () {
    const inp = $("socMsgInput"); const text = (inp.value || "").trim(); if (!text || !chatWith) return;
    inp.value = "";
    try { await api("/messages/" + encodeURIComponent(chatWith), { method: "POST", body: { text } }); await loadMsgs(true); } catch (e) {}
  };

  async function refreshUnread() {
    if (!me) return;
    try { const j = await api("/unread"); const b = $("socChatBadge"); if (b) { b.textContent = j.unread; b.style.display = j.unread ? "" : "none"; } } catch (e) {}
  }

  // ── Init ──
  window.socialInit = async function () {
    if (inited) { return; } inited = true;
    if (typeof BREADCRUMBS !== "undefined") BREADCRUMBS.social = "Jamiyat";
    let ok = token() ? await loadMe() : false;
    if (!ok) ok = await tryTelegram();
    if (ok) { renderShell(); showFeed("all"); } else { renderGate(); }
  };
  // Til/nav — lazy init nav bosilганda index.html da chaqiriladi
})();
