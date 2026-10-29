import type { LanguageCode } from './config'

const en = {
  'nav.home': 'Home',
  'nav.plans': 'Plans',
  'nav.compare': 'Compare',
  'nav.guide': 'Guide',
  'nav.enrol': 'How to enrol',
  'nav.insurers': 'Insurers',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.more': 'More',
  'nav.language': 'Language',
  'nav.menu': 'Menu',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',

  'common.demoStrip': 'Demonstration data — not a real insurance offer.',
  'common.learnMore': 'Learn more',
  'common.explorePlans': 'Explore plans',
  'common.comparePlans': 'Compare plans',
  'common.search': 'Search',
  'common.searchPlaceholder': 'Search a plan or insurer',
  'common.browsePlans': 'Browse plans',
  'common.viewAllPlans': 'View all plans',
  'common.openGuide': 'Open the guide',
  'common.prepareToEnrol': 'Prepare to enrol',
  'common.noAccount':
    'Browse without an account. We never ask for medical history or ID numbers.',
  'common.languageNote': 'Plan details and legal text stay in English.',
  'common.languageNotice':
    'The menu is translated. Plan details, guidance and legal text stay in English.',
  'common.compareCount': 'plans to compare',
  'common.imageCaption':
    'Illustrative image — not a real clinic, insurer or person.',
  'common.viewDetails': 'View details',
  'common.compare': 'Compare',
  'common.inComparison': 'In comparison',
  'common.comparisonFull': 'Comparison full',
  'common.compareFullHint':
    'You can compare up to four plans. Remove one to add another.',
  'common.demoPlan': 'Demo plan',

  'plan.premium': 'Premium',
  'plan.premiumMissing': 'Not provided — contact insurer',
  'plan.keyBenefits': 'Key benefits',
  'plan.moreBenefits': 'more benefits listed',
  'plan.whyMatched': 'Why this matched',

  'demoBanner.title': 'Demonstration data',
  'demoBanner.text':
    'Plan names, insurers, premiums and contacts are fictional examples. Confirm every detail with a real insurer before paying anything.',
  'demoBanner.link': 'Read the disclaimer',

  'status.info': 'Information',
  'status.legend': 'Key:',
  'status.explicitExcluded': 'Explicitly excluded',
  'status.unavailable': 'Information unavailable',
  'status.missingNote': 'Missing information is not proof of exclusion.',

  'prompt.title': 'Choose your language',
  'prompt.description':
    'Choose the language you want to use. You can change it at any time.',
  'prompt.note': 'Plan details and legal text stay in English.',
  'a11y.listen': 'Listen to this page',
  'a11y.skip': 'Skip to main content',
  'a11y.pause': 'Pause',
  'a11y.resume': 'Resume',
  'a11y.stop': 'Stop',
  'a11y.reading': 'Reading this page aloud.',
  'a11y.paused': 'Reading paused.',
  'a11y.stopped': 'Reading stopped.',
  'a11y.unsupported': 'This browser cannot read pages aloud.',
  'a11y.voiceNote':
    'Voice quality depends on your device. Some languages may use an English voice.',

  'status.covered': 'Covered',
  'status.notCovered': 'Not covered',
  'status.checkFirst': 'Check first',
  'category.individual': 'Individual',
  'category.family': 'Family',
  'category.self': 'Self-employed',

  'home.eyebrow': 'UIA Career Expo 2026 · Prototype',
  'home.titleA': 'Health insurance,',
  'home.titleB': 'made simple.',
  'home.description':
    'Compare health insurance plans in Uganda. See what each plan covers, what it does not cover and what to ask. No account and no medical questions.',
  'home.card.eyebrow': 'Demonstration data',
  'home.card.title': 'NileCare Essential',
  'home.card.covered': 'Hospital admission, surgery and emergency transport',
  'home.card.notCovered': 'Maternity, optical care, treatment abroad',
  'home.card.checkFirst': 'Dental limit — not stated',
  'home.card.note':
    'Every plan in this prototype is demonstration data. No real insurer is represented.',
  'home.card.link': 'Open sample plan',
  'home.categories.eyebrow': 'Start by browsing',
  'home.categories.title': 'Who needs cover?',
  'home.categories.description':
    'These filters help you browse. They do not promise that a plan is available or that you qualify.',
  'home.badge': 'No account needed',
  'home.category.individual': 'For one person',
  'home.category.individualDesc': 'Cover for one adult.',
  'home.category.family': 'For a family',
  'home.category.familyDesc':
    'Cover for you and the people who depend on you.',
  'home.category.self': 'For self-employed people',
  'home.category.selfDesc': 'Cover for people who work for themselves.',
  'home.how.eyebrow': 'How it works',
  'home.how.title': 'Explore, compare, enrol',
  'home.how.description':
    'Three steps: browse plans, compare them and prepare to enrol.',
  'home.step.explore': 'Explore',
  'home.step.exploreDesc':
    'Filter plans by who needs cover and by benefits.',
  'home.step.compare': 'Compare',
  'home.step.compareDesc': 'See up to four plans side by side.',
  'home.step.enrol': 'Enrol',
  'home.step.enrolDesc':
    'Prepare your documents, then contact the insurer.',
  'home.featured.eyebrow': 'Featured plans',
  'home.featured.title': 'A starting point to explore',
  'home.featured.description':
    'A few plans from the demonstration catalogue.',
  'home.why.eyebrow': 'Why this platform',
  'home.why.title': 'Clarity before commitment',
  'home.why.description':
    'It is easier to choose when the information is clear and missing details are visible.',
  'home.finder.eyebrow': 'Optional tool',
  'home.finder.title': 'Smart Plan Finder',
  'home.finder.description':
    'Answer four simple questions about your needs. We show plans that match and explain why.',
  'home.status.eyebrow': 'Read every plan the same way',
  'home.status.title': 'Covered. Not covered. Check first.',
  'home.status.description':
    'Each plan page separates what is covered, what is not covered and what still needs checking.',
  'home.faq.eyebrow': 'Common questions',
  'home.faq.title': 'Before you choose a plan',
  'home.faq.description': 'Short answers to common questions.',
  'home.cta.title': 'Start with what you need cover for.',
  'home.cta.description':
    'Browse plans, compare a few and make a list of questions for the insurer.',
  'home.heroBadge': 'Health insurance for Uganda',
  'home.hero.covered': 'Listed benefits',
  'home.hero.excluded': 'Stated exclusions',
  'home.hero.check': 'Needs confirming',
  'home.searchLabel': 'Search health insurance plans',
  'home.step.exploreLink': 'Browse plans',
  'home.step.compareLink': 'How comparison works',
  'home.step.enrolLink': 'See enrolment steps',
  'home.why.plain.title': 'Plain-language explanations',
  'home.why.plain.desc': 'Terms are explained where you meet them.',
  'home.why.exclusions.title': 'Transparent exclusions',
  'home.why.exclusions.desc':
    'Covered, excluded and unknown are kept apart.',
  'home.why.contacts.title': 'Direct insurer contacts',
  'home.why.contacts.desc': 'Know who to call and what to confirm first.',
  'home.finder.noMedical': 'No diagnoses or medical history',
  'home.finder.noId': 'No ID numbers or payment details',
  'home.finder.noSuitability': 'No claim that a plan is medically suitable',
  'home.finder.cta': 'Use the Plan Finder',
  'home.cta.noAccount': 'No account needed',
  'home.cta.fourPlans': 'Up to four plans compared',
  'home.cta.direct': 'Direct insurer route',

  'page.plans.eyebrow': 'Plan catalogue',
  'page.plans.title': 'Explore health insurance plans',
  'page.plans.description':
    'Search, filter and open any plan to see what it covers, what it excludes and its limits.',
  'page.compare.eyebrow': 'Comparison',
  'page.compare.title': 'Compare plans side by side',
  'page.compare.description':
    'Pick up to four plans. See the same details side by side, with differences highlighted.',
  'page.guide.eyebrow': 'Insurance guide',
  'page.guide.title': 'Understand the words before you choose',
  'page.guide.description':
    'New words explained in plain language, with examples.',
  'page.enrol.eyebrow': 'How to enrol',
  'page.enrol.title': 'Prepare before you apply',
  'page.enrol.description':
    'What to prepare and what to ask. The insurer decides the final requirements.',
  'page.insurers.eyebrow': 'Insurer directory',
  'page.insurers.title': 'Insurers and contacts',
  'page.insurers.description':
    'See who is behind each plan, how to reach them and when details were last checked.',
  'page.about.eyebrow': 'About',
  'page.about.title':
    'Health insurance made easier to understand',
  'page.about.description':
    'A prototype for the UIA Career Expo 2026. We help you understand health insurance — we do not sell it.',
  'page.contact.eyebrow': 'Contact',
  'page.contact.title': 'Questions, corrections and feedback',
  'page.contact.description':
    'This prototype has no phone line or inbox. For plan questions, contact the insurer directly.',
  'page.privacy.eyebrow': 'Legal',
  'page.privacy.title': 'Privacy notice',
  'page.privacy.description':
    'What this prototype does — and does not do — with your information.',
  'page.disclaimer.eyebrow': 'Legal',
  'page.disclaimer.title': 'Information disclaimer',
  'page.disclaimer.description':
    'We help you understand health insurance. We do not sell policies or decide who qualifies.',

  'footer.explore': 'Explore',
  'footer.support': 'Support',
  'footer.legal': 'Legal',
  'footer.tagline':
    'A simple way to explore health insurance in Uganda. See what is covered and what to do next.',
  'footer.infoOnly': 'Information and referral only — not an insurer',
  'footer.explorePlans': 'Explore plans',
  'footer.comparePlans': 'Compare plans',
  'footer.guide': 'Insurance guide',
  'footer.enrol': 'How to enrol',
  'footer.insurers': 'Insurers and contacts',
  'footer.about': 'About the platform',
  'footer.contact': 'Contact and feedback',
  'footer.privacy': 'Privacy notice',
  'footer.disclaimer': 'Information disclaimer',
  'footer.important': 'Important information.',
  'footer.builtFor':
    'Built for the Uganda Insurers Association Career Expo 2026.',
  'footer.note':
    'Prototype for the UIA Career Expo 2026. Plans, insurers and contacts are demonstration data. We do not sell policies or collect medical history.',
  'footer.copyrightNote': 'Information only.',
} as const

