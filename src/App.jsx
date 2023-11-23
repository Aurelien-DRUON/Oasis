import styled from "styled-components";
import HomeScreen from "./screens/HomeScreen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

function App() {
  return (
    <Container>
      <HomeScreen></HomeScreen>
    </Container>
  );
}

export default App;
