import React, { Component } from "react";
import Link from "next/link";

class SubklasContentBdg extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Bendung dan Bendungan</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Ahli Madya Pengawas Pelaksanaan Konstruksi Bangunan Sipil
                      Pembangkit Listrik Tenaga Hidro
                    </span>
                  </li>
                  <li>
                    <span>Inspektur Bendungan Urukan</span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Operasi dan Pemeliharaan Bendungan Tipe Urukan
                    </span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Operasi dan Pemeliharaan Bendungan Tipe Urukan
                    </span>
                  </li>
                  <li>
                    <span>
                      Mandor Pekerjaan Timbunan Tubuh Bendungan Tipe Urukan
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
                <img src="/images/subklas/bendungan.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentBdg;
