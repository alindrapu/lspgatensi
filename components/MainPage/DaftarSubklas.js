import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faTrainSubway, faBuilding, faBridgeWater, faDroplet, faRoad,
          faArrowUpFromGroundWater, faArrowUpFromWaterPump, faBuildingLock,
          faHouseFloodWater, faGlassWaterDroplet, faTrashCan, faTrain, faDraftingCompass,
          faPersonDigging, faBoreHole, faMound } from "@fortawesome/free-solid-svg-icons";

class DaftarSubklas extends Component {
  render() {
    return (
      <section className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Layanan Kami</span>
            <h2>Daftar Subklasifikasi Sipil</h2>
            <p>
              LSP Gatensi Karya Konstruksi saat ini melayani permohonan
              Sertifikasi Kompetensi Konstruksi dengan Klasifikasi Sipil
              berjumlah 16 Subklasifikasi dengan 59 Jabatan Kerja.
            </p>
          </div>

          <div className="row">
            <Link href="/subklas-bg">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                  </div>
                  <h3>Gedung</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-mtr">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faMound}></FontAwesomeIcon>
                  </div>
                  <h3>Material</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-jln">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
                  </div>
                  <h3>Jalan</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-jbt">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faBridgeWater}></FontAwesomeIcon>
                  </div>
                  <h3>Jembatan</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-bdg">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faArrowUpFromGroundWater}></FontAwesomeIcon>
                  </div>
                  <h3>Bendung dan Bendungan</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-irg">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faHouseFloodWater}></FontAwesomeIcon>
                  </div>
                  <h3>Irigasi dan Rawa</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-sgp">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faWater}></FontAwesomeIcon>
                  </div>
                  <h3>Sungai dan Pantai</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-abk">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
                  </div>
                  <h3>Air Tanah dan Air Baku</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-bm">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faArrowUpFromWaterPump}></FontAwesomeIcon>
                  </div>
                  <h3>Bangunan Air Minum</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-dp">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faBuildingLock}></FontAwesomeIcon>
                  </div>
                  <h3>Drainase Perkotaan</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-bp">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </div>
                  <h3>Bangunan Persampahan</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-bl">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faGlassWaterDroplet}></FontAwesomeIcon>
                  </div>
                  <h3>Bangunan Air Limbah</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-gp">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faPersonDigging}></FontAwesomeIcon>
                  </div>
                  <h3>Geoteknik dan Pondasi</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-jlr">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>
                  </div>
                  <h3>Jalan Rel</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-gds">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faDraftingCompass}></FontAwesomeIcon>
                  </div>
                  <h3>Geodesi</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/subklas-grt">
              <div className="col-lg-3 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                  <FontAwesomeIcon icon={faBoreHole}></FontAwesomeIcon>
                  </div>
                  <h3>Grouting</h3>
                  <a className="service-btn">
                    Jabatan Kerja
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default DaftarSubklas;
