import React, { Component } from "react";
import Link from "next/link";
class SubklasContentBg extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Jabatan Kerja Subklasifikasi Gedung</h2>

                <ul className="features-list">
                  <li>
                    <span>
                      Ahli Muda Perencana Beton Pracetak Untuk Struktur Bangunan
                      Gedung
                    </span>
                  </li>
                  <li>
                    <span>Manager Pengelolaan Bangunan Gedung</span>
                  </li>
                  <li>
                    <span>Manager Lapangan Pelaksana Pekerjaan Gedung</span>
                  </li>
                  <li>
                    <span>Pengawas Pekerjaan Struktur Bangunan Gedung</span>
                  </li>
                  <li>
                    <span>Kepala Pengelola Lingkungan Bangunan Gedung</span>
                  </li>
                  <li>
                    <span>Pelaksana Lapangan Pekerjaan Gedung</span>
                  </li>
                  <li>
                    <span>Juru Gambar Bangunan Gedung</span>
                  </li>
                  <li>
                    <span>Mandor Tukang Pasang Beton Precast</span>
                  </li>
                  <li>
                    <span>Pemasang Perancah dan Acuan / Cetakan Beton</span>
                  </li>
                  <li>
                    <span>
                      Mandor Pemasangan (Installer) Rangka Atap Baja Ringan
                    </span>
                  </li>
                  <li>
                    <span>
                      Mandor Pemasangan Rangka Dinding dan Lantai Baja Ringan
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
                <img src="/images/subklas/gedung.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentBg;
