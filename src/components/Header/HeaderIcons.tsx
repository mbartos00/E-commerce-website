import styled from 'styled-components';

const StyledIconContainer = styled.div`
  padding-block: 1.25rem;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    gap: 0.8rem;

    li {
      display: inherit;
      align-items: center;
      gap: 0.8rem;
      img[alt='cashback icon'] {
        transform: translateY(-5px);
      }
      span {
        font-weight: bold;
        color: rgba(0, 0, 0, 50%);
        text-transform: uppercase;
        font-size: 0.75rem;
      }
    }
  }
`;
const HeaderIcons = () => {
  return (
    <StyledIconContainer>
      <ul>
        <li>
          <img
            src='../src/assets/truckIco.svg'
            alt='delivery truck icon'
          />
          <span>free shipping</span>
        </li>
        <li>
          <img
            src='../src/assets/cashbackIco.svg'
            alt='cashback icon'
          />
          <span>100% money back</span>
        </li>
        <li>
          <img
            src='../src/assets/headsetIco.svg'
            alt='headset icon'
          />
          <span>support 24/7</span>
        </li>
      </ul>
    </StyledIconContainer>
  );
};

export default HeaderIcons;
