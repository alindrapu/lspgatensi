import React, { Component } from "react";

class SubklasContentBp extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Drainase Perkotaan</h2>

                <ul className="features-list">
                  <li>
                    <span>Pelaksana Lapangan Pekerjaan Drainase Perkotaan</span>
                  </li>
                  <li>
                    <span>Pengawas Lapangan Pekerjaan Drainase Perkotaan</span>
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

export default SubklasContentBp;
