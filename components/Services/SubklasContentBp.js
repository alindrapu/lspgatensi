import React, { Component } from "react";
import Link from "next/link";
class SubklasContentBp extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Bangunan Persampahan</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Pemasangan Pipa Leachate
                      (LINDI) dan Pipa Gas/Ventilasi di Tempat Pemrosesan Akhir
                    </span>
                  </li>
                  <li>
                    <span>
                      Pelaksana Lapangan Pekerjaan Pemasangan Lapisan Kedap Air
                      di Tempat Pemrosesan Akhir
                    </span>
                  </li>
                </ul>

                <div className="row  mt-5">
                  <div className="col-lg-6 text-center">
                      <Link href="/subklasifikasi">
                        <a className="default-btn-subklas">
                          Kembali
                          <span></span>
                        </a>
                      </Link>
                  </div>

                  <div className="col-lg-6 text-center">
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

export default SubklasContentBp;
