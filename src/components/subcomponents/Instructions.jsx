import React from 'react'
import classes from '../../styles/Instructions.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Checkbox } from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiHeart } from "react-icons/bi";

export default function Instructions() {
    return (
        <Box p={3} ml={1} mt={2} color="#424242">
            {[" Let the bacon sit out on the counter to warm up for 10-15 minutes before trying to separate the slices. The bacon will pull apart more easily when it is a little warm.", "Fry bacon in a pan on medium-low flame until they are crispy. Transfer them into a plate.", "Use the same pan to cook eggs. Crack eggs in the pan and cook them as you like; sunny side up. Cover the pan so that the egg cooks properly. Slice cherry tomatoes and cook in the pan at the same time.", "Add seasoning and garnish with chopped fresh parsley. Serve bacon and eggs hot.",].map((step, ind) => {

                return <Box borderLeft="1px dotted #F0A500" pl={5} pb={5} className={classes.stepBox}>
                    <Box className={classes.boxDot} ></Box>
                    <Flex className={classes.headerText} justifyContent="space-between" alignItems="center">
                        <Heading size="sm"> Step {ind + 1}/4</Heading>
                        <Checkbox size="md" colorScheme="green" />
                    </Flex>
                    <Text pt={6} fontSize="sm">{step} </Text >
                </Box>
            })}
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
