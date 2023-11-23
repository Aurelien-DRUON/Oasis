import styled from "styled-components";

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
      <LogoUI>Oasis</LogoUI>
      <TabsUI>
        <span>Où partir ?</span>
        <span>Hôtels</span>
        <span>Itinéraires</span>
        <span>Activités</span>
        <span>Réservation</span>
      </TabsUI>
      <AccountUI>
        <div>Mon Compte</div>
        <img src="src/assets/images/icons/user.svg" />
      </AccountUI>
    </HeaderUI>
  );
}

export default Header;
