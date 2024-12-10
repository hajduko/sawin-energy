import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/heatpump'>Heat Pump</Link>
      <Link to='/eoft'>EOFT</Link>
      <Link to='/commercial'>Commercial</Link>
      <Link to='/partners'>Partners</Link>
    </div>
  );
};

export default NavBar;