export type TranslationKey = keyof typeof en

type Dictionary = Partial<Record<TranslationKey, string>>

const lg: Dictionary = {
  'nav.home': 'Awaka',
  'nav.plans': 'Plani',
  'nav.compare': 'Geraageranya',
  'nav.guide': 'Ggwida',
  'nav.enrol': "Engeri y'okwewandiisa",
  'nav.insurers': 'Banna insurance',
  'nav.about': 'Ebikukwatako',
  'nav.contact': 'Tukwatire',
  'nav.more': 'Ebisingawo',
  'nav.language': 'Olulimi',
  'nav.menu': 'Menu',
  'nav.openMenu': 'Ggula menu',
  'nav.closeMenu': 'Ggala menu',

  'common.demoStrip': "Data ey'okulaga — si ssuula ya insurance ya ddala.",
  'common.learnMore': 'Yiga ebisingawo',
  'common.explorePlans': 'Laba plani',
  'common.comparePlans': 'Geraageranya plani',
  'common.search': 'Noonya',
  'common.searchPlaceholder': 'Noonya plani oba insurer',
  'common.browsePlans': 'Kebera plani',
  'common.viewAllPlans': 'Laba plani zonna',
  'common.openGuide': 'Ggula ggwida',
  'common.prepareToEnrol': 'Kyeteekateeke okwewandiisa',
  'common.noAccount':
    "Kebera awatali akawunti. Tetubuuza ku bulwadde oba nnamba z'ID.",
  'common.languageNote':
    "Ebikwata ku plani n'amateeka bisigala mu Lungereza.",
  'common.languageNotice':
    "Ebikwata ku mutimbagano bikyusiddwa. Ebikwata ku plani, obuyambi n'amateeka bisigala mu Lungereza.",
  'common.compareCount': 'plani okugeraageranya',
  'common.imageCaption':
    "Ekifaananyi ky'okulaga — si ddwaliro, insurer oba muntu wa ddala.",
  'common.viewDetails': 'Laba ebisingawo',
  'common.compare': 'Geraageranya',
  'common.inComparison': 'Kuli ku geraageranya',
  'common.comparisonFull': 'Okugeraageranya kujjudde',
  'common.compareFullHint':
    'Osobola okugeraageranya plani okutuuka ku nnya. Ggyawo emu okwongera endala.',
  'common.demoPlan': "Plani ey'okulaga",

  'plan.premium': 'Premium',
  'plan.premiumMissing': 'Tekyalangirirwa — buuza insurer',
  'plan.keyBenefits': 'Ebintu ebikulu',
  'plan.moreBenefits': 'ebintu ebirala ebiri mu plani',
  'plan.whyMatched': 'Lwaki kigattiddwa',

  'demoBanner.title': "Data ey'okulaga",
  'demoBanner.text':
    "Amannya ga plani, banna insurance, emiwendo n'ebikwata ku kwetaba bya kuyiiyisa. Kakasa buli kimu ne insurer wa ddala nga tonnasasula.",
  'demoBanner.link': "Soma ekiwandiiko ky'okunnyonnyola",

  'status.info': 'Amawulire',
  'status.legend': 'Ekitegeeza:',
  'status.explicitExcluded': 'Kiggyiddwa mu lwatu',
  'status.unavailable': 'Amawulire tegaliiwo',
  'status.missingNote':
    "Obutamanya tebutwalibwa ng'okugyibwa.",

  'prompt.title': 'Londa olulimi lwo',
  'prompt.description':
    "Londa olulimi gw'oyagala okukozesa. Osobola okukyusa essaawa yonna.",
  'prompt.note': "Ebikwata ku plani n'amateeka bisigala mu Lungereza.",
  'a11y.listen': 'Wuliriza omutimbagano guno',
  'a11y.skip': "Buuka otuuke ku birimu",
  'a11y.pause': 'Ggumu',
  'a11y.resume': 'Genda mu maaso',
  'a11y.stop': 'Ggya',
  'a11y.reading': 'Tusoma omutimbagano guno mu ddoboozi.',
  'a11y.paused': 'Okusoma kugumye.',
  'a11y.stopped': 'Okusoma kuyimiridde.',
  'a11y.unsupported': 'Browser eno tesobola kusoma mutimbagano mu ddoboozi.',
  'a11y.voiceNote':
    'Eddoboozi lyesigama ku kyuma kyo. Ennimi ezimu ziyinza okukozesa eddoboozi lya Lungereza.',

  'status.covered': 'Kikwekebwako',
  'status.notCovered': 'Tekikwekebwako',
  'status.checkFirst': 'Buuza kubere',
  'category.individual': 'Omuntu omu',
  'category.family': 'Famire',
  'category.self': 'Akola ku lwe',

  'home.titleA': "Insurance y'ebyobulamu,",
  'home.titleB': 'mu ngeri eyangu.',
  'home.description':
    "Kebera plani, manya ebirimu era ogeraageranye n'obwesige. Tewetaaga akawunti oba bulwadde bw'omuntu.",
  'home.card.eyebrow': "Data ey'okulaga",
  'home.card.covered':
    "Okulabirirwa mu ddwaliro, okulongoosebwa n'okutwalibwa mu mbeera ey'ekyekedde",
  'home.card.notCovered':
    "Okuzala, okujanjaba amaaso n'okujanjabibwa ebweru wa Uganda",
  'home.card.checkFirst': "Ekkomo ku by'amenyo — tekyalangirirwa",
  'home.card.note':
    "Plani yonna ku mukutu guno ya kuyiiyisa. Tewali insurer wa ddala akiikirirwa.",
  'home.card.link': "Ggula plani ey'okulaga",
  'home.categories.eyebrow': "Tandika n'okukebera",
  'home.categories.title': 'Ani ayagala okukwekebwa?',
  'home.categories.description':
    'Kukebera kuno kugatta plani, si kusuubiza nti plani eriwo oba nti osaanira.',
  'home.badge': 'Tewetaaga akawunti',
  'home.category.individual': 'Ku muntu omu',
  'home.category.individualDesc': 'Okukwekebwa ku muntu omu mukulu.',
  'home.category.family': 'Ku famire',
  'home.category.familyDesc':
    "Okukwekebwa ku ggwe n'abo abwesigama ku ggwe.",
  'home.category.self': 'Ku bakola ku lwabwe',
  'home.category.selfDesc': 'Okukwekebwa ku bantu abakola ku lwabwe.',
  'home.how.eyebrow': 'Engeri gye kikola',
  'home.how.title': 'Kebera, geraageranya, wewandiise',
  'home.how.description':
    "Emipiira esatu okuva mu kukebera okutuuka ku kwogerako n'insurer.",
  'home.step.explore': 'Kebera',
  'home.step.exploreDesc':
    'Longosa plani okulinga ku muntu akwetaaga okukwekebwa ne benefits.',
  'home.step.compare': 'Geraageranya',
  'home.step.compareDesc':
    'Laba plani okutuuka ku nnya ku luuyi ne luuyi.',
  'home.step.enrol': 'Wewandiise',
  'home.step.enrolDesc':
    'Teekateeka ebiwandiiko byo, oluvannyuma tukwatire insurer.',
  'home.featured.eyebrow': 'Plani ezirabika',
  'home.featured.title': "Ekifo ky'okutandikira",
  'home.featured.description':
    "Plani ntono okuva ku catalogue ya kuyiiyisa.",
  'home.why.eyebrow': 'Lwaki kino kiriwo',
  'home.why.title': 'Okutegeera nga tonnalonda',
  'home.why.description':
    "Insurance y'ebyobulamu yanguwa okwetegereza ng'amawulire gakwatagana era ebisobya birabika.",
  'home.finder.eyebrow': "Ekyuma ky'okukozesa",
  'home.finder.description':
    'Ddamu ebibuuzo bina ebitakwata ku bulwadde. Tugatta plani era tunnyonnyola lwaki buli emu yagattibwa.',
  'home.status.eyebrow': 'Soma plani yonna mu ngeri emu',
  'home.status.title': 'Kikwekebwako. Tekikwekebwako. Buuza kubere.',
  'home.status.description':
    "Lupapula lwa plani yonna lukwata ebirowozo bino bisatu ebyawukana, kibe nti obutamanya tebutwalibwa ng'okugyibwa.",
  'home.faq.eyebrow': 'Ebibuuzo ebitera okubuuza',
  'home.faq.title': 'Nga tonnalonda plani',
  'home.faq.description':
    'Ennyinyonnyola ennyimpi ku bibuuzo abantu bye babuuza okusooka.',
  'home.cta.title': 'Tandika ku kye weetaaga okukwekebwa.',
  'home.cta.description':
    "Kebera catalogue, geraageranya plani ntono era ove n'olukalala lw'ebibuuzo eri insurer.",
  'home.heroBadge': "Insurance y'ebyobulamu mu Uganda",
  'home.hero.covered': 'Ebikwekebwako',
  'home.hero.excluded': 'Ebikugyiddwa',
  'home.hero.check': 'Biteekwa okubuuzibwa',
  'home.searchLabel': "Noonya plani z'ebyobulamu",
  'home.step.exploreLink': 'Kebera plani',
  'home.step.compareLink': 'Engeri okugeraageranya gye kikola',
  'home.step.enrolLink': "Laba emipiira gy'okwewandiisa",
  'home.why.plain.title': 'Ennyinyonnyola eyangu',
  'home.why.plain.desc':
    'Ebigambo binnyonnyolwa buli we obyolekera.',
  'home.why.exclusions.title': 'Ebitakwekebwa mu lwatu',
  'home.why.exclusions.desc':
    "Kikwekebwako, tekikwekebwako n'obutamanya byawukanyizibwa.",
  'home.why.contacts.title': 'Ekkubo eryerekeera eri insurer',
  'home.why.contacts.desc':
    "Manya ani ow'okukubira n'eky'okukakasa.",
  'home.finder.noMedical':
    "Tewali bulwadde oba ebyafaayo by'obulamu",
  'home.finder.noId':
    "Tewali nnamba za ID oba ssente z'okusasula",
  'home.finder.noSuitability':
    'Tetukyoleka nti plani esaanira obulamu bwo',
  'home.finder.cta': 'Kozesa Smart Plan Finder',
  'home.cta.noAccount': 'Tewetaaga akawunti',
  'home.cta.fourPlans': "Plani nnya ez'okugeraageranya",
  'home.cta.direct': 'Ekkubo eryerekeera eri insurer',

  'page.plans.eyebrow': 'Olukalala lwa plani',
  'page.plans.title': "Laba plani z'ebyobulamu",
  'page.plans.description':
    "Noonya ku linnya lya plani oba insurer, longosa ku mutindo gw'omuntu ne benefits, era ggula plani yonna okulaba ebirimu, ebitakirizibwa n'ebikoma. Tewetaaga akawunti.",
  'page.compare.eyebrow': 'Okugeraageranya',
  'page.compare.title': 'Geraageranya plani ku luuyi ne luuyi',
  'page.compare.description':
    'Londa plani okutuuka ku nnya era okozesa ebintu bimu ku buli emu. Enjawulo zirabika, naye tewali plani erondeddwa ng\'esinga endala.',
  'page.guide.eyebrow': "Ggwida y'ebyobulamu",
  'page.guide.title': 'Tegeera ebigambo nga tonnalonda',
  'page.guide.description':
    "Insurance y'ebyobulamu ekozesa ebigambo ebisobola okutabagana. Ggwida eno ebinyonnyola mu bwangu, n'ebifaananyi, osobole okusoma plani n'obwesige.",
  'page.enrol.eyebrow': "Engeri y'okwewandiisa",
  'page.enrol.title': 'Kyeteekateeke nga tonnassa',
  'page.enrol.description':
    "Okutambula kuno kukuyamba okukuŋŋaanya ebikwata ku mutu n'okubuuza ebibuuzo ebituufu. Ebisaana bisinziira ku insurer ne policy.",
  'page.insurers.eyebrow': 'Olukalala lwa banna insurance',
  'page.insurers.title': "Banna insurance n'ebikwata ku kwetaba",
  'page.insurers.description':
    "Manya insurer ali emabega wa plani, laba ekkubo ly'okwetaba eriri mu mawulire agaliwo, era kebera ddi ebikwata ku nsonga bwe byakeberebwa.",
  'page.about.eyebrow': 'Ebikukwatako',
  'page.about.title':
    "Okunnyonnyoka eri abagula insurance y'ebyobulamu omulundi ogusooka",
  'page.about.description':
    'HealthCover Uganda kikozesebwa okulaga era kiraga ebikwata ku by\'obulamu, kyakolebwa ku Uganda Insurers Association Career Expo 2026. Kissa essira ku kutegeera, si ku kutunda.',
  'page.contact.eyebrow': 'Tukwatire',
  'page.contact.title': "Ebibuuzo, okukyusa n'ebiteeso",
  'page.contact.description':
    "Kino tekirina nnamba ya telefoni oba email ekeberebwa. Ku bibuuza ku plani emu, tukwatire insurer ku lukalala.",
  'page.privacy.eyebrow': 'Amateeka',
  'page.privacy.title': "Ekiwandiiko ky'ebyama",
  'page.privacy.description':
    "Ennyinyonnyola ennyimpi era eyangu ku ekyo kino kikola ne ekyo ky'ekikola ku mawulire go.",
  'page.disclaimer.eyebrow': 'Amateeka',
  'page.disclaimer.title': "Ekiwandiiko ky'okunnyonnyola",
  'page.disclaimer.description':
    'Kino kiyamba okutegeera plani z\'ebyobulamu. Tekitunda insurance, tekiwa policy era tekyalawo nti osaanira.',

  'footer.explore': 'Kebera',
  'footer.support': 'Obuyambi',
  'footer.legal': 'Amateeka',
  'footer.tagline':
    "Engeri eyangu okukebera insurance y'ebyobulamu mu Uganda, okumanya ebirimu n'okuzuula ekkubo eddako.",
  'footer.infoOnly': "Mawulire n'okulungamya — si insurer",
  'footer.explorePlans': 'Laba plani',
  'footer.comparePlans': 'Geraageranya plani',
  'footer.guide': "Ggwida y'ebyobulamu",
  'footer.enrol': "Engeri y'okwewandiisa",
  'footer.insurers': "Banna insurance n'ebikwata ku kwetaba",
  'footer.about': "Ebikwata ku HealthCover",
  'footer.contact': "Tukwatire n'ebiteeso",
  'footer.privacy': "Ekiwandiiko ky'ebyama",
  'footer.disclaimer': "Ekiwandiiko ky'okunnyonnyola",
  'footer.important': 'Ebikulu.',
  'footer.builtFor':
    'Kyakolebwa ku Uganda Insurers Association Career Expo 2026.',
  'footer.note':
    "Kikozesebwa ku UIA Career Expo 2026. Plani, banna insurance n'ebikwata ku kwetaba bya kuyiiyisa. Tetutunda policy era tetukuŋŋaanya byafaayo by'obulamu.",
  'footer.copyrightNote': 'Mawulire gokka.',
}

