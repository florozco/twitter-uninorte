import Body from "./../../common/Body";
import Button from "./../../common/Button";
import Label from "./../../common/Label";
import "../../../styles/displayStyles.scss";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <Body className="home-body">
      <Label text="Welcome to Twitter" className="welcome-label" />
      <p></p>
      <Button
        text="Login now"
        className="login-sign-button"
        onClick={() => history.push("/login")}
      />
      <p></p>
      <p className="inline">
        <Label text="Dont have an account?" className="no-account-label" />
        <Button
          text="Join free today"
          className="join-free-forgot-password-button"
          onClick={() => history.push("/signup")}
        />
      </p>
      <p></p>
      <Button
        text="Sign up"
        className="login-sign-button"
        onClick={() => history.push("/signup")}
      />
      <p></p>
    </Body>
  );
}
