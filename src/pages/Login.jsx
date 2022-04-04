import { H2Style } from "../componentsStyle/BasicTagsStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LoginStyle } from "../componentsStyle/LoginStyle";
import PostForm from "../components/PostForm";

const Login = () => {
  return (
    <>
      <Header />
      <LoginStyle>
        <H2Style>Login</H2Style>
        <PostForm />
      </LoginStyle>
      <Footer />
    </>
  );
};

export default Login;
