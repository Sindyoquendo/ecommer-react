
import React from 'react';
import "./NavBar.css";

const Cart =() =>{
    return (
        <div className="navbar-nav">
        <div className="d-flex justify-content-center mt-2">
            <a type="button" data-toggle="modal" data-target="#cart_diseño">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-cart-check imagencar" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <i class="far fa-shopping-cart"></i>
            <span id="cart-contador">2</span> 
            </a>
        <div id="cartNumbers">         
        </div>
        </div>
        </div>

    );
};

export default Cart;