import { CircularProgress } from '@material-ui/core';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

export const Loading = () => {
  return (
    <S.DivLoading>
      <CircularProgress style={{ color: Colors.red }} size={36} />
    </S.DivLoading>
  );
};
