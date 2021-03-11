import React, { Component } from 'react';
import { Box, TabList, Tabs, Tab, TabPanels, TabPanel, Image} from '@chakra-ui/react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

class Form extends Component {
    render() {
        return(
           <Box m="auto" w={["100%", "300px", "300px", "300px"]}>
               <Image src="favicon.ico" 
               w="60px"
               m="auto"/>
               <Tabs isFitted mt="4">
                    <TabList>
                        <Tab>Sign Up</Tab>    
                        <Tab>Login</Tab>
                    </TabList> 
                    <TabPanels>
                        <TabPanel>
                            <SignUpForm />
                        </TabPanel>
                        <TabPanel>
                            <LoginForm />
                        </TabPanel>
                    </TabPanels>  
                </Tabs>               
           </Box>
        );
    }
}

export default Form;