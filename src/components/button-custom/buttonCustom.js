
import "./buttonCustom.css";

const CustomButton = ({ action, className, color = "yellow", name }) => {
    return (
      <button
        className={`button ${className}`}
        onClick={action}
        style={{ backgroundColor: color }}
      >
        {name}
      </button>
    );
  };
  
  export default CustomButton;