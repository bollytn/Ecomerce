import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

import { useEffect } from "react";

import { Category } from "@components/ecommerce"
import { Container, Row, Col } from "react-bootstrap";
const Categories = () => {

    const dispatch = useAppDispatch()

    const { records, loading, error } = useAppSelector(state => state.categories)

    useEffect(() => {
        dispatch(actGetCategories())
    }, [dispatch])


    const categoriesList = records.length > 0 ?
        records.map(record => {
            return (
                <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
                    <Category {...record} />
                </Col>)
        }) :
        <h1>No categories</h1>

    return (
        <Container>
            <Row>
                {categoriesList}
            </Row>
        </Container>
    )
}

export default Categories