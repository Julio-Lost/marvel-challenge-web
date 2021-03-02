import styled from 'styled-components';
import { Colors } from '../../../../useful/constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
  padding: 0px 15%;
  @media (max-width: 600px) {
    padding: 0px 5%;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  > h4 {
    font-weight: bold;
    color: ${Colors.gray3};
  }
`;

export const CustomDiv = styled.div`
  width: 100%;
  padding: 36px 15%;
  > h3 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${Colors.red};
    font-weight: bold;
    padding-bottom: 12px;
  }
  @media (max-width: 600px) {
    padding: 36px 5%;
  }
`;

export const CustomDivContainer = styled.div`
  padding-top: 42px;
`;
