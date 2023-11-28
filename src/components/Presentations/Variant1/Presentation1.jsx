import Image from "../Image";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 240px;
`;
const ContainerText = styled.div`
  position: absolute;
  display: flex;
  padding: 4px 8px;
  justify-content: flex-end;
  align-items: flex-start;
  width: 224px;
  height: 19px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 0px 0px 16px 0px;
`;

const Text = styled.p`
  height: 100%;
  margin: 0;
  color: #f8f8f8;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

Presentation1.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

function Presentation1({ img: src, children: text }) {
  return (
    <Container>
      <Image>{src}</Image>
      <ContainerText>
        <Text>{text}</Text>
      </ContainerText>
    </Container>
  );
}

export default Presentation1;
