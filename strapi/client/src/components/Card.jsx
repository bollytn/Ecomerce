import { useState } from 'react';
import './card.css'
import { CiShoppingBasket } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from "../Redux/cartReducer"

export default function Card() {
  const [cartList, setCartList] = useState(false)

  const products = useSelector(state => state.cart.products)

  const dispatch = useDispatch()

  const handlecart = () => {
    setCartList(!cartList)
  }

  return (
    <div className="cart">
      <div className="cart-icon" onClick={products.length > 0 ? handlecart : undefined}><CiShoppingBasket /></div>
      <div className="cart-badge">{products.length}</div>
      {
        cartList || products.length > 0 &&
        (
          <ul className="cart-list">
            {products.map(product => (
              <li className="cart-item"
                key={product.id}
                onClick={() => dispatch(removeFromCart({
                  id: product.id,
                }))}
              >
                <img className="cart-item-image" src={product.image} alt={product.title} />
                <span className="cart-item-title">{product.title}</span>
                <span className="cart-item-price">{product.price}</span>
                <span className='cart-item-remove'> <FaTrash /> </span>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}
