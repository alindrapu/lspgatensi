import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1>Gatensi Karya Konstruksi</h1>
                    <p>
                      Lembaga Sertifikasi Profesi yang berdiri di bawah naungan
                      Gabungan Ahli Teknik Nasional Indonesia (GATENSI). <br />
                      Siap memberikan pelayanan Sertifikasi Profesi untuk para
                      tenaga ahli profesi konstruksi di Seluruh Indonesia.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us">
                        <a className="default-btn-one">
                          Panduan Sertifikasi
                          <span></span>
                        </a>
                      </Link>

                      <Link href="https://perizinan.pu.go.id/portal/registrasi/SKK">
                        <a
                          className="default-btn"
                          href="https://perizinan.pu.go.id/portal/registrasi/SKK"
                        >
                          Permohonan Sertifikasi
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* Shape images */}
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/image-1.png" alt="image" />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInLeft"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/image-4.png" alt="image" />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInRight"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/image-.png" alt="image" />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/image-.png" alt="image" />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/image-5.png" alt="image" />
                    </ScrollAnimation>

                    {/* Main image */}
                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/main-image2.png" alt="image" />
                    </ScrollAnimation>
                  </div>

                  <div className="circle-img">
                    <img src="/images/home-two/portal.png" alt="image" />
                    <img src="/images/home-two/portal-1.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="creative-shape">
          <img
            src="/images/main-banner-shape/home-shape-2.png"
            alt="main-image"
          />
        </div>
        <div className="shape-dot">
          <img
            src="/images/main-banner-shape/main-banner-dot.png"
            alt="main-image"
          />
        </div>
      </div>
    );
  }
}

export default MainBanner;
