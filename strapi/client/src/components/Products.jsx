import { Fragment, useContext, useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"
import './products.css'
import StoreContect from "../Hooks/storeContext"

export default function products() {
    const [products, setProducts] = useState([])
    const { filter } = useContext(StoreContect)
    const { data, loading, error } = useFetch(filter)

    useEffect(() => {
        data && setProducts(data)
        console.log(products);
        
    }, [data])

    useEffect(() => {
        console.log(filter);
    }, [filter])

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
                        </div>
                    </Fragment>

                ))}
        </div>
    )
}