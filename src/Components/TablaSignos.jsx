import React, { useState } from "react";
import Datos from "../palabras.json";

const TablaSignos = ({ palabras }) => {
  const [info, setInfo] = useState([]);
  // const ComparadorFunc = (word) => {
  //   const DatosJson = Datos;
  //   const palabras = word.split(" ");
  //   palabras.forEach((element) => {
  //      // eslint-disable-next-line array-callback-return
  //      DatosJson.filter((item) => {
  //       if (item.palabra === element) {
  //          setInfo(...info,item);
  //       }
  //     });
  //   });
  // };

  const Comp = (word) => {
    const DatosJson = Datos;
    const palabras = word.split(/[\n\s]+/);
    const wordFiltered = DatosJson.filter((item) =>
      palabras.includes(item.palabra)
    );
    setInfo(wordFiltered);
  };

  return (
    <>
      <button className="btn btn-warning" onClick={() => Comp(palabras)}>
        Analizar Codigo
      </button>
      <div className="container">
        <h2>Tokens</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Palabra</th>
            </tr>
          </thead>
          <tbody>
            {info.map((dato, index) => (
              <tr key={index}>
                <td>{dato.token}</td>
                <td>{dato.palabra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaSignos;
