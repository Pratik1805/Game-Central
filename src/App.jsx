import GameDescription from "./Components/GameDescription";
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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className=" bg-primary">
                  <Nav />
                  <Hero />
                  <Trending />
                  <Services />

                  <RecentProjects />

                  <Footer />
                </section>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <section className=" bg-primary">
                  <Nav />
                  <Subscribe />

                  <ContactUs />

                  <Footer />
                </section>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <section className=" bg-primary">
                  <Nav />
                  <About />
                  <Footer />
                </section>
              </>
            }
          />

          <Route
            path="/description"
            element={
              <>
                <GameDescription />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
