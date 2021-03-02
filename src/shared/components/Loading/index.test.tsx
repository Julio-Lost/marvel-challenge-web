import { render, screen } from '@testing-library/react';
import React from 'react';
import { Loading } from './index';

describe('<Loading />', () => {
  it('should be render tooltip correctly', () => {
    render(
      <h1 data-testid="web">
        <Loading />
      </h1>,
    );

    expect(screen.getByTestId('web').parentElement).toHaveStyle({
      display: 'block',
    });
  });
});
