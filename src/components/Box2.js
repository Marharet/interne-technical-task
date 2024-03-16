import React from "react";

import "../css/Box2.css"

export default function Box2() {
  return (
    <div className="box2-container" >
        <div className="box2-info">
            <h1>Ми знаємо, що сподобається вашим “великим” друзям!</h1>
            <p>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
            <button>До каталогу</button>
        </div>
        <img src={require(`../img/forBox2.png`)}/>
    </div>
  );
}

