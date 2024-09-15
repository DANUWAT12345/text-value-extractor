import { extendTheme } from "@chakra-ui/react";

// Define your custom theme
const theme = extendTheme({
  fonts: {
    heading: "'Roboto', sans-serif", // Font for headings
    body: "'Open Sans', sans-serif", // Font for body text
  },
  styles: {
    global: {
      body: {
        bg: "white", // Set default background color
        color: "gray.800", // Default text color
      },
    },
  },
});

export default theme;