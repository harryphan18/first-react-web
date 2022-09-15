import React, {useCallback, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ConfirmRemovePopup from '../../common/ConfirmRemove';
import DataHidingDetailForm from "./CreateDataHiding";

const CustHist = () => {
    const [queryFunc, setQueryFunc] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [showResetDialog, setShowResetDialog] = useState(false);
    const [showCreateDataHiding, setShowCreateDataHiding] = useState(false);
    const [newDataHiding, setNewDataHiding] = useState({});

    const handleSaveNewDataHidding = useCallback((data) => {
        setNewDataHiding(data);
        console.log("newDataHiding: serverType=" + data.serverType 
                + ", server=" + data.server 
                + ", authServer=" + data.authServer
                + ", commandName=" + data.commandName
                + ", code=" + data.code
                + ", actionName=" + data.actionName
            );
        console.log("newDataHiding=" + newDataHiding);
    });

    return (
        <div className="container">
            <h1>CustHist</h1>
            <div className="mb-4">
                <Form.Group>
                    <Form.Label>Query Func</Form.Label>
                    <Form.Control 
                        placeholder="Type Query Func"
                        onChange={e => setQueryFunc(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Control 
                        placeholder="Type Service Type"
                        onChange={e => setServiceType(e.target.value)}
                    />
                </Form.Group>
            </div>
            <div className="mb-4">
                <div>Query Condition:</div>
                <div>Query Func: {queryFunc}</div>
                <div>Service Type: {serviceType}</div>
            </div>
            <div className="mb-4">
                <Button variant="primary mr-2">Run Query</Button>
                <Button variant="secondary" onClick={setShowResetDialog}>Reset</Button>
                <Button variant="danger" onClick={setShowCreateDataHiding}>Create Data Hiding</Button>
            </div>

            <ConfirmRemovePopup
                show={showResetDialog}
                message="Are you sure to want to remove command?"
                handleClose={setShowResetDialog}
            />

            <DataHidingDetailForm
                show={showCreateDataHiding}
                handleSave={handleSaveNewDataHidding}
                handleClose={setShowCreateDataHiding}
            />
        </div>
    );    
}

export default CustHist;