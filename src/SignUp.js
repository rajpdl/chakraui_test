import React, { Component } from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Box, Button, Divider, FormControl, FormHelperText, Icon, Stack, StylesProvider } from '@chakra-ui/react';

class SignUp extends Component {
    render() {
        return(
            <form action="submit">
                    <Stack spacing={4}>
                        <FormControl isRequired >
                            <InputGroup>
                                <InputLeftAddon children={<Icon name="info" />}/>
                                <Input placeholder="First Name" />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired >
                            <InputGroup>
                                <InputLeftAddon children={<Icon name="email" />}/>
                                <Input placeholder="Last Name" />
                            </InputGroup>
                        </FormControl>
                        <Divider />
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftAddon children={<Icon name="lock" />} />
                                <Input placeholder="Email" />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftAddon children={<Icon name="password" />}/>
                                <Input placeholder="Passowrd" />
                            </InputGroup>
                        </FormControl>
                        <Button 
                        type="submit"
                        boxShadow="md" _hover={{boxShadow:"lg"}}>
                            Sign Up
                            </Button>
                    </Stack>
                </form>
        );
    }
}

export default SignUp;