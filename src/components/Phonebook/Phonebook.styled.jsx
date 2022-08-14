import styled from "styled-components";
import { Field } from "formik";
import MaskedInput from "react-text-mask";
export const SLabel = styled("label")`
  position: relative;
  width: 250px;
  background-color: #fff;
  display: flex;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #0170f0;
    transform: scale(0);
    transform-origin: center;
    transform-origin: left;
    transition: transform 0.25s;
  }
  &:focus-within::before {
    transform: scale(1);
  }
`;
export const SField = styled(Field)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  width: 100%;
  padding: 10px;
`;

export const SMaskedInput = styled(MaskedInput)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  width: 100%;
  padding: 10px;
`;
