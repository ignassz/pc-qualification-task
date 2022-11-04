import React from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
  Container,
  Flex,

} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ListTable from './components/ListTable';
import AddEntry from './components/AddEntry';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>


      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20}>
          <VStack w="full" h="full" alignItems="center" bg="gray.50" p={10} spacing={10}>
            <Router>
              <Routes >
                <Route path="/addbook" element={<AddEntry />} />
                <Route path="/books/:id" element={<BookDetails />} />
                <Route path="/" element={<ListTable />} />
              </Routes>
            </Router>
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
