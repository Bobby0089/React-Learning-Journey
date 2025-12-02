import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)   // this is how we send data

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input  type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/><br/>
        <input  type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

/*
<Login /> component

This component will probably do something like:

const { setUser } = useContext(UserContext)


Meaning:
✔ When user enters their name or password
✔ setUser updates the global context
✔ All components using the user value will update instantly
*/