import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
  return (
    <div className="card mx-auto w-50 mt-5">
      <div className="card-header text-center">
        <h1 className="login">Login</h1>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required !';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) { errors.email = 'Invalid email address' }
          if (values.password === '') { errors.password = 'Required !'; }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('http://localhost:5000/login', values)
            localStorage.setItem('token', response.data.token)
            navigate('/home')
            setSubmitting(false);
          }
          catch (errors) {
            console.log(errors.response.data.message)
          }
        }}  >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} >
            <div className="card-body">
              <label className='form-label'>E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="your e-mail"
                className='form-control'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className='text-danger'> {errors.email && touched.email && errors.email}</p>
              <label className='form-label'>Password</label>
              <div className='input-group'>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder='your password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <p className='text-danger'> {errors.password && touched.password && errors.password}</p>
              <div className='d-flex justify-content-between'>
                <button type="submit" className='btn btn-success' disabled={isSubmitting}>sign in</button>
                <Link className='btn btn-primary' to={`/register`}>Cancel</Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
};
export default Login