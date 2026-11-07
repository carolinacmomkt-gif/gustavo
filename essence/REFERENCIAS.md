# Referências · Novo site da Essence

Etapa 1: pesquisa e direção de arte, para aprovação antes de qualquer código.

## O que eu estudei

- **Site atual (essencemkt.com):** li o conteúdo e tirei screenshots em 1440px e 390px.
- **Material do Drive:**
  - `Essence_Documento_Institucional`.
  - `Proposta Agência Essence | Marketing para clínicas`.
  - `CONHEÇA A ESSENCE.pdf`.
  - A pasta `Logo`, com o logotipo e a paleta.
  - A pasta `FOTOS/ENSAIO`, com 38 fotos de ensaio da Carol.
- **Vídeo do Dr. Rodrigo Domingues:** 39s, que transcrevi.
- **Galerias de referência:**
  - Lidas a partir das listagens do Awwwards (categoria saúde) e do SiteInspire.
  - Fotografei 10 sites no navegador: Roveia, Bevel, Institute of Health, Pomegranate, Rejuvenation Dentistry, Heva, Function Health, Atomic Health, Life Stories e The Surfer's Journal Archives.
  - O land-book bloqueia acesso automatizado.
- **Também usado:** as referências editoriais que já estudamos para o site do Gustavo (Scullion, MERSI, GSP).

As imagens estão em `essence/docs/referencias/`.

---

## 1. Os 5 links e o que vou pegar de cada um

### 1. Rejuvenation Dentistry · https://www.rejuv-health.com/
*Menção honrosa no Awwwards · clínica tratada como revista*

- **Foto:** o retrato do médico em P&B, sangrando na tela, com o título em fonte leve por cima. Prova que um consultório pode ter cara de editorial sem perder seriedade.
- **Transição:** painéis que deslizam e revelam fotos em sequência, como páginas.
- **Uso no site:** é o tratamento das fotos da Carol e o tom geral, "clínico e editorial".

### 2. Function Health · https://www.functionhealth.com
*Menção honrosa no Awwwards · serifa de display + mono*

- **Tipografia:** uma serifa de display (Financier) com uma palavra em itálico no meio da frase ("chosen by *top doctors*"), mais uma mono (Fragment Mono) para dados e rótulos.
- **Grid:** temas médicos em colunas finas com filetes ("Hormones & thyroid · Cancer & other silent risks · Heart & metabolic"), como um sumário de revista.
- **Uso no site:** o par serifa + mono e o uso do itálico como ênfase. A Essence já usa itálico na marca, então isso preserva a continuidade.

### 3. Life Stories · https://lifestories.org/
*SiteInspire, out/2026 · arquivo de depoimentos em vídeo*

- **Estrutura:** os depoimentos são o conteúdo principal, com rosto grande, nome, contexto e "Stories / Interviews" como seções de um acervo.
- **Uso no site:** o depoimento do Dr. Rodrigo deixa de ser um vídeo solto e vira uma "entrevista", com a frase em destaque, a ficha do médico e o vídeo reeditado.

### 4. The Surfer's Journal Archives · https://archives.surfersjournal.com/
*SiteInspire, set/2026 · cada edição como capa de revista*

- **Conceito:** cada número aparece como uma capa, com o ano e a edição ("2026 · 35.5") em tipografia pequena nas pontas.
- **Uso no site:** é a ideia central. **Cada case vira uma edição** ("Nº 02 · Cirurgia vascular · Dr. Rodrigo Domingues"), com o feed do médico como capa e o antes e depois como "matéria".

### 5. Institute of Health · https://www.instituteofhealth.com/
*Menção honrosa no Awwwards · foto escura com dados em mono*

- **Grid:** a foto ocupa a tela e os números ficam numa coluna estreita, em mono e com filetes, ao lado do título.
- **Uso no site:** é o hero e a forma de mostrar dados sem inventar métricas. Em vez de seguidores, a ficha técnica de cada edição traz especialidade, cidade, tempo de parceria e entregas por mês.

**Apoio (pesquisa anterior):** Scullion e MERSI, pelo respiro e pela foto em coluna alta. GSP, pela lista editorial com metadados distantes, que vou usar nas Perguntas e nos Planos.

---

## 2. Direção de arte em 5 linhas

1. **A Essence como uma revista de marca médica:** o site é uma "edição", e cada cliente é uma matéria com capa, ficha técnica e texto.
2. **Duas cores da marca, sem dourado:** tinta índigo quase preta e papel, alternando por seção como páginas, e um único acento só onde há ação.
3. **Hierarquia por contraste de escala:** serifa enorme e leve, com uma palavra em itálico por frase, contra rótulos em mono de 12px no estilo prontuário (Nº, CRM, especialidade).
4. **Fotos da Carol em coluna alta:** com degradê nas bordas, nunca em caixinhas redondas. A estrela de quatro pontas do logo é o único ornamento do site.
5. **Movimento como virar de página:** revelação por máscara, edições em trilho horizontal e o vídeo do Dr. Rodrigo começando sem som, com legenda na tipografia do site.

### Paleta (a partir da marca: #080022 e #F0E7D7)

| Token | Hex | Uso |
|---|---|---|
| `--tinta` | `#080022` | fundo principal, texto sobre papel |
| `--tinta-2` | `#120D33` | seções alternadas no escuro |
| `--papel` | `#F0E7D7` | fundo das "páginas" claras, texto sobre tinta |
| `--papel-2` | `#E3D8C4` | fundos de ficha e citações |
| `--filete` | tinta ou papel a 14% | linhas de 1px |
| `--lavanda` | `#B4A9FF` | **acento único**, só sobre tinta: a estrela, o cursor, o progresso do vídeo e a seta do CTA |

