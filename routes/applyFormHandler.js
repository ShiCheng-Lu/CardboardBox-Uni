const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.cpv39.mongodb.net/cbu?retryWrites=true&w=majority"

var dbo;
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    dbo = db.db('cbu');
});

var applicant = new Object;

const formNamesHandler = (form, res) => {
    if (!form.firstName) {
        res = {
            success: false,
            message: "missing first name"
        }
        return;
    }
    if (!form.lastName) {
        res = {
            success: false,
            message: "missing last name"
        }
        return;
    }
    var age = parseInt(form.age);
    if (age < 16) {
        res = {
            success: false,
            message: "too young"
        }
        return;
    }
    applicant.firstName = form.firstName;
    applicant.middleName = form.middleName;
    applicant.lastName = form.lastName;
    applicant.age = form.age;

    res = {
        success: true,
        message: "success"
    }
}

const formFinalHandler = (form, res) => {
    applicant.chess = form.chess;
    applicant.drug = (form.drug != undefined);

    dbo.collection("applicants").insertOne(applicant);
    applicant = new Object;
    res = {
        success: true,
        message: "success"
    }
}

module.exports.names = formNamesHandler;
module.exports.final = formFinalHandler;
