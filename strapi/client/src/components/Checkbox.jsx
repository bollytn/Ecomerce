import './checkbox.css'
import qs from "qs"

import { useContext } from 'react'
import StoreContect from '../Hooks/storeContext'
export default function Checkbox({ categorie }) {

    const { filter, setFilter } = useContext(StoreContect)

    const handleFilterCategories = (e) => {
        const query  = qs.stringify({
            filters: {
                categories: {
                    id: {
                        $in:[1,1]
                    }
                }
            }
        })
        setFilter("http://localhost:1337/api/products?populate=*&" + query)
    }

    return (
        <>
            <label className="toggler-wrapper style-1">
                <input
                    type="checkbox"
                    onChange={handleFilterCategories}
                    data-categorie={categorie.id}
                />
                <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                </div>
                <div className="badge">{categorie.attributes.Title}</div>
            </label>

            {/* <h2 className="categorie-title">{categorie.attributes.Title}</h2>
            <div className="categorie-desc">{categorie.attributes.Desc}</div>
            <img
                className="categorie-image"
                src={import.meta.env.VITE_APP_URL + categorie.attributes.image.data.attributes.url}
                alt={categorie.attributes.title} /> */}
        </>
    )
}
