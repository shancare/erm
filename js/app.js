(function () {
'use strict';
const LOGO_FULL = 'data:image/png;base64,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';
/*@@FILE 01_core.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ShanERM \u2014 Inti klien: util, API, state, UI dasar \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const E = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
/** Template HTML aman: semua nilai dinamis di-escape otomatis kecuali yang dibungkus raw()/html``. */
class Raw { constructor(s) { this.s = s; } }
const raw = s => new Raw(s == null ? '' : s);
function html(strs) {
  let o = '';
  for (let i = 0; i < strs.length; i++) {
    o += strs[i];
    if (i + 1 < arguments.length) {
      const v = arguments[i + 1];
      o += Array.isArray(v) ? v.map(x => x instanceof Raw ? x.s : E(x)).join('') : (v instanceof Raw ? v.s : E(v));
    }
  }
  return new Raw(o);
}
const put = (el, v) => { if (typeof el === 'string') el = $(el); if (el) el.innerHTML = v instanceof Raw ? v.s : E(v); };

// \u2500\u2500 Penyimpanan lokal (aman bila diblokir) \u2500\u2500
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } },
  json(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  delPrefix(p) { try { Object.keys(localStorage).filter(k => k.indexOf(p) === 0).forEach(k => localStorage.removeItem(k)); } catch (e) { /* abaikan */ } }
};

// \u2500\u2500 Format \u2500\u2500
const rp = n => 'Rp ' + Math.round(Number(n) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const pd = iso => { const p = String(iso).slice(0, 10).split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); };
const tglS = iso => { if (!iso) return '-'; const d = pd(iso); return isNaN(d) ? '-' : d.getUTCDate() + ' ' + BLN[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); };
const tglPendek = iso => { const d = pd(iso); return d.getUTCDate() + ' ' + BLN[d.getUTCMonth()]; };
const tglH = iso => HARI[pd(iso).getUTCDay()] + ', ' + tglS(iso);
const addDays = (iso, n) => { const d = pd(iso); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const lokalIso = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const today = () => S.hariIni || lokalIso();
const umur = tgl => { if (!tgl) return ''; const a = pd(tgl), b = pd(today()); let u = b.getUTCFullYear() - a.getUTCFullYear(); if (b.getUTCMonth() < a.getUTCMonth() || (b.getUTCMonth() === a.getUTCMonth() && b.getUTCDate() < a.getUTCDate())) u--; return u; };
const inisial = n => String(n || '?').trim().split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const waktuS = iso => iso ? tglS(iso) + ' ' + String(iso).slice(11, 16) : '-';
const debounce = (fn, ms) => { let t; return function () { const a = arguments; clearTimeout(t); t = setTimeout(() => fn.apply(null, a), ms); }; };
const num = v => { const n = Number(String(v == null ? '' : v).replace(',', '.')); return isFinite(n) ? n : 0; };
const cls = (...a) => a.filter(Boolean).join(' ');
const deep = o => JSON.parse(JSON.stringify(o));
const PERAN_LABEL = { SUPERADMIN: 'Pemilik / Superadmin', ADMIN: 'Admin Klinik', DOKTER: 'Dokter', PERAWAT: 'Perawat', FISIO: 'Fisioterapis' };
const jkLabel = j => j === 'L' ? 'Laki-laki' : (j === 'P' ? 'Perempuan' : '-');
const STATUS_J = { TERJADWAL: ['Terjadwal', 'info'], BERLANGSUNG: ['Berlangsung', 'warn'], SELESAI: ['Selesai', 'ok'], BATAL: ['Batal', 'bad'] };
const badgeJ = s => { const x = STATUS_J[s] || [s, '']; return html`<span class="nx-badge ${x[1]}">${x[0]}</span>`; };
function badgeInv(i) {
  if (i.status_terbit === 'BATAL') return html`<span class="nx-badge bad">Batal</span>`;
  if (i.status_terbit === 'DRAFT') return html`<span class="nx-badge">Draft</span>`;
  if (i.status_bayar === 'LUNAS') return html`<span class="nx-badge ok">Lunas</span>`;
  if (i.status_bayar === 'SEBAGIAN') return html`<span class="nx-badge warn">Sebagian</span>`;
  return html`<span class="nx-badge bad">Belum dibayar</span>`;
}
const mapsUrl = a => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(a || '');
const waUrl = (no, teks) => 'https://wa.me/' + String(no || '').replace(/\D/g, '') + (teks ? '?text=' + encodeURIComponent(teks) : '');
const isiTemplate = (t, o) => String(t || '').replace(/\{(\w+)\}/g, (m, k) => o[k] != null ? o[k] : m);

// \u2500\u2500 State global \u2500\u2500
const S = { token: '', user: null, cfg: {}, staff: [], tarif: [], bhp: [], pasien: [], jadwal: [], hariIni: '', route: '', pend: 0, ready: false };
const punyaPeran = r => !!S.user && (S.user.peran === r || (S.user.peran_tambahan || []).indexOf(r) >= 0);   // peran utama ATAU tambahan
const isSuper = () => punyaPeran('SUPERADMIN');
const isKelola = () => punyaPeran('SUPERADMIN') || punyaPeran('ADMIN');
const PERAN_PENDEK = { SUPERADMIN: 'Superadmin', ADMIN: 'Admin' };
/** Label peran lengkap: peran utama + peran tambahan, mis. "Dokter \u2022 Superadmin". */
const peranLabel = u => PERAN_LABEL[u.peran] + (u.peran_tambahan || []).map(r => ' \u2022 ' + PERAN_PENDEK[r]).join('');
const isField = () => S.user && ['DOKTER', 'PERAWAT', 'FISIO'].indexOf(S.user.peran) >= 0;
const staffNama = id => { const s = S.staff.find(x => x.user_id === id); return s ? s.nama : '-'; };
const pasienById = id => S.pasien.find(p => p.pasien_id === id);

// \u2500\u2500 Progress bar & sinkronisasi \u2500\u2500
function prog(d) {
  S.pend = Math.max(0, S.pend + d);
  const bar = $('#prog i'); if (bar) { bar.style.opacity = S.pend ? 1 : 0; bar.style.width = S.pend ? '70%' : '100%'; if (!S.pend) setTimeout(() => { bar.style.width = '0'; }, 300); }
  syncPill();
}
function syncPill() {
  const el = $('#syncPill'); if (!el) return;
  const off = navigator.onLine === false;
  el.className = 'nx-pill' + (off ? ' off' : '');
  el.innerHTML = '<span class="dot"></span>' + (off ? 'Offline \u2014 perubahan belum tersimpan' : (S.pend ? 'Menyimpan\u2026' : 'Tersinkron'));
}

// \u2500\u2500 Pemanggil API (satu gerbang: fetch POST ke Apps Script Web App) \u2500\u2500
const GAS_URL = (window.NX_CONFIG && window.NX_CONFIG.GAS_URL) || '';
// Aksi BACA murni (aman di-retry & di-cache sebentar). Aksi lain dianggap tulis \u2192 cache dibuang, dikirim dengan reqId (idempoten).
const AKSI_BACA = /^(bootstrap|dash|laporan|master\.semua|invoice\.(daftar|detail)|audit\.daftar|bhp\.log|pasien\.rekam|kons\.daftar|kp\.poll)$/;
const MEMC = {};                       // cache di memori saja (tidak disimpan ke disk: data pasien tidak boleh tertinggal di perangkat)
const uuid = () => (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12) + '-' + Math.random().toString(36).slice(2, 8));
const tunda = ms => new Promise(r => setTimeout(r, ms));
function bersihkanCache() { Object.keys(MEMC).forEach(k => delete MEMC[k]); }
/** Pemanasan: bangunkan Apps Script selagi pengguna mengetik/membaca, supaya panggilan nyata tidak menanggung cold start. */
function pemanasan() { if (!GAS_URL || /GANTI/.test(GAS_URL)) return; try { fetch(GAS_URL + (GAS_URL.indexOf('?') < 0 ? '?' : '&') + 'ping=' + Date.now(), { mode: 'no-cors', cache: 'no-store' }).catch(() => {}); } catch (e) { /* abaikan */ } }
/** Pengukur performa: di console ketik Perf.table() — 'net' besar & 'server' kecil = jaringan/cold start; 'server' besar = Sheets/tulis. */
const Perf = { rows: [], add(aksi, total, server) { this.rows.push({ aksi, total, server: server == null ? null : server, net: server == null ? null : total - server }); if (this.rows.length > 200) this.rows.shift(); }, table() { console.table(this.rows.slice(-30)); } };
window.Perf = Perf;
/** Pustaka berat dimuat HANYA saat dibutuhkan (Chart.js untuk grafik, SheetJS untuk ekspor Excel). */
const LIB_URL = { chart: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js', xlsx: 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js' };
const LIB_P = {};
function muatLib(n) {
  if ((n === 'chart' && typeof Chart !== 'undefined') || (n === 'xlsx' && typeof XLSX !== 'undefined')) return Promise.resolve();
  if (LIB_P[n]) return LIB_P[n];
  return (LIB_P[n] = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = LIB_URL[n]; s.async = true;
    s.onload = () => res();
    s.onerror = () => { delete LIB_P[n]; s.remove(); rej(new Error('Pustaka gagal dimuat. Periksa koneksi internet.')); };
    document.head.appendChild(s);
  }));
}
async function kirimSekali(aksi, payload, timeoutMs, reqId) {
  const t0 = performance.now();
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null, tm = setTimeout(() => { if (ctl) ctl.abort(); }, timeoutMs);
  try {
    // text/plain WAJIB: JSON biasa memicu preflight CORS yang tidak didukung Apps Script
    const r = await fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ token: S.token || null, aksi: aksi, payload: payload || {}, reqId: reqId || '' }), redirect: 'follow', signal: ctl ? ctl.signal : undefined });
    const t = await r.text();
    try { const j = JSON.parse(t); Perf.add(aksi, Math.round(performance.now() - t0), j && j.ms); return { j: j }; } catch (e) { return { err: 'Server tidak membalas dengan benar. Pastikan deployment Apps Script diatur "Siapa saja" dan versi terbaru.', ulang: r.status >= 500 || r.status === 429 || !t }; }
  } catch (e) { return { err: null, ulang: true, detail: e }; }
  finally { clearTimeout(tm); }
}
async function ambil(aksi, payload) {
  const baca = AKSI_BACA.test(aksi), reqId = baca ? '' : uuid();
  const coba = baca ? 3 : 2;           // tulis boleh diulang sekali karena membawa reqId yang sama
  let hasil;
  for (let i = 0; i < coba; i++) {
    if (i) { await tunda(1200 * i); if (navigator.onLine === false) await tunda(3000); }
    hasil = await kirimSekali(aksi, payload, baca ? (i ? 40000 : 25000) : 90000, reqId);
    if (hasil.j || !hasil.ulang) break;
  }
  return hasil;
}
/** call(aksi, payload, {fresh: ms}) \u2014 fresh: pakai hasil di memori bila masih segar (hanya aksi baca). */
function call(aksi, payload, opt) {
  return new Promise((res, rej) => {
    const baca = AKSI_BACA.test(aksi), ck = baca && opt && opt.fresh ? aksi + '|' + JSON.stringify(payload || {}) : '';
    if (ck && MEMC[ck] && Date.now() - MEMC[ck].t < opt.fresh) return res(JSON.parse(MEMC[ck].d));
    prog(1);
    const ok = r => {
      prog(-1);
      if (r && r.success) { if (ck) MEMC[ck] = { t: Date.now(), d: JSON.stringify(r.data === undefined ? null : r.data) }; return res(r.data); }
      const err = new Error((r && r.message) || 'Terjadi kesalahan.'); err.code = r && r.code;
      if (err.code === 'AUTH' && aksi !== 'login') paksaKeluar(err.message);
      rej(err);
    };
    const bad = (e, pesan) => { prog(-1); const err = new Error(pesan || 'Koneksi bermasalah. Periksa internet Anda, lalu coba lagi.'); err.network = true; err.detail = e; rej(err); };
    if (!GAS_URL || /GANTI/.test(GAS_URL)) return bad('GAS_URL kosong', 'Alamat server belum diatur. Isi GAS_URL di berkas js/config.js.');
    if (!baca) bersihkanCache();       // ada perubahan data \u2192 semua cache baca tidak berlaku lagi
    ambil(aksi, payload).then(h => { if (h.j) { if (!baca && h.j.success) bersihkanCache(); return ok(h.j); } bad(h.detail || h.err, h.err || undefined); });
  });
}
function galat(e) { if (e && e.code === 'AUTH') return; toast(e && e.message ? e.message : 'Terjadi kesalahan.', 'err', 6000); }

// \u2500\u2500 Toast \u2500\u2500
function toast(msg, tipe, ms) {
  const box = $('#toasts'); if (!box) return;
  tipe = tipe || 'ok';
  const ic = { ok: 'bi-check-circle-fill', err: 'bi-exclamation-octagon-fill', warn: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill' }[tipe] || 'bi-info-circle-fill';
  const el = document.createElement('div'); el.className = 'nx-toast ' + tipe; el.setAttribute('role', tipe === 'err' ? 'alert' : 'status');
  el.innerHTML = '<i class="bi ' + ic + '"></i><div class="grow">' + E(msg) + '</div>';
  box.appendChild(el);
  setTimeout(() => { el.style.transition = 'opacity .3s'; el.style.opacity = 0; setTimeout(() => el.remove(), 320); }, ms || 3500);
  while (box.children.length > 3) box.firstChild.remove();
}

// \u2500\u2500 Modal (dua lapis: #mdl utama, #mdl2 untuk konfirmasi/pemilih/PDF) \u2500\u2500
const MD = {
  el(id) { return document.getElementById(id); },
  open(id, o) {
    const el = MD.el(id);
    $('.modal-title', el).textContent = o.title || '';
    put($('.modal-body', el), o.body || '');
    const f = $('.modal-footer', el); put(f, o.footer || ''); f.classList.toggle('hide', !o.footer);
    el.querySelector('.modal-dialog').className = 'modal-dialog modal-dialog-centered modal-dialog-scrollable' + (o.size ? ' modal-' + o.size : '');
    const cb = $('.btn-close', el); if (cb) cb.classList.toggle('hide', !!o.static);
    if (!window.bootstrap) { toast('Komponen tampilan belum termuat. Periksa internet lalu muat ulang.', 'err', 5000); return; }
    const inst = bootstrap.Modal.getOrCreateInstance(el, { backdrop: o.static ? 'static' : true, keyboard: !o.static });
    el._onHide = o.onHide || null;
    inst.show();
    if (o.onShown) setTimeout(o.onShown, 260);
    return inst;
  },
  close(id) { const el = MD.el(id); const i = window.bootstrap && bootstrap.Modal.getInstance(el); if (i) i.hide(); },
  isOpen(id) { return MD.el(id).classList.contains('show'); }
};
document.addEventListener('hidden.bs.modal', e => { const el = e.target; if (el._onHide) { const f = el._onHide; el._onHide = null; f(); } if (el.id === 'mdl2' && MD.isOpen('mdl')) document.body.classList.add('modal-open'); });

/** Dialog konfirmasi. opsi.input \u2192 minta alasan teks. Mengembalikan Promise<true | teks | false>. */
function konfirmasi(o) {
  return new Promise(res => {
    let selesai = false;
    const fin = v => { if (selesai) return; selesai = true; res(v); };
    ACT['cf.ok'] = btn => {
      let v = true;
      if (o.input) { const ta = $('#cfIn'); v = ta.value.trim(); if (v.length < (o.input.min || 3)) { ta.classList.add('is-bad'); $('#cfErr').textContent = 'Wajib diisi (min. ' + (o.input.min || 3) + ' karakter).'; ta.focus(); return; } }
      fin(v); MD.close('mdl2');
    };
    ACT['cf.no'] = () => { fin(false); MD.close('mdl2'); };
    MD.open('mdl2', {
      title: o.title || 'Konfirmasi', size: 'sm',
      body: html`<p class="t-body-lg">${o.msg || ''}</p>${o.extra ? o.extra : ''}${o.input ? html`<div class="nx-field mt12"><label class="nx-lab" for="cfIn">${o.input.label}</label><textarea id="cfIn" class="nx-ta" style="min-height:80px" maxlength="300" placeholder="${o.input.ph || ''}"></textarea><div class="nx-err" id="cfErr"></div></div>` : ''}`,
      footer: html`<button class="nx-btn secondary" data-act="cf.no">${o.no || 'Batal'}</button><button class="nx-btn ${o.danger ? 'danger solid' : 'primary'}" data-act="cf.ok">${o.ok || 'Ya, lanjutkan'}</button>`,
      onHide: () => fin(false)
    });
  });
}

// \u2500\u2500 Tombol sibuk \u2500\u2500
function sibuk(btn, on) {
  if (!btn) return;
  if (on) { btn._h = btn.innerHTML; btn.classList.add('is-busy'); btn.innerHTML = '<span class="spin"></span> Memproses\u2026'; }
  else { btn.classList.remove('is-busy'); if (btn._h != null) btn.innerHTML = btn._h; }
}
async function denganSibuk(btn, fn) { sibuk(btn, true); try { return await fn(); } finally { sibuk(btn, false); } }

// \u2500\u2500 Validasi form sederhana \u2500\u2500
function bad(id, msg) { const el = document.getElementById(id); if (!el) return false; el.classList.add('is-bad'); let e = el.parentNode.querySelector('.nx-err'); if (!e) { e = document.createElement('div'); e.className = 'nx-err'; el.parentNode.appendChild(e); } e.textContent = msg; return false; }
function bersihGalat(root) { $$('.is-bad', root).forEach(x => x.classList.remove('is-bad')); $$('.nx-err', root).forEach(x => { if (!x.id) x.remove(); else x.classList.add('hide'); }); }
const val = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
function medan(id, label, o) { // field teks siap pakai
  o = o || {};
  return html`<div class="nx-field ${o.cls || ''}"><label class="nx-lab" for="${id}"><span>${label}${o.req ? html` <span class="req">*</span>` : ''}</span>${o.opt ? html`<span class="opt">opsional</span>` : ''}</label>${o.ta ? html`<textarea id="${id}" class="nx-ta" maxlength="${o.max || 1000}" placeholder="${o.ph || ''}" style="min-height:${o.h || 80}px">${o.v || ''}</textarea>` : html`<input id="${id}" class="nx-in" type="${o.type || 'text'}" value="${o.v == null ? '' : o.v}" placeholder="${o.ph || ''}" ${o.inputmode ? html`inputmode="${o.inputmode}"` : ''} ${o.max ? html`maxlength="${o.max}"` : ''} autocomplete="${o.ac || 'off'}" ${o.ro ? 'readonly' : ''}>`}${o.help ? html`<div class="nx-help">${o.help}</div>` : ''}</div>`;
}
const kosong = (ikon, judul, teks, aksi) => html`<div class="nx-empty"><div class="ill"><i class="bi ${ikon}"></i></div><b>${judul}</b><div>${teks || ''}</div>${aksi ? html`<div class="mt16">${aksi}</div>` : ''}</div>`;
const skel = (n, h) => raw(Array.from({ length: n || 3 }).map(() => '<div class="nx-skel mb12" style="height:' + (h || 64) + 'px"></div>').join(''));

// \u2500\u2500 Unduh & PDF \u2500\u2500
function b64ToBlob(b64, mime) { const bin = atob(b64), len = bin.length, arr = new Uint8Array(len); for (let i = 0; i < len; i++) arr[i] = bin.charCodeAt(i); return new Blob([arr], { type: mime || 'application/pdf' }); }
function unduhBlob(blob, nama) { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nama; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000); }
const MOBILE_UA = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
/** Pratinjau PDF di dalam modal (bukan tab baru). Perangkat seluler: tombol unduh/buka sebagai cadangan. */
async function lihatPdf(judul, aksi, payload, extraFooter) {
  MD.open('mdl2', { title: judul, size: 'xl', body: skel(1, 360), footer: null });
  try {
    const d = await call(aksi, payload);
    const blob = b64ToBlob(d.base64, d.mime), url = URL.createObjectURL(blob);
    ACT['pdf.unduh'] = () => unduhBlob(blob, d.nama_file);
    const body = MOBILE_UA
      ? html`<div class="nx-doc-fallback"><div class="nx-empty"><div class="ill"><i class="bi bi-file-earmark-pdf"></i></div><b>${d.nama_file}</b><div>Pratinjau PDF tidak didukung penuh di peramban seluler. Unduh lalu buka dengan aplikasi PDF.</div></div></div>`
      : html`<iframe class="nx-doc-frame" title="Pratinjau PDF" src="${url}"></iframe>`;
    put($('#mdl2 .modal-body'), body);
    put($('#mdl2 .modal-footer'), html`<button class="nx-btn secondary" data-bs-dismiss="modal">Tutup</button>${extraFooter || ''}<button class="nx-btn primary" data-act="pdf.unduh"><i class="bi bi-download"></i> Unduh PDF</button>`);
    $('#mdl2 .modal-footer').classList.remove('hide');
    MD.el('mdl2')._onHide = () => URL.revokeObjectURL(url);
    return d;
  } catch (e) { MD.close('mdl2'); galat(e); }
}

// \u2500\u2500 Delegasi event \u2500\u2500
const ACT = {};
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const f = ACT[t.dataset.act];
  if (f) { if (t.tagName === 'A' && !t.dataset.native) e.preventDefault(); f(t, e); }
});
const INP = {};
document.addEventListener('input', e => { const t = e.target.closest('[data-in]'); if (t && INP[t.dataset.in]) INP[t.dataset.in](t, e); });
document.addEventListener('change', e => { const t = e.target.closest('[data-ch]'); if (t && INP[t.dataset.ch]) INP[t.dataset.ch](t, e); });

// \u2500\u2500 Chart.js \u2500\u2500
const CH = [];
function cssv(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function warnaChart(terang) {
  return terang ? { ink: '#334155', grid: '#E2E8F0', p: '#0169FB', s: '#10B58B', t: '#6ED3B3', warn: '#F59E0B', err: '#EF4444' }
    : { ink: cssv('--muted'), grid: cssv('--line'), p: cssv('--primary') === '#2B84FF' ? '#5AA0FF' : cssv('--primary'), s: cssv('--secondary'), t: cssv('--tertiary'), warn: cssv('--warn'), err: cssv('--err') };
}
function mkChart(canvas, cfg, terang) {
  if (typeof Chart === 'undefined') {            // belum dimuat: muat dulu, gambar begitu siap (grafik layar saja; ekspor PDF menunggu muatLib sendiri)
    if (!terang) muatLib('chart').then(() => { if (canvas && canvas.isConnected) mkChart(canvas, cfg, terang); }).catch(() => { });
    return null;
  }
  const w = warnaChart(terang);
  Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, sans-serif"; Chart.defaults.font.size = 12;
  cfg.options = Object.assign({ responsive: true, maintainAspectRatio: false, animation: terang ? false : { duration: 400 } }, cfg.options || {});
  cfg.options.plugins = Object.assign({ legend: { labels: { color: w.ink, usePointStyle: true, boxWidth: 8 } } }, cfg.options.plugins || {});
  const sc = cfg.options.scales = cfg.options.scales || {};
  ['x', 'y'].forEach(a => { if (cfg.options.scales[a] !== false) { sc[a] = Object.assign({ ticks: { color: w.ink }, grid: { color: w.grid, drawBorder: false } }, sc[a] || {}); sc[a].ticks = Object.assign({ color: w.ink }, sc[a].ticks || {}); } });
  if (terang) cfg.plugins = (cfg.plugins || []).concat([{ id: 'bgPutih', beforeDraw(c) { const x = c.ctx; x.save(); x.globalCompositeOperation = 'destination-over'; x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.restore(); } }]);
  const ch = new Chart(canvas, cfg); if (!terang) CH.push(ch); return ch;
}
function hapusChart() { while (CH.length) { try { CH.pop().destroy(); } catch (e) { /* abaikan */ } } }
function chartKosong(el, teks) { el.innerHTML = '<div class="nx-empty" style="padding:20px 8px"><div class="ill" style="width:44px;height:44px;font-size:20px"><i class="bi bi-bar-chart"></i></div>' + E(teks || 'Belum ada data pada periode ini.') + '</div>'; }

// \u2500\u2500 Tema \u2500\u2500
function terapkanTema(t) {
  const dark = t === 'dark' || (t !== 'light' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', dark ? '#0B1220' : '#0169FB');
}
function ubahTema() {
  const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  ls.set('shan_theme', now); terapkanTema(now);
  $$('.js-theme i').forEach(i => { i.className = 'bi ' + (now === 'dark' ? 'bi-sun' : 'bi-moon-stars'); });
  if (S.ready) render(true);
}

/*@@FILE 02_shell.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Login, bootstrap, shell, router \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const NAV = {
  home: { ic: 'bi-grid-1x2-fill', t: 'Ringkasan' }, jadwal: { ic: 'bi-calendar-check-fill', t: 'Jadwal' }, pasien: { ic: 'bi-people-fill', t: 'Pasien' },
  tagihan: { ic: 'bi-receipt', t: 'Tagihan' }, laporan: { ic: 'bi-bar-chart-line-fill', t: 'Laporan Keuangan' }, master: { ic: 'bi-database-fill-gear', t: 'Master Data' },
  audit: { ic: 'bi-shield-check', t: 'Audit Log' }, konsul: { ic: 'bi-chat-dots-fill', t: 'Konsultasi' }, profil: { ic: 'bi-person-circle', t: 'Profil' }
};
function menuPeran() {
  if (isSuper()) return ['home', 'jadwal', 'pasien', 'tagihan', 'konsul', 'laporan', 'keluar', 'master', 'audit'];
  if (isKelola()) return ['home', 'jadwal', 'pasien', 'tagihan', 'konsul'];
  if (S.user.peran === 'DOKTER') return ['home', 'jadwal', 'pasien', 'konsul', 'profil'];
  return ['home', 'jadwal', 'pasien', 'profil'];
}
const RUTE_PERAN = { tagihan: 'K', laporan: 'S', master: 'S', audit: 'S', konsul: 'D' };
function logoSrc() { return (S.cfg && S.cfg.logo) || LOGO_FULL; }

// \u2500\u2500 Login \u2500\u2500
function tampilLogin(pesan) {
  $('#boot').classList.add('hide'); $('#appView').classList.add('hide');
  const v = $('#loginView'); v.classList.remove('hide');
  put(v, html`<div class="nx-login"><form class="nx-login-card" id="fLogin" autocomplete="on" novalidate>
    <img class="nx-logo-full" src="${logoSrc()}" alt="${S.cfg.nama_klinik || 'Shancare'}">
    <div class="text-center mb24"><div class="t-h2">Masuk ke ShanERM</div><div class="muted t-sm mt8">Rekam Medis Elektronik Layanan Homecare</div></div>
    ${pesan ? html`<div class="nx-alert warn mb16"><i class="bi bi-exclamation-triangle-fill"></i><div>${pesan}</div></div>` : ''}
    <div class="nx-field"><label class="nx-lab" for="lgU">Username</label><div class="nx-in-icon"><i class="bi bi-person"></i><input id="lgU" class="nx-in" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="mis. owner" value="${ls.get('shan_user', '')}"></div></div>
    <div class="nx-field"><label class="nx-lab" for="lgP">Password</label><div class="nx-in-icon"><i class="bi bi-lock"></i><input id="lgP" class="nx-in" type="password" autocomplete="current-password" placeholder="Password Anda"><button type="button" class="nx-btn ghost icon sm tail" data-act="lg.lihat" aria-label="Tampilkan password"><i class="bi bi-eye"></i></button></div></div>
    <div class="nx-err hide" id="lgE" role="alert"></div>
    <button class="nx-btn primary block mt16" id="lgGo" type="submit">Masuk</button>
    <div class="nx-secure mt16"><i class="bi bi-shield-lock-fill"></i><div>Data pasien dilindungi. Sesi berakhir otomatis setelah 8 jam tanpa aktivitas.</div></div>
  </form></div>`);
  $('#fLogin').addEventListener('submit', async e => {
    e.preventDefault();
    const u = val('lgU'), p = $('#lgP').value, er = $('#lgE'); er.classList.add('hide');
    if (!u || !p) { er.textContent = 'Isi username dan password.'; er.classList.remove('hide'); return; }
    const btn = $('#lgGo');
    try {
      await denganSibuk(btn, async () => {
        const r = await call('login', { username: u, password: p });
        S.token = r.token; ls.set('shan_token', r.token); ls.set('shan_user', u); S.paksaGanti = r.wajibGanti;
        await mulaiApp(r.boot);
      });
    } catch (x) { er.textContent = x.message; er.classList.remove('hide'); }
  });
  setTimeout(() => { const el = $(ls.get('shan_user', '') ? '#lgP' : '#lgU'); if (el) el.focus(); }, 50);
}
ACT['lg.lihat'] = b => { const i = $('#lgP'), s = i.type === 'password'; i.type = s ? 'text' : 'password'; b.firstElementChild.className = 'bi ' + (s ? 'bi-eye-slash' : 'bi-eye'); };

function bersihkanSesiLokal() { ls.del('shan_token'); ls.delPrefix('shan_draft_'); S.token = ''; S.user = null; S.ready = false; S.pasien = []; S.jadwal = []; hapusChart(); }
function paksaKeluar(pesan) { if (!S.token) return; bersihkanSesiLokal(); MD.close('mdl'); MD.close('mdl2'); tampilLogin(pesan || 'Sesi berakhir. Silakan masuk kembali.'); }
async function keluar() {
  try { await call('logout'); } catch (e) { /* abaikan */ }
  bersihkanSesiLokal(); location.hash = ''; tampilLogin();
}
ACT['app.keluar'] = async () => { if (await konfirmasi({ title: 'Keluar', msg: 'Keluar dari ShanERM? Draft lokal pada perangkat ini akan dihapus.', ok: 'Keluar' })) keluar(); };

