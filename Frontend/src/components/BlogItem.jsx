//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BlogList from "../../public/BlogList.json"
import Cards from "./Cards";
function BlogItem() {
    const filterData=BlogList.filter((data)=>data.category==="Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className="shadow bg-base-100 md:px-20 px-4  py-4 sticky top-20 left-0 right-0 ">
       <div><h1 className="font-bold text-2xl text-center">Adobe illustrator & Adobe PhotoShop </h1>
    <p className="py-3">Some of my work on graphics design.Last year I worked on these project.Here I can use 
    Adobe Illustrator,Adobe Photoshop, Canva, Adobe InDesign, Procreate, Sketch,Adobe Express, Affinity Designer.</p>    
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) =>(
          <Cards item={item} key={item.id}/>
        ))}
         
      </Slider>
    </div>
    </div> 
  
    </>
  )
}

export default BlogItem
