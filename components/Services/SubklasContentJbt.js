import React, { Component } from "react";

class SubklasContentJbt extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Jembatan</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Bidang Keahlian Teknik Jembatan</span>
                  </li>
                  <li>
                    <span>Ahli Madya Bidang Keahlian Teknik Jembatan</span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Pemasangan Jembatan Rangka
                      Baja Standar
                    </span>
                  </li>
                  <li>
                    <span>Teknisi Jembatan Rangka Baja</span>
                  </li>
                  <li>
                    <span>Pelaksana Pemeliharaan Jembatan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <img src="/images/construction-nobg.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentJbt;
