import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveRandomBeer(beers) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RANDOM_BEER',
      payload: { beers }
    })
  },
  // receiveStock(stock) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_STOCK',
  //     payload: { stock }
  //   })
  // }
}

export default ServerActions;
