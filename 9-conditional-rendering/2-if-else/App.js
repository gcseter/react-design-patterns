import React from 'react'

const App = () => {
    if (userProfile.role === "superadmin") {
        return (
            <SuperAdmin/>
        )
    } else if (userProfile.role === "admin") {
        return (
            <Admin/>
        )
    } 

    return (
        <User/>
    )
}

export default App