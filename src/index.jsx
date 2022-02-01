import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './sass/style.scss';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App 
        label='Indian Ocean Digital Collection' 
      />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
