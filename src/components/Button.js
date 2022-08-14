import styled from "styled-components";

const Button = styled.button`
    margin-top: 20px;
    color: #fff;
    background: #2977c9;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.6rem;
    width: 100%;
    border-radius: 28px;
    padding: 0 32px;
    outline-width: 2px;
    font-family: inherit;
    cursor: pointer;
    box-sizing: border-box;
    border: 0;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    height: 56px;
    align-items: center;
  
    &:hover {
      background-color: #205e9f;
      cursor: pointer;
    }
  `;

  export default Button;