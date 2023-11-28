import Image from "../Image";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const ContainerText = styled.div`
  position: absolute;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px;
`;

Presentation0.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

function Presentation0({ img: src, children: text }) {
  return (
    <Container>
      <Image>{src}</Image>
      <ContainerText>{text}</ContainerText>
    </Container>
  );
}

export default Presentation0;
