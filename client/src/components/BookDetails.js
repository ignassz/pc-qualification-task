import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {
    Heading,
    VStack,
    Button,
    GridItem,
    Text,
    SimpleGrid,
    Link
} from '@chakra-ui/react';


const BookDetails = () => {
    const { id } = useParams();


    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7107/books/${id}`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [id])

    return (
        <VStack>
            <Heading>Book Details</Heading>
            <SimpleGrid columns={2} spacing={10}>
                <GridItem>
                    <Heading size='md'>Book Details</Heading>
                </GridItem>
                <GridItem>
                    <Text>{APIData.bookName}</Text>
                </GridItem>
                <GridItem>
                    <Heading size='md'>Book Author</Heading>
                </GridItem>
                <GridItem>
                    <Text>{APIData.authorName}</Text>
                </GridItem>
                <GridItem>
                    <Heading size='md'>Book Description</Heading>
                </GridItem>
                <GridItem>
                    <Text>{APIData.description}</Text>
                </GridItem>
            </SimpleGrid>
            <Button colorScheme='teal' size='sm'>
                <Link as={RouterLink} to={"/"}>Back to list</Link>
            </Button>
        </VStack>
    );
}

export default BookDetails;