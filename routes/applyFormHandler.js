const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.cpv39.mongodb.net/cbu?retryWrites=true&w=majority"

var dbo;
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    dbo = db.db('cbu');
});

var applicant = new Object;

const checkExists = (form, res, attr) => {
    if (!form[attr]) {
        res.success = false;
        res.message = `missing ${attr}`;
        return false;
    }
    return true;
}

const formNamesHandler = (form, res) => {
    if (!checkExists(form, res, 'firstName')) return;
    if (!checkExists(form, res, 'lastName')) return;
    if (!checkExists(form, res, 'age')) return;

    var age = parseInt(form.age);
    if (age < 16) {
        res.success = false;
        res.message = "too young bucko";
        return;
    }
    applicant.firstName = form.firstName;
    applicant.middleName = form.middleName;
    applicant.lastName = form.lastName;
    applicant.age = form.age;

    res.success = true;
    console.log('success');
}

const formFinalHandler = (form, res) => {
    applicant.chess = form.chess;
    applicant.drug = (form.drug != undefined);

    dbo.collection("applicants").insertOne(applicant);
    applicant = new Object;
    res.success = true;
}

module.exports.names = formNamesHandler;
module.exports.final = formFinalHandler;
