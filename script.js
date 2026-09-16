// Jordão Neto Tech — interações
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      menuBtn.focus();
    }
  });
}

// Form -> WhatsApp
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').toString().trim();
    const contato = (data.get('contato') || '').toString().trim();
    const servico = (data.get('servico') || '').toString() || 'Não informado';
    const msg = (data.get('msg') || '').toString().trim();
    const origem = (data.get('origem') || '').toString();
    if (!nome || !contato) {
      (document.getElementById(!nome ? 'f-nome' : 'f-contato') || {}).focus?.();
      return;
    }
    const text = `Olá! Vim pelo site www.jordaonetotech.com.br\nNome: ${nome}\nContato: ${contato}\nServiço: ${servico}\nDesafio: ${msg}\nComo nos conheceu: ${origem}`;
    window.open('https://wa.me/5516991222972?text=' + encodeURIComponent(text), '_blank');
  });
}
