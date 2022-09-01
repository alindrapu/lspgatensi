import React, { Component } from "react";
import Link from "next/link";

class ContentPanduanSertifikasi extends Component {
  render() {
    return (
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Biaya</span>
            <h2>Rincian Biaya Sertifikasi Kompetensi Konstruksi</h2>
            <p>
              Rincian biaya telah disesuaikan sesuai dengan Peraturan Menteri
              yang berlaku
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
