import React, { useContext } from "react";
import TradeCoreContext from "../../Context";
import { dummyData } from "../../dummyData";
import { CustomCardWrapper, CustomCardWrapperItem } from "../../globalStyles";

export default function GenresComponent() {
  const { setData, toggle, setToggle } = useContext(TradeCoreContext);

  function handleChange(value) {
    setData({ id: value });
    setToggle(value);
  }

  return (
    <CustomCardWrapper>
      {dummyData?.genres?.map((item, index) => (
        <CustomCardWrapperItem
          value={item.id}
          key={index}
          onClick={() => handleChange(item.id)}
          toggle={toggle === item.id}
        >
          {item.name}
        </CustomCardWrapperItem>
      ))}
    </CustomCardWrapper>
  );
}
