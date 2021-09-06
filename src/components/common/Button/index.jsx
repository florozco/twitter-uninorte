import "../../../styles/button.scss";

const Button = ({ text, className, ...rest }) => (
  <div>
    <button className={className} {...rest}>
      {text}
    </button>
  </div>
);

export default Button;
