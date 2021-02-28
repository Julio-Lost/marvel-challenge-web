import { FormControl, Grid, IconButton, InputAdornment } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { CustomInput } from '../CustomInput/CustomInput';

interface IInputSearch {
  actionSearch: (value: string) => Promise<void>;
  placeholder: string;
}

export const InputSearch = ({ actionSearch, placeholder }: IInputSearch) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const cleanCode = () => {
    setValue('');
  };

  const handleSearch = async () => {
    if (value.length > 2) {
      await actionSearch(value);
    } else {
      //   enqueueSnackbar('Digite no minimo 3 caracteres.', { variant: 'warning' });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <FormControl fullWidth>
          <CustomInput
            fullWidth
            placeholder={`Pesquise ${placeholder}`}
            variant="outlined"
            value={value}
            onChange={handleChangeText}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={cleanCode}>
                    <IoMdClose />
                  </IconButton>
                  <IconButton onClick={handleSearch}>
                    <IoMdSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
