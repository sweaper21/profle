const $ = s => document.querySelector(s), pad = n => String(n).padStart(2, 0);

// teks dari data.js (kalau ada isian yang kosong/salah ketik, otomatis diganti nilai cadangan, bukan "undefined")
D.p.name = D.p.name || D.p.nama || 'Nama Kamu';
D.p.short = D.p.short || D.p.name.split(' ')[0].toUpperCase();
D.p.sign = D.p.sign || D.p.name.split(' ')[0];
document.querySelectorAll('[data-p]').forEach(e => e.innerHTML = D.p[e.dataset.p] ?? '');
document.title = D.p.name + " | Portfolio";
$('#yr').textContent = new Date().getFullYear();
$('#stats').innerHTML = [[D.pembina.length, 'Sekolah binaan'], [D.works.length, 'Kegiatan'], [D.awards.length, 'Pencapaian']]
  .map(([n, l]) => `<li><b data-n="${n}">${n}</b><span>${l}</span></li>`).join('');
$('#logos').innerHTML = D.logos.map(l => `<span>${l}</span>`).join('');
$('#acount').textContent = D.awards.length + '+';
const row = (a, i) => `<li><small>${pad(i + 1)}</small><div><b>${a.t}</b><span>${a.o || ''}</span></div><em>${a.y}</em></li>`;
$('#awardList').innerHTML = D.awards.map(row).join('');
$('#pembinaList').innerHTML = D.pembina.map((s, i) => row({ t: s, o: 'Pembina Pramuka', y: '' }, i)).join('');
$('#miles').innerHTML = D.miles.map(row).join('');
$('#edu').innerHTML = D.edu.map(e => `<div class="ed"><b>${e[0]}</b><span>${e[1]}</span><em>${e[2]}</em></div>`).join('');
$('#chips').innerHTML = D.toolkit.map(t => `<span>${t}</span>`).join('');
$('#steps').innerHTML = D.steps.map((s, i) => `<li><small>${pad(i + 1)}</small><b>${s[0]}</b><span>${s[1]}</span></li>`).join('');
$('#tl').innerHTML = D.journey.map(j => `<li><em>${j.y}</em><div><b>${j.t}</b><span>${j.d}</span></div></li>`).join('');
$('#ct').innerHTML = [['Email', D.p.email, 'mailto:' + D.p.email], ['Instagram', D.p.ig, D.p.ighref], ['WhatsApp', D.p.wa, D.p.wahref], ['Berbasis di', D.p.loc, '']]
  .map(c => `<li><small>${c[0]}</small>${c[2] ? `<a href="${c[2]}" target="_blank" rel="noopener">${c[1]}</a>` : c[1]}</li>`).join('');
$('#wa').href = D.p.wahref;

// galeri karya + filter
const cats = ['Semua', ...new Set(D.works.map(w => w.c))]; let cur = 'Semua', all = false;
function draw() {
  const L = D.works.filter(w => cur == 'Semua' || w.c == cur), v = all ? L : L.slice(0, 3);
  $('#works').innerHTML = v.map((w, i) => `<a class="card" style="--k:${i}" href="${w.img}" target="_blank"><div class="ph"><img src="${w.img}" alt="${w.t}" style="object-position:${w.pos || 'center'}" loading="lazy"></div><div class="ci"><b>${pad(i + 1)}</b><div><h3>${w.t}</h3><small>${w.c} / ${w.y}</small></div></div></a>`).join('');
  $('#tabs').innerHTML = cats.map(c => `<button class="${c == cur ? 'on' : ''}">${c}</button>`).join('');
  $('#more').textContent = `Lihat semua (${L.length})`; $('#more').hidden = all || L.length <= 3;
}
$('#tabs').onclick = e => { if (e.target.tagName == 'BUTTON') { cur = e.target.textContent; all = false; draw(); } };
$('#more').onclick = () => { all = true; draw(); };
draw();

// huruf PORTFOLIO muncul satu per satu
$('.giant').innerHTML = [...'PORTFOLIO'].map((c, i) => `<span style="--i:${i}">${c}</span>`).join('');
// stagger item list di dalam section
document.querySelectorAll('.rv').forEach(r => r.querySelectorAll('li,.ed,.chips span').forEach((e, i) => e.style.setProperty('--k', i)));
// angka berhitung naik
const count = (el, to, suf = '') => {
  if (document.documentElement.dataset.motion == 'off') return el.textContent = to + suf;
  let t0; const f = t => { t0 ??= t; const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; p < 1 && requestAnimationFrame(f); };
  requestAnimationFrame(f);
};
setTimeout(() => document.querySelectorAll('#stats b').forEach(b => count(b, +b.dataset.n, '.')), 900);
new IntersectionObserver((es, o) => es.forEach(e => e.isIntersecting && (count($('#acount'), D.awards.length, '+'), o.disconnect())), { threshold: .4 }).observe($('#acount'));
new IntersectionObserver((es, o) => es.forEach(e => e.isIntersecting && (count($('#pcount'), D.pembina.length), o.disconnect())), { threshold: .4 }).observe($('#pcount'));

// garis progres scroll + reveal
// kartu "Jadikan nyata": putar video (bukan WhatsApp)
const vid = $('#vid'), vv = vid.querySelector('video');
$('#poster').onclick = () => { vid.showModal(); vv.play().catch(() => {}); };
$('#x').onclick = () => vid.close();
vid.addEventListener('close', () => vv.pause());
vid.addEventListener('click', e => { if (e.target == vid) vid.close(); });

const bar = $('#bar');
addEventListener('scroll', () => bar.style.height = scrollY / (document.body.scrollHeight - innerHeight) * 100 + '%', { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll('.rv').forEach(e => io.observe(e));

// tombol Motion On/Off
let off = false; // #KOMEN: animasi default ON. Pengunjung bisa mematikannya lewat tombol Motion
try { off = localStorage.getItem('motion') == 'off'; } catch (e) {}
const setM = () => { document.documentElement.dataset.motion = off ? 'off' : 'on'; $('#motion').textContent = 'Motion: ' + (off ? 'Off' : 'On'); };
$('#motion').onclick = () => { off = !off; try { localStorage.setItem('motion', off ? 'off' : 'on'); } catch (e) {} setM(); };
setM();

// parallax hero: mengikuti mouse + scroll
const R = document.documentElement.style;
addEventListener('mousemove', e => {
  if (off) return;
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  R.setProperty('--gx', x * -26 + 'px'); R.setProperty('--mx', x * 14 + 'px'); R.setProperty('--my', y * 8 + 'px');
});
addEventListener('scroll', () => { if (off) return; R.setProperty('--gy', scrollY * .35 + 'px'); R.setProperty('--sy', scrollY * -.12 + 'px'); }, { passive: true });