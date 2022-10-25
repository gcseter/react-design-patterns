import React from 'react'

const App = ({ isShowUser }) => {

    return (
        <>
            {isShowUser && <User/>}
        </>
    )
}

export default App