import { useState } from 'react';
import toast from 'react-hot-toast';

const instalado = 'Si';
const state = 'Detenido';

const lines = ['Jose Maria', 'Santa U', 'diego', '#comentado'];

function App() {
  const [showSectionState, setShowSectionState] = useState(false);
  const [showSectionConfiguration, setShowSectionConfiguration] = useState(true);

  return (
    <main className='flex flex-col items-center gap-5 p-5'>
      <h1 className='text-3xl font-bold'>Administrador de servidor FTP</h1>
      <div className='w-full flex justify-evenly'>
        <button
          className='bg-sky-300 hover:bg-sky-500 py-2 px-8 border-2 border-sky-700 rounded'
          onClick={() =>
            toast('Instalado correctamente.', { className: 'bg-green-100', duration: 2000 })
          }
        >
          Instalar
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-500 py-2 px-8 border-2 border-sky-700 rounded'
          onClick={() => setShowSectionState((prev) => !prev)}
        >
          Ver estado
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-500 py-2 px-8 border-2 border-sky-700 rounded'
          onClick={() => setShowSectionConfiguration((prev) => !prev)}
        >
          Configuraci&oacute;n
        </button>
      </div>
      {showSectionState && (
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
      )}
      {showSectionConfiguration && (
        <section className='w-96'>
          <pre className='bg-slate-800 text-white p-4 w-96 flex flex-wrap rounded'>
            <code className='grid grid-cols-1'>
              {lines.map((line, index) => (
                <div key={index} className='block'>
                  {line}
                </div>
              ))}
            </code>
          </pre>
        </section>
      )}
    </main>
  );
}

export default App;