// \u2500\u2500 Bootstrap: satu panggilan berisi seluruh data awal \u2500\u2500
async function mulaiApp(dataAwal) {
  const d = dataAwal || await call('bootstrap');
  S.user = d.user; S.cfg = d.config; S.staff = d.staff; S.tarif = d.tarif; S.bhp = d.bhp; S.paket = d.paket || []; S.pasien = d.pasien; S.jadwal = d.jadwal; S.hariIni = d.hariIni;
  ls.set('shan_cfg', JSON.stringify({ nama_klinik: d.config.nama_klinik, logo: d.config.logo }));
  S.ready = true;
  if (S.user && (S.user.peran === 'SUPERADMIN' || S.user.peran === 'ADMIN')) muatLib('chart').catch(() => { });   // admin hampir pasti membuka grafik beranda
  $('#boot').classList.add('hide'); $('#loginView').classList.add('hide'); $('#appView').classList.remove('hide');
  gambarShell();
  const awal = (location.hash || '').replace(/^#/, '');
  S.route = awal && awal.indexOf('/') === 0 ? awal : '/home';
  render(); pasangBadgeKonsul();
  if (d.user.wajibGanti) setTimeout(formGantiPw, 300, true);
}

function gambarShell() {
  const m = menuPeran(), u = S.user, gelap = document.documentElement.getAttribute('data-theme') === 'dark';
  const item = k => html`<a data-act="nav" data-r="${k}" data-k="${k}" role="link" tabindex="0"><i class="bi ${NAV[k].ic}"></i>${k === 'home' && isField() ? 'Hari Ini' : NAV[k].t}<span class="cnt hide" id="cnt_${k}"></span></a>`;
  const bn = isSuper() ? m.slice(0, 3).concat(['konsul']) : m;
  put('#appView', html`
  <aside class="nx-side" aria-label="Navigasi utama">
    <div class="nx-brand"><img src="${logoSrc()}" alt=""><div><div class="bn">${S.cfg.nama_klinik || 'ShanERM'}</div><div class="bs">SHAN ERM</div></div></div>
    <nav class="nx-nav"><h6>Menu</h6>${m.map(item)}${isField() ? '' : html`<h6>Akun</h6><a data-act="nav" data-r="profil" data-k="profil"><i class="bi bi-person-circle"></i>Profil</a>`}</nav>
    <div class="nx-side-foot"><div class="nx-secure"><i class="bi bi-shield-lock-fill"></i><div>Akses aman \u2022 data terenkripsi saat transit</div></div>
      <button class="nx-btn secondary block mt12" data-act="app.keluar"><i class="bi bi-box-arrow-right"></i> Keluar</button></div>
  </aside>
  <div class="nx-shell">
    <header class="nx-top">
      <span class="brand-m row-gap"><img src="${logoSrc()}" alt="" style="height:30px;border-radius:6px;${gelap ? 'background:#fff;padding:2px 6px' : ''}"></span><span class="ttl" id="ttl"></span>
      <div class="search grow2"><div class="nx-in-icon"><i class="bi bi-search"></i><input class="nx-in" id="gsearch" placeholder="Cari pasien (nama / No. RM)\u2026" style="min-height:42px" aria-label="Cari pasien"></div></div>
      <span class="spacer"></span>
      <span class="nx-pill" id="syncPill"></span>
      <button class="nx-btn ghost icon js-theme" data-act="app.tema" aria-label="Ganti tema"><i class="bi ${gelap ? 'bi-sun' : 'bi-moon-stars'}"></i></button>
      <button class="nx-user" data-act="nav" data-r="profil" aria-label="Profil"><span class="tx"><div class="nm">${u.nama}</div><div class="rl">${peranLabel(u)}</div></span><span class="nx-ava">${inisial(u.nama)}</span></button>
    </header>
    <main class="nx-main" id="view" tabindex="-1"></main>
  </div>
  <nav class="nx-bnav" aria-label="Navigasi bawah">${bn.map(k => html`<a data-act="nav" data-r="${k}" data-k="${k}" role="link"><i class="bi ${NAV[k].ic}"></i>${k === 'home' && isField() ? 'Hari Ini' : NAV[k].t}</a>`)}${isSuper() ? html`<a data-act="app.menu" data-k="_more" role="button"><i class="bi bi-grid-3x3-gap-fill"></i>Menu</a>` : ''}</nav>
  <div class="nx-actionbar hide" id="actbar"></div>`);
  syncPill();
  const gs = $('#gsearch');
  gs.addEventListener('keydown', e => { if (e.key === 'Enter') { P.q = gs.value.trim(); go('/pasien'); } });
}
ACT['app.tema'] = ubahTema;
ACT['app.menu'] = () => {
  const ex = ['tagihan', 'laporan', 'keluar', 'master', 'audit', 'profil'];
  MD.open('mdl', { title: 'Menu lainnya', size: 'sm', body: html`<div class="nx-nav" style="padding:0">${ex.map(k => html`<a data-act="nav" data-r="${k}" data-close="1"><i class="bi ${NAV[k].ic}"></i>${NAV[k].t}</a>`)}<a data-act="app.tema"><i class="bi bi-moon-stars"></i>Ganti tema</a><a data-act="app.keluar" data-close="1" style="color:var(--err-ink)"><i class="bi bi-box-arrow-right"></i>Keluar</a></div>` });
};

// \u2500\u2500 Router \u2500\u2500
function go(path) { S.route = path; try { if (location.hash.replace(/^#/, '') !== path) location.hash = path; } catch (e) { /* iframe */ } render(); }
ACT['nav'] = t => { if (t.dataset.close) MD.close('mdl'); go('/' + t.dataset.r); };
window.addEventListener('hashchange', () => { const h = location.hash.replace(/^#/, ''); if (S.ready && h && h !== S.route) { S.route = h; render(); } });
window.addEventListener('online', syncPill); window.addEventListener('offline', syncPill);

const VIEWS = {};
function render() {
  if (!S.ready) return;
  hapusChart();
  const seg = (S.route || '/home').split('/'), nama = seg[1] || 'home', arg = decodeURIComponent(seg[2] || '');
  const need = RUTE_PERAN[nama];
  if ((need === 'S' && !isSuper()) || (need === 'K' && !isKelola()) || (need === 'D' && !bolehKonsul()) || !VIEWS[nama]) { return go('/home'); }
  document.body.classList.toggle('in-visit', nama === 'visit');
  const ab = $('#actbar'); if (ab && nama !== 'visit') ab.classList.add('hide');
  const k = nama === 'rekam' ? 'pasien' : (nama === 'visit' ? 'jadwal' : nama);
  if (nama !== 'konsul') { document.body.classList.remove('in-chat'); if (KS.poller) { KS.poller.stop(); KS.poller = null; } }
  $$('[data-k]').forEach(a => a.classList.toggle('on', a.dataset.k === k));
  const ttl = $('#ttl'); if (ttl) ttl.textContent = (nama === 'home' && isField() ? 'Hari Ini' : (NAV[nama] || NAV[k] || {}).t) || '';
  const v = $('#view'); v.innerHTML = '';
  try { VIEWS[nama](v, arg); } catch (e) { console.error(e); put(v, kosong('bi-bug', 'Halaman gagal dimuat', e.message)); }
  window.scrollTo(0, 0);
}
function hitungBadge() {
  const c = $('#cnt_tagihan'); if (c) { c.textContent = S.dashDraft || ''; c.classList.toggle('hide', !S.dashDraft); }
}

// \u2500\u2500 Util jadwal \u2500\u2500
const jadwalHari = tgl => S.jadwal.filter(j => j.tanggal === tgl).sort((a, b) => a.jam.localeCompare(b.jam));
const namaPetugas = j => (j.petugas_ids || []).map(staffNama).join(', ');
const punyaSoapSaya = j => (j.soaps || []).find(s => s.petugas_id === S.user.user_id);
function kartuJadwal(j, o) {
  o = o || {};
  const p = pasienById(j.pasien_id) || { nama: '(pasien)', alamat: j.alamat_kunjungan };
  const saya = (j.petugas_ids || []).indexOf(S.user.user_id) >= 0;
  const sd = punyaSoapSaya(j), final = sd && sd.status === 'FINAL';
  const lanjut = j.status !== 'BATAL' && !final && saya && j.status !== 'SELESAI';
  return html`<div class="nx-visit-card ${o.now ? 'now' : ''} ${j._tmp ? 'tmp-row' : ''}">
    <div class="row-gap" style="align-items:flex-start">
      <div class="nx-time">${j.jam}<small>${j.durasi_menit} mnt</small></div>
      <div class="grow"><div class="row-between" style="align-items:flex-start"><div class="fw7 t-body-lg truncate">${p.nama}</div>${badgeJ(j.status)}</div>
        <div class="muted t-sm">${p.no_rm || ''}${p.tgl_lahir ? ' \u2022 ' + umur(p.tgl_lahir) + ' th \u2022 ' + jkLabel(p.jenis_kelamin) : ''}</div>
        <div class="t-sm mt8 clamp2"><i class="bi bi-geo-alt-fill ink-p"></i> ${j.alamat_kunjungan || p.alamat}</div>
        ${j.layanan ? html`<div class="t-sm muted mt8"><i class="bi bi-clipboard2-pulse"></i> ${j.layanan}</div>` : ''}
        ${isKelola() ? html`<div class="t-sm muted mt8"><i class="bi bi-person-badge"></i> ${namaPetugas(j)}</div>` : ''}
      </div></div>
    ${p.alergi ? html`<div class="nx-allergy"><i class="bi bi-exclamation-triangle-fill"></i><div>Alergi: ${p.alergi}</div></div>` : ''}
    ${j.catatan_admin && j.status !== 'BATAL' ? html`<div class="nx-mini"><div class="t-cap">Catatan admin</div><div class="t-sm">${j.catatan_admin}</div></div>` : ''}
    <div class="wrap-gap mt12">
      ${lanjut && !o.tanpaAksi ? html`<button class="nx-btn primary grow" data-act="visit.buka" data-id="${j.jadwal_id}"><i class="bi bi-play-fill"></i> ${sd ? 'Lanjutkan Kunjungan' : (j.consent ? 'Lanjutkan' : 'Mulai Kunjungan')}</button>` : ''}
      ${final && saya ? html`<button class="nx-btn secondary grow" data-act="doc.resume" data-id="${sd.soap_id}"><i class="bi bi-file-earmark-pdf"></i> Resume PDF</button>` : ''}
      <a class="nx-btn secondary sm" data-native="1" target="_blank" rel="noopener" href="${mapsUrl(j.alamat_kunjungan || p.alamat)}"><i class="bi bi-map"></i> Peta</a>
      ${p.no_wa && j.status !== 'BATAL' && (saya || isKelola()) ? html`<a class="nx-btn secondary sm" data-native="1" target="_blank" rel="noopener" href="${waUrl(p.no_wa)}"><i class="bi bi-whatsapp"></i> WA</a>` : ''}
      ${isKelola() && j.status !== 'SELESAI' ? html`<button class="nx-btn ghost sm" data-act="jd.edit" data-id="${j.jadwal_id}"><i class="bi bi-pencil"></i> Ubah</button>` : ''}
      ${isKelola() && j.status !== 'SELESAI' && j.status !== 'BATAL' ? html`<button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="jd.batal" data-id="${j.jadwal_id}"><i class="bi bi-x-circle"></i> Batalkan</button>` : ''}
      ${isSuper() && !(j.soaps || []).length && !j.consent ? html`<button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="jd.hapus" data-id="${j.jadwal_id}"><i class="bi bi-trash"></i> Hapus</button>` : ''}
      ${isKelola() && j.status === 'BATAL' ? html`<button class="nx-btn ghost sm" data-act="jd.aktif" data-id="${j.jadwal_id}"><i class="bi bi-arrow-counterclockwise"></i> Aktifkan</button>` : ''}
    </div></div>`;
}
ACT['visit.buka'] = t => go('/visit/' + t.dataset.id);
const bisaKirimResep = () => isKelola() || isDokter();
function tombolWaResep(jenis, id, pid) { return bisaKirimResep() ? html`<button class="nx-btn wa" data-act="doc.resep.wa" data-jenis="${jenis}" data-id="${id}" data-pid="${pid}"><i class="bi bi-whatsapp"></i> Kirim WA</button>` : ''; }
ACT['doc.resep'] = t => lihatPdf('Resep', 'dokumen.pdf', { jenis: 'resep', id: t.dataset.id }, tombolWaResep('resep', t.dataset.id, t.dataset.pid));
ACT['doc.resepk'] = t => lihatPdf('Resep', 'resep.pdf', { resep_id: t.dataset.id }, tombolWaResep('resepk', t.dataset.id, t.dataset.pid));
ACT['doc.resep.wa'] = t => { const p = pasienById(t.dataset.pid); if (!p) return toast('Data pasien tidak ditemukan.', 'err'); bagikanWa(t.dataset.jenis, t.dataset.id, p, {}); };
ACT['doc.resume'] = t => lihatPdf('Resume Medis', 'dokumen.pdf', { jenis: 'resume', id: t.dataset.id }, html`<button class="nx-btn secondary" data-act="resume.ulang" data-id="${t.dataset.id}"><i class="bi bi-arrow-repeat"></i> Buat ulang</button>`);
/** Buat ulang PDF resume dengan data terbaru (mis. setelah petugas mengunggah tanda tangan). Nomor resume tetap sama. */
ACT['resume.ulang'] = async t => {
  const id = t.dataset.id;
  try { await denganSibuk(t, () => call('resume.ulang', { soap_id: id })); toast('Resume dibuat ulang.'); MD.close('mdl2'); setTimeout(() => ACT['doc.resume']({ dataset: { id } }), 350); } catch (e) { galat(e); }
};

// \u2500\u2500 Beranda \u2500\u2500
VIEWS.home = function (v) { return isKelola() ? berandaAdmin(v) : berandaLapangan(v); };
function berandaLapangan(v) {
  const t = today(), hari = jadwalHari(t), aktif = hari.filter(j => j.status !== 'SELESAI' && j.status !== 'BATAL');
  const now = aktif[0], sisa = aktif.slice(1), done = hari.filter(j => j.status === 'SELESAI' || j.status === 'BATAL');
  const dekat = S.jadwal.filter(j => j.tanggal > t && j.tanggal <= addDays(t, 7) && j.status !== 'BATAL').length;
  put(v, html`
  <div class="nx-page-h"><div><div class="eyebrow">${tglH(t)}</div><h1 class="t-h1">Halo, ${S.user.nama.split(' ')[0]}</h1><p>${hari.length ? html`Anda memiliki <b>${hari.length}</b> kunjungan hari ini \u2022 ${done.filter(j => j.status === 'SELESAI').length} selesai.` : 'Tidak ada jadwal kunjungan hari ini.'}</p></div></div>
  <div class="nx-kpis k3" style="grid-template-columns:repeat(3,1fr)">
    <div class="nx-kpi"><div class="lab">Hari ini</div><div class="val">${hari.length}</div></div>
    <div class="nx-kpi"><div class="lab">Selesai</div><div class="val">${done.filter(j => j.status === 'SELESAI').length}</div></div>
    <div class="nx-kpi"><div class="lab">7 hari ke depan</div><div class="val">${dekat}</div></div></div>
  ${now ? html`<div class="nx-sec-title mb12"><i class="bi bi-lightning-charge-fill"></i> Kunjungan Berikutnya</div>${kartuJadwal(now, { now: true })}` : (hari.length ? '' : html`<div class="nx-card">${kosong('bi-cup-hot', 'Tidak ada kunjungan hari ini', 'Jadwal baru akan muncul di sini setelah ditugaskan oleh admin.', html`<button class="nx-btn secondary" data-act="nav" data-r="jadwal">Lihat jadwal mendatang</button>`)}</div>`)}
  ${sisa.length ? html`<div class="nx-sec-title mt24 mb12"><i class="bi bi-clock-history"></i> Menunggu (${sisa.length})</div>${sisa.map(j => kartuJadwal(j))}` : ''}
  ${done.length ? html`<div class="nx-sec-title mt24 mb12"><i class="bi bi-check2-circle"></i> Selesai / Batal (${done.length})</div>${done.map(j => kartuJadwal(j))}` : ''}`);
}

function berandaAdmin(v) {
  const t = today(), hari = jadwalHari(t), aktif = hari.filter(j => j.status !== 'BATAL');
  const sel = aktif.filter(j => j.status === 'SELESAI').length, ber = aktif.filter(j => j.status === 'BERLANGSUNG').length;
  const beban = {}; aktif.forEach(j => (j.petugas_ids || []).forEach(id => { beban[id] = (beban[id] || 0) + 1; }));
  const maks = Math.max(1, ...Object.keys(beban).map(k => beban[k]));
  put(v, html`
  <div class="nx-page-h"><div><div class="eyebrow">${tglH(t)}</div><h1 class="t-h1">Ringkasan Operasional</h1></div>
    <div class="wrap-gap"><button class="nx-btn secondary" data-act="jd.tambah"><i class="bi bi-calendar-plus"></i> Jadwal Baru</button>${isKelola() ? html`<button class="nx-btn primary" data-act="ps.tambah"><i class="bi bi-person-plus-fill"></i> Pasien Baru</button>` : ''}</div></div>
  <div class="nx-kpis">
    <div class="nx-kpi"><span class="ic"><i class="bi bi-calendar-check"></i></span><div class="lab">Kunjungan hari ini</div><div class="val">${aktif.length}</div><div class="sub"><span>${sel} selesai</span><span>${ber} berlangsung</span></div></div>
    <div class="nx-kpi"><span class="ic teal"><i class="bi bi-cash-coin"></i></span><div class="lab">Tagihan hari ini</div><div class="val" id="kOmzet"><span class="nx-skel" style="display:inline-block;width:90px;height:26px"></span></div><div class="sub" id="kOmzetS"></div></div>
    <div class="nx-kpi"><span class="ic warn"><i class="bi bi-hourglass-split"></i></span><div class="lab">Draft invoice</div><div class="val" id="kDraft">\u2026</div><div class="sub">menunggu persetujuan admin</div></div>
    <div class="nx-kpi"><span class="ic bad"><i class="bi bi-wallet2"></i></span><div class="lab">Belum dibayar</div><div class="val" id="kBelum">\u2026</div><div class="sub">invoice terbit</div></div></div>
  <div class="nx-grid-main wide">
    <div class="stack">
      <div class="nx-card"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-broadcast"></i> Monitoring Kunjungan Hari Ini</div><button class="nx-btn ghost sm" data-act="nav" data-r="jadwal">Semua jadwal</button></div>
        ${hari.length ? html`<div class="nx-list">${hari.map(j => { const p = pasienById(j.pasien_id) || {}; return html`<div class="nx-row"><div class="nx-time">${j.jam}</div><div class="grow"><div class="fw6 truncate">${p.nama}</div><div class="t-sm muted truncate">${namaPetugas(j)}</div></div>${badgeJ(j.status)}</div>`; })}</div>` : kosong('bi-calendar2-x', 'Belum ada jadwal hari ini', 'Buat jadwal untuk pasien terdaftar atau pasien baru.', html`<button class="nx-btn primary" data-act="jd.tambah">Buat jadwal</button>`)}</div>
      <div class="nx-card"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-graph-up"></i> Kunjungan 14 Hari Terakhir</div></div><div class="nx-chart sm" id="chWrap"><canvas id="ch14"></canvas></div></div>
    </div>
    <div class="stack">
      <div class="nx-card"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-people"></i> Beban Petugas Hari Ini</div></div>
        ${Object.keys(beban).length ? Object.keys(beban).map(id => html`<div class="mb12"><div class="row-between t-sm"><b>${staffNama(id)}</b><span class="muted">${beban[id]} kunjungan</span></div><div class="nx-bar mt8"><i style="width:${Math.round(beban[id] / maks * 100)}%"></i></div></div>`) : html`<div class="muted t-sm">Belum ada penugasan hari ini.</div>`}</div>
      <div class="nx-card"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-receipt-cutoff"></i> Antrean Persetujuan Invoice</div><button class="nx-btn ghost sm" data-act="nav" data-r="tagihan">Buka</button></div><div id="qDraft">${skel(2, 52)}</div></div>
      ${isSuper() ? html`<div class="nx-insight" id="insBox"><h6><i class="bi bi-stars"></i> Insight 30 Hari Terakhir</h6><div class="t-sm" style="opacity:.9">Menganalisis data\u2026</div></div>` : ''}
    </div></div>`);
  // grafik 14 hari dari data lokal
  const lab = [], dat = [];
  for (let i = 13; i >= 0; i--) { const d = addDays(t, -i); lab.push(tglPendek(d)); dat.push(S.jadwal.filter(j => j.tanggal === d && j.status === 'SELESAI').length); }
  if (dat.some(x => x)) { const w = warnaChart(); mkChart($('#ch14'), { type: 'bar', data: { labels: lab, datasets: [{ label: 'Kunjungan selesai', data: dat, backgroundColor: w.s, borderRadius: 6, maxBarThickness: 22 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } } }); } else chartKosong($('#chWrap'), 'Belum ada kunjungan selesai dalam 14 hari terakhir.');
  call('dash', {}, { fresh: 30000 }).then(d => {
    if (S.route !== '/home') return;
    S.dashDraft = d.jmlDraft; hitungBadge();
    put('#kOmzet', rp(d.omzetHariIni)); put('#kOmzetS', html`<span>${d.invoiceHariIni} invoice</span><span>lunas ${rp(d.lunasHariIni)}</span>`);
    put('#kDraft', String(d.jmlDraft)); put('#kBelum', String(d.jmlBelumBayar));
    put('#qDraft', d.drafts.length ? html`<div class="nx-list">${d.drafts.map(i => html`<div class="nx-row click" data-act="inv.buka" data-id="${i.invoice_id}"><div class="grow"><div class="fw6 truncate">${i.nama_pasien}</div><div class="t-sm muted">${tglS(i.tgl_kunjungan)}</div></div><b class="num">${rp(i.total)}</b><i class="bi bi-chevron-right muted"></i></div>`)}</div>` : kosong('bi-check2-all', 'Tidak ada draft', 'Semua invoice sudah ditinjau.'));
  }).catch(e => { galat(e); put('#qDraft', html`<div class="muted t-sm">Gagal memuat.</div>`); });
  if (isSuper()) call('laporan', { dari: addDays(t, -29), sampai: t, grain: 'hari' }, { fresh: 60000 }).then(r => {
    if (S.route !== '/home') return;
    put('#insBox', html`<h6><i class="bi bi-stars"></i> Insight 30 Hari Terakhir</h6><ul>${r.insight.map(x => html`<li>${x}</li>`)}</ul>`);
  }).catch(() => put('#insBox', html`<h6><i class="bi bi-stars"></i> Insight</h6><div class="t-sm">Tidak dapat memuat insight.</div>`));
}

// \u2500\u2500 Profil & ganti password \u2500\u2500
VIEWS.profil = function (v) {
  const u = S.user, tema = document.documentElement.getAttribute('data-theme');
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Profil Saya</h1></div></div>
  <div class="nx-grid2"><div class="nx-card accent"><div class="nx-pt mb16"><div class="nx-ava lg">${inisial(u.nama)}</div><div><div class="t-h3">${u.nama}</div><div class="nx-badge info nodot mt8">${peranLabel(u)}</div></div></div>
    <dl class="nx-kv"><dt>Username</dt><dd>${u.username}</dd>${u.jabatan ? html`<dt>Jabatan</dt><dd>${u.jabatan}</dd>` : ''}${u.no_sip ? html`<dt>No. SIP</dt><dd>${u.no_sip}</dd>` : ''}${u.no_str ? html`<dt>No. STR</dt><dd>${u.no_str}</dd>` : ''}<dt>Klinik</dt><dd>${S.cfg.nama_klinik}</dd><dt>Versi</dt><dd>ShanERM 2.7</dd></dl>
    <div class="wrap-gap mt24"><button class="nx-btn secondary" data-act="pw.form"><i class="bi bi-key"></i> Ganti Password</button><button class="nx-btn danger" data-act="app.keluar"><i class="bi bi-box-arrow-right"></i> Keluar</button></div></div>
    <div class="nx-card"><div class="nx-sec-title mb16"><i class="bi bi-pen"></i> Tanda Tangan Saya</div>
      <div class="nx-ttd-prev" id="ttdPrev">${skel(1, 70)}</div>
      <div class="nx-note mt12"><i class="bi bi-info-circle"></i> Ditempel otomatis pada dokumen yang Anda terbitkan (resume medis, resep). Tersimpan privat; hanya Anda yang dapat mengubahnya.</div>
      <div class="wrap-gap mt16"><button class="nx-btn primary" data-act="ttd.form"><i class="bi bi-pencil"></i> Buat / ganti</button><button class="nx-btn ghost hide" id="ttdDel" data-act="ttd.hapus" style="color:var(--err-ink)"><i class="bi bi-trash"></i> Hapus</button></div></div>
    <div class="nx-card"><div class="nx-sec-title mb16"><i class="bi bi-palette"></i> Tampilan</div><div class="nx-seg" role="group"><button class="${tema === 'light' ? 'on' : ''}" data-act="tema.set" data-t="light"><i class="bi bi-sun"></i> Terang</button><button class="${tema === 'dark' ? 'on' : ''}" data-act="tema.set" data-t="dark"><i class="bi bi-moon-stars"></i> Gelap</button></div>
    <div class="nx-note mt16"><i class="bi bi-info-circle"></i> Pilihan tema disimpan pada perangkat ini.</div></div></div>`);
  muatTtdProfil();
};
function muatTtdProfil() {
  call('ttd.lihat').then(r => { const el = $('#ttdPrev'); if (!el) return; put(el, r.ada ? html`<img src="${r.uri}" alt="Tanda tangan Anda" style="max-height:90px;max-width:100%">` : html`<div class="muted t-sm">Belum ada tanda tangan.</div>`); const d = $('#ttdDel'); if (d) d.classList.toggle('hide', !r.ada); }).catch(() => { put('#ttdPrev', html`<div class="muted t-sm">Tidak dapat memuat tanda tangan.</div>`); });
}
ACT['ttd.form'] = () => {
  MD.open('mdl', { title: 'Tanda Tangan Saya', size: 'md', body: html`<div class="nx-field"><label class="nx-lab"><span>Tanda tangan di kotak ini</span><button type="button" class="nx-btn ghost sm" data-act="ttd.clear"><i class="bi bi-eraser"></i> Hapus</button></label><div class="nx-sig"><canvas id="ttdC" aria-label="Kanvas tanda tangan"></canvas><div class="ln"></div><div class="ph" id="ttdPh">Tanda tangan di sini</div></div></div>
      <div class="t-sm muted mb8">atau unggah foto tanda tangan di atas kertas putih:</div><input type="file" id="ttdFile" accept="image/*" class="nx-in">`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" id="ttdSimpan" data-act="ttd.simpan"><i class="bi bi-check2"></i> Simpan</button>`, onShown: initTtd });
};
const TT = { ink: 0, img: null };
function initTtd() {
  TT.ink = 0; TT.img = null;
  const c = $('#ttdC'); if (!c) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1), w = c.clientWidth, h = c.clientHeight; c.width = w * dpr; c.height = h * dpr;
  const x = c.getContext('2d'); x.scale(dpr, dpr); x.lineWidth = 2.4; x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = '#0F172A';
  let on = false, lx = 0, ly = 0;
  const pos = e => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  c.addEventListener('pointerdown', e => { on = true; c.setPointerCapture(e.pointerId); [lx, ly] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(lx + .1, ly + .1); x.stroke(); $('#ttdPh').classList.add('hide'); TT.img = null; e.preventDefault(); });
  c.addEventListener('pointermove', e => { if (!on) return; const [px, py] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(px, py); x.stroke(); TT.ink += Math.hypot(px - lx, py - ly); lx = px; ly = py; });
  const end = () => { on = false; }; c.addEventListener('pointerup', end); c.addEventListener('pointercancel', end);
  $('#ttdFile').addEventListener('change', async e => { const f = e.target.files[0]; if (!f) return; try { TT.img = await kecilkanTtd(f); const cx = c.getContext('2d'); cx.save(); cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, c.width, c.height); cx.restore(); $('#ttdPh').classList.add('hide'); const im = new Image(); im.onload = () => { const k = Math.min(c.clientWidth / im.width, c.clientHeight / im.height); x.drawImage(im, 0, 0, im.width * k, im.height * k); }; im.src = TT.img; } catch (err) { toast(err.message, 'err'); } });
}
ACT['ttd.clear'] = () => { const c = $('#ttdC'); if (!c) return; const x = c.getContext('2d'); x.save(); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, c.width, c.height); x.restore(); TT.ink = 0; TT.img = null; $('#ttdPh').classList.remove('hide'); const f = $('#ttdFile'); if (f) f.value = ''; };
/** Foto tanda tangan -> PNG kecil; piksel putih/terang dibuat transparan agar menyatu dengan dokumen. */
function kecilkanTtd(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader(); fr.onerror = () => rej(new Error('Gagal membaca gambar.'));
    fr.onload = () => { const im = new Image(); im.onerror = () => rej(new Error('Format gambar tidak didukung.')); im.onload = () => {
      const k = Math.min(1, 600 / im.width, 220 / im.height), W = Math.round(im.width * k), H = Math.round(im.height * k), o = document.createElement('canvas'); o.width = W; o.height = H;
      const x = o.getContext('2d'); x.drawImage(im, 0, 0, W, H); const d = x.getImageData(0, 0, W, H), a = d.data;
      for (let i = 0; i < a.length; i += 4) { const l = (a[i] + a[i + 1] + a[i + 2]) / 3; if (l > 215) a[i + 3] = 0; else if (l > 150) a[i + 3] = Math.round(255 * (215 - l) / 65); }
      x.putImageData(d, 0, 0); res(o.toDataURL('image/png')); }; im.src = fr.result; };
    fr.readAsDataURL(file);
  });
}
ACT['ttd.simpan'] = async t => {
  let data = TT.img;
  if (!data) {
    if (TT.ink < 25) return toast('Tanda tangan belum diisi.', 'err');
    const c = $('#ttdC'), W = Math.min(c.width, 600), H = Math.round(c.height * W / c.width), o = document.createElement('canvas'); o.width = W; o.height = H; o.getContext('2d').drawImage(c, 0, 0, W, H); data = o.toDataURL('image/png');
  }
  t.disabled = true;
  try { await call('ttd.simpan', { data: data }); S.user.punya_ttd = true; MD.close('mdl'); toast('Tanda tangan tersimpan.'); muatTtdProfil(); } catch (e) { galat(e); t.disabled = false; }
};
ACT['ttd.hapus'] = async () => {
  if (!await konfirmasi({ title: 'Hapus tanda tangan', msg: 'Dokumen berikutnya tidak akan memuat tanda tangan Anda sampai dibuat lagi.', ok: 'Hapus', danger: true })) return;
  try { await call('ttd.hapus'); S.user.punya_ttd = false; toast('Tanda tangan dihapus.'); muatTtdProfil(); } catch (e) { galat(e); }
};
ACT['tema.set'] = t => { const want = t.dataset.t; if (document.documentElement.getAttribute('data-theme') !== want) ubahTema(); else render(true); };
ACT['pw.form'] = () => formGantiPw(false);
function formGantiPw(wajib) {
  MD.open('mdl', { title: wajib ? 'Buat Password Baru' : 'Ganti Password', size: 'sm', static: !!wajib, body: html`
    ${wajib ? html`<div class="nx-alert info mb16"><i class="bi bi-info-circle-fill"></i><div>Demi keamanan, ganti password sementara Anda sebelum melanjutkan.</div></div>` : ''}
    ${medan('pwL', 'Password saat ini', { type: 'password', ac: 'current-password', req: 1 })}
    <div class="nx-field"><label class="nx-lab" for="pwB"><span>Password baru <span class="req">*</span></span></label><input id="pwB" class="nx-in" type="password" autocomplete="new-password" data-in="pw.meter"><div class="nx-pw-meter"><i id="pwM"></i></div><div class="nx-help">Minimal 8 karakter, mengandung huruf dan angka.</div></div>
    ${medan('pwK', 'Ulangi password baru', { type: 'password', ac: 'new-password', req: 1 })}`,
    footer: html`${wajib ? '' : html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button>`}<button class="nx-btn primary" data-act="pw.simpan">Simpan Password</button>` });
}
INP['pw.meter'] = el => { const s = el.value; let k = 0; if (s.length >= 8) k++; if (/[A-Za-z]/.test(s) && /\d/.test(s)) k++; if (s.length >= 12) k++; if (/[^A-Za-z0-9]/.test(s)) k++; const m = $('#pwM'); m.style.width = (k * 25) + '%'; m.style.background = k <= 1 ? 'var(--err)' : (k === 2 ? 'var(--warn)' : 'var(--ok)'); };
ACT['pw.simpan'] = async btn => {
  bersihGalat($('#mdl')); const l = $('#pwL').value, b = $('#pwB').value, k = $('#pwK').value;
  if (!l) return bad('pwL', 'Isi password saat ini.');
  if (b.length < 8 || !/[A-Za-z]/.test(b) || !/\d/.test(b)) return bad('pwB', 'Minimal 8 karakter, huruf dan angka.');
  if (b !== k) return bad('pwK', 'Konfirmasi tidak sama.');
  try { await denganSibuk(btn, () => call('gantiPassword', { lama: l, baru: b })); S.user.wajibGanti = false; MD.el('mdl')._onHide = null; MD.close('mdl'); toast('Password berhasil diganti.'); } catch (e) { galat(e); }
};

/*@@FILE 03_jadwal_pasien.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Jadwal, Pasien, Rekam Medis \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const J = { rentang: 'hari', petugas: '', status: '' };
const P = { q: '', aktif: '1', sel: '' };

// \u2500\u2500 Optimistic UI: ubah state dulu, rollback bila server menolak \u2500\u2500
async function optimis(mutasi, kerja, sukses) {
  const snap = { jadwal: deep(S.jadwal), pasien: deep(S.pasien) };
  mutasi(); render(true);
  try { const r = await kerja(); const lanjut = sukses ? sukses(r) : true; if (lanjut === false) { S.jadwal = snap.jadwal; S.pasien = snap.pasien; render(true); } return r; }
  catch (e) { S.jadwal = snap.jadwal; S.pasien = snap.pasien; render(true); galat(e); return null; }
}

// \u2500\u2500 Jadwal \u2500\u2500
VIEWS.jadwal = function (v) {
  const t = today();
  let dari = t, sampai = t;
  if (J.rentang === 'besok') { dari = sampai = addDays(t, 1); } else if (J.rentang === 'pekan') { sampai = addDays(t, 6); } else if (J.rentang === 'lalu') { dari = addDays(t, -30); sampai = addDays(t, -1); }
  let list = S.jadwal.filter(j => j.tanggal >= dari && j.tanggal <= sampai);
  if (J.petugas) list = list.filter(j => (j.petugas_ids || []).indexOf(J.petugas) >= 0);
  if (J.status) list = list.filter(j => j.status === J.status);
  list.sort((a, b) => (J.rentang === 'lalu' ? b.tanggal.localeCompare(a.tanggal) : a.tanggal.localeCompare(b.tanggal)) || a.jam.localeCompare(b.jam));
  const grup = {}; list.forEach(j => (grup[j.tanggal] = grup[j.tanggal] || []).push(j));
  const R = [['hari', 'Hari ini'], ['besok', 'Besok'], ['pekan', '7 hari'], ['lalu', 'Riwayat']];
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Jadwal Kunjungan</h1><p>${isKelola() ? 'Kelola penugasan petugas ke rumah pasien.' : 'Kunjungan yang ditugaskan kepada Anda.'}</p></div>${isKelola() ? html`<button class="nx-btn primary" data-act="jd.tambah"><i class="bi bi-plus-lg"></i> Jadwal Baru</button>` : ''}</div>
  <div class="nx-seg mb12" role="tablist">${R.map(r => html`<button class="${J.rentang === r[0] ? 'on' : ''}" data-act="jd.rentang" data-v="${r[0]}">${r[1]}</button>`)}</div>
  ${isKelola() ? html`<div class="nx-toolbar"><select class="nx-sel" style="max-width:240px" data-ch="jd.fp" aria-label="Filter petugas"><option value="">Semua petugas</option>${S.staff.map(s => html`<option value="${s.user_id}" ${J.petugas === s.user_id ? 'selected' : ''}>${s.nama} (${s.peran})</option>`)}</select>
    <select class="nx-sel" style="max-width:200px" data-ch="jd.fs" aria-label="Filter status"><option value="">Semua status</option>${Object.keys(STATUS_J).map(k => html`<option value="${k}" ${J.status === k ? 'selected' : ''}>${STATUS_J[k][0]}</option>`)}</select></div>` : ''}
  ${list.length ? Object.keys(grup).map(tg => html`<div class="nx-day-h"><i class="bi bi-calendar3 ink-p"></i> ${tglH(tg)}${tg === t ? html` <span class="nx-badge info nodot">Hari ini</span>` : ''}<span class="muted t-sm">${grup[tg].length} kunjungan</span></div>${grup[tg].map(j => kartuJadwal(j))}`) : html`<div class="nx-card">${kosong('bi-calendar2-x', 'Tidak ada jadwal', 'Tidak ada kunjungan pada rentang ini.', isKelola() ? html`<button class="nx-btn primary" data-act="jd.tambah">Buat jadwal</button>` : '')}</div>`}`);
};
ACT['jd.rentang'] = t => { J.rentang = t.dataset.v; render(); };
INP['jd.fp'] = el => { J.petugas = el.value; render(); }; INP['jd.fs'] = el => { J.status = el.value; render(); };

function formJadwal(j, pasienId) {
  const e = !!j; j = j || { tanggal: today(), jam: '09:00', durasi_menit: 60, petugas_ids: [], pasien_id: pasienId || '' };
  const p = pasienById(j.pasien_id);
  J.form = { ids: (j.petugas_ids || []).slice(), id: j.jadwal_id || '', force: false };
  MD.open('mdl', { title: e ? 'Ubah Jadwal' : 'Jadwal Kunjungan Baru', size: 'lg', body: html`
    ${blokPasien('jdP', 'dlPas', p, e)}
    <div class="nx-grid2" style="gap:0 16px">${medan('jdT', 'Tanggal', { type: 'date', v: j.tanggal, req: 1 })}${medan('jdJ', 'Jam mulai', { type: 'time', v: j.jam, req: 1 })}</div>
    <div class="nx-field"><label class="nx-lab" for="jdD">Durasi</label><select id="jdD" class="nx-sel" data-ch="jd.cek">${[30, 45, 60, 90, 120, 180].map(d => html`<option value="${d}" ${+j.durasi_menit === d ? 'selected' : ''}>${d} menit</option>`)}</select></div>
    <div class="nx-field"><label class="nx-lab"><span>Petugas yang berangkat <span class="req">*</span></span></label><div class="wrap-gap" id="jdPet">${S.staff.map(s => html`<button type="button" class="nx-chip ${J.form.ids.indexOf(s.user_id) >= 0 ? 'on' : ''}" data-act="jd.pet" data-id="${s.user_id}">${s.nama} <small style="opacity:.75">${s.peran === 'FISIO' ? 'Fisio' : s.peran === 'DOKTER' ? 'Dokter' : 'Perawat'}</small></button>`)}</div></div>
    <div id="jdWarn"></div>
    ${(S.paket || []).length || j.paket_id ? html`<div class="nx-field"><label class="nx-lab" for="jdPk">Paket tindakan <span class="muted t-sm">(opsional)</span></label><select id="jdPk" class="nx-sel" ${e && (j.soaps || []).length ? 'disabled' : ''}><option value="">\u2014 Tanpa paket (tagihan dihitung dari SOAP) \u2014</option>${(S.paket || []).map(x => html`<option value="${x.paket_id}" ${j.paket_id === x.paket_id ? 'selected' : ''}>${x.nama} \u2014 ${rp(x.harga)}</option>`)}</select><div class="nx-help" id="jdPkH"></div></div>` : ''}
    ${medan('jdL', 'Layanan / keperluan', { v: j.layanan || '', opt: 1, ph: 'mis. Perawatan luka, fisioterapi lutut', max: 150 })}
    ${medan('jdA', 'Alamat kunjungan', { v: j.alamat_kunjungan || (p ? p.alamat : ''), opt: 1, ta: 1, h: 64, help: 'Kosongkan untuk memakai alamat pasien.' })}
    ${medan('jdC', 'Catatan untuk petugas', { v: j.catatan_admin || '', opt: 1, ta: 1, h: 64, max: 300 })}`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="jd.simpan"><i class="bi bi-check2"></i> ${e ? 'Simpan Perubahan' : 'Simpan Jadwal'}</button>`,
    onShown: () => cekBentrok() });
  const infoPaket = () => { const h = $('#jdPkH'), x = (S.paket || []).find(y => y.paket_id === val('jdPk')); if (h) h.textContent = x ? 'Tindakan: ' + x.items.filter(i => i.jenis === 'TINDAKAN').map(i => i.nama + ' \u00d7' + i.qty).join(', ') + (x.items.some(i => i.jenis === 'BHP') ? ' \u2022 BHP termasuk: ' + x.items.filter(i => i.jenis === 'BHP').map(i => i.nama + ' \u00d7' + i.qty).join(', ') : '') + '. Invoice ' + rp(x.harga) + ' langsung terbit saat jadwal disimpan; petugas tidak perlu menambah tindakan.' : ''; };
  if ($('#jdPk')) { $('#jdPk').addEventListener('change', infoPaket); infoPaket(); }
  $('#jdT').addEventListener('change', cekBentrok); $('#jdJ').addEventListener('change', cekBentrok);
  $('#jdP').addEventListener('change', () => { const x = pasienDariInput(); if (x && !val('jdA')) $('#jdA').value = x.alamat; });
}
function pasienDariInput() { const s = val('jdP'); return S.pasien.find(x => (x.nama + ' \u2014 ' + x.no_rm) === s) || S.pasien.find(x => x.no_rm.toLowerCase() === s.toLowerCase()); }
// ===== Pilih pasien terdaftar ATAU daftarkan pasien baru (dipakai form Jadwal & Konsultasi) =====
const RG = { mode: 'lama', jk: '' };
function blokPasien(idIn, dl, p, readonly) {
  RG.mode = 'lama'; RG.jk = '';
  const lama = html`<div class="nx-field" id="rgLama"><input id="${idIn}" class="nx-in" list="${dl}" placeholder="Ketik nama atau No. RM\u2026" autocomplete="off" value="${p ? p.nama + ' \u2014 ' + p.no_rm : ''}" ${readonly ? 'readonly' : ''}><datalist id="${dl}">${S.pasien.filter(x => x.status_aktif).map(x => html`<option value="${x.nama + ' \u2014 ' + x.no_rm}"></option>`)}</datalist></div>`;
  if (readonly) return html`<div class="nx-field"><label class="nx-lab"><span>Pasien <span class="req">*</span></span></label>${lama}</div>`;
  return html`<div class="nx-field"><label class="nx-lab"><span>Pasien <span class="req">*</span></span></label>
    <div class="nx-seg" id="rgSeg"><button type="button" class="on" data-act="rg.mode" data-v="lama"><i class="bi bi-person-check"></i> Pasien terdaftar</button><button type="button" data-act="rg.mode" data-v="baru"><i class="bi bi-person-plus"></i> Pasien baru</button></div></div>
    ${lama}
    <div id="rgBaru" hidden style="border:1px dashed var(--line,#cfd8dc);border-radius:12px;padding:14px 14px 2px;margin-bottom:16px">
      <div class="t-sm muted mb12"><i class="bi bi-info-circle"></i> Pasien baru langsung terdaftar di Data Pasien (mendapat No. RM) lalu dijadwalkan. Data lengkap dapat dilengkapi nanti lewat menu Pasien.</div>
      ${medan('rgNama', 'Nama lengkap', { req: 1, ac: 'off', max: 120 })}
      <div class="nx-grid2" style="gap:0 16px">${medan('rgTgl', 'Tanggal lahir', { type: 'date', req: 1 })}
        <div class="nx-field"><label class="nx-lab"><span>Jenis kelamin <span class="req">*</span></span></label><div class="nx-seg" id="rgJk"><button type="button" data-act="rg.jk" data-v="L">Laki-laki</button><button type="button" data-act="rg.jk" data-v="P">Perempuan</button></div></div></div>
      ${medan('rgAl', 'Alamat lengkap', { ta: 1, h: 64, req: 1, help: 'Dipakai sebagai tujuan kunjungan & tautan peta.' })}
      <div class="nx-grid2" style="gap:0 16px">${medan('rgWa', 'No. WhatsApp', { type: 'tel', inputmode: 'tel', req: 1, ph: '0812xxxxxxx' })}${medan('rgAlg', 'Alergi', { opt: 1, ph: 'Kosongkan bila tidak ada' })}</div>
    </div>`;
}
ACT['rg.mode'] = t => {
  RG.mode = t.dataset.v; $$('#rgSeg button').forEach(b => b.classList.toggle('on', b === t));
  const lama = $('#rgLama'), baru = $('#rgBaru'); if (lama) lama.hidden = RG.mode !== 'lama'; if (baru) baru.hidden = RG.mode !== 'baru';
  const f = $(RG.mode === 'baru' ? '#rgNama' : '#rgLama input'); if (f) f.focus();
};
ACT['rg.jk'] = t => { RG.jk = t.dataset.v; $$('#rgJk button').forEach(b => b.classList.toggle('on', b === t)); };
// Mengembalikan objek pasien (lama dipilih, atau baru yang baru saja disimpan); null bila batal/tidak valid.
async function ambilPasien(btn, idIn) {
  if (RG.mode === 'lama') {
    const sv = val(idIn), ps = S.pasien.find(x => (x.nama + ' \u2014 ' + x.no_rm) === sv) || S.pasien.find(x => x.no_rm.toLowerCase() === sv.toLowerCase());
    if (!ps) { bad(idIn, 'Pilih pasien terdaftar dari daftar, atau pilih "Pasien baru".'); return null; }
    return ps;
  }
  const d = { pasien_id: '', nama: val('rgNama'), tgl_lahir: val('rgTgl'), jenis_kelamin: RG.jk, alamat: val('rgAl'), no_wa: val('rgWa'), alergi: val('rgAlg') };
  let ok = true;
  if (d.nama.length < 3) ok = bad('rgNama', 'Nama minimal 3 karakter.');
  if (!d.tgl_lahir || d.tgl_lahir > today()) ok = bad('rgTgl', 'Tanggal lahir tidak valid.');
  if (!d.jenis_kelamin) { toast('Pilih jenis kelamin.', 'warn'); ok = false; }
  if (d.alamat.length < 5) ok = bad('rgAl', 'Alamat wajib diisi.');
  if (!d.no_wa || d.no_wa.replace(/\D/g, '').length < 9) ok = bad('rgWa', 'Nomor WhatsApp wajib diisi.');
  if (!ok) return null;
  let r = await denganSibuk(btn, () => call('pasien.simpan', d));
  if (!r.tersimpan) {
    if (!await konfirmasi({ title: 'Kemungkinan pasien ganda', msg: 'Sudah ada pasien aktif bernama "' + r.duplikat.nama + '" (' + r.duplikat.no_rm + ') dengan tanggal lahir yang sama. Daftarkan sebagai pasien baru?', ok: 'Tetap daftarkan' })) return null;
    r = await denganSibuk(btn, () => call('pasien.simpan', Object.assign({}, d, { force: true })));
  }
  const rec = Object.assign({ terakhir: '', berikut: '', jml_kunjungan: 0 }, r.pasien), i = S.pasien.findIndex(x => x.pasien_id === rec.pasien_id);
  if (i >= 0) S.pasien[i] = Object.assign(S.pasien[i], rec); else S.pasien.push(rec);
  // beralih ke mode "terdaftar" agar percobaan ulang tidak membuat pasien ganda
  RG.mode = 'lama'; const inp = $('#' + idIn); if (inp) inp.value = rec.nama + ' \u2014 ' + rec.no_rm;
  const lama = $('#rgLama'), baru = $('#rgBaru'); if (lama) lama.hidden = false; if (baru) baru.hidden = true; $$('#rgSeg button').forEach(b => b.classList.toggle('on', b.dataset.v === 'lama'));
  toast('Pasien baru terdaftar (' + rec.no_rm + ').');
  return rec;
}
const menitDari = jam => { const p = String(jam).split(':'); return (+p[0]) * 60 + (+p[1]); };
INP['jd.cek'] = () => cekBentrok();
function cekBentrok() {
  const box = $('#jdWarn'); if (!box || !J.form) return;
  const tg = val('jdT'), jam = val('jdJ'), dur = +val('jdD') || 60, buf = +S.cfg.buffer_transit_menit || 0;
  if (!tg || !/^\d\d:\d\d$/.test(jam) || !J.form.ids.length) { box.innerHTML = ''; return; }
  const a1 = menitDari(jam), a2 = a1 + dur + buf, hit = [];
  S.jadwal.forEach(x => {
    if (x.jadwal_id === J.form.id || x.tanggal !== tg || x.status === 'BATAL') return;
    const b1 = menitDari(x.jam), b2 = b1 + x.durasi_menit + buf;
    if (a1 < b2 && b1 < a2) (x.petugas_ids || []).filter(i => J.form.ids.indexOf(i) >= 0).forEach(i => hit.push(staffNama(i) + ' (' + x.jam + ')'));
  });
  put(box, hit.length ? html`<div class="nx-alert warn mb12"><i class="bi bi-exclamation-triangle-fill"></i><div><b>Kemungkinan bentrok jadwal:</b> ${hit.join(', ')}. Termasuk jeda transit ${buf} menit. Anda tetap dapat menyimpan setelah konfirmasi.</div></div>` : '');
}
ACT['jd.pet'] = t => { const id = t.dataset.id, i = J.form.ids.indexOf(id); if (i >= 0) J.form.ids.splice(i, 1); else J.form.ids.push(id); t.classList.toggle('on'); cekBentrok(); };
ACT['jd.tambah'] = () => formJadwal(null);
ACT['jd.edit'] = t => formJadwal(S.jadwal.find(j => j.jadwal_id === t.dataset.id));
ACT['jd.simpan'] = async btn => {
  bersihGalat($('#mdl'));
  const tg = val('jdT'), jam = val('jdJ');
  if (!tg) return bad('jdT', 'Tanggal wajib diisi.');
  if (!/^\d\d:\d\d$/.test(jam)) return bad('jdJ', 'Jam wajib diisi.');
  if (!J.form.ids.length) return toast('Pilih minimal satu petugas.', 'warn');
  let ps; try { ps = J.form.id ? pasienDariInput() : await ambilPasien(btn, 'jdP'); } catch (e) { return galat(e); }
  if (!ps) return;
  const payload = { jadwal_id: J.form.id, pasien_id: ps.pasien_id, tanggal: tg, jam: jam, durasi_menit: +val('jdD'), petugas_ids: J.form.ids, layanan: val('jdL'), alamat_kunjungan: val('jdA'), catatan_admin: val('jdC'), paket_id: $('#jdPk') ? val('jdPk') : '' };
  const kirim = async force => {
    const r = await optimis(() => {
      const tmp = Object.assign({ status: 'TERJADWAL', consent: false, soaps: [], _tmp: 1 }, payload, { jadwal_id: payload.jadwal_id || 'tmp' + Date.now() });
      const i = S.jadwal.findIndex(x => x.jadwal_id === payload.jadwal_id);
      if (i >= 0) S.jadwal[i] = Object.assign({}, S.jadwal[i], payload, { _tmp: 1 }); else S.jadwal.push(tmp);
    }, () => call('jadwal.simpan', Object.assign({}, payload, { force: !!force })), r => {
      if (!r.tersimpan) { MD.open('mdl2', { title: 'Jadwal bentrok', size: 'sm', body: html`<p>Petugas berikut sudah memiliki kunjungan yang berdekatan:</p><ul>${r.bentrok.map(b => html`<li><b>${b.nama}</b> \u2014 pukul ${b.jam} (${b.durasi_menit} mnt)</li>`)}</ul><p class="muted t-sm">Pertimbangkan jeda transit ${S.cfg.buffer_transit_menit} menit.</p>`, footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Ubah jadwal</button><button class="nx-btn primary" data-act="jd.paksa">Tetap simpan</button>` }); return false; }
      const i = S.jadwal.findIndex(x => x.jadwal_id === payload.jadwal_id || x._tmp);
      const rec = r.jadwal; rec._tmp = 0;
      const k = S.jadwal.findIndex(x => x._tmp && (x.jadwal_id === payload.jadwal_id || x.jadwal_id.indexOf('tmp') === 0));
      if (k >= 0) S.jadwal[k] = rec; else if (i < 0) S.jadwal.push(rec);
      render(true); toast('Jadwal tersimpan.'); return true;
    });
    return r;
  };
  ACT['jd.paksa'] = async () => { MD.close('mdl2'); await kirim(true); };
  MD.close('mdl');
  await kirim(false);
};
ACT['jd.batal'] = async t => {
  const id = t.dataset.id, alasan = await konfirmasi({ title: 'Batalkan kunjungan', msg: 'Kunjungan akan ditandai batal dan petugas tidak lagi melihatnya sebagai tugas aktif.', ok: 'Batalkan kunjungan', danger: true, input: { label: 'Alasan pembatalan', ph: 'mis. pasien dirawat inap, jadwal bergeser' } });
  if (!alasan) return;
  await optimis(() => { const j = S.jadwal.find(x => x.jadwal_id === id); j.status = 'BATAL'; j.catatan_admin = 'Dibatalkan: ' + alasan; }, () => call('jadwal.status', { jadwal_id: id, status: 'BATAL', alasan: alasan }), () => { toast('Kunjungan dibatalkan.', 'warn'); });
};
ACT['jd.aktif'] = async t => { const id = t.dataset.id; await optimis(() => { S.jadwal.find(x => x.jadwal_id === id).status = 'TERJADWAL'; }, () => call('jadwal.status', { jadwal_id: id, status: 'TERJADWAL' }), () => { toast('Jadwal diaktifkan kembali.'); }); };

