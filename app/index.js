import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import Game from './components/game.js';
import { store } from './redux/store';

// ========================================

const render = () => {
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();