import { HeaderProps } from './Header';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeaderProps = {
  rendering: { componentName: 'Header' },
  params: {},
  fields: {
    LogoContent: {
      value: 'AI.Tech',
    },
    NavigationLinks: [
      {
        id: '880319ea-307c-424a-ba7c-10a27198ff68',
        url: '/Data/Navbar/NavigationsLink-0',
        name: 'NavigationsLink-0',
        displayName: 'NavigationsLink-0',
        fields: {
          Links: {
            value: {
              text: 'Home',
              anchor: '/',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{3B06D8C4-203D-4FBD-A364-831D56EDF16A}',
              href: '/',
            },
          },
        },
      },
      {
        id: '9b167cd9-358e-4e4b-bed0-e2e094bdad08',
        url: '/Data/Navbar/NavigationsLink-1',
        name: 'NavigationsLink-1',
        displayName: 'NavigationsLink-1',
        fields: {
          Links: {
            value: {
              text: 'About',
              anchor: '/about',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{A297042F-04E2-4AF6-A30D-C92B50E81B28}',
              href: '/About',
            },
          },
        },
      },
      {
        id: '91948e11-1244-4a5c-9b74-3d9899a49367',
        url: '/Data/Navbar/NavigationsLink-2',
        name: 'NavigationsLink-2',
        displayName: 'NavigationsLink-2',
        fields: {
          Links: {
            value: {
              text: 'Contact',
              anchor: '/contact',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{CD9842D4-E7FF-4B89-8680-8CAAD5F0370C}',
              href: '/Contact',
            },
          },
        },
      },
      {
        id: 'ea5dd382-8e46-40a3-9bd9-60afa7bd7f2e',
        url: '/Data/Navbar/NavigationsLink-3',
        name: 'NavigationsLink-3',
        displayName: 'NavigationsLink-3',
        fields: {
          Links: {
            value: {
              text: 'Projects',
              anchor: '/projects',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{339E4CC0-48A7-4969-BE4A-24982F647E05}',
              href: '/Projects',
            },
          },
        },
      },
      {
        id: '847d9c93-e48b-45c5-94d7-2b5b2b9c299c',
        url: '/Data/Navbar/NavigationsLink-4',
        name: 'NavigationsLink-4',
        displayName: 'NavigationsLink-4',
        fields: {
          Links: {
            value: {
              text: 'Services',
              anchor: '/services',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{0C90D64F-61A3-4B19-B34A-8D188C3E6D1E}',
              href: '/Services',
            },
          },
        },
      },
    ],
    MenuIcon: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/Navbar-toggle.svg?iar=0&hash=9EF5737EC497B490E51A4A82B4193C7A',
        alt: 'navbar toggle',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
