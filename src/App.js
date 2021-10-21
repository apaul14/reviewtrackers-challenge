import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useState,useEffect } from 'react'

import ReviewList from './components/ReviewList';
import ReviewDetail from './components/ReviewDetail';
// const reviews = require('../public/reviewData.json')
// console.log(reviews)

import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const reviewsData = await axios.get('./reviewData.json')
        setData(reviewsData.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="header">Reviews</header>
          <main className="body review-list">
          <Switch>
            <Route exact path="/reviews/:id"> <ReviewDetail/> </Route>
            <Route path="/"> <ReviewList data={data}/>  </Route>
            
              {/* <ReviewList data={data}/> */}
          </Switch>  
            
        </main>
      </div>
    </Router>
  );
}

export default App;
