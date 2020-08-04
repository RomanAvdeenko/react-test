import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import App from './App'

const initState = [
    'Группа крови',
    'Кукушка'
]

const playlist = (state = initState, action) => {
    if (action.type === 'ADD_TRACK')
        return [
            ...state,
            action.payload
        ]
    return state
}

const store = createStore(playlist)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

