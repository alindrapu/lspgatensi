import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <a href="https://goo.gl/maps/4pF92x8nTXt2a1S78">
                  <i className="fa fa-map-marker"></i>
                </a>
                <div className="content-title">
                  <h3>Alamat</h3>
                  <p>
                    Jl. Raya Ragunan No. 1C, Jati Padang, Pasar Minggu, Jakarta
                    Selatan
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p>admin@lspgatensi.id</p>
                  <p>cs@lspgatensi.id</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-whatsapp"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p>+123 (456) 123</p>
                  <p>+123 (534) 445</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
