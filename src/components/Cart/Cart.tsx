import * as React from 'react';

import './styles.less';

import { CartProps } from './enhancer';
import { Bike } from '../../types';

class Cart extends React.PureComponent<CartProps, null> {
    renderItem(elem: Bike): React.ReactNode {
        const {
            id, company, model, price, picture, description, amount,
        } = elem;
        const { removeItem, changeAmount } = this.props;

        return (
            <div className="item" key={id}>
                <div className="image">
                    <img src={picture} alt={model} />
                </div>
                <div className="content">
                    <div className="header">{model}</div>
                    <div className="description">{`Description: ${description}`}</div>
                    <div className="company">{`Company: ${company}`}</div>
                    <div className="price">{`Price: ${price} $`}</div>
                    <div className="amount">
                        Amount:
                        <button type="button" onClick={() => changeAmount({ id, amount: '1' })}>+</button>
                        <i>{amount}</i>
                        <button type="button" onClick={() => changeAmount({ id, amount: '-1' })}>-</button>
                    </div>
                    <div className="footer">
                        <button
                            type="button"
                            className="removeButton"
                            onClick={() => removeItem(id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    render(): React.ReactNode {
        const { items, totalPrice, clearCart } = this.props;

        return (
            <div className="cart">
                <div className="header">Cart</div>
                <div className="totalPrice">{`Total price: ${totalPrice} $`}</div>
                { items.map(elem => this.renderItem(elem))}
                <div className="footer">
                    <button
                        type="button"
                        className="removeButton"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        );
    }
}

export default Cart;
