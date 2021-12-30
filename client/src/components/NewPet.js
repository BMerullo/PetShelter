import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from 'axios';


const NewPet = (props) => {

    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    const registerPet = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pets`, {
            name,
            type,
            description,
            skill,
            skillTwo,
            skillThree
        })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                console.log("!!!!", err);
                setErrors(err.response.data.errors)

            })
    }



    return (
        <div className="body">
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"} className="homeLink" >back to home</Link>
            </header>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={registerPet}>
                <div className="inputDiv">
                    <label className="label">Pet Name:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        value={name}
                    />               
                    {errors.name ? <span className="error">{errors.name.message}</span> : null}
                    <br />
                    <label >Pet Type:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setType(e.target.value)}
                        name="petType"
                        value={type}
                    />
                    
                    {errors.type ? <span className="error">{errors.type.message}</span> : null}
                    <br />
                    <label >Pet Description:</label>
                    <br />
                    <input type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        value={description}
                    />
                    
                    {errors.description ? <span className="error">{errors.description.message}</span> : null}
                    <br />
                    <button className="submitButton">Add Pet</button>
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


export default NewPet;