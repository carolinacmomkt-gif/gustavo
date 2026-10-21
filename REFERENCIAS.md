# Referências · Site Gustavo Gomes

Etapa 1. Pesquisa feita antes de qualquer código, aguardando aprovação.

## Como a pesquisa foi feita

Abri e capturei com Playwright (1440px, 4 dobras por site) estes sites:

- **Awwwards · Portfolio Honors:** MERSI Architecture, Artiom Yakushev, Pacôme Pertant, Olha Lazarieva, Gavin Schneider Productions, Local Studio, Grégory Lallé e Podium.
- **SiteInspire:** Scullion Architects e TaylorHare Architects.

Pacôme Pertant, Grégory Lallé, Podium e Olha Lazarieva usam WebGL ou um preloader longo e não renderizaram por inteiro no navegador headless. Deles, aproveitei só o que deu para ver (preloader numérico e tipografia). Por isso ficaram fora do top 5.

Também tentei os outros dois agregadores. O godly.website hoje redireciona para recent.design e não lista portfólios de verdade. O land-book.com bloqueia acesso automatizado (403). Os contact sheets dos 5 escolhidos estão em `docs/referencias/`.

---

## 1. Os 5 links e o que vou pegar de cada um

### 1. Artiom Yakushev · https://www.art-yakushev.com/
*SOTD dez/2025 · fundo preto · retrato como peça central*

- **Tipografia.** O nome ocupa a largura inteira da tela, colado na base da viewport, com corpo leve e nenhum negrito. Vou usar isso no hero: `Lead a R$ 1,29 e agenda cheia.` em 17 a 19vw, com peso 300.
- **Tratamento de foto.** O retrato fica em coluna alta, deslocado do centro, e o texto grande passa por cima dele com um borrão de movimento na entrada. Vou fazer igual, só que a foto entra por máscara (clip-path de baixo para cima) e o título sobrepõe a metade inferior.
- **Rótulos.** Navegação e créditos em corpo minúsculo nos quatro cantos, inclusive a hora local ("Yerevan 02:54 AM"). Vou usar `Anápolis, GO · 23:14` em mono no canto do hero.

### 2. MERSI Architecture · https://www.mersi-architecture.com
*SOTD abr/2025 · arquitetura · Switzer*

- **Grid.** A tela é partida em duas fotos lado a lado, sem respiro entre elas, com um bloco pequeno de legenda cruzando a costura. Vou usar esse "díptico" na seção Sobre: IMG_1077 e IMG_0828 coladas, com a trajetória correndo na costura.
- **Tipografia.** É a prova de que Switzer aguenta um site de estúdio. Legendas em corpo 11 a 12px e metadados alinhados nos extremos do bloco ("Paris 16 ... 2026").
- **Transição.** A foto troca por cima da anterior com wipe vertical. Vou usar o mesmo na troca de fotos entre seções.

### 3. Scullion Architects · https://scullion.ie/
*SiteInspire · fundo verde oliva escuro*

- **Grid e respiro.** Uma única foto vertical, em coluna alta, ocupa só 1/4 da largura, e o resto da tela é campo de cor puro. É exatamente o "respiro radical" que falta nas versões reprovadas. Vou aplicar no Convite final: IMG_1009 em coluna estreita deslocada para a direita (colunas 9 a 11) e o título gigante quebrando por cima do campo vazio.
- **Cor.** Confirma que verde escuro dessaturado com foto quente funciona sem parecer "tema escuro de app".

### 4. Gavin Schneider Productions · https://www.gsproductions.co.za/
*SOTD mar/2026 · produtora de fotografia*

- **Grid editorial em lista.** Cada linha tem a foto numa coluna e os metadados ("Client / Photographer / 9 images") pendurados em colunas distantes, em corpo minúsculo. O espaço vazio entre eles faz o desenho. Vou usar esse esqueleto em duas seções: no **Problema** (os 3 segmentos como linhas de catálogo) e no **FAQ** (pergunta na coluna 2 a 6, resposta na coluna 8 a 12, número em mono na coluna 1).
- **Indicador de scroll.** A porcentagem lida ("0%", "27%", "40%") acompanha a lateral. Vou usar como contador da seção de Resultados: `01 / 03` e progresso em mono.

### 5. Local Studio · https://localstudio.fr/
*SOTD jun/2024*

- **Tipografia com recuo escalonado.** Cada linha de um título enorme começa numa coluna diferente ("BRANDING & DIGITAL / STUDIO POWERED / BY 90'S VIBES / AND CREATIVE"). Isso quebra a simetria sem precisar de nenhum enfeite. Vou usar no título do hero e na frase de virada (`Lead barato é o começo. / O que eu acompanho / é quanto ele vira de venda.`), sem caixa alta e sem condensada.
- **Movimento.** Revelação linha a linha com máscara e entrada defasada.

