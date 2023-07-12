import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
// import { typography } from "../styles/typography";
import EatableLogo from "../images/logo.png";
import TypeNav from "../components/type-nav";
import Input from "../components/input";
import Button from "../components/button";
import { useAuth } from "../context/authContext";

const Container = styled.div`
  background-color: #f6f6f9;
`;

const Header = styled.header`
  max-width: 414px;
  height: 382px;
  border-radius: 30px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 181px;
  height: 50px;
  background: ${colors.white};
`;

const Form = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f9;
  max-width: 414px;
  height: 504px;
`;

const InputWrapper = styled.div`
    display: flex
    flex-direction: column;

    gap: 20px;
`;

function SignUp() {
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("si llega");
    signup(formData);
    // toast.success("Successfully loged in!")
  }

  return (
    <Container>
      <Header>
        <LogoWrapper>
          <Logo src={EatableLogo}></Logo>
        </LogoWrapper>
        <div>
          <TypeNav />
        </div>
      </Header>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            id="email"
            name="email"
            label={"Email adress"}
            type="email"
            placeholder="my_mail@mail.com"
            onChange={handleChange}
          ></Input>
          <Input
            id="password"
            name="password"
            label={"Password"}
            type="password"
            placeholder="******"
            onChange={handleChange}
          ></Input>
        </InputWrapper>
        <Button rounded>Sign Up</Button>
      </Form>
    </Container>
  );
}
export default SignUp;
