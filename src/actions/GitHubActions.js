import API from '../API';

const GitHubActions = {
  searchByLanguage(languages) {
    API.searchByLanguage(languages)
  },
  searchByUser(langlib) {
    API.searchByUser(langlib)
  },
  searchCH(nameObj) {
    API.searchCH(nameObj)
  }
}

export default GitHubActions;
