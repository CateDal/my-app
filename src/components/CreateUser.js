import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contactno, setContactNo] = useState("");
    const [school, setSchool] = useState("");
    const [college, setCollege] = useState("");
    const [course, setCourse] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/create', { name, email, age, address, contactno, school, college, course })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="md-2">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />                      
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />   
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input 
                            type="text"
                            placeholder="Enter Age"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />   
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input  
                            type="text"
                            placeholder="Enter Address"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ContactNo</label>
                        <input  
                            type="text"
                            placeholder="Enter Contact Number"
                            className="form-control"
                            value={contactno}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">School</label>
                        <input  
                            type="text"
                            placeholder="Enter Your School"
                            className="form-control"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">College</label>
                        <input  
                            type="text"
                            placeholder="Enter Your College"
                            className="form-control"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Course</label>
                        <input  
                            type="text"
                            placeholder="Enter Your Course"
                            className="form-control"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
