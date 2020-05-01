import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditAccountForm = ({ emailSignInStart }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Max character limit is 20 characters")
        .required("Enter an email"),
    }),
    onSubmit: ({ email, password }) => {},
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <span className="subtitle">
        If you want to change the name associated with your IMDb account, you
        may do so below. Be sure to click the <strong>Save Changes </strong>
        button when you are done.
      </span>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("name")}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save changes
      </Button>
    </Form>
  );
};

export default EditAccountForm;
