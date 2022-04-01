import { createContext } from "react";

const TradeCoreContext = createContext({});

export default TradeCoreContext;

export const { Provider, Consumer } = TradeCoreContext;
