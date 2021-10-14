import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Product from "./components/Product";
import { Modal,Button  } from "react-bootstrap";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";



function App() { 
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const product = [
    { name: "Short", price: 1000 },
    { name: "Camisa de Playa", price: 1200 },
    { name: "Enteriza", price: 1200 },
    
  ];
 
  return (
    <>
  <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Gracias por visitar Pancho y Aurelia">
     
     <hr/>
     <Button variant="btn btn-secondary" onClick={handleShow}>
       Dale click para ver tus referidos!!!
     </Button>
     <hr/>
     {product.map(({ name, price }) => (
     <Product key={name} name={name} price={price} />
     ))}
     </ItemListContainer>
  </div>
  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Esta es tu selección de productos</Modal.Title>
      </Modal.Header>
      <Modal.Body>¡Gracias por apoyar nuestro emprendiemiento!</Modal.Body>
      <Modal.Footer>
        <Button variant=" btn btn-secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="btn btn-secondary" onClick={handleClose}>Vaciar carrito</Button>
        <Button variant="btn btn-secondary" onClick={handleClose}>Finalizar compra</Button>
        </Modal.Footer>
        </Modal>
        </>
        );
      }
  
  export default App;
