import { useState, React,useEffect } from 'react'
import classes from '../styles/Recipe.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Button } from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiHeart } from "react-icons/bi";
import { Switch, useHistory,Route,useRouteMatch } from 'react-router';
import About from './subcomponents/About'
import Ingredients from './subcomponents/Ingredients';
import Instructions from './subcomponents/Instructions';
import NutritionTable from './subcomponents/NutritionTable';

export default function Recipe(props) {

    const [activeTab, setActiveTab] = useState("About")

    const components = {"About" : <About />,"Ingredients":<Ingredients />,"Prepare":<Instructions />,"Nutrition":<NutritionTable />,}

    const goBack = () =>{
        props.closeRecipe(false)
        document.body.style.overflow = "auto"
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.slideUpAnimation}>
            <div className={classes.navBox}>

                <Flex justifyContent="space-between" alignItems="center" p={3}>
                    <IconButton
                        aria-label="Call Sage"
                        fontSize="20px"
                        icon={<Icon as={BiArrowBack} />}
                        onClick={goBack}
                    />
                    <Box>
                        <IconButton
                            aria-label="Call Sage"
                            fontSize="20px"
                            icon={<Icon as={BiHeart} />}
                        />
                        <IconButton
                            aria-label="Call Sage"
                            fontSize="20px"
                            icon={<Icon as={BiShareAlt} />}
                            ml={3}
                        />
                    </Box>
                </Flex>
            </div>
            <div className={classes.imgBackdrop}>
                <Box>
                    <img src="/images/bacon.jfif" alt="ramen" />
                </Box>
                <Box className={classes.foodName}>
                    <Heading>Bacon and Eggs</Heading>
                </Box>
            </div>
            <div className={classes.imgForedrop}>
                <Box bg="#f5f5f5" borderTopRadius="30px">
                    <Grid templateColumns="repeat(4, 1fr)" rowGap={5} p={3}>
                        {["About", "Ingredients", "Prepare","Nutrition"].map((tab) => {
                            return (
                                <Button
                                    variant="link"
                                    borderBottom="2px"
                                    borderRadius="0"
                                    py={3}
                                    className={activeTab === tab ? classes.selected : classes.default}
                                    onClick={() => setActiveTab(tab)}>
                                    {tab}
                                </Button>
                            )
                        })}

                    </Grid>
                    <Box>
                        {components[activeTab]}
                    </Box>
                </Box>
                
            </div>
        </div>
    )
}
