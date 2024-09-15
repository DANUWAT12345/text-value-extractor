import React from "react";
import { Box } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import FormikInput from "./FormikInput";

const PlainTextInputCard_Instruction = () => {
  return (
    <Box m={2}>
      <Card>
        <CardBody>
          <Text fontSize="md" mb={1} textAlign="left">
            Please input the text in the following format.
          </Text>
          <Box bg="gray.100" p={3} mb={5} borderRadius="md">
            <Text fontFamily="monospace">
              167/2 Dinner
              <br />
              900 Bookstore
              <br />
              419 Netflix
              <br />
              400 Bill
              <br />
              -200 income
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

const TextInputBox = () => {
  return (
    <div>
      <Grid templateColumns="1fr 6fr 1fr" gap={10}>
        <Box></Box>
        <Box bg="white">
          <div>
            <Box m="1">
                <PlainTextInputCard_Instruction />
                <FormikInput />
            </Box>
          </div>
        </Box>
        <Box></Box>
      </Grid>
    </div>
  );
};

export default TextInputBox;
