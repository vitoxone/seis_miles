import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact" className="text-center">
          <div className="container">
              <div className="section-title">
                <h2>Contacto</h2>
              </div>
            <div className="col-md-12">
              <div className="row">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Dirección
                    </span>
                    {this.props.data ? this.props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Telefono
                    </span>{" "}
                    {this.props.data ? this.props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {this.props.data ? this.props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.instagram : "/"}
                        rel="noreferrer" 
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
