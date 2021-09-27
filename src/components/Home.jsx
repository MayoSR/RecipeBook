import React, { useState,useEffect } from 'react'
import classes from '../styles/Home.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import FoodCard from './subcomponents/FoodCard';
import FilterModal from './subcomponents/FilterModal';

export default function Home() {


    const [isModalOpen, setModalStatus] = useState(false)

    const openModal = () => {
        setModalStatus(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {isModalOpen ? <FilterModal closeModal={setModalStatus} /> : <></>}
            <Box minW={"100%"} minH={"100px"} className={classes.backdropContainer}>
                <Flex justifyContent="space-between">
                    <Box className={classes.inputBackdrop}>
                        <InputGroup size="lg" color="#424242" maxW={"88vw"}>
                            <InputLeftElement
                                children={<Icon as={BiSearchAlt} />}
                            />
                            <Input bg="#f5f5f5" placeholder="Search Recipes" />
                            <InputRightElement children={<Icon as={BiFilterAlt} />} onClick={openModal} />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
            <Box minH={"100vh"} minW={"100%"} bg="#f5f5f5" p={4}>
                <Box pb={3} pt={4} color={"#828282"}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize="md">Breakfasts</Heading>
                        <Text fontSize={"12px"} pr={2}>Show all</Text>
                    </Flex>
                </Box>
                <Flex justifyContent="center">

                    <Box>
                        {[{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }, { img: "pancake", name: "Pancake with maple syrup" }, { img: "pizza", name: "Farmhouse pizza" }, { img: "ramen", name: "Hida Takayama ramen" }, { img: "taco", name: "Mexican chicken tacos" }, { img: "waffle", name: "Waffles and whipped cream" },].map((food) => <FoodCard img={"images/" + food.img + ".jfif"} name={food.name} />)}
                    </Box>
                </Flex>

            </Box>
            <br></br>
            <br></br>
        </div>
    )
}
