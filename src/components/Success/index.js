import React, { useContext } from "react";
import successImage from "../../assets/image/success.png";
import TradeCoreContext from "../../Context";
import {
  SuccessComponentButton,
  SuccessComponentButtonWrapper,
  SuccessComponentImage,
  SuccessComponentTitle,
  SuccessComponentWrapper,
} from "./styles";

export default function SuccessComponent() {
  const { reset } = useContext(TradeCoreContext);

  return (
    <SuccessComponentWrapper>
      <SuccessComponentImage src={successImage} alt="" />
      <SuccessComponentTitle>Book added Successfully</SuccessComponentTitle>
      <SuccessComponentButtonWrapper>
        <SuccessComponentButton onClick={reset}>
          Add another book
        </SuccessComponentButton>
      </SuccessComponentButtonWrapper>
    </SuccessComponentWrapper>
  );
}
