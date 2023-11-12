const express = require("express");
const fb = require("./firestore");
const fs = require("firebase-admin");
const serviceAccount = require("./catancontained2.json");
const app = express();
const port = 3000;

// fs.initializeApp({
//   credential: fs.credential.cert(serviceAccount),
// });

app.get("/", (req, res) => {
  const dummyData = {
    message: "Hello, World!",
    details: "This is a dummy JSON object.",
  };
  res.json(dummyData);
  const db = fs.firestore();
  const usersDb = db.collection("users");
  const liam = usersDb.doc("lragozzine" + new Date().toISOString());
  liam
    .set({
      first: "Liam",
      last: "Ragozzine",
      address: "133 5th St., San Francisco, CA",
      birthday: "05/13/1990",
      age: "30",
    }).then(() => console.log("saved"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
