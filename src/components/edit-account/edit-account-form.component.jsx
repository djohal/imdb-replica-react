import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import { selectCurrentUser } from "redux/user/user.selectors";
import {
  updateUserDetail,
  updateUserEmail,
  updateUserPassword,
} from "../../redux/user/user.actions";
import { verifyUserCredentials } from "../../firebase/firebase.utils";

const EditAccountForm = ({ data }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const conditionalValidation = () => {
    if (data === "name") {
      return {
        name: Yup.string()
          .max(20, "Max character limit is 20 characters")
          .required("Enter a name"),
      };
    }

    if (data === "email") {
      return {
        email: Yup.string()
          .email("Enter a valid email address")
          .required("Enter an email"),
        emailVerify: Yup.string().oneOf(
          [Yup.ref("email"), null],
          "Emails must match"
        ),
        password: Yup.string().min(8, null).required("Enter a password"),
      };
    }

    if (data === "password") {
      return {
        currentPassword: Yup.string().min(8, null).required("Enter a password"),
        newPassword: Yup.string().min(8, null).required("Enter a password"),
        reEnterPassword: Yup.string().oneOf(
          [Yup.ref("newPassword"), null],
          "Passwords must match"
        ),
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      name: currentUser.displayName,
      oldEmail: currentUser.email,
      email: "",
      emailVerify: "",
      password: "",
      currentPassword: "",
      newPassword: "",
      reEnterPassword: "",
    },
    validationSchema: Yup.object(conditionalValidation()),
    onSubmit: async ({
      name,
      email,
      password,
      currentPassword,
      newPassword,
    }) => {
      console.log(password);

      if (data === "name") {
        currentUser.displayName = name;
        dispatch(updateUserDetail(currentUser, history));
      }
      if (data === "email") {
        currentUser.email = email;
        const checkCredentials = await verifyUserCredentials(password);

        checkCredentials.success
          ? dispatch(updateUserEmail(currentUser, history))
          : toast.error("Invalid password!");
      }
      if (data === "password") {
        currentUser["newPassword"] = newPassword;
        const checkCredentials = await verifyUserCredentials(currentPassword);

        checkCredentials.success
          ? dispatch(updateUserPassword(currentUser, history))
          : toast.error("Invalid password!");
      }
    },
  });

  if (data === "name") {
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
  }

  if (data === "email") {
    return (
      <Form noValidate onSubmit={formik.handleSubmit}>
        <span className="subtitle">
          Use the form below to change the e-mail address for your IMDb account.
          Use the new address next time you log in. If you don’t know your
          password you can reset it{" "}
          {<Link to="/account/reset-password">here</Link>}.
        </span>
        <Form.Group controlId="formBasicOldEmail">
          <Form.Label>Old email address:</Form.Label>
          <Form.Control
            type="email"
            plaintext
            readOnly
            defaultValue={currentUser.email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>New email address:</Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmailVerify">
          <Form.Label>Re-enter email address:</Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("emailVerify")}
            isInvalid={formik.touched.emailVerify && formik.errors.emailVerify}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.emailVerify}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save changes
        </Button>
      </Form>
    );
  }

  if (data === "password") {
    return (
      <Form noValidate onSubmit={formik.handleSubmit}>
        <span className="subtitle">
          Use the form below to change the password for your IMDb account
        </span>
        <Form.Group controlId="formCurrentPassword">
          <Form.Label>Current password:</Form.Label>
          <Form.Control
            type="password"
            name="currentPassword"
            {...formik.getFieldProps("currentPassword")}
            isInvalid={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.currentPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formNewPassword">
          <Form.Label>New password:</Form.Label>
          <Form.Control
            type="password"
            name="newPassword"
            {...formik.getFieldProps("newPassword")}
            isInvalid={formik.touched.newPassword && formik.errors.newPassword}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.newPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formReenterPassword">
          <Form.Label>Reenter new assword:</Form.Label>
          <Form.Control
            type="password"
            name="reEnterPassword"
            {...formik.getFieldProps("reEnterPassword")}
            isInvalid={
              formik.touched.reEnterPassword && formik.errors.reEnterPassword
            }
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.reEnterPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save changes
        </Button>
      </Form>
    );
  }
};

export default EditAccountForm;
