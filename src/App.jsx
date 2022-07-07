import { useState } from "react";
import { useEffect } from "react";
import IconDice from "./components/IconDice";
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [frase, setFrase] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    api
      .get("")
      .then((response) => setFrase(response.data.slip.advice))

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [loading]);

  useEffect(() => {
    api
      .get("")
      .then((response) => setId(response.data.slip.id))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [loading]);

  function GetNewPhrase() {
    setLoading(!loading);
  }

  return (
    <div className="bg-gray-600 w-[300px] md:w-[360px] m-auto mt-10 p-5 text-center rounded-2xl flex flex-col items-center shadow-2xl relative">
      <span className="text-green-500 text-xs">{`ADVICE #${id}`}</span>
      <p className="text-white font-semibold mt-3 border-b-2   pb-2 mb-6">
        "{frase}"
      </p>
      <button
        onClick={GetNewPhrase}
        className="bg-green-400 p-3 rounded-full mt-8 absolute  -bottom-5 shadow-2xl hover:bg-green-300 hover:p-4 "
      >
        <IconDice />
      </button>
    </div>
  );
}

export default App;
