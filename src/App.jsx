import styled from "styled-components";
import Searchscreen from "./screens/Searchscreen/Searchscreen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

function App() {
  return (
    <Container>
      <Searchscreen></Searchscreen>
    </Container>
  );
}

export default App;
