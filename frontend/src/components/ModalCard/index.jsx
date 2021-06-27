import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Select,
  Box,
  Input,
  useToast
} from "@chakra-ui/react";

import store from '../../store';

import Api from '../../services/api';

export default function ModalCard({ users }) {
  const [state, setState] = React.useState(store.getState());
  const [formFields, setFormFields] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();

  const onClose = () => store.dispatch({ type: "close", data: [] });

  const onChange = event => {
    const { name, value } = event.target;

    return setFormFields({ ...formFields, [name]: value });
  };

  const addNewDebt = async event => {
    // Get variables from state
    const { user_id, debt_reason, debt_value, debt_date } = formFields;

    // If don't fill all fields 
    if (!user_id || !debt_reason || !debt_value || !debt_date)
      return toast({
        isClosable: true,
        title: "Erro",
        variant: "subtle",
        status: "warning",
        description: "Preencha todos os campos para continuar."
      });

    try {
      // Loading ...
      setIsLoading(true);

      await Api.addDebt(formFields);
      setIsLoading(false);
      store.dispatch({ type: "close", data: [] });
      return window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  const deleteDebt = async debt_id => {
    try {
      // Loading ...
      setIsLoading(true);

      await Api.deleteDebt(debt_id);
      setIsLoading(false);
      store.dispatch({ type: "close", data: [] });
      return window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  const saveDebt = async (debt_id) => {
    if (!formFields)
      return toast({
        isClosable: true,
        title: "Erro",
        variant: "subtle",
        status: "warning",
        description: "Nada para salvar."
      });

    await Api.updateDebt({
      debt_id: debt_id,
      query: formFields
    });

    store.dispatch({type: "close", data: []});
    window.location.reload();
  };

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
        <ModalContent >
          <ModalCloseButton />

          <ModalBody pt={8}>

            <Box {...boxStyles}>
              <p>Usuário: </p>
              <Select
                placeholder="Selecione"
                defaultValue={state.data && state.data.user_id}
                onChange={onChange}
                name="user_id"
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
                ? (<Editable
                  defaultValue={state.data && state.data.debt_reason}
                  name="debt_reason"
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4px 20px"
                  minH="20px"
                >
                  <EditablePreview w="100%" h="100%" name="debt_reason"/>
                  <EditableInput w="100%" h="100%" name="debt_reason" onChange={onChange}/>
                </Editable>)
                : (<Input placeholder="Motivo da dívida" onChange={onChange} name="debt_reason" />)}
            </Box>

            <Box {...boxStyles}>
              <p>Valor: </p>
              {!state.isNewDebt
                ? (<Editable
                  defaultValue={state.data && state.data.debt_value}
                  name="debt_value"
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4px 20px"
                  minH={2}
                >
                  <EditablePreview w="100%" h="100%" name="debt_value"/>
                  <EditableInput w="100%" h="100%" onChange={onChange} name="debt_value"/>
                </Editable>)
                : (<Input placeholder="Valor da dívida" onChange={onChange} name="debt_value" />)}
            </Box>

            <Box {...boxStyles}>
              <p>Data: <span style={{ color: "rgba(0,0,0,.5)" }}>DD/MM/AAAA</span></p>
              {!state.isNewDebt
                ? (<Editable
                  defaultValue={state.data && state.data.debt_date}
                  name="debt_date"
                  borderWidth="1px"
                  p="4px 20px"
                  borderRadius="lg"
                >
                  <EditablePreview w="100%" h="100%" />
                  <EditableInput w="100%" h="100%" name="debt_date" onChange={onChange}/>
                </Editable>)
                : (<Input placeholder="Data da dívida" onChange={onChange} name="debt_date" />)}
            </Box>

          </ModalBody>

          <ModalFooter>
            {/* Caso clique no card */}
            {!state.isNewDebt &&
              <Button
                colorScheme="purple"
                bg="purple.600"
                mr={3}
                onClick={e => saveDebt(state.data && state.data.debt_id)}
              >
                Salvar
              </Button>
            }

            {!state.isNewDebt &&
              <Button
                variant="ghost"
                onClick={e => deleteDebt(state.data && state.data.debt_id)}
                isLoading={isLoading}
              >
                Excluir
              </Button>
            }

            {/* Caso clique no botão adicionar */}
            {state.isNewDebt &&
              <Button
                colorScheme="purple"
                bg="purple.600"
                onClick={addNewDebt}
                isLoading={isLoading}
              >
                Enviar
              </Button>
            }
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
};
