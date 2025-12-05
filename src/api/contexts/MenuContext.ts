import { createContext } from 'react';
import { IMenuItem, menu, heatpumpMenu, isolationMenu, realestateMenu } from '../../util/menu';

export const MenuContext = createContext<IMenuItem[]>(menu);

export const HeatpumpMenuContext = createContext<IMenuItem[]>(heatpumpMenu);

export const IsolationMenuContext = createContext<IMenuItem[]>(isolationMenu);

export const RealestateMenuContext = createContext<IMenuItem[]>(realestateMenu);
