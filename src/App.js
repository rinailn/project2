import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {ContextProvider} from "./context";

export const App = () =>{
    return (
        <>
            <ContextProvider>
                <Header/>
                <Main/>
            </ContextProvider>

            <Footer/>
        </>
    )
}