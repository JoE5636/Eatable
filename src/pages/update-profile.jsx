import styled from "@emotion/styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import Footer from "../components/footer";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { useAuth } from "../context/authContext";
import Input from "../components/input";

const Container = styled.div`
  background-color: #f6f6f9;
  padding-top: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  max-width: 414px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 504px;
`;

const NavIcon = styled(NavLink)`
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  background-color: #f5f5f8;
  color: ${colors.stone[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  &:active {
    color: ${colors.orange[500]};
  }
`;

const ProfileCard = styled.div`
  width: 314px;
  height: 300px;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`;

function UpdateProfile() {
  const { user, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });
  const { name, email, phone, address } = formData;
  function handleChange(event) {
    const { name, value } = event.target;
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(formData);
    updateProfile(formData);
  }

  return (
    <Container>
      <Header>
        <NavIcon to={"profile"}>
          <BsChevronLeft
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </NavIcon>
        <h3>My Profile</h3>
        <div style={{ color: "#f5f5f8" }}>.............</div>
      </Header>
      <div
        style={{
          margin: "20px auto 9px auto",

          width: "314px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <h4>Update personal details</h4>
      </div>
      <ProfileWrapper onSubmit={handlesubmit}>
        <ProfileCard>
          <Input
            id="name"
            name="name"
            value={name}
            label={"Name"}
            type="text"
            style={{ backgroundColor: `${colors.white}` }}
            onChange={handleChange}
          ></Input>
          <Input
            id="email"
            name="email"
            value={email}
            label={"Email adress"}
            type="email"
            style={{ backgroundColor: `${colors.white}` }}
            onChange={handleChange}
          ></Input>
          <Input
            id="phone"
            name="phone"
            label={"Phone"}
            type="integer"
            value={phone}
            style={{ backgroundColor: `${colors.white}` }}
            onChange={handleChange}
          ></Input>
          <Input
            id="address"
            name="address"
            label={"Address"}
            type="text"
            value={address}
            style={{ backgroundColor: `${colors.white}` }}
            onChange={handleChange}
          ></Input>
        </ProfileCard>
        <Button rounded>Update</Button>
      </ProfileWrapper>
      <Footer></Footer>
    </Container>
  );
}

export default UpdateProfile;
