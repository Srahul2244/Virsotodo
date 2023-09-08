import { Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todolist = ({ datas, Delete }) => {
  return (
    <Container
      boxShadow="outline"
      gap="10"
      p="1"
      rounded="md"
      bg="white"
      spacing="4"
    >
      <Flex justifyContent="space-between" gap="10">
        <Heading as="h3">{datas}</Heading>
        <Button
          colorScheme="red"
          fontSize="2xl"
          height="14"
          w="28"
          onClick={Delete}
        >
          Remove
        </Button>
      </Flex>
      <ToastContainer />
    </Container>
  );
};

export default Todolist;
