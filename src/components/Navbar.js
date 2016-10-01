import React, { Component } from 'react';
import BeerActions from '../actions/BeerActions';
import { Link } from 'react-router';


export default class Navbar extends Component {
  constructor() {
    super();
    this.randomBeer = this.randomBeer.bind(this);
  }

  randomBeer() {
    BeerActions.randomBeer();
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <form className="navbar-form navbar-left" role="search">
            <Link to='beers' className="btn btn-primary" onClick={this.randomBeer}>Random</Link>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <Link to='' className="btn btn-default">Search</Link>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="2012-04"/>
            </div>
            <Link to='' className="btn btn-default">Filter</Link>
          </form>
        </nav>
        {this.props.children}
      </div>
    )
  }
};
