import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExploreIcon from "@mui/icons-material/Explore";
import { CreatePost, LogoText } from "../index";
import { SearchBarUsers } from "../index";
import {
  inputGroupStyleProps,
  headerStyleProps,
  logoTextProps,
  searchbarStyleProps,
} from "./styles/navbar-style-props";

import {
  Flex,
  Heading,
  Input,
  Menu,
  Portal,
  MenuItem,
  MenuList,
  MenuButton,
  Image,
  Tooltip,
  Box,
  IconButton,
  useColorMode,
  useDisclosure,
  Text

} from "@chakra-ui/react";
import {
  MoonIcon,
  ChevronDownIcon,
  SettingsIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

import { useDarkModeTheme } from "../../contexts";
import { authActions, AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const { userDetails, userToken } = useSelector(
    (state) => (state as RootState).authentication
  );
  const dispatch = useDispatch<AppDispatch>();

  const signoutUser = () => {
    dispatch(authActions.logoutuser());
  };



  return (
    <>
      <Flex as="header" bg={cardBg} {...headerStyleProps}>
        <Link to="/">
          <LogoText {...logoTextProps} size={"1.7rem"} />
        </Link>

        <Box {...inputGroupStyleProps}>
          {userToken && <SearchBarUsers />}
        </Box>

        <Box display="flex" gap={5} cursor="pointer">
          {
            userToken && <Tooltip hasArrow label="Add Post" fontSize="sm" aria-label="A tooltip">
              <Box onClick={onOpen}>
                <PostAddIcon sx={{ color: cardText }} />

              </Box>
            </Tooltip>
          }

          <Link to="/explore">
            <Tooltip
              hasArrow
              label="Explore"
              fontSize="sm"
              aria-label="A tooltip"
            >
              <ExploreIcon sx={{ color: cardText }} />
            </Tooltip>
          </Link>
          <Tooltip hasArrow label="Likes" fontSize="sm" aria-label="A tooltip">
            <FavoriteBorderIcon sx={{ color: cardText }} />
          </Tooltip>
        </Box>

        {
          userToken ? (<Menu isLazy>
            <MenuButton
              p="2"
              rightIcon={<ChevronDownIcon />}
              variant="outline"
              as={IconButton}
              aria-label="Options"
              border="none"
            >
              <Image
                borderRadius="full"
                loading="lazy"
                boxSize="40px"
                src={userDetails?.avatarUrl}
                alt={userDetails?.username}
                border="2px solid violet"
              />
            </MenuButton>

            <Portal>
              <MenuList fontFamily="inter" zIndex="2" bg={cardBg}>
                <MenuItem
                  icon={<MoonIcon />}
                  fontWeight="medium"
                  onClick={toggleColorMode}
                  color={cardText}
                >
                  {colorMode === "light" ? "Dark" : "Light"} Mode
                </MenuItem>
                <Link to={`/profile/${userDetails?.username}`}>
                  <MenuItem icon={<SettingsIcon />} color={cardText}>
                    User Setting
                  </MenuItem>
                </Link>
                <MenuItem
                  icon={<ExternalLinkIcon />}
                  color={cardText}
                  onClick={signoutUser}
                >
                  Sign Out
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>) : (
            <Link to="/login">
              <Text colorScheme="blackAlpha" fontWeight="bold" _hover={{color:"#F3646F"}}>Login</Text>
            </Link>
          )
        }
      </Flex>
      <CreatePost isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { Navbar };
