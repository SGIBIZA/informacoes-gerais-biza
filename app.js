(function(){
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];

  // Placeholder para imagens com erro
  window.placeholder = (text)=>{
    const el=document.createElement('div');
    el.className='img-fallback';
    el.textContent=text;
    return el;
  };

  // Estado global
  const state = {
    allCards: [],
    filtered: [],
    filters: { q: "", category: "", area: "", keywords: [] }
  };

  const els = {
    grid: qs('#cardsGrid'),
    search: qs('#searchInput'),
    clear: qs('#clearSearch'),
    chips: qs('#activeChips'),
    dialog: qs('#filtersDialog'),
    categorySelect: qs('#categorySelect'),
    areaSelect: qs('#areaSelect'),
    keywordsBox: qs('#keywordsBox'),
    applyFilters: qs('#applyFilters'),
    exportJson: qs('#exportJson'),
    copyUrl: qs('#copyUrl'),
    openFilters: qs('#openFilters'),
  };

  // Carregar dados (cards.data.js local ou cards.json remoto)
  async function loadCards(){
    if(Array.isArray(window.CARDS) && window.CARDS.length){
      return window.CARDS;
    }
    try{
      const r = await fetch('cards.json', {cache:'no-store'});
      return await r.json();
    }catch(e){
      console.warn('Falha ao buscar cards.json', e);
      return [];
    }
  }

  loadCards().then(data=>{
    state.allCards = data;
    hydrateFilterOptions(data);
    restoreFromUrl();
    applyFilters();
  });

// Fallback se o fetch falhar localmente
if (!state.allCards.length && Array.isArray(window.CARDS)) {
  state.allCards = window.CARDS;
}

  
  function hydrateFilterOptions(cards){
    const categories = [...new Set(cards.map(c=>c.category).filter(Boolean))].sort();
    const areas = [...new Set(cards.map(c=>c.area).filter(Boolean))].sort();
    const keywords = [...new Set(cards.flatMap(c=>c.keywords||[]))].sort();

    categories.forEach(c=>{
      const opt=document.createElement('option'); opt.value=c; opt.textContent=c; els.categorySelect.appendChild(opt);
    });
    areas.forEach(a=>{
      const opt=document.createElement('option'); opt.value=a; opt.textContent=a; els.areaSelect.appendChild(opt);
    });
    els.keywordsBox.innerHTML=keywords.map(k=>`<label class="chip"><input type="checkbox" value="${k}"> ${k}</label>`).join('');
  }

  function renderCards(list){
    els.grid.setAttribute('aria-busy','true');
    if(!list.length){
      els.grid.innerHTML='<div class="card" style="padding:20px">Nenhum resultado encontrado.</div>';
      els.grid.removeAttribute('aria-busy');
      return;
    }
    const tpl=list.map(card=>{
      const img=card.image?`<img src="${card.image}" alt="${card.title}" onerror="this.replaceWith(placeholder('${card.title}'))">`:`<div class="img-fallback">${card.title}</div>`;
      const links=(card.links||[]).slice(0,2);
      const primary=links[0]?`<a class="primary" href="${links[0].href}" target="_blank" rel="noopener">${links[0].label||'Abrir'}</a>`:'';
      const secondary=links[1]?`<a class="secondary" href="${links[1].href}" target="_blank" rel="noopener">${links[1].label||'Alternativo'}</a>`:'';
      const tags=(card.keywords||[]).map(t=>`<span class="tag">${t}</span>`).join('');
      const badgeL=card.area?`<span class="badge">${card.area}</span>`:'';
      const badgeR=card.category?`<span class="badge">${card.category}</span>`:'';

      return `<article class="card" data-id="${card.id}">
        <div class="card-media">${img}</div>
        <div class="card-body">
          <h3>${card.title}</h3>
          <p class="desc">${card.description||''}</p>
          <div class="meta">${badgeL}${badgeR}${tags}</div>
        </div>
        <div class="card-footer">${primary}${secondary}</div>
      </article>`;
    }).join('');

    els.grid.innerHTML=tpl;
    els.grid.removeAttribute('aria-busy');
  }

  function applyFilters(){
    const {q, category, area, keywords}=state.filters;
    const qx=(q||'').trim().toLowerCase();

    const list=state.allCards.filter(c=>{
      if(category && c.category!==category) return false;
      if(area && c.area!==area) return false;
      if(keywords.length && !keywords.every(k=>(c.keywords||[]).includes(k))) return false;
      if(qx){
        const blob=[c.title||'', c.description||'', ...(c.keywords||[])].join(' ').toLowerCase();
        if(!blob.includes(qx)) return false;
      }
      return true;
    });

    state.filtered=list;
    renderCards(list);
    renderActiveChips();
    syncUrl();
  }

  function renderActiveChips(){
    const chips=[];
    const {q,category,area,keywords}=state.filters;
    if(q) chips.push(['q',q]);
    if(category) chips.push(['category',category]);
    if(area) chips.push(['area',area]);
    keywords.forEach(k=>chips.push(['k',k]));

    els.chips.innerHTML=chips.map(([k,v])=>`<span class="chip">${v}<button data-k="${k}" data-v="${v}">×</button></span>`).join('');
    qsa('.chip button',els.chips).forEach(b=>b.addEventListener('click',e=>{
      const k=e.currentTarget.dataset.k; const v=e.currentTarget.dataset.v;
      if(k==='q') state.filters.q='';
      if(k==='category') state.filters.category='';
      if(k==='area') state.filters.area='';
      if(k==='k') state.filters.keywords=state.filters.keywords.filter(x=>x!==v);
      applyFilters();
    }));
  }

  function syncUrl(){
    const p=new URLSearchParams();
    if(state.filters.q) p.set('q',state.filters.q);
    if(state.filters.category) p.set('category',state.filters.category);
    if(state.filters.area) p.set('area',state.filters.area);
    if(state.filters.keywords.length) p.set('k',state.filters.keywords.join(','));
    history.replaceState(null,'',`${location.pathname}?${p.toString()}`);
  }

  function restoreFromUrl(){
    const p=new URLSearchParams(location.search);
    state.filters.q=p.get('q')||'';
    state.filters.category=p.get('category')||'';
    state.filters.area=p.get('area')||'';
    state.filters.keywords=p.get('k')?p.get('k').split(','):[];
    els.search.value=state.filters.q;
  }

  // Eventos
  els.search.addEventListener('input',e=>{state.filters.q=e.target.value;applyFilters();});
  els.clear.addEventListener('click',()=>{els.search.value='';state.filters.q='';applyFilters();});
  els.openFilters.addEventListener('click',()=>els.dialog.showModal());
  els.applyFilters.addEventListener('click',e=>{
    e.preventDefault();
    state.filters.category=els.categorySelect.value;
    state.filters.area=els.areaSelect.value;
    state.filters.keywords=qsa('input[type="checkbox"]',els.keywordsBox).filter(i=>i.checked).map(i=>i.value);
    els.dialog.close();
    applyFilters();
  });
  els.exportJson.addEventListener('click',e=>{
    e.preventDefault();
    const blob=new Blob([JSON.stringify(state.filtered,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url; a.download='biza-catalogo-filtrado.json'; a.click();
    URL.revokeObjectURL(url);
  });
  els.copyUrl.addEventListener('click',e=>{
    e.preventDefault();
    navigator.clipboard.writeText(location.href);
  });
})();