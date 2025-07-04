import { test, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
  return <button onClick={onClick}>{children}</button>;
}

test("el botón muestra el texto y responde al click", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Haz click</Button>);
  const btn = screen.getByText(/haz click/i);
  fireEvent.click(btn);
  expect(handleClick).toHaveBeenCalled();
});