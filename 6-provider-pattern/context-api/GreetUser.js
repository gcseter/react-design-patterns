import React from 'react'
import { LanguageContext } from './language-context'

const GreetUser = () => {
    return (
        <LanguageContext.Consumer>
            {({ lang }) => (
                <p>Hello, Kindly select your language. Default is {lang}</p>
            )}
        </LanguageContext.Consumer>
    )
}

export default GreetUser