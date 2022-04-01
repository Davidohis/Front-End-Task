import styled from "styled-components";

export const SuccessComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SuccessComponentImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;
export const SuccessComponentTitle = styled.h3`
  color: #2c2b2b;
  text-align: center;
  margin: 20px 0px 50px 0px;
`;
export const SuccessComponentButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SuccessComponentButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #e7e9eb;
  border: none;
  color: #2c2b2b;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 40%;
  cursor: pointer;

  :hover {
    background-color: #585858;
    color: white;
  }
`;
