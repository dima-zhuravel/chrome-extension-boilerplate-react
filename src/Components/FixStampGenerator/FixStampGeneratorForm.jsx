import React, { useEffect, useState } from 'react';
import { Dropdown, TextArea, Input, Button, Icon, Message } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { OPTIONS } from './constants';

const FixStampGeneratorForm = () => {
    const [formValues, setFormValues] = useState({
        whatWasDone: null,
        affectedAreas: null,
        levelOfImplementation: null,
        mergeRequestUrl: null
    });
    const [copied, setIsCopied] = useState(null);
    const [isValid, setIsValid] = useState(null);
    const [fixStamp, setFixStamp] = useState(false);
    const isCmsOnly = formValues.levelOfImplementation === 'cms';

    useEffect(() => {
        console.log('formValues', { formValues });
    }, [formValues]);

    const onChangeHandler = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name || 'levelOfImplementation']: target.value || target.innerText || ''
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
        const arrayOfAnswers = Object.entries(formValues);
        const isAllFieldsFilled = arrayOfAnswers.every(([key, value], _, arr) => {
            if (key === 'mergeRequestUrl' && arr[2][1] === 'cms') {
                return true;
            }

            return !!value;
        });
        setIsValid(isAllFieldsFilled);

        if (isAllFieldsFilled) {
            const mergeRequestValue = isCmsOnly ? '-' : `[GitLab|${formValues.mergeRequestUrl}]`;

            setFixStamp(`
                {panel:title=Fix stamp|borderColor=#828282|titleBGColor=#86bbd6|bgColor=#d7e8f0}
                    |*What was done:*|${formValues.whatWasDone}|
                    |*Affected areas:*|${formValues.affectedAreas}|
                    |*Level of implementation (Code/CMS/Custom js):*|${formValues.levelOfImplementation}|
                    |*Merge Request URL:*|${mergeRequestValue}|
                    |Merge to Branch|${isCmsOnly ? '-' : '[master]'}|
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
                    onChange={onChangeHandler}
                    name='levelOfImplementation'
                />
                {!isCmsOnly && (
                    <Input
                        className='common__form-item fix-stamp__item'
                        placeholder='Merge Request URL'
                        onBlur={onChangeHandler}
                        name='mergeRequestUrl'
                        icon={<Icon name='gitlab' />}
                    />
                )}
                <div className='fix-stamp__actions'>
                    <Button icon className='fix-stamp__button' content='Validate' onClick={onValidateHandler}>
                        <Icon name='clipboard check' />
                        <span className='fix-stamp__button--text'>VALIDATE</span>
                    </Button>
                    {isValid && !copied && (
                        <CopyToClipboard text={fixStamp} onCopy={onCopyHandler}>
                            <Button icon className='fix-stamp__button'>
                                <Icon name='copy' />
                                <span className='fix-stamp__button--text'>GENERATE TO CLIPBOARD</span>
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
