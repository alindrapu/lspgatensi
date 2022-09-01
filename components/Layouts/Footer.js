import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        {/* Top Footer Section */}
        <footer className="footer-section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget"></div>
              </div>

              <div className="row">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Kontak Kami</h3>
                  </div>

                  <div className="row">
                    <div className="col-4">
                      <div className="footer-info-contact">
                        <i className="flaticon-call-answer"></i>
                        <h3>Phone</h3>
                        <span>021 7810444</span>
                        <br />
                        <span>
                          <a href="https://api.whatsapp.com/send?phone=6281130570777">
                            0811 3057 0777 (WA)
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="footer-info-contact">
                        <i className="flaticon-envelope"></i>
                        <h3>Email</h3>
                        <span>admin@lspgatensi.id</span>
                        <br />
                        <span>cs@lspgatensi.id</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="footer-info-contact">
                        <i className="flaticon-maps-and-flags"></i>
                        <h3>Alamat</h3>
                        <span>
                          <a href="https://goo.gl/maps/4pF92x8nTXt2a1S78">
                            <b>Graha Gapensi</b> Jl. Raya Ragunan No. 1C, Jati
                            Padang, Pasar Minggu, Jakarta Selatan
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="partner-shape-img1">
            <img src="/images/shape/partnar-shape-2.png" alt="image" />
          </div>
        </footer>
        {/* End Top Footer Section */}
      </>
    );
  }
}

export default Footer;
