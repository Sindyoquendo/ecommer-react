import './App.css';
import Product from "./components/Product";

function App() {
  const product = [
    { name: "Short", price: 1000 },
    { name: "Camisa de Playa", price: 1200 },
    { name: "Enteriza", price: 1200 },
  ];
  return (
    <div className="App">
      <h1>Gracias por visitar Pancho y Aurelia</h1>
      <hr />
      {product.map(({ name, price }) => (
        <Product key={name} name={name} price={price} />
      ))}
    </div>
  );
}



export default App;
