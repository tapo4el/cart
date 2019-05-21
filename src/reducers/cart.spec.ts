import cart from './cart';
import {
    dataReceived, removeItem, changeAmount, clearCart,
} from '../actions';
import {
    response,
    cartInitialState,
    finalAppState,
    getCopy,
} from '../utils/testData';

describe('Reducers', () => {
    it('cart should add items into the cart', () => {
        expect(cart(cartInitialState, dataReceived(response))).toEqual(finalAppState.cart);
    });

    it('removeItem should remove the item from the cart', () => {
        expect(cart(getCopy(finalAppState.cart), removeItem('1'))).toHaveLength(2);
    });

    it('changeAmount should increase amount of the item in the cart', () => {
        const state = cart(getCopy(finalAppState.cart), changeAmount({ id: '1', amount: '1' }));

        expect(state.find(el => el.id === '1').amount).toEqual('2');
    });

    it('changeAmount should decrease amount of the item in the cart', () => {
        const state = cart(getCopy(finalAppState.cart), changeAmount({ id: '1', amount: '1' }));
        expect(state.find(el => el.id === '1').amount).toEqual('2');
        const newState = cart(state, changeAmount({ id: '1', amount: '-1' }));
        expect(newState.find(el => el.id === '1').amount).toEqual('1');
    });

    it('changeAmount should not decrease amount of the item lower than 1', () => {
        const state = cart(getCopy(finalAppState.cart), changeAmount({ id: '1', amount: '-1' }));
        expect(state.find(el => el.id === '1').amount).toEqual('1');
    });

    it('clearCart should remove all items from the cart', () => {
        expect(cart(getCopy(finalAppState.cart), clearCart())).toEqual(cartInitialState);
    });
});
