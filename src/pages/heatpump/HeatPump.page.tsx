import HeatPumpHero from './components/HeatPumpHero';
import Footer from '../../components/footer/Footer';
import HeatPumpResults from './components/HeatPumpResults';
import HeatPumpSolutions from './components/HeatPumpSolutions';

const HeatPump = () => {
  return (
    <>
      <HeatPumpHero />
      <HeatPumpResults />
      <HeatPumpSolutions />
      <Footer />
    </>
  );
};

export default HeatPump;
