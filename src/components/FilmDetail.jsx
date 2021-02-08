import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class FilmDetail extends React.Component {
  render() {
    return (
      <div className=" container">
        <div className="row">
          {this.props.movies.map((item) => {
            return item.id == this.props.match.params.id ? (
              <h1>Mon film : {item.title}</h1>
            ) : (
              <h1>nop</h1>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilmDetail;
