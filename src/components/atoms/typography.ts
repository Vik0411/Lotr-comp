import styled from "styled-components";

export const Span = styled.span`
  align-self: flex-end;
`;

export const SectionHeader = styled.h2`
  color: #838996;
  font-size: 40px;
  -webkit-text-stroke: 0.6px #d4af37;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-botton: 0px;
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

export const AppDescription = styled.p`
  color: #d4af37;
  position: absolute;
  font-size: 20px;
  opacity: 0.9;
  border-radius: 10px;
  margin-right: 400px;

  @media (max-width: 1200px) {
    margin-right: 0px;
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
