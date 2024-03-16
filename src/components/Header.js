import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { CiShoppingBasket } from "react-icons/ci";

import "../css/Header.css"

export default function Header() {
    return (
      <div>
        <div className="header-container">
            <div className="header-first">
                <div className="help-box">
                    <p>098 900 09 09</p>
                    <p>Допомога</p>
                </div>
                <p>Увійти / Зареєструватися</p>
            </div>

            <div className="header-second">
                <img src={require(`../img/Logo.png`)}/>
                <div className="nav-box">
                    <p>новинки</p>
                    <p>чоловіки</p>
                    <p>жінки</p>
                    <p>аксесуари</p>
                    <p>акції</p>
                </div>
                <div className="search-box">
                    <div className="search-line">
                        <CiSearch className="search-icon"/>
                    </div>    
                    <GoHeart className="search-icon icon"/>
                    <CiShoppingBasket className="search-icon icon"/>

                </div>
            </div>

        </div>
        
      </div>
    );
  }
  
  