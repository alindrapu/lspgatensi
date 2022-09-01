import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Hubungi Kami"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Kontak"
          breadcrumbTextThree="Hubungi Kami"
          breadcrumbUrl="/"
          bgImage="banner-bg-img6"
        />

        <ContactInfo />

        <ContactForm />

        {/* <div className="ptb-100">
                    <SubscribeStyleThree />
                </div> */}

        <Footer />
      </>
    );
  }
}

export default Contact;
