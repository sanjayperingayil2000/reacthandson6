import React,{useContext,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import {datas} from '../components/Details';
import '../index.css'




export const Edit = () => {

    const { studentId } = useParams();
    const [datai] = useContext(datas);
    const navigate = useNavigate();
    
    const current = datai.filter((student) => student.id === parseInt(studentId))
    
    const [newName,setNewName] = useState(current[0].name);
    const [newAge,setNewAge] = useState(current[0].age);
    const [newCourse,setNewCourse] = useState(current[0].course);
    const [newBatch,setNewBatch] = useState(current[0].batch)

    const index = current[0].id;
    console.log(current);
    console.log(datai[index]);

    const handleSubmit = (e) =>{
        datai[index].name = newName;
        datai[index].age = newAge;
        datai[index].course = newCourse;
        datai[index].batch = newBatch;
        navigate('/students');
    }
    const cancel = () => {
        setNewName("");
        setNewAge("");
        setNewCourse("");
        setNewBatch("");
        navigate('/students');
    };

return (
    <>
    <div className='center'>
    <form action=''>
        <b>Name :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newName} onChange={(e) => {setNewName(e.target.value)}}  required/><br/><br/>
        <b>Age :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newAge} onChange={(e) => {setNewAge(e.target.value)}}  required/><br/><br/>
        <b>Course :&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newCourse} onChange={(e) => {setNewCourse(e.target.value)}}  required/><br/><br/>
        <b>Batch :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newBatch} onChange={(e) => {setNewBatch(e.target.value)}}  required/><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={handleSubmit}>Submit</button>
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={cancel}>cancel</button>
    
    </form>
    </div>

    </>
)
}

