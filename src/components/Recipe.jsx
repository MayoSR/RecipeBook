import { useState, React } from 'react'
import classes from '../styles/Recipe.module.css'
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Grid, Heading, Text, IconButton, Button } from "@chakra-ui/react"
import { BiArrowBack, BiShareAlt, BiHeart } from "react-icons/bi";
import { Switch, useHistory,Route,useRouteMatch } from 'react-router';
import Summary from './subcomponents/Summary';
import Ingredients from './subcomponents/Ingredients';
import Instructions from './subcomponents/Instructions';

export default function Recipe(props) {

    let { path, url } = useRouteMatch();
    const [activeTab, setActiveTab] = useState(path.split("/")[2].charAt(0).toUpperCase()+path.split("/")[2].slice(1))
    const history = useHistory()

    const changeTab = (tab) => {
        setActiveTab(tab)
        history.push(tab.toLowerCase())
    }

    const goBack = () =>{
        history.push("/")
    }

    return (
        <div>
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
                <Box bg="#f5f5f5" borderTopRadius="30px" mt={3}>
                    <Grid templateColumns="repeat(4, 1fr)" rowGap={5} p={3}>
                        {["About", "Ingredients", "Prepare","Nutrition"].map((tab) => {
                            return (
                                <Button
                                    variant="link"
                                    borderBottom="2px"
                                    borderRadius="0"
                                    pb={3}
                                    className={activeTab === tab ? classes.selected : classes.default}
                                    onClick={() => changeTab(tab)}>
                                    {tab}
                                </Button>
                            )
                        })}

                    </Grid>
                    <Box>
                        {props.component}
                    </Box>
                </Box>
                
            </div>
        </div>
    )
}
