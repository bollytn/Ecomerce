import './card.css'
import { CiShoppingBasket } from "react-icons/ci";

export default function Card() {
  return (
    <div className="cart">
      <div className="cart-icon"><CiShoppingBasket /></div>
      <div className="cart-badge">5</div>
      <ul className="cart-list">
        <li className="cart-item">
          <img src="http://localhost:1337/uploads/men_02_6574cf6348.jpg" alt="" className="cart-item-image" />
          <span className="cart-item-title">Classic Sprint</span>
          <span className="cart-item-price">120$</span>
        </li>
        <li className="cart-item">
          <img src="http://localhost:1337/uploads/men_03_f9a87cf369.jpg" alt="" className="cart-item-image" />
          <span className="cart-item-title">Classic Sprint</span>
          <span className="cart-item-price">120$</span>
        </li>
        <li className="cart-item">
          <img src="http://localhost:1337/uploads/women_01_c0b1a2b538.jpg" alt="" className="cart-item-image" />
          <span className="cart-item-title">Classic Sprint</span>
          <span className="cart-item-price">120$</span>
        </li>
        <li className="cart-item">
          <img src="http://localhost:1337/uploads/women_02_652a34c8e5.jpg" alt="" className="cart-item-image" />
          <span className="cart-item-title">Classic Sprint</span>
          <span className="cart-item-price">120$</span>
        </li>
      </ul>
    </div>
  )
}
