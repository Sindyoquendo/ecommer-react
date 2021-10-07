import React from 'react';
import "./NavBar.css";

const NavBar =() =>{
	return (
	<header>
		<p className="welcome_sign">!Hola! Gracias por visitar la tienda online de Pancho y Aurelia</p>
		<a href="index.html">
			<img src="Logo.jpeg" alt="Logo de Pancho & Aurelia" className="center"/>
		</a>
		<hr></hr>
		<nav className="navbar navbar-expand-lg navbar-light bg-light perro">
			<div className="container-fluid">
					<a className="navbar-brand" href="#">Pancho & Aurelia</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="Productos.html">Productos</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="Nosotros.html">Nosotros</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="Contacto.html">Contacto</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="Preguntas frecuentes.html">Preguntas Frecuentes</a>
								</li>
							</ul>
							</div>
								<div className="navbar-nav">
									<div className="d-flex justify-content-center mt-3">
										<a type="button" data-toggle="modal" data-target="#cart_diseño">
											<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-cart-check imagencar" viewBox="0 0 16 16">
											<path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
											</svg>
										</a>
									<div id="cartNumbers"> 
									<span id="cart-contador">0</span> 
							</div>
						</div>
					</div>
		 		</div>
			</nav>
		</header>
	);
};
																

export default NavBar;