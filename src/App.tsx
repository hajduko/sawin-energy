import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import Privacy from './pages/privacy/Privacy.page';
import Page404 from './pages/404/404.page';
import Residential from './pages/applications/residential/Residential.page';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import RealestateSellers from './pages/realestate/sellers/realestateSellers.page';
import RealestateAgents from './pages/realestate/agents/realestateAgents.page';
import Recruitment from './pages/recruitment/Recruitment.page';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='hoszivattyu'>
            <Route path='' element={<HeatPump />} />
            <Route path='termekek' element={'TODO'} />
          </Route>
          <Route path='hoszigeteles'>
            <Route path='' element={'TODO'} />
            <Route path='termekek' element={'TODO'} />
          </Route>
          <Route path='ingatlan'>
            <Route path='eladoknak' element={<RealestateSellers />} />
            <Route path='ingatlanosoknak' element={<RealestateAgents />} />
          </Route>
          <Route path='palyazatok/lakossagi' element={<Residential />} />
          <Route path='toborzas' element={<Recruitment />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
