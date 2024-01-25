import { ContentBlockTestimonialProps } from './ContentBlockTestimonial';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockTestimonialProps = {
  rendering: { componentName: 'CardList' },
  params: {},
  fields: {
    SubText: {
      value: 'Our Services',
    },
    Title: {
      value: 'Our Excellent AI Solutions for Your Business',
    },
    Description: {
      value:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    EventCTA: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Horizontal',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
    CardList: [
      {
        id: 'ba2ec412-999c-476f-8c75-917ed47c875c',
        url: '/Data/ContentBlockTestimonial/Card-1',
        name: 'Card-1',
        displayName: 'Card-1',
        fields: {
          Title: {
            value: 'Robotic Automation',
          },
          Description: {
            value:
              'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-robot-50.png?h=50&iar=0&w=50&hash=398E1B5E4855CFB3E60A9DEFA4CEEDB6',
              alt: '',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: 'e69a3abc-f68e-4400-8e9f-5dc54f17f2b2',
        url: '/Data/ContentBlockTestimonial/Card-2',
        name: 'Card-2',
        displayName: 'Card-2',
        fields: {
          Title: {
            value: 'Education & Science',
          },
          Description: {
            value:
              'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-graduation-cap-64.png?h=64&iar=0&w=64&hash=74C1EE06704D96FA698751ACD2548F33',
              alt: 'cap',
              width: '64',
              height: '64',
            },
          },
        },
      },
      {
        id: '674cf45d-9e54-44f4-9eea-8e32353a08ea',
        url: '/Data/ContentBlockTestimonial/Card-3',
        name: 'Card-3',
        displayName: 'Card-3',
        fields: {
          Title: {
            value: 'Machine learning',
          },
          Description: {
            value:
              'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-power-32.png?h=32&iar=0&w=32&hash=029AE4D65CCDC1BB85C4D0648D4682DE',
              alt: '',
              width: '32',
              height: '32',
            },
          },
        },
      },
      {
        id: '2ea4d134-2ea3-4501-86ef-6533bcec24c6',
        url: '/Data/ContentBlockTestimonial/Card-4',
        name: 'Card-4',
        displayName: 'Card-4',
        fields: {
          Title: {
            value: 'Predictive Analysis',
          },
          Description: {
            value:
              'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-brain-64.png?h=64&iar=0&w=64&hash=2678A5520ECFF15D7FA28D9BEA1B51B5',
              alt: 'Brain',
              width: '64',
              height: '64',
            },
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
