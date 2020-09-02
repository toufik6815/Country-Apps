import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {

    const {countryAlpha2Code} = useParams();

    const [country, setCountry] =useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryAlpha2Code}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    });


    return (
        <div>
            <h1 style={{fontSize:"40px"}}>This is Country Detail:</h1>
            
            <div className="country-detail">
                <div className="country-flag">
                    <img src={country.flag} alt="" />
                </div>
                <p><small>AlphaCode: {countryAlpha2Code}</small></p>
                <h3>{country.name}</h3>
                <p><small>Domain: {country.topLevelDomain}</small></p>
                <p><small>Calling-Code: {country.callingCodes}</small></p>
                <p><small>Capital: {country.capital}</small></p>
                <p><small>Alt-Spellings: ({country.altSpellings})</small></p>
                <p><small>Region: {country.region}</small></p>
                <p><small>Sub-Region: {country.subregion}</small></p>
                <p><small>Population: {country.population}</small></p>
                <p><small>Demo-Nym: {country.demonym}</small></p>
                <p><small>Time-Zone: {country.timezones}</small></p>
                <p><small>Border: {country.borders}</small></p>
                <p><small>Numeric-Code: {country.numericCode}</small></p>
                <p><small>Short-Name: {country.cioc}</small></p>
            </div>
        </div>
    );
};

export default CountryDetail;