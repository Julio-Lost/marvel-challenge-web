import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logoImg from '../../../assets/logo.svg';
import { IRequestCreateUser } from '../../../models/CreateUser';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { Loading } from '../../../shared/components/Loading';
import getValidationErrors from '../../../shared/validations/getValidationErros';
import { AnimationContainer, Background, Container, Content } from './styles';

interface SignUpProps {
  actionCreateUser: (data: IRequestCreateUser) => Promise<boolean>;
  loading: boolean;
}

export const SignUp = ({ actionCreateUser, loading }: SignUpProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IRequestCreateUser) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail é obrigatória').email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo é 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await actionCreateUser(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [actionCreateUser],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="marvel-logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            {loading ? (
              <Loading />
            ) : (
              <Button type="submit" disabled={loading}>
                Cadastrar
              </Button>
            )}
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
