import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #3781a5;
  border-bottom: 1px solid #3781a5;
  border-left: 1px solid #3781a5;
  width: 960px;
  padding: 8px 0px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const LinkUI = styled(Link)`
  display: flex;
  flex-direction: row;
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
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

function Searchrow({ country, city, date, price }) {
  return (
    <Container>
      <LinkUI to={`/details/${city.toLowerCase()}`}>
        <Text>{country}</Text>
        <Text>{city}</Text>
        <Text>{date}</Text>
        <Text>{price}</Text>
      </LinkUI>
    </Container>
  );
}

export default Searchrow;
