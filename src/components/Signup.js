import styled from 'styled-components';
import React,{useState} from 'react'



const GlobalStyle = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins" , sans-serif;
  
`;
const Body=styled.main`
min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;
    padding: 30px;
`;

const LoginMain = styled.div`
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  background: #865DFF;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Back = styled.div`
  position: absolute;
  background: #865DFF;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const Text = styled.div`
  position: absolute;
  z-index: 130;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text1 = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const Text2 = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const Forms = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
`;

const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
position: relative;
font-size: 24px;
font-weight: 500;
color: #333;
&:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: ${({ isSignUpForm }) => (isSignUpForm ? '20px' : '25px')};
  background: #7d2ae8;
}
`;

const InputBoxes = styled.div`
  margin-top: 30px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: all 0.3s ease;
`;

const Icon = styled.i`
  position: absolute;
  color: #7d2ae8;
  font-size: 17px;
`;

const LinkText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const ButtonInputBox = styled.div`
  color: #fff;
  margin-top: 40px;
`;

const ButtonInput = styled.input`
background: #865DFF;
color:white;
font-size:14px;
  border-radius: 6px;
  padding: 15px 40px;
  cursor: pointer;
  transition: all 0.4s ease;
  display: block;
  margin: 0 auto;
  width: 50%;

  &:hover {
    background: #5b13b9;
  }
`;

const SignUpText = styled.div`
  text-align: center;
  margin-top: 25px;
`;

const Loginform = styled.div`
  width: calc(100% / 2 - 25px);
`;

const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Label = styled.label`
color: #5b13b9;
cursor: pointer;

&:hover {
  text-decoration: underline;
}
`;

const SignupForm = styled.div`
  width: calc(100% / 2 - 25px);
`;
const Flip = styled.input`
  display: none;

  &:checked ~ ${Cover} {
    transform: rotateY(-180deg);
  }
`;


const Signup = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSignupClick = () => {
    setIsFlipped(true);
  };
  const handleSignupClick1 = () => {
    setIsFlipped(false);
  };
  return (
  
  <GlobalStyle >
  <Body>
  <LoginMain>
  <Flip type="checkbox" id="flip" checked={isFlipped} />
    <Cover>
      <Front>
        <Text>
          <Text1>Every new friend is a <br /> new adventure</Text1>
          <Text2>Let's get connected</Text2>
        </Text>
      </Front>
      <Back>
        <Text>
          <Text1>Complete miles of journey <br /> with one step</Text1>
          <Text2>Let's get started</Text2>
        </Text>
      </Back>
    </Cover>
    <Forms>
      <FormContent>
      <Loginform>
          <Title>Login</Title>
          <form action="#" >
            <InputBoxes>
              <InputBox>
                <Icon className="fas fa-envelope" />
                <Input type="text" placeholder="Enter your email" name="email"   required />
              </InputBox>
              <InputBox>
                <Icon className="fas fa-lock" />
                <Input type="password" placeholder="Enter your password" name='password'   required />
              </InputBox>
              <LinkText><Link to="#">Forgot password?</Link></LinkText>
              <ButtonInputBox>
                <ButtonInput type="submit" value="Sumbit" />
              </ButtonInputBox>
              <SignUpText>Don't have an account? <Label onClick={handleSignupClick}>Sigup now</Label></SignUpText>
            </InputBoxes>
          </form>
        </Loginform>
        <SignupForm>
          <Title>Signup</Title>
          <form action="#" >
            <InputBoxes>
              <InputBox>
                <Icon className="fas fa-user" />
                <Input type="text" placeholder="Enter your Uid" name="Uid"   required />
              </InputBox>
              <InputBox>
                <Icon className="fas fa-user" />
                <Input type="text" placeholder="Enter your name" name="username"   required />
              </InputBox>
              <InputBox>
                <Icon className="fas fa-envelope" />
                <Input type="text" placeholder="Enter your email" name='email'   required />
              </InputBox>
              <InputBox>
                <Icon className="fas fa-lock" />
                <Input type="password" placeholder="Enter your password" name='password'   required />
              </InputBox>
              <ButtonInputBox>
                <ButtonInput type="submit" value="Sumbit" />
              </ButtonInputBox>
              <SignUpText>Already have an account? <Label onClick={handleSignupClick1}>Login now</Label></SignUpText>
            </InputBoxes>
          </form>
        </SignupForm>
      </FormContent>
    </Forms>
  </LoginMain>
  </Body>
  </GlobalStyle >

  )
}

export default Signup
// Your JSX incorporating the styled components
