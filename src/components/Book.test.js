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
  render(<Book identifier="fales_io_book000012"></Book>);
  const iframe = screen.getByTitle("Book title");
  expect(iframe).toBeInTheDocument();
});


test('loads correct iframe url', () => {
  const endpoint = process.env.REACT_APP_BOOK_URL;
  render(<Book identifier="fales_io_book000012"></Book>);
  const iframe = screen.getByTitle("Book title");
  expect(iframe.src).toBe(`${endpoint}/fales_io_book000012/1`)
});
