import React from 'react';

function CountryList(props) {
  console.log(props.countryList);
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {props.countryList && props.countryList.map(country => 
          <li key={country} className="pa-10 pl-20">{country}</li>
        )}
      </ul>
    </section>
  );
}

export default CountryList;
