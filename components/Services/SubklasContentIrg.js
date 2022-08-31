import React, { Component } from "react";

class SubklasContentIrg extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Bendung dan Bendungan</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Perencana Irigasi</span>
                  </li>
                  <li>
                    <span>Pelaksana Lapangan Pekerjaan Saluran Irigasi</span>
                  </li>
                  <li>
                    <span>Pelaksana Pemasangan Pintu Air</span>
                  </li>
                  <li>
                    <span>Pelaksana Pekerjaan Pemeliharaan Sungai </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <img src="/images/software.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentIrg;
