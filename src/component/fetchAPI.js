import axios from "axios";

export const fetchSymbol = async () => {
  try {
    const response = await axios.get(
      "https://api.apilayer.com/exchangerates_data/symbols",
      {
        headers: {
          apikey: "iY7T6tNtEkhnoJUXeqCytT3bDyKYIdb3",
        },
      }
    );
    return response.data.symbols;
  } catch (error) {
    throw error;
  }
};

export const fetchLatest = async (symbols, base) => {
  try {
    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`,
      {
        headers: {
          apikey: "iY7T6tNtEkhnoJUXeqCytT3bDyKYIdb3",
        },
      }
    );
    return response.data.rates;
  } catch (error) {
    throw error;
  }
};
export const fetchLatestSwitch = async (symbols, base) => {
  try {
    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`,
      {
        headers: {
          apikey: "iY7T6tNtEkhnoJUXeqCytT3bDyKYIdb3",
        },
      }
    );
    return response.data.rates;
  } catch (error) {
    throw error;
  }
};
