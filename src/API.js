import ServerActions from './actions/ServerActions';
import {get} from 'axios';
import _ from 'lodash';

let chs = [];
let topUsersOld = [];

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
    let specialName =['marsholly','joshuaMaddox'];
    specialName.forEach(name => {
        get(`https://api.github.com/users/${name}`)
          .then(res => {
            let {data} = res;
            let usData = {
              login: data.name,
              avatar_url: data.avatar_url,
              html_url: data.html_url,
              id: data.id
            }
            topUsersOld.push(usData);
          })
          .catch(console.error);
    })
   get(`https://api.github.com/search/users?q=language:${langlib}+followers:%3E3000&sort=stars&order=desc`)
     .then( res => {
       let users = res.data;
       let others = users.items;
       others.forEach(other => {
         let topUsersOther ={
           login: other.login,
           avatar_url: other.avatar_url,
           html_url: other.html_url,
           id: other.id
         }
         topUsersOld.push(topUsersOther);
       })
       let topUsers = _.shuffle(topUsersOld);
       ServerActions.receiveUsers(topUsers);
       topUsersOld = [];
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
