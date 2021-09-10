import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Image from "../../../images/index";
import Img from "./../../common/Form";
import Input from "./../../common/Input";
import Label from "./../../common/Label";
import "../../../styles/displayStyles.scss";
import { useHistory } from "react-router-dom";

export default function RecoverPassword() {
  const history = useHistory();

  return (
    <Form className="center">
      <Img
        src={Image.twitterIcon}
        className="icon-blue-img"
        alt="twitter-logo"
      />

      <Label text="My Twitter" className="my-twitter-label" />

      <Label text="Recover your password" className="create-account-label" />

      <Label text="Email or Username" className="user-mail-pasword-label" />

      <Input
        type="text"
        className="user-mail-input"
        name="Email or username"
        id="Email or username"
        title="Email or username"
      />

      <Button
        text="Recover your password"
        className="login-now-button"
        onClick={() => history.push("/login")}
      />

      <p className="inline">
        <Label text="Return to" className="no-account-label" />
        <Button
          text="Login"
          className="join-free-forgot-password-button"
          onClick={() => history.push("/login")}
        />
      </p>
    </Form>
  );
}
