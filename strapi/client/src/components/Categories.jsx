import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"

export default function Categories() {
    const [categories, setCategories] = useState([])
    const { data, loading, error } = useFetch("/categories?populate=*")

    useEffect(() => {
        data && setCategories(data)
        console.log(categories);
    }, [data])

    return (
        <div className="categories">
            {loading
                ? "loading... "
                : categories.map(categorie => (
                    <>
                        <div className="categorie" key={categorie.id}>
                            <h2 className="categorie-title">{categorie.attributes.Title}</h2>
                            <div className="categorie-price">{categorie.attributes.price}</div>
                            <img
                                className="categorie-image"
                                src={import.meta.env.VITE_APP_URL + categorie.attributes.image.data.attributes.url}
                                alt={categorie.title} />
                            <div className="categorie-desc">{categorie.attributes.desc}</div>
                        </div>

                    </>
                ))}
        </div>
    )
}