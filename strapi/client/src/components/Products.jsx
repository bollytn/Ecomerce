import { Fragment, useContext, useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"
import './products.css'
import StoreContect from "../Hooks/storeContext"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartReducer"

export default function products() {
    const [products, setProducts] = useState([])
    const { filter } = useContext(StoreContect)
    const { data, loading, error } = useFetch(filter)

    const dispatch = useDispatch()

    useEffect(() => {
        data && setProducts(data)
    }, [data])

    return (
        <div className="products">
            {loading
                ? "loading... "
                : products.map(product => (
                    <Fragment key={product.id}>
                        <div className="product">
                            <h2 className="product-title">{product.attributes.Title}</h2>
                            <div className="product-price">{product.attributes.price}</div>
                            <img
                                className="product-image"
                                src={import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url}
                                alt={product.title} />
                            <div className="product-desc">{product.attributes.Desc}</div>
                            <button
                                onClick={() => dispatch(addToCart({
                                    id: product.id,
                                    title: product.attributes.Title,
                                    price: product.attributes.price,
                                    image: import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url,
                                    quantity: 1,
                                    total: product.attributes.price,
                                    totalQuantity: 1
                                }))}
                                className="product-btn">Add to Cart
                            </button>
                        </div>
                    </Fragment>

                ))}
        </div>
    )
}