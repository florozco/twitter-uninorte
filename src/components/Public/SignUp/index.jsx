import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Img from "./../../common/Img";
import Image from "../../../images/index";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();

  return (
    <Form className="center">
      <Label text="My Twitter" className="my-twitter-label" />

      <Img
        src={Image.twitterIcon}
        className="icon-blue-img"
        alt="twitter-logo"
      />

      <Label text="Create your account" className="create-account-label" />
      <Label text="Name" className="user-mail-pasword-label" />

      <Input
        type="text"
        className="user-mail-input"
        name="name"
        id="name"
        title="Name"
      />

      <Label text="Username" className="user-mail-pasword-label" />

      <Input
        type="text"
        className="user-mail-input"
        name="username"
        id="username"
        title="Username"
      />

      <Label text="Email" className="user-mail-pasword-label" />

      <Input
        type="text"
        className="user-mail-input"
        name="email"
        id="email"
        title="email@service.com"
      />

      <Label text="Password" className="user-mail-pasword-label" />

      <Input
        type="password"
        className="user-mail-input"
        name="password"
        id="password"
        title="Password"
      />

      <Label text="Password confirmation" className="user-mail-pasword-label" />

      <Input
        type="password confirmation"
        className="user-mail-input"
        name="password confirmation"
        id="password confirmation"
        title="Password confirmation"
      />

      <Button
        text="Sign up"
        className="login-now-button"
        onClick={() => history.push("/login")}
      />

      <div className="inline">
        <Label text="Already have an account?" className="no-account-label" />
        <Button
          text="Login"
          className="join-free-forgot-password-button"
          onClick={() => history.push("/login")}
        />
      </div>
    </Form>
  );
}
