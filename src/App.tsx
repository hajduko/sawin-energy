import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import Privacy from './pages/privacy/Privacy.page';
import Page404 from './pages/404/404.page';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='heatpump' element={<HeatPump />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
