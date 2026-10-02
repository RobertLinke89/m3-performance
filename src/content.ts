export { posts } from './posts'

export const contact = {
  phone: '4917699016640',
  instagram: 'https://www.instagram.com/michelmeiermoves/',
  cal: 'https://cal.com/michelmeier/30min',
  wa: (text: string) =>
    `https://wa.me/4917699016640?text=${encodeURIComponent(text)}`,
  catalog: 'https://wa.me/c/4917699016640',
}

export const wa = {
  talk: contact.wa('Hallo Michél, ich interessiere mich für ein kostenloses Erstgespräch.'),
  start: contact.wa('Hallo Michél, ich möchte den M³ System Start machen.'),
  bodyReset: contact.wa('Hallo Michél, ich interessiere mich für den M¹ Body Reset.'),
  nutrition: contact.wa('Hallo Michél, ich interessiere mich für das M¹ Ernährungscoaching.'),
  painfree: contact.wa('Hallo Michél, ich interessiere mich für M² Schmerzfrei.'),
  training: contact.wa('Hallo Michél, ich interessiere mich für das M² Performance Training.'),
  duo: contact.wa('Hallo Michél, wir interessieren uns für das M² Coaching für Zwei.'),
  gut: contact.wa('Hallo Michél, ich interessiere mich für die M¹ Darmbegleitung.'),
  supply: contact.wa('Hallo Michél, ich interessiere mich für die Goldene Grundversorgung.'),
  mental: contact.wa('Hallo Michél, ich interessiere mich für Mental Performance Coaching.'),
  m1Orient: contact.wa('Hallo Michél, ich möchte die kostenlose M¹ Orientierung.'),
  m1Mini: contact.wa('Hallo Michél, ich interessiere mich für den M¹ Mini-Reset.'),
  m1Intensive: contact.wa('Hallo Michél, ich interessiere mich für die M¹ Intensive 90 Tage.'),
  m2Check: contact.wa('Hallo Michél, ich möchte den kostenlosen M² Bewegungs-Check.'),
  m2Mobility: contact.wa('Hallo Michél, ich interessiere mich für M² Mobility Reset.'),
  m2Athlete: contact.wa('Hallo Michél, ich interessiere mich für M² Athlete Intensive.'),
  m3Check: contact.wa('Hallo Michél, ich möchte den kostenlosen M³ Entscheidungs-Check.'),
  m3Sleep: contact.wa('Hallo Michél, ich interessiere mich für den M³ Schlaf-Impuls.'),
  m3Routines: contact.wa('Hallo Michél, ich interessiere mich für M³ Routinen-Setup.'),
  m3Hold: contact.wa('Hallo Michél, ich interessiere mich für M³ System Hold.'),
}

