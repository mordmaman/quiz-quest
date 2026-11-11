# Quiz Quest

A family quiz with questions pitched at four levels: **Age 7**, **Age 11**, **Age 14** and **Grown-up**.

**Play it:** https://mordmaman.github.io/quiz-quest/

## How it works

- Add the players and pick each person's level. Names and scores stay on the device and aren't stored anywhere else.
- **Solo:** tap your card, pick a topic and answer 10 multiple-choice questions. After every answer there's a "did you know?" fact. At the end you get stars and a review of anything you got wrong.
- **Family Battle:** take turns passing the device round. Everyone gets questions at their own level, so it's fair across ages.
- **Read it to me:** reads the question and answers aloud. It's on by default for the Age 7 level.

## Topics

Animals & Nature, Science, Geography, History, Space, Words, Maths, Sport and Mixed Bag.

The 420 written questions are 15 per topic per level. Maths questions are generated fresh each time and show the working.

## Adding or changing questions

The questions are in `src/q1.js`, `src/q2.js` and `src/q3.js`. Each one looks like this:

```js
["Question?", "Right answer", "Wrong answer", "Wrong answer", "Wrong answer", "Did you know? fact"],
```

The answers are shuffled automatically. After editing, rebuild the page:

```sh
python3 build.py
```

This writes a new `index.html`. Commit it and GitHub Pages updates the quiz in a minute or so.

To add a new topic, add a `QB.yourtopic = { k7: [...], k11: [...], k14: [...], adult: [...] }` block and an entry in `TOPICS` in `src/app.html`.
