import './App.css';

import { useState,useEffect } from 'react'

import ReviewList from './components/ReviewList';
// const reviews = require('../public/reviewData.json')
// console.log(reviews)

import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async() => {
      try {
        const reviewsData = await axios.get('./reviewData.json')
        setData(reviewsData.data)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header className="header">Reviews</header>
        <main className="body review-list">
          <ReviewList data={data}/>
        </main>
    </div>
  );
}

export default App;
