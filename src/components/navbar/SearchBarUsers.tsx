import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";

import {
    InputGroup,
    InputLeftElement,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Input,
    Portal,
    Box,
    Flex,
    Text,
    Avatar,
    Divider,
    Heading,
    MenuList,
    MenuItem,
    Menu,
    MenuButton,
    Button,
    useOutsideClick,
    InputRightElement,
    Tooltip
} from "@chakra-ui/react"
import { searchbarStyleProps } from './styles/navbar-style-props';
import { useSearchDebounce } from '../../hooks';
import { searchUsers } from '../../services';
import { usersType } from "../../store/types";
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Link } from 'react-router-dom';
import { useDarkModeTheme } from '../../contexts';
const SearchBarUsers = () => {

    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    const [searchValue, setSearchValue] = useState<string>("");
    const [userLists, setUserLists] = useState<usersType[]>([]);

    const inputSearchRef = useRef(null);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { debounceValue } = useSearchDebounce(searchValue);

    const getUsersList = async (userQuery: string) => {
        const response = await searchUsers(debounceValue);
        setUserLists(response.data.users);
    }

    useEffect(() => {
        if (debounceValue) {
            getUsersList(debounceValue);
        } else {
            setUserLists([])
        }
    }, [debounceValue]);
    return (
        <>
            <Popover
                initialFocusRef={inputSearchRef}
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
                closeOnBlur={true}
            >
                <PopoverTrigger>
                    <InputGroup ref={inputSearchRef}>
                        <Input
                            aria-label='Search User-names...'
                            type="search"
                            placeholder="Search User-names..."
                            {...searchbarStyleProps}
                            onClick={onOpen}
                            value={searchValue}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            {isOpen ? (
                                <Tooltip label='Close Search bar' aria-label='Close Search bar'>
                                    <CloseIcon
                                        onClick={onClose}
                                        style={{
                                            position: "absolute",
                                            right: "9px",
                                            top: "10px",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip label='Open Search bar' aria-label='Open Search bar'>
                                    <Search2Icon
                                        onClick={onOpen}
                                        style={{
                                            position: "absolute",
                                            right: "9px",
                                            top: "10px",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Tooltip>
                            )}
                        </InputRightElement>
                    </InputGroup>

                </PopoverTrigger>
                <PopoverContent maxH="70vh" overflowY="auto" w="36rem" >
                    <PopoverBody bg={cardBg} >
                        <Flex direction="column" gap={2}>
                            {
                                (userLists.length > 0) ? (

                                    userLists.map(user => (
                                        <>
                                            <Link to={`/profile/${user.username}`} onClick={onClose}>
                                                <Box display="flex" gap={5} key={user._id}>
                                                    <Avatar name='Dan Abrahmov' src={user.avatarUrl} />
                                                    <Box>
                                                        <Text>{`${user.firstName} ${user.lastName}`}</Text>
                                                        <Text fontSize='sm'>{user.username}</Text>
                                                    </Box>
                                                </Box>
                                            </Link>
                                            <Divider />
                                        </>))
                                ) : (
                                    <>
                                        <Box textAlign="center" py={10} px={6}>
                                            <PersonSearchIcon sx={{ color: 'green', fontSize: '3rem' }} />
                                            <Heading as="h2" size="xl" mt={1} mb={1}>
                                                {searchValue ? 'User Not Found' : 'Search User'}
                                            </Heading>
                                            <Text color={"gray.500"}>
                                                Follow your friend and see what they are up to :).
                                            </Text>
                                        </Box>
                                    </>
                                )
                            }
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}

export { SearchBarUsers }