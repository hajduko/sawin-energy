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
        url: '/heatpump',
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
        url: '/applications/residential',
        external: false,
      },
    ],
  },
  {
    name: 'Ingatlan',
    url: '/realestate',
    available: false,
    external: false,
  },
  {
    name: 'Toborzás',
    url: '/recruitment',
    available: false,
    external: false,
  },
];