const sw: Dictionary = {
  'nav.home': 'Nyumbani',
  'nav.plans': 'Mipango',
  'nav.compare': 'Linganisha',
  'nav.guide': 'Mwongozo',
  'nav.enrol': 'Jinsi ya kujiandikisha',
  'nav.insurers': 'Watoa bima',
  'nav.about': 'Kuhusu',
  'nav.contact': 'Mawasiliano',
  'nav.more': 'Zaidi',
  'nav.language': 'Lugha',
  'nav.menu': 'Menyu',
  'nav.openMenu': 'Fungua menyu',
  'nav.closeMenu': 'Funga menyu',

  'common.demoStrip': 'Data ya maonyesho — si ofa halisi ya bima.',
  'common.learnMore': 'Soma zaidi',
  'common.explorePlans': 'Angalia mipango',
  'common.comparePlans': 'Linganisha mipango',
  'common.search': 'Tafuta',
  'common.searchPlaceholder': 'Tafuta mpango au bima',
  'common.browsePlans': 'Angalia mipango',
  'common.viewAllPlans': 'Ona mipango yote',
  'common.openGuide': 'Fungua mwongozo',
  'common.prepareToEnrol': 'Jiandae kujiandikisha',
  'common.noAccount':
    'Vinjari bila akaunti. Hatuulizi historia ya matibabu au namba za kitambulisho.',
  'common.languageNote':
    'Maelezo ya mipango na maandishi ya kisheria yanabaki kwa Kiingereza.',
  'common.languageNotice':
    'Kiolesura kimetafsiriwa. Maelezo ya mipango, mwongozo na maandishi ya kisheria yanabaki kwa Kiingereza.',
  'common.compareCount': 'mipango ya kulinganisha',
  'common.imageCaption':
    'Picha ya kielelezo — si kliniki, mtoa bima au mtu halisi.',
  'common.viewDetails': 'Ona maelezo zaidi',
  'common.compare': 'Linganisha',
  'common.inComparison': 'Ipo kwenye ulinganisho',
  'common.comparisonFull': 'Ulinganisho umejaa',
  'common.compareFullHint':
    'Unaweza kulinganisha mipango hadi minne. Ondoa mmoja kuongeza mwingine.',
  'common.demoPlan': 'Mpango wa maonyesho',

  'plan.premium': 'Malipo',
  'plan.premiumMissing': 'Haijatajwa — wasiliana na mtoa bima',
  'plan.keyBenefits': 'Faida kuu',
  'plan.moreBenefits': 'faida nyingine zilizoorodheshwa',
  'plan.whyMatched': 'Kwa nini kililingana',

  'demoBanner.title': 'Data ya maonyesho',
  'demoBanner.text':
    'Majina ya mipango, watoa bima, bei na mawasiliano ni mifano ya kubuni. Hakikisha kila jambo na mtoa bima halisi kabla ya kulipa.',
  'demoBanner.link': 'Soma kanusho',

  'status.info': 'Taarifa',
  'status.legend': 'Ufunguo:',
  'status.explicitExcluded': 'Hakijatolewa wazi',
  'status.unavailable': 'Taarifa haipatikani',
  'status.missingNote':
    'Kukosa taarifa si uthibitisho wa kutojumuishwa.',

  'prompt.title': 'Chagua lugha yako',
  'prompt.description':
    'Chagua lugha unayotaka kutumia. Unaweza kuibadilisha wakati wowote.',
  'prompt.note':
    'Maelezo ya mipango na maandishi ya kisheria yanabaki kwa Kiingereza.',
  'a11y.listen': 'Sikiliza ukurasa huu',
  'a11y.skip': 'Ruka hadi maudhui makuu',
  'a11y.pause': 'Sitisha kwa muda',
  'a11y.resume': 'Endelea',
  'a11y.stop': 'Acha',
  'a11y.reading': 'Ukurasa huu unasomwa kwa sauti.',
  'a11y.paused': 'Usomaji umesitishwa kwa muda.',
  'a11y.stopped': 'Usomaji umeachwa.',
  'a11y.unsupported': 'Kivinjari hiki hakiwezi kusoma kurasa kwa sauti.',
  'a11y.voiceNote':
    'Ubora wa sauti unategemea kifaa chako. Baadhi ya lugha zinaweza kutumia sauti ya Kiingereza.',

  'status.covered': 'Inashughulikiwa',
  'status.notCovered': 'Haishughulikiwi',
  'status.checkFirst': 'Uliza kwanza',
  'category.individual': 'Mtu mmoja',
  'category.family': 'Familia',
  'category.self': 'Anayejiajiri',

  'home.titleA': 'Bima ya afya,',
  'home.titleB': 'rahisi.',
  'home.description':
    'Gundua mipango, elewa kinacholipiwa na linganisha kwa uhakika. Hakuna akaunti, hakuna taarifa za matibabu.',
  'home.card.eyebrow': 'Data ya maonyesho',
  'home.card.covered':
    'Kulazwa hospitalini, upasuaji na usafiri wa dharura',
  'home.card.notCovered': 'Uzazi, huduma ya macho, matibabu nje ya nchi',
  'home.card.checkFirst': 'Kikomo cha meno — hakijatajwa',
  'home.card.note':
    'Kila mpango kwenye tovuti hii ni data ya maonyesho. Hakuna bima halisi inayowakilishwa.',
  'home.card.link': 'Fungua mpango huu wa mfano',
  'home.categories.eyebrow': 'Anza kwa kuvinjari',
  'home.categories.title': 'Nani anahitaji bima?',
  'home.categories.description':
    'Hizi ni vichujio vya kuvinjari, si ahadi kwamba bidhaa inapatikana au kwamba unastahili.',
  'home.badge': 'Hakuna akaunti inayohitajika',
  'home.category.individual': 'Kwa mtu mmoja',
  'home.category.individualDesc': 'Bima kwa mtu mmoja mzima.',
  'home.category.family': 'Kwa familia',
  'home.category.familyDesc': 'Bima kwako na watu wanaokutegemea.',
  'home.category.self': 'Kwa wanaojiajiri',
  'home.category.selfDesc': 'Bima kwa watu wanaojiajiri.',
  'home.how.eyebrow': 'Inavyofanya kazi',
  'home.how.title': 'Gundua, linganisha, jiandikishe',
  'home.how.description':
    'Hatua tatu wazi kutoka kuvinjari hadi mazungumzo na mtoa bima.',
  'home.step.explore': 'Gundua',
  'home.step.exploreDesc':
    'Chuja mipango kwa nani anahitaji bima na kwa faida.',
  'home.step.compare': 'Linganisha',
  'home.step.compareDesc': 'Ona hadi mipango minne bega kwa bega.',
  'home.step.enrol': 'Jiandikishe',
  'home.step.enrolDesc':
    'Andaa nyaraka zako, kisha wasiliana na mtoa bima.',
  'home.featured.eyebrow': 'Mipango teule',
  'home.featured.title': 'Mahali pa kuanzia',
  'home.featured.description':
    'Uteuzi mfupi kutoka katalogi ya maonyesho.',
  'home.why.eyebrow': 'Kwa nini jukwaa hili',
  'home.why.title': 'Uwazi kabla ya ahadi',
  'home.why.description':
    'Bima ya afya ni rahisi kuzingatia wakati taarifa zinalingana na mapungufu yanaonekana.',
  'home.finder.eyebrow': 'Zana ya hiari',
  'home.finder.description':
    'Jibu maswali manne yasiyo ya matibabu. Tunachuja katalogi na kueleza kwa nini kila mpango ulilingana.',
  'home.status.eyebrow': 'Soma kila mpango kwa njia ile ile',
  'home.status.title': 'Inashughulikiwa. Haishughulikiwi. Uliza kwanza.',
  'home.status.description':
    'Kila ukurasa wa mpango hutenganisha mawazo haya matatu, ili pengo la taarifa lisidhaniwe kuwa ubaguzi.',
  'home.faq.eyebrow': 'Maswali ya kawaida',
  'home.faq.title': 'Kabla ya kuchagua mpango',
  'home.faq.description':
    'Majibu mafupi kwa maswali ambayo watu huuliza kwanza.',
  'home.cta.title':
    'Anza na kile unachohitaji bima kwa ajili yake.',
  'home.cta.description':
    'Vinjari katalogi, linganisha mipango michache na uondoke na orodha wazi ya maswali kwa mtoa bima.',
  'home.heroBadge': 'Bima ya afya Uganda',
  'home.hero.covered': 'Kinacholipiwa',
  'home.hero.excluded': 'Kinachokataliwa',
  'home.hero.check': 'Vinahitaji kuthibitishwa',
  'home.searchLabel': 'Tafuta mipango ya bima ya afya',
  'home.step.exploreLink': 'Angalia mipango',
  'home.step.compareLink': 'Jinsi ulinganisho unavyofanya kazi',
  'home.step.enrolLink': 'Ona hatua za kujiandikisha',
  'home.why.plain.title': 'Maelezo kwa lugha rahisi',
  'home.why.plain.desc':
    'Maneno hufafanuliwa hapo unapoyakutana nayo.',
  'home.why.exclusions.title': 'Visivyolipiwa wazi',
  'home.why.exclusions.desc':
    'Vinacholipiwa, visivyolipiwa na visivyojulikana hutenganishwa.',
  'home.why.contacts.title': 'Mawasiliano ya moja kwa moja',
  'home.why.contacts.desc':
    'Jua nani wa kumpigia na nini cha kuthibitisha kwanza.',
  'home.finder.noMedical':
    'Hakuna utambuzi au historia ya matibabu',
  'home.finder.noId': 'Hakuna namba za kitambulisho au malipo',
  'home.finder.noSuitability':
    'Hatuonyeshi kwamba mpango unafaa afya yako',
  'home.finder.cta': 'Tumia Smart Plan Finder',
  'home.cta.noAccount': 'Hakuna akaunti inayohitajika',
  'home.cta.fourPlans': 'Mipango minne ya kulinganisha',
  'home.cta.direct': 'Njia ya moja kwa moja kwa mtoa bima',

  'page.plans.eyebrow': 'Katalogi ya mipango',
  'page.plans.title': 'Gundua mipango ya bima ya afya',
  'page.plans.description':
    'Tafuta kwa jina la mpango au mtoa bima, chuja kwa aina ya mteja na faida, na fungua mpango wowote kuona kinacholipiwa, kinachokataliwa na mipaka. Hakuna akaunti inayohitajika.',
  'page.compare.eyebrow': 'Ulinganisho',
  'page.compare.title': 'Linganisha mipango bega kwa bega',
  'page.compare.description':
    'Chagua hadi mipango minne na tumia sehemu zile zile kwa kila mmoja. Tofauti zinaonyeshwa, lakini hakuna mpango unaopangwa kuwa bora kuliko mwingine.',
  'page.guide.eyebrow': 'Mwongozo wa bima',
  'page.guide.title': 'Elewa maneno kabla ya kuchagua',
  'page.guide.description':
    'Bima ya afya hutumia maneno ambayo ni rahisi kuchanganya. Mwongozo huu unayaeleza kwa urahisi, pamoja na mifano, ili uweze kusoma mpango kwa ujasiri.',
  'page.enrol.eyebrow': 'Jinsi ya kujiandikisha',
  'page.enrol.title': 'Jiandae kabla ya kuomba',
  'page.enrol.description':
    'Mwongozo huu unakusaidia kukusanya taarifa sahihi na kuuliza maswali sahihi. Mahitaji halisi hutegemea mtoa bima na sera.',
  'page.insurers.eyebrow': 'Orodha ya watoa bima',
  'page.insurers.title': 'Watoa bima na mawasiliano',
  'page.insurers.description':
    'Fahamu mtoa bima aliye nyuma ya kila mpango, ona njia za mawasiliano zilizotolewa katika taarifa zilizopo, na angalia maelezo yalipothibitishwa mara ya mwisho.',
  'page.about.eyebrow': 'Kuhusu',
  'page.about.title':
    'Uwazi kwa watu wanaonunua bima ya afya kwa mara ya kwanza',
  'page.about.description':
    'HealthCover Uganda ni mfano wa jukwaa la taarifa na uelekezaji lililoundwa kwa ajili ya Uganda Insurers Association Career Expo 2026. Linaangazia uelewa, si uuzaji.',
  'page.contact.eyebrow': 'Mawasiliano',
  'page.contact.title': 'Maswali, marekebisho na maoni',
  'page.contact.description':
    'Mfano huu hautoi namba ya simu au barua pepe iliyothibitishwa. Kwa maswali kuhusu mpango mahususi, wasiliana na mtoa bima kupitia orodha.',
  'page.privacy.eyebrow': 'Kisheria',
  'page.privacy.title': 'Taarifa ya faragha',
  'page.privacy.description':
    'Maelezo mafupi na rahisi ya kile mfano huu unachofanya na kisichofanya na taarifa zako.',
  'page.disclaimer.eyebrow': 'Kisheria',
  'page.disclaimer.title': 'Kanusho la taarifa',
  'page.disclaimer.description':
    'Jukwaa hili linakusaidia kuelewa chaguo za bima ya afya. Haliuza bima, halitoi sera wala haliamua ustahili.',

  'footer.explore': 'Gundua',
  'footer.support': 'Msaada',
  'footer.legal': 'Kisheria',
  'footer.tagline':
    'Njia rahisi ya kuchunguza chaguo za bima ya afya nchini Uganda, kuelewa kinacholipiwa na kupata hatua inayofuata.',
  'footer.infoOnly': 'Taarifa na uelekezaji tu — si mtoa bima',
  'footer.explorePlans': 'Angalia mipango',
  'footer.comparePlans': 'Linganisha mipango',
  'footer.guide': 'Mwongozo wa bima',
  'footer.enrol': 'Jinsi ya kujiandikisha',
  'footer.insurers': 'Watoa bima na mawasiliano',
  'footer.about': 'Kuhusu jukwaa',
  'footer.contact': 'Mawasiliano na maoni',
  'footer.privacy': 'Taarifa ya faragha',
  'footer.disclaimer': 'Kanusho la taarifa',
  'footer.important': 'Taarifa muhimu.',
  'footer.builtFor':
    'Imeundwa kwa Uganda Insurers Association Career Expo 2026.',
  'footer.note':
    'Mfano kwa UIA Career Expo 2026. Mipango, watoa bima na mawasiliano ni data ya maonyesho. Hatuuzi sera wala hatukusanyi historia ya matibabu.',
  'footer.copyrightNote': 'Taarifa tu.',
}

