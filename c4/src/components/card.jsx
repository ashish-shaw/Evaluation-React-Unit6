import React from "react";
import "./card.css"

function Card({image,title,brand,category,price}) {
  return (
    <div className="App">
      <div className="card">
        <div className="cards">
          <img src={image} alt="my_pic" className="card_img" />
          <br/>
          <div className="card_info">
           <h3>{brand}</h3>
           <br/>
            <h3 className="card_title">{title}</h3>
            <br/>
            <h3>Rs. {price}</h3>
            <br/>
            <h3>Category:- {category}</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;