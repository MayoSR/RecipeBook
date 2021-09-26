import {
    Box, Flex, Heading, IconButton, Slider, SliderFilledTrack,
    SliderThumb, SliderTrack, Tag, Text,Button
} from "@chakra-ui/react";
import React from 'react';
import { MdClose } from "react-icons/md";
import classes from '../../styles/FilterModal.module.css';


export default function FilterModal(props) {
    return (
        <Box className={classes.modalClass} p={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Filter</Heading>
                <IconButton size="sm" as={MdClose} onClick={() => props.closeModal(false)} />
            </Flex>
            <Box mt={3}>
                <Box mt={3}>
                    <Heading size="md">Meal</Heading>
                    <Box mt={2}>
                        {["Breakfast", "Lunch", "Dinner", "Drinks", "Dessert", "Snacks", "Salad"].map((size) => (
                            <Tag size="lg" variant="solid" mr={2} mb={3} bg="#DB6400"
                            color="#fff">
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Heading size="md">Type</Heading>
                    <Box mt={2}>
                        {["Vegetarian", "Non Vegetarian", "Egg + Vegetarian", "Dairy + Vegetarian", "Vegan"].map((size) => (
                            <Tag size="lg" variant="solid" mr={2} mb={3} bg="#DB6400"
                            color="#fff">
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Heading size="md">Cuisine</Heading>
                    <Box mt={2}>
                        {["Indian", "Chinese", "Greek", "Thai", "Mexican", "Indonesian", "Japanese", "American", "European", "Korean"].map((size) => (
                            <Tag size="lg" variant="solid" mr={2} mb={3} bg="#DB6400"
                            color="#fff">
                                {size}
                            </Tag>
                        ))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Flex justifyContent="space-between">
                        <Heading size="md">Servings</Heading>
                        <Text size="md">4 servings</Text>
                    </Flex>
                    <Box mt={2}>
                        <Slider defaultValue={60} min={0} max={300} step={30}>
                            <SliderTrack bg="red.100">
                                <Box position="relative" right={10} />
                                <SliderFilledTrack bg="tomato" />
                            </SliderTrack>
                            <SliderThumb boxSize={6} />
                        </Slider>
                    </Box>
                </Box>
                <Box mt={3}>
                    <Flex justifyContent="space-between">
                        <Heading size="md">Time</Heading>
                        <Text size="md">1h</Text>
                    </Flex>
                    <Box mt={2}>
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
            <Flex justifyContent="center" mt={3}>
                <Button bg="#DB6400"
                        color="#fff" size="md" isFullWidth>
                    Apply
                </Button>
            </Flex>
        </Box>
    )
}
