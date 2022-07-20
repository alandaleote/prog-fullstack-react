import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import BookList from '../components/lists/bookList';
import ClientList from '../components/lists/clientList';
import App from '../App';

const HomeTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ maxWidth: 800 }}>
          <TabContext value={value} sx={{ marginTop: 30 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
                onChange={handleChange}
              >
                <Tab label="Lista de Livros" value="1" />
                <Tab label="Lista de Clientes" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"><BookList /></TabPanel>
            <TabPanel value="2"><ClientList /></TabPanel>
          </TabContext>
        </Box>
        <App />
      </Container>
    </React.Fragment>
  );
}

export default HomeTabs;
