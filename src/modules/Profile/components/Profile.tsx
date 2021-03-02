import IconButton from '@material-ui/core/IconButton/IconButton';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import * as Yup from 'yup';
import { useAuthenticationContext } from '../../../context/reducers/auth/authContext';
import { IRequestUpdateProfile } from '../../../models/UpdateProfile';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { Loading } from '../../../shared/components/Loading';
import getValidationErrors from '../../../shared/validations/getValidationErros';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

interface ProfileProps {
  actionUpdateProfile: (data: IRequestUpdateProfile) => Promise<boolean>;
  navigateToDashboard: () => void;
  loading: boolean;
}

export const Profile = ({ actionUpdateProfile, navigateToDashboard, loading }: ProfileProps) => {
  const formRef = useRef<FormHandles>(null);
  const { state } = useAuthenticationContext();

  const { user } = state;

  const initialData: ProfileFormData = {
    email: user.email,
    name: user.userName,
  };

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail é obrigatória').email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: string | any[]) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val: string | any[]) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const updateRequest: IRequestUpdateProfile = {
          name: data.name,
          email: data.email,
          password: data.password,
          oldPassword: data.old_password,
        };

        await actionUpdateProfile(updateRequest);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [actionUpdateProfile],
  );

  return (
    <S.MainContainer>
      <S.Header>
        <IconButton onClick={navigateToDashboard}>
          <IoMdArrowBack color={Colors.red} />
        </IconButton>
        <S.DivTitle>
          <h4>Meu perfil</h4>
        </S.DivTitle>
      </S.Header>
      <S.CustomDiv>
        <S.Content>
          <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              containerStyle={{ marginTop: 24 }}
              name="old_password"
              icon={FiLock}
              type="password"
              placeholder="Senha atual"
            />
            <Input name="password" icon={FiLock} type="password" placeholder="Nova senha" />
            <Input name="password_confirmation" icon={FiLock} type="password" placeholder="Confirmar senha" />
            {loading ? (
              <Loading />
            ) : (
              <Button type="submit" disabled={loading}>
                Confirmar mudanças
              </Button>
            )}
          </Form>
        </S.Content>
      </S.CustomDiv>
    </S.MainContainer>
  );
};
