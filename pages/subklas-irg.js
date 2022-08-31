import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentIrg from "../components/Services/SubklasContentIrg";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Subklasifikasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Subklasifikasi"
          breadcrumbTextThree="Jabatan Kerja"
          breadcrumbTextFour="Irigasi dan Rawa"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentIrg />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
