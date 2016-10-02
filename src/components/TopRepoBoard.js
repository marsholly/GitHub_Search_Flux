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
        let {clone_url, owner, name, id, html_url, stargazers_count} = topRepo;
        let {avatar_url} = owner;
        return (
         <div className="col-md-3" key={id}>
          <div className='gitRepItem'>
            <img src={avatar_url} className="gitRepImg" />
            <p className="gitRepName">{name}</p>
            <a className="gitRepProfile" href={html_url}>Html Link</a>
            <a className="gitRepClone" href={clone_url}>Clone Me</a>
            <p className="gitRepGazers">{stargazers_count}<br /><span className='smallStar'>stars</span></p>
          </div>
        </div>
        )
      })
    }else{
      return repoList = <div></div>
    }
    return (
      <div className="row topRepoBoard">
        <h1>The Most Watched Repos on Git Hub Related to Your Search</h1>
        <h4 className='bottomText'>Go clone yourself a good time!</h4>
          {repoList}
        }
      </div>
    )
  }
}
