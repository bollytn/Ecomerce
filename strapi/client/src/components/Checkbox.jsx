import './checkbox.css'
import qs from "qs"

import { useContext, useEffect, useState } from 'react'
import StoreContect from '../Hooks/storeContext'
export default function Checkbox({ categorie }) {

    const { setFilter, selectedCategories, setSelectedCategorie } = useContext(StoreContect)

    useEffect(() => {
        const query = qs.stringify({
            filters: {
                categories: {
                    id: {
                        $in: selectedCategories
                    }
                }
            }
        })
        setFilter(import.meta.env.VITE_API_URL + "/products?populate=*&" + query)
    }, [selectedCategories])

    const handleFilterCategories = (e) => {

        const selectedID = e.target.dataset.categorie
        const isChecked = e.target.checked

        setSelectedCategorie(selectedCategories => {
            if (isChecked) return [...selectedCategories, selectedID]
            return selectedCategories.filter(id => id !== selectedID)
        })


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
