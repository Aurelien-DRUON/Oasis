import styled from "styled-components";
import Header from "../components/Header";
import Ad from "../components/Ad";
import Presentation from "../components/Presentation/Presentation";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer";

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
        <Presentation img="https://source.unsplash.com/random/240x128">
          La
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          loser
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          queue
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          est
        </Presentation>
      </Row>
      <Row>
        <Presentation img="https://source.unsplash.com/random/240x128">
          réelle
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          !
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          Vous
        </Presentation>
      </Row>
      <Row>
        <Presentation img="https://source.unsplash.com/random/240x128">
          êtes
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          full
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          délus
        </Presentation>
        <Presentation img="https://source.unsplash.com/random/240x128">
          .
        </Presentation>
      </Row>
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
