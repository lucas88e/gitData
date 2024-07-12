import { useGitContext } from '../context/gitContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GitCard from '../components/GitCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../assets/css/git.css'


function GitList() {
  const {git,setGit} = useGitContext()
  const [user,setUser] = useState("lucas88e")

  const getUserGit = async () =>{
      const response = await axios.get(`https://api.github.com/users/${user}`)
      const responseData = response.data
      setGit(responseData)

  }
  const handleChange = (e) =>{
      setUser(e.target.value)
  }
  const handleSearch = () =>{
      if(user && user != '')
          getUserGit()
  }

  useEffect(()=>{
    getUserGit()
  },[])


  return (
    <div >
      <div>
        <h1>Usuarios Git</h1>
        <h2>Introduce tu usuario Git</h2>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          onChange={handleChange}
        />
      </InputGroup>
        <Button className='mb-2' variant="success" onClick={handleSearch}> Buscar</Button>
        <GitCard data={git}/>
      </div>
    </div>
  )
}

export default GitList;