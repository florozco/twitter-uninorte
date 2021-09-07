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
        <p></p>
        <Label text="My Twitter" className="my-twitter-label" />
        <p></p>
        <Label text="Recover your password" className="create-account-label" />
        <p></p>
        <Label text="Email or Username" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="text"
          className="user-mail-input"
          name="Email or username"
          id="Email or username"
          title="Email or username"
        />
        <p></p>
        <Button text="Recover your password" className="login-now-button" />
        <p></p>
        <a className="inline">
          <Label text="Return to" className="no-account-label" />
          <Button text="Login" className="join-free-forgot-password-button" />
        </a>
      </Form>
    </>
  );
};

export default RecoverPassword;
