import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PlateContext from "../context/PlateContext";
import { GralButton } from "../componentsStyle/BasicTagsStyle";
import { ErrorStyle } from "../componentsStyle/ErrorStyle";

const SearcherForm = () => {
  const { getSearchQuery } = useContext(PlateContext);

  const initialValues = {
    search: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.search) {
      errors.search = "Requerido, no puede estar vacío";
    } else if (values.search.length < 2) {
      errors.search = "Se debe ingresar dos o más caracteres";
    }
    return errors;
  };

  const handleSubmit = (values, { setFieldError }) => {
    return getSearchQuery(values).catch(() => {
      setFieldError("search", "Palabra no existente");
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <ErrorStyle>
              <Field
                className={errors.search ? "form-control mb-3 mt-3 inputError" : "form-control mb-3 mt-3"}
                name="search"
                placeholder="Buscar por palabra"
              />
              <ErrorMessage
                className={errors.search ? "textError" : ""}
                name="search"
                component="div"
              />
            </ErrorStyle>
            <GralButton type="submit" disabled={isSubmitting}>Consultar</GralButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearcherForm;
