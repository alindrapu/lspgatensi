import React, { Component } from "react";

class SubklasContentBl extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Bangunan Air Limbah</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Bangunan Air Limbah
                      Permukiman (Setempat dan Terpusat)
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

export default SubklasContentBl;
