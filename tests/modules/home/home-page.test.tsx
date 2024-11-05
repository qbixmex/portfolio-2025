import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
 
describe('Home Page', () => {
  test('should render content properly', () => {
    render(<HomePage />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
