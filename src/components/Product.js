import  {useState} from "react";
import { Button  } from "react-bootstrap";
import "./itemCount.css";




const Product = ({ id,price, name, descripcion, stock}) => {
   
  const [count, setCount] = useState (0);  
  const Add = () =>setCount (count +1);
  const subtract= () =>setCount (count -1);
  const agregar = ()=> setCount (0);
 
  return (
      <>   
          <div>
          <h3>id={id}</h3>
          <h2>Nombre: {name}</h2>
          <h3>Precio: {price}</h3>   
          <h5>Descripción:{descripcion}</h5>
          <h5>stock:{stock}</h5>         
          <div className="cart-button">
          <p>Cantidad</p>
          <Button variant="light btnLight" onClick= {Add}>+</Button>
          <div className= "count-cart">{count}</div>
          <Button variant="light btnLight" onClick= {subtract}>-</Button>
          <Button variant="light btnLight" onClick= {agregar}> Vaciar item </Button>
          <Button  variant="light btnLight" onClick={() => setCount(count + 1)}>Agregar al Carro</Button>
          </div>
        </div>
        <hr />
      </>
    );
  };   
  export default Product;