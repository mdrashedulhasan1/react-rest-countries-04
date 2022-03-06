import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {

  return (
    <div className="App">
    <Countries></Countries>
      {/* <Countries></Countries> */}
    </div>
  );
}

// function Countries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch("https://restcountries.com/v2/all")
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   const style = {
//     color:"red"
//   }
//   return(
//     <div>
//           <h1 style={style}>Traveling around the world!</h1>
//           <h1 style={style}>Available Countries:{countries.length}</h1>
//           {
//             countries.map(country => <Country name={country.name} capital={country.capital} ></Country>)
//           }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h2>Capital:{props.capital}</h2>
//     </div>
//   )
// }
export default App;
