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
  Box,
  Input
} from "@chakra-ui/react";

import store from '../../store';

export default function ModalCard({ users }) {
  const [state, setState] = React.useState(store.getState());

  const onClose = () => store.dispatch({ type: "close", data: [] });

  store.subscribe(() => setState(store.getState()));

  const boxStyles = {
    borderWidth: "1px",
    borderRadius: "lg",
    mb: 2,
    p: 4
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
              {!state.isNewDebt
                ? (<Editable defaultValue="Motivo" borderWidth="1px" p="4px 20px" borderRadius="lg" minH="20px">
                  <EditablePreview w="100%" h="100%" />
                  <EditableInput w="100%" h="100%" />
                </Editable>)
                : (<Input placeholder="Motivo da dívida" />)}
            </Box>

            <Box {...boxStyles}>
              <p>Valor: </p>
              {!state.isNewDebt
                ? (<Editable defaultValue="Valor" borderWidth="1px" p="4px 20px" borderRadius="lg" minH={2}>
                  <EditablePreview w="100%" h="100%" />
                  <EditableInput w="100%" h="100%" />
                </Editable>)
                : (<Input placeholder="Valor da dívida" />)}
            </Box>

            <Box {...boxStyles}>
              <p>Data: <span style={{ color: "rgba(0,0,0,.5)" }}>DD/MM/AAAA</span></p>
              {!state.isNewDebt
                ? (<Editable defaultValue="01/01/2021" borderWidth="1px" p="4px 20px" borderRadius="lg">
                  <EditablePreview w="100%" h="100%" />
                  <EditableInput w="100%" h="100%" />
                </Editable>)
                : (<Input placeholder="Data da dívida" />)}
            </Box>

          </ModalBody>

          <ModalFooter>
            {!state.isNewDebt &&
              <Button colorScheme="purple" bg="purple.600" mr={3} onClick={onClose}>
                Fechar
              </Button>
            }

            {!state.isNewDebt &&
              <Button variant="ghost">
                Excluir
              </Button>
            }

            {state.isNewDebt && 
              <Button colorScheme="purple" bg="purple.600">
                Enviar
              </Button>
            }
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
};
