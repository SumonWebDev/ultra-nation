import React from 'react';

const Country = (props) => {
    const{flag,name,population,region}=props.country;
    const flagStyle={
        height:'300px',
        width:'300px',
    }
    const countryStyle={
        border:'2px solid green',
        margin:'10px',
        padding:'10px'
    }
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>Name:{name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <h1>population:{population}</h1>
            <h1>Region:{region}</h1>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;