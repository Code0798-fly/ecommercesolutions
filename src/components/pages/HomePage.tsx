import { Hero } from "../Hero";
import { Services } from "../Services";
import { Skills } from "../Skills";
import { Portfolio } from "../Portfolio";
import { Contact } from "../Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
