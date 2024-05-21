import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isLoading: true, activeId: languageFiltersData[0].id, githubList: []}

  componentDidMount() {
    this.getGitList()
  }

  gotListSuccessful = popularRepos => {
    const updateList = popularRepos.map(repo => ({
      avatarUrl: repo.avatar_url,
      forksCount: repo.forks_count,
      id: repo.id,
      issuesCount: repo.issues_count,
      starsCount: repo.stars_count,
      name: repo.name,
    }))
    console.log(updateList)
    this.setState({githubList: updateList, isLoading: false})
  }

  getGitList = async () => {
    const {activeId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const popularRepos = data.popular_repos
      this.gotListSuccessful(popularRepos)
    }
  }

  changeActive = id => {
    this.setState({activeId: id}, this.getGitList)
  }

  render() {
    const {activeId, isLoading, githubList} = this.state

    return (
      <div className="git-hub-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-filter-item">
          {languageFiltersData.map(language => (
            <LanguageFilterItem
              key={language.id}
              changeActive={this.changeActive}
              languages={language}
              isActive={language.id === activeId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repos-list">
            {githubList.map(eachList => (
              <RepositoryItem key={eachList.id} eachList={eachList} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
