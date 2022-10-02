import './Home.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [stockData, setStockData] = useState([]);

  const getData = async () => {
    const response = await axios.get('http://localhost:3030');
    return response.data;
  };

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setStockData(result);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <div className='list-container'>
        <ul>
        {stockData.map(data => 
        <li key={data.id}>
          <a href={data.id}>
            <div className='list-title'>{data.name}</div>
            <div className={`list-sub-title-${data.color}`}>{data.tag}</div>  
          </a>
          <br></br>
          </li>
        )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
