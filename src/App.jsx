import Nav from "./Components/Nav";

import {
  About,
  ContactUs,
  Footer,
  Hero,
  RecentProjects,
  Services,
  Subscribe,
  Trending,
} from "./Sections";
function App() {
  return (
    <>
      <main className="relative ">
        <section className=" bg-primary ">
          <Nav />
        </section>
        <section className=" bg-primary padding" id="home">
          <Hero />
        </section>

        <section className=" bg-primary padding" id="trending">
          <Trending />
        </section>

        <section className=" bg-primary padding" id="trending">
          <Services />
        </section>
        <section className=" bg-primary padding" id="projects">
          <RecentProjects />
        </section>
        <section className=" bg-primary padding" id="trending">
          <Subscribe />
        </section>
        <section className=" bg-primary padding" id="trending">
          <ContactUs />
        </section>
        <section className=" bg-primary padding pb-8">
          <Footer />
        </section>

        {/* <About/> */}
      </main>
    </>
  );
}

export default App;
