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
  expect(screen.getByRole("application")).toBeInTheDocument();
  
});


test('loads correct iframe url', () => {
  const endpoint = process.env.REACT_APP_BOOK_URL;
  render(<Book identifier="fales_io_book000012"></Book>);
  const iframe = screen.getByRole("application").getElementsByTagName("Iframe")[0].attributes.src.value;
  console.log(iframe);
});
