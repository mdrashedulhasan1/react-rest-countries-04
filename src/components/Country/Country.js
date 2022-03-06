import React from 'react';
import './Country.css';
const Country = (props) => {
    const { region, name, capital, population, flag } = props.country;
    console.log(props.country);
    return (
        <div className='country-container'>
            <img src={flag} alt="" />
            <h3>Name: {name}</h3>
            <h4>{capital}</h4>
            <h5>population: {population}</h5>
            <h5>region: {region}</h5>
        </div> 
    );
};

export default Country;