import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import './App.css';

function App() {
  const weather = useWeather();

  useEffect(() =>{
    weather.fetchUserCurrentLocationData();
  },[])

  return (
    <div>
      <h1>Weather Forcast</h1>
      <Input />
      <Button onClick={weather.fetchData} value ="Search"/>
      <Card />
      <Button value ="Refresh"/>
    </div>
  );
}

export default App;
