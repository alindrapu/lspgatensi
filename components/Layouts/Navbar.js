import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/logo-white.png"
                      className="white-logo"
                      alt="logo"
                    />
                    <img
                      src="/images/logo-color.png"
                      className="black-logo"
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Beranda</a>
                      </Link>
                      {/* Home dropdown menu */}
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/" activeClassName="active">
                            <a className="nav-link">Home One</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index2" activeClassName="active">
                            <a className="nav-link">Home Two</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index3" activeClassName="active">
                            <a className="nav-link">Home Three</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index4" activeClassName="active">
                            <a className="nav-link">Home Four</a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                      <Link href="/sertifikasi">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Sertifikasi <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/panduan-sertifikasi"
                            activeClassName="active"
                          >
                            <a className="nav-link">Panduan Sertifikasi</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/biaya" activeClassName="active">
                            <a className="nav-link">Biaya</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="https://perizinan.pu.go.id/portal/registrasi/SKK"
                            activeClassName="active"
                          >
                            <a className="nav-link">AJUKAN SKK</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/layanan" activeClassName="active">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Layanan <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/subklasifikasi">
                            <a className="nav-link">Subklasifikasi</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/panduan-tuk">
                            <a className="nav-link">Panduan TUK</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/permohonan-tuk">
                            <a className="nav-link">Permohonan TUK</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Profil <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/struktur-organisasi">
                            <a className="nav-link">Struktur Organisasi</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tentang-kami">
                            <a className="nav-link">Tentang Kami</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/legalitas">
                            <a className="nav-link">Legalitas</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Dasar Hukum <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/peraturan">
                            <a className="nav-link">Peraturan</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/surat-edaran">
                            <a className="nav-link">Surat Edaran</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog-details" activeClassName="active">
                        <a className="nav-link">Artikel</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Hubungi Kami</a>
                      </Link>
                    </li>
                  </ul>

                  {/* navbar button */}
                  {/* <div className="others-options">
                    <Link href="https://lsp-gkk.id/login">
                      <a className="default-btn">
                        Masuk
                        <span></span>
                      </a>
                    </Link>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
