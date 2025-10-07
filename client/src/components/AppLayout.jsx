import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import DesktopGate from './DesktopGate';

export default function AppLayout() {
  return (
    <>
      <Header />
      <DesktopGate />
      <Outlet />
      <Footer />
    </>
  );
}
