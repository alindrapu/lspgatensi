import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TentangKamiContent from "../components/AboutUs/TentangKamiContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Testimonial from "../components/Common/Testimonial";
import TeamMember from "../components/Common/TeamMember";
import Customers from "../components/Common/Customers";
import Footer from "../components/Layouts/Footer";
import Linimasa from "../components/AboutUs/Linimasa";
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

        {/* <TentangKamiContent />

        <Linimasa /> */}

        <StrukturOrganisasiContent />

        {/* <div className="pb-100">
          <GetStartedProject />
        </div>

        <FunFacts /> */}

        {/* <Testimonial /> */}

        {/* <TeamMember /> */}

        {/* <Customers /> */}

        <Footer />
      </>
    );
  }
}

export default StrukturOrganisasi;
