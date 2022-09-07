import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

class ContentSuratEdaran extends Component {
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
                  Surat Edaran BNSP
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab2")}
              >
                <span>
                  Surat Edaran DJBK
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab3")}
              >
                <span>
                  Surat Edaran LPJK
                  <br />
                </span>
              </li>

              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab4")}
              >
                <span>
                  Surat Edaran Menteri PUPR
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
                            SURAT EDARAN NOMOR : SE. 017 /BNSP/VIII/2022
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SE.017.BNSP.VIII.2022.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SE.017.BNSP.VIII.2022.pdf"
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
                            SURAT EDARAN NOMOR : SE. 018 /BNSP/VIII/2022
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SE.017.BNSP.VIII.2022.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SE.017.BNSP.VIII.2022.pdf"
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
                          <span>SURAT EDARAN NOMOR : 06/SE/Dk/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SE-DJBK-06-2020.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SE-DJBK-06-2020.pdf"
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
                          <span>SURAT EDARAN NOMOR : 03/SE/LPJK/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/03.SE.LPJK.2021.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/03.SE.LPJK.2021.pdf"
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
                          <span>SURAT EDARAN NOMOR : 05/SE/LPJK/VII/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/05.SE.LPJK.2021.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/05.SE.LPJK.2021.pdf"
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
                          <span>SURAT EDARAN NOMOR : 16/SE/LPJK/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/16.SE.LPJK.2021.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/16.SE.LPJK.2021.pdf"
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
                          <span>SURAT EDARAN NOMOR : 20/SE/LPJK/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/20.SE.LPJK.2021.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/20.SE.LPJK.2021.pdf"
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
                            LAMPIRAN SURAT EDARAN MENTERI PEKERJAAN UMUM DAN
                            PERUMAHAN RAKYAT NOMOR : 21/SE/M/2021
                          </span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/LampSE21-2021fix.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/LampSE21-2021fix.pdf"
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
                          <span>SURAT EDARAN NOMOR : 21/SE/M/2021</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SE21-2021.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SE21-2021.pdf"
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
                          <span>SURAT EDARAN NOMOR : 03/SE/M/2022</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SEMenteriPUPR03_SE_M_2022-2022.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SEMenteriPUPR03_SE_M_2022-2022.pdf"
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
                          <span>SURAT EDARAN NOMOR : 05/SE/M/2022</span>
                        </li>
                      </ul>
                      {/* </ScrollAnimation> */}
                      <div className="banner-btn mt-5">
                        <a
                          className="default-btn-subklas"
                          href="/files/SEMenteriPUPR05_SE_M_2022-2022.pdf"
                          target="_blank"
                        >
                          Lihat
                          <span></span>
                        </a>

                        <a
                          className="default-btn-subklas"
                          href="/files/SEMenteriPUPR05_SE_M_2022-2022.pdf"
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

export default ContentSuratEdaran;
