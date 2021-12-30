import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const AllPets = (props) => {

    const [petList, setPetList] = useState([]); 
    


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    


    return (
        <div className="body" >
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/new"} >add a pet to the shelter</Link>
                <br />

            </header>
            <h3>These Pets are looking for a good home</h3>
            <table className="table">

                <thead>
                    <tr>
                        <th className="nameType">Name</th>
                        <th className="nameType">Type</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList ?

                            petList.map((pet, index) => (
                                <tr key={index} >
                                    <td className="tableRow">
                                        {pet.name}
                                    </td>
                                    <td className="tableRow">
                                        {pet.type}
                                    </td>

                                    <td>
                                        <Link to={`/one/${pet._id}`}>details</Link>
                                        <span> | </span>
                                        <Link to={`/edit/${pet._id}`}>edit</Link>
                                        

                                    </td>
                                </tr>
                            )) : null
                    }
                </tbody>


            </table>

        </div>
    )
}


export default AllPets;