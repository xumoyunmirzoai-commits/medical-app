// GitHub Actions secretини o'rnatish (libsodium sealed box bilan).
// Ishlatish: GH_PAT=... SECRET_VALUE=... node tools/set-gh-secret.js OWNER REPO SECRET_NAME
// Bu fayl commit qilinmaydi (faqat lokal sozlash uchun).
const sodium = require('libsodium-wrappers');

const [owner, repo, name] = process.argv.slice(2);
const pat = process.env.GH_PAT;
const value = process.env.SECRET_VALUE;
if (!owner || !repo || !name || !pat || !value) { console.error('Argument yetishmaydi'); process.exit(1); }

const api = (path, opts = {}) => fetch('https://api.github.com' + path, {
  ...opts,
  headers: {
    'Authorization': 'token ' + pat,
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'medcore-setup',
    'Content-Type': 'application/json',
    ...(opts.headers || {})
  }
});

(async () => {
  await sodium.ready;
  // 1) repo public key
  const r = await api(`/repos/${owner}/${repo}/actions/secrets/public-key`);
  if (!r.ok) { console.error('public-key xato', r.status, await r.text()); process.exit(1); }
  const { key, key_id } = await r.json();
  // 2) sealed box bilan shifrlash
  const bin = sodium.from_base64(key, sodium.base64_variants.ORIGINAL);
  const enc = sodium.crypto_box_seal(sodium.from_string(value), bin);
  const encrypted_value = sodium.to_base64(enc, sodium.base64_variants.ORIGINAL);
  // 3) secretni PUT
  const p = await api(`/repos/${owner}/${repo}/actions/secrets/${name}`, {
    method: 'PUT', body: JSON.stringify({ encrypted_value, key_id })
  });
  console.log(p.status === 201 ? 'YARATILDI' : p.status === 204 ? 'YANGILANDI' : ('XATO ' + p.status + ' ' + await p.text()));
})();
