import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

class ContentPeraturan extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <div className="tab-section ptb-100">
        <div className="container">
          <div className="tab solutions-list-tab">
            {/* Tabs Nav */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <span>
                  Keputusan Menteri PUPR
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab2")}
              >
                <span>
                  Peraturan BNSP
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab3")}
              >
                <span>
                  Peraturan Pemerintah
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab4")}
              >
                <span>
                  Surat Keputusan DJBK
                  <br />
                </span>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab_content">
              {/* Tabs item 1 */}
              <div id="tab1" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            KEPUTUSAN MENTERI PEKERJAAN UMUM DAN PERUMAHAN
                            RAKYAT NOMOR 713 /KPTS/M/2022
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/2022kmpupr713.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/2022kmpupr713.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            KEPUTUSAN MENTERI PEKERJAAN UMUM DAN PERUMAHAN
                            RAKYAT NOMOR 559 /KPTS/M/2021
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/KEPMEN-PUPR-559.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/KEPMEN-PUPR-559.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs item 2 */}
              <div id="tab2" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            PERATURAN BADAN NASIONAL SERTIFIKASI PROFESI NOMOR :
                            13/BNSP.218/XII/2013
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/BNSP-13.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/BNSP-13.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs item 3 */}
              <div id="tab3" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            SALINAN PERATURAN PEMERINTAH REPUBLIK INDONESIA
                            NOMOR 14 TAHUN 2O21
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/Salinan-PP-14.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/Salinan-PP-14.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            LAMPIRAN SALINAN PERATURAN PEMERINTAH REPUBLIK
                            INDONESIA NOMOR 14 TAHUN 2O21
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/Lampiran-Salinan-PP-14.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/Lampiran-Salinan-PP-14.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs item 4 */}
              <div id="tab4" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      {/* <ScrollAnimation
                        animateIn="zoomIn"
                        delay={50}
                        animateOnce={true}
                      > */}
                      <ul className="full-list">
                        <li className="animate__animated animate__zoomIn">
                          <span>
                            KEPUTUSAN DIREKTUR JENDERAL BINA KONSTRUKSI NOMOR
                            12.1/KPTS/Dk/2022
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/DIRJEN-BK-2022.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/DIRJEN-BK-2022.pdf"
                          download
                        >
                          Unduh
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentPeraturan;
