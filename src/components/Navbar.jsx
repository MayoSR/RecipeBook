import React, { useState } from 'react'
import classes from "../styles/Navbar.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton, Heading,Avatar } from "@chakra-ui/react"
import { BiHomeAlt, BiFoodMenu, BiTimeFive, BiBookHeart,BiFridge } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export default function Navbar() {

    let history = useHistory();
    const [currentTab,changeCurrentTab] = useState("home")

    function changeRoute(route) {
        changeCurrentTab(route)
        history.push("/"+route);
    }

    return (
        <Flex className={classes.navbar} width={"100vw"} justifyContent="space-evenly" alignItems="center">
            <Box mt={1}>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "home" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiHomeAlt} />}
                        onClick={() => changeRoute("home")}
                        className={currentTab === "home" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Home</Text>
                </Flex>
            </Box>
            <Box mt={1}>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "cooking" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiFridge} />}
                        onClick={() => changeRoute("cooking")}
                        className={currentTab === "cooking" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Fridge</Text>
                </Flex>
            </Box>
            <Box mt={1}>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "Profile" ? classes.activeButton : classes.inactive}>
                    <Avatar width="26px" height="26px" name="Charles White" src="/images/profile/person.jfif" onClick={() => changeRoute("profile")} mb={2}/>
                    <Text className={classes.buttonText} fontSize="xs">Profile</Text>
                </Flex>
            </Box>



        </Flex>
    )
}
