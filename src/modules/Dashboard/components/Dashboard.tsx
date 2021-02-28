/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Layout from '../../../shared/components/Layout';
import * as S from './styles';
import { InputSearch } from '../../../shared/components/Search/InputSearch';

export const Dashboard = () => {
  const [placeholderInputSearch, setPlaceholderInputSeact] = useState<string>('um personagem');

  const actionSearch = async () => {
    console.log('buscar');
  };

  return (
    <S.MainContainer>
      <Layout headerActive>
        <S.CustomDiv>
          <S.DivHeader>
            <h3>Seus personagens favoritos</h3>
          </S.DivHeader>
        </S.CustomDiv>
        <S.CustomDiv>
          <S.DivHeader>
            <h3>Seus Quadrinhos favoritas</h3>
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
      </Layout>
    </S.MainContainer>
  );
};
