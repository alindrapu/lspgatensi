import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import FormTuk from "../components/Tuk/FormTuk";

class PermohonanTuk extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageBanner
          pageTitle="Permohonan TUK"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Layanan"
          breadcrumbTextThree="Permohonan TUK"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />
        <FormTuk />

        <Footer />
      </>
    );
  }
}

export default PermohonanTuk;
