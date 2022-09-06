import React, { Component } from "react";
import Link from "next/link";
import YouTube from "react-youtube";

class TentangKamiContent extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <section className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center text-center ptb-100">
            <div className="col-lg-12">
              <h2>Perjalanan LSP Gatensi Karya Konstruksi</h2>
              <p>Video Singkat tentang perjalanan LSP GKK</p>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/TRnhlmMUZK0"
                  title="Video LSP Gatensi Karya Konstruksi"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/sejarah-singkat.png" alt="image" />
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
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default TentangKamiContent;
