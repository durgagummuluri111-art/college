import React from 'react'
import veda from '../../public/images/veda.jpeg'
import logo from '../../public/images/logo.jpg'
import college from '../../public/images/college.jpg'
import ipday from '../../public/images/ipday.jpg'
import buses from '../../public/images/buses.jpg'
import './article.css'

const Article = () => {
  return (
    <div id="Gallery">
      <h4>Our Gallery</h4>
      <img src={veda}></img>
      <img src={logo}></img>
      <img src={college}></img>
      <img src={ipday}></img>
      <img src={buses}></img>
      <div id="con"><h2>CONTACT</h2></div>
      <div id="Contact">
        <p>further enquires about our college,please contact us:<br></br>
          phno:8500862666,<br></br>
               8500864666<br></br>
          Email:vedadegree666@gamail.com
          Address:cinema road,tatipaka.Dr.B.R.Ambedkar Konaseema District,Andhra Pradesh -533249 
          </p>
      </div>
    </div>
  )
}

export default Article