const nyn: Dictionary = {
  'nav.home': 'Eka',
  'nav.plans': 'Plani',
  'nav.compare': 'Geraageranya',
  'nav.guide': 'Ggwida',
  'nav.enrol': 'Kwiyandikisa',
  'nav.insurers': 'Banna insurance',
  'nav.about': 'Ebikukwatako',
  'nav.contact': 'Tukwatire',
  'nav.more': 'Ebindi',
  'nav.language': 'Orurimi',
  'nav.menu': 'Menu',
  'nav.openMenu': 'Ggura menu',
  'nav.closeMenu': 'Ggala menu',

  'common.demoStrip': "Data y'okulaga — si insurance ya mazima.",
  'common.learnMore': 'Yega ebirikukira',
  'common.explorePlans': 'Reba plani',
  'common.comparePlans': 'Geraageranya plani',
  'common.search': 'Noonya',
  'common.searchPlaceholder': 'Noonya plani oba insurer',
  'common.browsePlans': 'Reba plani',
  'common.viewAllPlans': 'Reba plani zonna',
  'common.openGuide': 'Ggura ggwida',
  'common.prepareToEnrol': 'Kyeteekateeka kwiyandikisa',
  'common.noAccount':
    "Reba hatari akaunti. Titubuuzaku oburwaire oba ennamba za ID.",
  'common.languageNote':
    "Ebikwataki plani n'amateeka bikwaara mu Lungereza.",
  'common.languageNotice':
    "Interface ekyusirwe. Ebikwataki plani, obuyambi n'amateeka bikwaara mu Lungereza.",
  'common.compareCount': 'plani ezikugeraageranya',
  'common.imageCaption':
    "Ekifaananyi ky'okulaga — si ddwaliro, insurer oba muntu wa mazima.",
  'common.viewDetails': 'Reba ebirikukira',
  'common.compare': 'Geraageranya',
  'common.inComparison': 'Kiri omu kugeraageranya',
  'common.comparisonFull': 'Okugeraageranya kuzwire',
  'common.compareFullHint':
    'Noosobora kugeraageranya plani kuhika inya. Ggyaaho emwe kwongyera endala.',
  'common.demoPlan': "Plani y'okulaga",

  'plan.premium': 'Premium',
  'plan.premiumMissing': 'Tikirangirirwe — buuza insurer',
  'plan.keyBenefits': 'Ebintu ebikuru',
  'plan.moreBenefits': 'ebintu ebindi ebirikurimu',
  'plan.whyMatched': 'Ahabwaki kikagwerira',

  'demoBanner.title': "Data y'okulaga",
  'demoBanner.text':
    "Amazina ga plani, banna insurance, emiwendo n'ebikwataki kutwarira n'ebya kuyiiyisa. Kakasa buri kimwe na insurer wa mazima hati otakasasura.",
  'demoBanner.link': "Soma ebaruha y'okunnyonnyola",

  'status.info': 'Amakuru',
  'status.legend': 'Ekiteekyeza:',
  'status.explicitExcluded': 'Kikagyirwemu omu lwatu',
  'status.unavailable': 'Amakuru tigariho',
  'status.missingNote':
    "Obwatamanya tibutwarirwe nk'okugyibwa.",
  'a11y.skip': 'Ruka otaahe aha birikurimu',

  'category.individual': 'Omuntu omwe',
  'category.family': 'Famire',
  'category.self': 'Okora aha bwe',

  'home.titleA': "Insurance y'amagara,",
  'home.titleB': "n'omuringo gwangu.",
  'home.description':
    "Reba plani, manya ebirikurimu kandi ogeraageranye n'obwesigwa. Toreetaaga akaunti oba oburwaire bw'omuntu.",
  'home.categories.title': 'Ndi ha kukweka?',
  'home.category.individual': 'Ahari omuntu omwe',
  'home.category.family': 'Ahari famire',
  'home.category.self': 'Ahari abakora aha bwabo',
  'home.how.title': 'Reba, geraageranya, kwiyandikisa',
  'home.step.explore': 'Reba',
  'home.step.compare': 'Geraageranya',
  'home.step.enrol': 'Kwiyandikisa',
  'home.why.title': 'Okumanya hati otakatandika',
  'home.faq.title': 'Hati otakalonda plani',
  'home.cta.title': 'Tandika aha eki orikwetenga kukweka.',
  'home.heroBadge': "Insurance y'amagara mu Uganda",
  'home.hero.covered': 'Ebikwekwa',
  'home.hero.excluded': 'Ebikagyirwemu',
  'home.hero.check': 'Biteekwa kubuzibwa',
  'home.searchLabel': "Noonya plani z'amagara",
  'home.step.exploreLink': 'Reba plani',
  'home.step.compareLink': 'Engeri okugeraageranya gye kikora',
  'home.step.enrolLink': "Reba emipiira y'okwiyandikisa",
  'home.why.plain.title': 'Enyinyonnyola eyangu',
  'home.why.plain.desc':
    'Ebigambo binyonnyolwa aha buri we obiraba.',
  'home.why.exclusions.title': 'Ebiritakwekwa omu lwatu',
  'home.why.exclusions.desc':
    'Ebikwekwa, ebiritakwekwa n’obutamanya byawukanisibwa.',
  'home.why.contacts.title': 'Ekkubo erikuhika insurer',
  'home.why.contacts.desc':
    "Manya oku ow'okuteera n'eky'okukakasa.",
  'home.finder.noMedical':
    'Tihari oburwaire oba ebyahikire aha magara',
  'home.finder.noId':
    "Tihari ennamba za ID oba ssente z'okushashura",
  'home.finder.noSuitability':
    'Titukweka nti plani eshaana amagara go',
  'home.finder.cta': 'Kozesa Smart Plan Finder',
  'home.cta.noAccount': 'Toreetaaga akaunti',
  'home.cta.fourPlans': 'Plani inya ezikugeraageranya',
  'home.cta.direct': 'Ekkubo erikuhika insurer',

  'page.plans.title': "Reba plani z'amagara",
  'page.compare.title': 'Geraageranya plani ku rubaju',
  'page.guide.title': 'Yetegereze ebigambo hati otakalonda',
  'page.enrol.title': 'Kyeteekateeka hati otakaikiriza',
  'page.insurers.title': "Banna insurance n'ebikwataki kutwarira",
  'page.about.title': "Okumanya aha abaguza insurance y'amagara emirundi ya okubanza",
  'page.contact.title': "Ebibuuzo, okuhindura n'ebiteeso",
  'page.privacy.title': 'Ebaruha y\'ekyama',
  'page.disclaimer.title': "Ebaruha y'okunnyonnyola",

  'footer.explore': 'Reba',
  'footer.support': 'Obuyambi',
  'footer.legal': 'Amateeka',
  'footer.tagline':
    "Omuringo gwangu okureba insurance y'amagara mu Uganda, okumanya ebirikurimu n'okuzuura ekyokukora.",
  'footer.infoOnly': "Amakuru n'obuyambi — tiiwe insurer",
  'footer.explorePlans': 'Reba plani',
  'footer.comparePlans': 'Geraageranya plani',
  'footer.guide': 'Ggwida ya insurance',
  'footer.enrol': 'Kwiyandikisa',
  'footer.insurers': "Banna insurance n'ebikwataki kutwarira",
  'footer.about': 'Ebikwataki HealthCover',
  'footer.contact': "Tukwatire n'ebiteeso",
  'footer.privacy': "Ebaruha y'ekyama",
  'footer.disclaimer': "Ebaruha y'okunnyonnyola",
  'footer.important': 'Amakuru g\'omugasho.',
  'footer.builtFor':
    'Yakozirwe Uganda Insurers Association Career Expo 2026.',
  'footer.note':
    "Kikozesebwa aha UIA Career Expo 2026. Plani, banna insurance n'ebikwataki kutwarira n'ebya kuyiiyisa. Titutunda policy kandi titukwega ebyahikire aha magara.",
  'footer.copyrightNote': 'Amakuru gonyini.',
}

