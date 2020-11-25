import React, { Component } from "react";

export class features extends Component {
  
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>+6000 msnm</h2>
            <p>
            Un 80% de nuestro territorio nacional esta formado por zonas montañosas, donde existen dos grandes cordillera que recorren Chile en su extensión; la Cordillera de La Costa, con una extensión de más de 3.000 kilómetros y la Cordillera de Los Andes, con una longitud aproximada de 4.200 kilómetros. Esta última, cuenta con un grupo de 37 montañas que superan los 6.000 msnm, que se encuentran distribuidas desde la zona Altiplánica hasta Los Andes Centrales.
            </p>
            <p>A continuación, clasificaremos las 37 cumbres por su localización geográfica:</p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-md-12 col-md-3">
                    {" "}
                    <div className="features-desc">
                    <img
                        src={d.img}
                        alt="Project Title"
                      />
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
