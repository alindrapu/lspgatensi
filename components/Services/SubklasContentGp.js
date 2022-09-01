import React, { Component } from "react";

class SubklasContentGp extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Geoteknik dan Pondasi</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Perencana Pondasi</span>
                  </li>
                  <li>
                    <span>Ahli Madya Perencana Pondasi </span>
                  </li>
                  <li>
                    <span>Teknisi Geoteknik</span>
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

export default SubklasContentGp;
