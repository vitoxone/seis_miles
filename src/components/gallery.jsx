import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    const elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
    //const items = [];

const items = [] = elements.map((value) =>

        <div  key={`${value}`} className="col-sm-6 col-md-4 col-lg-4">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href={"/img/portfolio/"+{value}+".jpg"}
                  title=""
                  data-lightbox-gallery="gallery1"
                >
                  <img
                    src={"/img/portfolio/"+value+".jpg"}
                    className="img-responsive"
                    alt=""
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          )
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Imágenes</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
