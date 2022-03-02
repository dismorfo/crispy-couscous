import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';
import TopNavigation from './TopNavigation';
import Footer from './Footer';

export default function Layout(props) {
  const location = useLocation();
  return (
    <>
     <MainHeader label={props.label} />
     <TopNavigation />
     <Outlet />
     { /mirador/.test(location.pathname) === false  ? <Footer/> : '' }
    </>
  );
}
