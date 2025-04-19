import React, { useEffect, useState } from 'react';

const FormField = (props) => {

    const [inputValue, setInputValue] = useState('');

    const formConfig = props.formConfig;

    useEffect(() => {

    }, );

    const handleFormField = (config) => {
        //switch //TODO complete it with correct logic
    }

    return (
        <form>
            {formConfig && formConfig.map((itemConfig) => {
                handleFormField(itemConfig);
            }

            )}
        </form>
    )

}