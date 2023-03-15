import './App.css';
import axios from 'axios';
import { useEffect, useState, useMemo, useCallback } from 'react';

function App() {
  const [symbol, setSymbol] = useState(null);

  const fetchData = useCallback(() => {
    const config = {
      method: 'GET',
      url: 'https://api.apilayer.com/exchangerates_data/symbols',
      headers: {
        'apikey': 'iY7T6tNtEkhnoJUXeqCytT3bDyKYIdb3'
      }
    };
    axios(config)
      .then(response => {
        setSymbol(response.data.symbols);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log('render')
    fetchData();
  }, [fetchData]);
  
  const symbolList = useMemo(() => {
    if (!symbol) {
      return null;
    }
    return Object.keys(symbol).map((key) => (
      <option key={key} value={key}>{key}: {symbol[key]}</option>
    ))
  }, [symbol]);

  return (
    <div className="App">
      <select>
        {symbolList}
      </select>
      <select>
        {symbolList}
      </select>
    </div>
  );
}

export default App;
