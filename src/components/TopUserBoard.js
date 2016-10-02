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
        <div className="col-md-3" key={id}>
          <div className='gitRepItem'>
            <img src={avatar_url} className="gitRepImg" />
            <p className="gitRepName">{login}</p>
            <a className="gitRepClone" href={html_url}>Profile</a>
            <a className="gitRepClone" href={html_url + '?tab=repositories'}>See Repos</a>
          </div>
        </div>
        )
      })
    }else{
      return usersList = <div></div>
    }
    return (
      <div className="row topRepoBoard">
        <h1>The Most Followed Developers on Git Hub Related to Your Search</h1>
        <h4 className='bottomText'>Go watch the best of the best...and Miguel</h4>
          {usersList}
      </div>
    )
  }
}
