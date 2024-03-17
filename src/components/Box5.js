import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Comment from "./Comment";

import "../css/Box5.css"

export default function Box5() {
  return (
    <div className="box5-container" >
        <div className="box5-title">
            <h3>Відгуги наших клієнтів</h3>
            <div className="box5-arrow">
                <p>01 / 03</p>
                <IoIosArrowRoundBack className="light"/>
                <IoIosArrowRoundForward className="dark"/>
            </div>
        </div>
        <div className="comments-box">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>
  );
}

