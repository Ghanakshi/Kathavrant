// SONG_DATA powers the "Find a Song" feature.
//
// Comprehensive, extensive catalog of Folk & Cultural Heritage across India,
// with deep multi-song coverage for RAJASTHAN and WEST BENGAL alongside
// traditional folk music across all 28 states and union territories of India.
//
// STRICT RULE: Zero emoji characters are used in metadata or text descriptions.

const SONG_DATA = [
  // ==================== RAJASTHAN FOLK HERITAGE (EXTENSIVE LIBRARY) ====================
  {
    id: "kesariya-balam",
    title: "Kesariya Balam Aavo Ni",
    artist: "Allah Jilai Bai / Manganiyar Bards",
    language: "Rajasthani (Marwari)",
    region: "Desert & Marwar",
    state: "Rajasthan",
    genre: ["Maand", "Rajasthani Folk", "Royal Heritage"],
    occasion: ["Welcoming", "Festival", "Desert Romance"],
    instruments: ["Sarangi", "Kamaicha", "Dholak", "Khartal", "Morchang"],
    era: "Heritage",
    period: "Traditional (Centuries Old)",
    isFolkHeritage: true,
    description: "The soul of Rajasthani folk music in classical Maand style, extending a poetic welcome to guests across the Thar desert ('Padharo Mhare Des').",
    culturalBackground: "Immortally sung by Padma Shri Allah Jilai Bai and passed down by wandering Manganiyar and Langa bards of Jaisalmer and Barmer.",
    lyricSnippets: [
      "Kesariya balam aavo ni padharo mhare des",
      "Padharo mhare des re balam",
      "mhare des padharo mhare des"
    ],
    pitchSignature: [0, 2, 4, 7, 9, 7, 4, 2, 0, -2, 0],
    keywords: ["kesariya", "balam", "padharo", "mhare", "des", "marwar", "manganiyar", "langa", "jaisalmer", "allah jilai bai", "maand", "sarangi", "kamaicha"],
    youtubeQuery: "Kesariya Balam Aavo Ni Allah Jilai Bai traditional Maand"
  },
  {
    id: "ghoomar-trad",
    title: "Ghoomar (Traditional Folk)",
    artist: "Traditional Bhil & Rajput Folk Singers",
    language: "Rajasthani",
    region: "Marwar & Mewar",
    state: "Rajasthan",
    genre: ["Folk Dance", "Rajasthani Folk", "Royal Festival"],
    occasion: ["Teej", "Holi", "Bridal Arrival", "Royal Gathering"],
    instruments: ["Dhol", "Nagada", "Manjira", "Shehnai"],
    era: "Heritage",
    period: "Traditional Folk Dance",
    isFolkHeritage: true,
    description: "Centuries-old festive twirling dance song of Rajasthan where women spin gracefully in flowing flared ghagras.",
    culturalBackground: "Originating with the Bhil tribe to worship Goddess Saraswati and later embraced by Marwar royalty, Ghoomar marks moments of celebration and bridal rites.",
    lyricSnippets: [
      "Aavo ji ghoomar ramvane",
      "Mhari ghoomar chhe nakhrali aye maa",
      "Ghoomar ramvane aap padharo"
    ],
    pitchSignature: [0, 3, 5, 7, 7, 8, 7, 5, 3, 0],
    keywords: ["ghoomar", "ramvane", "nakhrali", "rajasthan", "twirl", "ghagra", "bhil", "marwar", "mewar", "dhol"],
    youtubeQuery: "Traditional Ghoomar folk song Rajasthan Manganiyar"
  },
  {
    id: "nimbooda-folk",
    title: "Nimbooda Nimbooda",
    artist: "Traditional Manganiyar Folk (Gazi Khan / Rukma Devi)",
    language: "Rajasthani",
    region: "Thar Desert",
    state: "Rajasthan",
    genre: ["Desert Folk", "Rajasthani Folk", "Playful Ballad"],
    occasion: ["Folk Fair", "Wedding Sangeet", "Festive Gathering"],
    instruments: ["Kamaicha", "Khartal", "Dholak", "Harmonium"],
    era: "Heritage",
    period: "Traditional Manganiyar Folk",
    isFolkHeritage: true,
    description: "Lively traditional desert folk song using sour lemons ('Nimbooda') as a playful charm against envy and evil eye.",
    culturalBackground: "Sung for generations by Thar desert Manganiyar musicians before gaining pan-Indian fame in Hum Dil De Chuke Sanam.",
    lyricSnippets: [
      "Nimbooda nimbooda nimbooda",
      "Arey kacha kacha chhota chhota nimbooda laai do",
      "Mhari lali ne nimbooda laai do"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["nimbooda", "rajasthan", "manganiyar", "kamaicha", "khartal", "lemon", "thar", "jaisalmer"],
    youtubeQuery: "Nimbooda Nimbooda traditional Manganiyar folk song"
  },
  {
    id: "kalyo-kood-padyo",
    title: "Kalyo Kood Padyo Mela Mein",
    artist: "Gulabo Sapera / Traditional Kalbelia Folk",
    language: "Rajasthani",
    region: "Marwar & Ajmer",
    state: "Rajasthan",
    genre: ["Kalbelia Folk", "Nomadic Snake Charmer Dance"],
    occasion: ["Pushkar Fair", "Holi", "Cultural Celebration"],
    instruments: ["Been (Pungi)", "Dhaf", "Khanjari", "Dholak"],
    era: "Heritage",
    period: "Traditional Kalbelia Folk",
    isFolkHeritage: true,
    description: "Rousing traditional Kalbelia folk song accompanying the hypnotic, fluid swirl of Rajasthan's black-robed Kalbelia dancers.",
    culturalBackground: "Kalbelia dance of Rajasthan's nomadic snake charmer community is inscribed on UNESCO's Representative List of Intangible Cultural Heritage.",
    lyricSnippets: [
      "Kalyo kood padyo mela mein",
      "Cycle bajaye kalyo mela mein",
      "Kalyo kood padyo re mela mein"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["kalyo", "kood", "padyo", "mela", "kalbelia", "gulabo", "sapera", "been", "pungi", "rajasthan", "unesco"],
    youtubeQuery: "Kalyo Kood Padyo Mela Mein traditional Kalbelia folk"
  },
  {
    id: "gorband-nakhralo",
    title: "Gorband Nakhralo",
    artist: "Traditional Shekhawati & Marwar Folk",
    language: "Rajasthani",
    region: "Shekhawati & Desert",
    state: "Rajasthan",
    genre: ["Desert Craft Folk", "Rajasthani Folk"],
    occasion: ["Harvest Fair", "Desert Life", "Festival"],
    instruments: ["Dholak", "Manjira", "Algoza", "Guiter"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Celebrated traditional song depicting desert women hand-beading cowrie necklaces ('Gorband') to decorate their camels.",
    culturalBackground: "Desert women sing Gorband while weaving elaborate colorful harnesses for their desert camels in Shekhawati and Bikaner.",
    lyricSnippets: [
      "Mharo gorband nakhralo",
      "Loomba jhroomba gorband nakhralo",
      "O mhari ghomar nakhrali"
    ],
    pitchSignature: [0, 2, 5, 7, 5, 2, 0, -3, 0],
    keywords: ["gorband", "nakhralo", "loomba", "jhroomba", "shekhawati", "bikaner", "rajasthan", "camel"],
    youtubeQuery: "Gorband Nakhralo traditional Rajasthani folk"
  },
  {
    id: "chaudhary-mamekhan",
    title: "Chaudhary",
    artist: "Mame Khan & Amit Trivedi",
    language: "Rajasthani",
    region: "Thar Desert (Barmer)",
    state: "Rajasthan",
    genre: ["Manganiyar Fusion", "Rajasthani Folk"],
    occasion: ["Celebration", "Festive Showcase"],
    instruments: ["Kamaicha", "Khartal", "Dholak", "Harmonium"],
    era: "Heritage Fusion",
    period: "2010s",
    isFolkHeritage: true,
    description: "Vibrant desert folk-fusion masterpiece celebrating community leadership and monsoon joy with Mame Khan's iconic Thar vocals.",
    culturalBackground: "Brought global recognition to Rajasthan's Manganiyar musical legacy via Coke Studio India.",
    lyricSnippets: [
      "Chaudhary mhane pyaro lage",
      "Aave aave teej tyohar",
      "Marudhar me aayo teej tyohar"
    ],
    pitchSignature: [0, 4, 7, 7, 9, 7, 4, 2, 0],
    keywords: ["chaudhary", "mame khan", "coke studio", "rajasthan", "manganiyar", "kamaicha", "teej"],
    youtubeQuery: "Chaudhary Mame Khan Coke Studio Rajasthani folk"
  },
  {
    id: "aave-hichki",
    title: "Aave Hichki (Rajasthani Folk)",
    artist: "Traditional Marwari Folk",
    language: "Rajasthani",
    region: "Marwar",
    state: "Rajasthan",
    genre: ["Longing Ballad", "Rajasthani Folk"],
    occasion: ["Desert Gathering", "Reflective"],
    instruments: ["Sarangi", "Morchang", "Dholak", "Khartal"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Poetic folk song centered around hiccups ('Hichki'), believed in Rajasthani lore to signify a distant beloved remembering you.",
    culturalBackground: "Deeply rooted in desert folklore where solitary village women associate hiccups with news from loved ones far away.",
    lyricSnippets: [
      "Mhane aave hichki balamji",
      "Mhane aave aave hichki",
      "Aasotiya mein jagi re hichki"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0],
    keywords: ["hichki", "aave", "rajasthan", "balamji", "longing", "sarangi", "morchang", "marwar"],
    youtubeQuery: "Aave Hichki traditional Rajasthani folk song"
  },
  {
    id: "choti-se-umar-me",
    title: "Choti Se Umar Mein",
    artist: "Traditional Rajasthani Folk",
    language: "Rajasthani",
    region: "Mewar & Marwar",
    state: "Rajasthan",
    genre: ["Folk Ballad", "Traditional Storytelling"],
    occasion: ["Wedding Sangeet", "Folk Fair"],
    instruments: ["Dholak", "Manjira", "Harmonium"],
    era: "Heritage",
    period: "Traditional Folk",
    isFolkHeritage: true,
    description: "Tender traditional story song telling of a young girl's wedding and journey to her marital home across Rajasthan.",
    culturalBackground: "Passed down orally across rural Rajasthan, sung by women during pre-wedding rituals.",
    lyricSnippets: [
      "Choti se umar mein parnaai o babosa",
      "Parnaai o babosa kayo mai kareeyo qasoor",
      "Mhari umariya choti"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 5, 4, 2, 0],
    keywords: ["choti", "umar", "parnaai", "babosa", "rajasthan", "wedding", "mewar", "folk"],
    youtubeQuery: "Choti Se Umar Mein traditional Rajasthani folk song"
  },
  {
    id: "mhaari-veena",
    title: "Mhaari Veena Bole (Nirguni Folk Bhajan)",
    artist: "Traditional Mirabai / Kabir Nirguni Folk",
    language: "Rajasthani",
    region: "Mewar & Marwar",
    state: "Rajasthan",
    genre: ["Nirguni Folk Bhajan", "Devotional Heritage"],
    occasion: ["Spiritual Gathering", "Satsang"],
    instruments: ["Ektara", "Veena", "Khartal", "Manjira"],
    era: "Heritage",
    period: "16th Century (Mirabai Roots)",
    isFolkHeritage: true,
    description: "Soulful Nirguni folk bhajan celebrating internal spiritual music ('Veena') echoing in the heart.",
    culturalBackground: "Drawn from Mirabai and Saint Kabir's spiritual poetry in Rajasthan, played on rustic Ektara and Khartal.",
    lyricSnippets: [
      "Mhari veena bole re",
      "Sunn mahal mein veena baje",
      "Satguru aaye mhare dwar"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["mhaari", "veena", "bole", "nirguni", "mirabai", "kabir", "rajasthan", "bhajan", "ektara"],
    youtubeQuery: "Mhari Veena Bole traditional Rajasthani Nirguni bhajan"
  },
  {
    id: "kurjan-desh",
    title: "Kurja (Kurjan Aye Mhare Des)",
    artist: "Traditional Rajasthani Folk Bards",
    language: "Rajasthani",
    region: "Thar Desert & Marwar",
    state: "Rajasthan",
    genre: ["Desert Messenger Song", "Folk Ballad"],
    occasion: ["Monsoon", "Solitary Longing"],
    instruments: ["Sarangi", "Morchang", "Dholak", "Bansuri"],
    era: "Heritage",
    period: "Traditional Desert Folk",
    isFolkHeritage: true,
    description: "Haunting folk song addressing the migratory Demoiselle Crane ('Kurja') as a messenger carrying love letters across the desert.",
    culturalBackground: "Every winter, Kurja birds fly to Khichan village in Rajasthan. Solitary women sing Kurja to send messages to traveling husbands.",
    lyricSnippets: [
      "Kurja aye mhare des",
      "Kurjanaye संदेशo le ja re",
      "Kurja e mhare des padharo"
    ],
    pitchSignature: [0, 2, 5, 7, 9, 7, 5, 2, 0],
    keywords: ["kurja", "kurjan", "crane", "bird", "messenger", "desh", "rajasthan", "khichan", "sarangi"],
    youtubeQuery: "Kurjan Aye Mhare Des traditional Rajasthani folk"
  },
  {
    id: "bichudo-rajasthan",
    title: "Bichudo (O Mhare Bichudo)",
    artist: "Traditional Rajasthani Folk",
    language: "Rajasthani",
    region: "Hadoti & Mewar",
    state: "Rajasthan",
    genre: ["Folk Dance", "Humorous Ballad"],
    occasion: ["Festive Gathering", "Folk Fair"],
    instruments: ["Dholak", "Harmonium", "Manjira"],
    era: "Heritage",
    period: "Traditional Folk",
    isFolkHeritage: true,
    description: "Famous lighthearted Rajasthani folk song about a woman bitten by a scorpion ('Bichudo') dramtizing her playful pleas.",
    culturalBackground: "A favorite folk dance song across Hadoti (Kota, Bundi) and Mewar region, performed at festive village melas.",
    lyricSnippets: [
      "Main toh khai gayi bairi bichudo",
      "O mhare kaat gayo bichudo",
      "Bairi bichudo dhas gayo"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 0],
    keywords: ["bichudo", "scorpion", "bairi", "rajasthan", "hadoti", "kota", "bundi", "mewar", "folk"],
    youtubeQuery: "Bairi Bichudo traditional Rajasthani folk song"
  },

  // ==================== WEST BENGAL FOLK HERITAGE (EXTENSIVE LIBRARY) ====================
  {
    id: "khachar-bhitor-achin-pakhi",
    title: "Khachar Bhitor Achin Pakhi",
    artist: "Lalon Fakir (Baul Traditional)",
    language: "Bengali",
    region: "Nadia & Rarh Bengal",
    state: "West Bengal",
    genre: ["Baul Sangeet", "Sufi-Vaishnava Mysticism", "UNESCO Heritage"],
    occasion: ["Baul Mela", "Philosophical Gathering", "Spiritual"],
    instruments: ["Ektara", "Dotara", "Khamak", "Dubki"],
    era: "Heritage",
    period: "19th Century (Lalon Shah)",
    isFolkHeritage: true,
    description: "The crown jewel of Baul philosophy composed by saint Lalon Shah pondering how the unknown bird ('achin pakhi') enters and leaves the body cage.",
    culturalBackground: "UNESCO has recognized Bengal's Baul music as Intangible Cultural Heritage of Humanity. Baul minstrels wander rural Bengal with Ektara.",
    lyricSnippets: [
      "Khachar bhitor achin pakhi kemne aase jaay",
      "Tare dhorte parle mon beri ditam taar paay",
      "Achin pakhi kemne aase jaay"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0, -2, 0],
    keywords: ["khachar", "bhitor", "achin", "pakhi", "lalon", "fakir", "baul", "ektara", "dotara", "bengal", "unesco"],
    youtubeQuery: "Khachar Bhitor Achin Pakhi Lalon Geeti Baul traditional"
  },
  {
    id: "nao-chariya-de",
    title: "Nao Chariya De (Bhatiali River Song)",
    artist: "Abbasuddin Ahmed / Traditional Bhatiali",
    language: "Bengali",
    region: "Delta Riverways",
    state: "West Bengal",
    genre: ["Bhatiali", "Riverine Boatman Folk", "Heritage"],
    occasion: ["Boating", "River Journey", "Folk Gathering"],
    instruments: ["Dotara", "Bansuri (Flute)", "Mandira", "Bhatiali Rhythm"],
    era: "Heritage",
    period: "Traditional River Folk",
    isFolkHeritage: true,
    description: "Hauntingly beautiful Bhatiali river song sung by boatmen unfurling sails down the wide flowing rivers of Bengal.",
    culturalBackground: "Bhatiali is Bengal's iconic river folk tradition characterized by long sustained open-throat notes echoing across river waters.",
    lyricSnippets: [
      "Nao chariya de pal uuriya de",
      "Chol re nao bhabersagore",
      "Allah megher de pani de chhaya de re tu"
    ],
    pitchSignature: [0, 4, 7, 11, 12, 11, 7, 4, 0],
    keywords: ["nao", "chariya", "de", "bhatiali", "boatman", "bengal", "river", "dotara", "flute", "abbasuddin"],
    youtubeQuery: "Nao Chariya De Bhatiali Bengali river song Abbasuddin"
  },
  {
    id: "golemale-pirit",
    title: "Golemale Golemale Pirit Koro Na",
    artist: "Traditional Bengali Baul Folk",
    language: "Bengali",
    region: "Rarh Bengal & Birbhum",
    state: "West Bengal",
    genre: ["Baul Folk", "Upbeat Folk"],
    occasion: ["Festive Gathering", "Baul Festival"],
    instruments: ["Ektara", "Dotara", "Dhol", "Khamak"],
    era: "Heritage",
    period: "Traditional Baul Geeti",
    isFolkHeritage: true,
    description: "Upbeat, rhythmic Bengali Baul song cautioning against superficial love and urging true spiritual devotion.",
    culturalBackground: "A fixture at Kenduli Mela in Birbhum, popularised across India by Bengali folk revival ensembles.",
    lyricSnippets: [
      "Golemale golemale pirit koro na",
      "Pirit katheraala agun goliye pore na",
      "Amar moner manush re"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["golemale", "pirit", "koro", "na", "baul", "birbhum", "ektara", "bengali", "folk"],
    youtubeQuery: "Golemale Golemale Pirit Koro Na traditional Bengali Baul"
  },
  {
    id: "ekla-chalo-tagore",
    title: "Ekla Chalo Re",
    artist: "Rabindranath Tagore",
    language: "Bengali",
    region: "Bolpur & Kolkata",
    state: "West Bengal",
    genre: ["Rabindra Sangeet", "Inspirational Heritage"],
    occasion: ["Cultural Pride", "Freedom Struggle", "Reflective"],
    instruments: ["Esraj", "Tabla", "Harmonium", "Flute"],
    era: "Heritage",
    period: "1905",
    isFolkHeritage: true,
    description: "Rabindranath Tagore's immortal anthem of courage urging one to march forward alone even if no one answers the call.",
    culturalBackground: "Composed during Bengal's 1905 Swadeshi movement, adopted by Mahatma Gandhi as his personal anthem.",
    lyricSnippets: [
      "Jodi tor dak shune keu na aase tabe ekla chalo re",
      "Ekla chalo ekla chalo ekla chalo ekla chalo re",
      "Tobe ekla chalo re"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 9, 7, 5, 4, 2, 0],
    keywords: ["ekla", "chalo", "re", "tagore", "rabindranath", "rabindra", "sangeet", "bengal", "courage"],
    youtubeQuery: "Ekla Chalo Re Rabindranath Tagore Bengali original"
  },
  {
    id: "amay-bhashaili-re",
    title: "Amay Bhashaili Re",
    artist: "Traditional Bhatiali Folk",
    language: "Bengali",
    region: "East Bengal Delta",
    state: "West Bengal",
    genre: ["Bhatiali", "Riverine Folk"],
    occasion: ["River Journey", "Nostalgic"],
    instruments: ["Dotara", "Bansuri", "Ektara"],
    era: "Heritage",
    period: "Traditional Bhatiali",
    isFolkHeritage: true,
    description: "Soul-stirring river folk melody of a boatman surrendering his boat to the vast current of life.",
    culturalBackground: "Sung along the Padma and Hooghly rivers as boatmen drift beneath moonlit skies.",
    lyricSnippets: [
      "Amay bhashaili re amay dubaili re",
      "Akul gahiye mhor bhaber sagore",
      "Kul nai kinara nai"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0],
    keywords: ["amay", "bhashaili", "re", "bhatiali", "boatman", "river", "dotara", "bengali", "folk"],
    youtubeQuery: "Amay Bhashaili Re traditional Bhatiali Bengali song"
  },
  {
    id: "jhumur-purulia",
    title: "Purulia Jhumur Folk",
    artist: "Traditional Purulia & Bankura Folk",
    language: "Bengali (Purulia Dialect)",
    region: "Purulia & Bankura",
    state: "West Bengal",
    genre: ["Jhumur Folk", "Chhau Dance Music", "Tribal Heritage"],
    occasion: ["Karam Festival", "Chhau Dance", "Harvest"],
    instruments: ["Dhamsha", "Madal", "Shehnai", "Flute"],
    era: "Heritage",
    period: "Traditional Rarh Folk",
    isFolkHeritage: true,
    description: "Thunderous tribal rhythm and earthy melody of Purulia Jhumur driving acrobatic martial Chhau dance.",
    culturalBackground: "Deeply connected with Chhau dance of Purulia (UNESCO Intangible Cultural Heritage), honoring nature and red soil.",
    lyricSnippets: [
      "Purulia raangamati rasta",
      "Jhumur jhumur nupur baje",
      "Karam rath e chhau nach"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["jhumur", "purulia", "chhau", "dhamsha", "madal", "bankura", "rarh", "bengal", "unesco"],
    youtubeQuery: "Purulia Jhumur folk song Chhau dance traditional"
  },
  {
    id: "tomar-ghore-tufan",
    title: "Tomar Ghore Boshe Tufan",
    artist: "Traditional Baul Fusion",
    language: "Bengali",
    region: "Birbhum & Murshidabad",
    state: "West Bengal",
    genre: ["Baul Folk", "Folk Fusion"],
    occasion: ["Cultural Gathering", "Festive"],
    instruments: ["Ektara", "Dotara", "Dhol", "Bansuri"],
    era: "Heritage",
    period: "Traditional Baul",
    isFolkHeritage: true,
    description: "Vibrant Baul song depicting spiritual storm brewing inside the human mind ('Tomar Ghore Boshe Tufan').",
    culturalBackground: "Sung at traditional Baul Melas across Birbhum and Shantiniketan.",
    lyricSnippets: [
      "Tomar ghore boshe tufan utheche",
      "Moner manush ki aar pabe na",
      "Ektara te sur baje"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["tomar", "ghore", "tufan", "baul", "birbhum", "shantiniketan", "ektara", "bengali"],
    youtubeQuery: "Tomar Ghore Boshe Tufan traditional Bengali Baul song"
  },
  {
    id: "pagla-hawa-bengal",
    title: "Pagla Hawa (Monsoon Song)",
    artist: "Rabindranath Tagore",
    language: "Bengali",
    region: "Shantiniketan & Kolkata",
    state: "West Bengal",
    genre: ["Rabindra Sangeet", "Monsoon Heritage"],
    occasion: ["Monsoon Sawan", "Cultural Showcase"],
    instruments: ["Esraj", "Tabla", "Flute"],
    era: "Heritage",
    period: "Early 1900s",
    isFolkHeritage: true,
    description: "Exuberant Rabindra Sangeet monsoon composition describing wild monsoon winds carrying the heart away.",
    culturalBackground: "Sung during Shantiniketan's Varsha Mangal (Monsoon Festival) celebrating rain clouds over Bengal.",
    lyricSnippets: [
      "Pagla hawa badol dine",
      "Pagla hawa badol dine mon meye re",
      "Megh er jholak baje"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0],
    keywords: ["pagla", "hawa", "badol", "dine", "tagore", "rabindra", "monsoon", "bengal", "shantiniketan"],
    youtubeQuery: "Pagla Hawa Badol Dine Tagore original Bengali"
  },
  {
    id: "dhitang-dhitang-bole",
    title: "Dhitang Dhitang Bole",
    artist: "Salil Chowdhury / Hemanta Mukherjee",
    language: "Bengali",
    region: "Rural Bengal",
    state: "West Bengal",
    genre: ["Peasant Folk", "Harvest Anthem"],
    occasion: ["Nabanna Harvest", "Cultural Pride"],
    instruments: ["Dhol", "Mandira", "Dotara", "Accordion"],
    era: "Heritage Classic",
    period: "1950s",
    isFolkHeritage: true,
    description: "Stirring Bengali peasant harvest song celebrating the joyful rhythm of rain, crops, and rural brotherhood.",
    culturalBackground: "Composed by Salil Chowdhury during Bengal's IPTA cultural movement, echoing harvest rhythms.",
    lyricSnippets: [
      "Dhitang dhitang bole kashiya mela",
      "Aai re aai re aai re aai",
      "Dhitang dhitang bole"
    ],
    pitchSignature: [0, 4, 7, 9, 12, 9, 7, 4, 0],
    keywords: ["dhitang", "salil", "chowdhury", "hemanta", "harvest", "nabanna", "bengal", "folk"],
    youtubeQuery: "Dhitang Dhitang Bole Salil Chowdhury Hemanta Mukherjee"
  },

  // ==================== PUNJAB ====================
  {
    id: "jugni-traditional",
    title: "Jugni (Traditional Punjabi Folk)",
    artist: "Alam Lohar / Sufi Bards",
    language: "Punjabi",
    region: "North India",
    state: "Punjab",
    genre: ["Sufi Folk", "Punjabi Heritage"],
    occasion: ["Folk Gathering", "Reflective"],
    instruments: ["Tumbi", "Dhol", "Chimta", "Harmonium"],
    era: "Heritage",
    period: "Traditional Sufi Legend",
    isFolkHeritage: true,
    description: "Centuries-old Sufi folk narrative device ('Jugni' meaning spirit) observing human worldly conditions.",
    culturalBackground: "Pioneered by Sufi balladeers like Alam Lohar, Jugni travels witnessing human nature.",
    lyricSnippets: [
      "Meri jugni de dhaage pakke",
      "Jugni jaa vaddi vich lahore",
      "Dum gutkoon dum gutkoon"
    ],
    pitchSignature: [0, 3, 5, 7, 10, 7, 5, 3, 0],
    keywords: ["jugni", "alam lohar", "tumbi", "punjab", "sufi", "lahore", "dhol"],
    youtubeQuery: "Jugni Alam Lohar traditional Punjabi folk"
  },
  {
    id: "chitta-kukkad",
    title: "Chitta Kukkad",
    artist: "Traditional Punjabi Wedding Folk",
    language: "Punjabi",
    region: "North India",
    state: "Punjab",
    genre: ["Wedding Folk", "Tappe"],
    occasion: ["Sangeet", "Bridal Gathering"],
    instruments: ["Dholak", "Chimta"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Gentle traditional Punjabi wedding song sung during pre-wedding sangeet celebrations.",
    culturalBackground: "Passed down orally across generations in Punjab welcoming the bridegroom.",
    lyricSnippets: [
      "Chitta kukkad banay de te",
      "Kashni dupatte waliye",
      "Munda aashiq tere te"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 5, 4, 2, 0],
    keywords: ["chitta", "kukkad", "punjabi", "wedding", "sangeet", "dholak"],
    youtubeQuery: "Chitta Kukkad traditional Punjabi wedding song"
  },
  {
    id: "latthe-di-chadar",
    title: "Latthe Di Chadar",
    artist: "Surinder Kaur / Traditional Punjabi Folk",
    language: "Punjabi",
    region: "Punjab",
    state: "Punjab",
    genre: ["Boli & Tappe", "Punjabi Folk"],
    occasion: ["Wedding", "Festive Gathering"],
    instruments: ["Dholak", "Harmonium", "Chimta"],
    era: "Heritage Classic",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Beloved traditional Punjabi wedding song sung by women featuring playful bantering verses.",
    culturalBackground: "Immortally performed by Surinder Kaur and Parkash Kaur, the nightingales of Punjab.",
    lyricSnippets: [
      "Latthe di chadar utte saleti rang mahiya",
      "Aavo samne kolton langh mahiya",
      "Chadar utte saleti rang"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["latthe", "di", "chadar", "saleti", "surinder kaur", "punjabi", "wedding", "folk"],
    youtubeQuery: "Latthe Di Chadar Surinder Kaur original Punjabi folk"
  },

  // ==================== ASSAM & NORTH-EAST ====================
  {
    id: "bihu-geet-traditional",
    title: "Bihu Geet (Bohag Bihu Folk)",
    artist: "Traditional Assamese Folk",
    language: "Assamese",
    region: "Brahmaputra Valley",
    state: "Assam",
    genre: ["Bihu Folk", "Harvest Dance"],
    occasion: ["Bohag Bihu", "Spring Harvest"],
    instruments: ["Dhol (Assamese)", "Pepa (Buffalo Horn)", "Gogona", "Toka"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Exuberant spring harvest song of Assam celebrating nature, new leaves, and courtship dance.",
    culturalBackground: "Performed during Bohag Bihu with rapid Assamese dhol beats and buffalo-horn Pepa melodies.",
    lyricSnippets: [
      "Atikoi zenei mure pogha zori",
      "Bihu bihu lagil ghotot",
      "O mure moliya kokaideu"
    ],
    pitchSignature: [0, 3, 5, 7, 10, 12, 10, 7, 5, 3, 0],
    keywords: ["bihu", "geet", "assam", "pepa", "gogona", "dhol", "assamese"],
    youtubeQuery: "Assamese Bihu geet traditional Pepa Dhol"
  },

  // ==================== MAHARASHTRA ====================
  {
    id: "apsara-aali",
    title: "Apsara Aali",
    artist: "Bela Shende, Vaishali Samant",
    language: "Marathi",
    region: "West India",
    state: "Maharashtra",
    genre: ["Lavani Folk", "Dance"],
    occasion: ["Festive Dance", "Cultural Showcase"],
    instruments: ["Dholki", "Tabla", "Harmonium", "Ghunghroo"],
    era: "Modern Lavani",
    period: "2010s",
    isFolkHeritage: true,
    description: "High-octane Marathi Lavani composition from Natrang celebrating the footwork of Lavani dancers.",
    culturalBackground: "Lavani is Maharashtra's 18th-century folk-dance tradition played to dholki beats.",
    lyricSnippets: [
      "Apsara aali aali aali",
      "Aali thumkat naarat raani aali",
      "Chala jevu ya lavani cha thaat"
    ],
    pitchSignature: [0, 4, 7, 8, 7, 4, 2, 0],
    keywords: ["apsara", "aali", "natrang", "lavani", "maharashtra", "dholki", "marathi"],
    youtubeQuery: "Apsara Aali Natrang Marathi Lavani song"
  },
  {
    id: "pinga-ga-marathi",
    title: "Pinga (Traditional Folk)",
    artist: "Traditional Marathi Women Folk",
    language: "Marathi",
    region: "Maharashtra",
    state: "Maharashtra",
    genre: ["Folk Dance", "Mangalagaur Folk"],
    occasion: ["Mangalagaur", "Ganeshotsav"],
    instruments: ["Dholak", "Zanj", "Harmonium"],
    era: "Heritage",
    period: "Traditional Peshwa Folk",
    isFolkHeritage: true,
    description: "Traditional Marathi women's folk dance performed during Mangalagaur vows in nine-yard nauvari saris.",
    culturalBackground: "Rooted in 18th-century Maratha Peshwa women's festival rites in Maharashtra.",
    lyricSnippets: [
      "Pinga ga pori pinga ga",
      "Mhaari chanchal naar pinga ga",
      "Latt patt latt patt chaal"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0],
    keywords: ["pinga", "marathi", "mangalagaur", "nauvari", "maharashtra", "peshwa", "dholak"],
    youtubeQuery: "Traditional Marathi Pinga folk dance Mangalagaur"
  },

  // ==================== GUJARAT ====================
  {
    id: "mor-bani-thanghat",
    title: "Mor Bani Thanghat Kare",
    artist: "Jhaverchand Meghani / Osman Mir",
    language: "Gujarati",
    region: "Saurashtra",
    state: "Gujarat",
    genre: ["Gujarati Folk Poetry", "Monsoon Heritage"],
    occasion: ["Monsoon Festival", "Navratri"],
    instruments: ["Dhol", "Shehnai", "Harmonium", "Tabla"],
    era: "Heritage",
    period: "1930s",
    isFolkHeritage: true,
    description: "Monsoon folk poetry written by Jhaverchand Meghani describing the heart dancing like a peacock in rain.",
    culturalBackground: "A landmark of Gujarati folk literature adapting Tagore's monsoon poem into Saurashtra folk idiom.",
    lyricSnippets: [
      "Man mor bani thanghat kare",
      "Ghan garjan kare aakash me",
      "Mor bani thanghat kare mharo man"
    ],
    pitchSignature: [0, 2, 5, 7, 9, 10, 9, 7, 5, 2, 0],
    keywords: ["mor", "bani", "thanghat", "kare", "gujarati", "meghani", "monsoon"],
    youtubeQuery: "Mor Bani Thanghat Kare Osman Mir Gujarati folk"
  },
  {
    id: "dakla-mahakali-trad",
    title: "Dakla (Rawal Yogi Trance Folk)",
    artist: "Traditional Rawal Yogi Folk Singers",
    language: "Gujarati",
    region: "Saurashtra & Kutch",
    state: "Gujarat",
    genre: ["Dakla", "Trance Drum Ritual"],
    occasion: ["Navratri Rites", "Mataji Puja"],
    instruments: ["Dak (Hourglass Drum)", "Brass Thali", "Damru"],
    era: "Heritage",
    period: "Traditional Ritual Folk",
    isFolkHeritage: true,
    description: "Trance-inducing rhythmic ritual folk chant sung with sacred 'Dak' drums during Mataji reverence in Gujarat.",
    culturalBackground: "Performed by Rawal Yogi bards using the hour-glass Dak drum to invoke spiritual fervor during midnight Navratri rites.",
    lyricSnippets: [
      "Aavya aavya maadi na dakla",
      "Mahakali maa na dakla vaage",
      "Kalka maa na dakla"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["dakla", "gujarat", "mahakali", "rawalyogi", "dak", "drum", "trance", "navratri"],
    youtubeQuery: "Dakla traditional Gujarati Mataji folk drum"
  },

  // ==================== SOUTH INDIA ====================
  {
    id: "vanchipattu-kerala",
    title: "Vanchipattu (Vallam Kali Boat Song)",
    artist: "Traditional Kerala Boatmen",
    language: "Malayalam",
    region: "South India",
    state: "Kerala",
    genre: ["Vanchipattu", "Boat Race Folk"],
    occasion: ["Nehru Trophy", "Onam"],
    instruments: ["Kudam", "Thalam", "Oar Rhythm"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Exhilarating boat song of Kerala rowed in unison on snake boats ('Chundan Vallam').",
    culturalBackground: "Rowed to wooden thalam beats during Onam backwater boat races in Kerala.",
    lyricSnippets: [
      "Tithithara tithithai thithithai thai thai thaka",
      "Kuchelavrittam vanchipattu",
      "Thai thai thithithai"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 5, 4, 2, 0],
    keywords: ["vanchipattu", "kerala", "boat", "race", "vallam", "onam"],
    youtubeQuery: "Kerala Vanchipattu boat song Nehru Trophy traditional"
  },
  {
    id: "dollu-kunitha-karnataka",
    title: "Dollu Kunitha Folk Chant",
    artist: "Traditional Kuruba Drum Singers",
    language: "Kannada",
    region: "North Karnataka",
    state: "Karnataka",
    genre: ["Janapada Geethe", "Heavy Drum Folk"],
    occasion: ["Beereshwara Festival", "Folk Fair"],
    instruments: ["Dollu Drum", "Tala", "Harmonium"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "High-energy drum folk chant of Karnataka performed by Kuruba devotees carrying heavy drums.",
    culturalBackground: "Associated with Lord Beereshwara worship in North Karnataka, combining athletic moves with drum beats.",
    lyricSnippets: [
      "Dollu kunitha majjigeyo",
      "Huttidare kannada nadalli huttabeku",
      "Janapada geethe karnataka"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["dollu", "kunitha", "karnataka", "kannada", "janapada", "drum", "kuruba"],
    youtubeQuery: "Dollu Kunitha traditional Karnataka folk drum song"
  },

  // ==================== ODISHA ====================
  {
    id: "rangabati",
    title: "Rangabati",
    artist: "Jitendra Haripal, Krishna Patel",
    language: "Sambalpuri (Odia)",
    region: "Western Odisha",
    state: "Odisha",
    genre: ["Sambalpuri Folk", "Odia Heritage"],
    occasion: ["Festive Dance"],
    instruments: ["Dhol (Sambalpuri)", "Nishan", "Tasa", "Mahuri"],
    era: "Heritage Classic",
    period: "1970s",
    isFolkHeritage: true,
    description: "The most famous Sambalpuri folk song in Odia history celebrated for its electrifying rhythm.",
    culturalBackground: "Earned lead singer Jitendra Haripal the Padma Shri award.",
    lyricSnippets: [
      "Rangabati rangabati ho rangabati",
      "Kahi delo laze laze kahe dilo katha"
    ],
    pitchSignature: [0, 4, 7, 9, 12, 9, 7, 4, 0],
    keywords: ["rangabati", "sambalpuri", "odisha", "jitendra haripal", "mahuri"],
    youtubeQuery: "Rangabati original Sambalpuri Odia folk song"
  },

  // ==================== KASHMIR & PAHADI ====================
  {
    id: "bumbro-kashmiri",
    title: "Bumbro Bumbro (Traditional Rouf)",
    artist: "Traditional Kashmiri Folk Singers",
    language: "Kashmiri",
    region: "Kashmir Valley",
    state: "Jammu & Kashmir",
    genre: ["Rouf Folk", "Kashmiri Heritage"],
    occasion: ["Spring Harvest", "Eid"],
    instruments: ["Rabab", "Tumbaknari", "Not (Ghatam)"],
    era: "Heritage",
    period: "Traditional",
    isFolkHeritage: true,
    description: "Delightful Kashmiri bumblebee folk song where women link arms in Rouf dance form.",
    culturalBackground: "Describes the bumblebee ('Bumbur') buzzing over blooming lotus in Dal Lake.",
    lyricSnippets: [
      "Bumbro bumbro shyam rang bumbro",
      "Aaye ho kis bagan se tum"
    ],
    pitchSignature: [0, 3, 5, 7, 8, 7, 5, 3, 0],
    keywords: ["bumbro", "kashmir", "rouf", "rabab", "tumbaknari", "dal lake"],
    youtubeQuery: "Traditional Kashmiri Rouf Bumbro song Rabab"
  },
  {
    id: "bedu-pako-uttarakhand",
    title: "Bedu Pako Baro Maasa",
    artist: "Traditional Kumaoni Folk",
    language: "Kumaoni",
    region: "Kumaon & Garhwal",
    state: "Uttarakhand",
    genre: ["Pahadi Folk", "State Anthem"],
    occasion: ["Pahadi Identity", "Festival"],
    instruments: ["Hurka", "Dhol-Damau", "Flute"],
    era: "Heritage",
    period: "1950s",
    isFolkHeritage: true,
    description: "The unofficial cultural anthem of Uttarakhand describing wild figs ripening 12 months a year in Himalayas.",
    culturalBackground: "Popularised globally by the Kumaon Regiment band and loved by Pandit Jawaharlal Nehru.",
    lyricSnippets: [
      "Bedu pako baro maasa",
      "Narayana kafu pako chaita meri mila mai"
    ],
    pitchSignature: [0, 2, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["bedu", "pako", "baro", "maasa", "uttarakhand", "kumaon", "garhwal", "pahadi"],
    youtubeQuery: "Bedu Pako Baro Maasa traditional Uttarakhand folk"
  },

  // ==================== BHOJPURI & CENTRAL INDIA ====================
  {
    id: "chhath-geet-kelwa",
    title: "Kelwa Ke Patwa Par (Chhath Puja)",
    artist: "Sharda Sinha",
    language: "Bhojpuri / Maithili",
    region: "Mithila & Bhojpuri",
    state: "Bihar",
    genre: ["Chhath Devotional Folk"],
    occasion: ["Chhath Puja"],
    instruments: ["Harmonium", "Dholak", "Manjira"],
    era: "Heritage Classic",
    period: "Traditional Hymn",
    isFolkHeritage: true,
    description: "The most sacred Chhath Puja folk song sung by Padma Bhushan Sharda Sinha offering reverence to the Sun God.",
    culturalBackground: "Chhath Puja is Bihar's ancient Vedic festival of solar worship.",
    lyricSnippets: [
      "Kelwa ke patwa par ugele suruj dev",
      "Ho dina nath ugele suruj dev"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 5, 4, 2, 0],
    keywords: ["chhath", "puja", "sharda", "sinha", "kelwa", "suruj", "bihar"],
    youtubeQuery: "Kelwa Ke Patwa Par Sharda Sinha Chhath geet"
  },
  {
    id: "pandavani-chhattisgarh",
    title: "Pandavani (Teejan Bai Epic Folk)",
    artist: "Padma Vibhushan Teejan Bai",
    language: "Chhattisgarhi",
    region: "Central India",
    state: "Chhattisgarh",
    genre: ["Pandavani", "Epic Ballad Performance"],
    occasion: ["Cultural Festival", "Storytelling"],
    instruments: ["Tamboora", "Manjira", "Dholak"],
    era: "Heritage",
    period: "Traditional Tribal Epic",
    isFolkHeritage: true,
    description: "Thrilling Kapalik Pandavani folk musical narration of the Mahabharata by legendary Padma Vibhushan Teejan Bai.",
    culturalBackground: "Teejan Bai brought Chhattisgarh's Pandavani folk art to the world stage using her Tamboora as a bow, mace, and sword.",
    lyricSnippets: [
      "Pandavani gaavat hain teejan bai",
      "Bhim sen uthe tamboora dhar",
      "Draupadi pukar kare"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["pandavani", "teejan", "bai", "chhattisgarh", "mahabharata", "tamboora", "kapalik", "unesco"],
    youtubeQuery: "Teejan Bai Pandavani traditional Chhattisgarh folk performance"
  },

  // ==================== NATIONAL PATRIOTIC & SUFI HERITAGE ====================
  {
    id: "vande-mataram-heritage",
    title: "Vande Mataram",
    artist: "Bankim Chandra Chattopadhyay",
    language: "Sanskrit / Bengali",
    region: "Pan-India",
    state: "National Anthem",
    genre: ["Patriotic Heritage"],
    occasion: ["Independence Day", "Republic Day"],
    instruments: ["Orchestral", "Choir", "Tabla", "Sitar"],
    era: "Heritage",
    period: "1882",
    isFolkHeritage: true,
    description: "India's national song honoring the motherland from Bankim Chandra Chattopadhyay's Anandamath.",
    culturalBackground: "The central anthem of India's freedom movement.",
    lyricSnippets: [
      "Vande mataram sujalaam suphalaam",
      "Malayaja shytalaam shasya shyaamalaam maataram"
    ],
    pitchSignature: [0, 4, 7, 9, 11, 12, 11, 9, 7, 4, 0],
    keywords: ["vande", "mataram", "bankim", "sujalaam", "patriotic", "freedom"],
    youtubeQuery: "Vande Mataram original patriotic song"
  },
  {
    id: "dama-dam-mast-qalandar",
    title: "Dama Dam Mast Qalandar",
    artist: "Traditional Sufi Qawwali",
    language: "Sindhi / Punjabi / Urdu",
    region: "Punjab-Sindh",
    state: "Punjab",
    genre: ["Sufi Qawwali", "Ecstatic Folk"],
    occasion: ["Sufi Urs"],
    instruments: ["Dholak", "Harmonium", "Handclaps"],
    era: "Heritage",
    period: "13th Century",
    isFolkHeritage: true,
    description: "Centuries-old Sufi devotional chant honoring Saint Lal Shahbaz Qalandar.",
    culturalBackground: "Revered across South Asia and sung by legendary Sufi bards.",
    lyricSnippets: [
      "Ho lal meri pat rakhiyo bhala jhule lalan",
      "Sindhdi da sewan da shahbaz qalandar"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["dama", "dam", "mast", "qalandar", "sufi", "qawwali", "nusrat"],
    youtubeQuery: "Dama Dam Mast Qalandar Nusrat Fateh Ali Khan"
  },
  {
    id: "hanuman-chalisa-trad",
    title: "Hanuman Chalisa",
    artist: "Goswami Tulsidas / Hariharan",
    language: "Awadhi (Hindi)",
    region: "Pan-India",
    state: "Uttar Pradesh",
    genre: ["Devotional Hymn"],
    occasion: ["Daily Worship"],
    instruments: ["Tabla", "Harmonium", "Manjira"],
    era: "Heritage",
    period: "16th Century",
    isFolkHeritage: true,
    description: "40-verse devotional stotra composed by poet-saint Tulsidas in praise of Lord Hanuman.",
    culturalBackground: "Chanted by millions every morning across India.",
    lyricSnippets: [
      "Shree guru charan saroj raj nij man mukur sudhari",
      "Jai hanuman gyan gun sagar"
    ],
    pitchSignature: [0, 2, 4, 5, 7, 5, 4, 2, 0],
    keywords: ["hanuman", "chalisa", "tulsidas", "jai", "gyan", "devotional"],
    youtubeQuery: "Hanuman Chalisa Gulshan Kumar Hariharan"
  },

  // ==================== ICONIC POPULAR ANTHEMS ====================
  {
    id: "kesariya-brahmastra",
    title: "Kesariya",
    artist: "Arijit Singh",
    language: "Hindi",
    region: "Pan-India",
    state: "Bollywood",
    genre: ["Romantic Pop"],
    occasion: ["Romantic", "Wedding"],
    instruments: ["Acoustic Guitar", "Strings"],
    era: "Modern",
    period: "2022",
    isFolkHeritage: false,
    description: "Romantic ballad from Brahmastra built around gentle guitar chords and saffron imagery.",
    culturalBackground: "Major chart-topping romantic hit across India.",
    lyricSnippets: [
      "Kesariya tera ishq hai piya",
      "Rang jaun jo main haath lagaun"
    ],
    pitchSignature: [0, 4, 7, 9, 7, 4, 2, 0],
    keywords: ["kesariya", "arijit", "singh", "brahmastra", "ishq", "love"],
    youtubeQuery: "Kesariya Brahmastra Arijit Singh"
  },
  {
    id: "chaiyya-chaiyya",
    title: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh, Sapna Awasthi",
    language: "Hindi",
    region: "Pan-India",
    state: "Bollywood",
    genre: ["Sufi Dance"],
    occasion: ["Celebration"],
    instruments: ["Dhol", "Tabla", "Brass"],
    era: "Classic Modern",
    period: "1998",
    isFolkHeritage: false,
    description: "High-energy train-top dance anthem composed by A. R. Rahman.",
    culturalBackground: "Filmed atop a moving train featuring Sukhwinder Singh's vocals.",
    lyricSnippets: [
      "Jinke sar ho ishq ki chhaao",
      "Chaiyya chaiyya chaiyya chaiyya"
    ],
    pitchSignature: [0, 5, 7, 10, 12, 10, 7, 5, 0],
    keywords: ["chaiyya", "chaiyya", "dil se", "sukhwinder", "rahman", "train"],
    youtubeQuery: "Chaiyya Chaiyya Dil Se AR Rahman"
  },
  {
    id: "naatu-naatu",
    title: "Naatu Naatu",
    artist: "Rahul Sipligunj, Kaala Bhairava",
    language: "Telugu",
    region: "South India",
    state: "Telangana / Andhra Pradesh",
    genre: ["Tollywood Mass Folk", "Oscar Winning Dance"],
    occasion: ["Party", "Victory Celebration"],
    instruments: ["Deno Drum", "Brass", "Synthesizer"],
    era: "Modern",
    period: "2022",
    isFolkHeritage: false,
    description: "Oscar-winning high-octane dance anthem from RRR celebrating rustic Telugu mass rhythm.",
    culturalBackground: "Won the Academy Award for Best Original Song in 2023.",
    lyricSnippets: [
      "Naatu naatu naatu naatu naatu veera naatu",
      "Polam gattu dhummu lepe naatu naatu"
    ],
    pitchSignature: [0, 4, 7, 10, 12, 10, 7, 4, 0],
    keywords: ["naatu", "naatu", "rrr", "telugu", "oscar", "dance"],
    youtubeQuery: "Naatu Naatu RRR full video song"
  }
,

  // ==================== RAJASTHANI LOK BHAJANS ====================
  {
    "id": "bhajan-surya-dev",
    "title": "Surya Dev Ka Bhajan (काला जी काला कोई करो सहेल्या ऐ)",
    "artist": "Traditional Rajasthani Women Folk Bards",
    "language": "Rajasthani",
    "region": "Jaipur, Jodhpur, Shekhawati, Bikaner",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Surya Worship",
      "Ritual Heritage"
    ],
    "occasion": [
      "Surya Puja",
      "Paush Month Fasting",
      "Morning & Evening Rituals"
    ],
    "instruments": [
      "Dholak",
      "Manjira",
      "Choutara"
    ],
    "era": "Ancient Heritage",
    "period": "Traditional Ritual Song",
    "isFolkHeritage": true,
    "description": "यह रीतिका गीत सूर्य भगवान के रंगों (काले, पीले, हरे, सफेद व लाल) तथा उनकी पत्नी रेणादे की सराहना करते हुए गाया जाता है।",
    "culturalBackground": "एक सहेली दूसरी सहेली से कहती है: तुम कहती हो ग्रहण लग जाने पर सूर्य काला हो जाता है। पर इससे क्या अन्तर पड़ता है, वन में कौए भी तो काले होते हैं, सूर्य का घोड़ा भी तो काला है और उसकी पत्नी रेणादे के बाल भी तो काले हैं। केवल वह काला ही नहीं रहता, वह सूर्य उजाला भी तो करता है। जब वह अस्त होता है उसका सिंदूर रंग सा बनता है। प्रातःकाल होते ही गायें वनों में चरने जाती हैं, पक्षी प्रसन्नता से उड़ते हैं और हम सब अपने नियम धर्म की सेवा करते हैं। फिर तुम सूर्य को पीला-पीला क्या कह रही हो? चने की दाल, सूर्य का घोड़ा, रेणादेजी की ओढ़नी सभी तो पीले हैं। सूर्य सफेद है तो खेतों में कपास भी सफेद है। सूर्य लाल है तो पूस मास भी लाल होता है।",
    "lyricSnippets": [
      "काला जी काला कोई करो सहेल्या ऐ",
      "काला वनखंड रा नाग",
      "काले सूरज जी रो घोड़लो सहेल्या ऐ",
      "काला वहू रेणादेरा केस",
      "तमका उजास वरणो, आयेमते सिंदूर वरणो",
      "गऊ ऐ वरण जाली पढ़ोदा मारग चालीया",
      "मेम धरम सब साथ सहेल्या ऐ, बावल पर बाज्या ढोल",
      "पीले तो पीले कोई करो सहेल्या ऐ, पीली चणा केरी दाल",
      "पीला सूरज जी रो घोड़लो, सहेल्या ऐ पीला बहू रेणा देती",
      "धोला जी धोला कोई करो सहेल्या ऐ, धोला बहू रेणा देती",
      "रातो रातो कोई करो सहेल्या ऐ, राती घुंघले से मजीत",
      "रातो सूरज जी रा घोड़ला सहेल्या ऐ, राता बहू रेणा देरा"
    ],
    "keywords": [
      "surya",
      "surya dev",
      "surya dev bhajan",
      "bhajan",
      "suraj",
      "renade",
      "kala ji kala",
      "jaipur",
      "jodhpur",
      "shekhawati",
      "bikaner",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Surya Dev Ka Bhajan Rajasthani Folk"
  },

  {
    "id": "bhajan-goga-ji",
    "title": "Goga Ji Ka Bhajan (कैठे रो कही जे थूं चौधरी रे)",
    "artist": "Choutara & Damru Temple Bards",
    "language": "Rajasthani",
    "region": "Billoor Village, Marwar",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Rajasthani Devotional",
      "Veer Gatha"
    ],
    "occasion": [
      "Goga Navami",
      "Choutara Damru Satsang",
      "Devotional Worship"
    ],
    "instruments": [
      "Choutara",
      "Damru",
      "Manjira",
      "Dholak"
    ],
    "era": "Ancient Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "चौतारा व डमरू बजा कर यह भजन राजस्थान के मन्दिरों में गाया जाता है। यह भजन गोगा चौहान और बिलूर गांव के चौधरी खैरादां का संवाद है।",
    "culturalBackground": "गोगा, राजस्थान के एक प्रतापी वीर व वचन निभाने वाले लोक देवता हैं। इस भजन में गोगा जी कहते हैं: हे चौधरी, तेरा क्या नाम है? तू कहां का रहने वाला है? चौधरी उत्तर देता है: मैं बिलूरा गांव का चौधरी हूं, मेरा नाम खैरादां है। गोगा जी कहते हैं: यदि तेरे मन में पीर है, दुख है, तू मेरी सेवा कर, तेरे सब दुःखों का नाश हो जायेगा।",
    "lyricSnippets": [
      "कैठे रो कही जे थूं चौधरी रे",
      "कोई कही जे थारो नांव",
      "धाम बिलूरै रो चौधरी",
      "खैरादौ कही जे म्हारो नाम",
      "सुष ले खेगदा गोगा जी",
      "कही जे म्हारो नाम",
      "सेवा म्हारी थाम ले",
      "मेटू थारे तन री पीर"
    ],
    "keywords": [
      "goga",
      "gogaji",
      "goga ji",
      "choudhary",
      "khairadan",
      "biloor",
      "choutara",
      "damru",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Goga Ji Ka Bhajan Rajasthani Folk"
  },

  {
    "id": "bhajan-diggi-puri",
    "title": "Diggi Puri Ka Raja (डिग्गी पुरी का राजा थारे बाजे नौपत बाजा)",
    "artist": "Gujjar Folk Devotional Bards",
    "language": "Rajasthani",
    "region": "Diggi Pur, Jaipur Region",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Krishna Bhajan",
      "Kalyan Ji Devotional"
    ],
    "occasion": [
      "Diggi Puri Yatra",
      "Devotional Fair",
      "Gujjar Community Folk Bhajan"
    ],
    "instruments": [
      "Algoza",
      "Dhol",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "जयपुर के समीप डिग्गीपुर गांव में स्थित भगवान श्रीकृष्ण (कल्याण जी) का अति प्रसिद्ध भक्ति लोक भजन।",
    "culturalBackground": "यह गीत गूजर जाति द्वारा अलगोजा, ढोल व मंजीरा के साथ गाया जाता है। हे डिग्गीपुरी के राजा तुम्हारे द्वार पर नौबत (मंगलसूचक बाजा) बज रही है, दूर दूर से हजारों यात्री तेरे दर्शन करने, शीश झुकाने व आरती करने आते हैं, तुम उनकी मनोकामना पूरी करो।",
    "lyricSnippets": [
      "डिग्गी पुरी का राजा",
      "थारे बाजे नौपत बाजा",
      "डिग्गी पुरी का राजा",
      "थारे चरणा सीस नवाऊं",
      "थारे दरसण करवा आऊं",
      "दूर दूर का जातरी थांने",
      "ध्यावे उतारे आरती",
      "म्हारे डिग्गीपुरी का राजा"
    ],
    "keywords": [
      "diggi",
      "diggipuri",
      "kalyan ji",
      "krishna",
      "algoza",
      "dhol",
      "manjira",
      "gujjar",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Diggi Puri Ka Raja Kalyan Ji Bhajan"
  },

  {
    "id": "bhajan-bai-thare",
    "title": "Bai Thare Ae Mandir Mein (देवी भजन - बाई थारे ऐ मन्दिर में)",
    "artist": "Ajmer & Kishangarh Folk Singers",
    "language": "Rajasthani",
    "region": "Ajmer, Kishangarh, Beawar",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Devi Bhajan",
      "Bhopa Folk Lore"
    ],
    "occasion": [
      "Navratri",
      "Devi Worship",
      "Bhopa Rituals"
    ],
    "instruments": [
      "Choutara",
      "Dholak",
      "Ghunghru",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "अजमेर, किशनगढ़ व ब्यावार में प्रचलित सिंह वाहिनी भगवती देवी के चमत्कारों एवं मन्दिर का लोक भजन।",
    "culturalBackground": "हे देवी तुम्हारे मन्दिर के चारों ओर बड़े-बड़े पहाड़ व चट्टानें शोर मचाते हैं। सिंह पर सवार होने वाली देवी तुम अपने चमत्कार दिखा-दिखाकर सबको मुग्ध कर लेती हो। तुम्हारे मन्दिर में भक्तगण इतनी भेंट चढ़ाते हैं फिर भी तुम अपना कोप प्रकट करती रहती हो। तुम तो मन्दिर के पुजारी (भोपा) को भी बांध कर रख देती हो।",
    "lyricSnippets": [
      "बाई थारे ऐ मन्दिर में पण भाकरिया भरणावे है",
      "हाजर नाजर रमती, जोरावर नार सिंघी",
      "रमतीडी परचा देवे है",
      "बाई थारे ऐ मन्दिर में पण फिर बेस चढ़ावे ऐ",
      "हाजर नाजर रमती।",
      "बाई थारे ऐ मन्दिर पण फिर फिर भेटे चढ़ावे ऐ",
      "हाजर नाजर रमती।",
      "बाई थारे ऐ मन्दिर में भोपा ने बांध गुड़ावे ऐ",
      "हाजर नाजर रमती।"
    ],
    "keywords": [
      "bai",
      "devi",
      "bhokariya",
      "singhi",
      "bhopa",
      "ajmer",
      "kishangarh",
      "beawar",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Bai Thare Ae Mandir Mein Devi Bhajan"
  },

  {
    "id": "bhajan-narsi-ji",
    "title": "Narsi Ji Ka Bhajan (नरसी जी तो मोडन्यो ने घेर घरे लावे रे)",
    "artist": "Traditional Rajasthani Folk Bards",
    "language": "Rajasthani",
    "region": "Marwar & Mewar",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Narsi Bhagat Lore",
      "Mayra Folk Ballad"
    ],
    "occasion": [
      "Mayra",
      "Satsang",
      "Folk Storytelling"
    ],
    "instruments": [
      "Ektara",
      "Khartal",
      "Dholak"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "नरसी भक्त एवं उनकी पत्नी के बीच साधु सेवा और नैनी बाई के मायरा प्रसंग पर आधारित सरस लोक भजन।",
    "culturalBackground": "नरसी भक्त साधुओं से हर समय घिरे रहते हैं, जब एक को बुलाते हैं तो चार चार आ जाते हैं। चूल्हे के पीछे एक ठण्डी रोटी भी नहीं बच पाती। नरसी जी की पत्नी कहती हैं कि साधु सब खा जाते हैं, सिर मुंडाते हैं, लम्बे टीके लगाते हैं। नैनीबाई के मायरे के लिए साधुओं की सेना साथ है।",
    "lyricSnippets": [
      "नरसी जी तो मोडन्यो ने घेर घरे लावे रे",
      "एक न बुलावे मोड्या दोय चार आवे रे",
      "चूल्हा पाछै ठण्डी रोटी, रहण नई पावै रे",
      "देखो तो बाबो जी मायरो ले जाये रे, नैनी बाई के चरसी लो",
      "छाज भर भर पीसू मै कूंड़ा भर भर पोवू रे",
      "जाय काट्या मोडियां ने भूखां मरती रोवू रे",
      "नित उठ मोडियां सांयडबाने जावैरे, एक दोय मोडियो डूब क्यूं न जाये रे",
      "मूंड मुंडावै मोडियो, लांबा काडे टीका",
      "जाय काट्या मोडियांरा, दरसण लागे फीका"
    ],
    "keywords": [
      "narsi",
      "narsi ji",
      "narsi bhagat",
      "naini bai",
      "mayra",
      "modya",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Narsi Ji Ka Bhajan Rajasthani"
  },

  {
    "id": "bhajan-banwari",
    "title": "Banwari Mhara Lal (बनवारी म्हारा लाल)",
    "artist": "Jaipur Agricultural Folk Singers",
    "language": "Rajasthani",
    "region": "Jaipur Village Region",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Farmer Folk Lore",
      "Shram Bhakti"
    ],
    "occasion": [
      "Harvest",
      "Agricultural Folk Singing",
      "Chaupal Gathering"
    ],
    "instruments": [
      "Ektara",
      "Manjira",
      "Dholak"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "जयपुर के ग्रामीण अंचल में किसानों द्वारा गाया जाने वाला श्रम, निष्ठा और आत्म-संतोष का अनुपम लोक भजन।",
    "culturalBackground": "किसान भगवान से कहता है कि वह उससे किसी बात में कम नहीं: हे बनवारी, यदि तेरे पास राधा व रुकमण है, तो मेरे पास भी दो जाटणियां हैं। यदि तू महलों में रहता है, तो मुझपर भी टूटी झोंपड़ी की छांव है। यदि तेरे पास मस्त हाथी है, तो मेरे पास भी भूरे रंग का बैल है।",
    "lyricSnippets": [
      "बनवारी म्हारा लाल",
      "कोना थारे सारे",
      "सुणी छे राधा रुकमण थारे",
      "थारी बराबरी म्हे करां",
      "कोई दो दो जाटणी म्हारे",
      "सुण्या छे महल मालिया थारे, थारी बराबरी म्हे करूं",
      "कोई टूटी टपरिया म्हारे",
      "सुण्यो छे मग्नो हाथी थारे, थारी बराबरी म्हे करूं",
      "कोई भूरियो पाडियो म्हारे"
    ],
    "keywords": [
      "banwari",
      "banwari mhara lal",
      "radha rukman",
      "jaatni",
      "farmer bhajan",
      "kisan bhajan",
      "jaipur",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Banwari Mhara Lal Rajasthani Bhajan"
  },

  {
    "id": "bhajan-ramdev-ji",
    "title": "Ramdev Ji Ka Bhajan (दुरबल अरदास रामदेव)",
    "artist": "Runicha Pilgrimage Folk Bards",
    "language": "Rajasthani",
    "region": "Ramdevra / Runicha, Jodhpur",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Ramdevra Heritage",
      "Devotional Lore"
    ],
    "occasion": [
      "Bhadra Fair",
      "Ramdevra Yatra",
      "Chaupal Satsang"
    ],
    "instruments": [
      "Ektara",
      "Ravanahatha",
      "Khartal",
      "Dholak"
    ],
    "era": "Ancient Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "समस्त राजस्थान में परम पूज्य लोक देवता बाबा रामदेव जी (रूणेचा) की भक्ति में गाया जाने वाला भजन।",
    "culturalBackground": "रामदेव जी को राजस्थानी अवतार माना जाता है। जोधपुर के पास रामदेवरा (रूणेचा) में भादों मास में बहुत बड़ा मेला लगता है। इस भजन में बाबा रामदेव जी की बाल लीलाओं, परचों और भक्तों पर कृपा का सजीव वर्णन है।",
    "lyricSnippets": [
      "दुरबल अरदास रामदेव",
      "अरज करूं थाने, हुन्यो देत बावड़ी चाल्यो",
      "हठक नई माने, दड़ी रमतो दोरो दियो",
      "पीर जा लुकिया छाने, लप बालद बिण जारो",
      "आयो थां पूछ्यो बांने, मिसरी रो लूण",
      "करियो दुनिया से जाणे।"
    ],
    "keywords": [
      "ramdev",
      "ramdev ji",
      "durbal ardas",
      "runicha",
      "ramdevra",
      "ravanahatha",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Ramdev Ji Ka Bhajan Durbal Ardas"
  },

  {
    "id": "bhajan-hadbu-ji",
    "title": "Hadbu Ji Ka Bhajan (हड़बू जी सूता रंग महल में)",
    "artist": "Marwar Traditional Ravanahatha Bards",
    "language": "Rajasthani",
    "region": "Marwar / Runicha Region",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Hadbu Ji Sankhla Lore",
      "Folk Legend"
    ],
    "occasion": [
      "Folk Deity Worship",
      "Night Satsang",
      "Marwar Ballad"
    ],
    "instruments": [
      "Ravanahatha",
      "Choutara",
      "Manjira"
    ],
    "era": "Ancient Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "राजस्थान के पंच पीरों में से एक पूज्य लोक देवता हड़बू जी सांखला का स्वप्न एवं रूणेचा यात्रा भजन।",
    "culturalBackground": "हड़बू जी सांखला के रंग महल में विश्राम, आधी रात के स्वप्न जंजाल, सुगन चिड़ी के शकुन और रूणेचा प्रस्थान की पावन लोक कथा का भक्ति संगीत।",
    "lyricSnippets": [
      "हड़बू जी सूता रंग महल में जी",
      "हिंगलु रा ढोल्या सिरख पतरणा",
      "हड़बू जी सूता रंग महल में",
      "आधी रात का मने सपनो आयो",
      "सपनो मने आयो जंजाल जी",
      "हड़बू जी सुरंग पिलाण पर बैठा जाय",
      "जाय रुणेचा हड़बू जी",
      "सुगन चिड़ी, सुगना म्हारी माता",
      "हड़बू जी ने सगुन बताय।।"
    ],
    "keywords": [
      "hadbu",
      "hadbu ji",
      "hadbu ji sankhla",
      "rang mahal",
      "sugan chiri",
      "runicha",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Hadbu Ji Ka Bhajan Rajasthani Folk"
  },

  {
    "id": "bhajan-balaji",
    "title": "Balaji (Hanuman Ji) Ka Bhajan (बावड़ी का बालाजी)",
    "artist": "Pushkar & Ajmer Devotional Folk Singers",
    "language": "Rajasthani",
    "region": "Ajmer, Beawar, Pushkar, Kekri, Kishangarh",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Hanuman Bhajan",
      "Bheru & Mata Devotional"
    ],
    "occasion": [
      "Tuesday Worship",
      "Bala Ji Satsang",
      "Local Fair"
    ],
    "instruments": [
      "Dholak",
      "Manjira",
      "Choutara"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "अजमेर, पुष्कर व ब्यावर क्षेत्र का सुप्रसिद्ध हनुमान जी (बावड़ी का बालाजी) एवं भैरू जी लोक भजन।",
    "culturalBackground": "भक्त हनुमान जी से अरदास करता है: हे बावड़ी के बालाजी, मेरे जीवन की नाव पार लगाओ। भैरू बकरे का भोग मांगते हैं व माता नये वस्त्र। मैं तुम पर प्रतिदिन दूध, पताशे व रेवड़ी का भोग चढाऊंगा, तुम्हीं आकर मदद करो।",
    "lyricSnippets": [
      "म्हारा बेड़ा लगाय दीजो पार",
      "बावड़ी का बालाजी",
      "भैरू मांगे बाकला, म्हारी माता मांगे बेस",
      "म्हारे आजे मदत पर आज",
      "दूध पताशा रेवड़ी जी, थाने नित उठ देसी भोग",
      "बावड़ी का बाला जी, कुची वाला का भैरू जी",
      "सुरसत माता सारदा जी ओ",
      "म्हारो बेडो लगा दीजो पार"
    ],
    "keywords": [
      "balaji",
      "hanuman",
      "bawari ka balaji",
      "bheru ji",
      "sharada",
      "ajmer",
      "beawar",
      "pushkar",
      "kekri",
      "kishangarh",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Bawari Ka Balaji Bhajan Pushkar"
  },

  {
    "id": "bhajan-gajanand",
    "title": "Gajanand Ka Bhajan (गणपत दाता दोसो दाता होजी)",
    "artist": "Artisan Folk Guilds (Mochi, Chamar, Balai, Rangrez)",
    "language": "Rajasthani",
    "region": "Rajasthan",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Ganesh Stuti",
      "Artisan Folk Lore"
    ],
    "occasion": [
      "Ganesh Chaturthi",
      "Workplace Evening Satsang",
      "Folk Music Gathering"
    ],
    "instruments": [
      "Choutara",
      "Manjira",
      "Dholak"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "काम-धन्धे के बाद कारीगरों व संतों द्वारा चौतारा एवं मंजीरे बजाकर गाया जाने वाला गणपति लोक भजन।",
    "culturalBackground": "हे गणपति तुम्हारे चारों तरफ घुंघरुओं के साथ ताल दे देकर लोग गाते हैं। तुम सबके दाता हो। तुम्हारे चौड़े मस्तक पर तेल-सिन्दूर चढ़ता है, लम्बी सूंड भूले मनुष्य को सन्मार्ग पर लाती है, चौड़े कान देवियों को पंखा झलते हैं, और चौड़ी पीठ पर अम्बारी रखी जाती है।",
    "lyricSnippets": [
      "अगल बगल में ताल बाजे",
      "घूंघरा बाजन्ता, गणपत दाता दोसो दाता होजी",
      "थारा चौड़ा रे सीस गजानन्द ज्यापै तेल सिन्दूर चढ़न्ता",
      "थारी लम्बी रे सूंड गजानन्द नुगरां की नाड़ मरन्ता",
      "थारा चौड़ा रे कान गजानन्द, शक्ति के भाल झुलन्ता",
      "थारी चौड़ी रे पीठ गजानन्द, ज्यापै अम्बारी रखन्ता"
    ],
    "keywords": [
      "gajanand",
      "ganpati",
      "ganesh",
      "choutara",
      "manjira",
      "artisan bhajan",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Ganpat Data Doso Data Gajanand Bhajan"
  },

  {
    "id": "bhajan-gorja-mata",
    "title": "Gorja Mata Ka Bhajan (गोर ए गणगोर माता खोल रे किवाड़ी)",
    "artist": "Jaipur & Shekhawati Women Folk Singers",
    "language": "Rajasthani",
    "region": "Jaipur, Shekhawati, Bikaner",
    "state": "Rajasthan",
    "genre": [
      "Lok Bhajan",
      "Gangaur Folk Song",
      "Devi Worship"
    ],
    "occasion": [
      "Gangaur Festival (Chaitra Month)",
      "Women's Prayer",
      "Spring Lore"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "चैत्र मास में गणगौर पूजा के अवसर पर महिलाओं द्वारा गोरजा (गौरी) माता के द्वार पर गाया जाने वाला मंगल भजन।",
    "culturalBackground": "हे माता गणगौर, किवाड़ खोलो, मैं तुम्हारी पुजारिन बाहर खड़ी हूँ। महिलाएं माता से प्रार्थना करती हैं कि हमें कृष्ण जैसा भाई, राई जैसी भाभी, प्रेम से रहने वाला पिता, बड़े दिल वाला चाचा, चूड़ियों वाली चाची और सदा सुहागण बहनें देना।",
    "lyricSnippets": [
      "गोर ए गणगोर माता खोल रे किवाड़ी",
      "बायरि उबी था ने पूजण वाली",
      "पूजो ऐ पुजन्ता वाली काईं काईं मांगो",
      "कान कंवर सो बीरों मांगा राई सी भोजाई",
      "जतवर जामी बाबल मांगा राता देई मायड",
      "बड़ो दु मालिक काको मांगा",
      "चुडला वाली काकी",
      "फूंस उड़ावण फूफो मांगा",
      "कूड़ो धोवण मूवा",
      "काजल्यो बहनोई मांगा",
      "सदा सुहागण बहना।"
    ],
    "keywords": [
      "gorja",
      "gangaur",
      "gorja mata",
      "jaipur",
      "shekhawati",
      "bikaner",
      "chaitra",
      "bhajan",
      "rajasthani bhajan"
    ],
    "youtubeQuery": "Gor Ae Gangour Mata Khol Re Kiwari Bhajan"
  }
,

  // ==================== RAJASTHANI VIVAH, DAMPATYA & JACCHA GEETS ====================
  {
    "id": "geet-vivah-1",
    "title": "Vivah Geet I (चम्पो चमेली भर को मोगरो ए मालेणी)",
    "artist": "Traditional Rajasthani Women Folk Singers",
    "language": "Rajasthani",
    "region": "Jaipur, Jodhpur, Shekhawati, Ajmer",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Rajasthani Folk",
      "Wedding Ritual"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Sehra & Dowry Rituals"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional Ritual Song",
    "isFolkHeritage": true,
    "description": "यह गीत विवाह के अवसर पर गाया जाता है। सेहरे को देखकर स्त्रियां उसके रंगों की चर्चा करती है व विवाह में दिये हुए दुल्हन के कपडों व आभूषणों के बारे में कहती है।",
    "culturalBackground": "हे मालिन, हार में तुमने सब फूल चम्पा, चमेली, मोगरा, गेंदा लगाये हैं, परन्तु चार रंग इसमें तुम भूल गई हो। हमने तो दुल्हन के लिए इतने परिश्रम से दहेज बनाया है। ज्योतिषी की गली में जाकर तो हमने लग्न की महूरत पूछी, बजाजी की दूकान पर जा-जाकर कपड़ों का मोल किया, सुनार की दुकान पर गहनों का मोल-भाव तय कर कर के लिया। हमने तो इतनी मेहनत की और तू चार रंग ही भूल गई। जाओ अच्छा सा हार लाओ।",
    "lyricSnippets": [
      "चम्पो चमेली भर को मोगरो ए मालेणी",
      "और कछु दावदी रो फूल गेंदा मालणी",
      "सेवरा में चार रंग भूल गई मालेणी",
      "जोशीडा गलियां होय नीसर्या रो मालणी",
      "कर गया लगण रो चाक – गेंदा",
      "बजाजी री गलियां होय नीसर्या हे मालणी",
      "कर गया पड़दा रो मोल – गेंदा",
      "सोनीडा री गलियां होय नीसर्या हे मालणी",
      "कर गया गेणला रो मोल – गेंदा"
    ],
    "keywords": [
      "champo chameli",
      "maleni",
      "vivah",
      "geet",
      "wedding",
      "sehra",
      "jaipur",
      "jodhpur",
      "shekhawati",
      "ajmer",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Champo Chameli Bhar Ko Mogro Vivah Geet Rajasthani"
  },

  {
    "id": "geet-vivah-2",
    "title": "Vivah Geet II (मेथी को तो व्याव रच्यौ छ - सब्जी विवाह हास्य गीत)",
    "artist": "Jaipur Women Folk Singers",
    "language": "Rajasthani",
    "region": "Jaipur Region",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Humorous Folk Song",
      "Hasya Geet"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Fairs & Gatherings"
    ],
    "instruments": [
      "Dholak",
      "Manjira",
      "Harmonium"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "यह लोकगीत जयपुर राज्य में अधिक प्रचलित है। विवाह के अवसर पर यह बड़ी धूमधाम से गाया जाता है। मेलों पर भी महिलाएं एकत्रित होकर इस गीत को बड़े चाव से गाती हैं। पूरा गीत हास्यपूर्ण हैं। मेथी का विवाह करेले से होने जा रहा है। इस उपलक्ष्य में बहुत-सी अन्य सब्जियों को कुछ न कुछ काम सौंपा गया है।",
    "culturalBackground": "मेथी का करेले से विवाह हो रहा है। करेले के साथ आलू बराती बन कर आये हैं और लहसन लड़के लड़की बन कर हंसते-गाते आ रहे हैं। आप सुनिये तो सही सब्जियों की बातें। कद्दू के तो नक्कारे बनाये हैं ब्याह में बजाने के लिये, व तुरई के डंके। दूल्हा दुल्हन की नानी नारंगी को बनाया गया और नींबू को नाना। बड़े धूमधाम से विवाह रचाया जा रहा है। जामुन को ज्योतिषी की पत्नी और अमरूद को ज्योतिषी बनाया। जब सब इकट्ठे हो गये तो मेथी का विवाह धूमधाम से रचाया जाने लगा।",
    "lyricSnippets": [
      "मेथी को तो व्याव रच्यौ छ",
      "करेला जी वींद बणाया",
      "सुणो जी तरकारी की बातां",
      "आलू कातो बराती बणाया",
      "लेसव्या का छोरा छोरी आया",
      "सुणो जी तरकारी की बातां",
      "कोला का तो निगारा बण आया",
      "तोरूं का डंका बणाया। सुणो - - - -",
      "नारंगी की नानी बणाई",
      "नींबू का तो नानो बणायो। सुणो - - - -",
      "जामुनिया की जोशण बण आई",
      "जायफल का जोशी बण आयो। सुणो - - - -"
    ],
    "keywords": [
      "methi",
      "karela",
      "vivah",
      "geet",
      "tarkari",
      "hasya geet",
      "jaipur",
      "wedding",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Methi Ko To Byav Rachyo Ch Rajasthani Vivah Geet"
  },

  {
    "id": "geet-vivah-3",
    "title": "Vivah Geet III (बाई थारो बीरो जी पैरे है पैरावणी - हास्य पैरावणी)",
    "artist": "Kishangarh & Ajmer Women Folk Singers",
    "language": "Rajasthani",
    "region": "Kishangarh & Ajmer",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Pairavani Song",
      "Humorous Folk Song"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Pairavani Ritual"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "यह हास्यपूर्ण गीत भी विवाह के अवसर पर स्त्रियां मिलकर दुल्हन को संकेत कर गाती हैं। इस गीत को 'पैरावणी' नाम से सम्बोधित किया गया है। 'पैरावणी' किशनगढ़ व अजमेर में अन्य जगहों से अधिक प्रचलित है।",
    "culturalBackground": "हे बहन, तुम्हारा भाई कैसे कपड़े पहनता है, उसके लम्बे-लम्बे हाथ व लम्बे-लम्बे होंठ दिखते हैं। तुम्हारे पिता के बाल मेंहदी से रंग कर लाल हो गये हैं, और दाढ़ी बहुत लम्बी है - यह भी क्या लिबास है? तुम्हारी माता, उसके कान कितने छोटे हैं, और चाचा, वह तो छाजला (सूप) के जैसे कानों वाला है। जो बहन है, उसके दांत कितने बड़े व लम्बे हैं। यह सब क्या पहराया है?",
    "lyricSnippets": [
      "बाई थारो बीरो जी पैरे है पैरावणी",
      "लाम्बा लाम्बा हाथां रो, लाम्बा होंठा रो पेरे है पैरावणी",
      "बाई थारो बाबल जी",
      "मेंदी राता माथा रो, लाम्बी लाम्बी दाढ़ी रो।। पैरे ।।",
      "बाई थारी मावड जी छोटा छोटा काना री ।। पैरे ।।",
      "बाई थारो काकोजी, छाजला सा कारा रो ।। पैरे ।।",
      "बाई थारी बेनड जी, लाम्बा लाम्बा दाता री ।। पैरे ।।"
    ],
    "keywords": [
      "bai tharo biro",
      "pairavani",
      "babal",
      "kishangarh",
      "ajmer",
      "vivah",
      "geet",
      "wedding",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Bai Tharo Biro Ji Paere Hai Pairavani Rajasthani Geet"
  },

  {
    "id": "geet-vivah-4",
    "title": "Vivah Geet IV (म्हारी हलदी रो रंग सुरंग - पीठी उबटन गीत)",
    "artist": "Traditional Rajasthani Women Folk Bards",
    "language": "Rajasthani",
    "region": "Jaipur, Jodhpur, Bikaner, Kishangarh, Ajmer",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Haldi Song",
      "Groom Ritual Song"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Haldi & Peethi Ritual"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "जयपुर, जोधपुर, बीकानेर, किशनगढ़ व अजमेर में यह विवाह गीत बहुत प्रचलित है। इसे 'हलदी' के नाम से सम्बोधित किया जाता है। राजस्थान में दूल्हे पर भी हल्दी/पीठी चढ़ाने के दिन स्त्रियां मिलकर यह गीत गाती हैं।",
    "culturalBackground": "मेरी हल्दी, जो मालवा प्रान्त में उत्पन्न हुई थी, उसका रंग बहुत पीला व सुन्दर है। पंसारी की दुकान से पिसवा कर दूल्हे के लिए लाई हूं। दूल्हे के परिवार की प्रशंसा करते हुए महिलाएं कहती हैं कि उसके दादा, दादी, पिता, माता सब बड़े चतुर व योग्य लोग हैं। हे दूल्हा तुम्हारी लम्बी आयु हो।",
    "lyricSnippets": [
      "म्हारी हलदी रो रंग सुरंग निपजे मालवे",
      "हलदी माल पसारी री हाट बणड़ा रे सिर चढे",
      "बणड़ारी दादयां चतर सुजान मनड़े कोड करे",
      "वारी मायड़ चतर सुजान केसर के वटे ।। म्हारी ।।",
      "वांरा बाबासा चतर सुजान",
      "मनडे कोड करे ।। म्हारी ।।",
      "चिरंजीवो रायजादा वनड़ा",
      "हल्दी मोलवे ।। म्हारी ।।"
    ],
    "keywords": [
      "haldi",
      "mhari haldi",
      "peethi",
      "banra",
      "malwa",
      "jaipur",
      "jodhpur",
      "bikaner",
      "kishangarh",
      "ajmer",
      "vivah",
      "geet",
      "wedding",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Mhari Haldi Ro Rang Surang Rajasthani Vivah Geet"
  },

  {
    "id": "geet-vivah-5",
    "title": "Vivah Geet V (कोयलड़ी सिद चाली - विदाई गीत)",
    "artist": "Traditional Rajasthani Women Folk Bards",
    "language": "Rajasthani",
    "region": "Ajmer, Jodhpur, Kishangarh, Bikaner",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Vidai Song",
      "Bidaai Folk Song"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Bride Vidai / Departure"
    ],
    "instruments": [
      "Dholak",
      "Manjira",
      "Harmonium"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "विवाह के बाद विदाई के समय यह करुण गीत गाया जाता है। अजमेर, जोधपुर, किशनगढ़, बीकानेर में यह अति लोकप्रिय है।",
    "culturalBackground": "हे कोयल, हमें छोड़ कर कहां जा रही हो। आम व इमली पकने को आये हैं, महुवे का पेड़ हवा में लहरा रहा है। ऐसे समय पर क्यों जा रही हो। पिता, माता, चाचा, दादा सबका इतना प्रेम होते हुए भी तुम सबको ठुकरा कर जा रही हो। चाचा के दरवाजे पर सदा खेलती आई हो, अब एक बार मुड़ कर तो देखो। अब समझ आई, एक तोता सगे सम्बन्धियों के झुंड के साथ आया और हमारे झुण्ड में से कोयल को छांट कर उड़ गया। हम सब तुमसे पूछते हैं कि कोयल सबके प्रेम को भुलाकर कहां चली?",
    "lyricSnippets": [
      "कोयलड़ी सिद चाली",
      "हे आम्बा पाक्या ने आमली",
      "हे महूड़ो लहरा जाय, कोयलड़ी सिद चाली",
      "हे इतरो बाबासा रो हेत, छोड़ ने सिर चाली, हे रमती",
      "काकोसा री पोल",
      "कोयलडर सिर चाली",
      "हे जायो सगारो सूवटो, ओ तो",
      "लेग्यो टोली में सूं टाल कोयलड़ी",
      "सिर चाली हे मैं थाणे पूछा म्हारी",
      "धीवड़ी हे इतरो काकोसा रा लाड",
      "कोयलड़ी — — —"
    ],
    "keywords": [
      "koyalri",
      "koyalri sid chali",
      "vidai",
      "bidaai",
      "ajmer",
      "jodhpur",
      "kishangarh",
      "bikaner",
      "vivah",
      "geet",
      "wedding",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Koyalri Sid Chali Rajasthani Vidai Geet"
  },

  {
    "id": "geet-vivah-6",
    "title": "Vivah Geet VI (पैल के फेरे बनडी बाबोसा री प्यारी - फेरों का गीत)",
    "artist": "Traditional Rajasthani Women Folk Bards",
    "language": "Rajasthani",
    "region": "Pan-Rajasthan",
    "state": "Rajasthan",
    "genre": [
      "Vivah Geet",
      "Phera Ritual Song"
    ],
    "occasion": [
      "Marriage / Vivah",
      "Agni Phera Ritual"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "वर-वधु जब यज्ञ की वेदी के चारों ओर फेरे लेते हैं, तब यह गीत महिलाएं गाती हैं। इसे 'फेरों का गीत' कहा गया है।",
    "culturalBackground": "पहले फेरे में दुल्हन पिता की प्यारी है, दूसरे फेरे में दुल्हन दादा की प्यारी है, तीसरे फेरे में दुल्हन भाई की प्यारी है, चौथे फेरे में दुल्हन पराई हो गई, हमारा उस पर कोई अधिकार नहीं।",
    "lyricSnippets": [
      "पैल के फेरे बनडी बाबोसा री प्यारी",
      "दूजे तो फेरे बनडी दादोसा री प्यारी",
      "तीजे तो फेरे बनडी बीरो सारी प्यारी",
      "चौथे तो फरे बनडी हुई री पराई।।"
    ],
    "keywords": [
      "phera",
      "pheron ka geet",
      "banri",
      "babosa",
      "vivah",
      "geet",
      "wedding",
      "rajasthani vivah geet"
    ],
    "youtubeQuery": "Pail Ke Phere Banri Babosa Ri Pyari Rajasthani Geet"
  },

  {
    "id": "geet-dampatya-1",
    "title": "Dampatya Geet I (म्हारी जोड़ी रा भंवर जी - सावन विरह गीत)",
    "artist": "Marwar Women Folk Singers",
    "language": "Rajasthani",
    "region": "Marwar Region",
    "state": "Rajasthan",
    "genre": [
      "Dampatya Geet",
      "Sawan Folk Song",
      "Viraha Geet"
    ],
    "occasion": [
      "Monsoon / Sawan",
      "Viraha & Reunion"
    ],
    "instruments": [
      "Dholak",
      "Manjira",
      "Algoza"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "यह गीत मारवाड़ की ओर अधिक गाया जाता है। वर्षा के दिनों में नायिका का पति परदेस में है और वह उसे याद कर रही है।",
    "culturalBackground": "मेरी जोड़ी के सरदार, मार्ग में हरियाली छा रही है, आप घर आ जावो। पिया नौकरी करनी भी थी तो कहीं नजदीक करते ताकि शाम पड़ते ही घर लौट आते। जिस प्रकार बाजूबन्द डोर के साथ होता है, तुम मेरी डोर हो, जल्दी घर आ जावो। न जाने तुम्हें नौकरी करने का किसने शौक लगाया और न जाने, जाने की आज्ञा किसने दी? पति उत्तर देता है कि शौक तो मेरे दोस्तों ने लगाया और जाने की आज्ञा बड़े भाई ने दी। कुछ भी हो प्रियतम, सावन मास झूम-झूम बरस रहा है, अब घर आ जावो।",
    "lyricSnippets": [
      "म्हारी जोड़ी रा भंवर जी",
      "मारगियो लिलांगोरे भंवर घर आव",
      "नैड़ी नैड़ी करजो पिया ओ अलबेला हो सांझ पड़े घर आव",
      "ढोला जी बाजू बंद री लूम्बा भंवर घर आव",
      "किण थाने चाला ढोला चालिया अलबेला भंवर जी",
      "किण थाने दीनी ढोला सीख, भंवर घर आव",
      "साथीड़ा तो चाला चालिया गोरी जी",
      "बीरोसा दीनी म्हाने सीख, भंवर घर आव",
      "म्हारी जोडोरा पन्नामारू, सावणी मोरे",
      "बिलम्यो घर आव।"
    ],
    "keywords": [
      "mhari jodi ra bhanwar ji",
      "dampatya geet",
      "bhanwar ji",
      "sawan",
      "marwar",
      "viraha",
      "rajasthani folk song"
    ],
    "youtubeQuery": "Mhari Jodi Ra Bhanwar Ji Marwari Sawan Geet"
  },

  {
    "id": "geet-dampatya-2",
    "title": "Dampatya Geet II (देख्यौ सपना में सालव कुमार - ढोला मारू स्वप्न गीत)",
    "artist": "Traditional Marwari Folk Bards",
    "language": "Rajasthani",
    "region": "Marwar & Jaisalmer",
    "state": "Rajasthan",
    "genre": [
      "Dampatya Geet",
      "Dhola Maru Ballad",
      "Dream Song"
    ],
    "occasion": [
      "Folk Balladry",
      "Storytelling"
    ],
    "instruments": [
      "Ravanahatha",
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "यह गीत राजस्थान की प्रसिद्ध प्रेमगाथा 'ढोला मारू' पर आधारित है। मारवण जब ढोला (सालवकुमार) को स्वप्न में देखती है तब अपनी सहेली को स्वप्न कह सुनाती है।",
    "culturalBackground": "सखी, स्वप्न में सालव कुमार दिखे, तुम्हें बता नहीं सकती कि उन्हें देखकर मैं कितनी निहाल हो गई। स्वप्न भी क्या जंजाल होता है, कुछ पता नहीं चलता कि क्या-क्या होता चला जाता है। उन्होंने कमर में कटार लगाई हुई थी व कपड़ों पर तिल्ले का काम था। उन्होंने मुझे गले लगाया और मेरे हाथों में मेंहदी का लाल रंग बिलकुल रच गया। मरवण ने सहेली से कहा कि उनकी बराबरी का योद्धा व सरदार कहीं नहीं मिलेगा।",
    "lyricSnippets": [
      "देख्यौ सपना में सालव कुमार",
      "एक बात कहूँ मै सजनी, सपना में भई छ निहाल",
      "सूता ने सपनो आवियो बाइसा, सपनो है जाल जंजाल ।।देख्यौ।।",
      "कमर कटारी बांकडी रे, असल गेंडा री ढाल",
      "हंस हंस पीऊ कण्ठ लगाई, हाथा में मेंहदी रचगी लाल ।। देख्यौ ।।",
      "जोडी रा जोधा ज्यां रे संग मे आसी, साइनो सालव कुमार ।। देख्यौ ।।",
      "कहत सखी री सुणो हो मारवण वो ही साजनियो सिरदार ।। देख्यौ ।।"
    ],
    "keywords": [
      "dekhyo sapna mein salav kumar",
      "dampatya geet",
      "salav kumar",
      "dhola maru",
      "marwan",
      "sapna",
      "jaisalmer",
      "marwar",
      "rajasthani folk song"
    ],
    "youtubeQuery": "Dekhyo Sapna Mein Salav Kumar Dhola Maru Geet"
  },

  {
    "id": "geet-jaccha-1",
    "title": "Jaccha Geet I (ग्वाड़ा तो बिचली पीपली ललना - पीपली जच्चा गीत)",
    "artist": "Jaipur & Shekhawati Women Folk Singers",
    "language": "Rajasthani",
    "region": "Jaipur, Ajmer, Shekhawati",
    "state": "Rajasthan",
    "genre": [
      "Jaccha Geet",
      "Chhathi & Surya Puja Song"
    ],
    "occasion": [
      "Childbirth / Jaccha",
      "Surya Puja Ritual"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "बच्चे पैदा होने के कुछ ही दिन बाद राजस्थान में सूर्यदेव को पूजते हैं। इस अवसर पर महिलाएं मिल कर यह गीत गाती हैं।",
    "culturalBackground": "मुहल्ले के बीच पीपल का एक सुन्दर पेड़ है। हे लाला, इसके पत्ते बड़े घने हैं। यह पीपली बड़ी प्यारी लगती है। बच्चे ने जब एक पत्ता तोड़ा, तो उसमें से टप-टप कर रंग चूने लगा। रंग इतना सुन्दर है कि उसमें चुनड़ी का पल्लू भिगो दिया और उस पर बहुत ही भला रंग चढ़ आया।",
    "lyricSnippets": [
      "ग्वाड़ा तो बिचली पीपली ललना",
      "लला जी हो जिणरा छे अड़बड़ पान",
      "प्यारी लागै पीपली ललना",
      "एक पान जच्चा तोड़ियो ललना",
      "ललाजीओ टप टप चवैरे मजीठ।। प्यारी ।।",
      "जिणमै चीर डुबोइयै ललना",
      "ललाजी ओ, हुयोरे बिजोला री भांत ।।प्यारी।।"
    ],
    "keywords": [
      "gwada to bichali pipali",
      "jaccha geet",
      "pipali",
      "surya puja",
      "childbirth",
      "jaipur",
      "ajmer",
      "shekhawati",
      "rajasthani jaccha geet"
    ],
    "youtubeQuery": "Gwada To Bichali Pipali Lalana Jaccha Geet"
  },

  {
    "id": "geet-jaccha-2",
    "title": "Jaccha Geet II (म्हारी मलूक जादी जच्चा - पति पत्नी संवाद)",
    "artist": "Traditional Rajasthani Women Folk Bards",
    "language": "Rajasthani",
    "region": "Pan-Rajasthan",
    "state": "Rajasthan",
    "genre": [
      "Jaccha Geet",
      "Family Samvad Song"
    ],
    "occasion": [
      "Childbirth / Jaccha",
      "Postnatal Gathering"
    ],
    "instruments": [
      "Dholak",
      "Manjira"
    ],
    "era": "Heritage",
    "period": "Traditional",
    "isFolkHeritage": true,
    "description": "सन्तान होने पर पति व पत्नी का हास्य एवं नोक-झोंक भरा संवाद है जिसमें पति पत्नी को सम्बंधियों का आदर करने की सीख देता है।",
    "culturalBackground": "प्रिय, बर्तन भर कर केसर घोला है, तुम्हारे लम्बे-लम्बे बाल बहुत अच्छे लगते हैं। मेरी एक बिनती सुनो। सास का आदर करना, तभी वह प्यार देगी। इस पर पत्नी कहती है कि सास मुझे अच्छी नहीं लगती। मुझे मार मार मेरी खाल दर्द कर रही है। पति ने कहा, भाभी का आदर करना। पत्नी उत्तर देती है कि भाभी भी अच्छी नहीं लगती, वह मुझसे रात भर अनाज पिसवाती है। पति बेचारा देवरानी का आदर करने की प्रार्थना करता है किन्तु पत्नी उससे भी सहमत नहीं। उसका कहना है कि वह तो आधी रसोई उसी से करवाती है। पति अपनी बहन के लिए कहता है उस पर पत्नी कहती है कि वह उसे बिल्कुल अच्छी नहीं लगती, वह तो एक की जगह आठ शिकायतें लगाती है।",
    "lyricSnippets": [
      "म्हारी मलूक जादी जच्चा",
      "कुण्डलो भर केसर घोली जी, आम्बा लाम्बा केस",
      "पछा स्याजी ॥ म्हारी ॥",
      "गोरी एक अरज म्हारी सुणजो सासूजी रो आदर लीजो जी",
      "पिया सासूजी नहीं सुहावे म्हारी खाल चकठया मारे ॥ म्हारी ॥",
      "गोरी एक अरज म्हारी सुणजो, भाभीजी रो आदर लीजो",
      "पिया भाभी जी नहीं सुहावे म्हासूं रातू पीसणो पिसावै ।। म्हारी ।।",
      "गोरी एक अरज म्हारी सुण जो, दोराणी रो आदर लीजो",
      "पिया दोराणी नही सुहावै, म्हारी आधी रसोई बटावै ।। म्हारी ।।",
      "गोरी एक अरज म्हारी सुण जो, बाइसा रो आदर लीजो",
      "पिया बाइसा नई सुहावै, म्हारी एकरी आइ लगावै ।। म्हारी ।।"
    ],
    "keywords": [
      "mhari malook jadi jaccha",
      "jaccha geet",
      "samvad",
      "childbirth",
      "family",
      "rajasthani jaccha geet"
    ],
    "youtubeQuery": "Mhari Malook Jadi Jaccha Rajasthani Geet"
  }
];
