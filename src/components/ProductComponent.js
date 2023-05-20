import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Styles.css";
import Header from "./Header";
import Footer from "./Footer";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);



    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <>
                <div className="card" key={id}>
                    <Link to={`/product/${id}`}>
                        <div>
                            <img src={image} alt="#" />
                        </div>
                    </Link>
                    <div className="card-description">
                        <h5>{title}</h5>
                        <div>
                            <span style={{ fontWeight: "700" }}>Price:</span>
                            <span style={{ color: "green", fontWeight: "700", marginLeft: "5px" }}>{`$${price}`}</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: "700", color: "red" }}>Category:</span>
                            <span style={{ color: "blue", fontWeight: "600", marginLeft: "5px" }}>{`${category}`}</span>
                        </div>
                    </div>
                </div>
            </>
        );

    });

    return (
        <>
            {renderList}
        </>

    );
};

export default ProductComponent;
