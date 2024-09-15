import "./App.css";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme.js";

import Landing from "./components/Landing.js"
import TextInputBox from "./components/text_input.js"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Landing/>
        <TextInputBox/>
      </div>
    </ChakraProvider>
  );
}

export default App;
