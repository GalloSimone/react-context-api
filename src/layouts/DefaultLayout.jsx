import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DefaultLayout() {
  return (
    <div className='page-wrapper'>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
