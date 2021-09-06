import Body from "./../../common/Body";
import Button from "./../../common/Button";
import Label from "./../../common/Label";
import "../../../styles/displayStyles.scss";

const Home = () => {
  return (
    <Body className="home-body">
      <Label text="Welcome to Twitter" className="welcome-label" />
      <Button text="Login now" className="login-sign-button" />
      <a className="inline">
        <Label text="Dont have an account?" className="no-account-label" />
        <Button
          text="Join free today"
          className="join-free-forgot-password-button"
        />
      </a>

      <Button text="Sign up" className="login-sign-button" />
    </Body>
  );
};

export default Home;
