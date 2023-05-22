import React from 'react';
import "../styles/Styles.css";
import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Col } from 'react-bootstrap';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            showAlert: false,
            selectedPaymentMethod: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handlePaymentMethodChange = (e) => {
        this.setState({ selectedPaymentMethod: e.target.value });
    };

    handleSubmit = (e) => {
        const { selectedPaymentMethod } = this.state;
        if (selectedPaymentMethod) {
            this.setState({ showAlert: true }, () => {
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
        } else {
            alert('Please select a payment method.');
        }
    };

    render() {
        const { showAlert, selectedPaymentMethod } = this.state;
        return (
            <>
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
                        <TextField className="input" id="outlined-basic" label="Name" variant="outlined" type="name" required onChange={(e) => this.handleChange(e)} />
                        <TextField className="input" id="outlined-basic" label="Email" variant="outlined" type="email" required onChange={(e) => this.handleChange(e)} />
                        <TextField className="input" id="outlined-basic" label="Address" variant="outlined" type="text" required onChange={(e) => this.handleChange(e)} />
                    </form>
                    <Col sm={1}>
                        <div className="vl"></div>
                    </Col>
                    <div className='checkoutForm'>
                        <h2>Select a Payment Method</h2>
                        <label>
                            <input type="radio" value="Paypal" checked={selectedPaymentMethod === 'Paypal'} onChange={this.handlePaymentMethodChange} />
                            Paypal
                        </label>
                        <label>
                            <input type="radio" value="Credit/Debit Card" checked={selectedPaymentMethod === 'Credit/Debit Card'} onChange={this.handlePaymentMethodChange} />
                            Credit/Debit Card
                        </label>
                        <label>
                            <input type="radio" value="Cash on Delivery" checked={selectedPaymentMethod === 'Cash on Delivery'} onChange={this.handlePaymentMethodChange} />
                            Cash on Delivery
                        </label>
                        <Button variant="contained" className="login-btn" style={{ color: "white", backgroundColor: "black" }} onClick={this.handleSubmit}>Place Order</Button>
                    </div>
                    <Col sm={1}>
                        <div className="vl"></div>
                    </Col>
                </div>
            </>
        );
    }
}

export default Checkout;
