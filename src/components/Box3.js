import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import data from "./goodsAndPrices.js"

import "../css/Box3.css"
import "../css/Box5.css"

export default function Box3() {


  
  return (
    <div className="box5-container" >
        <div className="box5-title">
            <h3>Найгарячіші товари</h3>
            <div className="box5-arrow">
                <p>01 / 03</p>
                <IoIosArrowRoundBack className="light"/>
                <IoIosArrowRoundForward className="dark"/>
            </div>
        </div>

      <div className="goods-container">
          {data.map((item) => (
            <div key={item.id} className="item">
              <img src={require(`../img/${item.img}`)} alt={item.goodsTitle} />
              <h4>{item.goodsTitle}</h4>
              <p className="subtitles">{item.category}</p>
              <p className="subtitles">{item.assets}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
      </div>

      
       
    </div>
  );
}

