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
                <Nav />
                <Hero />
                <Trending />
                <Services />

                <RecentProjects />

                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Nav />
                <Subscribe />

                <ContactUs />

                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Nav />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
