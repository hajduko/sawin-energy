import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import Privacy from './pages/privacy/Privacy.page';
import Page404 from './pages/404/404.page';
import Residential from './pages/applications/residential/Residential.page';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Judith from './pages/judith/Judith.page';

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
          <Route path='judith' element={<Judith />} />
          <Route path='palyazatok/lakossagi' element={<Residential />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
