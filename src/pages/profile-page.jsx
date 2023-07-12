import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import Footer from "../components/footer";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { useAuth } from "../context/authContext";

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

const ProfileWrapper = styled.div`
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

const UpdateLink = styled(NavLink)`
  color: ${colors.orange[500]};
  text-decoration: none;
  ${typography.text.md};
`;

const ProfileCard = styled.div`
  width: 314px;
  height: 200px;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.p`
  border-bottom: 1px solid ${colors.gray[400]};
  ${typography.text.md}
  color: ${colors.gray[400]};
  padding: 10px;
  width: 250px;
`;

function Profile() {
  const { user, logout } = useAuth();

  console.log(user);

  function handleLogout(event) {
    event.preventDefault();
    logout();
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
          justifyContent: "space-between",
        }}
      >
        <h4>Personal details</h4>
        <UpdateLink to={"update"}>change</UpdateLink>
      </div>
      <ProfileWrapper>
        <ProfileCard>
          <h4>{user.name}</h4>
          <UserInfo>{user.email}</UserInfo>
          <UserInfo>{user.phone}</UserInfo>
          <UserInfo>{user.address}</UserInfo>
        </ProfileCard>
        <Button rounded onClick={handleLogout}>
          Logout
        </Button>
      </ProfileWrapper>
      <Footer></Footer>
    </Container>
  );
}

export default Profile;
