import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import "../css/Comment.css"

export default function Comment() {
  return (
    <div className="comment-box">
        <div className="person-box">
          <img src={require(`../img/Mask.png`)}/>
          <div>
            <FaStar className="color-star star"/>
            <FaStar className="color-star star"/>
            <FaStar className="color-star star"/>
            <FaStar className="color-star star"/>
            <FaRegStar className="star"/>
            <h4>Жора Ремінгтон</h4>
          </div>
        </div>
        <div className="comment-tex">
          <p>Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
        </div>
    </div>
  );
}

