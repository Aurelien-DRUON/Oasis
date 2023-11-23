import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 24px 64px;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
  background: #3781a5;
`;

function Footer() {
  return (
    <Container>
      <span>Évènements</span>
      <span>Contact</span>
      <span>Mentions légales</span>
      <span>Conditions générales d&apos;utilisation</span>
    </Container>
  );
}

export default Footer;
