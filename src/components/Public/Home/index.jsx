import Body from "./../../common/Body";
import Button from "./../../common/Button";
import Label from "./../../common/Label";
import "../../../styles/displayStyles.scss";

const Home = () => {
  return (
    <Body className="home-body">
      <Label text="Welcome to Twitter" className="welcome-label" />
      <p></p>
      <Button text="Login now" className="login-sign-button" />
      <p></p>
      <p className="inline">
        <Label text="Dont have an account?" className="no-account-label" />
        <Button
          text="Join free today"
          className="join-free-forgot-password-button"
        />
      </p>
      <p></p>
      <Button text="Sign up" className="login-sign-button" />
      <p></p>
    </Body>
  );
};

export default Home;
