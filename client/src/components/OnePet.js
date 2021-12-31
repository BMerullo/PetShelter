import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';





const OnePet = (props) => {

    const { id } = props;
    const [petInfo, setPetInfo] = useState({});
    const [petList, setPetList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log("!!!!!!", res.data);
                console.log("hello?")
                setPetInfo(res.data)
                setPetList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const adoptAPet = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
            .then((res) => {
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err))
    }




    return (
        <div className="body">
            <header>
                <div>
                    <h1>Pet Shelter</h1>
                    <h3>Details about: {petInfo.name}</h3>
                </div>
                <div>
                    <Link to={"/"} className="homeLink" >back to home</Link>
                    <br />
                    <button className="adoptButton" onClick={() => adoptAPet(petInfo._id)}>
                        Adopt {petInfo.name}
                    </button>
                </div>
            </header>


            <div className="infoBody">
                <div className="info">
                    <p>Pet Type:</p>
                    <p>Description: </p>
                    <p>Skills:
                    </p>

                </div>
                <div>
                <p>{petInfo.type}</p>
                <p>{petInfo.description}</p>
                <p>{petInfo.skill}  <br />
                {petInfo.skillTwo} <br />
                {petInfo.skillThree}</p>
                </div>
            </div>


        </div>
    )
}

export default OnePet;