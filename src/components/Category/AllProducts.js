import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../Sidebar';

const AllProducts = (props) => {
    const [showMore, setShowMore] = useState(12);
    const [showButton, setShowButton] = useState(true);
    const sideBar = props.products;

    const handleClick = () => {
        setShowMore(prevValue => prevValue + 12);
    }


    const products = props.products.sort(() => .5 - Math.random()).slice(0, showMore).map((allProducts) => {
        return (
            <Col key={allProducts.id} xxl={4} xl={4} lg={4} md={4} sm={4}>
                <div className="cardElement">
                    <img variant="top" src={allProducts.image[0]} />
                    <span>{allProducts.name}</span>
                    <span>{allProducts.price}</span>
                </div>
            </Col>
            
        )
    })

    // const filteredItems = props.products.filter((x,i,a) => a.indexOf(x) === i)
    // console.log(filteredItems)

    return (
        <Container className="productList">
            
            <Row >
                <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={12}>
                <Sidebar products = {sideBar}/>
                </Col>
                <Col xxl={9} xl={9} lg={9} md={9} sm={9} xs={12}>
                <Row>   
                {products}
                <button
                style={{ display: showMore === props.products.length ? 'none' : 'block' }}
                onClick={() => handleClick()}>Show More</button>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AllProducts;