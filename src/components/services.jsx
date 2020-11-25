import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Apoyo</h2>
            <p>
            Esta aventura no serpia posible sin la colaboración de las siguientes marcas.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
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
