import styled from "styled-components";

export const BoonDiv = styled.div`
  display: none;
  height: 80px;
  padding: 10px;
  display: none;
  overflow: hidden;
  max-width: 400px;
  min-width: 50px;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  /* Additional styles for your boonDiv */
`;

export const Input = styled.input`
  color: white;
  background-color: transparent;
  border-radius: 7px;

  &:focus + ${BoonDiv} {
    display: flex;
  }
`;
