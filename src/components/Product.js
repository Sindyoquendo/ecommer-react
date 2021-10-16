import  {useState} from "react";
import { Button  } from "react-bootstrap";
import "./itemCount.css";


const Product = ({ price, name,  descripcion,stock, CustomButton }) => {

  const [count, setCount] = useState (0);  
  const Add = () =>setCount (count +1);
  const subtract= () =>setCount (count -1);
  
    return (
      <>      
        <div>
          <h2>Nombre: {name}</h2>
          <h3>Precio: {price}</h3>   
          <h5>Descripción:{descripcion}</h5>
          <h5>stock:{stock}</h5>
          <div className="cart-button">
          <p>Cantidad</p>
          <Button variant="light btnLight" onClick= {Add}> +  {CustomButton}</Button>
          <div className= "count-cart">{count}</div>
          <Button variant="light btnLight" onClick= {subtract}> - {CustomButton}</Button>
          <Button variant="light btnLight"> Agregar al Carro</Button>
          </div>
        </div>
        <hr />
      </>
    );
  };
  
  export default Product;