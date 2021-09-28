import React from 'react'
import classes from "../../styles/FoodCard.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton, Heading, Divider, Avatar, Center, Tag, } from "@chakra-ui/react"
import { BiHeart, BiTimeFive, BiBookmark, BiShareAlt } from "react-icons/bi";
import { AiFillFire, AiFillStar } from "react-icons/ai";
import { useHistory } from 'react-router';

export default function FoodCard(props) {

    let history = useHistory()

    const showRecipe = () => {
        history.push("recipe")
    }

    return (
        <Box className={classes.foodCard} onClick={showRecipe} mb={4} color="#424242" bg="#fff">
            <Flex className={classes.foodTags}>
                {["Non-Vegetarian", "English", "Breakfast"].map((size) => (
                    <Tag size="sm" variant="solid" mr={2} mb={3} bg="#DB6400"
                    color="#fff">
                        {size}
                    </Tag>
                ))}
            </Flex>
            <Box className={classes.imageBox}>
                <Box className={classes.imageBox}>
                    <img src={props.img} alt={props.img} />
                </Box>
            </Box>
            <Box p={3} borderBottomRadius={"5px"}>
                <Heading fontSize="xl" mb={3}>{props.name} </Heading>

                <Box className={classes.overlayIcons}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex alignItems="center">
                            <Icon as={BiTimeFive} mr={1} />
                            <Heading fontSize="xs" mr={3}>1h 40m</Heading>
                            <Icon as={AiFillFire} mr={1} />
                            <Heading fontSize="xs">245 cals</Heading>
                        </Flex>
                        <Flex>
                            {[1, 2, 3, 4, 5].map((star) => {
                                return <Icon as={AiFillStar}  color={"#FFD700"} />
                            })}
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Divider />
            <Box py={3} px={3}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center">
                        <Avatar size="sm" name="Charles White" src="/images/profile/person.jfif" mr={2} />
                        <Flex flexDirection="column">
                            <Text fontSize="xs">Recipe by</Text>
                            <Heading fontSize="sm">Charles White</Heading>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Icon as={BiHeart} mr={3} w={5} h={5} />
                        <Icon as={BiShareAlt} mr={3} w={5} h={5} />
                        <Icon as={BiBookmark} mr={1} w={5} h={5} />
                    </Flex>
                </Flex>

            </Box>
        </Box>
    )
}
