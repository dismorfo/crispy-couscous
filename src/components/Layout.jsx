import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import TopNavigation from './TopNavigation';
import Footer from './Footer';

export default function Layout(props) {
 return (
    <>
     <MainHeader label={props.label} />
     <TopNavigation />
     <Outlet />
     <Footer/>
    </>
  );
}
