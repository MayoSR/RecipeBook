import React from 'react'
import classes from "../../styles/FoodCard.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton,Heading  } from "@chakra-ui/react"
import { BiHeart, BiTimeFive } from "react-icons/bi";

export default function FoodCard(props) {
    return (
        <Box className={classes.foodCard}>
            <Box className={classes.imageBox}>
                <Box className={classes.imageBox}>
                    <img src={props.img} alt={props.img} />
                </Box>
                <Box className={classes.overlayIcons}>
                    <Flex justifyContent="space-between" minW={"150px"}>
                        <IconButton
                            variant="outline"
                            colorScheme="teal"
                            aria-label="Call Sage"
                            fontSize="20px"
                            icon={<Icon as={BiHeart} />}
                        />
                        <Box>
                            <Flex alignItems="center">
                                <IconButton
                                    variant="outline"
                                    colorScheme="teal"
                                    aria-label="Call Sage"
                                    fontSize="20px"
                                    icon={<Icon as={BiTimeFive} />}
                                />
                                <Heading fontSize="xs">1h 40m</Heading>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box bg="#353535" p={3} color="#e6e6e6" height={"65px"} borderBottomRadius={"5px"}>
                <Text fontSize="md">{props.name} </Text>
            </Box>
        </Box>
    )
}