**O que sai do site atual:** dourado, azul-marinho chapado, cards com sombra, bolinha flutuante de WhatsApp, foto em círculo e travessão nos textos.

---

## 3. Fontes

- **Display: Newsreader** (Production Type, Google Fonts, gratuita para uso comercial).
  - É uma serifa feita para jornalismo, com tamanhos ópticos e um itálico com personalidade.
  - Tem cara de publicação séria, não de convite de casamento como a Cormorant atual.
  - Uso em peso 300 com itálico 300 nos títulos gigantes.
- **Texto: General Sans** (Indian Type Foundry, Fontshare, gratuita para uso comercial).
  - Grotesca geométrica que conversa com o logotipo fino e geométrico da Essence.
  - Substitui a Neue Montreal, que exige licença paga para uso comercial.
- **Rótulos e números: IBM Plex Mono** (OFL).
  - O desenho técnico dela é perfeito para o "prontuário" (Nº 01, CRM, RQE, especialidade, cidade).
- **Logotipo:** continua sendo o arquivo da marca, sem recriar.

---

## 4. Estrutura proposta (copy só depois da aprovação)

| # | Seção | Esqueleto |
|---|---|---|
| 00 | Capa (hero) | Retrato da Carol em coluna alta à direita, com degradê. Título grande em serifa com o princípio "O conteúdo deve parecer feito *pelo próprio médico*". Coluna estreita em mono com ficha: Anápolis, GO · Marketing médico · Conteúdo dentro do CFM. |
| 01 | O problema | Lista editorial com o que o médico já tentou: conteúdo genérico, foco em postagem, agência que não entende CFM. Inspirada na dor central do documento institucional. |
| 02 | Método | As 3 fases (imersão na identidade, narrativa, produção), com o "dossiê do médico" como peça visual: uma ficha de prontuário que se preenche ao rolar. |
| 03 | Edições (cases) | Trilho horizontal, uma capa por cliente (Carol Pessoa, Dr. Rodrigo, Dra. Anisse, Dra. Larissa) com ficha técnica e o antes e depois do feed como matéria. |
| 04 | Entrevista | Vídeo reeditado do Dr. Rodrigo em formato de entrevista, com a frase de destaque "Todas as postagens só eram postadas após a minha análise." |
| 05 | Planos | Direção, Presence e Performance em lista editorial numerada, com o que entra e o que não entra (sem cards). |
| 06 | Quem somos | Carol e Laiza, com fotos grandes. A Carol vem do ensaio. |
| 07 | Perguntas | Lista numerada, sem acordeão de caixas. |
| 08 | Contato | Convite final e CTA tipográfico fixo para o WhatsApp. |

Cada seção tem um esqueleto diferente da anterior, e no celular tudo é redesenhado para 390px.

---

## 5. Vídeo do Dr. Rodrigo: plano de reedição

A versão que você me mandou já tem legenda gravada na imagem, títulos genéricos ("PROFISSIONALISMO ✓", "TRANSFORME SUAS REDES SOCIAIS") e banco de imagens com números. Plano:

1. **Partir do bruto.** No Drive há `rodrigo_domingues.mp4` (53MB). Se for o arquivo sem legenda, uso ele. Se não for, trabalho em cima da versão atual, cobrindo a legenda antiga.
2. **Cortes.**
   - Tiro os inserts de banco de imagens e os selos com ✓.
   - Fica só ele falando, com cortes secos nos respiros.
   - A ordem dá destaque a "Todas as reuniões eram pautadas nas minhas dificuldades" e "Todas as postagens só eram postadas após a minha análise".
3. **Imagem.** Correção de cor leve e reenquadramento em 4:5 para o site e 9:16 para o Instagram.
4. **Legenda nova, na tipografia do site:**
   - Newsreader em itálico.
   - Uma frase por vez, palavra-chave em lavanda.
   - Sem caixa preta atrás.
5. **Áudio.** Normalizado, sem música por cima, porque a voz é a prova.
6. **Fechamento.** Lettering final com o nome, a especialidade e a cidade ("Dr. Rodrigo Domingues · Cirurgião vascular · João Pessoa, PB") e a estrela da marca.
7. **No site.** Começa mudo em loop, com legenda. Ao tocar, reinicia com som.

Um detalhe: ele fala "Sou cliente da Essence Marketing" e a transcrição automática entendeu "SS Martin". Na legenda vai o nome certo.

---

## 6. O que preciso que você confirme

1. **Preços.**
   - O documento institucional traz Direção a R$ 1.000, Presence a partir de R$ 2.500 e Performance a partir de R$ 4.000.
   - A proposta de novembro diz "a partir de R$ 1.500".
   - Quais valores entram no site? Ou prefere não mostrar preço?
2. **Nome da sócia.** O site usa "Laiza Wink" e o documento usa "Laysa Wink". Qual é o certo? E tem foto boa dela, além da que está no site atual?
3. **Cases.** Os quatro médicos do site atual autorizaram o uso do nome e do feed? Algum case novo deveria entrar?
4. **Cidade.** Posso assumir Anápolis (GO), que está na proposta?
5. **Onde o código vai morar.** Hoje este ambiente só tem o repositório do Gustavo. Prefere que eu crie um repositório novo para a Essence, ou uma pasta separada aqui por enquanto?
6. **E-mail.** Mantenho operacaola.ca@gmail.com ou existe um e-mail no domínio?
