import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class FilmDetail extends React.Component {
  render() {
    return (
      <div className='container d-flex justify-content-center mt-5'>
        {this.props.movies.map((item) => {
            return (item.id == this.props.match.params.id && 
              <div className="card mb-3 tkt">
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="mr-3" src={item.image} alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Réalisé par {item.director}</p>
                    <p class="card-text text-muted">{item.description}</p>
                    <p className="card-text">Acteurs : {item.stars[0]}, {item.stars[1]}, {item.stars[2]}</p>
                  </div>
                </div>
              </div>
            </div>)
          })}
      </div>
    )
          
  }
}

export default FilmDetail;
