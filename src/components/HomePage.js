import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = (props) => {
    const products = props.products

    console.log(products);

    return (
        <>
        <p>THIS IS HOMEPAGE</p>
        </>
    )
}

export default HomePage;