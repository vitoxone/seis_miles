import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Apoyo</h2>
            <p>
            Esta aventura no sería posible sin la colaboración de las siguientes marcas.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
              <a href={d.page} rel="noreferrer" target="_blank" style={{ fontSize: '14px', lineHeight: '26px', color: '#999999' }}>
                  <div  key={`${d.name}-${i}`} className="col-md-4" style={{borderRadius: '20px'}}>
                    {" "}
                      <img
                        src={d.src}
                        className="img-responsive"
                        alt={d.name}
                      />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                    </div>
                  </div>
                </a>
                ))
              : "loading"}
          </div>
          <p>
            Si quieres convertirte en auspiciador y ser parte de este proyecto ayudándonos a cumplir nuestro objetivo y generar contenido, puedes contactarnos.
          </p>
        </div>
      </div>
    );
  }
}

export default Services;