// \u2500\u2500 Pasien \u2500\u2500
VIEWS.pasien = function (v) {
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Data Pasien</h1><p>${'Direktori pasien homecare dan rekam medis (dapat dibuka semua petugas).'}</p></div>${isKelola() ? html`<button class="nx-btn primary" data-act="ps.tambah"><i class="bi bi-person-plus-fill"></i> Pasien Baru</button>` : ''}</div>
  <div class="nx-toolbar"><div class="nx-in-icon"><i class="bi bi-search"></i><input id="psQ" class="nx-in" placeholder="Cari nama, No. RM, alamat\u2026" value="${P.q}" data-in="ps.q" aria-label="Cari pasien"></div>
    ${isKelola() ? html`<select class="nx-sel" style="max-width:170px" data-ch="ps.f" aria-label="Status"><option value="1" ${P.aktif === '1' ? 'selected' : ''}>Aktif</option><option value="0" ${P.aktif === '0' ? 'selected' : ''}>Nonaktif</option><option value="" ${P.aktif === '' ? 'selected' : ''}>Semua</option></select>` : ''}</div>
  <div class="nx-grid-main"><div class="nx-card pad0"><div id="psList"></div></div><div class="sticky-side hide-sm" id="psPrev"></div></div>`);
  isiPasien(); if (P.sel && window.innerWidth >= 1024) previewPasien(P.sel, true);
};
function isiPasien() {
  const q = P.q.toLowerCase();
  const l = S.pasien.filter(p => (P.aktif === '' || (P.aktif === '1') === !!p.status_aktif) && (!q || (p.nama + ' ' + p.no_rm + ' ' + p.alamat).toLowerCase().indexOf(q) >= 0)).sort((a, b) => a.nama.localeCompare(b.nama));
  const el = $('#psList'); if (!el) return;
  put(el, l.length ? html`<div class="nx-list" style="padding:0 16px">${l.slice(0, 200).map(p => html`<div class="nx-row click ${P.sel === p.pasien_id ? 'sel' : ''}" data-act="ps.pilih" data-id="${p.pasien_id}" style="margin:0 -16px;padding:12px 16px"><div class="nx-ava ${p.jenis_kelamin === 'P' ? 'teal' : ''}">${inisial(p.nama)}</div><div class="grow"><div class="fw7 truncate">${p.nama} ${p.status_aktif ? '' : html`<span class="nx-badge nodot">Nonaktif</span>`}</div><div class="t-sm muted truncate">${p.no_rm} \u2022 ${umur(p.tgl_lahir)} th \u2022 ${p.alamat}</div></div><div class="t-sm muted" style="text-align:right">${p.berikut ? html`<span class="nx-badge info nodot">${tglPendek(p.berikut)}</span>` : (p.terakhir ? 'Terakhir ' + tglPendek(p.terakhir) : '')}</div></div>`)}</div>${l.length > 200 ? html`<div class="nx-note" style="padding:12px 16px">Menampilkan 200 pertama \u2014 persempit pencarian.</div>` : ''}` : kosong('bi-person-x', 'Pasien tidak ditemukan', P.q ? 'Coba kata kunci lain.' : 'Belum ada data pasien.', isKelola() && !P.q ? html`<button class="nx-btn primary" data-act="ps.tambah">Tambah pasien</button>` : ''));
}
INP['ps.q'] = debounce(el => { P.q = el.value.trim(); isiPasien(); }, 200);
INP['ps.f'] = el => { P.aktif = el.value; isiPasien(); };
ACT['ps.pilih'] = t => { P.sel = t.dataset.id; $$('#psList .nx-row').forEach(r => r.classList.toggle('sel', r.dataset.id === P.sel)); previewPasien(P.sel, window.innerWidth >= 1024); };
function previewPasien(id, panel) {
  const p = pasienById(id); if (!p) return;
  const isi = html`<div class="nx-pt mb12"><div class="nx-ava lg ${p.jenis_kelamin === 'P' ? 'teal' : ''}">${inisial(p.nama)}</div><div class="grow"><div class="t-h3">${p.nama}</div><div class="muted t-sm">${p.no_rm} \u2022 ${umur(p.tgl_lahir)} th \u2022 ${jkLabel(p.jenis_kelamin)}</div></div></div>
    ${p.alergi ? html`<div class="nx-allergy mb12"><i class="bi bi-exclamation-triangle-fill"></i><div>Alergi: ${p.alergi}</div></div>` : ''}
    <dl class="nx-kv"><dt>Tgl. lahir</dt><dd>${tglS(p.tgl_lahir)}</dd><dt>Alamat</dt><dd>${p.alamat}</dd><dt>WhatsApp</dt><dd>${p.no_wa}</dd>${p.kontak_darurat ? html`<dt>Kontak darurat</dt><dd>${p.kontak_darurat}</dd>` : ''}${p.program ? html`<dt>Program</dt><dd>${p.program}</dd>` : ''}${p.riwayat_penyakit ? html`<dt>Riwayat</dt><dd>${p.riwayat_penyakit}</dd>` : ''}<dt>Kunjungan</dt><dd>${p.jml_kunjungan || 0} selesai${p.terakhir ? ' \u2022 terakhir ' + tglS(p.terakhir) : ''}</dd>${p.berikut ? html`<dt>Berikutnya</dt><dd>${tglS(p.berikut)}</dd>` : ''}</dl>
    <div class="wrap-gap mt16"><button class="nx-btn primary grow" data-act="ps.rekam" data-id="${p.pasien_id}"><i class="bi bi-journal-medical"></i> Rekam Medis</button>
      <a class="nx-btn secondary" data-native="1" target="_blank" rel="noopener" href="${waUrl(p.no_wa)}"><i class="bi bi-whatsapp"></i></a>
      ${isKelola() ? html`<button class="nx-btn secondary" data-act="jd.tambah.ps" data-id="${p.pasien_id}"><i class="bi bi-calendar-plus"></i> Jadwalkan</button><button class="nx-btn secondary" data-act="ps.edit" data-id="${p.pasien_id}"><i class="bi bi-pencil"></i> Ubah</button><button class="nx-btn ghost" style="color:var(--err-ink)" data-act="ps.toggle" data-id="${p.pasien_id}">${p.status_aktif ? 'Nonaktifkan' : 'Aktifkan'}</button>` : ''}${isSuper() ? html`<button class="nx-btn ghost" style="color:var(--err-ink)" data-act="ps.hapus" data-id="${p.pasien_id}"><i class="bi bi-trash"></i> Hapus</button>` : ''}</div>`;
  if (panel) put('#psPrev', html`<div class="nx-card accent">${isi}</div>`); else MD.open('mdl', { title: 'Detail Pasien', body: isi });
}
ACT['ps.rekam'] = t => { MD.close('mdl'); go('/rekam/' + t.dataset.id); };
ACT['jd.tambah.ps'] = t => { MD.close('mdl'); formJadwal(null, t.dataset.id); };
ACT['ps.tambah'] = () => formPasien(null);
ACT['ps.edit'] = t => { MD.close('mdl'); formPasien(pasienById(t.dataset.id)); };
function formPasien(p) {
  const e = !!p; p = p || {};
  MD.open('mdl', { title: e ? 'Ubah Data Pasien' : 'Pasien Baru', size: 'lg', body: html`<form id="fPs" novalidate>
    ${medan('pNama', 'Nama lengkap', { v: p.nama, req: 1, ac: 'off', max: 120 })}
    <div class="nx-grid2" style="gap:0 16px">${medan('pTgl', 'Tanggal lahir', { type: 'date', v: p.tgl_lahir, req: 1 })}
      <div class="nx-field"><label class="nx-lab"><span>Jenis kelamin <span class="req">*</span></span></label><div class="nx-seg" id="pJk"><button type="button" class="${p.jenis_kelamin === 'L' ? 'on' : ''}" data-act="ps.jk" data-v="L">Laki-laki</button><button type="button" class="${p.jenis_kelamin === 'P' ? 'on' : ''}" data-act="ps.jk" data-v="P">Perempuan</button></div></div></div>
    ${medan('pAl', 'Alamat lengkap', { v: p.alamat, ta: 1, h: 72, req: 1, help: 'Dipakai sebagai tujuan kunjungan & tautan peta.' })}
    <div class="nx-grid2" style="gap:0 16px">${medan('pWa', 'No. WhatsApp', { v: p.no_wa, type: 'tel', inputmode: 'tel', req: 1, ph: '0812xxxxxxx' })}${medan('pNik', 'NIK', { v: p.nik, inputmode: 'numeric', opt: 1, max: 16, ph: '16 digit' })}</div>
    ${medan('pKd', 'Kontak darurat', { v: p.kontak_darurat, opt: 1, ph: 'Nama \u2014 nomor HP' })}
    ${medan('pAlg', 'Alergi', { v: p.alergi, opt: 1, ph: 'mis. Penisilin, seafood (kosongkan bila tidak ada)', help: 'Akan tampil sebagai peringatan merah pada kartu kunjungan.' })}
    ${medan('pRw', 'Riwayat penyakit', { v: p.riwayat_penyakit, opt: 1, ta: 1, h: 64 })}
    ${medan('pPr', 'Program / diagnosis utama', { v: p.program, opt: 1, ph: 'mis. Perawatan pasca-stroke' })}</form>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="ps.simpan" data-id="${p.pasien_id || ''}"><i class="bi bi-check2"></i> Simpan</button>` });
  P.jk = p.jenis_kelamin || '';
}
ACT['ps.jk'] = t => { P.jk = t.dataset.v; $$('#pJk button').forEach(b => b.classList.toggle('on', b === t)); };
ACT['ps.simpan'] = async btn => {
  bersihGalat($('#mdl'));
  const d = { pasien_id: btn.dataset.id, nama: val('pNama'), tgl_lahir: val('pTgl'), jenis_kelamin: P.jk, alamat: val('pAl'), no_wa: val('pWa'), nik: val('pNik'), kontak_darurat: val('pKd'), alergi: val('pAlg'), riwayat_penyakit: val('pRw'), program: val('pPr') };
  let ok = true;
  if (d.nama.length < 3) ok = bad('pNama', 'Nama minimal 3 karakter.');
  if (!d.tgl_lahir || d.tgl_lahir > today()) ok = bad('pTgl', 'Tanggal lahir tidak valid.');
  if (!d.jenis_kelamin) { toast('Pilih jenis kelamin.', 'warn'); ok = false; }
  if (d.alamat.length < 5) ok = bad('pAl', 'Alamat wajib diisi.');
  if (!d.no_wa || d.no_wa.replace(/\D/g, '').length < 9) ok = bad('pWa', 'Nomor WhatsApp wajib diisi.');
  if (d.nik && !/^\d{16}$/.test(d.nik)) ok = bad('pNik', 'NIK harus 16 digit.');
  if (!ok) return;
  const kirim = async force => {
    try {
      const r = await denganSibuk(btn, () => call('pasien.simpan', Object.assign({}, d, { force: !!force })));
      if (!r.tersimpan) { if (await konfirmasi({ title: 'Kemungkinan pasien ganda', msg: 'Sudah ada pasien aktif bernama "' + r.duplikat.nama + '" (' + r.duplikat.no_rm + ') dengan tanggal lahir yang sama. Simpan sebagai pasien baru?', ok: 'Tetap simpan' })) return kirim(true); return; }
      const rec = Object.assign({ terakhir: '', berikut: '', jml_kunjungan: 0 }, r.pasien); const i = S.pasien.findIndex(x => x.pasien_id === rec.pasien_id);
      if (i >= 0) S.pasien[i] = Object.assign(S.pasien[i], rec); else S.pasien.push(rec);
      MD.close('mdl'); P.sel = rec.pasien_id; toast('Data pasien tersimpan (' + rec.no_rm + ').'); render(true);
    } catch (e) { galat(e); }
  };
  kirim(false);
};
ACT['ps.toggle'] = async t => {
  const p = pasienById(t.dataset.id), aktif = !p.status_aktif;
  if (!await konfirmasi({ title: aktif ? 'Aktifkan pasien' : 'Nonaktifkan pasien', msg: aktif ? 'Pasien akan kembali muncul pada pilihan jadwal.' : 'Pasien tidak dapat dijadwalkan lagi. Riwayat rekam medis tetap tersimpan.', ok: aktif ? 'Aktifkan' : 'Nonaktifkan', danger: !aktif })) return;
  MD.close('mdl');
  await optimis(() => { p.status_aktif = aktif; }, () => call('pasien.hapus', { pasien_id: p.pasien_id, aktif: aktif }), () => { toast(aktif ? 'Pasien diaktifkan.' : 'Pasien dinonaktifkan.', aktif ? 'ok' : 'warn'); });
};

// \u2500\u2500 Rekam Medis \u2500\u2500
const REK = { tab: 'kronologi', d: null };
VIEWS.rekam = async function (v, id) {
  put(v, skel(3, 110));
  try {
    const d = await call('pasien.rekam', { pasien_id: id }); if (S.route.indexOf('/rekam/') !== 0) return;
    REK.d = d; REK.tab = 'kronologi'; REK.buka = {}; gambarRekam();
  } catch (e) { galat(e); put('#view', kosong('bi-lock', 'Rekam medis tidak dapat dibuka', e.message, html`<button class="nx-btn secondary" data-act="nav" data-r="pasien">Kembali</button>`)); }
};
const chip = (l, v, u, bad) => v === '' || v == null ? '' : html`<span class="nx-chip ${bad ? 'err' : ''}" style="cursor:default">${l} <b class="num">${v}</b> ${u}</span>`;
function abnormal(k, n) { n = +n; return ({ td_sistol: n >= 140 || n < 90, td_diastol: n >= 90 || n < 60, nadi: n > 100 || n < 60, suhu: n >= 37.5 || n < 36, rr: n > 24 || n < 12, spo2: n < 95, gda: n >= 200 || n < 70, asam_urat: n > 7, kolesterol: n >= 240 })[k]; }
function kartuSoap(s, i) {
  const v = s.vital || {}, g = s.penunjang || {}, buka = REK.buka[s.soap_id] !== undefined ? REK.buka[s.soap_id] : i === 0, saya = s.petugas_id === S.user.user_id;
  const tot = (s.tindakan || []).reduce((a, x) => a + (+x.subtotal || 0), 0) + (s.bhp || []).reduce((a, x) => a + (+x.subtotal || 0), 0);
  return html`<div class="nx-soapc"><div class="hd" data-act="rk.buka" data-id="${s.soap_id}"><div class="no">${(REK.d.soaps.length - i)}</div><div class="grow"><div class="fw7">${tglH(s.tanggal)} \u2022 ${s.jam}</div><div class="t-sm muted">${s.petugas_nama}${s.revisi_ke > 0 ? ' \u2022 revisi ke-' + s.revisi_ke : ''}</div></div>${s.status === 'FINAL' ? html`<span class="nx-badge ok">Final</span>` : html`<span class="nx-badge warn">Draft</span>`}<i class="bi bi-chevron-${buka ? 'up' : 'down'} muted"></i></div>
  ${buka ? html`<div class="bd"><div class="wrap-gap mt12">${chip('TD', v.td_sistol !== '' && v.td_sistol != null ? v.td_sistol + '/' + v.td_diastol : '', 'mmHg', abnormal('td_sistol', v.td_sistol) || abnormal('td_diastol', v.td_diastol))}${chip('Nadi', v.nadi, 'x/mnt', v.nadi !== '' && abnormal('nadi', v.nadi))}${chip('Suhu', v.suhu, '\u00b0C', v.suhu !== '' && abnormal('suhu', v.suhu))}${chip('RR', v.rr, 'x/mnt', v.rr !== '' && abnormal('rr', v.rr))}${chip('SpO\u2082', v.spo2, '%', v.spo2 !== '' && abnormal('spo2', v.spo2))}${chip('GDA', g.gda, 'mg/dL', g.gda !== '' && abnormal('gda', g.gda))}${chip('Asam urat', g.asam_urat, 'mg/dL', g.asam_urat !== '' && abnormal('asam_urat', g.asam_urat))}${chip('Kolesterol', g.kolesterol, 'mg/dL', g.kolesterol !== '' && abnormal('kolesterol', g.kolesterol))}</div>
    ${[['S', 'Subjektif', s.S], ['O', 'Objektif (catatan)', s.O_catatan], ['A', 'Asesmen' + (s.icd10 ? ' \u2022 ICD-10 ' + s.icd10 : '') + (s.sdki ? ' \u2022 SDKI ' + s.sdki : ''), s.A], ['P', 'Planning', s.P]].filter(x => x[2]).map(x => html`<div class="blk"><h6><em>${x[0]}</em> ${x[1]}</h6><p>${x[2]}</p></div>`)}
    ${(s.tindakan || []).length || (s.bhp || []).length ? html`<div class="blk"><h6><em><i class="bi bi-bandaid" style="font-size:11px"></i></em> Tindakan & BHP</h6><div class="t-sm">${(s.tindakan || []).map(x => x.nama_tindakan + ' \u00d7' + x.qty).concat((s.bhp || []).map(x => x.nama_bhp + ' \u00d7' + x.qty)).join(' \u2022 ')}</div>${isKelola() ? html`<div class="t-sm muted mt8">Nilai: ${rp(tot)}</div>` : ''}</div>` : ''}
    ${(s.resep || []).length ? html`<div class="blk"><h6><em><i class="bi bi-capsule" style="font-size:11px"></i></em> Resep</h6>${s.resep.map(r => html`<div class="t-sm">\u2022 <b>${r.nama_obat}</b> ${r.dosis} \u2014 ${r.aturan_pakai}${r.jumlah ? ' (' + r.jumlah + ')' : ''}${r.instruksi ? ' \u2014 ' + r.instruksi : ''}</div>`)}</div>` : ''}
    ${s.consent ? html`<div class="nx-note mt12"><i class="bi bi-patch-check-fill" style="color:var(--ok)"></i> Informed consent: ${s.consent.nama_penandatangan} (${s.consent.pihak === 'WALI' ? 'wali \u2014 ' + s.consent.hubungan : 'pasien'}), ${waktuS(s.consent.waktu)}</div>` : ''}
    <div class="wrap-gap mt16">${s.status === 'FINAL' ? html`<button class="nx-btn secondary sm" data-act="doc.resume" data-id="${s.soap_id}"><i class="bi bi-file-earmark-pdf"></i> Resume PDF</button>` : ''}${s.status === 'FINAL' && (s.resep || []).length ? html`<button class="nx-btn secondary sm" data-act="doc.resep" data-id="${s.soap_id}" data-pid="${s.pasien_id}"><i class="bi bi-capsule"></i> Resep PDF</button>` : ''}${(saya || isSuper()) && s.status === 'FINAL' ? html`<button class="nx-btn ghost sm" data-act="visit.buka" data-id="${s.jadwal_id}"><i class="bi bi-pencil-square"></i> Revisi</button>` : ''}${s.status === 'DRAFT' && saya ? html`<button class="nx-btn primary sm" data-act="visit.buka" data-id="${s.jadwal_id}">Lanjutkan draft</button>` : ''}</div></div>` : ''}</div>`;
}
ACT['rk.buka'] = t => { const id = t.dataset.id; const cur = REK.buka[id] !== undefined ? REK.buka[id] : REK.d.soaps[0] && REK.d.soaps[0].soap_id === id; REK.buka[id] = !cur; gambarRekam(); };
function gambarRekam() {
  const d = REK.d, p = d.pasien, v = $('#view'); if (!v) return;
  hapusChart();
  const T = [['kronologi', 'bi-clock-history', 'Kronologi SOAP'], ['tren', 'bi-graph-up-arrow', 'Tren Klinis'], ['dokumen', 'bi-folder2-open', 'Dokumen']];
  put(v, html`<button class="nx-btn ghost sm mb12" data-act="nav" data-r="pasien"><i class="bi bi-arrow-left"></i> Pasien</button>
  <div class="nx-card accent mb16"><div class="nx-patient-h"><div class="nx-ava lg">${inisial(p.nama)}</div><div class="grow"><div class="t-h2">${p.nama}</div><div class="muted">${p.no_rm} \u2022 ${p.umur} th \u2022 ${jkLabel(p.jenis_kelamin)} \u2022 ${p.no_wa}</div><div class="t-sm mt8"><i class="bi bi-geo-alt-fill ink-p"></i> ${p.alamat}</div></div></div>
    ${isDokter() ? html`<div class="wrap-gap mt12"><button class="nx-btn secondary sm" data-act="surat.baru" data-pid="${p.pasien_id}"><i class="bi bi-file-earmark-medical"></i> Buat Surat Sakit</button></div>` : ''}
    ${p.alergi ? html`<div class="nx-allergy"><i class="bi bi-exclamation-triangle-fill"></i><div>ALERGI: ${p.alergi}</div></div>` : ''}${p.riwayat_penyakit ? html`<div class="nx-mini"><div class="t-cap">Riwayat penyakit</div><div class="t-sm">${p.riwayat_penyakit}</div></div>` : ''}</div>
  <div class="nx-tabs">${T.map(t => html`<button class="${REK.tab === t[0] ? 'on' : ''}" data-act="rk.tab" data-v="${t[0]}"><i class="bi ${t[1]}"></i>${t[2]}</button>`)}</div><div id="rkBody"></div>`);
  const b = $('#rkBody');
  if (REK.tab === 'kronologi') put(b, d.soaps.length ? raw(d.soaps.map((s, i) => kartuSoap(s, i).s).join('')) : kosong('bi-journal', 'Belum ada catatan SOAP', 'Catatan akan muncul setelah petugas mengisi kunjungan.'));
  else if (REK.tab === 'tren') gambarTren(b);
  else {
    const rs = d.soaps.filter(s => s.resume && s.status === 'FINAL');
    put(b, html`<div class="nx-card"><div class="nx-sec-title mb12"><i class="bi bi-file-earmark-medical"></i> Resume Medis</div>${rs.length ? html`<div class="nx-list">${rs.map(s => html`<div class="nx-row"><i class="bi bi-file-earmark-pdf" style="font-size:24px;color:var(--err)"></i><div class="grow"><div class="fw6">${s.resume.no_resume}</div><div class="t-sm muted">${tglS(s.tanggal)} \u2022 ${s.petugas_nama}</div></div><button class="nx-btn secondary sm" data-act="doc.resume" data-id="${s.soap_id}">Lihat</button>${isKelola() ? html`<button class="nx-btn wa sm" data-act="wa.resume" data-id="${s.soap_id}" data-tgl="${s.tanggal}"><i class="bi bi-whatsapp"></i></button>` : ''}</div>`)}</div>` : kosong('bi-file-earmark-x', 'Belum ada resume', 'Resume dibuat otomatis saat SOAP disimpan final.')}</div>
    ${(d.suratList || []).length ? html`<div class="nx-card mt16"><div class="nx-sec-title mb12"><i class="bi bi-file-earmark-medical"></i> Surat Keterangan Sakit</div><div class="nx-list">${d.suratList.map(r => html`<div class="nx-row"><i class="bi bi-file-earmark-pdf" style="font-size:24px;color:var(--err)"></i><div class="grow"><div class="fw6">${r.no_surat}</div><div class="t-sm muted">${r.hari} hari \u2022 ${tglS(r.tgl_mulai)} s/d ${tglS(r.tgl_selesai)} \u2022 ${r.dokter_nama}</div></div><button class="nx-btn secondary sm" data-act="surat.lihat" data-id="${r.surat_id}" data-pid="${d.pasien.pasien_id}">Lihat</button></div>`)}</div></div>` : ''}
    ${(d.resepKons || []).length ? html`<div class="nx-card mt16"><div class="nx-sec-title mb12"><i class="bi bi-capsule"></i> Resep dari Konsultasi Online</div><div class="nx-list">${d.resepKons.map(r => html`<div class="nx-row"><i class="bi bi-file-earmark-pdf" style="font-size:24px;color:var(--err)"></i><div class="grow"><div class="fw6">${r.no_resep}</div><div class="t-sm muted">${tglS(String(r.waktu).slice(0, 10))} \u2022 ${r.dokter_nama} \u2022 ${r.jumlah} obat</div></div><button class="nx-btn secondary sm" data-act="doc.resepk" data-id="${r.resep_id}" data-pid="${d.pasien.pasien_id}">Lihat</button></div>`)}</div></div>` : ''}
    ${(d.konsultasi || []).length ? html`<div class="nx-card mt16"><div class="nx-sec-title mb12"><i class="bi bi-chat-dots"></i> Konsultasi Online</div><div class="nx-list">${d.konsultasi.map(k => html`<div class="nx-row"><div class="grow"><div class="fw6">${tglS(String(k.dibuat).slice(0, 10))} \u2022 ${k.dokter_nama}</div><div class="t-sm muted">${k.ringkasan || k.keluhan || '(tanpa ringkasan)'}</div></div>${badgeK(k.status)}${(isSuper() || (isDokter() && k.dokter_id === S.user.user_id)) ? html`<button class="nx-btn secondary sm" data-act="ko.buka" data-id="${k.kons_id}">Transkrip</button>` : ''}</div>`)}</div></div>` : ''}`);
  }
}
ACT['rk.tab'] = t => { REK.tab = t.dataset.v; gambarRekam(); };
function gambarTren(b) {
  const L = REK.d.soaps.filter(s => s.status === 'FINAL' || s.vital).slice().reverse(), lab = L.map(s => tglPendek(s.tanggal));
  const seri = (k, src) => L.map(s => { const v = (s[src] || {})[k]; return v === '' || v == null ? null : +v; });
  const ada = (k, src) => seri(k, src).some(x => x !== null);
  const defs = [['Tekanan darah (mmHg)', [['Sistolik', 'td_sistol', 'vital', 'p'], ['Diastolik', 'td_diastol', 'vital', 's']]], ['Nadi & SpO\u2082', [['Nadi (x/mnt)', 'nadi', 'vital', 'err'], ['SpO\u2082 (%)', 'spo2', 'vital', 's']]], ['Suhu (\u00b0C)', [['Suhu', 'suhu', 'vital', 'warn']]], ['Gula darah, asam urat & kolesterol', [['GDA', 'gda', 'penunjang', 'p'], ['Asam urat', 'asam_urat', 'penunjang', 'warn'], ['Kolesterol', 'kolesterol', 'penunjang', 't']]]];
  const w = warnaChart();
  put(b, html`<div class="nx-grid2">${defs.map((d, i) => html`<div class="nx-card"><div class="nx-sec-title mb12">${d[0]}</div><div class="nx-chart sm" id="trW${i}"><canvas id="tr${i}"></canvas></div></div>`)}</div>`);
  defs.forEach((d, i) => {
    const sets = d[1].filter(x => ada(x[1], x[2]));
    if (L.length < 1 || !sets.length) return chartKosong($('#trW' + i), 'Belum ada data pengukuran.');
    mkChart($('#tr' + i), { type: 'line', data: { labels: lab, datasets: sets.map(x => ({ label: x[0], data: seri(x[1], x[2]), borderColor: w[x[3]], backgroundColor: w[x[3]], tension: .3, spanGaps: true, pointRadius: 4 })) } });
  });
}
ACT['wa.resume'] = t => bagikanWa('resume', t.dataset.id, REK.d.pasien, { tanggal: tglS(t.dataset.tgl) });

/*@@FILE 04_visit.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Wizard kunjungan: Consent \u2192 SOAP \u2192 Tindakan \u2192 Resep \u2192 Tinjau \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
let V = null;
const draftKey = id => 'shan_draft_' + id;
const FIELD_KOSONG = () => ({ S: '', O_catatan: '', A: '', icd10: '', sdki: '', P: '', vital: {}, penunjang: {}, tindakan: [], bhp: [], resep: [], alasan_revisi: '' });

VIEWS.visit = async function (v, id) {
  put(v, skel(3, 90)); V = null;
  try {
    const d = await call('kunjungan.buka', { jadwal_id: id }); if (S.route !== '/visit/' + id) return;
    const f = FIELD_KOSONG(), s = d.soap;
    if (s) {
      ['S', 'O_catatan', 'A', 'icd10', 'sdki', 'P'].forEach(k => { f[k] = s[k] || ''; });
      Object.keys(s.vital || {}).forEach(k => { if (k !== 'soap_id') f.vital[k] = s.vital[k] === '' ? '' : String(s.vital[k]); });
      Object.keys(s.penunjang || {}).forEach(k => { if (k !== 'soap_id') f.penunjang[k] = s.penunjang[k] === '' ? '' : String(s.penunjang[k]); });
      f.tindakan = (s.tindakan || []).map(x => ({ tarif_id: x.tarif_id, nama: x.nama_tindakan, harga: +x.harga_saat_itu, qty: +x.qty }));
      f.bhp = (s.bhp || []).map(x => ({ bhp_id: x.bhp_id, nama: x.nama_bhp, satuan: x.satuan, harga: +x.harga_saat_itu, qty: +x.qty }));
      f.resep = (s.resep || []).map(x => ({ nama_obat: x.nama_obat, dosis: x.dosis, aturan_pakai: x.aturan_pakai, jumlah: x.jumlah, instruksi: x.instruksi }));
    }
    const paket = d.paket || null;
    if (paket && !(s && (s.tindakan || []).length)) {
      f.tindakan = paket.items.filter(i => i.jenis === 'TINDAKAN').map(i => ({ tarif_id: i.ref_id, nama: i.nama, harga: 0, qty: i.qty }));
      if (!(s && (s.bhp || []).length)) f.bhp = paket.items.filter(i => i.jenis === 'BHP').map(i => ({ bhp_id: i.ref_id, nama: i.nama, satuan: i.satuan, harga: 0, qty: i.qty }));
    }
    const revisi = !!(s && s.status === 'FINAL');
    const lok = !revisi ? ls.json(draftKey(id), null) : null;
    if (lok && lok.f) { Object.assign(f, lok.f); toast('Draft pada perangkat ini dipulihkan.', 'info'); }
    const resepOk = S.user.peran === 'DOKTER' || S.user.peran === 'PERAWAT' || isSuper();
    const steps = [{ k: 'consent', l: 'Consent' }, { k: 'soap', l: 'SOAP' }, { k: 'tindakan', l: 'Tindakan' }].concat(resepOk ? [{ k: 'resep', l: 'Resep' }] : []).concat([{ k: 'tinjau', l: 'Tinjau' }]);
    V = { id: id, j: d.jadwal, p: d.pasien, consent: d.consent, soap: s, resume: d.resume, riwayat: d.riwayat, f: f, steps: steps, revisi: revisi, paket: paket, q: Promise.resolve(), baca: S.user.peran === 'ADMIN', selesai: false };
    V.step = !V.consent ? 0 : 1;
    if (V.j.status === 'BATAL') { V.baca = true; }
    gambarVisit();
  } catch (e) { galat(e); put('#view', kosong('bi-lock', 'Kunjungan tidak dapat dibuka', e.message, html`<button class="nx-btn secondary" data-act="nav" data-r="jadwal">Kembali</button>`)); }
};
const stepKey = () => V.steps[V.step].k;
function simpanLokal() { if (!V || V.revisi || V.baca || V.selesai) return; ls.set(draftKey(V.id), JSON.stringify({ f: V.f, t: Date.now() })); }
const simpanLokalD = debounce(simpanLokal, 500);

function gambarVisit() {
  const p = V.p, v = $('#view');
  put(v, html`<div class="nx-wiz">
    <div class="nx-vhead"><button class="nx-btn secondary icon" data-act="v.keluar" aria-label="Kembali"><i class="bi bi-arrow-left"></i></button><div class="nx-pt grow"><div class="nx-ava">${inisial(p.nama)}</div><div class="grow" style="min-width:0"><div class="fw7 truncate">${p.nama}</div><div class="t-sm muted truncate">${p.no_rm} \u2022 ${p.umur} th \u2022 ${jkLabel(p.jenis_kelamin)} \u2022 ${V.j.jam}</div></div></div>${badgeJ(V.j.status)}</div>
    ${p.alergi ? html`<div class="nx-allergy mb12"><i class="bi bi-exclamation-triangle-fill"></i><div>ALERGI: ${p.alergi}</div></div>` : ''}
    ${V.revisi ? html`<div class="nx-alert warn mb12"><i class="bi bi-pencil-square"></i><div><b>Mode revisi.</b> Catatan ini sudah final. Perubahan wajib disertai alasan dan tercatat di audit log.</div></div>` : ''}
    ${V.baca ? html`<div class="nx-alert info mb12"><i class="bi bi-eye"></i><div>Mode lihat saja \u2014 hanya petugas yang bertugas yang dapat mengisi catatan kunjungan.</div></div>` : ''}
    <div class="nx-steps" id="vSteps"></div><div id="wizBody"></div></div>`);
  isiStep();
}
function isiStep() {
  const k = stepKey();
  put('#vSteps', raw(V.steps.map((s, i) => html`<div class="nx-step ${i === V.step ? 'on' : (i < V.step ? 'done' : '')}" data-act="v.ke" data-i="${i}"><div class="n">${i < V.step ? raw('<i class="bi bi-check-lg"></i>') : i + 1}</div><div class="l">${s.l}</div></div>`.s).join('')));
  const body = $('#wizBody'); ({ consent: stepConsent, soap: stepSoap, tindakan: stepTindakan, resep: stepResep, tinjau: stepTinjau })[k](body);
  barAksi(); window.scrollTo(0, 0);
}
function barAksi() {
  const ab = $('#actbar'); ab.classList.remove('hide'); const k = stepKey(), last = V.step === V.steps.length - 1;
  if (V.selesai) { ab.classList.add('hide'); return; }
  const back = V.step > 0 ? html`<button class="nx-btn secondary" data-act="v.mundur"><i class="bi bi-arrow-left"></i> Kembali</button>` : '';
  let main;
  if (V.baca) main = last ? html`<button class="nx-btn primary" data-act="v.keluar">Tutup</button>` : html`<button class="nx-btn primary" data-act="v.maju">Lanjut <i class="bi bi-arrow-right"></i></button>`;
  else if (k === 'consent') main = V.consent ? html`<button class="nx-btn primary" data-act="v.maju">Lanjut ke SOAP <i class="bi bi-arrow-right"></i></button>` : html`<button class="nx-btn primary" id="btnConsent" data-act="v.consent"><i class="bi bi-pen"></i> Simpan Persetujuan</button>`;
  else if (last) main = html`<button class="nx-btn primary" id="btnFinal" data-act="v.final"><i class="bi bi-lock-fill"></i> ${V.revisi ? 'Simpan Revisi' : 'Simpan Final & Buat Resume'}</button>`;
  else main = html`<button class="nx-btn primary" data-act="v.maju">Simpan & Lanjut <i class="bi bi-arrow-right"></i></button>`;
  put(ab, html`${back}${main}`);
}
ACT['v.keluar'] = () => { simpanLokal(); go(isKelola() ? '/jadwal' : '/home'); };
ACT['v.ke'] = t => { const i = +t.dataset.i; if (i > 0 && !V.consent && !V.baca) return toast('Selesaikan informed consent terlebih dahulu.', 'warn'); V.step = i; isiStep(); };
ACT['v.mundur'] = () => { if (V.step > 0) { V.step--; isiStep(); } };
ACT['v.maju'] = () => {
  if (!V.baca && !V.revisi && V.step >= 1 && V.step < V.steps.length - 1 && V.consent) simpanServer(false);
  if (V.step < V.steps.length - 1) { V.step++; isiStep(); }
};
INP['v.f'] = el => {
  const path = el.dataset.f.split('.'); let o = V.f; for (let i = 0; i < path.length - 1; i++) o = o[path[i]];
  o[path[path.length - 1]] = el.value; if (path[0] === 'vital' || path[0] === 'penunjang') vitalUi(); simpanLokalD();
};

// \u2500\u2500 Langkah 1: Informed consent \u2500\u2500
function stepConsent(b) {
  const c = V.consent, p = V.p;
  if (c) return put(b, html`<div class="nx-card accent"><div class="nx-sec-title mb12"><i class="bi bi-patch-check-fill" style="color:var(--ok)"></i> Informed Consent Tersimpan</div>
    <dl class="nx-kv"><dt>Penandatangan</dt><dd>${c.nama_penandatangan}</dd><dt>Sebagai</dt><dd>${c.pihak === 'WALI' ? 'Wali \u2014 ' + c.hubungan : 'Pasien sendiri'}</dd><dt>Waktu</dt><dd>${waktuS(c.waktu)}</dd><dt>Petugas</dt><dd>${c.petugas_nama}</dd></dl>
    <div class="nx-note mt16"><i class="bi bi-lock"></i> Persetujuan bersifat final dan tidak dapat diubah.</div></div>`);
  V.pihak = 'PASIEN'; V.ink = 0;
  put(b, html`<div class="nx-card accent"><div class="soap-h mb12"><div class="L"><i class="bi bi-pen"></i></div><div><b>Persetujuan Tindakan (Informed Consent)</b><span>Wajib sebelum pemeriksaan dimulai</span></div></div>
    <div class="nx-quote mb16">Saya menyatakan telah menerima penjelasan mengenai kondisi, rencana pemeriksaan/tindakan, manfaat, dan risiko dari petugas ${S.cfg.nama_klinik}, dan <b>menyetujui</b> dilakukannya pelayanan kesehatan di rumah kepada pasien <b>${p.nama}</b> (${p.no_rm}). Saya memahami bahwa data kesehatan akan dicatat secara elektronik dan dijaga kerahasiaannya.</div>
    <div class="nx-field"><label class="nx-lab">Yang menandatangani</label><div class="nx-seg" id="cfPihak"><button type="button" class="on" data-act="v.pihak" data-v="PASIEN">Pasien sendiri</button><button type="button" data-act="v.pihak" data-v="WALI">Wali / keluarga</button></div></div>
    ${medan('cfNama', 'Nama lengkap penandatangan', { v: p.nama, req: 1, max: 120 })}
    <div id="cfWali" class="hide">${medan('cfHub', 'Hubungan dengan pasien', { req: 1, ph: 'mis. Anak kandung, Istri', max: 60 })}</div>
    <div class="nx-grid2" style="gap:0 16px">${medan('cfNik', 'NIK', { opt: 1, inputmode: 'numeric', max: 16 })}${medan('cfHp', 'No. HP', { opt: 1, type: 'tel', inputmode: 'tel', v: p.no_wa })}</div>
    <div class="nx-field"><label class="nx-lab"><span>Tanda tangan <span class="req">*</span></span><button type="button" class="nx-btn ghost sm" data-act="v.sigclear"><i class="bi bi-eraser"></i> Hapus</button></label><div class="nx-sig"><canvas id="sigC" aria-label="Kanvas tanda tangan"></canvas><div class="ln"></div><div class="ph" id="sigPh">Tanda tangan di sini</div></div><div class="nx-err hide" id="sigE">Tanda tangan belum diisi.</div></div></div>`);
  setTimeout(initSig, 30);
}
ACT['v.pihak'] = t => { V.pihak = t.dataset.v; $$('#cfPihak button').forEach(x => x.classList.toggle('on', x === t)); $('#cfWali').classList.toggle('hide', V.pihak !== 'WALI'); if (V.pihak === 'WALI') { $('#cfNama').value = ''; $('#cfNama').focus(); } else $('#cfNama').value = V.p.nama; };
function initSig() {
  const c = $('#sigC'); if (!c) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1), w = c.clientWidth, h = c.clientHeight; c.width = w * dpr; c.height = h * dpr;
  const x = c.getContext('2d'); x.scale(dpr, dpr); x.lineWidth = 2.6; x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = '#0F172A';
  let on = false, lx = 0, ly = 0;
  const pos = e => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  c.addEventListener('pointerdown', e => { on = true; c.setPointerCapture(e.pointerId); [lx, ly] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(lx + .1, ly + .1); x.stroke(); $('#sigPh').classList.add('hide'); e.preventDefault(); });
  c.addEventListener('pointermove', e => { if (!on) return; const [px, py] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(px, py); x.stroke(); V.ink += Math.hypot(px - lx, py - ly); lx = px; ly = py; $('#sigE').classList.add('hide'); });
  const end = () => { on = false; }; c.addEventListener('pointerup', end); c.addEventListener('pointercancel', end);
}
ACT['v.sigclear'] = () => { const c = $('#sigC'); c.getContext('2d').clearRect(0, 0, c.width, c.height); V.ink = 0; $('#sigPh').classList.remove('hide'); };
function ttdPng() {
  const c = $('#sigC'), W = Math.min(c.width, 640), H = Math.round(c.height * W / c.width), o = document.createElement('canvas'); o.width = W; o.height = H;
  const x = o.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); x.drawImage(c, 0, 0, W, H); return o.toDataURL('image/png');
}
ACT['v.consent'] = async btn => {
  bersihGalat($('#wizBody'));
  const d = { jadwal_id: V.id, pihak: V.pihak, nama: val('cfNama'), hubungan: val('cfHub'), nik: val('cfNik'), no_hp: val('cfHp') };
  let ok = true;
  if (d.nama.length < 3) ok = bad('cfNama', 'Nama minimal 3 karakter.');
  if (d.pihak === 'WALI' && d.hubungan.length < 3) ok = bad('cfHub', 'Hubungan wajib diisi.');
  if (d.nik && !/^\d{16}$/.test(d.nik)) ok = bad('cfNik', 'NIK harus 16 digit.');
  if (V.ink < 40) { $('#sigE').classList.remove('hide'); ok = false; }
  if (!ok) return;
  d.ttd = ttdPng();
  try {
    const r = await denganSibuk(btn, () => call('consent.simpan', d));
    V.consent = r.consent; const j = S.jadwal.find(x => x.jadwal_id === V.id); if (j) { j.consent = true; j.status = r.jadwal_status; } V.j.status = r.jadwal_status;
    toast('Persetujuan tersimpan. Lanjutkan ke pemeriksaan.'); V.step = 1; gambarVisit();
  } catch (e) { galat(e); }
};

// \u2500\u2500 Langkah 2: SOAP \u2500\u2500
function statusVital(k, f) {
  const n = x => (x === '' || x == null) ? null : Number(String(x).replace(',', '.'));
  const v = f.vital, g = f.penunjang;
  if (k === 'td') { const s = n(v.td_sistol), d = n(v.td_diastol); if (s === null && d === null) return null; if (s >= 180 || d >= 120) return ['KRISIS', 'bad']; if (s >= 140 || d >= 90) return ['TINGGI', 'warn']; if (s < 90 || d < 60) return ['RENDAH', 'info']; return ['NORMAL', '']; }
  const x = n(k in v ? v[k] : g[k]); if (x === null) return null;
  const R = { nadi: [[x > 100, 'TINGGI', 'warn'], [x < 60, 'RENDAH', 'info']], suhu: [[x >= 38, 'DEMAM', 'bad'], [x >= 37.5, 'SUBFEBRIS', 'warn'], [x < 36, 'RENDAH', 'info']], rr: [[x > 24, 'TINGGI', 'warn'], [x < 12, 'RENDAH', 'info']], spo2: [[x < 90, 'RENDAH', 'bad'], [x < 95, 'RENDAH', 'warn']], gda: [[x >= 200, 'TINGGI', 'warn'], [x < 70, 'RENDAH', 'bad']], asam_urat: [[x > 7, 'TINGGI', 'warn']], kolesterol: [[x >= 240, 'TINGGI', 'warn'], [x >= 200, 'BATAS', 'info']] }[k] || [];
  const h = R.find(r => r[0]); return h ? [h[1], h[2]] : ['NORMAL', ''];
}
function vitalKotak(k, label, ikon, unit, ref, grup, step) {
  return html`<div class="nx-vital" data-vk="${k}"><div class="h"><span><i class="bi ${ikon}"></i>${label}</span><span class="stat hide" data-vs></span></div><div class="v"><input inputmode="decimal" data-in="v.f" data-f="${grup}.${k}" value="${V.f[grup][k] || ''}" placeholder="\u2014" aria-label="${label}" ${V.baca ? 'readonly' : ''}><span class="u">${unit}</span></div><div class="rf">${ref}</div></div>`;
}
function vitalUi() {
  $$('.nx-vital[data-vk]').forEach(el => {
    const k = el.dataset.vk, s = statusVital(k, V.f), st = $('[data-vs]', el);
    el.classList.toggle('abn', !!s && (s[1] === 'bad' || s[1] === 'warn')); if (!st) return;
    st.classList.toggle('hide', !s); if (s) { st.textContent = s[0]; st.className = 'stat ' + s[1]; }
  });
}
function stepSoap(b) {
  const f = V.f, r = V.riwayat[0], ro = V.baca ? 'readonly' : '';
  put(b, html`
  ${r ? html`<details class="nx-card pad-sm mb12"><summary class="fw6" style="cursor:pointer"><i class="bi bi-clock-history ink-p"></i> Kunjungan sebelumnya \u2014 ${tglS(r.waktu_final)}</summary><div class="t-sm mt12"><b>A:</b> ${r.A}<br><b>P:</b> ${r.P}</div></details>` : ''}
  <div class="nx-card mb16"><div class="soap-h mb12"><div class="L">S</div><div><b>Subjektif</b><span>Keluhan & riwayat menurut pasien/keluarga</span></div></div><textarea class="nx-ta" data-in="v.f" data-f="S" placeholder="Keluhan utama, sejak kapan, faktor yang memperberat/meringankan\u2026" ${ro}>${f.S}</textarea></div>
  <div class="nx-card mb16"><div class="soap-h mb12"><div class="L o">O</div><div><b>Objektif</b><span>Tanda vital & pemeriksaan penunjang</span></div></div>
    <div class="nx-vgrid">
      <div class="nx-vital span2" data-vk="td"><div class="h"><span><i class="bi bi-heart-pulse-fill"></i>Tekanan darah</span><span class="stat hide" data-vs></span></div><div class="tdrow"><input inputmode="numeric" data-in="v.f" data-f="vital.td_sistol" value="${f.vital.td_sistol || ''}" placeholder="120" aria-label="Sistolik" ${ro}><span class="sl">/</span><input inputmode="numeric" data-in="v.f" data-f="vital.td_diastol" value="${f.vital.td_diastol || ''}" placeholder="80" aria-label="Diastolik" ${ro}><span class="u">mmHg</span></div><div class="rf">Normal: 90\u2013139 / 60\u201389</div></div>
      ${vitalKotak('nadi', 'Nadi', 'bi-activity', 'x/mnt', 'Normal: 60\u2013100', 'vital')}${vitalKotak('suhu', 'Suhu', 'bi-thermometer-half', '\u00b0C', 'Normal: 36\u201337,4', 'vital')}${vitalKotak('rr', 'Laju napas', 'bi-lungs-fill', 'x/mnt', 'Normal: 12\u201324', 'vital')}${vitalKotak('spo2', 'SpO\u2082', 'bi-droplet-half', '%', 'Normal: \u2265 95', 'vital')}</div>
    <div class="t-cap mt16 mb8">Pemeriksaan penunjang (POCT)</div>
    <div class="nx-vgrid v3">${vitalKotak('gda', 'GDA', 'bi-droplet-fill', 'mg/dL', '< 200', 'penunjang')}${vitalKotak('asam_urat', 'Asam urat', 'bi-bezier2', 'mg/dL', '\u2264 7', 'penunjang')}${vitalKotak('kolesterol', 'Kolesterol', 'bi-circle-half', 'mg/dL', '< 200', 'penunjang')}</div>
    <div class="nx-help mt8">Penanda warna hanya sebagai pengingat, bukan diagnosis. Anda tetap dapat menyimpan nilai apa pun yang masuk akal.</div>
    <div class="nx-field mt16"><label class="nx-lab">Catatan pemeriksaan fisik <span class="opt">opsional</span></label><textarea class="nx-ta" data-in="v.f" data-f="O_catatan" placeholder="Kesadaran, kondisi luka, hasil inspeksi/palpasi\u2026" ${ro}>${f.O_catatan}</textarea></div></div>
  <div class="nx-card mb16"><div class="soap-h mb12"><div class="L a">A</div><div><b>Asesmen</b><span>Diagnosis / masalah keperawatan</span></div></div><textarea class="nx-ta" data-in="v.f" data-f="A" placeholder="Diagnosis kerja atau masalah keperawatan\u2026" ${ro}>${f.A}</textarea>
    <div class="nx-grid2 mt12" style="gap:0 16px"><div class="nx-field"><label class="nx-lab">Kode ICD-10 <span class="opt">opsional</span></label><input class="nx-in" data-in="v.f" data-f="icd10" value="${f.icd10}" placeholder="mis. I10" maxlength="40" ${ro}></div><div class="nx-field"><label class="nx-lab">Kode SDKI <span class="opt">opsional</span></label><input class="nx-in" data-in="v.f" data-f="sdki" value="${f.sdki}" placeholder="mis. D.0077" maxlength="120" ${ro}></div></div></div>
  <div class="nx-card"><div class="soap-h mb12"><div class="L p">P</div><div><b>Planning</b><span>Rencana tindakan, edukasi, tindak lanjut</span></div></div><textarea class="nx-ta" data-in="v.f" data-f="P" placeholder="Tindakan yang diberikan, edukasi, rencana kontrol\u2026" ${ro}>${f.P}</textarea></div>`);
  vitalUi();
}

// \u2500\u2500 Langkah 3: Tindakan & BHP \u2500\u2500
const subtotalForm = () => V.paket ? 0 : V.f.tindakan.concat(V.f.bhp).reduce((a, x) => a + x.harga * x.qty, 0);
const stokBhp = id => { const m = S.bhp.find(x => x.bhp_id === id); return m ? (+m.stok || 0) : null; };
function stepTindakan(b) {
  const f = V.f, kunci = V.paket;
  const daftar = (arr, jenis) => arr.length ? raw(arr.map((x, i) => {
    const st = jenis === 'bhp' ? stokBhp(x.bhp_id) : null;
    const sub = jenis === 'bhp' ? (st === null ? '' : 'Stok ' + st + (x.satuan ? ' ' + x.satuan : '') + (st < x.qty ? ' \u2014 tidak cukup!' : '')) + (!kunci && x.harga ? ' \u2022 ' + rp(x.harga) + '/' + (x.satuan || 'unit') : (kunci ? ' \u2022 termasuk paket' : ' \u2022 tidak ditagihkan')) : (kunci ? 'Termasuk paket' : rp(x.harga));
    const ctl = (jenis === 'tindakan' && kunci) ? html`<span class="nx-badge info nodot">\u00d7${x.qty}</span>` : html`<div class="nx-stepper"><button type="button" data-act="v.qty" data-j="${jenis}" data-i="${i}" data-d="-1" aria-label="Kurangi">\u2212</button><b class="num">${x.qty}</b><button type="button" class="plus" data-act="v.qty" data-j="${jenis}" data-i="${i}" data-d="1" aria-label="Tambah">+</button></div>`;
    const hrg = !kunci ? html`<div class="pr" style="min-width:90px;text-align:right">${rp(x.harga * x.qty)}</div>` : '';
    return html`<div class="nx-item"><div class="grow"><div class="nm">${x.nama}</div><div class="t-sm muted">${sub}</div></div>${ctl}${hrg}</div>`.s;
  }).join('')) : html`<div class="muted t-sm mb12">Belum ada item.</div>`;
  put(b, html`${kunci ? html`<div class="nx-alert info mb16"><i class="bi bi-box2-heart-fill"></i><div><b>${kunci.nama}</b> \u2014 tindakan sudah ditentukan dan sudah ditagih lewat invoice paket saat pendaftaran. Anda hanya perlu mencatat BHP yang dipakai.</div></div>` : ''}
  <div class="nx-card mb16"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-bandaid-fill"></i> Tindakan / Layanan</div>${kunci ? '' : html`<button class="nx-btn secondary sm" data-act="v.picker" data-j="tarif" ${V.baca ? 'disabled' : ''}><i class="bi bi-plus-lg"></i> Tambah</button>`}</div>${daftar(f.tindakan, 'tindakan')}</div>
  <div class="nx-card mb16"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-box-seam-fill"></i> Bahan Habis Pakai (BHP)</div><button class="nx-btn secondary sm" data-act="v.picker" data-j="bhp" ${V.baca ? 'disabled' : ''}><i class="bi bi-plus-lg"></i> Tambah</button></div>${daftar(f.bhp, 'bhp')}<div class="nx-note mt8"><i class="bi bi-info-circle"></i> ${kunci ? 'BHP sudah termasuk harga paket: hanya mengurangi stok saat disimpan final.' : 'BHP di luar paket ditagihkan ke pasien sesuai harga di Master Data (BHP bernilai Rp 0 tidak ditagihkan). Stok berkurang saat disimpan final.'}</div></div>
  ${kunci ? html`<div class="nx-card"><div class="nx-total big"><span class="fw6">Tagihan</span><b class="num">${rp(kunci.harga)}</b></div><div class="nx-note mt8"><i class="bi bi-receipt"></i> Invoice paket sudah terbit saat pendaftaran \u2014 tidak ada tagihan baru dari SOAP.</div></div>` : html`<div class="nx-card"><div class="nx-total big"><span class="fw6">Estimasi tagihan (tindakan + BHP)</span><b class="num">${rp(subtotalForm())}</b></div><div class="nx-note mt8"><i class="bi bi-info-circle"></i> Invoice draft dibuat otomatis untuk ditinjau admin. Harga mengikuti master saat item ditambahkan.</div></div>`}`);
}
ACT['v.qty'] = t => {
  const arr = V.f[t.dataset.j], it = arr[+t.dataset.i]; if (V.baca) return; it.qty += +t.dataset.d;
  if (it.qty < 1) arr.splice(+t.dataset.i, 1); else if (it.qty > 99) it.qty = 99; simpanLokal(); stepTindakan($('#wizBody'));
};
ACT['v.picker'] = t => {
  V.pj = t.dataset.j; V.pq = '';
  MD.open('mdl2', { title: V.pj === 'tarif' ? 'Pilih Tindakan' : 'Pilih BHP', body: html`<div class="nx-in-icon mb12"><i class="bi bi-search"></i><input id="pkQ" class="nx-in" placeholder="Cari\u2026" data-in="v.pkq" autocomplete="off"></div><div class="nx-picker" id="pkList"></div>`, footer: html`<button class="nx-btn primary block" data-bs-dismiss="modal">Selesai</button>`, onShown: () => { isiPicker(); const q = $('#pkQ'); if (q) q.focus(); }, onHide: () => { if (V && stepKey() === 'tindakan') stepTindakan($('#wizBody')); } });
  isiPicker();
};
INP['v.pkq'] = el => { V.pq = el.value.toLowerCase(); isiPicker(); };
function isiPicker() {
  const el = $('#pkList'); if (!el) return;
  const isT = V.pj === 'tarif', sumber = isT ? S.tarif : S.bhp, dipilih = isT ? V.f.tindakan : V.f.bhp, idk = isT ? 'tarif_id' : 'bhp_id';
  const l = sumber.filter(x => !V.pq || ((isT ? x.nama_layanan : x.nama) + ' ' + (x.kategori || '')).toLowerCase().indexOf(V.pq) >= 0);
  put(el, l.length ? raw(l.map(x => { const n = dipilih.find(d => d[idk] === x[idk]); return html`<button class="nx-pick" data-act="v.pilih" data-id="${x[idk]}"><div><div class="fw6">${isT ? x.nama_layanan : x.nama}</div><div class="t-sm muted">${isT ? (x.kategori || '') : x.satuan}</div></div><div style="text-align:right">${isT ? html`<b class="num">${rp(x.harga)}</b>` : html`<span class="t-sm muted">Stok ${+x.stok || 0}</span>`}${n ? html`<div class="nx-badge ok nodot">\u2713 \u00d7${n.qty}</div>` : ''}</div></button>`.s; }).join('')) : html`<div class="nx-empty">Tidak ditemukan.</div>`);
}
ACT['v.pilih'] = t => {
  const isT = V.pj === 'tarif', arr = isT ? V.f.tindakan : V.f.bhp, idk = isT ? 'tarif_id' : 'bhp_id', id = t.dataset.id, ada = arr.find(x => x[idk] === id);
  if (ada) ada.qty = Math.min(99, ada.qty + 1); else { const m = (isT ? S.tarif : S.bhp).find(x => x[idk] === id); arr.push(isT ? { tarif_id: id, nama: m.nama_layanan, harga: +m.harga, qty: 1 } : { bhp_id: id, nama: m.nama, satuan: m.satuan, harga: V.paket ? 0 : (+m.harga || 0), qty: 1 }); }
  simpanLokal(); const sc = $('#pkList').scrollTop; isiPicker(); $('#pkList').scrollTop = sc;
};

// \u2500\u2500 Aturan pakai terstruktur: [kali/hari] \u00d7 [takaran] [satuan] [waktu/catatan]  (atau teks bebas) \u2500\u2500
const AP_SATUAN = ['tab', 'kapsul', 'sdm', 'sdt', 'ml', 'tetes', 'sachet', 'mg'];
const AP_WAKTU = ['sebelum makan', 'sesudah makan', 'saat makan', 'sebelum tidur', 'bila perlu', 'pagi hari', 'malam hari'];
const AP_PECAH = { '0.5': '\u00bd', '1.5': '1\u00bd', '2.5': '2\u00bd', '0.25': '\u00bc', '0.75': '\u00be', '1/2': '\u00bd', '1/4': '\u00bc', '3/4': '\u00be' };
const apTakarOK = t => /^(\d+([.,]\d+)?|\d*\s?[\u00bd\u00bc\u00be]|\d+\/\d+)$/.test(t) && !/^0+([.,]0+)?$/.test(t);
const apRangkai = (f, t, sat, w) => { const tt = String(t).replace(',', '.'); return [f + ' \u00d7', AP_PECAH[tt] || tt, sat, w].filter(Boolean).join(' ').replace('\u00d7 ', '\u00d7 '); };
function apParse(txt) {
  txt = String(txt || '').trim(); if (!txt) return { m: 's', f: '', t: '', s: 'tab', w: '' };
  const m = txt.match(/^(\d+)\s*[x\u00d7X]\s*(\d+(?:[.,]\d+)?|\d*\s?[\u00bd\u00bc\u00be]|\d+\/\d+)\s*(tablet|tab|kapsul|sdm|sdt|ml|tetes|sachet|mg)?(?:\s+(.*))?$/i);
  if (!m) return { m: 'b', b: txt };
  const u = (m[3] || '').toLowerCase(); return { m: 's', f: m[1], t: m[2].trim(), s: u === 'tablet' ? 'tab' : u, w: (m[4] || '').trim() };
}
function apHtml(r, i, apk) {
  const a = (r && r._ap) || apParse(r && r.aturan_pakai), id = 'dlw' + apk + i, b = a.m === 'b';
  return html`<div class="ap" data-apk="${apk}" data-i="${i}" data-m="${a.m}"><div class="nx-lab" style="margin-bottom:4px"><span>Aturan pakai <span class="req">*</span></span></div>
    <div class="ap-s" style="display:${b ? 'none' : 'flex'};flex-wrap:wrap;gap:8px;align-items:center">
      <input class="nx-in" style="width:64px;text-align:center" inputmode="numeric" maxlength="2" placeholder="3" value="${a.f || ''}" data-ap="f" aria-label="Berapa kali sehari"><span class="muted" title="kali sehari">\u00d7</span>
      <input class="nx-in" style="width:72px;text-align:center" inputmode="decimal" maxlength="5" placeholder="1" value="${a.t || ''}" data-ap="t" aria-label="Takaran sekali minum">
      <select class="nx-sel" style="width:96px" data-ap="s" aria-label="Satuan"><option value="" ${a.s ? '' : 'selected'}>\u2014</option>${AP_SATUAN.map(x => html`<option value="${x}" ${a.s === x ? 'selected' : ''}>${x}</option>`)}</select>
      <input class="nx-in" style="flex:1;min-width:150px" list="${id}" maxlength="80" placeholder="sesudah makan" value="${a.w || ''}" data-ap="w" aria-label="Waktu atau catatan" autocomplete="off"><datalist id="${id}">${AP_WAKTU.map(x => html`<option value="${x}"></option>`)}</datalist></div>
    <input class="nx-in" style="display:${b ? 'block' : 'none'}" maxlength="150" placeholder="Tulis aturan pakai bebas, mis. oleskan tipis pada luka 2 kali sehari" value="${a.b || ''}" data-ap="b" aria-label="Aturan pakai (teks bebas)">
    <div class="t-sm mt8" style="display:flex;justify-content:space-between;gap:8px;align-items:center"><span class="ap-pv muted"></span><button type="button" class="nx-btn ghost sm" data-act="ap.mode">${b ? 'Pakai isian cepat' : 'Tulis bebas'}</button></div></div>`;
}
function apNilai(ap) {
  const g = k => { const e = ap.querySelector('[data-ap="' + k + '"]'); return e ? e.value.trim() : ''; };
  if (ap.dataset.m === 'b') return g('b');
  const f = g('f'), t = g('t'); if (!/^\d+$/.test(f) || +f < 1 || !apTakarOK(t)) return '';
  return apRangkai(f, t, g('s'), g('w'));
}
function apUpdate(ap) {
  const v = apNilai(ap), pv = ap.querySelector('.ap-pv'), g = k => { const e = ap.querySelector('[data-ap="' + k + '"]'); return e ? e.value.trim() : ''; };
  if (pv) { pv.textContent = v ? 'Tertulis: ' + v : (ap.dataset.m === 'b' ? '' : 'Isi berapa kali sehari dan takaran.'); pv.style.color = v ? 'var(--ok-ink, #1b6e3c)' : ''; }
  if (ap.dataset.apk === 'v' && V && V.f && V.f.resep[+ap.dataset.i]) { const r = V.f.resep[+ap.dataset.i]; r.aturan_pakai = v; r._ap = { m: ap.dataset.m, f: g('f'), t: g('t'), s: g('s'), w: g('w'), b: g('b') }; simpanLokalD(); }
}
['input', 'change'].forEach(ev => document.addEventListener(ev, e => { const ap = e.target.closest && e.target.closest('.ap'); if (ap) apUpdate(ap); }));
ACT['ap.mode'] = t => {
  const ap = t.closest('.ap'), keB = ap.dataset.m !== 'b', cur = apNilai(ap), q = k => ap.querySelector('[data-ap="' + k + '"]');
  if (keB) { q('b').value = cur || q('b').value; } else { const a = apParse(q('b').value); if (a.m === 's') { q('f').value = a.f; q('t').value = a.t; q('s').value = a.s; q('w').value = a.w; } }
  ap.dataset.m = keB ? 'b' : 's'; ap.querySelector('.ap-s').style.display = keB ? 'none' : 'flex'; q('b').style.display = keB ? 'block' : 'none'; t.textContent = keB ? 'Pakai isian cepat' : 'Tulis bebas';
  apUpdate(ap); const fo = keB ? q('b') : q('f'); if (fo) fo.focus();
};

// \u2500\u2500 Langkah 4: Resep \u2500\u2500
function stepResep(b) {
  const f = V.f;
  put(b, html`<div class="nx-card"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-capsule-pill"></i> Resep / Obat</div><button class="nx-btn secondary sm" data-act="v.resepTambah" ${V.baca ? 'disabled' : ''}><i class="bi bi-plus-lg"></i> Obat</button></div>
  ${f.resep.length ? raw(f.resep.map((r, i) => html`<div class="nx-item" style="display:block"><div class="row-between mb8"><b>Obat ${i + 1}</b><button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="v.resepHapus" data-i="${i}" aria-label="Hapus obat"><i class="bi bi-trash"></i></button></div>
    <div class="nx-field"><input class="nx-in" placeholder="Nama obat" data-in="v.resep" data-i="${i}" data-k="nama_obat" value="${r.nama_obat}" maxlength="150" aria-label="Nama obat"></div>
    <div class="nx-grid2" style="gap:0 10px"><div class="nx-field"><input class="nx-in" placeholder="Dosis (500 mg)" data-in="v.resep" data-i="${i}" data-k="dosis" value="${r.dosis}" maxlength="80" aria-label="Dosis"></div><div class="nx-field"><input class="nx-in" placeholder="Jumlah (10 tablet)" data-in="v.resep" data-i="${i}" data-k="jumlah" value="${r.jumlah}" maxlength="50" aria-label="Jumlah"></div></div>
    <div class="nx-field">${apHtml(r, i, 'v')}</div>
    <input class="nx-in" placeholder="Instruksi tambahan (opsional)" data-in="v.resep" data-i="${i}" data-k="instruksi" value="${r.instruksi}" maxlength="300" aria-label="Instruksi"></div>`.s).join('')) : kosong('bi-capsule', 'Tidak ada resep', 'Tambahkan bila pasien diberi obat. Boleh dikosongkan.')}</div>`);
  $$('#wizBody .ap').forEach(a => { const pv = a.querySelector('.ap-pv'), v = apNilai(a); if (pv && v) { pv.textContent = 'Tertulis: ' + v; } });
}
INP['v.resep'] = el => { V.f.resep[+el.dataset.i][el.dataset.k] = el.value; simpanLokalD(); };
ACT['v.resepTambah'] = () => { V.f.resep.push({ nama_obat: '', dosis: '', aturan_pakai: '', jumlah: '', instruksi: '' }); stepResep($('#wizBody')); };
ACT['v.resepHapus'] = t => { V.f.resep.splice(+t.dataset.i, 1); simpanLokal(); stepResep($('#wizBody')); };

// \u2500\u2500 Langkah 5: Tinjau & final \u2500\u2500
function kurang() { const f = V.f, m = []; if (f.S.trim().length < 3) m.push('S (Subjektif)'); if (f.A.trim().length < 3) m.push('A (Asesmen)'); if (f.P.trim().length < 3) m.push('P (Planning)'); return m; }
function stepTinjau(b) {
  const f = V.f, v = f.vital, g = f.penunjang, m = kurang();
  put(b, html`${m.length ? html`<div class="nx-alert warn mb12"><i class="bi bi-exclamation-triangle-fill"></i><div>Bagian belum lengkap: <b>${m.join(', ')}</b>. Lengkapi sebelum menyimpan final.</div></div>` : ''}
  <div class="nx-card mb16"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-clipboard2-check"></i> Ringkasan Catatan</div><button class="nx-btn ghost sm" data-act="v.ke" data-i="1">Ubah</button></div>
    <div class="wrap-gap mb12">${chip('TD', v.td_sistol ? v.td_sistol + '/' + v.td_diastol : '', 'mmHg', abnormal('td_sistol', v.td_sistol) || abnormal('td_diastol', v.td_diastol))}${chip('Nadi', v.nadi, 'x/mnt', v.nadi && abnormal('nadi', v.nadi))}${chip('Suhu', v.suhu, '\u00b0C', v.suhu && abnormal('suhu', v.suhu))}${chip('RR', v.rr, 'x/mnt')}${chip('SpO\u2082', v.spo2, '%', v.spo2 && abnormal('spo2', v.spo2))}${chip('GDA', g.gda, 'mg/dL', g.gda && abnormal('gda', g.gda))}${chip('Asam urat', g.asam_urat, 'mg/dL')}${chip('Kolesterol', g.kolesterol, 'mg/dL')}</div>
    ${[['S', 'Subjektif', f.S], ['O', 'Objektif', f.O_catatan], ['A', 'Asesmen', f.A + (f.icd10 ? ' [' + f.icd10 + ']' : '')], ['P', 'Planning', f.P]].filter(x => x[2] && x[2].trim()).map(x => html`<div class="nx-soapc" style="border:0;margin:0"><div class="blk"><h6><em>${x[0]}</em> ${x[1]}</h6><p>${x[2]}</p></div></div>`)}</div>
  <div class="nx-card mb16"><div class="nx-card-h"><div class="nx-sec-title"><i class="bi bi-bandaid"></i> Tindakan, BHP & Resep</div><button class="nx-btn ghost sm" data-act="v.ke" data-i="2">Ubah</button></div>
    ${f.tindakan.concat(f.bhp).length ? raw(f.tindakan.concat(f.bhp).map(x => html`<div class="row-between t-sm" style="padding:4px 0"><span>${x.nama} \u00d7${x.qty}${x.bhp_id ? ' (BHP)' : ''}</span><b class="num">${V.paket || !x.harga ? '' : rp(x.harga * x.qty)}</b></div>`.s).join('')) : html`<div class="muted t-sm">Tidak ada tindakan/BHP.</div>`}
    <div class="nx-total big"><span class="fw6">${V.paket ? 'Tagihan' : 'Estimasi tagihan'}</span><b class="num">${V.paket ? 'Paket ' + rp(V.paket.harga) : rp(subtotalForm())}</b></div>
    ${f.resep.filter(r => r.nama_obat.trim()).length ? html`<hr class="nx-hr">${f.resep.filter(r => r.nama_obat.trim()).map(r => html`<div class="t-sm">\u2022 <b>${r.nama_obat}</b> ${r.dosis} \u2014 ${r.aturan_pakai}</div>`)}` : ''}</div>
  ${V.baca ? '' : html`${V.revisi ? html`<div class="nx-card mb16">${medan('rvAlasan', 'Alasan revisi', { ta: 1, h: 72, req: 1, v: f.alasan_revisi, ph: 'Mis. koreksi tekanan darah yang salah ketik', help: 'Isi sebelumnya akan diarsipkan di audit log.' })}</div>` : ''}
  <div class="nx-lockwarn mb16"><div class="fw7 mb8"><i class="bi bi-lock-fill"></i> Catatan akan dikunci</div><div class="t-sm">Setelah disimpan final, catatan tidak dapat diubah langsung. Perubahan hanya melalui revisi dengan alasan dan tercatat. Resume medis PDF dibuat otomatis dan invoice draft dikirim ke admin.</div></div>
  <label class="nx-check"><input type="checkbox" id="cfBenar"><span>Saya menyatakan data pada catatan ini benar dan sesuai pemeriksaan yang saya lakukan.</span></label>`}`);
}

// \u2500\u2500 Simpan ke server (antrean berurutan agar tidak membuat SOAP ganda) \u2500\u2500
function payloadSoap(final) {
  const f = V.f;
  return { jadwal_id: V.id, soap_id: V.soap ? V.soap.soap_id : '', S: f.S, O_catatan: f.O_catatan, A: f.A, icd10: f.icd10, sdki: f.sdki, P: f.P, vital: f.vital, penunjang: f.penunjang, tindakan: f.tindakan.map(x => ({ tarif_id: x.tarif_id, qty: x.qty })), bhp: f.bhp.map(x => ({ bhp_id: x.bhp_id, qty: x.qty })), resep: f.resep, final: !!final, alasan_revisi: val('rvAlasan') || f.alasan_revisi };
}
function antre(fn) { const p = V.q.then(fn, fn); V.q = p.catch(() => { }); return p; }
function simpanServer(final) {
  const jalan = () => call('soap.simpan', payloadSoap(final));
  return antre(jalan).then(r => { if (!V.soap) V.soap = { soap_id: r.soap_id, status: r.status }; else { V.soap.soap_id = r.soap_id; V.soap.status = r.status; } const j = S.jadwal.find(x => x.jadwal_id === V.id); if (j && r.jadwal_status) j.status = r.jadwal_status; return r; })
    .catch(e => { if (!final) toast('Draft belum tersimpan di server (' + e.message + '). Data tetap aman di perangkat ini.', 'warn', 5000); else throw e; });
}
ACT['v.final'] = async btn => {
  const m = kurang(); if (m.length) return toast('Lengkapi dulu: ' + m.join(', '), 'warn');
  if (V.revisi) { V.f.alasan_revisi = val('rvAlasan'); if (V.f.alasan_revisi.length < 5) return bad('rvAlasan', 'Alasan revisi minimal 5 karakter.'); }
  if (!$('#cfBenar').checked) return toast('Centang pernyataan kebenaran data terlebih dahulu.', 'warn');
  try {
    const r = await denganSibuk(btn, () => simpanServer(true));
    V.selesai = true; ls.del(draftKey(V.id));
    const j = S.jadwal.find(x => x.jadwal_id === V.id);
    if (j) { j.status = 'SELESAI'; j.soaps = [{ soap_id: r.soap_id, petugas_id: V.soap.petugas_id || S.user.user_id, status: 'FINAL' }]; }
    V.hasil = r; $('#actbar').classList.add('hide'); sukses();
  } catch (e) { galat(e); }
};
function sukses() {
  const r = V.hasil;
  put('#wizBody', html`<div class="nx-card accent text-center" style="padding:32px 20px"><div class="ill" style="width:72px;height:72px;margin:0 auto 14px;border-radius:50%;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;font-size:36px"><i class="bi bi-check-lg"></i></div>
    <div class="t-h2">${V.revisi ? 'Revisi tersimpan' : 'Kunjungan selesai'}</div><p class="muted mt8">Catatan SOAP ${V.p.nama} telah dikunci${r.resume ? ' dan resume medis dibuat (' + r.resume.no_resume + ')' : ''}.</p>
    ${S.user && S.user.punya_ttd === false ? html`<div class="nx-alert warn mt16" style="text-align:left"><i class="bi bi-pen"></i><div>Tanda tangan Anda belum diunggah, sehingga resume tercetak tanpa TTD petugas. Unggah di menu Profil, lalu buka resume dan tekan <b>Buat ulang</b>.</div></div>` : ''}
    ${r.pdfGagal ? html`<div class="nx-alert warn mt16" style="text-align:left"><i class="bi bi-exclamation-triangle-fill"></i><div>Resume PDF belum berhasil dibuat. Catatan aman \u2014 buka kembali dari Kronologi SOAP untuk membuat ulang.</div></div>` : ''}
    ${r.invoice && isKelola() ? html`<div class="nx-note mt16" style="justify-content:center"><i class="bi bi-receipt"></i> ${r.invoice.paket ? 'Invoice paket ' + rp(r.invoice.total) + ' sudah terbit saat pendaftaran.' : 'Invoice draft ' + rp(r.invoice.total) + ' menunggu tinjauan.'}</div>` : ''}
    ${(r.stokRendah || []).length ? html`<div class="nx-alert warn mt16" style="text-align:left"><i class="bi bi-box-seam"></i><div>Stok BHP menipis/habis: <b>${r.stokRendah.join(', ')}</b>. Beri tahu admin untuk menambah stok.</div></div>` : ''}
    <div class="wrap-gap mt24" style="justify-content:center">${r.pdfGagal ? '' : html`<button class="nx-btn primary" data-act="doc.resume" data-id="${r.soap_id}"><i class="bi bi-file-earmark-pdf"></i> Lihat Resume PDF</button>`}${(V.hasil && (V.f.resep || []).some(x => x.nama_obat)) ? html`<button class="nx-btn secondary" data-act="doc.resep" data-id="${r.soap_id}" data-pid="${V.p.pasien_id}"><i class="bi bi-capsule"></i> Resep PDF</button>` : ''}${isDokter() ? html`<button class="nx-btn secondary" data-act="surat.baru" data-pid="${V.p.pasien_id}" data-soap="${r.soap_id}"><i class="bi bi-file-earmark-medical"></i> Surat Sakit</button>` : ''}<button class="nx-btn secondary" data-act="v.keluar">Kembali ke ${isKelola() ? 'jadwal' : 'beranda'}</button></div></div>`);
  put('#vSteps', ''); window.scrollTo(0, 0);
}

/*@@FILE 05_tagihan.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Tagihan (invoice), pembayaran, WhatsApp, rekap Excel \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const T = { list: null, f: '', q: '', hari: 90, sel: '', D: null, lain: [], diskon: 0, catatan: '' };
const FIL = [['', 'Semua'], ['DRAFT', 'Draft'], ['BELUM', 'Belum dibayar'], ['SEBAGIAN', 'Sebagian'], ['LUNAS', 'Lunas'], ['BATAL', 'Batal']];
const kelompokInv = i => i.status_terbit === 'BATAL' ? 'BATAL' : (i.status_terbit === 'DRAFT' ? 'DRAFT' : (i.status_bayar === 'LUNAS' ? 'LUNAS' : (i.status_bayar === 'SEBAGIAN' ? 'SEBAGIAN' : 'BELUM')));

VIEWS.tagihan = async function (v) {
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Tagihan & Invoice</h1><p>Tinjau draft otomatis dari SOAP, terbitkan, catat pembayaran, kirim via WhatsApp.</p></div><button class="nx-btn secondary" data-act="inv.excel"><i class="bi bi-file-earmark-excel"></i> Rekap Excel</button></div><div id="invBody">${skel(3, 80)}</div>`);
  try {
    T.list = await call('invoice.daftar', { dari: addDays(today(), -T.hari) }, { fresh: 20000 }); if (S.route !== '/tagihan') return;
    S.dashDraft = T.list.filter(i => i.status_terbit === 'DRAFT').length; hitungBadge(); gambarInvList();
    if (T.sel) { const id = T.sel; T.sel = ''; bukaInv(id); }
  } catch (e) { galat(e); put('#invBody', kosong('bi-wifi-off', 'Gagal memuat tagihan', e.message)); }
};
ACT['inv.buka'] = t => { T.sel = t.dataset.id; go('/tagihan'); };
function filterInv() { const q = T.q.toLowerCase(); return (T.list || []).filter(i => (!T.f || kelompokInv(i) === T.f) && (!q || (i.nama_pasien + ' ' + i.no_invoice + ' ' + i.no_rm).toLowerCase().indexOf(q) >= 0)); }
function gambarInvList() {
  const b = $('#invBody'); if (!b) return;
  const L = T.list, aktif = L.filter(i => i.status_terbit === 'TERBIT'), tot = aktif.reduce((a, i) => a + i.total, 0), byr = aktif.reduce((a, i) => a + Math.min(i.total, i.jumlah_dibayar), 0), draft = L.filter(i => i.status_terbit === 'DRAFT');
  const cnt = k => L.filter(i => kelompokInv(i) === k).length;
  put(b, html`<div class="nx-kpis"><div class="nx-kpi"><span class="ic"><i class="bi bi-receipt"></i></span><div class="lab">Total terbit</div><div class="val" style="font-size:22px">${rp(tot)}</div><div class="sub">${aktif.length} invoice \u2022 ${T.hari} hari</div></div>
    <div class="nx-kpi"><span class="ic ok"><i class="bi bi-cash-stack"></i></span><div class="lab">Sudah dibayar</div><div class="val" style="font-size:22px">${rp(byr)}</div></div>
    <div class="nx-kpi"><span class="ic bad"><i class="bi bi-wallet2"></i></span><div class="lab">Belum dibayar</div><div class="val" style="font-size:22px">${rp(tot - byr)}</div></div>
    <div class="nx-kpi"><span class="ic warn"><i class="bi bi-hourglass-split"></i></span><div class="lab">Draft</div><div class="val">${draft.length}</div><div class="sub">${rp(draft.reduce((a, i) => a + i.total, 0))}</div></div></div>
  <div class="nx-toolbar"><div class="nx-in-icon"><i class="bi bi-search"></i><input class="nx-in" placeholder="Cari pasien / No. invoice\u2026" value="${T.q}" data-in="inv.q" aria-label="Cari"></div><select class="nx-sel" style="max-width:170px" data-ch="inv.hari" aria-label="Periode">${[[30, '30 hari'], [90, '90 hari'], [180, '180 hari']].map(x => html`<option value="${x[0]}" ${T.hari === x[0] ? 'selected' : ''}>${x[1]}</option>`)}</select></div>
  <div class="wrap-gap mb16" role="tablist">${FIL.map(x => html`<button class="nx-chip ${T.f === x[0] ? 'on' : ''}" data-act="inv.f" data-v="${x[0]}">${x[1]}${x[0] ? ' ' + cnt(x[0]) : ''}</button>`)}</div>
  <div class="nx-grid-main wide"><div class="nx-card pad0"><div id="invList"></div></div><div class="sticky-side" id="invPrev"></div></div>`);
  isiInv(); if (T.D && T.mode === 'panel') gambarInv();
}
function isiInv() {
  const el = $('#invList'); if (!el) return; const l = filterInv();
  put(el, l.length ? html`<div class="nx-list" style="padding:0 16px">${l.slice(0, 300).map(i => html`<div class="nx-row click ${T.D && T.D.invoice.invoice_id === i.invoice_id ? 'sel' : ''}" data-act="inv.pilih" data-id="${i.invoice_id}" style="margin:0 -16px;padding:12px 16px"><div class="grow"><div class="fw7 truncate">${i.nama_pasien}</div><div class="t-sm muted truncate">${i.jenis === 'PAKET' ? 'Paket \u2022 ' : (i.jenis === 'KONSULTASI' ? 'Konsultasi \u2022 ' : '')}${i.no_invoice || 'Draft'} \u2022 ${tglS(i.tgl_kunjungan)}${i.petugas.length ? ' \u2022 ' + i.petugas.filter((x, k, a) => a.indexOf(x) === k).join(', ') : ''}</div></div><div style="text-align:right"><b class="num">${rp(i.total)}</b><div class="mt8">${badgeInv(i)}</div></div></div>`)}</div>` : kosong('bi-receipt', 'Tidak ada invoice', 'Invoice draft dibuat otomatis saat petugas menyimpan SOAP final.'));
}
INP['inv.q'] = debounce(el => { T.q = el.value.trim(); isiInv(); }, 200);
INP['inv.hari'] = el => { T.hari = +el.value; render(true); };
ACT['inv.f'] = t => { T.f = t.dataset.v; gambarInvList(); };
ACT['inv.pilih'] = t => bukaInv(t.dataset.id);
async function bukaInv(id) {
  const desk = window.innerWidth >= 1024; T.mode = desk ? 'panel' : 'modal';
  if (desk) put('#invPrev', html`<div class="nx-card">${skel(3, 40)}</div>`); else MD.open('mdl', { title: 'Detail Invoice', size: 'lg', body: skel(3, 50) });
  try { T.D = await call('invoice.detail', { invoice_id: id }); T.lain = deep(T.D.invoice.biaya_lain); T.diskon = T.D.invoice.diskon; T.catatan = T.D.invoice.catatan || ''; gambarInv(); isiInv(); } catch (e) { galat(e); if (!desk) MD.close('mdl'); }
}
const totalLokal = () => { const D = T.D, i = D.invoice; return Math.max(0, i.subtotal_tindakan + i.subtotal_bhp + T.lain.reduce((a, x) => a + num(x.qty) * num(x.harga), 0) - num(T.diskon)); };
function gambarInv() {
  const D = T.D, i = D.invoice, draft = i.status_terbit === 'DRAFT', terbit = i.status_terbit === 'TERBIT';
  const isi = html`<div class="row-between mb12"><div><div class="t-h3">${D.pasien.nama}</div><div class="t-sm muted">${i.no_invoice || 'Draft \u2014 belum bernomor'} \u2022 ${D.pasien.no_rm}</div></div>${badgeInv(i)}</div>
    <div class="t-sm muted mb12"><i class="bi bi-calendar-event"></i> ${i.jenis === 'KONSULTASI' ? 'Konsultasi online' : (i.jenis === 'PAKET' ? 'Paket \u2014 kunjungan' : 'Kunjungan')} ${tglS(D.jadwal.tanggal)} ${D.jadwal.jam || ''} \u2022 ${D.petugas.filter((x, k, a) => a.indexOf(x) === k).join(', ')}</div>
    ${i.catatan && /Perlu tinjau/.test(i.catatan) ? html`<div class="nx-alert warn mb12"><i class="bi bi-exclamation-triangle-fill"></i><div>${i.catatan}</div></div>` : ''}
    ${i.status_terbit === 'BATAL' ? html`<div class="nx-alert err mb12"><i class="bi bi-x-octagon-fill"></i><div>Dibatalkan: ${i.batal_alasan}</div></div>` : ''}
    <div class="t-cap mb8">${i.jenis === 'PAKET' ? 'Paket tindakan (sudah termasuk BHP)' : (i.jenis === 'KONSULTASI' ? 'Layanan' : 'Tindakan')}</div>${D.tindakan.length ? raw(D.tindakan.map(x => html`<div class="row-between t-sm" style="padding:3px 0"><span>${x.nama_tindakan} \u00d7${x.qty}</span><b class="num">${rp(x.subtotal)}</b></div>`.s).join('')) : html`<div class="muted t-sm">\u2014</div>`}
    ${(D.bhp || []).length ? html`<div class="t-cap mt12 mb8">Bahan habis pakai (BHP)</div>${raw(D.bhp.map(x => html`<div class="row-between t-sm" style="padding:3px 0"><span>${x.nama_bhp} \u00d7${x.qty} <span class="muted">(${rp(x.harga_saat_itu)}/${x.satuan})</span></span><b class="num">${rp(x.subtotal)}</b></div>`.s).join(''))}` : ''}
    <div class="t-cap mt12 mb8">Biaya lain</div>
    ${draft ? html`${T.lain.map((x, k) => html`<div class="row-gap mb8"><input class="nx-in" style="min-height:44px" placeholder="Uraian (mis. Transport)" value="${x.nama}" data-in="inv.lain" data-i="${k}" data-k="nama" aria-label="Uraian"><input class="nx-in" style="min-height:44px;max-width:64px" inputmode="numeric" value="${x.qty}" data-in="inv.lain" data-i="${k}" data-k="qty" aria-label="Qty"><input class="nx-in" style="min-height:44px;max-width:110px" inputmode="numeric" value="${x.harga}" data-in="inv.lain" data-i="${k}" data-k="harga" aria-label="Harga"><button class="nx-btn ghost icon sm" data-act="inv.lainDel" data-i="${k}" aria-label="Hapus"><i class="bi bi-x-lg"></i></button></div>`)}<button class="nx-btn secondary sm" data-act="inv.lainAdd"><i class="bi bi-plus-lg"></i> Tambah biaya</button>
      <div class="nx-field mt12"><label class="nx-lab" for="ivDis">Diskon (Rp)</label><input id="ivDis" class="nx-in" inputmode="numeric" value="${T.diskon}" data-in="inv.dis"></div><div class="nx-field"><label class="nx-lab" for="ivCat">Catatan invoice</label><textarea id="ivCat" class="nx-ta" style="min-height:60px" data-in="inv.cat" maxlength="500">${T.catatan}</textarea></div>`
      : (i.biaya_lain.length ? raw(i.biaya_lain.map(x => html`<div class="row-between t-sm" style="padding:3px 0"><span>${x.nama} \u00d7${x.qty}</span><b class="num">${rp(x.qty * x.harga)}</b></div>`.s).join('')) : html`<div class="muted t-sm">\u2014</div>`)}
    <hr class="nx-hr"><div class="nx-total"><span class="muted">Subtotal</span><b class="num">${rp(i.subtotal_tindakan + i.subtotal_bhp)}</b></div>
    ${!draft && i.diskon ? html`<div class="nx-total"><span class="muted">Diskon</span><b class="num">\u2212 ${rp(i.diskon)}</b></div>` : ''}
    <div class="nx-total big"><span class="fw6">Total</span><b class="num" id="invTot">${rp(draft ? totalLokal() : i.total)}</b></div>
    ${terbit ? html`<div class="nx-total"><span class="muted">Dibayar</span><b class="num">${rp(i.jumlah_dibayar)}</b></div><div class="nx-total"><span class="muted">Sisa</span><b class="num" style="color:${i.sisa ? 'var(--err-ink)' : 'var(--ok-ink)'}">${rp(i.sisa)}</b></div><div class="t-sm muted mt8">Jatuh tempo ${tglS(i.jatuh_tempo)}${i.wa_terkirim_at ? ' \u2022 WA terkirim ' + waktuS(i.wa_terkirim_at) : ''}</div>` : ''}
    <div class="wrap-gap mt16">
      ${draft ? html`<button class="nx-btn primary grow" data-act="inv.terbit"><i class="bi bi-send-check"></i> Terbitkan Invoice</button><button class="nx-btn secondary" data-act="inv.simpan"><i class="bi bi-save"></i> Simpan</button>` : ''}
      ${terbit && i.sisa > 0 ? html`<button class="nx-btn primary grow" data-act="inv.bayar"><i class="bi bi-cash-coin"></i> Catat Pembayaran</button>` : ''}
      ${terbit ? html`<button class="nx-btn wa" data-act="inv.wa"><i class="bi bi-whatsapp"></i> Kirim WA</button>` : ''}
      ${i.status_terbit !== 'BATAL' ? html`<button class="nx-btn secondary" data-act="inv.pdf"><i class="bi bi-file-earmark-pdf"></i> PDF</button>` : ''}
      ${i.status_terbit !== 'BATAL' && i.jumlah_dibayar === 0 ? html`<button class="nx-btn ghost" style="color:var(--err-ink)" data-act="inv.batal"><i class="bi bi-x-circle"></i> Batalkan</button>` : ''}</div>`;
  if (T.mode === 'panel') put('#invPrev', html`<div class="nx-card accent">${isi}</div>`); else put($('#mdl .modal-body'), isi);
}
function updTot() { const e = $('#invTot'); if (e) e.textContent = rp(totalLokal()); }
INP['inv.lain'] = el => { T.lain[+el.dataset.i][el.dataset.k] = el.value; updTot(); };
INP['inv.dis'] = el => { T.diskon = el.value; updTot(); }; INP['inv.cat'] = el => { T.catatan = el.value; };
ACT['inv.lainAdd'] = () => { T.lain.push({ nama: '', qty: 1, harga: 0 }); gambarInv(); };
ACT['inv.lainDel'] = t => { T.lain.splice(+t.dataset.i, 1); gambarInv(); };
async function simpanInv(btn) {
  const lain = T.lain.filter(x => String(x.nama).trim()).map(x => ({ nama: x.nama, qty: num(x.qty) || 1, harga: num(x.harga) }));
  const r = await call('invoice.ubah', { invoice_id: T.D.invoice.invoice_id, biaya_lain: lain, diskon: num(T.diskon), catatan: T.catatan });
  T.D.invoice = r; T.lain = deep(r.biaya_lain); T.diskon = r.diskon; sinkronInv(r); return r;
}
function sinkronInv(r) { const i = (T.list || []).find(x => x.invoice_id === r.invoice_id); if (i) Object.assign(i, r); isiInv(); }
ACT['inv.simpan'] = async btn => { try { await denganSibuk(btn, () => simpanInv()); gambarInv(); toast('Perubahan invoice tersimpan.'); } catch (e) { galat(e); } };
ACT['inv.terbit'] = async btn => {
  if (!await konfirmasi({ title: 'Terbitkan invoice', msg: 'Invoice akan diberi nomor resmi dan tidak dapat diubah lagi. Lanjutkan?', ok: 'Terbitkan' })) return;
  try { await denganSibuk(btn, async () => { await simpanInv(); const r = await call('invoice.terbit', { invoice_id: T.D.invoice.invoice_id }); T.D.invoice = r.invoice; sinkronInv(r.invoice); S.dashDraft = Math.max(0, (S.dashDraft || 1) - 1); hitungBadge(); gambarInvList(); toast('Invoice ' + r.invoice.no_invoice + ' terbit.' + (r.pdfGagal ? ' (PDF akan dibuat saat dibuka)' : '')); }); gambarInv(); } catch (e) { galat(e); }
};
ACT['inv.batal'] = async () => {
  const a = await konfirmasi({ title: 'Batalkan invoice', msg: 'Invoice dibatalkan dan tidak dihitung dalam laporan.', ok: 'Batalkan invoice', danger: true, input: { label: 'Alasan pembatalan' } }); if (!a) return;
  try { const r = await call('invoice.batal', { invoice_id: T.D.invoice.invoice_id, alasan: a }); T.D.invoice = Object.assign(T.D.invoice, r); sinkronInv(r); gambarInv(); gambarInvList(); toast('Invoice dibatalkan.', 'warn'); } catch (e) { galat(e); }
};
ACT['inv.bayar'] = () => {
  const i = T.D.invoice;
  MD.open('mdl2', { title: 'Catat Pembayaran', size: 'sm', body: html`<div class="nx-total"><span class="muted">Sisa tagihan</span><b class="num">${rp(i.sisa)}</b></div>
    ${medan('byJml', 'Jumlah dibayar (Rp)', { v: i.sisa, inputmode: 'numeric', req: 1 })}<div class="wrap-gap mb12"><button class="nx-chip" data-act="by.lunas">Lunasi seluruhnya</button></div>
    <div class="nx-field"><label class="nx-lab" for="byMet">Metode</label><select id="byMet" class="nx-sel"><option>TRANSFER</option><option>TUNAI</option><option>QRIS</option><option>LAINNYA</option></select></div>${medan('byTgl', 'Tanggal bayar', { type: 'date', v: today() })}`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="by.simpan">Simpan Pembayaran</button>` });
};
ACT['by.lunas'] = () => { $('#byJml').value = T.D.invoice.sisa; };
ACT['by.simpan'] = async btn => {
  const i = T.D.invoice, jml = num(val('byJml')); bersihGalat($('#mdl2'));
  if (jml <= 0) return bad('byJml', 'Jumlah harus lebih dari 0.'); if (jml > i.sisa) return bad('byJml', 'Melebihi sisa tagihan (' + rp(i.sisa) + ').');
  const snap = deep(T.D.invoice);
  // Optimistic: tampilkan status baru lebih dulu
  i.jumlah_dibayar += jml; i.sisa -= jml; i.status_bayar = i.sisa <= 0 ? 'LUNAS' : 'SEBAGIAN'; sinkronInv(i); gambarInv(); MD.close('mdl2');
  try { const r = await call('invoice.bayar', { invoice_id: i.invoice_id, jumlah: jml, lunas: jml === snap.sisa, metode: val('byMet'), tgl_bayar: val('byTgl') }); T.D.invoice = r; sinkronInv(r); gambarInv(); gambarInvList(); toast('Pembayaran ' + rp(jml) + ' tercatat.'); }
  catch (e) { T.D.invoice = snap; sinkronInv(snap); gambarInv(); galat(e); }
};
ACT['inv.pdf'] = () => lihatPdf('Invoice', 'dokumen.pdf', { jenis: 'invoice', id: T.D.invoice.invoice_id });
ACT['inv.wa'] = () => bagikanWa('invoice', T.D.invoice.invoice_id, T.D.pasien, { no: T.D.invoice.no_invoice, total: rp(T.D.invoice.total), jatuh_tempo: tglS(T.D.invoice.jatuh_tempo) });

/** Tautan WhatsApp: PDF dibagikan lewat tautan Drive (siapa pun yang punya tautan), pesan dari templat pengaturan. */
async function bagikanWa(jenis, id, pasien, extra) {
  MD.open('mdl2', { title: 'Kirim via WhatsApp', body: skel(2, 60) });
  try {
    const r = await call('dokumen.bagikan', { jenis: jenis, id: id });
    const tpl = jenis === 'invoice' ? S.cfg.wa_template_invoice : (jenis === 'surat' ? 'Halo {nama}, berikut surat keterangan sakit dari {klinik}. Unduh PDF-nya di sini: {link}\nSemoga lekas pulih.' : jenis === 'resep' || jenis === 'resepk' ? 'Halo {nama}, berikut resep obat dari {klinik}. Unduh PDF-nya di sini: {link}\nGunakan sesuai anjuran dokter. Terima kasih.' : S.cfg.wa_template_resume);
    const teks = isiTemplate(tpl, Object.assign({ nama: pasien.nama, klinik: S.cfg.nama_klinik, link: r.url }, extra));
    const href = () => waUrl(pasien.no_wa, $('#waMsg').value);
    put($('#mdl2 .modal-body'), html`<div class="nx-alert info mb12"><i class="bi bi-info-circle-fill"></i><div>Tautan dokumen dibuat untuk <b>${pasien.nama}</b> (${pasien.no_wa}). Siapa pun yang memegang tautan dapat membuka PDF \u2014 kirim hanya ke nomor yang benar.</div></div><label class="nx-lab" for="waMsg">Pesan</label><textarea id="waMsg" class="nx-ta" style="min-height:140px">${teks}</textarea>`);
    put($('#mdl2 .modal-footer'), html`<button class="nx-btn secondary" data-bs-dismiss="modal">Tutup</button><a class="nx-btn wa" id="waGo" data-act="wa.go" data-native="1" target="_blank" rel="noopener" href="${waUrl(pasien.no_wa, teks)}"><i class="bi bi-whatsapp"></i> Buka WhatsApp</a>`);
    $('#mdl2 .modal-footer').classList.remove('hide');
    $('#waMsg').addEventListener('input', () => { $('#waGo').href = href(); });
    ACT['wa.go'] = () => { if (jenis === 'invoice') call('invoice.terkirim', { invoice_id: id }).then(x => { if (T.D) { T.D.invoice.wa_terkirim_at = x.wa_terkirim_at; gambarInv(); } }).catch(() => { }); };
  } catch (e) { MD.close('mdl2'); galat(e); }
}

// \u2500\u2500 Rekap Excel (SheetJS di sisi klien) \u2500\u2500
async function buatExcel(nama, sheets) {
  try { await muatLib('xlsx'); } catch (e) { return toast('Pustaka Excel belum termuat. Periksa koneksi internet.', 'err'); }
  const wb = XLSX.utils.book_new();
  sheets.forEach(s => { const ws = XLSX.utils.json_to_sheet(s.rows.length ? s.rows : [{ Info: 'Tidak ada data' }]); ws['!cols'] = Object.keys(s.rows[0] || { Info: 1 }).map(k => ({ wch: Math.min(40, Math.max(12, k.length + 4)) })); XLSX.utils.book_append_sheet(wb, ws, s.nama.slice(0, 31)); });
  const out = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
  unduhBlob(new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), nama);
}
ACT['inv.excel'] = () => {
  const l = filterInv(); if (!l.length) return toast('Tidak ada data untuk diekspor.', 'warn');
  buatExcel('Rekap_Tagihan_' + today() + '.xlsx', [{ nama: 'Tagihan', rows: l.map(i => ({ 'No. Invoice': i.no_invoice || 'DRAFT', 'Tgl Kunjungan': i.tgl_kunjungan, 'No. RM': i.no_rm, Pasien: i.nama_pasien, Petugas: i.petugas.filter((x, k, a) => a.indexOf(x) === k).join(', '), 'Subtotal Tindakan': i.subtotal_tindakan, Jenis: i.jenis || 'KUNJUNGAN', Diskon: i.diskon, Total: i.total, Dibayar: i.jumlah_dibayar, Sisa: i.sisa, Status: i.status_terbit === 'TERBIT' ? i.status_bayar : i.status_terbit, 'Tgl Bayar': i.tgl_bayar, Metode: i.metode })) }]);
  toast('Rekap Excel diunduh.');
};

/*@@FILE 06_master_laporan.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Master data, Laporan, Audit \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const M = { tab: 'staf', d: null, q: '' };
const TABS_M = [['staf', 'bi-people', 'Staf & Akun'], ['tarif', 'bi-tags', 'Tarif Layanan'], ['bhp', 'bi-box-seam', 'BHP & Stok'], ['paket', 'bi-box2-heart', 'Paket Tindakan'], ['klinik', 'bi-hospital', 'Klinik']];
VIEWS.master = async function (v) {
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Master Data</h1><p>Staf, akun, tarif layanan, BHP, dan pengaturan klinik. Hanya Superadmin.</p></div></div><div id="mBody">${skel(3, 70)}</div>`);
  try { M.d = await call('master.semua', {}, { fresh: 30000 }); if (S.route === '/master') gambarMaster(); } catch (e) { galat(e); put('#mBody', kosong('bi-wifi-off', 'Gagal memuat', e.message)); }
};
function segarkanLokal() {
  S.staff = M.d.users.filter(u => u.status_aktif && ['DOKTER', 'PERAWAT', 'FISIO'].indexOf(u.peran) >= 0).map(u => ({ user_id: u.user_id, nama: u.nama, peran: u.peran, jabatan: u.jabatan, no_str: u.no_str, no_sip: u.no_sip, no_hp: u.no_hp }));
  S.tarif = M.d.tarif.filter(x => x.aktif); S.bhp = M.d.bhp.filter(x => x.aktif).map(x => Object.assign({}, x, { harga: x.harga_jual })); S.paket = (M.d.paket || []).filter(x => x.aktif);
}
function gambarMaster() {
  const b = $('#mBody'); if (!b) return;
  put(b, html`<div class="nx-tabs">${TABS_M.map(t => html`<button class="${M.tab === t[0] ? 'on' : ''}" data-act="m.tab" data-v="${t[0]}"><i class="bi ${t[1]}"></i>${t[2]}</button>`)}</div><div id="mTab"></div>`);
  ({ staf: tabStaf, tarif: tabTarif, bhp: tabBhp, paket: tabPaket, klinik: tabKlinik })[M.tab]($('#mTab'));
}
ACT['m.tab'] = t => { M.tab = t.dataset.v; M.q = ''; gambarMaster(); };

function tabStaf(el) {
  put(el, html`<div class="row-between mb16"><div class="muted t-sm">${M.d.users.length} akun \u2022 password sementara dibuat oleh pemilik, wajib diganti saat login pertama.</div><button class="nx-btn primary" data-act="u.form"><i class="bi bi-person-plus-fill"></i> Tambah Staf</button></div>
  <div class="nx-card pad0"><div class="nx-list" style="padding:0 16px">${M.d.users.map(u => html`<div class="nx-row" style="margin:0 -16px;padding:12px 16px;${u.status_aktif ? '' : 'opacity:.6'}"><div class="nx-ava ${u.peran === 'SUPERADMIN' ? 'ok' : (u.peran === 'ADMIN' ? 'teal' : '')}">${inisial(u.nama)}</div><div class="grow"><div class="fw7 truncate">${u.nama} ${u.status_aktif ? '' : html`<span class="nx-badge nodot">Nonaktif</span>`}</div><div class="t-sm muted truncate">@${u.username} \u2022 ${peranLabel(u)}${u.jabatan ? ' \u2022 ' + u.jabatan : ''}${u.terakhir_login ? ' \u2022 login ' + waktuS(u.terakhir_login) : ' \u2022 belum pernah login'}</div></div>
    <div class="wrap-gap" style="justify-content:flex-end"><button class="nx-btn secondary sm" data-act="u.form" data-id="${u.user_id}"><i class="bi bi-pencil"></i></button>${u.user_id !== S.user.user_id && u.peran !== 'SUPERADMIN' && (u.peran_tambahan || []).indexOf('SUPERADMIN') < 0 ? html`<button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="m.hapus" data-j="user" data-id="${u.user_id}" title="Hapus" aria-label="Hapus"><i class="bi bi-trash"></i></button>` : ''}${u.user_id !== S.user.user_id ? html`<button class="nx-btn secondary sm" data-act="u.reset" data-id="${u.user_id}" title="Reset password"><i class="bi bi-key"></i></button><button class="nx-btn ${u.status_aktif ? 'danger' : 'secondary'} sm" data-act="u.toggle" data-id="${u.user_id}">${u.status_aktif ? 'Nonaktifkan' : 'Aktifkan'}</button>` : ''}</div></div>`)}</div></div>`);
}
ACT['u.form'] = t => {
  const u = t.dataset.id ? M.d.users.find(x => x.user_id === t.dataset.id) : null, e = !!u, sup = e && u.peran === 'SUPERADMIN';
  MD.open('mdl', { title: e ? 'Ubah Staf' : 'Tambah Staf', body: html`${medan('uNama', 'Nama lengkap (beserta gelar)', { v: u && u.nama, req: 1, max: 120 })}
    <div class="nx-grid2" style="gap:0 16px">${medan('uUser', 'Username', { v: u && u.username, req: 1, max: 30, ph: 'huruf kecil, angka', help: 'Dipakai untuk login.' })}
    <div class="nx-field"><label class="nx-lab" for="uPeran">Peran <span class="req">*</span></label><select id="uPeran" class="nx-sel" ${sup ? 'disabled' : ''}>${(sup ? ['SUPERADMIN'] : (e ? ['DOKTER', 'PERAWAT', 'FISIO', 'ADMIN'] : ['DOKTER', 'PERAWAT', 'FISIO', 'ADMIN', 'SUPERADMIN'])).map(p => html`<option value="${p}" ${u && u.peran === p ? 'selected' : ''}>${PERAN_LABEL[p]}</option>`)}</select><div class="nx-help" id="uPeranH"></div></div></div>
    <div class="nx-field" id="uTbBox" style="${sup ? 'display:none' : ''}"><label class="nx-lab">Peran tambahan <span class="muted">(opsional)</span></label>
      <label class="nx-check"><input type="checkbox" id="uTbA" ${u && (u.peran_tambahan || []).length ? 'checked' : ''}> <span>Admin \u2014 kelola jadwal, pasien, tagihan, konsultasi</span></label>
      <label class="nx-check"><input type="checkbox" id="uTbS" ${u && (u.peran_tambahan || []).indexOf('SUPERADMIN') >= 0 ? 'checked' : ''}> <span>Superadmin \u2014 akses penuh (keuangan, master data, akun, audit)</span></label>
      <div class="nx-help" id="uTbH">Contoh: dokter yang juga pemilik klinik. Jabatan, SIP/STR, dan tanda tangan tetap mengikuti peran utama.</div></div>
    <div class="nx-grid2" style="gap:0 16px">${medan('uJab', 'Jabatan', { v: u && u.jabatan, opt: 1, ph: 'mis. Dokter Umum' })}${medan('uSip', 'No. SIP', { v: u && u.no_sip, opt: 1, ph: 'Surat Izin Praktik', help: 'Dicetak di bawah nama pada resume & resep.' })}</div>
    ${medan('uStr', 'No. STR', { v: u && u.no_str, opt: 1 })}
    ${medan('uHp', 'No. HP / WhatsApp', { v: u && u.no_hp, type: 'tel', inputmode: 'tel', opt: 1, help: 'Untuk pengiriman jadwal via WhatsApp.' })}
    ${e ? '' : medan('uPw', 'Password sementara', { opt: 1, ph: 'Kosongkan = dibuat otomatis', help: 'Min. 8 karakter, huruf & angka.' })}`,
    onShown: () => { const tb = () => { const p = $('#uPeran').value, box = $('#uTbBox'), a = $('#uTbA'), sa = $('#uTbS'); if (!box) return; box.style.display = p === 'SUPERADMIN' ? 'none' : ''; a.closest('label').style.display = p === 'ADMIN' ? 'none' : ''; if (sa.checked) { a.checked = true; a.disabled = true; } else a.disabled = false; const h = $('#uTbH'); if (h) h.textContent = sa.checked ? 'Superadmin memberi akses penuh, termasuk keuangan dan akun. Berikan hanya kepada pemilik/pengelola.' : 'Contoh: dokter yang juga pemilik klinik. Jabatan, SIP/STR, dan tanda tangan tetap mengikuti peran utama.'; };
      ['uPeran', 'uTbA', 'uTbS'].forEach(i => { const el = $('#' + i); if (el) el.addEventListener('change', tb); }); tb();
      const s = $('#uPeran'), h = () => { const x = $('#uPeranH'); if (x) x.textContent = s.value === 'SUPERADMIN' && !sup ? 'Superadmin punya akses penuh (master data, akun, laporan, audit). Peran ini tidak dapat diubah setelah dibuat \u2014 berikan hanya kepada pemilik/pengelola.' : ''; }; s.addEventListener('change', h); h(); },
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="u.simpan" data-id="${e ? u.user_id : ''}">Simpan</button>` });
};
function tambahanForm() {
  const p = $('#uPeran').value; if (p === 'SUPERADMIN') return [];
  if ($('#uTbS') && $('#uTbS').checked) return ['SUPERADMIN'];
  return $('#uTbA') && $('#uTbA').checked && p !== 'ADMIN' ? ['ADMIN'] : [];
}
ACT['u.simpan'] = async btn => {
  bersihGalat($('#mdl')); const uname = val('uUser').toLowerCase(), d = { user_id: btn.dataset.id, nama: val('uNama'), username: uname, peran: $('#uPeran').value, peran_tambahan: tambahanForm(), jabatan: val('uJab'), no_str: val('uStr'), no_sip: val('uSip'), no_hp: val('uHp'), password: val('uPw') };
  let ok = true; if (d.nama.length < 3) ok = bad('uNama', 'Nama minimal 3 karakter.'); if (!/^[a-z0-9._-]{3,30}$/.test(uname)) ok = bad('uUser', '3\u201330 karakter: huruf kecil, angka, . _ -'); if (d.password && (d.password.length < 8 || !/[A-Za-z]/.test(d.password) || !/\d/.test(d.password))) ok = bad('uPw', 'Min. 8 karakter, huruf & angka.'); if (!ok) return;
  try {
    const r = await denganSibuk(btn, () => call('user.simpan', d)); const i = M.d.users.findIndex(x => x.user_id === r.user.user_id); if (i >= 0) M.d.users[i] = r.user; else M.d.users.push(r.user);
    segarkanLokal(); MD.close('mdl'); gambarMaster(); toast('Staf tersimpan.'); if (r.passwordSementara) tampilPw(r.user, r.passwordSementara);
  } catch (e) { galat(e); }
};
function tampilPw(u, pw) {
  ACT['pw.salin'] = () => { try { navigator.clipboard.writeText(pw); toast('Password disalin.'); } catch (e) { toast('Salin manual dari layar.', 'warn'); } };
  MD.open('mdl2', { title: 'Password Sementara', size: 'sm', static: true, body: html`<p>Berikan kepada <b>${u.nama}</b> (<code>${u.username}</code>). Password hanya ditampilkan sekali dan wajib diganti saat login pertama.</p><div class="nx-card" style="text-align:center;background:var(--primary-soft)"><div style="font-size:26px;font-weight:700;letter-spacing:.08em;font-family:ui-monospace,monospace;user-select:all">${pw}</div></div>`, footer: html`<button class="nx-btn secondary" data-act="pw.salin"><i class="bi bi-clipboard"></i> Salin</button><button class="nx-btn primary" data-bs-dismiss="modal">Sudah dicatat</button>` });
}
ACT['u.reset'] = async t => { const u = M.d.users.find(x => x.user_id === t.dataset.id); if (!await konfirmasi({ title: 'Reset password', msg: 'Buat password sementara baru untuk ' + u.nama + '? Sesi aktifnya akan diakhiri.', ok: 'Reset' })) return; try { const r = await call('user.resetPw', { user_id: u.user_id }); tampilPw(u, r.passwordSementara); } catch (e) { galat(e); } };
ACT['u.toggle'] = async t => {
  const u = M.d.users.find(x => x.user_id === t.dataset.id), aktif = !u.status_aktif;
  if (!await konfirmasi({ title: aktif ? 'Aktifkan akun' : 'Nonaktifkan akun', msg: aktif ? u.nama + ' dapat login kembali.' : u.nama + ' tidak dapat login dan sesi aktifnya langsung diakhiri.', ok: aktif ? 'Aktifkan' : 'Nonaktifkan', danger: !aktif })) return;
  u.status_aktif = aktif; segarkanLokal(); gambarMaster();
  try { await call('user.toggle', { user_id: u.user_id, aktif: aktif }); toast(aktif ? 'Akun diaktifkan.' : 'Akun dinonaktifkan.', aktif ? 'ok' : 'warn'); } catch (e) { u.status_aktif = !aktif; segarkanLokal(); gambarMaster(); galat(e); }
};

// \u2500\u2500 Tarif & BHP (CRUD serupa) \u2500\u2500
function tabMasterItem(el, jenis) {
  const isT = jenis === 'tarif', rows = (isT ? M.d.tarif : M.d.bhp).filter(x => !M.q || ((isT ? x.nama_layanan : x.nama) + x.kode + (x.kategori || '')).toLowerCase().indexOf(M.q) >= 0);
  put(el, html`<div class="nx-toolbar"><div class="nx-in-icon"><i class="bi bi-search"></i><input class="nx-in" placeholder="Cari\u2026" value="${M.q}" data-in="m.q" aria-label="Cari"></div><button class="nx-btn primary" data-act="mi.form" data-j="${jenis}"><i class="bi bi-plus-lg"></i> ${isT ? 'Tarif Baru' : 'BHP Baru'}</button></div>
  <div class="nx-card pad0"><div class="nx-tbl-wrap"><table class="nx-tbl"><thead><tr><th>Kode</th><th>${isT ? 'Layanan' : 'Nama BHP'}</th><th>${isT ? 'Kategori' : 'Satuan'}</th>${isT ? html`<th class="r">Harga</th>` : html`<th class="r">Harga beli</th><th class="r">Harga jual</th><th class="r">Stok</th>`}<th>Status</th><th></th></tr></thead><tbody>
    ${rows.map(x => html`<tr style="${x.aktif ? '' : 'opacity:.55'}"><td class="muted">${x.kode}</td><td class="fw6">${isT ? x.nama_layanan : x.nama}</td><td>${isT ? x.kategori : x.satuan}</td>${isT ? html`<td class="r num">${rp(x.harga)}</td>` : html`<td class="r num">${x.harga_beli ? rp(x.harga_beli) : html`<span class="muted">\u2014</span>`}</td><td class="r num">${rp(x.harga_jual)}${x.otomatis ? html`<div class="t-sm muted">+${x.persen_efektif}%${x.persen_jual === '' ? ' (default)' : ''}</div>` : html`<div class="t-sm muted">manual</div>`}</td>`}${isT ? '' : html`<td class="r num"><b style="color:${x.stok <= (x.stok_min || 0) ? 'var(--err-ink)' : 'inherit'}">${x.stok}</b>${x.stok <= (x.stok_min || 0) ? html` <span class="nx-badge err nodot">${x.stok <= 0 ? 'Habis' : 'Menipis'}</span>` : ''}</td>`}<td>${x.aktif ? html`<span class="nx-badge ok">Aktif</span>` : html`<span class="nx-badge">Nonaktif</span>`}</td><td class="r">${isT ? '' : html`<button class="nx-btn secondary sm" data-act="bhp.beliForm" data-id="${x.bhp_id}"><i class="bi bi-cart-plus"></i> Beli</button> <button class="nx-btn secondary sm" data-act="bhp.stokForm" data-id="${x.bhp_id}"><i class="bi bi-box-arrow-in-down"></i> Stok</button>`}<button class="nx-btn ghost sm" data-act="mi.form" data-j="${jenis}" data-id="${x[isT ? 'tarif_id' : 'bhp_id']}"><i class="bi bi-pencil"></i></button><button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="m.hapus" data-j="${jenis}" data-id="${x[isT ? 'tarif_id' : 'bhp_id']}" title="Hapus" aria-label="Hapus"><i class="bi bi-trash"></i></button></td></tr>`)}</tbody></table></div>${rows.length ? '' : kosong('bi-inbox', 'Belum ada data', '')}</div>
  <div class="nx-note mt12"><i class="bi bi-info-circle"></i> ${isT ? 'Perubahan harga tidak mengubah invoice lama \u2014 harga disimpan saat tindakan dicatat.' : 'Harga jual = harga beli + persen (default ' + S.cfg.persen_jual_bhp + '%, dibulatkan Rp 500), ditagihkan ke pasien bila BHP dipakai di luar paket. Tanpa harga beli, harga jual manual dipakai (Rp 0 = tidak ditagihkan). Dalam paket, BHP sudah termasuk harga paket. Harga disimpan saat dicatat, jadi perubahan tidak mengubah invoice lama.'}</div>`);
}
const tabTarif = el => tabMasterItem(el, 'tarif'), tabBhp = el => tabMasterItem(el, 'bhp');
INP['m.q'] = debounce(el => { M.q = el.value.toLowerCase(); tabMasterItem($('#mTab'), M.tab); const q = $('#mTab input'); if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); } }, 200);
ACT['mi.form'] = t => {
  const isT = t.dataset.j === 'tarif', x = t.dataset.id ? (isT ? M.d.tarif : M.d.bhp).find(r => r[isT ? 'tarif_id' : 'bhp_id'] === t.dataset.id) : null;
  MD.open('mdl', { title: (x ? 'Ubah ' : 'Tambah ') + (isT ? 'Tarif Layanan' : 'BHP'), size: 'sm', body: html`${medan('miKode', 'Kode', { v: x && x.kode, opt: 1, ph: 'Otomatis bila kosong', max: 20 })}${medan('miNama', isT ? 'Nama layanan' : 'Nama BHP', { v: x && (isT ? x.nama_layanan : x.nama), req: 1, max: 120 })}
    ${isT ? medan('miKat', 'Kategori', { v: x ? x.kategori : 'Keperawatan', max: 40, ph: 'Keperawatan / Medis / Fisioterapi' }) : medan('miSat', 'Satuan', { v: x && x.satuan, req: 1, max: 20, ph: 'pcs, box, lembar' })}
    ${isT ? medan('miHarga', 'Harga (Rp)', { v: x ? x.harga : '', inputmode: 'numeric', req: 1 }) : html`<div class="nx-grid2" style="gap:0 16px">${medan('miBeli', 'Harga beli (Rp)', { v: x && x.harga_beli ? x.harga_beli : '', inputmode: 'numeric', opt: 1, ph: 'per satuan' })}${medan('miPersen', 'Persen jual (%)', { v: x && x.persen_jual !== '' && x.persen_jual != null ? x.persen_jual : '', inputmode: 'decimal', opt: 1, ph: 'bawaan ' + S.cfg.persen_jual_bhp + '%' })}</div>
    <div class="nx-alert info mb12" id="miPrev"><i class="bi bi-calculator"></i><div></div></div>
    ${medan('miHarga', 'Harga jual manual (Rp)', { v: x ? x.harga : '', inputmode: 'numeric', opt: 1, help: 'Dipakai hanya bila Harga beli kosong. Rp 0 = tidak ditagihkan.' })}`}${isT ? '' : html`<div class="nx-grid2" style="gap:0 16px">${x ? '' : medan('miStok', 'Stok awal', { v: 0, inputmode: 'numeric' })}${medan('miStokMin', 'Batas stok minimum', { v: x ? x.stok_min : 0, inputmode: 'numeric', help: 'Peringatan saat stok \u2264 batas.' })}</div>`}<label class="nx-check"><input type="checkbox" id="miAktif" ${!x || x.aktif ? 'checked' : ''}><span>Aktif (dapat dipilih petugas)</span></label>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="mi.simpan" data-j="${t.dataset.j}" data-id="${t.dataset.id || ''}">Simpan</button>`, onShown: isT ? undefined : bhpPrev });
};
function bhpPrev() {
  const box = $('#miPrev'); if (!box) return;
  const calc = () => { const beli = num(val('miBeli')), ps = val('miPersen') === '' ? num(S.cfg.persen_jual_bhp) : num(val('miPersen')), man = num(val('miHarga')); let t;
    if (beli > 0) { const j = Math.max(500, Math.round(beli * (1 + ps / 100) / 500) * 500); t = 'Harga jual otomatis: <b>' + rp(j) + '</b> (harga beli ' + rp(beli) + ' + ' + ps + '%, dibulatkan Rp 500)'; } else t = man > 0 ? 'Harga jual manual: <b>' + rp(man) + '</b>' : 'Tidak ditagihkan (harga jual Rp 0). Isi harga beli agar harga jual dihitung otomatis.';
    box.lastElementChild.innerHTML = t; };
  ['miBeli', 'miPersen', 'miHarga'].forEach(id => { const e = $('#' + id); if (e) e.addEventListener('input', calc); }); calc();
}
ACT['mi.simpan'] = async btn => {
  bersihGalat($('#mdl')); const isT = btn.dataset.j === 'tarif', h = num(val('miHarga'));
  const d = isT ? { tarif_id: btn.dataset.id, kode: val('miKode'), nama_layanan: val('miNama'), kategori: val('miKat'), harga: h, aktif: $('#miAktif').checked } : { bhp_id: btn.dataset.id, kode: val('miKode'), nama: val('miNama'), satuan: val('miSat'), harga: val('miHarga') === '' ? 0 : h, harga_beli: val('miBeli') === '' ? 0 : num(val('miBeli')), persen_jual: val('miPersen'), stok_min: num(val('miStokMin')), stok: $('#miStok') ? num(val('miStok')) : undefined, aktif: $('#miAktif').checked };
  let ok = true; if (val('miNama').length < 3) ok = bad('miNama', 'Minimal 3 karakter.'); if (!isT && !d.satuan) ok = bad('miSat', 'Satuan wajib.'); if (isT ? (val('miHarga') === '' || h < 0) : ((val('miHarga') !== '' && h < 0) || (val('miBeli') !== '' && num(val('miBeli')) < 0))) ok = bad(isT || val('miBeli') === '' ? 'miHarga' : 'miBeli', 'Harga tidak valid.'); if (!isT && val('miPersen') !== '' && !(num(val('miPersen')) >= 0 && num(val('miPersen')) <= 1000)) ok = bad('miPersen', 'Persen 0\u20131000.'); if (!ok) return;
  try { const r = await denganSibuk(btn, () => call(isT ? 'tarif.simpan' : 'bhp.simpan', d)); const arr = isT ? M.d.tarif : M.d.bhp, k = isT ? 'tarif_id' : 'bhp_id', i = arr.findIndex(x => x[k] === r[k]); if (i >= 0) arr[i] = r; else arr.push(r); segarkanLokal(); MD.close('mdl'); tabMasterItem($('#mTab'), M.tab); toast('Tersimpan.'); } catch (e) { galat(e); }
};

// \u2500\u2500 Pengaturan klinik \u2500\u2500
function tabKlinik(el) {
  const c = M.d.config; M.logo = undefined;
  put(el, html`<div class="nx-grid2"><div class="nx-card"><div class="nx-sec-title mb16"><i class="bi bi-hospital"></i> Identitas Klinik</div>${medan('cNama', 'Nama klinik', { v: c.nama_klinik, req: 1 })}${medan('cAl', 'Alamat', { v: c.alamat, ta: 1, h: 64 })}<div class="nx-grid2" style="gap:0 16px">${medan('cTel', 'Telepon', { v: c.telepon, type: 'tel' })}${medan('cEm', 'Email', { v: c.email, type: 'email' })}</div>
    <div class="nx-field"><label class="nx-lab">Logo (tampil di aplikasi & kop PDF)</label><div class="row-gap"><img id="logoPrev" src="${c.logo || LOGO_FULL}" alt="Logo" style="height:48px;border-radius:8px;background:#fff;padding:2px"><label class="nx-btn secondary sm" style="margin:0"><i class="bi bi-upload"></i> Unggah<input type="file" accept="image/png,image/jpeg" data-ch="c.logo" class="hide"></label>${c.logo ? html`<button class="nx-btn ghost sm" data-act="c.logoHapus">Pakai bawaan</button>` : ''}</div><div class="nx-help">PNG/JPG, diperkecil otomatis.</div></div></div>
  <div class="nx-card"><div class="nx-sec-title mb16"><i class="bi bi-receipt"></i> Invoice & Jadwal</div><div class="nx-grid2" style="gap:0 16px">${medan('cPre', 'Prefix invoice', { v: c.prefix_invoice, max: 8 })}${medan('cJt', 'Jatuh tempo (hari)', { v: c.jatuh_tempo_hari, inputmode: 'numeric' })}</div>${medan('cBuf', 'Jeda transit antar kunjungan (menit)', { v: c.buffer_transit_menit, inputmode: 'numeric', help: 'Dipakai untuk mendeteksi bentrok jadwal petugas.' })}${medan('cPj', 'Persen jual BHP bawaan (%)', { v: c.persen_jual_bhp, inputmode: 'decimal', help: 'Harga jual BHP = harga beli + persen ini, dibulatkan ke Rp 500. Dapat diganti per BHP.' })}${medan('cRek', 'Informasi pembayaran (rekening / QRIS)', { v: c.rekening, ta: 1, h: 72, help: 'Tercetak pada invoice.' })}</div></div>
  <div class="nx-card mt16"><div class="nx-sec-title mb16"><i class="bi bi-chat-dots"></i> Konsultasi Online</div>${medan('cKu', 'Alamat halaman konsultasi (Blogger)', { v: c.konsultasi_url, ph: 'https://klinikanda.blogspot.com/p/k.html', help: 'Tautan pasien = alamat ini + ?k=KODE. Gunakan alamat halaman pendek agar tautan singkat. Kosongkan untuk memakai alamat Apps Script.' })}${medan('cKj', 'Masa berlaku tautan (jam)', { v: c.konsultasi_jam, inputmode: 'numeric', help: 'Tautan juga langsung kedaluwarsa saat dokter menyelesaikan percakapan.' })}${medan('cWk', 'Templat pesan WhatsApp konsultasi', { v: c.wa_template_konsultasi, ta: 1, h: 90, help: 'Variabel: {nama} {dokter} {link} {berlaku} {klinik}' })}</div>
  <div class="nx-card mt16"><div class="nx-sec-title mb16"><i class="bi bi-whatsapp"></i> Templat Pesan WhatsApp</div>${medan('cWi', 'Templat invoice', { v: c.wa_template_invoice, ta: 1, h: 72, help: 'Variabel: {nama} {no} {total} {jatuh_tempo} {klinik} {link}' })}${medan('cWr', 'Templat resume medis', { v: c.wa_template_resume, ta: 1, h: 72, help: 'Variabel: {nama} {tanggal} {klinik} {link}' })}</div>
  <div class="mt16"><button class="nx-btn primary" data-act="c.simpan"><i class="bi bi-check2"></i> Simpan Pengaturan</button></div>`);
}
INP['c.logo'] = el => {
  const f = el.files[0]; if (!f) return; if (f.size > 4e6) return toast('File terlalu besar.', 'err');
  const r = new FileReader(); r.onload = () => { const im = new Image(); im.onload = () => {
    const w = Math.min(320, im.width), h = Math.round(im.height * w / im.width), c = document.createElement('canvas'); c.width = w; c.height = h; c.getContext('2d').drawImage(im, 0, 0, w, h);
    let u = c.toDataURL('image/png'); if (u.length > 180000) u = c.toDataURL('image/jpeg', .85); M.logo = u; $('#logoPrev').src = u;
  }; im.onerror = () => toast('Gambar tidak dapat dibaca.', 'err'); im.src = r.result; }; r.readAsDataURL(f);
};
ACT['c.logoHapus'] = async () => { try { const r = await call('config.simpan', { hapus_logo: true }); M.d.config = r; S.cfg = r; gambarShell(); render(true); toast('Logo bawaan dipakai.'); } catch (e) { galat(e); } };
ACT['c.simpan'] = async btn => {
  bersihGalat($('#mTab')); const d = { nama_klinik: val('cNama'), alamat: val('cAl'), telepon: val('cTel'), email: val('cEm'), prefix_invoice: val('cPre'), jatuh_tempo_hari: val('cJt'), buffer_transit_menit: val('cBuf'), persen_jual_bhp: val('cPj'), rekening: val('cRek'), wa_template_invoice: val('cWi'), wa_template_resume: val('cWr'), konsultasi_url: val('cKu'), konsultasi_jam: val('cKj'), wa_template_konsultasi: val('cWk') };
  if (d.nama_klinik.length < 3) return bad('cNama', 'Nama klinik wajib diisi.'); if (d.persen_jual_bhp === '' || !(num(d.persen_jual_bhp) >= 0 && num(d.persen_jual_bhp) <= 1000)) return bad('cPj', 'Isi persen 0\u20131000.'); if (!/^[A-Za-z0-9]{2,8}$/.test(d.prefix_invoice)) return bad('cPre', '2\u20138 huruf/angka.');
  if (d.konsultasi_url && !/^https:\/\/[^\s?#]+$/.test(d.konsultasi_url)) return bad('cKu', 'Harus diawali https:// dan tanpa ? atau #.');
  if (M.logo) d.logo_data = M.logo;
  try { const r = await denganSibuk(btn, () => call('config.simpan', d)); M.d.config = r; S.cfg = r; ls.set('shan_cfg', JSON.stringify({ nama_klinik: r.nama_klinik, logo: r.logo })); gambarShell(); render(true); toast('Pengaturan klinik tersimpan.'); } catch (e) { galat(e); }
};

// \u2500\u2500 Laporan \u2500\u2500
const L = { dari: '', sampai: '', grain: 'hari', preset: '30', r: null };
const labelSeri = (k, g) => g === 'bulan' ? BLN[+k.slice(5, 7) - 1] + ' ' + k.slice(0, 4) : (g === 'minggu' ? 'Mg ' + tglPendek(k) : tglPendek(k));
function setPreset(p) { const t = today(); L.preset = p; L.sampai = t; if (p === 'bulan') L.dari = t.slice(0, 8) + '01'; else if (p === 'tahun') L.dari = t.slice(0, 4) + '-01-01'; else L.dari = addDays(t, -(+p - 1)); }
VIEWS.laporan = function (v) {
  if (!L.dari) setPreset('30');
  put(v, html`${tabLaporan()}<div class="nx-page-h"><div><h1 class="t-h1">Laporan Operasional</h1><p>Kunjungan, pendapatan invoice, beban petugas, tindakan, dan pemakaian BHP.</p></div><div class="wrap-gap"><button class="nx-btn secondary" data-act="l.xls"><i class="bi bi-file-earmark-excel"></i> Excel</button><button class="nx-btn primary" data-act="l.pdf"><i class="bi bi-file-earmark-pdf"></i> PDF</button></div></div>
  <div class="nx-card pad-sm mb16"><div class="wrap-gap mb12">${[['7', '7 hari'], ['30', '30 hari'], ['90', '90 hari'], ['bulan', 'Bulan ini'], ['tahun', 'Tahun ini']].map(x => html`<button class="nx-chip ${L.preset === x[0] ? 'on' : ''}" data-act="l.preset" data-v="${x[0]}">${x[1]}</button>`)}</div>
    <div class="row-gap" style="flex-wrap:wrap"><div style="min-width:140px;flex:1"><label class="nx-lab" for="lDari">Dari</label><input id="lDari" type="date" class="nx-in" value="${L.dari}" data-ch="l.tgl"></div><div style="min-width:140px;flex:1"><label class="nx-lab" for="lSam">Sampai</label><input id="lSam" type="date" class="nx-in" value="${L.sampai}" data-ch="l.tgl"></div>
    <div style="flex:2;min-width:240px"><label class="nx-lab">Kelompokkan per</label><div class="nx-seg">${[['hari', 'Hari'], ['minggu', 'Minggu'], ['bulan', 'Bulan']].map(x => html`<button class="${L.grain === x[0] ? 'on' : ''}" data-act="l.grain" data-v="${x[0]}">${x[1]}</button>`)}</div></div></div></div>
  <div id="lBody">${skel(3, 100)}</div>`);
  muatLaporan();
};
ACT['l.preset'] = t => { setPreset(t.dataset.v); render(true); };
ACT['l.grain'] = t => { L.grain = t.dataset.v; render(true); };
INP['l.tgl'] = () => { const a = val('lDari'), b = val('lSam'); if (a && b && a <= b) { L.dari = a; L.sampai = b; L.preset = ''; render(true); } else toast('Rentang tanggal tidak valid.', 'warn'); };
async function muatLaporan() {
  try { const r = await call('laporan', { dari: L.dari, sampai: L.sampai, grain: L.grain }, { fresh: 60000 }); if (S.route !== '/laporan') return; L.r = r; gambarLaporan(); } catch (e) { galat(e); put('#lBody', kosong('bi-wifi-off', 'Gagal memuat laporan', e.message)); }
}
function specLaporan(r, w, tanpaLegenda) {
  const lab = r.deret.label.map(k => labelSeri(k, r.grain)), kosongSet = a => !a.some(x => x > 0);
  const horiz = { indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { precision: 0 } } } };
  return {
    kunjungan: kosongSet(r.deret.kunjungan) ? null : { type: r.deret.label.length > 31 ? 'line' : 'bar', data: { labels: lab, datasets: [{ label: 'Kunjungan selesai', data: r.deret.kunjungan, backgroundColor: w.s, borderColor: w.s, borderRadius: 6, maxBarThickness: 26, tension: .3 }] }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } } },
    pendapatan: kosongSet(r.deret.dibayar.concat(r.deret.belum)) ? null : { type: 'bar', data: { labels: lab, datasets: [{ label: 'Sudah dibayar', data: r.deret.dibayar, backgroundColor: w.t, borderRadius: 4 }, { label: 'Belum dibayar', data: r.deret.belum, backgroundColor: w.warn, borderRadius: 4 }] }, options: { scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, ticks: { callback: v => v >= 1e6 ? (v / 1e6) + ' jt' : (v >= 1e3 ? (v / 1e3) + ' rb' : v) } } }, plugins: { tooltip: { callbacks: { label: c => c.dataset.label + ': ' + rp(c.parsed.y) } } } } },
    petugas: r.perPetugas.length ? { type: 'bar', data: { labels: r.perPetugas.map(x => x.nama), datasets: [{ label: 'Kunjungan', data: r.perPetugas.map(x => x.jumlah), backgroundColor: w.p, borderRadius: 6, maxBarThickness: 22 }] }, options: horiz } : null,
    tindakan: r.topTindakan.length ? { type: 'bar', data: { labels: r.topTindakan.map(x => x.nama), datasets: [{ label: 'Jumlah', data: r.topTindakan.map(x => x.jumlah), backgroundColor: w.s, borderRadius: 6, maxBarThickness: 22 }] }, options: horiz } : null,
    bhp: r.pakaiBhp.length ? { type: 'bar', data: { labels: r.pakaiBhp.map(x => x.nama), datasets: [{ label: 'Jumlah dipakai', data: r.pakaiBhp.map(x => x.jumlah), backgroundColor: w.t, borderRadius: 6, maxBarThickness: 22 }] }, options: horiz } : null
  };
}
function gambarLaporan() {
  const r = L.r, s = r.ringkas, b = $('#lBody'); if (!b) return; hapusChart();
  const d = s.kunjunganSebelumnya ? Math.round((s.kunjungan - s.kunjunganSebelumnya) / s.kunjunganSebelumnya * 100) : null;
  const box = (id, judul, ikon, tinggi) => html`<div class="nx-card"><div class="nx-sec-title mb12"><i class="bi ${ikon}"></i> ${judul}</div><div class="nx-chart ${tinggi || 'sm'}" id="w_${id}"><canvas id="c_${id}"></canvas></div></div>`;
  put(b, html`<div class="nx-kpis"><div class="nx-kpi"><span class="ic"><i class="bi bi-calendar-check"></i></span><div class="lab">Kunjungan selesai</div><div class="val">${s.kunjungan}</div><div class="sub">${d === null ? 'periode sebelumnya: \u2014' : html`<span style="color:${d >= 0 ? 'var(--ok-ink)' : 'var(--err-ink)'}">${d >= 0 ? '\u25b2' : '\u25bc'} ${Math.abs(d)}%</span> vs periode lalu`}</div></div>
    <div class="nx-kpi"><span class="ic teal"><i class="bi bi-people"></i></span><div class="lab">Pasien unik</div><div class="val">${s.pasienUnik}</div><div class="sub">${s.rataPerHari.toFixed(1).replace('.', ',')} kunjungan/hari</div></div>
    <div class="nx-kpi"><span class="ic ok"><i class="bi bi-cash-stack"></i></span><div class="lab">Sudah dibayar</div><div class="val" style="font-size:22px">${rp(s.dibayar)}</div><div class="sub">dari ${rp(s.total)} terbit</div></div>
    <div class="nx-kpi"><span class="ic bad"><i class="bi bi-wallet2"></i></span><div class="lab">Belum dibayar</div><div class="val" style="font-size:22px">${rp(s.belum)}</div><div class="sub">draft ${rp(s.draftNilai)}</div></div></div>
  <div class="nx-insight mb16"><h6><i class="bi bi-stars"></i> Analisis Otomatis</h6><ul>${r.insight.map(x => html`<li>${x}</li>`)}</ul></div>
  <div class="nx-grid2">${box('kunjungan', 'Jumlah Kunjungan', 'bi-graph-up')}${box('pendapatan', 'Pendapatan Invoice', 'bi-cash-coin')}${box('petugas', 'Kunjungan per Petugas', 'bi-person-badge')}${box('tindakan', 'Tindakan Terbanyak', 'bi-bandaid')}</div><div class="mt16">${box('bhp', 'Pemakaian BHP', 'bi-box-seam', '')}</div>`);
  const sp = specLaporan(r, warnaChart(false));
  Object.keys(sp).forEach(k => { if (sp[k]) mkChart($('#c_' + k), sp[k]); else chartKosong($('#w_' + k)); });
}
ACT['l.pdf'] = async btn => {
  if (!L.r) return; const charts = {};
  try {
    await denganSibuk(btn, async () => {
      await muatLib('chart');
      const sp = specLaporan(L.r, warnaChart(true)), host = document.createElement('div'); host.style.cssText = 'position:fixed;left:-9999px;top:0;width:900px'; document.body.appendChild(host);
      Object.keys(sp).forEach(k => { if (!sp[k]) return; const c = document.createElement('canvas'); c.width = 900; c.height = k === 'kunjungan' || k === 'pendapatan' ? 340 : 300; host.appendChild(c); sp[k].options = Object.assign({}, sp[k].options, { responsive: false, animation: false }); const ch = mkChart(c, sp[k], true); if (ch) charts[k] = c.toDataURL('image/png'); if (ch) ch.destroy(); });
      host.remove();
      const d = await call('laporan.pdf', { dari: L.dari, sampai: L.sampai, grain: L.grain, charts: charts });
      unduhBlob(b64ToBlob(d.base64, d.mime), d.nama_file); toast('Laporan PDF diunduh.');
    });
  } catch (e) { galat(e); }
};
ACT['l.xls'] = () => {
  const r = L.r; if (!r) return;
  buatExcel('Laporan_' + r.dari + '_' + r.sampai + '.xlsx', [
    { nama: 'Ringkasan', rows: [['Periode', r.dari + ' s/d ' + r.sampai], ['Kunjungan selesai', r.ringkas.kunjungan], ['Pasien unik', r.ringkas.pasienUnik], ['Invoice terbit', r.ringkas.invoiceTerbit], ['Total tagihan', r.ringkas.total], ['Sudah dibayar', r.ringkas.dibayar], ['Belum dibayar', r.ringkas.belum], ['Nilai draft', r.ringkas.draftNilai]].map(x => ({ Indikator: x[0], Nilai: x[1] })) },
    { nama: 'Per Periode', rows: r.deret.label.map((k, i) => ({ Periode: k, Kunjungan: r.deret.kunjungan[i], Dibayar: r.deret.dibayar[i], 'Belum dibayar': r.deret.belum[i] })) },
    { nama: 'Per Petugas', rows: r.perPetugas.map(x => ({ Petugas: x.nama, Peran: x.peran, Kunjungan: x.jumlah })) },
    { nama: 'Tindakan', rows: r.topTindakan.map(x => ({ Tindakan: x.nama, Jumlah: x.jumlah, Nilai: x.nilai })) },
    { nama: 'BHP', rows: r.pakaiBhp.map(x => ({ BHP: x.nama, Satuan: x.satuan, Jumlah: x.jumlah, Nilai: x.nilai })) },
    { nama: 'Pengeluaran', rows: r.pengeluaran.perKategori.map(x => ({ Kategori: x.kategori, Jumlah: x.jumlah })).concat([{ Kategori: 'TOTAL PENGELUARAN', Jumlah: r.pengeluaran.total }, { Kategori: 'SELISIH (dibayar \u2212 pengeluaran)', Jumlah: r.pengeluaran.selisih }]) }]);
  toast('Excel diunduh.');
};

// \u2500\u2500 Audit log \u2500\u2500
const AU = { q: '', aksi: '', dari: '', sampai: '' };
VIEWS.audit = async function (v) {
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Audit Log</h1><p>Jejak aktivitas pengguna: login, perubahan data, akses ditolak, pembagian dokumen.</p></div></div><div id="auBody">${skel(3, 50)}</div>`);
  try { const d = await call('audit.daftar', { q: AU.q, aksi: AU.aksi, dari: AU.dari, sampai: AU.sampai }); if (S.route !== '/audit') return;
    put('#auBody', html`<div class="nx-toolbar"><div class="nx-in-icon"><i class="bi bi-search"></i><input class="nx-in" id="auQ" placeholder="Cari nama / objek / ringkasan\u2026" value="${AU.q}" aria-label="Cari"></div><select class="nx-sel" id="auA" style="max-width:220px" aria-label="Aksi"><option value="">Semua aksi</option>${d.aksi.map(a => html`<option ${AU.aksi === a ? 'selected' : ''}>${a}</option>`)}</select><input type="date" id="auD" class="nx-in" style="max-width:160px" value="${AU.dari}" aria-label="Dari"><input type="date" id="auS" class="nx-in" style="max-width:160px" value="${AU.sampai}" aria-label="Sampai"><button class="nx-btn primary" data-act="au.cari"><i class="bi bi-funnel"></i> Terapkan</button></div>
    <div class="t-sm muted mb12">${d.total} entri cocok \u2022 menampilkan ${d.baris.length} terbaru</div>
    <div class="nx-card pad0"><div class="nx-tbl-wrap"><table class="nx-tbl"><thead><tr><th>Waktu</th><th>Pengguna</th><th>Aksi</th><th>Objek</th><th>Keterangan</th></tr></thead><tbody>${d.baris.map(r => html`<tr><td class="num" style="white-space:nowrap">${String(r.waktu).replace('T', ' ').slice(0, 19)}</td><td>${r.nama}</td><td><span class="nx-badge nodot ${/DITOLAK|GAGAL|BATAL|HAPUS|NONAKTIF/.test(r.aksi) ? 'bad' : (/FINAL|REVISI/.test(r.aksi) ? 'info' : '')}">${r.aksi}</span></td><td class="muted">${r.objek}</td><td style="max-width:420px;word-break:break-word">${r.ringkasan}</td></tr>`)}</tbody></table></div>${d.baris.length ? '' : kosong('bi-inbox', 'Tidak ada entri', '')}</div>`);
    $('#auQ').addEventListener('keydown', e => { if (e.key === 'Enter') ACT['au.cari'](); });
  } catch (e) { galat(e); put('#auBody', kosong('bi-wifi-off', 'Gagal memuat', e.message)); }
};
ACT['au.cari'] = () => { AU.q = val('auQ'); AU.aksi = $('#auA').value; AU.dari = val('auD'); AU.sampai = val('auS'); render(true); };

/*@@FILE 07_chat.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Komponen chat bersama (dokter & pasien) + halaman pasien \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const JAM = iso => String(iso || '').slice(11, 16);
const KSTATUS = { MENUNGGU: ['Menunggu pasien', 'info'], BERLANGSUNG: ['Berlangsung', 'ok'], SELESAI: ['Selesai', ''], KEDALUWARSA: ['Kedaluwarsa', 'warn'] };
const badgeK = s => { const x = KSTATUS[s] || [s, '']; return html`<span class="nx-badge ${x[1]}">${x[0]}</span>`; };

/** Kecilkan foto di sisi klien (hemat kuota & cepat): maks 1280px, JPEG. */
function kecilkanFoto(file) {
  return new Promise((res, rej) => {
    if (!file || !/^image\//.test(file.type)) return rej(new Error('Pilih berkas gambar (JPG/PNG).'));
    if (file.size > 25e6) return rej(new Error('Foto terlalu besar.'));
    const r = new FileReader();
    r.onerror = () => rej(new Error('Foto tidak dapat dibaca.'));
    r.onload = () => {
      const im = new Image();
      im.onerror = () => rej(new Error('Format foto tidak didukung. Gunakan JPG/PNG.'));
      im.onload = () => {
        const coba = (maks, q) => { const k = Math.min(1, maks / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k); const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(im, 0, 0, c.width, c.height); return c.toDataURL('image/jpeg', q); };
        let u = coba(1280, .72); if (u.length > 1300000) u = coba(960, .6); if (u.length > 1400000) return rej(new Error('Foto terlalu besar setelah dikompres.')); res(u);
      };
      im.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

/** Penjadwal polling: cepat saat aktif, melambat saat sepi, berhenti saat tab tersembunyi. */
function buatPoller(fn) {
  let t = null, jalan = true, terakhir = Date.now(), sibukN = false;
  const jeda = () => { const d = Date.now() - terakhir; return d < 120000 ? 3000 : (d < 600000 ? 6000 : 12000); };
  const tick = async () => {
    if (!jalan) return;
    if (!document.hidden && !sibukN) { sibukN = true; try { await fn(); } catch (e) { /* diulang pada putaran berikutnya */ } sibukN = false; }
    if (jalan) t = setTimeout(tick, jeda());
  };
  const onVis = () => { if (!document.hidden && jalan) { clearTimeout(t); tick(); } };
  document.addEventListener('visibilitychange', onVis);
  t = setTimeout(tick, 1500);
  return { ping() { terakhir = Date.now(); clearTimeout(t); if (jalan) t = setTimeout(tick, 400); }, aktif() { terakhir = Date.now(); }, stop() { jalan = false; clearTimeout(t); document.removeEventListener('visibilitychange', onVis); } };
}

/**
 * Komponen chat. o = { me:'DOKTER'|'PASIEN', aktif, fotoFn(id)\u2192Promise<{mime,base64}>, kirimFn({teks,foto})\u2192Promise<pesan>, onKirim() }
 */
function buatChat(root, o) {
  const st = { seen: {}, aktif: o.aktif !== false, foto: {}, pic: null, kirim: false, maxSeq: 0 };
  put(root, html`<div class="kc-msgs" role="log" aria-live="polite"></div><div class="kc-end ${st.aktif ? 'hide' : ''}"></div>
    <div class="kc-comp ${st.aktif ? '' : 'hide'}"><div class="kc-prev hide"><img alt="Pratinjau foto"><button class="nx-btn ghost sm" data-kc="hapusfoto" type="button"><i class="bi bi-x-lg"></i> Hapus</button></div>
    <div class="kc-row"><button class="nx-btn secondary icon" data-kc="foto" type="button" aria-label="Lampirkan foto"><i class="bi bi-image"></i></button><input type="file" accept="image/*" class="hide" data-kc="file"><textarea rows="1" maxlength="1000" placeholder="Tulis pesan\u2026" aria-label="Pesan"></textarea><button class="nx-btn primary icon" data-kc="kirim" type="button" aria-label="Kirim"><i class="bi bi-send-fill"></i></button></div></div>`);
  const box = $('.kc-msgs', root), ta = $('textarea', root), prev = $('.kc-prev', root), fileEl = $('input[type=file]', root);
  const dekat = () => box.scrollHeight - box.scrollTop - box.clientHeight < 120;
  const bawah = () => { box.scrollTop = box.scrollHeight; };
  function muatFoto(img, id) {
    if (st.foto[id]) { img.src = st.foto[id]; img.classList.remove('nx-skel', 'kc-pic-ph'); img.classList.add('kc-pic'); return; }
    o.fotoFn(id).then(d => { const url = URL.createObjectURL(b64ToBlob(d.base64, d.mime)); st.foto[id] = url; img.src = url; img.classList.remove('nx-skel', 'kc-pic-ph'); img.classList.add('kc-pic'); }).catch(() => { img.replaceWith(Object.assign(document.createElement('div'), { className: 'muted t-sm', textContent: '(foto tidak dapat dimuat)' })); });
  }
  function node(m, tmp) {
    const d = document.createElement('div'), mine = m.dari === o.me;
    d.className = 'kc-b ' + (m.dari === 'SISTEM' ? 'sys' : (mine ? 'me' : 'them')) + (tmp ? ' tmp' : ''); d.dataset.id = m.pesan_id;
    let h = '';
    if (m.foto) h += '<img class="nx-skel kc-pic-ph" alt="Foto kiriman" data-kc="zoom">';
    if (m.resep) h += '<div class="kc-rx"><i class="bi bi-file-earmark-medical"></i><div class="grow"><b>Resep obat</b><div class="t-xs">' + E(m.teks || '') + '</div></div><button type="button" class="nx-btn sm ' + (mine ? 'secondary' : 'primary') + '" data-kc="resep" data-rid="' + E(m.resep) + '"><i class="bi bi-download"></i> PDF</button></div>';
    else if (m.surat) h += '<div class="kc-rx"><i class="bi bi-file-earmark-medical"></i><div class="grow"><b>Surat keterangan sakit</b><div class="t-xs">' + E(m.teks || '') + '</div></div><button type="button" class="nx-btn sm ' + (mine ? 'secondary' : 'primary') + '" data-kc="surat" data-rid="' + E(m.surat) + '"><i class="bi bi-download"></i> PDF</button></div>';
    else if (m.teks) h += '<div class="tx">' + E(m.teks) + '</div>';
    if (m.dari !== 'SISTEM') h += '<div class="tm">' + (tmp ? 'mengirim\u2026' : E(JAM(m.waktu))) + '</div>';
    d.innerHTML = h;
    const img = $('img', d); if (img) { if (m._local) { st.foto[m.pesan_id] = m._local; } muatFoto(img, m.pesan_id); }
    return d;
  }
  const api_ = {
    masuk(list) {
      const stick = dekat(); let baru = 0;
      (list || []).forEach(m => {
        if (st.seen[m.pesan_id]) return; st.seen[m.pesan_id] = 1; st.maxSeq = Math.max(st.maxSeq, m.seq || 0);
        if (m.dari === o.me) { const tmpEl = $('.kc-b.tmp', box); if (tmpEl && tmpEl.dataset.pending) { if (m.foto && tmpEl.dataset.local) st.foto[m.pesan_id] = tmpEl.dataset.local; tmpEl.remove(); } }
        box.appendChild(node(m)); if (m.dari !== o.me && m.dari !== 'SISTEM') baru++;
      });
      if (stick || (list && list.length && !st.maxSeq)) bawah();
      return baru;
    },
    maxSeq() { return st.maxSeq; },
    akhiri(teks) { st.aktif = false; $('.kc-comp', root).classList.add('hide'); const e = $('.kc-end', root); e.textContent = teks; e.classList.remove('hide'); },
    aktif() { return st.aktif; }
  };
  async function kirim() {
    if (st.kirim || !st.aktif) return;
    const teks = ta.value.trim(), foto = st.pic; if (!teks && !foto) return;
    st.kirim = true; const tid = 'tmp' + Date.now();
    const el = node({ pesan_id: tid, dari: o.me, teks: teks, foto: !!foto, waktu: '', _local: foto }, true); el.dataset.pending = '1'; if (foto) el.dataset.local = foto; box.appendChild(el); bawah();
    ta.value = ''; ta.style.height = ''; st.pic = null; prev.classList.add('hide'); fileEl.value = '';
    try { const m = await o.kirimFn({ teks: teks, foto: foto }); st.seen[m.pesan_id] = 1; st.maxSeq = Math.max(st.maxSeq, m.seq); if (foto) st.foto[m.pesan_id] = foto; el.replaceWith(node(m)); if (o.onKirim) o.onKirim(m); }
    catch (e) { el.classList.remove('tmp'); el.classList.add('err'); $('.tm', el) && ($('.tm', el).textContent = 'gagal terkirim'); setTimeout(() => el.remove(), 4000); ta.value = teks; if (foto) { st.pic = foto; $('img', prev).src = foto; prev.classList.remove('hide'); } if (!(e && e.code === 'SESI')) toast(e.message, 'err', 5000); else throw e; }
    finally { st.kirim = false; }
  }
  root.addEventListener('click', async e => {
    const t = e.target.closest('[data-kc]'); if (!t) return; const k = t.dataset.kc;
    if (k === 'kirim') kirim().catch(() => { });
    else if (k === 'foto') fileEl.click();
    else if (k === 'hapusfoto') { st.pic = null; prev.classList.add('hide'); fileEl.value = ''; }
    else if (k === 'resep' && o.resepFn) {
      if (t.disabled) return; t.disabled = true;
      try { const d = await o.resepFn(t.dataset.rid); unduhBlob(b64ToBlob(d.base64, d.mime), d.nama_file); toast('Resep diunduh.'); }
      catch (x) { toast(x.message || 'Gagal mengunduh resep.', 'err'); } finally { t.disabled = false; }
    }
    else if (k === 'surat' && o.suratFn) {
      if (t.disabled) return; t.disabled = true;
      try { const d = await o.suratFn(t.dataset.rid); unduhBlob(b64ToBlob(d.base64, d.mime), d.nama_file); toast('Surat diunduh.'); }
      catch (x) { toast(x.message || 'Gagal mengunduh surat.', 'err'); } finally { t.disabled = false; }
    }
    else if (k === 'zoom' && t.src && t.classList.contains('kc-pic')) MD.open('mdl2', { title: 'Foto', size: 'lg', body: html`<img src="${t.src}" alt="Foto" style="width:100%;border-radius:12px">` });
  });
  fileEl.addEventListener('change', async () => { const f = fileEl.files[0]; if (!f) return; try { st.pic = await kecilkanFoto(f); $('img', prev).src = st.pic; prev.classList.remove('hide'); } catch (x) { toast(x.message, 'err'); fileEl.value = ''; } });
  ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = Math.min(120, ta.scrollHeight) + 'px'; if (o.onKetik) o.onKetik(); });
  ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !MOBILE_UA) { e.preventDefault(); kirim().catch(() => { }); } });
  return api_;
}

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Halaman pasien (tanpa login): dibuka dari tautan ?k=KODE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
function halamanPasien(kode) {
  document.body.classList.add('pasien-mode');
  $('#boot').classList.add('hide'); $('#appView').classList.add('hide');
  const v = $('#loginView'); v.classList.remove('hide');
  const P_ = { kode: kode, dob: '', sk: '', ver: '', chat: null, poller: null, dokter: '', klinik: S.cfg };
  const logo = () => (P_.klinik && P_.klinik.logo) || LOGO_FULL;
  function gate(pesan) {
    if (P_.poller) { P_.poller.stop(); P_.poller = null; }
    put(v, html`<div class="kc-page"><div class="kc-shell"><div class="kc-top"><img src="${logo()}" alt=""><div class="grow"><div class="nm">${(P_.klinik && P_.klinik.nama) || S.cfg.nama_klinik || 'Shancare'}</div><div class="st">Konsultasi dengan dokter</div></div></div>
      <form class="kc-gate" id="fKg" novalidate><div class="t-h2 mb8">Verifikasi identitas</div><p class="muted mb16">Untuk melindungi data kesehatan Anda, masukkan <b>tanggal lahir pasien</b> untuk membuka percakapan.</p>
      ${pesan ? html`<div class="nx-alert err mb16" role="alert"><i class="bi bi-exclamation-octagon-fill"></i><div>${pesan}</div></div>` : ''}
      <div class="nx-field"><label class="nx-lab" for="kgT">Tanggal lahir pasien</label><input id="kgT" type="date" class="nx-in" required max="${lokalIso()}" value="${P_.dob}" autocomplete="bday"></div>
      <button class="nx-btn primary block" id="kgGo" type="submit"><i class="bi bi-chat-dots"></i> Mulai Konsultasi</button>
      <div class="nx-note mt16"><i class="bi bi-shield-lock"></i> Tautan hanya berlaku untuk satu konsultasi dan akan kedaluwarsa setelah dokter menyelesaikannya.</div></form></div></div>`);
    $('#fKg').addEventListener('submit', async e => { e.preventDefault(); const t = $('#kgT').value; if (!t) return toast('Isi tanggal lahir pasien.', 'warn'); P_.dob = t; await denganSibuk($('#kgGo'), () => masuk(false)); });
  }
  async function masuk(diam) {
    try {
      const r = await call('kp.masuk', { k: P_.kode, tgl_lahir: P_.dob });
      P_.klinik = Object.assign({}, P_.klinik, r.klinik || {});
      if (r.klinik && r.klinik.nama) { S.cfg = { nama_klinik: r.klinik.nama, logo: r.klinik.logo }; }
      if (!r.sk) return selesai(r.status, r.dokter_nama);
      P_.sk = r.sk; P_.dokter = r.dokter_nama; P_.ver = r.ver; if (diam) return r;
      tampilChat(r); return r;
    } catch (e) { if (diam) throw e; gate(e.message); }
  }
  function selesai(status, dokter) {
    if (P_.poller) { P_.poller.stop(); P_.poller = null; }
    const exp = status === 'KEDALUWARSA';
    put(v, html`<div class="kc-page"><div class="kc-shell"><div class="kc-top"><img src="${logo()}" alt=""><div class="grow"><div class="nm">${(P_.klinik && P_.klinik.nama) || 'Shancare'}</div><div class="st"><span class="kc-dot off"></span> Konsultasi berakhir</div></div></div>
      <div class="kc-gate" style="text-align:center"><div class="ill" style="width:72px;height:72px;margin:0 auto 16px;border-radius:50%;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;font-size:34px"><i class="bi bi-${exp ? 'hourglass-bottom' : 'check-lg'}"></i></div><div class="t-h2 mb8">${exp ? 'Tautan sudah kedaluwarsa' : 'Konsultasi telah selesai'}</div><p class="muted">${exp ? 'Masa berlaku tautan ini telah berakhir.' : (dokter ? dokter + ' telah menyelesaikan konsultasi ini.' : 'Dokter telah menyelesaikan konsultasi ini.')} Tautan ini tidak berlaku lagi. Bila Anda memerlukan konsultasi lanjutan, hubungi klinik untuk mendapatkan tautan baru.</p></div></div></div>`);
  }
  function tampilChat(r) {
    put(v, html`<div class="kc-page"><div class="kc-shell"><div class="kc-top"><img src="${logo()}" alt=""><div class="grow"><div class="nm truncate">${P_.dokter}</div><div class="st"><span class="kc-dot" id="kcDot"></span><span id="kcSt">Konsultasi berlangsung</span></div></div></div>
      <div class="kc-info"><i class="bi bi-exclamation-triangle-fill"></i><div>Bukan untuk keadaan darurat. Bila gawat (sesak berat, nyeri dada hebat, pingsan), segera ke IGD / hubungi 119.</div></div><div id="kcBox" style="display:flex;flex-direction:column;flex:1;min-height:0"></div></div></div>`);
    const root = $('#kcBox'); root.style.cssText = 'display:flex;flex-direction:column;flex:1;min-height:0';
    P_.chat = buatChat(root, {
      me: 'PASIEN', aktif: true,
      fotoFn: id => withSesi(() => call('kp.foto', { sk: P_.sk, pesan_id: id })),
      resepFn: id => withSesi(() => call('kp.resep', { sk: P_.sk, resep_id: id })),
      suratFn: id => withSesi(() => call('kp.surat', { sk: P_.sk, surat_id: id })),
      kirimFn: pl => withSesi(() => call('kp.kirim', { sk: P_.sk, teks: pl.teks, foto: pl.foto || '' })),
      onKirim: () => P_.poller && P_.poller.ping(), onKetik: () => P_.poller && P_.poller.aktif()
    });
    P_.chat.masuk(r.pesan);
    const dot = (cls, txt) => { const d = $('#kcDot'); if (d) d.className = 'kc-dot ' + cls; const s = $('#kcSt'); if (s) s.textContent = txt; };
    P_.poller = buatPoller(async () => {
      try {
        const x = await withSesi(() => call('kp.poll', { sk: P_.sk, ver: P_.ver, after: P_.chat.maxSeq() }));
        dot('', 'Konsultasi berlangsung'); if (x.tidakBerubah) return; P_.ver = x.ver;
        const baru = P_.chat.masuk(x.pesan); if (baru) { P_.poller.aktif(); try { if (navigator.vibrate) navigator.vibrate(60); } catch (e) { /* abaikan */ } }
        if (x.status !== 'BERLANGSUNG' && x.status !== 'MENUNGGU') { P_.poller.stop(); P_.chat.akhiri(x.status === 'SELESAI' ? 'Konsultasi telah diselesaikan dokter. Tautan ini tidak berlaku lagi.' : 'Masa berlaku tautan berakhir.'); dot('off', 'Konsultasi berakhir'); }
      } catch (e) { dot('wait', 'Menyambungkan ulang\u2026'); throw e; }
    });
  }
  /** Sesi di server hanya disimpan beberapa jam; bila hilang, masuk ulang otomatis dengan tanggal lahir yang sama. */
  async function withSesi(fn) {
    try { return await fn(); }
    catch (e) { if (e && e.code === 'SESI' && P_.dob) { await masuk(true); return await fn(); } if (e && e.code === 'SELESAI') { P_.chat && P_.chat.akhiri('Konsultasi telah diselesaikan dokter. Tautan ini tidak berlaku lagi.'); P_.poller && P_.poller.stop(); } throw e; }
  }
  gate('');
}

/*@@FILE 08_konsul_staf.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Konsultasi online \u2014 sisi staf (admisi & dokter) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const KS = { tab: 'aktif', list: null, poller: null, badge: null };
const bolehKonsul = () => isKelola() || (S.user && S.user.peran === 'DOKTER');
const isDokter = () => S.user && S.user.peran === 'DOKTER';

function pasangBadgeKonsul() {
  if (KS.badge) return;
  const cek = async () => {
    if (!S.ready || document.hidden || !(isDokter() || isSuper())) return;
    try { const l = await call('kons.daftar', {}); const n = l.reduce((a, k) => a + k.belum_dibaca, 0); const c = $('#cnt_konsul'); if (c) { c.textContent = n || ''; c.classList.toggle('hide', !n); } KS.list = l; } catch (e) { /* senyap */ }
  };
  KS.badge = setInterval(cek, 45000); setTimeout(cek, 1500);
}

