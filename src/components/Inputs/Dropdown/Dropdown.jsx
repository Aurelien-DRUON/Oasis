import PropTypes from "prop-types";
import styled from "styled-components";

const SelectUI = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #3781a5;
  background: #fff;
  font-size: 16px;
`;

Dropdown.propTypes = {
  children: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Dropdown({ children: title, options }) {
  return (
    <SelectUI defaultValue={title}>
      <option>{title}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </SelectUI>
  );
}
export default Dropdown;
