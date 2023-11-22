import Presentation from "./components/Presentation/Presentation";
import Button from "./components/Button/Button";
import optionsDropdown from './assets/"API"/API';
import Dropdown from "./components/Inputs/Dropdown";
import Date from "./components/Inputs/Date";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

function App() {
  return (
    <Container>
      <Header />
      <Button>Clique</Button>
      <Presentation img={"https://source.unsplash.com/random/300x300"}>
        Saxophone
      </Presentation>
      <Dropdown options={optionsDropdown}>Pays</Dropdown>
      <Date />
      <Footer />
    </Container>
  );
}

export default App;
