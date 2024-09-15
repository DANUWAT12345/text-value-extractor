import React from "react";
import { Grid, Box, Text } from "@chakra-ui/react";

const Landing = () => {
  return (
    <div>
      <Grid
        templateColumns="1fr 6fr 1fr"
        gap={10}
        m={3}
        placeItems="center"
      >
        <Box></Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text m="3" fontSize="4xl" as="b" textAlign="center">
            Text Extractor
          </Text>
          <Text m="3" fontSize="2xl" textAlign="center">
            Paste text in the box to run the calculator
          </Text>
          <Text m="3" fontSize="sm" as="i" textAlign="center">
            The calculator will extract the numbers from the text and
            automatically sum them for you!
          </Text>
        </Box>
        <Box></Box>
      </Grid>
    </div>
  );
};

export default Landing;
