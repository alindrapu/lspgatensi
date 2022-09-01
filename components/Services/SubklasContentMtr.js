import React, { Component } from "react";

class SubklasContentMtr extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Material</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Manajer Produksi Campuran Aspal Panas (Ashpalt Mixing
                      Plant Manager)
                    </span>
                  </li>
                  <li>
                    <span>Teknisi Laboratorium Beton Aspal</span>
                  </li>
                  <li>
                    <span>Pelaksana Produksi Campuran Aspal Panas</span>
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

export default SubklasContentMtr;
