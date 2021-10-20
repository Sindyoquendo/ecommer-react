import { useState } from "react";
import NavBar from './components/NavBar';
import Product from "./components/Product";
import { Modal,Button  } from "react-bootstrap";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";
import './App.css';

//import Count from "./components/itemCount";  <Count/>
//import CustomButton from "./components/button-custom/buttonCustom";

function App() {  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const product = [
    { id: 1, name: "Short", price: 1000, descripcion:"Short de tricot con Lycra. Cintura elástica de 2 cm. Disponible en tallas de 1 a 6 años.", stock: 10,},    
    { id: 2, name: "Camisa de Playa", price: 1200, descripcion:"Camisa de playa de tricot con Lycra y protección Uv.Manga ¾. Cuello alto. Disponible en tallas de 1 a 6 años.", stock:9},
    {id: 3, name: "Enteriza Volados Cuadros", price: 1200,  descripcion: "Malla enteriza de tricot con Lycra y espalda cruzada. Forro interno. Disponible en tallas de 1 a 3 años.", stock:3},
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
     {product.map(({ id, name, price, descripcion,stock }) => (
     <Product key={name} id= {id} name={name} price={price} descripcion={descripcion} stock={stock} />
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
