import { handleActions } from 'redux-actions';

import {
    dataReceived, removeItem, clearCart, changeAmount,
} from '../actions';
import {
    Bike, DataReceivedAction, RemoveAction, ChangeAmountAction,
} from '../types';

const initialState: Bike[] = [];

export default handleActions<Bike[], any>({
    [dataReceived.toString()]: (state, { payload }: DataReceivedAction) => payload.map(elem => ({ ...elem, amount: '1' })),
    [removeItem.toString()]: (state, { payload }: RemoveAction) => state.filter(bike => bike.id !== payload),
    [clearCart.toString()]: () => initialState,
    [changeAmount.toString()]: (state, { payload }: ChangeAmountAction) => state.map((elem) => {
        const { id, amount } = payload;
        if (elem.id === id) {
            const newAmount = parseInt(elem.amount, 10) + parseInt(amount, 10);
            return {
                ...elem,
                amount: newAmount < 1 ? '1' : `${newAmount}`,
            };
        }
        return elem;
    }),
}, initialState);
