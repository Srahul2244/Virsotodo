import React from "react";
import Todo from "./componets/Todo";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </div>
  );
}

export default App;
