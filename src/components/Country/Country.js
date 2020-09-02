import React from 'react';
import './Country.css';
import { useHistory } from 'react-router-dom';

const Country = (props) => {

    const { flag, name, region, alpha2Code } = props.country;

    const history = useHistory();
    const handleClick = (countryAlpha2Code) => {
        const url = `/country/${countryAlpha2Code}`;
        history.push(url);
    };

    return (
        <div className="country-style">
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <h5>Region: {region}</h5>

            <button onClick={() => handleClick(alpha2Code)} className="button">Country Details: {alpha2Code}</button>
            
            {/* <Link to={`/country/${alpha2Code}`}>
            <button className="button">Show detail of {alpha2Code}</button>
            </Link> */}

            {/* <h6>alpha2Code: <Link to={`/country/${alpha2Code}`}>Show detail of {alpha2Code}</Link></h6> */}
        </div>
    );
};

export default Country;

