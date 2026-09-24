export type LegalSection = {
  h: string
  p: string[]
}

export type LegalPage = {
  eyebrow: string
  title: string
  lead: string
  sections: LegalSection[]
}

export const legal = {
  de: {
    imprint: {
      eyebrow: 'Rechtliches',
      title: 'Impressum',
      lead: 'Angaben gemäß § 5 DDG.',
      sections: [
        {
          h: 'Anbieter',
          p: [
            'Michél Meier\nM³ Performance\nDeutschland',
            'Eine ladungsfähige Anschrift wird auf Anfrage über die genannten Kontaktwege mitgeteilt.',
          ],
        },
        {
          h: 'Kontakt',
          p: [
            'Telefon: +49 176 99016640\nWhatsApp: +49 176 99016640\nInstagram: @michelmeiermoves',
          ],
        },
        {
          h: 'Verantwortlich für den Inhalt',
          p: ['Michél Meier, M³ Performance'],
        },
        {
          h: 'EU-Streitschlichtung',
          p: [
            'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr',
            'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          ],
        },
        {
          h: 'Haftung für Inhalte',
          p: [
            'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
            'Eine Haftung hierfür ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.',
          ],
        },
        {
          h: 'Haftung für Links',
          p: [
            'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Rechtliches',
      title: 'Datenschutz',
      lead: 'Diese Erklärung beschreibt, welche Daten beim Besuch von m3-performance.com verarbeitet werden — und welche nicht.',
      sections: [
        {
          h: 'Verantwortlicher',
          p: [
            'Michél Meier, M³ Performance, Deutschland.\nTelefon: +49 176 99016640\nAnfragen zum Datenschutz über WhatsApp oder Telefon.',
          ],
        },
        {
          h: 'Welche Daten wir verarbeiten',
          p: [
            'Diese Website hat kein Kontaktformular, kein Newsletter-Abo und kein eigenes Nutzerkonto. Du kannst Angebote lesen, ohne uns personenbezogene Daten zu hinterlassen.',
            'Wenn du per WhatsApp, Telefon oder Instagram Kontakt aufnimmst, verarbeiten wir die Daten, die du uns dabei mitteilst — Name, Nummer, Anliegen — um das Gespräch zu führen und, falls gewünscht, eine Zusammenarbeit vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder Erfüllung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer nachvollziehbaren Kommunikation).',
          ],
        },
        {
          h: 'Hosting',
          p: [
            'Die Website wird bei Vercel Inc., 440 Terry Avenue North, Seattle, WA 98109, USA, bereitgestellt. Beim Aufruf entstehen serverseitige Protokolldaten (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser). Das ist technisch nötig, um die Seite auszuliefern und Angriffe abzuwehren. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
            'Vercel kann Daten in den USA verarbeiten. Soweit erforderlich, stützt sich das auf Standardvertragsklauseln der EU-Kommission.',
          ],
        },
        {
          h: 'Schriftarten',
          p: [
            'Diese Seite lädt die Schrift „Plus Jakarta Sans“ von Google Fonts. Dabei kann deine IP-Adresse an Google Ireland Limited bzw. Google LLC (USA) übermittelt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (einheitliche, schnelle Darstellung).',
          ],
        },
        {
          h: 'Lokale Einstellungen',
          p: [
            'Im Browser speichern wir lokal (localStorage) deine Sprachwahl und das Farbschema (Tag, Nacht oder System). Diese Werte verlassen dein Gerät nicht und sind keine Cookies von Drittanbietern. Du kannst sie jederzeit über die Browser-Einstellungen löschen.',
          ],
        },
        {
          h: 'WhatsApp und Instagram',
          p: [
            'Links zu WhatsApp und Instagram führen zu Diensten der Meta Platforms Ireland Limited. Sobald du sie öffnest, gelten deren Datenschutzbestimmungen. Eine Übermittlung findet erst statt, wenn du den Link selbst anklickst.',
          ],
        },
        {
          h: 'Keine Analyse-Cookies',
          p: [
            'Wir setzen kein Tracking, kein Remarketing und keine Werbe-Cookies ein.',
          ],
        },
        {
          h: 'Speicherdauer',
          p: [
            'Serverprotokolle des Hosters werden in dessen üblichen Fristen gelöscht. Nachrichten, die du uns schickst, behalten wir so lange, wie es für die Anfrage oder eine laufende Betreuung nötig ist — oder solange gesetzliche Aufbewahrungspflichten gelten.',
          ],
        },
        {
          h: 'Deine Rechte',
          p: [
            'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig ist in der Regel die Behörde deines Wohnsitzes.',
          ],
        },
      ],
    },
  },
  en: {
    imprint: {
      eyebrow: 'Legal',
      title: 'Imprint',
      lead: 'Information according to § 5 DDG (Germany).',
      sections: [
        {
          h: 'Provider',
          p: [
            'Michél Meier\nM³ Performance\nGermany',
            'A serviceable postal address will be provided on request via the contact channels below.',
          ],
        },
        {
          h: 'Contact',
          p: [
            'Phone: +49 176 99016640\nWhatsApp: +49 176 99016640\nInstagram: @michelmeiermoves',
          ],
        },
        {
          h: 'Responsible for content',
          p: ['Michél Meier, M³ Performance'],
        },
        {
          h: 'EU dispute resolution',
          p: [
            'The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr',
            'We are neither obliged nor willing to participate in dispute-resolution proceedings before a consumer arbitration board.',
          ],
        },
        {
          h: 'Liability for content',
          p: [
            'As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor transmitted or stored third-party information.',
            'Liability is only possible from the moment we become aware of a specific infringement. We will remove such content immediately once we know about it.',
          ],
        },
        {
          h: 'Liability for links',
          p: [
            'This site contains links to external third-party websites. We have no influence on their content and accept no responsibility for it. The respective provider is always responsible for those pages.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacy',
      lead: 'This notice describes which data is processed when you visit m3-performance.com — and which is not.',
      sections: [
        {
          h: 'Controller',
          p: [
            'Michél Meier, M³ Performance, Germany.\nPhone: +49 176 99016640\nPrivacy requests via WhatsApp or phone.',
          ],
        },
        {
          h: 'What we process',
          p: [
            'This site has no contact form, no newsletter signup and no user account. You can read the offers without leaving personal data with us.',
            'If you contact us via WhatsApp, phone or Instagram, we process the data you share — name, number, request — to handle the conversation and, if you want, to prepare a collaboration. Legal basis: Art. 6(1)(b) GDPR (pre-contract or contract) or Art. 6(1)(f) GDPR (legitimate interest in a traceable conversation).',
          ],
        },
        {
          h: 'Hosting',
          p: [
            'The site is hosted by Vercel Inc., 440 Terry Avenue North, Seattle, WA 98109, USA. Each visit creates server logs (e.g. IP address, time, page, browser). This is required to deliver the site and defend against abuse. Legal basis: Art. 6(1)(f) GDPR.',
            'Vercel may process data in the USA. Where needed, this relies on the EU Commission’s standard contractual clauses.',
          ],
        },
        {
          h: 'Fonts',
          p: [
            'This site loads the typeface “Plus Jakarta Sans” from Google Fonts. Your IP address may be sent to Google Ireland Limited or Google LLC (USA). Legal basis: Art. 6(1)(f) GDPR (consistent, fast rendering).',
          ],
        },
        {
          h: 'Local preferences',
          p: [
            'We store your language and color scheme (day, night or system) in localStorage on your device. These values do not leave your browser and are not third-party cookies. You can delete them in your browser settings at any time.',
          ],
        },
        {
          h: 'WhatsApp and Instagram',
          p: [
            'Links to WhatsApp and Instagram lead to services of Meta Platforms Ireland Limited. Their privacy policies apply once you open them. Data is only transmitted when you click the link yourself.',
          ],
        },
        {
          h: 'No analytics cookies',
          p: [
            'We do not use tracking, remarketing or advertising cookies.',
          ],
        },
        {
          h: 'Retention',
          p: [
            'Host server logs are deleted according to the host’s usual periods. Messages you send us are kept only as long as needed for the request or an ongoing collaboration — or as long as statutory retention rules require.',
          ],
        },
        {
          h: 'Your rights',
          p: [
            'You have the right to access, rectification, erasure, restriction, data portability and to object to processing based on Art. 6(1)(f) GDPR. You may also lodge a complaint with a data-protection authority, usually in your place of residence.',
          ],
        },
      ],
    },
  },
} as const
