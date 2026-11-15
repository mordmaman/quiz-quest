# Quiz Quest

A family quiz with questions pitched at four levels: **Age 7**, **Age 11**, **Age 14** and **Grown-up**.

**Play it:** https://mordmaman.github.io/quiz-quest/

## How it works

- Add the players and pick each person's level. Names and scores stay on the device and aren't stored anywhere else.
- **Solo:** tap your card, pick a topic and answer 10 multiple-choice questions. After every answer there's a "did you know?" fact. At the end you get stars and a review of anything you got wrong.
- **Family Battle:** take turns passing the device round. Everyone gets questions at their own level, so it's fair across ages.
- **Read it to me:** reads the question and answers aloud. It's on by default for the Age 7 level.

## Topics

Animals & Nature, Science, Geography, History, Space, Words, Ivrit, Yediah Klalit, Pirkei Avot, Maths, Sport and Mixed Bag.

The 420 general-knowledge questions are 15 per topic per level. Maths questions are generated fresh each time and show the working.

### Ivrit (Modern Hebrew)

405 questions, split into sections you can practise one at a time (or pick "A bit of everything"):

- **Age 7** (57): Alef-bet, First words, Colours & numbers, Hello & thank you. Hebrew has nikud.
- **Age 11** (73): Phrases & questions, Vocabulary, Numbers, days & time, Grammar basics, Israel & culture. Hebrew has nikud.
- **Age 14** (207): written for GCSE Modern Hebrew revision (AQA 8678). One section for each AQA topic area (Me, family & friends; Technology; Free time; Customs & festivals; Home & town; Social issues; Global issues; Travel & tourism; School life; Post-16 & careers), plus Verbs & binyanim, Grammar toolkit, Translation and Exam instructions. Hebrew is unpointed, as in the exam, and ⭐ marks Higher-tier material.
- **Grown-up** (68): Slang & idioms, Roots & word-building, The story of Hebrew, Living in Israel, Tricky Hebrew.

Hebrew inside English sentences is shown right-to-left. If the device has a Hebrew voice, "Read it to me" says the Hebrew in Hebrew, and 🗣️ buttons read just the Hebrew (handy for listening practice). In the Alef-bet section the Hebrew is only read out after you answer, so it doesn't give the game away.

### Yediah Klalit (general Jewish knowledge)

93 questions from the yediah klalit revision cards, in five sections: Months of the year (order, how many days), Festivals & fasts (what's on which date), Brachot (on things we smell and hear), Gematria, and Books of Tanach. The same questions are used at every level.

### Pirkei Avot

84 questions on chapter 1, mishnayot 1–4 (with nikud): a section for each mishnah, plus "Who said it?". The question types are translating the mishnah and single words, matching words to meanings ("Which pair is matched correctly?"), explaining what the mishnah teaches, and completing the mishnah from a choice of words. The same questions are used at every level. To add more mishnayot, add sections to `src/avot.js`.

**Sephardi or Ashkenazi spelling:** Yediah Klalit and Pirkei Avot have a Spelling switch on their section screen (and in Family Battle when one of them is picked). Ashkenazi swaps the English transliterations, e.g. Shavuot → Shavuos, Avot → Avos, Beit → Beis, Tevet → Teves. The choice is saved on the device. The questions are written in Sephardi spelling; to add a word to the swap, add it to the `ASHK` list in `src/app.html`.

## Adding or changing questions

The questions are in `src/q1.js`, `src/q2.js` and `src/q3.js`, the Ivrit ones are in `src/ivrit-young.js` (Age 7 and 11), `src/ivrit-gcse.js` (Age 14) and `src/ivrit-adult.js`, and Yediah Klalit and Pirkei Avot are in `src/yediah.js` and `src/avot.js`. Each one looks like this:

```js
["Question?", "Right answer", "Wrong answer", "Wrong answer", "Wrong answer", "Did you know? fact"],
```

The answers are shuffled automatically. After editing, rebuild the page:

```sh
python3 build.py
```

This writes a new `index.html`. Commit it and GitHub Pages updates the quiz in a minute or so.

In the Ivrit files, put a Hebrew sentence that sits inside an English question in curly quotes, “like this”, so it's laid out right-to-left properly.

To add a new topic, add a `QB.yourtopic = { k7: [...], k11: [...], k14: [...], adult: [...] }` block and an entry in `TOPICS` in `src/app.html`. For a topic with sections, use `QS.yourtopic = { k7: [{ id, name, icon, q: [...] }, ...], ... }` instead (see the Ivrit files). New question files need adding to the list in `build.py`.
