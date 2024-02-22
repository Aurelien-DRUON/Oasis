import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  gap: 8px;
`;

function Layoutscreen() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layoutscreen;
