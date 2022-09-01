import React, { Component } from "react";
import Link from "next/link";

class Customers extends Component {
  render() {
    return (
      <div className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <h2>LSP Gatensi Karya Konstruksi terkoneksi dengan</h2>
          </div>
          <div className="row">
            <div className="col-4 ">
              <div className="partner-list">
                <div className="partner-item">
                  <Link href="https://www.pu.go.id/">
                    <a>
                      <img src="/images/logo-pupr.png" alt="image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="partner-list">
                <div className="partner-item ">
                  <Link href="https://www.pu.go.id/">
                    <a>
                      <img
                        className="bnsp"
                        src="/images/logo-bnsp.png"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="partner-list">
                <div className="partner-item">
                  <Link href="https://www.pu.go.id/">
                    <a>
                      <img src="/images/logo-gatensi.png" alt="image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partner-shape">
          <img src="/images/shape/partnar-shape-1.png" alt="main-image" />
        </div>
        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
      </div>
    );
  }
}

export default Customers;
