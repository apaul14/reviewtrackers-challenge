import Card from "./ReviewCard"


const ReviewList = ({data}) => {
  console.log(data)
  return (
      data && data.map((review,idx) => (
        <Card reviewDetails={data[idx]}/>
      ))
    
  )
}
  
export default ReviewList