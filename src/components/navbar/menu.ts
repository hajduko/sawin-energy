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
        name: 'Hőmegtartó beruházások',
        url: '/',
        target: 'services',
        external: false,
      },
      {
        name: 'Hőszivattyú',
        url: '/heatpump',
        external: false,
      },
    ],
  },
  {
    name: 'Termékek',
    url: 'https://www.sawinenergy.hu',
    external: true,
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
];
