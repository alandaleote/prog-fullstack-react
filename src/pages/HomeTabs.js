import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import BookList from './BookList';


export default function HomeTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
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
            <Tab label="Retirada" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><BookList /></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
}
