import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/MainPage/MainBanner";
import Footer from "../components/Layouts/Footer";
import DaftarSubklas from "../components/MainPage/DaftarSubklas";
import ContentBiaya from "../components/Pricing/ContentBiaya";
import TentangKamiContent from "../components/AboutUs/TentangKamiContent";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        <DaftarSubklas />

        <ContentBiaya />

        <TentangKamiContent />

        <Footer />
      </>
    );
  }
}

export default Index;
