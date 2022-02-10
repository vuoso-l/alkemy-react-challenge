import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "../helpers/SweetAlert";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const PostForm = () => {
  const [form, setForm] = useState(initialState);

  let navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      SweetAlert.messageError("No pueden haber campos vacíos");
      return;
    }
    postUser();
  };

  const postUser = async () => {
    try {
      const response = await axios.post("http://challenge-react.alkemy.org/", {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("userToken", JSON.stringify(response.data.token));
      SweetAlert.messageLoginOk(
        "Aguarde mientras se procesa la información",
        () => navigate("/")
      );
    } catch (error) {
      SweetAlert.messageError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={form.email}
        ></input>
      </label>
      <label htmlFor="password">
        Contraseña
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={form.password}
        ></input>
      </label>
      <input type="submit" value="Enviar"></input>
    </form>
  );
};

export default PostForm;
