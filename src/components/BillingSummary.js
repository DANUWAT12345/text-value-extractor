// src/components/BillingSummary.js

import React from "react";
import { Box, Text, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const BillingSummary = ({ result, totalSum }) => {
  // Function to calculate subtotals
  const calculateSubtotals = () => {
    const subtotals = [];
    let runningTotal = 0;
    for (const [description, value] of Object.entries(result)) {
      runningTotal += value;
      subtotals.push({ description, value, subtotal: runningTotal });
    }
    return subtotals;
  };

  const subtotals = calculateSubtotals();

  return (
    <Box mt={8} p={4} borderWidth={1} borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Billing Summary
      </Text>
      {Object.keys(result).length > 0 ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item Name</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Subtotal</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {subtotals.map(({ description, value, subtotal }, index) => (
              <React.Fragment key={description + index}>
                <Tr>
                  <Td>
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                  </Td>
                  <Td isNumeric>{value.toFixed(2)} ฿</Td>
                  <Td isNumeric>{subtotal.toFixed(2)} ฿</Td>
                  {index === subtotals.length - 1 && (
                    <Td isNumeric fontWeight="bold">
                      {totalSum.toFixed(2)} ฿
                    </Td>
                  )}
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text fontSize="lg" textAlign="center" mt={4}>
          NO DATA
        </Text>
      )}
    </Box>
  );
};

export default BillingSummary;