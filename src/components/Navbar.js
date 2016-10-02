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
    let languages = this.refs.langlib.value;
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

  // delete to here

  render() {
    return (
      <div className="container text-center">
        <h1>An app that helps you find the best repos and developers on:</h1>
        <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width='200px'/>
        <div className="inputsContainer text-center">
         <div className="row searchBlock text-center">
          <input type="text" className="form-control gitInputForm" placeholder="Enter a language or library to Get Started" ref='langlib'/>
         </div>
          <div className="col-xs-4">
            <Link to='topRepo' className="git-btn" onClick={this.searchByLanguage}>Find Top Repos</Link>
          </div>
          <div className="col-xs-4">
            <Link to='topUser' className="git-btn" onClick={this.searchByUser}>Find Top Developers</Link>
          </div>
          <div className="col-xs-4">
            <Link to='ch' className="git-btn" onClick={this.CodingHouseSearch}>Coding House Profiles</Link>
          </div>

        </div>
        {this.props.children}
      </div>
    )
  }
};


// onChange={(e) => this.setState({name: e.target.value})}
