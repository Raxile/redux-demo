import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(15, "Must be 15 characters or more")
    .required("Required"),
  body: Yup.string()
    .min(30, "Must be 30 characters or more")
    .required("Required"),
});
const initialValue = {
  title: "",
  body: "",
};

const AddPostForm = () => {
  return (
    <div>
      <h1>ADD Post</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Field name="title" />
          <ErrorMessage name="title" />
          <Field name="body" />
          <ErrorMessage name="body" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPostForm;
