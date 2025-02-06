export interface Menu {
  name: string;
  url: string;
  external: boolean;
  target?: string;
  children?: Menu[];
}

export const menus: Menu[] = [
  {
    name: 'Főoldal',
    url: '/',
    external: false,
  },
  {
    name: 'Szolgáltatások',
    url: '',
    external: false,
    children: [
      {
        name: 'Napelemes rendszerek',
        url: '/',
        target: 'services',
        external: false,
      },
      {
        name: 'Hőszivattyús rendszerek',
        url: '/heatpump',
        external: false,
      },
      {
        name: 'Hőmegtartó beruházások',
        url: '/',
        target: 'services',
        external: false,
      },
      {
        name: 'Elektromos autó',
        url: '/',
        target: 'services',
        external: false,
      },
    ],
  },
  {
    name: 'Pályázatok',
    url: '',
    external: false,
    children: [
      {
        name: 'Lakossági pályázatok',
        url: '/applications/residential',
        external: false,
      },
    ],
  },
  {
    name: 'Toborzás',
    url: '/recruitment',
    external: false,
  },
];
