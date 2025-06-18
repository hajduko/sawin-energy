import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import Privacy from './pages/privacy/Privacy.page';
import Page404 from './pages/404/404.page';
import Residential from './pages/applications/residential/Residential.page';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Recruitment from './pages/recruitment/Recruitment';
import Redirect from './Redirect';
import RealEstate from './pages/realestate/RealEstate.page';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='heatpump' element={<HeatPump />} />
          <Route path='applications/residential' element={<Residential />} />
          <Route path='recruitment' element={<Recruitment />} />
          <Route path='realestate' element={<RealEstate />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='faluprogram' element={<Redirect />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
