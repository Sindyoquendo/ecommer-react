import React from 'react';
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';



const NavBar =() =>{
	return (
		
	<header>
		<p className="welcome_sign">!Hola! Gracias por visitar la tienda online de Pancho y Aurelia</p>
		<a href="index.html">
			<img src="Logo.jpeg" alt="Logo de Pancho & Aurelia" className="center"/>
		</a>
		<hr></hr>
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
		
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
							<div className= "icons_font">
							<FontAwesomeIcon icon = {faComments}/>
							</div>
							<CartWidget/>
							
		 		</div>
				 
			</nav>
			
		</header>
		
	);
};
																

export default NavBar;