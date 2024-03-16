import React from "react";

import "../css/Box4.css"

export default function Box4() {
  return (
    <div className="box4-container" >
        <h1>Спіймай всі акції!</h1>
        <p>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
        <div className="box4-form">
            <input type="email" placeholder="ВВЕДІТЬ"/>
            <button>Підписатись</button>
        </div>
    </div>
  );
}

