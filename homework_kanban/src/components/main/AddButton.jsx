const AddButton = ({ name, onClickmclassName, buttonType, disabled}) => {
    return (
        <button
           type={buttonType}
           onClick={onClick}
           className={className}
           disabled={disabled}
        
    
        >
           {name}
        </button>
    );

}

 export default AddButton;