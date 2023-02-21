import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import Table from './Components/TablaSignos'; 

function App() {
  const [code, setCode] = useState("");
  //const [words, setWords] = useState([]);
  // Función para actualizar el array de palabras cada vez que se cambia el contenido del editor Ace
  function handleCodeChange(newCode) {
    setCode(newCode);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <AceEditor theme="monokai" style={{ height: '600px', width:'800px' }} onChange={handleCodeChange} value={code} />
        </div>
        <div className="col-md-6">
           <Table palabras={code}/>
        </div>
      </div>
    </>
  );
}
export default App;
