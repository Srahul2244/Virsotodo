import React, { useState } from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import Todolist from "./Todolist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = () => {
    if (text.trim() !== "") {
      setIsLoading(true);

      setTimeout(() => {
        setData([...data, text]);
        toast("text added successfully");
        setText("");
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleRemove = (index) => {
    const datas = [...data];
    datas.splice(index, 1);
    toast("deleted successfully");
    setData(datas);
  };

  return (
    <Container boxShadow="dark-lg" p="2" rounded="md" bg="white" margin="10">
      <Flex margin="10">
        <Input
          height="14"
          fontSize="2xl"
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          colorScheme="teal"
          size="lg"
          fontSize="2xl"
          height="14"
          w="28"
          onClick={handleAdd}
          isLoading={isLoading}
        >
          Add
        </Button>
      </Flex>
      <ToastContainer />
      <div>
        {data.length === 0 ? (
          <Heading as="h4">No tasks added yet!</Heading>
        ) : (
          data.map((ele, index) => {
            return (
              <Todolist
                key={index}
                datas={ele}
                Delete={() => handleRemove(index)}
              />
            );
          })
        )}
      </div>
    </Container>
  );
};

export default Todo;