VIEWS.konsul = function (v, arg) { return arg ? chatStaf(v, arg) : daftarKonsul(v); };
async function daftarKonsul(v) {
  document.body.classList.remove('in-chat');
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Konsultasi Online</h1><p>${isKelola() ? 'Daftarkan pasien ke chat konsultasi dokter, lalu kirim tautannya lewat WhatsApp.' : 'Percakapan konsultasi pasien Anda.'}</p></div>${isKelola() ? html`<button class="nx-btn primary" data-act="ko.baru"><i class="bi bi-chat-dots"></i> Daftarkan Konsultasi</button>` : ''}</div><div id="koBody">${skel(3, 80)}</div>`);
  try { KS.list = await call('kons.daftar', {}); if (S.route.indexOf('/konsul') !== 0) return; gambarKonsul(); } catch (e) { galat(e); put('#koBody', kosong('bi-wifi-off', 'Gagal memuat', e.message)); }
  if (KS.poller) KS.poller.stop();
  KS.poller = buatPoller(async () => { if (S.route !== '/konsul') { KS.poller.stop(); return; } const l = await call('kons.daftar', {}); const a = JSON.stringify(l.map(x => [x.kons_id, x.status, x.belum_dibaca, x.jml_pesan])), b = JSON.stringify((KS.list || []).map(x => [x.kons_id, x.status, x.belum_dibaca, x.jml_pesan])); if (a !== b) { KS.list = l; gambarKonsul(); } });
}
function gambarKonsul() {
  const b = $('#koBody'); if (!b) return;
  const aktif = KS.list.filter(k => k.status === 'MENUNGGU' || k.status === 'BERLANGSUNG'), riw = KS.list.filter(k => !(k.status === 'MENUNGGU' || k.status === 'BERLANGSUNG')), l = KS.tab === 'aktif' ? aktif : riw;
  const kartu = k => html`<div class="nx-visit-card ${k.belum_dibaca ? 'now' : ''}"><div class="row-between" style="align-items:flex-start"><div class="grow"><div class="fw7 t-body-lg truncate">${k.pasien_nama}</div><div class="t-sm muted">${k.no_rm} \u2022 ${k.dokter_nama}</div></div>${badgeK(k.status)}</div>
    <div class="t-sm mt8">${k.bertarif ? html`<span class="nx-badge info nodot"><i class="bi bi-receipt"></i> ${rp(k.invoice.total)} \u2022 ${k.invoice.status_bayar === 'LUNAS' ? 'Lunas' : 'Belum dibayar'}</span>` : html`<span class="nx-badge nodot">Gratis</span>`}</div>
    ${k.keluhan ? html`<div class="t-sm mt8 clamp2"><i class="bi bi-chat-quote ink-p"></i> ${k.keluhan}</div>` : ''}
    <div class="t-sm muted mt8">${k.status === 'MENUNGGU' ? 'Dibuat ' + waktuS(k.dibuat) + ' \u2022 pasien belum membuka tautan \u2022 berlaku s/d ' + waktuS(k.kedaluwarsa) : (k.status === 'BERLANGSUNG' ? 'Pasien bergabung ' + waktuS(k.dibuka_pasien_at) + ' \u2022 berlaku s/d ' + waktuS(k.kedaluwarsa) : 'Berakhir ' + waktuS(k.selesai_at))}</div>
    ${k.status === 'SELESAI' && k.ringkasan ? html`<div class="nx-mini"><div class="t-cap">Ringkasan dokter</div><div class="t-sm">${k.ringkasan}</div></div>` : ''}
    <div class="wrap-gap mt12">${(isDokter() || isSuper()) ? html`<button class="nx-btn primary grow" data-act="ko.buka" data-id="${k.kons_id}"><i class="bi bi-chat-dots"></i> ${k.status === 'SELESAI' || k.status === 'KEDALUWARSA' ? 'Lihat percakapan' : 'Buka chat'}${k.belum_dibaca ? html` <span class="nx-badge bad nodot">${k.belum_dibaca} baru</span>` : ''}</button>` : ''}
    ${isKelola() && (k.status === 'MENUNGGU' || k.status === 'BERLANGSUNG') ? html`<button class="nx-btn secondary" data-act="ko.ulang" data-id="${k.kons_id}"><i class="bi bi-link-45deg"></i> Kirim / buat ulang tautan</button>` : ''}</div></div>`;
  put(b, html`<div class="nx-seg mb16"><button class="${KS.tab === 'aktif' ? 'on' : ''}" data-act="ko.tab" data-v="aktif">Aktif <small>${aktif.length}</small></button><button class="${KS.tab === 'riwayat' ? 'on' : ''}" data-act="ko.tab" data-v="riwayat">Riwayat <small>${riw.length}</small></button></div>
    ${l.length ? l.map(kartu) : html`<div class="nx-card">${kosong('bi-chat-square-dots', KS.tab === 'aktif' ? 'Tidak ada konsultasi aktif' : 'Belum ada riwayat', isKelola() ? 'Daftarkan pasien untuk memulai konsultasi dengan dokter.' : 'Konsultasi yang didaftarkan admisi akan muncul di sini.')}</div>`}`);
}
ACT['ko.tab'] = t => { KS.tab = t.dataset.v; gambarKonsul(); };
ACT['ko.buka'] = t => go('/konsul/' + t.dataset.id);
ACT['ko.baru'] = () => {
  const dokter = S.staff.filter(s => s.peran === 'DOKTER');
  if (!dokter.length) return toast('Belum ada akun dokter aktif.', 'warn');
  MD.open('mdl', { title: 'Daftarkan Konsultasi', body: html`
    ${blokPasien('koP', 'dlKo', null, false)}
    <div class="nx-field"><label class="nx-lab" for="koD"><span>Dokter <span class="req">*</span></span></label><select id="koD" class="nx-sel">${dokter.map(d => html`<option value="${d.user_id}">${d.nama}</option>`)}</select></div>
    <div class="nx-field"><label class="nx-lab" for="koT"><span>Biaya konsultasi <span class="req">*</span></span></label><select id="koT" class="nx-sel"><option value="" disabled selected>Pilih biaya\u2026</option><option value="gratis">Gratis (tanpa tagihan)</option>${[['Tarif konsultasi', S.tarif.filter(x => String(x.kategori).toLowerCase() === 'konsultasi')], ['Tarif lainnya', S.tarif.filter(x => String(x.kategori).toLowerCase() !== 'konsultasi')]].filter(g => g[1].length).map(g => html`<optgroup label="${g[0]}">${g[1].map(x => html`<option value="${x.tarif_id}">${x.nama_layanan} \u2014 ${rp(x.harga)}</option>`)}</optgroup>`)}</select><div class="nx-help">Bila bertarif, invoice langsung terbit saat didaftarkan dan muncul di menu Tagihan.</div></div>
    ${medan('koK', 'Keluhan singkat', { ta: 1, h: 72, opt: 1, max: 300, ph: 'mis. Nyeri dada ringan sejak pagi' })}
    <div class="nx-note"><i class="bi bi-shield-lock"></i> Pasien membuka tautan dan memverifikasi dengan tanggal lahir. Tautan berlaku ${S.cfg.konsultasi_jam || 24} jam atau sampai dokter menyelesaikan percakapan.</div>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="ko.simpan"><i class="bi bi-link-45deg"></i> Buat Tautan</button>` });
};
ACT['ko.simpan'] = async btn => {
  bersihGalat($('#mdl'));
  const tf = val('koT'); if (!tf) return bad('koT', 'Pilih biaya konsultasi (atau Gratis).');
  let ps; try { ps = await ambilPasien(btn, 'koP'); } catch (e) { return galat(e); }
  if (!ps) return;
  try { const r = await denganSibuk(btn, () => call('kons.buat', { pasien_id: ps.pasien_id, dokter_id: val('koD') || $('#koD').value, keluhan: val('koK'), tarif_id: tf === 'gratis' ? '' : tf })); MD.close('mdl'); KS.list = null; tampilTautan(r, true); if (S.route === '/konsul') render(true); } catch (e) { galat(e); }
};
ACT['ko.ulang'] = async t => {
  if (!await konfirmasi({ title: 'Kirim / buat ulang tautan', msg: 'Tautan baru dibuat dan tautan lama langsung tidak berlaku. Masa berlaku dihitung ulang. Lanjutkan?', ok: 'Buat tautan baru' })) return;
  try { const r = await call('kons.ulang', { kons_id: t.dataset.id }); tampilTautan(r, false); } catch (e) { galat(e); }
};
function tampilTautan(r, baru) {
  const berlaku = (() => { const d = new Date(Date.now() + r.berlaku_jam * 3600000); return d.getDate() + ' ' + BLN[d.getMonth()] + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ' WIB'; })();
  const teks = isiTemplate(S.cfg.wa_template_konsultasi || 'Yth. {nama}, silakan konsultasi dengan {dokter}: {link}', { nama: r.pasien.nama, dokter: r.dokter_nama, link: r.tautan, berlaku: berlaku, klinik: S.cfg.nama_klinik });
  ACT['ko.salin'] = () => { const i = $('#koLink'); try { navigator.clipboard.writeText(i.value).then(() => toast('Tautan disalin.')).catch(() => { i.select(); document.execCommand('copy'); toast('Tautan disalin.'); }); } catch (e) { i.select(); try { document.execCommand('copy'); toast('Tautan disalin.'); } catch (x) { toast('Salin manual dari kotak.', 'warn'); } } };
  MD.open('mdl2', { title: baru ? 'Konsultasi terdaftar' : 'Tautan baru', body: html`
    <div class="nx-alert ok mb12"><i class="bi bi-check-circle-fill"></i><div>${baru ? 'Pendaftaran berhasil.' : 'Tautan lama sudah tidak berlaku.'} ${r.konsultasi && r.konsultasi.bertarif ? html`Invoice <b>${rp(r.konsultasi.invoice.total)}</b> (${r.konsultasi.invoice.no_invoice}) sudah terbit di menu Tagihan. ` : ''}Kirim tautan ini ke <b>${r.pasien.nama}</b>. Berlaku hingga <b>${berlaku}</b> atau sampai dokter menyelesaikan percakapan.</div></div>
    <label class="nx-lab" for="koLink">Tautan konsultasi</label><div class="kc-linkbox"><input id="koLink" class="nx-in" readonly value="${r.tautan}" onfocus="this.select()"><button class="nx-btn secondary" data-act="ko.salin"><i class="bi bi-clipboard"></i> Salin</button></div>
    ${S.cfg.konsultasi_url ? '' : html`<div class="nx-alert warn mt12"><i class="bi bi-exclamation-triangle-fill"></i><div>Alamat halaman Blogger belum diatur \u2014 tautan memakai alamat Apps Script. Atur di Master Data \u2192 Klinik.</div></div>`}
    <label class="nx-lab mt16" for="koMsg">Pesan WhatsApp</label><textarea id="koMsg" class="nx-ta" style="min-height:130px" data-in="ko.msg">${teks}</textarea>
    <div class="nx-note mt12"><i class="bi bi-info-circle"></i> Kode ini hanya ditampilkan sekarang. Bila hilang, gunakan \u201cKirim / buat ulang tautan\u201d.</div>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Tutup</button><a class="nx-btn wa" id="koWa" data-native="1" target="_blank" rel="noopener" href="${waUrl(r.pasien.no_wa, teks)}"><i class="bi bi-whatsapp"></i> Kirim via WhatsApp</a>`, static: false });
  KS.waNo = r.pasien.no_wa;
};
INP['ko.msg'] = el => { const a = $('#koWa'); if (a) a.href = waUrl(KS.waNo, el.value); };

// \u2500\u2500 Chat dokter \u2500\u2500
async function chatStaf(v, id) {
  if (KS.poller) { KS.poller.stop(); KS.poller = null; }
  document.body.classList.add('in-chat');
  put(v, skel(2, 120));
  let d;
  try { d = await call('kons.buka', { kons_id: id }); } catch (e) { galat(e); return put('#view', kosong('bi-lock', 'Percakapan tidak dapat dibuka', e.message, html`<button class="nx-btn secondary" data-act="nav" data-r="konsul">Kembali</button>`)); }
  if (S.route !== '/konsul/' + id) return;
  const k = d.konsultasi;
  if (d.tanpaIsi) return put(v, html`<button class="nx-btn ghost sm mb12" data-act="nav" data-r="konsul"><i class="bi bi-arrow-left"></i> Konsultasi</button><div class="nx-card">${kosong('bi-shield-lock', 'Isi percakapan bersifat rahasia', 'Admisi hanya dapat melihat status konsultasi. Isi chat hanya untuk dokter yang bertugas dan pemilik klinik.')}</div>`);
  const mine = isDokter() && k.dokter_id === S.user.user_id;
  put(v, html`<div class="row-between mb12"><button class="nx-btn ghost sm" data-act="nav" data-r="konsul"><i class="bi bi-arrow-left"></i> Konsultasi</button><div class="wrap-gap"><button class="nx-btn secondary sm" data-act="ps.rekam" data-id="${k.pasien_id}"><i class="bi bi-journal-medical"></i> Rekam medis</button>${mine && (k.status === 'MENUNGGU' || k.status === 'BERLANGSUNG') ? html`<button class="nx-btn secondary sm" id="koRx" data-act="ko.resep" data-id="${k.kons_id}"><i class="bi bi-file-earmark-medical"></i> Resep</button><button class="nx-btn secondary sm" id="koSr" data-act="surat.baru" data-kons="${k.kons_id}" data-pid="${k.pasien_id}"><i class="bi bi-file-earmark-medical"></i> Surat sakit</button>` : ''}${mine ? html`<button class="nx-btn danger sm" id="koSel" data-act="ko.selesai" data-id="${k.kons_id}"><i class="bi bi-check2-circle"></i> Selesaikan</button>` : ''}</div></div>
    <div class="nx-card pad-sm mb12"><div class="row-between"><div><div class="fw7">${k.pasien_nama} <span class="muted t-sm">${k.no_rm}</span></div>${k.keluhan ? html`<div class="t-sm muted">${k.keluhan}</div>` : ''}</div><span id="koBadge">${badgeK(k.status)}</span></div></div>
    <div class="kc-staff" id="koChat"></div>`);
  const aktif = k.status === 'MENUNGGU' || k.status === 'BERLANGSUNG';
  const chat = buatChat($('#koChat'), { me: 'DOKTER', aktif: aktif && mine, fotoFn: pid => call('kons.foto', { kons_id: id, pesan_id: pid }), resepFn: rid => call('resep.pdf', { resep_id: rid }), suratFn: sid => call('surat.pdf', { surat_id: sid }), kirimFn: pl => call('kons.kirim', { kons_id: id, teks: pl.teks, foto: pl.foto || '' }), onKirim: () => KS.poller && KS.poller.ping(), onKetik: () => KS.poller && KS.poller.aktif() });
  chat.masuk(d.pesan);
  const akhir = st => { chat.akhiri(st === 'SELESAI' ? 'Konsultasi telah diselesaikan. Tautan pasien sudah kedaluwarsa.' : (st === 'KEDALUWARSA' ? 'Masa berlaku tautan berakhir.' : 'Mode lihat saja.')); put('#koBadge', badgeK(st)); const rx = $('#koRx'); if (rx) rx.remove(); const sr = $('#koSr'); if (sr) sr.remove(); const b = $('#koSel'); if (b) b.remove(); };
  if (!aktif) akhir(k.status); else if (!mine) chat.akhiri('Mode lihat saja \u2014 hanya dokter yang bertugas yang dapat membalas.');
  KS.ver = d.ver; KS.chat = chat;
  KS.poller = buatPoller(async () => {
    if (S.route !== '/konsul/' + id) { KS.poller.stop(); document.body.classList.remove('in-chat'); return; }
    const x = await call('kons.buka', { kons_id: id, ver: KS.ver, after: chat.maxSeq() }); if (x.tidakBerubah) return; KS.ver = x.ver;
    if (chat.masuk(x.pesan)) KS.poller.aktif(); put('#koBadge', badgeK(x.status)); if (x.status !== 'MENUNGGU' && x.status !== 'BERLANGSUNG' && chat.aktif()) { KS.poller.stop(); akhir(x.status); }
  });
  const ukur = () => { const el = $('#koChat'); if (!el) return window.removeEventListener('resize', ukur); if (window.innerWidth >= 1024) { el.style.height = ''; return; } const r = el.getBoundingClientRect(); el.style.height = Math.max(300, window.innerHeight - r.top - 10) + 'px'; };
  window.scrollTo(0, 0); ukur(); setTimeout(ukur, 150); window.addEventListener('resize', ukur);
  setTimeout(() => { const m = $('.kc-msgs', $('#koChat')); if (m) m.scrollTop = m.scrollHeight; }, 50);
}
ACT['ko.selesai'] = async t => {
  const ring = await konfirmasi({ title: 'Selesaikan konsultasi', msg: 'Percakapan ditutup dan tautan pasien langsung kedaluwarsa. Tulis ringkasan singkat untuk rekam medis.', ok: 'Selesaikan konsultasi', danger: true, input: { label: 'Ringkasan konsultasi (masuk ke rekam medis)', ph: 'Keluhan, kesimpulan, anjuran', min: 3 } });
  if (!ring) return;
  try { await call('kons.selesai', { kons_id: t.dataset.id, ringkasan: ring }); toast('Konsultasi diselesaikan. Tautan pasien kedaluwarsa.'); if (KS.poller) KS.poller.stop(); render(true); } catch (e) { galat(e); }
};

// \u2500\u2500 Resep dari konsultasi \u2500\u2500
function barisResep(i) {
  return html`<div class="rx-row" data-rx="${i}"><div class="row-between mb8"><b class="t-sm">Obat #<span class="rxn">${i + 1}</span></b><button type="button" class="nx-btn ghost sm" data-act="ko.rx.hapus" aria-label="Hapus obat"><i class="bi bi-trash"></i></button></div>
    <div class="nx-field"><input class="nx-in" data-f="nama_obat" maxlength="150" placeholder="Nama obat & kekuatan, mis. Paracetamol 500 mg" aria-label="Nama obat"></div>
    <div class="nx-grid2" style="gap:8px"><input class="nx-in" data-f="dosis" maxlength="80" placeholder="Dosis" aria-label="Dosis"><input class="nx-in" data-f="jumlah" maxlength="50" placeholder="Jumlah, mis. 10 tablet" aria-label="Jumlah"></div>
    <div class="mt8">${apHtml(null, 'k' + i, 'ko')}</div>
    <input class="nx-in mt8" data-f="instruksi" maxlength="200" placeholder="Instruksi tambahan (opsional)" aria-label="Instruksi"></div>`;
}
ACT['ko.resep'] = t => {
  KS.rxId = t.dataset.id;
  MD.open('mdl', { title: 'Resep untuk pasien', size: 'lg', body: html`<div class="nx-alert info mb12"><i class="bi bi-info-circle-fill"></i><div>Resep dikirim ke chat sebagai PDF yang dapat diunduh pasien, dan tersimpan di rekam medis.</div></div><div id="rxList">${barisResep(0)}</div>
      <button type="button" class="nx-btn secondary sm mb12" data-act="ko.rx.tambah"><i class="bi bi-plus-lg"></i> Tambah obat</button>
      <div class="nx-field"><label class="nx-lab" for="rxCat">Catatan dokter <span class="opt">opsional</span></label><textarea id="rxCat" class="nx-in" rows="2" maxlength="500" placeholder="mis. Minum obat bila demam; kontrol bila tidak membaik 3 hari"></textarea></div>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" id="rxKirim" data-act="ko.rx.kirim"><i class="bi bi-send"></i> Buat PDF & kirim ke pasien</button>` });
};
ACT['ko.rx.tambah'] = () => { const l = $('#rxList'); if (!l || l.children.length >= 20) return; const d = document.createElement('div'); d.innerHTML = barisResep(l.children.length).s; l.appendChild(d.firstElementChild); nomorResep(); };
ACT['ko.rx.hapus'] = t => { const l = $('#rxList'); if (!l || l.children.length <= 1) return; t.closest('.rx-row').remove(); nomorResep(); };
function nomorResep() { $$('#rxList .rx-row').forEach((r, i) => { $('.rxn', r).textContent = i + 1; }); }
ACT['ko.rx.kirim'] = async t => {
  const items = $$('#rxList .rx-row').map(r => { const o = {}; $$('[data-f]', r).forEach(x => { o[x.dataset.f] = x.value.trim(); }); const ap = $('.ap', r); o.aturan_pakai = ap ? apNilai(ap) : ''; return o; }).filter(o => o.nama_obat);
  if (!items.length) return toast('Isi minimal satu obat.', 'err');
  const kosongAturan = items.findIndex(o => !o.aturan_pakai); if (kosongAturan >= 0) return toast('Aturan pakai obat #' + (kosongAturan + 1) + ' belum lengkap: isi berapa kali sehari dan takaran (atau pilih Tulis bebas).', 'err');
  t.disabled = true; t.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Membuat PDF\u2026';
  try {
    const r = await call('kons.resep', { kons_id: KS.rxId, items: items, catatan: ($('#rxCat') || {}).value || '' });
    if (KS.chat) KS.chat.masuk([r.pesan]); if (KS.poller) KS.poller.aktif();
    MD.close('mdl'); toast('Resep ' + r.no_resep + ' terkirim ke pasien.');
  } catch (e) { galat(e); t.disabled = false; t.innerHTML = '<i class="bi bi-send"></i> Buat PDF & kirim ke pasien'; }
};

