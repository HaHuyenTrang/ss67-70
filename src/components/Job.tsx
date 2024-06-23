import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './job.css'
import { JobTodo } from '../interface';

export default function Job() {
    // render, dùng useSelector để lấy dữ liệu trong kho
    const [name,setName]=useState<string>("");
    const [level,setLevel]=useState<string>("");
    const [valueInput, setValueInput]=useState<string>("")
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);
    const jobs:any=useSelector(state=>{
        return state;
    })
    const disPatch= useDispatch();
    console.log(jobs);
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        let value = event.target.value;
        setName(value);
    }
    const handleSlect=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        let valueLevel=event.target.value;
        setLevel(valueLevel);
    }
    const addTodo=()=>{
        let newJob={
            id:Math.floor(Math.random()*999999999),
            name:name,
            status:false,
            level:level,
        }
        console.log(newJob);
        disPatch({
            type:"ADD_TODO",
            payload:newJob
        })
    }
    const updateJob=(id:number)=>{
        disPatch({
            type:"UPDATE_TODO",
            payload:id,
        }
        )
    }
  return (  
    <>
    
        {loading ?(
            <div>Loading...</div>
        ):(
   
                <div className='table'>Job
                <div>
                    <label htmlFor="">Tên công việc</label>
                    <input type="text"  onChange={handleChange}/>
                    <select name="" id="" onChange={handleSlect}>
                        <option value="">chọn cấp độ</option>
                        <option value="ten">10</option>
                        <option value="five">5</option>
                        <option value="one">1</option>
                    </select>
                    <button onClick={addTodo}>thêm công việc  </button>
                </div>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên công việc</th>
                                <th>Trạng thái công việc</th>
                                <th>Mức độ</th>
                                <th>Hành động</th>

                            </tr>
                        </thead>
                        <tbody>
                            {jobs.jobReducer.map((job:JobTodo, index:number)=>{
                                return (
                                    <tr key={job.id}>
                                        <td>{index+1}</td>
                                        <td>{job.name}</td>
                                        <td> <input type="checkbox" /></td>
                                        <td>{job.level}</td>
                                        <td>
                                            <button onClick={()=>updateJob(job.id)}>sửa</button>
                                            <button>xóa</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                
                </div>
            )}
    </>
  )
}
