import React, { useState } from 'react';
import "../styles/Styles.css";
import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Col } from 'react-bootstrap';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Checkout({setToken}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'address') setAddress(value);
    };

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedPaymentMethod) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false); // Hide the alert after timeout
                setSelectedPaymentMethod(''); // Reset payment method
                navigate('/'); // Navigate to the home path
                setTimeout(() => {
                    window.location.reload(); // Reload the window after navigating
                });
            }, 1000);
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <>
            <Header setToken={setToken} />
            <div style={{ paddingTop: "6rem", marginBottom: "2rem", textAlign: "center" }}>
                {showAlert && (
                    <Alert className='alert-container' severity="success">
                        <AlertTitle>Order placed successfully!</AlertTitle>
                    </Alert>
                )}
            </div>
            <div className='checkout'>
                <Col sm={1}>
                    <div className="vl"></div>
                </Col>
                <form className='checkoutForm'>
                    <h2>Shipping Details</h2>
                    <TextField className="input" id="outlined-basic" label="Name" variant="outlined" type="name" required onChange={handleChange} />
                    <TextField className="input" id="outlined-basic" label="Email" variant="outlined" type="email" required onChange={handleChange} />
                    <TextField className="input" id="outlined-basic" label="Address" variant="outlined" type="text" required onChange={handleChange} />
                </form>
                <Col sm={1}>
                    <div className="vl"></div>
                </Col>
                <div className='checkoutForm'>
                    <h2>Select a Payment Method</h2>
                    <label>
                        <input type="radio" value="Paypal" checked={selectedPaymentMethod === 'Paypal'} onChange={handlePaymentMethodChange} />
                        Paypal
                    </label>
                    <label>
                        <input type="radio" value="Credit/Debit Card" checked={selectedPaymentMethod === 'Credit/Debit Card'} onChange={handlePaymentMethodChange} />
                        Credit/Debit Card
                    </label>
                    <label>
                        <input type="radio" value="Cash on Delivery" checked={selectedPaymentMethod === 'Cash on Delivery'} onChange={handlePaymentMethodChange} />
                        Cash on Delivery
                    </label>
                    <Button variant="contained" className="login-btn" style={{ color: "white", backgroundColor: "black" }} onClick={handleSubmit}>Place Order</Button>
                </div>
                <Col sm={1}>
                    <div className="vl"></div>
                </Col>
            </div>
        </>
    );
}

export default Checkout;
