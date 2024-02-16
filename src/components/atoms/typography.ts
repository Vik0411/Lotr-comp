import styled from "styled-components";

export const Span = styled.span`
  align-self: flex-end;
`;

export const SectionHeader = styled.h2`
  color: white;
  font-size: 40px;
  -webkit-text-stroke: 0.2px #ba55d3;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  transition: 0.3s;
  background-color: rgba(1, 1, 1, 0.5);
  position: absolute;
  border-radius: 25px;
  padding: 15px;
  margin: 0px;
  right: 0px;
  top: 10px;
  font-size: 20px;
  z-index: 50;
  color: white;
  opacity: 0;
  height: 25px;
`;
