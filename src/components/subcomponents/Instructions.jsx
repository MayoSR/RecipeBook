import React from 'react'
import classes from '../../styles/Instructions.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Checkbox } from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiHeart } from "react-icons/bi";

export default function Instructions() {
    return (
        <Box p={3} ml={1} mt={2} color="#424242">
            {[1, 2, 3, 4].map(num => {

                return <Box borderLeft="1px dotted #F0A500" pl={5} pb={5} className={classes.stepBox}>
                    <Box className={classes.boxDot} ></Box>
                    <Flex className={classes.headerText} justifyContent="space-between" alignItems="center">
                        <Heading size="sm"> Step {num}/4</Heading>
                        <Checkbox size="md" colorScheme="green" />
                    </Flex>
                    <Text pt={6} fontSize="sm"> Place the soy sauce, olive oil, lemon juice, Worcestershire sauce, garlic powder, basil, parsley, and pepper in a blender. Add hot pepper sauce and garlic, if desired. Blend on high speed for 30 seconds until thoroughly mixed.</Text >
                </Box>
            })}
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
