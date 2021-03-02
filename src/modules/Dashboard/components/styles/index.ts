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
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 36px 5%;
  }

  & .MuiRadio-colorPrimary.Mui-checked {
    color: ${Colors.red};
  }

  & .MuiIconButton-colorPrimary {
    color: ${Colors.gray3};
  }
`;

export const CustomDivCardContainer = styled.div`
  width: 100%;
  padding: 36px 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
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
    color: #232129;
    font-weight: bold;
  }
`;

export const CustomDivFavoriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CustomSpan = styled.span`
  font-size: 14px;
`;

export const CustomListCardContainer = styled.div`
  padding-top: 42px;
`;
