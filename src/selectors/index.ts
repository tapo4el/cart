import { createSelector } from 'reselect';

import { AppState, Bike } from '../types';

const appState = (state: AppState): AppState => state;

export const getCartItems = createSelector(
    appState,
    ({ cart }): Bike[] => cart,
);

export const getTotalPrice = createSelector(
    appState,
    getCartItems,
    ({ cart }): number => cart.reduce((acc, elem) => acc + parseInt(elem.price, 10) * parseInt(elem.amount, 10), 0),
);
