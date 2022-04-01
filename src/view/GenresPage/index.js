import { Button } from "antd";
import React, { useContext } from "react";
import GenresComponent from "../../components/Genres";
import TradeCoreContext from "../../Context";
import { GenresButtonsWrapper } from "../../globalStyles";
import { LeftOutlined } from "@ant-design/icons";

export default function GenresPage() {
  const { next, prev, toggle } = useContext(TradeCoreContext);

  return (
    <React.Fragment>
      <GenresComponent />

      <GenresButtonsWrapper>
        <Button
          type={"default"}
          onClick={prev}
          icon={<LeftOutlined />}
          disabled
        >
          Back
        </Button>
        <Button
          type={"primary"}
          onClick={next}
          disabled={toggle === null ? true : false}
        >
          Next
        </Button>
      </GenresButtonsWrapper>
    </React.Fragment>
  );
}
