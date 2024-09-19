import { Fragment, useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"
import Checkbox from "./Checkbox"
import './categories.css'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const { data, loading, error } = useFetch("/categories?populate=*")

    useEffect(() => {
        data && setCategories(data)
    }, [data])

    return (
        <div className="categories">
            {loading
                ? "loading... "
                : categories.map(categorie => (
                    <Fragment key={categorie.id}>
                        <Checkbox categorie={categorie} />
                    </Fragment>
                ))}
        </div>
    )
}