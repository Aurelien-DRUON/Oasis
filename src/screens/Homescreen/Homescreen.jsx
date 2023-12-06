import styled from "styled-components";
import Header from "../../components/Header";
import Ad from "../../components/Ad";
import Presentation0 from "../../components/Presentations/Variant0/Presentation0";
import Presentation1 from "../../components/Presentations/Variant1/Presentation1";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: #fff;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #00a8fa;
`;

const FlexColumn = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 64px;
`;

const TitleUI = styled.div`
  color: #3781a5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  left: 0;
  bottom: 10%;
  gap: 10px;
`;

function Homescreen() {
  return (
    <Container>
      <Header />
      <Ad>Bons plans ! -50% pour tous les voyages en Syrie</Ad>
      <Row>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          La
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          loser
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          queue
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          est
        </Presentation0>
      </Row>
      <Row>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          réelle
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          !
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          Vous
        </Presentation0>
      </Row>
      <Row>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          êtes
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          full
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          délus
        </Presentation0>
        <Presentation0 img="https://source.unsplash.com/random/240x128">
          .
        </Presentation0>
      </Row>
      <FlexColumn>
        <TitleUI>Actualités</TitleUI>
        <FlexRow>
          <Presentation1 img="https://source.unsplash.com/random/240x128">
            Volez à partir de 80€
          </Presentation1>
          <Presentation1 img="https://source.unsplash.com/random/240x128">
            Gagnez 100 tickets pour l’aéroport de votre choix
          </Presentation1>
        </FlexRow>
      </FlexColumn>
      <Infos>
        <Modal>Le Groenland, destination préférée du Yeti</Modal>
        <Modal>
          Venez rendre visite à Patrick Balkany à la prison de la santé
        </Modal>
        <Modal>Nouvel hôtel Rosewood ouvert à Thonon-les-bains</Modal>
      </Infos>
      <Footer />
    </Container>
  );
}

export default Homescreen;
