export interface IMenuItem {
  name: string;
  url: string;
  external: boolean;
  available: boolean;
  target?: string;
  children?: IMenuItem[];
}

export const menu: IMenuItem[] = [
  {
    name: 'Főoldal',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Szolgáltatások',
    url: '',
    external: false,
    available: true,
    children: [
      {
        name: 'Napelemes rendszerek',
        url: '/',
        available: true,
        target: 'services',
        external: false,
      },
      {
        name: 'Hőszivattyús rendszerek',
        url: '/hoszivattyu',
        available: true,
        external: false,
      },
      {
        name: 'Hőmegtartó beruházások',
        url: '/',
        available: true,
        target: 'services',
        external: false,
      },
      {
        name: 'Elektromos autó',
        url: '/',
        available: true,
        target: 'services',
        external: false,
      },
    ],
  },
  {
    name: 'Pályázatok',
    url: '',
    available: true,
    external: false,
    children: [
      {
        name: 'Lakossági pályázatok',
        available: true,
        url: '/palyazatok/lakossagi',
        external: false,
      },
    ],
  },
  {
    name: 'Toborzás',
    url: '/toborzas',
    available: true,
    external: false,
  },
  {
    name: 'Ingatlan',
    url: '/ingatlan/eladoknak',
    available: true,
    external: false,
  },
];

export const heatpumpMenu: IMenuItem[] = [
  {
    name: 'Főoldal',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Hőszivattyú',
    url: '/hoszivattyu',
    available: true,
    external: false,
  },
  // {
  //   name: 'Termékeink',
  //   url: '/hoszivattyu/termekek',
  //   available: true,
  //   external: false,
  // },
];

export const isolationMenu: IMenuItem[] = [
  {
    name: 'Főoldal',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Hőszivattyú',
    url: '/hoszigeteles',
    available: true,
    external: false,
  },
  {
    name: 'Termékeink',
    url: '/hoszigeteles/termekek',
    available: true,
    external: false,
  },
];

export const realestateMenu: IMenuItem[] = [
  {
    name: 'Főoldal',
    url: '/',
    available: true,
    external: false,
  },
  {
    name: 'Eladóknak',
    url: '/ingatlan/eladoknak',
    available: true,
    external: false,
  },
  {
    name: 'Ingatlanosoknak',
    url: '/ingatlan/ingatlanosoknak',
    available: true,
    external: false,
  },
];
