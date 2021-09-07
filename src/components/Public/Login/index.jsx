import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";

import Img from "./../../common/Img";

import "../../../styles/displayStyles.scss";

const Login = () => (
  <>
    <Form className="center">
      <Img className="icon-img" src={Image.twitterIcon} alt="Twitter icon" />
      <a></a>
      <Label text="My Twitter" className="my-twitter-label" />
      <a></a>
      <Label text="Login to your account" className="login-label" /> <a></a>
      <Label text="Email or Username" className="user-mail-pasword-label" />
      <a></a>
      <Input
        type="text"
        className="user-mail-input"
        name="username"
        id="username"
        title="Username"
      />
      <a></a>
      <Label text="Password" className="pasword-label" /> <a></a>
      <Input
        type="password"
        className="password-input"
        name="password"
        id="password"
        title="Password"
      />
      <a></a>
      <Button
        text="Forgot password?"
        className="join-free-forgot-password-button"
      />
      <a></a>
      <Button text="Login now" className="login-now-button" />
      <a></a>
      <a className="inline">
        <Label text="Dont have an account?" className="no-account-label" />
        <Button
          text="Join free today"
          className="join-free-forgot-password-button"
        />
      </a>
    </Form>
  </>
);

export default Login;
