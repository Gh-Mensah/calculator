import React from "react";

const CalcContext=React.createContext("")
const TestContext=React.createContext("")
const BracketContext=React.createContext("")

const ValueProvider=CalcContext.Provider
const TestProvider=TestContext.Provider
const BracketProvider=BracketContext.Provider

const InputConsumer=CalcContext.Consumer
const TestConsumer=TestContext.Consumer
const BracketConsumer=BracketContext.Consumer

export {ValueProvider,InputConsumer,TestProvider,TestConsumer,BracketConsumer,BracketProvider}