import React from 'react'
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)



function LanguageSelector({language,onSelect}) {
    return (
        <Box ml={2} mb={4}>
            <Text  mb={2} fontSize='lg' >Language:</Text>
            <Menu>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList>
                    {
                        languages.map(([language, version]) => (
                            <MenuItem key={language} onClick={() => onSelect(language)}>
                                {language}
                                
                                <Text as='span' color='gray.600' fontSize='sm'>
                                    ({version})
                                </Text>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector
