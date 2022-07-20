import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import RegisterBook from './pages/RegisterBook';
import RegisterClient from './pages/RegisterClient';
import HomeTabs from './pages/HomeTabs'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="listas" exact element={<HomeTabs />} />
      <Route path="clientenovo" exact element={<RegisterClient />} />
      <Route path="livronovo" exact element={<RegisterBook />} />
    </Routes>
  </BrowserRouter>
);
