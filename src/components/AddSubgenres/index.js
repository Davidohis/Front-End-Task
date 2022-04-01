import React, { useContext } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { Button } from "antd";
import { Checkbox, FormItem, Input, Form } from "formik-antd";
import TradeCoreContext from "../../Context";
import "./style.css";
import { GenresButtonsWrapper } from "../../globalStyles";

export default function AddSubgenreComponent() {
  const { prev, next, newBook, setNewBook } = useContext(TradeCoreContext);

  return (
    <Formik
      initialValues={newBook}
      onSubmit={(values) => {
        setNewBook(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.subgenreName)
          errors.subgenreName = "Subgenre Name is required";
        return errors;
      }}
    >
      {({ handleSubmit }) => {
        return (
          <React.Fragment>
            <Form>
              <FormItem name="subgenreName">
                <label>Subgenre Name </label>
                <Input name={"subgenreName"} placeholder={"Subgenre Name"} />
              </FormItem>
              <FormItem name="checkbox">
                <Checkbox name={"isDescriptionRequired"}>
                  Description is required for this subgenre
                </Checkbox>
              </FormItem>
            </Form>
            <GenresButtonsWrapper>
              <Button type={"default"} onClick={prev} icon={<LeftOutlined />}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </GenresButtonsWrapper>
          </React.Fragment>
        );
      }}
    </Formik>
  );
}
