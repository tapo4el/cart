import { createAction } from 'redux-actions';

import { Bike, AmountPayload } from '../types';

export const dataReceived = createAction<Bike[]>('DATA_RECEIVED');

export const removeItem = createAction<string>('REMOVE_ITEM');

export const clearCart = createAction('CLEAR_CART');

export const changeAmount = createAction<AmountPayload>('CHANGE_AMOUNT');
