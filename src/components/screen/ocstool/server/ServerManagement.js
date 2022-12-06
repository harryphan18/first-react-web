import React from 'react';
import PropTypes from 'prop-types';
import ServerInfoForm from "./ServerInfoForm";

const _ = require("lodash");

const ServerManagement = (props) => {
    const { handleSubmit } = props;

    const handleApply = (value) => {
        console.log("handleApply" + value);
    }

    return (
        <div className='server-management'>
            ServerManagement
            <ServerInfoForm
                onSubmit={_.noop}
            />
            <button onClick={handleSubmit(handleApply)}>Apply</button>
        </div>
    )
}

ServerManagement.propTypes = {
    handleSubmit: PropTypes.func,
}

export default ServerManagement;