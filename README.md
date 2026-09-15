# Jordão Neto Tech — www.jordaonetotech.com.br

Site institucional estático (HTML + CSS + JS, sem build).

**Identidade:** cores do logo `vertical-cor-light.png`
- Fundo `#000000` • Azul JN `#0F56FF` • Verde `#00D19A`

**Contatos:**
- E-mail: jordao@jordaonetotech.com.br
- WhatsApp: (16) 99122-2972 → https://wa.me/5516991222972
- Site: https://www.jordaonetotech.com.br

## Publicar no GitHub Pages (conta jordaoneto-oss)

1. Crie o repo no GitHub: https://github.com/new
   - Owner: `jordaoneto-oss`
   - Name: `site-jordaonetotechv2`
   - Public, sem README inicial
2. No terminal, nesta pasta:
```bash
git init -b main
git add index.html styles.css script.js CNAME .nojekyll .gitignore README.md vertical-cor-light.png .github/workflows/deploy-pages.yml
git commit -m "feat: site institucional Jordão Neto Tech"
git remote add origin https://github.com/jordaoneto-oss/site-jordaonetotechv2.git
git push -u origin main
```
3. Ative o Pages: repo → Settings → Pages → Source: **GitHub Actions**
4. O workflow `.github/workflows/deploy-pages.yml` publica automaticamente a cada push em `main`.
5. Domínio próprio: o arquivo `CNAME` já contém `www.jordaonetotech.com.br`.
   No DNS (Registro.br / hospedagem), crie:
   - `www` → CNAME → `jordaoneto-oss.github.io`
   - apex `@` → A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   Depois marque **Enforce HTTPS** em Settings → Pages.

## Estrutura
```
index.html                  → página única (hero, serviços, experiência, sobre, contato)
styles.css                  → tema dark do logo
script.js                   → menu mobile + formulário → WhatsApp
vertical-cor-light.png      → logo
CNAME                       → domínio customizado
.github/workflows/         → deploy Pages
```

> `Profile.pdf` está no `.gitignore` e **não** é publicado (contém dados pessoais).
