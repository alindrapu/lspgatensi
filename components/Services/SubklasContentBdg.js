import React, { Component } from "react";

class SubklasContentBdg extends Component {
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
                    <span>
                      Ahli Madya Pengawas Pelaksanaan Konstruksi Bangunan Sipil
                      Pembangkit Listrik Tenaga Hidro
                    </span>
                  </li>
                  <li>
                    <span>Inspektur Bendungan Urukan</span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Operasi dan Pemeliharaan Bendungan Tipe Urukan
                    </span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Operasi dan Pemeliharaan Bendungan Tipe Urukan
                    </span>
                  </li>
                  <li>
                    <span>
                      Mandor Pekerjaan Timbunan Tubuh Bendungan Tipe Urukan
                    </span>
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

export default SubklasContentBdg;
