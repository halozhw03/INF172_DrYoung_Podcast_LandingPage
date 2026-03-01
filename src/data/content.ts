/**
 * Podcast landing page content.
 * Replace placeholder copy with final marketing copy as needed.
 */

export const site = {
  title: 'Young and Hungry K-12 Podcast',
  tagline: 'Shall We Coexist with AI?',
} as const;

export const hero = {
  headline: 'Shall We Coexist with AI?',
  subheadline:
    'A podcast exploring how AI and education can grow together — for parents, teachers, and the next generation.',
  ctaText: 'Join the waitlist',
  ctaHref: 'https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6',
  /** Replace with actual hero illustration path */
  illustrationPlaceholder: true,
} as const;

export const whoAreWe = {
  title: 'Who are We?',
  paragraphs: [
    [
      { type: 'bold' as const, text: 'Young and Hungry' },
      { type: 'text' as const, text: ' is a podcast created to help people develop the psychology and practical tools needed to work with AI today in preparation for the future. The podcast draws from ' },
      { type: 'link' as const, text: 'Dr. Young', href: 'https://seanyoungphd.com/' },
      { type: 'text' as const, text: '\'s book ' },
      { type: 'italic' as const, text: 'Stick With It' },
      { type: 'text' as const, text: ', which highlights persistence and adaptability as essential skills for navigating uncertainty in an increasingly AI-driven world. While many people fear that AI will take over their jobs, the podcast promotes a mindset that encourages individuals to see AI as a co-worker or tool rather than a threat.' },
    ],
  ],
} as const;

export const whyAiNowSection = {
  title: 'Why Guided AI Exposure Matters Now',
  intro:
    'Children are already using AI. The question is not whether they should encounter it, but whether adults help them use it safely, critically, and productively.',
  cards: [
    {
      id: 'sharedJob',
      iconClass: 'fa-solid fa-brain',
      title: 'A Shared Job for Home and School',
      detail:
        'Parents shape values and boundaries. Teachers shape academic integrity and learning habits. When guidance is aligned, children learn to use AI as a tool, not a shortcut.',
      featured: true,
    },
    {
      id: 'usageReality',
      iconClass: 'fa-solid fa-chart-line',
      stat: '70%',
      title: 'Teens Have Already Tried Generative AI',
      detail:
        'In 2024, seven in ten U.S. teens reported using at least one type of generative AI tool.',
    },
    {
      id: 'communicationGap',
      iconClass: 'fa-solid fa-triangle-exclamation',
      stat: '83%',
      title: 'Families Report Limited School Guidance',
      detail:
        'Most parents say schools have not clearly communicated AI policies, creating mixed expectations for students.',
    },
    {
      id: 'teacherAdoption',
      iconClass: 'fa-solid fa-chalkboard-user',
      stat: '6 in 10',
      title: 'Teachers Are Already Using AI',
      detail:
        'Gallup reports most U.S. teachers used AI tools in the 2024–2025 school year, with weekly users saving about 5.9 hours.',
    },
    {
      id: 'verificationHabits',
      iconClass: 'fa-solid fa-magnifying-glass',
      stat: '55% vs 43%',
      title: 'Classroom Discussion Improves Verification Habits',
      detail:
        'Teens who discuss AI in class are more likely to check AI-generated information before trusting it.',
    },
  ],
  sources: [
    {
      label: 'Common Sense Media (2024): Teens, Parents, and Generative AI',
      href: 'https://www.commonsensemedia.org/research/teen-and-parent-perspectives-on-generative-ai',
    },
    {
      label: 'Common Sense Media (2024): Findings Summary',
      href: 'https://www.commonsensemedia.org/press-releases/new-report-reveals-what-teens-and-parents-think-about-generative-ai-in-education',
    },
    {
      label: 'Gallup + Walton Family Foundation (2025)',
      href: 'https://www.gallup.com/education/655768/teachers-say-ai-saves-time-but-few-use-weekly.aspx',
    },
    {
      label: 'UNESCO (2023): Guidance for Generative AI in Education',
      href: 'https://www.unesco.org/en/articles/unesco-releases-first-global-guidance-generative-ai-education-and-research',
    },
  ],
} as const;

