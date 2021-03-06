const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) =>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setcustomerUserClaims(user.uid,{
            admin: true
        });
    }).then(()=>{
        return{
            message: `Success! ${data.email} is now an admin`
        }
    }).catch((error) =>{
        return error
    })
})
