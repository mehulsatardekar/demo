import {
  Divider,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useDarkModeTheme } from "../../contexts";

import { modalPropsType } from "./types/";

import {
  modalOverlayStyleProps,
  textStyleProps,
} from "./styles/postmodal-style-props";

const PostModal = ({ isOpen, onClose }: modalPropsType) => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay {...modalOverlayStyleProps} />

        <ModalContent bg={cardBg}>
          <ModalHeader color={cardText}>Filter</ModalHeader>

          <ModalCloseButton color={cardText} />
          <Divider />

          <ModalBody>
            {/* <Text color="pink.500" {...textStyleProps}>
              Unfollow
            </Text> */}

            <Divider />

            <Text color={cardText} {...textStyleProps}>
              Share Post
            </Text>

            <Divider />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { PostModal };
