"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: '123',
    name: 'RG',
    email: 'rxg@gmail.com',
    isActive: true,
    cardDetails: [{
            cardNo: '3245167312TRWRE',
            expiry: '24/07',
        }, {
            cardNo: '3245167312TRWRE',
            expiry: '24/07',
        }]
};
myUser.name = 'RxG';
if (myUser.cardDetails) {
    myUser.cardDetails[0].expiry = '24/05';
    // myUser.cardDetails[0].cardNo = '13452IUYI67899'
}
console.log(myUser);
