import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>All Countries Length:{countries.length}</h1>
            <div className='one-third'> 
                {
                    countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;