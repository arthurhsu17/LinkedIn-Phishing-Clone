import React, { useState } from "react";
import styled from "styled-components";

export default function InputBox({ label, type, ...rest }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <Input
        type={type === "password" && passwordShown ? "text" : type}
        {...rest}
      />
      <Label>{label}</Label>
      {type === "password" && (
        <Button onClick={togglePassword}>
          {passwordShown ? "hide" : "show"}
        </Button>
      )}
    </Container>
  );
}

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #0073b1;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  outline-width: 2px;
  padding: 0 8px;
  color: #0a66c2 !important;
  border-radius: 28px !important;
  position: absolute;
  z-index: 2;
  top: 14px;
  right: 4px;

  &:hover
  {
    cursor: pointer;
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px 4px;
  position: relative;
  background-color: white;
  outline: solid;
  outline-color: grey;

  z-index: 1;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 1;
  order: 1;
  padding-left: 5px;
  pointer-events: none;
  text-shadow: none;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
  position: absolute;
  top: -5px;
  z-index: 2;
  
`;

export const Input = styled.input.attrs(() => ({
  required: true,
}))`
  border-radius: 0;
  display: flex;
  font-size: 1.3rem;
  line-height: 25px;
  text-shadow: none;
  box-sizing: border-box;
  border: 0;
  color: #000;
  flex: 1 1 auto;
  order: 2;
  background-color: white;
  

  z-index: 1;

  &:focus {
    outline: 0;
  }

  &:not(:focus) {
    color: black;
  }

  &:valid + label,
  &:focus + ${Label} {
    color: rgba(0, 0, 0, 0.6);
    opacity: 1;
    transform: scale(0.8) translate3d(0, 15px, 0);
  }
`;
