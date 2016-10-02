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
        /*if(hireable == null) hireable ='UPDATE HIREABLE';*/
        if(name == null) name ='UPDATE NAME';
        return (
        <div className="col-xs-4">
          <div className='gitItem ' key={id}>
            <img src={avatar_url} className="gitImg" />
            <p className="gitName">{name}</p>
            <a className="gitProfile" href={html_url}>Visit Profile</a>
            <a className="gitRepo" href={html_url + '?tab=repositories'}>Steal My Code</a>
            {!hireable ? <p className="gitHire">Not Hireable!</p> : <p className="gitHireNotNeeded">{hireable}</p>}
          </div>
        </div>
        )
      })
    }else{
      return chsList = <div></div>
    }
    return (
      <div className="row chBoard">
          {chsList}
      </div>
    )
  }
}
