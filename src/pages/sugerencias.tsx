export default function Sugerencias() {
  // check login
  return (
    <main className="grid content-center justify-center min-h-screen bg-dark-grey overflow-hidden">
      <div className="flex flex-col justify-center items-center border rounded-lg gap-4">
        <h4 className="text-4xl text-white font-bold p-8">
          Hola, dejanos saber tu consulta o sugerencias
        </h4>
        <div className="flex">
            <label htmlFor="select">Selecciona el area :&nbsp;</label>
            <select name="select" id="" placeholder="Selecciona el area" className="text-gray-600 rounded">
            <option value="exchange">Exchange</option>
            <option value="staking">Staking</option>
            <option value="sugerencia">Sugerencia</option>
            </select>
        </div>
        <textarea
          name="sugerencia"
          id="sugerencia"
          cols={30}
          rows={10}
          className="border rounded-lg mt-2 text-blue-950 p-4 max-h-[50vh]"
          placeholder="Describe tu solicitud"
        ></textarea>
        <button className="bg-gray-200 text-blue-950 rounded-lg px-4 py-2 mb-4">
          ENVIAR SOLICITUD
        </button>
      </div>
    </main>
  );
};
