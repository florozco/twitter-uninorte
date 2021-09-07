import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Image from "../../../images/index";

import "../../../styles/displayStyles.scss";

const RecoverPassword = () => {
  return (
    <>
      <Form className="center">
        <img className="icon-img" src={Image.twitterIcon} />
        <a></a>
        <Label text="My Twitter" className="my-twitter-label" />
        <a></a>
        <Label text="Recover your password" className="create-account-label" />
        <a></a>
        <Label text="Email or Username" className="user-mail-pasword-label" />
        <a></a>
        <Input
          type="text"
          className="user-mail-input"
          name="Email or username"
          id="Email or username"
          title="Email or username"
        />
        <a></a>
        <Button text="Recover your password" className="login-now-button" />
        <a></a>
        <a className="inline">
          <Label text="Return to" className="no-account-label" />
          <Button text="Login" className="join-free-forgot-password-button" />
        </a>
      </Form>
    </>
  );
};

export default RecoverPassword;
