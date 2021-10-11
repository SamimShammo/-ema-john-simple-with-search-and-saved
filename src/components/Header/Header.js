import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import useAuth from '../../useAuth/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/login">Login</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <p className="text-white">{user?.displayName && <h2> {user.email}</h2> }</p>
                {user?.displayName && <button onClick={logout} className="btn text-white btn-outline-danger">LogOut</button> }
              
            </nav>
        </div>
    );
};

export default Header;