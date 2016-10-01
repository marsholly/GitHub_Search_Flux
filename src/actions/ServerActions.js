import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveRepos(topRepos) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_REPOS',
      payload: { topRepos }
    })
  },
  receiveUsers(topUsers) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_USERS',
      payload: { topUsers }
    })
  },
  receiveCH(chs) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CH',
      payload: { chs }
    })
  }
}

export default ServerActions;
