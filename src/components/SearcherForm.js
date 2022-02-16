import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PlateContext from "../context/PlateContext";

const SearcherForm = () => {
  const { getSearchQuery } = useContext(PlateContext);

  const initialValues = {
    search: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.search) {
      errors.search = "Requerido";
    } else if (values.search.length < 2) {
      errors.search = "Se debe ingresar dos o más caracteres";
    }
    return errors;
  };

  const handleSubmit = (values, {setFieldError}) => {
    return getSearchQuery(values).catch(() => {
      setFieldError("search", "Palabra no existente")
    })
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}        
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Field name="search" placeholder="Buscar por palabra" />
            <ErrorMessage name="search" component="span" />
            <button disabled={isSubmitting}>
              Consultar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearcherForm;
