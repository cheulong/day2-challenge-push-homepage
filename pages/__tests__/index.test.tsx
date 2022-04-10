import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText('Welcome to My Next App!');

    expect(heading).toBeInTheDocument();
  });
});
