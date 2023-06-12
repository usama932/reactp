import React from "react";
import http from "./http";
import { useState, useEffect} from 'react';

export default function List(){
    const[users, setUsers] = useState([]);
    useEffect(() =>{
        fetchalluser();
    },[]);
    const fetchalluser = () =>{
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
    return (
        <div>Lists
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile #</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {users.map((user,index)=>(
                                    <tr key={user.id}>
                                       <th scope="row">{++index}</th>
                                       <td>{user.name}</td>
                                       <td>{user.mobile}</td>
                                       <td>{user.age}</td>
                                       <td>{user.city}</td>
                                       <td>{user.country}</td>
                                       <td><button className="btn btn-warning btn-sm" >Edit</button>
                                       <button className="btn btn-danger btn-sm" >Delete</button></td>
                                   </tr>
                        ))}
              
                
                </tbody>
            </table>
        </div>
    )
}