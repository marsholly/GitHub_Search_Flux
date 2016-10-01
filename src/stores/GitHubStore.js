import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';


let _topRepos = null;
let _topUsers = null;
let _ch = [];

class GitHubStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_REPOS':
          _topRepos = action.payload.topRepos;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_USERS':
          _topUsers = action.payload.topUsers;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_CH':
          let {chs} = action.payload;
          _ch.push(chs);
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllTopReps() {
    return _topRepos;
  }

  getAllUsers() {
    return _topUsers;
  }

  getAllCH() {
    return _ch;
  }
}

export default new GitHubStore();
