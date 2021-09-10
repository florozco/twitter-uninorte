import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Image from "../../../images/index";
import { useUser } from "../../../contexts/userContext";
import "../../../styles/displayStyles.scss";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { username, setUser } = useUser()

  if (username) {
    console.log("Mandar al Home")
  } else {
    console.log("Mandar a LogIn")
  }

  const handleSubmit = (email, password) => {
    setUser({ user: email, password: password })
  }

  return (
    <>
      <Form className="center">
        <img className="icon-img" src={Image.twitterIcon} /> <p></p>
        <Label text="My Twitter" className="my-twitter-label" />
        <p></p>
        <Label text="Login to your account" className="login-label" /> <p></p>
        <Label text="Email" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="text"
          className="user-mail-input"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p></p>
        <Label text="Password" className="pasword-label" /> <p></p>
        <Input
          type="password"
          className="password-input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p></p>
        <Button
          text="Forgot password?"
          className="join-free-forgot-password-button"
        />
        <p></p>
        <Button onClick={(e) => handleSubmit(email, password)} text="Login now" className="login-now-button" />
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
};

export default Login;