export const empowerCards = {
  title: 'How the Podcast Empowers Listeners',
  frontCta: 'Click to see more',
  cards: [
    {
      id: 'parents',
      frontTitle: 'Parents',
      frontIconClass: 'fa-solid fa-hands-holding-child',
      backTitle: 'For Parents',
      backBullets: [
        'Understand what AI is and how their children may be using it',
        'Learn how to set healthy rules for AI use at home',
        'Know the difference between helpful AI use and harmful shortcuts',
        'Gain confidence in supporting their child\'s learning in an AI-driven world',
      ],
    },
    {
      id: 'teachers',
      frontTitle: 'Teachers',
      frontIconClass: 'fa-solid fa-person-chalkboard',
      backTitle: 'For Teachers',
      backBullets: [
        'Get ideas for assignments that promote real learning, not shortcuts',
        'Feel more confident using and talking about AI in the classroom',
        'Learn how to guide students to use AI responsibly as a learning tool',
        'Stay prepared for how AI is changing education',
      ],
    },
  ],
} as const;

export const hosts = {
  title: 'Who is on the podcast',
  profiles: [
    {
      id: 'sean',
      name: 'Dr. Sean Young',
      role: 'Host & Co-creator',
      description: [
        'PhD in Psychology, MS in Health Services Research',
        'Professor at UC Irvine',
      ],
      detailedDescription: [
        'Sean Young, PhD, MS, is the Executive Director of the University of California Institute for Prediction Technology, the Center for Digital Behavior, a Medical School and Informatics Professor with the UCI Departments of Emergency Medicine and Informatics, and the #1 Wall Street Journal and International Best-Selling author of Stick With It.',
        'I received my PhD in Psychology and Master\'s degree in Health Services Research from Stanford University, worked in technology and user behavior/human factors at NASA Ames Research Center and Cisco Systems, taught at the Stanford University Graduate School of Business, and have advised various companies and start-ups. I am an internationally-recognized speaker, having presented at forums such as the European Parliament, mHealth Conference, World Congress, as well as corporations, academic institutions, and organizations. I was a study committee member for the National Academies of Sciences, Engineering, and Medicine (NASEM) on STI prevention and control, and am currently a board member within NASEM\'s broader Division of Health and Medicine.',
        'I study digital behavior and prediction technology, or how and why people use social media, mobile apps, and wearable devices. I help people and businesses apply this knowledge to predict what people will do in the future (in areas like health, medicine, politics, and business) and to change what they will do in the future.',
        'I have a blog called BlackBoxPhd.com where I interview experts in areas related to behavior to teach people how to improve their lives and work, and have a podcast on Audible.com called Sean Young, PhD on this topic.',
      ],
      imagePlaceholder: false,
    },
    {
      id: 'maverick',
      name: 'Maverick',
      role: 'Co-host',
      description: [
        "Dr. Young's son",
        'Future innovator with boundless curiosity and energy',
      ],
      imagePlaceholder: true,
    },
    {
      id: 'melody',
      name: 'Melody',
      role: 'Co-host',
      description: [
        "Dr. Young's daughter",
        'Loves stories that spark imagination and inspiration',
      ],
      imagePlaceholder: true,
    },
  ],
} as const;

export const episodes = {
  title: 'Latest Three Episodes',
  items: [
    {
      id: 'ep1',
      title: 'Placeholder 1',
      date: 'MM/DD/YYYY',
      linkPlaceholder: '#',
    },
    {
      id: 'ep2',
      title: 'Placeholder 2',
      date: 'MM/DD/YYYY',
      linkPlaceholder: '#',
    },
    {
      id: 'ep3',
      title: 'Placeholder 3',
      date: 'MM/DD/YYYY',
      linkPlaceholder: '#',
    },
  ],
} as const;

export const headerIcons = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/youngandhungryk_12' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@youngandhungryk_12' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com/yandhshow' },
] as const;

export const footer = {
  socialTitle: 'Listen & Follow',
  social: [
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/youngandhungryk_12' },
    { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@youngandhungryk_12' },
    { id: 'x', label: 'X (Twitter)', href: 'https://x.com/yandhshow' },
    { id: 'newsletter', label: 'Newsletter', href: 'https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6' },
  ],
  newsletter: {
    title: 'Stay in the loop',
    description: 'Get episode updates and AI tips for parents and teachers.',
    placeholder: 'your@email.com',
    ctaText: 'Join Newsletter',
  },
  linktree: {
    title: 'All Links in One Place',
    description: 'Access all our social media, episodes, and resources.',
    href: 'https://linktr.ee/youngandhungryk_12',
    label: 'Visit Linktree',
  },
  copyright: '© 2026 Young and Hungry. All rights reserved.',
} as const;
