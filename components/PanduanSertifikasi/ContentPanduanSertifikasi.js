import React, { Component } from "react";
import Link from "next/link";

class ContentPanduanSertifikasi extends Component {
  render() {
    return (
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Panduan Sertifikasi</span>
            <h2>Alur Permohonan Sertifikasi di LSP Gatensi Karya Konstruksi</h2>
            <p>
              Permohonan akan dimulai dari Portal Perizinan PU dan akan
              terintegrasi dengan sistem LSP serta Badan Nasional Sertifikasi
              Profesi (BNSP).
            </p>
          </div>
          <div className="row ">
            <img src="/images/panduansertifikasi.png" alt="imagepanduan" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentPanduanSertifikasi;
