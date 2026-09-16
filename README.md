# Jordão Neto Tech — www.jordaonetotech.com.br

Site institucional estático (HTML + CSS + JS puro, sem build).

## Sobre

Site da **Jordão Neto Tech**, consultoria especializada em E-commerce Omnichannel, Integrações ERP/CRM, Automação com IA, Agile Coaching e OKRs. Página única responsiva com chat ao vivo (Tawk.to) e botão flutuante de WhatsApp.

## Contatos

| Canal | Informação |
|---|---|
| E-mail | jordao@jordaonetotech.com.br |
| WhatsApp | (16) 99122-2972 |
| Site | https://www.jordaonetotech.com.br |
| GitHub | https://github.com/jordaoneto-oss/site-jordaonetotechv2 |
| Vercel | https://site-jordaonetotechv2.vercel.app |

## Identidade Visual

Cores extraídas do logo `vertical-cor-light.png`:

| Cor | Código | Uso |
|---|---|---|
| Preto | `#000000` | Fundo (hero, header, footer) |
| Azul JN | `#0F56FF` | Botões, links, cards destaque |
| Verde | `#00D19A` | Acentos, CTAs, selos |
| Branco | `#FFFFFF` | Texto principal, fundo das seções claras |
| Cinza | `#A8B0C0` | Texto secundário |

Tipografia: **Inter** (Google Fonts, pesos 400–900).

## Estrutura de Arquivos

```
Novo site Jordao Neto Tech/
├── index.html                          → página única
├── styles.css                          → tema + responsivo
├── script.js                           → menu mobile + formulário → WhatsApp
├── vertical-cor-light.png              → logo (favicon + conteúdo)
├── vercel.json                         → config deploy Vercel (headers, cache)
├── .vercelignore                       → arquivos ignorados pela Vercel
├── CNAME                               → domínio customizado (GitHub Pages)
├── .nojekyll                           → desabilita Jekyll no GitHub Pages
├── .gitignore                          → arquivos ignorados pelo Git
├── .github/workflows/deploy-pages.yml  → CI/CD para GitHub Pages
├── README.md                           → esta documentação
└── Profile.pdf                         → CV interno (não versionado)
```

## Seções do Site

| Seção | Descrição |
|---|---|
| **Header** | Logo + menu navegação + CTA diagnóstico |
| **Hero** | Título, proposta de valor, botões WhatsApp + serviços, prova social |
| **Marquee** | Faixa animada com palavras-chave (Scrum, Kanban, E-commerce, etc.) |
| **Serviços** | 6 cards: E-commerce, Integrações/IA, PO Fracionado, BI/OKRs, Agilidade, Treinamentos |
| **Como trabalhamos** | 4 etapas: Diagnóstico → Assessment → Execução → Sustentação |
| **Sobre** | Texto corporativo + card de contato |
| **Contato** | WhatsApp, e-mail, site + formulário de proposta |
| **Footer** | Logo, serviços, contatos, copyright |
| **Chat** | Tawk.to (canto inferior esquerdo) + WhatsApp float (canto inferior direito, acima do chat) |

## Stack

- **HTML5** semântico
- **CSS3** com variáveis CSS, Grid, Flexbox, clamp()
- **JavaScript** vanilla (menu mobile + formulário)
- **Google Fonts** (Inter)
- **Tawk.to** chat ao vivo (script embed)
- **WhatsApp API** (wa.me)

## Deploy

### Vercel (produção)

- **Domínio**: https://www.jordaonetotech.com.br
- **Projeto Vercel**: `site-jordaonetotechv2`
- **Conta**: `jordao-neto-tech-s-projects`
- **Deploy automático**: push em `main` no GitHub → Vercel redeploya
- **Config DNS** (Registro.br):
  - `www` CNAME → `cname.vercel-dns.com`
  - `@` A → `76.76.21.21`

### GitHub Pages (backup)

- **Repo**: https://github.com/jordaoneto-oss/site-jordaonetotechv2
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Ativar**: repo → Settings → Pages → Source: GitHub Actions

## Como Editar

### Alterar textos
Edite `index.html`. Todos os textos estão em português, voz corporativa (empresa, não pessoa).

### Alterar cores
Edite as variáveis CSS no topo de `styles.css`:
```css
--blue:#0f56ff;    /* azul JN */
--green:#00d19a;   /* verde */
--black:#000000;   /* fundo */
```

### Alterar logo
Substitua `vertical-cor-light.png` por nova imagem. Mantenha o mesmo nome.

### Adicionar serviço
复制 um dos `<article class="card">` na seção de serviços e ajuste título, descrição e link.

### Alterar WhatsApp
Substitua `5516991222972` em todos os links `wa.me/` do `index.html`.

### Alterar e-mail
Substitua `jordao@jordaonetotech.com.br` em todos os links `mailto:` do `index.html`.

### Alterar Tawk.to
Substitua o Site ID no `<script>` antes do `</body>` no `index.html`. Configurações adicionais no painel: https://dashboard.tawk.to

## Comandos Úteis

```bash
# Abrir site localmente
python3 -m http.server 8000
# Acessar http://localhost:8000

# Deploy manual na Vercel
npx vercel --prod

# Verificar DNS do domínio
npx vercel domains verify www.jordaonetotech.com.br

# Ver log de commits
git log --oneline -10
```

## Checklist de Deploy

- [ ] Textos revisados em voz corporativa
- [ ] Links WhatsApp funcionando
- [ ] Links e-mail funcionando
- [ ] Formulário enviando para WhatsApp
- [ ] Chat Tawk.to ativo e visível
- [ ] WhatsApp float sem sobreposição com chat
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] SSL ativo (HTTPS)
- [ ] Domínio apontando para Vercel
- [ ] `Profile.pdf` no `.gitignore` (não publicado)

## Segurança

- `Profile.pdf` está no `.gitignore` — contém dados pessoais, nunca é versionado
- Tokens de deploy devem ser revogados após uso
- Nunca committar chaves, senhas ou tokens no repositório
