import ServerActions from './actions/ServerActions';
import {get} from 'axios';

const API = {
  randomBeer() {
      get('https://cadeproxy.herokuapp.com/?url=http://api.brewerydb.com/v2/beer/random?key=db967695920937e973916478f76cfc19&format=json')
        .then( beers=> {
          let beersData = beers.data;
          ServerActions.receiveRandomBeer(beersData);
        })
        .catch(console.error);

  }

}

export default API;
