import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";

import "../css/Box1.css"

export default function Box1() {
  return (
    <div className="box1-container" >
        <div className="box1-block">
            <IoIosArrowBack className="arrow left"/>
            <div>
                <h1>Швидше.</h1>
                <h1>Вище.</h1>
                <h1>Сильніше.</h1>
                <h2>Разом із Nike</h2>
            </div>
        </div>
        <div className="box1-block">
            <div className="right-part">
                <div className="sales-box">
                    <h3>Знижки до 40%</h3>
                </div>
                <p>Залишився лише тиждень</p>
            </div>
            <IoIosArrowForward className="arrow right"/>
        </div>
    </div>
  );
}

