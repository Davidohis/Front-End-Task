import React, { useContext } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { Button, Space } from "antd";
import {
  Form,
  FormItem,
  Select,
  Input,
  DatePicker,
  InputNumber,
} from "formik-antd";
import TradeCoreContext from "../../Context";
import "./style.css";
import { GenresButtonsWrapper } from "../../globalStyles";

export default function InformationComponent() {
  const { prev, newBook, setNewBook, setSuccess } =
    useContext(TradeCoreContext);

  return (
    <Formik
      initialValues={newBook}
      onSubmit={(values) => {
        setNewBook(values);
        setSuccess(true);
        console.log(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.bookTitle) errors.bookTitle = "Book title is required";
        if (!values.author) errors.author = "author is required";
        if (!values.isbn) errors.isbn = "ISBN is required";
        if (!values.publisher) errors.publisher = "publisher is required";
        if (!values.date) errors.date = "date is required";
        if (!values.edition) errors.edition = "Edition is required";
        if (!values.decription) errors.decription = "Decription is required";
        return errors;
      }}
    >
      {({ handleSubmit }) => {
        return (
          <React.Fragment>
            <Form>
              <FormItem name="bookTitle">
                <label>Book Title </label>
                <Input name={"bookTitle"} placeholder={"Book Title"} />
              </FormItem>
              <FormItem name="author">
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
              </FormItem>
              <FormItem name="isbn">
                <label>ISBN </label>
                <Input name={"isbn"} placeholder={"ISBN"} />
              </FormItem>
              <FormItem name="publisher">
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
              </FormItem>
              <FormItem name="date">
                <label>Date Publisher </label>
                <Space direction="vertical">
                  <DatePicker name="date" />
                </Space>
              </FormItem>
              <FormItem name="page">
                <label>Number of pages</label>
                <InputNumber
                  name={"page"}
                  style={{ width: "19%" }}
                  placeholder={"Number of pages"}
                />
              </FormItem>
              <FormItem name="format">
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
              </FormItem>

              <div className="row_form">
                <FormItem name="edition">
                  <label>Edition</label>
                  <Input
                    name={"edition"}
                    placeholder={"Edition"}
                    style={{ width: "100%" }}
                  />
                </FormItem>
                <FormItem name="language">
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
                </FormItem>
              </div>

              <FormItem name="decription">
                <label>Description </label>
                <Input.TextArea
                  name={"decription"}
                  placeholder={"Type the description..."}
                />
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
