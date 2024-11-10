import {
  About, Contact, Footer, Header,
  Hero, Projects, Tape, Testimonials,
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
      <Footer />
    </main>
  );
};

export default HomePage;
