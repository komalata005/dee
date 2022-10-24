module.exports = {
  siteTitle: 'Komal Ata',
  siteDescription:
    'Komal Ata is Software Developer, based in Pakistan, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Komal Ata, KomalAta, software engineer, UI/UX, UI developer, product designer, graphic designer, web developer, javascript, HTML, java, Sir Syed University Of Engineering & Technology, Karachi, Pakistan',
  siteUrl: 'https://github.com/komalata005',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Komal Ata',
  location: 'Karachi, Pakistan',
  email: 'komal.ata005@gmail.com',
  github: 'https://github.com/komalata005',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/komalata005',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/komal-ata-8a8b0a159/',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/komalata',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/yashitanamdeo',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
