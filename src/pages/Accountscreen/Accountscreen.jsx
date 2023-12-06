import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  gap: 8px;
`;

const TitleUI = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleBar = styled.div`
  width: 1px;
  height: 100px;
  background: #000000;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

function Accountscreen() {
  return (
    <Container>
      <Header />
      <TitleUI>Mon Compte</TitleUI>
      <Settings>
        <Options>
          <div>Mes informations</div>
          <div>Reservations</div>
          <div>Historique</div>
        </Options>
        <MiddleBar />
        <Details>
          <div>Nom : DRUON</div>
          <div>Prénom : Aurélien</div>
          <div>Adresse e-mail : aurelien.druon@mobsuccess.com</div>
          <div>Date de naissance : 25/01/2005</div>
        </Details>
      </Settings>
      <Footer />
    </Container>
  );
}

export default Accountscreen;
