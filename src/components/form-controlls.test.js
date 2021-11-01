import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(()=> {
  render(<App />);
});

test('Form Controlls: save and cancel buttons should not be visible with default data', () => {
    const FC = screen.getByTestId("form-controlls"); 
    expect(FC).toBeInTheDocument();
});

test('Form Controlls: should show warning when there is Notes in form', () => {
    const allRemoveElements = screen.getAllByTestId("remove-note"); 
    fireEvent.click(allRemoveElements[0]);
    fireEvent.click(allRemoveElements[0]);
    expect(screen.getByText(/Please add some notes or Revert form/i)).toBeTruthy();
});

test('Form Controlls: form submission should be disable right after adding new Note', () => {
    const addComponent = screen.getByRole("addNew");
    fireEvent.click(addComponent);
    expect(screen.getByText(/Send Data/i)).toHaveAttribute('disabled');
});

test('Form Controlls: Cancel button should be active right after adding new Note', () => {
    const addComponent = screen.getByRole("addNew");
    fireEvent.click(addComponent);
    expect(screen.getByText(/Cancel/i)).not.toBeDisabled();;
});