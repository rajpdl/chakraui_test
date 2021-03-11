import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import Icon from '@chakra-ui/icon';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
            <form>
                <Stack>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftAddon children={<Icon name="info"/>}/>
                        <Input type="email" placeholder="Email"/>
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftAddon children={<Icon name="info" />} />
                        <Input placeholder="Password" />
                    </InputGroup>
                </FormControl>
                <Button type="submit">
                    Login
                </Button>
                </Stack>
            </form>
        );
    }
}

export  default Login;