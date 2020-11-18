import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
                <div className="intro-text">
                    <div className="logos">
                      {this.props.data
                      ?   <img 
                            src={this.props.data.logo_banner}
                            className="logo_banner"
                            alt="Project Title"
                          />
                      : "loading"
                      }
                    </div>
                  <div className="tittle">
                    <h1>
                      PROYECTO
                    </h1>
                    <h1>
                      <span className="six">6</span> Miles de <span className="country">Chile</span>
                    </h1>
                  </div>
                </div>>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
