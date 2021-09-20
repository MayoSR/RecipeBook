import React from 'react'
import classes from '../styles/Home.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import FoodCard from './subcomponents/FoodCard';

export default function Home() {
    return (
        <div>
            <Box bg="#466033" minW={"100%"} minH={"100px"} className={classes.backdropContainer}>
                <Flex justifyContent="space-between">
                    <Box className={classes.inputBackdrop}>
                        <InputGroup size="lg" color="#fff" maxW={"88vw"}>
                            <InputLeftElement
                                children={<Icon as={BiSearchAlt} />}
                            />
                            <Input bg="#212121" placeholder="Search Recipes" />
                            <InputRightElement children={<Icon as={BiFilterAlt} />} />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
            <Box minH={"100vh"} minW={"100%"} bg="#212121" p={4}>
                <Box pb={3} pt={4} color={"#828282"}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize="md">Breakfasts</Heading>
                        <Text fontSize={"12px"} pr={2}>Show all</Text>
                    </Flex>
                </Box>
                <Flex justifyContent="center">

                    <Grid templateColumns="repeat(2, 1fr)" gap={5} rowGap={5}>
                        {[{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }, { img: "pancake", name: "Pancake with maple syrup" }, { img: "pizza", name: "Farmhouse pizza" }, { img: "ramen", name: "Hida Takayama ramen" }, { img: "taco", name: "Mexican chicken tacos" }, { img: "waffle", name: "Waffles and whipped cream" },].map((food) => <FoodCard img={"images/" + food.img + ".jfif"} name={food.name} />)}
                    </Grid>
                </Flex>

            </Box>
            <br></br>
            <br></br>
        </div>
    )
}
