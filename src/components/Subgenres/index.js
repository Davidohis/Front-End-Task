import React, { useContext, useEffect, useState } from "react";
import TradeCoreContext from "../../Context";
import { dummyData } from "../../dummyData";
import { CustomCardWrapper, CustomCardWrapperItem } from "../../globalStyles";

export default function SubgenresComponent() {
  const { data, addNewBook, setAddNewBook } = useContext(TradeCoreContext);
  const [newData, setNewData] = useState([]);

  function idFinder() {
    let items = dummyData?.genres.find((item) => item.id === data?.id);
    setNewData(items);
  }

  function handleChange(e) {
    setAddNewBook(true);
  }

  useEffect(() => {
    idFinder();
  });

  return (
    <CustomCardWrapper>
      {newData?.subgenres?.map((item, index) => (
        <CustomCardWrapperItem value={item.id} key={index}>
          {item.name}
        </CustomCardWrapperItem>
      ))}
      <CustomCardWrapperItem
        onClick={(e) => handleChange(e)}
        toggle={addNewBook}
      >
        Add new
      </CustomCardWrapperItem>
    </CustomCardWrapper>
  );
}
