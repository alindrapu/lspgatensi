import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
class SubklasContentGds extends Component {
  render() {
    return (
      <section className="software-section p-100 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2 className="text-center">
                  Jabatan Kerja Subklasifikasi Geodesi
                </h2>
                <div className="text-center">
                  <span>Klik jabatan kerja untuk informasi lebih lanjut</span>
                </div>
                <ul className="features-list">
                  <li>
                    <span>Ahli Muda Pengukuran Jalan</span>
                  </li>
                  <li>
                    <span>Juru Ukur (Surveyor)</span>
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
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={50}
                  animateOnce={true}
                >
                  <img src="/images/subklas/teodelit.png" alt="image" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubklasContentGds;