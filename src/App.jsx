import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-15">
        <LandingPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
