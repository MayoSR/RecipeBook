import {
    Box, Flex, Heading, IconButton, Slider, SliderFilledTrack,
    SliderThumb, SliderTrack, Tag, Text,Button,Divider
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import classes from '../../styles/FilterModal.module.css';


export default function FilterModal(props) {

    const [modalAnimationState,setModalAnimationState] = useState(true)

    const modalClosingState = () =>{
        setModalAnimationState(false)
        setTimeout(() => props.closeModal(false),500)
        
    }


    return (
        <Box className={modalAnimationState ? classes.modalClass : classes.modalClassExit } p={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Filter</Heading>
                <IconButton size="sm" as={MdClose} onClick={modalClosingState} />
            </Flex>
            <Box mt={3}>
                <Box mt={3}>
                    <Heading size="md">Meal</Heading>
                    <Box mt={5}>
                        {["Breakfast", "Lunch", "Dinner", "Drinks", "Dessert", "Snacks", "Salad"].map((size) => (
                            <Tag size="md" variant="solid" mr={2} mb={3} bg="lightgrey"
                            color="#fff" onClick={(e) => e.target.style.backgroundColor = "#DB6400"}>
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Divider />
                <Box mt={3}>
                    <Heading size="md">Type</Heading>
                    <Box mt={5}>
                        {["Vegetarian", "Non Vegetarian", "Egg + Vegetarian", "Dairy + Vegetarian", "Vegan"].map((size) => (
                            <Tag size="md" variant="solid" mr={2} mb={3} bg="lightgrey"  onClick={(e) => e.target.style.backgroundColor = "#DB6400"}
                            color="#fff">
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Divider />
                <Box mt={3}>
                    <Heading size="md">Cuisine</Heading>
                    <Box mt={5}>
                        {["Indian", "Chinese", "Greek", "Thai", "Mexican", "Indonesian", "Japanese", "American", "European", "Korean"].map((size) => (
                            <Tag size="md" variant="solid" mr={2} mb={3} bg="lightgrey"  onClick={(e) => e.target.style.backgroundColor = "#DB6400"}
                            color="#fff">
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Divider />
                <Box mt={3}>
                    <Flex justifyContent="space-between">
                        <Heading size="md">Servings</Heading>
                        <Text size="md">4 servings</Text>
                    </Flex>
                    <Box mt={5}>
                        <Slider defaultValue={60} min={0} max={300} step={30}>
                            <SliderTrack bg="red.100">
                                <Box position="relative" right={10} />
                                <SliderFilledTrack bg="tomato" />
                            </SliderTrack>
                            <SliderThumb boxSize={6} />
                        </Slider>
                    </Box>
                </Box>
                <Divider />
                <Box mt={3}>
                    <Flex justifyContent="space-between">
                        <Heading size="md">Time</Heading>
                        <Text size="md">1h</Text>
                    </Flex>
                    <Box mt={5}>
                        <Slider defaultValue={60} min={0} max={300} step={30}>
                            <SliderTrack bg="red.100">
                                <Box position="relative" right={10} />
                                <SliderFilledTrack bg="tomato" />
                            </SliderTrack>
                            <SliderThumb boxSize={6} />
                        </Slider>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Flex justifyContent="center" mt={5}>
                <Button bg="#DB6400"
                        color="#fff" size="md" isFullWidth  onClick={() => props.closeModal(false)} >
                    Apply
                </Button>
            </Flex>
        </Box>
    )
}
