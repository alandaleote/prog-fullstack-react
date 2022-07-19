import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';

import HomeTabs from './pages/HomeTabs';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <HomeTabs />
      </Container>
    </React.Fragment>
  )
}

export default App;
