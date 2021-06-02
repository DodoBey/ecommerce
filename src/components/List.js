import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const List = (props) => {
    const [showMore, setShowMore] = useState(12);

    const handleClick = () => {
        setShowMore(prevValue => prevValue + 12);
    }

    
    const products = props.products.slice(0, showMore).map(allProducts => {
        return (
            <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
            <div className="cardElement">
            <img variant="top" src={allProducts.image[0]} />
            <span>{allProducts.name}</span>
            <span>{allProducts.price}</span>
            </div>
            </Col>
        )
    })

    return (
        <Container className="productList">
            <Row>
           {products}
           </Row>
           <button onClick={() => handleClick()}>Show More</button>
        </Container>
    )
}

export default List;