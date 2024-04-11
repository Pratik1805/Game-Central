import Nav from "./Components/Nav";
import { Hero, Trending } from "./Sections";

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
      </main>
    </>
  );
}

export default App;
