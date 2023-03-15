import "./App.css";
import ChangCurrency from "./component/ChangCurrency";
import InputCurrency from "./component/InputCurrency";
import {
  fetchSymbol,
  fetchLatest,
  fetchLatestSwitch,
} from "./component/fetchAPI";
import { useEffect, useState } from "react";

function App() {
  const [symbols, setSymbols] = useState(null);
  const [inputCurrentBase, setInputCurrentBase] = useState("");
  const [inputCurrent, setInputCurrent] = useState("");
  const [inputSymbolBase, setInputSymbolBase] = useState("THB");
  const [inputSymbol, setInputSymbol] = useState("USD");
  const [latest, setLatest] = useState(null);
  const [latestSwitch, setLatestSwitch] = useState(null);

  const handleInputSymbolBaseChange = (newInputSymbolBase) => {
    setInputSymbolBase(newInputSymbolBase);
  };

  const handleInputSymbolChange = (newInputSymbol) => {
    setInputSymbol(newInputSymbol);
  };
  const handleInputCurrentBaseChange = (newCurrentBase) => {
    setInputCurrentBase(newCurrentBase);
    setInputCurrent(Number(newCurrentBase * latest).toFixed(2));
  };

  const handleInputCurrentChange = (newCurrent) => {
    setInputCurrent(newCurrent);
    setInputCurrentBase(Number(newCurrent * latestSwitch).toFixed(2));
  };

  const switchSymbol = () => {
    setInputSymbol(inputSymbolBase);
    setInputSymbolBase(inputSymbol);
    setInputCurrent(inputCurrentBase);
    setInputCurrentBase(inputCurrent);
  };

  useEffect(() => {
    async function getSymbols() {
      try {
        const data = await fetchSymbol();
        setSymbols(data);
      } catch (error) {
        console.error("Error: Could not fetch data", error);
      }
    }
    getSymbols();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const [dataLatest, dataLatestSwitch] = await Promise.all([
          fetchLatest(inputSymbol, inputSymbolBase),
          fetchLatestSwitch(inputSymbolBase, inputSymbol)
        ]);
        setLatest(dataLatest[inputSymbol]);
        setLatestSwitch(dataLatestSwitch[inputSymbolBase]);
      } catch (error) {
        console.error("Error: Could not fetch data", error);
      }
    }
    
    
     getData()    
  }, [inputSymbol, inputSymbolBase]);

  return (
    <div className="App">
      <h1>โปรแกรมแปลงสกุลเงิน</h1>
      <InputCurrency
        symbols={symbols}
        value={inputSymbolBase}
        // title="THB Thai Bath"
        onInputChange={handleInputSymbolBaseChange}
        onInputCurrent={handleInputCurrentBaseChange}
        valueInput={inputCurrentBase}
      ></InputCurrency>
      <ChangCurrency
        onSwitch={switchSymbol}
        symbolBase={inputSymbolBase}
        symbol={inputSymbol}
        latest={latest}
      ></ChangCurrency>
      <InputCurrency
        symbols={symbols}
        value={inputSymbol}
        // title="USD United States Dollar"
        onInputChange={handleInputSymbolChange}
        onInputCurrent={handleInputCurrentChange}
        valueInput={inputCurrent}
      ></InputCurrency>
    </div>
  );
}

export default App;
