import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"
import './products.css'

export default function products() {
    const [products, setProducts] = useState([])
    const { data, loading, error } = useFetch("/products?populate=*")

    useEffect(() => {
        data && setProducts(data)
        console.log(products);
    }, [data])

    return (
        <div className="products">
            {loading
                ? "loading... "
                : products.map(product => (
                    <>
                        <div className="product" key={product.id}>
                            <h2 className="product-title">{product.attributes.Title}</h2>
                            <div className="product-price">{product.attributes.price}</div>
                            <img
                                className="product-image"
                                src={import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url}
                                alt={product.title} />
                            <div className="product-desc">{product.attributes.Desc}</div>
                        </div>

                    </>
                ))}
        </div>
    )
}