import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm.js";
import NavBar from "./NavBar";


const Login = (props) => {
  return (
    <Container>
      <NavBar />
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/linkedin-guy.svg" alt="" />
        </Hero>
        <Form>
          <Info>
            <InputForm />
          </Info>
        </Form>
      </Section>

      <Bottom>
        <img src="/images/linkedin-bottom.png" alt="" />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10px;
`;

const Section = styled.div`
  align-content: start;
  display: flex;
  min-height: 70px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0px;
    width: 60%;
    font-size: 56px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
    color: #c97f2a;
    font-weight: 300;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {

    width: 700px;
    height: 600px;
    position: absolute;
    bottom: -100px;
    right: -200px;

  
 
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 50px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Bottom = styled.div`
  img {
    position: absolute;
    width: 100%;

    margin-top: 300px;
    margin-left: -20px;
  }
`;

/*
const Google= styled.button`
display:flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 120%;
border-radius: 30px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 50%);
vertical-align: middle;
z-index: 0;
font-size: 20px;


&:hover
{
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0,0,0,0.75);
}
`;
*/

const Info = styled.div``;

export default Login;
