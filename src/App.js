import React,{useState, useEffect} from 'react'

const url="https://restcountries.com/v3.1/all";

export default function App() {

  const [isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState(null);
  const[countries,setCountries]=useState([]);

  const fetchData = async(url)=>{

   try{

      setIsLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
      setIsLoading(false);
      setError(false);

      console.log(countries);

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
      
    </div>
  )
}
