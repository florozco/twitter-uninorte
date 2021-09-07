import Image from "../../../images/index";
import "../../../styles/img.scss";

const Img = ({ src, className, alt, ...rest }) => (
  <>
    <img src={Image.twitterIcon} className="icon-img" alt={alt} />
  </>
);

export default Img;
