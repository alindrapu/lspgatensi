import React, { Component } from "react";

class SubklasContentSgp extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Sungai dan Pantai</h2>

                <ul className="features-list">
                  <li>
                    <span>Pelaksana Lapangan Pekerjaan Bronjong</span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Bangunan Pengaman Pantai
                    </span>
                  </li>
                  <li>
                    <span>Pelaksana Pekerjaan Pemeliharaan Sungai</span>
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

export default SubklasContentSgp;
