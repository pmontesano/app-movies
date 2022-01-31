import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useAuth from '../../auth/useAuth';

const Login = () => {
  const auth = useAuth();

  const history = useHistory();
  const location = useLocation();

  const previusURL = location.state?.from;

  return (
    <div>
      <h3>Accede a tu cuenta</h3>
      <p>
        Si no tienes una, registrarse para obtenerla es gratis y simple. Pulsa
        aquí
      </p>

      <Formik
        initialValues={{ user: '', password: '' }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            auth.login(values);
            history.push(previusURL || '/');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="user" />
            <ErrorMessage name="user" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Acceder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
