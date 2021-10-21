import ReviewCard from "./ReviewCard"
import Responsecard from "./ResponseCard"
import ResponseModal from "./ResponseModal"


const ReviewDetail = () => {
  const data = JSON.parse(localStorage.getItem("selectedReview"))
  console.log(JSON.parse(localStorage.getItem("selectedReview")))
  const { 
    id,
    author, 
    content, 
    place, 
    published_at, 
    rating 
  } = JSON.parse(localStorage.getItem("selectedReview"))

  return (
    <>
      <ReviewCard style={{width: 100}} reviewData={data}/>
      <Responsecard/>
      <ResponseModal/>
    </>
  )
}

export default ReviewDetail