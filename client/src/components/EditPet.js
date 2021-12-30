import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios'


const EditPet = (props) => {


    const [errors, setErrors] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    const { id } = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill(res.data.skill)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)
            })
            .catch((err) => {
                console.log(err);
                
            })

    }, [])




    const editPetInfo = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            description,
            skill,
            skillTwo,
            skillThree
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }




    return (
        <div className="body">
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"} className="homeLink">Main Page</Link>

            </header>
            <h3>Edit {name}</h3>
            <form onSubmit={editPetInfo}>
                <div className="inputDiv">

                    <label>Pet Name:</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        value={name}
                    />

                    {errors.name ? <span className="error">{errors.name.message}</span> : null}
                    <br />
                    <label>Pet Type:</label>
                    <input
                        onChange={(e) => setType(e.target.value)}
                        type="text"
                        name="type"
                        value={type}
                    />

                    {errors.type ? <span className="error">{errors.type.message}</span> : null}
                    <br />
                    <label>Pet Description:</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        name="description"
                        value={description}
                    />

                    {errors.description ? <span className="error">{errors.description.message}</span> : null}
                    <br />
                    <button className="submitButton">Register</button>
                </div>
                
                <div className="inputDiv">
                    <p>Skills (Optional)</p>
                <label >Skill 1:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setSkill(e.target.value)}
                        name="skill"
                        value={skill}
                    />
                    <br />
                    <label >Skill 2:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setSkillTwo(e.target.value)}
                        name="skillTwo"
                        value={skillTwo}
                    />
                    <br />
                    <label >Skill 3:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setSkillThree(e.target.value)}
                        name="skillThree"
                        value={skillThree}
                    />
                </div>
                
            </form>

        </div>
    )
}


export default EditPet;