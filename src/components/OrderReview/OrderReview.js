import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [product, setProduct] = useProduct()
    const [cart, setCart] = useCart(product)
    const handeleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;