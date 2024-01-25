import { ContentBlockProps } from './ContentBlock';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockProps = {
  rendering: { componentName: 'CardList' },
  params: {},
  fields: {
    CardList: [
      {
        id: 'fdd99f21-993a-4e86-8ac0-33cbe20d6c5b',
        url: '/Data/ContentBlock/ContentCard-1',
        name: 'ContentCard-1',
        displayName: 'ContentCard-1',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/team-1.jpg?h=400&iar=0&w=400&hash=B31FC78317B229AD8E0188805AF86B3D',
              alt: 'team-1',
              width: '400',
              height: '400',
            },
          },
          Title: {
            value: 'Boris Johnson',
          },
          Designation: {
            value: 'Founder & CEO',
          },
          SocialMediaLinks: [],
        },
      },
      {
        id: '289acf7a-029d-4603-b7d1-48714cad4f4b',
        url: '/Data/ContentBlock/ContentCard-2',
        name: 'ContentCard-2',
        displayName: 'ContentCard-2',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/team-2.jpg?h=400&iar=0&w=400&hash=C75122FE660BE0E01844350588D591E5',
              alt: 'team-2',
              width: '400',
              height: '400',
            },
          },
          Title: {
            value: 'Adam Crew',
          },
          Designation: {
            value: 'Executive Manager',
          },
          SocialMediaLinks: [],
        },
      },
      {
        id: '590a2ec3-05bf-4d2e-91d2-135ac45176e0',
        url: '/Data/ContentBlock/ContentCard-3',
        name: 'ContentCard-3',
        displayName: 'ContentCard-3',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/team-3.jpg?h=400&iar=0&w=400&hash=5B226AF944DBEC9B6AC5E425BC562893',
              alt: '',
              width: '400',
              height: '400',
            },
          },
          Title: {
            value: 'Kate Winslet',
          },
          Designation: {
            value: 'Co Founder',
          },
          SocialMediaLinks: [],
        },
      },
      {
        id: '6a92e16f-9d62-43d5-bbb2-a1a064beca13',
        url: '/Data/ContentBlock/ContentCard-4',
        name: 'ContentCard-4',
        displayName: 'ContentCard-4',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/team-4.jpg?h=400&iar=0&w=400&hash=D58A44435E3BC65002DC09218F824987',
              alt: 'team-4',
              width: '400',
              height: '400',
            },
          },
          Title: {
            value: 'Cody Gardner',
          },
          Designation: {
            value: 'Project Manager',
          },
          SocialMediaLinks: [],
        },
      },
    ],
    SubText: {
      value: 'Our Team',
    },
    Title: {
      value: 'Meet Our Experienced Team Members',
    },
    Description: {
      value:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    EventCTA: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read More',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
