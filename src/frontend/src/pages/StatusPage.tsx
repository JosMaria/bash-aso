import toast from 'react-hot-toast';

const instalado = 'Si';
const state = 'Detenido';

export const StatusPage = () => (
  <section className='bg-green-100 max-w-lg w-full flex flex-col items-center p-5'>
    <p className='font-medium text-lg'>
      Instalado: <span className='font-light'>{instalado}</span>
    </p>
    <p className='font-medium text-lg'>
      Estado: <span className='font-light'>{state}</span>
    </p>
    <article className='flex flex-col gap-3 py-10'>
      <button
        className='bg-green-600 text-white hover:bg-green-500 py-2 px-8 border-2 border-green-800 rounded'
        onClick={() =>
          toast('Se inicio el servidor.', { className: 'bg-green-100', duration: 2000 })
        }
      >
        Iniciar
      </button>
      <button
        className='bg-green-600 text-white hover:bg-green-500 py-2 px-8 border-2 border-green-800 rounded'
        onClick={() =>
          toast('Se detuvo el servidor.', { className: 'bg-green-100', duration: 2000 })
        }
      >
        Detener
      </button>
      <button
        className='bg-green-600 text-white hover:bg-green-500 py-2 px-8 border-2 border-green-800 rounded'
        onClick={() =>
          toast('Se reinicio el servidor.', { className: 'bg-green-100', duration: 2000 })
        }
      >
        Reiniciar
      </button>
    </article>
  </section>
);
