import React from 'react';

const CreditCard = ({ cardInfo }) => {
    const { person, expirationDate, cardNumber, bankName } = cardInfo;
    const { firstName, lastName }                          = person;
    const firstNumber                                      = cardNumber.split(" ")[0];
    return (
        <div>
            <p>{bankName}</p>
            <p>{cardNumber}</p>
            <p>{firstNumber}</p>
            <p><span>VALID THRU</span> {expirationDate}</p>
            <p>{firstName} {lastName}</p>
        </div>
    );
};

export default CreditCard;
