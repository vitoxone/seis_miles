import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/project.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>El proyecto</h2>
                <p>{this.props.data ? this.props.data.paragraph1 : 'cargando...'}</p>
                <p>{this.props.data ? this.props.data.paragraph2 : 'cargando...'}</p>
                <p>{this.props.data ? this.props.data.paragraph3 : 'cargando...'}</p>
                <p><b><i>{this.props.data ? this.props.data.invitation : 'cargando...'}</i></b></p>
                <p><b>{this.props.data ? this.props.data.info : 'cargando...'}</b>  
                <b>{this.props.data ? this.props.data.author : 'cargando...'}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
