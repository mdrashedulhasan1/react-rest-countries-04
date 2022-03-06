import React from 'react';
import './Country.css';
const Country = (props) => {
    const { region, name, capital, population, flag } = props.country;
    console.log(props.country);
    return (
        <div className='country-container bg-primary'>
            <img className='rounded-3' src={flag} alt="" />
            <h3 className='text-warning'>Name: {name}</h3>
            <h4>{capital}</h4>
            <h5>population: {population}</h5>
            <h5>region: {region}</h5>
        </div> 
    );
};

export default Country;