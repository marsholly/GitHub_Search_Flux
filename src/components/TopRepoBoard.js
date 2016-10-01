import React, { Component } from 'react';
import GitHubStore from '../stores/GitHubStore';

export default class TopRepoBoard extends Component {
  constructor() {
    super();
    this.state = {
      topRepos: GitHubStore.getAllTopReps()
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
    this.setState({ topRepos: GitHubStore.getAllTopReps() })
  }

  render() {
    let { topRepos } = this.state;
    let repoList;
    if ( topRepos ) {
      repoList = topRepos.map(topRepo => {
        let {clone_url, owner, name, id, html_url, stargazers_count, description } = topRepo;
        let {avatar_url} = owner;
        return (
          <div className='repoItem' key={id}>
            <img src={avatar_url} className="repoImg" />
            <p className="repoTxt">{name}</p>
            <p className="repoTxt">{description}</p>
            <a className="repoTxt" href={html_url}>Html Link</a>
            <a className="repoTxt" href={clone_url}>Clone Link</a>
            <p className="repoTxt">{stargazers_count}</p>
          </div>
        )
      })
    }else{
      return repoList = <div></div>
    }
    return (
      <div className="row">
        <div className="repoContainer">
          {repoList}
        </div>
      </div>
    )
  }
}
