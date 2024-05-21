import './index.css'

const RepositoryItem = props => {
  const {eachList} = props
  const {avatarUrl, forksCount, issuesCount, starsCount, name} = eachList
  return (
    <li className="repository-item">
      <img className="avatar" src={avatarUrl} alt={name} />
      <h1 className="heading-element">{name}</h1>
      <div>
        <div className="count-container">
          <img
            className="image-s-f-i"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="para">{starsCount} stars</p>
        </div>
        <div className="count-container">
          <img
            className="image-s-f-i"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p className="para">{forksCount} forks</p>
        </div>
        <div className="count-container">
          <img
            className="image-s-f-i"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p className="para">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
