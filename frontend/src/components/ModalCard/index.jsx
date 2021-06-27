import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Select,
  Box
} from "@chakra-ui/react";

import store from '../../store';

export default function ModalCard({ users }) {
  const [state, setState] = React.useState(store.getState());

  const onClose = () => store.dispatch({ type: "close", data: [] });

  store.subscribe(() => setState(store.getState()));

  const boxStyles = {
    borderWidth: "1px",
    borderRadius: "lg",
    p: 4,
    mb: 2
  };

  return (
    <>
      <Modal isOpen={state.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>

            <Box {...boxStyles}>
              <p>Usuário: </p>
              <Select
                placeholder="Selecione"
                defaultValue={state.data && state.data.user_id}
                variant="filled"
              >
                {users && users.map(user => (
                  <option
                    key={user.id}
                    value={user.id}
                  >{user.name}</option>
                ))}
              </Select>
            </Box>

            <Box {...boxStyles}>
              <p>Motivo: </p>
              {!state.isNewDebt && (
                <Editable defaultValue="Motivo">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              )}

            </Box>

            <Box {...boxStyles}>
              <p>Valor: </p>
              <Editable defaultValue={state.data && state.data.debt_value}>
                <EditablePreview />
                <EditableInput />
              </Editable>

            </Box>

            <Box {...boxStyles}>
              <p>Data: <span style={{ color: "rgba(0,0,0,.5)" }}>DD/MM/AAAA</span></p>
              <Editable defaultValue="Data">
                <EditablePreview />
                <EditableInput />
              </Editable>

            </Box>

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
