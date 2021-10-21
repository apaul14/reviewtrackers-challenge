// import useState from 'react'
import { useHistory } from 'react-router-dom';

import starIcon from '../star.png'


const ReviewCard = ({ reviewData }) => {
  const { 
    id,
    author, 
    content, 
    place, 
    published_at, 
    rating 
  } = reviewData

  const history = useHistory()
  const handleOnClick = () => {
    localStorage.setItem("selectedReview", JSON.stringify(reviewData));
    history.push(`/reviews/${id}`);
  }


  const ratingArray = Array.from({length: rating}, (x, i) => i + 1)
  const formatedDate = new Date(published_at).toLocaleDateString('en-US')

  return (
    <div className="card-wrap-outer" onClick={() => handleOnClick()}>
      <div className="card-wrap-inner">
        <div className="card-upper">
          <h2>{place}</h2>
          <div className="rating">
            {
              ratingArray.length ? ratingArray.map((element, idx) => (
                <img key={idx} className="star-icon" src={starIcon} alt="star rating"></img>
              )) : null
            }
          </div>
        </div>
        <p className="content">{content}</p>
        <br/>
        <div className="card-lower">
          <p>{author}</p>
          <p>{formatedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard


//add proptypes