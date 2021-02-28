import { Card } from '@material-ui/core';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';

interface CardProps {
  imgurl: string;
}

interface StarProps {
  loading: boolean;
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
  width: 250px;
  height: 250px;
  animation: ${appearFromRight} 1s;
  min-width: 250px;
  min-height: 250px;

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
    props.loading
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;

export const StarBorder = styled(MdStarBorder)<StarProps>`
  ${props =>
    props.loading
      ? css`
          animation: ${animationRotation} infinite 2s linear;
        `
      : ''}
`;
