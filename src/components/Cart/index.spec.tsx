import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Cart from './index';
import { finalAppState, getCopy } from '../../utils/testData';

const mockStore = configureStore();

describe('Cart', () => {
    it('should be rendered correctly', () => {
        const store = mockStore(finalAppState);
        // @ts-ignore
        const component = renderer.create(<Cart store={store} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should remove item', async () => {
        const store = mockStore(getCopy(finalAppState));
        const wrapper = mount(
            <Provider store={store}><Cart /></Provider>,
        );
        await wrapper.find('.removeButton').at(0).simulate('click');
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should clear cart', async () => {
        const store = mockStore(getCopy(finalAppState));
        const wrapper = mount(
            <Provider store={store}><Cart /></Provider>,
        );
        await wrapper.find('button[data-test-id="clearCart"]').at(0).simulate('click');
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should increase amount of the item', async () => {
        const store = mockStore(getCopy(finalAppState));
        const wrapper = mount(
            <Provider store={store}><Cart /></Provider>,
        );
        await wrapper.find('button[data-test-id="increaseAmount"]').at(0).simulate('click');
        expect(store.getActions()).toMatchSnapshot();
    });
    it('should decrease amount of the item', async () => {
        const store = mockStore(getCopy(finalAppState));
        const wrapper = mount(
            <Provider store={store}><Cart /></Provider>,
        );
        await wrapper.find('button[data-test-id="decreaseAmount"]').at(0).simulate('click');
        expect(store.getActions()).toMatchSnapshot();
    });
});
