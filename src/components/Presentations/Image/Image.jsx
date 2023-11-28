import PropTypes from "prop-types";
import styled from "styled-components";

const ImgUI = styled.img`
  width: 240px;
  height: 152px;
  border-radius: 16px 16px 16px 0px;
`;

Image.propTypes = {
  children: PropTypes.string.isRequired,
};

function Image({ children: src }) {
  return <ImgUI src={src} />;
}

export default Image;
