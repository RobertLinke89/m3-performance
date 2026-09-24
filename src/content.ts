export { posts } from './posts'

export const contact = {
  phone: '4917699016640',
  instagram: 'https://www.instagram.com/michelmeiermoves/',
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
    lead: 'Mikrobiom, Darmgesundheit, zelluläre Vitalstoffe und regulierter Blutzucker als Fundament für dauerhafte Energie.',
    body: 'M¹ ist die erste Säule, weil Leistung ein Stoffwechselproblem ist, bevor sie ein Trainingsproblem wird. Darm, Blutzucker und zelluläre Versorgung entscheiden, ob der Körper Energie bereitstellt — oder kompensiert. Wir bringen das in eine messbare, zeitlich klare Ordnung. Kein Detox-Theater. Keine Verbotsliste.',
    color: '#e8a14a',
    image: '/images/mod-body-reset.jpg',
    science: [
      {
        title: 'Mikrobiom und Darm-Hirn-Achse',
        text: 'Der Darm steuert nicht nur Verdauung. Über Immunsignale, Stoffwechselprodukte und den Vagusnerv beeinflusst er Entzündung, Stimmung und verfügbare Energie. Ein gereiztes Mikrobiom erklärt oft Müdigkeit, Heißhunger und „Nebel“, die kein härteres Training löst.',
        image: '/images/blog-mikrobiom.jpg',
      },
      {
        title: 'Blutzucker bestimmt den Tag',
        text: 'Starke Glukoseausschläge erzeugen Nachmittagstiefs, Cravings und unruhigen Schlaf. Stabilere Mahlzeitenlogik — Protein, Ballaststoffe, Timing — senkt die Variabilität. Das ist Physiologie, keine Diätmoral.',
        image: '/images/blog-blutzucker.jpg',
      },
      {
        title: 'Zelluläre Cofaktoren',
        text: 'ATP-Produktion braucht Eisen, B-Vitamine, Magnesium, Vitamin D und Antioxidantien in ausreichender, bioverfügbarer Form. Lücken in der Grundversorgung begrenzen Kraft, Erholung und Stoffwechselrate — unabhängig vom Trainingsplan.',
        image: '/images/mod-supply.jpg',
      },
      {
        title: 'Niedriggradige Entzündung',
        text: 'Ein durchlässiger oder überlasteter Darm hält den Körper in einem stillen Alarmzustand. Gelenke, Haut, Schlaf und Regenerationsfähigkeit zahlen mit. Erst wenn dieses Rauschen sinkt, trägt Belastung wieder.',
        image: '/images/mod-gut.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-nutrition.jpg',
      title: 'Die Biochemie-Wende war keine Theorie.',
      text: 'Nach dem Halswirbelsäulenvorfall C6/C7 (2016–2021) reichte Disziplin nicht mehr. Taubheit, Fehldiagnosen, ein Körper, der trotz Willen nicht mitzog. Michél hat den Weg zurück nicht über mehr Sätze gefunden, sondern über Darm, Mikrobiom und Versorgung — später verdichtet in der 90-Tage-Arbeit und der Mikrobiom-Sanierung 2022/23. M¹ ist die Antwort auf das, was er selbst zu spät verstanden hat: Wenn das Fundament brennt, macht mehr Last den Brand größer.',
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
    lead: 'Funktionelle Biomechanik, 1:1 Personal Training, Gelenkstabilität und schmerzfreie Belastbarkeit im Alltag.',
    body: 'M² folgt auf das Fundament, weil Last ohne Bahn nur Kompensation verstärkt. Wir trainieren Bewegungen, nicht isolierte Muskeln: motorische Kontrolle, Gelenkzentrierung, saubere Kraftübertragung. Intensität kommt, sobald die Technik trägt. Nicht vorher.',
    color: '#3dba8a',
    image: '/images/michel-trainer.jpg',
    science: [
      {
        title: 'Motorische Kontrolle vor Last',
        text: 'Das zentrale Nervensystem steuert Timing, Stabilität und Kraftschluss. Ohne saubere Ansteuerung erzeugt mehr Gewicht nur lautere Ausweichmuster — oft genau dort, wo es später schmerzt.',
        image: '/images/blog-technik.jpg',
      },
      {
        title: 'Kinetische Kette',
        text: 'Schmerz sitzt selten am Ort der Ursache. Eine steife Hüfte, eine schwache Rotatorenmanschette oder ein fehlender Fußkontakt zwingt Knie, Lendenwirbelsäule oder Nacken zur Kompensation. Wir suchen die Stelle, die die Kette unterbricht.',
        image: '/images/blog-kette.jpg',
      },
      {
        title: 'Schmerz und Belastbarkeit',
        text: 'Schmerz ist ein Schutzsignal, kein reines Gewebemaß. Trotzdem gilt: gereizte Strukturen brauchen dosierte, saubere Belastung — nicht Schonung ohne Ende und nicht Ego-Sätze. Kapazität wächst, wenn die Bahn wieder tragfähig ist.',
        image: '/images/blog-belastbarkeit.jpg',
      },
      {
        title: 'Progression folgt Qualität',
        text: 'Hypertrophie, Maximalkraft und Explosivität brauchen Wiederholbarkeit. Erst wenn die Bewegung unter Ermüdung hält, steigt Last oder Tempo. Das ist Trainingslehre, kein Stil.',
        image: '/images/mod-training-v2.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-mobility.jpg',
      title: '30 Jahre Bewegung — und ein Wirbel, der alles gestoppt hat.',
      text: 'Breakdance, Bühne, Battle of the Year, IDO-Weltmeister 2006/2007: Michél kennt hohe motorische Dichte, Explosivität und Wiederholung unter Druck. Der C6/C7-Vorfall hat gezeigt, wie schnell das System kippt, wenn Technik und Gewebe nicht mehr tragen. Zurück in die Belastbarkeit führte nicht Stillstand, sondern präzise Bahnen, Mobilität und dosierter Reiz. Deshalb ist „Technik vor Gewicht“ bei ihm keine Formel aus einem Lehrbuch. Es ist der Unterschied zwischen weitermachen und ausfallen.',
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
    name: 'Mindset',
    label: 'Routinen',
    title: 'Aus Disziplin wird Routine',
    quote: 'Routine schlägt flüchtige Motivation.',
    lead: 'Stressresilienz, Schlaf-Optimierung, minimale Alltagsgewohnheiten und nachhaltige Selbstständigkeit.',
    body: 'M³ ist keine Extra-Motivation und kein separates Produkt. Es ist der Halt des Systems: Schlaf, Stressregulation und wenige Gewohnheiten, die bleiben, wenn der Kalender voll ist. Ohne diese Schicht zerfallen M¹ und M² nach drei guten Wochen. Ziel ist Autonomie — nicht Abhängigkeit von Michél.',
    color: '#6b8cff',
    image: '/images/michel-portrait.jpg',
    science: [
      {
        title: 'Willenskraft ist endlich',
        text: 'Selbstkontrolle zehrt Glukose, Aufmerksamkeit und Schlaf. Wer jeden Tag neu entscheidet, verliert gegen den Kalender. Stabile Cue-Routine-Paare und Wenn-dann-Pläne entlasten den präfrontalen Cortex. Disziplin wird zur Umgebung, nicht zum täglichen Kampf.',
        image: '/images/blog-willenskraft.jpg',
      },
      {
        title: 'Schlafarchitektur',
        text: 'Tiefschlaf steuert Gewebereparatur und Insulinsensitivität. REM steuert emotionale Regulation. Fragmentierter Schlaf erhöht Schmerzempfindlichkeit, Cravings und Fehlerquote im Training. Schlaf ist keine Soft-Skill. Er ist Stoffwechsel- und Regenerationsarbeit.',
        image: '/images/blog-schlaf.jpg',
      },
      {
        title: 'Stressachse',
        text: 'Chronische Aktivierung der HPA-Achse hält Cortisol unruhig, senkt Erholung und verschiebt Hunger und Entzündung. Atmung, Abendritual, Belastungsspitzen und echte Pausen sind physiologische Hebel — kein Wellness.',
        image: '/images/blog-plaene.jpg',
      },
      {
        title: 'Autonomie hält länger als Aufsicht',
        text: 'Menschen bleiben in Systemen, die sie selbst steuern können. Deshalb bauen wir minimale, sichtbare Routinen und klare Entscheidungskriterien. Der Coach wird überflüssig. Das ist Absicht.',
        image: '/images/aud-exec.jpg',
      },
    ],
    experience: {
      image: '/images/michel-office.jpg',
      title: 'Disziplin hat im Sport gereicht. Im Leben nicht.',
      text: 'Alleinerziehender Vater. 13 Ausgaben Air4Day. Schul- und Jugendprojekte. Ein Halswirbel, der die alte Härte unmöglich machte. Michél kennt den Punkt, an dem Vorsätze den Alltag verlieren — nicht aus Schwäche, sondern weil das System zu viele offene Entscheidungen hat. M³ kommt aus genau diesem Bruch: weniger Heroismus, mehr Struktur. Verständnis, wo jemand hält. Ein klarer Impuls, wo jemand sich dreht. Ohne Dogma. Mit dem Ziel, dass du irgendwann ohne ihn weiterkommst.',
      quote: 'Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.',
    },
    principles: [
      {
        title: 'Wenige Hebel, die im Kalender stehen',
        text: 'Drei tragfähige Routinen schlagen einen Plan, der nach zwei Wochen bricht.',
      },
      {
        title: 'Schlaf und Stress zuerst messen',
        text: 'Bevor wir neue Habits stapeln, klären wir, was den Abend und den Morgen tatsächlich regiert.',
      },
      {
        title: 'Selbstständigkeit als Exit',
        text: 'Du lernst, wann du selbst nachsteuerst. M³ ist der Rahmen — kein Abo auf Motivation.',
      },
    ],
    signals: [
      'Zu viel auf einmal probiert, ständig abgebrochen, kein roter Faden',
      'Stress frisst Vorsätze, Schlaf ist das erste, das kippt',
      'M¹ oder M² greifen — und fallen im Alltag wieder auseinander',
    ],
  },
] as const

export const modules = [
  {
    slug: 'body-reset',
    pillar: 'm1',
    badge: 'Flaggschiff',
    title: 'M¹ Body Reset',
    kicker: 'Ganzheitlicher Neustart von innen',
    text: 'Das modulare Konzept für Darm und Stoffwechsel: 16-Tage Darmkur, gezielte Stoffwechselkur und tägliche Goldene Grundversorgung.',
    tags: ['16-Tage Darmkur', 'Stoffwechselkur', 'Grundversorgung'],
    image: '/images/mod-body-reset.jpg',
    wa: wa.bodyReset,
    forWhom: ['Müde trotz Schlaf', 'Blähbauch & Heißhunger', 'Stoffwechsel fühlt sich blockiert'],
    includes: ['16-Tage Darmkur', 'Gezielte Stoffwechselkur', 'Goldene Grundversorgung'],
    steps: [
      { title: 'Standort', text: 'Wir klären Verdauung, Energie und Alltagsbelastung – ohne Rateversuch.' },
      { title: 'Reset', text: 'Darm und Stoffwechsel kommen in eine klare, zeitlich begrenzte Struktur.' },
      { title: 'Alltag', text: 'Die Grundversorgung bleibt, der Rest wird zur Routine, die du selbst hältst.' },
    ],
    outcome: 'Mehr Energie von innen, weniger Feuer im Fundament – als Basis für Training und Alltag.',
  },
  {
    slug: 'ernaehrungscoaching',
    pillar: 'm1',
    badge: '1:1 Coaching',
    title: 'M¹ Ernährungscoaching',
    kicker: 'Deine Ernährung. Dein Alltag.',
    text: 'Keine starren Diät-Korsetts oder Verbote – sondern eine alltagstaugliche 1:1 Makro-Struktur ohne Jojo-Effekt.',
    tags: ['Individuelle Makro-Struktur', 'Perfekt für Beruf & Familie'],
    image: '/images/mod-nutrition.jpg',
    wa: wa.nutrition,
    forWhom: ['Beruf & Familie im Dauerlauf', 'Diät-müde ohne Verbotsliste', 'Keine Zeit für Kochstudio'],
    includes: ['1:1 Makro-Struktur', 'Alltagstaugliche Mahlzeitenlogik', 'Anpassung an Beruf und Familie'],
    steps: [
      { title: 'Ist-Zustand', text: 'Was du wirklich isst, wann der Blutzucker kippt, wo der Alltag reinfunkt.' },
      { title: 'Struktur', text: 'Eine Makro-Logik, die in deinen Kalender passt – nicht umgekehrt.' },
      { title: 'Feinschliff', text: 'Wir justieren, bis es hält. Ohne Jojo, ohne Korsett.' },
    ],
    outcome: 'Essen, das Energie gibt und in den Tag passt – ohne Verbot und ohne Jojo-Effekt.',
  },
  {
    slug: 'schmerzfrei',
    pillar: 'm2',
    badge: 'Reha',
    title: 'M² Schmerzfrei',
    kicker: 'Mobilität & Ursachenbehebung',
    text: 'Gezielte Mobilität und Ursachenbehebung bei Rücken-, Nacken- und Gelenkbeschwerden.',
    tags: ['Rücken', 'Nacken', 'Gelenke'],
    image: '/images/mod-painfree.jpg',
    wa: wa.painfree,
    forWhom: ['Rücken, Nacken, Gelenke', 'Schmerz bremst das Training', 'Unsicherheit bei der Ausführung'],
    includes: ['Ursachenanalyse', 'Mobilitätsarbeit 1:1', 'Schmerzfreie Belastbarkeit aufbauen'],
    steps: [
      { title: 'Ursache', text: 'Wo das System kompensiert – nicht nur, wo es wehtut.' },
      { title: 'Bewegung', text: 'Technik und Mobilität, bis die Bahn wieder sauber ist.' },
      { title: 'Last', text: 'Erst dann Intensität. Technik schlägt Gewicht – immer.' },
    ],
    outcome: 'Wieder belastbar im Alltag, ohne dass jeder Satz ein Risiko ist.',
  },
  {
    slug: 'performance-training',
    pillar: 'm2',
    badge: '1:1 Training',
    title: 'M² Performance Training',
    kicker: 'Kraft, Explosivität, Körperbeherrschung',
    text: 'Intelligentes 1:1 Personal Training für echte Kraft, Explosivität und Körperbeherrschung.',
    tags: ['Maximalkraft', 'Athletik', 'Technik'],
    image: '/images/mod-training-v2.jpg',
    wa: wa.training,
    forWhom: ['Kraft und Explosivität', 'Plateau im Training', 'Technik vor Ego'],
    includes: ['1:1 Personal Training', 'Technikkorrektur live', 'Progression für Kraft und Körperbeherrschung'],
    steps: [
      { title: 'Screen', text: 'Bewegungsqualität, Schwachstellen, echte Kapazität – nicht der Spiegel.' },
      { title: 'Technik', text: 'Präzise Korrektur, bis die Bewegung sitzt.' },
      { title: 'Leistung', text: 'Last und Tempo folgen der Qualität, nicht dem Kalender.' },
    ],
    outcome: 'Mehr Kraft und Kontrolle – auf einem Fundament, das mitzieht.',
  },
  {
    slug: 'coaching-fuer-zwei',
    pillar: 'm2',
    badge: 'Für Zwei',
    title: 'M² Coaching für Zwei',
    kicker: 'Partner oder Freunde',
    text: 'Personal Training für Partner oder Freunde – individuelle Pläne mit doppelter Motivation.',
    tags: ['Paare', 'Freunde', 'Teamgeist'],
    image: '/images/mod-duo-v2.jpg',
    wa: wa.duo,
    forWhom: ['Paare', 'Freunde', 'Gemeinsam starten, individuell bleiben'],
    includes: ['Zwei individuelle Pläne', 'Gemeinsame Termine', 'Korrektur für beide Körper'],
    steps: [
      { title: 'Zwei Ist-Zustände', text: 'Jeder Körper bekommt seine Analyse – kein Schema F für beide.' },
      { title: 'Gemeinsam trainieren', text: 'Ein Raum, zwei Reize, doppelte Motivation.' },
      { title: 'Eigener Weg', text: 'Progression bleibt individuell, der Rhythmus gemeinsam.' },
    ],
    outcome: 'Zusammen dranbleiben, ohne dass einer im Plan des anderen mitläuft.',
  },
  {
    slug: 'darm-stoffwechselbegleitung',
    pillar: 'm1',
    badge: 'Vertiefung',
    title: 'M¹ Darmbegleitung',
    kicker: 'Starkes Mikrobiom',
    text: 'Intensive 1:1 Begleitung bei Magen-Darm-Themen, Unverträglichkeiten und Stoffwechselträgheit.',
    tags: ['Mikrobiom', 'Unverträglichkeiten', '1:1'],
    image: '/images/mod-gut.jpg',
    wa: wa.gut,
    forWhom: ['Unverträglichkeiten', 'Magen-Darm-Themen', 'Stoffwechselträgheit nach Diäten'],
    includes: ['1:1 Begleitung', 'Mikrobiom-Fokus', 'Alltagstaugliche Anpassung'],
    steps: [
      { title: 'Muster', text: 'Was den Darm reizt, wann Energie einbricht, welche Versuche schon liefen.' },
      { title: 'Ordnung', text: 'Gezielte Schritte statt 20 parallele Biohacks.' },
      { title: 'Stabilität', text: 'Bis der Bauch ruhig bleibt und du weißt, was bei dir hält.' },
    ],
    outcome: 'Ein belastbareres Fundament – Verdauung, die den Tag nicht mehr regiert.',
  },
  {
    slug: 'goldene-grundversorgung',
    pillar: 'm1',
    badge: 'Basis',
    title: 'M¹ Goldene Grundversorgung',
    kicker: 'Tägliche Zellenergie',
    text: 'Hoch bioverfügbare Basisversorgung mit essenziellen Vitaminen, Spurenelementen und Antioxidantien.',
    tags: ['Mikronährstoffe', 'Zellgesundheit'],
    image: '/images/mod-supply.jpg',
    wa: wa.supply,
    forWhom: ['Wenig Zeit, hohe Last', 'Lücken in der Basisversorgung', 'Zellenergie im Alltag'],
    includes: ['Essenzielle Vitamine', 'Spurenelemente', 'Antioxidantien – hoch bioverfügbar'],
    steps: [
      { title: 'Bedarf', text: 'Ob und was sinnvoll ist, klären wir ehrlich. Kein Pflicht-Stack.' },
      { title: 'Basis', text: 'Wenige, saubere Hebel statt Schrank voller Dosen.' },
      { title: 'Halten', text: 'Eine Morgenroutine, die bleibt – Nahrung bleibt die Grundlage.' },
    ],
    outcome: 'Eine stille tägliche Basis. Kein Ersatz für Essen, Bewegung und Schlaf.',
  },
] as const

export const audience = [
  { title: 'Führungskräfte & 60h-Woche', text: 'Volle Vitalität ohne Nachmittagstiefs.', image: '/images/aud-exec-face.jpg' },
  { title: 'Schreibtisch-Schmerzen', text: 'Wieder schmerzfrei und anatomisch stabil.', image: '/images/aud-desk-face.jpg' },
  { title: 'Diät-Müde', text: 'Stoffwechsel-Reset ohne Jojo-Effekt und ohne Verbote.', image: '/images/aud-diet-face.jpg' },
  { title: 'Sportler & Ambitionierte', text: 'Plateaus durchbrechen und Belastbarkeit steigern.', image: '/images/aud-athlete-face.jpg' },
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
    image: '/images/mod-painfree.jpg',
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
    text: 'Body Reset, Schmerzfrei, Performance — das sind Module. Wer dort startet, hat die Diagnose schon selbst gestellt. Der System Start tut das Gegenteil: er prüft zuerst, ob Stoffwechsel, Bahn oder Routinen der begrenzende Faktor sind. Deshalb ist er kein Angebot unter anderen. Er ist die Stelle, an der das Framework dich einordnet.',
    image: '/images/blog-plaene.jpg',
  },
  {
    title: 'Die Säulen bedingen einander. Parallel starten ist Raten.',
    text: 'M¹, M² und M³ sind keine Menüpunkte. Last auf einem brennenden Fundament erzeugt Verschleiß. Saubere Technik zerfällt, wenn Schlaf und Stress die Wiederholung fressen. Wer drei Hebel gleichzeitig zieht, kann nicht sagen, welcher trägt. Die feste Reihenfolge existiert, weil Physiologie eine Reihenfolge hat — nicht weil es sich besser verkauft.',
    image: '/images/blog-fundament.jpg',
  },
  {
    title: 'Du musst die Säule nicht kennen. Das ist die Arbeit.',
    text: 'Müde trotz Training. Schmerz trotz Pause. Pläne, die in Woche drei kippen. Dieselben Symptome können in drei verschiedenen Säulen sitzen. Der System Start nimmt dir die Vorentscheidung ab: Status, Priorität, ein nächster Schritt. Danach erst ein Modul — oder keiner, wenn es nicht passt.',
    image: '/images/blog-willenskraft.jpg',
  },
  {
    title: 'Status vor Eingriff. So arbeitet Michél.',
    text: 'Nach C6/C7 hat mehr Disziplin den Körper nicht zurückgeholt. Der Weg zurück begann mit der Frage, was zuerst trägt. Genau diese Frage stellt der System Start: nicht „welches Paket willst du“, sondern „wo hält das System nicht“. Erst dann folgen Reset, Technik oder Routine.',
    image: '/images/michel-trainer.jpg',
  },
] as const

export const about = {
  headline: 'Vom Weltmeistertitel zum ganzheitlichen Gesundheitssystem.',
  intro:
    'Warum selbst die härteste Disziplin scheitert, wenn das Fundament nicht stimmt – und wie aus 30+ Jahren Bewegungserfahrung das M³-System entstand.',
  quote: 'Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.',
  bio: '25 Jahre Erfahrung im Leistungssport, Bühnenarbeit und der Begleitung von Menschen mitten im fordernden Berufs- und Familienalltag.',
  stations: [
    {
      years: '1995 – 1998',
      title: 'Frühe Schicksale, Breakdance & erste Verantwortung',
      text: 'Aufwachsen über der Familiengastronomie, schwere Verluste, Alzheimer-Begleitung der Großmutter – und der Einstieg ins Jugendmusical mit Clueso.',
    },
    {
      years: '1998 – 2001',
      title: 'Feldjäger-Stab & Tanzlehrer',
      text: '1,5 Jahre Dienst bei den Feldjägern in Mainz, 3-km-Laufrekord von 9:56 Min. und Aufbau von 120 Tanzschülern bei Traut & Heigl.',
    },
    {
      years: '2001 – 2005',
      title: 'Tanzfabrik Erfurt & Battle of the Year',
      text: 'Aufbau vieler Nachwuchstänzer in Thüringen, Crew-Fokus mit DJ Nas-D, Platz 7 beim Battle of the Year Germany.',
    },
    {
      years: '2005 – 2007',
      title: 'Deutscher Meister, Europameister, IDO Weltmeister',
      text: 'Titel-Triple mit den „Da Rookies“, Solorolle in „Anatevka“ am Theater Erfurt und 5 Jahre UNICEF-Galas.',
    },
    {
      years: '2008 – 2015',
      title: 'Air4Day & alleinerziehender Vater',
      text: '13 Ausgaben „Air4Day“, Schul-, Migrations- und Jugendprojekte – und Meisterschaft als alleinerziehender Vater.',
    },
    {
      years: '2016 – 2021',
      title: 'HWS-Vorfall & die Biochemie-Wende',
      text: 'Schwerer Halswirbelsäulenvorfall (C6/C7), Taubheitsgefühle, Fehldiagnosen – und der Weg zurück zu Schmerzfreiheit.',
    },
    {
      years: '2022 – 2023',
      title: '90-Tage Challenge & Coaching-Fundament',
      text: '90-Tage-Transformation (Top 30 von 3.000), Mikrobiom-Sanierung, Start der Master-Personal-Trainer-Ausbildung.',
    },
    {
      years: '2024 – Heute',
      title: 'M³ Performance & Autonomie-Prinzip',
      text: '1:1- und Online-Begleitung für vielbeschäftigte Menschen – für Energie, Fettabbau und echte Unabhängigkeit.',
    },
  ],
  values: [
    {
      title: '100% Autonomie',
      text: 'Wir begleiten dich eng – mit dem klaren Ziel deiner Unabhängigkeit. Du lernst, Körper, Stoffwechsel und Alltag selbst zu steuern.',
    },
    {
      title: 'System statt Zufall',
      text: 'Keine Experimente. Wir analysieren Ausgangslage und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.',
    },
    {
      title: 'Ehrlichkeit vor Verkauf',
      text: 'Klare Worte ohne Schönfärberei. Lebenssituation, Beruf und Belastungen fließen ein – mit ehrlicher Führung.',
    },
    {
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
  { src: '/images/michel-trainer.jpg', label: 'Trainer' },
  { src: '/images/michel-politik.jpg', label: 'Politik' },
  { src: '/images/michel-goofy.jpg', label: 'Goofy' },
] as const

export const problemSlides = [
  '/images/michel-work-nutrition.jpg',
  '/images/michel-work-nature.jpg',
  '/images/michel-work-mobility.jpg',
  '/images/michel-work-duo.jpg',
] as const
