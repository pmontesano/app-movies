import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BodyClassName from 'react-body-classname';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
import useAuth from '../../auth/useAuth';

const Login = () => {
  const auth = useAuth();

  const history = useHistory();
  const location = useLocation();

  const previusURL = location.state?.from;

  const errorStyles = {
    color: red[500],
    fontSize: '14px',
  };

  return (
    <BodyClassName className="login">
      <div className="login__form">
        <h3>Accede a tu cuenta</h3>
        <p>
          Si no tienes una, registrarse para obtenerla es gratis y simple.{' '}
          <Link to="/register" className="login__link">
            Pulsa aquí
          </Link>{' '}
          para empezar.
        </p>

        <Formik
          initialValues={{ user: '', password: '' }}
          validate={(values) => {
            const message = 'Tenés que completar el campo';
            const errors = {};
            if (!values.user) {
              errors.user = message;
            }
            if (!values.password) {
              errors.password = message;
            }

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
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Usuario"
                variant="outlined"
                type="text"
                name="user"
                m={4}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user}
              />
              <ErrorMessage
                name="user"
                component="p"
                className="error-message"
                style={errorStyles}
              />
              <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Contraseña"
                variant="outlined"
                type="password"
                name="password"
                m={4}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
                style={errorStyles}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                color="primary"
                variant="contained"
              >
                Acceder
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </BodyClassName>
  );
};

export default Login;
