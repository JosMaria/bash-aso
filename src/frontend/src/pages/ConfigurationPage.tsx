const lines = ['Jose Maria', 'Santa U', 'diego', '#comentado'];

export const ConfigurationPage = () => {
  return (
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
  );
};
