import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import TwitterIcon from "../../../images/twitter.svg";
import "../../../styles/displayStyles.scss";

const Login = () => (
  <>
    <Form className="center">
      <img className="icon-img" src={TwitterIcon} /> <p></p>
      <Label text="My Twitter" className="my-twitter-label" />
      <p></p>
      <Label text="Login to your account" className="login-label" /> <p></p>
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
      <Label text="Password" className="pasword-label" /> <p></p>
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
