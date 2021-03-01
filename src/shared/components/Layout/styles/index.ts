import styled from 'styled-components';
import { Colors } from '../../../../useful/constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 15%;
  width: 100%;
  background: ${Colors.white};
  @media (max-width: 600px) {
    padding: 16px 5%;
  }
  > div {
    display: flex;
    > img {
      width: 100px;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  > strong {
    font-size: 14px;
    padding: 0px 8px;
  }
`;

export const NameUser = styled.div`
  background: transparent;
  border: 0;
  color: ${Colors.red};
  padding: 5px 8px;
  transition: 0.5s;
`;

export const MarvelLogo = styled.img`
  width: 36px;
  height: 36px;
`;
