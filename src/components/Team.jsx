import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Equipo</h2>
            
            <p>{this.props.data ? this.props.data.title.team1 : 'cargando...'}</p>
            <p>{this.props.data ? this.props.data.title.team2 : 'cargando...'}</p>
            
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.members.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-4 col-md-offset-2 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
