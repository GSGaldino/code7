import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";

import store from '../../store';

export default function ModalForm({ data }) {
  const pageData = data && data;
  const [isOpen, setIsOpen] = React.useState(store.getState());

  const onClose = () => store.dispatch({type: "close"});

  store.subscribe(() => setIsOpen(!isOpen));

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{pageData.name}</p>
            <p>{pageData.debt}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" bg="purple.600" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
