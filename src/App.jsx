import Nav from "./Componenes/Nav";
import { Hero } from "./Sections";

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
      </main>
    </>
  );
}

export default App;
