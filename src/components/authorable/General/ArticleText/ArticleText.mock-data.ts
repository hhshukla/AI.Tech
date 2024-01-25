import { ArticleTextProps } from './ArticleText';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleTextProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    SubText: {
      value: 'Why Choose Us',
    },
    Description: {
      value:
        'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor',
    },
    ServiceLinks: [
      {
        id: 'aeb785d1-ceb2-4d02-9ead-07cfda1df45c',
        url: '/Data/ArticleText/Service-1',
        name: 'Service-1',
        displayName: 'Service-1',
        fields: {
          Text: {
            value: 'Diam dolor diam ipsum et tempor sit',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: '651d12c2-2d2f-4fa5-b81a-1dc9b9726cd1',
        url: '/Data/ArticleText/Service-2',
        name: 'Service-2',
        displayName: 'Service-2',
        fields: {
          Text: {
            value: 'Diam dolor diam ipsum et tempor sit',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: 'd6538aeb-ef47-44a1-abf4-b93b61d11be2',
        url: '/Data/ArticleText/Service-3',
        name: 'Service-3',
        displayName: 'Service-3',
        fields: {
          Text: {
            value: 'Diam dolor diam ipsum et tempor sit',
          },
          IconImage: {
            value: {},
          },
        },
      },
    ],
    Informations: [
      {
        id: '3cf6aeeb-44dc-4476-a3ba-f3c795a50ddf',
        url: '/Data/ArticleText/Information-1',
        name: 'Information-1',
        displayName: 'Information-1',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-group-of-business-team-leading-for-sales-and-finance-24.png?h=24&iar=0&w=24&hash=B801DD8C425FD06E36A685D73E721CC4',
              alt: 'clients',
              width: '24',
              height: '24',
            },
          },
          Number: {
            value: 9999,
          },
          SubDescription: {
            value: 'Happy Clients',
          },
        },
      },
      {
        id: 'c5ddd5e1-a668-48e3-9814-e925b4edca2d',
        url: '/Data/ArticleText/Information-2',
        name: 'Information-2',
        displayName: 'Information-2',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-check-50.png?h=50&iar=0&w=50&hash=C1F097D10870C4D71A78FDA70A395DEA',
              alt: 'check',
              width: '50',
              height: '50',
            },
          },
          Number: {
            value: 9999,
          },
          SubDescription: {
            value: 'Project Complete',
          },
        },
      },
    ],
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/feature.png?h=535&iar=0&w=599&hash=D8678275303D33FCA14224F0328D576F',
        alt: 'ArticleText-Image',
        width: '599',
        height: '535',
      },
    },
    Title: {
      value: "We're Best in AI Industry with 10 Years of Experience",
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
