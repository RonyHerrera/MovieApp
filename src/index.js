import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DataContextC from './Context/DataContext';

ReactDOM.render(
  <DataContextC>
    <App />
  </DataContextC>,
  document.getElementById('root')
);