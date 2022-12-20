import React from 'react'
import Button from '../UI/button/Button';
import './GetRequest.css';

const GetRequest = () => {
  return (
    <div className="get">
      <div className="container">
        <h1>Working with GET request</h1>
        <div className="cards">
        </div>
        <Button showMore='showMore'>Show more</Button>
      </div>
    </div>
  )
}

export default GetRequest