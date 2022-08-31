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
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Sertifikasi <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/layanan" activeClassName="active">
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
                            <a className="nav-link">Permohonan Sertifikasi</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/layanan" activeClassName="active">
                        <a className="nav-link">Layanan</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Profile<i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/">
                            <a className="nav-link">Struktur Organisasi</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a className="nav-link">Tentang Kami</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
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
                          Dasar Hukum<i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/">
                            <a className="nav-link">Peraturan</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a className="nav-link">Surat Edaran</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* projects menu */}
                    {/* <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Projects <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/projects" activeClassName="active">
                            <a className="nav-link">Projects</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/project-details"
                            activeClassName="active"
                          >
                            <a className="nav-link">Project Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Pages <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/about-us" activeClassName="active">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/team" activeClassName="active">
                            <a className="nav-link">Team</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/layanan" activeClassName="active">
                            <a className="nav-link">Services</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service-details"
                            activeClassName="active"
                          >
                            <a className="nav-link">Service Details</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/projects" activeClassName="active">
                            <a className="nav-link">Projects</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/project-details"
                            activeClassName="active"
                          >
                            <a className="nav-link">Project Details</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/pricing" activeClassName="active">
                            <a className="nav-link">Pricing</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/partner" activeClassName="active">
                            <a className="nav-link">Partner</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/faq" activeClassName="active">
                            <a className="nav-link">FAQ</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/coming-soon" activeClassName="active">
                            <a className="nav-link">Coming Soon</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/404" activeClassName="active">
                            <a className="nav-link">404 Error Page</a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Artikel <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/blog" activeClassName="active">
                            <a className="nav-link">Blog Grid</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/blog2" activeClassName="active">
                            <a className="nav-link">Blog Right Sidebar</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/blog3" activeClassName="active">
                            <a className="nav-link">Blog Left Sidebar</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/blog-details" activeClassName="active">
                            <a className="nav-link">Blog Details</a>
                          </Link>
                        </li>
                      </ul>
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
