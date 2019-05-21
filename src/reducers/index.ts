import { combineReducers } from 'redux';

import cart from './cart';
import { AppState } from '../types';

export default combineReducers<AppState>({
    cart,
});
