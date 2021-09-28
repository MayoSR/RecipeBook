import React, { useState, useEffect } from 'react'
import classes from '../styles/Home.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, Center, IconButton } from "@chakra-ui/react"
import { BiSearchAlt, BiCoffeeTogo, BiFilterAlt } from "react-icons/bi";
import { GiHamburger, GiCoffeePot, GiNoodles } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import FoodCard from './subcomponents/FoodCard';
import FilterModal from './subcomponents/FilterModal';
import Recipe from './Recipe';

export default function Home() {


    const [isModalOpen, setModalStatus] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("Food")
    const [isRecipeOpen,setRecipeStatus] = useState(false)

    const openModal = () => {
        setModalStatus(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box px={4}>
            {isModalOpen ? <FilterModal closeModal={setModalStatus} /> : <></>}
            <Box pt={6}>
                <Center className={classes.backdropContainer}>
                    <InputGroup size="md" color="#424242">
                        <InputLeftElement
                            children={<Icon as={BiSearchAlt} />}
                        />
                        <Input bg="#eee" placeholder="Search Recipes" isFullWidth borderRadius="20px" />
                        <InputRightElement children={<Icon as={BiFilterAlt} />} onClick={openModal} />
                    </InputGroup>
                </Center>
            </Box>
            <Flex justifyContent="space-between" my={2} mt={5}>
                {[{ "icon": GiHamburger, "category": "Food" }, { "icon": BiCoffeeTogo, "category": "Drinks" }, { "icon": FaIceCream, "category": "Dessert" }, { "icon": GiCoffeePot, "category": "Beverage" }, { "icon": GiNoodles , "category": "Soup" }].map(item => {
                    return <Box onClick={() => setSelectedCategory(item.category)}>
                        <Flex flexDirection="column" alignItems="center" borderRadius="5px" p={3} className={item.category === selectedCategory ? classes.active : classes.inactive} >
                            <Icon w={7} h={7} as={item.icon} />
                            <Text fontSize="xs" mt={1}>{item.category}</Text>
                        </Flex></Box>
                })}
            </Flex>
            <Heading size="lg" ml={1} mb="1px" my={5}> Popular foods </Heading>
            <Box minH={"100vh"} minW={"100%"} bg="#f5f5f5">
                <Flex justifyContent="center">

                    <Box className={classes.foodCardFadeIn}>
                        {[{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }, { img: "pancake", name: "Pancake with maple syrup" }, { img: "pizza", name: "Farmhouse pizza" }, { img: "ramen", name: "Hida Takayama ramen" }, { img: "taco", name: "Mexican chicken tacos" }, { img: "waffle", name: "Waffles and whipped cream" },].map((food) => <FoodCard openRecipe={setRecipeStatus} img={"images/" + food.img + ".jfif"} name={food.name} />)}
                    </Box>
                </Flex>

            </Box>
            <br></br>
            <br></br>
            {isRecipeOpen ? <Recipe closeRecipe={setRecipeStatus} /> : <></>}
        </Box>
    )
}
