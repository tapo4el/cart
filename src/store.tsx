import {
    createStore,
    Action,
    Store,
} from 'redux';

import reducers from './reducers';
import { dataReceived } from './actions';
import { Bike, AppState } from './types';
import { BikesAPI } from './utils/api';

export default function configureStore(getUsers: BikesAPI): Store<AppState> {
    const store = createStore(reducers);
    getUsers().then((data: Bike[]): Action => store.dispatch(dataReceived(data)));
    return store;
}
