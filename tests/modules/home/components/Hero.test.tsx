import { render, screen, within } from '@testing-library/react';
import Hero from '@/modules/home/sections/Hero';
 
describe('Home Page', () => {
  test('should render the main content', () => {
    render(<Hero />);

    const figure = within(screen.getByRole('figure'));
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /portfolio/i,
    });
    const description = screen.getByTestId("description");
    const profileImage = figure.getByAltText("web developer", { exact: false });
    const figCaption = figure.getByText("web developer", { exact: false });

    expect(heading).toBeInTheDocument();
    expect(description).toHaveTextContent(/web developer/i);
    expect(profileImage).toBeInTheDocument();
    expect(figCaption).toBeInTheDocument();
  });
});

