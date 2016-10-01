import API from '../API';

const GitHubActions = {
  searchByLanguage(languages) {
    API.searchByLanguage(languages)
  },
  searchByUser(langlib) {
    API.searchByUser(langlib)
  },
  searchCH(nameArr) {
    API.searchCH(nameArr)
  }
}

export default GitHubActions;
