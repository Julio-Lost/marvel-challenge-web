import { render, screen } from '@testing-library/react';
import React from 'react';
import { IGenericCard } from './GenericCard';
import { ListCard } from './ListCard';

describe('<Card list/>', () => {
  it('should be render tooltip correctly', () => {
    const data: IGenericCard[] = [
      {
        id: '1234231411',
        type: 'Character',
        imgUrl: 'http://test',
        isFavorite: false,
        title: 'Marvel Char',
        linkDetail: 'http://test',
      },
    ];

    render(<ListCard data={data} />);
    const linkElement = screen.getByText(/Marvel Char/i);
    expect(linkElement).toBeInTheDocument();
  });
});
