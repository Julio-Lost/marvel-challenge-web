import { FormControl, Grid, IconButton, InputAdornment } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { useSnackbar } from 'notistack';
import { CustomInput } from '../CustomInput/CustomInput';

interface IInputSearch {
  searchAction: (value: string) => Promise<void>;
  placeholder: string;
  type: string;
}

export const InputSearch = ({ searchAction, placeholder, type }: IInputSearch) => {
  const [value, setValue] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeText = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const cleanCode = () => {
    setValue('');
  };

  const handleSearch = async () => {
    if (value.length > 2) {
      await searchAction(value);
    } else if (value && value.length < 3) {
      enqueueSnackbar('Digite no minimo 3 caracteres.', { variant: 'warning' });
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
