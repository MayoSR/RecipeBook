import React from 'react'
import classes from '../../styles/About.module.css'
import {
    Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Divider, Stat, Center,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiChevronDown, BiStarFi } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import NutritionTable from './NutritionTable';

export default function About() {
    return (
        <Box p={4} pt={0}>
            <Heading size="lg" color="#424242" py={4}>About</Heading>
            <Text size="sm" color="#424242" >Bacon and Eggs is a popular and most loves Continental breakfast that is extremely fulfilling and delicious.  </Text>
            <Heading size="lg" color="#424242" py={4}>Cook's Note</Heading>
            <Text size="sm" color="#424242" >The skewers can also be cooked on the grill. Preheat an outdoor grill for medium heat and lightly oil the grate. Cook skewers on the preheated grill, turning occasionally, until an instant-read thermometer inserted into the center reads at least 165 degrees F (74 degrees C). </Text>
            <Box my={8}>
                <Grid templateColumns="repeat(3, 1fr)" color="#424242" >
                    <Stat >
                        <Flex flexDirection="column" alignItems="center">
                            <StatLabel>Views</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                                <StatArrow type="increase" />
                                23.36%
                            </StatHelpText>
                        </Flex>
                    </Stat>
                    <Stat>
                        <Flex flexDirection="column" alignItems="center">
                            <StatLabel>Rating</StatLabel>
                            <StatNumber>
                                <Flex alignItems="center">
                                    <Flex>
                                        <Text >4.5</Text>
                                    </Flex>
                                    <Flex flexDirection="column" alignItems="center" mt={3}>
                                        <Icon w={4} h={4} as={AiFillStar} color={"#FFD700"} />
                                        <Text fontSize="10px">/5</Text>
                                    </Flex>

                                </Flex>
                            </StatNumber>
                        </Flex>
                    </Stat>
                    <Stat>
                        <Flex flexDirection="column" alignItems="center">
                            <StatLabel>Favorites</StatLabel>
                            <StatNumber>168,334</StatNumber>
                            <StatHelpText>
                                <StatArrow type="increase" />
                                23.36%
                            </StatHelpText>
                        </Flex>
                    </Stat>
                </Grid>
            </Box>
            <Heading size="lg" color="#424242" py={4}>Photos</Heading>


            <Grid templateColumns="repeat(2, 1fr)" color="#424242" rowGap="20px" gap="20px">
                {[{ img: "bacon", name: "Bacon and Eggs" }, { img: "curry", name: "Chicken Tandoori" }, { img: "eggs", name: "Sunny side up egg with Toast" }, { img: "fish", name: "Lemongrass salmon" }].map((food) => <Box>
                    <img className={classes.imageStyles} src={"/images/" + food.img + ".jfif"} alt={food.name} />
                </Box>)}
            </Grid>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
