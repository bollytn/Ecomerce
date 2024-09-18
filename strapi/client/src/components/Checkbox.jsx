
export default function Checkbox({ categorie }) {
    return (
        <>
            <h2 className="categorie-title">{categorie.attributes.Title}</h2>
            <div className="categorie-desc">{categorie.attributes.description}</div>
            <img
                className="categorie-image"
                src={import.meta.env.VITE_APP_URL + categorie.attributes.image.data.attributes.url}
                alt={categorie.attributes.title} />
        </>
    )
}
