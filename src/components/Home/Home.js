import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => setCountry(data))
    }, []);

    return (
        <div>
            <h2>Total Country: {country.length}</h2>
            {
                country.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;