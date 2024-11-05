import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';
 
describe('Home Page', () => {
  it('should render heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', { level: 1 });
    const link = screen.getByRole('link');

    expect(heading).toHaveTextContent(/home/i);
    expect(link).toHaveTextContent(/about/i);
  });
});
