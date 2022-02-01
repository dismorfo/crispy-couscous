import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import './sass/style.scss';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App 
        label='Indian Ocean Digital Collection' 
      />
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);