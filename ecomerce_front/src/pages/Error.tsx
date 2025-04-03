import { Container } from "react-bootstrap"
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    const errorStatus: number = isRouteErrorResponse(error)
        ? error.status
        : 404
    const errorStatusText: string = isRouteErrorResponse(error)
        ? error.statusText
        : "Page Not Found";
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
            <Container className="notFound">
                <h1>{errorStatus}</h1>
                <p>{errorStatusText}</p>
                <Link to="/" replace={true}>Go to home
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </Container>
        </div>
    )
}

export default Error