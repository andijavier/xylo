import React from 'react'
import { Icon } from '@iconify/react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import howie from "../assets/howie.jpeg"
import gokul from "../assets/gokul.jpeg"

function Post() {
  const setttings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
  }
  return (
    <div className="container">
      <Slider className="slider pt-3" {...setttings}>
        <div className="card">
          <img src={howie} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO</h5>
            <p className="card-text">In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO.</p>
            <a href="#" className="btn btn-notes">Show notes</a>
          </div>
        </div>
        <div className="card">
          <img src={gokul} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO</h5>
            <p className="card-text">In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO.</p>
            <a href="#" className="btn btn-notes">Show notes</a>
          </div>
        </div>
        <div className="card">
          <img src={howie} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO</h5>
            <p className="card-text">In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO.</p>
            <a href="#" className="btn btn-notes">Show notes</a>
          </div>
        </div>
        <div className="card">
          <img src={gokul} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO</h5>
            <p className="card-text">In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO.</p>
            <a href="#" className="btn btn-notes">Show notes</a>
          </div>
        </div>
        <div className="card">
          <img src={howie} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO</h5>
            <p className="card-text">In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO.</p>
            <a href="#" className="btn btn-notes">Show notes</a>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Post