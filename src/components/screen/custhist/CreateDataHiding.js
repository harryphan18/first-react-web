import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCallback, useEffect, useState } from 'react';

const DataHidingDetailForm = (props) => {
    const { show, handleSave, handleClose } = props;
    const [serverType, setServerType] = useState();
    const [server, setServer] = useState();
    const [authServer, setAuthServer] = useState();
    const [commandName, setCommandName] = useState();
    const [code, setCode] = useState();
    const newData = () => {
        return {
            serverType: serverType,
            server: server,
            authServer: authServer,
            commandName: commandName,
            code: code,
            actionName: '',
            actionType: 0,
            successCode: '',
        }
    }
    const close = useCallback(() => {
        handleClose(false);
    });

    const save = useCallback(() => {
        let data = {
            serverType: serverType,
            server: server,
            authServer: authServer,
            commandName: commandName,
            code: code,
            actionName: '',
            actionType: 0,
            successCode: '',
        }
        handleSave(data);
        close();
    });

    useEffect(() => {
        console.log("serverType=" + serverType + ", server=" + server + ", authServer=" + authServer);
    }, [newData]);

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Create new Data Hiding</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="row">
                    <Form.Group>
                        <Form.Label>Server Type:</Form.Label>
                        <Form.Select onChange={e => setServerType(e.target.value)}>
                            <option>Select Server Type</option>
                            <option value="1">VC</option>
                            <option value="2">OCS</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Server:</Form.Label>
                        <Form.Select onChange={e => setServer(e.target.value)}>
                            <option>Select Server</option>
                            <option value="112">Server 1</option>
                            <option value="232">Server 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Auth Server:</Form.Label>
                        <Form.Select onChange={e => setAuthServer(e.target.value)}>
                            <option>Select Auth Server</option>
                            <option value="22">Auth Server 1</option>
                            <option value="32">Auth Server 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Command Name:</Form.Label>
                        <Form.Control 
                            placeholder="Type Command Name"
                            onChange={e => setCommandName(e.target.value)}
                        />
                    </Form.Group>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={save}>Save</Button>
                <Button variant="secondary" className="mr-2" onClick={close}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DataHidingDetailForm;