const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.cpv39.mongodb.net/cbu?retryWrites=true&w=majority"

var dbo;
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    dbo = db.db('cbu');
});

const formNameHandler = (form, res) => {
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

}







module.exports.names = formNameHandler;
