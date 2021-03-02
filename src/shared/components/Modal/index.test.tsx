import { render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from './index';

describe('<Modal />', () => {
  it('should be render tooltip correctly', () => {
    const openModal = true;

    const handleModal = () => {
      console.log('altera valor');
    };

    const actionButtonConfirm = () => {
      console.log('ação');
    };

    render(<Modal openModal={openModal} handleModal={handleModal} actionButtonConfirm={actionButtonConfirm} />);
    const linkElement = screen.getByText(/Deseja realmente sair?/i);
    expect(linkElement).toBeInTheDocument();
  });
});
