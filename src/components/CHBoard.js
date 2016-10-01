import React, { Component } from 'react';
import GitHubStore from '../stores/GitHubStore';

export default class CHBoard extends Component {
  constructor() {
    super();
    this.state = {
      chs: GitHubStore.getAllCH()
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
    this.setState({ chs: GitHubStore.getAllCH() })
  }

  render() {
    let { chs } = this.state;
    let chsList;
    if ( chs ) {
      chsList = chs.map(ch => {
        let {name, avatar_url, id, html_url, repos_url, hireable} = ch;
        if(hireable == null) hireable ='Should update hirable.';
        if(name == null) name ='Should update Name.';
        return (
          <div className='repoItem' key={id}>
            <img src={avatar_url} className="repoImg" />
            <p className="repoTxt">{name}</p>
            <a className="repoTxt" href={html_url}>Pofile</a>
            <a className="repoTxt" href={repos_url}>See {name}'s Repos</a>
            <p className="repoTxt">{hireable}</p>
          </div>
        )
      })
    }else{
      return chsList = <div></div>
    }
    return (
      <div className="row">
        <div className="repoContainer">
          {chsList}
        </div>
      </div>
    )
  }
}
