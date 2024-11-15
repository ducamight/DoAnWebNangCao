import { userState, useState } from 'react'
import { Form, Button, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../slices/cartSlice'
import { createSlice } from '@reduxjs/toolkit'
import CheckoutSteps from '../components/CheckoutSteps'


const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [adddress, setAddress] = useState(shippingAddress?.adddress || '')
    const [city, setCity] = useState(shippingAddress?.city || '')
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '')
    const [country, setCountry] = useState(shippingAddress?.country || '')

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({ adddress, city, postalCode, country}));
        navigate('/payment');
    }
    return <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1>
            Shipping
        </h1>

        <Form onSubmit={submitHandler}>
            {/*Address*/}
            <FormGroup controlId='address' className='my-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter address'
                    value={adddress}
                    onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </FormGroup>


            {/*City*/}
            <FormGroup controlId='city' className='my-2'>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </FormGroup>

            
            {/*Postal Code*/}
            <FormGroup controlId='postalCode' className='my-2'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter postal code'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
            </FormGroup>

            
            {/*Country */}
            <FormGroup controlId='country' className='my-2'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
            </FormGroup>


            <Button type='submit' variant='primary' className='my-2'>
                Continue
            </Button>
        </Form>
    </FormContainer>
}

export default ShippingScreen