import React from "react";
import { H2Style } from "../components/BasicTagsStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LoginStyle } from "../components/LoginStyle";
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
