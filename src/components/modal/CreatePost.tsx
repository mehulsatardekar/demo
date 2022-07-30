import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, FormControl, Link, Avatar, Text, Modal, ModalBody, Flex, ModalCloseButton, ModalContent, ModalFooter, FormHelperText, Input, ModalHeader, ModalOverlay, useDisclosure, FormLabel, Textarea, Box, Divider, FormErrorMessage, Tooltip } from '@chakra-ui/react'
import { useDarkModeTheme } from "../../contexts";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store";
import { addUserPost, editUserPost } from '../../store/slices';
import { postType } from "../../store/types";

import { useCloudinaryUtility, useToast } from '../../hooks';
import { createPostInitialType } from './types';

type createPostType = {
    editPostContent?: postType;
    isOpen: boolean;
    onClose: () => void;
}
const CreatePost = ({ isOpen, onClose, editPostContent }: createPostType) => {

    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    const { uplaodImageVideo } = useCloudinaryUtility();

    const { notifyError, notifySuccess } = useToast();


    const dispatch = useDispatch<AppDispatch>();

    const { userDetails, userToken } = useSelector(
        (state) => (state as RootState).authentication
    );


    const initialValues: createPostInitialType = {
        postCaption: "",
        postLocation: "",
    };
    const createPostValidationSchema = Yup.object({
        postCaption: Yup.string().required("Caption is required to post"),
        postLocation: Yup.string(),
    });

    const [filename, setFileName] = useState<string>();
    const [postCaption, setPostCaption] = useState<string>(editPostContent ? editPostContent.content : "");
    const [mediaurl, setMediaurl] = useState<string | undefined>(editPostContent?.mediaURL!);

    const createPostSubmitForm = async (values: createPostInitialType) => {
        if (!mediaurl) {
            notifyError("Please upload File ");
            return false;
        }
        if (editPostContent) {
            dispatch(editUserPost({
                postData: { ...editPostContent, content: postCaption, mediaURL: mediaurl!, destination: values.postLocation },
                userToken,
            }))
        } else {
            dispatch(addUserPost({ postData: { content: values.postCaption, mediaURL: mediaurl!, destination: values.postLocation }, userToken }));

        }
        setFileName("")
        mediaurl && onClose();
    }

    const fileListener = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setFileName(event.target.files![0].name)
        await uplaodImageVideo(event.target.files![0], setMediaurl)
    }

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent border="white">
                <ModalHeader color={cardText} bg={cardBg}>{editPostContent ? "Update " : "Create "}Post</ModalHeader>
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
                                        <Box display="flex" flexDirection="column" gap="1" justifyContent="center" alignItems="center">
                                            <FormLabel id="files" cursor="pointer">

                                                <Input
                                                    type="file"
                                                    name="files"
                                                    title="Upload image / video"
                                                    focusBorderColor='red'
                                                    accept="image/*, video/*"
                                                    onChange={fileListener}

                                                />
                                                <Tooltip label={`file name: ${(editPostContent?.mediaURL) ? "Cloudinary-MediaFile" : filename}`}>
                                                    <Link>{(editPostContent?.mediaURL) ? "Cloudinary-MediaFile" : filename}</Link>
                                                </Tooltip>

                                            </FormLabel >
                                            <Text>Upload image/video</Text>
                                        </Box>

                                    </FormControl>
                                    <FormControl id="caption" isInvalid={!!errors.postCaption && touched.postCaption}>
                                        <Field as={Textarea} placeholder='Write a Caption' name="postCaption" resize="none" cols={5}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPostCaption(e.target.value); setFieldValue("postCaption", e.target.value) }}

                                        />
                                        <FormErrorMessage>{errors.postCaption}</FormErrorMessage>

                                    </FormControl>

                                    <FormControl id="postLocation" isInvalid={!!errors.postLocation && touched.postLocation}>
                                        <Field as={Input} type="text" placeholder='Add Location Of Place ' name="postLocation" />
                                        <FormErrorMessage>{errors.postLocation}</FormErrorMessage>

                                    </FormControl>

                                </Box>

                                <Box mt={5}>
                                    <Button colorScheme='blue' mr={3} type="submit">
                                        {editPostContent ? "Update " : "Publish "}  Post
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

export { CreatePost }