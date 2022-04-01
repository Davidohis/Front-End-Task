import React, { useContext } from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SubgenresComponent from "../../components/Subgenres";
import TradeCoreContext from "../../Context";
import { GenresButtonsWrapper } from "../../globalStyles";

export default function SubgenresPage() {
  const { next, prev, addNewBook } = useContext(TradeCoreContext);

  return (
    <React.Fragment>
      <SubgenresComponent />

      <GenresButtonsWrapper>
        <Button type={"default"} onClick={prev} icon={<LeftOutlined />}>
          Back
        </Button>
        <Button type={"primary"} onClick={next} disabled={!addNewBook}>
          Next
        </Button>
      </GenresButtonsWrapper>
    </React.Fragment>
  );
}
