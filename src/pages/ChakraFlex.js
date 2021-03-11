import { Flex, Text } from '@chakra-ui/layout';
import React, { Component } from 'react';

class ChakraFlex extends Component {
    render() {
        return(
            <Flex bg="gray.300"
            justify={["left", "left", "space-between", "space-between"]}
            direction={["column", "column", "row", "row"]}
            >
                <Flex bg="green.100">
                    <Text>Chakra Ui Flex</Text>
                </Flex>
                <Flex bg="red.300"> 
                    <Text>Chakra Ui List</Text>
                </Flex>
                <Flex bg="orange.300">
                    <Text>Form Control</Text>
                </Flex>
                <Flex bg="orange.300">
                    <Text>Input Group</Text>
                </Flex>
                <Flex bg="skyblue">
                    <Text>Icon</Text>
                </Flex>
            </Flex>
        );
    }
}
export default ChakraFlex;