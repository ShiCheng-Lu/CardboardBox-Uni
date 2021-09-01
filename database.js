var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.cpv39.mongodb.net/cbu?retryWrites=true&w=majority";
var courses = require('./routes/courses.json');


// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log('connected');
//     var dbo = db.db();
    
//     dbo.collection('courses').insertMany(courses, (err, res) => {
//         if (err) throw err;
//         db.close();
//     });
// });
