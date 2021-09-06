import "../../../styles/input.scss";

const Input = (props) => {
  const { type, className, title, ...rest } = props;

  return (
    <div>
      <input
        // id={id} // specify a unique id
        // name={name} //Name of the form control.
        placeholder={title} //appears in the form control when it has no value set
        type={type} //text || password
        className={className}
        {...rest}
      />
    </div>
  );
};

export default Input;
