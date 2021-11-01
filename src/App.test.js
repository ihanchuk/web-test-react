import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(()=> {
  render(<App />);
});

test('renders without crash', () => {
  const dumpComponent = screen.getByText(/Form dump/i);
  expect(dumpComponent).toBeInTheDocument();
});

test('renders without crash', () => {
  const dumpComponent = screen.getByRole("addNew");
  expect(dumpComponent).toBeInTheDocument();
});

test('renders 2 project-info containers with default data', () => {
  const rederedContainers = screen.getAllByRole("project-info");
  expect(rederedContainers.length).toBe(2);
});

test('Adds new project info', () => {
  fireEvent.click(screen.getByRole("addNew"));
  fireEvent.click(screen.getByRole("addNew"));
  const rederedContainers = screen.getAllByRole("project-info");
  expect(rederedContainers.length).toBe(4);
});