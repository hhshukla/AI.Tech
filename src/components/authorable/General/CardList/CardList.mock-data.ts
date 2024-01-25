import { CardListProps } from './CardList';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: CardListProps = {
  rendering: { componentName: 'CardList' },
  params: {},
  fields: {
    SubText: {
      value: 'Case Study',
    },
    Title: {
      value: 'Explore Our Recent AI Case Studies',
    },
    Cards: [
      {
        id: '1808e7a7-5e22-41c2-b77e-1590c4ca4df5',
        url: '/Data/CardList/Card-1',
        name: 'Card-1',
        displayName: 'Card-1',
        fields: {
          SubText: {
            value: 'Robotics Automation',
          },
          Title: {
            value:
              'Lorem elitr magna stet eirmod labore amet labore clita                             ',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Horizontal',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/project-1.jpg?h=700&iar=0&w=600&hash=C2D1D27EC5A4E00264086D16C8E93B3F',
              alt: 'card-1',
              width: '600',
              height: '700',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-arrow-50.png?h=50&iar=0&w=50&hash=8BEE0CAC991D9B1300C2A43019F8C769',
              alt: 'link-1',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: 'c7df48ab-c4f1-4edb-9e05-9b0279f6e456',
        url: '/Data/CardList/Card-2',
        name: 'Card-2',
        displayName: 'Card-2',
        fields: {
          SubText: {
            value: 'Machine learning',
          },
          Title: {
            value:
              'Lorem elitr magna stet eirmod labore amet labore clita                             ',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Horizontal',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/project-2.jpg?h=700&iar=0&w=600&hash=4DF975D2C50CB4239F877629E109A830',
              alt: '',
              width: '600',
              height: '700',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-arrow-50.png?h=50&iar=0&w=50&hash=8BEE0CAC991D9B1300C2A43019F8C769',
              alt: 'icon-2',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: '94bd18d3-4e69-4fa3-8ded-3e2c3a72f8e7',
        url: '/Data/CardList/Card-3',
        name: 'Card-3',
        displayName: 'Card-3',
        fields: {
          SubText: {
            value: 'Predictive Analysis',
          },
          Title: {
            value:
              'Lorem elitr magna stet eirmod labore amet labore clita                             ',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Horizontal',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/project-3.jpg?h=700&iar=0&w=600&hash=5363C62E11E16C6EFED49F972B93ACD3',
              alt: 'image-3',
              width: '600',
              height: '700',
            },
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-arrow-50.png?h=50&iar=0&w=50&hash=8BEE0CAC991D9B1300C2A43019F8C769',
              alt: 'icon-3',
              width: '50',
              height: '50',
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
