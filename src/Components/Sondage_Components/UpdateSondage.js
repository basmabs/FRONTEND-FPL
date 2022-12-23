import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import SondageServices from "../Services/Sondage";
function UpdateSondage() {
  const params = useParams();
  const navigate = useNavigate();
  const [Sondage, setSondage] = useState()
  let loaded = Sondage

  useEffect(() => {
    const getData = async () => {
      const response = await SondageServices.getSondagebyid(params.idSondage)
      setSondage(response.data)
    }
    getData()
  }, [params.idSondage])
  return (

    <div className="card mx-auto w-50 mt-5">
      <div className="card-header text-center">
        <h1 className="text-center">Update sondage</h1>
      </div>
      <div className="card-body my-4">
        <Formik
          initialValues={loaded || {
            title: '',
            description: '',
            category: ''
          }}
          validate={values => {
            const errors = {};
            if (values.title === '') { errors.title = 'Required !'; }
            if (values.description === '') { errors.description = 'Required !'; }
            if (values.category === '') { errors.category = 'Required !'; }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await SondageServices.updateSondage(params.idSondage, values);
              navigate('/listSondage')
              setSubmitting(false);
            }
            catch (errors) {
              console.log(errors.response.data.message)
            }
          }}
          enableReinitialize>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='card-body'>
                <div>
                  <label className='form-label'>title</label>
                  <input
                    type="text"
                    id="title"
                    className='form-control'
                    placeholder="write the sondage's name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <p className='text-danger'>  {errors.title && touched.title && errors.title}</p>
                  <label className='form-label'>Description</label>
                  <textarea
                    type="text"
                    id="description"
                    className='form-control'
                    placeholder="write the sondage's description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  ></textarea>
                  <p className='text-danger'>  {errors.description && touched.description && errors.description}</p>

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

                  <div className='d-flex justify-content-between my-4'>
                    <button type="submit" className='btn btn-success' disabled={isSubmitting}>Save</button>
                    <Link className='btn btn-primary' to={`/listSondage`}>Cancel</Link>
                  </div>

                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
};
export default UpdateSondage;