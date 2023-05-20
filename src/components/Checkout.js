import React from 'react';
import "../styles/Styles.css";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            email: '',
            address: '',

        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        // event.preventDefault();
        alert("Order placed successfully!");
    };

    render() {
        return (
            <div className='checkoutForm'>
                <div>
                    <h2>Shipping Details (checkout)</h2>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="text"
                                email="email"
                                // value={this.state.email}
                                // onChange={this.handleChange}
                                required
                            />
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                address="address"
                                // value={this.state.address}
                                // onChange={this.handleChange}
                                required
                            />
                        </label>
                        <div>
                            <button type="submit">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Checkout;
