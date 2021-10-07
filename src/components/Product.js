const Product = ({ price, name }) => {
    return (
      <>
        <div>
          <h2>Nombre: {name}</h2>
          <h2>Precio: {price}</h2>
        </div>
        <hr />
      </>
    );
  };
  
  export default Product;