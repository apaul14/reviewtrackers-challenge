import Card from "./ReviewCard"


const ReviewList = ({data}) => {
  return (
      data && data.map((review, idx) => (
        <Card key={idx} reviewData={data[idx]}/>
      ))
    
  )
}
  
export default ReviewList