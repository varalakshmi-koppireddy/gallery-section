// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onChangeContent, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const onClickImage = () => {
    onChangeContent(id)
  }
  const activeClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
