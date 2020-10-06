import React, { Component } from "react";
import { Formik } from "formik";

function validationLogic(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.firstName = "Last name is required";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.city) {
    errors.city = "City name is required";
  } else if (!/^([^0-9]*)$/.test(values.city)) {
    errors.city = "City name must not contain any numbers.";
  }

  if (!values.zipcode) {
    errors.zipcode = "Zip-code is required";
  } else if (!/\d/g.test(values.zipcode)) {
    errors.zipcode = "Must contain only numbers";
  }

  return errors;
}

export class Personal extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipcode: "",
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
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                required
              />
              <div className="label-text">First name</div>
              <small>{errors?.firstName}</small>
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                required
              />
              <div className="label-text">Last name</div>
              <small>{errors?.lastName}</small>
            </label>
            <label>
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                required
              />
              <div className="label-text">Addres</div>
              <small>{errors?.address}</small>
            </label>
            <label>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                required
              />
              <div className="label-text">City</div>
              <small>{errors?.city}</small>
            </label>
            <label>
              <input
                type="text"
                name="zipcode"
                value={values.zipcode}
                onChange={handleChange}
                required
              />
              <div className="label-text">Zip-Code</div>
              <small>{errors?.zipcode}</small>
            </label>
            <button type="submit">Next</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default Personal;
