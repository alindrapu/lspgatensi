import React, { Component } from "react";
import Link from "next/link";

class SubklasContentAbk extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2 className="text-center">Jabatan Kerja Subklasifikasi Air Tanah dan Air Baku</h2>
                <div className="text-center"><span>Klik jabatan kerja untuk informasi lebih lanjut</span></div>
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

                <div className="banner-btn mt-5">
                  <Link href="/subklasifikasi">
                    <a className="default-btn-subklas">
                      Kembali
                      <span></span>
                    </a>
                  </Link>

                  <Link href="https://perizinan.pu.go.id/portal/registrasi/SKK">
                    <a
                      className="skk-button"
                      href="https://perizinan.pu.go.id/portal/registrasi/SKK"
                    >
                      AJUKAN SKK
                      <span></span>
                    </a>
                  </Link>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <img src="/images/subklas/air.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentAbk;
