import { useState, React } from 'react'
import classes from '../styles/Profile.module.css'
import {
    Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Button, Center, Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Divider
} from "@chakra-ui/react"
import { BiBell, } from "react-icons/bi";
import { BsGear, } from "react-icons/bs";
import { Switch, useHistory, Route, useRouteMatch } from 'react-router';
import Summary from './subcomponents/Summary';
import Ingredients from './subcomponents/Ingredients';
import Instructions from './subcomponents/Instructions';

export default function Profile(props) {

    let { path, url } = useRouteMatch();
    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }

    return (
        <div>
            <Flex justifyContent="space-between" p={3}>
                <Heading>Profile</Heading>
                <Box>
                    <IconButton variant="outline" icon={<Icon w={5} h={5}  as={BiBell} />} mr={3} />
                    <IconButton variant="outline" icon={<Icon w={5} h={5}  as={BsGear} />} />
                </Box>
            </Flex>
            <Center flexDirection="column" height="250px" className={classes.profileBg}>
                <Center flexDirection="column" className={classes.overlayBox}>

                    <Center p={1} flexDirection="column" height="105px" width="105px" bg="linear-gradient(45deg, rgba(70,96,51,1) 0%, rgba(108,255,0,1) 100%);" borderRadius="50%">
                        <img alt="Dan Abrahmov" src="https://bit.ly/dan-abramov" className={classes.profileImg} />
                    </Center>
                    <Heading fontSize="lg" mt={3}>Dan Abrahmov</Heading>
                </Center>
            </Center>
            <Divider />
            <Flex justifyContent="space-evenly" mt={3}>
                <StatGroup width="100%">
                    <Flex justifyContent="center">
                        <Stat>
                            <Center flexDir="column">

                                <StatLabel>Recipes</StatLabel>
                                <StatNumber>50</StatNumber>
                            </Center>

                        </Stat>
                    </Flex>
                    <Flex justifyContent="center">
                        <Stat>
                            <Center flexDir="column">

                                <StatLabel>Followers</StatLabel>
                                <StatNumber>345</StatNumber>
                            </Center>
                        </Stat>
                    </Flex>
                    <Flex justifyContent="center">
                        <Stat>
                            <Center flexDir="column">

                                <StatLabel>Following</StatLabel>
                                <StatNumber>200</StatNumber>
                            </Center>

                        </Stat>
                    </Flex>
                </StatGroup>
            </Flex>
            <Divider mt={3} />
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {[{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }, { img: "pancake", name: "Pancake with maple syrup" }, { img: "pizza", name: "Farmhouse pizza" }, { img: "ramen", name: "Hida Takayama ramen" }, { img: "taco", name: "Mexican chicken tacos" }, { img: "waffle", name: "Waffles and whipped cream" },{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }, { img: "pancake", name: "Pancake with maple syrup" }, { img: "pizza", name: "Farmhouse pizza" }, { img: "ramen", name: "Hida Takayama ramen" }, { img: "taco", name: "Mexican chicken tacos" }, { img: "waffle", name: "Waffles and whipped cream" },].map((food) => <Box overflow="hidden" onClick={() => history.push("/recipe")}>
                    <img src={"images/" + food.img + ".jfif"} style={{ objectFit: "cover", height: "100px" }} alt={food.name} />
                </Box>)}
            </Grid>
        </div>
    )
}
