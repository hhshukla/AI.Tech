import { bannerDataProps } from './Banner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    Title: {
      value: 'Artificial Intelligence for Your Business',
    },
    Description: {
      value:
        'Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit',
    },
    ButtonText: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Contact US',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        title: 'hztl',
        target: '',
      },
    },
    Link: {
      value: {
        href: 'https://horizontal.blog',
        text: 'Read More',
        linktype: 'external',
        url: 'https://horizontal.blog',
        anchor: '',
        target: '',
      },
    },
    subText: {
      value: 'AI.Tech',
    },
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/hero-img.png?h=1000&iar=0&w=1155&hash=44AE406D881FBFABA73ABC6F56A9FED6',
        alt: 'hero-img',
        width: '1155',
        height: '1000',
      },
    },
    'BackGround-Image': {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/bg-hero.png?h=1396&iar=0&w=2482&hash=06FAA8CE1A2943091057510A9CBAD767',
        alt: 'bg-hero',
        width: '2482',
        height: '1396',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
