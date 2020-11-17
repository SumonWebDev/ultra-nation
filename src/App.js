import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  const handleAddCountry=(country)=>{
    const newCart=[...cart,country];
    setCart(newCart);
  }
  return (
    <div className="App">
    <h1>Country Loading:{countries.length}</h1>
    <h2>Country add:{cart.length}</h2>
    <ul>
    {
      countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}>{country.name}</Country>)
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
