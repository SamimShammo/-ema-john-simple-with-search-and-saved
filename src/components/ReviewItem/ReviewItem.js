import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const { name, quantity, price, key} = props.products;
    const {handeleRemove} = props;
    return (
        <div className="product">
            <div className="">
                <h2 className="product-name">Name: {name}</h2>
                <p>Quantity: {quantity}</p>
                <button className="btn-regular" onClick={() => handeleRemove(key)}>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;