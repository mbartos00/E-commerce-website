import styled from 'styled-components';

type Props = {
  placeholder?: string;
};

const StyledInput = styled.input`
  background: transparent;
  padding: 0.5rem 1.3rem;
  border: 1px solid #323334;
  &:placeholder {
    color: #323334;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Input = ({ placeholder }: Props): JSX.Element => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
