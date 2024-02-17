import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const { id } = useParams();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [address, setAddress] = useState()
    const [contactno, setContactNo] = useState()
    const [school, setSchool] = useState()
    const [college, setCollege] = useState()
    const [course, setCourse] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/get/" + id);
                console.log(response);
                setName(response.data.name)
                setEmail(response.data.email)
                setAge(response.data.age)
                setAddress(response.data.address)
                setContactNo(response.data.contactno)
                setSchool(response.data.school)
                setCollege(response.data.college)
                setCourse(response.data.course)
            }catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/' + id, {name, email, age, address, contactno, school, college, course})
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}> 
                    <h2>Update User</h2>
                    <div className="mb-2">
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
                            type="text"
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
                    <button className="btn btn-success">Update</button>                
                </form>
            </div>
        </div>

    )
}

export default UpdateUser;