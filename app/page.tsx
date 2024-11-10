import {
  About, Contact, Header, Hero, Projects, Tape, Testimonials,
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
      <Contact />
    </main>
  );
};

export default HomePage;
