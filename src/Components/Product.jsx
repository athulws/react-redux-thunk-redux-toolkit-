
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';



const Product = () => {
    const [products, getProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProduct(result));
    }, [])

    // ...............................cart il add aakan....................................................................................................

    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(add(product))
    }

    // ...............................cart il add aakan....................................................................................................
    return (
        <div>
            <div>
                <h1>Product Dashboard</h1>
                <div className='row'>
                    {products.map(product => (
                        <div className='col-md-3' style={{ marginBottom: '10px' }} key={product.id}>
                            <Card className='h-100'>
                                <div className='text-center'>
                                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>INR: {product.price}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product