function kosTambahPesan(m) { if (KS.chat) KS.chat.masuk([m]); if (KS.poller) KS.poller.aktif(); }

/*@@FILE 09_paket_surat.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Paket tindakan, stok BHP, Surat sakit \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

// \u2500\u2500 Master: Paket tindakan \u2500\u2500
function tabPaket(el) {
  const rows = (M.d.paket || []).filter(x => !M.q || (x.nama + x.kode).toLowerCase().indexOf(M.q) >= 0);
  put(el, html`<div class="nx-toolbar"><div class="nx-in-icon"><i class="bi bi-search"></i><input class="nx-in" placeholder="Cari paket\u2026" value="${M.q}" data-in="m.qp" aria-label="Cari"></div><button class="nx-btn primary" data-act="pk.form"><i class="bi bi-plus-lg"></i> Paket Baru</button></div>
  <div class="nx-card pad0">${rows.length ? html`<div class="nx-tbl-wrap"><table class="nx-tbl"><thead><tr><th>Kode</th><th>Paket</th><th>Isi</th><th class="r">Harga paket</th><th>Status</th><th></th></tr></thead><tbody>${rows.map(x => html`<tr style="${x.aktif ? '' : 'opacity:.55'}"><td class="muted">${x.kode}</td><td class="fw6">${x.nama}</td><td class="t-sm">${x.items.map(i => i.nama + ' \u00d7' + i.qty + (i.jenis === 'BHP' ? ' (BHP)' : '')).join(', ')}</td><td class="r num">${rp(x.harga)}</td><td>${x.aktif ? html`<span class="nx-badge ok">Aktif</span>` : html`<span class="nx-badge">Nonaktif</span>`}</td><td class="r"><button class="nx-btn ghost sm" data-act="pk.form" data-id="${x.paket_id}"><i class="bi bi-pencil"></i></button><button class="nx-btn ghost sm" style="color:var(--err-ink)" data-act="m.hapus" data-j="paket" data-id="${x.paket_id}" title="Hapus" aria-label="Hapus"><i class="bi bi-trash"></i></button></td></tr>`)}</tbody></table></div>` : kosong('bi-box2-heart', 'Belum ada paket', 'Buat paket (tindakan + BHP) agar admisi cukup memilih paket saat mendaftarkan kunjungan.')}</div>
  <div class="nx-note mt12"><i class="bi bi-info-circle"></i> Paket dipilih saat membuat jadwal. Invoice paket langsung terbit saat pendaftaran, petugas tidak menambah tindakan, dan BHP paket hanya mengurangi stok.</div>`);
}
INP['m.qp'] = debounce(el => { M.q = el.value.toLowerCase(); tabPaket($('#mTab')); const q = $('#mTab input'); if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); } }, 200);
const PK = { id: '', items: [] };
function isiItemPaket() {
  const el = $('#pkItems'); if (!el) return;
  put(el, PK.items.length ? raw(PK.items.map((x, i) => html`<div class="nx-item"><div class="grow"><div class="nm">${x.nama}</div><div class="t-sm muted">${x.jenis === 'BHP' ? 'BHP' + (x.satuan ? ' \u2022 ' + x.satuan : '') : 'Tindakan'}</div></div><div class="nx-stepper"><button type="button" data-act="pk.qty" data-i="${i}" data-d="-1" aria-label="Kurangi">\u2212</button><b class="num">${x.qty}</b><button type="button" class="plus" data-act="pk.qty" data-i="${i}" data-d="1" aria-label="Tambah">+</button></div></div>`.s).join('')) : html`<div class="muted t-sm">Belum ada isi paket.</div>`);
}
ACT['pk.form'] = t => {
  const x = t.dataset.id ? M.d.paket.find(r => r.paket_id === t.dataset.id) : null;
  PK.id = x ? x.paket_id : ''; PK.items = x ? x.items.map(i => Object.assign({}, i)) : [];
  MD.open('mdl', { title: x ? 'Ubah Paket' : 'Paket Tindakan Baru', size: 'lg', body: html`<div class="nx-grid2" style="gap:0 16px">${medan('pkNama', 'Nama paket', { v: x && x.nama, req: 1, max: 120, ph: 'mis. Paket Rawat Luka Modern' })}${medan('pkHarga', 'Harga paket (Rp)', { v: x ? x.harga : '', inputmode: 'numeric', req: 1 })}</div>
    ${medan('pkKode', 'Kode', { v: x && x.kode, opt: 1, ph: 'Otomatis bila kosong', max: 20 })}
    <div class="nx-field"><label class="nx-lab">Isi paket</label><div id="pkItems"></div></div>
    <div class="nx-grid2" style="gap:0 16px"><div class="nx-field"><label class="nx-lab" for="pkT">Tambah tindakan</label><div class="row-gap"><select id="pkT" class="nx-sel">${S.tarif.map(m => html`<option value="${m.tarif_id}">${m.nama_layanan}</option>`)}</select><button type="button" class="nx-btn secondary sm" data-act="pk.add" data-j="TINDAKAN">Tambah</button></div></div>
    <div class="nx-field"><label class="nx-lab" for="pkB">Tambah BHP</label><div class="row-gap"><select id="pkB" class="nx-sel">${S.bhp.map(m => html`<option value="${m.bhp_id}">${m.nama}</option>`)}</select><button type="button" class="nx-btn secondary sm" data-act="pk.add" data-j="BHP">Tambah</button></div></div></div>
    <label class="nx-check"><input type="checkbox" id="pkAktif" ${!x || x.aktif ? 'checked' : ''}><span>Aktif (dapat dipilih saat pendaftaran)</span></label>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="pk.simpan">Simpan</button>`, onShown: isiItemPaket });
  isiItemPaket();
};
ACT['pk.add'] = t => {
  const isT = t.dataset.j === 'TINDAKAN', id = val(isT ? 'pkT' : 'pkB'); if (!id) return;
  const ada = PK.items.find(i => i.jenis === t.dataset.j && i.ref_id === id);
  if (ada) ada.qty = Math.min(99, ada.qty + 1);
  else { const m = (isT ? S.tarif : S.bhp).find(r => r[isT ? 'tarif_id' : 'bhp_id'] === id); PK.items.push({ jenis: t.dataset.j, ref_id: id, nama: isT ? m.nama_layanan : m.nama, satuan: isT ? '' : m.satuan, qty: 1 }); }
  isiItemPaket();
};
ACT['pk.qty'] = t => { const it = PK.items[+t.dataset.i]; it.qty += +t.dataset.d; if (it.qty < 1) PK.items.splice(+t.dataset.i, 1); else if (it.qty > 99) it.qty = 99; isiItemPaket(); };
ACT['pk.simpan'] = async btn => {
  bersihGalat($('#mdl')); const h = num(val('pkHarga')); let ok = true;
  if (val('pkNama').length < 3) ok = bad('pkNama', 'Minimal 3 karakter.'); if (val('pkHarga') === '' || h < 0) ok = bad('pkHarga', 'Harga tidak valid.'); if (!ok) return;
  if (!PK.items.some(i => i.jenis === 'TINDAKAN')) return toast('Paket harus berisi minimal satu tindakan.', 'warn');
  try {
    const r = await denganSibuk(btn, () => call('paket.simpan', { paket_id: PK.id, kode: val('pkKode'), nama: val('pkNama'), harga: h, aktif: $('#pkAktif').checked, items: PK.items.map(i => ({ jenis: i.jenis, ref_id: i.ref_id, qty: i.qty })) }));
    const i = M.d.paket.findIndex(x => x.paket_id === r.paket_id); if (i >= 0) M.d.paket[i] = r; else M.d.paket.push(r);
    segarkanLokal(); MD.close('mdl'); tabPaket($('#mTab')); toast('Paket tersimpan.');
  } catch (e) { galat(e); }
};

// \u2500\u2500 Master: stok BHP \u2500\u2500
ACT['bhp.stokForm'] = t => {
  const x = M.d.bhp.find(r => r.bhp_id === t.dataset.id);
  MD.open('mdl', { title: 'Stok \u2014 ' + x.nama, size: 'sm', body: html`<div class="nx-note mb12"><i class="bi bi-box-seam"></i> Stok saat ini: <b>${x.stok} ${x.satuan}</b></div>
    <div class="nx-field"><label class="nx-lab" for="skMode">Tindakan</label><select id="skMode" class="nx-sel"><option value="tambah">Tambah stok masuk</option><option value="koreksi">Koreksi stok (hasil hitung fisik)</option></select></div>
    ${medan('skJml', 'Jumlah', { inputmode: 'numeric', req: 1, help: 'Tambah: jumlah yang masuk. Koreksi: stok akhir yang benar.' })}${medan('skAlasan', 'Keterangan', { opt: 1, max: 150, ph: 'mis. pembelian dari supplier / hasil opname' })}
    <div class="mt16 t-sm muted">Riwayat terakhir: <span id="skLog">memuat\u2026</span></div>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="bhp.stokSimpan" data-id="${x.bhp_id}">Simpan</button>` });
  call('bhp.log', { bhp_id: x.bhp_id }).then(l => { const e = $('#skLog'); if (e) e.textContent = l.slice(0, 3).map(r => (r.delta > 0 ? '+' : '') + r.delta + ' (' + String(r.waktu).slice(0, 10) + ')').join(' \u2022 ') || 'belum ada'; }).catch(() => { });
};
ACT['bhp.stokSimpan'] = async btn => {
  bersihGalat($('#mdl')); const mode = val('skMode'), j = num(val('skJml'));
  if (val('skJml') === '' || j < 0 || (mode === 'tambah' && j <= 0)) return bad('skJml', 'Jumlah tidak valid.');
  if (mode === 'koreksi' && val('skAlasan').length < 3) return bad('skAlasan', 'Alasan koreksi wajib diisi.');
  try {
    const r = await denganSibuk(btn, () => call('bhp.stok', { bhp_id: btn.dataset.id, mode: mode, jumlah: j, alasan: val('skAlasan') }));
    const x = M.d.bhp.find(b => b.bhp_id === btn.dataset.id); x.stok = r.stok; segarkanLokal(); MD.close('mdl'); tabMasterItem($('#mTab'), 'bhp'); toast('Stok diperbarui: ' + r.stok);
  } catch (e) { galat(e); }
};

// \u2500\u2500 Surat sakit (dokter) \u2500\u2500
const SR = { pid: '', kons: '', soap: '', done: null };
ACT['surat.baru'] = t => {
  SR.pid = t.dataset.pid || ''; SR.kons = t.dataset.kons || ''; SR.soap = t.dataset.soap || ''; SR.done = null;
  const p = pasienById(SR.pid), n = [1, 2, 3, 4, 5, 6, 7, 10, 14];
  MD.open('mdl', { title: 'Surat Keterangan Sakit', size: 'sm', body: html`${p ? html`<div class="nx-note mb12"><i class="bi bi-person-fill"></i> <b>${p.nama}</b> \u2022 ${p.no_rm}</div>` : ''}
    <div class="nx-field"><label class="nx-lab" for="srHari">Lama istirahat</label><select id="srHari" class="nx-sel">${n.map(d => html`<option value="${d}" ${d === 3 ? 'selected' : ''}>${d} hari</option>`)}</select></div>
    ${medan('srMulai', 'Mulai tanggal', { type: 'date', v: today(), req: 1 })}
    ${medan('srKet', 'Keterangan (opsional)', { ta: 1, h: 64, max: 300, opt: 1, help: 'Tampil di surat. Diagnosis hanya dicantumkan bila pasien berkenan.' })}
    <div class="nx-note"><i class="bi bi-pen"></i> Surat dicetak PDF dengan nama, SIP, dan tanda tangan Anda${SR.kons ? '; langsung muncul di chat pasien untuk diunduh' : ''}.</div>`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="surat.simpan"><i class="bi bi-file-earmark-medical"></i> Terbitkan</button>` });
};
ACT['surat.simpan'] = async btn => {
  bersihGalat($('#mdl')); if (!val('srMulai')) return bad('srMulai', 'Tanggal wajib diisi.');
  try {
    const r = await denganSibuk(btn, () => call('suratsakit.buat', { pasien_id: SR.pid, kons_id: SR.kons, soap_id: SR.soap, hari: +val('srHari'), tgl_mulai: val('srMulai'), keterangan: val('srKet') }));
    MD.close('mdl'); toast('Surat sakit ' + r.surat.no_surat + ' diterbitkan.');
    if (r.pesan && typeof kosTambahPesan === 'function') kosTambahPesan(r.pesan);
    lihatPdf('Surat Sakit', 'surat.pdf', { surat_id: r.surat.surat_id }, bisaKirimResep() ? html`<button class="nx-btn wa" data-act="surat.wa" data-id="${r.surat.surat_id}" data-pid="${SR.pid}"><i class="bi bi-whatsapp"></i> Kirim WA</button>` : '');
  } catch (e) { galat(e); }
};
ACT['surat.lihat'] = t => lihatPdf('Surat Sakit', 'surat.pdf', { surat_id: t.dataset.id }, bisaKirimResep() ? html`<button class="nx-btn wa" data-act="surat.wa" data-id="${t.dataset.id}" data-pid="${t.dataset.pid}"><i class="bi bi-whatsapp"></i> Kirim WA</button>` : '');
ACT['surat.wa'] = t => { const p = pasienById(t.dataset.pid); if (!p) return toast('Data pasien tidak ditemukan.', 'err'); bagikanWa('surat', t.dataset.id, p, {}); };

// \u2500\u2500 Hapus permanen (Superadmin) \u2500\u2500
const HAPUS = {
  user: { arr: () => M.d.users, k: 'user_id', aksi: 'user.hapus', nama: x => x.nama, judul: 'Hapus akun staf', redraw: () => gambarMaster() },
  tarif: { arr: () => M.d.tarif, k: 'tarif_id', aksi: 'tarif.hapus', nama: x => x.nama_layanan, judul: 'Hapus tarif', redraw: () => tabMasterItem($('#mTab'), 'tarif') },
  bhp: { arr: () => M.d.bhp, k: 'bhp_id', aksi: 'bhp.hapus', nama: x => x.nama, judul: 'Hapus BHP', redraw: () => tabMasterItem($('#mTab'), 'bhp') },
  paket: { arr: () => M.d.paket, k: 'paket_id', aksi: 'paket.hapus', nama: x => x.nama, judul: 'Hapus paket', redraw: () => tabPaket($('#mTab')) }
};
ACT['m.hapus'] = async t => {
  const h = HAPUS[t.dataset.j], arr = h.arr(), i = arr.findIndex(x => x[h.k] === t.dataset.id); if (i < 0) return;
  if (!await konfirmasi({ title: h.judul, msg: '\u201c' + h.nama(arr[i]) + '\u201d akan dihapus permanen dan tidak dapat dikembalikan. Data yang sudah dipakai pada catatan kunjungan tidak bisa dihapus (gunakan Nonaktifkan).', ok: 'Hapus permanen', danger: true })) return;
  try { await call(h.aksi, { [h.k]: t.dataset.id }); arr.splice(i, 1); segarkanLokal(); h.redraw(); toast('Data dihapus.', 'warn'); } catch (e) { galat(e); }
};
// Jadwal & pasien
ACT['jd.hapus'] = async t => {
  const j = S.jadwal.find(x => x.jadwal_id === t.dataset.id); if (!j) return; const p = pasienById(j.pasien_id) || { nama: '(pasien)' };
  if (!await konfirmasi({ title: 'Hapus jadwal', msg: 'Jadwal ' + p.nama + ' ' + tglS(j.tanggal) + ' ' + j.jam + ' dihapus permanen. Invoice paket yang belum dibayar ikut dibatalkan. Jadwal yang sudah memiliki consent/SOAP tidak dapat dihapus (gunakan Batalkan).', ok: 'Hapus jadwal', danger: true })) return;
  try { await call('jadwal.hapus', { jadwal_id: j.jadwal_id }); S.jadwal = S.jadwal.filter(x => x.jadwal_id !== j.jadwal_id); render(true); toast('Jadwal dihapus.', 'warn'); } catch (e) { galat(e); }
};
ACT['ps.hapus'] = async t => {
  const p = pasienById(t.dataset.id); if (!p) return;
  if (!await konfirmasi({ title: 'Hapus pasien permanen', msg: p.nama + ' (' + p.no_rm + ') beserta jadwal yang belum berjalan dihapus permanen. Pasien yang sudah punya rekam medis, konsultasi, atau pembayaran tidak dapat dihapus (gunakan Nonaktifkan).', ok: 'Hapus permanen', danger: true })) return;
  try { await call('pasien.hapus', { pasien_id: p.pasien_id, permanen: true }); MD.close('mdl'); S.pasien = S.pasien.filter(x => x.pasien_id !== p.pasien_id); S.jadwal = S.jadwal.filter(x => x.pasien_id !== p.pasien_id); if (typeof P !== 'undefined') P.sel = ''; render(true); toast('Pasien dihapus.', 'warn'); } catch (e) { galat(e); }
};

/*@@FILE 10_pengeluaran.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Pengeluaran (khusus Owner) + Beli BHP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
NAV.keluar = { ic: 'bi-wallet2', t: 'Pengeluaran' };
RUTE_PERAN.keluar = 'S';
const KL = { bulan: '', d: null, nota: null };
const BLN_PENUH = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const uang = v => Number(String(v == null ? '' : v).replace(/[^\d]/g, '')) || 0;
const bulanLabel = b => { const p = b.split('-'); return BLN_PENUH[+p[1] - 1] + ' ' + p[0]; };
const geserBulan = (b, n) => { const p = b.split('-'), d = new Date(Date.UTC(+p[0], +p[1] - 1 + n, 1)); return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0'); };

VIEWS.keluar = function (v) {
  KL.bulan = KL.bulan || today().slice(0, 7);
  put(v, html`<div class="nx-page-h"><div><h1 class="t-h1">Pengeluaran</h1><p>Catat uang keluar klinik: pembelian BHP, gaji, transport, sewa, dan lainnya. Hanya terlihat oleh Owner.</p></div>
    <div class="wrap-gap"><button class="nx-btn secondary" data-act="kl.beli"><i class="bi bi-cart-plus"></i> Beli BHP</button><button class="nx-btn primary" data-act="kl.baru"><i class="bi bi-plus-lg"></i> Catat Pengeluaran</button></div></div><div id="klBody">${skel(3, 80)}</div>`);
  muatKeluar();
};
async function muatKeluar() {
  try { KL.d = await call('keluar.daftar', { bulan: KL.bulan }, { fresh: 20000 }); if (S.route === '/keluar') gambarKeluar(); }
  catch (e) { galat(e); put('#klBody', kosong('bi-wifi-off', 'Gagal memuat', e.message)); }
}
function gambarKeluar() {
  const d = KL.d, b = $('#klBody'); if (!b || !d) return; const maks = d.perKategori.length ? d.perKategori[0].jumlah : 1;
  put(b, html`<div class="row-between mb16"><div class="wrap-gap"><button class="nx-btn secondary sm icon" data-act="kl.bln" data-d="-1" aria-label="Bulan sebelumnya"><i class="bi bi-chevron-left"></i></button><b class="t-body-lg" style="min-width:150px;text-align:center">${bulanLabel(d.bulan)}</b><button class="nx-btn secondary sm icon" data-act="kl.bln" data-d="1" aria-label="Bulan berikutnya" ${d.bulan >= today().slice(0, 7) ? 'disabled' : ''}><i class="bi bi-chevron-right"></i></button></div></div>
  <div class="nx-card mb16"><div class="row-between"><div><div class="t-cap">Total pengeluaran ${bulanLabel(d.bulan)}</div><div class="t-h1 num">${rp(d.total)}</div></div><span class="nx-badge nodot">${d.rows.length} catatan</span></div>
    ${d.perKategori.length ? html`<div class="mt12">${d.perKategori.map(k => html`<div class="mb8"><div class="row-between t-sm"><span>${k.kategori}</span><b class="num">${rp(k.jumlah)}</b></div><div style="height:6px;border-radius:6px;background:var(--line,#e3e8ee);overflow:hidden"><div style="height:100%;width:${Math.max(3, Math.round(k.jumlah / maks * 100))}%;background:var(--p,#2f4a9e)"></div></div></div>`)}</div>` : ''}</div>
  ${d.rows.length ? html`<div class="nx-card pad0"><div class="nx-list">${d.rows.map(x => html`<div class="nx-row" style="align-items:flex-start;padding:12px 16px"><div class="grow"><div class="fw6">${x.uraian}</div><div class="t-sm muted">${tglS(x.tanggal)} \u2022 <span class="nx-badge nodot">${x.kategori}</span>${x.pemasok ? ' \u2022 ' + x.pemasok : ''}${x.metode ? ' \u2022 ' + x.metode : ''}</div></div>
      <div style="text-align:right"><b class="num">${rp(x.jumlah)}</b><div class="wrap-gap" style="justify-content:flex-end;margin-top:4px">${x.punya_nota ? html`<button class="nx-btn ghost sm icon" data-act="kl.nota" data-id="${x.pengeluaran_id}" aria-label="Lihat nota"><i class="bi bi-image"></i></button>` : ''}${x.dari_pembelian ? '' : html`<button class="nx-btn ghost sm icon" data-act="kl.edit" data-id="${x.pengeluaran_id}" aria-label="Ubah"><i class="bi bi-pencil"></i></button>`}<button class="nx-btn ghost sm icon" style="color:var(--err-ink)" data-act="kl.hapus" data-id="${x.pengeluaran_id}" aria-label="Hapus"><i class="bi bi-trash"></i></button></div></div></div>`)}</div></div>`
    : html`<div class="nx-card">${kosong('bi-wallet2', 'Belum ada pengeluaran', 'Catat pengeluaran pertama bulan ini.', html`<button class="nx-btn primary" data-act="kl.baru">Catat Pengeluaran</button>`)}</div>`}`);
}
ACT['kl.bln'] = t => { KL.bulan = geserBulan(KL.bulan, +t.dataset.d); KL.d = null; put('#klBody', skel(3, 80)); muatKeluar(); };

// \u2500\u2500 Form pengeluaran \u2500\u2500
const KL_NOTA = { data: '', hapus: false };
function bidangNota(ada) {
  return html`<div class="nx-field"><label class="nx-lab" for="klNota"><span>Foto nota</span><span class="opt">opsional</span></label><input type="file" id="klNota" class="nx-in" accept="image/*" data-ch="kl.notaPilih">${ada ? html`<label class="nx-check mt8"><input type="checkbox" id="klNotaDel" data-ch="kl.notaDel"><span>Hapus foto nota yang tersimpan</span></label>` : ''}<div class="nx-help" id="klNotaInfo"></div></div>`;
}
INP['kl.notaPilih'] = async el => {
  KL_NOTA.data = ''; const f = el.files[0]; if (!f) return $('#klNotaInfo').textContent = '';
  try { KL_NOTA.data = await kecilkanFoto(f); $('#klNotaInfo').textContent = 'Foto siap dikirim (' + Math.round(KL_NOTA.data.length / 1024) + ' KB).'; } catch (e) { el.value = ''; $('#klNotaInfo').textContent = ''; toast(e.message, 'err'); }
};
INP['kl.notaDel'] = el => { KL_NOTA.hapus = el.checked; };
ACT['kl.baru'] = () => formKeluar(null);
ACT['kl.edit'] = t => formKeluar(KL.d.rows.find(x => x.pengeluaran_id === t.dataset.id));
function formKeluar(x) {
  const d = KL.d || { kategori: ['Lain-lain'], metode: ['Tunai'] }; KL_NOTA.data = ''; KL_NOTA.hapus = false;
  MD.open('mdl', { title: x ? 'Ubah Pengeluaran' : 'Catat Pengeluaran', size: 'sm', body: html`
    <div class="nx-grid2" style="gap:0 16px">${medan('klTgl', 'Tanggal', { type: 'date', v: x ? x.tanggal : today(), req: 1 })}
    <div class="nx-field"><label class="nx-lab" for="klKat"><span>Kategori <span class="req">*</span></span></label><select id="klKat" class="nx-sel">${d.kategori.map(k => html`<option ${x && x.kategori === k ? 'selected' : ''}>${k}</option>`)}</select></div></div>
    ${medan('klUr', 'Uraian', { v: x ? x.uraian : '', req: 1, max: 200, ph: 'mis. Sewa ruko Oktober, Transport petugas' })}
    ${medan('klJml', 'Jumlah (Rp)', { v: x ? x.jumlah : '', inputmode: 'numeric', req: 1 })}
    <div class="nx-grid2" style="gap:0 16px">${medan('klPem', 'Dibayar kepada', { v: x ? x.pemasok : '', opt: 1, max: 100, ph: 'toko / penerima' })}
    <div class="nx-field"><label class="nx-lab" for="klMet">Metode bayar</label><select id="klMet" class="nx-sel">${d.metode.map(k => html`<option ${x && x.metode === k ? 'selected' : ''}>${k}</option>`)}</select></div></div>
    ${bidangNota(x && x.punya_nota)}`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="kl.simpan" data-id="${x ? x.pengeluaran_id : ''}"><i class="bi bi-check2"></i> Simpan</button>`,
    onShown: () => { const e = $('#klTgl'); if (e) e.max = today(); } });
}
ACT['kl.simpan'] = async btn => {
  bersihGalat($('#mdl'));
  const dta = { pengeluaran_id: btn.dataset.id, tanggal: val('klTgl'), kategori: val('klKat'), uraian: val('klUr'), jumlah: uang(val('klJml')), pemasok: val('klPem'), metode: val('klMet') };
  let ok = true;
  if (!dta.tanggal || dta.tanggal > today()) ok = bad('klTgl', 'Tanggal tidak valid.');
  if (dta.uraian.length < 3) ok = bad('klUr', 'Uraian minimal 3 karakter.');
  if (dta.jumlah < 1) ok = bad('klJml', 'Jumlah harus lebih dari 0.');
  if (!ok) return;
  if (KL_NOTA.data) dta.nota = KL_NOTA.data; else if (KL_NOTA.hapus) dta.hapus_nota = true;
  try { await denganSibuk(btn, () => call('keluar.simpan', dta)); MD.close('mdl'); KL.d = null; toast('Pengeluaran tersimpan.'); muatKeluar(); } catch (e) { galat(e); }
};
ACT['kl.hapus'] = async t => {
  const x = KL.d.rows.find(r => r.pengeluaran_id === t.dataset.id); if (!x) return;
  if (!await konfirmasi({ title: 'Hapus pengeluaran', msg: x.uraian + ' \u2014 ' + rp(x.jumlah) + '. ' + (x.dari_pembelian ? 'Stok BHP TIDAK ikut berkurang; koreksi stok di Master Data \u2192 BHP & Stok bila perlu. ' : '') + 'Tindakan ini tercatat di Audit Log.', ok: 'Hapus', danger: true })) return;
  try { await call('keluar.hapus', { pengeluaran_id: x.pengeluaran_id }); KL.d = null; toast('Pengeluaran dihapus.', 'warn'); muatKeluar(); } catch (e) { galat(e); }
};
ACT['kl.nota'] = async t => {
  try { const r = await call('keluar.nota', { pengeluaran_id: t.dataset.id }); MD.open('mdl', { title: 'Foto Nota', size: 'lg', body: html`<img src="data:${r.mime};base64,${r.base64}" alt="Foto nota" style="max-width:100%;border-radius:12px">`, footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Tutup</button>` }); } catch (e) { galat(e); }
};

// \u2500\u2500 Beli BHP: stok + harga beli + pengeluaran sekaligus \u2500\u2500
ACT['kl.beli'] = () => formBeliBhp('');
ACT['bhp.beliForm'] = t => formBeliBhp(t.dataset.id);
async function formBeliBhp(id) {
  let md; try { md = await call('master.semua', {}, { fresh: 30000 }); } catch (e) { return galat(e); }
  const l = md.bhp.filter(x => x.aktif);
  const x0 = l.find(b => b.bhp_id === id) || l[0] || { bhp_id: '__baru', harga_beli: '' }; KL_NOTA.data = ''; KL_NOTA.hapus = false; KL.bhpList = l; KL.persenDefault = Number(md.config && md.config.persen_jual_bhp) || 20;
  MD.open('mdl', { title: 'Beli BHP', size: 'sm', body: html`
    <div class="nx-field"><label class="nx-lab" for="blB"><span>BHP <span class="req">*</span></span></label><select id="blB" class="nx-sel" data-ch="kl.blPilih">${l.map(b => html`<option value="${b.bhp_id}" ${b.bhp_id === x0.bhp_id ? 'selected' : ''}>${b.nama} (stok ${b.stok} ${b.satuan})</option>`)}<option value="__baru" ${x0.bhp_id === '__baru' ? 'selected' : ''}>\uff0b BHP baru (belum ada di daftar)</option></select></div>
    <div id="blBaru" class="mb12" ${x0.bhp_id === '__baru' ? '' : 'hidden'}>
      <div class="nx-grid2" style="gap:0 16px">${medan('blNm', 'Nama BHP baru', { req: 1, max: 100, ph: 'mis. Sarung tangan steril' })}${medan('blSat', 'Satuan', { req: 1, max: 20, ph: 'box / pcs / lembar' })}</div>
      <div class="nx-grid2" style="gap:0 16px">${medan('blMin', 'Batas stok minimum', { opt: 1, inputmode: 'numeric', ph: '0' })}${medan('blPs', 'Persen jual (%)', { opt: 1, inputmode: 'numeric', ph: 'ikut default klinik' })}</div>
    </div>
    <div class="nx-grid2" style="gap:0 16px">${medan('blQty', 'Jumlah beli', { inputmode: 'numeric', req: 1, v: '' })}${medan('blHrg', 'Harga beli / satuan (Rp)', { inputmode: 'numeric', req: 1, v: x0.harga_beli || '' })}</div>
    <div class="nx-alert info mb12" id="blPrev"><i class="bi bi-calculator"></i><div></div></div>
    <div class="nx-grid2" style="gap:0 16px">${medan('blTgl', 'Tanggal', { type: 'date', v: today(), req: 1 })}
    <div class="nx-field"><label class="nx-lab" for="blMet">Metode bayar</label><select id="blMet" class="nx-sel">${['Tunai', 'Transfer', 'QRIS', 'Lainnya'].map(k => html`<option>${k}</option>`)}</select></div></div>
    ${medan('blPem', 'Dibeli dari', { opt: 1, max: 100, ph: 'apotek / distributor' })}
    ${bidangNota(false)}`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="kl.beliSimpan"><i class="bi bi-check2"></i> Simpan Pembelian</button>`,
    onShown: () => { const e = $('#blTgl'); if (e) e.max = today(); ['blQty', 'blHrg'].forEach(i => $('#' + i).addEventListener('input', prevBeli)); prevBeli(); } });
}
INP['kl.blPilih'] = el => { const baru = el.value === '__baru'; const bx = $('#blBaru'); if (bx) bx.hidden = !baru; const b = (KL.bhpList || []).find(x => x.bhp_id === el.value); if (baru) $('#blHrg').value = ''; else if (b && b.harga_beli) $('#blHrg').value = b.harga_beli; prevBeli(); };
function prevBeli() {
  const box = $('#blPrev'); if (!box) return; const baru = val('blB') === '__baru'; const b = baru ? { persen_efektif: (uang(val('blPs')) || (KL.persenDefault || 0)) } : (KL.bhpList || []).find(x => x.bhp_id === val('blB')); if (!b) return;
  const q = uang(val('blQty')), h = uang(val('blHrg')), ps = b.persen_efektif;
  const jual = h > 0 ? Math.max(500, Math.round(h * (1 + ps / 100) / 500) * 500) : 0;
  box.lastElementChild.innerHTML = 'Total pengeluaran: <b>' + rp(q * h) + '</b>' + (h > 0 ? '<br>Harga jual ke pasien menjadi <b>' + rp(jual) + '</b> (+' + ps + '%) \u2014 berlaku untuk pemakaian berikutnya.' : '');
}
ACT['kl.beliSimpan'] = async btn => {
  bersihGalat($('#mdl'));
  const baru = val('blB') === '__baru';
  const d = { bhp_id: baru ? '' : val('blB'), qty: uang(val('blQty')), harga_satuan: uang(val('blHrg')), tanggal: val('blTgl'), metode: val('blMet'), pemasok: val('blPem') };
  let ok = true; if (d.qty < 1) ok = bad('blQty', 'Isi jumlah beli.'); if (d.harga_satuan < 1) ok = bad('blHrg', 'Isi harga beli.'); if (!d.tanggal || d.tanggal > today()) ok = bad('blTgl', 'Tanggal tidak valid.');
  if (baru) { d.bhp_baru = { nama: val('blNm').trim(), satuan: val('blSat').trim(), stok_min: uang(val('blMin')), persen_jual: val('blPs').trim() === '' ? '' : uang(val('blPs')) }; if (d.bhp_baru.nama.length < 3) ok = bad('blNm', 'Nama minimal 3 karakter.'); if (!d.bhp_baru.satuan) ok = bad('blSat', 'Isi satuan.'); }
  if (!ok) return;
  if (KL_NOTA.data) d.nota = KL_NOTA.data;
  try {
    const r = await denganSibuk(btn, () => call('bhp.beli', d)); MD.close('mdl'); KL.d = null;
    if (typeof M !== 'undefined' && M.d && M.d.bhp) { const i = M.d.bhp.findIndex(x => x.bhp_id === r.bhp.bhp_id); if (i >= 0) M.d.bhp[i] = r.bhp; else M.d.bhp.push(r.bhp); segarkanLokal(); }
    toast('Tercatat: stok ' + r.bhp.nama + ' kini ' + r.bhp.stok + ', harga jual ' + rp(r.bhp.harga_jual) + '.');
    if (S.route === '/keluar') muatKeluar(); else if (S.route === '/master') { M.d = null; try { M.d = await call('master.semua', {}, { fresh: 1 }); gambarMaster(); } catch (e) { /* abaikan */ } }
  } catch (e) { galat(e); }
};

