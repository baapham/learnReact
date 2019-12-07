import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     })

// let expense = {
//     description: "Rent",
//     note: "This is rent pay",
//     amount: 200,
//     createdAt: 0
// }

// database.ref("expenses").push(expense);

// expense = {
//     description: "water",
//     note: "This is water bill pay",
//     amount: 400,
//     createdAt: 0
// }

// database.ref("expenses").push(expense);

// expense = {
//     description: "Car",
//     note: "This is car pay",
//     amount: 100,
//     createdAt: 0
// }

// database.ref("expenses").push(expense);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// setTimeout(() => { 
//     database.ref().update({
//         name: "Andrew",
//         "job/title": "Data Scientist",
//         "job/company": "Google"
//     })
// }, 3000);
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("error with data fetching", e)
// })

// setTimeout(() => {
//     database.ref("age").set(28);
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//     database.ref("age").set(30);
// }, 10500)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("error fetching data ", e)
//     })

// database.ref().set({
//     name: 'Alex Pham',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Sydney",
//         country: "Australia"
//     }
// }).then(() => {
//     console.log("Data is saved")
// }).catch((error) => {
//     console.log(`This failed: ${error}`)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     "location/city": "Seattle"
// })

// database.ref("isSingle").remove().then(
//     console.log("removed isSIngle")
// )

// test
