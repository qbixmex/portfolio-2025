const Hero = () => {
  return (
    <section id="hero-profile">
      <h1>Daniel&apos;s Portfolio</h1>
      <p data-testid="description">Web developer with 10 experience years and tab advocate, finding unmatched efficiency in Vim&apos;s keystroke commands flexibility for personal viewing preferences. This extends to my support for static typing, where its early error detection ensures cleaner code, and my preference for dark mode, which eases long coding sessions by reducing eye strain.</p>
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./image" alt="Daniel web developer" />
        <figcaption>Daniel web developer</figcaption>
      </figure>
    </section>
  );
};

export default Hero;
