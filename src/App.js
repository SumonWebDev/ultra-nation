import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div className="App">
    <h1>Country Loading:{countries.length}</h1>
    <ul>
    {
      countries.map(country=><Country country={country} key={country.alpha3Code}>{country.name}</Country>)
    }
    </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
