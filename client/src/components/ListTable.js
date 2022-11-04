import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Link,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Heading,
    Flex
} from '@chakra-ui/react';

const ListTable = () => {

    const navigate = useNavigate();
    const goToRow = (id) => {
        navigate(`/books/${id}`);
    }

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7107/books`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <TableContainer maxW='full'>
            <Flex alignItems='flex-end' justifyContent='space-between'>
                <Heading>Book List</Heading>
                <Button colorScheme='teal' size='sm'>
                    <Link as={RouterLink} to={"/addbook"}>Add Book</Link>
                </Button>
            </Flex>
            <Table variant='striped' colorScheme='teal' width='4xl' overflow='auto'>
                <Thead>
                    <Tr>
                        <Th>Book</Th>
                        <Th>Author</Th>
                        <Th isNumeric>Pages</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {APIData.map((data) => {
                        return (
                            <Tr key={data.id} onClick={() => goToRow(data.id)}>
                                <Td>{data.bookName}</Td>
                                <Td>{data.authorName}</Td>
                                <Td isNumeric>{data.pageCount}</Td>
                            </Tr>
                        )
                    })}

                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default ListTable;