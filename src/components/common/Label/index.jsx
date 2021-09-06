import "../../../styles/label.scss";

const Label = ({ text, className, ...rest }) => (
  <div>
    <label className={className} {...rest}>
      {text}
    </label>
  </div>
);

export default Label;
