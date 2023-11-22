import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonUI = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #fb8c00;
  background: #fb8c00;
  color: #fff;
  font-size: 16px;
  padding: 8px;
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

function Button({ children: content }) {
  return <ButtonUI>{content}</ButtonUI>;
}

export default Button;
