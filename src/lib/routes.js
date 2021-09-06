import Login from "./../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import RecoverPassword from "./../components/Public/RecoverPassword";

const routes = {
  restricted: [
    {
      title: "Timeline",
      path: "/timeline",
      component: Timeline,
    },
  ],
  unrestricted: [
    {
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Sign up",
      path: "/signup",
      component: SignUp,
    },
    {
      title: "Recover password",
      path: "/recoverpassword",
      component: RecoverPassword,
    },
  ],
};
export default routes;
