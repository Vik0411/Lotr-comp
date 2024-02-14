import styled from "styled-components";

export const ButtonShadow = styled.button`
  opacity: 0;
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 15px;
  box-shadow: #3e454b 6px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-family: inherit;
  line-height: 10px;
  margin: 0 5px 3px 0;
  overflow: visible;
  padding: 12px 20px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    text-decoration: none;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  &:not([disabled]):active {
    box-shadow: black 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    .button-50 {
      padding: 12px 50px;
    }
  }
`;
