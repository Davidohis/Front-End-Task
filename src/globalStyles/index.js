import styled from "styled-components";

export const WrapperComponents = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const WrapperComponentsItems = styled.div`
  border: 2px solid rgb(167, 166, 166);
  border-radius: 10px;
  padding: 40px;
  margin: 50px 0px;
  width: 60%;
`;

export const GenresButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button {
    margin-right: 10px;
  }
`;

export const CustomCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  margin: 4em 0px 2em 0px;
  width: 100%;
`;
export const CustomCardWrapperItem = styled.li`
  list-style: none;
  border: 1px solid #c0baba;
  border-radius: 5px;
  width: 100%;
  height: auto;
  padding: 15px 10px;
  text-align: center;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => (props.toggle ? "#fff" : "#585858")};
  background-color: ${(props) => (props.toggle ? "#585858" : "#fff")};
  cursor: pointer;
`;
