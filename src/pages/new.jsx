import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { datas } from '../components/Details';

const New = () => {
    const [datai] = useContext(datas);
    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState("");
    const [newCourse,setNewCourse] = useState("");
    const [newBatch,setNewBatch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
    const addList = datai;
    console.log({addList});
    addList.push({
        id: addList.length,
        name : newName,
        age : newAge,
        course : newCourse,
        batch : newBatch
    })

    navigate(-1);
    e.preventDefault();
}

return (
    <>
    <div className='center'>
    <form action=''>
        <b>Name :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder='Your Name '  onChange={(e) => {setNewName(e.target.value)}}  required/><br/><br/>
        <b>Age :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' Your Age' onChange={(e) => {setNewAge(e.target.value)}}  required/><br/><br/>
        <b>Course :&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder='Course Name '  onChange={(e) => {setNewCourse(e.target.value)}}  required/><br/><br/>
        <b>Batch :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder='Batch Name ' onChange={(e) => {setNewBatch(e.target.value)}}  required/><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={handleSubmit}>Add</button>
    
    </form>
    </div>
    </>
)
}

export default New