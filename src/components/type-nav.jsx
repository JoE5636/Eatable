import styled from "@emotion/styled";

import TypeNavItem from "./type-nav-item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

function TypeNav() {
  const navigation = [
    {
      name: "Login",
      to: "/login",
    },
    {
      name: "Sign Up",
      to: "/signup",
    },
  ];

  return (
    <Wrapper>
      {navigation.map((type) => (
        <TypeNavItem key={type.name} {...type} />
      ))}
    </Wrapper>
  );
}

export default TypeNav;
