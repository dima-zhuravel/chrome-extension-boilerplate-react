// Function to generate card number
export const generate = (bin, length) => {
    let cardNumber = bin;
    const randomNumberLength = length - (bin.length + 1);

    for (let i = 0; i < randomNumberLength; i++) {
        const digit = Math.floor(Math.random() * 9);
        cardNumber += digit;
    }

    const checkDigit = getCheckDigit(cardNumber);
    cardNumber += String(checkDigit);

    return cardNumber;
};

// Function to get check digit
export const getCheckDigit = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = parseInt(number.substring(i, i + 1));

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit = Math.floor(digit / 10) + (digit % 10);
            }
        }
        sum += digit;
    }

    const module = sum % 10;
    return module === 0 ? 0 : 10 - module;
};

// Luhn check function
export const luhnChk = ((arr) => (ccNum) => {
    let len = ccNum.length,
        bit = 1,
        sum = 0,
        val;

    while (len) {
        val = parseInt(ccNum.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
