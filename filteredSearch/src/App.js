import React, {useEffect, useState} from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
// import {response} from './response';
import 'h8k-components';

const title = "Country Filter";
function App() {
    const url = 'https://mocki.io/v1/273a5af6-8050-4c96-8a9a-a5635a8882fa';
    const [searchValue, setSearchValue] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const searchProps = {
        searchValue,
        setSearchValue
    }
    const getFilterCountries = (text) => {
       const filteredCountries = countries?.filter(item => item.toLowerCase().includes(text.toLowerCase()));
        return filteredCountries;
    };
    useEffect(() => {

    fetch(url).then((res) =>res.json()).then(data => {
        setCountries(data.countries);
        //setFilteredCountries(data.countries);
    });
    }, []);
    useEffect(() => {
        const filteredText = getFilterCountries(searchValue);
        setFilteredCountries(filteredText);
    }, [searchValue]);

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
                <Search {...searchProps} />
                <CountryList countryList={filteredCountries} />
            </section>
        </div>
    );
}

export default App;
