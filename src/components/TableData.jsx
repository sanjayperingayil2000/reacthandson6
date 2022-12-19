import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { datas } from './Details';

export default function TableData() {
    const [data] = useContext(datas);
return (
    <>
    <thead>
    <tr>
    <th style={{width:"30%",textAlign:"left",padding:"15px",color:"red"}}>Name </th>
    <th style={{width:"15%",textAlign:"right",padding:"15px",color:"red"}}>Age </th>
    <th style={{width:"15%",textAlign:"right",padding:"15px",color:"red"}}>Course </th>
    <th style={{width:"20%",textAlign:"right",padding:"15px",color:"red"}}>Batch </th>
    <th style={{width:"20%",textAlign:"right",padding:"15px",color:"red"}}>Change </th>
    </tr>
    </thead>
    
    <tbody>
        {
    data.map((dt)=>{
        return(
        <tr key={dt.id}>
        <th style={{width:"30%",textAlign:"left",padding:"15px"}}>{dt.name} </th>
        <th style={{width:"15%",textAlign:"right",padding:"15px"}}>{dt.age} </th>
        <th style={{width:"15%",textAlign:"right",padding:"15px"}}>{dt.course} </th>
        <th style={{width:"20%",textAlign:"right",padding:"15px"}}>{dt.batch} </th>
        <th style={{width:"20%",textAlign:"right",padding:"15px"}}>
        <Link to={`/students/${dt.id}`} style={{textDecoration:"none"}} >Edit</Link>    
        </th>
        </tr>
    )

})}
    </tbody>
    </>
)
}
