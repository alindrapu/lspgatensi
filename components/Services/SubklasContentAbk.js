import React, { Component } from "react";

class SubklasContentAbk extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Air Tanah dan Air Baku</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Hidrologi</span>
                  </li>
                  <li>
                    <span>Ahli Madya Hidrologi</span>
                  </li>
                  <li>
                    <span>
                      Ahli Muda Bidang Keahlian Teknik Sumber Daya Air
                    </span>
                  </li>
                  <li>
                    <span>
                      Ahli Madya Bidang Keahlian Teknik Sumber Daya Air
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

export default SubklasContentAbk;
