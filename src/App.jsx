import Nav from "./Components/Nav";
import { Hero, Services, Trending } from "./Sections";

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
      </main>
    </>
  );
}

export default App;
