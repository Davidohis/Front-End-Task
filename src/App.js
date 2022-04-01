import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./Context/index";
import {
  WrapperComponents,
  WrapperComponentsItems,
} from "./globalStyles/index.js";
import {
  AddSubgenrePage,
  GenresPage,
  InformationPage,
  SubgenresPage,
} from "./view";
import SuccessComponent from "./components/Success";

const newBookInitialState = {};

export default function TradeCore() {
  const { Step } = Steps;
  const [data, setData] = useState([]);
  const [addNewBook, setAddNewBook] = useState(false);
  const [newBook, setNewBook] = useState(newBookInitialState);
  const [toggle, setToggle] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  const reset = () => {
    setCurrentStep(0);
    setNewBook(newBookInitialState);
    setSuccess(false);
    setAddNewBook(false);
    setToggle(null);
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <GenresPage />;
      case 1:
        return <SubgenresPage />;
      case 2:
        return <AddSubgenrePage />;
      case 3:
        return <InformationPage />;
      default:
        return null;
    }
  };

  return (
    <Provider
      value={{
        next,
        prev,
        reset,
        data,
        setData,
        toggle,
        setToggle,
        addNewBook,
        setAddNewBook,
        newBook,
        setNewBook,
        success,
        setSuccess,
      }}
    >
      <WrapperComponents>
        {success ? (
          <WrapperComponentsItems>
            <SuccessComponent />
          </WrapperComponentsItems>
        ) : (
          <WrapperComponentsItems>
            {addNewBook ? (
              <Steps current={currentStep}>
                <Step title={"Genres"} />
                <Step title={"Subgenres"} />
                <Step title={"Add Subgenres"} />
                <Step title={"Information"} />
              </Steps>
            ) : (
              <Steps current={currentStep}>
                <Step title={"Genres"} />
                <Step title={"Subgenres"} />
                <Step title="Waiting" />
              </Steps>
            )}
            <main>{renderStep(currentStep)}</main>
          </WrapperComponentsItems>
        )}
      </WrapperComponents>
    </Provider>
  );
}
