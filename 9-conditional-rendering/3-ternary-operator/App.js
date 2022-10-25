import React from 'react'

const App = ({ role }) => {

    return <>
        {role === "superadmin" ? <SuperAdmin /> : <User />}
    </>
}

export default App