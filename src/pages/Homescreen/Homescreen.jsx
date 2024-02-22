import styled from "styled-components";
import Ad from "../../components/Ad";
import Presentation0 from "../../components/Presentations/Variant0/Presentation0";
import Presentation1 from "../../components/Presentations/Variant1/Presentation1";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

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
      <Ad>Bons plans ! -50% pour tous les voyages en Syrie</Ad>
      <Row>
        <Link to="/details/paris">
          <Presentation0 img="https://source.unsplash.com/random/240x128">
            Paris
          </Presentation0>
        </Link>
        <Link to="/details/london">
          <Presentation0 img="https://source.unsplash.com/random/240x128">
            Londres
          </Presentation0>
        </Link>
        <Link to="/details/madrid">
          <Presentation0 img="https://source.unsplash.com/random/240x128">
            Madrid
          </Presentation0>
        </Link>
        <Link to="/details/berlin">
          <Presentation0 img="https://source.unsplash.com/random/240x128">
            Berlin
          </Presentation0>
        </Link>
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
    </Container>
  );
}

export default Homescreen;
