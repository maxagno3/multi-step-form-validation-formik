import { Formik } from "formik";
import React, { Component } from "react";

function validationLogic(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (!/^([^0-9]*)$/.test(values.username)) {
    errors.username = "Username must not contain any numbers";
  }

  if (!values.email) {
    errors.email = "E-mail is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.bio) {
    errors.bio = "Bio is required";
  }
  // if (!/^([a-zA-Z0-9_-]){6,150}$/.test(values.bio)) {
  //   errors.bio = "Must contain atleast 6 characters";
  // }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number must contain 10 digits";
  }
  // if (!/\[0-9]/g.test(values.phone)) {
  //   errors.phone = "Phone number must contain only numbers";
  // }

  return errors;
}

export class Profile extends Component {
  state = {
    username: "",
    bio: "",
    email: "",
    phone: "",
  };

  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          bio: "",
          email: "",
          phone: "",
        }}
        validate={validationLogic}
        onSubmit={(values, { setSubmitting }) => {
          this.props.setActive("personal");
          setSubmitting(true);
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
                name="username"
                value={values.username}
                onChange={handleChange}
                required
              />
              <div className="label-text">Username</div>
              <small>{errors?.username}</small>
            </label>
            <label>
              <input
                type="text"
                name="bio"
                value={values.bio}
                onChange={handleChange}
                required
              />
              <div className="label-text">Bio</div>
              <small>{errors?.bio}</small>
            </label>
            <label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
              <div className="label-text">E-mail</div>
              <small>{errors?.email}</small>
            </label>
            <label>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                required
              />
              <div className="label-text">Phone</div>
              <small>{errors?.phone}</small>
            </label>
            <button type="submit">Next</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default Profile;
