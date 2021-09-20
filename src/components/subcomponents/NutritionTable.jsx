import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
} from "@chakra-ui/react"


export default function NutritionTable() {
    return (
        <Box p={3}>
            <Table border="1px" color="#fff" size="sm">
                <Thead>
                    <Tr>
                        <Th>Type</Th>
                        <Th textAlign="left">Per Serving</Th>
                        <Th textAlign="right">% Daily Value *</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {[{ type: "Protein", weight: "18.1g", percent: "36%" }, { type: "Carbohydrates", "weight": "4.1g", percent: "1%" }, { type: "Dietary Fiber", "weight": "0.7g", percent: "3%" }, { type: "Sugars", weight: "0.8g", percent: "1%" }, { type: "Fat", weight: "17g", percent: "26%" }, { type: "Saturated Fat", weight: "2.7g", percent: "14%" }, { type: "Cholesterol", weight: "48.5mg", percent: "16%" }, { type: "Vitamin A Iu", weight: "58IU", percent: "1%" }, { type: "Niacin Equivalents", weight: "11.4mg", percent: "87%" }, { type: "Vitamin B", weight: "0.4mg", percent: "24%" }, { type: "Vitamin C", weight: "9.3mg", percent: "16%" }, { type: "Folate", weight: "7.8mcg", percent: "2%" }, { type: "Calcium", weight: "28.8mg", percent: "3%" }, { type: "Iron", weight: "1.3mg", percent: "7%" }, { type: "Magnesium", weight: "21.7mg", percent: "8%" }, { type: "Potassium", weight: "214.9mg", percent: "6%" }, { type: "Sodium", weight: "166.9mg", percent: "7%" }, { type: "Thiamin", weight: "0.1mg", percent: "5%" }].map((nutrient) => (
                    <Tr>
                        <Td>{nutrient.type}</Td>
                        <Td textAlign="left">{nutrient.weight}</Td>
                        <Td textAlign="right">{nutrient.percent}</Td>
                    </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th colSpan="2" textAlign="right">Total Cals</Th>
                        <Th isNumeric>248</Th>
                    </Tr>
                </Tfoot>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
