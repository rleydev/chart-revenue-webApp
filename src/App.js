import React from 'react';
import './App.css';
import './normalize.css';
import Main from './pages/Main';

function App() {

  const apiUrl = "http://shelter.bmsys.net:58600/api/dashboard/cash/";
  const startDate = "2023-08-20";
  const endDate = "2023-08-25";
  const range = "MS"; // Для каждого дня

// Формируем URL для GET-запроса
  const url = `${apiUrl}?start=${startDate}&stop=${endDate}&range=${range}`;

  async function get1() {

    try {

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
    // Обработка данных из API
      console.log(data);
    } catch (error) {
    // Обработка ошибок
      console.error('Fetch error:', error);
    }
    
  }

  React.useEffect(() => {
    get1()
  }, [])

  return (
      <div className="App">
        <Main />
      </div>
    
  );
}

export default App;
