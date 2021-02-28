import { Button, Dialog, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../../useful/constants/colors';

interface ButtonProps {
  colorname: string;
}

export const Modal = styled(Dialog)`
  display: flex;
  justify-content: center;
  align-items: center;
  & .MuiPaper-rounded {
    border-radius: 20px;
  }
  & .MuiPaper-elevation1 {
    box-shadow: none;
  }
`;

export const DivIcon = styled.div`
  align-self: center;
  margin-top: 60px;
  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

export const ContentModal = styled(Paper)`
  background: ${Colors.white};
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 350px;
  @media (max-width: 400px) {
    min-width: 250px;
    padding: 0px 24px;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    color: ${Colors.gray2};
    font-weight: lighter;
    font-size: 32px;
    text-align: center;
    padding-top: 32px;
    @media (max-width: 400px) {
      padding-top: 16px;
      font-size: 24px;
    }
  }
`;

export const Subtitle = styled(Typography)`
  &.MuiTypography-root {
    font-weight: lighter;
    font-size: 24px;
    color: ${Colors.gray3};
    text-align: center;
    padding-top: 16px;
    padding-bottom: 60px;
    @media (max-width: 400px) {
      padding-top: 6px;
      padding-bottom: 30px;
      font-size: 16px;
    }
  }
`;

export const CustomButton = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    box-sizing: border-box;
    font-weight: bold;
    color: ${props => props.colorname};
    padding: 24px 0px;
    font-size: 16px;
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }
`;

export const CustomGridContainer = styled(Grid)`
  text-align: center;
`;

export const CustomGridItem = styled(Grid)`
  border-top-style: outset;
  border-top-color: ${Colors.whiteSmooth};
`;
