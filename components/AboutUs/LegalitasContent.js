import React, { Component } from "react";
import Link from "next/link";

class LegalitasContent extends Component {
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
                  Akta Pendirian LSP Gatensi Karya Konstruksi
                  <br />
                </span>
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                <span>Perizinan Berusaha Berbasis Risiko</span>
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab3")}>
                <span>Sertifikat Standar kepada Pelaku Usaha</span>
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab4")}>
                <span>SKT & Nomor Pokok Wajib Pajak</span>
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab5")}>
                <span>Surat Keputusan Badan Nasional Sertifikasi Profesi</span>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab_content">
              {/* Tabs item 1 */}
              <div id="tab1" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      <ul className="full-list">
                        <li>
                          <span>
                            Nomor AHU – 059. AH. 01. 01. TAHUN.2021 Tanggal 07
                            Januari 2021
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-solution-content">
                      <h3></h3>

                      <div className="tab-btn"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs item 2 */}
              <div id="tab2" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-5"></div>

                  <div className="col-lg-12 text-center">
                    <ul className="full-list">
                      <li>
                        <span>Nomor Induk Berusaha: 1217000132315</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tabs item 3 */}
              <div id="tab3" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      <ul className="full-list">
                        <li>
                          <span>Nomor Sertifikat: 1217000132315004</span>
                        </li>
                        <li>
                          <span>Nomor KBLI: 74321</span>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-solution-content">
                      <h3></h3>

                      <div className="tab-btn"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs item 4 */}
              <div id="tab4" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      <ul className="full-list">
                        <li>
                          <span>Nomor NPWP : 41.105.869.6-017.000</span>
                        </li>
                        <li>
                          <span>Nomor SKT : S-3639KT/WPJ.30/KP.0703/2022</span>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-solution-content">
                      <h3></h3>

                      <div className="tab-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs item 5 */}
              <div id="tab5" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="col-lg-12 text-center">
                      <ul className="full-list">
                        <li>
                          <span>
                            Keputusan Ketua Badan Nasional Sertifikasi Profesi
                            Nomor KEP. 1094/BNSP/VI/2022 tentang Lisensi Kepada
                            Lembaga Sertifikasi Profesi Gatensi Karya Konstruksi
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-solution-content">
                      <h3></h3>

                      <div className="tab-btn"></div>
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

export default LegalitasContent;
