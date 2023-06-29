import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Modal from "../../components/Modal";
import { FORM_FEILD } from "../../helpers/constants/constant.helper";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/posts/action";

const postFormInitialValue = {
  title: "",
  body: "",
};
const postFormValidation = Yup.object({
  title: Yup.string().required().min(5, "Must be atleast 5 character"),
  body: Yup.string().required().min(10, "Must be atleast 8 character"),
});

const PostForm = ({ Style }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { btn, btn_cancel, btn_confirm } = Style;
  return (
    <React.Fragment>
      <div
        className={Style.addBtnContainer}
        onClick={() => setIsModalVisible(true)}
      >
        <button className={Style.addBtn}>Add Post</button>
      </div>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <div className="container">
          <h3 className="">Add Post</h3>
          <Formik
            initialValues={postFormInitialValue}
            validationSchema={postFormValidation}
            onSubmit={(values) => {
              console.log(values);
              const data = { ...values, userId: 1 };
              dispatch(
                addPost(data, () => {
                  setIsModalVisible(false);
                })
              );
            }}
          >
            <Form className="d-flex justify-content-center align-items-center flex-column gap-2">
              <div className="w-100">
                <label
                  htmlFor="title"
                  className="d-flex justify-content-start w-100"
                >
                  {FORM_FEILD.TITLE_LABEL}
                </label>
                <Field
                  type="text"
                  name="title"
                  placeholder={FORM_FEILD.TITLE_PLACEHOLDER}
                  className={Style.feilds}
                />
                <span className=" text-danger">
                  <ErrorMessage name="title" />
                </span>
              </div>
              <div className="w-100">
                <label
                  htmlFor="body"
                  className="d-flex justify-content-start w-100"
                >
                  {FORM_FEILD.BODY_LABEL}
                </label>
                <Field
                  type="text"
                  name="body"
                  placeholder={FORM_FEILD.BODY_PLACEHOLDER}
                  className={Style.feilds}
                />
                <span className="text-danger">
                  <ErrorMessage name="body" />
                </span>
              </div>
              <div>
                <button
                  className={`${btn_cancel} ${btn}`}
                  onClick={() => setIsModalVisible(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={`${btn_confirm} ${btn}`}>
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default PostForm;
