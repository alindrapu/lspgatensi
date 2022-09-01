import React, { Component } from "react";

class SubklasContentJlr extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Jalan Rel</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Madya Perencana Struktur Jalan Rel</span>
                  </li>
                  <li>
                    <span>Manajer Teknik Pembangunan Jalan Rel </span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Pembangunan Jalan Rel
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

export default SubklasContentJlr;
