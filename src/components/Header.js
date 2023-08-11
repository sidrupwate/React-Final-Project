import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Styles.css";
// import { Badge, Dropdown } from 'react-bootstrap';
// import { FiShoppingCart } from 'react-icons/fi'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import { removeFromCart } from '../redux/actions/productActions';
// import { Link } from 'react-router-dom';

const Header = ({ handleSearch, setToken }) => {
    const handleLogout = () => {
        setToken();
        localStorage.clear();
    };



    // const handleSearchChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    const [price, setPrice] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);
    // console.log(price);

    const handleProceedToBuy = () => {
        setShowCheckout(true);
    };

    const getData = useSelector((state) => state.Cart.cart);
    // console.log(getData);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {

        setAnchorEl(null);
    };

    const remove = (id) => {
        dispatch(removeFromCart(id))
    }

    const total = () => {
        let price = 0;
        getData.map((products, k) => {
            price = products.price + price
        });
        setPrice(price);
    };
    useEffect(() => {
        total();
    }, [total])
    return (
        <>
            <div className='navBar'>
                <Navbar>
                    <div className='brandLogo'>

                        <img className="logo" src="https://techinfini.in/wp-content/uploads/2014/10/ecommerce-white-icon.png" />

                        <Navbar.Brand className='brandLogo' style={{ color: "white", fontWeight: "600" }} href="#">Shopping App</Navbar.Brand>
                    </div>
                    <Form className='searchBar'>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            // value={searchQuery}
                            onChange={handleSearch}

                        />
                    </Form>
                    <div>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className='navMenu' navbarScroll>
                                <Link to='/' style={{ textDecoration: "none" }}>
                                    <Nav className='navBarItems' href="#action1">Home</Nav>
                                </Link>
                                <Link to='/' style={{ textDecoration: "none" }}>
                                    <Nav className='navBarItems' href="#action2">Products</Nav>
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <Nav href="#action8" className='navBarItems' onClick={handleLogout}>Sign Out</Nav>
                                </Link>
                                <div>
                                    <Badge badgeContent={getData.length} color="primary"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}><ShoppingCartIcon style={{ color: "white", margin: "5px", fontSize: "2rem", cursor: "pointer" }} className='cartIcon' /></Badge>
                                </div>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >

                                    {
                                        getData.length ?
                                            <div className='card-details' style={{ width: "24rem", padding: 10 }}>
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Name</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            getData.map((e) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>

                                                                                <img src={e.image} style={{ width: "5rem", height: "5rem" }} />

                                                                            </td>
                                                                            <td>
                                                                                <p>{e.title}</p>
                                                                                <p>Price:${e.price}</p>
                                                                            </td>
                                                                            <td>
                                                                                <span style={{ color: "red", cursor: "pointer" }} onClick={() => remove(e.id)}>
                                                                                    <DeleteIcon />
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <p className='text-center'>
                                                            Total: $ {price}
                                                        </p>
                                                    </tbody>

                                                </Table>
                                                {showCheckout ? (
                                                    <Checkout />
                                                ) : (
                                                    <Link to={"/checkout"}>
                                                        <Button style={{ backgroundColor: "black", width: "100%" }} onClick={handleClose}>Proceed to Buy</Button>
                                                    </Link>

                                                )}

                                            </div> :
                                            <span style={{ padding: "0 1rem" }}>Cart is Empty!</span>
                                    }


                                </Menu>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
