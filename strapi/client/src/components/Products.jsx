import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"

export default function products() {
    const [products, setProducts] = useState([])
    const { data, loading, error } = useFetch("/products?populate=*")

    useEffect(() => {
        data && setProducts(data)
        console.log(products);
    }, [data])
    
    return (
        <>
            {loading
                ? "loading... "
                : products.map(product => (
                    <>
                        <div key={product.id}>{product.attributes.Title}</div>
                        <img src={import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url} alt={product.title} />
                    </>
                ))}
        </>
    )
}