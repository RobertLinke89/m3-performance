import { contact, problemSlides } from './content'

export { contact, problemSlides }
export { posts } from './posts-en'

export const wa = {
  talk: contact.wa('Hi Michél, I am interested in a free intro call.'),
  start: contact.wa('Hi Michél, I would like to do the M³ System Start.'),
  bodyReset: contact.wa('Hi Michél, I am interested in the M¹ Body Reset.'),
  nutrition: contact.wa('Hi Michél, I am interested in M¹ nutrition coaching.'),
  painfree: contact.wa('Hi Michél, I am interested in M² Pain-free.'),
  training: contact.wa('Hi Michél, I am interested in M² Performance Training.'),
  duo: contact.wa('Hi Michél, we are interested in M² Coaching for Two.'),
  gut: contact.wa('Hi Michél, I am interested in M¹ gut support.'),
  supply: contact.wa('Hi Michél, I am interested in the Golden Baseline.'),
  mental: contact.wa('Hi Michél, I am interested in Mental Performance Coaching.'),
}

export const pillars = [
  {
    id: 'm1',
    slug: 'metabolism',
    mark: 'M¹',
    name: 'Metabolism',
    label: 'Foundation',
    title: 'Health from the inside',
    quote: 'If your foundation is on fire, harder training will not help.',
    lead: 'Microbiome, gut health, cellular micronutrients and regulated blood sugar as the base for lasting energy.',
    body: 'M¹ is the first pillar because performance is a metabolic problem before it is a training problem. Gut, blood sugar and cellular supply decide whether the body delivers energy — or compensates. We put that into a measurable, time-boxed order. No detox theatre. No ban list.',
    color: '#e8a14a',
    image: '/images/mod-body-reset.jpg',
    science: [
      {
        title: 'Microbiome and the gut–brain axis',
        text: 'The gut does more than digest. Through immune signals, metabolites and the vagus nerve it shapes inflammation, mood and available energy. An irritated microbiome often explains fatigue, cravings and fog that harder training will not fix.',
        image: '/images/blog-mikrobiom.jpg',
      },
      {
        title: 'Blood sugar runs the day',
        text: 'Sharp glucose swings create afternoon crashes, cravings and restless sleep. A more stable meal logic — protein, fibre, timing — reduces variability. That is physiology, not diet morality.',
        image: '/images/blog-blutzucker.jpg',
      },
      {
        title: 'Cellular cofactors',
        text: 'ATP production needs iron, B-vitamins, magnesium, vitamin D and antioxidants in sufficient, bioavailable form. Gaps in the baseline cap strength, recovery and metabolic rate — regardless of the training plan.',
        image: '/images/mod-supply.jpg',
      },
      {
        title: 'Low-grade inflammation',
        text: 'A leaky or overloaded gut keeps the body in a quiet alarm state. Joints, skin, sleep and recovery pay for it. Load only carries again once that noise drops.',
        image: '/images/mod-gut.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-nutrition.jpg',
      title: 'The biochemistry turn was not a theory.',
      text: 'After the C6/C7 cervical disc incident (2016–2021), discipline was no longer enough. Numbness, misdiagnoses, a body that would not follow the will. Michél did not find the way back through more sets, but through gut, microbiome and supply — later condensed in the 90-day work and the microbiome reset of 2022/23. M¹ is the answer to what he understood too late: if the foundation is on fire, more load makes the fire larger.',
      quote: 'I learned on my own body that performance without metabolic order is only wear.',
    },
    principles: [
      {
        title: 'Status before intervention',
        text: 'Digestion, energy curve, sleep and prior attempts go on the table. No one-size plan, no 20 parallel biohacks.',
      },
      {
        title: 'Time-boxed, then daily life',
        text: 'Reset phases end. What stays is a baseline and a meal logic that carries work and family.',
      },
      {
        title: 'Food before tubs',
        text: 'Micronutrients only when they are a clear lever. The base remains food, rhythm and sleep.',
      },
    ],
    signals: [
      'Tired despite sleep, cravings, bloat or the feeling of a blocked metabolism',
      'Training does not move the needle — or leaves you emptier',
      'Diets were kept and then lost again',
    ],
  },
  {
    id: 'm2',
    slug: 'movement',
    mark: 'M²',
    name: 'Movement',
    label: 'Biomechanics',
    title: 'Technique before load',
    quote: 'Technique beats weight — always.',
    lead: 'Functional biomechanics, 1:1 personal training, joint stability and pain-free capacity in daily life.',
    body: 'M² follows the foundation because load without a clean path only deepens compensation. We train movements, not isolated muscles: motor control, joint centration, clean force transfer. Intensity comes once technique carries. Not before.',
    color: '#3dba8a',
    image: '/images/michel-trainer.jpg',
    science: [
      {
        title: 'Motor control before load',
        text: 'The central nervous system governs timing, stability and force closure. Without clean recruitment, more weight only makes evasion louder — often exactly where it later hurts.',
        image: '/images/blog-technik.jpg',
      },
      {
        title: 'The kinetic chain',
        text: 'Pain rarely sits at the site of the cause. A stiff hip, a weak rotator cuff or missing foot contact forces the knee, lumbar spine or neck to compensate. We look for the link that breaks the chain.',
        image: '/images/blog-kette.jpg',
      },
      {
        title: 'Pain and capacity',
        text: 'Pain is a protective signal, not a pure tissue measure. Irritated structures still need dosed, clean load — not endless rest and not ego sets. Capacity grows when the path can carry again.',
        image: '/images/blog-belastbarkeit.jpg',
      },
      {
        title: 'Progression follows quality',
        text: 'Hypertrophy, max strength and explosiveness need repeatability. Load or tempo rise only when the movement holds under fatigue. That is training science, not style.',
        image: '/images/mod-training-v2.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-mobility.jpg',
      title: '30 years of movement — and a vertebra that stopped everything.',
      text: 'Breakdance, stage, Battle of the Year, IDO world champion 2006/2007: Michél knows high motor density, explosiveness and repetition under pressure. The C6/C7 incident showed how fast the system tips when technique and tissue no longer carry. The way back was not stillness, but precise paths, mobility and a dosed stimulus. That is why “technique before load” is not a textbook line for him. It is the difference between continuing and dropping out.',
      quote: 'I know how a body feels that no longer obeys — and what makes it load-ready again.',
    },
    principles: [
      {
        title: 'Screen before plan',
        text: 'Movement quality, weak links, real capacity. The mirror is not a measure.',
      },
      {
        title: 'Cause before symptom',
        text: 'We correct the path that produces the pain — not only the spot that burns.',
      },
      {
        title: 'Load only after a clean repetition',
        text: 'Live 1:1 correction. Intensity follows when technique holds under load.',
      },
    ],
    signals: [
      'Back, neck or joints brake daily life or training',
      'Uncertainty in execution, a plateau despite effort',
      'After injury or a long pause, become load-ready again — without guessing',
    ],
  },
  {
    id: 'm3',
    slug: 'mental-performance',
    mark: 'M³',
    name: 'Mindset',
    label: 'Routines',
    title: 'Discipline becomes routine',
    quote: 'Routine beats fleeting motivation.',
    lead: 'Stress resilience, sleep quality, minimal daily habits and lasting independence.',
    body: 'M³ is not extra motivation and not a separate product. It is the hold of the system: sleep, stress regulation and a few habits that stay when the calendar is full. Without this layer, M¹ and M² fall apart after three good weeks. The goal is autonomy — not dependence on Michél.',
    color: '#6b8cff',
    image: '/images/michel-portrait.jpg',
    science: [
      {
        title: 'Willpower is finite',
        text: 'Self-control spends glucose, attention and sleep. Anyone who decides anew every day loses to the calendar. Stable cue–routine pairs and if–then plans unload the prefrontal cortex. Discipline becomes the environment, not a daily fight.',
        image: '/images/blog-willenskraft.jpg',
      },
      {
        title: 'Sleep architecture',
        text: 'Deep sleep drives tissue repair and insulin sensitivity. REM drives emotional regulation. Fragmented sleep raises pain sensitivity, cravings and error rate in training. Sleep is not a soft skill. It is metabolic and recovery work.',
        image: '/images/blog-schlaf.jpg',
      },
      {
        title: 'The stress axis',
        text: 'Chronic HPA activation keeps cortisol restless, lowers recovery and shifts hunger and inflammation. Breathing, an evening ritual, load peaks and real pauses are physiological levers — not wellness.',
        image: '/images/blog-plaene.jpg',
      },
      {
        title: 'Autonomy lasts longer than supervision',
        text: 'People stay in systems they can steer themselves. So we build minimal, visible routines and clear decision criteria. The coach becomes unnecessary. That is the point.',
        image: '/images/aud-exec.jpg',
      },
    ],
    experience: {
      image: '/images/michel-office.jpg',
      title: 'Discipline was enough in sport. In life it was not.',
      text: 'Single father. 13 editions of Air4Day. School and youth projects. A cervical disc that made the old hardness impossible. Michél knows the point where intentions lose to the day — not from weakness, but because the system has too many open decisions. M³ comes from that break: less heroism, more structure. Understanding where someone holds. A clear push where someone is spinning. No dogma. With the goal that you eventually continue without him.',
      quote: 'Sometimes you need understanding. Sometimes a kick. Often both.',
    },
    principles: [
      {
        title: 'Few levers that sit in the calendar',
        text: 'Three load-bearing routines beat a plan that breaks after two weeks.',
      },
      {
        title: 'Measure sleep and stress first',
        text: 'Before we stack new habits, we clarify what actually runs the evening and the morning.',
      },
      {
        title: 'Independence as the exit',
        text: 'You learn when to adjust yourself. M³ is the frame — not a subscription to motivation.',
      },
    ],
    signals: [
      'Tried too much at once, constantly dropped it, no clear thread',
      'Stress eats intentions, sleep is the first thing that tips',
      'M¹ or M² land — and fall apart again in daily life',
    ],
  },
] as const

export const modules = [
  {
    slug: 'body-reset',
    pillar: 'm1',
    badge: 'Flagship',
    title: 'M¹ Body Reset',
    kicker: 'A full restart from the inside',
    text: 'The modular concept for gut and metabolism: 16-day gut reset, targeted metabolic reset and a daily Golden Baseline.',
    tags: ['16-day gut reset', 'Metabolic reset', 'Baseline'],
    image: '/images/mod-body-reset.jpg',
    wa: wa.bodyReset,
    forWhom: ['Tired despite sleep', 'Bloat & cravings', 'Metabolism feels blocked'],
    includes: ['16-day gut reset', 'Targeted metabolic reset', 'Golden Baseline'],
    steps: [
      { title: 'Baseline', text: 'We clarify digestion, energy and daily load — no guessing.' },
      { title: 'Reset', text: 'Gut and metabolism enter a clear, time-boxed structure.' },
      { title: 'Daily life', text: 'The baseline stays. The rest becomes a routine you keep yourself.' },
    ],
    outcome: 'More energy from the inside, less fire in the foundation — as a base for training and daily life.',
  },
  {
    slug: 'ernaehrungscoaching',
    pillar: 'm1',
    badge: '1:1 Coaching',
    title: 'M¹ Nutrition Coaching',
    kicker: 'Your food. Your day.',
    text: 'No rigid diet corsets or bans — an everyday 1:1 macro structure without the yo-yo.',
    tags: ['Individual macro structure', 'Built for work & family'],
    image: '/images/mod-nutrition.jpg',
    wa: wa.nutrition,
    forWhom: ['Work & family at full pace', 'Diet-tired without a ban list', 'No time for a cooking studio'],
    includes: ['1:1 macro structure', 'Meal logic that fits the day', 'Adapted to work and family'],
    steps: [
      { title: 'As-is', text: 'What you actually eat, when blood sugar drops, where the day interrupts.' },
      { title: 'Structure', text: 'A macro logic that fits your calendar — not the other way around.' },
      { title: 'Fine-tune', text: 'We adjust until it holds. No yo-yo, no corset.' },
    ],
    outcome: 'Food that gives energy and fits the day — without bans and without the yo-yo.',
  },
  {
    slug: 'schmerzfrei',
    pillar: 'm2',
    badge: 'Rehab',
    title: 'M² Pain-free',
    kicker: 'Mobility & root-cause work',
    text: 'Targeted mobility and root-cause work for back, neck and joint pain.',
    tags: ['Back', 'Neck', 'Joints'],
    image: '/images/mod-painfree.jpg',
    wa: wa.painfree,
    forWhom: ['Back, neck, joints', 'Pain brakes training', 'Uncertainty in execution'],
    includes: ['Root-cause analysis', '1:1 mobility work', 'Build pain-free capacity'],
    steps: [
      { title: 'Cause', text: 'Where the system compensates — not only where it hurts.' },
      { title: 'Movement', text: 'Technique and mobility until the path is clean again.' },
      { title: 'Load', text: 'Intensity only then. Technique beats weight — always.' },
    ],
    outcome: 'Load-ready in daily life again, without every set being a risk.',
  },
  {
    slug: 'performance-training',
    pillar: 'm2',
    badge: '1:1 Training',
    title: 'M² Performance Training',
    kicker: 'Strength, explosiveness, control',
    text: 'Intelligent 1:1 personal training for real strength, explosiveness and body control.',
    tags: ['Max strength', 'Athletics', 'Technique'],
    image: '/images/mod-training-v2.jpg',
    wa: wa.training,
    forWhom: ['Strength and explosiveness', 'A plateau in training', 'Technique before ego'],
    includes: ['1:1 personal training', 'Live technique correction', 'Progression for strength and control'],
    steps: [
      { title: 'Screen', text: 'Movement quality, weak links, real capacity — not the mirror.' },
      { title: 'Technique', text: 'Precise correction until the movement sits.' },
      { title: 'Output', text: 'Load and tempo follow quality, not the calendar.' },
    ],
    outcome: 'More strength and control — on a foundation that can keep up.',
  },
  {
    slug: 'coaching-fuer-zwei',
    pillar: 'm2',
    badge: 'For two',
    title: 'M² Coaching for Two',
    kicker: 'Partners or friends',
    text: 'Personal training for partners or friends — individual plans with double the motivation.',
    tags: ['Couples', 'Friends', 'Team spirit'],
    image: '/images/mod-duo-v2.jpg',
    wa: wa.duo,
    forWhom: ['Couples', 'Friends', 'Start together, stay individual'],
    includes: ['Two individual plans', 'Shared sessions', 'Correction for both bodies'],
    steps: [
      { title: 'Two baselines', text: 'Each body gets its analysis — no one-size plan for both.' },
      { title: 'Train together', text: 'One room, two stimuli, double the motivation.' },
      { title: 'Own path', text: 'Progression stays individual, the rhythm stays shared.' },
    ],
    outcome: 'Stay in it together, without one of you running the other person’s plan.',
  },
  {
    slug: 'darm-stoffwechselbegleitung',
    pillar: 'm1',
    badge: 'Depth',
    title: 'M¹ Gut Support',
    kicker: 'A strong microbiome',
    text: 'Intensive 1:1 support for gut issues, intolerances and a sluggish metabolism.',
    tags: ['Microbiome', 'Intolerances', '1:1'],
    image: '/images/mod-gut.jpg',
    wa: wa.gut,
    forWhom: ['Intolerances', 'Gut issues', 'Metabolic sluggishness after diets'],
    includes: ['1:1 support', 'Microbiome focus', 'Everyday adjustments'],
    steps: [
      { title: 'Patterns', text: 'What irritates the gut, when energy drops, what has already been tried.' },
      { title: 'Order', text: 'Targeted steps instead of 20 parallel biohacks.' },
      { title: 'Stability', text: 'Until the gut stays quiet and you know what holds for you.' },
    ],
    outcome: 'A more load-ready foundation — digestion that no longer runs the day.',
  },
  {
    slug: 'goldene-grundversorgung',
    pillar: 'm1',
    badge: 'Base',
    title: 'M¹ Golden Baseline',
    kicker: 'Daily cellular energy',
    text: 'Highly bioavailable baseline with essential vitamins, trace elements and antioxidants.',
    tags: ['Micronutrients', 'Cellular health'],
    image: '/images/mod-supply.jpg',
    wa: wa.supply,
    forWhom: ['Little time, high load', 'Gaps in the baseline', 'Cellular energy in daily life'],
    includes: ['Essential vitamins', 'Trace elements', 'Antioxidants — highly bioavailable'],
    steps: [
      { title: 'Need', text: 'Whether and what is useful, we clarify honestly. No mandatory stack.' },
      { title: 'Base', text: 'A few clean levers instead of a cupboard full of tubs.' },
      { title: 'Keep', text: 'A morning routine that stays — food remains the foundation.' },
    ],
    outcome: 'A quiet daily base. No substitute for food, movement and sleep.',
  },
] as const

export const audience = [
  { title: 'Leaders & 60-hour weeks', text: 'Full vitality without the afternoon crash.', image: '/images/aud-exec-face.jpg' },
  { title: 'Desk pain', text: 'Pain-free again, anatomically stable.', image: '/images/aud-desk-face.jpg' },
  { title: 'Diet-tired', text: 'A metabolic reset without yo-yo and without bans.', image: '/images/aud-diet-face.jpg' },
  { title: 'Athletes & ambitious', text: 'Break plateaus and raise capacity.', image: '/images/aud-athlete-face.jpg' },
]

export const process = [
  { n: '01', title: 'Meet', text: 'An informal conversation about your situation, goals and expectations.' },
  { n: '02', title: 'Analysis', text: 'A full baseline of metabolism, movement and daily life.' },
  { n: '03', title: 'Strategy', text: 'Your tailored plan with clear priorities.' },
  { n: '04', title: 'Support', text: 'Step-by-step implementation with close correction.' },
  { n: '05', title: 'Routine', text: 'Habits become stable until you are fully independent.' },
]

export const faqs = [
  {
    q: 'Do I already need to be fit to start with M³?',
    a: 'No. M³ meets you exactly where you are today — after a long pause, with extra weight, with pain, or as an athlete with performance goals.',
  },
  {
    q: 'How does the free intro call work?',
    a: 'In about 20 minutes by phone or video we talk about your current hurdles, your day and your goals. We check honestly whether M³ is the right lever. Then you get a first read — no commitment.',
  },
  {
    q: 'Can the work happen fully online?',
    a: 'Yes. Metabolic analysis, nutrition support and mental routines work remotely. For personal training we combine in-person sessions with digital support depending on where you live.',
  },
  {
    q: 'What makes M³ different from classic personal training?',
    a: 'Classic trainers make you sweat and send you home after 60 minutes. M³ looks at the whole system: if your gut rebels or stress kills your sleep, training evaporates. We solve causes, not symptoms.',
  },
  {
    q: 'Do I have to take supplements?',
    a: 'No. The base is always real food, movement and recovery. If a targeted micronutrient step makes sense, we discuss it transparently and on scientific ground.',
  },
  {
    q: 'Where do I start if I do not know where the problem is?',
    a: 'With System Start. We first clarify whether metabolism, movement or routines are the bottleneck — then we build the plan. You do not need to know which module you need first.',
  },
  {
    q: 'How much time do I need per week?',
    a: 'As much as your day can give — and no more. We build minimal routines that fit work and family. Three clean levers beat a plan you drop after two weeks.',
  },
  {
    q: 'Do you work with rigid diets or bans?',
    a: 'No. No 14-day crash diets, no corsets. Nutrition is about everyday structure, blood sugar and metabolism — without the yo-yo.',
  },
  {
    q: 'What if I am in pain and cannot train properly?',
    a: 'Then that is the starting point, not the obstacle. Through M² we clarify causes in back, neck and joints before load and intensity go up. Technique beats weight — always.',
  },
  {
    q: 'Can I start as a couple or with a friend?',
    a: 'Yes. M² Coaching for Two is built for that: individual plans, shared sessions, double the motivation — without one of you running the other’s schema.',
  },
  {
    q: 'How long until something changes?',
    a: 'Many feel energy and clarity in the first weeks once gut, sleep or technique click. Lasting routines take longer — that is why we stay until you steer yourself.',
  },
  {
    q: 'Who is M³ not for?',
    a: 'Anyone looking for a miracle pill, a 6-week kick or pure sweat work without cause work. M³ is 1:1 support with autonomy as the goal — not a subscription that keeps you dependent.',
  },
  {
    q: 'What happens after the intro call?',
    a: 'If it fits, analysis, priority and a clear next step follow: System Start or the matching module. You decide. No pressure, no off-the-shelf contract.',
  },
]

export const compass = [
  {
    id: 'm1',
    title: 'Energy & metabolism',
    text: 'Often tired, digestion issues, bloat, cravings or the feeling that metabolism is blocked.',
    image: '/images/mod-body-reset.jpg',
  },
  {
    id: 'm2',
    title: 'Body & pain',
    text: 'Back or joint issues, lack of strength, tension or uncertainty about correct training execution.',
    image: '/images/mod-painfree.jpg',
  },
  {
    id: 'm3',
    title: 'Chaos & missing routines',
    text: 'Tried too much at once, constantly dropped it, no clear thread, and daily stress eats the intention.',
    image: '/images/aud-exec.jpg',
  },
] as const

export const startProof = [
  {
    title: 'A catalog asks for a choice. An entrance asks for the bottleneck.',
    text: 'Body Reset, Pain-free, Performance — those are modules. Starting there means you already made the diagnosis. System Start does the opposite: it first checks whether metabolism, the movement path or routines are the limiting factor. That is why it is not one offer among others. It is the place where the framework places you.',
    image: '/images/blog-plaene.jpg',
  },
  {
    title: 'The pillars condition each other. Starting in parallel is guessing.',
    text: 'M¹, M² and M³ are not menu items. Load on a burning foundation creates wear. Clean technique falls apart when sleep and stress eat the repetition. Anyone who pulls three levers at once cannot say which one carries. The fixed order exists because physiology has an order — not because it sells better.',
    image: '/images/blog-fundament.jpg',
  },
  {
    title: 'You do not need to know the pillar. That is the work.',
    text: 'Tired despite training. Pain despite rest. Plans that tip in week three. The same symptoms can sit in three different pillars. System Start takes the pre-decision away: status, priority, one next step. Only then a module — or none, if it does not fit.',
    image: '/images/blog-willenskraft.jpg',
  },
  {
    title: 'Status before intervention. That is how Michél works.',
    text: 'After C6/C7, more discipline did not bring the body back. The way back started with the question of what carries first. System Start asks exactly that: not “which package do you want”, but “where does the system not hold”. Only then come reset, technique or routine.',
    image: '/images/michel-trainer.jpg',
  },
] as const

export const about = {
  headline: 'From a world title to a holistic health system.',
  intro:
    'Why even the hardest discipline fails when the foundation is off — and how 30+ years of movement became the M³ system.',
  quote: 'Sometimes you need understanding. Sometimes a kick. Often both.',
  bio: '25 years in performance sport, stage work and supporting people in demanding work and family life.',
  stations: [
    {
      years: '1995 – 1998',
      title: 'Early ruptures, breakdance & first responsibility',
      text: 'Growing up above the family restaurant, heavy losses, supporting a grandmother with Alzheimer’s — and entering youth musicals with Clueso.',
    },
    {
      years: '1998 – 2001',
      title: 'Military police staff & dance teacher',
      text: '1.5 years with the Feldjäger in Mainz, a 3 km run record of 9:56, and building 120 dance students at Traut & Heigl.',
    },
    {
      years: '2001 – 2005',
      title: 'Tanzfabrik Erfurt & Battle of the Year',
      text: 'Building many young dancers in Thuringia, crew focus with DJ Nas-D, 7th place at Battle of the Year Germany.',
    },
    {
      years: '2005 – 2007',
      title: 'German, European and IDO world champion',
      text: 'Title triple with the Da Rookies, a solo role in Anatevka at Theater Erfurt, and 5 years of UNICEF galas.',
    },
    {
      years: '2008 – 2015',
      title: 'Air4Day & single father',
      text: '13 editions of Air4Day, school, migration and youth projects — and championship as a single father.',
    },
    {
      years: '2016 – 2021',
      title: 'Cervical disc incident & the biochemistry turn',
      text: 'A severe C6/C7 disc incident, numbness, misdiagnoses — and the way back to being pain-free.',
    },
    {
      years: '2022 – 2023',
      title: '90-day challenge & coaching foundation',
      text: '90-day transformation (top 30 of 3,000), microbiome reset, start of the master personal trainer education.',
    },
    {
      years: '2024 – Today',
      title: 'M³ Performance & the autonomy principle',
      text: '1:1 and online support for busy people — for energy, fat loss and real independence.',
    },
  ],
  values: [
    {
      title: '100% autonomy',
      text: 'We stay close — with the clear goal of your independence. You learn to steer body, metabolism and daily life yourself.',
    },
    {
      title: 'System over chance',
      text: 'No experiments. We analyze the starting point and build a logical, measurable plan with clear priorities.',
    },
    {
      title: 'Honesty before sales',
      text: 'Clear words without gloss. Life situation, work and load are part of it — with honest leadership.',
    },
    {
      title: 'Practice before trend',
      text: 'From 30+ years of movement and 15 years of professional dance: only measures with a physiological claim.',
    },
  ],
}

export const nav = [
  { to: '/#system', label: 'System' },
  { to: '/#module', label: 'Modules' },
  { to: '/ueber-mich', label: 'Michél' },
  { to: '/system-start', label: 'System Start' },
]

export const michelSlides = [
  { src: '/images/michel-trainer.jpg', label: 'Trainer' },
  { src: '/images/michel-politik.jpg', label: 'Politics' },
  { src: '/images/michel-goofy.jpg', label: 'Goofy' },
] as const
