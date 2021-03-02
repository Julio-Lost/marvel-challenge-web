import React from 'react';

import { screen, render } from '@testing-library/react';

import Tooltip from './index';

describe('<Tooltip />', () => {
  it('should be render tooltip correctly', () => {
    render(<Tooltip title="Marvel">Spider-man</Tooltip>);

    expect(screen.getByText(/Spider-man/i)).toBeInTheDocument();
  });
});