export const pillars = [
  {
    id: 'm1',
    slug: 'metabolism',
    mark: 'M¹',
    name: 'Metabolism',
    label: 'Fundament',
    title: 'Gesundheit von innen',
    quote: 'Wenn dein Fundament brennt, nützt kein härteres Training.',
    lead: 'Darm, Energie, Blutzucker und eine vernünftige Grundversorgung — damit Leistung wieder möglich wird.',
    body: 'M¹ ist die erste Säule, weil Leistung oft zuerst ein Stoffwechselthema ist — und erst danach ein Trainingsthema. Darm, Blutzucker und Versorgung entscheiden, ob der Körper Energie hat oder nur noch kompensiert. Wir bringen das in eine klare, zeitlich begrenzte Ordnung. Kein Detox-Theater. Keine Verbotsliste.',
    color: '#e8a14a',
    image: '/images/mod-body-reset.jpg',
    science: [
      {
        title: 'Darm und Energie',
        text: 'Der Darm steuert mehr als die Verdauung. Über Immunsignale und den Nervenweg zum Gehirn beeinflusst er Entzündung, Stimmung und verfügbare Energie. Ein gereizter Darm erklärt oft Müdigkeit, Heißhunger und „Nebel im Kopf“ — Probleme, die kein härteres Training löst.',
        image: '/images/blog-mikrobiom.jpg',
      },
      {
        title: 'Blutzucker bestimmt den Tag',
        text: 'Starke Schwankungen des Blutzuckers erzeugen Nachmittagstiefs, Heißhungerattacken und unruhigen Schlaf. Stabilere Mahlzeiten — genug Protein, Ballaststoffe, sinnvolles Timing — beruhigen das. Das ist Physiologie, keine Diätmoral.',
        image: '/images/blog-blutzucker.jpg',
      },
      {
        title: 'Was die Zellen brauchen',
        text: 'Muskeln und Organe brauchen Energie in Form von ATP — dem „Treibstoff“ der Zelle. Dafür braucht der Körper unter anderem Eisen, B-Vitamine, Magnesium und Vitamin D in ausreichender, gut aufnehmbarer Form. Fehlen sie, bleiben Kraft und Erholung begrenzt — egal wie gut der Trainingsplan ist.',
        image: '/images/mod-supply.jpg',
      },
      {
        title: 'Stille Entzündung',
        text: 'Ein überlasteter Darm hält den Körper oft in einem leisen Alarmzustand. Gelenke, Haut, Schlaf und Regeneration zahlen mit. Erst wenn dieses Rauschen sinkt, trägt Belastung wieder.',
        image: '/images/mod-gut.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-nutrition.jpg',
      title: 'Die Wende kam nicht durch mehr Training.',
      text: 'Nach einem Bandscheibenvorfall im Halswirbelbereich (C6/C7, 2016–2021) reichte Disziplin nicht mehr. Taubheit, Fehldiagnosen, ein Körper, der trotz Willen nicht mitzog. Michél hat den Weg zurück nicht über mehr Sätze gefunden, sondern über Darm, Ernährung und Versorgung — später verdichtet in der 90-Tage-Arbeit und der Mikrobiom-Sanierung 2022/23. M¹ ist die Antwort auf das, was er selbst zu spät verstanden hat: Wenn das Fundament brennt, macht mehr Last den Brand größer.',
      quote: 'Ich habe am eigenen Körper gelernt, dass Leistung ohne Stoffwechselordnung nur Verschleiß ist.',
    },
    principles: [
      {
        title: 'Erst Status, dann Eingriff',
        text: 'Verdauung, Energieverlauf, Schlaf und bisherige Versuche kommen auf den Tisch. Kein Schema F, keine 20 parallelen Biohacks.',
      },
      {
        title: 'Zeitlich begrenzt, dann Alltag',
        text: 'Reset-Phasen haben ein Ende. Was bleibt, ist eine Grundversorgung und eine Mahlzeitenlogik, die Beruf und Familie trägt.',
      },
      {
        title: 'Nahrung vor Dose',
        text: 'Mikronährstoffe nur, wenn sie einen klaren Hebel haben. Die Basis bleibt Essen, Rhythmus und Schlaf.',
      },
    ],
    signals: [
      'Müde trotz Schlaf, Heißhunger, Blähbauch oder das Gefühl eines blockierten Stoffwechsels',
      'Training bringt keinen Fortschritt — oder macht dich leerer',
      'Diäten wurden durchgehalten und danach wieder verloren',
    ],
  },
  {
    id: 'm2',
    slug: 'movement',
    mark: 'M²',
    name: 'Movement',
    label: 'Biomechanik',
    title: 'Technik vor Gewicht',
    quote: 'Technik schlägt Gewicht – Immer.',
    lead: 'Saubere Technik, stabile Gelenke und Training, das im Alltag trägt — ohne Verschleiß.',
    body: 'M² folgt auf das Fundament, weil Last ohne saubere Bewegung nur Ausweichmuster verstärkt. Wir trainieren Bewegungen, nicht isolierte Muskeln: Kontrolle, stabile Gelenke, klare Kraftübertragung. Intensität kommt, sobald die Technik trägt. Nicht vorher.',
    color: '#3dba8a',
    image: '/images/michel-trainer.jpg',
    science: [
      {
        title: 'Kontrolle vor Last',
        text: 'Dein Nervensystem steuert Timing, Stabilität und Kraftschluss. Ohne saubere Ansteuerung erzeugt mehr Gewicht nur lautere Ausweichmuster — oft genau dort, wo es später schmerzt.',
        image: '/images/blog-technik.jpg',
      },
      {
        title: 'Die Bewegungskette',
        text: 'Schmerz sitzt selten am Ort der Ursache. Eine steife Hüfte oder ein fehlender Fußkontakt zwingt Knie, unteren Rücken oder Nacken zur Kompensation. Wir suchen die Stelle, die die Kette unterbricht.',
        image: '/images/blog-kette.jpg',
      },
      {
        title: 'Schmerz und Belastbarkeit',
        text: 'Schmerz ist ein Schutzsignal, kein reines Gewebemaß. Gereizte Strukturen brauchen dosierte, saubere Belastung — nicht Schonung ohne Ende und nicht Ego-Sätze. Kapazität wächst, wenn die Bewegung wieder tragfähig ist.',
        image: '/images/blog-belastbarkeit.jpg',
      },
      {
        title: 'Qualität vor Kalender',
        text: 'Kraft und Explosivität brauchen Wiederholbarkeit. Erst wenn die Bewegung unter Ermüdung hält, steigt Last oder Tempo. Das ist Trainingslehre, kein Stil.',
        image: '/images/mod-training-v2.jpg',
      },
    ],
    experience: {
      image: '/images/michel-trainer.jpg',
      title: '30+ Jahre Bewegung — und ein Wirbel, der alles gestoppt hat.',
      text: 'Breakdance, Bühne, Battle of the Year, IDO-Weltmeister 2006/2007: Michél kennt hohe Belastung, Explosivität und Wiederholung unter Druck. Der Bandscheibenvorfall im Halswirbelbereich (C6/C7) hat gezeigt, wie schnell das System kippt, wenn Technik und Gewebe nicht mehr tragen. Zurück in die Belastbarkeit führte nicht Stillstand, sondern präzise Bahnen, Mobilität und dosierter Reiz. Deshalb ist „Technik vor Gewicht“ bei ihm keine Formel aus einem Lehrbuch. Es ist der Unterschied zwischen weitermachen und ausfallen.',
      quote: 'Ich weiß, wie sich ein Körper anfühlt, der nicht mehr gehorcht — und was ihn wieder tragfähig macht.',
    },
    principles: [
      {
        title: 'Screen vor Plan',
        text: 'Bewegungsqualität, Schwachstellen, echte Kapazität. Der Spiegel ist kein Maß.',
      },
      {
        title: 'Ursache vor Symptom',
        text: 'Wir korrigieren die Bahn, die den Schmerz erzeugt — nicht nur die Stelle, die brennt.',
      },
      {
        title: 'Last erst nach sauberer Wiederholung',
        text: '1:1-Korrektur live. Intensität folgt, wenn die Technik unter Last hält.',
      },
    ],
    signals: [
      'Rücken, Nacken oder Gelenke bremsen Alltag oder Training',
      'Unsicherheit bei der Ausführung, Plateau trotz Aufwand',
      'Nach Verletzung oder langer Pause wieder belastbar werden — ohne Rateversuch',
    ],
  },
  {
    id: 'm3',
    slug: 'mental-performance',
    mark: 'M³',
    name: 'Mental Performance',
    label: 'Entscheidungsökonomie',
    title: 'Leistung scheitert zuerst im Kopf.',
    quote: 'Wer jeden Tag neu entscheidet, verliert gegen den Kalender.',
    lead: 'Schlaf, Stress und wenige feststehende Entscheidungen — damit M¹ und M² im Alltag halten.',
    body: 'Mental Performance ist kein Mood und kein Motivationsabo. Es ist Entscheidungsökonomie: weniger offene Fragen, klarere Wenn-dann-Regeln, Schlaf und Stress als harte Leistungsfaktoren. Ohne diese Schicht zerfallen M¹ und M² nach drei guten Wochen. Ziel ist Selbstverantwortung — nicht Abhängigkeit von Michél.',
    color: '#6b8cff',
    image: '/images/mental-hero.png',
    prompts: [
      {
        q: 'Was fällt zuerst weg, wenn der Tag eng wird?',
        hint: 'Schlaf · Training · Ernährung — oder alles gleichzeitig?',
      },
      {
        q: 'Wie oft entscheidest du morgens neu, was du abends tust?',
        hint: 'Jede neue Entscheidung zapft denselben Tank an.',
      },
      {
        q: 'Hält dein System auch ohne Motivation?',
        hint: 'Wenn nein: kein Mindset-Problem. Ein Entscheidungsproblem.',
      },
    ],
    science: [
      {
        title: 'Willenskraft ist endlich',
        text: 'Selbstkontrolle verbraucht Aufmerksamkeit und Schlaf. Wer jeden Tag neu entscheidet, verliert gegen den Kalender. Stabile Wenn-dann-Paare entlasten den präfrontalen Cortex. Disziplin wird zur Umgebung — nicht zum täglichen Kampf.',
        image: '/images/mental-decide.png',
      },
      {
        title: 'Schlaf steuert Fehlerquote',
        text: 'Tiefschlaf repariert Gewebe und Stoffwechsel. REM reguliert Emotionen. Fragmentierter Schlaf erhöht Schmerz, Cravings und Entscheidungsfehler. Schlaf ist keine Soft-Skill. Er ist Leistungsarbeit.',
        image: '/images/blog-schlaf.jpg',
      },
      {
        title: 'Stress frisst Klarheit',
        text: 'Chronische HPA-Aktivierung hält Cortisol unruhig, senkt Erholung und verschiebt Hunger und Entzündung. Atmung, Abendritual und echte Lastpausen sind physiologische Hebel — kein Wellness.',
        image: '/images/mental-hero.png',
      },
      {
        title: 'Autonomie schlägt Aufsicht',
        text: 'Menschen bleiben in Systemen, die sie selbst steuern. Deshalb: minimale, sichtbare Routinen und klare Entscheidungskriterien. Der Coach wird überflüssig. Das ist Absicht.',
        image: '/images/mental-focus.png',
      },
    ],
    experience: {
      image: '/images/michel-portrait.jpg',
      title: 'Disziplin hat im Sport gereicht. Im Leben nicht.',
      text: 'Alleinerziehender Vater. 13 Ausgaben Air4Day. Schul- und Jugendprojekte. Ein Halswirbel, der die alte Härte unmöglich machte. Michél kennt den Punkt, an dem Vorsätze den Alltag verlieren — nicht aus Schwäche, sondern weil zu viele Entscheidungen offen bleiben. M³ kommt aus diesem Bruch: weniger Heroismus, mehr Struktur. Verständnis, wo jemand hält. Ein klarer Impuls, wo jemand sich dreht. Ohne Dogma. Mit dem Ziel, dass du ohne ihn weiterkommst.',
      quote: 'Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.',
    },
    principles: [
      {
        title: 'Entscheidungen schließen — nicht stapeln',
        text: 'Drei feststehende Regeln schlagen zwölf offene Optionen.',
      },
      {
        title: 'Schlaf und Stress zuerst lesen',
        text: 'Bevor neue Habits kommen: Was regiert Abend und Morgen wirklich?',
      },
      {
        title: 'Selbststeuerung als Exit',
        text: 'Du lernst, wann du nachsteuerst. M³ ist Rahmen — kein Abo auf Motivation.',
      },
    ],
    signals: [
      'Zu viele offene Entscheidungen, ständig Abbruch, kein roter Faden',
      'Stress frisst Vorsätze — Schlaf kippt zuerst',
      'M¹ oder M² greifen — und zerfallen im Alltag wieder',
    ],
  },
] as const

export const modules = [
  {
    slug: 'body-reset',
    pillar: 'm1',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: 'Flaggschiff',
    title: 'M¹ Body Reset',
    kicker: 'Drei Bausteine. Ein Neustart von innen.',
    text: 'Body Reset ist kein Einheitsprogramm. Es verbindet drei klar getrennte Konzepte: die 16-Tage-Darmkur (Reiz reduzieren, Verdauung beruhigen), die Stoffwechselkur (Energie und Fettstoffwechsel neu ordnen) und die Goldene Grundversorgung (tägliche Basis für die Zellen). Jeder Baustein hat ein eigenes Ziel — und wird erst dann kombiniert, wenn es zu deinem Alltag passt.',
    tags: ['16-Tage Darmkur', 'Stoffwechselkur', 'Grundversorgung'],
    image: '/images/mod-body-reset.jpg',
    wa: wa.bodyReset,
    forWhom: [
      'Müde trotz Schlaf, Blähbauch oder Heißhunger',
      'Stoffwechsel fühlt sich blockiert an',
      'Du willst einen klaren Neustart — ohne Rätselraten',
    ],
    includes: [
      '16-Tage-Darmkur: zeitlich begrenzt, Fokus auf Beruhigung und Ordnung im Darm',
      'Stoffwechselkur: eigener Baustein für Energieverlauf und Fettstoffwechsel — nicht dieselbe Kur wie der Darm',
      'Goldene Grundversorgung: tägliche, sparsame Basis — getrennt von den Reset-Phasen',
      'Begleitung, bis du weißt, welcher Baustein bei dir greift',
    ],
    steps: [
      {
        title: 'Standort',
        text: 'Verdauung, Energie, Schlaf und bisherige Versuche — ohne Schema F.',
      },
      {
        title: 'Der passende Baustein',
        text: 'Darmkur, Stoffwechselkur oder zuerst nur Grundversorgung. Nicht alles auf einmal.',
      },
      {
        title: 'Alltag',
        text: 'Was bleibt, wird zur Routine. Resets haben ein Ende — die Basis nicht.',
      },
    ],
    outcome:
      'Mehr Energie von innen und ein Fundament, das Training und Alltag wieder trägt — ohne die drei Bausteine zu vermischen.',
  },
  {
    slug: 'ernaehrungscoaching',
    pillar: 'm1',
    tier: 'core',
    priceLabel: 'Kern',
    badge: '1:1 Coaching',
    title: 'M¹ Ernährungscoaching',
    kicker: 'Deine Ernährung. Dein Alltag.',
    text: 'Kein Diät-Korsett und keine Verbotsliste. Wir bauen gemeinsam eine alltagstaugliche Struktur: wann und wie du isst, damit der Blutzucker ruhiger bleibt, der Heißhunger nachlässt und Beruf sowie Familie mitlaufen können. Ziel ist eine Logik, die du ohne Michél weiterführst — nicht ein Plan, der nach drei Wochen kippt.',
    tags: ['Individuelle Struktur', 'Beruf & Familie'],
    image: '/images/mod-nutrition.jpg',
    wa: wa.nutrition,
    forWhom: [
      'Beruf und Familie im Dauerlauf',
      'Diätmüde — ohne neue Verbote',
      'Keine Zeit für komplizierte Kochstudio-Pläne',
    ],
    includes: [
      '1:1-Begleitung mit Blick auf deinen realen Tag',
      'Mahlzeitenlogik statt starrer Kalorientabelle',
      'Anpassung an Schicht, Reisen, Familie und Stressphasen',
      'Klare Kriterien, wann du selbst nachsteuerst',
    ],
    steps: [
      {
        title: 'Ist-Zustand',
        text: 'Was du wirklich isst, wann die Energie einbricht, wo der Alltag reinfunkt.',
      },
      {
        title: 'Struktur',
        text: 'Eine Logik, die in deinen Kalender passt — nicht umgekehrt.',
      },
      {
        title: 'Feinschliff',
        text: 'Wir justieren, bis es hält. Ohne Jojo, ohne Korsett.',
      },
    ],
    outcome: 'Essen, das Energie gibt und in den Tag passt — verständlich und ohne Verbotsliste.',
  },
  {
    slug: 'darm-stoffwechselbegleitung',
    pillar: 'm1',
    tier: 'core',
    priceLabel: 'Kern',
    badge: 'Vertiefung',
    title: 'M¹ Darmbegleitung',
    kicker: 'Wenn der Bauch den Tag regiert.',
    text: 'Intensive 1:1-Begleitung bei Magen-Darm-Themen, Unverträglichkeiten und dem Gefühl, dass der Stoffwechsel „trägt“. Hier geht es tiefer als in einer kurzen Reset-Phase: Muster erkennen, Reize reduzieren, Schritt für Schritt stabilisieren — ohne zwanzig parallele Biohacks.',
    tags: ['Mikrobiom', 'Unverträglichkeiten', '1:1'],
    image: '/images/mod-gut.jpg',
    wa: wa.gut,
    forWhom: [
      'Unverträglichkeiten und gereizter Darm',
      'Magen-Darm-Themen, die den Alltag bestimmen',
      'Stoffwechselträgheit nach Diäten oder Stressphasen',
    ],
    includes: [
      'Engmaschige 1:1-Begleitung',
      'Fokus auf Darmflora und Alltagsreize',
      'Klare Prioritäten statt Produktstapel',
      'Übergang in eine Haltung, die du selbst halten kannst',
    ],
    steps: [
      {
        title: 'Muster',
        text: 'Was den Darm reizt, wann Energie einbricht, welche Versuche schon liefen.',
      },
      {
        title: 'Ordnung',
        text: 'Wenige, gezielte Schritte — zeitlich und inhaltlich klar.',
      },
      {
        title: 'Stabilität',
        text: 'Bis der Bauch ruhiger bleibt und du weißt, was bei dir hält.',
      },
    ],
    outcome: 'Ein belastbareres Fundament — Verdauung, die den Tag nicht mehr regiert.',
  },
  {
    slug: 'goldene-grundversorgung',
    pillar: 'm1',
    tier: 'entry',
    priceLabel: 'Einstieg',
    badge: 'Basis',
    title: 'M¹ Goldene Grundversorgung',
    kicker: 'Tägliche Basis — kein Reset.',
    text: 'Die Goldene Grundversorgung ist kein Kur-Programm und keine Darmkur. Sie ist die sparsame, tägliche Basis: ausgewählte Vitamine, Spurenelemente und Antioxidantien in gut verfügbarer Form — nur wenn sie einen klaren Hebel haben. Nahrung, Rhythmus und Schlaf bleiben die Grundlage. Die Dose ersetzt das nicht.',
    tags: ['Mikronährstoffe', 'Tägliche Basis'],
    image: '/images/mod-supply.jpg',
    wa: wa.supply,
    forWhom: [
      'Wenig Zeit, hohe Alltagsbelastung',
      'Vermutete Lücken in der Basisversorgung',
      'Du willst Klarheit statt Schrank voller Produkte',
    ],
    includes: [
      'Ehrliche Bedarfsprüfung — kein Pflicht-Stack',
      'Wenige, saubere Hebel statt Produktlawine',
      'Einbau in eine Morgenroutine, die bleibt',
      'Abgrenzung zu Darmkur und Stoffwechselkur',
    ],
    steps: [
      {
        title: 'Bedarf',
        text: 'Ob und was sinnvoll ist, klären wir ehrlich.',
      },
      {
        title: 'Basis',
        text: 'Wenige Hebel, die du verstehst und halten kannst.',
      },
      {
        title: 'Halten',
        text: 'Routine statt Experiment. Nahrung bleibt die Grundlage.',
      },
    ],
    outcome: 'Eine stille tägliche Basis — getrennt von Reset-Kuren, ohne Ersatz für Essen und Schlaf.',
  },
  {
    slug: 'schmerzfrei',
    pillar: 'm2',
    tier: 'core',
    priceLabel: 'Kern',
    badge: 'Mobilität',
    title: 'M² Schmerzfrei',
    kicker: 'Ursache finden. Dann wieder belasten.',
    text: 'Rücken, Nacken oder Gelenke bremsen dich — und du weißt nicht, ob du schonen, dehnen oder einfach „durchziehen“ sollst. Bei Schmerzfrei suchen wir die Ursache in der Bewegungskette, stellen Mobilität und Technik wieder her und bauen belastbare Kraft auf. Nicht Symptom-Massage. Sondern: wieder sicher und schmerzfrei im Alltag und Training.',
    tags: ['Rücken', 'Nacken', 'Gelenke'],
    image: '/images/blog-technik.jpg',
    wa: wa.painfree,
    forWhom: [
      'Rücken-, Nacken- oder Gelenkbeschwerden',
      'Schmerz bremst Training oder Beruf',
      'Unsicherheit bei der Ausführung',
    ],
    includes: [
      'Ursachenanalyse statt reiner Symptomarbeit',
      '1:1 Mobilitäts- und Technikarbeit',
      'Schrittweise Aufbau schmerzfreier Belastbarkeit',
      'Klare Regeln, wann Last wieder sinnvoll ist',
    ],
    steps: [
      {
        title: 'Ursache',
        text: 'Wo das System ausweicht — nicht nur, wo es wehtut.',
      },
      {
        title: 'Bewegung',
        text: 'Technik und Mobilität, bis die Bahn wieder sauber ist.',
      },
      {
        title: 'Last',
        text: 'Erst dann Intensität. Technik vor Gewicht — immer.',
      },
    ],
    outcome: 'Wieder belastbar im Alltag — ohne dass jeder Satz ein Risiko ist.',
  },
  {
    slug: 'performance-training',
    pillar: 'm2',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: '1:1 Training',
    title: 'M² Performance Training',
    kicker: 'Kraft, Explosivität, Körperbeherrschung',
    text: 'Intelligentes 1:1 Personal Training für echte Kraft und Kontrolle. Wir starten mit einem ehrlichen Blick auf Bewegungsqualität und Kapazität — nicht mit dem Spiegel. Technik wird live korrigiert. Last und Tempo steigen erst, wenn die Wiederholung unter Ermüdung hält. Für dich, wenn du mehr Leistung willst, ohne den Körper zu verschleißen.',
    tags: ['Maximalkraft', 'Athletik', 'Technik'],
    image: '/images/mod-training-v2.jpg',
    wa: wa.training,
    forWhom: [
      'Mehr Kraft und Explosivität',
      'Plateau trotz Aufwand',
      'Technik vor Ego — und trotzdem Leistung',
    ],
    includes: [
      '1:1 Personal Training mit klarer Progression',
      'Live-Technikkorrektur',
      'Aufbau von Kraft, Kontrolle und Belastbarkeit',
      'Abstimmung auf Beruf, Alter und Vorgeschichte',
    ],
    steps: [
      {
        title: 'Screen',
        text: 'Bewegungsqualität, Schwachstellen, echte Kapazität.',
      },
      {
        title: 'Technik',
        text: 'Präzise Korrektur, bis die Bewegung sitzt.',
      },
      {
        title: 'Leistung',
        text: 'Last und Tempo folgen der Qualität — nicht dem Kalender.',
      },
    ],
    outcome: 'Mehr Kraft und Kontrolle — auf einem Fundament, das mitzieht.',
  },
  {
    slug: 'coaching-fuer-zwei',
    pillar: 'm2',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: 'Für Zwei',
    title: 'M² Coaching für Zwei',
    kicker: 'Partner oder Freunde — gemeinsam, aber individuell.',
    text: 'Personal Training zu zweit: ein Termin, zwei Körper, zwei Pläne. Ihr motiviert euch gegenseitig, ohne dass einer im Schema des anderen mitläuft. Ideal für Paare oder Freunde, die zusammen starten und trotzdem unterschiedliche Ausgangspunkte haben.',
    tags: ['Paare', 'Freunde', 'Teamgeist'],
    image: '/images/michel-work-nature.jpg',
    wa: wa.duo,
    forWhom: [
      'Paare oder Freunde',
      'Gemeinsam starten, individuell bleiben',
      'Doppelte Motivation ohne Einheitsplan',
    ],
    includes: [
      'Zwei individuelle Analysen und Pläne',
      'Gemeinsame Termine im gleichen Raum',
      'Korrektur für beide Körper',
      'Eigene Progression bei gemeinsamem Rhythmus',
    ],
    steps: [
      {
        title: 'Zwei Ist-Zustände',
        text: 'Jeder Körper bekommt seine Analyse — kein Schema F für beide.',
      },
      {
        title: 'Gemeinsam trainieren',
        text: 'Ein Raum, zwei Reize, doppelte Motivation.',
      },
      {
        title: 'Eigener Weg',
        text: 'Progression bleibt individuell, der Rhythmus gemeinsam.',
      },
    ],
    outcome: 'Zusammen dranbleiben — ohne dass einer im Plan des anderen mitläuft.',
  },
  {
    slug: 'm1-orientierung',
    pillar: 'm1',
    tier: 'free',
    priceLabel: 'Kostenlos',
    badge: 'Einstieg',
    title: 'M¹ Orientierung',
    kicker: '20 Minuten Klarheit — ohne Kaufdruck.',
    text: 'Der leichteste Einstieg in M¹: In einem kurzen Gespräch ordnen wir, ob Darm, Energie oder Versorgung der Engpass ist. Du bekommst eine ehrliche Einschätzung und den nächsten sinnvollen Schritt — auch wenn der Schritt „noch nicht“ heißt.',
    tags: ['Kostenlos', 'Klarheit', 'Einstieg'],
    image: '/images/mod-nutrition.jpg',
    wa: wa.m1Orient,
    forWhom: [
      'Du weißt nicht, wo du bei Stoffwechsel beginnen sollst',
      'Viele Tipps, kein klarer Faden',
      'Du willst erst Orientierung, bevor du investierst',
    ],
    includes: [
      '20 Minuten Gespräch (Telefon oder Video)',
      'Erste Einordnung: Darm, Energie oder Versorgung',
      'Klarer nächster Schritt — oder ehrliches „noch nicht“',
      'Kein Verkaufsskript',
    ],
    steps: [
      { title: 'Lage', text: 'Was brennt jetzt: Energie, Darm, Heißhunger, Schlaf?' },
      { title: 'Priorität', text: 'Ein Hebel, nicht zehn.' },
      { title: 'Schritt', text: 'Orientierung, Mini-Reset, Coaching — oder Pause.' },
    ],
    outcome: 'Du weißt, ob und wo M¹ für dich sinnvoll startet.',
  },
  {
    slug: 'm1-mini-reset',
    pillar: 'm1',
    tier: 'entry',
    priceLabel: 'Einstieg',
    badge: '7 Tage',
    title: 'M¹ Mini-Reset',
    kicker: 'Sieben Tage Ordnung — ohne Komplettprogramm.',
    text: 'Ein kompakter Einstieg für alle, die nicht sofort in Body Reset oder 1:1 gehen wollen. Sieben Tage klare Regeln für Essen, Rhythmus und Reizreduktion — mit kurzer Begleitung. Genug, um zu spüren, ob das Fundament trägt. Nicht genug, um dich zu überfordern.',
    tags: ['7 Tage', 'Alltag', 'Testlauf'],
    image: '/images/blog-blutzucker.jpg',
    wa: wa.m1Mini,
    forWhom: [
      'Du willst erst testen, bevor du tiefer gehst',
      'Wenig Zeit, hoher Bedarf an Klarheit',
      'Body Reset fühlt sich noch zu groß an',
    ],
    includes: [
      '7-Tage-Fahrplan mit wenigen Regeln',
      'Kurze Check-ins',
      'Klarer Exit: weiter, pausieren oder hochskalieren',
      'Keine Produktpflicht',
    ],
    steps: [
      { title: 'Setup', text: 'Was in sieben Tagen realistisch ist.' },
      { title: 'Durchlauf', text: 'Wenige Regeln, hoher Fokus.' },
      { title: 'Auswertung', text: 'Was bleibt — und was der nächste Baustein ist.' },
    ],
    outcome: 'Ein spürbarer Impuls und eine ehrliche Entscheidung für den nächsten Baustein.',
  },
  {
    slug: 'm1-intensive',
    pillar: 'm1',
    tier: 'high',
    priceLabel: 'High Ticket',
    badge: '90 Tage',
    title: 'M¹ Intensive 90 Tage',
    kicker: 'Das volle Stoffwechsel-Fundament — eng begleitet.',
    text: 'Für alle, bei denen Einzelbausteine nicht reichen: 90 Tage mit klarer Reihenfolge aus Reset, Aufbau und Alltag. Engmaschige Begleitung, messbare Checkpoints, kein Rätselraten. High Ticket, weil die Intensität und die Verantwortung hoch sind — nicht weil es „luxuriöser“ klingt.',
    tags: ['90 Tage', 'Intensiv', '1:1'],
    image: '/images/mod-body-reset.jpg',
    wa: wa.m1Intensive,
    forWhom: [
      'Jahre an halbgaren Versuchen',
      'Du brauchst Struktur und enge Führung',
      'Bereit, 90 Tage ernsthaft zu investieren',
    ],
    includes: [
      '90-Tage-Fahrplan mit Phasen',
      'Engmaschige 1:1-Begleitung',
      'Checkpoints und klare Abbruchkriterien',
      'Übergang in Selbststeuerung am Ende',
    ],
    steps: [
      { title: 'Diagnose', text: 'Status, Priorität, realer Kalender.' },
      { title: 'Phasen', text: 'Reset, Aufbau, Alltag — in dieser Reihenfolge.' },
      { title: 'Exit', text: 'Du steuerst weiter — ohne Dauerabo auf Abhängigkeit.' },
    ],
    outcome: 'Ein belastbares M¹-Fundament und die Fähigkeit, selbst nachzusteuern.',
  },
  {
    slug: 'm2-check',
    pillar: 'm2',
    tier: 'free',
    priceLabel: 'Kostenlos',
    badge: 'Einstieg',
    title: 'M² Bewegungs-Check',
    kicker: 'Kurz screenen, bevor du Last drauflegst.',
    text: 'Kostenloser Einstieg in M²: Wir schauen auf Haltung, Schmerzsignale und grobe Technikfehler. Du erfährst, ob Mobility, Schmerzfrei oder Performance der sinnvolle nächste Baustein ist — ohne sofort ein Training zu buchen.',
    tags: ['Kostenlos', 'Screen', 'Technik'],
    image: '/images/blog-technik.jpg',
    wa: wa.m2Check,
    forWhom: [
      'Unsicherheit vor dem Trainingseinstieg',
      'Leichte Schmerzen oder Ausweichmuster',
      'Du willst Orientierung statt Sofort-Abo',
    ],
    includes: [
      'Kurzer Bewegungs-Screen',
      'Klartext zu Risiken und Priorität',
      'Empfehlung für den nächsten Baustein',
      'Kein Verkaufsdruck',
    ],
    steps: [
      { title: 'Screen', text: 'Was die Kette zeigt — nicht nur, wo es wehtut.' },
      { title: 'Einordnung', text: 'Mobility, Schmerzfrei oder Performance.' },
      { title: 'Schritt', text: 'Einstieg, Vertiefung — oder erst Fundament M¹.' },
    ],
    outcome: 'Du weißt, welcher M²-Baustein Sinn ergibt — bevor Last steigt.',
  },
  {
    slug: 'm2-mobility',
    pillar: 'm2',
    tier: 'entry',
    priceLabel: 'Einstieg',
    badge: 'Mobility',
    title: 'M² Mobility Reset',
    kicker: 'Beweglichkeit zurückholen — ohne Zirkus.',
    text: 'Ein kompakter Einstieg, wenn du steif, ausweichend oder „eingerostet“ bist, aber noch keine volle Schmerzfrei-Begleitung brauchst. Gezielte Mobility-Sessions, die Alltag und Training wieder vorbereiten.',
    tags: ['Mobility', 'Einstieg', 'Technik'],
    image: '/images/michel-trainer.jpg',
    wa: wa.m2Mobility,
    forWhom: [
      'Steifheit nach Büro oder Pause',
      'Technik fühlt sich blockiert an',
      'Zu früh für intensives Performance-Training',
    ],
    includes: [
      'Gezielte Mobility-Arbeit',
      'Alltagsnahe Übungen',
      'Klare Dosis statt Stunden-Flow',
      'Brücke zu Schmerzfrei oder Performance',
    ],
    steps: [
      { title: 'Engpass', text: 'Welche Bahn fehlt wirklich?' },
      { title: 'Öffnen', text: 'Wenige, wirksame Drills.' },
      { title: 'Übertrag', text: 'In Alltag und Training einbauen.' },
    ],
    outcome: 'Mehr Bewegungsfreiheit — als sauberer Einstieg in M².',
  },
  {
    slug: 'm2-athlete',
    pillar: 'm2',
    tier: 'high',
    priceLabel: 'High Ticket',
    badge: 'Intensive',
    title: 'M² Athlete Intensive',
    kicker: 'Leistung aufbauen, ohne den Körper zu verbrennen.',
    text: 'High-Ticket-Begleitung für ambitionierte Sportler und Comeback-Athleten: Periodisierung, Technik unter Ermüdung, Laststeuerung und Regeneration. Mehr als wöchentliches Personal Training — ein Leistungsblock mit klaren Zielen und Exit.',
    tags: ['Athletik', 'Periodisierung', '1:1'],
    image: '/images/aud-athlete-face.jpg',
    wa: wa.m2Athlete,
    forWhom: [
      'Ambitioniertes Leistungsziel',
      'Plateau trotz hartem Training',
      'Comeback nach Verletzung mit Anspruch',
    ],
    includes: [
      'Individuelle Periodisierung',
      'Engmaschige Technik- und Lastführung',
      'Regenerationslogik im Plan',
      'Messbare Zielmarken und Review',
    ],
    steps: [
      { title: 'Kapazität', text: 'Was der Körper wirklich trägt.' },
      { title: 'Block', text: 'Technik, Last, Tempo — gesteuert.' },
      { title: 'Peak & Exit', text: 'Leistung zeigen und danach smart weiter.' },
    ],
    outcome: 'Mehr Leistung auf einem Körper, der mitzieht — nicht nur mitschleppt.',
  },
  {
    slug: 'm3-check',
    pillar: 'm3',
    tier: 'free',
    priceLabel: 'Kostenlos',
    badge: 'Einstieg',
    title: 'M³ Entscheidungs-Check',
    kicker: 'Drei Fragen. Ehrliche Lage. Kein Motivationsabo.',
    text: 'Kostenloser Einstieg in Mental Performance: Wir prüfen Entscheidungsökonomie, Schlaf und Abbruchmuster. Du siehst, ob ein kurzer Impuls reicht — oder ob Routinen und Coaching der fehlende Halt sind.',
    tags: ['Kostenlos', 'Klarheit', 'Mindset'],
    image: '/images/mental-decide.png',
    wa: wa.m3Check,
    forWhom: [
      'Pläne zerfallen nach zwei Wochen',
      'Zu viele offene Entscheidungen',
      'Du willst erst checken, bevor du buchst',
    ],
    includes: [
      'Kurzes Entscheidungs-Screening',
      'Einordnung Schlaf / Stress / Routinen',
      'Empfehlung für den nächsten Baustein',
      'Kein Motivationsvortrag',
    ],
    steps: [
      { title: 'Fragen', text: 'Was fällt zuerst weg — und warum?' },
      { title: 'Muster', text: 'Offene Entscheidungen vs. feste Regeln.' },
      { title: 'Schritt', text: 'Impuls, Setup oder Coaching.' },
    ],
    outcome: 'Klarheit, welcher M³-Baustein (wenn überhaupt) jetzt trägt.',
  },
  {
    slug: 'm3-sleep',
    pillar: 'm3',
    tier: 'entry',
    priceLabel: 'Einstieg',
    badge: 'Schlaf',
    title: 'M³ Schlaf-Impuls',
    kicker: 'Schlaf als Leistungsarbeit — nicht als Soft-Skill.',
    text: 'Kompakter Einstieg: Abendritual, Reizschutz und eine realistische Schlafarchitektur für volle Kalender. Kein Wellness. Ein Baustein, der M¹ und M² oft erst tragfähig macht.',
    tags: ['Schlaf', 'Abendritual', 'Einstieg'],
    image: '/images/blog-schlaf.jpg',
    wa: wa.m3Sleep,
    forWhom: [
      'Schlaf kippt zuerst unter Stress',
      'Abends kein Runterkommen',
      'Du willst einen greifbaren ersten Hebel',
    ],
    includes: [
      'Schlaf- und Abendanalyse',
      'Wenige feste Regeln',
      'Kurze Begleitung bis es sitzt',
      'Brücke zu Routinen-Setup',
    ],
    steps: [
      { title: 'Ist', text: 'Was den Schlaf wirklich stört.' },
      { title: 'Ritual', text: 'Ein Abend, der Entscheidungen schließt.' },
      { title: 'Halten', text: 'Regeln, die auch in Engpasswochen bleiben.' },
    ],
    outcome: 'Schlaf als harter Leistungsfaktor — mit einem Ritual, das trägt.',
  },
  {
    slug: 'm3-routines',
    pillar: 'm3',
    tier: 'core',
    priceLabel: 'Kern',
    badge: 'Routinen',
    title: 'M³ Routinen-Setup',
    kicker: 'Wenige Wenn-dann-Regeln statt Motivationsbergen.',
    text: 'Wir bauen minimale Routinen, die im Kalender stehen: Cue, Handlung, Exit. Entscheidungsökonomie statt Disziplin-Theater. Der Kern von M³ für alle, bei denen M¹/M² greifen — und im Alltag wieder zerfallen.',
    tags: ['Wenn-dann', 'Kalender', 'Halt'],
    image: '/images/mental-hero.png',
    wa: wa.m3Routines,
    forWhom: [
      'Gute Pläne, schwache Haltbarkeit',
      'Zu viele parallele Habits',
      'M¹ oder M² brauchen einen Rahmen',
    ],
    includes: [
      '3–5 tragfähige Routinen',
      'Wenn-dann-Pläne im realen Kalender',
      'Review und Nachschärfen',
      'Ziel: Selbststeuerung',
    ],
    steps: [
      { title: 'Inventur', text: 'Welche Entscheidungen bleiben offen?' },
      { title: 'Bau', text: 'Wenige Paare, die sitzen.' },
      { title: 'Härtefall', text: 'Was gilt, wenn der Tag eng wird?' },
    ],
    outcome: 'Ein Rahmen, der hält — ohne Abo auf Motivation.',
  },
  {
    slug: 'm3-coaching',
    pillar: 'm3',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: '1:1',
    title: 'M³ Mental Coaching',
    kicker: 'Begleitung unter Druck — Verständnis und klarer Impuls.',
    text: '1:1 Mental Performance Coaching: Stressachsen, Entscheidungsökonomie, Abbruchmuster. Manchmal Verständnis. Manchmal einen Arschtritt. Oft beides. Premium, weil die Begleitung eng und persönlich ist.',
    tags: ['1:1', 'Stress', 'Fokus'],
    image: '/images/mental-focus.png',
    wa: wa.mental,
    forWhom: [
      'Hoher Druck, sinkende Klarheit',
      'Wiederkehrende Abbruchschleifen',
      'Du brauchst Gegenüber, nicht nur ein PDF',
    ],
    includes: [
      'Engmaschige 1:1-Sessions',
      'Arbeit an Schlaf, Stress und Entscheidungen',
      'Klare Impulse und Halt',
      'Exit in Selbstständigkeit',
    ],
    steps: [
      { title: 'Lage', text: 'Wo der Kopf den Körper ausbremst.' },
      { title: 'Hebel', text: 'Wenige Interventionen mit Wirkung.' },
      { title: 'Autonomie', text: 'Du steuerst nach — ohne Dauerabhängigkeit.' },
    ],
    outcome: 'Mehr Klarheit unter Last — und Routinen, die ohne Motivationshoch halten.',
  },
  {
    slug: 'm3-hold',
    pillar: 'm3',
    tier: 'high',
    priceLabel: 'High Ticket',
    badge: 'System',
    title: 'M³ System Hold',
    kicker: 'Der Halt um M¹ und M² — bis du selbst führst.',
    text: 'High-Ticket-Begleitung über die mentale Schicht hinaus: M³ als Rahmen um laufende M¹/M²-Arbeit. Entscheidungsökonomie, Schlaf, Stress und Kalender — eng geführt, mit dem klaren Ziel, dass Michél überflüssig wird.',
    tags: ['System', 'Halt', 'Autonomie'],
    image: '/images/blog-plaene.jpg',
    wa: wa.m3Hold,
    forWhom: [
      'Du arbeitest bereits in M¹ oder M²',
      'Alltag frisst Fortschritt',
      'Du willst einen Begleiter bis zur Selbstführung',
    ],
    includes: [
      'Rahmen um Stoffwechsel und Bewegung',
      'Engmaschige Steuerung der offenen Entscheidungen',
      'Regelmäßige Reviews',
      'Geplanter Exit in Autonomie',
    ],
    steps: [
      { title: 'Rahmen', text: 'Was M¹/M² im Alltag hält.' },
      { title: 'Führung', text: 'Eng, ehrlich, ohne Dogma.' },
      { title: 'Übergabe', text: 'Du übernimmst — das ist der Punkt.' },
    ],
    outcome: 'Ein System, das ohne Dauerpräsenz hält — weil Entscheidungen geschlossen sind.',
  },
] as const

export const audience = [
  {
    title: 'Führungskräfte & 60h-Woche',
    persona: 'Sarah · Managing Director & Gründerin',
    dailyLife: '„Hi Michél, 12h-Tage und Dauermeetings killen mich gerade. Ab 14:30 Uhr falle ich in ein massives Loch, abends kreisen die Gedanken und ich schlafe trotz Erschöpfung nur oberflächlich. Ich brauche volle Klarheit, aber mein Kalender hat null Puffer für stundenlange Routinen.“',
    approach: '„Hi Sarah, kein Stressor extra in deinem Kalender: Wir setzen direkt an deiner Blutzuckerkurve und deinem Cortisol-Rhythmus an. Wir etablieren 3 feste, stressfreie Ernährungskerne und zwei 90-Sekunden-Zirkadian-Trigger für den Vormittag. Damit stoppen wir das Nachmittagstief und du fährst abends das Nervensystem gezielt herunter – tiefer Schlaf, ohne Zeitverlust.“',
    image: '/images/aud-exec-face.jpg',
  },
  {
    title: 'Schreibtisch & Chronische Schmerzen',
    persona: 'Markus · Tech Lead & Architekt',
    dailyLife: '„Hi Michél, sitze 9-10h am Code. Im Lendenwirbelbereich brennt es dumpf, der Nacken ist bretthart. Massagen und Physio bringen immer nur für zwei Tage Ruhe. Ich brauche endlich eine dauerhafte Lösung, die mich im Alltag nicht einschränkt.“',
    approach: '„Hi Markus, kenne ich aus eigener Erfahrung mit meinem HWS-Vorfall: Reines Dehnen bringt nichts, wenn die neuronale Ansteuerung der Gelenkkette blockiert ist. Wir testen deine Hüft- und Rumpfstabilisatoren und schalten die inaktiven Muskeln wieder scharf. Dazu gibt’s 3 gezielte 2-Minuten-Resets direkt am Schreibtisch – so beheben wir die Ursache, nicht nur das Symptom.“',
    image: '/images/aud-desk-face.jpg',
  },
  {
    title: 'Diät-Müde & Stoffwechsel-Blockade',
    persona: 'Elena · Executive & Mutter',
    dailyLife: '„Hi Michél, ich habe jahrelang Low-Carb und Kalorientracken durchgezogen. Trotz aller Disziplin: ständiger Blähbauch, Heißhunger am Abend und auf der Waage rührt sich absolut nichts mehr. Es fühlt sich an, als hätte mein Körper komplett dichtgemacht.“',
    approach: '„Hi Elena, Schluss mit Verzicht und Diätstress! Dein Stoffwechsel ist nicht kaputt, sondern im zellulären Schutzmodus. Wir reparieren zuerst dein Mikrobiom, stabilisieren deinen Glukosespiegel und versorgen deine Mitochondrien wieder mit gezielten Nährstoffen. Sobald deine Zellen Energie bekommen, schaltet der Körper von Blockade auf natürliche Fettverbrennung – ganz ohne Jojo-Effekt.“',
    image: '/images/aud-diet-face.jpg',
  },
  {
    title: 'Ambitionierte & Sportler-Plateau',
    persona: 'David · Hyrox-Athlet & Unternehmer',
    dailyLife: '„Hi Michél, ich ziehe 5 harte Einheiten pro Woche durch, aber meine Hyrox-Zeiten stagnieren komplett. Dazu zwickt ständig die linke Achillessehne und ich brauche nach Intervallen Tage, um wieder frisch zu sein. Wo hakt es?“',
    approach: '„Hi David, mehr Härte zerstört, wo Präzision fehlt. Bei dir kompensiert die Kette eine Asymmetrie im Becken, was die Sehne überlastet. Wir analysieren deine Bewegungsmuster, optimieren deine intrazelluläre Mikronährstoffversorgung und stellen dein Training auf ein periodisiertes Kraft-Mobilitäts-System um. Mehr Output bei deutlich schnellerer Regeneration.“',
    image: '/images/aud-athlete-face.jpg',
  },
]


export const process = [
  { n: '01', title: 'Kennenlernen', text: 'Unverbindliches Gespräch über deine Situation, Ziele und Erwartungen.' },
  { n: '02', title: 'Analyse', text: 'Ganzheitliche Bestandsaufnahme von Stoffwechsel, Bewegung und Alltag.' },
  { n: '03', title: 'Strategie', text: 'Dein maßgeschneiderter Fahrplan mit klaren Prioritäten.' },
  { n: '04', title: 'Begleitung', text: 'Schritt-für-Schritt Umsetzung mit engmaschiger Korrektur.' },
  { n: '05', title: 'Routine', text: 'Verstetigung der Gewohnheiten bis zur vollständigen Selbstständigkeit.' },
]

export const faqs = [
  {
    q: 'Muss ich bereits fit sein, um mit M³ zu starten?',
    a: 'Nein, absolut nicht. Ganz im Gegenteil: M³ holt dich exakt dort ab, wo du heute stehst. Egal ob nach langer Pause, mit Übergewicht, Schmerzen oder als Sportler mit Leistungsambitionen.',
  },
  {
    q: 'Wie läuft das kostenlose Erstgespräch ab?',
    a: 'In rund 20 Minuten per Telefon oder Video sprechen wir über deine aktuellen Hürden, deinen Alltag und deine Ziele. Wir prüfen ehrlich, ob M³ der richtige Hebel für dich ist. Danach erhältst du eine erste Einschätzung – völlig unverbindlich.',
  },
  {
    q: 'Kann die Betreuung auch komplett online stattfinden?',
    a: 'Ja. Stoffwechselanalysen, Ernährungsbegleitung und mentale Routinen lassen sich ortsunabhängig digital durchführen. Beim Personal Training kombinieren wir je nach Wohnort Präsenz-Sessions mit digitaler Begleitung.',
  },
  {
    q: 'Was unterscheidet M³ von klassischem Personal Training?',
    a: 'Klassische Trainer lassen dich schwitzen und schicken dich nach 60 Minuten heim. M³ betrachtet das Gesamtsystem: Wenn dein Darm rebelliert oder du vor Stress nicht schläfst, verpufft jedes Training. Wir lösen die Ursachen, nicht die Symptome.',
  },
  {
    q: 'Muss ich Nahrungsergänzungsmittel einnehmen?',
    a: 'Nein. Die Basis sind immer echte Nahrung, Bewegung und Regeneration. Falls eine gezielte Mikronährstoff-Optimierung sinnvoll ist, besprechen wir das transparent und wissenschaftlich fundiert.',
  },
  {
    q: 'Womit starte ich, wenn ich nicht weiß, wo das Problem liegt?',
    a: 'Mit dem System Start. Wir klären zuerst, ob Stoffwechsel, Bewegung oder Routinen der Engpass sind – und bauen danach den Fahrplan. Du musst nicht vorher wissen, welches Modul du brauchst.',
  },
  {
    q: 'Wie viel Zeit brauche ich pro Woche?',
    a: 'So viel, wie dein Alltag hergibt – und nicht mehr. Wir bauen minimale Routinen, die in Beruf und Familie passen. Lieber drei saubere Hebel als ein Plan, den du nach zwei Wochen abbrichst.',
  },
  {
    q: 'Arbeitet ihr mit starren Diäten oder Verboten?',
    a: 'Nein. Keine 14-Tage-Crash-Diäten, keine Korsetts. In der Ernährung geht es um alltagstaugliche Struktur, Blutzucker und Stoffwechsel – ohne Jojo-Effekt.',
  },
  {
    q: 'Was, wenn ich Schmerzen habe und nicht richtig trainieren kann?',
    a: 'Dann ist das der Startpunkt, nicht das Hindernis. Über M² klären wir Ursachen an Rücken, Nacken und Gelenken, bevor Last und Intensität erhöht werden. Technik schlägt Gewicht – immer.',
  },
  {
    q: 'Kann ich als Paar oder mit einem Freund starten?',
    a: 'Ja. Das M² Coaching für Zwei ist genau dafür: individuelle Pläne, gemeinsame Termine, doppelte Motivation – ohne dass einer im Schema des anderen mitläuft.',
  },
  {
    q: 'Wie lange dauert es, bis sich etwas verändert?',
    a: 'Energie und Klarheit merken viele schon in den ersten Wochen, sobald Darm, Schlaf oder Technik greifen. Haltbare Routinen brauchen länger – genau deshalb begleiten wir, bis du selbst steuerst.',
  },
  {
    q: 'Für wen ist M³ nicht geeignet?',
    a: 'Für alle, die eine Wunderpille, einen 6-Wochen-Kick oder reines Abtrainieren ohne Ursachenarbeit suchen. M³ ist 1:1-Begleitung mit dem Ziel Autonomie – nicht ein Abo, das dich abhängig hält.',
  },
  {
    q: 'Wie geht es nach dem Erstgespräch weiter?',
    a: 'Wenn es passt, folgt Analyse, Priorität und ein klarer nächster Schritt: System Start oder das passende Modul. Du entscheidest. Es gibt keinen Druck und keinen Standardvertrag von der Stange.',
  },
]

export const compass = [
  {
    id: 'm1',
    title: 'Energie & Stoffwechsel',
    text: 'Häufig müde, Verdauungsprobleme, Blähbauch, Heißhunger oder das Gefühl, dass der Stoffwechsel blockiert ist.',
    image: '/images/mod-body-reset.jpg',
  },
  {
    id: 'm2',
    title: 'Körper & Schmerzen',
    text: 'Rücken- oder Gelenkbeschwerden, Kraftlosigkeit, Verspannungen oder Unsicherheit bei der richtigen Trainingsausführung.',
    image: '/images/blog-technik.jpg',
  },
  {
    id: 'm3',
    title: 'Chaos & fehlende Routinen',
    text: 'Zu viel auf einmal probiert, ständig abgebrochen, kein klarer roter Faden und Stress im Alltag frisst die Vorsätze auf.',
    image: '/images/aud-exec.jpg',
  },
] as const

export const startProof = [
  {
    title: 'Ein Katalog fragt nach der Wahl. Ein Eingang fragt nach dem Engpass.',
    text: 'Body Reset, Schmerzfrei, Performance — das sind Module. Wer dort startet, hat die Diagnose schon selbst gestellt. Der System Start tut das Gegenteil: er prüft zuerst, ob Stoffwechsel, Bewegung oder Routinen der begrenzende Faktor sind. Deshalb ist er kein Angebot unter anderen. Er ist die Stelle, an der das System dich einordnet.',
    image: '/images/blog-plaene.jpg',
  },
  {
    title: 'Die Säulen bedingen einander. Parallel starten ist Raten.',
    text: 'M¹, M² und M³ sind keine Menüpunkte. Last auf einem brennenden Fundament erzeugt Verschleiß. Saubere Technik zerfällt, wenn Schlaf und Stress die Wiederholung fressen. Wer drei Hebel gleichzeitig zieht, kann nicht sagen, welcher trägt. Die feste Reihenfolge existiert, weil der Körper eine Reihenfolge hat — nicht weil es sich besser verkauft.',
    image: '/images/blog-fundament.jpg',
  },
  {
    title: 'Du musst die Säule nicht kennen. Das ist die Arbeit.',
    text: 'Müde trotz Training. Schmerz trotz Pause. Pläne, die in Woche drei kippen. Dieselben Symptome können in drei verschiedenen Säulen sitzen. Der System Start nimmt dir die Vorentscheidung ab: Status, Priorität, ein nächster Schritt. Danach erst ein Modul — oder keiner, wenn es nicht passt.',
    image: '/images/blog-willenskraft.jpg',
  },
  {
    title: 'Status vor Eingriff. So arbeitet Michél.',
    text: 'Nach dem Bandscheibenvorfall im Halswirbelbereich hat mehr Disziplin den Körper nicht zurückgeholt. Der Weg zurück begann mit der Frage, was zuerst trägt. Genau diese Frage stellt der System Start: nicht „welches Paket willst du“, sondern „wo hält das System nicht“. Erst dann folgen Reset, Technik oder Routine.',
    image: '/images/michel-trainer.jpg',
  },
] as const

export const about = {
  headline: 'Vom Weltmeistertitel zum ganzheitlichen Gesundheitssystem.',
  intro:
    'Warum selbst die härteste Disziplin scheitert, wenn das Fundament nicht stimmt — und wie aus 30+ Jahren Bewegung & Erfahrung das M³-System entstand.',
  quote: 'Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.',
  bio: 'Michél kommt aus 30+ Jahren Bewegung: Breakdance, Bühne, Weltmeisterschaft — und aus dem Leben dazwischen. Alleinerziehender Vater. Ein Bandscheibenvorfall im Halswirbelbereich, der ihn fast gestoppt hätte. Jahre, in denen Disziplin allein nicht mehr gereicht hat. Genau daraus ist M³ entstanden: Stoffwechsel zuerst, dann Technik, dann Routinen, die halten. Kein System von der Stange. Sondern die Reihenfolge, die er am eigenen Körper gelernt hat — mit dem Ziel, dass du irgendwann ohne ihn weiterkommst.',
  stations: [
    {
      years: '1995 – 1998',
      title: 'Frühe Schicksale, Breakdance & erste Verantwortung',
      text: 'Aufwachsen über der Familiengastronomie, schwere Verluste, Alzheimer-Begleitung der Großmutter — und der Einstieg ins Jugendmusical mit Clueso. Bewegung wurde früh zur Sprache und zum Halt.',
    },
    {
      years: '1998 – 2001',
      title: 'Feldjäger-Stab & Tanzlehrer',
      text: '1,5 Jahre Dienst bei den Feldjägern in Mainz, 3-km-Laufrekord von 9:56 Min. und Aufbau von 120 Tanzschülern bei Traut & Heigl. Disziplin und Vermittlung — beides gleichzeitig.',
    },
    {
      years: '2001 – 2005',
      title: 'Tanzfabrik Erfurt & Battle of the Year',
      text: 'Aufbau vieler Nachwuchstänzer in Thüringen, Crew-Fokus mit DJ Nas-D, Platz 7 beim Battle of the Year Germany. Hohe motorische Dichte, Druck, Wiederholung.',
    },
    {
      years: '2005 – 2007',
      title: 'Deutscher Meister, Europameister, IDO Weltmeister',
      text: 'Titel-Triple mit den „Da Rookies“, Solorolle in „Anatevka“ am Theater Erfurt und 5 Jahre UNICEF-Galas. Leistungssport auf der großen Bühne — und Verantwortung für ein Team.',
    },
    {
      years: '2008 – 2015',
      title: 'Air4Day & alleinerziehender Vater',
      text: '13 Ausgaben „Air4Day“, Schul-, Migrations- und Jugendprojekte — und Meisterschaft als alleinerziehender Vater. Hier wurde klar: Vorsätze verlieren oft nicht gegen den Willen, sondern gegen den Alltag.',
    },
    {
      years: '2016 – 2021',
      title: 'Halswirbel-Vorfall & die Stoffwechsel-Wende',
      text: 'Schwerer Bandscheibenvorfall im Halswirbelbereich (C6/C7), Taubheitsgefühle, Fehldiagnosen — und der Weg zurück zu Schmerzfreiheit. Mehr Härte half nicht. Darm, Versorgung und präzise Bewegung schon.',
    },
    {
      years: '2022 – 2023',
      title: '90-Tage Challenge & Coaching-Fundament',
      text: '90-Tage-Transformation (Top 30 von 3.000), Mikrobiom-Sanierung, Start der Master-Personal-Trainer-Ausbildung. Die Erfahrung wurde zur Methode.',
    },
    {
      years: '2024 – Heute',
      title: 'M³ Performance & Selbstständigkeit',
      text: '1:1- und Online-Begleitung für vielbeschäftigte Menschen. M³ bündelt 30+ Jahre Bewegung & Erfahrung in drei Säulen — mit dem klaren Ziel: du steuerst irgendwann selbst.',
    },
  ],
  values: [
    {
      icon: 'autonomy',
      title: '100% Selbstständigkeit',
      text: 'Wir begleiten dich eng — mit dem klaren Ziel deiner Unabhängigkeit. Du lernst, Körper, Stoffwechsel und Alltag selbst zu steuern.',
    },
    {
      icon: 'system',
      title: 'System statt Zufall',
      text: 'Keine Experimente. Wir analysieren die Ausgangslage und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.',
    },
    {
      icon: 'honesty',
      title: 'Ehrlichkeit vor Verkauf',
      text: 'Klare Worte ohne Schönfärberei. Lebenssituation, Beruf und Belastungen fließen ein — mit ehrlicher Führung.',
    },
    {
      icon: 'practice',
      title: 'Praxis vor Trend',
      text: 'Aus 30+ Jahren Bewegung und 15 Jahren professionellem Tanz: Nur Maßnahmen mit physiologischem Anspruch.',
    },
  ],
}

export const nav = [
  { to: '/#system', label: 'System' },
  { to: '/#module', label: 'Module' },
  { to: '/ueber-mich', label: 'Michél' },
  { to: '/system-start', label: 'System Start' },
]

export const michelSlides = [
  { src: '/images/michel-trainer.png', label: 'Trainer' },
  { src: '/images/michel-politik.png', label: 'Politik' },
] as const

export const problemSlides = [
  '/images/michel-work-nutrition.jpg',
  '/images/michel-work-nature.jpg',
  '/images/michel-work-training.jpg',
  '/images/michel-trainer.jpg',
] as const
