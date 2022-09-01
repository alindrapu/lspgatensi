import React, { Component } from "react";
import Link from "next/link";

class TentangKamiContent extends Component {
  render() {
    return (
      <section className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>Tentang Kami</span>
                <h2>Sejarah Singkat Tentang LSP Gatensi Karya Konstruksi</h2>
                <p>
                  LSP Gatensi Karya Konstruksi (GKK) adalah Lembaga Sertifikasi
                  Profesi yang dibentuk oleh Gabungan Ahli Teknik Nasional
                  Indonesia (GATENSI) pada 7 Januari 2021. Tujuan pembentukan
                  LSP GKK adalah untuk ikut berperan serta dalam program
                  pemerintah terkait pembinaan dan pengembangan kompetensi
                  tenaga ahli yang kompeten, profesional dan berintegritas
                  dengan profesinya sebagai pemegang Sertifikat Profesi Tenaga
                  Konstruksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TentangKamiContent;
