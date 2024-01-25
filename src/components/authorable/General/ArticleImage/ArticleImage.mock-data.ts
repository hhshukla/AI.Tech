import { ArticleImageProps } from './ArticleImage';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleImageProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/about-img.jpg?h=696&iar=0&w=696&hash=39AF7797A3552BA9A29F89DE89736466',
        alt: 'about',
        width: '696',
        height: '696',
      },
    },
    subText: {
      value: 'About Us',
    },
    Title: {
      value: 'We Make Your Business Smarter with Artificial Intelligence',
    },
    Description: {
      value:
        'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet\nAliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor',
    },
    CTAbutton: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read More',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
    SocialMediaLinks: [
      {
        id: 'eed32bd4-e1f3-43f7-bcad-b48ce25638d3',
        url: '/Data/ArticleImage/SocialMediaLink-1',
        name: 'SocialMediaLink-1',
        displayName: 'SocialMediaLink-1',
        fields: {
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-facebook-50.png?h=50&iar=0&w=50&hash=67CF0667B743C55C45B9C58E1C0506D4',
              alt: '',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: '821e2c93-aa97-42ad-a254-df0563e2a217',
        url: '/Data/ArticleImage/SocialMediaLink-2',
        name: 'SocialMediaLink-2',
        displayName: 'SocialMediaLink-2',
        fields: {
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-instagram-50.png?h=50&iar=0&w=50&hash=175E1D6D717CF4E832D25705B95FBFBC',
              alt: '',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: 'a051642f-c584-4430-abf6-fc082c3112ca',
        url: '/Data/ArticleImage/SocialMediaLink-3',
        name: 'SocialMediaLink-3',
        displayName: 'SocialMediaLink-3',
        fields: {
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-linkedin-24.png?h=24&iar=0&w=24&hash=F137605AA60A613B0A2532230C11D5FE',
              alt: '',
              width: '24',
              height: '24',
            },
          },
        },
      },
      {
        id: '06a7a24b-86a5-45d2-a7a9-771ce6bb79ca',
        url: '/Data/ArticleImage/SocialMediaLink-4',
        name: 'SocialMediaLink-4',
        displayName: 'SocialMediaLink-4',
        fields: {
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-twitter-50.png?h=50&iar=0&w=50&hash=EC7EDEB94DF1F57B8635099CB5AEAF26',
              alt: '',
              width: '50',
              height: '50',
            },
          },
        },
      },
    ],
    Services: [
      {
        id: 'a4892352-ef4b-45fc-9443-64b839ad7c76',
        url: '/Data/ArticleImage/Service-1',
        name: 'Service-1',
        displayName: 'Service-1',
        fields: {
          Text: {
            value: 'Award Winning',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: '11d16b1e-5259-4996-908b-1042ee7e7dd2',
        url: '/Data/ArticleImage/Service-2',
        name: 'Service-2',
        displayName: 'Service-2',
        fields: {
          Text: {
            value: '24/7 Support',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: 'bb474538-176d-4ec4-8808-471c60cafe5f',
        url: '/Data/ArticleImage/Service-3',
        name: 'Service-3',
        displayName: 'Service-3',
        fields: {
          Text: {
            value: 'Professional Staff',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: '86659413-4d5b-4ac6-bd61-07040bf569c5',
        url: '/Data/ArticleImage/Service-4',
        name: 'Service-4',
        displayName: 'Service-4',
        fields: {
          Text: {
            value: 'Fair Prices',
          },
          IconImage: {
            value: {},
          },
        },
      },
    ],
    'Background-Image': {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/bg-about-img.png?h=600&iar=0&w=600&hash=827B87E8D6D5C556865BA69B4C6701A5',
        alt: 'bg-img-about',
        width: '600',
        height: '600',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
