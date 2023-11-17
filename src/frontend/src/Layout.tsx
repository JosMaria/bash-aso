import toast from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main className='flex flex-col items-center gap-5 p-5'>
      <h1 className='text-3xl font-bold'>Administrador de servidor FTP</h1>
      <nav className='w-full flex justify-evenly'>
        <button
          className='hover:bg-sky-500 bg-sky-300 py-2 px-8 border-2 border-sky-700 rounded'
          onClick={() =>
            toast('Instalado correctamente.', { className: 'bg-green-100', duration: 2000 })
          }
        >
          Instalar
        </button>
        <NavLink
          className={({ isActive }) =>
            `${isActive && 'bg-sky-500'} bg-sky-300 py-2 px-8 border-2 border-sky-700 rounded`
          }
          to='status'
        >
          Ver estado
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive && 'bg-sky-500'} bg-sky-300 py-2 px-8 border-2 border-sky-700 rounded`
          }
          to='configuration'
        >
          Configuraci&oacute;n
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
};
