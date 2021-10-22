import { useState, useEffect } from 'react'

import ReviewCard from "./ReviewCard"
import Responsecard from "./ResponseCard"
import ResponseModal from "./ResponseModal"



const ReviewDetail = () => {
  // const { 
  //   id,
  //   author, 
  //   content, 
  //   place, 
  //   published_at, 
  //   rating 
  // } = JSON.parse(localStorage.getItem("selectedReview"))
  useEffect(() => {
    const fetchData = () => {
      try {
        const responseData = JSON.parse(localStorage.getItem(`${data.id}`)) || {}
        setResponse(responseData)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  const data = JSON.parse(localStorage.getItem("selectedReview"))
  // const [response, setResponse] = useState({})

  // const submitResponse = res => {
  //   console.log(res)
  // }
  const [showModal, setModalState] = useState(false)
  const [response, setResponse] = useState({})

  //const responseData = JSON.parse(localStorage.getItem(`${data.id}`)) | null
  //console.log(data,responseData)
  const submitResponse = res => {
    setResponse(res)
    localStorage.setItem(`${data.id}`, JSON.stringify(res))
  }

  // const modalFuncy = () => {
  //   setModalState(true)
  // }

  return (
    <>
      <ReviewCard reviewData={data} showResponseButton={!response} modalFuncy={()=>setModalState(true)}/>
      {response.name && <Responsecard responseData={response}/>}
      <ResponseModal responseData={response} show={showModal} handleClose={ () => setModalState(false)} submitResponse={submitResponse}/>
    </>
  )
}

export default ReviewDetail