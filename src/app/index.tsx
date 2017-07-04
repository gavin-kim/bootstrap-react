import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ChatApp } from './components/ChatApp';
import reducers from './reducers/reducers';



let store = createStore(reducers);

render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById('root')
);