**Apoio de paleta.** TaylorHare Architects (https://taylorhare.com/) usa fundo `#132019`, medido na captura. Fica dentro da faixa pedida e mostra que dá para ir quase ao preto sem perder o verde.

---

## 2. Direção de arte em 5 linhas

1. **Uma revista de retrato impressa em papel verde-noite.** O Gustavo aparece inteiro, em P&B tonalizado de verde com grão, e o texto convive com a foto em vez de ficar ao lado dela.
2. **Contraste de escala como única hierarquia.** Números e títulos de 15 a 20vw em peso leve contra rótulos mono de 11px. Nada em negrito.
3. **Grid de 12 colunas usado de forma assimétrica.** Cada seção tem um esqueleto próprio: sobreposição no hero, catálogo no problema, filme horizontal nos resultados, díptico no sobre, coluna solitária no convite.
4. **Prints tratados como documento de arquivo.** Recorte limpo, filete de 1px, legenda em mono e o número-chave gigante ao lado, como uma prova anexada a um processo.
5. **Movimento lento e pesado.** Smooth scroll, máscaras que abrem de baixo para cima e um acento ferrugem que só aparece onde há ação (CTA, cursor, progresso do áudio).

### Paleta proposta

| Token | Hex | Uso |
|---|---|---|
| `--noite` | `#0A130E` | fundo base |
| `--musgo` | `#0F1C15` | fundo de seção alternada |
| `--mata` | `#16281E` | áreas de foto e destaque de fundo |
| `--filete` | `#24392D` | linhas de 1px e divisórias |
| `--papel` | `#E9E6DD` | texto principal |
| `--papel-60` | `#E9E6DD` a 60% | texto secundário |
| `--ferrugem` | `#D2773F` | acento único: seta dos CTAs, cursor, progresso do áudio e o número da prova ativa. Nada além disso. |

Escolhi o ferrugem por ser complementar ao verde, quente como a pele das fotos de estúdio e longe de qualquer verde-WhatsApp, neon ou azul.

---

## 3. Fontes escolhidas

### Display e texto: **Switzer**, da Indian Type Foundry
Fonte de foundry, gratuita para uso comercial pelo Fontshare. Vou hospedar no próprio site, em variável de 100 a 900, e usar praticamente só 300 e 400.

- É uma grotesca neo-suíça com desenho próprio: "a" de bojo alto, "R" de perna reta, "$" e vírgula bem desenhados. Isso importa, porque o título do hero é feito de `R$ 1,29`.
- Em corpo gigante e peso leve, fica com cara de editorial, não de interface. Testei mentalmente a linha `R$ 1,29` em 19vw.
- Está fora da lista proibida e é muito menos comum em template do que Satoshi ou General Sans.
- Já foi validada num SOTD (MERSI) com a mesma proposta de legenda pequena e foto grande.

### Rótulos, números de seção e metadados: **Geist Mono**, da Vercel
OFL, hospedada no próprio site, pesos 400 e 500.

- Algarismos tabulares, então o contador (`41`, `+200`) não "dança" enquanto anima.
- O desenho é seco e técnico, e faz o papel de "carimbo de arquivo" nas provas e na numeração `01 / 08`.
- É menos vista do que JetBrains Mono ou IBM Plex Mono, que já viraram padrão de portfólio dev.

**Par descartado:** Cabinet Grotesk. Tem personalidade, mas o desenho é expressivo demais para o tom "profissional sério" da copy e ficaria com cara de agência criativa.

---

## Esboço do hero (para validar o rumo)

- **Desktop 1440.** IMG_1080 em altura total, nas colunas 5 a 9, abrindo por máscara. O título vem em 4 linhas escalonadas (`Lead a` / `R$ 1,29` / `e agenda` / `cheia.`) em cerca de 18vw, e as linhas 2 e 3 cruzam o retrato. Rótulo mono no topo à esquerda, hora de Anápolis no canto direito. Texto e CTAs ficam numa coluna estreita (colunas 10 a 12), alinhada à base. Logo abaixo, o marquee lento em mono.
- **Mobile 390.** O retrato vira fundo de 100svh, com o grão e o verde mais escuros na metade de baixo. O título vem nas mesmas 4 linhas em cerca de 24vw, com recuo alternado. O texto entra depois da dobra, e o CTA tipográfico fixo fica no rodapé da tela.

---

## Pendências de material

- **Faltam `IMG_1080`** (hero e OG) e **`IMG_1078`**. Recebi IMG_0825, 0828, 1005, 1009 e 1077, convertidas dos RAW e já em pé, em `assets/fotos/`. O IMG_1080 aparece no vídeo, mas preciso do arquivo para o hero.
- **Prints.** Vieram em 924x2000, compressão do chat. Funcionam, mas se houver os originais em 1170x2532 o zoom fica mais nítido.
- **Vídeos.** `IMG_6193` (12s) virou `assets/video/gustavo.mp4`. O `IMG_6190` (61s) é um segundo depoimento, "FEEDBACK · KINGS CT, o maior centro de treinamento do Centro-Oeste", que não está na copy do `CLAUDE.md`. Ficou guardado em `assets/video/` sem uso até você decidir.
