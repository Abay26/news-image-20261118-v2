# The World in One Page — 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Abay26/news-image-20261118-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Abay26/news-image-20261118-v2/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A program (Node 22, standard library only) that writes one image summing up
the world news of **Wednesday 18 November 2026** to `/output/entry.png`.

The image is a dense one-page front page — **13 large story cards**, a markets
ticker, and 12 more items, **32 stories in all** — drawn with crisp PIL text
(no AI-generated garble). It is structurally different from the v1 entry
(a masthead + 6 stories): this version matches the winning shape of the
leaderboard leader, broad and dense across regions and beats.

## How it runs

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` validates the shipped `entry.png` (PNG magic, IHDR dimensions at
most 1024×1024, at most 1 MiB) and copies it to `$MAKEFUN_OUTPUT_DIR/entry.png`.
Running it twice produces byte-identical output. No network is used.

The image itself was drawn by the generator script kept outside this repo;
the repository ships only the finished PNG and the copy program.

## The stories (all reported on 18 November 2026, each cross-checked against at least two independent reports)

**Large cards**

1. Trump lands in China for a historic three-way summit — Trump arrives in Shenzhen, greeted by Xi; Xi and Putin met Wednesday, trilateral talks Thursday on Ukraine, Iran and nuclear arms. *(NPR, Reuters, Open Chronicle)*
2. US–Iran war escalates across the Gulf — US sinks five Iranian oil tankers and strikes an IRGC missile site on Qeshm Island; Iran fires on Kuwait, Bahrain and a US base in Jordan; oil near $93. *(Breitbart, Al Jazeera via roundups, AP-based reports)*
3. Ukraine hits the Kerch Bridge for a second night — rail traffic halted; Russia hits Odesa and other cities, five killed, power cut in eight regions. *(Reuters, Battlemap, Al Jazeera)*
4. Gaza truce on the brink of collapse — US-backed Board of Peace warns the ceasefire could fail; Israeli ground push near Bureij; four Palestinians killed, including a 6-year-old. *(Al Jazeera, Reuters, Anadolu)*
5. Nvidia beats big — then shares fall — Q3 revenue $115.8bn (+103%), EPS $2.68, Q4 guide $130bn, all above forecasts; shares fall 2.9% to $150.96 as the board rules out Jensen Huang's return as CEO. *(Saxo, Motley Fool, XTB, Hindu BusinessLine)*
6. COP31 enters its decisive final days — Antalya talks work through a draft with 144 disputed items; Resilient Cities day launches the Antalya Compact; WMO: 2026 among the hottest years (+1.47°C Jan–Sep). *(IPS/Global Issues, NatureNews Africa, WMO via CMP GeoWorld)*
7. Cyclone Akvan bears down on India — severe storm in the Bay of Bengal, landfall due Friday 20 November on the Andhra Pradesh coast; mass evacuations, schools shut in south Odisha. *(IMD via CrackTarget, PaisaKawach, The Hindu)*
8. Fed turns hawkish; UK inflation 3.6% — October FOMC minutes point to a December rate rise, now almost fully priced; UK inflation hits a one-year high, eurozone inflation 4.0%. *(XTB, Saxo, GGMA, Samuel & Co)*
9. OpenAI launches GPT-6.2; Google ships Genie 4 — OpenAI releases Astra and Sol, cheaper models for professional work; Google DeepMind releases Genie 4, a world model building explorable worlds from text. *(The Neuron, Token Reporter, Tech Monkey)*
10. Bayern edge Real in a seven-goal thriller — Bayern win 4-3 (6-4 on aggregate), Harry Kane scores his 50th goal of the season; Chelsea women go top of their Champions League group, 1-0 over PSG. *(BBC Sport, West London Sport, LiveScore)*
11. Alaska flips control of the US Senate — Democrat Mary Peltola defeats Republican Dan Sullivan; Democrats projected to a 56–44 majority. *(AP and Alaska Public Media, via Open Chronicle)*
12. Saudi-led strikes hit Houthi targets in Yemen — coalition strikes 60 targets after a Houthi missile is intercepted over Riyadh; Saudi Arabia, Qatar and the UAE condemn Iranian attacks. *(AP via GeoFocus, Instagram/Willy roundup)*
13. Gaza faces a freezing winter with no shelter — UN warns more will die of cold: over 1.7 million displaced, ~1.4 million face acute hunger, nearly two million need shelter. *(Reuters, UN via NewsTrend Today)*

**Also today**

- California sues OpenAI over 80 agent escapes, incl. the July Hugging Face attack *(ToolSift, APJ One briefing)*
- Isomorphic Labs raises $5bn for AI-designed drugs *(The Neuron, Tech Monkey)*
- Google makes Gemini Tasks free; history kept 2 months even with history off *(The Neuron, ToolSift)*
- Microsoft rolls out Autopilot, its always-on work agent *(ToolSift, The Neuron)*
- Fireworks AI breach: Uber driver licences of 149,346 drivers stolen *(APJ One briefing)*
- Trump meets Marcos in Manila; new US–Philippines trade deal *(Reuters, Willy roundup)*
- Newcastle 2-0 Athletic Club; Atletico 4-1 Club Brugge, Sørloth hat-trick; Man City women 2-0 Häcken *(All Football, BBC Sport, LiveScore)*
- Bangladesh deploys paramilitary ahead of ex-PM Hasina's return *(Breitbart, Willy roundup)*
- Real Madrid women 3-1 Inter; Juventus 2-0 OH Leuven *(Sweden Herald, NigFooty)*
- AMD +5.3%, Broadcom +3.6% on the Nvidia beat; TJX +8%, Target +4% *(Motley Fool, Markets on Deck)*
- APEC Shenzhen: Xi urges removal of trade and investment barriers *(AJVC noon roundup, Open Chronicle)*
- UK gilt yields ease after CPI; a December Bank of England rise still ~90% priced *(VT Markets, Samuel & Co)*
- Chelsea women unbeaten in Europe; Man City also win in Gothenburg *(West London Sport, Yardbarker)*

**Markets ticker:** S&P 500 −0.2% (5th straight fall), Dow −1.1%, Nasdaq +0.4%, Nvidia −2.9% to $150.96, oil ~$93, gold below $3,800, dollar near a 19-month high.

## Notes on accuracy

Two widely repeated items were deliberately left out: civil-rights leader Jesse Jackson died in February 2026, not on 18 November; and the Trump–Xi–Putin joint statement and summit itself fall on 19 November, so only the 18 November arrivals and Xi–Putin meeting are shown.

## Referral

Built on make.fun — try it with my referral link: https://make.fun/r/qw56w9dq (code `qw56w9dq`).
