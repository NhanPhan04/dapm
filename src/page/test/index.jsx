import { useState } from "react"

const Test = () => {
    const [jobs,setJobs]=useState('')
    const [doList,setDoList]=useState([])

    const HandleInput=(e)=>{
        setJobs(e.target.value)
    }
    return<div style={{padding:32}}>
        <input value={jobs} onChange={()=>{}} type="text" required/>
        <button>Add</button>

        <ul>
            {doList.map((job)=>(
                <li >{job}</li>
            ))}
            
        </ul>
    </div>
}
export default Test