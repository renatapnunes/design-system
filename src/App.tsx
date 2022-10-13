import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hellow World!</h1>
      <h2 className="font-bold text-xl text-violet-500">Design System</h2>
      <button className="bg-gradient-to-r from-green-400 via-teal-300 to-sky-400 font-semibold text-sm px-4 py-2 rounded hover:border-solid hover:border-2 hover:border-react-color">
        Enviar
      </button>
    </>
  );
}
