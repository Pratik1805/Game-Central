import Nav from "./Components/Nav";
import { ContactUs, Hero, RecentProjects, Services, Subscribe, Trending } from "./Sections";

function App() {
  return (
    <>
      <main className="relative ">
        <section className=" bg-primary ">
          <Nav />
        </section>
        <section className=" bg-primary padding">
          <Hero/>
        </section>
        <section className=" bg-primary padding" id='trending'>
          <Trending/>
        </section>
        <section className=" bg-primary padding" id='trending'>
          <Services/>
        </section>
        <section className=" bg-primary padding" id='trending'>
          <RecentProjects/>
        </section>
        <section className=" bg-primary padding" id='trending'>
          <Subscribe/>
        </section>
        <section className=" bg-primary padding" id='trending'>
          <ContactUs/>
        </section>
      </main>
    </>
  );
}

export default App;
