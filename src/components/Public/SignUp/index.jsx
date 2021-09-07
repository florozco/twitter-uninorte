import Input from "./../../common/Input";
import Label from "./../../common/Label";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Image from "../../../images/index";

import "../../../styles/displayStyles.scss";

const SignUp = () => {
  return (
    <>
      <Form className="center">
        <img className="icon-img" src={Image.twitterIcon} />
        <p></p>
        <Label text="My Twitter" className="my-twitter-label" />
        <p></p>
        <Label text="Create your account" className="create-account-label" />
        <p></p>
        <Label text="Name" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="text"
          className="user-mail-input"
          name="name"
          id="name"
          title="Name"
        />
        <p></p>
        <Label text="Username" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="text"
          className="user-mail-input"
          name="username"
          id="username"
          title="Username"
        />
        <p></p>
        <Label text="Email" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="text"
          className="user-mail-input"
          name="email"
          id="email"
          title="email@service.com"
        />
        <p></p>
        <Label text="Password" className="user-mail-pasword-label" />
        <p></p>
        <Input
          type="password"
          className="user-mail-input"
          name="password"
          id="password"
          title="Password"
        />
        <p></p>
        <Label
          text="Password confirmation"
          className="user-mail-pasword-label"
        />
        <p></p>
        <Input
          type="password confirmation"
          className="user-mail-input"
          name="password confirmation"
          id="password confirmation"
          title="Password confirmation"
        />
        <p></p>
        <Button text="Sign up" className="login-now-button" />
        <p></p>
        <a className="inline">
          <Label text="Already have an account?" className="no-account-label" />
          <Button text="Login" className="join-free-forgot-password-button" />
        </a>
      </Form>
    </>
  );
};

export default SignUp;
