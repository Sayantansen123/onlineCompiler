import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function LanguageSelector() {
    return (
        <Box>
            <Text mb={2} fontSize='lg' >Language:</Text>
            <Menu>
                <MenuButton as={Button}>
                    Javascript
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector
