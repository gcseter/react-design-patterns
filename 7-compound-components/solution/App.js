import React from "react";
import Accordion from "./Accordion";
import faqData from "./data";

const App = () => {
    return (
        <Accordion>
            <Accordion.Title>FAQ</Accordion.Title>

            <Accordion.Wrapper>
                {faqData.map(({ id, header, body }) => (
                    <Accordion.Item key={id}>
                        <Accordion.ItemHeader>{header}</Accordion.ItemHeader>
                        <Accordion.Body>{body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Wrapper>
        </Accordion >
    )
};

export default App;