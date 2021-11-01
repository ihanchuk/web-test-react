import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(()=> {
  render(<App />);
});

test('Project Info: removes info by click on trash button', () => {
    const allRemoveElements = screen.getAllByTestId("remove-note"); 
    fireEvent.click(allRemoveElements[0]);
    fireEvent.click(screen.getByRole("addNew"));
    const rederedContainers = screen.getAllByRole("project-info");
    expect(rederedContainers.length).toBe(2);
});