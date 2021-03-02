import { Card, CardActions, Grid } from '@material-ui/core';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../../../useful/constants/colors';

interface CardProps {
  imgurl: string;
}

interface StarProps {
  $loading: boolean;
}

const appearFromRight = keyframes`
    from {
      opacity:0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;
export const CardContainer = styled(Card)<CardProps>`
  display: flex;
  background-image: ${props => `url(${props.imgurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 350px;
  height: 350px;
  animation: ${appearFromRight} 1s;
  min-width: 350px;
  min-height: 250px;
  width: 100%;

  &.MuiPaper-rounded {
    border-radius: 8px;
  }
`;

const animationRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Star = styled(MdStar)<StarProps>`
  ${props =>
    props.$loading
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;

export const StarBorder = styled(MdStarBorder)<StarProps>`
  ${props =>
    props.$loading
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;

export const CardMainContainer = styled(Card)`
  &.MuiCard-root {
    background-color: ${Colors.black};
    color: ${Colors.white};
    border-radius: 20px;
    margin: 4px;
    white-space: nowrap;
  }
`;

export const CardActionsContainer = styled(CardActions)`
  display: flex;
  justify-content: center;
`;

export const CustomGrid = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  text-align: center;
  padding: 24px;
  width: 350px;

  @media (max-width: 850px) {
    text-align: left;
    width: 250px;
  }

  @media (max-width: 281px) {
    text-align: left;
    width: 200px;
  }
`;
