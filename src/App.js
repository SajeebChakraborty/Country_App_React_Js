import React,{useState, useEffect} from 'react'

import Countries from './components/Countries';

const url="https://restcountries.com/v3.1/all";

export default function App() {

  const [isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState(null);
  const[countries,setCountries]=useState([]);

  const fetchData = async(url)=>{

   try{

      setIsLoading(true);

      //fetch data
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
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

  return (
    <div>
      
      { isLoading && <h1>Loading...</h1> }
      { error && <h1>{ error.message }</h1> }
      { countries && <Countries countries={countries}/> }

    </div>
  )
}
