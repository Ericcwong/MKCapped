const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp();

//Add admin to a specific user
exports.addAdminRole = functions.https.onCall((data, context) =>{
    //Get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        });
    }).then(()=>{
        return{
            message: `Sucesss, ${data.email} is an admin!`
        }
    }).catch(error => {
        return error
    })
})
