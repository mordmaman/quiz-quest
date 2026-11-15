// =====================================================================
//  PIRKEI AVOT: chapter 1, mishnayot 1–4. Text (with nikud) from Sefaria (Torat Emet).
//  Translation, meaning, matching words and completing the mishnah.
//  The same questions are used at every level.
//  Each question is [question, right answer, wrong, wrong, wrong, "did you know?" fact].
//  Put Hebrew inside English text in curly quotes “like this”. Use ___ for a gap.
// =====================================================================
QS.avot = { notes: {} };
QS.avot.notes.k7 = QS.avot.notes.k11 = QS.avot.notes.k14 = QS.avot.notes.adult =
  "Pirkei Avot chapter 1, mishnayot 1–4: what the words mean, what the mishnah teaches, and filling in the gaps. Tap 🗣️ to hear the Hebrew.";

QS.avot.k7 = QS.avot.k11 = QS.avot.k14 = QS.avot.adult = [
  // 1:1 מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי, וּמְסָרָהּ לִיהוֹשֻׁעַ, וִיהוֹשֻׁעַ לִזְקֵנִים, וּזְקֵנִים לִנְבִיאִים, וּנְבִיאִים מְסָרוּהָ לְאַנְשֵׁי כְנֶסֶת הַגְּדוֹלָה.
  //     הֵם אָמְרוּ שְׁלשָׁה דְבָרִים, הֱווּ מְתוּנִים בַּדִּין, וְהַעֲמִידוּ תַלְמִידִים הַרְבֵּה, וַעֲשׂוּ סְיָג לַתּוֹרָה
  { id: "m1", name: "Mishnah 1: מֹשֶׁה קִבֵּל", icon: "⛰️", q: [
    ["What does “מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי” mean?", "Moshe received the Torah from Sinai", "Moshe gave the Torah at Sinai", "Moshe taught the Torah in Sinai", "Moshe wrote the Torah on Sinai", "'From Sinai' means from Hashem, who gave it at Har Sinai."],
    ["What does קִבֵּל mean?", "Received", "Gave", "Wrote", "Taught", "קִבֵּל = received. The same root gives us קַבָּלָה (tradition) and לְקַבֵּל (to receive)."],
    ["What does וּמְסָרָהּ mean?", "And passed it on", "And received it", "And kept it", "And read it", "מָסַר = to hand over. A מָסוֹרֶת is a tradition handed down from one generation to the next."],
    ["Who did Moshe pass the Torah on to?", "Yehoshua", "Aharon", "The Elders", "The Prophets", "“וּמְסָרָהּ לִיהוֹשֻׁעַ” — Yehoshua was Moshe's student and led the people after him."],
    ["What does זְקֵנִים mean?", "Elders", "Prophets", "Students", "Judges", "The Elders led the people after Yehoshua, in the time of the Shoftim (Judges)."],
    ["What does נְבִיאִים mean?", "Prophets", "Elders", "Kings", "Priests", "The prophets, like Shmuel, Eliyahu and Yirmiyahu, passed on the Torah after the Elders."],
    ["Who passed the Torah on to the אַנְשֵׁי כְנֶסֶת הַגְּדוֹלָה?", "The Prophets", "The Elders", "Yehoshua", "Moshe", "“וּנְבִיאִים מְסָרוּהָ לְאַנְשֵׁי כְנֶסֶת הַגְּדוֹלָה”"],
    ["Put the chain in the right order:", "Moshe → Yehoshua → Elders → Prophets → Great Assembly", "Moshe → Elders → Yehoshua → Prophets → Great Assembly", "Moshe → Yehoshua → Prophets → Elders → Great Assembly", "Moshe → Prophets → Elders → Yehoshua → Great Assembly", "This is the chain of the Oral Torah. Every link learned it from the one before."],
    ["What does אַנְשֵׁי כְנֶסֶת הַגְּדוֹלָה mean?", "The Men of the Great Assembly", "The great men of the shul", "The people of the big city", "The leaders of the Beit HaMikdash", "120 sages at the start of the Second Temple, led by Ezra. They wrote the words of the Amidah."],
    ["How many things did the Men of the Great Assembly say?", "3", "2", "4", "10", "“הֵם אָמְרוּ שְׁלשָׁה דְבָרִים” — they said three things."],
    ["What does “הֱווּ מְתוּנִים בַּדִּין” mean?", "Be patient and careful in judgement", "Be strict in judgement", "Judge quickly", "Always find people innocent", "A judge should take time and think it through, not decide in a hurry."],
    ["What does מְתוּנִים mean?", "Patient, unhurried", "Strict", "Fast", "Kind", "From מָתוֹן: slow and careful. In modern Hebrew, בְּמָתִינוּת means 'calmly'."],
    ["What does “וְהַעֲמִידוּ תַלְמִידִים הַרְבֵּה” mean?", "Raise up many students", "Stand up for your teachers", "Make the students stand", "Choose only a few students", "הַעֲמִידוּ = make stand, raise up. Teach lots of students so the Torah keeps going."],
    ["What does “וַעֲשׂוּ סְיָג לַתּוֹרָה” mean?", "Make a fence for the Torah", "Make a book of the Torah", "Make a party for the Torah", "Make a home for the Torah", "Extra rules that keep us far from breaking a mitzvah of the Torah."],
    ["What does סְיָג mean?", "A fence", "A judgement", "A student", "A prophet", "A סְיָג protects the Torah, like a fence round a garden. 🌳"],
    ["Which of these is an example of a סְיָג (fence)?", "Not picking up a pen on Shabbat, so you won't come to write", "Eating matzah on Pesach night", "Saying Shema in the morning", "Hearing the shofar on Rosh Hashanah", "The rule of muktzeh is a fence: not even touching a pen keeps you far from writing."],
    ["Complete: “מֹשֶׁה קִבֵּל תּוֹרָה ___, וּמְסָרָהּ לִיהוֹשֻׁעַ”", "מִסִּינַי", "מִמִּצְרַיִם", "מֵאַהֲרֹן", "בַּמִּדְבָּר", "Moshe received the Torah from Sinai."],
    ["Complete: “וּנְבִיאִים מְסָרוּהָ לְאַנְשֵׁי ___ הַגְּדוֹלָה”", "כְנֶסֶת", "בֵית", "עִיר", "מִשְׁפָּחָה", "כְּנֶסֶת = gathering or assembly. Israel's parliament is called the כְּנֶסֶת after it."],
    ["Complete: “הֱווּ מְתוּנִים בַּדִּין, וְהַעֲמִידוּ ___ הַרְבֵּה”", "תַלְמִידִים", "זְקֵנִים", "נְבִיאִים", "דְבָרִים", "Raise up many students."],
    ["Complete: “וַעֲשׂוּ ___ לַתּוֹרָה”", "סְיָג", "דִּין", "כָּבוֹד", "שִׂמְחָה", "Make a fence for the Torah."],
    ["Which pair is matched correctly?", "זְקֵנִים = elders", "נְבִיאִים = students", "סְיָג = judgement", "דִּין = fence", "זְקֵנִים = elders · נְבִיאִים = prophets · תַלְמִידִים = students · דִּין = judgement · סְיָג = fence"],
    ["Why does Pirkei Avot start with Moshe receiving the Torah at Sinai?", "To show the Sages' teachings also come from Sinai", "Because it's the first story in the Chumash", "Because Moshe wrote Pirkei Avot", "To teach us the date of Shavuot", "The Bartenura explains that all the advice in Avot was also handed down from Sinai."],
  ]},
  // 1:2 שִׁמְעוֹן הַצַּדִּיק הָיָה מִשְּׁיָרֵי כְנֶסֶת הַגְּדוֹלָה. הוּא הָיָה אוֹמֵר, עַל שְׁלשָׁה דְבָרִים הָעוֹלָם עוֹמֵד, עַל הַתּוֹרָה וְעַל הָעֲבוֹדָה וְעַל גְּמִילוּת חֲסָדִים
  { id: "m2", name: "Mishnah 2: שִׁמְעוֹן הַצַּדִּיק", icon: "🌍", q: [
    ["What does שִׁמְעוֹן הַצַּדִּיק mean?", "Shimon the Righteous", "Shimon the Wise", "Shimon the Priest", "Shimon the King", "He was the Kohen Gadol (High Priest) in the Second Beit HaMikdash."],
    ["What does “הָיָה מִשְּׁיָרֵי כְנֶסֶת הַגְּדוֹלָה” mean?", "He was one of the last of the Great Assembly", "He was the leader of the Great Assembly", "He was the first of the Great Assembly", "He was not part of the Great Assembly", "שְׁיָרִים = what's left over (like 'shirayim' from the Rebbe's table)."],
    ["What does “הוּא הָיָה אוֹמֵר” mean?", "He used to say", "He will say", "He never said", "He said once", "הָיָה אוֹמֵר means he said it often: it was his regular teaching."],
    ["What does “עַל שְׁלשָׁה דְבָרִים הָעוֹלָם עוֹמֵד” mean?", "The world stands on three things", "Three things stand in the world", "The world will end after three things", "Stand up for three things", "Like a table on three legs, the world is held up by these three."],
    ["What does עוֹמֵד mean?", "Stands", "Sits", "Turns", "Falls", "עוֹמֵד = stands. The Amidah prayer is called that because we stand for it."],
    ["What are the three things the world stands on?", "Torah, Avodah, Gemilut Chasadim", "Torah, Truth, Peace", "Prayer, Tzedakah, Teshuvah", "Shabbat, Kashrut, Tefillin", "“עַל הַתּוֹרָה וְעַל הָעֲבוֹדָה וְעַל גְּמִילוּת חֲסָדִים”. Truth, judgement and peace are in Mishnah 18!"],
    ["Which is NOT one of the three things in this mishnah?", "אֱמֶת (truth)", "תּוֹרָה", "עֲבוֹדָה", "גְּמִילוּת חֲסָדִים", "Truth comes later, in Mishnah 18: the world lasts on דִּין, אֱמֶת and שָׁלוֹם."],
    ["What does הָעֲבוֹדָה mean here?", "Serving Hashem: korbanot, and today prayer", "Going to work to earn money", "Being a slave", "Doing homework", "In the Beit HaMikdash it was the korbanot. Today we serve Hashem with tefillah, 'the service of the heart'."],
    ["What does גְּמִילוּת חֲסָדִים mean?", "Acts of kindness", "Giving charity only to the poor", "Learning Torah", "Saying thank you", "The Gemara says it's even greater than tzedakah: you can do it with your body, for rich and poor, living and dead."],
    ["Which of these is גְּמִילוּת חֲסָדִים?", "Visiting a friend who is ill", "Davening Mincha", "Learning a mishnah", "Keeping Shabbat", "Bikur cholim, welcoming guests and helping someone carry their shopping are all acts of kindness."],
    ["Davening Mincha is which of the three things?", "הָעֲבוֹדָה", "הַתּוֹרָה", "גְּמִילוּת חֲסָדִים", "None of them", "Prayer is called עֲבוֹדָה שֶׁבַּלֵּב: the service of the heart."],
    ["Learning Pirkei Avot is which of the three things?", "הַתּוֹרָה", "הָעֲבוֹדָה", "גְּמִילוּת חֲסָדִים", "None of them", "Just by doing this quiz you're holding up the world! 🌍"],
    ["Complete: “עַל הַתּוֹרָה וְעַל ___ וְעַל גְּמִילוּת חֲסָדִים”", "הָעֲבוֹדָה", "הָאֱמֶת", "הַדִּין", "הַשָּׁלוֹם", "Torah, Avodah and Gemilut Chasadim."],
    ["Complete: “עַל שְׁלשָׁה דְבָרִים ___ עוֹמֵד”", "הָעוֹלָם", "הָאָדָם", "הַבַּיִת", "הָעָם", "The world stands on three things."],
    ["Complete: “שִׁמְעוֹן הַצַּדִּיק הָיָה ___ כְנֶסֶת הַגְּדוֹלָה”", "מִשְּׁיָרֵי", "רֹאשׁ", "תַּלְמִיד", "אֲבִי", "He was one of the last ones left from the Great Assembly."],
    ["Which pair is matched correctly?", "עוֹמֵד = stands", "עוֹלָם = Torah", "עֲבוֹדָה = kindness", "חֲסָדִים = service", "עוֹלָם = world · עֲבוֹדָה = service · חֲסָדִים = kindnesses · עוֹמֵד = stands"],
    ["According to the Gemara, which famous king bowed down when he met Shimon HaTzaddik?", "Alexander the Great", "Nevuchadnetzar", "Achashverosh", "King Shlomo", "Alexander said he saw Shimon's image before him whenever he won a battle (Yoma 69a)."],
  ]},
  // 1:3 אַנְטִיגְנוֹס אִישׁ סוֹכוֹ קִבֵּל מִשִּׁמְעוֹן הַצַּדִּיק. הוּא הָיָה אוֹמֵר, אַל תִּהְיוּ כַעֲבָדִים הַמְשַׁמְּשִׁין אֶת הָרַב עַל מְנָת לְקַבֵּל פְּרָס,
  //     אֶלָּא הֱווּ כַעֲבָדִים הַמְשַׁמְּשִׁין אֶת הָרַב שֶׁלֹּא עַל מְנָת לְקַבֵּל פְּרָס, וִיהִי מוֹרָא שָׁמַיִם עֲלֵיכֶם
  { id: "m3", name: "Mishnah 3: אַנְטִיגְנוֹס", icon: "🤲", q: [
    ["Who received the Torah from Shimon HaTzaddik?", "Antigonus of Socho", "Yossi ben Yoezer", "Hillel", "Ezra", "“אַנְטִיגְנוֹס אִישׁ סוֹכוֹ קִבֵּל מִשִּׁמְעוֹן הַצַּדִּיק”"],
    ["What does אִישׁ סוֹכוֹ mean?", "A man from the town of Socho", "A man who builds sukkot", "A very holy man", "A man of the Great Assembly", "Socho was a town in Yehudah. Antigonus is a Greek name, from the time when Greece ruled Eretz Yisrael."],
    ["What does עֲבָדִים mean?", "Servants", "Students", "Children", "Soldiers", "עֶבֶד = servant. That's where עֲבוֹדָה (service, work) comes from."],
    ["What does “הַמְשַׁמְּשִׁין אֶת הָרַב” mean?", "Who serve the master", "Who learn from the rabbi", "Who pay the master", "Who are afraid of the master", "In this mishnah רַב means master. The servants stand for us, and the master for Hashem."],
    ["What does “עַל מְנָת לְקַבֵּל פְּרָס” mean?", "In order to get a reward", "Without getting a reward", "In order to give a present", "After getting paid", "עַל מְנָת = in order to · לְקַבֵּל = to receive · פְּרָס = reward"],
    ["What does פְּרָס mean?", "Reward, prize", "Punishment", "Master", "Fear", "In modern Hebrew a פְּרָס is a prize, like פְּרָס נוֹבֵּל (the Nobel Prize). 🏆"],
    ["What does “אַל תִּהְיוּ” mean?", "Do not be", "You must be", "You will be", "Let there be", "אַל = don't. Compare “הֱווּ” = be!"],
    ["What does אֶלָּא mean?", "But rather", "Because", "And also", "Only if", "Don't be like this, אֶלָּא (but rather) be like that."],
    ["What is the main lesson of Antigonus?", "Serve Hashem out of love, not to get a reward", "Only do mitzvot that have a reward", "Servants should always be paid on time", "It's wrong to work for anyone else", "Do mitzvot because they're right and because you love Hashem, not for the prize."],
    ["What does “וִיהִי מוֹרָא שָׁמַיִם עֲלֵיכֶם” mean?", "And let the fear of Heaven be upon you", "And look up at the sky", "And let Heaven reward you", "And don't be afraid of anything", "מוֹרָא = fear or awe · שָׁמַיִם = Heaven, a way of saying Hashem."],
    ["Why does Antigonus add “וִיהִי מוֹרָא שָׁמַיִם עֲלֵיכֶם”?", "So that serving out of love comes with awe and respect too", "Because Hashem only wants us to be afraid", "To warn that there's no reward at all", "To teach us to look at the stars", "Love makes you want to do more, awe stops you from doing wrong. The best service has both."],
    ["Complete: “אַל תִּהְיוּ כַעֲבָדִים הַמְשַׁמְּשִׁין אֶת הָרַב עַל מְנָת לְקַבֵּל ___”", "פְּרָס", "תּוֹרָה", "כָּבוֹד", "מוֹרָא", "Don't be like servants who serve the master to get a reward."],
    ["Complete: “אֶלָּא הֱווּ כַעֲבָדִים הַמְשַׁמְּשִׁין אֶת הָרַב ___ עַל מְנָת לְקַבֵּל פְּרָס”", "שֶׁלֹּא", "כְּדֵי", "רַק", "גַּם", "שֶׁלֹּא = not. The only change from the first half is this one word!"],
    ["Complete: “וִיהִי ___ שָׁמַיִם עֲלֵיכֶם”", "מוֹרָא", "פְּרָס", "כְּבוֹד", "מַלְכוּת", "And let the fear of Heaven be upon you."],
    ["Which pair is matched correctly?", "פְּרָס = reward", "עֲבָדִים = masters", "מוֹרָא = love", "אֶלָּא = because", "פְּרָס = reward · עֲבָדִים = servants · מוֹרָא = fear, awe · אֶלָּא = but rather"],
    ["Two students misunderstood this mishnah and thought there's no reward at all. Which group came from one of them?", "The Tzedukim (Sadducees)", "The Chashmona'im", "The Pharisees", "The Men of the Great Assembly", "Tzadok and Baitos started the Tzedukim and the Baitusim (Avot DeRabbi Natan 5). Of course there IS reward, just don't serve for it!"],
  ]},
  // 1:4 יוֹסֵי בֶן יוֹעֶזֶר אִישׁ צְרֵדָה וְיוֹסֵי בֶן יוֹחָנָן אִישׁ יְרוּשָׁלַיִם קִבְּלוּ מֵהֶם. יוֹסֵי בֶן יוֹעֶזֶר אִישׁ צְרֵדָה אוֹמֵר,
  //     יְהִי בֵיתְךָ בֵית וַעַד לַחֲכָמִים, וֶהֱוֵי מִתְאַבֵּק בַּעֲפַר רַגְלֵיהֶם, וֶהֱוֵי שׁוֹתֶה בְצָמָא אֶת דִּבְרֵיהֶם
  { id: "m4", name: "Mishnah 4: יוֹסֵי בֶן יוֹעֶזֶר", icon: "🏠", q: [
    ["Who received the Torah next, in Mishnah 4?", "Yossi ben Yoezer and Yossi ben Yochanan", "Antigonus of Socho", "Shimon HaTzaddik", "Hillel and Shammai", "Two people at once! They're the first of the זוּגוֹת, the five Pairs."],
    ["What were the זוּגוֹת (Pairs)?", "Two leaders at a time: the Nasi and the Av Beit Din", "Twins who were both rabbis", "Two people who always argued", "A father and his son", "There were five pairs. The last pair was Hillel and Shammai."],
    ["Where was Yossi ben Yoezer from?", "צְרֵדָה", "יְרוּשָׁלַיִם", "סוֹכוֹ", "בָּבֶל", "“יוֹסֵי בֶן יוֹעֶזֶר אִישׁ צְרֵדָה”"],
    ["Where was Yossi ben Yochanan from?", "יְרוּשָׁלַיִם", "צְרֵדָה", "סוֹכוֹ", "חֶבְרוֹן", "“וְיוֹסֵי בֶן יוֹחָנָן אִישׁ יְרוּשָׁלַיִם”. His teaching comes in the next mishnah."],
    ["What does “קִבְּלוּ מֵהֶם” mean?", "They received from them", "They gave to them", "They learned with them", "They were accepted by them", "'Them' is plural: they received from the ones before them, Shimon HaTzaddik and Antigonus."],
    ["What does “יְהִי בֵיתְךָ בֵית וַעַד לַחֲכָמִים” mean?", "Let your house be a meeting place for the wise", "Let your house be big and beautiful", "Let your house be a shul", "Build a house for the wise men", "The Bartenura compares it to a perfume shop: even if you buy nothing, you come out smelling good. Sages in your home rub off on you!"],
    ["What does בֵית וַעַד mean?", "A meeting place", "A house of prayer", "A school building", "A house of judgement", "וַעַד = meeting. In modern Hebrew a וַעַד is a committee."],
    ["What does חֲכָמִים mean?", "The wise (Sages)", "The rich", "The guests", "The old", "חָכָם = wise. The Sages of the Mishnah are called חז״ל: חֲכָמֵינוּ זִכְרוֹנָם לִבְרָכָה."],
    ["What does “וֶהֱוֵי מִתְאַבֵּק בַּעֲפַר רַגְלֵיהֶם” mean?", "Sit in the dust of their feet", "Clean the dust off their feet", "Wash their feet", "Walk far away from them", "Students sat on the ground at their teacher's feet, or followed them so closely the dust got on them."],
    ["What does עֲפַר mean?", "Dust", "Water", "Shoes", "Floor", "עָפָר = dust or earth. רַגְלֵיהֶם = their feet."],
    ["What does “וֶהֱוֵי שׁוֹתֶה בְצָמָא אֶת דִּבְרֵיהֶם” mean?", "Drink in their words thirstily", "Give them water when they are thirsty", "Don't speak while they are drinking", "Write down every word they say", "Take in their Torah eagerly, like a thirsty person gulps water. 💧"],
    ["What does צָמָא mean?", "Thirst", "Hunger", "Water", "Tiredness", "Torah is compared to water: “הוֹי כָּל צָמֵא לְכוּ לַמַּיִם” (Yeshayahu 55:1)."],
    ["How many things does Yossi ben Yoezer teach?", "3", "1", "2", "4", "1. Make your home a meeting place for Sages. 2. Sit in the dust of their feet. 3. Drink their words thirstily."],
    ["What is the main lesson of Yossi ben Yoezer?", "Stay close to Torah scholars and learn from them eagerly", "Keep your house clean for guests", "Drink plenty of water", "Only rabbis should have visitors", "All three of his teachings are about how to treat Torah scholars and their words."],
    ["Complete: “יְהִי בֵיתְךָ בֵית ___ לַחֲכָמִים”", "וַעַד", "כְּנֶסֶת", "מִדְרָשׁ", "דִּין", "Let your house be a meeting place for the wise."],
    ["Complete: “וֶהֱוֵי מִתְאַבֵּק ___ רַגְלֵיהֶם”", "בַּעֲפַר", "בְּבֵית", "בְּנַעֲלֵי", "בְּצֵל", "Sit in the dust of their feet."],
    ["Complete: “וֶהֱוֵי שׁוֹתֶה ___ אֶת דִּבְרֵיהֶם”", "בְצָמָא", "בְשִׂמְחָה", "בְמַיִם", "בְשֶׁקֶט", "Drink their words thirstily."],
    ["Which pair is matched correctly?", "צָמָא = thirst", "עֲפַר = water", "חֲכָמִים = feet", "בֵיתְךָ = their words", "צָמָא = thirst · עֲפַר = dust · חֲכָמִים = the wise · בֵיתְךָ = your house · דִּבְרֵיהֶם = their words"],
  ]},
  { id: "who", name: "Who said it?", icon: "🗣️", q: [
    ["Who said “הֱווּ מְתוּנִים בַּדִּין”?", "The Men of the Great Assembly", "Shimon HaTzaddik", "Antigonus of Socho", "Yossi ben Yoezer", "Mishnah 1: their three things are be patient in judgement, raise many students, make a fence for the Torah."],
    ["Who said “עַל שְׁלשָׁה דְבָרִים הָעוֹלָם עוֹמֵד”?", "Shimon HaTzaddik", "The Men of the Great Assembly", "Antigonus of Socho", "Moshe", "Mishnah 2: Torah, Avodah and Gemilut Chasadim."],
    ["Who said “אַל תִּהְיוּ כַעֲבָדִים הַמְשַׁמְּשִׁין אֶת הָרַב עַל מְנָת לְקַבֵּל פְּרָס”?", "Antigonus of Socho", "Shimon HaTzaddik", "Yossi ben Yoezer", "Yossi ben Yochanan", "Mishnah 3: serve without thinking about the reward."],
    ["Who said “יְהִי בֵיתְךָ בֵית וַעַד לַחֲכָמִים”?", "Yossi ben Yoezer", "Yossi ben Yochanan", "Antigonus of Socho", "Shimon HaTzaddik", "Mishnah 4. Careful: Yossi ben Yochanan's saying (about the poor in your house) is in Mishnah 5."],
    ["Who said “וַעֲשׂוּ סְיָג לַתּוֹרָה”?", "The Men of the Great Assembly", "Yossi ben Yoezer", "Shimon HaTzaddik", "Yehoshua", "Their third saying in Mishnah 1."],
    ["Who said “וִיהִי מוֹרָא שָׁמַיִם עֲלֵיכֶם”?", "Antigonus of Socho", "Shimon HaTzaddik", "The Men of the Great Assembly", "Yossi ben Yoezer", "The end of Mishnah 3."],
    ["Who said “וֶהֱוֵי שׁוֹתֶה בְצָמָא אֶת דִּבְרֵיהֶם”?", "Yossi ben Yoezer", "Antigonus of Socho", "Yossi ben Yochanan", "Shimon HaTzaddik", "The last of Yossi ben Yoezer's three teachings, in Mishnah 4."],
    ["Who said “וְהַעֲמִידוּ תַלְמִידִים הַרְבֵּה”?", "The Men of the Great Assembly", "Antigonus of Socho", "Yossi ben Yoezer", "Shimon HaTzaddik", "Mishnah 1: raise up many students."],
    ["Who did Antigonus of Socho receive the Torah from?", "Shimon HaTzaddik", "The Men of the Great Assembly", "Yossi ben Yoezer", "Ezra", "“קִבֵּל מִשִּׁמְעוֹן הַצַּדִּיק” (Mishnah 3)."],
    ["Put them in order, from earliest to latest:", "Great Assembly → Shimon HaTzaddik → Antigonus → the two Yossis", "Shimon HaTzaddik → Great Assembly → Antigonus → the two Yossis", "Great Assembly → Antigonus → Shimon HaTzaddik → the two Yossis", "The two Yossis → Antigonus → Shimon HaTzaddik → Great Assembly", "Mishnah 1 → 2 → 3 → 4: the chain keeps going in order."],
    ["Which TWO mishnayot use the word קִבֵּל (he received)?", "Mishnah 1 and Mishnah 3", "Mishnah 1 and Mishnah 2", "Mishnah 2 and Mishnah 4", "Mishnah 2 and Mishnah 3", "Mishnah 1: “מֹשֶׁה קִבֵּל”. Mishnah 3: “אַנְטִיגְנוֹס … קִבֵּל”. (Mishnah 4 says קִבְּלוּ, because there are two of them.)"],
  ]},
];
