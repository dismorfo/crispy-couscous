import { screen, render } from '@testing-library/react';
import Book from './Book';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

let container = null; 

beforeEach(() => { 
  //setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => { 
  //cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('renders component without crashing', () => {
  render(<Book />, container);
});


test('loads iframe content', () => {
  render(<Book identifier="fales_io_book000012"></Book>);
  const iframe = screen.queryByTestId("iframe");
  expect(iframe).toBeInTheDocument();
});
