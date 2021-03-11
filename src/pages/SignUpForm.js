import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { EmailIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/input';
import { Divider, Icon, Stack, Button } from "@chakra-ui/react"
import React, { Component } from 'react';

class SignUpForm extends Component {
    render() {
        return(
            <form>
                <Stack spacing={4}>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<InfoIcon/>}/>
                            <Input type="text" name="fname" placeholder="Enter your first name..."/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<InfoIcon/>}/>
                            <Input type="text" name="fname" placeholder="Enter your last name..."/>
                        </InputGroup>
                    </FormControl>
                    <Divider bg="gray.500"/>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<EmailIcon/>}/>
                            <Input type="email" name="fname" placeholder="Enter your email..."/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<LockIcon/>} />
                            <Input type="password" name="password" placeholder="Enter your password..." />
                        </InputGroup>
                    </FormControl>
                    <Button bg="red"
                    boxShadow="md"
                    _hover={{boxShadow: "lg"}}
                    _active={{boxShadow: "xl"}}
                    >
                        Sign Up
                    </Button>
                    <FormHelperText textAlign="center">
                        We are not sharing your email to anyone
                    </FormHelperText>
                </Stack>
            </form>
        );
    }
}

export default SignUpForm;