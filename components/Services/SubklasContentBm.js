import React, { Component } from "react";

class SubklasContentBm extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Bangunan Air Minum</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Pelaksana Konstruksi Bangunan Unit Produksi SPAM
                    </span>
                  </li>
                  <li>
                    <span>Manajer Pelaksana Konstruksi SPAM</span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Konstruksi Bangunan Unit Distribusi SPAM
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

export default SubklasContentBm;
