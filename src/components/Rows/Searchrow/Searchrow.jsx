import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 960px;
  padding: 8px 0px;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #3781a5;
  border-bottom: 1px solid #3781a5;
  border-left: 1px solid #3781a5;
`;

const Text = styled.p`
  display: flex;
  padding: 8px 16px;
  width: 160px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

Searchrow.propTypes = {
  country: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

function Searchrow({ country, date, price }) {
  return (
    <Container>
      <Text>{country}</Text>
      <Text>{date}</Text>
      <Text>{price}</Text>
    </Container>
  );
}

export default Searchrow;
