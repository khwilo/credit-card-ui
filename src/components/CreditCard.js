import React from 'react';

const CreditCard = ({ cardInfo }) => {
    const { person, expirationDate, cardNumber, bankName } = cardInfo;
    const { firstName, lastName }                          = person;
    const [firstNo, secondNo, thirdNo, fourthNo]           = cardNumber.split(" ");
    return (
        <div className="container">
            <div className="bankNameInfo">
                <p>{bankName}</p>
            </div>
            <div className="cardNumberInfo">
                <p>{firstNo}</p>
                <p>{secondNo}</p>
                <p>{thirdNo}</p>
                <p>{fourthNo}</p>
            </div>
            <div className="firstNumberInfo">
                <p>{firstNo}</p>
            </div>
            <div className="expirationDateInfo">
                <div className="dateLabel">
                    <p>valid</p>
                    <p>thru</p>
                </div>
                <div className="expirationDate">
                    <p>{expirationDate}</p>
                </div>
            </div>
            <div className="cardHolderNameInfo">
                <p>{firstName} {lastName}</p>
            </div>
        </div>
    );
};

export default CreditCard;
