import React from 'react';

import { screen, render } from '@testing-library/react';

import Button from './index';

describe('<Button />', () => {
  it('should be render the button', () => {
    render(<Button>Entrar</Button>);

    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      height: '56px',
      padding: ' 0 16px',
    });
  });
});
