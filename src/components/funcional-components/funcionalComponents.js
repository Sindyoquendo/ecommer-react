


const FuncComponent = ({  setName, showMessage }) => {
    const handleName = () => setName("Leo");
  

    return (
      <div>
        
        <button onClick={showMessage}>Sumar a tu compra</button>
        <button onClick={handleName}>Eliminar de tu compra</button>
      </div>
    );
  };
  
  export default FuncComponent;