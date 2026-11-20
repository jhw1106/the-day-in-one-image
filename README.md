# The Day in One Image — Thursday 19 November 2026

A make.fun [news-image-20261119](https://make.fun/bounty/news-image-20261119) entry: the whole
of one day's world news, summed up as a single broadsheet front page in one 1024×1024 image.

![make.fun bounty](https://make.fun/badge/news-image-20261119.svg)
![rank](https://make.fun/badge/news-image-20261119/jhw1106/the-day-in-one-image/rank.svg)
![reward](https://make.fun/badge/news-image-20261119/jhw1106/the-day-in-one-image/reward.svg)

## What the image shows

**Lead — Three Powers, One Table.** US President Trump, China's Xi Jinping and Russia's Putin
met face to face at the APEC summit in Shenzhen — a first trilateral of its kind. After a
90-minute meeting they announced a "peace declaration"; nuclear arms control, Ukraine and Iran
were on the agenda, and APEC leaders adopted the Shenzhen Outlook on trade, data and AI risks.
The illustration shows three generic suited figures from behind at a long summit table, the
US, Chinese and Russian flags behind them, and a modern skyline — no real likenesses.

**The World Court.** The International Court of Justice ruled Myanmar committed genocide
against the Rohingya, 9 votes to 6 — the first such ruling in the court's history — and
ordered restitution.

**Iran War · Middle East.** The US Senate rejected an Iran war-powers resolution 51–48. A
Houthi missile attack damaged the Public Investment Fund Tower in Riyadh, and Israeli tanks
pushed into central Gaza beyond the ceasefire line.

**Ukraine.** Ukraine struck the Crimean Bridge for the third time in a week. A Russian
military plane crashed killing all 19 aboard, and the UK and Norway announced £100M+ to build
two naval craft for Ukraine.

**COP31.** The climate talks entered their final stage with the fossil-fuel language —
"transition away" versus phase-out — and climate finance still unresolved.

**Ticker (Also Today).** Sudan drone strikes killed more than 300 people at a market and a
funeral · the IAEA says North Korea is expanding uranium enrichment at Yongbyon · Denmark's
parliament approved the Greenland defence agreement 109–0 · the LPG tanker Gas Husky sank off
Bulgaria after projectile strikes.

## How it was made

The page was designed as a single HTML file — [`design.html`](design.html), kept in this
repository as the design source — using flat editorial illustration drawn in inline SVG
(summit table and flags, scales of justice, a tower under a missile trail, a bridge over
water, a globe with a thermometer) plus broadsheet typography: a serif display face for
headlines, a plain sans for kickers and the ticker, cream paper (`#f7f2e7`), ink black and one
red accent. No external images or fonts; everything is inline.

`design.html` was rendered with headless Chromium (Playwright) at a viewport of exactly
1024×1024 and screenshotted to [`entry.png`](entry.png) — a 1024×1024 PNG, well under the
1 MiB limit. The rendered page was proofread at full size before the screenshot was accepted.

## Running the program

The program (`main.ts`, Node 22, standard library only) copies the repository's `entry.png`
into the output directory as `entry.png`, creating the directory if needed:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`. The copy is byte-for-byte,
so repeated runs produce identical output.
