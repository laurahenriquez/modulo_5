const mongoose = require("mongoose");

let User = require("./user.schema");
let Creedentials = require("./creedentials.schema");
let Profile = require("./profile.schema");

mongoose.connect("mongodb://localhost:27017/codenotch", {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

let userDocument = new User({
    login: "Laura",
    password: "987654321",
});

let profileDocument = new Profile({
  name: "Laura",
  surname: "Heriquez",
  dateOfBirth: "1992-11-13",
  comments: "Happy Laura",
  rol: "lhenriquez",
});

let creedentialsDocument = new Creedentials({
    address: "Avenida Bolivar",
    phone: "111222333",
    email: "test@test.com",
});

userDocument.save(checkRespuesta);
profileDocument.save(checkRespuesta);
creedentialsDocument.save(checkRespuesta);
function checkRespuesta(err, res) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Documento guardado correctamente");
  }
}
