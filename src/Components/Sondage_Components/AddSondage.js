import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import SondageServices from "../Services/Sondage";
function AddSondage() {
  const navigate = useNavigate();
  return (
    <div className="card mx-auto w-50 mt-5">
      <div className="card-header text-center">
        <h1>Add Sondage</h1>
      </div>
      <Formik
        initialValues={{ title: '', description: '', category: 'yes' || 'no' }}
        validate={values => {
          const errors = {};
          if (values.title === '') { errors.title = 'Required !'; }
          if (values.description === '') { errors.description = 'Required !'; }
          if (values.category === '') { errors.category = 'Required !'; }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await SondageServices.addSondage(values)
            navigate('/listSondage')
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
              <label className='form-label'>title</label>
              <input
                type="text"
                name="title"
                className='form-control'
                placeholder='write your title please'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <p className='text-danger'>  {errors.name && touched.name && errors.name}</p>

              <label className='form-label'>description</label>
              <div className='input-group'>
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder='write your description please'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>
              <p className='text-danger'> {errors.description && touched.description && errors.description}</p>

              <label className='visually-visible' htmlFor='inlineFormSelectPref'>category</label>
              <select className="form-select"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}>
                <option value="yes" >yes</option>
                <option value="no">no</option>
              </select>
              <p className='text-danger'> {errors.category && touched.category && errors.category}</p>

              <div className='card-footer d-flex justify-content-center text-white'>
                <button type="submit" className='btn btn-success' disabled={isSubmitting}>Sign in</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div >
  )
};
export default AddSondage