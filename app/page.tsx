import {
  About, Header, Hero, Projects, Tape, Testimonials,
} from "@/modules/home";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;
