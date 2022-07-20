import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BookForm from '../components/forms/bookForm';
import App from '../App';

export default function RegisterBook() {
  return (
    <Box sx={{
      maxWidth: 800,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <App />
      <Box sx={{
        maxWidth: 800,
        display: 'inline',
        paddingTop: 10
      }}>
        <Typography variant="h3" sx={{ padding: 7 }}>
          Cadastrar Livro
        </Typography>
        <BookForm />
      </Box>
    </Box>
  );
}
