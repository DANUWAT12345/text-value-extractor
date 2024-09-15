import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import BillingSummary from "./BillingSummary";

function FormikInput() {
  const [result, setResult] = useState({});
  const [totalSum, setTotalSum] = useState(0);

  function validateName(value) {
    let error;
    const formatRegex = /^-?\d+(\.\d+)?([+\-*/]-?\d+(\.\d+)?)*\s?.*$/;

    const lines = value.split("\n");
    for (let line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine === "") continue;

      if (!formatRegex.test(trimmedLine)) {
        error = `Incorrect input format: "${trimmedLine}". Please use the format: [number] [description] or [number] [operator number] [description].`;
        break;
      }
    }

    if (!value) {
      error = "Input is required";
    }

    return error;
  }

  function calculateValue(expression) {
    try {
      return eval(expression); // Use with caution; consider a safer parser
    } catch (e) {
      return 0; // Handle errors as needed
    }
  }

  function handleSubmit(values, actions) {
    const { name } = values;
    const lines = name.split("\n").filter((line) => line.trim() !== "");
    const result = {};
    let totalSum = 0;
    const invalidInputs = [];

    // Helper function to create unique description
    const getUniqueDescription = (baseDescription) => {
      let uniqueDescription = baseDescription;
      let counter = 1;

      while (result.hasOwnProperty(uniqueDescription)) {
        uniqueDescription = `${baseDescription}_${counter}`;
        counter += 1;
      }

      return uniqueDescription;
    };

    for (let line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine === "") continue;

      const [expression, ...descriptionParts] = line.split(" ");
      const description = descriptionParts.join(" ").trim().toLowerCase();
      const value = calculateValue(expression.trim());

      if (!description || !/^[-\d+*/]+$/.test(expression.trim())) {
        invalidInputs.push(trimmedLine);
        continue;
      }

      if (description) {
        // Get a unique description if the description already exists
        const uniqueDescription = getUniqueDescription(description);

        result[uniqueDescription] = value;
        totalSum += value;
      }
    }

    setResult(result); // Save result to state
    setTotalSum(totalSum); // Save totalSum to state
    actions.setSubmitting(false);
    console.log(result);

    if (invalidInputs.length > 0) {
      alert(
        `Some inputs were incorrect:\n${invalidInputs.join(
          "\n"
        )}\nPlease correct these and try again.`
      );
    } else {
      
    }

    actions.setSubmitting(false);
  }

  function handleReset(resetForm) {
    setResult({});
    setTotalSum(0);
    resetForm();
  }

  return (
    <>
      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        {({ resetForm, isSubmitting }) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Input</FormLabel>
                  <Textarea
                    {...field}
                    id="name"
                    placeholder="Enter your input"
                    rows={10}
                    resize="vertical"
                    minHeight="200px"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            <Button
              mt={4}
              ml={4}
              colorScheme="gray"
              onClick={() => handleReset(resetForm)}
            >
              Reset
            </Button>
          </Form>
        )}
      </Formik>
      <BillingSummary result={result} totalSum={totalSum} />
    </>
  );
}

export default FormikInput;
