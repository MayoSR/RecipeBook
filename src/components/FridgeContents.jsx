import React, { useEffect } from 'react'
import classes from "../styles/FridgeContents.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton, Heading, Divider, Avatar, Center, Tag, } from "@chakra-ui/react"
import { BiHeart, BiTimeFive, BiBookmark, BiUpload } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai";
import { GiBacon, GiTomato, GiPotato, GiFriedFish, GiButter, GiMeat } from "react-icons/gi";
import { useHistory } from 'react-router';
import Ingredients from './subcomponents/Ingredients';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useNumberInput,
    HStack,
    Button, Select
} from "@chakra-ui/react"

function MobileIncrement() {
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        defaultValue: parseInt(Math.random() * 10),
        min: 0,
        max: 100,
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    return (
        <Flex maxW="90px">
            <IconButton size="xs" icon={<Icon as={AiOutlinePlus} />}  {...inc} borderTopRightRadius="0" borderBottomRightRadius="0" />
            <Input {...input} size="xs" textAlign="center" />
            <IconButton size="xs" icon={<Icon as={AiOutlineMinus} />}  {...dec} borderTopLeftRadius="0" borderBottomLeftRadius="0" />
        </Flex>
    )
}

export default function FridgeContents(props) {

    let history = useHistory()

    const showRecipe = () => {
        history.push("recipe")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const foods = [{ category: "vegetables", item: "Potato" }, { category: "vegetables", item: "Onion" }, { category: "vegetables", item: "Lime" }, { category: "vegetables", item: "Chilly", }, { category: "vegetables", item: "Tomato", }, { category: "meat & poultry", item: "Bacon", }, { category: "meat & poultry", item: "Beef", }, { category: "meat & poultry", item: "Fish", }, { category: "dairy", item: "Eggs", }, { category: "dairy", item: "Butter", }, { category: "dairy", item: "Cheese" }]

    return (
        <Box>

            <Heading size="lg" pl={"20px"} pt={3}>Recommended from your Fridge</Heading>
            <Flex className={classes.recommendedCarousel}>
                {["bacon", "curry", "eggs"].map(food => {
                    return <Box className={classes.recommendedFood}>

                        <img src={"/images/" + food + ".jfif"} alt={food} />
                        <Box className={classes.recommendedText}>
                            <Heading fontSize="2xl" color="#fff" pb={2}>Bacon and Eggs</Heading>
                            <Flex className={classes.foodTags}>
                                {["Non-Vegetarian", "English", "Breakfast"].map((size) => (
                                    <Tag size="sm" variant="solid" mr={2} bg="#DB6400"
                                        color="#fff">
                                        {size}
                                    </Tag>
                                ))}
                            </Flex>
                        </Box>
                        <Flex className={classes.recommendedStars} justifyContent="flex-end">
                            <Flex>
                                {[1, 2, 3, 4, 5].map((star) => {
                                    return <Icon w={6} h={6} as={AiFillStar} color={"#FFD700"} />
                                })}
                            </Flex>
                        </Flex>
                    </Box>
                })}
            </Flex>

            <Box pt={1} bg="#fff" m={4} boxShadow="-1px -1px 13px 3px rgba(0,0,0,0.1);">
                <Heading size="lg" pl={"20px"} mt={3} >Add a new Ingredient</Heading>
                <Box p={3}>

                    <InputGroup mb={2} size="md">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<GiMeat color="#DB6400" />}
                        />
                        <Input placeholder="Ingredient" />
                    </InputGroup>

                    <Flex mb={2}>
                        <Box flex="0.38">
                            <Input placeholder="Quantity" mr={3} />
                        </Box>
                        <Box flex="0.02">

                        </Box>
                        <Box flex="0.6">
                            <Select placeholder="Select category" color="#a9a9a9">
                                <option value="option1">Meat & Poultry</option>
                                <option value="option2">Dairy</option>
                                <option value="option3">Vegetables</option>
                            </Select>
                        </Box>

                    </Flex>
                    <Button leftIcon={<Icon as={BiUpload} w={5} h={5} color="#DB6400" />} variant="outline" mb={2}  color="#a9a9a9" isFullWidth>
                        Choose Image (32x32)
                    </Button>
                    <Button isFullWidth variant="filled" bg="#DB6400" color="#fff">Add New Ingredient</Button>
                </Box>
                {/* <Flex justifyContent="space-between">
                    <Heading size="lg" pl={"20px"} my={3}>Your Fridge</Heading>
                </Flex>
                <Divider /> */}
                <Box  className={classes.fridgeContent}>

                    {[...new Set(foods.map(food => food.category))].map(category => {
                        return <Box pb={2}>

                            <Divider />
                            <Heading size="lg" pl={"20px"} my={3}>{category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
                            <Box px={"20px"}>
                                {foods.filter(food => food.category === category).map(food => {

                                    return <Box mb={3}>
                                        <Flex justifyContent="space-between" alignItems="center">
                                            <Flex alignItems="center">
                                                <Box mr={2} height="30px" width="30px" borderRadius="5px" overflow="hidden">

                                                    <img src={"/images/fridge/" + food.item.toLowerCase() + ".jfif"} alt="img" />
                                                </Box>
                                                <Text fontSize="md">{food.item}</Text>
                                            </Flex>
                                            <MobileIncrement />
                                        </Flex>
                                    </Box>
                                })}
                            </Box>
                        </Box>
                    })}
                </Box>

            </Box>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
