import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
// import { Text } from "./Typography";

const Container = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid ${colors.gray[500]};
  background-color: #f6f6f9;
  width: 100%;
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

// Using styled components composition:
// const StyledLabel = styled(Text.withComponent("label"))`
//   text-transform: uppercase;
// `;

function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </Container>
  );
}

export default Input;
