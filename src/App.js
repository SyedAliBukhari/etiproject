import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Chooseus from "./components/Chooseus";
import About from "./components/About";
import PackagesList from "./components/PackagesList";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Slider />
      <Chooseus />
      <About />
      <PackagesList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
