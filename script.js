// Jordão Neto Tech — interações
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Form -> WhatsApp
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').toString();
    const contato = (data.get('contato') || '').toString();
    const servico = (data.get('servico') || '').toString();
    const msg = (data.get('msg') || '').toString();
    const origem = (data.get('origem') || '').toString();
    const text = `Olá! Vim pelo site www.jordaonetotech.com.br\nNome: ${nome}\nContato: ${contato}\nServiço: ${servico}\nDesafio: ${msg}\nComo nos conheceu: ${origem}`;
    window.open('https://wa.me/5516991222972?text=' + encodeURIComponent(text), '_blank');
  });
}
