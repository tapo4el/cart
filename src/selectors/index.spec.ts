import {
    getTotalPrice,
    getCartItems,
} from './index';
import {
    cartFinalState,
    finalAppState,
} from '../utils/testData';

describe('Selectors', () => {
    it('getCartItems should work correctly', () => {
        expect(getCartItems(finalAppState)).toEqual(cartFinalState);
    });

    it('getTotalPrice should work correctly', () => {
        expect(getTotalPrice(finalAppState)).toEqual(600);
    });
});
