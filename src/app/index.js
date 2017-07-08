import "babel-polyfill";
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducer/index';
import { Provider } from 'react-redux';
import ChatApp from './component/ChatApp';


const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById('root')
);