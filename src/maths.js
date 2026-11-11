// Maths questions are made up fresh every time, so they never run out.
const MATHS = (() => {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pickOne = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const N = n => (n < 0 ? '−' + Math.abs(n).toLocaleString('en-GB') : (n === 0 ? 0 : n).toLocaleString('en-GB'));
  const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const sup = n => String(n).split('').map(d => SUP[d]).join('');

  // Build [question, answer, wrong1, wrong2, wrong3, working] from a numeric answer.
  function make(q, ans, cands, fact, opts) {
    opts = opts || {};
    const fmt = opts.fmt || N;
    const seen = new Set([fmt(ans)]), wrong = [];
    const add = c => {
      if (wrong.length >= 3 || !Number.isFinite(c)) return;
      if (c === 0) c = 0; // turns −0 into 0
      if (!opts.neg && c < 0) return;
      if (!opts.dec && Math.round(c) !== c) return;
      const s = fmt(c); if (seen.has(s)) return;
      seen.add(s); wrong.push(s);
    };
    cands.forEach(add);
    const spread = opts.spread || Math.max(3, Math.ceil(Math.abs(ans) * 0.15));
    let guard = 0;
    while (wrong.length < 3 && guard++ < 300) add(ans + (Math.random() < 0.5 ? -1 : 1) * R(1, spread));
    return [q, fmt(ans), ...wrong, fact];
  }

  const COUNT = [['🍎', 'apples'], ['🐟', 'fish'], ['⭐', 'stars'], ['🎈', 'balloons'], ['🐞', 'ladybirds'], ['🍪', 'cookies'], ['🚗', 'cars'], ['🌸', 'flowers']];
  const SHAPES = [['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5], ['hexagon', 6], ['octagon', 8]];
  const COINS = [1, 2, 5, 10, 20, 50];

  const k7 = [
    () => { const a = R(1, 10), b = R(1, 10); return make(`What is ${a} + ${b}?`, a + b, [a + b + 1, a + b - 1, a + b + 2], `${a} + ${b} = ${a + b}`); },
    () => { const a = R(5, 20), b = R(1, a); return make(`What is ${a} − ${b}?`, a - b, [a - b + 1, a - b - 1, a + b], `${a} − ${b} = ${a - b}`); },
    () => { const a = R(1, 9); return make(`${a} + ? = 10`, 10 - a, [11 - a, 9 - a, a], `${a} + ${10 - a} = 10. These are called number bonds to 10!`); },
    () => { const n = R(1, 10); return make(`What is double ${n}?`, 2 * n, [2 * n + 1, 2 * n - 1, n + 2], `Double ${n} means ${n} + ${n} = ${2 * n}`); },
    () => { const n = R(3, 10), e = pickOne(COUNT); return make(`How many ${e[1]} can you count?\n${e[0].repeat(n)}`, n, [n + 1, n - 1, n + 2], `There are ${n}. Touching each one as you count helps!`); },
    () => { const n = R(10, 98); return make(`What number comes after ${n}?`, n + 1, [n - 1, n + 10, n + 2], `${n} + 1 = ${n + 1}`); },
    () => { const n = R(1, 10) * 2; return make(`What is half of ${n}?`, n / 2, [n / 2 + 1, n / 2 - 1, n], `Half of ${n} is ${n / 2}, because ${n / 2} + ${n / 2} = ${n}`); },
    () => { const s = pickOne(SHAPES); return make(`How many sides does a ${s[0]} have?`, s[1], [s[1] + 1, s[1] - 1, s[1] + 2], `A ${s[0]} has ${s[1]} straight sides.`); },
    () => { const t = pickOne([2, 5, 10]), b = R(1, 10); return make(`What is ${b} × ${t}?`, b * t, [b * t + t, b * t - t, b + t], `${b} ${b === 1 ? 'lot' : 'lots'} of ${t} is ${b * t}`); },
    () => { const a = pickOne(COINS), b = pickOne(COINS); return make(`You have a ${a}p coin and a ${b}p coin. How much money is that?`, a + b, [a + b + 1, a + b + 10, Math.abs(a - b)], `${a}p + ${b}p = ${a + b}p`, { fmt: n => n + 'p' }); },
  ];

  const k11 = [
    () => { const a = R(2, 12), b = R(2, 12); return make(`What is ${a} × ${b}?`, a * b, [a * (b + 1), a * (b - 1), (a + 1) * b, a * b + 10], `${a} × ${b} = ${a * b}`); },
    () => { const d = R(2, 12), q = R(2, 12); return make(`What is ${d * q} ÷ ${d}?`, q, [q + 1, q - 1, q + 2], `${d * q} ÷ ${d} = ${q}, because ${d} × ${q} = ${d * q}`); },
    () => {
      const den = pickOne([2, 3, 4, 5, 10]), amt = den * R(2, 12), num = den > 2 && Math.random() < 0.4 ? R(2, den - 1) : 1, ans = amt / den * num;
      return make(`What is ${num}/${den} of ${amt}?`, ans, [amt / den, ans + amt / den, ans + 2, amt - ans], `${amt} ÷ ${den} = ${amt / den}${num > 1 ? `, then ${amt / den} × ${num} = ${ans}` : ''}`);
    },
    () => {
      const p = pickOne([10, 20, 25, 50]), n = { 10: 10, 20: 5, 25: 4, 50: 2 }[p] * R(2, 30), ans = n * p / 100;
      return make(`What is ${p}% of ${n}?`, ans, [ans * 2, ans + 5, n / 10, ans - 2], `${p}% of ${n} = ${n} × ${p} ÷ 100 = ${ans}`);
    },
    () => {
      const to = pickOne([10, 100, 1000]), n = R(1001, 9899), ans = Math.round(n / to) * to;
      const other = Math.floor(n / to) * to === ans ? Math.ceil(n / to) * to : Math.floor(n / to) * to;
      return make(`Round ${N(n)} to the nearest ${N(to)}.`, ans, [other, ans + to, ans - to], `Look at the digit after the ${to === 10 ? 'tens' : to === 100 ? 'hundreds' : 'thousands'}: 5 or more rounds up, 4 or less rounds down. So it's ${N(ans)}.`, { spread: to * 2 });
    },
    () => { const a = R(120, 799), b = R(110, 999 - a); return make(`What is ${a} + ${b}?`, a + b, [a + b + 10, a + b - 10, a + b + 100], `${a} + ${b} = ${a + b}`); },
    () => { const a = R(300, 999), b = R(101, a - 50); return make(`What is ${a} − ${b}?`, a - b, [a - b + 10, a - b - 10, a - b + 100], `${a} − ${b} = ${a - b}`); },
    () => { const n = R(2, 12); return make(`What is ${n} squared (${n}²)?`, n * n, [n * 2, n * n + n, (n + 1) * (n + 1)], `${n}² means ${n} × ${n} = ${n * n}`); },
    () => { const h = R(2, 5); return make(`How many minutes are in ${h} hours?`, h * 60, [h * 100, h * 60 + 30, h * 30], `There are 60 minutes in an hour, so ${h} × 60 = ${h * 60}`); },
    () => { const l = R(3, 15), w = R(2, 10); return make(`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, 2 * (l + w), [l * w, l + w, 2 * l + w], `Perimeter = ${l} + ${w} + ${l} + ${w} = ${2 * (l + w)} cm`, { fmt: n => n + ' cm' }); },
  ];

  const sgn = n => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);
  const k14 = [
    () => {
      const x = R(-6, 12), a = R(2, 9), b = R(-15, 20) || 3, c = a * x + b;
      return make(`Solve for x:  ${a}x ${sgn(b)} = ${N(c)}`, x, [x + 1, x - 1, -x, (c + b) / a, c - b],
        `${a}x = ${N(c)} ${b < 0 ? '+ ' + Math.abs(b) : '− ' + b} = ${N(c - b)}, so x = ${N(c - b)} ÷ ${a} = ${N(x)}`, { neg: true });
    },
    () => {
      const a = R(-12, 12) || 4, b = R(-12, 12) || -3, op = pickOne(['+', '−', '×']);
      const ans = op === '+' ? a + b : op === '−' ? a - b : a * b, show = n => (n < 0 ? `(${N(n)})` : N(n));
      return make(`What is ${show(a)} ${op} ${show(b)}?`, ans, [-ans, ans + 1, ans - 1, op === '×' ? a + b : a * b], `${show(a)} ${op} ${show(b)} = ${N(ans)}`, { neg: true });
    },
    () => {
      const p = pickOne([5, 15, 30, 35, 40, 45, 60, 75]), n = 20 * R(2, 20), ans = n * p / 100;
      return make(`What is ${p}% of ${n}?`, ans, [ans + n / 10, ans - n / 20, n * p / 10, ans + 5], `1% of ${n} is ${n / 100}, so ${p}% is ${n / 100} × ${p} = ${ans}`);
    },
    () => {
      const [b, e] = pickOne([[2, R(3, 8)], [3, R(2, 4)], [4, 3], [5, 3], [10, R(2, 6)], [6, 2], [7, 2]]), ans = Math.pow(b, e);
      return make(`What is ${b}${sup(e)}?`, ans, [b * e, Math.pow(b, e - 1), Math.pow(b, e + 1), ans + b], `${b}${sup(e)} = ${Array(e).fill(b).join(' × ')} = ${N(ans)}`);
    },
    () => { const n = R(4, 15); return make(`What is √${n * n}?`, n, [n + 1, n - 1, n * 2, n * n / 2], `${n} × ${n} = ${n * n}, so √${n * n} = ${n}`); },
    () => {
      const base = 2 * R(2, 10), h = R(3, 12), ans = base * h / 2;
      return make(`A triangle has a base of ${base} cm and a height of ${h} cm. What is its area?`, ans, [base * h, base + h, ans + h], `Area of a triangle = ½ × base × height = ½ × ${base} × ${h} = ${ans} cm²`, { fmt: n => n + ' cm²' });
    },
    () => {
      const a = R(25, 85), b = R(25, 150 - a), c = 180 - a - b;
      return make(`Two angles in a triangle are ${a}° and ${b}°. What is the third angle?`, c, [360 - a - b, c + 10, c - 10], `Angles in a triangle add up to 180°: 180 − ${a} − ${b} = ${c}°`, { fmt: n => n + '°' });
    },
    () => {
      const a = R(2, 9), b = R(2, 9), c = R(2, 9), t = R(0, 2);
      if (t === 0) return make(`What is ${a} + ${b} × ${c}?`, a + b * c, [(a + b) * c, a * b + c, a + b + c], `Multiply first: ${b} × ${c} = ${b * c}, then ${a} + ${b * c} = ${a + b * c}`);
      if (t === 1) return make(`What is (${a} + ${b}) × ${c}?`, (a + b) * c, [a + b * c, a * c + b, a + b + c], `Brackets first: ${a} + ${b} = ${a + b}, then ${a + b} × ${c} = ${(a + b) * c}`);
      return make(`What is ${a * c} ÷ ${c} + ${b}?`, a + b, [a + b + 1, a * c + b, a + b - 1], `Divide first: ${a * c} ÷ ${c} = ${a}, then ${a} + ${b} = ${a + b}`);
    },
    () => {
      for (let tries = 0; tries < 50; tries++) {
        const k = R(3, 5), mean = R(4, 20), nums = [];
        for (let i = 0; i < k - 1; i++) nums.push(R(Math.max(1, mean - 8), mean + 8));
        const last = mean * k - nums.reduce((s, v) => s + v, 0);
        if (last < 1 || last > 40) continue;
        nums.push(last);
        const sum = mean * k;
        return make(`What is the mean of ${nums.join(', ')}?`, mean, [mean + 1, mean - 1, sum, mean + 2], `Add them up (${sum}) and divide by how many there are (${k}): ${sum} ÷ ${k} = ${mean}`);
      }
      return make('What is the mean of 2, 4 and 6?', 4, [3, 5, 12], 'Add them up (12) and divide by 3: 12 ÷ 3 = 4');
    },
  ];

  const PRIMES = [53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149];
  const FAKES = [51, 57, 69, 77, 81, 87, 91, 93, 99, 111, 117, 119, 121, 123, 129, 133, 141, 143, 147];
  const smallestFactor = n => { for (let d = 2; d * d <= n; d++) if (n % d === 0) return d; return n; };
  const FRACS = [['1/8', 12.5], ['3/8', 37.5], ['5/8', 62.5], ['7/8', 87.5], ['3/5', 60], ['7/20', 35], ['9/25', 36], ['11/20', 55], ['3/40', 7.5], ['1/16', 6.25], ['2/5', 40], ['3/25', 12]];

  const adult = [
    () => { const a = R(12, 49), b = R(11, 29), t = b - (b % 10), u = b % 10; return make(`What is ${a} × ${b}?`, a * b, [a * b + 10, a * b - 10, a * (b + 1), (a + 1) * b], u ? `${a} × ${t} = ${N(a * t)} and ${a} × ${u} = ${a * u}, so ${a} × ${b} = ${N(a * b)}` : `${a} × ${b} = ${N(a * b)}`); },
    () => {
      const [p, m] = pickOne([[12.5, 8], [15, 20], [17.5, 40], [35, 20], [45, 20], [2.5, 40], [7.5, 40]]), n = m * R(3, 30), ans = n * p / 100;
      return make(`What is ${p}% of ${N(n)}?`, ans, [ans * 2, n * p / 10, ans + n / 20, ans - n / 40], `${p}% of ${N(n)} = ${N(n)} × ${p} ÷ 100 = ${N(ans)}`);
    },
    () => {
      const x = 5 * R(2, 60), vat = x / 5, ans = x + vat;
      return make(`A price is £${x} before 20% VAT. What is the price including VAT?`, ans, [x + 20, x + x / 10, ans + 5, x * 5 / 4], `20% of £${x} is £${vat}, so £${x} + £${vat} = £${ans}`, { fmt: n => '£' + N(n) });
    },
    () => {
      const a = 20 * R(2, 20), pc = pickOne([10, 15, 20, 25, 40, 50, 60, 75]), up = Math.random() < 0.6 || pc > 50;
      const ch = a * pc / 100, b = up ? a + ch : a - ch;
      return make(`A price changes from £${a} to £${b}. What is the percentage ${up ? 'increase' : 'decrease'}?`, pc, [pc + 5, pc - 5, Math.round(ch / b * 100), pc * 2],
        `The change is £${ch}. £${ch} ÷ £${a} × 100 = ${pc}%. (Always divide by the original price!)`, { fmt: n => n + '%' });
    },
    () => { const n = R(13, 35); return make(`What is ${n}²?`, n * n, [n * n + n, n * n - n, (n - 1) * (n + 1), n * n + 10], `${n}² = ${n} × ${n} = ${N(n * n)}`); },
    () => { const n = R(13, 30); return make(`What is √${N(n * n)}?`, n, [n + 1, n - 1, n + 2, n - 2], `${n} × ${n} = ${N(n * n)}, so √${N(n * n)} = ${n}`); },
    () => {
      const p = pickOne(PRIMES), f = shuffle(FAKES).slice(0, 3), d = smallestFactor(f[0]);
      return ['Which of these is a prime number?', String(p), ...f.map(String), `${p} can only be divided by 1 and itself. ${f[0]} isn't prime: ${d} × ${f[0] / d} = ${f[0]}.`];
    },
    () => {
      const fr = pickOne(FRACS), others = shuffle(FRACS.filter(x => x[1] !== fr[1])).slice(0, 3), [nm, dn] = fr[0].split('/');
      return [`What is ${fr[0]} as a percentage?`, fr[1] + '%', ...others.map(o => o[1] + '%'), `${fr[0]} = ${nm} ÷ ${dn} = ${fr[1] / 100} = ${fr[1]}%`];
    },
    () => { const n = R(8, 12), ans = Math.pow(2, n); return make(`What is 2${sup(n)}?`, ans, [ans / 2, ans * 2, 2 * n, ans + ans / 4], `2${sup(n)} = ${N(ans)}. Each extra power doubles the number.`); },
    () => { const q = R(101, 999), d = R(3, 9); return make(`What is ${N(q * d)} ÷ ${d}?`, q, [q + 1, q - 1, q + 10, q - 10], `${q} × ${d} = ${N(q * d)}, so ${N(q * d)} ÷ ${d} = ${q}`); },
    () => {
      const s = 10 * R(3, 8), t = pickOne([0.5, 1.5, 2.5, 3.5]), d = s * t;
      return make(`A car travels at ${s} mph for ${t} hours. How far does it go?`, d, [d + s, d - s / 2, s + t * 10, d + 10], `Distance = speed × time = ${s} × ${t} = ${d} miles`, { fmt: n => N(n) + ' miles' });
    },
  ];

  const GEN = { k7, k11, k14, adult };
  return { generate: level => pickOne(GEN[level])(), GEN };
})();