/*@@FILE 11_keuangan.js*/
// \u2500\u2500 Laporan Keuangan (Owner): pendapatan, pengeluaran, saldo + buku kas \u2500\u2500
NAV.laporan.t = 'Laporan Keuangan';
const KEU = { r: null };
function tabLaporan() {
  return html`<div class="nx-seg mb16" style="max-width:340px">${[['keu', 'Keuangan'], ['ops', 'Operasional']].map(x => html`<button class="${(L.tab || 'keu') === x[0] ? 'on' : ''}" data-act="l.tab" data-v="${x[0]}">${x[1]}</button>`)}</div>`;
}
ACT['l.tab'] = t => { L.tab = t.dataset.v; render(true); };
const _viewOps = VIEWS.laporan;
VIEWS.laporan = function (v) {
  if (!L.tab) L.tab = 'keu';
  if (L.tab === 'ops') return _viewOps(v);
  if (!L.dari) setPreset('bulan');
  put(v, html`${tabLaporan()}<div class="nx-page-h"><div><h1 class="t-h1">Laporan Keuangan</h1><p>Pendapatan (uang masuk dari pasien), pengeluaran, dan saldo kas.</p></div><div class="wrap-gap"><button class="nx-btn secondary" data-act="k.xls"><i class="bi bi-file-earmark-excel"></i> Excel</button><button class="nx-btn primary" data-act="k.pdf"><i class="bi bi-file-earmark-pdf"></i> PDF</button></div></div>
  <div class="nx-card pad-sm mb16"><div class="wrap-gap mb12">${[['bulan', 'Bulan ini'], ['lalu', 'Bulan lalu'], ['90', '90 hari'], ['tahun', 'Tahun ini']].map(x => html`<button class="nx-chip ${L.preset === x[0] ? 'on' : ''}" data-act="k.preset" data-v="${x[0]}">${x[1]}</button>`)}</div>
    <div class="row-gap" style="flex-wrap:wrap"><div style="min-width:140px;flex:1"><label class="nx-lab" for="lDari">Dari</label><input id="lDari" type="date" class="nx-in" value="${L.dari}" data-ch="k.tgl"></div><div style="min-width:140px;flex:1"><label class="nx-lab" for="lSam">Sampai</label><input id="lSam" type="date" class="nx-in" value="${L.sampai}" data-ch="k.tgl"></div>
    <div style="flex:2;min-width:240px"><label class="nx-lab">Grafik per</label><div class="nx-seg">${[['hari', 'Hari'], ['minggu', 'Minggu'], ['bulan', 'Bulan']].map(x => html`<button class="${L.grain === x[0] ? 'on' : ''}" data-act="k.grain" data-v="${x[0]}">${x[1]}</button>`)}</div></div></div></div>
  <div id="kBody">${skel(3, 100)}</div>`);
  muatKeuangan();
};
function setPresetKeu(p) {
  const t = today();
  if (p === 'lalu') { const y = +t.slice(0, 4), m = +t.slice(5, 7); const d1 = new Date(Date.UTC(y, m - 2, 1)), d2 = new Date(Date.UTC(y, m - 1, 0)); L.preset = 'lalu'; L.dari = d1.toISOString().slice(0, 10); L.sampai = d2.toISOString().slice(0, 10); } else setPreset(p);
}
ACT['k.preset'] = t => { setPresetKeu(t.dataset.v); render(true); };
ACT['k.grain'] = t => { L.grain = t.dataset.v; render(true); };
INP['k.tgl'] = () => { const a = val('lDari'), b = val('lSam'); if (a && b && a <= b) { L.dari = a; L.sampai = b; L.preset = ''; render(true); } else toast('Rentang tanggal tidak valid.', 'warn'); };
async function muatKeuangan() {
  try { const r = await call('keuangan', { dari: L.dari, sampai: L.sampai, grain: L.grain }, { fresh: 30000 }); if (S.route !== '/laporan' || L.tab === 'ops') return; KEU.r = r; gambarKeuangan(); } catch (e) { galat(e); put('#kBody', kosong('bi-wifi-off', 'Gagal memuat laporan', e.message)); }
}
const deltaKeu = (now, prev, naikBaik) => {
  if (!prev) return html`<span class="muted">periode sebelumnya: ${rp(prev || 0)}</span>`;
  const d = Math.round((now - prev) / prev * 100), baik = naikBaik ? d >= 0 : d <= 0;
  return html`<span style="color:${baik ? 'var(--ok-ink)' : 'var(--err-ink)'}">${d >= 0 ? '\u25b2' : '\u25bc'} ${Math.abs(d)}%</span> <span class="muted">dari ${rp(prev)}</span>`;
};
function gambarKeuangan() {
  const r = KEU.r, s = r.ringkas, b = $('#kBody'); if (!b) return; hapusChart();
  const w = warnaChart(false), lab = r.deret.label.map(k => labelSeri(k, r.grain));
  const tabelRing = (judul, ikon, baris, kosongTeks) => html`<div class="nx-card"><div class="nx-sec-title mb12"><i class="bi ${ikon}"></i> ${judul}</div>${baris.length ? baris.map(x => html`<div class="row-between" style="padding:6px 0;border-bottom:1px solid var(--line)"><span>${x[0]}</span><b class="num">${rp(x[1])}</b></div>`) : html`<div class="muted t-sm">${kosongTeks}</div>`}</div>`;
  put(b, html`<div class="nx-kpis">
    <div class="nx-kpi"><span class="ic ok"><i class="bi bi-arrow-down-circle"></i></span><div class="lab">Pendapatan</div><div class="val" style="font-size:22px">${rp(s.pendapatan)}</div><div class="sub">${deltaKeu(s.pendapatan, s.pendapatanSebelumnya, true)}</div></div>
    <div class="nx-kpi"><span class="ic bad"><i class="bi bi-arrow-up-circle"></i></span><div class="lab">Pengeluaran</div><div class="val" style="font-size:22px">${rp(s.pengeluaran)}</div><div class="sub">${deltaKeu(s.pengeluaran, s.pengeluaranSebelumnya, false)}</div></div>
    <div class="nx-kpi"><span class="ic teal"><i class="bi bi-piggy-bank"></i></span><div class="lab">Saldo periode</div><div class="val" style="font-size:22px;color:${s.saldoPeriode >= 0 ? 'var(--ok-ink)' : 'var(--err-ink)'}">${rp(s.saldoPeriode)}</div><div class="sub">pendapatan \u2212 pengeluaran</div></div></div>
  <div class="nx-card mb16"><div class="nx-grid2"><div><div class="t-cap">Saldo kas awal periode</div><div class="t-h2 num">${rp(s.saldoBuka)}</div></div><div><div class="t-cap">Saldo kas akhir periode</div><div class="t-h2 num" style="color:${s.saldoTutup >= 0 ? 'var(--ok-ink)' : 'var(--err-ink)'}">${rp(s.saldoTutup)}</div></div></div>
    <div class="row-between mt12 t-sm muted" style="gap:8px;flex-wrap:wrap"><span>Saldo kumulatif = saldo awal klinik (${rp(s.saldoAwal)}) + seluruh pendapatan \u2212 seluruh pengeluaran.</span><button class="nx-btn secondary sm" data-act="k.saldoAwal"><i class="bi bi-pencil"></i> Atur saldo awal</button></div>
    <div class="t-sm mt12"><i class="bi bi-hourglass-split"></i> Piutang pasien (belum dibayar): <b>${rp(s.piutang)}</b> dari ${s.jumlahPiutang} invoice \u2014 belum dihitung sebagai pendapatan.</div></div>
  <div class="nx-card mb16"><div class="nx-sec-title mb12"><i class="bi bi-graph-up"></i> Pendapatan vs Pengeluaran</div><div class="nx-chart sm" id="w_kas"><canvas id="c_kas"></canvas></div></div>
  <div class="nx-grid2 mb16">${tabelRing('Pendapatan per jenis layanan', 'bi-clipboard2-pulse', r.perJenis.map(x => [x.nama, x.jumlah]), 'Belum ada pendapatan.')}${tabelRing('Pendapatan per metode bayar', 'bi-credit-card', r.perMetode.map(x => [x.nama, x.jumlah]), 'Belum ada pendapatan.')}</div>
  <div class="mb16">${tabelRing('Pengeluaran per kategori', 'bi-wallet2', r.perKategori.map(x => [x.kategori, x.jumlah]), 'Belum ada pengeluaran pada periode ini.')}</div>
  <div class="nx-card pad0"><div class="nx-sec-title" style="padding:16px 16px 8px"><i class="bi bi-journal-text"></i> Buku Kas <span class="muted t-sm">(${r.bukuKasTotal} transaksi${r.bukuKasTotal > r.bukuKas.length ? ', menampilkan ' + r.bukuKas.length + ' terbaru' : ''})</span></div>
    ${r.bukuKas.length ? html`<div class="nx-tbl-wrap"><table class="nx-tbl"><thead><tr><th>Tanggal</th><th>Uraian</th><th class="r">Masuk</th><th class="r">Keluar</th><th class="r">Saldo</th></tr></thead><tbody>
      <tr><td colspan="4" class="muted">Saldo awal periode</td><td class="r num">${rp(s.saldoBuka)}</td></tr>
      ${r.bukuKas.map(x => html`<tr><td class="num" style="white-space:nowrap">${tglPendek(x.tanggal)}</td><td><span class="muted t-sm">${x.kategori}</span><br>${x.uraian}</td><td class="r num" style="color:var(--ok-ink)">${x.arah === 'MASUK' ? rp(x.jumlah) : ''}</td><td class="r num" style="color:var(--err-ink)">${x.arah === 'KELUAR' ? rp(x.jumlah) : ''}</td><td class="r num">${rp(x.saldo)}</td></tr>`)}</tbody></table></div>` : html`<div style="padding:0 16px 16px" class="muted">Belum ada transaksi pada periode ini.</div>`}</div>`);
  const sp = specKeu(r, w); if (sp) mkChart($('#c_kas'), sp); else chartKosong($('#w_kas'));
}
function specKeu(r, w) {
  if (!r.deret.masuk.concat(r.deret.keluar).some(x => x > 0)) return null;
  const lab = r.deret.label.map(k => labelSeri(k, r.grain));
  return { type: 'bar', data: { labels: lab, datasets: [{ label: 'Pendapatan', data: r.deret.masuk, backgroundColor: w.t, borderRadius: 4 }, { label: 'Pengeluaran', data: r.deret.keluar, backgroundColor: w.err, borderRadius: 4 }] }, options: { scales: { y: { beginAtZero: true, ticks: { callback: v => v >= 1e6 ? (v / 1e6) + ' jt' : (v >= 1e3 ? (v / 1e3) + ' rb' : v) } } } } };
}
ACT['k.saldoAwal'] = () => {
  MD.open('mdl', { title: 'Saldo Awal Kas', size: 'sm', body: html`<p class="t-sm muted">Isi dengan jumlah uang kas klinik saat mulai memakai ShanERM (mis. modal awal). Kosongkan / 0 bila mulai dari nol. Angka ini hanya memengaruhi saldo kumulatif.</p>${medan('kSA', 'Saldo awal (Rp)', { v: KEU.r ? KEU.r.ringkas.saldoAwal : 0, inputmode: 'numeric' })}`,
    footer: html`<button class="nx-btn secondary" data-bs-dismiss="modal">Batal</button><button class="nx-btn primary" data-act="k.saldoSimpan"><i class="bi bi-check2"></i> Simpan</button>` });
};
ACT['k.saldoSimpan'] = async btn => {
  bersihGalat($('#mdl')); const t = val('kSA').replace(/[.\s]/g, '').replace(',', '.'), n = t === '' ? 0 : Number(t);
  if (!isFinite(n)) return bad('kSA', 'Harus berupa angka.');
  try { await denganSibuk(btn, () => call('config.simpan', { saldo_awal: String(Math.round(n)) })); MD.close('mdl'); toast('Saldo awal tersimpan.'); render(true); } catch (e) { galat(e); }
};
ACT['k.pdf'] = async btn => {
  try { await denganSibuk(btn, async () => { const d = await call('keuangan.pdf', { dari: L.dari, sampai: L.sampai, grain: L.grain }); unduhBlob(b64ToBlob(d.base64, d.mime), d.nama_file); toast('Laporan keuangan PDF diunduh.'); }); } catch (e) { galat(e); }
};
ACT['k.xls'] = () => {
  const r = KEU.r; if (!r) return; const s = r.ringkas;
  buatExcel('Laporan_Keuangan_' + r.dari + '_' + r.sampai + '.xlsx', [
    { nama: 'Ringkasan', rows: [['Periode', r.dari + ' s/d ' + r.sampai], ['Saldo awal periode', s.saldoBuka], ['Pendapatan', s.pendapatan], ['Pengeluaran', s.pengeluaran], ['Saldo periode', s.saldoPeriode], ['Saldo akhir', s.saldoTutup], ['Piutang', s.piutang]] },
    { nama: 'Per Periode', rows: r.deret.label.map((k, i) => ({ Periode: k, Pendapatan: r.deret.masuk[i], Pengeluaran: r.deret.keluar[i], Selisih: r.deret.masuk[i] - r.deret.keluar[i] })) },
    { nama: 'Pendapatan', rows: r.perJenis.map(x => ({ Jenis: x.nama, Jumlah: x.jumlah })).concat(r.perMetode.map(x => ({ Jenis: 'Metode: ' + x.nama, Jumlah: x.jumlah }))) },
    { nama: 'Pengeluaran', rows: r.perKategori.map(x => ({ Kategori: x.kategori, Jumlah: x.jumlah })) },
    { nama: 'Buku Kas', rows: r.bukuKas.map(x => ({ Tanggal: x.tanggal, Kategori: x.kategori, Uraian: x.uraian, Metode: x.metode, Masuk: x.arah === 'MASUK' ? x.jumlah : '', Keluar: x.arah === 'KELUAR' ? x.jumlah : '', Saldo: x.saldo })) }]);
  toast('Excel diunduh.');
};

/*@@FILE 99_boot.js*/
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Boot \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
(function boot() {
  pemanasan();                                               // bangunkan Apps Script sejak halaman dibuka
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Date.now() - (window.__nxHide || 0) > 120000) pemanasan(); if (document.hidden) window.__nxHide = Date.now(); });
  terapkanTema(ls.get('shan_theme', 'auto'));
  const c = ls.json('shan_cfg', null); if (c) S.cfg = c;
  const bl = $('#bootLogo'); if (bl) { bl.onerror = () => { bl.onerror = null; bl.src = LOGO_FULL; }; bl.src = logoSrc(); }
  if (window.NX_K) return halamanPasien(window.NX_K);       // tautan konsultasi pasien: ?k=KODE
  S.token = ls.get('shan_token', '');
  if (!S.token) return tampilLogin();
  mulaiApp().catch(e => { if (e.code === 'AUTH') return; if (e.network) { tampilLogin('Tidak dapat terhubung ke server. Periksa internet Anda.'); } else tampilLogin(e.message); });
})();


})();
