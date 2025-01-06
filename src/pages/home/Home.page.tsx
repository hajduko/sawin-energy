import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Főoldal - Sawin Energy</title>
      </Helmet>
      <NavBar />
      <Footer />
    </>
  );
};

export default Home;
