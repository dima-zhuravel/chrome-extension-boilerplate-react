import React, { useState } from 'react';
import { Segment, Icon, Input, Button } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { generate, luhnChk } from '../../helpers/cardGenerator';

const CardGeneratorForm = () => {
    const [bin, setBin] = useState('47612013814753');
    const [length, setLength] = useState(16);
    const [cardNumber, setCardNumber] = useState('');
    const [copied, setIsCopied] = useState(false);

    const onClickHandler = () => {
        let isValid = false;
        let number = '';
        let counter = 0;
        const limit = 20;

        while (!isValid && counter < limit) {
            number = generate(bin, length);
            isValid = luhnChk(number);
            counter++;
        }

        setIsCopied(false);
        setCardNumber(isValid ? number : 'Cannot make valid card with given params');
    };

    const onCopyHandler = () => {
        setIsCopied(true);
    };

    return (
        <div className='card-gen__section'>
            <div className='card-gen__section--inner card-gen__section--input'>
                <Input
                    defaultValue={bin}
                    onChange={(e) => setBin(e.target.value)}
                    placeholder='BIN'
                    className='card-gen__input card-gen__number'
                    icon={<Icon name='credit card outline' />}
                />
                <Input
                    defaultValue={length.toString()}
                    onChange={(e) => setLength(parseInt(e.target.value, 10))}
                    placeholder='Card Length'
                    className='card-gen__input card-gen__digits'
                    icon={<Icon name='paw' />}
                />
                <Button onClick={onClickHandler} content='GENERATE' basic size='medium' />
            </div>
            {cardNumber && !copied && (
                <div className='card-gen__section--inner card-gen__section--output'>
                    <span className='card-gen__section--result'>{cardNumber}</span>

                    <CopyToClipboard text={cardNumber} onCopy={onCopyHandler}>
                        <Button icon className='card-gen__section--copy'>
                            <Icon name='copy' />
                        </Button>
                    </CopyToClipboard>
                </div>
            )}
        </div>
    );
};

export default CardGeneratorForm;
