import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { ChakraProvider, TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/react';
import Form from './pages/Form';
import FileUpload from './pages/FileUpload';
import ChakraFlex from './pages/ChakraFlex';

ReactDOM.render(
	<ChakraProvider>
		<Tabs>
			<TabList>
				<Tab>Home</Tab>
				<Tab>Form</Tab>
				<Tab>File Upload</Tab>
				<Tab>Flex</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Home />
				</TabPanel>
				<TabPanel>
					<Form />
				</TabPanel>
				<TabPanel>
					<FileUpload />
				</TabPanel>
				<TabPanel>
					<ChakraFlex />
				</TabPanel>
			</TabPanels>
		</Tabs>
	</ChakraProvider>,
	document.getElementById('root')
)