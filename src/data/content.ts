/**
 * Podcast landing page content.
 * Replace placeholder copy with final marketing copy as needed.
 */

export const site = {
  title: 'Young and Hungry K-12 Podcast',
  tagline: 'Shall We Coexist?',
} as const;

export const hero = {
  headline: 'Shall We Coexist?',
  subheadline:
    'A father-son podcast exploring AI, curiosity, and the future of learning.',
  ctaText: 'Listen Now',
  ctaHref: '#episodes',
  videoPlaceholder: true,
  /** Replace with actual hero illustration path */
  illustrationPlaceholder: true,
} as const;

export const whoAreWe = {
  title: 'Who are We?',
  paragraphs: [
    [
      { type: 'bold' as const, text: 'Young and Hungry' },
      { type: 'text' as const, text: ' is a podcast created by ' },
      { type: 'bold' as const, text: 'Dr. Sean Young' },
      { type: 'text' as const, text: ' and his son ' },
      { type: 'bold' as const, text: 'Maverick' },
      { type: 'text' as const, text: '. It aims to help parents, teachers, and curious minds understand and embrace artificial intelligence as a partner in learning—not a threat.' },
    ],
    [
      { type: 'text' as const, text: 'The podcast is inspired by ' },
      { type: 'bold' as const, text: 'Dr. Young\'s' },
      { type: 'text' as const, text: ' book "Stick With It" and his research on behavior change. We believe AI can empower families and educators when approached with curiosity and intention.' },
    ],
    [
      { type: 'text' as const, text: 'Our mission: to make AI accessible, human-centered, and fun. We explore real questions, share practical tips, and celebrate the joy of learning together.' },
    ],
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
      role: 'Guest',
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
  { id: 'newsletter', label: 'Newsletter', href: 'https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6' },
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
    ctaText: 'Subscribe',
  },
  linktree: {
    title: 'Found us on Linktree',
    href: 'https://linktr.ee/youngandhungryk_12',
    label: 'Visit Linktree',
  },
  copyright: '© 2026 Young and Hungry. All rights reserved.',
} as const;
