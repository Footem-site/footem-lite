
// Minimal fake data. Replace with your own or connect an API.
const todaysMatches = [
  {league:'UEFA Super Cup', home:'Tottenham', away:'PSG', time:'12:30 AM', tag:'Final', link:'#'},
  {league:'Serie A', home:'Inter', away:'Napoli', time:'1:15 AM', tag:'Today', link:'#'},
  {league:'LaLiga', home:'Barcelona', away:'Sevilla', time:'2:30 AM', tag:'Today', link:'#'}
];

const latestNews = [
  {title:'Why is Donnarumma not playing today for PSG?', source:'Footem Lite', date:'Aug 14, 2025', link:'#'},
  {title:'Liverpool close to £30m tough-guy midfielder', source:'Footem Lite', date:'Aug 13, 2025', link:'#'},
  {title:'Vicario backs Donnarumma amid PSG drama', source:'Footem Lite', date:'Aug 13, 2025', link:'#'},
  {title:'Como announce Álvaro Morata', source:'Footem Lite', date:'Aug 13, 2025', link:'#'},
  {title:'Rio Ferdinand disagrees with Man Utd move', source:'Footem Lite', date:'Aug 12, 2025', link:'#'}
];

function renderMatches(rootId){
  const root = document.getElementById(rootId);
  root.innerHTML = '';
  todaysMatches.forEach(m => {
    const item = document.createElement('div');
    item.className = 'card';
    item.innerHTML = `
      <div class="flex">
        <span class="badge">${m.league}</span>
        <span class="badge">${m.tag}</span>
      </div>
      <h3 style="margin:.5rem 0 0">${m.home} <small class="muted">vs</small> ${m.away}</h3>
      <div class="flex" style="justify-content:space-between;margin-top:.5rem">
        <small class="muted">${m.time}</small>
        <a class="btn" href="${m.link}">Read more</a>
      </div>`;
    root.appendChild(item);
  });
}

function renderNews(rootId){
  const root = document.getElementById(rootId);
  root.innerHTML = '';
  latestNews.forEach(n => {
    const card = document.createElement('div');
    card.className = 'card news-card';
    card.innerHTML = `
      <span class="badge">News</span>
      <h3>${n.title}</h3>
      <div class="meta">${n.source} • ${n.date}</div>
      <div><a class="btn" href="${n.link}">Read more</a></div>`;
    root.appendChild(card);
  });
}

function initTabs(){
  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('[data-panel]');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const id = tab.dataset.tab;
      panels.forEach(p=>{
        p.style.display = p.dataset.panel === id ? 'block' : 'none';
      });
    });
  });
  // Activate first
  const first = document.querySelector('[data-tab]');
  if(first) first.click();
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('matches')) renderMatches('matches');
  if(document.getElementById('news')) renderNews('news');
  initTabs();
});
