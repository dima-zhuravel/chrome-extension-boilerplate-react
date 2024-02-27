import React, { useEffect, useState } from 'react';
import { Dropdown, TextArea, Input, Button, Icon, Message } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { OPTIONS } from './constants';

const FixStampGeneratorForm = () => {
    const [formValues, setFormValues] = useState({
        whatWasDone: null,
        affectedAreas: null,
        levelOfImplementation: 'code',
        mergeRequestUrl: null
    });
    const [copied, setIsCopied] = useState(null);
    const [isValid, setIsValid] = useState(null);
    const [fixStamp, setFixStamp] = useState(false);

    useEffect(() => {
        console.log('formValues', { formValues });
    }, [formValues]);

    const onChangeHandler = ({ target }) => {
        if (!target.name) {
            return null;
        }

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const onCopyHandler = () => {
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(null);
            setIsValid(null);
        }, 2000);
    };

    const onValidateHandler = () => {
        const arrayOfAnswers = Object.values(formValues);
        const isAllFieldsFilled = arrayOfAnswers.every((value) => !!value);
        setIsValid(isAllFieldsFilled);

        if (isAllFieldsFilled) {
            setFixStamp(`
                {panel:title=Fix stamp|borderColor=#828282|titleBGColor=#86bbd6|bgColor=#d7e8f0}
                    |*What was done:*|${formValues.whatWasDone}|
                    |*Affected areas:*|${formValues.affectedAreas}|
                    |*Level of implementation (Code/CMS/Custom js):*|${formValues.levelOfImplementation}|
                    |*Merge Request URL:*|[GitLab|${formValues.mergeRequestUrl}]|
                    |Merge to Branch|[master]|
                {panel}
            `);
        }
    };

    return (
        <div className='common__section fix-stamp__section'>
            <div className='common__section--inner fix-stamp__section--inner'>
                <TextArea
                    className='common__form-item fix-stamp__item textarea'
                    placeholder='What was done:'
                    onBlur={onChangeHandler}
                    name='whatWasDone'
                />
                <TextArea
                    className='common__form-item fix-stamp__item textarea'
                    placeholder='Affected areas:'
                    onBlur={onChangeHandler}
                    name='affectedAreas'
                />
                <Dropdown
                    className='common__form-item fix-stamp__item'
                    placeholder='Level of implementation'
                    fluid
                    selection
                    options={OPTIONS}
                    onBlur={onChangeHandler}
                    name='levelOfImplementation'
                />
                <Input
                    className='common__form-item fix-stamp__item'
                    placeholder='Merge Request URL'
                    onBlur={onChangeHandler}
                    name='mergeRequestUrl'
                />

                <div className='fix-stamp__actions'>
                    <Button icon className='fix-stamp__button' content='Validate' onClick={onValidateHandler}>
                        <Icon name='copy' />
                        <span class='fix-stamp__button--text'>Validate</span>
                    </Button>
                    {isValid && !copied && (
                        <CopyToClipboard text={fixStamp} onCopy={onCopyHandler}>
                            <Button icon className='fix-stamp__button'>
                                <Icon name='copy' />
                                <span class='fix-stamp__button--text'>Generate to Clipboard</span>
                            </Button>
                        </CopyToClipboard>
                    )}
                    {copied && <Message floating success content='Paste panel to jira comment!' />}
                    {isValid === false && <Message floating error content='Some field is empty!' />}
                </div>
            </div>
        </div>
    );
};

export default FixStampGeneratorForm;
