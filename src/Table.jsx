import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

export const Table = () => {
  const [users, setusers] = useState([]);




  const fetchUsers = () => {
    try {
      axios.get("http://localhost:5000/api/user/allUsers").then(res => {
        setusers(res.data?.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <button onClick={fetchUsers}>FetchUsers</button>
    <table>
      <tr>
        <th>ID</th>
        <th>UserName</th>
        <th>Email</th>
      </tr>

      {users?.map(val => (
         <tr key={val._id}>
          <td>{val._id}</td>
         <td>{val.username}</td>
         <td>{val.email}</td>
         
       </tr>
      ))}
      
    </table>
      </>
  )
}
