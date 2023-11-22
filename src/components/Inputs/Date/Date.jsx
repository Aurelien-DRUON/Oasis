import styled from "styled-components";

const InputUI = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #3781a5;
  background: #fff;
  font-size: 16px;
`;

function Date() {
  return <InputUI type="date"></InputUI>;
}

export default Date;
