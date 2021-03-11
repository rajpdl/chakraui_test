import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import Icon from '@chakra-ui/icon';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Heading, Box, Stack } from '@chakra-ui/layout';
import React, { Component } from 'react';
import { AddIcon, AtSignIcon, CopyIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/layout';

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: '',
            uploadPercentage : '',
            name: '',
            profile: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(e) {
    //     console.log(e.target.files[0])
    //     const data = new FormData();
    //     data.append('profile', e.target.files[0]);
    //     axios.post('http://localhost:8080/uploads', data, {
    //         onUploadProgress: function(progressEvent){
    //             const { loaded, total} = progressEvent;  
    //             console.log(progressEvent); 
    //             console.log(loaded);             
    //             let progress = Math.round((loaded / total ) * 100) + "%";
    //             console.log(progress);
    //      }
    //     }).then(res => {
    //         this.setState({image: "http://localhost:8080/" + res.data.filename});
    //     });
    // }
    handleChange(e) {
        if(e.target.name == "profile") {
            this.setState({profile: e.target.files[0]})
        }else {
            this.setState({[e.target.name]: e.target.value});
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("profile", this.state.profile);
        axios.post('http://localhost:8080/uploads', data, {
                    onUploadProgress: function(progressEvent){
                        const { loaded, total} = progressEvent;  
                        console.log(progressEvent); 
                        console.log(loaded);             
                        let progress = Math.round((loaded / total ) * 100) + "%";
                        console.log(progress);
                 }
                }).then(res => {
                    this.setState({image: "http://localhost:8080/" + res.data.filename});
                    this.setState({name: res.data.username});
                })
    }
    render() {
        return(
            <Box w={["100%", "300px", "300px", "300px"]} m="auto" textAlign="center">
                <Heading>File Upload</Heading>
                <form onSubmit={this.handleSubmit}>
                <Stack>
                    <InputGroup>
                        <InputLeftAddon children={<InfoIcon />}/>
                        <Input type='text' name="name" value={this.state.name} onChange={this.handleChange} />
                    </InputGroup>
                    <Input type="file" name="profile" onChange={this.handleChange}/>
                    <Button bg="red.300" type="submit">
                        Upload
                    </Button>
                </Stack>
                </form>
                <Text>{this.state.name} </Text>
                <Image src={this.state.image} alt={this.state.image} />
            </Box>
        )
    }
}

export default  FileUpload;