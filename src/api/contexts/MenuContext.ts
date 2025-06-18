import { createContext } from 'react';
import { IMenuItem, menu } from '../../util/menu';

export const MenuContext = createContext<IMenuItem[]>(menu);
