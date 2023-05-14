import React from 'react';
import styled from 'styled-components';

type Props = {
  primary: boolean | undefined;
};

export const StyledButton = styled.button<Props>`
  background-color: ${props => (!props.primary ? '#fff' : '#323334')};
  color: ${props => (!props.primary ? '#323334' : '#fff')};
  border: ${props => (!props.primary ? '1px solid #323334' : 'none')};
  padding: 0.5rem 1rem;
`;

const Button = ({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}): JSX.Element => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
