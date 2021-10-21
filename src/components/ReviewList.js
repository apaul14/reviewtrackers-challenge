import ReviewCard from "./ReviewCard"


const ReviewList = ({data}) => {
  return (
      data && data.map((review, idx) => (
        <ReviewCard key={idx} reviewData={data[idx]} showResponseButton={false}/>
      ))
    
  )
}
  
export default ReviewList