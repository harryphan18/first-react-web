import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const ServerInfoForm = () => {
    return (
        <>
            <Row className='mb-4'>
                <Col lg={4}>
                    <label>System Type:</label>
                    <Field name="systemType"
                        component="input"
                        type="text" 
                    />
                </Col>
                <Col lg={4}>
                    <label>Server name:</label>
                    <Field name="name" 
                        component="input"
                        type="text" 
                    />
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col lg={4}>
                    <label>Host:</label>
                    <Field name="host" 
                        component="input"
                        type="text" 
                    />
                </Col>
                <Col lg={4}>
                    <label>Username:</label>
                    <Field name="username" 
                        component="input"
                        type="text" 
                    />
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col lg={4}>
                    <label>Password:</label>
                    <Field name="password" 
                        component="input"
                        type="text" 
                    />
                </Col>
                <Col lg={4}>
                    <label>Tps:</label>
                    <Field name="tps" 
                        component="input"
                        type="text" 
                    />
                </Col>
            </Row>
        </>
    )
}

export default reduxForm({
    form: 'SERVER-INFO-FORM'
})(ServerInfoForm);