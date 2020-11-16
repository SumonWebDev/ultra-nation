import React from 'react';

const Country = (props) => {
    const{flag,name,population,region}=props.country;
    const flagStyle={
        height:'300px',
        width:'300px',
    }
    return (
        <div className="div">
            <h1>Name:{name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <h1>population:{population}</h1>
            <h1>Region:{region}</h1>
        </div>
    );
};

export default Country;