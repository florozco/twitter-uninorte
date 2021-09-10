import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Image from "../../../images/index";
import Img from "./../../common/Img";
import Input from "./../../common/Input";
import Label from "./../../common/Label";
import "../../../styles/displayStyles.scss";

const Login = () => (
  <Form className="center">
    <Img src={Image.twitterIcon} className="icon-blue-img" alt="twitter-logo" />
    <p></p>
    <Label text="My Twitter" className="my-twitter-label" />
    <p></p>
    <Label text="Login to your account" className="login-label" />
    <p></p>
    <Label text="Email or Username" className="user-mail-pasword-label" />
    <p></p>
    <Input
      type="text"
      className="user-mail-input"
      name="username"
      id="username"
      title="Username"
    />
    <p></p>
    <Label text="Password" className="pasword-label" />
    <p></p>
    <Input
      type="password"
      className="password-input"
      name="password"
      id="password"
      title="Password"
    />
    <p></p>
    <Button
      text="Forgot password?"
      className="join-free-forgot-password-button"
    />
    <p></p>
    <Button text="Login now" className="login-now-button" />
    <p></p>
    <p className="inline">
      <Label text="Dont have an account?" className="no-account-label" />
      <Button
        text="Join free today"
        className="join-free-forgot-password-button"
      />
    </p>
  </Form>
);

export default Login;
