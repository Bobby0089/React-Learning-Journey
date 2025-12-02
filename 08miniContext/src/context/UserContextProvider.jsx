import React from "react"
import UserContext from "./UserContext"

const UserContextProvider = ( {children} ) => {  
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider

/*
Step 1: Create the Provider Component
A "Provider" is a component whose job is to wrap other components.
children represents whatever components you wrap inside <UserContextProvider> ... </UserContextProvider>.

Example:

<UserContextProvider>
    <App />
</UserContextProvider>

Step 2: Create State (Data to Share Globally)
const [user, setUser] = React.useState(null)
🔹 This creates a user variable and a setUser function.
🔹 This data will be shared with the entire app through context.


Step 3: Wrap Children with the Provider
return (
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
)

What this does:
 Wraps your entire app
 Makes user and setUser available to every component inside the provider
 No need for props drilling

Step 4: Export the Provider
*/