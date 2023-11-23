import styled from "styled-components";
import PropsTypes from "prop-types";

const Container = styled.div`
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 4px solid #7a5f3d;
  background: #fb8c00;
`;

const Flag = styled.img`
  width: 32px;
  height: 32px;
`;

const Text = styled.span`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

Ad.propTypes = {
  children: PropsTypes.string.isRequired,
};
function Ad({ children }) {
  return (
    <Container>
      <Flag src="src/assets/images/icons/flag.svg" />
      <Text>{children}</Text>
      <Flag src="src/assets/images/icons/flag.svg" />
    </Container>
  );
}

export default Ad;
