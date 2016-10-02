import ServerActions from './actions/ServerActions';
import {get} from 'axios';

let chs = [];
const API = {
  searchByLanguage(languages) {
      get(`https://api.github.com/search/repositories?q=${languages}+language:js&sort=stars&order=desc`)
        .then( res => {
          let repos = res.data;
          let topRepos = repos.items;
          ServerActions.receiveRepos(topRepos);
        })
        .catch(console.error);
  },
  searchByUser(langlib) {
    get(`https://api.github.com/search/users?q=language:${langlib}+followers:%3E3000&sort=stars&order=desc`)
      .then( res => {
        let users = res.data;
        let topUsers = users.items;
        ServerActions.receiveUsers(topUsers);
      })
      .catch(console.error);
  },
  searchCH(nameObj) {
    let { len, nameArr } = nameObj;
    if(chs.length < len){
      nameArr.forEach(name => {
        get(`https://api.github.com/users/${name}`)
         .then (res => {
           let {data} = res;
           chs.push(data);
           ServerActions.receiveCH(chs);
         })
         .catch(console.error);
      })
    }

  }
}

export default API;
