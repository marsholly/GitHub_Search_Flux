import React, { Component } from 'react';
import GitHubStore from '../stores/GitHubStore';

export default class TopUserBoard extends Component {
  constructor() {
    super();
    this.state = {
      topUsers: GitHubStore.getAllUsers()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    GitHubStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    GitHubStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ topUsers: GitHubStore.getAllUsers() })
  }

  render() {
    let { topUsers } = this.state;
    let usersList;
    if ( topUsers ) {
      usersList = topUsers.map(topUser => {
        let {login, avatar_url, id, html_url, repos_url } = topUser;
        return (
          <div className='repoItem' key={id}>
            <img src={avatar_url} className="repoImg" />
            <p className="repoTxt">{login}</p>
            <a className="repoTxt" href={html_url}>Pofile</a>
            <a className="repoTxt" href={repos_url}>See Repos</a>
          </div>
        )
      })
    }else{
      return usersList = <div></div>
    }
    return (
      <div className="row">
        <div className="repoContainer">
          {usersList}
        </div>
      </div>
    )
  }
}
