import styled from "styled-components";

const HeaderUI = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 132px;
  padding: 32px 16px;
  align-items: center;
  background: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
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
  gap: 40px;
`;

const AccountUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-size: 16px;
`;

function Header() {
  return (
    <HeaderUI>
      <LogoUI>Oasis</LogoUI>
      <TabsUI>
        <text>Où partir ?</text>
        <text>Hôtels</text>
        <text>Itinéraires</text>
        <text>Activités</text>
        <text>Réservation</text>
      </TabsUI>
      <AccountUI>
        <div>Mon Compte</div>
        <img src="src/assets/images/user.svg" />
      </AccountUI>
    </HeaderUI>
  );
}

export default Header;
