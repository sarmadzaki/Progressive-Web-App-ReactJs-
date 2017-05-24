import React from 'react';
// import logo from './logo.svg';
import './data.js';
import '../App.css';
import '../bootstrap.css'
// import Data from './data'
import { Link } from 'react-router'

const Details = (props) => {
    let name = props.params.name;
    let data = props.route.Data;
    let name2 = data.filter((obj) => {
        return obj.name == name;
    })
    return (

        <div className="App container">

            <h2>{name2[0].name}</h2>
            <p>{name2[0].details}</p>
            <h2>How To Make</h2>
            <p>{name2[0].recipe}</p>
            <Link className="btn btn-primary" to="/"> Go Back</Link>
        </div>
    )
}
export default Details;
