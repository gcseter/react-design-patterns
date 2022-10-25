import React, { useState } from "react"

const UncontrolledComponents = ({onSubmit}) => {
    const [state, setState] = useState()
    
    const someEvent = () => {
        const data = {}
        onSubmit(data)
    }

    return <></>
}

<UncontrolledComponents onSubmit={data  => {}} />