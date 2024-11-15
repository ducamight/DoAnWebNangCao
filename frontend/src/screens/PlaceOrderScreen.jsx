import { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { toast } from 'react-toastify'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { userCreateOrderMutation } from '../slices/ordersApiSlice'
import { clearCartItems } from '../slices/cartSlice'

const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    useEffect(() =>{
        if(!cart.shippingAddress.address){
            navigate('/shipping');
        }else if(!cart.paymentMethod){
            navigate('/payment');
        }
    }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

    return (
        <div>Place Order</div>
        // <>
        //     <CheckoutSteps step1 step2 step3 step4 />
        //     <Row>
        //         <Col md={8}>
        //             <ListGroup.Item>
        //                 <h2>Shipping</h2>
        //                 <p>
        //                     <strong>Address:</strong>
        //                     {cart.shippingAddress.address}, {cart.shippingAddress.city}, 
        //                     {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
        //                 </p>
        //             </ListGroup.Item>
        //         </Col>

        //         <Col md={4}>Column</Col>

        //     </Row>
        // </>
    )
}

export default PlaceOrderScreen