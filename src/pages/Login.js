import React, { useState } from "react";
import Header from "../components/Header";

const initialState = {
  name: "",
  password: "",
}

const Login = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.password) {
      alert("Usuario y/o contraseña incorrectos");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
  };
  return (
    <div>
      <Header />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Usuario
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={form.name}
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
    </div>
  );
};

export default Login;
