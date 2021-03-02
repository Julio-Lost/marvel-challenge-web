/* eslint-disable no-nested-ternary */
import { IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { ListCard } from '../../../shared/components/GenericCard/ListCard';
import { Loading } from '../../../shared/components/Loading';
import { NoResults } from '../../../shared/components/NoResults';
import { InputSearch } from '../../../shared/components/Search/InputSearch';
import * as S from './styles';

interface DashboardProps {
  navigateToFavorites: () => void;
  data: IGenericCard[];
  actionSearch: (value: string, type: string) => Promise<void>;
  loading: boolean;
  firstSearchPerformed: boolean;
}

export const Dashboard = ({
  navigateToFavorites,
  actionSearch,
  data,
  loading,
  firstSearchPerformed,
}: DashboardProps) => {
  const [placeholderInputSearch, setPlaceholderInputSeact] = useState<string>('um personagem');
  const [type, setType] = useState<string>('char');

  const handleTypeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  const dispatchSearchWithType = async (value: string) => {
    await actionSearch(value, type);
  };

  return (
    <S.MainContainer>
      <S.CustomDiv>
        <S.DivHeader>
          <h3>Acesse seus favoritos</h3>
          <S.CustomDivFavoriteContainer>
            <S.CustomSpan>Ver favoritos</S.CustomSpan>
            <IconButton aria-label="see favorites" onClick={navigateToFavorites}>
              <FiArrowRight color="red" />
            </IconButton>
          </S.CustomDivFavoriteContainer>
        </S.DivHeader>
      </S.CustomDiv>
      <S.CustomDiv>
        <InputSearch searchAction={dispatchSearchWithType} placeholder={placeholderInputSearch} type={type} />
        <S.CustomDivRadioButton>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="placeholdersearch"
              name="placeholdersearch"
              defaultValue="char"
              onChange={handleTypeSearch}>
              <FormControlLabel
                value="char"
                control={<Radio color="primary" />}
                label="Buscar personagem"
                onClick={() => setPlaceholderInputSeact('um personagem')}
              />
              <FormControlLabel
                value="comic"
                control={<Radio color="primary" />}
                label="Buscar Comic"
                onClick={() => setPlaceholderInputSeact('um quadrinho')}
              />
            </RadioGroup>
          </FormControl>
        </S.CustomDivRadioButton>
      </S.CustomDiv>
      <S.CustomDivCardContainer>
        {loading ? (
          <Loading />
        ) : firstSearchPerformed && data.length === 0 ? (
          <NoResults />
        ) : (
          <div style={{ paddingTop: 42 }}>
            <ListCard data={data} />
          </div>
        )}
      </S.CustomDivCardContainer>
    </S.MainContainer>
  );
};
