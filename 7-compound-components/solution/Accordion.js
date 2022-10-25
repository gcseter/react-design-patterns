import React, { useState, useContext, createContext } from "react";
import {
    Container, Inner, Item, Body, Wrapper, Title, Header
} from "./Accordion.styles";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Wrapper = function AccordionWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(true);
    const toggleIsShown = (isShown) => setToggleShow(!isShown);
    return (
        <ToggleContext.Provider value={{ toggleShow, toggleIsShown }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.ItemHeader = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, toggleIsShown } = useContext(ToggleContext);
    return (
        <Header onClick={() => toggleIsShown(toggleShow)} {...restProps}>
            {children}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return (
        <Body className={toggleShow ? "open" : ""} {...restProps}>
            <span>{children}</span>
        </Body>
    );
};