const ach: Dictionary = {
  'nav.home': 'Gang',
  'nav.plans': 'Plani',
  'nav.compare': 'Por',
  'nav.guide': 'Ggwida',
  'nav.enrol': 'Kwiyandikisa',
  'nav.insurers': 'Jo ma miyo insurance',
  'nav.about': 'Lok ikom',
  'nav.contact': 'Lok botwa',
  'nav.more': 'Mukene',
  'nav.language': 'Leb',
  'nav.menu': 'Menu',
  'nav.openMenu': 'Yab menu',
  'nav.closeMenu': 'Lor menu',

  'common.demoStrip': 'Ngec me nyuto — pe obedo insurance me ada.',
  'common.learnMore': 'Pwony mukene',
  'common.explorePlans': 'Nen plani',
  'common.comparePlans': 'Por plani',
  'common.search': 'Yeny',
  'common.searchPlaceholder': 'Yeny plani onyo insurer',
  'common.browsePlans': 'Nen plani',
  'common.viewAllPlans': 'Nen plani weng',
  'common.openGuide': 'Yab ggwida',
  'common.prepareToEnrol': 'Ikki yin kwa kwiyandikisa',
  'common.noAccount':
    'Nen ma peya akaunta. Pe wapenyo ikom two onyo namba ID.',
  'common.languageNote':
    'Lok ikom plani ki cik dong i Lebe Mzungu.',
  'common.languageNotice':
    'Interface olokki. Lok ikom plani, gwida ki cik dong i Lebe Mzungu.',
  'common.compareCount': 'plani me poro',
  'common.imageCaption':
    'Cal ma nyuto — pe obedo clinic, insurer onyo ngat me ada.',
  'common.viewDetails': 'Nen lok mapol',
  'common.compare': 'Por',
  'common.inComparison': 'Tyeko i poro',
  'common.comparisonFull': 'Poro opong',
  'common.compareFullHint':
    'I twero poro plani nuk mo inya. Kwany acel me medo mukene.',
  'common.demoPlan': 'Plani me nyuto',

  'plan.premium': 'Premium',
  'plan.premiumMissing': 'Pe kikelo — penj insurer',
  'plan.keyBenefits': 'Ber me pire tek',
  'plan.moreBenefits': 'ber mukene ma kiketo',
  'plan.whyMatched': 'Pingo okwano',

  'demoBanner.title': 'Ngec me nyuto',
  'demoBanner.text':
    'Nying plani, jo ma miyo insurance, wel ki kube obedo nyuto. Mok kin acel ki insurer me ada kwong ka peya yin ocul.',
  'demoBanner.link': 'Kwan lok ikom ngec',

  'status.info': 'Ngec',
  'status.legend': 'Lok malen:',
  'status.explicitExcluded': 'Pe kikwoyo — kikelo malang',
  'status.unavailable': 'Ngec pe tye',
  'status.missingNote':
    'Pe ngec pe obedo ranyisi ni pe kikwoyo.',
  'a11y.skip': 'Kal i lok ma pire tek',

  'category.individual': 'Ngat acel',
  'category.family': 'Jami',
  'category.self': 'Tiyo keken',

  'home.titleA': 'Insurance me yotkom,',
  'home.titleB': 'yot.',
  'home.description':
    'Nen plani, niang gin ma kikwoyo, ki por maber. Pe imito akaunta onyo ngec me two.',
  'home.categories.title': 'Anga ma mito kwok?',
  'home.category.individual': 'Pi ngat acel',
  'home.category.family': 'Pi jami',
  'home.category.self': 'Pi jo ma tiyo keken-gi',
  'home.how.title': 'Nen, por, kwiyandikisa',
  'home.step.explore': 'Nen',
  'home.step.compare': 'Por',
  'home.step.enrol': 'Kwiyandikisa',
  'home.why.title': 'Niang kwong ka peya yin oketho',
  'home.faq.title': 'Kwong ka peya yin oyero plani',
  'home.cta.title': 'Cak ki gin ma imito kwok.',
  'home.heroBadge': 'Insurance me yotkom i Uganda',
  'home.hero.covered': 'Gin ma kikwoyo',
  'home.hero.excluded': 'Gin ma pe kikwoyo',
  'home.hero.check': 'Myero openj',
  'home.searchLabel': 'Yeny plani me insurance me yotkom',
  'home.step.exploreLink': 'Nen plani',
  'home.step.compareLink': 'Kit ma poro tiyo kwede',
  'home.step.enrolLink': 'Nen yo me kwiyandikisa',
  'home.why.plain.title': 'Lok ma yot',
  'home.why.plain.desc':
    'Lok kinyonnyolwa kama i kwede.',
  'home.why.exclusions.title': 'Gin ma pe kikwoyo malang',
  'home.why.exclusions.desc':
    'Gin ma kikwoyo, ma pe kikwoyo ki ma pe ngec papokke.',
  'home.why.contacts.title': 'Yo makwongo i insurer',
  'home.why.contacts.desc':
    'Niang nga ma i lwongo ki gin ma myero inen kwong.',
  'home.finder.noMedical': 'Pe two onyo gin ma otime i yotkom',
  'home.finder.noId': 'Pe namba ID onyo cing me cul',
  'home.finder.noSuitability':
    'Pe wanyuto ni plani romo pi yotkom mamegi',
  'home.finder.cta': 'Tiyo ki Smart Plan Finder',
  'home.cta.noAccount': 'Pe imito akaunta',
  'home.cta.fourPlans': 'Plani inya me poro',
  'home.cta.direct': 'Yo makwongo i insurer',

  'page.plans.title': 'Nen plani me insurance me yotkom',
  'page.compare.title': 'Por plani kacel',
  'page.guide.title': 'Niang lok kwong ka peya yin oyero',
  'page.enrol.title': 'Ikki yin kwong ka peya yin openyo',
  'page.insurers.title': 'Jo ma miyo insurance ki kube',
  'page.about.title': 'Ranyisi pi jo ma nongo insurance me yotkom me acel',
  'page.contact.title': 'Penjo, olok manyen ki tam',
  'page.privacy.title': 'Lok ikom privacy',
  'page.disclaimer.title': 'Lok ikom ngec',

  'footer.explore': 'Nen',
  'footer.support': 'Kony',
  'footer.legal': 'Cik',
  'footer.tagline':
    'Yo ma yot me nen insurance me yotkom i Uganda, niang gin ma kikwoyo ki nongo yo ma lubbe.',
  'footer.infoOnly': 'Ngec ki kony — pe obedo insurer',
  'footer.explorePlans': 'Nen plani',
  'footer.comparePlans': 'Por plani',
  'footer.guide': 'Ggwida me insurance',
  'footer.enrol': 'Kwiyandikisa',
  'footer.insurers': 'Jo ma miyo insurance ki kube',
  'footer.about': 'Lok ikom HealthCover',
  'footer.contact': 'Lok botwa ki tam',
  'footer.privacy': 'Lok ikom privacy',
  'footer.disclaimer': 'Lok ikom ngec',
  'footer.important': 'Ngec ma pire tek.',
  'footer.builtFor':
    'Kiketo pi Uganda Insurers Association Career Expo 2026.',
  'footer.note':
    'Nyuto pi UIA Career Expo 2026. Plani, jo ma miyo insurance ki kube obedo ngec me nyuto. Pe wacato policy onyo coko gin ma otime i yotkom.',
  'footer.copyrightNote': 'Ngec keken.',
}

export const dictionaries: Record<LanguageCode, Dictionary> = {
  en,
  lg,
  sw,
  nyn,
  ach,
}

export function translate(lang: LanguageCode, key: TranslationKey): string {
  return dictionaries[lang][key] ?? en[key]
}
