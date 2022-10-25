import React from "react";
import { LanguageContext } from "./language-context";

export default function App() {
    return (
        <LanguageContext.Provider value={{ lang: "EN-US" }}>
            <h1>Welcome</h1>
            <GreetUser />
        </LanguageContext.Provider>
    );
}