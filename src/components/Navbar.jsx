import React, { useState } from 'react'
import classes from "../styles/Navbar.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton, Heading } from "@chakra-ui/react"
import { BiHomeAlt, BiFoodMenu, BiTimeFive, BiBookHeart } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export default function Navbar() {

    let history = useHistory();
    const [currentTab,changeCurrentTab] = useState("home")

    function changeRoute(route) {
        changeCurrentTab(route)
        history.push("/"+route);
    }

    return (
        <Flex className={classes.navbar} minW={"100vw"} justifyContent="space-evenly" alignItems="center">
            <Box>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "home" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        colorScheme="teal"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiHomeAlt} />}
                        onClick={() => changeRoute("home")}
                        className={currentTab === "home" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Home</Text>
                </Flex>
            </Box>
            <Box>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "recipe" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        colorScheme="teal"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiFoodMenu} />}
                        onClick={() => changeRoute("recipe")}
                        className={currentTab === "recipe" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Recipe</Text>
                </Flex>
            </Box>
            <Box>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "cooking" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        colorScheme="teal"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiTimeFive} />}
                        onClick={() => changeRoute("cooking")}
                        className={currentTab === "cooking" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Cooking</Text>
                </Flex>
            </Box>
            <Box>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "Favorite" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        colorScheme="teal"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiBookHeart} />}
                        onClick={() => changeRoute("favorite")}
                        className={currentTab === "Favorite" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Favorite</Text>
                </Flex>
            </Box>



        </Flex>
    )
}
