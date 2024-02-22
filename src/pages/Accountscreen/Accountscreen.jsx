import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleUI = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

const MiddleBar = styled.div`
  width: 1px;
  height: 200px;
  background: #000000;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

const Txt = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;

function Accountscreen() {
  return (
    <Container>
      <TitleUI>Mon Compte</TitleUI>
      <Settings>
        <Options>
          <Txt>Mes informations</Txt>
          <Txt>Reservations</Txt>
          <Txt>Historique</Txt>
        </Options>
        <MiddleBar />
        <Details>
          <Txt>Nom : DRUON</Txt>
          <Txt>Prénom : Aurélien</Txt>
          <Txt>Adresse e-mail : aurelien.druon@mobsuccess.com</Txt>
          <Txt>Date de naissance : 25/01/2005</Txt>
        </Details>
      </Settings>
    </Container>
  );
}

export default Accountscreen;
