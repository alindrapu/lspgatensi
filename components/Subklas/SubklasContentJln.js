import React, { Component } from "react";
import Link from "next/link";
class SubklasContentJln extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Jalan</h2>

                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Bidang Keahlian Teknik Jalan</span>
                  </li>
                  <li>
                    <span>Ahli Madya Bidang Keahlian Teknik Jalan</span>
                  </li>
                  <li>
                    <span>
                      Manajer Pelaksanaan Lapangan Pekerjaan Jalan/Jembatan
                    </span>
                  </li>
                  <li>
                    <span>Juru Gambar Pekerjaan Jalan dan Jembatan</span>
                  </li>
                  <li>
                    <span>Pelaksana Lapangan Pekerjaan Jalan </span>
                  </li>
                  <li>
                    <span>Pelaksana Lapangan Perkerasan Jalan Beton </span>
                  </li>
                  <li>
                    <span>Pelaksana Pemeliharaan Jalan </span>
                  </li>
                  <li>
                    <span>Mandor Pekerjaan Jalan </span>
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
                <img src="/images/subklas/jalan.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentJln;
