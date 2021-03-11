import { Button } from '@chakra-ui/button';
import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import Icon from '@chakra-ui/icon';
import { InfoIcon, LockIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import React, { Component } from 'react';

class LoginForm extends Component{
    render() {
        return(
            <form>
                <Stack spacing={4}>
                    <FormControl>
                        <InputGroup>
                            <InputLeftAddon children={<InfoIcon/>}/>
                            <Input type="email" placeholder="Enter Your Email..."/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftAddon children={<LockIcon/>} />
                            <Input type="password" placeholder="Enter Your Password..."/>
                        </InputGroup>
                    </FormControl>
                    <Button bg="green.300">
                        Login
                    </Button>
                    <FormHelperText textAlign="center">
                        We are not sharing your email to anyone
                    </FormHelperText>
                </Stack>
            </form>
        );
    }
}

export default LoginForm;