import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile

/*

<Profile /> component

This component will probably do:

const { user } = useContext(UserContext)


Meaning:
✔ It can read user information
✔ It shows user data like name, email, etc.
✔ No props required — it directly reads from global context

*/