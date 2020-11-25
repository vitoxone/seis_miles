import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
            <span className="icon-bar" style={{color:"#0e2591"}} >#Chile</span><span className="icon-bar" style={{color: "#b82925"}} >6</span><span className="icon-bar" style={{color: "#b82925"}} >Miles</span>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                +6000 msnm
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  El Proyecto
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                Apoyo
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Imágenes
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Aventuras
                </a>
              </li> */}
              <li>
                <a href="#team" className="page-scroll">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
