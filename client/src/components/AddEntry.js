import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    Button,
    Textarea,
    Link

} from '@chakra-ui/react';

import axios from 'axios';

import { Link as RouterLink } from 'react-router-dom';

const AddEntry = () => {
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [description, setDescription] = useState('');

    const postData = () => {
        axios.post(`https://localhost:7107/books`, {
            bookName,
            authorName,
            pageCount,
            description
        })
    }

    return (
        <VStack>
            <Heading>Add Book</Heading>
            <FormControl>
                <FormLabel>Book Name</FormLabel>
                <Input onChange={(e) => setBookName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Author Name</FormLabel>
                <Input onChange={(e) => setAuthorName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Page Count</FormLabel>
                <Input onChange={(e) => setPageCount(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <Button colorScheme='teal' size='sm' onClick={postData} type='submit'>Add Book</Button>
            <Button colorScheme='teal' size='sm'>
                <Link as={RouterLink} to={"/"}>Back to list</Link>
            </Button>
        </VStack>
    );
}

export default AddEntry;