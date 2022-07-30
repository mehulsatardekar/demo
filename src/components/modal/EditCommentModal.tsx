import React, { useDeferredValue, useEffect, useState } from "react";

import {
    Divider,
    Modal,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Textarea,
    Button,
    HStack,
    Flex
} from "@chakra-ui/react";
import {
    modalOverlayStyleProps,
    textStyleProps,
} from "./styles/postmodal-style-props";
import { useDarkModeTheme } from "../../contexts";
import { editComment } from "../../store/slices";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../../store";
import { useToast } from "../../hooks";

type comment = {
    _id: string;
    username: string;
    text: string;
    votes: {
        upvotedBy: [];
        downvotedBy: [];
    };
}

type editCommentModalPropsType = {
    isOpen: boolean;
    onClose: () => void;
    postid: string | undefined;
    usercomment: comment
};

const EditCommentModal = ({ isOpen, onClose, postid, usercomment }: editCommentModalPropsType) => {
    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    const dispatch = useDispatch<AppDispatch>();

    const { userDetails, userToken } = useSelector(
        (state) => (state as RootState).authentication
    );
    const { notifyError, notifySuccess } = useToast();

    const userCommentText = useDeferredValue(usercomment.text);

    const [commentText, setCommentText] = useState<string>(userCommentText);

    const updateComment = (postid: string, commentid: string, commentData: string, userToken: string) => {

        dispatch(editComment({ postid, commentid, commentData, userToken }));
        onClose();
        notifySuccess("Comment Updated");
    }

    useEffect(() => {
        if (commentText === "") {
            notifyError("Comment cant be an empty");
        }
    }, [commentText])
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay {...modalOverlayStyleProps} />

            <ModalContent bg={cardBg}>
                <ModalHeader color={cardText}>Edit comment</ModalHeader>

                <ModalCloseButton color={cardText} />
                <Divider />

                <ModalBody>
                    <Flex direction="column" gap={4}>
                        <Textarea resize="none" size="lg" rows={5} value={commentText} onChange={(e) => setCommentText(e.target.value)}>
                        </Textarea>

                        <Divider />
                        <HStack pb="3">
                            {commentText !== "" && <Button w="100%" onClick={() => updateComment(postid!, usercomment._id, commentText, userToken!)}>Update Comment</Button>}
                        </HStack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export { EditCommentModal }