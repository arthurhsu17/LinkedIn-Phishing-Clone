import React, { useState } from "react";
import styled from "styled-components";
import Button from './Button.js';
import { Link } from "react-router-dom";
import NewInputBox from "./NewInputBox.js";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";


const JoinNowPage = () => {
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
  <MainBackground>
<Nav>
  <a href="/">
    <img src="/images/login-logo.svg" alt="" />
  </a>
</Nav>

<BigText>Make the most of your professional life</BigText>

<IBox>
    <Label1>Email</Label1>
            <NewInputBox
            type="text"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            />
    
    <Label1>Password (6 or more characters)</Label1>
       <NewInputBox
         type="password"
         name="password"
         value={input.password}
         onChange={handleChangeInput}
       />
     
<Text1>By clicking Agree & join, you agree to the LinkedIn <Redirect href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement">User Agreement</Redirect>
,<Redirect href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy">Privacy Policy</Redirect>
, and <Redirect href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy">Cookie Policy</Redirect></Text1>

<AJButton onClick={sendRequest}>Agree & Join</AJButton>
<br></br>

    <Text2>
    Already on LinkedIn? <Redirect as={Link} to="/signin">Sign in</Redirect>
    </Text2>

</IBox>

    <Text3>
    Looking to create a page for a business? <Redirect href="https://www.linkedin.com/help/linkedin/answer/710?trk=registration-frontend_join-form-page-help-link">Get help</Redirect>
    </Text3>


<Bottom>
  <img src="/images/linkedin-bottom3.png" alt="" />
</Bottom>

</MainBackground>
</div>
    );
}

export default JoinNowPage;

const BigText=styled.div`
text-align: center;
padding: 24px 16px;
display: block;
font-size: 2em;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`;

const Label1=styled.label`
margin: 16px 0 4px 0;
color: rgba(0,0,0,0.6);
`;

const Text1= styled.div`
color: rgba(0,0,0,0.6);
font-size: 14px;
text-align: center;

`;

const Text2= styled.div`
text-align: center;
`;

const Text3= styled.div`
text-align: center;
margin-top: 15px;

`;

const Redirect= styled.a`
color: #0a66c2;
text-decoration: none;
&:hover
{
    text-decoration: underline;
    cursor: pointer;
    background-color: rgba(112, 181, 249, 0.15);

}

&:visited
{
    color: #0a66c2;
}
`;

const Nav = styled.nav`
      max-width: 1128px;
      margin: auto;
      padding: 12px 0 16px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      flex-wrap: nowrap;

      & > a {
        width: 135px;
      }
    `;

const IBox = styled.div`
align-items: center;
margin: 10px auto 0;
width: 30%;
height: 320px;
padding: 20px;
background-color: white;
border-radius: 10px;

`;

const AJButton = styled(Button)`
font-size: 1rem;
`;

const Bottom = styled.div`
  img {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 300px;
  }
`;

const MainBackground= styled.div`
background: #f3f2ef;
padding: 0 0 1000px;
`;