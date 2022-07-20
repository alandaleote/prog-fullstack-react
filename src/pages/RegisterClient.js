import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ClientForm from '../components/forms/clientForm';
import App from '../App';

export default function RegisterClient() {
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
          Cadastrar Cliente
        </Typography>
        <ClientForm />
      </Box>
    </Box>
  );
}
