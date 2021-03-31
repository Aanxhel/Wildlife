import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import InfoText from "./components/InfoText.js";




function JournalApp() {
  return (
    <div>

      <Header />

      <div class="container">

        <div>
          <InfoText />
          <br></br>
          <InfoText />
          <br></br>
          <InfoText />

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default JournalApp;
