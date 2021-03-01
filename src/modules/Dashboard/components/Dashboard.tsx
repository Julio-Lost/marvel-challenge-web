import { IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { GenericCard } from '../../../shared/components/GenericCard/GenericCard';
import Layout from '../../../shared/components/Layout';
import { InputSearch } from '../../../shared/components/Search/InputSearch';
import * as S from './styles';

interface DashboardPros {
  navigateToFavorites: () => void;
}

export const Dashboard = ({ navigateToFavorites }: DashboardPros) => {
  const [placeholderInputSearch, setPlaceholderInputSeact] = useState<string>('um personagem');

  const actionSearch = async () => {
    console.log('buscar');
  };

  return (
    <S.MainContainer>
      <Layout headerActive>
        <S.CustomDiv>
          <S.DivHeader>
            <h3>Acesse seus favoritos</h3>
            <S.CustomDivFavoriteContainer>
              <span style={{ fontSize: 14 }}>Ver favoritos</span>
              <IconButton aria-label="see favorites" onClick={navigateToFavorites}>
                <FiArrowRight color="red" />
              </IconButton>
            </S.CustomDivFavoriteContainer>
          </S.DivHeader>
        </S.CustomDiv>
        <S.CustomDiv>
          <InputSearch actionSearch={actionSearch} placeholder={placeholderInputSearch} />
          <S.CustomDivRadioButton>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="placeholdersearch" name="placeholdersearch" defaultValue="char">
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
          <GenericCard />
          <GenericCard />
          <GenericCard />
        </S.CustomDivCardContainer>
      </Layout>
    </S.MainContainer>
  );
};
