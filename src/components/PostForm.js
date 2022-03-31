import React from "react";
import axios from "axios";
import SweetAlert from "../helpers/SweetAlert";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GralButton } from "./BasicTagsStyle";
import { ErrorStyle } from "./ErrorStyle";

const PostForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Requerido, no puede estar vacío";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Formato ingresado no es válido";
    } else if (!values.password) {
      errors.password = "Requerido, no puede estar vacío";
    }
    return errors;
  };

  let navigate = useNavigate();

  const handleSubmit = (values, { setFieldError }) => {
    return postUser(values).catch(() => {
      setFieldError("email", "Email y/o contraseña no existente");
      setFieldError("password", "Email y/o contraseña no existente");
    });
  };

  const postUser = async (values) => {
    try {
      const response = await axios.post(
        "https://ctd-todo-api.herokuapp.com/v1/users/login",
        {
          email: values.email,
          password: values.password,
        },
      );
      localStorage.setItem("userToken", JSON.stringify(response.data.jwt));
      SweetAlert.messageLoginOk(
        "Aguarde mientras se procesa la información",
        () => navigate("/"),
      );
    } catch (error) {
      SweetAlert.messageError("Ooops! Ocurrió un error!", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <ErrorStyle>
              <Field
                className={
                  errors.email
                    ? "form-control mb-3 mt-3 inputError"
                    : "form-control mb-3 mt-3"
                }
                type="email"
                name="email"
                placeholder="Ingresá tu email"
              />
              <ErrorMessage
                className={errors.email ? "textError" : ""}
                name="email"
                component="div"
              />
              <Field
                className={
                  errors.password
                    ? "form-control mb-3 mt-3 inputError"
                    : "form-control mb-3 mt-3"
                }
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña"
              />
              <ErrorMessage
                className={errors.password ? "textError" : ""}
                name="password"
                component="div"
              />
            </ErrorStyle>
            <GralButton type="submit" disabled={isSubmitting}>
              Enviar
            </GralButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
