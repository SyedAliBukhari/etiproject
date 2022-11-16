import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Chooseus from "./components/Chooseus";
import About from "./components/About";
import PackagesList from "./components/PackagesList";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Slider />
      <Chooseus />
      <About />
      <PackagesList />
      <Footer />
      <Whatsapp />
    </React.Fragment>
  );
}

export default App;
