# Lading-Page---Ada-Lovelace
Página Web desenvolvida com o objetivo de dar crédito à Ada Lovelace. A mulher que imaginou a computação um século antes do computador existir.
# Ada Lovelace — Landing Page

## Personagem escolhida
**Ada Lovelace** (1815–1852) — matemática britânica considerada a primeira programadora da história. Escolhida por sua contribuição pioneira à computação e por ser uma referência fundamental para mulheres em T.I.

---

## Desenvolvimento da página

A landing page foi construída com HTML semântico, CSS customizado e JavaScript puro, sem o uso de frameworks ou bibliotecas externas. O design segue uma estética **editorial vitoriano-digital**: tipografia serifada clássica (Playfair Display) combinada com fonte mono (DM Mono), paleta em tons de creme, preto grafite e dourado envelhecido — referenciando tanto a era em que Ada viveu quanto o universo da tecnologia.

### Seções da página
1. **Hero** — Título, subtítulo e imagem de destaque
2. **Linha do Tempo** — Datas importantes da vida de Ada
3. **Biografia** — Texto narrativo sobre sua trajetória
4. **Principais Realizações** — Cards em grid com ícones
5. **Desafios Enfrentados** — Lista numerada com contexto histórico
6. **Curiosidades** — Cards interativos com flip 3D (JavaScript)
7. **Footer** — Citação da própria Ada Lovelace

---

## Como o JavaScript foi utilizado

O arquivo `script.js` contém duas funcionalidades principais:

### 1. Cards de curiosidades com efeito flip
- A função `flipCard(card)` adiciona/remove a classe CSS `flipped` no elemento clicado.
- A animação de rotação 3D é feita inteiramente via CSS (`transform: rotateY(180deg)` + `perspective`), acionada pela classe.
- A função `resetCards()` percorre todos os cards com `querySelectorAll` e remove a classe `flipped`, voltando todos ao estado inicial.

### 2. Animação de entrada por scroll
- Utiliza a **Intersection Observer API** para detectar quando elementos entram na área visível da tela.
- Ao serem observados, os elementos de timeline, realizações e desafios surgem com uma animação suave de `opacity` + `translateY`.
- Isso evita o uso de `scroll` events, sendo mais performático.

---

## Organização do projeto

```
LandingPage - (seu nome)/
├── index.html       → Estrutura e conteúdo da página
├── style.css        → Toda a estilização (variáveis, layout, animações)
├── script.js        → Interatividade (flip cards + scroll animations)
├── README.md        → Este arquivo
└── imagens/
    ├── ada-portrait.jpg   → Retrato de Ada Lovelace (seção hero)
    └── ada-work.jpg       → Imagem de Ada trabalhando (seção biografia)
```

> **Observação sobre imagens:** As imagens devem ser baixadas e salvas na pasta `imagens/`. Sugestões de busca: "Ada Lovelace portrait" no Wikimedia Commons (domínio público). Caso as imagens não sejam encontradas, a página exibe um fallback visual automaticamente.

---

## Publicação

- **Repositório GitHub:** [`https://github.com/(lVitorSouza)/LandingPage-(lVitorSouza)`](https://lvitorsouza.github.io/Lading-Page---Ada-Lovelace/)
- **GitHub Pages:** https://lvitorsouza.github.io/Lading-Page---Ada-Lovelace/
