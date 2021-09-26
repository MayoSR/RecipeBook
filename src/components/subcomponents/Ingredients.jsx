import React from 'react'
import classes from '../../styles/Ingredients.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Divider, List, ListItem, ListIcon, Stack, Checkbox } from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiHeart, BiPlus, BiMinus, BiCart } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";
import { flatMapDepth } from 'lodash';

export default function Ingredients() {
    return (
        <Box p={4}>
            <Heading size="md" color="#424242">People Serving (4)</Heading>
            <Flex mt={3} justifyContent="space-between" alignItems="center">
                <Box>
                    <IconButton aria-label="Search database" size="sm" fontSize="lg" icon={<BiPlus />} className={classes.plusRadius} />
                    <IconButton aria-label="Search database" size="sm" fontSize="lg" icon={<BiMinus />} className={classes.minusRadius} />
                </Box>
                <Box className={classes.servingsBox}>
                    <Box className={classes.servingQuantity}>
                        <Heading fontSize="sm">4</Heading>
                    </Box>
                    <IconButton aria-label="Search database" size="md" fontSize="xl" icon={<GiHotMeal />} />
                </Box>
            </Flex>
            <Divider my={4} />


            {["bacon", "eggs"].map((item) => {

                return <>
                    <Heading size="sm" color="#424242">For the {item}</Heading>
                    <br /><Stack spacing={3}>

                        {[{ ingredient: "Bacon", img: "bacon", qty: "3 pieces" }, { ingredient: "Butter", img: "butter", qty: "1 lb" }, { ingredient: "Eggs", img: "eggs", qty: "4 medium" }, { ingredient: "Tomato", img: "tomato", qty: "1/2 medium" }, { ingredient: "Capsicum", img: "capsicum", qty: "1 medium" }].map(food => {
                            return (
                                <Flex alignItems="center" color="#424242" justifyContent="space-between">
                                    <Flex alignItems="center">
                                        <img src={"/images/ingredients/" + food.img + ".jfif"} alt={food.ingredient} className={classes.imgStyles} />
                                        <Text ml={3}>{food.ingredient}</Text>
                                    </Flex>
                                    <Flex alignItems="center">
                                        <Text mr={3}>{food.qty}</Text>
                                        <Checkbox size="lg" colorScheme="green" />
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </Stack>
                    <Divider my={3} />
                </>
            })}
            <br></br>
            <br></br>
        </Box>
    )
}
