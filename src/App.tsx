import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import HeatPump from './pages/heatpump/HeatPump.page';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='heatpump' element={<HeatPump />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
