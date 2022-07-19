import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import BookList from './BookList';
import ClientList from './ClientList';
import Form from '../components/Form';


export default function HomeTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            onChange={handleChange}
          >
            <Tab label="Livros" value="1" />
            <Tab label="Clientes" value="2" />
            <Tab label="Cadastro" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><BookList /></TabPanel>
        <TabPanel value="2"><ClientList /></TabPanel>
        <TabPanel value="3"><Form /></TabPanel>
      </TabContext>
    </Box>
  );
}
