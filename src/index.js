import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreditCard from './components/CreditCard';

const cardInfo = {
    person        : {
        firstName: "CardHolder",
        lastName : "Name"
    },
    expirationDate: "08/19",
    cardNumber    : "1234 5678 8765 4321",
    bankName      : "Big Bank, Inc"
};

ReactDOM.render(<CreditCard cardInfo={cardInfo} />, document.getElementById('root'));
