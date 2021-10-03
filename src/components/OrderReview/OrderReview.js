import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {useHistory} from 'react-router'

const OrderReview = () => {
    const [product, setProduct] = useProduct()
    const [cart, setCart] = useCart(product)
    const history = useHistory();
    const handeleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const orderHandler = () => {
history.push('/placeOrder')
        setCart([])
        clearTheCart(setCart)

    }

    return (
        <div>
             <div className="shop-container">
                <div className="product-container">
                    {
                       cart.map(productproduct => <ReviewItem
                        key={productproduct.key} products={productproduct}
                        handeleRemove={handeleRemove}
                        ></ReviewItem>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                            <button className="btn-regular" onClick={orderHandler}>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;