import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderUI = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  height: 132px;
  padding: 32px 16px;
  align-items: center;
  background: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  border-bottom: 1px solid #000;
  border-radius: 0 0 5px 5px;
`;

const LogoUI = styled.div`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Alegreya;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TabsUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 40px;
`;

const SpanUI = styled.span`
  color: #fff;
`;

const AccountUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  gap: 10px;
`;

function Header() {
  return (
    <HeaderUI>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoUI>Oasis</LogoUI>
      </Link>
      <TabsUI>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <SpanUI>Où partir ?</SpanUI>
        </Link>
        <SpanUI>Hôtels</SpanUI>
        <SpanUI>Itinéraires</SpanUI>
        <SpanUI>Activités</SpanUI>
        <SpanUI>Réservation</SpanUI>
      </TabsUI>
      <AccountUI>
        <div>Mon Compte</div>
        <img src="src/assets/images/icons/user.svg" />
      </AccountUI>
    </HeaderUI>
  );
}

export default Header;
