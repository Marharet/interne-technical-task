import React from "react";

import "../css/Footer.css"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-first">
        <div>
            <h3>Контакт - центр</h3>
            <p>098 900 09 09 </p>
            <p>Пн - Пт 09:00 - 21:00</p>
            <p>Пн - Пт 09:00 - 21:00</p>
        </div>
        <div>
            <h3>Покупцям</h3>
            <p>Оплата і доставка</p>
            <p>Повернення</p>
            <p>Питання та відповіді</p>
        </div>
        <div>
            <h3>Особистий кабінет</h3>
            <p>Мої дані</p>
            <p>Історія замовлень</p>
            <p>Улюблені</p>
            <p>Розсилки</p>
        </div>
        <div>
            <h3>Про компанію</h3>
            <p>Про нас</p>
            <p>Новини</p>
            <p>Стати партнером</p>
            <p>Угода користувача</p>
        </div>
      </div>

      <div className="footer-second">
        <div className="nav-box footer-color">
            <p>новинки</p>
            <p>чоловіки</p>
            <p>жінки</p>
            <p>аксесуари</p>
            <p>акції</p>
        </div>
        <div>
            <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </div>
  );
}

