import React, { Component } from 'react';
import BeerStore from '../stores/BeerStore';

export default class BeerBoard extends Component {
  constructor() {
    super();
    this.state = {
      beers: BeerStore.getAllBeers()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    BeerStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BeerStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ beers: BeerStore.getAllBeers() })
  }

  render() {
    let { beers } = this.state;
    let name='', beerDescription='', pic_url;
    if ( beers ) {
      console.log('beers:', beers)
      let {id, labels, style } = beers.data;
      if (style.shortName){
        name = style.shortName;
      }
      beerDescription = style.description;
      pic_url = labels.medium;
    }
    return (
      <div className="row">
        <div className="randomBeerContainer">
          <div className='randomBeerItem'>
            <img src={pic_url} className="randomImg"/>
            <p className="randomBeerTxt">{name}</p>
            <p className="randomBeerTxt">{beerDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}
