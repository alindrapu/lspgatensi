import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class FunFacts extends Component {
  render() {
    return (
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="single-fun-fact">
                  <h3>
                    118
                    <span className="sign-icon">+</span>
                  </h3>
                  <p>Jumlah Asesor</p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="single-fun-fact">
                  <h3>
                    11
                    <span className="sign-icon">+</span>
                  </h3>
                  <p>Jumlah TUK</p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-fun-fact">
                  <h3>
                    90<span className="sign-icon">+</span>
                  </h3>
                  <p>Pemohon Sertifikat</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-fun-fact">
                  <h3>
                    1<span className="sign-icon">+</span>
                  </h3>
                  <p>Pemegang Sertifikat</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FunFacts;
