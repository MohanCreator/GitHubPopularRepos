import './index.css'

const LanguageFilterItem = props => {
  const {languages, changeActive, isActive} = props
  const {id, language} = languages

  const onActive = () => {
    changeActive(id)
  }

  const classValue = isActive ? 'isActive' : ''

  return (
    <li>
      <button
        onClick={onActive}
        className={`normal-button ${classValue}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
