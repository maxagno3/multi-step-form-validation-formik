import { Formik } from "formik";
import React, { Component } from "react";

function validationLogic(values) {
  const errors = {}
  if (!values.school || !values.college || !values.postGrad) {
    errors.school = 'Required'
  }
}

export class Education extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          school: "",
          college: "",
          postGrad: "",
        }}
        validate={validationLogic}
        onSubmit={(values, { setSubmiting }) => {
          console.log(values, "values");
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
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="school"
                value={values.username}
                onChange={handleChange}
                required
              />
              <div className="label-text">School Name</div>
              <small>{errors?.school}</small>
            </label>
            <label>
              <input
                type="text"
                name="college"
                value={values.college}
                onChange={handleChange}
                required
              />
              <div className="label-text">College Name</div>
              <small>{errors?.college}</small>
            </label>
            <label>
              <input
                type="text"
                name="postGrad"
                value={values.postGrad}
                onChange={handleChange}
                required
              />
              <div className="label-text">Post Graduation</div>
              <small>{errors?.postGrad}</small>
            </label>
            <button onClick={() => this.props.setActive("profile")}>
              Back
            </button>
            <button type="submit">Next</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default Education;
