import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import StrukturOrganisasiContent from "../components/AboutUs/StrukturOrganisasiContent";

class StrukturOrganisasi extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Struktur Organisasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Profil"
          breadcrumbTextThree="Struktur Organisasi"
          breadcrumbUrl="/"
          bgImage="banner-bg-img1"
        />

        <StrukturOrganisasiContent />

        <Footer />
      </>
    );
  }
}

export default StrukturOrganisasi;
