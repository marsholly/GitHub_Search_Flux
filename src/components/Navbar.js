import React, { Component } from 'react';
import GitHubActions from '../actions/GitHubActions';
import { Link } from 'react-router';


export default class Navbar extends Component {
  constructor() {
    super();
    this.searchByLanguage = this.searchByLanguage.bind(this);
    this.searchByUser = this.searchByUser.bind(this);
    this.CodingHouseSearch = this.CodingHouseSearch.bind(this);
  }

  searchByLanguage() {
    let languages = this.refs.language.value;
    GitHubActions.searchByLanguage(languages);
  }

  searchByUser() {
    let langlib  = this.refs.langlib.value;
    GitHubActions.searchByUser(langlib);
  }

  CodingHouseSearch() {
    let nameArr = ['AJFunk','cadenichols','jovjohnson', 'WindUpDurb','TobiahRex','joshuaMaddox','marsholly','Zhaggy','Nemsae','migsadventure', 'mavarius','thejapanexperience','necancsh','ziyaemanet','sammicodekat','donbobvanbirt']
    GitHubActions.searchCH(nameArr);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="language" ref='language' />
            </div>
            <Link to='topRepo' className="btn btn-primary" onClick={this.searchByLanguage}>Search Language</Link>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="language or library" ref='langlib'/>
            </div>
            <Link to='topUser' className="btn btn-default" onClick={this.searchByUser}>Search User</Link>
            <Link to='ch' className="btn btn-default" onClick={this.CodingHouseSearch}>CHSearch</Link>
          </div>
        </nav>
        <div className="beersContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
};


// onChange={(e) => this.setState({name: e.target.value})}
