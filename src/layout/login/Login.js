import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./login.css";

import { Link } from "react-router-dom";
import { Logo } from "../../components/constants/Icons";
import { PassEye } from "../../components/constants/Icons";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const formInitialValues = { email: "", password: "" };

  return (
    
    <section className="login-container">
      <section className="login">
        <section className="logo">{Logo}</section>
        <p className="login-heading">Log In to Dashboard Kit</p>
        <Formik
          initialValues={formInitialValues}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            setState({
              email: values.email,
              password: values.password,
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <section className="user-input">
                <label>Email</label>
                <Field type="email" name="email" placeholder="Email address" />
                {/* <ErrorMessage name="email" component="div" /> */}
              </section>
              <section className="user-input">
                <label>Password<a href="/">Forgot password?</a></label>
                <Field type="password" name="password" placeholder="Password" />
                {/* <ErrorMessage name="password" component="div" /> */}
                <div className="passEye">{PassEye}</div>
              </section>
              <section className="user-input">
              <Link to="/issue-management">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  Log In
                </button>
              </Link>
              </section>
              
            </Form>
          )}
        </Formik>
        <section className="signup-container">
          <p className="signup-text">Don't have an account? </p>
          <p className="signup-link">Sign Up</p>
        </section>
      </section>
    </section>
  );
};

export default Login;
