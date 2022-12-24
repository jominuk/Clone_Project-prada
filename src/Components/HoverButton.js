import styled from "styled-components";

export const HoverButton = styled.button`
  position: relative;
  margin: 50px 0 0 0;
  font-weight: bold;
  font-size: 23px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  transition: all 0.5s;
  overflow: hidden;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    top: 100%;
    left: 0%;
    transition: all 0.5s;
    z-index: -1;
  }
  :hover:before {
    transform: translateY(-100%);
  }
  :hover {
    color: white;
  }
`;
