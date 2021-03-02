import NoResultImg from '../../../assets/noResults.svg';
import * as S from './styles';

export const NoResults = () => {
  return (
    <S.DivNoResult>
      <img src={NoResultImg} alt="NoResults" />
      <strong>Nenhum resultado encontrado.</strong>
    </S.DivNoResult>
  );
};
