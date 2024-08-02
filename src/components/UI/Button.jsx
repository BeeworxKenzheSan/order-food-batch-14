import styled from "styled-components";
import { getVariantButton } from "../../helpers/styling";

export const Button = ({ children, icon, variant, disabled }) => {
  const withIcon = icon ? (
    <>
      <StyledIcon>{icon}</StyledIcon>
      {children}
    </>
  ) : (
    children
  );

  return (
    <StyledButton disabled={disabled} variant={variant}>
      {withIcon}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${getVariantButton}
`;

const StyledIcon = styled.span`
  margin-right: 10px;
`;
