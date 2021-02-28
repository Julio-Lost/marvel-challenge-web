import styled from 'styled-components';
import { Colors } from '../../../../useful/constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const CustomDiv = styled.div`
  width: 100%;
  padding: 36px 15%;
  @media (max-width: 600px) {
    padding: 36px 5%;
  }

  & .MuiRadio-colorPrimary.Mui-checked {
    color: ${Colors.red};
  }
`;

export const CustomDivRadioButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomDivInputSearch = styled.div`
  width: 100%;
  padding: 36px 15%;
  @media (max-width: 600px) {
    padding: 36px 5%;
  }

  & .MuiRadio-colorPrimary.Mui-checked {
    color: ${Colors.red};
  }
`;

export const CustomDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > h3 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${Colors.red};
    font-weight: bold;
  }
`;
