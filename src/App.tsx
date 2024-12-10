import { Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import Eoft from './pages/eoft/Eoft.page';
import Commercial from './pages/commercial/Commercial.page';
import Partners from './pages/partners/Partners.page';

function App() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/heatpump'>Heat Pump</Link>
      <Link to='/eoft'>EOFT</Link>
      <Link to='/commercial'>Commercial</Link>
      <Link to='/partners'>Partners</Link>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='heatpump' element={<HeatPump />} />
          <Route path='eoft' element={<Eoft />} />
          <Route path='commercial' element={<Commercial />} />
          <Route path='partners' element={<Partners />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
