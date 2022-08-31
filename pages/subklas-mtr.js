import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentMtr from "../components/Services/SubklasContentMtr";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Subklasifikasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Subklasifikasi"
          breadcrumbTextThree="Material"
          breadcrumbTextFour="Jabatan Kerja"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentMtr />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
