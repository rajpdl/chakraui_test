import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Stack, Text } from '@chakra-ui/layout';
import { Image, Icon, Button} from '@chakra-ui/react';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            (Array(10).fill('').map((a, i) => {
                return <Box textAlign="center" key={i}
                w={["100%", "300px", "300px", "300px"]} m="auto"
                >
                <Text as="h1" fontSize="xl">
                    Inside Home Page
                </Text>
                <Image src="beach.jpeg" w="full" />
                <Box p={4}>
                <Stack isInline mt="10px" align="baseline" justify="space-between">
                    <Box d="flex">
                        <Badge bg="teal">
                            React
                        </Badge>
                        <Badge bg="teal">
                            Chakra UI
                        </Badge>
                    </Box>
                    <Box display={["block", "flex", "flex", "flex"]}>
                        <Text as="span" pr={2}>
                        {Array(4).fill('').map((a, i) => {
                            return <StarIcon key={i}  color="teal"/>
                        })}
                        <StarIcon />
                        </Text>
                        <Text fontWeight="bold">
                            35 Reviews
                        </Text>
                    </Box>
                </Stack>
                <Text as="h1" textAlign="left" fontWeight="bold" fontSize="xl">
                    Chakra Ui Testing
                </Text>
                <Text as="p" textAlign="left">
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Possimus illum, labore ex esse eum voluptatum, 
                dolorum dolores natus ab sint consectetur. Asperiores 
                non earum ipsum doloribus cum illo quibusdam eligendi?
                </Text>
                <Box>
                    <Button bg="red" boxShadow="md" 
                    _hover={{boxShadow: "lg"}}
                    _active={{boxShadow: "xl"}}
                    >Sign Up</Button>
                </Box>
                </Box>
            </Box>
            }))
        )
    }
}

export default Home;    