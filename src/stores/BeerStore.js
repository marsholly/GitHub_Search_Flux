import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';


let _beers = null;

class BeerStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_RANDOM_BEER':
          _beers = action.payload.beers;
          this.emit('CHANGE');
          break;
        // case 'RECEIVE_STOCK':
        //   _stock = action.payload.stock;
        //   this.emit('CHANGE');
        //   break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllBeers() {
    return _beers;
  }
}

export default new BeerStore();
