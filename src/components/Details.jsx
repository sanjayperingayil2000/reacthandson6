import React, { useState } from 'react'
import { createContext } from 'react'


export const datas = createContext();
const Details = (props) => {

    const [Data, setData] = useState([
        {
            id: 0,
            name : "neeraja",
            age : "23",
            course : "MERN" ,
            batch : "december"
        },
        {
            id: 1,
            name : "Sanjay",
            age : "23",
            course : "MEAN" ,
            batch : "March"
        },
        {
            id: 2,
            name : "Rahul",
            age : "23",
            course : "MEVN" ,
            batch : "January"
        },
        {
            id: 3,
            name : "Alkesh",
            age : "24",
            course : "MERN" ,
            batch : "March"
        },
        {
            id: 4,
            name : "Namitha",
            age : "23",
            course : "MEAN" ,
            batch : "September"
        }
    ])

  return (
    <div>
        <datas.Provider value={[Data,setData]}>
            {
                props.children
            }
        </datas.Provider>
        
    </div>
  )
}

export default Details;