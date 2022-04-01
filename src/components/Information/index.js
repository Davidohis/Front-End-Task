import React, { useContext } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { Button, Space } from "antd";
import { Form, Select, Input, DatePicker, InputNumber } from "formik-antd";
import TradeCoreContext from "../../Context";
import "./style.css";
import {
  CustomFormWrapper,
  FormWrapperRow,
  GenresButtonsWrapper,
} from "../../globalStyles";

export default function InformationComponent() {
  const { prev, newBook, setNewBook, setSuccess } =
    useContext(TradeCoreContext);
  const isDescriptionRequired = newBook.isDescriptionRequired;

  return (
    <Formik
      initialValues={newBook}
      onSubmit={(values) => {
        setNewBook(values);
        setSuccess(true);
        console.log("fake-book-data", values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.bookTitle) errors.bookTitle = "Book title is required";
        if (isDescriptionRequired) {
          if (!values.decription) errors.decription = "Decription is required";
        }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <React.Fragment>
            <Form>
              <CustomFormWrapper>
                <label>Book Title </label>
                <Input name={"bookTitle"} placeholder={"Book Title"} />
                <p className={"error__feedback"}>{errors?.bookTitle}</p>
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>Author </label>
                <Select
                  name="author"
                  style={{ width: "100%" }}
                  allowClear
                  placeholder="Author"
                >
                  <Select.Option value="Robert C. Martin">
                    Robert C. Martin
                  </Select.Option>
                  <Select.Option value="Steve McConnell">
                    Steve McConnell
                  </Select.Option>
                  <Select.Option value="Eric Freeman">
                    Eric Freeman
                  </Select.Option>
                </Select>
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>ISBN </label>
                <Input name={"isbn"} placeholder={"ISBN"} />
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>Publisher </label>
                <Select
                  name="publisher"
                  style={{ width: "100%" }}
                  allowClear
                  placeholder="Publisher"
                >
                  <Select.Option value="Prentice Hall">
                    Prentice Hall
                  </Select.Option>
                  <Select.Option value="The MIT Press">
                    The MIT Press
                  </Select.Option>
                  <Select.Option value="O’Reilly Media">
                    O’Reilly Media
                  </Select.Option>
                  <Select.Option value="Pearson">Pearson</Select.Option>
                  <Select.Option value="Packt">Packt</Select.Option>
                </Select>
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>Date Publisher </label>
                <Space direction="vertical">
                  <DatePicker name="date" />
                </Space>
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>Number of pages</label>
                <InputNumber
                  name={"page"}
                  style={{ width: "19%" }}
                  placeholder={"Number of pages"}
                />
              </CustomFormWrapper>
              <CustomFormWrapper>
                <label>Format </label>
                <Select
                  name="format"
                  style={{ width: "40%" }}
                  allowClear
                  placeholder="Format"
                >
                  <Select.Option value="audiobook">Audiobook</Select.Option>
                  <Select.Option value="ebook">Ebook</Select.Option>
                </Select>
              </CustomFormWrapper>

              <FormWrapperRow>
                <CustomFormWrapper>
                  <label>Edition</label>
                  <Input
                    name={"edition"}
                    placeholder={"Edition"}
                    style={{ width: "100%" }}
                  />
                </CustomFormWrapper>
                <CustomFormWrapper>
                  <label>Edition language </label>
                  <Select
                    name="language"
                    style={{ width: "100%" }}
                    allowClear
                    placeholder="Edition language"
                  >
                    <Select.Option value="english">English</Select.Option>
                    <Select.Option value="yorubu(nigeria)">
                      Yorubu (Nigeria)
                    </Select.Option>

                    <Select.Option value="french">French</Select.Option>
                  </Select>
                </CustomFormWrapper>
              </FormWrapperRow>

              <CustomFormWrapper>
                <label>Description </label>
                <Input.TextArea
                  name={"decription"}
                  placeholder={"Type the description..."}
                />
                <p className={"error__feedback"}>{errors?.decription}</p>
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
