import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './components/game.js';
import { store } from './redux/store';

// ========================================

const render = () => {
    ReactDOM.render(
      <Game
        store={ store }
      />,
      document.getElementById('root')
    );
};

store.subscribe(render);
render();