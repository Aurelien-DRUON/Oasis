import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 8px 16px 8px 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0px 8px 8px 0px;
  border-top: 2px solid #3781a5;
  border-right: 2px solid #3781a5;
  border-bottom: 2px solid #3781a5;
  background: url("https://source.unsplash.com/random/200x750");
`;

Modal.propTypes = {
  children: PropTypes.string.isRequired,
};

function Modal({ children }) {
  return <Container>{children}</Container>;
}

export default Modal;
