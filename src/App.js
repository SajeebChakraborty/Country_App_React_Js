import React,{useState, useEffect} from 'react'

import Countries from './components/Countries';

import "./App.css";
import Country from './components/Country';
import Search from './components/Search';

const url="https://restcountries.com/v3.1/all";

export default function App() {

  const [isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState(null);
  const[countries,setCountries]=useState([]);
  const[filterCountries,setFilterCounries]=useState(countries);

  const fetchData = async(url)=>{

   try{

      setIsLoading(true);

      //fetch data
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
      setFilterCounries(data);
      setIsLoading(false);
      setError(false);

   }
   catch(error)
   {

      setIsLoading(false);
      setError(error);

   }

  }

  useEffect(()=>{

    fetchData(url);

  },[])

  const handleRemoveCountry = (name)=> {

    const filter = filterCountries.filter((country)=>

        country.name.common != name);
        setFilterCounries(filter);

  }

  return (
    <div>

      <h1>Country App</h1>
      <Search/>
      { isLoading && <h1>Loading...</h1> }
      { error && <h1>{ error.message }</h1> }
      { countries && <Countries countries={filterCountries} onRemoveCountry={handleRemoveCountry}/> }

    </div>
  )
}
