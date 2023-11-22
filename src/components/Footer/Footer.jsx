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
      <text>Évènements</text>
      <text>Contact</text>
      <text>Mentions légales</text>
      <text>Conditions générales d&apos;utilisation</text>
    </Container>
  );
}

export default Footer;
