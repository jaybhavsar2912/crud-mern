const mongoose = require("mongoose");
const DB = `mongodb+srv://jbaglobaliasoft:Jay%4055233@cluster0.rmdkmyl.mongodb.net/CRUD?retryWrites=true&w=majority`;
const ConnectDB = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected Successfully!!!!!!"))
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = ConnectDB;
