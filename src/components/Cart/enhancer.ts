import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState, Bike, AmountPayload } from '../../types';
import {
    getCartItems, getTotalPrice,
} from '../../selectors';
import { removeItem, clearCart, changeAmount } from '../../actions';

const mapStateToProps = (state: AppState): StateProps => ({
    items: getCartItems(state),
    totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removeItem: (payload: string) => dispatch(removeItem(payload)),
    clearCart: () => dispatch(clearCart()),
    changeAmount: (payload: AmountPayload) => dispatch(changeAmount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps);

interface StateProps { items: Bike[]; totalPrice: number }
export type CartProps = StateProps & ReturnType<typeof mapDispatchToProps>
