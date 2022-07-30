import { Button, FormControl, Link, Avatar, Text, Modal, ModalBody, Flex, ModalCloseButton, ModalContent, ModalFooter, FormHelperText, Input, ModalHeader, ModalOverlay, useDisclosure, FormLabel, Textarea, Box, Divider, FormErrorMessage, Tooltip } from '@chakra-ui/react'
import { useDarkModeTheme } from "../../contexts";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store";
import { edituserProfile } from '../../store/slices';
import { postType } from "../../store/types";

import { useCloudinaryUtility, useToast } from '../../hooks';
import { EditProfileModalInitialType } from './types';

type EditProfileModalType = {
    isOpen: boolean;
    onClose: () => void;
}
const EditProfileModal = ({ isOpen, onClose }: EditProfileModalType) => {

    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    const { uplaodImageVideo } = useCloudinaryUtility();

    const { notifyError, notifySuccess } = useToast();


    const dispatch = useDispatch<AppDispatch>();

    const { userDetails, userToken } = useSelector(
        (state) => (state as RootState).authentication
    );


    const initialValues: EditProfileModalInitialType = {
        bio: "",
        profileURL: "",
    };
    const createPostValidationSchema = Yup.object({
        bio: Yup.string().required("User Bio is required"),
        profileURL: Yup.string().required("Profile Url is required"),
    });

    const [mediaurl, setMediaurl] = useState<string | undefined>(userDetails?.avatarUrl);
    const [filename, setFileName] = useState<string>();


    const createPostSubmitForm = async (values: EditProfileModalInitialType) => {
        if (!mediaurl) {
            notifyError("Please upload File Profile picture cant be an empty");
            return false;
        }
        dispatch(edituserProfile({ ...userDetails, userdetails: { avatarUrl: mediaurl, website: values.profileURL, bio: values.bio }, userToken }));
        onClose();
    }

    const fileListener = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setFileName(event.target.files![0].name)
        await uplaodImageVideo(event.target.files![0], setMediaurl)
    }
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent border="white">
                <ModalHeader color={cardText} bg={cardBg}>Edit Profile</ModalHeader>
                <ModalCloseButton color={cardText} />
                <ModalBody pb={6} bg={cardBg} >
                    <Flex direction="column" justify="center" alignItems="center" gap="2" mb={3}>
                        <Avatar name={userDetails?.username} src={userDetails?.avatarUrl} />
                        <Text>{userDetails?.username}</Text>
                    </Flex>
                    <Divider border="1px solid" mb={4} />
                    <Formik initialValues={initialValues} validationSchema={createPostValidationSchema} onSubmit={createPostSubmitForm}>
                        {
                            ({ errors, touched, setFieldValue }) => (<Form>
                                <Box display="flex" flexDirection="column" gap="3">
                                    <FormControl id="files">
                                        <FormLabel id="bio">Profile Picture</FormLabel>
                                        <Box display="flex" flexDirection="column" gap="1" justifyContent="center" alignItems="center">
                                            <FormLabel id="files" cursor="pointer">
                                                <Input
                                                    type="file"
                                                    name="files"
                                                    title="Upload image / video"
                                                    focusBorderColor='red'
                                                    accept="image/*"
                                                    onChange={fileListener}
                                                />


                                            </FormLabel >
                                            <Tooltip label={`file name: : ${filename}`}>
                                                <Link> {filename}</Link>
                                            </Tooltip>
                                        </Box>

                                    </FormControl>
                                    <FormControl id="bio" isInvalid={!!errors.bio && touched.bio} mb={4}>
                                        <FormLabel id="bio">Bio</FormLabel>
                                        <Field as={Input} type="text" placeholder='Add your bio ' name="bio" />
                                        <FormErrorMessage>{errors.bio}</FormErrorMessage>

                                    </FormControl>
                                    <FormControl id="profileURL" isInvalid={!!errors.profileURL && touched.profileURL} mb={4}>
                                        <FormLabel id="profileURL">Profile-Url</FormLabel>
                                        <Field as={Input} type="text" placeholder='Add User Profile Url ' name="profileURL" />
                                        <FormErrorMessage>{errors.profileURL}</FormErrorMessage>

                                    </FormControl>
                                </Box>

                                <Box mt={5}>
                                    <Button colorScheme='blue' mr={3} type="submit">
                                        Save Profile
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </Box>
                            </Form>)
                        }
                    </Formik>

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export { EditProfileModal }