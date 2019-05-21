import * as React from 'react';
import 'reset-css';

import Cart from './components/Cart';

class App extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <div className="app">
                <Cart />
            </div>
        );
    }
}

export default App;
