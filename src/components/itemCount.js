import  {useState} from "react";
import { Button  } from "react-bootstrap";
import "./itemCount.css";


const Count =() =>{

    const [count, setCount] = useState (0);
    const Add = () =>setCount (count +1);
    const subtract= () =>setCount (count -1);

    

	return (
    <div className="count">
        <h2>Carrito de compras</h2>
        <div>
            <Button variant="light" onClick= {Add}>+</Button>
            <div>{count}</div>
            <Button variant="light" onClick= {subtract}>-</Button>
            </div>
            </div>
            );
        };

 export default Count;