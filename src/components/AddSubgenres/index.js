import React, { useContext } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { Button } from "antd";
import { Checkbox, Input, Form } from "formik-antd";
import TradeCoreContext from "../../Context";
import "./style.css";
import { CustomFormWrapper, GenresButtonsWrapper } from "../../globalStyles";

export default function AddSubgenreComponent() {
  const { prev, next, newBook, setNewBook } = useContext(TradeCoreContext);

  return (
    <Formik
      initialValues={newBook}
      onSubmit={(values) => {
        if (values.isDescriptionRequired) {
          setNewBook(values);
        } else {
          setNewBook({
            subgenreName: values.subgenreName,
            isDescriptionRequired: false,
          });
        }
        next();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <React.Fragment>
            <Form>
              <CustomFormWrapper>
                <label>Subgenre Name </label>
                <Input name={"subgenreName"} placeholder={"Subgenre Name"} />
              </CustomFormWrapper>
              <CustomFormWrapper>
                <Checkbox name={"isDescriptionRequired"}>
                  Description is required for this subgenre
                </Checkbox>
              </CustomFormWrapper>
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
