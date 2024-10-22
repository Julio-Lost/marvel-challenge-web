import styled from 'styled-components';
import { shade } from 'polished';
import { Colors } from '../../../../useful/constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px auto 0;
  width: 100%;
  max-width: 700px;

  @media (max-width: 600px) {
    padding: 36px 5%;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    input[name='old_password'] {
      margin-top: 24px;
    }
  }
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
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 36px 5%;
  }

  & .MuiRadio-colorPrimary.Mui-checked {
    color: ${Colors.red};
  }
`;
