import React, { useState } from 'react';
import API from '../../services/api';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const defaultValues = {
  name: "",
  phone: ""
};

const alertValues = {
  message: "",
  severity: ""
}

export default function ClientForm() {
  const [formValues, setFormValues] = useState(defaultValues)
  const [alert, setAlert] = useState(alertValues)
  const [open, setOpen] = React.useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  const handleAlert = (message, type) => {
    setAlert({
      ["message"]: message,
      ["severity"]: type
    })
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/clients", formValues)
      if (res.status === 201) {
        handleAlert("Cliente cadastrado com sucesso!", "success")
        handleClick();
        setFormValues(defaultValues)
      } else {
        handleAlert("Ocorreu um erro", "error")
        handleClick();
      }
    } catch (err) {
      throw (err);
    }
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <TextField
          fullWidth
          id="name"
          label="Nome"
          variant="standard"
          required
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="phone"
          label="Telefone"
          variant="standard"
          required
          value={formValues.phone}
          onChange={handleChange}
        />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginTop: 5 }}
      >
        Cadastrar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.severity} variant="outlined">
          {alert.message}
        </Alert>
      </Snackbar>
    </form>
  );
}
